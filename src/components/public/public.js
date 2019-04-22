import Vue from 'vue'
import axios from 'axios'
import { Loading } from 'element-ui'
import request from '../../utils/request.js'
var Api = {
    platform:'/platformUserService',
    portal:'/alphaPortalService',
    //platform:'http://localhost:8080/platformUserService',
    //portal:'http://localhost:8080/alphaPortalService',
    officialUrl:'http://autobuild.1357.cn',//上线要更新
    baseUrl:['http://autobuild.1357.cn/','http://spm.1357.cn/','http://autobuild.jiguantong.com/'],
    orgLevel:'',//所属组织层级
    focusOrg:'',//当前组织
    get,
    post,
    posth,
    incookie,
    gettoken,
    put,
    dele,
    treeData,
    getaddress,
    getPolicy,
    searhTree,
    uploadfile,
    userInfor,
    autoLogin,
    deepClone,
    showLoading,
    checkTreeData,
    findOrgTree
}
//top.Api = Api;
var token = '92d9e73400958483702fae6a388d7d03';//9660d73a79e09a5fdbc12afad5bf9b76
async function get(url,params,index){
  //axios.defaults.headers.common['token'] = gettoken("token");

    url = handUrl(url,index);
    return new Promise(function(resolve, reject) {
        let data = {
          method: "GET",
          url: url,
          params:params,
          headers: {
              'token': gettoken("token")
          }
        }
         // resolve(axios.get(url,params));
          resolve(axios(data));
      });

}
async function getnp(url,params,index){
  //axios.defaults.headers.common['token'] = gettoken("token");

    url = handUrl(url);
    return new Promise(function(resolve, reject) {
        let data = {
          method: "GET",
          url: url,
          params:params,
          headers: {
              'token': gettoken("token")
          }
        }
         // resolve(axios.get(url,params));
          resolve(axios(data));
      });

}
function backlogin(){
  let url = window.location.href;
  url = url.substr(0,url.indexOf('/#/'));
  window.location.href = url;
}
function post(url,params,index){

    url = handUrl(url,index);
    //console.log(url);
    let aa = new FormData();
    aa.set('token',gettoken("token"));
    //axios.defaults.headers.common['token'] = gettoken("token");
    return new Promise(function(resolve, reject) {

          resolve(axios.post(url,params));

      });

}
function posth(url,params,index){

  url = handUrl(url,index);
  // axios.defaults.headers.common['token'] = gettoken("token");
  return new Promise(function(resolve, reject) {
    let data = {
      method: "post",
      url: url,
      data:params,
      // headers: {
      //     'token':  gettoken("token")
      // }
    }
     resolve(axios(data));
    //   resolve(axios.post(url,{},{headers: {
    //     'token': gettoken("token")
    // }}));

    });

}
function put(url,params={},index){

    axios.defaults.headers.common['token'] = gettoken("token");
    url = handUrl(url);
    return new Promise(function(resolve, reject) {

          resolve(axios.put(url,params));

      });
}
function dele(url,params={},index){
    /*if(index){
      url = handUrl(url,index);
    }else{
      url = handUrl(url);
    }*/
    axios.defaults.headers.common['token'] = gettoken("token");
    url = handUrl(url);
    return new Promise(function(resolve, reject) {

          resolve(axios.delete(url,params));

      });
}
function handUrl(url,index){

  if(url.startsWith('http://')){
      return url;
    }else{
      let l ;
      if(index){
        l = Api.baseUrl[index] + url;
      }else{
        l = Api.baseUrl[0] + url;
      }
      return l;
    }
}
function gettoken(name){
    // var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    // if(arr=document.cookie.match(reg)){
    //     return unescape(arr[2]);
    // }else{
    //     return null;
    // }

    return sessionStorage.getItem(name);
    //return JSON.parse(localStorage.getItem(name));
}
function incookie(name,value,time){
    // var Days = time;
    // var exp = new Date();
    // exp.setTime(exp.getTime() + Days*24*60*60*1000);
    // document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    localStorage.setItem(name, JSON.stringify(value));
}



async function findOrgTree(){
  let userInfo = await userInfor();
  return get('/platformUserService/organization/switch_menu/').then(function(success){
    if(success.data && success.data.code && success.data.code == '200'){
        let data = deepClone(success.data.body);
        treeData = data.filter(obj=>(obj.id == userInfo.orgId));
        return searhTree(treeData,data);
    }else{
      return {message:'获取信息失败'};
    }

  },function(err){
    return {message:'获取信息失败'};
  })
}

async function treeData(isNot){
  let userInfo = await userInfor();
  let attendOrgList = [];
  //if (!isNot){
    attendOrgList = await findAttend();
  //}

  let treeData = [];
  return get('/platformUserService/organization/switch_menu/').then(function(success){

    if(success.data && success.data.code && success.data.code == '200'){

      if(isNot){
        let data = deepClone(success.data.body);
        data.push(...attendOrgList);
        return data;
      }else{
        let data = deepClone(success.data.body);
        treeData = data.filter(obj=>(obj.id == userInfo.orgId));

        treeData.push(...attendOrgList);
        return searhTree(treeData,data);
      }
    }else{
      return {message:'获取信息失败'};
    }

  },function(err){
    return {message:'获取信息失败'};
  })
}

/**
 * 获取该用户所参加的其他企业的项目信息
 * @returns {Promise<*>}
 */
async function findAttend() {
  let url = '/platformUserService/organization/joined';
  return get(url,{}).then(function(success){
    if(success.data && success.data.code && success.data.code == '200'){
      return success.data.body || [];
    }else{
      return {message:'获取信息失败'};
    }

  },function(err){
    return {message:'获取信息失败'};
  })
}


function searhTree(fdata,adata,sing){
  fdata.forEach(ele=>{
    let children = handTree(adata,'parentId',ele[sing]||ele['id']);
    if(children.length>0){
      ele.children = children;
      searhTree(ele.children,adata,sing);
    }
  });
  return fdata;
}
function handTree(arr,sign,id){
  return arr.filter(obj=>obj[sign] == id);
}

// 获取省市数据

 async function getprovince(){
  return get('/businessCommonService/provinces').then(function(success){
      //console.log(success);
        if(success.data && success.data.code && success.data.code == '200'){

          return success.data.body;

        }else{
          return {message:'获取省份信息失败'};
        }
        console.log('消息体内部',success);

    },function(err){

      return {message:err};

    })
 }
async function getcity(){
  return get('/businessCommonService/cities',{}).then(function(success){

        if(success.data && success.data.code && success.data.code == '200'){

          return success.data.body;

        }else{
          return {message:'获取市区信息失败'};
        }

    },function(err){

      return {message:'获取市区信息失败'};

    })
}
function findCity(parentId,data){
  let arr = [];
  data.forEach(obj=>{
    if(obj.province_id == parentId){
      obj.name = obj.city;
      arr.push(obj);
    }
  });
  return arr ;
}
async function getaddress(){
  //province
  let provinceData = await getprovince();
  let cityData = await getcity();
  provinceData.forEach(obj=>{
    obj.name = obj.province;
    obj.children = findCity(obj.id,cityData);
  });
  return provinceData;
}

// 云盘上传文件接口
async function getPolicy(ext) {
  return new Promise(function(resolve, reject) {
      resolve(axios.get('http://autobuild.jiguantong.com/alphaPortalService/cloud/policy',{ ext }));
  });
}

/**
     * uploadfile 上传
     */
async function uploadfile(file,callback,progressfn) {
      var _this = this;
      //参数  file ，
      //const file = document.getElementById('upload').files[0]
      let cloudFile = {};
      cloudFile.fileName = file.name;
      cloudFile.fileExt = file.type;
      //cloudFile.folderId = _this.folderId;///???
      cloudFile.fileSize = file.size +'';
      getPolicy(file.name).then(({data}) => {
        const fd = new FormData();
        const {accessid, host, policy, signature, dir, saveName} = data;

        fd.append('OSSAccessKeyId', accessid);
        fd.append('policy', policy);
        fd.append('signature', signature);
        fd.append('key', dir + saveName);
        fd.append('success_action_status', 200);
        fd.append('file', file, saveName);
        const xhr = new XMLHttpRequest();
        xhr.open('post', host, true);
        //控制进度条的
        xhr.upload.addEventListener('progress', (evt) => {
          let progress = Math.round((evt.loaded) * 100 / evt.total);
          progressfn && progressfn(progress);

        }, false)
        xhr.addEventListener('load', (e) => {
            if (e.target.status !== 200) {
                return
            }
            if (e.target.status === 200) {
            //cloudFile.fileUrl = host + '/' + dir + saveName

            //uploadSave(cloudFile).then((res) => {
                // queryCloudFolderInfoPage(this.parentId).then((res) => {
                //     this.folderList = res.body.rows
                // })
                // queryCloudFileInfoPage(this.folderId).then((res) => {
                //     if(res.code === 200){
                //     return this.fileList = res.body.rows;
                //     }
                // })
                //if(res.code === 200){

                  callback && callback('http://altadaye.com' + '/' + dir + saveName);
                //}
                //callback ,回显url
            //})
            //this.imgUrl = host + '/' + dir + saveName
            }
        }, false)
        xhr.send(fd)
      })
  }

async function userInfor(){
  //
  let userName = gettoken('user');
  return axios.get('http://autobuild.jiguantong.com/platformUserService/organization/user/'+userName+'/username').then(function(success){
        if(success.data && success.data.code && success.data.code == '200'){
          return success.data.body;

        }else{
          return {message:'获取人员信息失败'};
        }

    },function(err){

      return {message:'获取人员信息失败'};

    })
}

async function autoLogin(username,pwd,callback){
  //axios.defaults.headers.common['user'] = gettoken("userId");
  let data = {
    username:username,
    password:pwd
  };
  let that = this;
  axios.post('http://autobuild.jiguantong.com/alphaPortalService/user/token',data).then(function(success){
            if(success.data && success.data.code && success.data.code == '200'){
              incookie('token',success.data.body,7);
              incookie('user',username,7);
              back(callback);

            }else{
              console.warn('登录失败');
            }
        },function(err){
              console.warn('登录失败');
        })
  async function back(callback){
    let userInfo = await userInfor();
        let user = {
          userId:userInfo.userId
        };
        incookie('userId',JSON.stringify(user));
        callback && callback();
  }
}

function deepClone(data){
  let string = JSON.stringify(data);
  return JSON.parse(string);
}


function showLoading(loadText='Loading'){

  const options = {
    lock: true,
    text: loadText,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.55)'
  };
  let loadshow = Loading.service(options);
  return loadshow;
}

function checkTreeData(arr,key,value){``
  let list = {};
  for (let i=0; i<arr.length; i++){
    if(arr[i][key] == value){
      list = arr[i];
      break;
    }else{
      if(arr[i]['children']){
        list = checkTreeData(arr[i]['children'],key,value);
        if(list.id) {
          break;
        }
      }
    }
  }
  return list;
}



























export default Api;

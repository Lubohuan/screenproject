<template>
<div id="maincontainer">
  <div class="main" id="body">
    <section class="header_top flex_b">
      <div class="flex_b">
        <img src="../../assets/logo.png" style="height:25px;" />
        <div style="width:150px;color:hsla(185, 99%, 65%, 1);font-size:20px;text-align:center;font-weight:bold;">智慧工地V2.0</div>
        <div style="height:20px;width:1px;background-color:hsla(185, 99%, 65%, 1);margin-right:15px;"></div>
        <img src="../../assets/huazhu.png" style="height:20px;" />
      </div>
      <div class="flex_b">
        <img src="../../assets/left.png" style="height:4px;" />
        <span class="header_title">广州金控总部大楼项目驾驶舱</span>
        <img src="../../assets/right.png" style="height:4px;" />
      </div>
      <div class="flex_b">
        <img src="../../assets/timer.png" style="height:16px;margin-right:10px;" />
        <span style="font-size:16px;">2019/4/19 14:00:00</span>
        <span style="font-size:14px;margin:0 15px;">安全生产</span>
        <span class="timerday" style="font-size:18px;">2</span>
        <span class="timerday" style="font-size:18px;">0</span>
        <span class="timerday" style="font-size:18px;">3</span>
        <span style="font-size:14px;margin:0 10px;">天</span>
        <span class="timerday" style="font-size:18px;">1</span>
        <span class="timerday" style="font-size:18px;">0</span>
        <span style="font-size:14px;margin-left:10px;">小时</span>
        <img src="../../assets/position.png" style="height:20px;margin:0 15px;" />
        <span style="font-size:14px;">广州</span>
      </div>
    </section>
    <section class="header_tab flex_b">
      <div class="tabtext" style="position:relative;" :class="{'active':activeIndex == index}" v-for="(list,index) in tabData" :key="index" @click="tabChange(list,index)">
        <img src="../../assets/bgtext.png" class="bgtext"/>
        <span class="titletext">{{list.text}}</span>
        <ul v-show="index == 7&&showTab"  class="aiotTab">
          <li style="border-bottom:1px solid #283664" @click.stop="AiotTabChange('/aiotPage',index)">AIOT驾驶舱</li>
          <li style="border-bottom:1px solid #283664" @click.stop="AiotTabChange('/aiotEnvironment',index)">环境监测</li>
          <li style="border-bottom:1px solid #283664" @click.stop="AiotTabChange('/aiotPageContent',index)">塔机监测</li>
          <li @click.stop="AiotTabChange('/aiotPageMonitoring')">视频监控</li>
        </ul>

      </div>
     
    </section>
    <router-view style="height:calc(100% - 115px);width:100%;"/>
  </div>
</div>
</template>

<script>

export default {
  name: 'mainPage',
  data () {
    return {
      activeIndex:0,
      tabData:[
        {text:'指挥中心',path:'/'},
        {text:'人员管理',path:'/userManager'},
        {text:'机械管理',path:'/manageMachine'},
        {text:'物料管理',path:'/materialAcceptance'},
        {text:'生产进度',path:'/productionProgress'},
        {text:'质量管理',path:'/qualityManage'},
        {text:'现场安全',path:'/siteSafety'},
        {text:'AIOT',path:'/'},
        {text:'BIM应用',path:'/bimApply'}
      ],
      tabactive:0,
      showTab:false
    }
  },
  async created(){
    let that = this;
    window.addEventListener("resize", function (e) {
        that.suited();
    }, false);
    setTimeout(()=>{
      this.suited();
    },0);
  },
  methods:{
      tabChange(list,index){
        if(index == 7){
          if(this.showTab){
              this.showTab = false;
          }else{
            this.showTab = true;
          }
        this.activeIndex = index;
        }else{
        this.activeIndex = index;
        this.$router.replace(list.path);
        }
        
      },
      AiotTabChange(list,index){
          this.showTab = false;
          this.$router.replace(list);
      },
      suited(){
        let levelheight = 1080;
        let levelwidth = 1920;
        let ele = document.querySelector('#body');
        let width = document.body.clientWidth;
        let height = document.body.clientHeight;
        let rate =Math.min(height/levelheight,width/levelwidth);
        ele.style.transformOrigin = 'center top 0px';
        ele.style.transform = 'scale('+rate+')';
        let bosscon = document.querySelector('#maincontainer');
        if(height/levelheight <= width/levelwidth){
          bosscon.style.alignItems = 'normal';
          bosscon.style.justifyContent = 'center';
          ele.style.transformOrigin = 'center top 0px';
        }else{
          bosscon.style.alignItems = 'center';
          bosscon.style.justifyContent = 'normal';
          ele.style.transformOrigin = 'left center 0px';
        }
      },
  },
}
</script>
<style lang="scss" >
  @import "mainPage.scss";
  #maincontainer {
    .aiotTab {
      position:absolute;
      top:50px;
      width:100%;
      background:#1D284D;
      z-index:999;
      li:hover {
        color: #4cf0fe;
      }
    }
    .tabtext:nth-child(7):hover {
      .aiotTab {
        display: block;
      }
    }
  }
</style>

<template>
  <div style="height:100%;width:100%;">
    <div class="top_con flex_b">
      <div class="top_con_left">
        <div style="height:290px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5 style="padding-right: 18px;border-right: 1px solid rgba(255,255,255,.2)">最近7天趋势</h5>
              <div class="titleWord">
                <p style="margin-left: 13px;">隐患总数</p>
                <p>重大隐患</p>
                <p>隐患整改率 </p>
              </div>
            </div>
          </div>
          <div style="padding: 26px 13px 0 13px">
            <img src="../../../assets/sefe-one.png" alt="">
          </div>
        </div>
        <div style="height:313px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="bg padding10" style="padding-top:10px">
            <div id="goodsChart" style="width:100%;height:223px"></div>
          </div>
        </div>
        <div style="height:313px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>最近发布隐患动态</h5>
            </div>
          </div>
          <div class="table" id="myTable">
            <table cellpadding="0" cellspacing="0" style="border: none;">
              <tr>
                <th>吴艺昌（安全部）</th>
                <th>提交于 : 2019-04-24 10:11:22</th>
                <th>广州金控总部大楼项目</th>
              </tr>
              <tr>
                <th><span style="display: inline-block;width: 8px;height: 8px;border-radius: 50px;background:rgba(254,223,80,1);box-shadow:0px 0px 0px 4px rgba(254,223,80,0.1);margin-right: 10px"></span>违章</th>
                <th>文明施工</th>
                <th><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已整改</span></th>
              </tr>
              <tr>
                <th>吴艺昌（安全部）</th>
                <th>提交于 : 2019-04-25 16:23:36</th>
                <th>广州金控总部大楼项目</th>
              </tr>
              <tr>
                <th><span  style="display: inline-block;width: 8px;height: 8px;border-radius: 50px;background:rgba(252,12,89,1);box-shadow:0px 0px 0px 4px rgba(252,12,89,0.1);margin-right: 10px"></span>一般隐患</th>
                <th>施工用电</th>
                <th><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已整改</span></th>
              </tr>
              <tr>
                <th>吴艺昌（安全部）</th>
                <th>提交于 : 2019-04-23 11:15:22</th>
                <th>广州金控总部大楼项目</th>
              </tr>
              <tr>
                <th><span  style="display: inline-block;width: 8px;height: 8px;border-radius: 50px;background:rgba(252,12,89,1);box-shadow:0px 0px 0px 4px rgba(252,12,89,0.1);margin-right: 10px"></span>一般隐患</th>
                <th>文明施工</th>
                <th><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已整改</span></th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="top_con_middle">
        <div style="height:410px;width:100%;background-color:#1D284D;margin-bottom:10px;" class="middle_bg">
          <div class="bottom_ul">
            <ul>
              <li style="color:#FC0C59"><i class="i_red"></i>重大危险源 : 10个</li>
              <li style="color:#FEDF50"><i class="i_yellow"></i>危险作业: 10个</li>
              <li style="color:#FC0C59"><i class="i_red"></i>一级1个</li>
              <li style="color:#FEDF50"><i class="i_yellow"></i>二级3个</li>
              <li style="color:#4CF0FE"><i class="i_blue"></i>三级2个</li>
              <li style="color:#00F7BD"><i class="i_green"></i>四级1个</li>

            </ul>
<!--            <a href="javascript:0;">项目简介</a>-->
          </div>
          <!-- 摄像头 -->
          <div class="camera">
            <div class="camera_loc" style="top: 100px;left: 300px;" @click="openPic(0)">
              <img v-show="indexItem!=0" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==0" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==0" src="../../../assets/index/pic1.png" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
            </div>
            <div class="camera_loc" style="top: 280px;left: 130px;" @click="openPic(1)">
              <img v-show="indexItem!=1" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==1" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==1" src="../../../assets/index/pic1.png" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
            </div>
            <div class="camera_loc" style="top: 330px;left: 520px;" @click="openPic(2)">
              <img v-show="indexItem!=2" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==2" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==2" src="../../../assets/index/pic1.png" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
            </div>
            <div class="camera_loc" style="top: 160px;left: 560px;" @click="openPic(3)">
              <img v-show="indexItem!=3" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==3" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==3" src="../../../assets/index/pic1.png" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
            </div>
          </div>
          <!-- 隐患 -->
          <div class="hidden">
            <div class="hidden_loc" style="top: 265px;left: 278px;" @click="openhidden(0)">
              <div class="icon_hidden" style="top:0px;left:0px;background:#FEDF50"></div>
              <div v-show="hiddenIndexItem==0" class="alertHidden" style="left:-94px;bottom:5px;">
                <dl>
                  <dt><span>较大隐患</span><span>安全防护</span></dt>
                  <dd>斜撑梁局部防护缺失</dd>
                  <dd>整改责任人：张富立</dd>
                  <dd>复查人：陈力</dd>
                  <dd>整改期限：2019-05-01</dd>
                </dl>
              </div>
            </div>
            <div class="hidden_loc" style="top: 290px;left: 348px;" @click="openhidden(1)">
              <div class="icon_hidden" style="top:0px;left:0px;background:#FEDF50"></div>
              <div v-show="hiddenIndexItem==1" class="alertHidden" style="left:-94px;bottom:5px;">
                <dl>
                  <dt><span>较大隐患</span><span>安全防护</span></dt>
                  <dd>斜撑梁局部防护缺失</dd>
                  <dd>整改责任人：张富立</dd>
                  <dd>复查人：陈力</dd>
                  <dd>整改期限：2019-05-01</dd>
                </dl>
              </div>
            </div>
            <div class="hidden_loc" style="top: 220px;left: 410px;" @click="openhidden(2)">
              <div class="icon_hidden" style="top:0px;left:0px;background:#FEDF50"></div>
              <div v-show="hiddenIndexItem==2" class="alertHidden" style="left:-94px;bottom:5px;">
                <dl>
                  <dt><span>较大隐患</span><span>安全防护</span></dt>
                  <dd>斜撑梁局部防护缺失</dd>
                  <dd>整改责任人：张富立</dd>
                  <dd>复查人：陈力</dd>
                  <dd>整改期限：2019-05-01</dd>
                </dl>
              </div>
            </div>

            <div class="hidden_loc" style="top: 150px;left: 470px;" @click="openhidden(3)">
              <div class="icon_hidden" style="top:0px;left:0px;background:#00F7BD"></div>
              <div v-show="hiddenIndexItem==3" class="alertHidden" style="left:-94px;bottom:5px;">
                <dl>
                  <dt><span>较大隐患</span><span>安全防护</span></dt>
                  <dd>斜撑梁局部防护缺失</dd>
                  <dd>整改责任人：张富立</dd>
                  <dd>复查人：陈力</dd>
                  <dd>整改期限：2019-05-01</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div style="height:516px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>危险作业统计</h5>
            </div>
            <div class="timeSelect">
              <p>本周</p>
              <p>本月</p>
            </div>
          </div>
          <div class="top_con_middle_content" style="display: flex;padding: 30px">
            <div class="top_con_middle_content_left" style="display: flex">
              <div class="cir_time" style="margin:20px 20px 0 30px;">
                <el-progress type="circle" :percentage="25" color="#00F29F"></el-progress>
                <div class="time_size">60%</div>
              </div>
              <div class="top_con_middle_content_word">
                <p><span class="yi"></span> 已验收</p>
                <p><span class="er"></span> 待验收</p>
              </div>
            </div>
            <div class="top_con_middle_content_right" style="flex: 1">
              <div id="echart-pie" style="width:100%;height:100%"></div>
            </div>
          </div>
          <div class="table" style="margin-top: 20px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>验收类型</th>
                  <th >设备名称</th>
                  <th>验收状态</th>
                  <th>验收人</th>
                </tr>
              </thead>
              <tr>
                <td>安全管理</td>
                <td><span>切割机</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>刘鹏</td>
              </tr>
              <tr>
                <td>安全管理</td>
                <td><span>电焊机</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>刘鹏</td>
              </tr>
              <tr>
                <td>安全管理</td>
                <td><span>水泵</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>刘鹏</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="top_con_right">
        <div style="height:290px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>安全概况</h5>
            </div>
          </div>
          <div class="table" id="myTable1">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: auto;">
              <tr>
                <td>重大危险源</td>
                <td>重大危险源预警</td>
                <td></td>
                <td>进场人数</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">9</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">0</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">37</span>人</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px"></span></td>
              </tr>
              <tr>
                <td>超期隐患</td>
                <td>未销重大隐患</td>
                <td>隐患预警</td>
                <td>进行安全教育</td>
                <td>参加安全教育</td>
                <td>教育率</td>
              </tr>
              <tr>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">0</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">0</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">0</span>个</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">4</span>次</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">110</span>人</td>
                <td><span style="font-size: 24px;color: #76D0DF;margin-right: 5px">100%</span></td>
              </tr>
              <tr>
                <td>危大工程</td>
                <td></td>
                <td></td>
                <td>进行班前教育</td>
                <td>参加班前教育</td>
                <td>教育率</td>
              </tr>
              <tr>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">9</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">0</span>次</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">0</span>人</td>
                <td><span style="font-size: 24px;color: #76D0DF;margin-right: 5px">0%</span></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="safeContent" style="height:313px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>危险源执行情况</h5>
            </div>
            <div class="timeSelect">
              <p>本周</p>
              <p>本月</p>
            </div>
          </div>
          <div class="table" style="margin-top: 55px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>危险源名称</th>
                  <th>等级</th>
                  <th>责任人</th>
                  <th>状态</th>
                  <th>已监管次数</th>
                  <th>需监管次数</th>
                </tr>
              </thead>
              <tr>
                <td>深基坑</td>
                <td>一级</td>
                <td>孙宗瑞</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">未开始</span></td>
                <td>57</td>
                <td><span style="color: #FC0C59;">120</span></td>
              </tr>
              <tr>
                <td>危险源2</td>
                <td>二级</td>
                <td>杨磊</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #4CBDFE;background: rgba(76,189,254,.2);font-size: 10px">通过中</span></td>
                <td>2</td>
                <td><span style="color: #FC0C59;">10</span></td>
              </tr>
              <tr>
                <td>危险源3</td>
                <td>三级</td>
                <td>杨磊</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已通过</span></td>
                <td>2</td>
                <td>16</td>
              </tr>
              <tr>
                <td>危险源1</td>
                <td>一级</td>
                <td>杨磊</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">未开始</span></td>
                <td>2</td>
                <td>4</td>
              </tr>
            </table>
          </div>
        </div>
        <div style="height:313px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>危险作业统计</h5>
            </div>
            <div class="timeSelect">
              <p>本周</p>
              <p>本月</p>
            </div>
          </div>
          <div class="safeData">
            <h5>检查率 : <span>100%</span> <img src="../../../assets/safe-sjt.png" width="6" height="10" alt=""></h5>
            <h5>检查率 : <span>100%</span> <img src="../../../assets/safe-xjt.png" width="6" height="10" alt=""></h5>
          </div>
          <div class="table" >
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>作业类型</th>
                  <th colspan="2">状态</th>
                  <th>责任人</th>
                  <th>监管人</th>
                </tr>
              </thead>
              <tr>
                <td>动火作业</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(254,223,80,.2);font-size: 10px">已验收</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">已检查</span></td>
                <td>刘鹏</td>
                <td>刘鹏</td>
              </tr>
              <tr>
                <td>吊装作业</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">已检查</span></td>
                <td>刘鹏</td>
                <td>刘鹏</td>
              </tr>
              <tr>
                <td>设备检维修作业</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">已检查</span></td>
                <td>刘鹏</td>
                <td>刘志强</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'siteSafety',
  data () {
    return {
      camera:'',
      indexItem:-1,
      hiddenIndexItem:-1
    }
  },
  methods: {
    openPic(index){
        if(this.indexItem == index){
            this.indexItem = -1;
        }else{
            this.indexItem = index;
        }
    },
    openhidden(index){
        if(this.hiddenIndexItem == index){
            this.hiddenIndexItem = -1;
        }else{
            this.hiddenIndexItem = index;
        }
    },
    drawPie () {
      var myChart = this.$echarts.init(document.getElementById("echart-pie"));

      var data = [
        { value: 40, name: "已通过", color0: "#FF687D", color1: "#FC0C59" },
        { value: 20, name: "通过中", color0: "#FCDE54", color1: "#F7BA2A" },
        { value: 15, name: "未开始", color0: "#15E09B", color1: "#1DBD6B" },
        {
          value: 10,name: "预警",color0: "rgba(13,138,212,1)",color1: "rgba(60,181,251,1)"
        }
      ];

      // 计算总数
      var total = data.map(v => v.value).reduce((o, n) => o + n);

      // 计算每一个data的其实角度和末了角度 θ1和θ2
      data.reduce((o, v) => {
        v.theta1 = o;
        v.theta2 = o + v.value / total;
        return v.theta2;
      }, 0);
      // 添加渐变
      data.forEach((v, i) => {
        var ops = calc(v.theta1 * 2 * Math.PI, v.theta2 * 2 * Math.PI);
        if (v.value)
          v.itemStyle = {
            color: {
              type: "radial",
              x: ops.center[0],
              y: ops.center[1],
              r: ops.radius,
              colorStops: [
                {
                  offset: 0,
                  color: v.color0
                },
                {
                  offset: 0.5,
                  color: v.color0
                },
                {
                  offset: 0.3,
                  color: v.color1
                },
                {
                  offset: 1,
                  color: v.color1
                }
              ]
              // globalCoord: false // 缺省为 false
            }
          };
        v.label = {
          normal: {
            show: true,
            formatter: "{b}\n\n{d}%",
            textStyle: {
              fontSize: 12,
              color: v.color1
            },
            position: "outside"
          },
          emphasis: {
            show: true
          }
        };
      });

      // 计算渐变中心以及渐变半径
      function calc(theta1, theta2) {
        var r = 0.5; // 半径是0.5 其实表示0.5个直径
        var inner = 0.6; // 里面镂空部分占60%  option中radius为[33%, 55%]  55 * 0.6 == 33

        var cos = Math.cos;
        var sin = Math.sin;
        var PI = Math.PI;
        var min = Math.min;
        var max = Math.max;

        var bottom = 0;
        var left = 2 * r;
        var right = 0;

        // y0: θ1对应的外部点的y值
        // y1: θ2对应的外部点的y值
        // _y0: θ1对应的内部点的y值
        // _y1: θ2对应的内部点的y值
        // x0: θ1对应的外部点的x值
        // x1: θ2对应的外部点的x值
        // _x0: θ1对应的内部点的x值
        // _x1: θ2对应的内部点的x值
        var y0 = r * (1 - cos(theta1));
        var y1 = r * (1 - cos(theta2));

        var _y0 = r * (1 - inner * cos(theta1));
        var _y1 = r * (1 - inner * cos(theta2));

        // 如果这个弧经过θ == PI的点  则bottom = 2PI
        // bottom用于之后的max计算中
        if (theta1 < PI && theta2 > PI) {
          bottom = 2 * r;
        }
        // 计算这几个点的最大最小值
        var ymin = min(_y0, _y1, y0, y1);
        var ymax = max(_y0, _y1, y0, y1, bottom);

        var x0 = r * (1 + sin(theta1));
        var x1 = r * (1 + sin(theta2));

        var _x0 = r * (1 + inner * sin(theta1));
        var _x1 = r * (1 + inner * sin(theta2));

        // 如果这个弧经过θ == PI / 2的点  则right = 2PI
        if (theta1 < PI / 2 && theta2 > PI / 2) {
          right = 2 * r;
        }
        // 如果这个弧经过θ == PI / 2 * 3的点  则left = 0
        if (theta1 < (PI / 2) * 3 && theta2 > (PI / 2) * 3) {
          left = 0;
        }
        var xmin = min(_x0, _x1, x0, x1, left);
        var xmax = max(_x0, _x1, x1, x0, right);

        return {
          // 计算圆心以及半径
          center: [(r - xmin) / (xmax - xmin), (r - ymin) / (ymax - ymin)],
          radius: r / min(xmax - xmin, ymax - ymin)
        };
      }

      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "75%",
          y: "25%",
          itemWidth: 14,
          itemHeight: 14,
          align: "left",
          data: ["已通过", "通过中", "未开始", "预警"],
          textStyle: {
            color: "#fff"
          }
        },

        series: [
          {
            name: "质量问题",
            type: "pie",
            radius: ["45%", "70%"],
            center: ["35%", "50%"],
            data: data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(255, 255, 255,1)"
              }
            }
            // animation: false
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    goodsChart (){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('goodsChart'))
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#1D284D',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['重大隐患', '隐患统计'],
          align: 'left',
          left: 10,
          textStyle: {
            color: "#fff"
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 35
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['工区一',
            '工区二',
            '工区三',
            'AA隧道',
            'BB隧道'
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: "#063374",
              width: 1,
              type: "solid"
            }
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#00c7ff",
            }
          },
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            },
          },
          splitLine: {
            lineStyle: {
              color: "#063374",
            }
          }
        }],
        series: [{
          name: '重大隐患',
          type: 'bar',
          data: [5, 10, 8, 4, 2],
          barWidth: 10, //柱子宽度
          barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 1,
                color: '#3db0fe'
              }, {
                offset: 0,
                color: '#0a81d4'
              }]),
              opacity: 1,
            }
          }
        }, {
          name: '隐患统计',
          type: 'bar',
          data: [50, 70, 60, 61, 75, 87],
          barWidth: 10,
          barGap: 1,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 1,
                color: '#4af0fc'
              }, {
                offset: 0,
                color: '#03f2a3'
              }]),
              opacity: 1,
            }
          }
        }]
      })
    },
  },
  mounted () {
    this.drawPie()
    this.goodsChart()
  },
  beforeDestroy () {
    clearInterval(this.intervalTimer)
  }
}
</script>
<style lang="scss" scoped>
  @import '../homePage/homePage.scss';
</style>
<style lang="scss" scoped>
  @import './siteSafety';
  .cir_time {
    position: relative;
    .time_size {
      position: absolute;
      top: 13px;
      left: 13px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      background-color: rgba(45,241,215,0.6);
      color: #fff;
    }
    .time_size1 {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      line-height: 50px;
      background-color: #1D284D;
      color: #4CF0FE;
    }
    .text_loc  {
      position: absolute;
      top: 55px;
      width: 100%;
      background-color: #1D284D;
    }
  }
  .top_con_middle_content_word{
    padding: 34px;
    p {
      font-size: 12px;
      color: #FFFFFF;
      width: 60px;
    }
    span{
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .yi{
      background:linear-gradient(180deg,rgba(176,249,255,1) 0%,rgba(76,240,254,1) 100%)
    }
    .er{
      background:rgba(94,100,121,1)
    }
  }
  .middle_bg {
    position: relative;
    background: #000 url('../../../assets/bg_img.jpg');
    background-size: 100%;
    .top_ul {
      height: 40px;
      ul {
        li {
          float: left;
          width:100px;
          height:40px;
          background:rgba(23,28,51,0.3);
          text-align: center;
          color: #4CF0FE;
          margin-right: 2px;
        }
      }
    }
    .middle_ul {
      position: absolute;
      left: 0;
      top: 80px;
      ul {
        li {
          width:100px;
          height:40px;
          background:rgba(23,28,51,0.3);
          text-align: center;
          color: #4CF0FE;
          margin-bottom: 2px;
        }
      }
    }
    .bottom_ul {
      position: absolute;
      bottom: 0px;
      left: 0;
      line-height: 50px;
      width: 100%;
      background:rgba(23,28,51,0.56);
      ul {
        float: left;
        li {
          float: left;
          height:50px;
          text-align: center;
          color: #4CF0FE;
          margin: 0 10px 0 10px;
        }
      }
      a {
        float: right;
        color: #4CF0FE;
        margin-right: 15px;
      }
    }
    .camera {
      .camera_loc {
        position: absolute;
        cursor: pointer;
        img {
          position: absolute;
        }
      }
    }
    .hidden {
      .hidden_loc {
        position: absolute;
        cursor: pointer;
        .icon_hidden {
          position: absolute;
          width: 17px;
          height: 17px;
          border-radius: 50%;
        }
        .alertHidden {
          position: absolute;
          width: 203px;
          height: 125px;
          background: transparent url('../../../assets/index/alert_bg.png');
          padding: 5px 20px;
          box-sizing: border-box;
          font-size: 12px;
          line-height: 22px;
          color: #DFFAFF;
          dt {
            color: #FEDF50;
          }
        }
      }
    }
  }
  .i_blue{
    display: inline-block;
    width: 8px;
    height: 8px;
    background:rgba(76,240,254,1);
    box-shadow:0px 0px 0px 4px rgba(76,240,254,0.19);
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 4px;
  }
</style>

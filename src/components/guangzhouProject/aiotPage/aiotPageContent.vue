<template>
  <div style="height:100%;width:100%;" class="aiot_page_content">
    <div class="top_con flex_b">
      <div class="top_con_left">
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
            <div class="top_con_right_title">
                <div class="title_left">
                <img src="../../../assets/safe-time.png" alt="">
                <h5>AI预警中心</h5>
                </div>
            </div>
            <div class="bg padding10 bg_h">
                <div style="border-bottom:1px solid rgba(46,73,112,1);height:58px">
                    <p class="font12"  style="line-height:30px;padding-left:10px;">累计预警 <span style="font-size:24px;" class="color_yellow">15</span> 次 &nbsp;&nbsp;&nbsp;&nbsp;今日 <span style="font-size:24px;" class="color_yellow">1</span> 次</p>
                </div>
                <div style="padding:20px" class="warning">
                    <table class="font12"  width="100%">
                        <tr >
                            <td class="center" ><img src="../../../assets/index/warning3.png" alt="" width="18"> </td>
                            <td class="center btn_Style btn_Style_c">一级预警</td>
                            <td class="center">14:20</td>
                            <td class="center">高温预警，室外作业不宜超过6小…</td>
                        </tr>
                        <tr >
                            <td class="center" ><img src="../../../assets/index/warning1.png" alt="" width="18"> </td>
                            <td class="center btn_Style btn_Style_a">二级预警</td>
                            <td class="center">14:20</td>
                            <td class="center">高温预警，室外作业不宜超过6小…</td>
                        </tr>
                        <tr >
                            <td class="center" ><img src="../../../assets/index/warning2.png" alt="" width="18"> </td>
                            <td class="center btn_Style btn_Style_b">三级预警</td>
                            <td class="center">14:20</td>
                            <td class="center">高温预警，室外作业不宜超过6小…</td>
                        </tr>
                        <tr >
                            <td class="center" ><img src="../../../assets/index/warning3.png" alt="" width="18"> </td>
                            <td class="center btn_Style btn_Style_c">一级预警</td>
                            <td class="center">14:20</td>
                            <td class="center">高温预警，室外作业不宜超过6小…</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="top_con_right_hll_one" style="height:620px;width:100%;background-color:#1D284D;margin-bottom:10px;">
            <div class="top_con_right_title">
                <div class="title_left">
                <img src="../../../assets/safe-time.png" alt="">
                    <h5>驾驶员信息</h5>
                </div>
                <div class="font12 float_r color_blue">总人数: <span style="font-size:24px">5</span></div>

            </div>
            <div class="bg padding10 bg_h font12">
                <ul>
                    <li v-for="(item,index) in 5" :key="index" style="width:calc(100% - 60px);height:108px;border-bottom:1px solid rgba(46,73,112,0.5);margin:0 30px;">
                        <div style="width:90px;" class="float_l"><img src="../../../assets/index/pic1.png" alt="" width="60" height="60" style="margin-top:20px"></div>
                        <div style="width:calc(100% - 90px)" class="float_l">
                            <div><span>张三</span><span class="float_r color_blue">1#塔机</span></div>
                            <div style="color:#FFFEFF;"><span style="margin-right:34px;">特种作业证</span ><span class="btn_Style btn_Style_d" style="margin-right:44px;">已录入</span><span class="btn_Style btn_Style_d">已验证</span></div>
                            <div style="color:#8EA6D7;display:flex;"><span style="flex:1">安全教育</span><span style="flex:1">32学时</span><span style="flex:1">安全技术交底</span><span style="flex:1">11次</span></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <div class="top_con_middle">
        <div style="height:620px;width:100%;background-color:#1D284D;margin-bottom:10px;position:relative;">
            <div style="position:absolute;top:0;left:0;">
                       <ul>
                           <li style="float:left;
                        width:100px;
                        height:40px;
                        background:rgba(23,28,51,0.3);
                        text-align: center;
                        color: #4CF0FE;
                        margin-right: 2px;">塔机视频</li>
                           <li style="float:left;float: left;
                        width:100px;
                        height:40px;
                        background:rgba(23,28,51,0.3);
                        text-align: center;
                        color: #4CF0FE;
                        margin-right: 2px;">塔机布防图</li>
                           <li style="float:left;float: left;
                        width:100px;
                        height:40px;
                        background:rgba(23,28,51,0.3);
                        text-align: center;
                        color: #4CF0FE;
                        margin-right: 2px;">航拍图</li>
                       </ul>
                   </div>
          <img src="../../../assets/Aiot-middle.png" width="100%" height="620" alt="">
        </div>
        <div style="height:305px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>塔机信息一览表</h5>
            </div>
          </div>
          <div class="table" style="padding-top: 20px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
              <tr>
                <th>监测点编号</th>
                <th>塔机类型</th>
                <th >租赁单位</th>
                <th>累计运行时长</th>
                <th >累计故障停机时长</th>
                <th >当前驾驶员</th>
              </tr>
              </thead>
              <tr style="line-height:68px">
                <td>1#</td>
                <td>平台塔</td>
                <td>广州智博特种设备租赁</td>
                <td>3688小时</td>
                <td>14小时</td>
                <td>张三</td>
              </tr>
              <tr style="line-height:68px">
                <td>1#</td>
                <td>平台塔</td>
                <td>广州智博特种设备租赁</td>
                <td>3688小时</td>
                <td>14小时</td>
                <td>张三</td>
              </tr>
              <tr style="line-height:68px">
                <td>1#</td>
                <td>平台塔</td>
                <td>广州智博特种设备租赁</td>
                <td>3688小时</td>
                <td>14小时</td>
                <td>张三</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="top_con_right top_con_right_hll">
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>3#塔机盲区可视化</h5>
            </div>
          </div>
          <div class="">
              <img src="../../../assets/video/video5.png" alt="" width="100%" height="265">
          </div>
        </div>
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>5#塔机盲区可视化</h5>
            </div>
          </div>
          <div class="">
              <img src="../../../assets/video/video6.png" alt="" width="100%" height="265">
          </div>
        </div>
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>4#塔机盲区可视化</h5>
            </div>
          </div>
          <div class="">
              <img src="../../../assets/video/video7.png" alt="" width="100%" height="265">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'aiotPage',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  @import "../homePage/homePage.scss";
  @import "../siteSafety/siteSafety";
  @import "./aiotPage";
</style>
<style lang="scss" scoped>
.aiot_page_content{
  .color_red {
      color: rgba(252,12,89,1);
  }
  .color_yellow {
      color: rgba(254,223,80,1);
  }
  .color_blue {
      color: rgba(76,240,254,1);
  }
  .font12 {
      font-size: 12px;
  }
  .center {
      text-align: center;
  }
  .btn_Style {
        display: inline-block;
        text-align: center;
        width: 52px;
        height: 19px;
        line-height:19px;
        margin-left: 10px;
    }
    .btn_Style_a {
        color:#FEDF50;
        background-color: rgba(254,223,80,0.2);
    }
    .btn_Style_b {
        color:#4CBDFE;
        background-color: rgba(76,189,254,0.2);
    }
    .btn_Style_c {
        color:#FC0C59;
        background-color: rgba(252,12,89,0.2);
    }
    .btn_Style_d {
        color:#4CF0FE;
        background-color: rgba(76,240,254,0.2);
    }
    .float_l {
        float: left;
    }
    .float_r {
        float: right;
    }

    .warning {
        table {
            td {
                line-height: 20px;
            }
        }
    }
}
</style>

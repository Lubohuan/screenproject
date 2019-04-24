<template>
  <div style="height:100%;width:100%;">
    <div class="top_con flex_b">
      <div class="top_con_left">
        <div style="height:305px;width:100%;background-color:#fff;margin-bottom:10px;"></div>
        <div style="height:305px;width:100%;background-color:#fff;margin-bottom:10px;"></div>
        <div style="height:305px;width:100%;background-color:#fff;"></div>
      </div>
      <div class="top_con_middle">
        <div style="height:620px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <img src="../../../assets/Aiot-middle.png" width="100%" height="620" alt="">
        </div>
        <div style="height:305px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>物资收量偏差分析</h5>
            </div>
            <div class="timeSelect" id="timeSelect">
              <p>地下水位</p>
              <p>土深水平</p>
              <p>边坡竖向</p>
              <p>边坡水平</p>
              <p>地标竖向</p>
              <p>建筑竖向</p>
            </div>
          </div>
          <div class="table" style="padding-top: 20px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
              <tr>
                <th>监测点编号</th>
                <th>深度（m）</th>
                <th >初始值（m）</th>
                <th>上次累计变量（mm）</th>
                <th >本次变化（m）</th>
                <th >本次累计变化（m）</th>
                <th>变化速率（mm/d）</th>
              </tr>
              </thead>
              <tr>
                <td>To1</td>
                <td>0.5</td>
                <td>187</td>
                <td>-0.15</td>
                <td>0.29</td>
                <td>0.14</td>
                <td><span style="color: #FEDF50">0.15</span></td>
              </tr>
              <tr>
                <td>抗震螺纹钢</td>
                <td>HRB400ESO</td>
                <td>300</td>
                <td>120</td>
                <td><span style="color: #00F7BD">180</span></td>
              </tr>
              <tr>
                <td>抗震螺纹钢</td>
                <td>HRB400ESO</td>
                <td>300</td>
                <td>120</td>
                <td><span style="color: #00F7BD">180</span></td>
              </tr>
              <tr>
                <td>抗震螺纹钢</td>
                <td>HRB400ESO</td>
                <td>300</td>
                <td>120</td>
                <td><span style="color: #00F7BD">180</span></td>
              </tr>
              <tr>
                <td>抗震螺纹钢</td>
                <td>HRB400ESO</td>
                <td>300</td>
                <td>120</td>
                <td><span style="color: #00F7BD">180</span></td>
              </tr>
              <tr>
                <td>抗震螺纹钢</td>
                <td>HRB400ESO</td>
                <td>300</td>
                <td>120</td>
                <td><span style="color: #00F7BD">180</span></td>
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
              <h5>环境监测</h5>
            </div>
          </div>
          <div class="bg padding10 bg_h" style="margin-top: 30px">
            <div style="height:125px;width:202px;float:left;border-right:1px solid rgba(255,255,255,0.1);display:flex; flex-direction: column;">
              <div class="flex1 flex text_center" style="justify-content: space-around;">
                <div class="flex1"><img src="../../../assets/index/cloudy.png" alt="" width="58px" height="58px"></div>
                <div class="flex1" style="font-size:18px;padding-top: 16px;"><span style="font-size:36px;">10</span>℃</div>
                <div class="flex1" style="color:#FEDF50;font-size:16px;padding-top: 22px;">多云</div>
              </div>
              <div class="flex1 flex"  style="flex-direction:column;">
                <div class="flex">
                  <div class="flex1 font12"><img src="../../../assets/index/wind.png" alt=""> 南风2级 </div>
                  <div class="flex1 font12"><img src="../../../assets/index/temperature.png" alt=""> 12℃ </div>
                  <div class="flex1 font12"><img src="../../../assets/index/rainfall.png" alt=""> 67% </div>
                </div>
                <div class="flex">
                  <div class="flex1 font12"><img src="../../../assets/index/pm25.png" alt=""> 35 </div>
                  <div class="flex1 font12"><img src="../../../assets/index/pm10.png" alt=""> 78 </div>
                  <div class="flex1 font12"><img src="../../../assets/index/noise.png" alt=""> 45dB </div>
                </div>
              </div>
            </div>
            <div style="height:125px;width:202px;float:left;border-right:1px solid rgba(255,255,255,0.1);display:flex; flex-direction: column;">
              <div class="flex1 flex">
                <div class="flex1 text_center">
                  <p class="font12">明天</p>
                  <img src="../../../assets/index/sunny.png" alt="" width="34px">
                </div>
                <div class="flex1 text_center">
                  <p class="font12">后天</p>
                  <img src="../../../assets/index/rain.png" alt="" width="34px">
                </div>
                <div class="flex1 text_center">
                  <p class="font12">大后天</p>
                  <img src="../../../assets/index/cloudy.png" alt="" width="34px">
                </div>
              </div>
              <div class="flex1 flex">
                <div class="flex1 text_center">
                  <p style="font-size:14px;margin:8px 0"><span class="font28">10</span>℃</p>
                  <p class="font12" style="color:#FEDF50;padding-top:5px;">晴</p>
                </div>
                <div class="flex1 text_center">
                  <p style="font-size:14px;margin:8px 0"><span class="font28">14</span>℃</p>
                  <p class="font12" style="color:#FEDF50;padding-top:5px;">雨 <img src="../../../assets/index/warning.png" alt="" width="20px"></p>
                </div>
                <div class="flex1 text_center">
                  <p style="font-size:14px;margin:8px 0"><span class="font28">8</span>℃</p>
                  <p class="font12" style="color:#FEDF50;padding-top:5px;">多云</p>
                </div>
              </div>
            </div>
            <div style="height:125px;width:114px;float:left;">
              <div style="height:26px;">
                <div class="font12 text_center" style="line-height:26px;">晴雨表</div>
              </div>
              <div class="flex"  style="flex-direction:column;line-height:22px;">
                <div class="flex1 flex">
                  <div class="flex1 text_center" style="line-height:25px;">
                    <span class="blank_cir cir"></span>
                    <p>18</p>
                  </div>
                  <div class="flex1 text_center" >
                    <span class="blue_cir cir"></span>
                    <p>19</p>
                  </div>
                </div>
                <div class="flex1 flex">
                  <div class="flex1 text_center" >
                    <span class="blue_cir cir"></span>
                    <p>20</p>
                  </div>
                  <div class="flex1 text_center" >
                    <span class="red_cir cir"></span>
                    <p>21</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="top_con_right_one_notice">
            <img src="../../../assets/Aiot-laba.png" alt="">
            <P>智能提醒 : </P>
            <p>预计明天有大雨，请做好相应准备</p>
          </div>
        </div>
        <div style="height:305px;width:100%;background-color:#fff;margin-bottom:10px;"></div>
        <div style="height:305px;width:100%;background-color:#fff;"></div>
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
#timeSelect{
  p{
    padding: 0 4px;
    border-right: 0;
  }
  p:last-of-type{
    border-right: 1px solid rgba(118,208,223,1);
  }
}
</style>

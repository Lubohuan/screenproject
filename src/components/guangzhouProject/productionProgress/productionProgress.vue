<template>
  <div class="productionProgress commonClass" style="height:100%;width:100%;">
    <div class="top_con flex_b">
      <div class="top_con_left">
        <!-- 生产概况 -->
        <div style="height:305px;width:100%;margin-bottom:10px;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">生产概况</span>
            </div>
            <div class="ibox-content">
              <div class="product-top" style="height:123px">
                <div class="flex allHeight">
                  <div class="flex-1 flex allHeight jc-center ai-center">
                    <el-progress type="circle" :percentage="percentage" color="#00F29F" width="75"></el-progress>
                    <div class="jbox flex column jc-between" style="height:70px;margin-left:30px;">
                      <div class="jbox-title">本月完成生产任务</div>
                      <div class="jbox-content">
                        <span class="number">35</span>
                        <span class="unit">个</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 flex allHeight jc-center ai-center" style="margin-left:30px;">
                    <dl class="bi flex column jc-between allHeight" style="margin-right:30px;">
                      <dt>月环比</dt>
                      <dd>
                        <span>12%</span>
                        <span class="warn">
                          <i class="iconfont">↓</i>
                        </span>
                      </dd>
                    </dl>
                    <dl class="bi flex column jc-between allHeight">
                      <dt>月同比</dt>
                      <dd>
                        <span>12%</span>
                        <span class="good">
                          <i class="iconfont">↑</i>
                        </span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="product-bottom" style="height:142px;padding-left:20px;">
                <div class="weather-container flex">
                  <!-- 第一格 -->
                  <div
                    class="item flex column"
                    style="width:260px;border-right:1px solid rgba(255,255,255,.1);"
                  >
                    <!-- 上半部分 -->
                    <div class="flex top">
                      <div class="flex-3 flex ai-end" style="height:58px;">
                        <img src="../../../assets/index/cloudy.png" alt width="58px" height="58px">
                      </div>
                      <div class="flex-3 flex ai-end" style="height:48px;">
                        <span style="font-size:36px;line-height:35px;">10</span>
                        <span style="font-size:18px;line-height:18px;">℃</span>
                      </div>
                      <div class="flex-2 flex ai-end" style="height:48px;">
                        <span style="color:#FEDF50;font-size:16px;line-height:16px;">多云</span>
                      </div>
                    </div>
                    <!-- 下半部分 -->
                    <div class="flex bottom wrap">
                      <div class="font12 flex ai-center" style="width:35%">
                        <img src="../../../assets/index/wind.png" alt>
                        <span>南风2级</span>
                      </div>
                      <div class="font12 flex ai-center" style="width:34%">
                        <img src="../../../assets/index/temperature.png" alt>
                        <span>12℃</span>
                      </div>
                      <div class="font12 flex ai-center" style="width:31%">
                        <img src="../../../assets/index/rainfall.png" alt>
                        <span>67%</span>
                      </div>
                      <div class="font12 flex ai-center" style="width:35%">
                        <img src="../../../assets/index/pm25.png" alt>
                        <span>35</span>
                      </div>
                      <div class="font12 flex ai-center" style="width:34%">
                        <img src="../../../assets/index/pm10.png" alt>
                        <span>78</span>
                      </div>
                      <div class="font12 flex ai-center" style="width:31%">
                        <img src="../../../assets/index/noise.png" alt>
                        <span>45dB</span>
                      </div>
                    </div>
                  </div>
                  <!-- 第二格 -->
                  <div class="item flex" style="width:260px;padding-top:5px;">
                    <!-- 明天-->
                    <div class="flex column ai-center flex-1">
                      <dl class>
                        <dt class="font12 text-center" style="line-height:13px;">明天</dt>
                        <dd>
                          <img src="../../../assets/index/sunny.png" alt>
                        </dd>
                      </dl>
                      <p class style="font-size:14px;margin:6px 0">
                        <span class="font28">10</span>℃
                      </p>
                      <p
                        class="font12 text-center"
                        style="color:#FEDF50;padding-top:5px;line-height:12px;"
                      >晴</p>
                    </div>
                    <!-- 后天 -->
                    <div class="flex column ai-center flex-1">
                      <dl>
                        <dt class="font12 text-center" style="line-height:13px;">后天</dt>
                        <dd>
                          <img src="../../../assets/index/rain.png" alt>
                        </dd>
                      </dl>
                      <p style="font-size:14px;margin:6px 0">
                        <span class="font28">10</span>℃
                      </p>
                      <p
                        class="font12 text-center"
                        style="color:#FEDF50;padding-top:5px;line-height:12px;"
                      >
                        雨
                        <img src="../../../assets/index/warning.png" alt width="20px">
                      </p>
                    </div>
                    <!-- 大后天 -->
                    <div class="flex column ai-center flex-1">
                      <dl>
                        <dt class="font12 text-center" style="line-height:13px;">大后天</dt>
                        <dd>
                          <img src="../../../assets/index/cloudy.png" alt>
                        </dd>
                      </dl>
                      <p style="font-size:14px;margin:6px 0">
                        <span class="font28">10</span>℃
                      </p>
                      <p
                        class="font12 text-center"
                        style="color:#FEDF50;padding-top:5px;line-height:12px;"
                      >多云</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 形象进度进展 -->
        <div style="height:305px;width:100%;margin-bottom:10px;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">形象进度进展</span>
            </div>
            <div class="ibox-content">
              <div id="echart-twoline" style="width：100%;height:100%"></div>
            </div>
          </div>
        </div>
        <!-- 里程碑预警 -->
        <div style="height:306px;width:100%;">
          <div class="ibox">
            <div class="ibox-title flex jc-between">
              <div class="allHeight ai-center">
                <img src="../../../assets/index/icon.png" alt width="16px">
                <span class="text">里程碑预警</span>
              </div>
              <div class="title-right flex allHeight ai-center" style="padding-right:10px;">
                <img src="../../../assets/index/warning.png" alt width="25">
                <span class="number">5</span>
                <span class="eqt">个预警</span>
              </div>
            </div>
            <div class="ibox-content">
             <table class="table text-center allHeight">
                <thead>
                  <tr>
                    <th>计划名称</th>
                    <th>施工区段</th>
                    <th>
                      预警原因
                    </th>
                    <th>责任人</th>
                    <th>预警时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="eclipse">
                        <span>主体结构封顶</span>
                      </div>
                    </td>
                    <td>
                        <span>
                         施工一区
                        </span>
                    </td>
                    <td>
                        <span class="bad">
                            逾期10天
                        </span>
                    </td>
                    <td>
                         <span>
                           里斯
                        </span>
                    </td>
                    <td>
                        <span>
                            2019.3.18
                        </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="eclipse">
                        <span>主体结构封顶</span>
                      </div>
                    </td>
                    <td>
                        <span>
                         施工一区
                        </span>
                    </td>
                    <td>
                        <span class="bad">
                            逾期10天
                        </span>
                    </td>
                    <td>
                         <span>
                           里斯
                        </span>
                    </td>
                    <td>
                        <span>
                            2019.3.18
                        </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="eclipse">
                        <span>主体结构封顶</span>
                      </div>
                    </td>
                    <td>
                        <span>
                         施工一区
                        </span>
                    </td>
                    <td>
                        <span class="bad">
                            逾期10天
                        </span>
                    </td>
                    <td>
                         <span>
                           里斯
                        </span>
                    </td>
                    <td>
                        <span>
                            2019.3.18
                        </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="eclipse">
                        <span>主体结构封顶</span>
                      </div>
                    </td>
                    <td>
                        <span>
                         施工一区
                        </span>
                    </td>
                    <td>
                        <span class="bad">
                            逾期10天
                        </span>
                    </td>
                    <td>
                         <span>
                           里斯
                        </span>
                    </td>
                    <td>
                        <span>
                            2019.3.18
                        </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="eclipse">
                        <span>主体结构封顶</span>
                      </div>
                    </td>
                    <td>
                        <span>
                         施工一区
                        </span>
                    </td>
                    <td>
                        <span class="bad">
                            逾期10天
                        </span>
                    </td>
                    <td>
                         <span>
                           里斯
                        </span>
                    </td>
                    <td>
                        <span>
                            2019.3.18
                        </span>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="top_con_middle">
        <!-- 轮播 -->
        <div style="height:410px;width:100%;margin-bottom:10px;">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  src="../../../assets/index/noise.png"
                  alt="bgImage"
                  class="img-responsive center-block"
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="../../../assets/index/frist.png"
                  alt="bgImage"
                  class="img-responsive center-block"
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="../../../assets/position.png"
                  alt="bgImage"
                  class="img-responsive center-block"
                >
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!-- 重要工序任务 -->
        <div style="height:516px;width:100%;margin-bottom:10px;">
          <div class="ibox">
           
          </div>
        </div>
      </div>
      <!-- right start -->
      <div class="top_con_right">
        <!-- 绿色施工 -->
        <div style="height:185px;width:100%;margin-bottom:10px;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">绿色施工</span>
              <div id="textPcontainer" class="weather-warning">
                <p id="textP">砼浇捣施工须搭设防雨棚，并及时遮盖砼面层，雨过后应及时做好面层的处理工作</p>
              </div>
            </div>
            <div class="ibox-content">
              <div class="weather-container flex">
                <!-- 第一格 -->
                <div
                  class="item flex column"
                  style="width:200px;border-right:1px solid rgba(255,255,255,.1);"
                >
                  <!-- 上半部分 -->
                  <div class="flex top">
                    <div class="flex-3 flex ai-end" style="height:58px;">
                      <img src="../../../assets/index/cloudy.png" alt width="58px" height="58px">
                    </div>
                    <div class="flex-3 flex ai-end" style="height:48px;">
                      <span style="font-size:36px;line-height:35px;">10</span>
                      <span style="font-size:18px;line-height:18px;">℃</span>
                    </div>
                    <div class="flex-2 flex ai-end" style="height:48px;">
                      <span style="color:#FEDF50;font-size:16px;line-height:16px;">多云</span>
                    </div>
                  </div>
                  <!-- 下半部分 -->
                  <div class="flex bottom wrap">
                    <div class="font12 flex ai-center" style="width:35%">
                      <img src="../../../assets/index/wind.png" alt>
                      <span>南风2级</span>
                    </div>
                    <div class="font12 flex ai-center" style="width:34%">
                      <img src="../../../assets/index/temperature.png" alt>
                      <span>12℃</span>
                    </div>
                    <div class="font12 flex ai-center" style="width:31%">
                      <img src="../../../assets/index/rainfall.png" alt>
                      <span>67%</span>
                    </div>
                    <div class="font12 flex ai-center" style="width:35%">
                      <img src="../../../assets/index/pm25.png" alt>
                      <span>35</span>
                    </div>
                    <div class="font12 flex ai-center" style="width:34%">
                      <img src="../../../assets/index/pm10.png" alt>
                      <span>78</span>
                    </div>
                    <div class="font12 flex ai-center" style="width:31%">
                      <img src="../../../assets/index/noise.png" alt>
                      <span>45dB</span>
                    </div>
                  </div>
                </div>
                <!-- 第二格 -->
                <div
                  class="item flex"
                  style="width:200px;border-right:1px solid rgba(255,255,255,.1);padding-top:5px;"
                >
                  <!-- 明天-->
                  <div class="flex column ai-center flex-1">
                    <dl class>
                      <dt class="font12 text-center" style="line-height:13px;">明天</dt>
                      <dd>
                        <img src="../../../assets/index/sunny.png" alt>
                      </dd>
                    </dl>
                    <p class style="font-size:14px;margin:6px 0">
                      <span class="font28">10</span>℃
                    </p>
                    <p
                      class="font12 text-center"
                      style="color:#FEDF50;padding-top:5px;line-height:12px;"
                    >晴</p>
                  </div>
                  <!-- 后天 -->
                  <div class="flex column ai-center flex-1">
                    <dl>
                      <dt class="font12 text-center" style="line-height:13px;">后天</dt>
                      <dd>
                        <img src="../../../assets/index/rain.png" alt>
                      </dd>
                    </dl>
                    <p style="font-size:14px;margin:6px 0">
                      <span class="font28">10</span>℃
                    </p>
                    <p
                      class="font12 text-center"
                      style="color:#FEDF50;padding-top:5px;line-height:12px;"
                    >
                      雨
                      <img src="../../../assets/index/warning.png" alt width="20px">
                    </p>
                  </div>
                  <!-- 大后天 -->
                  <div class="flex column ai-center flex-1">
                    <dl>
                      <dt class="font12 text-center" style="line-height:13px;">大后天</dt>
                      <dd>
                        <img src="../../../assets/index/cloudy.png" alt>
                      </dd>
                    </dl>
                    <p style="font-size:14px;margin:6px 0">
                      <span class="font28">10</span>℃
                    </p>
                    <p
                      class="font12 text-center"
                      style="color:#FEDF50;padding-top:5px;line-height:12px;"
                    >多云</p>
                  </div>
                </div>
                <!-- 第三格 -->
                <div class="item flex" style="width:120px;padding-top:5px;">
                  <dl style="width:100%">
                    <dt class="font12 text-center" style="line-height:14px;">
                      <span class="text-center">晴雨表</span>
                    </dt>
                    <dd>
                      <div class="flex wrap jc-between ai-center">
                        <div class="div-c flex column jc-center" style="width:50%;">
                          <div class="c-top" style>
                            <span class="thumb black"></span>
                          </div>
                          <div class="c-bottom">
                            <span>12</span>
                          </div>
                        </div>
                        <div class="div-c flex column jc-center" style="width:50%;">
                          <div class="c-top" style>
                            <span class="thumb black"></span>
                          </div>
                          <div class="c-bottom">
                            <span>12</span>
                          </div>
                        </div>
                        <div class="div-c flex column jc-center" style="width:50%;">
                          <div class="c-top" style>
                            <span class="thumb red"></span>
                          </div>
                          <div class="c-bottom">
                            <span>12</span>
                          </div>
                        </div>
                        <div class="div-c flex column jc-center" style="width:50%;">
                          <div class="c-top" style>
                            <span class="thumb blue"></span>
                          </div>
                          <div class="c-bottom">
                            <span>12</span>
                          </div>
                        </div>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 工作动态 -->
        <div style="height:457px;width:100%;margin-bottom:10px;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">工作动态</span>
            </div>
            <div class="ibox-content flex column" style="background: transparent;padding:0;">
              <div class="media">
                <div class="media-body">
                  <div class="media-header">
                    <label>质量检查</label>
                    <span class="inline-block">底版</span>
                  </div>
                  <div class="media-content">
                    <span>检查人尹鑫检查了底板防水层，无问题</span>
                  </div>
                  <div class="media-footer">2019-04-18 16:48</div>
                </div>
                <div class="media-right">
                  <img src alt>
                </div>
              </div>
              <div class="media" style="margin:3px 0;">
                <div class="media-body">
                  <div class="media-header">
                    <label>质量检查</label>
                    <span class="inline-block">地基基础</span>
                  </div>
                  <div class="media-content">
                    <span>检查人杨佳雄检查了抗拔锚杆，无问题</span>
                  </div>
                  <div class="media-footer">2019-04-17 16:54</div>
                </div>
                <div class="media-right">
                  <img src alt>
                </div>
              </div>
              <div class="media" style="margin:0 0 3px 0;">
                <div class="media-body">
                  <div class="media-header">
                    <label>质量检查</label>
                    <span class="inline-block">底版</span>
                  </div>
                  <div class="media-content">
                    <span>检查人尹鑫检查了底板防水，有问题，一般质量问题</span>
                  </div>
                  <div class="media-footer">2019-04-16 17:44</div>
                </div>
                <div class="media-right">
                  <img src alt>
                </div>
              </div>
              <div class="media">
                <div class="media-body">
                  <div class="media-header">
                    <label>质量检查</label>
                    <span class="inline-block">底版</span>
                  </div>
                  <div class="media-content">
                    <span>检查人尹鑫检查了底板防水层，无问题</span>
                  </div>
                  <div class="media-footer">2019-04-09 14:24</div>
                </div>
                <div class="media-right">
                  <img src alt>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分包单位排行榜 -->
        <div style="height:274px;width:100%">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">分包单位排行榜</span>
            </div>
            <div class="ibox-content">
              <table class="table text-center">
                <thead>
                  <tr>
                    <th>排名</th>
                    <th>分包单位</th>
                    <th>
                      通过率
                      <span>(问题数)</span>
                    </th>
                    <th>周环比</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="../../../assets/index/frist.png" alt>
                    </td>
                    <td>
                      <div class="eclipse">
                        <span>主体结构封顶</span>
                      </div>
                    </td>
                    <td>
                      <span>100%（10）</span>
                    </td>
                    <td>
                      <div class="good">
                        <span>10%</span>
                        <span>
                          <i class="iconfont">↑</i>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="../../../assets/index/second.png" alt>
                    </td>
                    <td>
                      <div class="eclipse">
                        <span>广州市大禹防漏技术开发有限公司</span>
                      </div>
                    </td>
                    <td>
                      <span>100%（3）</span>
                    </td>
                    <td>
                      <!-- <div class="bad">
                        <span>10%</span>
                        <span>
                          <i class="iconfont">↓</i>
                        </span>
                      </div>-->
                      <div class="good">
                        <span>10%</span>
                        <span>
                          <i class="iconfont">↑</i>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="../../../assets/index/third.png" alt>
                    </td>
                    <td>
                      <div class="eclipse">
                        <span>锚杆班组</span>
                      </div>
                    </td>
                    <td>
                      <span>100%（1）</span>
                    </td>
                    <td>
                      <div class="good">
                        <span>10%</span>
                        <span>
                          <i class="iconfont">↑</i>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="cixu">4</td>
                    <td>
                      <div class="eclipse">
                        <span>牛逼单位额发发阿斯顿发lore</span>
                      </div>
                    </td>
                    <td>
                      <span>99%（30）</span>
                    </td>
                    <td>
                      <div class="good">
                        <span>10%</span>
                        <span>
                          <i class="iconfont">↑</i>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="cixu">5</td>
                    <td>
                      <div class="eclipse">
                        <span>牛逼单位额发发阿斯顿发lore</span>
                      </div>
                    </td>
                    <td>
                      <span>99%（30）</span>
                    </td>
                    <td>
                      <div class="good">
                        <span>10%</span>
                        <span>
                          <i class="iconfont">↑</i>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- right end -->
    </div>
  </div>
</template>
<script>
import scrollfunc from "../../public/all";
import Swiper from "swiper";
import { setTimeout } from "timers";
export default {
  name: "homePage",
  data() {
    return {
      intervalTimer: "",
      showScroll: false,
      percentage: 0
    };
  },
  methods: {
    textScroll() {
      var scrollWidth = $("#textPcontainer").width();
      var textWidth = $("#textP").width();
      if (textWidth > scrollWidth) {
        $("#textPcontainer").textScroll();
      } else {
        $("#textP").css("left", 0);
      }
    },
    textEnter() {
      //clearInterval(this.intervalTimer);
    },
    textLeave() {
      // this.marquee()
    },
    drawTwoLine() {
      var myChart = this.$echarts.init(
        document.getElementById("echart-twoline")
      );
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          icon: "rect",
          itemWidth: 14,
          itemHeight: 10,
          itemGap: 13,
          data: ["计划产值", "完成产值"],
          right: "4%",
          textStyle: {
            fontSize: 12,
            color: "#F1F1F3"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              //设置x轴的线
              show: true,
              lineStyle: {
                //color: "#DBE1FF"
              }
            },
            axisLabel: {
              //设置x轴的字
              textStyle: {
                color: "#DBE1FF",
                margin: 15
              }
            },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              //设置y轴的线
              show: false,
              lineStyle: {
                color: "#DBE1FF"
              }
            },
            axisLabel: {
              //设置y轴的字
              textStyle: {
                color: "#DBE1FF",
                //fontSize: 14,
                margin: 15
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#57617B"
              }
            }
          }
        ],
        series: [
          {
            name: "计划产值",
            type: "line",
            //smooth: true,
            symbol: "circle",
            symbolSize: 8,
            lineStyle: {
              normal: {
                width: 0.5
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(252, 12, 89, 0.64)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(252, 12, 89, 0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(252, 12, 89, 1)"
              }
            },
            // itemStyle: {
            //     normal: {
            //         color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //             offset: 0,
            //             color: 'rgba(252, 12, 89, 0.64)'
            //         }, {
            //             offset: 1,
            //             color: 'rgba(252, 12, 89, 0)'
            //         }])
            //     },
            //     emphasis: {
            //     color: 'rgb(99,250,235)',
            //     borderColor: 'rgba(99,250,235,0.2)',
            //     extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
            //     borderWidth: 99
            //   }
            // },
            data: [
              97.3,
              99.2,
              99.3,
              100.0,
              99.6,
              90.6,
              80.0,
              91.5,
              69.8,
              67.5,
              90.4,
              84.9
            ]
          },
          {
            name: "完成产值",
            type: "line",
            //smooth: true,
            symbol: "circle",
            symbolSize: 8,
            lineStyle: {
              normal: {
                width: 0.5
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(116, 206, 214,.64)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(116, 206, 214,0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(76, 240, 254, 1)"
              }
            },
            // itemStyle: {
            //     normal: {
            //         color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //             offset: 0,
            //             color: 'rgba(116, 206, 214,.64)'
            //         }, {
            //             offset: 1,
            //             color: 'rgba(116, 206, 214,0)'
            //         }])
            //     },
            //     emphasis: {
            //     color: 'rgb(99,250,235)',
            //     borderColor: 'rgba(99,250,235,0.2)',
            //     extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
            //     borderWidth: 10
            // }
            //},
            data: [
              96.3,
              96.4,
              97.5,
              95.6,
              98.1,
              94.8,
              89.6,
              94.1,
              80.1,
              52.4,
              75.8,
              94.7
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  },
  created() {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loopAdditionalSlides: 3,
      loop: true,
      autoplay: {
        // 自动滑动
        disableOnInteraction: false,
        delay: 8 * 1000
      },
      pagination: {
        // 如果需要分页器
        el: ".swiper-pagination",
        clickable: true
      },
      observer: true, // 启动动态检查器(OB/观众/观看者)
      observeParents: true // 修改swiper的父元素时，自动初始化swiper
    });
    this.drawTwoLine();
    this.textScroll();
    this.percentage = 60;
  }
};
</script>
<style lang="scss" scoped>
@import "../homePage/homePage.scss";
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgba(29, 40, 77, 0.5);

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>


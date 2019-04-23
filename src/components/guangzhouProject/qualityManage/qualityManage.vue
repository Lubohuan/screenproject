<template>
  <div class="qualityManage commonClass" style="height:100%;width:100%;">
    <div class="top_con flex_b">
      <div class="top_con_left">
        <!-- 质量目标 -->
        <div style="height:264px;width:100%;margin-bottom:10px;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">质量目标</span>
            </div>
            <div class="ibox-content">
              <div class="allHeight flex column">
                <div class="top">
                  <ul class="list-unstyle flex list-unit wrap">
                    <li class="flex ai-center">
                      <span class="title">
                        <img src="../../../assets/index/icon_li.png" alt>
                        <span>建设单位：</span>
                      </span>
                      <span class="content inline-block">杭州开发投资集团有限公司</span>
                    </li>
                    <li class="flex ai-center">
                      <span class="title">
                        <img src="../../../assets/index/icon_li.png" alt>
                        <span>设计单位：</span>
                      </span>
                      <span class="content inline-block">杭州开发投资集团有限公司</span>
                    </li>
                    <li class="flex ai-center">
                      <span class="title">
                        <img src="../../../assets/index/icon_li.png" alt>
                        <span>总包单位：</span>
                      </span>
                      <span class="content inline-block">杭州开发投资集团有限公司</span>
                    </li>
                  </ul>
                </div>
                <div class="bottom flex jc-between" style="margin-top:14px;">
                  <div class="cardItem cardItem1">
                    <dl>
                      <dt>创优目标</dt>
                      <dd>广东省建设工程优质奖、广东省结构优质奖</dd>
                    </dl>
                  </div>
                  <div class="cardItem cardItem2">
                    <dl>
                      <dt>创优目标</dt>
                      <dd>广州市建设工程优质奖、广州市建设结构优质奖、广州市建设工程结构优质</dd>
                    </dl>
                  </div>
                  <div class="cardItem cardItem3">
                    <dl>
                      <dt>争创奖项</dt>
                      <dd>中国建筑工程鲁班奖</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 质量问题分布 -->
        <div style="height:382px;width:100%;margin-bottom:10px;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">质量问题分布</span>
            </div>
            <div class="ibox-content">
              <div class="flex jc-between" style="padding:20px 40px;">
                <dl class="list-pro">
                  <dt>今日重大质量问题</dt>
                  <dd>0</dd>
                </dl>
                <dl class="list-pro">
                  <dt>产期未整改</dt>
                  <dd>0</dd>
                </dl>
                <dl class="list-pro">
                  <dt>验收不合格预警</dt>
                  <dd>0</dd>
                </dl>
                <dl class="list-pro">
                  <dt>未销重大隐患</dt>
                  <dd>0</dd>
                </dl>
              </div>
              <div id="echart-line" style="width:100%;height:190px"></div>
            </div>
          </div>
        </div>
        <!-- 质量问题统计 -->
        <div style="height:276px;width:100%;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">质量问题统计</span>
            </div>
            <div class="ibox-content">
              <div id="echart-pie" style="width:100%;height:100%"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="top_con_middle">
        <div style="height:412px;width:100%;margin-bottom:10px;">
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
        <div style="height:234px;width:100%;margin-bottom:10px;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">重要工序任务</span>
            </div>
            <div class="ibox-content" style="padding:0">
              <div class>
                <div class="inline-block" style="width:340px;"></div>
                <div class="inline-block" style="width:440px;padding:20px;">
                  <ul class="list-unstyled list-task">
                    <li>
                      <span class="title">任务一：</span>
                      <span class="content">1钢筋工程检验批验收，1钢筋工程检验批验收</span>
                    </li>
                    <li>
                      <span class="title">任务二：</span>
                      <span class="content">1钢筋工程检验批验收，1钢筋工程检验批验收</span>
                    </li>
                    <li>
                      <span class="title">任务三：</span>
                      <span class="content">1钢筋工程检验批验收，1钢筋工程检验批验收</span>
                    </li>
                    <li>
                      <span class="title">任务四：</span>
                      <span class="content">1钢筋工程检验批验收，1钢筋工程检验批验收</span>
                    </li>
                    <li>
                      <span class="title">任务五：</span>
                      <span class="content">1钢筋工程检验批验收，1钢筋工程检验批验收</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 表格今日完成 -->
        <div style="height:276px;width:100%;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">今日完成</span>
            </div>
            <div class="ibox-content" style="padding:0;">
              <table class="table table-bordered text-center today">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>施工区域</th>
                    <th>工程量</th>
                    <th>安全</th>
                    <th>质量</th>
                    <th>物资</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>施工一区</td>
                    <td>
                      <div class="i-danger flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <span>2345m²</span>
                      </div>
                    </td>
                    <td>
                      <div class="i-success flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <div class="flex column jc-start" style="text-align:left;">
                          <div class="special_span">检查6次</div>
                          <div class="special_span">未通过一次</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="i-warning flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <div class="flex column jc-start" style="text-align:left;">
                          <div class="special_span">检查6次</div>
                          <div class="special_span">未通过一次</div>
                        </div>
                      </div>
                    </td>
                    <td rowspan="4">
                      <div class="i-success flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <div class="flex column jc-start" style="text-align:left;">
                          <div class="special_span">检查6次</div>
                          <div class="special_span">未通过一次</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>施工一区</td>
                    <td>
                      <div class="i-danger flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <span>2345m²</span>
                      </div>
                    </td>
                    <td>
                      <div class="i-success flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <div class="flex column jc-start" style="text-align:left;">
                          <div class="special_span">检查6次</div>
                          <div class="special_span">未通过一次</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="i-warning flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <div class="flex column jc-start" style="text-align:left;">
                          <div class="special_span">检查6次</div>
                          <div class="special_span">未通过一次</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>施工一区</td>
                    <td>
                      <div class="i-danger flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <span>2345m²</span>
                      </div>
                    </td>
                    <td>
                      <div class="i-success flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <div class="flex column jc-start" style="text-align:left;">
                          <div class="special_span">检查6次</div>
                          <div class="special_span">未通过一次</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="i-warning flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <div class="flex column jc-start" style="text-align:left;">
                          <div class="special_span">检查6次</div>
                          <div class="special_span">未通过一次</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>施工一区</td>
                    <td>
                      <div class="i-danger flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <span>2345m²</span>
                      </div>
                    </td>
                    <td>
                      <div class="i-success flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <div class="flex column jc-start" style="text-align:left;">
                          <div class="special_span">检查6次</div>
                          <div class="special_span">未通过一次</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="i-warning flex ai-center jc-center">
                        <span class="it-span flex jc-center ai-center">
                          <i class="it-i"></i>
                        </span>
                        <div class="flex column jc-start" style="text-align:left;">
                          <div class="special_span">检查6次</div>
                          <div class="special_span">未通过一次</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- right start -->
      <div class="top_con_right">
        <!-- 绿色施工 -->
        <div style="height:187px;width:100%;margin-bottom:10px;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">绿色施工</span>
              <div  id="textPcontainer" class="weather-warning">
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
                    >雨</p>
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
        <div style="height:459px;width:100%;margin-bottom:10px;">
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
              <div class="media">
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
            </div>
          </div>
        </div>
        <!-- 分包单位排行榜 -->
        <div style="height:276px;width:100%">
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
                        <span>广州市通力建筑劳务派遣有限公司</span>
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
import $ from 'jquery'
import Swiper from "swiper";
import { setTimeout } from 'timers';
export default {
  name: "homePage",
  data() {
    return {
      intervalTimer:"",
      showScroll:false,
    };
  },
  methods: {
    textScroll(){
     var timer = setTimeout(()=>{
       this.marquee()
     },1000)
    },
    marquee() {
        var scrollWidth = $('#textPcontainer').width();
        var textWidth = $('#textP').width();
        if(textWidth>scrollWidth){
          $('#textP').css("left",300);
          var i = scrollWidth;
          this.intervalTimer = setInterval(function() {
              i--;
              if(i < -textWidth ) {
                  i = scrollWidth;
              }
              $('#textP').animate({'left': i+'px'}, 20);
          }, 20);
        }else{
          $('#textP').css("left",0);
        }
        
    },
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("echart-line"));
      var option = {
        // backgroundColor: "#05224d",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: "8%",
          left: "5%",
          right: "5%",
          bottom: "1%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              //设置x轴的线
              show: true
              //   lineStyle: {
              //     color: "#DBE1FF"
              //   }
            },
            axisLabel: {
              //设置x轴的字
              textStyle: {
                color: "#DBE1FF",
                margin: 15
              }
            },
            axisTick: { show: false },
            data: ["施工一区", "施工二区", "施工三区", "施工四区"]
          }
        ],
        yAxis: [
          {
            type: "value",
            // min: 0,
            // max: 140,
            // splitNumber: 7,
            splitLine: {
              show: false,
              lineStyle: {
                color: "#DBE1FF"
              }
            },
            axisLine: {
              //设置y轴的线
              show: true
              // lineStyle:{
              //     color:'#DBE1FF',
              //     width:1,//这里是为了突出显示加上的
              // }
            },
            axisLabel: {
              //设置y轴的字
              margin: 20,
              textStyle: {
                color: "#DBE1FF"
              }
            },
            axisTick: { show: false }
          }
        ],
        series: [
          {
            name: "质量问题",
            type: "line",
            smooth: true,
            itemStyle: { normal: { areaStyle: { type: "default" } } },
            lineStyle: {
              normal: {
                color: "rgba(255,255,255,0)" // 线条颜色
              }
            },
            symbol: "circle",
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#00d4c7",
                lineStyle: {
                  color: "#00d4c7",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(74,208,181,1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(84,97,187,1)"
                    }
                  ])
                }
              }
            },
            symbol:
              "image://data:image/png;base64,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",
            symbolSize: 42,
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0.7,
                  0,
                  1,
                  [
                    { offset: 0, color: "rgba(84,97,187,1)" },
                    { offset: 0.7, color: "rgba(74,208,181,1)" }
                  ],
                  false
                ),
                shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [1, 2, 5, 3]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    drawPie() {
      var myChart = this.$echarts.init(document.getElementById("echart-pie"));
      //   var option = {
      //     tooltip: {
      //       trigger: "item",
      //       formatter: "{a} <br/>{b}: {c} ({d}%)"
      //     },
      //     legend: {
      //       orient: "vertical",
      //       x: "right",
      //       itemWidth: 14,
      //       itemHeight: 14,
      //       align: "left",

      //       data: [
      //         "2D线",
      //         "3D线",
      //         "资源类",
      //         "采集类",
      //         "宝宝大全",
      //         "2D视频",
      //         "3D视频"
      //       ],
      //       textStyle: {
      //         color: "#fff"
      //       }
      //     },
      //     series: [
      //       {
      //         name: "访问来源",
      //         type: "pie",
      //         hoverAnimation: false,
      //         legendHoverLink: false,
      //         radius: ["33%", "75%"],
      //         color: [
      //           "#915872",
      //           "#3077b7",
      //           "#9a8169",
      //           "#3f8797",
      //           "#5b8144",
      //           "#307889",
      //           "#9c6a79"
      //         ],
      //         label: {
      //           normal: {
      //             position: "inner"
      //           }
      //         },
      //         labelLine: {
      //           normal: {
      //             show: false
      //           }
      //         },
      //         tooltip: {
      //           show: false
      //         },

      //         data: [
      //           { value: 435, name: "" },
      //           { value: 679, name: "" },
      //           { value: 848, name: "" },
      //           { value: 348, name: "" },
      //           { value: 679, name: "" },
      //           { value: 848, name: "" },
      //           { value: 348, name: "" }
      //         ]
      //       },
      //       {
      //         name: "访问来源",
      //         type: "pie",
      //         radius: ["33%", "75%"],
      //         color: [
      //           "#d74e67",
      //           "#0092ff",
      //           "#eba954",
      //           "#21b6b9",
      //           "#60a900",
      //           "#01949b",
      //           " #f17677"
      //         ],
      //         label: {
      //           normal: {
      //             formatter: "{b}\n{d}%"
      //           }
      //         },
      //         data: [
      //           { value: 435, name: "2D线" },
      //           { value: 679, name: "3D线" },
      //           { value: 848, name: "资源类" },
      //           { value: 348, name: "采集类" },
      //           { value: 679, name: "宝宝大全" },
      //           { value: 848, name: "2D视频" },
      //           { value: 348, name: "3D视频" }
      //         ]
      //       }
      //     ]
      //   };
      // Echarts的Pie图的径向渐变不是很方便, 如果有人需要指向圆心的径向渐变可以直接用
      // 需要注意的是:
      // 1.legend会变得很奇怪, 最好自己重写
      // 2.legend在点击之后(少了一个弧之后)也会不对, 最后在点击之后重新用calc来计算
      //   (或者)干脆别让他点...
      /*
      
      linear-gradient(270deg, #df5cb4 0%, #e07c76 100%)*/
      var data = [
        { value: 1, name: "混凝土露筋", color0: "#FF687D", color1: "#FC0C59" },
        { value: 3, name: "混凝土胀模", color0: "#FCDE54", color1: "#F7BA2A" },
        { value: 3, name: "其他", color0: "#df5cb4", color1: "#e07c76" },
        {
          value: 1,
          name: "其他（模板工程）",
          color0: "rgba(13,138,212,1)",
          color1: "rgba(60,181,251,1)"
        },
        { value: 1, name: "卷材缺陷", color0: "yellow", color1: "yellowgreen" },

        { value: 5, name: "混凝土夹渣", color0: "#15E09B", color1: "#1DBD6B" }
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
          data: [
            "混凝土露筋",
            "混凝土胀模",
            "其他",
            "其他（模板工程）",
            "卷材缺陷",
            "混凝土夹渣"
          ],
          textStyle: {
            color: "#fff"
          }
        },

        series: [
          {
            name: "问题类型",
            type: "pie",
            radius: ["45%", "70%"],
            center: ["40%", "50%"],
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
    }
  },
  created() {
    
  },
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
    this.drawLine();
    this.drawPie();
    this.textScroll()
  },
  beforeDestroy () {
   clearInterval(this.intervalTimer)
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


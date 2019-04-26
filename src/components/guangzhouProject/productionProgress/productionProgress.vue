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
                    <el-progress type="circle" :percentage="percentage" color="#00F29F" :width="75"></el-progress>
                    <div class="jbox flex column jc-between" style="height:70px;margin-left:30px;">
                      <div class="jbox-title">本月完成生产任务</div>
                      <div class="jbox-content">
                        <span class="number">26</span>
                        <span class="unit">个</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 flex allHeight jc-center ai-center" style="margin-left:30px;">
                    <dl class="bi flex column jc-between allHeight" style="margin-right:30px;">
                      <dt>月环比</dt>
                      <dd>
                        <span>20%</span>
                        <!-- <span class="warn">
                          <i class="iconfont">↓</i>
                        </span> -->
                        <span class="good">
                          <i class="iconfont">↑</i>
                        </span>
                      </dd>
                    </dl>
                    <dl class="bi flex column jc-between allHeight">
                      <dt>月同比</dt>
                      <dd>
                        <span>100%</span>
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
                        <span style="font-size:36px;line-height:35px;">22</span>
                        <span style="font-size:18px;line-height:18px;">℃</span>
                      </div>
                      <div class="flex-2 flex ai-end" style="height:48px;">
                        <span style="color:#FEDF50;font-size:16px;line-height:16px;">阴天</span>
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
                        <span>100℃</span>
                      </div>
                      <div class="font12 flex ai-center" style="width:31%">
                        <img src="../../../assets/index/rainfall.png" alt>
                        <span>67%</span>
                      </div>
                      <div class="font12 flex ai-center" style="width:35%">
                        <img src="../../../assets/index/pm25.png" alt>
                        <span>21</span>
                      </div>
                      <div class="font12 flex ai-center" style="width:34%">
                        <img src="../../../assets/index/pm10.png" alt>
                        <span>33</span>
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
                      <dl>
                        <dt class="font12 text-center" style="line-height:13px;">明天</dt>
                        <dd>
                          <img src="../../../assets/index/rain.png" alt>
                        </dd>
                      </dl>
                      <p style="font-size:14px;margin:6px 0">
                        <span class="font28">29</span>℃
                      </p>
                      <p
                        class="font12 text-center"
                        style="color:#FEDF50;padding-top:5px;line-height:12px;"
                      >
                        中雨
                        <img src="../../../assets/index/warning.png" alt width="20px">
                      </p>
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
                        <span class="font28">30</span>℃
                      </p>
                      <p
                        class="font12 text-center"
                        style="color:#FEDF50;padding-top:5px;line-height:12px;"
                      >
                        雷阵雨
                        <img src="../../../assets/index/lzy.png" alt width="20px">
                      </p>
                    </div>
                    <!-- 大后天 -->
                   <div class="flex column ai-center flex-1">
                      <dl>
                        <dt class="font12 text-center" style="line-height:13px;">大后天</dt>
                        <dd>
                          <img src="../../../assets/index/lzy.png" alt>
                        </dd>
                      </dl>
                      <p style="font-size:14px;margin:6px 0">
                        <span class="font28">30</span>℃
                      </p>
                      <p
                        class="font12 text-center"
                        style="color:#FEDF50;padding-top:5px;line-height:12px;"
                      >
                        雷阵雨
                        <img src="../../../assets/index/warning.png" alt width="20px">
                      </p>
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
                <span class="number">0</span>
                <span class="eqt">个预警</span>
              </div>
            </div>
            <el-dialog title="提示" width="50%" :visible.sync="dialogObj.dialogVisible1" >
              <div class="modal">
                <div class="modal-title flex jc-between">
                  <div class="all-height flex ai-center">
                    <span class="text">详情</span>
                  </div>
                  <div class="all-height flex ai-center close" @click="dialogObj.dialogVisible1 = false">
                    <i class="el-icon-close"></i>
                  </div>

                </div>
                <div class="modal-content" style="padding:10px;">
                  <img :src="bigImgPath" style="width: 100%;height: 600px" alt="">
                </div>
              </div>
            </el-dialog>
            <div class="ibox-content">
              <table class="table text-center allHeight">
                <thead>
                  <tr>
                    <th>计划名称</th>
                    <th>施工区段</th>
                    <th>预警原因</th>
                    <th>责任人</th>
                    <th>预警时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="eclipse">
                        <span>基坑土方工程</span>
                      </div>
                    </td>
                    <td>
                      <span>Ⅰ区</span>
                    </td>
                    <td>
                      <span class="good">暂无预警</span>
                    </td>
                    <td>
                      <span>谭楚才</span>
                    </td>
                    <td>
                      <span>无</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="eclipse">
                        <span>地基基础及地下室结构工程及防水工程</span>
                      </div>
                    </td>
                    <td>
                      <span>Ⅰ区</span>
                    </td>
                    <td>
                       <span class="good">暂无预警</span>
                    </td>
                    <td>
                      <span>尹鑫</span>
                    </td>
                    <td>
                      <span>无</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="eclipse">
                        <span>基坑土方工程</span>
                      </div>
                    </td>
                    <td>
                       <span>Ⅱ区</span>
                    </td>
                    <td>
                      <span class="good">暂无预警</span>
                    </td>
                    <td>
                      <span>谭楚才</span>
                    </td>
                    <td>
                      <span>无</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="eclipse">
                        <span>地基基础及地下室结构工程及防水工程</span>
                      </div>
                    </td>
                    <td>
                      <span>Ⅱ区</span>
                    </td>
                    <td>
                       <span class="good">暂无预警</span>
                    </td>
                    <td>
                      <span>尹鑫</span>
                    </td>
                    <td>
                      <span>无</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="eclipse">
                        <span>基坑土方工程</span>
                      </div>
                    </td>
                    <td>
                      <span>Ⅲ区</span>
                    </td>
                    <td>
                      <span class="good">暂无预警</span>
                    </td>
                    <td>
                      <span>谭楚才</span>
                    </td>
                    <td>
                      <span>无</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="top_con_middle">
        <!-- 监控 -->
        <div style="height:410px;width:100%;background-color:#fff;margin-bottom:10px;" class="middle_bg">
                   <div class="top_ul" >
                       <ul>
                           <li>形象进度</li>
                           <!-- <li>无人机</li> -->
                       </ul>
                   </div>
                   <div class="middle_ul" v-if="false">
                       <ul>
                           <li>一区进</li>
                           <li>二区进</li>
                           <li>三区进</li>
                           <li>四区进</li>
                       </ul>
                   </div>
                   <div class="bottom_ul" style="height:50px;color:rgba(118, 208, 223, 1);font-size:12px;">
                        <div class="flex jc-center ai-center" style="height:50px;">
                             <div class="divitem">
                               <span>计划工期：</span>
                               <span>938天</span>
                            </div>
                            <div class="divitem">
                               <span>实际工期：</span>
                               <span>203天</span>
                            </div>
                            <div class="divitem" style="margin-right:10px;">
                               <span>总产值完成情况：</span>
                               <span>9%</span>
                            </div>
                            <div class="divitem">
                               (<span> 6022.92万元</span>
                               <i>/</i>
                               <span>65340.17万元</span>)
                            </div>
                        </div>
                   </div>
                   <!-- 摄像头 -->
                   <div class="camera">
                        <div class="camera_loc" style="top: 100px;left: 300px;" @click="openPic(0)">
                            <img v-show="indexItem!=0" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==0" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==0" src="../../../assets/manageMachine/1.jpg" @click="showPdf(1,true)" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
                        </div>
                        <div class="camera_loc" style="top: 280px;left: 130px;" @click="openPic(1)">
                            <img v-show="indexItem!=1" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==1" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==1" src="../../../assets/manageMachine/2.jpg" @click="showPdf(2,true)" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
                        </div>
                        <div class="camera_loc" style="top: 330px;left: 520px;" @click="openPic(2)">
                            <img v-show="indexItem!=2" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==2" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==2" src="../../../assets/manageMachine/3.jpg" @click="showPdf(3,true)" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
                        </div>
                        <div class="camera_loc" style="top: 160px;left: 560px;" @click="openPic(3)">
                            <img v-show="indexItem!=3" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==3" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==3" src="../../../assets/manageMachine/4.jpg" @click="showPdf(4,true)" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
                        </div>
                   </div>
                   <!-- 隐患 -->
                   <div class="hidden" v-if="false">
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
        <!-- 重要工序任务 -->
        <div style="height:516px;width:100%;background:rgba(29, 40, 77, 0.5)">
          <div class="ibox" >
            <img src="../../../assets/manageMachine/task.png" alt width="100%" height="516px">
          </div>
        </div>
      </div>
      <!-- right start -->
      <div class="top_con_right">
        <!-- 施工动态 -->
        <div style="height:306px;width:100%;margin-bottom:10px;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">施工动态</span>
            </div>
            <div class="ibox-content" style="padding:0px;background:transparent">
              <div class="pannel-container">
                <div class="pannel">
                  <div class="pannel-header">
                    <p class="time">2019年4月24日 星期三 多云</p>
                    <p class="text">基坑底板侧砖模砌筑（防水保护墙，占重量55%），基坑核心筒测砖模批灰（占总量100%）</p>
                  </div>
                  <div class="pannel-content">
                    <img src="../../../assets/qualityManage/b1.png" @click="showPdf(1,false)" alt="">
                    <img src="../../../assets/qualityManage/b2.png" @click="showPdf(2,false)" alt="">
                  </div>
                </div>
                <div class="pannel">
                  <div class="pannel-header">
                    <p class="time">2019年4月24日 星期三 多云</p>
                    <p class="text">1区防水层混凝土浇筑，占1区总量80%</p>
                  </div>
                  <div class="pannel-content">
                     <img src="../../../assets/qualityManage/t1.png" @click="showPdf(3,false)" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 劳务资源 -->
        <div style="height:305px;width:100%;margin-bottom:10px;">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">劳务资源</span>
            </div>
            <div class="ibox-content">
              <div id="echart-bar" style="width:100%;height:100%"></div>
              <!-- <div class="swiper-box">
                <div class="swiper-title">

                </div>
                <div class="swiper-content">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="flex column">
                            <div class="flex">
                                <div class="title"></div>
                                <div class="bar"></div>
                                <div class="number"></div>
                            </div>
                        </div>
                      </div>
                      <div class="swiper-slide"></div>
                      <div class="swiper-slide"></div>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <!-- 机械资源 -->
        <div style="height:305px;width:100%">
          <div class="ibox">
            <div class="ibox-title flex ai-center">
              <img src="../../../assets/index/icon.png" alt width="16px">
              <span class="text">机械资源</span>
            </div>
            <div class="ibox-content" style="padding:0;">
              <div class="ybox allHeight">
                <div class="ybox-title">
                  <div class="config">
                     <div class="config-detail flex jc-between ai-center">
                        <i class="el-icon-caret-left"></i>
                        <span>2019</span>
                        <i class="el-icon-caret-right"></i>
                     </div>
                  </div>
                </div>
                <div class="ybox-content">
                  <div class="flex wrap">
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>一月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">44</span>/
                                      </span>
                                   </span>
                                   <span class="total">43</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>二月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number n">49</span>/
                                      </span>
                                   </span>
                                   <span class="total">50</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>三月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">80</span>/
                                      </span>
                                   </span>
                                   <span class="total">78</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>四月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">71</span>/
                                      </span>
                                   </span>
                                   <span class="total">65</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>五月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">0</span>/
                                      </span>
                                   </span>
                                   <span class="total">0</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>六月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">0</span>/
                                      </span>
                                   </span>
                                   <span class="total">0</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>七月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">0</span>/
                                      </span>
                                   </span>
                                   <span class="total">0</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>八月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">0</span>/
                                      </span>
                                   </span>
                                   <span class="total">0</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>九月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">0</span>/
                                      </span>
                                   </span>
                                   <span class="total">0</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>十月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">0</span>/
                                      </span>
                                   </span>
                                   <span class="total">0</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>十一月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">0</span>/
                                      </span>
                                   </span>
                                   <span class="total">0</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                      <div class="month-item">
                          <dl class="month-item-dl flex column jc-center ai-center">
                              <dt>
                                <span>十二月</span>
                              </dt>
                              <dd>
                                 <div class="flex ai-end">
                                   <span class="number">
                                      <span class="real">
                                          <span class="number">0</span>/
                                      </span>
                                   </span>
                                   <span class="total">0</span>
                                    <span class="unit">台</span>
                                 </div>
                              </dd>
                          </dl>
                      </div>
                  </div>
                </div>
              </div>
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
      percentage: 0,
       camera:'',
        indexItem:-1,
        hiddenIndexItem:-1,
      dialogObj:{
        dialogVisible1:false
      },
      bigImgPath:'',
    };
  },
  methods: {
    showPdf(index,stu){
      if(stu){
        this.bigImgPath = require('../../../assets/manageMachine/'+index+'.jpg')
      }else{
        if(index == 3){
          this.bigImgPath = require('../../../assets/qualityManage/t'+1+'.png')
        }else{
          this.bigImgPath = require('../../../assets/qualityManage/b'+index+'.png')
        }

      }

      this.dialogObj.dialogVisible1 = true;
    },
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
          //align:'right',
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
              "4月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "单位：万元",
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
                margin: 0
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
              1080.20,
              875.38,
              875.38,
              1143.60
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
              1293,
              670,
              883.10,
              888.66
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    drawVbar(){
      var myChart = this.$echarts.init(
        document.getElementById("echart-bar")
      );
      var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['计划劳务资源', "实际劳务资源"],
            //align: 'right',
            right: 10,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 14,
            itemHeight: 10,
            itemGap: 13,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1月','2月','3月', '4月'
            ],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(219,225,255,1)",
                    width: 0,
                    type: "solid"
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "rgba(219,225,255,1)",
                }
            },
        }],
        yAxis: [{
            type: 'value',
            name:"单位：人",
            axisLabel: {
                textStyle: {
                     color: "rgba(219,225,255,1)",
                     margin: 15
                },
               // formatter: '{value} %'
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgba(219,225,255,1)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                show:false,
                lineStyle: {
                    color: "rgba(219,225,255,1)",
                }
            }
        }],
        series: [{
            name: '计划劳务资源',
            type: 'bar',
            data: [38,38,42,48],
            barWidth: 10, //柱子宽度
            barGap: .5, //柱子之间间距
            itemStyle: {
                normal: {
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 153, 239, 0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(66, 187, 255, 1)'
                    }]),
                    opacity: 1,
                }
            }
        }, {
            name: '实际劳务资源',
            type: 'bar',
            data: [40, 30, 42, 50],
            barWidth: 10,
            barGap: .5,
            itemStyle: {
                normal: {
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 242, 159, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(76, 240, 254, 1)'
                    }]),
                    opacity: 1,
                }
            }
        }]
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
      direction: "vertical",
      grabCursor: true,
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
    this.drawVbar();
    // this.textScroll();
    this.percentage = 81;
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
.top_con_middle {
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
                .divitem{
                  margin-right:20px;
                }
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
    }
</style>


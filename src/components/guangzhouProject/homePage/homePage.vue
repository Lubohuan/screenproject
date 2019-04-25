<template>
    <div style="height:100%;width:100%;" class="mainIndexText">
        <!-- 顶部 -->
       <div class="top_con flex_b">
           <!-- 上左页面 -->
           <div class="top_con_left">
               <div style="height:275px;width:100%;margin-bottom:10px;">
                   <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                       <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        项目概况
                    </div>
                    <div class="bg padding10">
                        <div class="flex" style="height:80px">
                            <div class="flex1 font12 marginL30">
                                <div style="margin-bottom:10px;">工程造价</div>
                                <div><span class="font28 bigNum">6.53</span>亿</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                                <div style="margin-bottom:10px;">合同工期</div>
                                <div><span class="font28 bigNum">938</span>天</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                                <div style="margin-bottom:10px;">建筑面积</div>
                                <div><span class="font28 bigNum">11.96</span>万㎡</div>
                            </div>
                        </div>
                        <div class="flex" style="flex-wrap:wrap;margin-bottom:8px;" >
                            <div class="font12 marginL30">
                                <div><img src="../../../assets/index/icon_li.png" alt=""><span class="bigNum"> 建设单位：</span><span>广州金融控股集团有限公司</span></div>
                            </div>
                            <div class="font12 marginL30">
                                <div><img src="../../../assets/index/icon_li.png" alt=""><span class="bigNum"> 设计单位：</span><span>广州市设计院</span></div>
                            </div>
                            <div class="font12 marginL30">
                                <div><img src="../../../assets/index/icon_li.png" alt=""><span class="bigNum"> 总包单位：</span><span>广州建筑股份有限公司</span></div>
                            </div>
                            </div>
                            <div class="flex" style="justify-content: space-around;">
                            <div class="flex1 bg_a margin10 padding5" style="height:70px">
                                <p class="textAlignCenter">创优目标</p>
                                <p class="font12 text_center">安全文明施工项目，建设工程结构优质奖，建设工程优质奖</p>
                            </div>
                            <div class="flex1 bg_b margin10 padding5" style="height:70px">
                                <p class="textAlignCenter">科学创新目标</p>
                                <p class="font12 text_center">省级工法3项，专利3项，QC奖项3项，协会奖项5项</p>
                            </div>
                            <div class="flex1 bg_c margin10 padding5" style="height:70px">
                                <p class="textAlignCenter">绿色施工</p>
                                <p class="font12 text_center">绿色施工项目</p>
                            </div>
                        </div>
                    </div>
               </div>
               <div style="height:235px;width:100%;margin-bottom:10px;position:relative;">
                   <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                       <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        人员管理
                        <span class="font12" style="color:#FEDF50;margin-left:12px;">注意：假期提醒（5.1劳动节，注意劳务稳定性）</span>
                        
                        <div style="float:right;line-height:28px;margin-top:6px;margin-right:18px;">
                            <span style="padding:1px 16px;background-color: #4cbdfe;color: #000;border: 0;color:#fff;cursor:pointer" @click="alertPersonInfo()">详情</span>
                        </div>
                    </div>
                    <div class="bg padding10">
                        <table class="font12" style="width:100%;color:#DBE1FF">
                            <tr style="text-align:center"><td>在场人数</td><td><span class="font28 color_blue">35</span> 人</td><td >用工计划偏差量</td><td><span class="font28 color_blue">0</span>人</td><td>计划人数</td><td><span class="font28 color_blue">35</span>人</td></tr>
                            <tr style="background:rgba(255,255,255,0.15);text-align:center"><td class="color_blue1">累计用工</td><td>700人/日</td><td class="color_blue1">人效同比昨日</td><td class="color_yellow">--</td><td class="color_blue1">连续7日工效</td><td class="color_blue">2%↑</td></tr>                          
                            <tr style="text-align:center"><td >一区</td><td colspan="4">
                                <div class="progress">
                                    <div class="progress-bar bg_a" style="width:50%"></div>
                                </div>
                                </td><td>15</td><td></td></tr>
                            <tr style="text-align:center"><td >二区</td><td colspan="4">
                                <div class="progress">
                                    <div class="progress-bar bg_c" style="width:30%"></div>
                                </div>
                                </td><td>8</td><td></td></tr>
                            <tr style="text-align:center"><td >三区</td><td colspan="4">
                                <div class="progress">
                                    <div class="progress-bar bg_d" style="width:26%"></div>
                                </div>
                                </td><td>7</td><td></td></tr>
                            <tr style="text-align:center"><td >四区</td><td colspan="4">
                                <div class="progress">
                                    <div class="progress-bar bg_b" style="width:18%"></div>
                                </div>
                                </td><td>5</td><td></td></tr>
                        </table>
                        <p class="bigNum font12" style="margin-left:18px;">注意：计划用工数与实际出勤人数一致！</p>
                    </div>
                    <!-- <div class="bg padding10">
                         <div class="flex" style="height:66px">
                            <div class="flex1 font12 marginL30">
                                <div style="margin-bottom:10px;">在册人数</div>
                                <div><span class="font28 bigNum">5522</span>人</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                                <div style="margin-bottom:10px;">在场人数</div>
                                <div><span class="font28 bigNum">2451</span>人</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                                <div style="margin-bottom:10px;">管理人员</div>
                                <div><span class="font28 bigNum">41</span>人</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                                <div style="margin-bottom:10px;">特种工种</div>
                                <div><span class="font28 bigNum">444</span>人</div>
                            </div>
                        </div>
                        <div class="flex" >
                            <div class="flex1">
                                <div class="font12 marginL30"><img src="../../../assets/index/gli.png" alt=""> 管理人员</div>
                                <div class="flex">
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex1">
                                <div class="font12 marginL30"><img src="../../../assets/index/lwu.png" alt=""> 劳务人员</div>
                                <div class="flex1 flex">
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" color="#00F29F" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" color="#00F29F" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" color="#00F29F" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数</div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
               </div>
               <div style="height:130px;width:100%;">
                   <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                       <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        机械管理
                    </div>
                    <div class="bg flex" style="padding:17px 10px">
                        <div class="flex1 font12 marginL30 text_center;" style="cursor:pointer;" @click="showMeic">
                            <div>正常运行</div>
                            <div><span class="font28 bigNum">1</span>台</div>
                        </div>
                        <div class="flex1 font12 marginL30 text_center">
                            <div>离线</div>
                            <div><span class="font28 bigNum color_red">0</span>台</div>
                        </div>
                        <div class="font12" style="line-height: 50px;margin:0 15px">
                            <div><span class="bgcStyle bgcStyle_a" style="">未工作</span> <span class="font28 bigNum  color_green">0</span>台 </div>
                        </div>
                        <div class="font12" style="line-height: 50px;margin:0 15px">
                            <div><span class="bgcStyle bgcStyle_b">故障</span> <span class="font28 bigNum  color_red" >0</span>台 </div>
                        </div>
                        <div class="font12" style="line-height: 50px;margin:0 15px">
                            <div><span class="bgcStyle bgcStyle_c">维保</span> <span class="font28 bigNum  color_yellow">0</span>台 </div>
                        </div>
                    </div>
               </div>
           </div>
           <!-- 上中页面 -->
           <div class="top_con_middle">
               <div style="height:415px;width:100%;background-color:#fff;margin-bottom:10px;" class="middle_bg">
                   <div class="top_ul" style="z-index:1000;">
                       <ul>
                           <li :class="{active:topListIndex == 1}" @click="changetopList(0)">项目总控</li>
                           <li :class="{active:topListIndex == 2}" @click="changetopList(2)">BIM应用</li>
                           <li :class="{active:topListIndex == 2}" @click="changetopList(3)">宣传片</li>
                           <li :class="{active:topListIndex == 2}" @click="changetopList(4)">形象进度</li>
                           <!-- <li :class="{active:topListIndex == 3}" @click="changetopList(3)">视频监控</li>
                           <li :class="{active:topListIndex == 4}" @click="changetopList(4)">无人机</li> -->
                           <!-- <li :class="{active:topListIndex == 5}" @click="changetopList(5)">项目简介</li> -->
                       </ul>
                   </div>
                   <!-- <div class="middle_ul">
                       <ul>
                           <li :class="{active:taskIndex == 1}" @click="changeTask(1)">一区进度</li>
                           <li :class="{active:taskIndex == 2}" @click="changeTask(2)">二区进度</li>
                           <li :class="{active:taskIndex == 3}" @click="changeTask(3)">三区进度</li>
                           <li :class="{active:taskIndex == 4}" @click="changeTask(4)">四区进度</li>
                       </ul>
                   </div> -->
                   <div class="bottom_ul">
                       <ul>
                           <li style="color:#FC0C59"><i class="i_red"></i>重大风险源1个</li>
                           <li style="color:#FEDF50"><i class="i_yellow"></i>危险作业3个</li>
                           <li style="color:#00F7BD"><i class="i_green"></i>质量验收1个</li>
                       </ul>
                   </div>

                   <div v-if="topListIndex==4" style="position:absolute;left:0px;bottom:50px;width:800px;height:132px;background:linear-gradient(179deg,rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%);overflow:hidden">
                       
                       <ul v-if="topListIndex==4" style="text-align:center">
                           <li style="width:120px;margin:10px;float:left">
                               <img src="../../../assets/qualityManage/huwei1.jpg" alt="" width="114px">
                               <p class="font12 text-center" style="margin-top:10px;">一区形象进度</p>
                           </li>
                           <li style="width:120px;margin:10px;float:left">
                               <img src="../../../assets/qualityManage/huwei2.jpg" alt="" width="114px">
                               <p class="font12 text-center" style="margin-top:10px;">二区形象进度</p>
                           </li>
                           <li style="width:120px;margin:10px;float:left">
                               <img src="../../../assets/qualityManage/huwei3.jpg" alt="" width="114px">
                               <p class="font12 text-center" style="margin-top:10px;">三区形象进度</p>
                           </li>
                           <li style="width:120px;margin:10px;float:left">
                               <img src="../../../assets/qualityManage/huwei4.jpg" alt="" width="114px">
                               <p class="font12 text-center" style="margin-top:10px;">四区形象进度</p>
                           </li>
                       </ul>
                       <ul v-if="taskIndex==2">
                           <li style="width:120px;margin:10px">
                               <img src="../../../assets/manageMachine/4.jpg" alt="" width="114px">
                               <p class="font12 text-center" style="margin-top:10px;">一区2019.1.2进度</p>
                           </li>
                           <li style="width:120px;margin:10px">
                               <img src="../../../assets/index/pic1.png" alt="" width="114px">
                               <p class="font12 text-center" style="margin-top:10px;">一区2019.1.2进度</p>
                           </li>
                       </ul>
                       <ul v-if="taskIndex==3">
                           <li style="width:120px;margin:10px">
                               <img src="../../../assets/manageMachine/1.jpg" alt="" width="114px">
                               <p class="font12 text-center" style="margin-top:10px;">一区2019.1.2进度</p>
                           </li>
                           <li style="width:120px;margin:10px">
                               <img src="../../../assets/manageMachine/2.jpg" alt="" width="114px">
                               <p class="font12 text-center" style="margin-top:10px;">一区2019.1.2进度</p>
                           </li>
                           <li style="width:120px;margin:10px">
                               <img src="../../../assets/index/pic1.png" alt="" width="114px">
                               <p class="font12 text-center" style="margin-top:10px;">一区2019.1.2进度</p>
                           </li>
                       </ul>
                       <ul v-if="taskIndex==4">
                           <li style="width:120px;margin:10px">
                               <img src="../../../assets/manageMachine/3.jpg" alt="" width="114px">
                               <p class="font12 text-center" style="margin-top:10px;">一区2019.1.2进度</p>
                           </li>
                       </ul>
                   </div>
                   <!-- 摄像头 -->
                   <div class="camera" v-if="topListIndex==0">
                        <div class="camera_loc" style="top: 100px;left: 300px;" @click="openPic(0)">
                            <img v-show="indexItem!=0" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==0" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
                            <!-- <img v-show="indexItem==0" src="../../../assets/manageMachine/4.jpg" alt="" width="130" height="92" style="border:2px solid rgb(31, 40, 75,0.8);left:-45px;bottom:5px;"> -->
                        </div>
                        <div class="camera_loc" style="top: 280px;left: 130px;" @click="openPic(1)">
                            <img v-show="indexItem!=1" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==1" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
                            <!-- <img v-show="indexItem==1" src="../../../assets/manageMachine/3.jpg" alt="" width="130" height="92" style="border:2px solid rgb(31, 40, 75,0.8);left:-45px;bottom:5px;"> -->
                        </div>
                        <div class="camera_loc" style="top: 330px;left: 520px;" @click="openPic(2)">
                            <img v-show="indexItem!=2" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==2" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
                            <!-- <img v-show="indexItem==2" src="../../../assets/manageMachine/2.jpg" alt="" width="130" height="92" style="border:2px solid rgb(31, 40, 75,0.8);left:-45px;bottom:5px;"> -->
                        </div>
                        <div class="camera_loc" style="top: 160px;left: 560px;" @click="openPic(3)">
                            <img v-show="indexItem!=3" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
                            <img v-show="indexItem==3" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
                            <!-- <img v-show="indexItem==3" src="../../../assets/manageMachine/1.jpg" alt="" width="130" height="92" style="border:2px solid rgb(31, 40, 75,0.8);left:-45px;bottom:5px;"> -->
                        </div>
                   </div>
                   <!-- 隐患 -->
                   <div class="hidden"  v-if="topListIndex==0">
                        <div class="hidden_loc" style="top: 100px;left: 220px;" @mouseenter="openhidden(0)" @mouseleave="closehidden(0)">
                            <div class="icon_hidden" style="top: 130px;left: 80px;">
                                <img src="../../../assets/index/yellow_loc.png" alt="">
                            </div>
                            <div v-show="hiddenIndexItem==0"  class="alertHidden" style="left:0px;bottom:0px;z-index:999;position:relative;">
                                <dl>
                                    <dt><span>较大隐患</span><span>安全防护</span></dt>
                                    <dd>斜撑梁局部防护缺失</dd>
                                    <dd>整改责任人：张富立</dd>
                                    <dd>复查人：陈力</dd>
                                    <dd>整改期限：2019-05-01</dd>
                                </dl>
                                <img src="../../../assets/manageMachine/1.jpg" alt="" width="100" style="position:absolute;top:20px;right:20px;">
                            </div>
                        </div>
                        <div class="hidden_loc" style="top: 150px;left: 300px;" @mouseenter="openhidden(1)" @mouseleave="closehidden(1)">
                            <div class="icon_hidden" style="top:130px;left:80px;">
                                <img src="../../../assets/index/yellow_loc.png" alt="">
                            </div>
                            <div v-show="hiddenIndexItem==1" class="alertHidden" style="left:0px;bottom:0px;z-index:999;position:relative;">
                                <dl>
                                    <dt><span>较大隐患</span><span>安全防护</span></dt>
                                    <dd>斜撑梁局部防护缺失</dd>
                                    <dd>整改责任人：张富立</dd>
                                    <dd>复查人：陈力</dd>
                                    <dd>整改期限：2019-05-01</dd>
                                </dl>
                                <img src="../../../assets/manageMachine/4.jpg" alt="" width="100" style="position:absolute;top:20px;right:20px;">
                            </div>
                        </div>
                        <div class="hidden_loc" style="top: 110px;left: 340px;" @mouseenter="openhidden(2)" @mouseleave="closehidden(2)">
                            <div class="icon_hidden" style="top:130px;left:80px;">
                                <img src="../../../assets/index/yellow_loc.png" alt="">
                            </div>
                            <div v-show="hiddenIndexItem==2" class="alertHidden" style="left:0px;bottom:0px;z-index:999;position:relative;">
                                <dl>
                                    <dt><span>较大隐患</span><span>安全防护</span></dt>
                                    <dd>斜撑梁局部防护缺失</dd>
                                    <dd>整改责任人：张富立</dd>
                                    <dd>复查人：陈力</dd>
                                    <dd>整改期限：2019-05-01</dd>
                                </dl>
                                <img src="../../../assets/manageMachine/3.jpg" alt="" width="100" style="position:absolute;top:20px;right:20px;">
                            </div>
                        </div>
                        
                        <div class="hidden_loc" style="top: 50px;left: 400px;" @mouseenter="openhidden(3)" @mouseleave="closehidden(3)">
                            <div class="icon_hidden" style="top:130px;left:80px;">
                                <img src="../../../assets/index/green_loc.png" alt="">
                            </div>
                            <div v-show="hiddenIndexItem==3" class="alertHidden" style="left:0px;bottom:0px;z-index:999;position:relative;">
                                <dl>
                                    <dt style="color:#00F29F;"><span>质量验收</span></dt>
                                    <dd>验收部位:成防水样板验收</dd>
                                    <dd>责任人：谭楚才</dd>
                                    <dd>验收时间：2019-04-01</dd>
                                </dl>
                                <img src="../../../assets/manageMachine/2.jpg" alt="" width="100" style="position:absolute;top:20px;right:20px;">
                            </div>
                        </div>
                        
                        <div class="hidden_loc" style="top: 20px;left: 200px;" @mouseenter="openhidden(4)" @mouseleave="closehidden(4)">
                            <div class="icon_hidden" style="top:130px;left:80px;">
                                <img src="../../../assets/index/red_loc.png" alt="">
                            </div>
                            <div v-show="hiddenIndexItem==4" class="alertHidden" style="left:0px;bottom:0px;z-index:999;position:relative;">
                                <dl>
                                    <dt style="color:#FF0100;"><span>重大风险源</span><span>立即整改</span></dt>
                                    <dd>基坑支护与降水工程</dd>
                                    <dd>等级:一级</dd>
                                    <dd>整改责任人:刘鹏</dd>
                                    <dd>整改期限：2019-05-01</dd>
                                </dl>
                                <img src="../../../assets/manageMachine/4.jpg" alt="" width="100" style="position:absolute;top:20px;right:20px;">
                            </div>
                        </div>
                   </div>
                   <div v-if="topListIndex==5" style="position:absolute;top:0px;left:0px;background:#1D284D;width:100%;height:100%">
                       <div style="padding:60px 20px;">
                           <p style="line-height:40px;text-indent:2em;">广州金控总部大楼项目位于广州市天河区国际金融城起步区AT090938地块，用地面积约8423m²，总建筑面积约11.96万m²，地上31层，地下5层，建筑高度143m.</p>
                           <p style="line-height:40px;text-indent:2em;">本工程主体结构为超高层写字楼为31层，结构高度135.9米，建筑高度142.7米；商业裙房为5层，主要屋面标高为26.50米，采用钢筋混凝土框架结构。地下共5层，人防分布在地下五层。采用钢筋混凝土框架-核心筒结构；</p>
                           <p style="line-height:40px;text-indent:2em;">工程计划开工时间为2018年7月25日，竣工时间为2021年1月18日，工程造价6.5亿，工期共938个日历天。</p>
                       </div>
                   </div>
                   
                   <div v-if="topListIndex==2" style="position:absolute;top:0px;left:0px;background:#1D284D;width:100%;height:100%">
                       <video src="https://autobuild-img.oss-cn-beijing.aliyuncs.com/videos/videos/%E5%B9%BF%E5%B7%9E%E9%87%91%E6%8E%A7%E9%A1%B9%E7%9B%AE%E6%96%BD%E5%B7%A5%E6%A8%A1%E6%8B%9F2019.1.2.mp4" style="width:100%;height:100%;" class="raveal_right_bottom_video" id="main_video" poster="" controls="" playsinline="" webkit-playsinline="" autoplay="autoplay" loop="loop">
                            <source src="https://autobuild-img.oss-cn-beijing.aliyuncs.com/videos/videos/%E5%B9%BF%E5%B7%9E%E9%87%91%E6%8E%A7%E9%A1%B9%E7%9B%AE%E6%96%BD%E5%B7%A5%E6%A8%A1%E6%8B%9F2019.1.2.mp4" type="mp4">
                        </video>
                   </div>
                   <div v-if="topListIndex==3" style="position:absolute;top:0px;left:0px;background:#1D284D;width:100%;height:100%">
                        <video src="https://autobuild-img.oss-cn-beijing.aliyuncs.com/videos/videos/%E5%B9%BF%E5%B7%9E%E5%9B%BD%E9%99%85%E9%87%91%E8%9E%8D%E5%9F%8E%E8%B5%B7%E6%AD%A5%E5%8C%BA%E5%BB%BA%E8%AE%BE%E5%B7%A5%E7%A8%8Bbm%E6%BC%AB%E6%B8%B8.mp4" style="width:100%;height:100%;" class="raveal_right_bottom_video" id="main_video" poster="" controls="" playsinline="" webkit-playsinline="" autoplay="autoplay" loop="loop">
                            <source src="https://autobuild-img.oss-cn-beijing.aliyuncs.com/videos/videos/%E5%B9%BF%E5%B7%9E%E5%9B%BD%E9%99%85%E9%87%91%E8%9E%8D%E5%9F%8E%E8%B5%B7%E6%AD%A5%E5%8C%BA%E5%BB%BA%E8%AE%BE%E5%B7%A5%E7%A8%8Bbm%E6%BC%AB%E6%B8%B8.mp4" type="mp4">
                        </video>
                   </div>
               </div>
               <div style="height:235px;width:100%;">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        工程进度
                        <span class="font12" style="color:#76D0DF;margin-left:15px;">计划工期： 938天实际工期： 203天总产值完成情况： 9%( 6022.92万元 / 65340.17万元)</span>
                    </div>
                    <div class="bg padding10">
                        <div style="display:flex;height:174px;">
                            <div class="cir_time" style="margin:10px 0px 0 30px;">
                                <el-progress type="circle" :percentage="30" color="#0dd3ae"  style="transform:rotateZ(-180deg)"></el-progress>
                                <p class="text_center">已施工(天)</p>
                                <div class="time_size">203</div>
                            </div>
                            <div class="progress_time">
                                <ul class="flex">
                                    <li>
                                        <i class="loading"></i>
                                       <div>
                                            <p>2018.8</p>
                                            <p>开工时间</p>
                                       </div>
                                    </li>
                                    <li>
                                        <i class="loading"></i>
                                        <div>
                                            <p>2019.1</p>
                                            <p>基坑开挖</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="loading"></i>
                                        <div>
                                            <p>2019.4</p>
                                            <p>地下室底板完成</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="loading"></i>
                                        <div>
                                            <p>2019.8</p>
                                            <p>地下室-5～1F结构封顶</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="loading"></i>
                                        <div>
                                            <p>2020.2</p>
                                            <p>22F结构完成</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="loading"></i>
                                        <div>
                                            <p>2020.4</p>
                                            <p>主体封顶</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="loading"></i>
                                        <div>
                                            <p>2021.3</p>
                                            <p>整体竣工</p>
                                        </div>
                                    </li>
                                </ul>
                                <div class="color_time">
                                     <i class="now_loading"></i>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                
               </div>
           </div>
           <!-- 上右页面 -->
           <div class="top_con_right green_construct">
               <div style="height:185px;width:100%;margin-bottom:10px;">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        绿色施工
                    </div>
                    <div class="bg padding10 bg_h" >
                        <div style="height:125px;width:202px;float:left;border-right:1px solid rgba(255,255,255,0.1);display:flex; flex-direction: column;">
                            <div class="flex1 flex text_center" style="justify-content: space-around;">
                                <div class="flex1"><img src="../../../assets/index/cloudy.png" alt="" width="58px" height="58px"></div>
                                <div class="flex1" style="font-size:18px;padding-top: 16px;"><span style="font-size:36px;">26</span>℃</div>
                                <div class="flex1" style="color:#FEDF50;font-size:16px;padding-top: 22px;">多云</div>
                            </div>
                            <div class="flex1 flex"  style="flex-direction:column;">
                                <div class="flex">
                                    <div class="flex1 font12"><img src="../../../assets/index/wind.png" alt=""> 南风2级 </div>
                                    <div class="flex1 font12"><img src="../../../assets/index/temperature.png" alt=""> 100% </div>
                                    <div class="flex1 font12"><img src="../../../assets/index/rainfall.png" alt=""> 67% </div>
                                </div>
                                <div class="flex">
                                    <div class="flex1 font12"><img src="../../../assets/index/pm25.png" alt=""> 21 </div>
                                    <div class="flex1 font12"><img src="../../../assets/index/pm10.png" alt=""> 33 </div>
                                    <div class="flex1 font12"><img src="../../../assets/index/noise.png" alt=""> 45dB </div>
                                </div>
                            </div>
                        </div>
                        <div style="height:125px;width:202px;float:left;border-right:1px solid rgba(255,255,255,0.1);display:flex; flex-direction: column;">
                            <div class="flex1 flex">
                                <div class="flex1 text_center">
                                    <p class="font12">明天</p>
                                    <img src="../../../assets/index/rain.png" alt="" width="34px">
                                </div>
                                <div class="flex1 text_center">
                                    <p class="font12">后天</p>
                                    <img src="../../../assets/index/rain.png" alt="" width="34px">
                                </div>
                                <div class="flex1 text_center">
                                    <p class="font12">大后天</p>
                                    <img src="../../../assets/index/rain.png" alt="" width="34px">
                                </div>
                            </div>
                            <div class="flex1 flex">
                                <div class="flex1 text_center">
                                    <p style="font-size:14px;margin:8px 0"><span class="font28">26</span>℃</p>
                                    <p class="font12" style="color:#FEDF50;padding-top:5px;">雨 <img src="../../../assets/index/warning.png" alt="" width="20px"></p>
                                </div>
                                <div class="flex1 text_center">
                                    <p style="font-size:14px;margin:8px 0"><span class="font28">27</span>℃</p>
                                    <p class="font12" style="color:#FEDF50;padding-top:5px;">雨 <img src="../../../assets/index/warning.png" alt="" width="20px"></p>
                                </div>
                                <div class="flex1 text_center">
                                    <p style="font-size:14px;margin:8px 0"><span class="font28">23</span>℃</p>
                                    <p class="font12" style="color:#FEDF50;padding-top:5px;">雨 <img src="../../../assets/index/warning.png" alt="" width="20px"></p>
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
                                        <p>22</p>
                                    </div>
                                    <div class="flex1 text_center" >
                                        <span class="blue_cir cir"></span>
                                        <p>23</p>
                                    </div>
                                </div>
                                <div class="flex1 flex">
                                    <div class="flex1 text_center" >
                                        <span class="blue_cir cir"></span>
                                        <p>24</p>
                                    </div>
                                    <div class="flex1 text_center" >
                                        <span class="red_cir cir"></span>
                                        <p>25</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               <div style="height:220px;width:100%;margin-bottom:10px;">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        质量问题类型统计
                    </div>
                    <div class="bg padding10" style="height:160px;">
                        <!-- <table style="width:100%" class="quality">
                            <tr class="font12" style="color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><th>排名</th><th>分包单位</th><th>通过率（问题数）</th><th>周环比</th></tr>
                            <tr class="font12" style="text-align:center;"><td><img src="../../../assets/index/frist.png" alt=""></td><td>我是分包单位一</td><td>99%（30）</td><td class="up_data">10%↑</td></tr>
                            <tr class="font12" style="text-align:center;"><td><img src="../../../assets/index/second.png" alt=""></td><td>我是分包单位一</td><td>99%（30）</td><td class="down_data">10%↓</td></tr>
                            <tr class="font12" style="text-align:center;"><td><img src="../../../assets/index/third.png" alt=""></td><td>我是分包单位一</td><td>99%（30）</td><td class="up_data">10%↑</td></tr>
                            <tr class="font12" style="text-align:center;"><td style="color:#7A9BBF;font-size:16px;">4</td><td>我是分包单位一</td><td>99%（30）</td><td class="up_data">10%↑</td></tr>
                            <tr class="font12" style="text-align:center;"><td style="color:#7A9BBF;font-size:16px;">5</td><td>我是分包单位一</td><td>99%（30）</td><td class="up_data">10%↑</td></tr>
                        </table> -->
                        <div id="echart-pie" style="width:100%;height:100%"></div>
                    </div>
               </div>
               <div style="height:235px;width:100%;">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        安全管理
                        <span class="font12" style="color:#4CF0FE;margin-left:12px;">整改率：100% 累计检查：131次</span>
                    </div>
                    <div class="bg padding10">
                        <div class="flex">
                            <div class="flex1 font12 marginL30 text_center" style="cursor:pointer;" @click="dangerShowAlert = true">
                                <div>今日重大危险源</div>
                                <div><span class="font28 color_red">1</span></div>
                            </div>
                            <div class="flex1 font12 marginL30 text_center">
                            <div>今日危险作业</div>
                            <div><span class="font28 bigNum">0</span></div>
                            </div>
                            <div class="flex1 font12 marginL30 text_center">
                            <div>超期隐患</div>
                            <div><span class="font28 bigNum">0</span></div>
                            </div>
                            <div class="flex1 font12 marginL30 text_center">
                            <div>未销重大隐患</div>
                            <div><span class="font28 bigNum">0</span></div>
                            </div>
                        </div>
                        <!-- <div id="goodsChart" :style="{width: '100%', height: '175px'}"></div> -->
                        <div id="myChart" :style="{width: '100%', height: '120px'}"></div>
                    </div>
                </div>
           </div>
       </div>
       <!-- 底部页面 -->
       <div class="bottom_con flex_b">
           <div style="height:100%;width:540px;">
                <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                    <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                    物资收量偏差分析
                    <div style="float:right;line-height:26px;margin-top:6px;margin-right:18px;border:1px solid #33558c;" class="echart_goods">
                        <span style="padding:3px 25px;background-color: #4cbdfe;color: #000;border: 0;">本月</span>
                        <span style="padding:5px 25px;">累计</span>
                    </div>
                </div>
                <!-- <div class="bg padding10">
                    <div class="flex">
                        <div class="flex1 font12 marginL30">
                        <div>今日重大危险源</div>
                        <div><span class="font28 bigNum">6</span></div>
                        </div>
                        <div class="flex1 font12 marginL30">
                        <div>今日危险作业</div>
                        <div><span class="font28 bigNum">6</span></div>
                        </div>
                        <div class="flex1 font12 marginL30">
                        <div>超期隐患</div>
                        <div><span class="font28 bigNum">0</span></div>
                        </div>
                        <div class="flex1 font12 marginL30">
                        <div>未销重大隐患</div>
                        <div><span class="font28 bigNum">60</span></div>
                        </div>
                    </div>
                    <div id="myChart" :style="{width: '100%', height: '162px'}"></div>
                </div> -->
                
                <div class="bg padding10" style="height:204px">
                    <table style="width:100%;border-collapse:collapse;">
                        <tr class="font12 text_center" style="line-height:42px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>物资名称</td><td>发货量（吨）</td><td>验收量（吨）</td><td>偏差率</td></tr>
                        <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>钢材</td><td>151.52</td><td>151.52</td><td class="color_yellow">0%</td></tr>
                        <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>商品混凝土</td><td>177</td><td>177</td><td class="color_yellow">0%</td></tr>
                    </table>
                </div>
           </div>
           <div style="height:100%;width:calc(100% - 1080px);box-sizing: border-box;padding:0 10px;">
                <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                    <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                    昨日完成
                </div>
               <div class="bg padding10">
                    <table style="width:100%;border-collapse:collapse;">
                        <tr class="font12 text_center" style="line-height:42px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>序号</td><td>施工区域</td><td>计划完成比</td><td>安全</td><td>质量</td><td>物资</td></tr>
                        <tr class="font12 text_center" style="line-height:41px;"><td>1</td><td>施工一区</td><td style="text-align:left;padding-left:25px;" class="color_yellow"><i class="i_yellow"></i>95%</td><td style="cursor:pointer;" @click="dialogVisible = true"><i class="i_yellow"></i>检查3次 未消项1个</td><td><i class="i_green"></i>验收1次 通过</td><td rowspan="4"><i class="i_green"></i>验收1次 通过</td></tr>
                        <tr class="font12 text_center" style="line-height:41px;"><td>2</td><td>施工二区</td><td style="text-align:left;padding-left:25px;" class="color_green"><i class="i_green"></i>100%</td><td><i class="i_red"></i>检查4次 未消项0个</td><td><i class="i_green"></i>验收2次 通过</td></tr>
                        <tr class="font12 text_center" style="line-height:41px;"><td>3</td><td>施工三区</td><td style="text-align:left;padding-left:25px;" class="color_yellow"><i class="i_yellow"></i>98%</td><td><i class="i_green"></i>检查2次 未消项0个</td><td><i class="i_green"></i>验收2次 通过</td></tr>
                        <tr class="font12 text_center" style="line-height:41px;"><td>4</td><td>施工四区</td><td style="text-align:left;padding-left:25px;" class="color_green"><i class="i_green"></i>100%</td><td><i class="i_red"></i>检查2次 未消项0个</td><td><i class="i_green"></i>验收4次 通过</td></tr>
                    </table>
                </div>
                
                <!-- <div class="bg padding10" style="padding-top:15px">
                    <div id="goodsChart" style="width:100%;height:200px"></div>
                </div> -->
           </div>
           <div style="height:100%;width:540px;">
                <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                    <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                    明日计划
                </div>
                <div class="bg padding10">
                    <table style="width:100%;border-collapse:collapse;">
                        <tr class="font12 text_center" style="line-height:42px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>劳务人员数量</td><td>机械</td><td>物资</td><td>风险预估</td><td>待处理</td></tr>
                        <tr class="font12 text_center" style="line-height:41px;"><td>15</td><td>-</td><td rowspan="4">物资进场1次</td><td style="text-align:left;padding-left:15px;"><i class="i_yellow"></i>小到中雨</td><td>-</td></tr>
                        <tr class="font12 text_center" style="line-height:41px;"><td>8</td><td>-</td><td style="text-align:left;padding-left:15px;"><i class="i_red"></i>重大危险源 雨</td><td>-</td></tr>
                        <tr class="font12 text_center" style="line-height:41px;"><td>7</td><td>-</td><td style="text-align:left;padding-left:15px;"><i class="i_yellow"></i>小到中雨</td><td>-</td></tr>
                        <tr class="font12 text_center" style="line-height:41px;"><td>5</td><td>-</td><td style="text-align:left;padding-left:15px;"><i class="i_yellow"></i>小到中雨</td><td>-</td></tr>
                    </table>
                </div>
           </div>
       </div>
        <!-- 人员列表弹框 -->
        <div v-if="showInfo" style="position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:9999;background:rgba(0,0,0,0.5)">
            <div style="position:absolute;top:50%;left:50%;height:500px;width:1080px;transform:translate(-50%,-50%);">
                <div v-if="showInfo" style="position:absolute;left:0px;top:0px;z-index:999;width:540px;border:5px solid rgba(76, 189, 254, 0.2);">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        人员列表
                        <span style="float:right;margin-right:10px;cursor:pointer;" @click="closeInfo"><img src="../../../assets/index/close.png" alt=""></span>
                    </div>
                    <div class="bg padding10" style="height:440px;">
                        <div style="height:410px">

                        <table style="width:100%;border-collapse:collapse;" v-if="tableOffset==1" >
                            <tr class="font12 text_center" style="line-height:42px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>姓名</td><td>教育类型</td><td>受教育单位</td><td>教育负责人</td><td>教育时间</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(0)"><td>朱锦海</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>李文</td><td>2018-11-01</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(1)"><td>黄国伟</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>李文</td><td>2019-01-19</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(2)"><td>区伟雄</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>李文</td><td>2019-01-19</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(3)"><td>杨佳雄</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>李文</td><td>2019-01-19</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(4)"><td>陈师铭</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>李文</td><td>2018-11-01</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(0)"><td>朱锦海</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>张国华</td><td>2018-11-01</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(1)"><td>黄国伟</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>张国华</td><td>2019-01-19</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(2)"><td>区伟雄</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>袁华</td><td>2019-01-19</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(3)"><td>杨佳雄</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>袁华</td><td>2019-01-19</td></tr>
                        </table>
                        <table style="width:100%;border-collapse:collapse;" v-if="tableOffset==2">
                            <tr class="font12 text_center" style="line-height:42px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>姓名</td><td>教育类型</td><td>受教育单位</td><td>教育负责人</td><td>教育时间</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(4)"><td>陈师铭</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>李文杰</td><td>2018-11-01</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(0)"><td>朱锦海</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>何洁文</td><td>2018-11-01</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(1)"><td>黄国伟</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>何洁文</td><td>2019-01-19</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(2)"><td>区伟雄</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>何洁文</td><td>2019-01-19</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(1)"><td>黄国伟</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>何洁文</td><td>2019-01-19</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(2)"><td>区伟雄</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>宋珊珊</td><td>2019-01-19</td></tr>
                            <tr class="font12 text_center" style="line-height:40px;border-bottom:1px solid rgba(46,73,112,0.5);cursor:pointer;" @click="personInfoList(3)"><td>杨佳雄</td><td>三级教育</td><td>广州市通力建筑劳务派遣有限公司</td><td>宋珊珊</td><td>2019-01-19</td></tr>
                        </table>
                        
                        </div>
                        <el-pagination
                        small
                        layout="prev, pager, next"
                        :total="18"
                        @current-change="handleCurrentChange"
                        style="margin-top:4px;">
                        </el-pagination>
                    </div>
                </div>
                
                <div v-if="showInfo" style="position:absolute;left:550px;top:0px;z-index:999;width:540px;border:5px solid rgba(76, 189, 254, 0.2);">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        人员信息    
                        <span style="float:right;margin-right:10px;cursor:pointer;" @click="closeInfo"><img src="../../../assets/index/close.png" alt=""></span>
                    
                    </div>
                    <div class="bg padding10 font12" style="height:460px;width:100%;box-sizing:border-box;">
                        <div style="float:left;width:230px;height:100%;margin:0 10px 0 30px;border-right:1px solid rgba(46,73,112,0.5)">
                            <div style="line-height:35px">
                                <div style="width:90px;float:left"><img :src="list.url" alt="" width="60" height="70" style="margin-top:20px"></div>
                                <div style="width:calc(100% - 90px);float:left">
                                    <div><span>{{list.name}}</span><span class="color_blue1" style="margin-left:20px;">民族: </span>{{list.page01}}</div>
                                    <div><span class="color_blue1">性别: </span>{{list.page02}}<span class="color_blue1" style="margin-left:20px;">年龄: </span>{{list.page03}}</div>
                                    <div><span class="color_blue1">出生日期: </span>{{list.page04}}</div>
                                </div>
                            </div>
                            <div style="line-height:35px"><span class="color_blue1">身份证号码: </span>{{list.page05}}</div>
                            <div style="line-height:35px"><span class="color_blue1">籍贯: </span>{{list.page06}}</div>
                            <div style="line-height:35px"><span class="color_blue1">住址: </span>{{list.page07}}</div>
                            <div style="line-height:35px"><span class="color_blue1">政治面貌: </span>{{list.page08}}</div>
                            <div style="line-height:35px"><span class="color_blue1">入册工龄: </span>{{list.page09}}</div>
                            <div style="line-height:35px"><span class="color_blue1">是否加入公会: </span>{{list.page010}}</div>
                            <div style="line-height:35px"><span class="color_blue1">文化程度: </span>{{list.page011}}</div>
                            <div style="line-height:35px"><span class="color_blue1">是否有重大病史: </span>{{list.page012}}</div>
                            <div style="line-height:35px"><span class="color_blue1">联系电话: </span>{{list.page013}}</div>
                        </div>
                        <div style="width:calc(100% - 290px);float:left;padding-left:10px;">
                            <div style="line-height:35px"><span class="color_blue1">当前工种: </span>{{list.page11}}</div>
                            <div style="line-height:35px"><span class="color_blue1">当前状态: </span>{{list.page12}}</div>
                            <div style="line-height:35px"><span class="color_blue1">所在项目: </span>{{list.page13}}</div>
                            <div style="line-height:35px"><span class="color_blue1">参建单位: </span>{{list.page14}}</div>
                            <div style="line-height:35px"><span class="color_blue1">班组: </span>{{list.page15}}</div>
                            <div style="line-height:35px"><span class="color_blue1">进场日期: </span>{{list.page16}}</div>
                            <div style="line-height:35px"><span class="color_blue1">退场日期: </span>{{list.page17}}</div>
                            <div style="line-height:35px"><span class="color_blue1">人员评分: </span>{{list.page18}}</div>
                            <div style="line-height:35px"><span class="color_blue1">安全教育学时: </span>{{list.page19}}</div>
                            <div style="line-height:35px"><span class="color_blue1">违章记录: </span>{{list.page110}}</div>
                            <div style="line-height:35px"><span class="color_blue1">加分记录: </span>{{list.page111}}</div>
                            <div style="line-height:35px"><span class="color_blue1">体检信息: </span>{{list.page112}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 塔机信息弹框 -->
        <div v-if="showMeicInfo" style="position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:9999;background:rgba(0,0,0,0.5)">
            
            <div style="position:absolute;top:50%;left:50%;height:340px;width:680px;transform:translate(-50%,-50%);border:5px solid rgba(76, 189, 254, 0.2)">
                <div style="background:#1D284D;height:340px">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        塔机信息    
                        <span style="float:right;margin-right:10px;cursor:pointer;" @click="closeInfo"><img src="../../../assets/index/close.png" alt=""></span>
                    </div>
                    <div style="margin:20px;width:260px;float:left">
                        <img src="../../../assets/index/meic.png" alt="" height="260">
                        <div style="position:absolute;">

                        </div>
                    </div>
                    <div style="margin:20px 10px;padding:0 30px;width:298px;float:left;border-left:1px solid rgba(46,73,112,0.5)">
                        <div style="line-height:35px"><span class="color_blue1">设备信息: </span>1#塔吊</div>
                        <div style="line-height:35px"><span class="color_blue1">起重机械登记证登记编号: </span>粤AE-T04635</div>
                        <div style="line-height:35px"><span class="color_blue1">型号: </span>QTR160</div>
                        <div style="line-height:35px"><span class="color_blue1">制造单位: </span>东莞市毅新庆江机械制造有限公司</div>
                        <div style="line-height:35px"><span class="color_blue1">出厂编号: </span>T2019012</div>
                        <div style="line-height:35px"><span class="color_blue1">出厂日期: </span>2019.02.18</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 隐患记录 -->
        <el-dialog title="提示" width="20%" top="300px" :visible.sync="dialogVisible" >
            <div class="modal hulingModal" style="height:400px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">隐患记录</span>
                </div>
                <div class="all-height flex ai-center close" @click="dialogVisible = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                  <p>项目名称:<span>广州金控总部大楼项目</span></p>
                  <p>检查部位:<span>基坑</span></p>
                  <p>隐患类型:<span>文明施工</span></p>
                  <p>隐患等级:<span>违章</span></p>
                  <p>所属区域:<span>-3F</span></p>
                  <p>状态:<span>已整改</span></p>
                  <p>检查人:<span>吴艺昌（安全部）</span></p>
                  <p>提交时间:<span>2019-04-25 16:23:36</span></p>
                </div>
              </div>
            </div>
          </el-dialog>
          <el-dialog title="提示" width="20%" top="300px" :visible.sync="dangerShowAlert" >
            <div class="modal hulingModal" style="height:400px;width: 400px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">重大危险源预警</span>
                </div>
                <div class="all-height flex ai-center close" @click="dangerShowAlert = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                  <p>危险源名称:<span>模板工程及支持体系</span></p>
                  <p>等级:<span>一级</span></p>
                  <p>施工责任人:<span>刘鹏</span></p>
                  <p>主要事故类型:<span>坍塌</span></p>
                  <p style="margin-right:30px;">管控措施:<span>A:做到先设计后施工 B:组织整体验收，设计人员参与验收 C:精心设计浇砼方案，确保模板支持均衡受载</span></p>
                </div>
              </div>
            </div>
          </el-dialog>
    </div>
</template>
<script>
   
    export default {
        name: 'homePage',
        data() {
            return {
                camera:'',
                indexItem:-1,
                hiddenIndexItem:-1,
                alertPersonInfoShow:false,
                showInfo:false,
                taskIndex:0,
                showMeicInfo:false,
                dialogVisible: false,
                dangerShowAlert:false,
                topListIndex:0,
                listPersons:[
                    {
                        url:'http://autobuild-img.1357.cn/plans/20190425/Wyya6HnJ53RHSAM5eB.png',
                        name:'朱锦海',
                        page01:'汉族',
                        page02:'男',
                        page03:'34',
                        page04:'1984-09-29',
                        page05:'445******1830',
                        page06:'广东省惠来县',
                        page07:'广东省惠来县惠城镇元春元春西面直巷17号',
                        page08:'群众',
                        page09:'1年',
                        page010:'否',
                        page011:'小学',
                        page012:'否',
                        page013:'14714796444',
                        page11:'杂工',
                        page12:'已进场',
                        page13:'广州金控总部大楼项目',
                        page14:'广州市通力建筑劳务派遣有限公司',
                        page15:'岑应威杂工班组',
                        page16:'2018-11-01',
                        page17:'-',
                        page18:'60',
                        page19:'-学时',
                        page110:'-次',
                        page111:'-次',
                        page112:'-',
                    },
                    {
                        url:'http://autobuild-img.1357.cn/plans/20190425/dWk5HH5P7z2PMjAxdT.png',
                        name:'黄国伟',
                        page01:'汉族',
                        page02:'男',
                        page03:'41',
                        page04:'1977-12-29',
                        page05:'441******7179',
                        page06:'广东省龙川县',
                        page07:'广州市芳村区观鹤五巷3号101房',
                        page08:'群众',
                        page09:'1年',
                        page010:'否',
                        page011:'小学',
                        page012:'否',
                        page013:'13660324073',
                        page11:'杂工',
                        page12:'已退场',
                        page13:'广州金控总部大楼项目',
                        page14:'广州市通力建筑劳务派遣有限公司',
                        page15:'岑应威杂工班组',
                        page16:'2019-01-19',
                        page17:'2019-04-08',
                        page18:'60',
                        page19:'-学时',
                        page110:'-次',
                        page111:'-次',
                        page112:'-',
                    },
                    {
                        url:'http://autobuild-img.1357.cn/plans/20190425/xjybFBiDtze6Ysnfwt.png',
                        name:'区伟雄',
                        page01:'汉族',
                        page02:'男',
                        page03:'59',
                        page04:'1960-04-03',
                        page05:'440******4070',
                        page06:'广东省广州市东山区',
                        page07:'广州市东山区区庄村25号902房',
                        page08:'群众',
                        page09:'1年',
                        page010:'否',
                        page011:'大专',
                        page012:'否',
                        page013:'3850741892',
                        page11:'杂工',
                        page12:'已进场',
                        page13:'广州金控总部大楼项目',
                        page14:'广州市通力建筑劳务派遣有限公司',
                        page15:'岑应威杂工班组',
                        page16:'2019-01-19',
                        page17:'-',
                        page18:'60',
                        page19:'-学时',
                        page110:'-次',
                        page111:'-次',
                        page112:'-',
                    },
                    {
                        url:'http://autobuild-img.1357.cn/plans/20190425/6HZr8ZpmpNNQBDHzmS.png',
                        name:'杨佳雄',
                        page01:'汉族',
                        page02:'男',
                        page03:'24',
                        page04:'1995-04-14',
                        page05:'441******8838',
                        page06:'广东省海丰县',
                        page07:'广东省海丰县海城镇海珠社区居民委员会龙山新村一巷43号',
                        page08:'群众',
                        page09:'1年',
                        page010:'否',
                        page011:'高中',
                        page012:'否',
                        page013:'18620959337',
                        page11:'杂工',
                        page12:'已进场',
                        page13:'广州金控总部大楼项目',
                        page14:'广州市通力建筑劳务派遣有限公司',
                        page15:'岑应威杂工班组',
                        page16:'2019-01-19',
                        page17:'-',
                        page18:'60',
                        page19:'-学时',
                        page110:'-次',
                        page111:'-次',
                        page112:'-',
                    },
                    {
                        url:'http://autobuild-img.1357.cn/plans/20190425/aRFs5teMjGCn7bd7bB.png',
                        name:'陈师铭',
                        page01:'汉族',
                        page02:'男',
                        page03:'29',
                        page04:'1989-12-16',
                        page05:'440******0637',
                        page06:'广东省广州市东山区',
                        page07:'广州市越秀区执信南路39号702房',
                        page08:'群众',
                        page09:'1年',
                        page010:'否',
                        page011:'小学',
                        page012:'否',
                        page013:'17502052427',
                        page11:'杂工',
                        page12:'已进场',
                        page13:'广州金控总部大楼项目',
                        page14:'广州市通力建筑劳务派遣有限公司',
                        page15:'岑应威杂工班组',
                        page16:'2018-10-30',
                        page17:'2019-04-22',
                        page18:'60',
                        page19:'-学时',
                        page110:'-次',
                        page111:'-次',
                        page112:'-',
                    },
                ],
                list:{},
                tableOffset:1,
            }
        },
        mounted(){
            this.drawLine();
            this.drawPie();
            // this.goodsChart();
        },
        created(){
            // this.personInfoList(0);
        },
        methods: {
            handleCurrentChange(val){
                this.tableOffset = val;
            },
            personInfoList(index){
                this.list = this.listPersons[index];
            },
            showMeic(){
                this.showMeicInfo = true;
            },
            changeTask(index){
                this.taskIndex = index;
            },
            changetopList(index){
                this.topListIndex = index;
            },
            alertPersonInfo(){
                this.showInfo = true;
                this.alertPersonInfoShow = true;
                this.personInfoList(0);
            },
            closeInfo(){
                this.showInfo = false;
                this.showMeicInfo = false;
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
            closehidden(index){
                this.hiddenIndexItem = -1;
            },
            drawPie() {
                var myChart = this.$echarts.init(document.getElementById("echart-pie"));
               
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
                        data:[
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
           drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))

                
                // 绘制图表
                myChart.setOption({
                    backgroundColor: "#1D284D",
                    tooltip: {
                        },
                    grid: {
                        top: '8%',
                        left: '5%',
                        right: '5%',
                        bottom: '8%',
                        containLabel: true,
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: { show: false,},
                        data: ['施工一区', '施工二区', '施工三区', '施工四区'],
                    },
                    yAxis: {
                        name : '(次)',
                        type: 'value',
                        min: 0,
                        splitNumber:3,
                        splitLine: {
                            show: false
                        },
                        axisLine: {show: false,},
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: { show: false,},  
                    },
                    series: [{
                    name: '安全检查',
                    type: 'line',
                    smooth: true, //是否平滑曲线显示
                            symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                    symbolSize:5,
                    itemStyle:{
                        normal: {
                        color: "#3deaff"   // 线条颜色
                        }
                    },
                    lineStyle: {
                        normal: {
                        color: "rgba(84,97,187, 1)"   // 线条颜色
                        }
                    },
                    areaStyle: { //区域填充样式
                                normal: {
                                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0.7,  color: 'rgba(84,97,187, 1)'}, 
                                    { offset: 1,  color: 'rgba(74,208,181, 1)'}
                                    ], false)
                            }
                        },
                    data: [1, 2, 5, 3]
                    }]
                });
            },
            goodsChart(){
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
                        data: ['平整度', '垂直度', '截面尺寸'],
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
                        data: [
                            '混凝土',
                            '砂子',
                            '模版'
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
                        name:'(合格率)',
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
                        name: '平整度',
                        type: 'bar',
                        data: [20, 50, 80, 58, 83, 68, 57, 80],
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
                        name: '垂直度',
                        type: 'bar',
                        data: [50, 70, 60, 61, 75, 87, 60, 62],
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
                    }, {
                        name: '截面尺寸',
                        type: 'bar',
                        data: [50, 70, 60, 61, 75, 87, 60, 62],
                        barWidth: 10,
                        barGap: 1,
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1,
                                    color: '#E07C76'
                                }, {
                                    offset: 0,
                                    color: '#DF5CB4'
                                }]),
                                opacity: 1,
                            }
                        }
                    }]
                })
            }
        },
        created() {
            
        },
    }
    
</script>
<style lang="scss" scoped>
  @import "homePage.scss";
  
</style>
<style lang="scss" scoped>

.mainIndexText {
  width: 100%;
  height:100%;
  color: #fff;
  table tr {
    line-height: 26px;
  }
  table.quality tr th {
    line-height: 29px;
  }
  table tr th {
      border-top:0; 
  }
  table tr td:first-of-type {
      border-top:0; 
      border-left:0; 
  }
  table tr td:last-of-type {
      border-right:0; 
  }
  table tr:last-of-type td {
      border-bottom:0; 
  }
  table tr .up_data {
      color: #00F7BD;
  }
  table tr .down_data {
      color: #FC0C59;
  }
  // 进度条
  .progress {
    width: 95%;
    height: 8px;
    background-color: rgba(255,255,255,0.3);
    .progress-bar {
      height: 8px;
    }
  }
  
  .circleProgress {
    font-size: 30px;
    .el-progress__text {
      height: 50px;
    }
  }



//  绿色施工
    .green_construct {
        color:#DFFAFF;
        .bg_h {
            height: 125px;
        }
        p {
            margin: 5px 0;
        }
        .cir {
            width: 16px;
            height: 16px;
            display: inline-block;
            border-radius: 50%;
            border: 1px solid #fff;
        }
        .blank_cir {
            background-color: #151515;
        }
        .blue_cir {
            background-color: #1500CC;
        }
        .red_cir {
            background-color: #FF0100;
        }
        .img_border {
            border: 1px dotted #DFFAFF;
        }
        .echart_goods {
            .active {
                background-color: #4cbdfe;
                color: #000;
                border: 0;
            }
            :hover {
                cursor: pointer;
            }
        }
    }
    .top_con_middle {
        .middle_bg {
            position: relative;
            background: #000 url('../../../assets/bg_img.jpg');
            background-size: 100%;
            .top_ul {
                position: absolute;
                left: 0;
                top: 0px;
                ul {
                    li {
                        float: left;
                        width:100px;
                        line-height:40px;
                        background:rgba(23,28,51,0.3);
                        text-align: center;
                        color: #4CF0FE;
                        margin-right: 2px;
                    }
                    li:hover {
                        cursor: pointer;
                        background-color: rgba(76,240,254,0.7);
                        color:#fff;
                    }
                    .active {
                        background-color: rgba(76,240,254,0.7);
                        color:#fff;
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
                        line-height:40px;
                        background:rgba(23,28,51,0.3);
                        text-align: center;
                        color: #4CF0FE;
                        margin-bottom: 2px;
                        
                    }
                    li:hover {
                        cursor: pointer;
                        background-color: rgba(76,240,254,0.7);
                        color:#fff;
                    }
                }
                .active {
                    background-color: rgba(76,240,254,0.7);
                    color:#fff;
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
                        width: 263px;
                        height: 124px;
                        background: transparent url('../../../assets/index/alert_bg.png');
                        padding: 6px 20px;
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
            box-shadow:0px 2px 8px 15px rgba(36,158,154,0.18);
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
    .progress_time {
        position: relative;
        margin-left: 50px;
        margin-top: 60px;
        width: 600px;
        border-top: 4px solid rgba(0,0,0,0.15);
        li {
            position: relative;
            flex:1;
            font-size: 12px;
            padding: 10px;
            i {
                position: absolute;
                top: -7px; 
                left: -5px;
            }
            div {
                position: relative;
                top: 6px; 
                left: -20px;
                p {
                    line-height: 24px;
                    padding-right: 5px;
                }
            }
            .loading {
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: linear-gradient(180deg,rgba(0,242,159,1) 0%,rgba(76,240,254,1) 100%);
            }
        }
        .color_time {
            position: absolute;
            width: 32%;
            height: 4px;
            top: -4px;
            background: linear-gradient(90deg,rgba(0,242,159,0.28) 0%,rgba(76,240,254,1) 100%);
            .now_loading {
                position: absolute;
                right: -5px;
                top: -10px;
                width: 14px;
                height: 14px;
                background:linear-gradient(180deg,rgba(0,242,159,1) 0%,rgba(76,240,254,1) 100%);
                border:4px solid #224875;
                border-radius: 50%
            }
        }
        
    }

    .modal-content-datail{
    padding: 20px 0px 0px 40px;
    p{
      font-size:14px;
      font-weight:600;
      color:rgba(118,208,223,1);
      line-height: 30px;
      span{
        font-size:14px;
        font-weight:600;
        color:rgba(223,250,255,1);
        margin-left: 4px;
      }
    }
  }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
  
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
}
</style>

<style lang="scss">
// .el-carousel__indicators--outside {
//     display: none;
// }
// .el-carousel__item {
//     height: 120px;
// }
</style>

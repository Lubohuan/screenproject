<template>
    <div style="height:100%;width:100%;" class="mainIndexText">
       <div class="top_con flex_b">
           <div class="top_con_left">
               <div style="height:290px;width:100%;margin-bottom:10px;">
                   <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                       <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        人员总览
                        <span class="font12" style="color:#FEDF50;margin-left:12px;">注意：假期提醒（5.1劳动节，注意劳务稳定性）</span>
                    </div>
                    <div class="bg padding10">
                         <div class="flex" style="height:77px">
                            <div class="flex1 font12 marginL30" style="cursor:pointer" @click="alertPersonNum()">
                                <div style="margin-bottom:10px;">在册人数</div>
                                <div><span class="font28 bigNum">23</span>人</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                                <div style="margin-bottom:10px;">在场人数</div>
                                <div><span class="font28 bigNum">33</span>人</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                                <div style="margin-bottom:10px;">管理人员</div>
                                <div><span class="font28 bigNum">33</span>人</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                                <div style="margin-bottom:10px;">特种工种</div>
                                <div><span class="font28 bigNum">3</span>人</div>
                            </div>
                        </div>
                        <div class="flex" style="padding-bottom:20px">
                            <div class="flex1">
                                <div class="font12 marginL30" style="margin-bottom:20px"><img src="../../../assets/index/gli.png" alt=""> 管理人员</div>
                                <div class="flex">
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">33人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">出勤人数 </div>
                                        <div class="time_size1">33人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在岗人数 </div>
                                        <div class="time_size1">33人</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex1">
                                <div class="font12 marginL30"  style="margin-bottom:20px"><img src="../../../assets/index/lwu.png" alt=""> 劳务人员</div>
                                <div class="flex1 flex">
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" color="#00F29F" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">35人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" color="#00F29F" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">出勤人数 </div>
                                        <div class="time_size1">35人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" color="#00F29F" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在岗人数</div>
                                        <div class="time_size1">35人</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               <div style="height:313px;width:540px;margin-bottom:10px;">
                   <div style="height:313px;width:265px;float:left;margin-right:10px">
                        <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                            <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                                班组人员结构分析
                        </div>
                        <div class="bg padding10" style="height:210px;padding-top:84px">
                            <div id="echart-pie1" style="width:100%;height:152px"></div>
                        </div>
                    </div>
                    <div style="height:313px;width:265px;float:left;">
                        <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                            <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                                班组人员年龄分析
                        </div>
                        <div class="bg padding10" style="height:210px;padding-top:84px">
                            <div id="echart-pie2" style="width:100%;height:152px"></div>
                        </div>
                    </div>
               </div>
           </div>
           <div class="top_con_middle">
               <div style="height:290px;width:100%;margin-bottom:10px;" class="middle_bg">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                            现场出勤人数统计
                    </div>
                    <div class="bg padding10" style="padding-top:15px">
                        <div id="goodsChart" style="width:100%;height:223px"></div>
                    </div>
               </div>
               <div style="height:273px;width:100%;">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        出勤人数详情
                    </div>
                    <div class="bg padding10" style="padding-bottom:13px;">
                       <table style="width:100%;border-collapse:collapse;color:#DFFAFF">
                            <tr class="font12 text_center" style="line-height:56px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>班组名称</td><td>应到人数</td><td>实到人数</td><td>缺勤人数</td><td>出勤率</td></tr>
                            <tr class="font12 text_center" style="line-height:56px;border-bottom:1px solid #2E4970"><td>防水班组</td><td>4</td><td>4</td><td>0</td><td class="color_green1">100%</td></tr>
                            <tr class="font12 text_center" style="line-height:56px;border-bottom:1px solid #2E4970"><td>地锚班组</td><td>17</td><td>17</td><td>0</td><td class="color_green1">100%</td></tr>
                            <tr class="font12 text_center" style="line-height:56px;border-bottom:1px solid #2E4970"><td>普工班组</td><td>11</td><td>11</td><td>0</td><td class="color_green1">100%</td></tr>
                            <tr class="font12 text_center" style="line-height:56px;border-bottom:1px solid #2E4970"><td>塔吊班组</td><td>3</td><td>3</td><td>0</td><td class="color_green1">100%</td></tr>
                        </table>
                    </div>
                
               </div>
           </div>
           <div class="top_con_right green_construct">
               <div style="height:125px;width:100%;margin-bottom:10px;">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        天气情况
                    </div>
                    <div class="bg padding10 bg_h" >
                        <div style="height:65px;width:259px;float:left;border-right:1px solid rgba(255,255,255,0.1);display:flex; flex-direction: column;">
                            <div class="flex1 flex text_center" style="justify-content: space-around;">
                                <div class="flex1"><img src="../../../assets/index/cloudy.png" alt="" width="58px" height="58px"></div>
                                <div class="flex1" style="font-size:18px;padding-top: 16px;"><span style="font-size:36px;">22</span>℃</div>
                                <div class="flex1" style="color:#FEDF50;font-size:16px;padding-top: 22px;">阴天</div>
                            </div>
                            <!-- <div class="flex1 font12" style="line-height:70px;padding-left:15px">
                                <img src="../../../assets/index/warning.png" alt=""> 高温预警，室外作业不宜超过6小时
                            </div> -->
                        </div>
                        <div style="height:65px;width:259px;float:left;display:flex; flex-direction: column;">
                            <div class="flex1 flex text_center" style="justify-content: space-around;">
                                <div class="flex1"><img src="../../../assets/index/feng.png" alt="" width="58px" height="58px"></div>
                                <div class="flex1" style="font-size:18px;padding-top: 16px;"><span style="font-size:36px;">2</span>级</div>
                                <div class="flex1" style="color:#FEDF50;font-size:16px;padding-top: 22px;">风力</div>
                            </div>
                            <!-- <div class="flex1 font12" style="line-height:70px;padding-left:15px">
                                <img src="../../../assets/index/warning.png" alt=""> 大风二级预警：应停止高空作业
                            </div> -->
                        </div>
                    </div>
               </div>
               <div style="height:258px;width:100%;margin-bottom:10px;">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        最新动态
                    </div>
                    <div class="bg padding10 dynamic" style="height:198px;overflow:hidden">
                        <ul>
                            <li v-for="(item,index) in listPersons" :key="index" style="cursor:pointer" @click="personInfoList1(index)">
                                <img :src="item.url" alt="">
                                <div class="dynamic_con">
                                    <div><span>{{item.name}}</span><span style="margin-left:15px">{{item.page11}}</span></div>
                                    <div><span>{{item.page16}}</span></div>
                                </div>
                                <div class="dynamic_btn">
                                    <span v-if="item.page12=='已进场'" class="btn_Style btn_Style_b">{{item.page12}}</span>
                                    <span v-if="item.page12=='已退场'" class="btn_Style btn_Style_c">{{item.page12}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
               </div>
               <div style="height:223px;width:100%;">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        项目信息
                    </div>
                    <div class="bg" style="height:176px;padding:25px 25px 0;">
                        <div class="flex" style="height:80px">
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">人员预警</div>
                            <div><span class="font28 bigNum">0</span>个</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">证件预警</div>
                            <div><span class="font28 bigNum">0</span>项</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">合同预警</div>
                            <div><span class="font28 bigNum">0</span>人</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">考勤预警</div>
                            <div><span class="font28 bigNum">0</span>项</div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">安全教育培训预警</div>
                            <div><span class="font28 color_yellow">0</span>项</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">安全交底预警</div>
                            <div><span class="font28 color_yellow">0</span>项</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                            </div>
                            <div class="flex1 font12 marginL30">
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
       <div class="bottom_con flex_b">
           <div style="height:100%;width:540px;">
                <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                    <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                    上月薪酬结算
                </div>
                
                <div class="bg padding10">
                    <table style="width:100%;border-collapse:collapse;">
                        <tr class="font12 text_center" style="line-height:44px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>班组名称</td><td>应发工资</td><td>实发工资</td><td>发放比例</td></tr>
                        <tr class="font12 text_center" style="line-height:44px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>防水班组</td><td>14000</td><td>14000</td><td class="color_yellow">100%</td></tr>
                        <tr class="font12 text_center" style="line-height:44px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>地锚班组</td><td>82000</td><td>82000</td><td class="color_yellow">100%</td></tr>
                        <tr class="font12 text_center" style="line-height:44px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>普工班组</td><td>49000</td><td>49000</td><td class="color_yellow">100%</td></tr>
                        <tr class="font12 text_center" style="line-height:44px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>塔吊班组</td><td>22000</td><td>22000</td><td class="color_yellow">100%</td></tr>
                    </table>
                </div>
           </div>
           <div style="height:100%;width:calc(100% - 1080px);box-sizing: border-box;padding:0 10px;">
                <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                    <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                    劳务人员概况
                </div>
               <div class="bg padding10">
                    <table style="width:100%;border-collapse:collapse;">
                        <tr class="font12 text_center" style="line-height:44px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>劳务单位名称</td><td>已登记人数</td><td>证件已验证</td><td>在场施工</td><td>已进行安全教育者</td><td>已完成技术交底</td><td>刷卡率</td><td>安全教育覆盖率</td><td>近三天退场</td><td>特殊工种</td></tr>
                        <tr class="font12 text_center" style="line-height:44px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>防水班组</td><td>4</td><td>4</td><td>4</td><td>4</td><td>4</td><td class="color_green1">100%</td><td class="color_green1">100%</td><td>0</td><td>0</td></tr>
                        <tr class="font12 text_center" style="line-height:44px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>地锚班组</td><td>17</td><td>17</td><td>17</td><td>17</td><td>17</td><td class="color_green1">100%</td><td class="color_green1">100%</td><td>0</td><td>0</td></tr>
                        <tr class="font12 text_center" style="line-height:44px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>普工班组</td><td>11</td><td>11</td><td>11</td><td>11</td><td>11</td><td class="color_green1">100%</td><td class="color_green1">100%</td><td>0</td><td>0</td></tr>
                        <tr class="font12 text_center" style="line-height:44px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>塔吊班组</td><td>3</td><td>3</td><td>3</td><td>3</td><td>3</td><td class="color_green1">100%</td><td class="color_green1">100%</td><td>0</td><td>3</td></tr>
                    </table>
                </div>
           </div>
           
           <div style="height:100%;width:540px;box-sizing: border-box;">
                <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                       <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        人员管理
                        <span class="font12" style="color:#FEDF50;margin-left:12px;">注意：假期提醒（5.1劳动节，注意劳务稳定性）</span>
                        
                        <div style="float:right;line-height:28px;margin-top:6px;margin-right:18px;">
                            <span style="padding:1px 16px;background-color: #4cbdfe;color: #000;border: 0;color:#fff;cursor:pointer" @click="alertPersonInfo()">详情</span>
                        </div>
                    </div>
                    <div class="bg padding10">
                        <table class="font12 personlistTable" style="width:100%;color:#DBE1FF">
                            <tr style="text-align:center"><td>在场人数</td><td><span class="font28 color_blue">35</span> 人</td><td >用工计划偏差量</td><td><span class="font28 color_blue">0</span>人</td><td>计划人数</td><td><span class="font28 color_blue">35</span>人</td></tr>
                            <tr style="background:rgba(255,255,255,0.15);text-align:center;"><td class="color_blue1">累计用工</td><td>700人日</td><td class="color_blue1">人效同比昨日</td><td class="color_yellow">--</td><td class="color_blue1">连续7日工效</td><td class="color_blue">2%↑</td></tr>                          
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
                        <p class="bigNum font12" style="margin-left:18px;height:14px">注意：计划用工数与实际出勤人数一致！</p>
                    </div>
           </div>
       </div>
        <!-- 人员列表弹框 -->
        <div v-if="showInfo" style="position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:9999;background:rgba(0,0,0,0.8)">
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
        
        <!-- 在册人数 -->    
        <el-dialog title="提示" width="50%" top="300px" :visible.sync="showPersonNum" >
            <div class="modal hulingModal" style="height:500px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">在册人数</span>
                </div>
                <div class="all-height flex ai-center close" @click="showPersonNum = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                    <div id="pieEcharts" style="width:100%;height:460px"></div>
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

    <!-- 人员详情 -->
          <el-dialog title="提示" width="50%" top="300px" :visible.sync="personShowAlert" >
            <div class="modal hulingModal" style="height:500px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">人员信息</span>
                </div>
                <div class="all-height flex ai-center close" @click="personShowAlert = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                    <div class="bg padding10 font12" style="height:460px;width:100%;box-sizing:border-box;color:#fff">
                        <div style="float:left;width:400px;height:100%;margin:0 10px 0 30px;border-right:1px solid rgba(46,73,112,0.5)">
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
                        <div style="width:calc(100% - 560px);float:left;padding-left:40px;">
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
                showInfo:false,
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
                showPersonNum:false,
                dangerShowAlert:false,
                personShowAlert:false
            }
        },
        mounted(){
            
            // this.drawLine();
            this.drawPie1();
            this.drawPie2();
            this.goodsChart();
        },
        methods: {
            // 在册人数
            alertPersonNum(){
                this.showPersonNum = true;
                this.$nextTick(_=>{
                    this.pieEcharts();
                })
            },
            handleCurrentChange(val){
                this.tableOffset = val;
            },
            openPic(index){
                this.indexItem = index;
            },
            openhidden(index){
                this.hiddenIndexItem = index;
            },
            closeInfo(){
                this.showInfo = false;
                this.personShowAlert = false;
            },
            
            alertPersonInfo(){
                this.showInfo = true;
                this.personInfoList(0);
            },
            
            personInfoList(index){
                this.list = this.listPersons[index];
            },
            personInfoList1(index){
                this.personShowAlert = true;
                this.list = this.listPersons[index];
            },
            pieEcharts(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('pieEcharts'))
                // 绘制图表
                var option = {
                    title:  {
                        text: '在册人员结构',
                        textStyle:{
                            color: '#fff',
                            fontSize:20,
                            lineHeight:30
                        },
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c}人 ({d}%)"
                    },
                    legend: {
                        orient: 'horizontal',
                        icon: 'circle',
                        bottom: 20,
                        x: 'center',
                        textStyle: {
                            color: '#fff'
                        },
                        data: ['施工岗位', '资料岗位', '技术岗位', '质量岗位', '管理层', '商务成本岗位', '安全岗位', '物资岗位', '综合管理岗位']
                    },
                    series: [{
                        name: '在线人员结构',
                        type: 'pie',
                        radius: '68%',
                        center: ['50%', '50%'],
                        data: [{
                            value: 30,
                            name: '施工岗位',
                            label: {
                                normal: {
                                    formatter: '{d}'
                                }
                            }
                        }, {
                            value: 18,
                            name: '资料岗位',
                            label: {
                                normal: {
                                    formatter: '{d}'
                                }
                            }
                        }, {
                            value: 12,
                            name: '技术岗位',
                            label: {
                                normal: {
                                    formatter: '{d}'
                                }
                            }
                        }, {
                            value: 9,
                            name: '质量岗位',
                            label: {
                                normal: {
                                    formatter: '{d}'
                                }
                            }
                        }, {
                            value: 9,
                            name: '管理层',
                            label: {
                                normal: {
                                    formatter: '{d}'
                                }
                            }
                        }, {
                            value: 9,
                            name: '商务成本岗位',
                            label: {
                                normal: {
                                    formatter: '{d}%'
                                }
                            }
                        }, {
                            value: 6,
                            name: '安全岗位',
                            label: {
                                normal: {
                                    formatter: '{d}'
                                }
                            }
                        }, {
                            value: 3,
                            name: '物资岗位',
                            label: {
                                normal: {
                                    formatter: '{d}'
                                }
                            }
                        }, {
                            value: 3,
                            name: '综合管理岗位',
                            label: {
                                normal: {
                                    formatter: '{d}'
                                }
                            }
                        }],
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#999',
                                    fontSize: 14,
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderWidth: 0,
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }],
                    color: [
                        '#699ad0',
                        '#df8244',
                        '#a5a5a5',
                        '#f6c143',
                        '#4d72be',
                        '#7eab55',
                        '#335e8d',
                        '#944c20',
                        '#636363'
                    ],
                    backgroundColor: '#1D284D'
                };
                myChart.setOption(option)
            },
            drawPie1() {
                var myChart = this.$echarts.init(document.getElementById("echart-pie1"));
               
                var data = [
                    { value: 4, name: "防水班组", color0: "#FF687D", color1: "#FC0C59" },
                    { value: 17, name: "地锚班组", color0: "#FCDE54", color1: "#F7BA2A" },
                    { value: 11, name: "普工班组", color0: "#15E09B", color1: "#1DBD6B" },
                    { value: 3, name: "塔吊班组", color0: "#BFE579", color1: "#8BC644" }
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
                    series: [
                    {
                        name: "班组人员",
                        type: "pie",
                        radius: ["45%", "70%"],
                        center: ["50%", "50%"],
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
            drawPie2() {
                var myChart = this.$echarts.init(document.getElementById("echart-pie2"));
               
                var data = [
                    { value: 0, name: "18岁以下", color0: "#FF687D", color1: "#FC0C59" },
                    { value: 5, name: "18-29岁", color0: "#FCDE54", color1: "#F7BA2A" },
                    { value: 12, name: "30-39岁", color0: "#15E09B", color1: "#1DBD6B" },
                    { value: 12, name: "40-49岁", color0: "#BFE579", color1: "#8BC644" },
                    {value: 6,name: "50-55岁",color0: "rgba(13,138,212,1)",color1: "rgba(60,181,251,1)"},
                    {value: 0,name: "60岁以上",color0: "#FF687D", color1: "#FC0C59"},
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

                    series: [
                    {
                        name: "年龄结构",
                        type: "pie",
                        radius: ["45%", "70%"],
                        center: ["50%", "50%"],
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
                    xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: { //坐标轴刻度标签的相关设置
                        textStyle: {
                        color: '#6a9cd5',
                        margin:15,
                        },
                    },
                    axisTick: { show: false,},
                    data: ['施工一区', '施工二区', '施工三区', '施工四区'],
                    }],
                    yAxis: [{
                    name : '(次)',
                    type: 'value',
                    min: 0,
                    splitLine: {
                        show: false
                    },
                    axisLine: {show: false,},
                    axisLabel: {
                        margin:20,
                        textStyle: {
                        color: '#6a9cd5',
                        
                        },
                    },
                    axisTick: { show: false,},  
                    }],
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
                        color: "#3deaff"   // 线条颜色
                        }
                    },
                    areaStyle: { //区域填充样式
                                normal: {
                                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0,  color: 'rgba(61,234,255, 0.9)'}, 
                                    { offset: 0.7,  color: 'rgba(61,234,255, 0)'}
                                    ], false),

                                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                            }
                        },
                    data: [22, 24, 20, 30]
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
                        data: ['管理人员出勤人数', '班组人员出勤人数'],
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
                        data: ['4月20日',
                            '4月21日',
                            '4月22日',
                            '4月23日',
                            '4月24日',
                            '4月25日',
                            '4月26日',
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
                        name: '管理人员出勤人数',
                        type: 'bar',
                        data: [16,15,33,33,33,33,35],
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
                        name: '班组人员出勤人数',
                        type: 'bar',
                        data: [18,15,35,35,35,35,35],
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
            }
        },
        created() {
            
        },
    }
    
</script>
<style lang="scss" scoped>
  @import "userManager.scss";
  
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
    width: 80%;
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
    .progress_time {
        position: relative;
        margin-left: 50px;
        margin-top: 60px;
        width: 600px;
        border-top: 4px solid rgba(0,0,0,0.15);
        li {
            position: absolute;
            top: -20px;
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
            width: 60%;
            height: 4px;
            top: -4px;
            background: linear-gradient(90deg,rgba(0,242,159,0.28) 0%,rgba(76,240,254,1) 100%);
            .now_loading {
                position: absolute;
                right: -5px;
                top: -10px;
                width: 14px;
                height: 14px;
                background-color: #00F29F;
                border:4px solid #156064;
                border-radius: 50%
            }
        }
        
    }
    .dynamic {
        li {
            float: left;
            padding: 10px 0px 10px 10px;
        }
        img {
            float: left;
            width: 60px;
            height: 76px;
        }
        .dynamic_con {
            float: left;
            height: 80px;
            width: 110px;
            font-size: 12px;
            padding: 0 0 0 14px;
            div {
                line-height: 30px;
            }
        }
        .dynamic_btn {
            float: left;
            line-height: 20px;
            font-size: 12px;
            .btn_Style {
                display: inline-block;
                text-align: center;
                width: 52px;
                height: 19px;
                line-height:19px;
                margin-right: 10px;
            }
            .btn_Style_a {
                color:#FEDF50;
                background-color: rgba(254,223,80,0.2);
            }
            .btn_Style_b {
                color:#00F7BD;
                background-color: rgba(0,247,189,0.2);
            }
            .btn_Style_c {
                color:#FC0C59;
                background-color: rgba(252,12,89,0.2);
            }
        }
    }

    .personlistTable {
        td {
            line-height: 33px;
        }
    }

    .color_blue1 {
        color: #4CBDFE;
    }
    
}
</style>

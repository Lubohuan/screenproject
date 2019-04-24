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
                        <div class="flex" style="padding-bottom:20px">
                            <div class="flex1">
                                <div class="font12 marginL30" style="margin-bottom:20px"><img src="../../../assets/index/gli.png" alt=""> 管理人员</div>
                                <div class="flex">
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" width="70" stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" width="70" stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" width="70" stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex1">
                                <div class="font12 marginL30"  style="margin-bottom:20px"><img src="../../../assets/index/lwu.png" alt=""> 劳务人员</div>
                                <div class="flex1 flex">
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" color="#00F29F" width="70" stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" color="#00F29F" width="70" stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数 </div>
                                        <div class="time_size1">80人</div>
                                    </div>
                                    <div class="cir_time marginR30">
                                        <el-progress type="circle" :percentage="65" color="#00F29F" width="70" stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                                        <div class="text_loc text_center font12">在场人数</div>
                                        <div class="time_size1">80人</div>
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
                            <tr class="font12 text_center" style="line-height:46px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>班组名称</td><td>应到人数</td><td>实到人数</td><td>缺勤人数</td><td>出勤率</td></tr>
                            <tr class="font12 text_center" style="line-height:46px;border-bottom:1px solid #2E4970"><td>劳务班组1</td><td>60</td><td>30</td><td>30</td><td class="color_green1">60.0%</td></tr>
                            <tr class="font12 text_center" style="line-height:46px;border-bottom:1px solid #2E4970"><td>劳务班组1</td><td>60</td><td>30</td><td>30</td><td class="color_green1">50.0%</td></tr>
                            <tr class="font12 text_center" style="line-height:46px;border-bottom:1px solid #2E4970"><td>劳务班组1</td><td>60</td><td>30</td><td>30</td><td class="color_red">20.0%</td></tr>
                            <tr class="font12 text_center" style="line-height:46px;border-bottom:1px solid #2E4970"><td>劳务班组1</td><td>60</td><td>30</td><td>30</td><td class="color_green1">50.0%</td></tr>
                            <tr class="font12 text_center" style="line-height:46px;border-bottom:1px solid #2E4970"><td>劳务班组1</td><td>60</td><td>30</td><td>30</td><td class="color_green1">50.0%</td></tr>
                        </table>
                    </div>
                
               </div>
           </div>
           <div class="top_con_right green_construct">
               <div style="height:185px;width:100%;margin-bottom:10px;">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        天气情况
                    </div>
                    <div class="bg padding10 bg_h" >
                        <div style="height:125px;width:259px;float:left;border-right:1px solid rgba(255,255,255,0.1);display:flex; flex-direction: column;">
                            <div class="flex1 flex text_center" style="justify-content: space-around;">
                                <div class="flex1"><img src="../../../assets/index/cloudy.png" alt="" width="58px" height="58px"></div>
                                <div class="flex1" style="font-size:18px;padding-top: 16px;"><span style="font-size:36px;">10</span>℃</div>
                                <div class="flex1" style="color:#FEDF50;font-size:16px;padding-top: 22px;">多云</div>
                            </div>
                            <div class="flex1 font12" style="line-height:70px;padding-left:15px">
                                <img src="../../../assets/index/warning.png" alt=""> 高温预警，室外作业不宜超过6小时
                            </div>
                        </div>
                        <div style="height:125px;width:259px;float:left;border-right:1px solid rgba(255,255,255,0.1);display:flex; flex-direction: column;">
                            <div class="flex1 flex text_center" style="justify-content: space-around;">
                                <div class="flex1"><img src="../../../assets/index/feng.png" alt="" width="58px" height="58px"></div>
                                <div class="flex1" style="font-size:18px;padding-top: 16px;"><span style="font-size:36px;">10</span>级</div>
                                <div class="flex1" style="color:#FEDF50;font-size:16px;padding-top: 22px;">风力</div>
                            </div>
                            <div class="flex1 font12" style="line-height:70px;padding-left:15px">
                                <img src="../../../assets/index/warning.png" alt=""> 大风二级预警：应停止高空作业
                            </div>
                        </div>
                    </div>
               </div>
               <div style="height:185px;width:100%;margin-bottom:10px;">
                    <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                        <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                        最新动态
                    </div>
                    <div class="bg padding10 dynamic" style="height:125px;">
                        <ul>
                            <li>
                                <img src="../../../assets/index/pic1.png" alt="">
                                <div class="dynamic_con">
                                    <div><span>某某某</span><span>木工</span></div>
                                    <div><span>2019-04-20</span></div>
                                </div>
                                <div class="dynamic_btn">
                                    <span class="btn_Style btn_Style_a">登记入册</span>
                                </div>
                            </li>
                            <li>
                                <img src="../../../assets/index/pic1.png" alt="">
                                <div class="dynamic_con">
                                    <div><span>某某某</span><span>木工</span></div>
                                    <div><span>2019-04-20</span></div>
                                </div>
                                <div class="dynamic_btn">
                                    <span class="btn_Style btn_Style_b">已入场</span>
                                </div>
                            </li>
                            <li>
                                <img src="../../../assets/index/pic1.png" alt="">
                                <div class="dynamic_con">
                                    <div><span>某某某</span><span>木工</span></div>
                                    <div><span>2019-04-20</span></div>
                                </div>
                                <div class="dynamic_btn">
                                    <span class="btn_Style btn_Style_b">已入场</span>
                                </div>
                            </li>
                            <li>
                                <img src="../../../assets/index/pic1.png" alt="">
                                <div class="dynamic_con">
                                    <div><span>某某某</span><span>木工</span></div>
                                    <div><span>2019-04-20</span></div>
                                </div>
                                <div class="dynamic_btn">
                                    <span class="btn_Style btn_Style_c">已退场</span>
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
                    <div class="bg" style="padding:30px 25px 0;height:183px;">
                        <div class="flex" style="height:80px">
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">人员预警</div>
                            <div><span class="font28 bigNum">6</span>个</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">证件预警</div>
                            <div><span class="font28 bigNum">6</span>项</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">合同预警</div>
                            <div><span class="font28 bigNum">0</span>人</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">考勤预警</div>
                            <div><span class="font28 bigNum">60</span>项</div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">安全教育培训预警</div>
                            <div><span class="font28 color_yellow">16</span>项</div>
                            </div>
                            <div class="flex1 font12 marginL30">
                            <div class="marginB10">安全交底预警</div>
                            <div><span class="font28 color_yellow">26</span>项</div>
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
                        <tr class="font12 text_center" style="line-height:37px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>班组名称</td><td>应发工资</td><td>实发工资</td><td>发放比例</td></tr>
                        <tr class="font12 text_center" style="line-height:37px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>螺旋丸</td><td>5</td><td>30</td><td class="color_yellow">0.2%</td></tr>
                        <tr class="font12 text_center" style="line-height:37px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>螺旋丸</td><td>5</td><td>30</td><td class="color_yellow">0.2%</td></tr>
                        <tr class="font12 text_center" style="line-height:37px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>螺旋丸</td><td>5</td><td>30</td><td class="color_yellow">0.2%</td></tr>
                        <tr class="font12 text_center" style="line-height:37px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>螺旋丸</td><td>5</td><td>30</td><td class="color_yellow">0.2%</td></tr>
                        <tr class="font12 text_center" style="line-height:37px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>螺旋丸</td><td>5</td><td>30</td><td class="color_yellow">0.2%</td></tr>
                    </table>
                </div>
           </div>
           <div style="height:100%;width:calc(100% - 540px);box-sizing: border-box;padding-left:10px;">
                <div style="line-height:40px;background:#283664;font-size:16px;font-weight:500;">
                    <img src="../../../assets/index/icon.png" alt="" width="16px" height="16px" style="margin: -2px 8px 0 12px;">
                    班组人员概况
                </div>
               <div class="bg padding10">
                    <table style="width:100%;border-collapse:collapse;">
                        <tr class="font12 text_center" style="line-height:37px;color:#4CBDFE;background:rgba(255, 255, 255, 0.15);"><td>劳务单位名称</td><td>已登记人数</td><td>证件已验证</td><td>在场施工</td><td>已进行安全教育者</td><td>已完成技术交底</td><td>刷卡率</td><td>安全教育合格率</td><td>近三天退场</td><td>特殊工种</td></tr>
                        <tr class="font12 text_center" style="line-height:37px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>广州大禹防</td><td>12</td><td>5</td><td>7</td><td class="color_red">50%</td><td>4</td><td class="color_red">50%</td><td class="color_red">50%</td><td>4</td><td>12</td></tr>
                        <tr class="font12 text_center" style="line-height:37px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>广州大禹防</td><td>12</td><td>5</td><td>7</td><td class="color_red">80%</td><td>3</td><td class="color_red">50%</td><td class="color_red">50%</td><td>2</td><td>12</td></tr>
                        <tr class="font12 text_center" style="line-height:37px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>广州大禹防</td><td>12</td><td>5</td><td>7</td><td class="color_yellow">50%</td><td>3</td><td class="color_red">50%</td><td class="color_red">50%</td><td>3</td><td>11</td></tr>
                        <tr class="font12 text_center" style="line-height:37px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>广州大禹防</td><td>12</td><td>5</td><td>7</td><td class="color_green">30%</td><td>1</td><td class="color_red">50%</td><td class="color_red">50%</td><td>5</td><td>4</td></tr>
                        <tr class="font12 text_center" style="line-height:37px;border-bottom:1px solid rgba(46,73,112,0.5)"><td>广州大禹防</td><td>12</td><td>5</td><td>7</td><td class="color_green">30%</td><td>1</td><td class="color_red">50%</td><td class="color_red">50%</td><td>5</td><td>4</td></tr>
                    </table>
                </div>
           </div>
       </div>
        
    </div>
</template>
<script>
   
    export default {
        name: 'homePage',
        data() {
            return {
                camera:'',
                indexItem:-1,
                hiddenIndexItem:-1
            }
        },
        mounted(){
            // this.drawLine();
            this.drawPie1();
            this.drawPie2();
            this.goodsChart();
        },
        methods: {
            openPic(index){
                this.indexItem = index;
            },
            openhidden(index){
                this.hiddenIndexItem = index;
            },
            drawPie1() {
                var myChart = this.$echarts.init(document.getElementById("echart-pie1"));
               
                var data = [
                    { value: 20, name: "钢筋工", color0: "#FF687D", color1: "#FC0C59" },
                    { value: 20, name: "水泥工", color0: "#FCDE54", color1: "#F7BA2A" },
                    { value: 20, name: "木工", color0: "#15E09B", color1: "#1DBD6B" },
                    { value: 20, name: "特种工", color0: "#BFE579", color1: "#8BC644" },
                    {
                         value: 20,name: "砌筑工",color0: "rgba(13,138,212,1)",color1: "rgba(60,181,251,1)"
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
                    { value: 20, name: "18岁以下:20人 20%", color0: "#FF687D", color1: "#FC0C59" },
                    { value: 20, name: "水泥工", color0: "#FCDE54", color1: "#F7BA2A" },
                    { value: 20, name: "木工", color0: "#15E09B", color1: "#1DBD6B" },
                    { value: 20, name: "55岁以上:10人 10%", color0: "#BFE579", color1: "#8BC644" },
                    {
                         value: 20,name: "砌筑工",color0: "rgba(13,138,212,1)",color1: "rgba(60,181,251,1)"
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

                    series: [
                    {
                        name: "质量问题",
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
                        data: ['4月17日',
                            '4月18日',
                            '4月19日',
                            '4月20日',
                            '4月21日',
                            '4月22日',
                            '4月23日'
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
                        data: [20, 50, 80, 58, 83, 68, 57],
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
            height: 40px;
        }
        .dynamic_con {
            float: left;
            height: 40px;
            width: 110px;
            font-size: 12px;
            padding: 0 0 0 14px;
            div {
                line-height: 20px;
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
    
}
</style>

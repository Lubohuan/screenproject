<template>
  <div class="huling" style="height:100%;width:100%;">
    <div class="top_con flex_b">
      <div class="top_con_left top_con_left_hll">
        <div class="top_con_left_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>预警中心</h5>
            </div>
          </div>
          <div class="top_con_left_hll_one_top">
            <p>累计预警<span style="color: #FEDF50;font-size: 28px">15</span>次</p>
            <p>今日<span style="color: #FEDF50;font-size: 28px">1</span>次</p>
          </div>
          <div class="top_con_left_hll_one_bottom" style="margin-top: 20px">
            <img src="../../../assets/Aiot-red.png" alt="">
            <p><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #4CBDFE;background: rgba(76,189,254,.2);font-size: 10px">一级预警</span></p>
            <p>08:03</p>
            <p>1#工区高支模形变超限，请及时查看处理</p>
          </div>
          <div class="top_con_left_hll_one_bottom">
            <img src="../../../assets/Aiot-red.png" alt="">
            <p><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">二级预警</span></p>
            <p>07:13</p>
            <p>1#工区有工人未戴安全帽进入施工区域</p>
          </div>
          <div class="top_con_left_hll_one_bottom">
            <img src="../../../assets/Aiot-red.png" alt="">
            <p><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FC0C59;background: rgba(252,12,89,.2);font-size: 10px">三级预警</span></p>
            <p>07:07</p>
            <p>预计今日有阵雨，请提前做好相应准备</p>
          </div>
          <div class="top_con_left_hll_one_bottom">
            <img src="../../../assets/Aiot-red.png" alt="">
            <p><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #4CBDFE;background: rgba(76,189,254,.2);font-size: 10px">一级预警</span></p>
            <p>06:38</p>
            <p>4#工区监测到有人进入危险区域，请及时劝阻</p>
          </div>
        </div>
        <div class="top_con_left_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;position: relative">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>降尘喷淋</h5>
            </div>
          </div>
          <div class="top_con_left_hll_one_top" style="border-bottom: 0">
            <p>今日共喷淋<span style="color: #FEDF50;font-size: 28px">0</span>次</p>
          </div>
          <div class="top_con_left_hll_two" style="display: flex;padding: 0 23px">
            <div class="top_con_left_hll_two_left" style="margin-right: 20px">
              <div class="top_con_left_hll_two_left_img" style="background:linear-gradient(270deg,rgba(0,153,239,0.8) 0%,rgba(66,187,255,1) 100%);">
                <img src="../../../assets/Aiot-pm1.png" alt="">
              </div>
              <div class="top_con_left_hll_two_left_word">
                <p>当前<span style="color: #4CBDFE">21</span></p>
                <p>最高<span style="color: #4CBDFE">31</span></p>
                <p>最低<span style="color: #4CBDFE">17</span></p>
              </div>
            </div>
            <div class="top_con_left_hll_two_left">
              <div class="top_con_left_hll_two_left_img" style="background:linear-gradient(270deg,rgba(39,161,125,1) 0%,rgba(47,214,149,1) 100%);">
                <img src="../../../assets/Aiot-pm2.png" alt="">
              </div>
              <div class="top_con_left_hll_two_left_word">
                <p>当前<span style="color: #00F7BD">33</span></p>
                <p>最高<span style="color: #00F7BD">53</span></p>
                <p>最低<span style="color: #00F7BD">21</span></p>
              </div>
            </div>
          </div>
          <div class="top_con_right_one_notice">
            <img src="../../../assets/Aiot-laba.png" alt="">
            <P style="color: #FC0C59">预警提示 : </P>
            <p>当前空气质量良好，请继续保持</p>
          </div>
        </div>
        <div class="top_con_left_hll_one" style="height:305px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>水电监测</h5>
            </div>
          </div>
          <div class="bg padding10" style="padding-top:10px">
            <div id="goodsChart" style="width:100%;height:223px"></div>
          </div>
          <div class="top_con_right_one_notice">
            <img src="../../../assets/Aiot-laba.png" alt="">
            <P>智能提醒 : </P>
            <p>水电用量与昨日同期基本持平，处于正常范围</p>
          </div>
        </div>
      </div>
      <div class="top_con_middle">
        <div style="height:620px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <img src="../../../assets/Aiot-middle.png" width="100%" height="620" alt="">
        </div>
        <div style="height:305px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>深基坑监测</h5>
            </div>
<!--            <div class="timeSelect" id="timeSelect">-->
<!--              <p>地下水位</p>-->
<!--              <p>土深水平</p>-->
<!--              <p>边坡竖向</p>-->
<!--              <p>边坡水平</p>-->
<!--              <p>地标竖向</p>-->
<!--              <p>建筑竖向</p>-->
<!--            </div>-->
          </div>
          <div class="table" id="scolTab" style="margin-top: 24px;flex: 1;overflow: hidden">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: auto;">
              <thead>
              <tr>
                <th>监测点编号</th>
                <th>深度（m）</th>
                <th >初始值（m）</th>
                <th>上次累计（mm）</th>
                <th >本次变化（m）</th>
                <th >本次累计变化（m）</th>
                <th>变化速率（mm/d）</th>
              </tr>
              </thead>
              <tbody style="overflow-y: auto;">
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
                  <td>To2</td>
                  <td>0.5</td>
                  <td>-53</td>
                  <td>-0.56</td>
                  <td>-0.4</td>
                  <td>-0.96</td>
                  <td><span style="color: #FEDF50">0.2</span></td>
                </tr>
                <tr>
                  <td>To3</td>
                  <td>0.5</td>
                  <td>-269</td>
                  <td>0.85</td>
                  <td>-1.07</td>
                  <td>-0.22</td>
                  <td><span style="color: #FEDF50">0.54</span></td>
                </tr>
                <tr>
                  <td>To4</td>
                  <td>0.5</td>
                  <td>-146</td>
                  <td>0.77</td>
                  <td>-0.03</td>
                  <td>0.74</td>
                  <td><span style="color: #FEDF50">-0.03</span></td>
                </tr>
              </tbody>
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
                <div class="flex1" style="font-size:18px;padding-top: 16px;"><span style="font-size:36px;">26</span>℃</div>
                <div class="flex1" style="color:#FEDF50;font-size:16px;padding-top: 22px;">多云</div>
              </div>
              <div class="flex1 flex"  style="flex-direction:column;">
                <div class="flex">
                  <div class="flex1 font12"><img src="../../../assets/index/wind.png" alt=""> 南风2级 </div>
                  <div class="flex1 font12"><img src="../../../assets/index/temperature.png" alt=""> 26℃ </div>
                  <div class="flex1 font12"><img src="../../../assets/index/rainfall.png" alt=""> 100% </div>
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
                  <p class="font12" style="color:#FEDF50;padding-top:5px;">大雨</p>
                </div>
                <div class="flex1 text_center">
                  <p style="font-size:14px;margin:8px 0"><span class="font28">27</span>℃</p>
                  <p class="font12" style="color:#FEDF50;padding-top:5px;">暴雨 <img src="../../../assets/index/warning.png" alt="" width="20px"></p>
                </div>
                <div class="flex1 text_center">
                  <p style="font-size:14px;margin:8px 0"><span class="font28">23</span>℃</p>
                  <p class="font12" style="color:#FEDF50;padding-top:5px;">大雨</p>
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
                    <p>26</p>
                  </div>
                  <div class="flex1 text_center" >
                    <span class="blue_cir cir"></span>
                    <p>27</p>
                  </div>
                </div>
                <div class="flex1 flex">
                  <div class="flex1 text_center" >
                    <span class="blue_cir cir"></span>
                    <p>28</p>
                  </div>
                  <div class="flex1 text_center" >
                    <span class="red_cir cir"></span>
                    <p>29</p>
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
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>烟雾感应</h5>
            </div>
          </div>
          <div class="top_con_left_hll_one_top" style="border-bottom: 0;margin: 23px 0 0 46px">
            <p style="font-size: 12px;color:rgba(219,225,255,1);">今日共预警<span style="color: #FEDF50;font-size: 28px;padding: 0 4px">1</span>次</p>
          </div>
          <div id="aiot-echart-line" style="width:100%;height:130px"></div>
          <div class="top_con_right_one_notice">
            <img src="../../../assets/Aiot-laba.png" alt="">
            <P>智能提醒 : </P>
            <p>施工一区发生烟雾报警次数最多，请关注</p>
          </div>
        </div>
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>劳动力监测</h5>
            </div>
          </div>
          <div class="ibox-content" style="margin-top: 10px">
            <div id="echart-twoline" style="width:100%;height:200px"></div>
          </div>
          <div class="top_con_right_one_notice">
            <img src="../../../assets/Aiot-laba.png" alt="">
            <P style="color: #FC0C59">预警提示 : </P>
            <p>今日现场施工人数与计划人数基本相符，劳动力满足要求</p>
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
          data: ['水量', '电量'],
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
          data: ['8:00',
            '12:00',
            '16:00',
            '20:00',
            '24:00'
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
          name: '水量',
          type: 'bar',
          data: [3.5, 0, 0, 0, 0],
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
          name: '电量',
          type: 'bar',
          data: [21,0, 0, 0, 0, 0],
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
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("aiot-echart-line"));
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
            min: 0,
            max: 40,
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
            name: "烟雾感应预警",
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
            data: [5, 3, 1, 1]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
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
          data: ["管理人员", "党务人员"],
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
              "12:00",
              "16:00",
              "20:00",
              "24:00",
              "4:00",
              "8:00",
              "12:00"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            min: 0,
            max: 40,
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
            name: "管理人员",
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
                      color: "rgba(76,240,254,.8)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(76,240,254,0.2)"
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
                color: "rgba(76,240,254,.2)"
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
              23,
              36,
              30,
              25,
              18,
              29,
              0
            ]
          },
          {
            name: "党务人员",
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
                      color: "rgba(254,223,80,.6)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(254,223,80,.2)"
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
                color: "rgba(254,223,80,.2)"
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
              36,
              22,
              28,
              19,
              35,
              36,
              0
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
  mounted () {
    this.goodsChart()
    this.drawLine();
    this.drawTwoLine();
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
  .scolTab{
    padding: 0!important;
  }
</style>

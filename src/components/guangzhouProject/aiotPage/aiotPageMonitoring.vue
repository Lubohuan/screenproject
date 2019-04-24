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
                            <td class="center">06:38</td>
                            <td style="padding-left:10px">4#工区监测到有人进入危险区域，请及时劝阻</td>
                        </tr>
                        <tr >
                            <td class="center" ><img src="../../../assets/index/warning1.png" alt="" width="18"> </td>
                            <td class="center btn_Style btn_Style_a">二级预警</td>
                            <td class="center">07:13</td>
                            <td style="padding-left:10px">3#工区有工人未戴安全帽进入施工区域</td>
                        </tr>
                        <tr >
                            <td class="center" ><img src="../../../assets/index/warning2.png" alt="" width="18"> </td>
                            <td class="center btn_Style btn_Style_b">三级预警</td>
                            <td class="center">07:21</td>
                            <td style="padding-left:10px">3#工区有工人未戴安全帽进入施工区域</td>
                        </tr>
                        <tr >
                            <td class="center" ><img src="../../../assets/index/warning3.png" alt="" width="18"> </td>
                            <td class="center btn_Style btn_Style_c">一级预警</td>
                            <td class="center">08:21</td>
                            <td style="padding-left:10px">3#工区有工人未戴安全帽进入施工区域</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>安全帽监控</h5>
            </div>
          </div>
          <div class="">
              <img src="../../../assets/video/video1.png" alt="" width="100%" height="265">
          </div>
        </div>
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>危险区域监控</h5>
            </div>
          </div>
          <div class="">
              <img src="../../../assets/video/video2.png" alt="" width="100%" height="265">
          </div>
        </div>
      </div>
      <div class="top_con_middle">
        <div style="height:620px;width:100%;background-color:#1D284D;margin-bottom:10px;position:relative;">
            <div style="position:absolute;bottom:0;left:0;right:0;background-color:rgba(23,28,51,0.56);line-height:50px;font-size:12px;">
                <div class="float_l" style="padding-left:15px">
                    <img src="../../../assets/index/sheng.png" alt="" width="18">
                    <span style="color:#00F7BD">智能提醒：</span>
                    2台环境监测设备离线，请检查设备网络和现场情况
                </div>
                <ul class="float_r">
                    <li style="color:#FC0C59;float:left;margin-right:15px;"><i class="i_red"></i>报警</li>
                    <li style="color:#FEDF50;float:left;margin-right:15px;"><i class="i_yellow"></i>离线</li>
                    <li style="color:#00F7BD;float:left;margin-right:15px;"><i class="i_green"></i>在线</li>
                </ul>
            </div>
          <img src="../../../assets/Aiot-middle.png" width="100%" height="620" alt="">
        </div>
        <div style="height:305px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>AI预警变化趋势</h5>
            </div>
          </div>
          <div class="table" style="padding-top: 20px">
            <div id="echartsline" style="width:100%;height:240px"></div>
          </div>
        </div>
      </div>
      <div class="top_con_right top_con_right_hll">
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>土地苫盖监测</h5>
            </div>
          </div>
          <div class="">
              <img src="../../../assets/video/video3.png" alt="" width="100%" height="265">
          </div>
        </div>
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>火焰监测</h5>
            </div>
          </div>
          <div class="">
              <img src="../../../assets/video/video4.png" alt="" width="100%" height="265">
          </div>
        </div>
        <div class="top_con_right_hll_one" style="height:305px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>危险区域二监测</h5>
            </div>
          </div>
          <div class="">
              <img src="../../../assets/video/video5.png" alt="" width="100%" height="265">
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
      echartsline(){
          let myChart = this.$echarts.init(document.getElementById('echartsline'))
          var option = {
    backgroundColor: '#1D284D',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['未戴安全帽','危险区域','土地未苫盖','火焰监测'],
        left:'2%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        data: ['12：00',  '16:00'  ,'20:00' , '24:00' , '4;00' ,  '8:00' , '12：00']
    },
    yAxis: [{
        type: 'value',
        
                    splitLine: {
                        show: false
                    },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
    }],
    series: [{
        name: '未戴安全帽',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 1,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12

            }
        },
        data: [1,3,5, 7,9]
    }, {
        name: '危险区域',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [1,3,5, 7,9]
    }, {
        name: '土地未苫盖',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [1,3,5, 7,9]
    }, {
        name: '火焰监测',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [1,3,5, 7,9]
    }]
};
 myChart.setOption(option)
      }
  },
  mounted () {
      this.echartsline();
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

<template>
  <div style="height:100%;width:100%;">
    <div class="top_con flex_b">
      <div class="top_con_left">
        <div style="height:185px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>项目层级</h5>
            </div>
          </div>
          <div class="doubleTable" style="display: flex">
            <div class="table" id="myTable1">
              <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: auto;">
                <tr>
                  <td>发料数</td>
                  <td>今日</td>
                  <td></td>
                </tr>
                <tr>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">70</span>单</td>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">15</span>单</td>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px"></span></td>
                </tr>
                <tr>
                  <td>验收数</td>
                  <td>今日</td>
                  <td>发料数</td>
                </tr>
                <tr>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">70</span>单</td>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">15</span>单</td>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">700</span>单</td>
                </tr>
              </table>
            </div>
            <div class="tableLine" style="width: 1px;height: 113px;background: #2E4970;margin-top: 10px;margin-right: 28px;"></div>
            <div class="table" id="myTable3">
              <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: auto;">
                <tr>
                  <td>发料金额</td>
                  <td>今日</td>
                  <td></td>
                </tr>
                <tr>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">120</span>万</td>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">13</span>万</td>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px"></span></td>
                </tr>
                <tr>
                  <td>验收金额</td>
                  <td>今日</td>
                  <td>供应商总数</td>
                </tr>
                <tr>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">608</span>万</td>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">19</span>万</td>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">68</span>家</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div style="height:225px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>物资收料情况</h5>
            </div>
          </div>
          <div style="padding: 11px 15px">
            <img src="../../../assets/mate-one.png" alt="">
          </div>
        </div>
        <div style="height:248px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>物资收量偏差分析</h5>
            </div>
            <div class="timeSelect">
              <p>本月</p>
              <p>累计</p>
            </div>
          </div>
          <div class="table" style="margin-top: 10px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>物资名称</th>
                  <th >发货量（吨）</th>
                  <th>验收量（吨）</th>
                  <th>偏差率<p class="triangle"></p></th>
                </tr>
              </thead>
              <tr>
                <td>作业类型1</td>
                <td>5</td>
                <td>30</td>
                <td><span style="color: #FEDF50">0.2%</span></td>
              </tr>
              <tr>
                <td>作业类型1</td>
                <td>5</td>
                <td>30</td>
                <td><span style="color: #FEDF50">0.2%</span></td>
              </tr>
              <tr>
                <td>作业类型1</td>
                <td>5</td>
                <td>30</td>
                <td><span style="color: #FEDF50">0.2%</span></td>
              </tr>
              <tr>
                <td>作业类型1</td>
                <td>5</td>
                <td>30</td>
                <td><span style="color: #FEDF50">0.2%</span></td>
              </tr>
            </table>
          </div>
        </div>
        <div style="height:248px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>工作考核统计分析</h5>
            </div>
          </div>
          <div class="table" style="margin-top: 10px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>收料员</th>
                  <th >验收单数</th>
                  <th>滞签次数</th>
                  <th>滞签率<p class="triangle"></p></th>
                </tr>
              </thead>
              <tr>
                <td>螺旋丸</td>
                <td>5</td>
                <td>30</td>
                <td><span style="color: #FEDF50">0.2%</span></td>
              </tr>
              <tr>
                <td>螺旋丸</td>
                <td>5</td>
                <td>30</td>
                <td><span style="color: #FEDF50">0.2%</span></td>
              </tr>
              <tr>
                <td>螺旋丸</td>
                <td>5</td>
                <td>30</td>
                <td><span style="color: #FEDF50">0.2%</span></td>
              </tr>
              <tr>
                <td>螺旋丸</td>
                <td>5</td>
                <td>30</td>
                <td><span style="color: #FEDF50">0.2%</span></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="top_con_middle">
        <div style="height:360px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5 style="margin-right: 28px;height: 39px;line-height: 39px;border-bottom: 1px solid #4CF0FE">物料库存</h5>
              <h5 style="height: 39px;line-height: 39px">物资使用趋势</h5>
            </div>
          </div>
<!--          <div class="drawTuQu" style="padding-right: 40px">-->
<!--            <div id="chartmainbar" style="width:100%; height:320px;"></div>-->
<!--          </div>-->
        </div>
        <div style="height:308px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="table" style="padding-top: 20px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>物资名称</th>
                  <th>规格型号</th>
                  <th >入库总量（吨）</th>
                  <th>出库总（吨）</th>
                  <th>库存余量（吨）</th>
                </tr>
              </thead>
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
        <div style="height:248px;width:100%;background-color:#1D284D;display: flex;flex-direction: column">
          <div class="top_con_right_title" style="height: 40px">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>物资消耗情况</h5>
            </div>
            <div class="title_right" style="display: flex;align-items: center;">
              <el-select v-model="value" placeholder="钢材" id="title_right">
                <el-option
                  id="selectBox"
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <div style="font-size: 12px;margin-left: 10px">单位 : 吨</div>
            </div>
          </div>
          <div class="table" id="scolTab" style="margin-top: 10px;flex: 1;overflow: hidden">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
              <thead>
                <tr>
                  <th>物资名称</th>
                  <th>规格型号</th>
                  <th >领用量</th>
                  <th>计划用量</th>
                  <th>图纸计算量</th>
                  <th>超量</th>
                  <th>领用比</th>
                  <th>超量比</th>
                </tr>
              </thead>
              <tbody style="overflow-y: auto;">
                <tr v-for="(item,index) in 15" :key="index">
                  <td>抗震螺纹钢</td>
                  <td>HRB400ESO</td>
                  <td>30</td>
                  <td>30</td>
                  <td>12</td>
                  <td>4</td>
                  <td><span style="color: #FEDF50">30%</span></td>
                  <td><span style="color: #FC0C59">30%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="top_con_right">
        <div style="height:420px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>工作动态</h5>
            </div>
          </div>
          <div class="ibox-content flex column" style="background: transparent;padding:0;">
            <div class="media">
              <div class="media-body">
                <div class="media-header">
                  <label>质量检查</label>
                  <span class="inline-block">施工一区</span>
                </div>
                <div class="media-content">
                            <span>
                                检查人胡光耀检查了盾构区间，无问题。检查人胡光耀检查了盾构区间 无问题。检查人胡光耀检查了盾构区间，无问题。检查人胡光耀检查。
                            </span>
                </div>
                <div class="media-footer">
                  2019.01.10 23:23
                </div>
              </div>
              <div class="media-right">
                <img src="" alt="">
              </div>
            </div>
            <div class="media">
              <div class="media-body">
                <div class="media-header">
                  <label>质量检查</label>
                  <span class="inline-block">施工一区</span>
                </div>
                <div class="media-content">
                            <span>
                                检查人胡光耀检查了盾构区间，无问题。检查人胡光耀检查了盾构区间 无问题。检查人胡光耀检查了盾构区间，无问题。检查人胡光耀检查。
                            </span>
                </div>
                <div class="media-footer">
                  2019.01.10 23:23
                </div>
              </div>
              <div class="media-right">
                <img src="" alt="">
              </div>
            </div>
            <div class="media">
              <div class="media-body">
                <div class="media-header">
                  <label>质量检查</label>
                  <span class="inline-block">施工一区</span>
                </div>
                <div class="media-content">
                            <span>
                                检查人胡光耀检查了盾构区间，无问题。检查人胡光耀检查了盾构区间 无问题。检查人胡光耀检查了盾构区间，无问题。检查人胡光耀检查。
                            </span>
                </div>
                <div class="media-footer">
                  2019.01.10 23:23
                </div>
              </div>
              <div class="media-right">
                <img src="" alt="">
              </div>
            </div>
          </div>
        </div>
        <div style="height:248px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5 style="margin-right: 28px;height: 39px;line-height: 39px;border-bottom: 1px solid #4CF0FE">供应商评价统计</h5>
              <h5 style="height: 39px;line-height: 39px">合同使用情况分析</h5>
            </div>
          </div>
          <div style="padding: 40px 26px 0">
            <img src="../../../assets/mate-two.png" alt="">
          </div>
        </div>
        <div style="height:248px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5 style="margin-right: 28px;height: 39px;line-height: 39px;border-bottom: 1px solid #4CF0FE">预警情况分析</h5>
              <h5 style="height: 39px;line-height: 39px">物资资金使用情况</h5>
            </div>
          </div>
          <div style="padding: 23px 16px 0">
            <img src="../../../assets/mate-three.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'materialAcceptance',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('chartmainbar'))
      var option = {
        xAxis: {
          show: false
        },
        yAxis: [{
          show: true,
          data: ['钢筋', '螺纹钢', '砂子', '模板', '混凝土', '圆钢'],
          inverse: true,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#DBE1FF'
            },
            formatter: function(value, index) {
              return [
                '{title|' + value + '} '
              ].join('\n')
            },
            rich: {}
          },

        }, {
          show: true,
          inverse: true,
          data: ['50/100（吨）','50/100（吨）', '50/100（吨）', '50/100（吨）', '50/100（吨）','50/100（吨）'],
          axisLabel: {
            textStyle: {
              color: '#DBE1FF'
            }
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: [{
            value: 53,
            itemStyle: {
              normal: {
                color: {
                  type: 'bar',
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(0,153,239,0.8)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(66,187,255,1)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            }
          }, {
            value: 80,
            itemStyle: {
              // normal:{color:'#b250ff',barBorderRadius:[0,10,10,0],}
              normal: {
                color: {
                  type: 'bar',
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(39,161,125,1)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(39,161,125,1)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            }
          }, {
            value: 20,
            itemStyle: {
              // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
              normal: {
                color: {
                  type: 'bar',
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(216,185,42,1)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(216,185,42,1)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            }
          }, {
            value: 40,
            itemStyle: {
              // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
              normal: {
                color: {
                  type: 'bar',
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(223,92,180,1)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(224,124,118,1)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }

            }
          },{
            value: 53,
            itemStyle: {
              // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
              normal: {
                color: {
                  type: 'bar',
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(191,229,121,1)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(139,198,68,1)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }

            }
          },{
            value: 53,
            itemStyle: {
              // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
              normal: {
                color: {
                  type: 'bar',
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(81,246,240,1)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(2,199,249,1)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }

            }
          }],
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 0,
              color: 'rgba(255,255,255,0.3)'
              // color: function(params) {
              //   var num = myColor.length;
              //   return myColor[params.dataIndex % num]
              // },
            }
          },
          label: {
            normal: {
              show: false,
              position: 'inside',
              formatter: '{c}%'
            }
          },
        }]
      };
      myChart.setOption(option);
    }
  },
  mounted () {
    this.drawLine()
  }
}
</script>
<style lang="scss">
  #title_right{
    height: 24px!important;
  }
  #scolTab tbody{
    height: 168px;
    display: block;
  }
  #scolTab table thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  tbody::-webkit-scrollbar {
    width: 6px!important;
    height: 4px;
    background: transparent;
  }
  tbody::-webkit-scrollbar-thumb {
    width: 12px!important;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 0px rgba(76,189,254,1);
    background: rgba(76,189,254,1);
  }
  tbody::-webkit-scrollbar-track {
    display: none;
    -webkit-box-shadow: inset 0 0 5px rgba(76,189,254,1);
    border-radius: 10px;
    background: rgba(76,189,254,1);
  }
</style>
<style lang="scss" scoped>
  @import "../homePage/homePage.scss";
  @import "../siteSafety/siteSafety";
  @import "./materialAcceptance";
</style>
<style lang="scss" scoped>
  .triangle{
    display: inline-block;
    margin-left: 5px;
    width:0;
    height:0;
    border-right:4px solid transparent;
    border-left:4px solid transparent;
    border-bottom:4px solid transparent;
    border-top:4px solid #4CBDFE;
  }
  .el-select{
    width: 100px;
  }
  #scolTab::-webkit-scrollbar {
    display: none;
  }
</style>

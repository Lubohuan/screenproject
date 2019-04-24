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
              <h5 style="margin-right: 28px;height: 39px;line-height: 39px;" v-bind:class="{active: boxOne }" @click="boxOne=true">物料库存</h5>
              <h5 style="height: 39px;line-height: 39px" v-bind:class="{ active: !boxOne }" @click="boxOne=false">物资使用趋势</h5>
            </div>
          </div>
          <div class="top_con_middle_bar" v-show="boxOne">
            <div class="top_con_middle_bar_each" v-for="(item, index) in progressData" :key="index">
              <div class="top_con_middle_bar_each_text" style="width: 60px">{{item.title}}</div>
              <el-progress :percentage="item.progress" :stroke-width="10" :show-text="false" :color="item.color" style="flex: 1;margin-right: 30px"></el-progress>
              <div class="top_con_middle_bar_each_text">{{item.total}}</div>
            </div>
          </div>
          <div id="echart-line" style="width:790px;height:320px" v-show="!boxOne"></div>
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
                  <label>物资验收</label>
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
                  <label>物资验收</label>
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
                  <label>物资验收</label>
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
              <h5 style="margin-right: 28px;height: 39px;line-height: 39px;" v-bind:class="{ active: boxTwo }" @click="boxTwo=true">供应商评价统计</h5>
              <h5 style="height: 39px;line-height: 39px" v-bind:class="{ active: !boxTwo }" @click="boxTwo=false">合同使用情况分析</h5>
            </div>
          </div>
          <div style="padding: 40px 26px 0;" v-if="boxTwo">
            <img src="../../../assets/mate-two.png" alt="">
          </div>
          <div class="pactStatus" v-if="!boxTwo">
            <div class="table" id="myTable4">
              <table width="180" cellpadding="0" cellspacing="0" style="table-layout: auto;">
                <tr>
                  <td>合同验收金额</td>
                  <td>结算金额</td>
                </tr>
                <tr>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">120</span>万</td>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">60</span>万</td>
                </tr>
              </table>
            </div>
            <div class="pactStatus_datail" style="display: flex;padding: 0 30px">
              <div class="cir_time marginR30" style="margin-top: 16px">
                <el-progress type="circle" :percentage="50" :width="70" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                <div class="text_loc text_center" style="font-size: 12px;color: #dbe1ff;">结算率 </div>
                <div class="time_size1">50%</div>
              </div>
              <div class="top_con_middle_bar" style="margin-top: 0">
                <div class="top_con_middle_bar_each" v-for="(item, index) in pactData" :key="index" style="padding: 0">
                  <div class="top_con_middle_bar_each_text" style="width: 80px">{{item.title}}</div>
                  <el-progress :percentage="item.progress" :stroke-width="10" :show-text="false" :color="item.color" style="flex: 1;margin-right: 30px"></el-progress>
                  <div class="top_con_middle_bar_each_text" style="width: 45px">{{item.total}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height:248px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5 style="margin-right: 28px;height: 39px;line-height: 39px;" v-bind:class="{ active: boxThree }" @click="boxThree=true">预警情况分析</h5>
              <h5 style="height: 39px;line-height: 39px" v-bind:class="{ active: !boxThree }" @click="boxThree=false">物资资金使用情况</h5>
            </div>
          </div>
          <div style="padding: 23px 16px 0;" v-if="boxThree">
            <img src="../../../assets/mate-three.png" alt="">
          </div>
          <div style="padding: 23px 16px 0;" v-if="!boxThree">
            <img src="../../../assets/mate-three-a.png" alt="">
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
        label: '水管'
      }, {
        value: '选项2',
        label: '模板'
      }, {
        value: '选项3',
        label: '砂子'
      }, {
        value: '选项4',
        label: '混凝土'
      }, {
        value: '选项5',
        label: '圆钢'
      }],
      value: '',
      //控制本页视窗容器切换
      boxOne: true,
      boxTwo: true,
      boxThree: true,
      pactData: [
        {title: '合同禁用数',
          color: '#E07C76',
          total: '5（次）',
          progress: 60
        }, {title: '合同超额数',
          color: '#2FD695',
          total: '7（次）',
          progress: 80
        }, {title: '合同总数',
          color: '#FFC400',
          total: '25（份）',
          progress: 100
        }
      ],
      progressData: [
        {title: '钢筋',
          color: '#42BBFF',
          total: '50/100（吨）',
          progress: 60
        }, {title: '螺纹钢',
          color: '#2FD695',
          total: '50/100（吨）',
          progress: 80
        }, {title: '砂子',
          color: '#FFC400',
          total: '50/100（吨）',
          progress: 40
        }, {title: '模板',
          color: '#E07C76',
          total: '50/100（吨）',
          progress: 60
        }, {title: '混凝土',
          color: '#8BC644',
          total: '50/100（吨）',
          progress: 20
        }, {title: '圆钢',
          color: '#51F6F0',
          total: '50/100（吨）',
          progress: 90
        }
      ]
    }
  },
  methods: {
    drawLine () {
      var myChart = this.$echarts.init(document.getElementById('echart-line'))
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['钢筋', '螺纹钢', '砂子', '模板', '混凝土', '圆钢'],
          align: 'left',
          left: 20,
          top:10,
          textStyle: {
            color: "#fff"
          },
          itemGap: 30,
          itemWidth: 30,
          itemHeight: 10,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLine: {
            show: true,
            lineStyle: {
              color: "#2E4970",
              width: 2,
              type: "solid"
            }
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#DBE1FF",
              fontSize: 12
            }
          },
        }],
        yAxis: [{
          type: 'value',
          name: '(单)',
          nameTextStyle: {
            color: "#DBE1FF"
          },
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: "#DBE1FF",
              fontSize: 12
            }
          },
          min: 0, max: 100,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#2E4970",
              width: 2,
              type: "solid"
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#034e90",
              width: 2,
              type: "solid"
            }
          }
        },{
          type: 'value',
          name: '(万)',
          nameTextStyle: {
            color: "#DBE1FF"
          },
          position: "right",
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: "#DBE1FF",
              fontSize: 12
            }
          },
          min: 0, max: 100,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#2E4970",
              width: 2,
              type: "solid"
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#034e90",
              width: 2,
              type: "solid"
            }
          }
        }],
        series: [{
          name: '钢筋',
          type: 'line',
          data: (function() {
            var d = [];
            for (let i = 0; i < 12; i++) {
              d.push(parseInt(Math.random() * (100 - 50 + 1) + 50, 10));
            }
            return d;
          })(),
          itemStyle: {
            normal: {
              color: '#FC0C59',
            }
          },
          lineStyle: {
            normal: {
              width: 2,
              shadowColor: 'rgba(0,0,0,0.4)',
              shadowBlur: 10,
              shadowOffsetY: 10
            }
          }
        }, {
          name: '螺纹钢',
          type: 'line',
          data: (function() {
            var d = [];
            for (let i = 0; i < 12; i++) {
              d.push(parseInt(Math.random() * (90 - 40) + 40, 10));
            }
            return d;
          })(),
          itemStyle: {
            normal: {
              color: '#28AB81',
            }
          },
          lineStyle: {
            normal: {
              width: 2,
              shadowColor: 'rgba(0,0,0,0.4)',
              shadowBlur: 10,
              shadowOffsetY: 10
            }
          },
        }, {
          name: '砂子',
          type: 'line',
          data: (function() {
            var d = [];
            for (let i = 0; i < 12; i++) {
              d.push(parseInt(Math.random() * (80 - 30 + 1) + 30, 10));
            }
            return d;
          })(),
          itemStyle: {
            normal: {
              color: '#FEDF50',
            }
          },
          lineStyle: {
            normal: {
              width: 2,
              shadowColor: 'rgba(0,0,0,0.4)',
              shadowBlur: 10,
              shadowOffsetY: 10
            }
          }
        }, {
          name: '模板',
          type: 'line',
          data: (function() {
            var d = [];
            for (let i = 0; i < 12; i++) {
              d.push(parseInt(Math.random() * (70 - 20 + 1) + 20, 10));
            }
            return d;
          })(),
          itemStyle: {
            normal: {
              color: '#E0699B',
            }
          },
          lineStyle: {
            normal: {
              width: 2,
              shadowColor: 'rgba(0,0,0,0.4)',
              shadowBlur: 10,
              shadowOffsetY: 10
            }
          }
        },{
          name: '混凝土',
          type: 'line',
          data: (function() {
            var d = [];
            for (let i = 0; i < 12; i++) {
              d.push(parseInt(Math.random() * (80 - 30 + 1) + 30, 10));
            }
            return d;
          })(),
          itemStyle: {
            normal: {
              color: '#A1D35B',
            }
          },
          lineStyle: {
            normal: {
              width: 2,
              shadowColor: 'rgba(0,0,0,0.4)',
              shadowBlur: 10,
              shadowOffsetY: 10
            }
          }
        },{
          name: '圆钢',
          type: 'line',
          data: (function () {
            var d = []
            for (let i = 0; i < 12; i++) {
              d.push(parseInt(Math.random() * (80 - 30 + 1) + 30, 10));
            }
            return d
          })(),
          itemStyle: {
            normal: {
              color: '#4CF0FE'
            }
          },
          lineStyle: {
            normal: {
              width: 2,
              shadowColor: 'rgba(0,0,0,0.4)',
              shadowBlur: 10,
              shadowOffsetY: 10
            }
          }
        }]
      }
      myChart.setOption(option)
      window.addEventListener("resize", () => {
        myChart.resize()
      })
    }
  },
  mounted () {
    this.drawLine();
  }
}
</script>
<style lang="scss">
  .el-progress .el-progress-bar__outer{
    background:rgba(255,255,255,0.3)!important;
    border-radius: 0!important;
  }
  .el-progress-bar__inner{
    border-radius: 0!important;
  }
  #title_right{
    height: 24px!important;
    background: #283664;
    border:1px solid rgba(118,208,223,.2) !important;
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
  .show{
    border-bottom: 1px solid #4CF0FE
  }
  .active{
    border-bottom: 1px solid #4CF0FE
  }
</style>

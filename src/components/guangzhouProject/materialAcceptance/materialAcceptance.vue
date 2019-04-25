<template>
  <div class="huling" style="height:100%;width:100%;">
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
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">108</span>单</td>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">0</span>单</td>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px"></span></td>
                </tr>
                <tr>
                  <td>验收数</td>
                  <td>今日</td>
                  <td>累计</td>
                </tr>
                <tr>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">108</span>单</td>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">0</span>单</td>
                  <td><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">108</span>单</td>
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
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">424.89</span>万</td>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">0</span>万</td>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px"></span></td>
                </tr>
                <tr>
                  <td>验收金额</td>
                  <td>合同总数</td>
                  <td>供应商总数</td>
                </tr>
                <tr>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">424.89</span>万</td>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">22</span>份</td>
                  <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">18</span>家</td>
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
            <div class="ibox-content" style="margin-top: 10px">
              <div id="echart-twoline" style="width:100%;height:150px"></div>
            </div>
          </div>
        </div>
        <div style="height:248px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>物资收量偏差分析</h5>
            </div>
<!--            <div class="timeSelect">-->
<!--              <p>本月</p>-->
<!--              <p>累计</p>-->
<!--            </div>-->
          </div>
          <div class="table" style="margin-top: 10px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>物资名称</th>
                  <th >单位</th>
                  <th >发货量</th>
                  <th>验收量</th>
                  <th>偏差率<p class="triangle"></p></th>
                </tr>
              </thead>
              <tr>
                <td>钢材</td>
                <td>吨</td>
                <td>151.52</td>
                <td>151.52</td>
                <td><span style="color: #FEDF50">0%</span></td>
              </tr>
              <tr>
                <td>商品混凝土</td>
                <td>立方米</td>
                <td>177</td>
                <td>177</td>
                <td><span style="color: #FEDF50">0%</span></td>
              </tr>
            </table>
          </div>
        </div>
        <div style="height:248px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>工作考勤数据</h5>
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
              <tr v-for="(item,index) in value2" :key="index">
                <td>{{item.title}}</td>
                <td>{{item.ysd}}</td>
                <td>{{item.zqd}}</td>
                <td><span style="color: #FEDF50">{{item.zql}}</span></td>
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
          <div class="top_con_middle_bar" v-show="boxOne" style="margin-top: 50px">
            <div class="top_con_middle_bar_each" v-for="(item, index) in progressData" :key="index" @click="handleClick(index)">
              <div class="top_con_middle_bar_each_text" style="width: 120px">{{item.title}}</div>
              <el-progress :percentage="item.progress" :stroke-width="10" :show-text="false" :color="item.color" style="flex: 1;margin-right: 30px"></el-progress>
              <div class="top_con_middle_bar_each_text" style="width: 80px">{{item.total}}</div>
            </div>
          </div>
          <div id="echart-line" style="width:790px;height:320px" v-show="!boxOne">
          </div>
          <el-dialog title="提示" :visible.sync="dialogVisibleOne" >
            <div class="modal hulingModal" style="height:300px;width:350px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">物资消耗情况</span>
                </div>
                <div class="all-height flex ai-center close" @click="dialogVisibleOne = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                  <p>物资名称:<span>{{current.title}}</span></p>
                  <p>单位:<span>{{current.dw}}</span></p>
                  <p>入库总量:<span>{{current.rkzl}}</span></p>
                  <p>出库总量:<span>{{current.ckzl}}</span></p>
                  <p>库存余量:<span>{{current.kcyl}}</span></p>
                </div>
              </div>
            </div>
          </el-dialog>
        </div>
        <div style="height:308px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="table" style="padding-top: 20px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>物资名称</th>
                  <th>规格型号</th>
                  <th >单位</th>
                  <th >入库总量</th>
                  <th>出库总</th>
                  <th>库存余量</th>
                </tr>
              </thead>
              <tr>
                <td>商品混凝土</td>
                <td>C20</td>
                <td>立方米</td>
                <td>2357</td>
                <td>2357</td>
                <td><span style="color: #00F7BD">0</span></td>
              </tr>
              <tr>
                <td>商品混凝土</td>
                <td>C20细石</td>
                <td>立方米</td>
                <td>96</td>
                <td>96</td>
                <td><span style="color: #00F7BD">0</span></td>
              </tr>
              <tr>
                <td>商品混凝土</td>
                <td>C30</td>
                <td>立方米</td>
                <td>381</td>
                <td>381</td>
                <td><span style="color: #00F7BD">0</span></td>
              </tr>
              <tr>
                <td>商品混凝土</td>
                <td>润管砂浆</td>
                <td>立方米</td>
                <td>11</td>
                <td>11</td>
                <td><span style="color: #00F7BD">0</span></td>
              </tr>
              <tr>
                <td>三级盘螺</td>
                <td>C8</td>
                <td>吨</td>
                <td>1.97</td>
                <td>1.97</td>
                <td><span style="color: #00F7BD">0</span></td>
              </tr>
              <tr>
                <td>三级螺纹钢</td>
                <td>C12</td>
                <td>吨</td>
                <td>13.58</td>
                <td>13.58</td>
                <td><span style="color: #00F7BD">0</span></td>
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
<!--              <el-select v-model="value" placeholder="钢材" id="title_right">-->
<!--              </el-select>-->
              <div style="font-size: 12px;margin-left: 10px;display: flex;align-items: center" @click="dialogVisible=true"><p style="border: 1px solid rgba(118,208,223,1);padding: 4px">物资类型 : 商品混凝土</p>&nbsp;&nbsp;&nbsp;&nbsp; 单位 : 立方米</div>
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
                <tr v-for="(item,index) in value1" :key="index">
                  <td>{{item.title}}</td>
                  <td>{{item.xh}}</td>
                  <td>{{item.lyl}}</td>
                  <td>{{item.jhl}}</td>
                  <td>{{item.tzl}}</td>
                  <td>{{item.cl}}</td>
                  <td><span style="color: #FEDF50">{{item.lyb}}</span></td>
                  <td><span style="color: #FC0C59">{{item.clb}}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <el-dialog title="提示" :visible.sync="dialogVisible" >
            <div class="modal hulingModal" style="height:300px;width: 300px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">物资消耗情况</span>
                </div>
                <div class="all-height flex ai-center close" @click="dialogVisible = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                  <p>物资类型:<span>商品混凝土</span></p>
                  <p>单位:<span>立方米</span></p>
                  <p>总领用量:<span>2862</span></p>
                  <p>总计划量:<span>2862</span></p>
                  <p>总图纸计算量:<span>0</span></p>
                  <p>领用比:<span>0%</span></p>
                  <p>超量比:<span>0%</span></p>
                </div>
              </div>
            </div>
          </el-dialog>
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
            <div class="media" style="position: relative;padding: 18px 10px">
              <div class="media-body">
                <div class="media-header">
                  <label>物资验收</label>
                  <span class="inline-block">广州金控总部大楼项目</span>
                </div>
                <div class="media-content">
                            <span>
                                广州金控总部大楼项目收料员孙宗瑞和龙震江验收了钢筋等物资
                            </span>
                </div>
                <div class="media-footer">
                  2019.04.12 11:20
                </div>
              </div>
              <div class="media-right" style="position: absolute;right: 50px;top: 22px;">
                <img src="../../../assets/mate-gz1.png" height="80" alt="">
              </div>
            </div>
            <div class="media" style="position: relative;padding: 18px 10px">
              <div class="media-body">
                <div class="media-header">
                  <label>物资验收</label>
                  <span class="inline-block">广州金控总部大楼项目</span>
                </div>
                <div class="media-content">
                            <span>
                                广州金控总部大楼项目收料员孙宗瑞验收了钢筋等物资
                            </span>
                </div>
                <div class="media-footer">
                  2019.04.13 21:01
                </div>
              </div>
              <div class="media-right" style="position: absolute;right: 50px;top: 22px;">
                <img src="../../../assets/mate-gz2.png" height="80" alt="">
              </div>
            </div>
            <div class="media" style="position: relative;padding: 18px 10px">
              <div class="media-body">
                <div class="media-header">
                  <label>物资验收</label>
                  <span class="inline-block">广州金控总部大楼项目</span>
                </div>
                <div class="media-content">
                            <span>
                                广州金控总部大楼项目收料员孙宗瑞验收了钢筋等物资
                            </span>
                </div>
                <div class="media-footer">
                  2019.04.13 00:00
                </div>
              </div>
              <div class="media-right" style="position: absolute;right: 50px;top: 22px;">
                <img src="../../../assets/mate.gz3.png" height="80" alt="">
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
            <div class="flex1 flex" style="justify-content: space-around">
              <div class="cir_time marginR30">
                <el-progress type="circle" :percentage="0" color="#42BBFF" :width="100" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                <div class="text_loc text_center font12" style="top: 74px;">供应商数</div>
                <div class="time_size1" style="font-size: 12px;top:18px;left: 26px">1星-2星</div>
                <div class="night_process" style="text-align: center;color: #42BBFF">0</div>
              </div>
              <div class="cir_time marginR30">
                <el-progress type="circle" :percentage="0" color="#E07C76" :width="100" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                <div class="text_loc text_center font12" style="top: 74px;">供应商数 </div>
                <div class="time_size1" style="font-size: 12px;top:18px;left: 26px">2星-3星</div>
                <div class="night_process" style="text-align: center;color: #E07C76">0</div>
              </div>
              <div class="cir_time marginR30">
                <el-progress type="circle" :percentage="100" color="#FFC400" :width="100" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                <div class="text_loc text_center font12" style="top: 74px;">供应商数</div>
                <div class="time_size1" style="font-size: 12px;top:18px;left: 26px">3星-4星</div>
                <div class="night_process" style="text-align: center;color: #FFC400">14</div>
              </div>
              <div class="cir_time marginR30">
                <el-progress type="circle" :percentage="0" color="#2FD695" :width="100" :stroke-width='4' style="transform:rotateZ(-180deg)"></el-progress>
                <div class="text_loc text_center font12" style="top: 74px;">供应商数 </div>
                <div class="time_size1" style="font-size: 12px;top:18px;left: 26px">4星-5星</div>
                <div class="night_process" style="text-align: center;color: #2FD695">0</div>
              </div>
            </div>
          </div>
          <div class="pactStatus" v-if="!boxTwo">
            <div class="table" id="myTable4">
              <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                <tr>
                  <td  style="text-align: center">合同验收金额</td>
                  <td  style="text-align: center">结算金额</td>
                </tr>
                <tr>
                  <td  style="text-align: center"><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">424.89</span>万</td>
                  <td  style="text-align: center"><span style="font-size: 28px;color: #FEDF50;margin-right: 5px">160.97</span>万</td>
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
                <div class="top_con_middle_bar_each" v-for="(item, index) in pactData" :key="index" style="padding: 0;margin: 0">
                  <div class="top_con_middle_bar_each_text" style="width: 80px">{{item.title}}</div>
                  <el-progress :percentage="item.progress" :stroke-width="10" :show-text="false" :color="item.color" style="flex: 1;margin-right: 10px"></el-progress>
                  <div class="top_con_middle_bar_each_text" style="width: 65px">{{item.total}}</div>
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
            <div id="echart-linesss" style="width:500px;height:180px"></div>
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
      dialogVisible: false,
      dialogVisibleOne: false,
      options: [],
      value: '',
      //控制本页视窗容器切换
      boxOne: true,
      boxTwo: true,
      boxThree: true,
      current:{
        title: '三级螺纹钢',
        dw: '吨',
        rkzl: 206.101,
        ckzl: 2016.101,
        kcyl: 0
      },
      allobj: [
        {title: '三级螺纹钢',
          dw: '吨',
          rkzl: 206.101,
          ckzl: 2016.101,
          kcyl: 0
        }, {title: '商品混凝土',
          dw: '立方米',
          rkzl: 3473,
          ckzl: 3473,
          kcyl: 0
        }, {title: '自粘聚合物改性沥青防水卷材单面',
          dw: '平方米',
          rkzl: 23000,
          ckzl: 23000,
          kcyl: 0
        }
      ],
      value1: [
        {title: '商品混凝土',
          xh: 'C20',
          lyl: 2357,
          jhl: 2357,
          tzl: 2400,
          cl: 0,
          lyb: '100%',
          clb: '0%'
        }, {title: '商品混凝土',
          xh: 'C20细石',
          lyl: 96,
          jhl: 96,
          tzl: 380,
          cl: 0,
          lyb: '100%',
          clb: '0%'
        }, {title: '商品混凝土',
          xh: 'C30',
          lyl: 381,
          jhl: 381,
          tzl: 400,
          cl: 0,
          lyb: '100%',
          clb: '0%'
        }, {title: '商品混凝土',
          xh: 'C35P8',
          lyl: 28,
          jhl: 28,
          tzl: 358,
          cl: 0,
          lyb: '100%',
          clb: '0%'
        }
      ],
      value2: [
        {title: '尹鑫',
          ysd: '50',
          zqd: 0,
          zql: '0%'
        }, {title: '孙宗瑞',
          ysd: '3',
          zqd: 0,
          zql: '0%'
        }, {title: '龙震江',
          ysd: '1',
          zqd: 0,
          zql: '0%'
        }
      ],
      pactData: [
        {title: '合同禁用数',
          color: '#E07C76',
          total: '0（次）',
          progress: 0
        }, {title: '合同超额数',
          color: '#2FD695',
          total: '0（次）',
          progress: 0
        }, {title: '合同总数',
          color: '#FFC400',
          total: '22（份）',
          progress: 20
        }
      ],
      progressData: [
        {title: '三级螺纹钢',
          color: '#42BBFF',
          total: '吨',
          progress: 60
        }, {title: '商品混凝土',
          color: '#2FD695',
          total: '立方米',
          progress: 80
        }, {title: '自粘聚合物性沥青防水卷材单面',
          color: '#FFC400',
          total: '平方米',
          progress: 40
        }
      ]
    }
  },
  methods: {
    handleClick (index) {
      this.current = this.allobj[index]
      this.dialogVisibleOne = true
    },
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
          data: ['商品混凝土', '钢筋'],
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
          data: ['1月', '2月', '3月', '4月'],
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
          name: '(万)',
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
          min: 0, max: 350,
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
          name: '商品混凝土',
          type: 'line',
          data: [118.82, 53.76, 54.77, 9.8],
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
          name: '钢筋',
          type: 'line',
          data: [0, 34.89, 11.52, 66.69],
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
        }, 
        // {
        //   name: '防水卷材',
        //   type: 'line',
        //   data: [60.47, 0, 302.37, 0],
        //   itemStyle: {
        //     normal: {
        //       color: '#FEDF50',
        //     }
        //   },
        //   lineStyle: {
        //     normal: {
        //       width: 2,
        //       shadowColor: 'rgba(0,0,0,0.4)',
        //       shadowBlur: 10,
        //       shadowOffsetY: 10
        //     }
        //   }
        // }
        ]
      }
      myChart.setOption(option)
      window.addEventListener("resize", () => {
        myChart.resize()
      })
    },
    drawLinesss () {
      var myChart = this.$echarts.init(document.getElementById("echart-linesss"));
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['收料预警数', '滞签预警数', '合同预警数','供应商预警数'],
          align: 'right',
          right: 10,
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
          data: ['1月',
            '2月',
            '3月',
            '4月'
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
          name: '收料预警数',
          type: 'bar',
          data: [0, 0, 0, 0],
          barWidth: 10, //柱子宽度
          barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0,153,239,0.8)'
              }, {
                offset: 1,
                color: 'rgba(66,187,255,1)'
              }]),
              opacity: 1,
            }
          }
        }, {
          name: '滞签预警数',
          type: 'bar',
          data: [0, 0, 0, 0],
          barWidth: 10,
          barGap: 1,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(39,161,125,1)'
              }, {
                offset: 1,
                color: 'rgba(47,214,149,1)'
              }]),
              opacity: 1,
            }
          }
        }, {
          name: '合同预警数',
          type: 'bar',
          data: [0, 0, 0, 0],
          barWidth: 10,
          barGap: 1,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(216,185,42,1)'
              }, {
                offset: 1,
                color: 'rgba(255,196,0,1)'
              }]),
              opacity: 1,
            }
          }
        },{
          name: '供应商预警数',
          type: 'bar',
          data: [0, 0, 0, 0],
          barWidth: 10,
          barGap: 1,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(223,92,180,1)'
              }, {
                offset: 1,
                color: 'rgba(224,124,118,1)'
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
    },
    drawTwoLine () {
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
          align: 'left',
          left: 10,
          itemWidth: 14,
          itemHeight: 10,
          itemGap: 13,
          data: ["发料单数", "验收单数","验收金额（万）"],
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
            axisTick: {
              show: false
            },
            min: 0,
            max: 350,
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
            name: "发料单数",
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
                      color: "rgba(223,92,180,1)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(224,124,118,1)"
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
                color: "rgba(223,92,180,1)"
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
              39,
              5,
              15,
              23
            ]
          },
          {
            name: "验收单数",
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
                      color: "rgba(0,153,239,0.8)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(66,187,255,1)"
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
                color: "rgba(0,153,239,0.8)"
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
              39,
              5,
              15,
              23
            ]
          },{
            name: "验收金额（万）",
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
                color: "rgba(254,223,80,.6)"
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
              118.82,
              40.30,
              53.62,
              81.80
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
    this.drawTwoLine()
    this.drawLine()
    this.drawLinesss()
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
    tr{
      td{
        white-space: nowrap;
      }
    }
  }
  #scolTab table thead,
  #scolTab tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  #scolTab tbody::-webkit-scrollbar {
   .huling tbody::-webkit-scrollbar {
    width: 6px!important;
    height: 4px;
    background: transparent;
  }
  #scolTab tbody::-webkit-scrollbar-thumb {
    width: 12px!important;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 0px rgba(76,189,254,1);
    background: rgba(76,189,254,1);
  }
  #scolTab tbody::-webkit-scrollbar-track {
    display: none;
    -webkit-box-shadow: inset 0 0 5px rgba(76,189,254,1);
    border-radius: 10px;
    background: rgba(76,189,254,1);
  }
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
  .huling .modal-content-datail{
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
</style>

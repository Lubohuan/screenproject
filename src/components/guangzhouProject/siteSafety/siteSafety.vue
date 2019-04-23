<template>
  <div style="height:100%;width:100%;">
    <div class="top_con flex_b">
      <div class="top_con_left">
        <div style="height:290px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5 style="padding-right: 18px;border-right: 1px solid rgba(255,255,255,.2)">最近7天趋势</h5>
              <div class="titleWord">
                <p style="margin-left: 13px;">隐患总数</p>
                <p>重大隐患</p>
                <p>隐患整改率</p>
              </div>
            </div>
          </div>
          <div style="padding: 26px 13px 0 13px">
            <img src="../../../assets/sefe-one.png" alt="">
          </div>
        </div>
        <div style="height:313px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <img src="../../../assets/safe-zzt.png" alt="">
        </div>
        <div style="height:313px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>最近发布隐患动态</h5>
            </div>
          </div>
          <div class="table" id="myTable">
            <table cellpadding="0" cellspacing="0" style="border: none;">
              <tr>
                <th>杨磊（安全部）</th>
                <th>提交于 : 2019-04-25 10:11:22</th>
                <th>工区三</th>
              </tr>
              <tr>
                <th><span style="display: inline-block;width: 8px;height: 8px;border-radius: 50px;background:rgba(254,223,80,1);box-shadow:0px 0px 0px 4px rgba(254,223,80,0.1);margin-right: 10px"></span>违章</th>
                <th>洞口防护不到位,8号楼烟道口防护不到位</th>
                <th><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">待整改</span></th>
              </tr>
              <tr>
                <th>杨磊（安全部）</th>
                <th>提交于 : 2019-04-25 10:11:22</th>
                <th>工区三</th>
              </tr>
              <tr>
                <th><span  style="display: inline-block;width: 8px;height: 8px;border-radius: 50px;background:rgba(252,12,89,1);box-shadow:0px 0px 0px 4px rgba(252,12,89,0.1);margin-right: 10px"></span>严重违章</th>
                <th>洞口防护不到位,8号楼烟道口防护不到位</th>
                <th><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已通过</span></th>
              </tr>
              <tr>
                <th>杨磊（安全部）</th>
                <th>提交于 : 2019-04-25 10:11:22</th>
                <th>工区三</th>
              </tr>
              <tr>
                <th><span  style="display: inline-block;width: 8px;height: 8px;border-radius: 50px;background:rgba(252,12,89,1);box-shadow:0px 0px 0px 4px rgba(252,12,89,0.1);margin-right: 10px"></span>重大隐患</th>
                <th>洞口防护不到位,8号楼烟道口防护不到位</th>
                <th><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">待整改</span></th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="top_con_middle">
        <div style="height:410px;width:100%;background-color:#fff;margin-bottom:10px;"></div>
        <div style="height:516px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>危险作业统计</h5>
            </div>
            <div class="timeSelect">
              <p>本周</p>
              <p>本月</p>
            </div>
          </div>
          <div class="table" >
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <tr>
                <th>验收类型</th>
                <th >设备名称</th>
                <th>验收状态</th>
                <th>验收人</th>
              </tr>
              <tr>
                <td>安全管理</td>
                <td><span>车载起重机</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>杨磊</td>
              </tr>
              <tr>
                <td>安全管理</td>
                <td><span>车载起重机</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>杨磊</td>
              </tr>
              <tr>
                <td>安全管理</td>
                <td><span>车载起重机</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>杨磊</td>
              </tr>
              <tr>
                <td>安全管理</td>
                <td><span>车载起重机</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>杨磊</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="top_con_right">
        <div style="height:290px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>安全概况</h5>
            </div>
          </div>
          <div class="table" id="myTable1">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: auto;">
              <tr>
                <td>重大危险源</td>
                <td>重大危险源预警</td>
                <td></td>
                <td>进场人数</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">8</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">2</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">10</span>人</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px"></span></td>
              </tr>
              <tr>
                <td>超期隐患</td>
                <td>未销重大隐患</td>
                <td>隐患预警</td>
                <td>进行安全教育</td>
                <td>参加安全教育</td>
                <td>教育率</td>
              </tr>
              <tr>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">8</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">2</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">1</span>个</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">8</span>次</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">8</span>人</td>
                <td><span style="font-size: 24px;color: #76D0DF;margin-right: 5px">100%</span></td>
              </tr>
              <tr>
                <td>危大工程</td>
                <td></td>
                <td></td>
                <td>进行班前教育</td>
                <td>参加班前教育</td>
                <td>教育率</td>
              </tr>
              <tr>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">8</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">8</span>次</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">8</span>人</td>
                <td><span style="font-size: 24px;color: #76D0DF;margin-right: 5px">100%</span></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="safeContent" style="height:313px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>危险源执行情况</h5>
            </div>
            <div class="timeSelect">
              <p>本周</p>
              <p>本月</p>
            </div>
          </div>
          <div class="table" style="margin-top: 55px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <tr>
                <th>危险源名称</th>
                <th>等级</th>
                <th>责任人</th>
                <th>状态</th>
                <th>已监管次数</th>
                <th>需监管次数</th>
              </tr>
              <tr>
                <td>危险源1</td>
                <td>一级</td>
                <td>杨磊</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">未开始</span></td>
                <td>2</td>
                <td><span style="color: #FC0C59;">10</span></td>
              </tr>
              <tr>
                <td>危险源2</td>
                <td>二级</td>
                <td>杨磊</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #4CBDFE;background: rgba(76,189,254,.2);font-size: 10px">通过中</span></td>
                <td>2</td>
                <td><span style="color: #FC0C59;">10</span></td>
              </tr>
              <tr>
                <td>危险源3</td>
                <td>三级</td>
                <td>杨磊</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已通过</span></td>
                <td>2</td>
                <td>16</td>
              </tr>
              <tr>
                <td>危险源1</td>
                <td>一级</td>
                <td>杨磊</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">未开始</span></td>
                <td>2</td>
                <td>4</td>
              </tr>
            </table>
          </div>
        </div>
        <div style="height:313px;width:100%;background-color:#1D284D;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>危险作业统计</h5>
            </div>
            <div class="timeSelect">
              <p>本周</p>
              <p>本月</p>
            </div>
          </div>
          <div class="safeData">
            <h5>检查率 : <span>10%</span> <img src="../../../assets/safe-sjt.png" width="6" height="10" alt=""></h5>
            <h5>检查率 : <span>10%</span> <img src="../../../assets/safe-xjt.png" width="6" height="10" alt=""></h5>
          </div>
          <div class="table" >
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <tr>
                <th>作业类型</th>
                <th colspan="2">状态</th>
                <th>责任人</th>
                <th>监管人</th>
              </tr>
              <tr>
                <td>作业类型1</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">未验收</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">未检查</span></td>
                <td>杨磊</td>
                <td>杨磊</td>
              </tr>
              <tr>
                <td>作业类型2</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">待整改</span></td>
                <td>杨磊</td>
                <td>杨磊</td>
              </tr>
              <tr>
                <td>作业类型3</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">待整改</span></td>
                <td>杨磊</td>
                <td>杨磊</td>
              </tr>
              <tr>
                <td>作业类型4</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">待整改</span></td>
                <td>杨磊</td>
                <td>杨磊</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'siteSafety',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
  @import '../homePage/homePage.scss';
</style>
<style lang="scss" scoped>
  @import './siteSafety';
</style>

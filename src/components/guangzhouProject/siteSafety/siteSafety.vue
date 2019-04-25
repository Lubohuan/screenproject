<template>
  <div class="huling" style="height:100%;width:100%;">
    <div class="top_con flex_b">
      <div class="top_con_left">
        <div style="height:290px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5 style="padding-right: 18px;">最近7天趋势</h5>
<!--              <div class="titleWord">-->
<!--                <p style="margin-left: 13px;">隐患总数</p>-->
<!--                <p>重大隐患</p>-->
<!--                <p>隐患整改率 </p>-->
<!--              </div>-->
            </div>
          </div>
          <div style="padding: 26px 13px 0 13px">
            <div class="ibox-content" style="margin-top: 10px">
              <div id="echart-twoline" style="width:100%;height:200px"></div>
            </div>
          </div>
        </div>
        <div style="height:313px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5 style="padding-right: 18px;">安全隐患统计</h5>
            </div>
          </div>
          <div class="bg padding10" style="padding-top:10px">
            <div id="goodsChart" style="width:100%;height:223px"></div>
          </div>
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
              <tr @click="dialogVisible=true">
                <th>吴艺昌（安全部）</th>
                <th>提交于 : 2019-04-24 16:51</th>
                <th>03-地基基础</th>
              </tr>
              <tr @click="dialogVisible=true">
                <th><span style="display: inline-block;width: 8px;height: 8px;border-radius: 50px;background:rgba(254,223,80,1);box-shadow:0px 0px 0px 4px rgba(254,223,80,0.1);margin-right: 10px"></span>无隐患</th>
                <th>施工现场，临时用电</th>
                <th><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已整改</span></th>
              </tr>
              <tr @click="dialogVisibleOne=true">
                <th>吴艺昌（安全部）</th>
                <th>提交于 : 2019-04-24 10:18</th>
                <th>02-深基坑区域</th>
              </tr>
              <tr @click="dialogVisibleOne=true">
                <th><span  style="display: inline-block;width: 8px;height: 8px;border-radius: 50px;background:rgba(252,12,89,1);box-shadow:0px 0px 0px 4px rgba(252,12,89,0.1);margin-right: 10px"></span>有隐患</th>
                <th>基坑</th>
                <th><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">整改中</span></th>
              </tr>
              <tr @click="dialogVisibleTwo=true">
                <th>吴艺昌（安全部）</th>
                <th>提交于 : 2019-04-24 10:18</th>
                <th>02-深基坑区域</th>
              </tr>
              <tr @click="dialogVisibleTwo=true">
                <th><span  style="display: inline-block;width: 8px;height: 8px;border-radius: 50px;background:rgba(252,12,89,1);box-shadow:0px 0px 0px 4px rgba(252,12,89,0.1);margin-right: 10px"></span>无隐患</th>
                <th>基坑周边监边防护</th>
                <th><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">整改中</span></th>
              </tr>
            </table>
          </div>
          <el-dialog title="提示" :visible.sync="dialogVisible" >
            <div class="modal hulingModal" style="height:800px;width: 600px;">
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
                  <div style="display: flex">
                    <div style="margin-right: 100px">
                      <p>项目名称:<span>广州金控总部大楼项目</span></p>
                      <p>责任单位:<span>锚杆班组</span></p>
                      <p>检查部位:<span>施工现场，临时用电</span></p>
                      <p>隐患类型:<span>随机检查</span></p>
                      <p>隐患描述:<span>泥浆池缺少护栏</span></p>
                      <p>隐患等级:<span>一般隐患</span></p>
                      <p>检查类型:<span>随机检查</span></p>
                      <p>检查结果:<span>有隐患</span></p>
                      <p>所属区域:<span>03-地基基础</span></p>
                    </div>
                    <div>
                      <p>状态:<span>已整改</span></p>
                      <p>检查人:<span>吴艺昌（安全部）</span></p>
                      <p>复查人:<span>吴艺昌（安全部）</span></p>
                      <p>抄送人:<span>--</span></p>
                      <p>整改责任人:<span>彭泽纯（参建方）</span></p>
                      <p>检查时间:<span>2019-04-24 16:51</span></p>
                      <p>整改要求:<span>立即安排人员进行防护</span></p>
                      <p>整改期限:<span>2019-04-25 18:00</span></p>
                    </div>
                  </div>
                  <p style="margin-top: 20px"><img src="../../../assets/safe-yh1.jpg"  width="300px" alt=""></p>
                </div>
              </div>
            </div>
          </el-dialog>
          <el-dialog title="提示" :visible.sync="dialogVisibleOne" >
            <div class="modal hulingModal" style="height:800px;width: 600px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">隐患记录</span>
                </div>
                <div class="all-height flex ai-center close" @click="dialogVisibleOne = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                  <div style="display: flex">
                    <div style="margin-right: 100px">
                      <p>项目名称:<span>广州金控总部大楼项目</span></p>
                      <p>责任单位:<span>锚杆班组</span></p>
                      <p>检查部位:<span>基坑</span></p>
                      <p>隐患类型:<span>随机检查</span></p>
                      <p>隐患描述:<span>泥浆池缺少护栏</span></p>
                      <p>隐患等级:<span>一般隐患</span></p>
                      <p>检查类型:<span>随机检查</span></p>
                      <p>检查结果:<span>有隐患</span></p>
                      <p>所属区域:<span>03-地基基础</span></p>
                    </div>
                    <div>
                      <p>状态:<span>已整改</span></p>
                      <p>检查人:<span>吴艺昌（安全部）</span></p>
                      <p>复查人:<span>吴艺昌（安全部）</span></p>
                      <p>抄送人:<span>--</span></p>
                      <p>整改责任人:<span>彭泽纯（参建方）</span></p>
                      <p>检查时间:<span>2019-04-24 16:51</span></p>
                      <p>整改要求:<span>立即安排人员进行防护</span></p>
                      <p>整改期限:<span>2019-04-25 18:00</span></p>
                    </div>
                  </div>
                  <p style="margin-top: 20px"><img src="../../../assets/safe-yh2.jpg"  width="300px" alt=""></p>
                </div>
              </div>
            </div>
          </el-dialog>
          <el-dialog title="提示" :visible.sync="dialogVisibleTwo" >
            <div class="modal hulingModal" style="height:800px;width: 600px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">隐患记录</span>
                </div>
                <div class="all-height flex ai-center close" @click="dialogVisibleTwo = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                  <div style="display: flex">
                    <div style="margin-right: 100px">
                      <p>项目名称:<span>广州金控总部大楼项目</span></p>
                      <p>责任单位:<span>锚杆班组</span></p>
                      <p>检查部位:<span>基坑周边监边维护</span></p>
                      <p>隐患类型:<span>随机检查</span></p>
                      <p>隐患描述:<span>泥浆池缺少护栏</span></p>
                      <p>隐患等级:<span>一般隐患</span></p>
                      <p>检查类型:<span>随机检查</span></p>
                      <p>检查结果:<span>有隐患</span></p>
                      <p>所属区域:<span>03-地基基础</span></p>
                    </div>
                    <div>
                      <p>状态:<span>已整改</span></p>
                      <p>检查人:<span>吴艺昌（安全部）</span></p>
                      <p>复查人:<span>吴艺昌（安全部）</span></p>
                      <p>抄送人:<span>--</span></p>
                      <p>整改责任人:<span>彭泽纯（参建方）</span></p>
                      <p>检查时间:<span>2019-04-24 16:51</span></p>
                      <p>整改要求:<span>立即安排人员进行防护</span></p>
                      <p>整改期限:<span>2019-04-25 18:00</span></p>
                    </div>
                  </div>
                  <p style="margin-top: 20px"><img src="../../../assets/safe-yh1.jpg"  width="300px" alt=""></p>
                </div>
              </div>
            </div>
          </el-dialog>
        </div>
      </div>
      <div class="top_con_middle">
        <div style="height:410px;width:100%;background-color:#1D284D;margin-bottom:10px;" class="middle_bg">
          <div class="bottom_ul">
            <ul>
              <li style="color:#FC0C59"><i class="i_red"></i>重大危险源 : 10个</li>
              <li style="color:#FEDF50"><i class="i_yellow"></i>危险作业: 10个</li>
              <li style="color:#FC0C59"><i class="i_red"></i>一级1个</li>
              <li style="color:#FEDF50"><i class="i_yellow"></i>二级3个</li>
              <li style="color:#4CF0FE"><i class="i_blue"></i>三级2个</li>
              <li style="color:#00F7BD"><i class="i_green"></i>四级1个</li>

            </ul>
<!--            <a href="javascript:0;">项目简介</a>-->
          </div>
          <!-- 摄像头 -->
          <div class="camera">
            <div class="camera_loc" style="top: 100px;left: 300px;" @click="openPic(0)">
              <img v-show="indexItem!=0" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==0" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==0" src="../../../assets/index/pic1.png" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
            </div>
            <div class="camera_loc" style="top: 280px;left: 130px;" @click="openPic(1)">
              <img v-show="indexItem!=1" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==1" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==1" src="../../../assets/index/pic1.png" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
            </div>
            <div class="camera_loc" style="top: 330px;left: 520px;" @click="openPic(2)">
              <img v-show="indexItem!=2" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==2" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==2" src="../../../assets/index/pic1.png" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
            </div>
            <div class="camera_loc" style="top: 160px;left: 560px;" @click="openPic(3)">
              <img v-show="indexItem!=3" src="../../../assets/index/camera_blue.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==3" src="../../../assets/index/camera_red.png" alt="" style="top:0;left:0">
              <img v-show="indexItem==3" src="../../../assets/index/pic1.png" alt="" width="130" height="92" style="border:2px solid #1F284B;left:-45px;bottom:5px;">
            </div>
          </div>
          <!-- 隐患 -->
          <div class="hidden">
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
        <div style="height:516px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>危险作业统计</h5>
            </div>
<!--            <div class="timeSelect">-->
<!--              <p>本周</p>-->
<!--              <p>本月</p>-->
<!--            </div>-->
          </div>
          <div class="top_con_middle_content" style="display: flex;padding: 30px">
            <div class="top_con_middle_content_left" style="display: flex">
              <div class="cir_time" style="margin:20px 20px 0 30px;">
                <el-progress type="circle" :percentage="100" color="#00F29F"></el-progress>
                <div class="time_size">100%</div>
              </div>
              <div class="top_con_middle_content_word">
                <p><span class="yi"></span> 已验收</p>
                <p><span class="er"></span> 待验收</p>
              </div>
            </div>
            <div class="top_con_middle_content_right" style="flex: 1">
              <div id="echart-pie" style="width:100%;height:100%"></div>
            </div>
          </div>
          <div class="table" style="margin-top: 20px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>验收类型</th>
                  <th >设备名称</th>
                  <th>验收状态</th>
                  <th>验收人</th>
                </tr>
              </thead>
              <tr>
                <td>一般固定设备</td>
                <td><span>切割机</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>刘鹏</td>
              </tr>
              <tr>
                <td>一般固定设备</td>
                <td><span>电焊机</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>刘鹏</td>
              </tr>
              <tr>
                <td>一般固定设备</td>
                <td><span>水泵</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>刘鹏</td>
              </tr>
              <tr>
                <td>通道口防护</td>
                <td><span>基坑安全通道</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td>刘鹏</td>
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
                <td @click="dialogVisibleThree = true">重大危险源预警</td>
                <td></td>
                <td>进场人数</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">9</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px" @click="dialogVisibleThree = true">1</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">37</span>人</td>
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
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">0</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">0</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">0</span>个</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">4</span>次</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">110</span>人</td>
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
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px">9</span>个</td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #F26565;margin-right: 5px"></span></td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">0</span>次</td>
                <td><span style="font-size: 28px;color: #76D0DF;margin-right: 5px">0</span>人</td>
                <td><span style="font-size: 24px;color: #76D0DF;margin-right: 5px">0%</span></td>
              </tr>
            </table>
          </div>
          <el-dialog title="提示" :visible.sync="dialogVisibleThree" >
            <div class="modal hulingModal" style="height:600px;width: 600px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">重大危险源预警</span>
                </div>
                <div class="all-height flex ai-center close" @click="dialogVisibleThree = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                  <p>危险源名称:<span>模板工程及支持体系</span></p>
                  <p>等级:<span>一级</span></p>
                  <p>施工责任人:<span>刘鹏</span></p>
                  <p>主要事故类型:<span>坍塌</span></p>
                  <p>管控措施:<span>A:做到先设计后施工 B:组织整体验收，设计人员参与验收 C:精心设计浇砼方案，确保模板支持均衡受载</span></p>
                  <p style="margin-top: 20px"><img src="../../../assets/safe-tc.png"  width="350px" alt=""></p>
                </div>
              </div>
            </div>
          </el-dialog>
        </div>
        <div class="safeContent" style="height:313px;width:100%;background-color:#1D284D;margin-bottom:10px;">
          <div class="top_con_right_title">
            <div class="title_left">
              <img src="../../../assets/safe-time.png" alt="">
              <h5>危险源执行情况</h5>
            </div>
<!--            <div class="timeSelect">-->
<!--              <p>本周</p>-->
<!--              <p>本月</p>-->
<!--            </div>-->
          </div>
          <div class="table" style="margin-top: 55px">
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>危险源名称</th>
                  <th>等级</th>
                  <th>责任人</th>
                  <th>状态</th>
                  <th>已监管次数</th>
                  <th>需监管天数</th>
                </tr>
              </thead>
              <tr>
                <td style="max-width: 60px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap">基坑支护与降水工程</td>
                <td>一级</td>
                <td>刘鹏</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #4CBDFE;background: rgba(76,189,254,.2);font-size: 10px">通过中</span></td>
                <td>57</td>
                <td><span style="color: #FC0C59;">120</span></td>
              </tr>
              <tr>
                <td>深基坑</td>
                <td>一级</td>
                <td>孙宗瑞</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #4CBDFE;background: rgba(76,189,254,.2);font-size: 10px">通过中</span></td>
                <td>57</td>
                <td><span style="color: #FC0C59;">120</span></td>
              </tr>
              <tr>
                <td>土方开挖工程</td>
                <td>一级</td>
                <td>刘鹏</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已通过</span></td>
                <td>60</td>
                <td><span style="color: #FC0C59;">60</span></td>
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
<!--            <div class="timeSelect">-->
<!--              <p>本周</p>-->
<!--              <p>本月</p>-->
<!--            </div>-->
          </div>
          <div class="safeData">
            <h5>检查率 : <span>100%</span> <img src="../../../assets/safe-sjt.png" width="6" height="10" alt=""></h5>
            <h5>检查率 : <span>100%</span> <img src="../../../assets/safe-sjt.png" width="6" height="10" alt=""></h5>
          </div>
          <div class="table" >
            <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr>
                  <th>作业类型</th>
                  <th colspan="2">状态</th>
                  <th>责任人</th>
                  <th>监管人</th>
                </tr>
              </thead>
              <tr @click="dialogVisibleFour=true">
                <td>动火作业</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(254,223,80,.2);font-size: 10px">已验收</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">已检查</span></td>
                <td>刘鹏</td>
                <td>刘鹏</td>
              </tr>
              <tr @click="dialogVisibleFive=true">
                <td>吊装作业</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">已检查</span></td>
                <td>刘鹏</td>
                <td>刘鹏</td>
              </tr>
              <tr @click="dialogVisibleSix=true">
                <td>设备检维修作业</td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #00F7BD;background: rgba(0,247,189,.2);font-size: 10px">已验收</span></td>
                <td><span style="display: inline-block;width: 52px;height: 19px;line-height:19px;color: #FEDF50;background: rgba(254,223,80,.2);font-size: 10px">已检查</span></td>
                <td>刘鹏</td>
                <td>刘志强</td>
              </tr>
            </table>
          </div>
          <el-dialog title="提示" :visible.sync="dialogVisibleFour" >
            <div class="modal hulingModal" style="height:400px;width: 400px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">危险作业详情</span>
                </div>
                <div class="all-height flex ai-center close" @click="dialogVisibleFour = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                  <p>危险源名称:<span>广州金控总部大楼项目</span></p>
                  <p>作业类型:<span>吊装作业</span></p>
                  <p>提交时间:<span>2019-04-16 16:32</span></p>
                  <p>使用设备:<span>塔吊</span></p>
                  <p>责任单位:<span>金控项目总承包</span></p>
                  <p>作业开始时间:<span>2019-04-17 10:36</span></p>
                  <p>作业结束时间:<span>2019-04-14 12:33</span></p>
                  <p>作业人:<span>吴艺昌</span></p>
                  <p>施工责任人:<span>刘鹏</span></p>
                  <p>安全监管人:<span>刘鹏</span></p>
                </div>
              </div>
            </div>
          </el-dialog>
          <el-dialog title="提示" :visible.sync="dialogVisibleFive" >
            <div class="modal hulingModal" style="height:400px;width: 400px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">危险作业详情</span>
                </div>
                <div class="all-height flex ai-center close" @click="dialogVisibleFive = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                  <p>危险源名称:<span>广州金控总部大楼项目</span></p>
                  <p>作业类型:<span>设备检维修作业</span></p>
                  <p>提交时间:<span>2019-04-16 16:32</span></p>
                  <p>使用设备:<span>维修工具</span></p>
                  <p>责任单位:<span>金控项目总承包</span></p>
                  <p>作业开始时间:<span>2019-04-16 16:36</span></p>
                  <p>作业结束时间:<span>2019-04-16 18:36</span></p>
                  <p>作业人:<span>吴艺昌</span></p>
                  <p>施工责任人:<span>刘鹏</span></p>
                  <p>安全监管人:<span>刘鹏</span></p>
                </div>
              </div>
            </div>
          </el-dialog>
          <el-dialog title="提示" :visible.sync="dialogVisibleSix" >
            <div class="modal hulingModal" style="height:400px;width: 400px;">
              <div class="modal-title flex jc-between">
                <div class="all-height flex ai-center">
                  <img src="../../../assets/index/icon.png" alt width="16px">
                  <span class="text">危险作业详情</span>
                </div>
                <div class="all-height flex ai-center close" @click="dialogVisibleSix = false">
                  <i class="el-icon-close"></i>
                </div>
              </div>
              <div class="modal-content">
                <div class="modal-content-datail">
                  <p>危险源名称:<span>广州金控总部大楼项目</span></p>
                  <p>作业类型:<span>动火作业</span></p>
                  <p>提交时间:<span>2019-04-16 16:32</span></p>
                  <p>使用设备:<span>电焊机</span></p>
                  <p>责任单位:<span>金控项目总承包</span></p>
                  <p>作业开始时间:<span>2019-04-18 18:26</span></p>
                  <p>作业结束时间:<span>2019-04-18 21:22</span></p>
                  <p>作业人:<span>吴艺昌</span></p>
                  <p>施工责任人:<span>刘鹏</span></p>
                  <p>安全监管人:<span>刘志强</span></p>
                </div>
              </div>
            </div>
          </el-dialog>
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
      dialogVisible: false,
      dialogVisibleOne: false,
      dialogVisibleTwo: false,
      dialogVisibleThree: false,
      dialogVisibleFour: false,
      dialogVisibleFive: false,
      dialogVisibleSix: false,
      camera:'',
      indexItem:-1,
      hiddenIndexItem:-1
    }
  },
  methods: {
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
    drawPie () {
      var myChart = this.$echarts.init(document.getElementById("echart-pie"));

      var data = [
        { value: 40, name: "已通过", color0: "#FF687D", color1: "#FC0C59" },
        { value: 20, name: "通过中", color0: "#FCDE54", color1: "#F7BA2A" },
        { value: 15, name: "未开始", color0: "#15E09B", color1: "#1DBD6B" },
        {
          value: 10,name: "预警",color0: "rgba(13,138,212,1)",color1: "rgba(60,181,251,1)"
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
        legend: {
          orient: "vertical",
          x: "75%",
          y: "25%",
          itemWidth: 14,
          itemHeight: 14,
          align: "left",
          data: ["已通过", "通过中", "未开始", "预警"],
          textStyle: {
            color: "#fff"
          }
        },

        series: [
          {
            name: "质量问题",
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
    goodsChart (){
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('goodsChart'))
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
          data: ['重大隐患', '隐患统计'],
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
          data: ['工区一',
            '工区二',
            '工区三',
            '工区四'
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
          name: '重大隐患',
          type: 'bar',
          data: [0, 0, 0, 0],
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
          name: '隐患统计',
          type: 'bar',
          data: [0, 3, 2, 0],
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
      var myChart = this.$echarts.init(document.getElementById("echart-line"));
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
            // min: 0,
            // max: 140,
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
            name: "质量问题",
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
              "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAGDUlEQVRogbWaPWxcRRDHf/fO92Ffgk2MrXygBEJACCiQkCgQcoPSIAVXoYCKFBRIKegpQJHSBokehIgoiBBFrEiAQuEKgoQiPiIQEIRANnFI7ODYvvP5fBQ74zdvb/e9y9keafV27+3Hf2ZnZmf2XYlulx2kClAFVqS9V57LO7mIUmmb4H2wO90/l7YLfru0LWYGAd8A1oF2dM4wFS1UB8oFc3sLbV/yMbD9kF1cd6EDNPtbuBh8BUiAVmacP09+21+kqN0XDSL5UuQZ+w2y4LqRp18fwalPVIWGckBWvIE+yJJXz2PKAg3VtV0y9TbOBgYCnwSA+4ATD7zPSAj8pgFui+1XokDqrlOx2oQkbIEnpsQYUICb5rkZ+C2kUnWp9xixL/kKbqu0Ywh44pWy97SMPQ78A9w2ADsGfEf6bRqwm/KbqlHTMJAhX/INUleVB7xsypCpPwncBO6QlbyCfQyYkz6dQMnbhULw2Xdx4EOmPCiLLRtGtK8u3hVwG15pm7plwNqFZaAsfYC4wYY8iwVeMeUO7nBpSFsZ0HEKXMG3cafoOnAMuAEsBDBYVQqS9SiNAAMxqU8CR3G6OIzzyS8DM8B9wMPAi8DzwCjwEHAROCnrjMi4FeB+w7Rv+BYLGKn74Ne9jpYBX+qTOCkq8HEB+ouA7QA/AX8BYzJmBjgF7DEMNHH6XyVVw5DnslSX+YI6H5K4gq4CNbISfwd4Hxe7q4dQr6WeZEOE0wLWgNPA18Cn0j6M80i/Sz+1Aav/yFM1ZCXvkFJGfJVRJurA2x7IESMZH3wLJ+khATkNXJL3i2S9loJWDFbC69KHEt2uH1P7qlI2gI+JhEZw278fp7Mdaasuqxoo+LYAX5N17uK807LU7wKr8r5Ferpa9+mHEwzJQr6+W10Lucgq8BZwXvo0BHxjCg6/Ac895YyWFqx/AVffhW9uOAkjoNoilBeAT2TeI8BvZFXXlzy43W0mIomiAEwZmDcMPC3jEplseAqOnIOTChygBtUT8Ox5eIV0Z4bdKxrAa6QqM0q+sWYoyXvpTXKY7A58Rurra0DtLJyouV3poQMwftoxXMP1qeJs4XtS9bxJ2FVaPCDhS0Ka4cc6an0f2Z24gjlpp+DgWHwuAI7DE2ZMWcCfM4CXcoD3UEzyscGx8Lc0FgmeLHXDYfQlD/CeAgxK5YTwnUroSP6B1OI/Bm6Zdnepj7yzFI7nIeBJIhgypMYWIj/LOYQzqC7wAc7oEiSwmoW5ecdQlL6Ea/QGYl8FGOorN02QozaHAS0jwIQsOIPb1iGcx2kBrTPweSt1uxm6DnPvwVXpq4FZGzhLNqL8L4cB+1snoTfV8iWuWz0vE6vkTgHP4NSlCazNwp9vwoUf4Q+dYAmWL8KVl5yq6UG0Jq+Pk4bFe4ED5BxKhurgJGd1VWMTO1CP6n9xJ+EIqdSmgcuYUGAWrs/C3+SfsGsyZp+Zaz9O7fpRoQrQ1MCsTjb102KzJQ3KxmWBhpRDpL69n9hmlTREWJGiO9I0zKhd6M6rcLeoKDCzybKfCWnGdAv4ELiAixSbEfDrMt/rAvYMaSyjgP10sAewJfXzvpvzt82CXyQb3t4GvsPlp9pnSfotSn0Jl3FtAI8C35JKegJ4hGwYHFIZrW8lTbEcNi+L0gjzKE5aa0h4gDO6j6RcJk1SpoFXSb1My5QJYXKBXumHdmDrMsyCt7e/NrrUE9Hqv2ZTkzjjrJLGOf3msJM4r+TreCgJj0g4BR+L64tuDypeu5/bg3Gc3i9wb7cHUfC973qZiN3bPAAcBH41fWxsMopTj2uGiXu9t6mRvakOgq+TJguD3piN4/z2z4QNfzNQt8At6B5dzwOvurtqgPsMWFvY7bvKKPV7P18KPEPhbSwDsmBit8Qh16ifeoLfrIoOKT15bdhgSS9KLWD/6YP36yEp+7cFQSqSfOh6OQ9k6LcYsCLQhTToBzUfXFG7KNGw7dA3sAiI/sHXSCPE7ByD00CSUyq6PbDUQm6qAgD6yYDyjLNC70VvIW3nO2zRx+Rdp536fB/9bhShHWF8t/574P/bY1d26X/PtooMr/p/9AAAAABJRU5ErkJggg==",
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
            data: [1, 2, 5, 3]
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
          align: 'left',
          left: 10,
          itemWidth: 14,
          itemHeight: 10,
          itemGap: 13,
          data: ["重大隐患", "隐患总数","整改率"],
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
              "4/19",
              "4/20",
              "4/21",
              "4/22",
              "4/23",
              "4/24",
              "4/25"
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
            max: 10,
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
            name: "重大隐患",
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
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            name: "隐患总数",
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
              6,
              2,
              4,
              3,
              1,
              1,
              0
            ]
          },{
            name: "整改率",
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
              '100%',
              '100%',
              '100%',
              '100%',
              '100%',
              '100%',
              '100%'
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
    this.drawPie()
    this.drawTwoLine()
    this.goodsChart()
    // this.drawLine()
  },
  beforeDestroy () {
    clearInterval(this.intervalTimer)
  }
}
</script>
<style lang="scss" scoped>
  @import '../homePage/homePage.scss';
</style>
<style lang="scss" scoped>
  @import './siteSafety';
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
  .top_con_middle_content_word{
    padding: 34px;
    p {
      font-size: 12px;
      color: #FFFFFF;
      width: 60px;
    }
    span{
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .yi{
      background:linear-gradient(180deg,rgba(176,249,255,1) 0%,rgba(76,240,254,1) 100%)
    }
    .er{
      background:rgba(94,100,121,1)
    }
  }
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
  .i_blue{
    display: inline-block;
    width: 8px;
    height: 8px;
    background:rgba(76,240,254,1);
    box-shadow:0px 0px 0px 4px rgba(76,240,254,0.19);
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 4px;
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
  .huling .hulingModal{
    position: fixed;
    top: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
  }
</style>

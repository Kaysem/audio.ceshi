webpackJsonp([12],{KRb0:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});i("Bfwr");var e=i("Mitt"),a=(e.a,{data:function(){return{topinfo:{title:""},showLoading:!1,loadingText:"",paytimeout:60,oilRecord:{},loadResult:!1,payType:1,recAmount:0,nrecAmount:0,disAmount:0,phone:"",plateNum:"",payMethod:""}},mounted:function(){this.topinfo.title=this.$store.state.POS_province,window.addEventListener("popstate",this.onBrowserBack,!1),this.recAmount=this.$route.query.recAmount,this.nrecAmount=this.$route.query.nrecAmount,this.disAmount=this.$route.query.disAmount,this.oilrecordId=this.$route.query.id,this.payType=parseInt(this.$route.query.payType),this.phone=this.$route.query.phone,this.plateNum=this.$route.query.plateNum;var t=this.$store.getters.getOilInfo;t?this.oilRecord=t:this.getOilRecordById()},destroyed:function(){window.removeEventListener("popstate",this.onBrowserBack,!1)},methods:{onBrowserBack:function(){history.pushState(null,null,document.URL)},getOilRecordById:function(){var t=this;this.showLoading=!0,this.$http.get("/store/json/refuel_pos/getRefuelMonitorRecordMsg",{"gasStationSaleOrder.redisId":this.$route.query.id}).then(function(s){"success"===s.result&&(t.loadResult=!0,t.oilRecord=s.data),console.log(s),t.showLoading=!1}).catch(function(s){t.showLoading=!1,console.log(s)})}},components:{vheader:e.a},filters:{substr:function(t){return t?t.substring(t.length-6,t.length):""}}}),l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"page ivo"},[i("div",{staticClass:"invoice step2"},[i("vheader",{attrs:{title:t.topinfo.title,isShowHome:!0}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"orderlist customer"},[i("ul",[i("li",[i("div",{staticClass:"list-left"},[i("p",{staticClass:"gunno"},[t._v("\n              "+t._s(t.oilRecord.gunNo)+"#枪\n            ")]),t._v(" "),i("span",{staticClass:"gasName"},[t._v(t._s(t.oilRecord.tankOilName))])]),t._v(" "),i("div",{staticClass:"list-right"},[i("p",{staticClass:"username"},[t._v(t._s(t.oilRecord.cardOwner)+"("+t._s(t._f("substr")(t.oilRecord.cardNo))+")")]),t._v(" "),i("p",{staticClass:"oiltime"},[t._v(t._s(t.oilRecord.getTimeStr))]),t._v(" "),i("p",{staticClass:"oildata"}),i("div",{staticClass:"litrebox"},[i("span",[t._v("升数")]),t._v(" "),i("span",{staticClass:"data-value"},[t._v(t._s(t.oilRecord.liter)+"L")])]),t._v(" "),i("div",{staticClass:"moneybox"},[i("span",[t._v("金额")]),t._v(" "),i("span",{staticClass:"data-value"},[t._v(t._s(t.oilRecord.amount)+"元")])]),t._v(" "),i("p")])])])]),t._v(" "),i("div",{staticClass:"payinfo"},[i("ul",[i("li",[i("div",{staticClass:"pay-left pay-desc"},[t._v("收款金额")]),t._v(" "),i("div",{staticClass:"pay-right"},[i("span",{staticClass:"pay-txt"},[t._v("应收"),i("span",{staticClass:"pay-value"},[t._v(t._s(t.recAmount))]),t._v("元,")]),t._v(" "),i("span",{staticClass:"pay-txt"},[t._v("实收"),i("span",{staticClass:"pay-value"},[t._v(t._s(t.nrecAmount))]),t._v("元,")]),t._v(" "),i("span",{staticClass:"pay-txt"},[t._v("优惠"),i("span",{staticClass:"pay-value"},[t._v(t._s(t.disAmount))]),t._v("元")])]),t._v(" "),i("div",{staticClass:"clear"})]),t._v(" "),null!=t.phone||null!=t.plateNum?i("li",[i("div",{staticClass:"pay-left pay-desc"},[t._v("客户标识")]),t._v(" "),i("div",{staticClass:"pay-right"},[i("span",{staticClass:"pay-txt"},[t._v(t._s(t.plateNum)),t.plateNum&&t.phone?i("span",[t._v(",")]):t._e(),t._v(t._s(t.phone))])]),t._v(" "),i("div",{staticClass:"clear"})]):t._e()]),t._v(" "),i("div",{staticClass:"clear"})]),t._v(" "),t._m(1)],1),t._v(" "),i("footer",{staticClass:"btn-fixed-bottom"},[i("yd-button",{staticClass:"save-submit",attrs:{size:"large",type:"danger"}},[t._v("开具电子发票")]),t._v(" "),i("yd-button",{staticClass:"save-submit",attrs:{size:"large",type:"danger"}},[t._v("开具纸质发票")])],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"step"},[e("ul",[e("li",{staticClass:"selected"},[t._v("1.加油记录")]),t._v(" "),e("li",[e("img",{attrs:{src:i("rW3a"),width:"15",height:"15"}})]),t._v(" "),e("li",{staticClass:"selected"},[t._v("2.收银结算")]),t._v(" "),e("li",[e("img",{attrs:{src:i("rW3a"),width:"15",height:"15"}})]),t._v(" "),e("li",{staticClass:"selected"},[t._v("3.客户识别")]),t._v(" "),e("li",[e("img",{attrs:{src:i("rW3a"),width:"15",height:"15"}})]),t._v(" "),e("li",{staticClass:"selected"},[t._v("4.开具发票")]),t._v(" "),e("div",{staticClass:"clear"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"invoiceinfo"},[e("div",{staticClass:"info-left"},[e("p",[t._v("开票信息")]),t._v(" "),e("div",{staticStyle:{width:"55px",height:"55px",margin:"10px auto",background:"#ff6800","border-radius":"6px"}},[e("img",{staticStyle:{"margin-top":"12px"},attrs:{src:i("QOTB"),width:"30",height:"30"}})])]),t._v(" "),e("div",{staticClass:"info-right"},[e("ul",[e("li",[e("div",{staticClass:"info-desc"},[e("span",{staticStyle:{color:"#f30"}},[t._v("*")]),t._v("邮箱")]),t._v(" "),e("div",{staticClass:"info-content"},[e("input",{attrs:{type:"text",placeholder:"请输入邮箱"}})])]),t._v(" "),e("li",[e("div",{staticClass:"info-desc"},[e("span",{staticStyle:{color:"#f30"}},[t._v("*")]),t._v("单位名称")]),t._v(" "),e("div",{staticClass:"info-content"},[e("input",{attrs:{type:"text",placeholder:"请输入单位名称"}})])]),t._v(" "),e("li",[e("div",{staticClass:"info-desc"},[e("span",{staticStyle:{color:"#f30"}},[t._v("*")]),t._v("税号")]),t._v(" "),e("div",{staticClass:"info-content"},[e("input",{attrs:{type:"text",placeholder:"请输入税号"}})])]),t._v(" "),e("li",[e("div",{staticClass:"info-desc"},[t._v("注册地址")]),t._v(" "),e("div",{staticClass:"info-content"},[e("input",{attrs:{type:"text",placeholder:"请输入注册地址"}})])]),t._v(" "),e("li",[e("div",{staticClass:"info-desc"},[t._v("电话号码")]),t._v(" "),e("div",{staticClass:"info-content"},[e("input",{attrs:{type:"text",placeholder:"请输入电话号码"}})])]),t._v(" "),e("li",[e("div",{staticClass:"info-desc"},[t._v("开户银行")]),t._v(" "),e("div",{staticClass:"info-content"},[e("input",{attrs:{type:"text",placeholder:"请输入开户银行"}})])]),t._v(" "),e("li",[e("div",{staticClass:"info-desc"},[t._v("银行账号")]),t._v(" "),e("div",{staticClass:"info-content"},[e("input",{attrs:{type:"text",placeholder:"请输入银行账号"}})])])])]),t._v(" "),e("div",{staticClass:"clear"})])}]};var n=i("VU/8")(a,l,!1,function(t){i("PouY")},null,null);s.default=n.exports},PouY:function(t,s){},QOTB:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA4CAIAAADBzWcNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExOTEwOTg1NEM5NEMyM0YyNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NjRGMkEzQjQwNzYxMUU5OTFGMEM5OTM0QzRGMzk0MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NjRGMkEzQTQwNzYxMUU5OTFGMEM5OTM0QzRGMzk0MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEVGRDJCN0UzNjRBMTFFOUEyNDFBQTA3RjVFQTUzNTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEVGRDJCN0YzNjRBMTFFOUEyNDFBQTA3RjVFQTUzNTMiLz4gPC9yZGY6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"}});
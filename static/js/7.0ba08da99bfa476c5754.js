webpackJsonp([7],{ERDW:function(o,e,t){o.exports=t.p+"static/img/login_logo.7f20d63.png"},HMsb:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__api_baseurl_config__=__webpack_require__("dAut"),__WEBPACK_IMPORTED_MODULE_1_vux_src_components_loading_index_vue__=__webpack_require__("Bfwr"),_unused_webpack_default_export={data:function(){return{topinfo:{title:""},showLoading:!1,showbutton:!1,showerr:!1,deviceNo:""}},mounted:function(){this.topinfo.title=this.$store.state.POS_province,this.init()},methods:{init:function init(){var _this=this;this.$bridge.commonargs(function(response){response=eval("("+response+")"),console.log("打印的扫面返回",response),_this.deviceNo=response.deviceId,_this.deviceNo?_this.findPosNo(_this.deviceNo):_this.$dialog.alert({mes:"获取设备号失败，请稍后再试！"})})},setPosNo:function(){""!=this.deviceNo?this.validatePos(this.deviceNo):this.$dialog.alert({mes:"设备无效"})},setItem:function(o,e){var t=this,s="http://"+this.$route.query.url+":18898/store_pos_vue/index.html#"+"/loginV2?postoken="+o.postoken+"&deviceNo="+e;this.$bridge.setItem("setpath",s),this.$bridge.getItem("setpath",function(s){s||setTimeout(function(){t.setItem(o,e)},1e3)})},findPosNo:function(o){var e=this;console.log("deviceNo",o),this.$http.getAsJson("/refuel/json/find/findPosNo",{device:o}).then(function(t){if(console.log("接口返回",t),e.tempposNo=t.data,"success"==t.result){var s=e.$route.query.ouCode,i=e.$route.query.storeMode;if(!e.$route.query.url)return void e.$dialog.alert({mes:"获取ip地址失败！"});e.showLoading=!0,e.$http.get("/store/json/login/validatePos",{"gasStationDevicePos.ouCode":s,"gasStationDevicePos.storeMode":i,"gasStationDevicePos.device":o,"gasStationPos.posNo":e.tempposNo}).then(function(t){if(console.log(t),"success"==t.result){if("0"==t.data.stateCode)return e.showLoading=!1,void e.$dialog.alert({mes:null==t.data.info?"初始化失败！":t.data.info});var n={};n.ouCode=s,n.storeMode=i,n.posno=e.tempposNo,n.postoken=t.data.posToken,n.deviceNo=o,e.$localStorage.setStorage("deviceInfo",n),e.setItem(n,o),e.$router.push("/loginV2")}e.showLoading=!1}).catch(function(o){e.showLoading=!1,console.log(o)}),e.$router.push("/loginV2")}else e.$dialog.alert({mes:t.info}),e.showbutton=!0;e.showLoading=!1}).catch(function(o){e.showLoading=!1,console.log(o)})},validatePos:function(o){var e=this,t=this.$route.query.ouCode,s=this.$route.query.storeMode,i=this.$refs.posno.value;if(!/^[1-9]\d?$/g.test(i))return this.$dialog.alert({mes:"请输入1-99之间的数字"}),!1;this.$route.query.url?(this.showLoading=!0,this.$http.get("/store/json/login/validatePos",{"gasStationDevicePos.ouCode":t,"gasStationDevicePos.storeMode":s,"gasStationDevicePos.device":o,"gasStationPos.posNo":i}).then(function(n){if(console.log(n),"success"==n.result){if("0"==n.data.stateCode)return e.showLoading=!1,void e.$dialog.alert({mes:null==n.data.info?"初始化失败！":n.data.info});var a={};a.ouCode=t,a.storeMode=s,a.posno=i,a.postoken=n.data.posToken,a.deviceNo=o,e.$localStorage.setStorage("deviceInfo",a),e.setItem(a,o),e.$router.push("/loginV2")}e.showLoading=!1}).catch(function(o){e.showLoading=!1,console.log(o)})):this.$dialog.alert({mes:"获取ip地址失败！"})}},components:{loading:__WEBPACK_IMPORTED_MODULE_1_vux_src_components_loading_index_vue__.a}}},XwLG:function(o,e){},fLkx:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__api_baseurl_config__=__webpack_require__("dAut"),__WEBPACK_IMPORTED_MODULE_1_vux_src_components_loading_index_vue__=__webpack_require__("Bfwr");__webpack_exports__.a={data:function(){return{topinfo:{title:""},showLoading:!1,showbutton:!1,showerr:!1,deviceNo:""}},mounted:function(){this.topinfo.title=this.$store.state.POS_province,this.init()},methods:{init:function init(){var _this=this;this.$bridge.commonargs(function(response){response=eval("("+response+")"),console.log("打印的扫面返回",response),_this.deviceNo=response.deviceId,_this.deviceNo?_this.findPosNo(_this.deviceNo):_this.$dialog.alert({mes:"获取设备号失败，请稍后再试！"})})},setPosNo:function(){""!=this.deviceNo?this.validatePos(this.deviceNo):this.$dialog.alert({mes:"设备无效"})},setItem:function(o,e){var t=this,s="http://"+this.$route.query.url+":18898/store_pos_vue/index.html#"+"/loginV2?postoken="+o.postoken+"&deviceNo="+e;this.$bridge.setItem("setpath",s),this.$bridge.getItem("setpath",function(s){s||setTimeout(function(){t.setItem(o,e)},1e3)})},findPosNo:function(o){var e=this;console.log("deviceNo",o),this.$http.getAsJson("/refuel/json/find/findPosNo",{device:o}).then(function(t){if(console.log("接口返回",t),e.tempposNo=t.data,"success"==t.result){var s=e.$route.query.ouCode,i=e.$route.query.storeMode;if(!e.$route.query.url)return void e.$dialog.alert({mes:"获取ip地址失败！"});e.showLoading=!0,e.$http.get("/store/json/login/validatePos",{"gasStationDevicePos.ouCode":s,"gasStationDevicePos.storeMode":i,"gasStationDevicePos.device":o,"gasStationPos.posNo":e.tempposNo}).then(function(t){if(console.log(t),"success"==t.result){if("0"==t.data.stateCode)return e.showLoading=!1,void e.$dialog.alert({mes:null==t.data.info?"初始化失败！":t.data.info});var n={};n.ouCode=s,n.storeMode=i,n.posno=e.tempposNo,n.postoken=t.data.posToken,n.deviceNo=o,e.$localStorage.setStorage("deviceInfo",n),e.setItem(n,o),e.$router.push("/loginV2")}e.showLoading=!1}).catch(function(o){e.showLoading=!1,console.log(o)}),e.$router.push("/loginV2")}else e.$dialog.alert({mes:t.info}),e.showbutton=!0;e.showLoading=!1}).catch(function(o){e.showLoading=!1,console.log(o)})},validatePos:function(o){var e=this,t=this.$route.query.ouCode,s=this.$route.query.storeMode,i=this.$refs.posno.value;if(!/^[1-9]\d?$/g.test(i))return this.$dialog.alert({mes:"请输入1-99之间的数字"}),!1;this.$route.query.url?(this.showLoading=!0,this.$http.get("/store/json/login/validatePos",{"gasStationDevicePos.ouCode":t,"gasStationDevicePos.storeMode":s,"gasStationDevicePos.device":o,"gasStationPos.posNo":i}).then(function(n){if(console.log(n),"success"==n.result){if("0"==n.data.stateCode)return e.showLoading=!1,void e.$dialog.alert({mes:null==n.data.info?"初始化失败！":n.data.info});var a={};a.ouCode=t,a.storeMode=s,a.posno=i,a.postoken=n.data.posToken,a.deviceNo=o,e.$localStorage.setStorage("deviceInfo",a),e.setItem(a,o),e.$router.push("/loginV2")}e.showLoading=!1}).catch(function(o){e.showLoading=!1,console.log(o)})):this.$dialog.alert({mes:"获取ip地址失败！"})}},components:{loading:__WEBPACK_IMPORTED_MODULE_1_vux_src_components_loading_index_vue__.a}}},k1FB:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("HMsb");var s=t("fLkx"),i={render:function(){var o=this,e=o.$createElement,s=o._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:t("ERDW"),width:"87",height:"90"}}),o._v(" "),s("p",{staticClass:"logo-desc"},[o._v(o._s(o.topinfo.title))])]),o._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:o.showbutton,expression:"showbutton"}],staticClass:"login-form"},[s("div",{staticClass:"formbox password"},[s("input",{ref:"posno",attrs:{id:"posno",type:"number",placeholder:"请输入pos号",autocomplete:"off"}})]),o._v(" "),s("yd-button",{staticClass:"submit",attrs:{size:"large",type:"danger"},nativeOn:{click:function(e){return o.setPosNo(e)}}},[o._v("初始化")])],1),o._v(" "),o.showerr?s("div",{staticClass:"login-form"},[s("p",{},[o._v("正在检测pos号")])]):o._e(),o._v(" "),s("div",{staticClass:"initbtn",on:{click:o.init}},[o._v("油站设置")]),o._v(" "),s("loading",{attrs:{show:o.showLoading,text:""}})],1)},staticRenderFns:[]};var n=function(o){t("XwLG")},a=t("VU/8")(s.a,i,!1,n,null,null);e.default=a.exports}});
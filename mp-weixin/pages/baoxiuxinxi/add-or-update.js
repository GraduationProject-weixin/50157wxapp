(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/baoxiuxinxi/add-or-update"],{"16fa":function(n,t,e){"use strict";var i={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"851c"))}},a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return i}))},"1ef9":function(n,t,e){"use strict";var i=e("96b8"),a=e.n(i);a.a},"1f55":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,i,a,u,r){try{var o=n[u](r),s=o.value}catch(c){return void e(c)}o.done?t(s):Promise.resolve(s).then(i,a)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var r=n.apply(t,e);function o(n){u(r,i,a,o,s,"next",n)}function s(n){u(r,i,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("851c"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{baoxiubianhao:this.getUUID(),yonghuming:"",yonghuxingming:"",touxiang:"",louhao:"",menpaihao:"",baoxiuneirong:"",baoxiushijian:"",baoxiuzhuangtai:"",userid:""},baoxiuzhuangtaiOptions:[],baoxiuzhuangtaiIndex:0,user:{},ro:{baoxiubianhao:!1,yonghuming:!1,yonghuxingming:!1,touxiang:!1,louhao:!1,menpaihao:!1,baoxiuneirong:!1,baoxiushijian:!1,baoxiuzhuangtai:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=r(i.default.mark((function t(e){var a,u,r,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=n.getStorageSync("nowTable"),t.next=3,this.$api.session(a);case 3:if(u=t.sent,this.user=u.data,this.ruleForm.yonghuming=this.user.yonghuming,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ruleForm.touxiang=this.user.touxiang,this.ruleForm.louhao=this.user.louhao,this.ruleForm.menpaihao=this.user.menpaihao,this.baoxiuzhuangtaiOptions="待处理,已处理".split(","),this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=19;break}return this.ruleForm.id=e.id,t.next=17,this.$api.info("baoxiuxinxi",this.ruleForm.id);case 17:u=t.sent,this.ruleForm=u.data;case 19:if(!e.cross){t.next=66;break}r=n.getStorageSync("crossObj"),t.t0=i.default.keys(r);case 22:if((t.t1=t.t0()).done){t.next=66;break}if(o=t.t1.value,"baoxiubianhao"!=o){t.next=28;break}return this.ruleForm.baoxiubianhao=r[o],this.ro.baoxiubianhao=!0,t.abrupt("continue",22);case 28:if("yonghuming"!=o){t.next=32;break}return this.ruleForm.yonghuming=r[o],this.ro.yonghuming=!0,t.abrupt("continue",22);case 32:if("yonghuxingming"!=o){t.next=36;break}return this.ruleForm.yonghuxingming=r[o],this.ro.yonghuxingming=!0,t.abrupt("continue",22);case 36:if("touxiang"!=o){t.next=40;break}return this.ruleForm.touxiang=r[o],this.ro.touxiang=!0,t.abrupt("continue",22);case 40:if("louhao"!=o){t.next=44;break}return this.ruleForm.louhao=r[o],this.ro.louhao=!0,t.abrupt("continue",22);case 44:if("menpaihao"!=o){t.next=48;break}return this.ruleForm.menpaihao=r[o],this.ro.menpaihao=!0,t.abrupt("continue",22);case 48:if("baoxiuneirong"!=o){t.next=52;break}return this.ruleForm.baoxiuneirong=r[o],this.ro.baoxiuneirong=!0,t.abrupt("continue",22);case 52:if("baoxiushijian"!=o){t.next=56;break}return this.ruleForm.baoxiushijian=r[o],this.ro.baoxiushijian=!0,t.abrupt("continue",22);case 56:if("baoxiuzhuangtai"!=o){t.next=60;break}return this.ruleForm.baoxiuzhuangtai=r[o],this.ro.baoxiuzhuangtai=!0,t.abrupt("continue",22);case 60:if("userid"!=o){t.next=64;break}return this.ruleForm.userid=r[o],this.ro.userid=!0,t.abrupt("continue",22);case 64:t.next=22;break;case 66:this.styleChange();case 67:case"end":return t.stop()}}),t,this)})));function e(n){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},baoxiushijianConfirm:function(n){console.log(n),this.ruleForm.baoxiushijian=n.result,this.$forceUpdate()},baoxiuzhuangtaiChange:function(n){this.baoxiuzhuangtaiIndex=n.target.value,this.ruleForm.baoxiuzhuangtai=this.baoxiuzhuangtaiOptions[this.baoxiuzhuangtaiIndex]},touxiangTap:function(){var n=this;this.$api.upload((function(t){n.ruleForm.touxiang=n.$base.url+"upload/"+t.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=r(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.id){n.next=5;break}return n.next=3,this.$api.update("baoxiuxinxi",this.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,this.$api.add("baoxiuxinxi",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(e,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};t.default=s}).call(this,e("543d")["default"])},"96b8":function(n,t,e){},a331:function(n,t,e){"use strict";e.r(t);var i=e("16fa"),a=e("b695");for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);e("1ef9");var r,o=e("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"55f4dcbf",null,!1,i["a"],r);t["default"]=s.exports},b695:function(n,t,e){"use strict";e.r(t);var i=e("1f55"),a=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=a.a},ceca:function(n,t,e){"use strict";(function(n){e("43cf"),e("921b");i(e("66fd"));var t=i(e("a331"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["ceca","common/runtime","common/vendor"]]]);
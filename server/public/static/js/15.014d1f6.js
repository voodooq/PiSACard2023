webpackJsonp([15],{MUFR:function(t,e,a){var s=a("Zo0I");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("deb28988",s,!0,{})},SVOP:function(t,e,a){"use strict";function s(t){a("MUFR")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("r4Fr"),n={data:function(){return{id:null,token:sessionStorage.getItem("token")?sessionStorage.getItem("token"):localStorage.getItem("token"),data:[],cardTime:0,time:0,packageInfo:{},haveCard:{},battleCard:[],myGuessTimes:0}},created:function(){this.searchGuessCard()},filters:{capitalize:function(t){var e=new Date(parseInt(t));return[e.getHours()<10?"0"+e.getHours():e.getHours(),e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()].join(":")}},mounted:function(){this.$emit("l2dMassage","这里可以进行猜卡，不仅可以获得猜中的卡，更可以获得丰厚的星星奖励！就算一张都没有猜中也可以获得宝石奖励！")},methods:{checkIndexOf:function(t,e){return e.indexOf(t)},send:function(){var t=this,e=this.data.filter(function(t){return t.sel});if(e.length<6)return this.$message.error("请选择6张卡牌！"),!1;var a=258;0===this.myGuessTimes?a=0:1===this.myGuessTimes&&(a=78),this.$confirm("猜卡将消耗"+a+"颗星星, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",lockScroll:!1,type:"warning"}).then(function(){for(var a=[],s=0;s<e.length;s++)a.push(e[s].index);var n={token:t.token,type:"buy",time:t.cardTime,id:t.id,cardIndex:a};r.a.userguesscard(n).then(function(e){0==e.data.code?t.$message.error(e.data.msg):1==e.data.code?(t.$message({message:e.data.msg,type:"success"}),t.$emit("updateUserinfo")):201==e.data.code&&t.$message.error(e.data.msg),t.searchGuessCard()})}).catch(function(){})},help:function(){this.$alert("系统每个整点会自动生成30张卡牌并自动结算上个整点选中的6张卡牌。<br />每位大佬可以选择6张心仪的卡牌，点击【猜卡】按钮上传选中的卡牌。<br />当天第一次猜卡免费，第二次猜卡消耗78星星，第三次以后每次消耗258星星。<br />然后等下一个整点公布结果后在【兑换】选项卡中兑换奖品。<br />系统将会根据猜中卡牌的张数发放对应的星星，同时还会获得猜中的卡牌。<br />奖品如下：<br />猜中零张卡牌：随机宝石×2。<br />猜中一张卡牌：10颗星星+猜中的卡牌。<br />猜中两张卡牌：30颗星星+猜中的卡牌。<br />猜中三张卡牌：160颗星星+猜中的卡牌。<br />猜中四张卡牌：2000颗星星+猜中的卡牌。<br />猜中五张卡牌：50000颗星星+猜中的卡牌。<br />猜中六张卡牌：500万颗星星+猜中的卡牌。",{dangerouslyUseHTMLString:!0,lockScroll:!1})},selCard:function(t){if(!this.data[t].sel&&this.data.filter(function(t){return t.sel}).length>=6)return this.$message({message:"最多只能选择6张卡牌！",type:"warning"}),!1;this.data[t].sel=!this.data[t].sel,this.$forceUpdate()},searchGuessCard:function(){var t=this,e={token:this.token};this.time=(new Date).getTime(),r.a.searchguesscard(e).then(function(e){if(0==e.data.code)t.$message.error(e.data.msg);else if(1==e.data.code){t.haveCard=e.data.myCardCount,t.battleCard=e.data.battleCard,t.data=e.data.data.card,t.id=e.data.data._id,t.myGuessTimes=e.data.myGuessTimes,t.cardTime=Number(e.data.data.time);for(var a=0;a<t.data.length;a++)t.data[a].sel=!1,t.data[a].index=a;for(var s=e.data.packageInfo,r=0;r<s.length;r++)t.packageInfo[s[r].packageId]=s[r].name}})}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wm_guesscard_content_body"},[t._m(0),t._v(" "),a("h6",{staticClass:"tc f14 mb15 mt5"},[0===t.myGuessTimes?a("span",[t._v("本次猜卡"),a("span",{staticClass:"cRed"},[t._v("免费")]),t._v("！")]):1===t.myGuessTimes?a("span",[t._v("本次猜卡消耗"),a("span",{staticClass:"cRed"},[t._v("78")]),t._v("颗星星！")]):a("span",[t._v("本次猜卡消耗"),a("span",{staticClass:"cRed"},[t._v("258")]),t._v("颗星星！")]),a("span",[t._v("上次获取时间："+t._s(t._f("capitalize")(t.time))+"\n  "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击刷新",placement:"top"}},[a("i",{staticClass:"el-icon-refresh wm_set_pointer pl5 cRed",on:{click:function(e){return t.searchGuessCard()}}})])],1)]),t._v(" "),t.data.length>0?a("div",{staticClass:"wm_guesscard_card_body"},[a("el-row",{attrs:{gutter:5}},t._l(t.data,function(e,s){return a("el-col",{key:s,staticClass:"mb5",attrs:{span:4,xs:8}},[a("div",{staticClass:"wm_guesscard_col",on:{click:function(e){return t.selCard(s)}}},[a("img",{key:e.cardId,staticClass:"wm_guesscard_card_img",class:{wm_guesscard_nosel:!e.sel},attrs:{src:t.$wikimoecard.url+e.packageId+"/"+e.cardId+".jpg"}}),t._v(" "),a("div",{staticClass:"wm_guesscard_mark_box type_2 f12 cOrange ellipsis"},[a("span",{staticClass:"wm_guesscard_mark_item"},[t._v(t._s(t.packageInfo[e.packageId]))])]),t._v(" "),a("div",{staticClass:"wm_guesscard_mark_box f12 cRed ellipsis"},[-1!==t.checkIndexOf(e.cardId,t.battleCard)?a("span",{staticClass:"wm_guesscard_mark_item"},[t._v("战")]):t._e(),t._v(" "),a("span",{staticClass:"wm_guesscard_mark_item cGreen1A7"},[t._v("持:"+t._s(t.haveCard[e.cardId]))])])])])}),1),t._v(" "),a("div",{staticClass:"wm_guesscard_btn_body"},[a("el-button",{attrs:{type:"primary"},on:{click:t.send}},[t._v("猜卡")]),t._v(" "),a("el-button",{on:{click:t.help}},[t._v("说明")])],1)],1):t._e()])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"mt20 tc f16"},[a("span",[t._v("每个整点更新一次猜卡！")])])}],d={render:i,staticRenderFns:c},o=d,l=a("VU/8"),u=s,m=l(n,o,!1,u,"data-v-6f3bf035",null);e.default=m.exports},Zo0I:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.wm_guesscard_card_img[data-v-6f3bf035]{\r\n  width: 100%;\r\n  height: auto;\n}\n.wm_guesscard_nosel[data-v-6f3bf035]{\r\n  opacity: 0.4;\n}\n.wm_guesscard_btn_body[data-v-6f3bf035]{\r\n    padding: 20px 0;\r\n    text-align: center;\r\n    background-color: #fff;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 999;\n}\n.wm_guesscard_col[data-v-6f3bf035]{\r\n  padding-bottom: 140%;\r\n  position: relative;\r\n  z-index: 1;\r\n  cursor: url(/static/cur/pointer.cur),pointer;\n}\n.wm_guesscard_col img[data-v-6f3bf035]{\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\n}\n.wm_guesscard_mark_box[data-v-6f3bf035]{\r\n  z-index: 2;\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 5px;\r\n  right: 5px;\n}\n.wm_guesscard_mark_box.type_2[data-v-6f3bf035]{\r\n  bottom: 24px;\n}\n.wm_guesscard_mark_item[data-v-6f3bf035]{\r\n  background-color: rgba(255,255,255,0.8);\r\n  padding: 0px 3px;\n}\r\n",""])}});
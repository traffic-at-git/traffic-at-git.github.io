(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2620eea7"],{1148:function(e,t,r){"use strict";var a=r("a691"),s=r("1d80");e.exports="".repeat||function(e){var t=String(s(this)),r="",n=a(e);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},"159b":function(e,t,r){var a=r("da84"),s=r("fdbc"),n=r("17c2"),i=r("9112");for(var o in s){var p=a[o],c=p&&p.prototype;if(c&&c.forEach!==n)try{i(c,"forEach",n)}catch(l){c.forEach=n}}},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,s=r("a640"),n=r("ae40"),i=s("forEach"),o=n("forEach");e.exports=i&&o?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},2342:function(e,t,r){},"408a":function(e,t,r){var a=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},4160:function(e,t,r){"use strict";var a=r("23e7"),s=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"65f0":function(e,t,r){var a=r("861d"),s=r("e8b5"),n=r("b622"),i=n("species");e.exports=function(e,t){var r;return s(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!s(r.prototype)?a(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"99e7":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("div",{staticClass:"content"},[r("div",{staticClass:"metric"},[e._v(" 视角 "),r("a-select",{staticStyle:{width:"180px","font-size":"14px","margin-left":"10px"},attrs:{"default-value":"MAE3"},on:{change:e.metricsChange}},[r("a-select-option",{attrs:{value:"MAE3"}},[e._v(" MAE @ 3 STEP ")]),r("a-select-option",{attrs:{value:"RMSE3"}},[e._v(" RMSE @ 3 STEP ")])],1)],1),r("div",{staticClass:"model-ranking"},[r("table",[r("thead",{staticStyle:{"font-size":"16px"}},[r("tr",[r("th",[e._v("排名")]),r("th",[e._v("模型")]),r("th",[e._v("论文")]),r("th",[e._v("年份")]),r("th",[e._v("1 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy1}})],1),r("th",[e._v("2 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy2}})],1),r("th",[e._v("3 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy3}})],1)])]),r("tbody",e._l(e.rankingData,(function(t){return r("tr",{key:t.model},[r("td",{attrs:{width:"6%"}},[e._v(e._s(t.rank))]),r("td",{attrs:{width:"8%"}},[r("a",{attrs:{href:t.mlink,target:"_blank"}},[e._v(e._s(t.model))])]),r("td",{attrs:{width:"39%"}},[r("a",{staticClass:"paper",attrs:{href:t.plink,target:"_blank"}},[e._v(e._s(t.paper))])]),r("td",{attrs:{width:"5%"}},[e._v(e._s(t.year))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step1))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step2))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step3))])])})),0)])]),r("br"),r("br")])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticStyle:{"padding-top":"20px",color:"white"}},[r("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("NYCBike20140409")])])])}],n=(r("4160"),r("b680"),r("159b"),[{rank:0,model:"MTGNN",mlink:"#",paper:"Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks",plink:"https://arxiv.org/abs/2005.11650",year:"2020",step1:2.143260479,step2:2.33476758,step3:2.464412689,mae_step1:2.143260479,mae_step2:2.33476758,mae_step3:2.464412689,rmse_step1:4.542957306,rmse_step2:5.211518288,rmse_step3:5.602479458},{rank:0,model:"AE",mlink:"#",paper:"Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction",plink:"https://ieeexplore.ieee.org/document/6910027",year:"2014",step1:5.878780842,step2:6.115393639,step3:6.232180119,mae_step1:5.878780842,mae_step2:6.115393639,mae_step3:6.232180119,rmse_step1:8.191333771,rmse_step2:8.632707596,rmse_step3:8.908828735},{rank:0,model:"AGCRN",mlink:"#",paper:"Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting",plink:"https://arxiv.org/abs/2007.02842",year:"2018",step1:2.247055292,step2:2.46105361,step3:2.576159954,mae_step1:2.247055292,mae_step2:2.46105361,mae_step3:2.576159954,rmse_step1:4.83513546,rmse_step2:5.48606205,rmse_step3:5.808804989},{rank:0,model:"GWNET",mlink:"#",paper:"Graph Wavenet for Deep Spatial-Temporal Graph Modeling",plink:"https://arxiv.org/abs/1906.00121",year:"2019",step1:2.31951189,step2:2.483286619,step3:2.609655619,mae_step1:2.31951189,mae_step2:2.483286619,mae_step3:2.609655619,rmse_step1:4.968844414,rmse_step2:5.463748932,rmse_step3:5.69130373},{rank:0,model:"DCRNN",mlink:"#",paper:"Diffusion convolutional recurrent neural network: Data-driven traffic forecasting",plink:"https://arxiv.org/abs/1707.01926",year:"2018",step1:2.218071461,step2:2.431840897,step3:2.571331024,mae_step1:2.218071461,mae_step2:2.431840897,mae_step3:2.571331024,rmse_step1:4.747207642,rmse_step2:5.564044476,rmse_step3:5.946798801},{rank:0,model:"STGCN",mlink:"#",paper:"Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting",plink:"https://www.ijcai.org/Proceedings/2018/0505",year:"2018",step1:2.318903208,step2:2.494077921,step3:2.593971252,mae_step1:2.318903208,mae_step2:2.494077921,mae_step3:2.593971252,rmse_step1:5.284862995,rmse_step2:5.865840435,rmse_step3:6.140215874},{rank:0,model:"STResNet",mlink:"#",paper:"Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction",plink:"https://arxiv.org/abs/1610.00081",year:"2017",step1:2.438241482,step2:2.562749386,step3:2.651359797,mae_step1:2.438241482,mae_step2:2.562749386,mae_step3:2.651359797,rmse_step1:5.141583443,rmse_step2:5.5783391,rmse_step3:5.84324789},{rank:0,model:"ACFM",mlink:"#",paper:"Attentive Crowd Flow Machines",plink:"https://dl.acm.org/doi/10.1145/3240508.3240681",year:"2018",step1:2.713757277,step2:2.86116457,step3:2.966455936,mae_step1:2.713757277,mae_step2:2.86116457,mae_step3:2.966455936,rmse_step1:5.243505478,rmse_step2:5.677444458,rmse_step3:5.954552174},{rank:0,model:"Seq2Seq",mlink:"#",paper:"Sequence to Sequence Learning with Neural Networks",plink:"https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html",year:"2014",step1:2.503537655,step2:2.579678774,step3:2.744087696,mae_step1:2.503537655,mae_step2:2.579678774,mae_step3:2.744087696,rmse_step1:5.462153912,rmse_step2:5.850692272,rmse_step3:6.408093452},{rank:0,model:"STG2Seq",mlink:"#",paper:"STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting",plink:"https://arxiv.org/abs/1905.10069",year:"2019",step1:2.541454792,step2:2.709347248,step3:2.966525555,mae_step1:2.541454792,mae_step2:2.709347248,mae_step3:2.966525555,rmse_step1:5.286739349,rmse_step2:5.987214565,rmse_step3:6.638397217},{rank:0,model:"ASTGCN",mlink:"#",paper:"Attention based spatial-temporal graph convolutional networks for traffic flow forecasting",plink:"https://ojs.aaai.org//index.php/AAAI/article/view/3881",year:"2019",step1:3.250409603,step2:3.110226393,step3:3.376706362,mae_step1:3.250409603,mae_step2:3.110226393,mae_step3:3.376706362,rmse_step1:7.681100368,rmse_step2:7.22376442,rmse_step3:7.944788456},{rank:0,model:"TGCN",mlink:"#",paper:"T-gcn: A temporal graph convolutional network for traffic prediction",plink:"https://ieeexplore.ieee.org/abstract/document/8809901/",year:"2020",step1:3.099831343,step2:3.339026928,step3:3.564884663,mae_step1:3.099831343,mae_step2:3.339026928,mae_step3:3.564884663,rmse_step1:6.727505684,rmse_step2:7.477781296,rmse_step3:7.925302505}]),i={data:function(){return{NYCBike20140409_origin:n,rankingData:[],metrics:"MAE3"}},mounted:function(){this.rankingData=n,this.metricsChange("MAE3")},methods:{sortBy1:function(){this.rankingData.sort((function(e,t){return e.step1-t.step1}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy2:function(){this.rankingData.sort((function(e,t){return e.step2-t.step2}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy3:function(){this.rankingData.sort((function(e,t){return e.step3-t.step3}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},metricsChange:function(e){"MAE3"==e?this.rankingData.forEach((function(e){e.step1=e.mae_step1.toFixed(5),e.step2=e.mae_step2.toFixed(5),e.step3=e.mae_step3.toFixed(5)})):"RMSE3"==e&&this.rankingData.forEach((function(e){e.step1=e.rmse_step1.toFixed(5),e.step2=e.rmse_step2.toFixed(5),e.step3=e.rmse_step3.toFixed(5)})),this.sortBy3()}}},o=i,p=(r("e526"),r("2877")),c=Object(p["a"])(o,a,s,!1,null,"ae115404",null);t["default"]=c.exports},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var a=r("83ab"),s=r("d039"),n=r("5135"),i=Object.defineProperty,o={},p=function(e){throw e};e.exports=function(e,t){if(n(o,e))return o[e];t||(t={});var r=[][e],c=!!n(t,"ACCESSORS")&&t.ACCESSORS,l=n(t,0)?t[0]:p,m=n(t,1)?t[1]:void 0;return o[e]=!!r&&!s((function(){if(c&&!a)return!0;var e={length:-1};c?i(e,1,{enumerable:!0,get:p}):e[1]=1,r.call(e,l,m)}))}},b680:function(e,t,r){"use strict";var a=r("23e7"),s=r("a691"),n=r("408a"),i=r("1148"),o=r("d039"),p=1..toFixed,c=Math.floor,l=function(e,t,r){return 0===t?r:t%2===1?l(e,t-1,r*e):l(e*e,t/2,r)},m=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},u=p&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){p.call({})}));a({target:"Number",proto:!0,forced:u},{toFixed:function(e){var t,r,a,o,p=n(this),u=s(e),f=[0,0,0,0,0,0],h="",d="0",_=function(e,t){var r=-1,a=t;while(++r<6)a+=e*f[r],f[r]=a%1e7,a=c(a/1e7)},v=function(e){var t=6,r=0;while(--t>=0)r+=f[t],f[t]=c(r/e),r=r%e*1e7},k=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var r=String(f[e]);t=""===t?r:t+i.call("0",7-r.length)+r}return t};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(p!=p)return"NaN";if(p<=-1e21||p>=1e21)return String(p);if(p<0&&(h="-",p=-p),p>1e-21)if(t=m(p*l(2,69,1))-69,r=t<0?p*l(2,-t,1):p/l(2,t,1),r*=4503599627370496,t=52-t,t>0){_(0,r),a=u;while(a>=7)_(1e7,0),a-=7;_(l(10,a,1),0),a=t-1;while(a>=23)v(1<<23),a-=23;v(1<<a),_(1,1),v(2),d=k()}else _(0,r),_(1<<-t,0),d=k()+i.call("0",u);return u>0?(o=d.length,d=h+(o<=u?"0."+i.call("0",u-o)+d:d.slice(0,o-u)+"."+d.slice(o-u))):d=h+d,d}})},b727:function(e,t,r){var a=r("0366"),s=r("44ad"),n=r("7b0b"),i=r("50c4"),o=r("65f0"),p=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,l=4==e,m=6==e,u=7==e,f=5==e||m;return function(h,d,_,v){for(var k,g,S=n(h),w=s(S),y=a(d,_,3),b=i(w.length),x=0,E=v||o,C=t?E(h,b):r||u?E(h,0):void 0;b>x;x++)if((f||x in w)&&(k=w[x],g=y(k,x,S),e))if(t)C[x]=g;else if(g)switch(e){case 3:return!0;case 5:return k;case 6:return x;case 2:p.call(C,k)}else switch(e){case 4:return!1;case 7:p.call(C,k)}return m?-1:c||l?l:C}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},e526:function(e,t,r){"use strict";r("2342")},e8b5:function(e,t,r){var a=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-2620eea7.987c0274.js.map
(function(e){function t(t){for(var n,l,r=t[0],i=t[1],u=t[2],p=0,m=[];p<r.length;p++)l=r[p],o[l]&&m.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={0:0},s=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var c=i;s.push([0,1]),a()})({0:function(e,t,a){e.exports=a("Vtdi")},Vtdi:function(e,t,a){"use strict";a.r(t);a("yt8O"),a("VRzm");var n=a("Kw5r"),o=a("9d8Q"),s=a.n(o),l=(a("o0eb"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),a("vue-particles",{attrs:{color:"#F4D35E",particleOpacity:.5,particlesNumber:80,shapeType:"circle",particleSize:2,linesColor:"#F4D35E",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:75,moveSpeed:1,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)}),r=[],i=a("KHd+"),u={},c=Object(i["a"])(u,l,r,!1,null,null,null),p=c.exports,m=a("jE9Z"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("transition",{attrs:{name:"bounce",mode:"out-in"}},[this.$store.state.todaysTask||this.$store.state.isCompleted?e._e():a("SetTask",{key:"SetTask"}),this.$store.state.todaysTask?a("TodaysTask",{key:"TodaysTask"}):e._e(),this.$store.state.isCompleted?a("TaskComplete",{key:"TaskComplete"}):e._e()],1)],1)},v=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v(e._s(e.title))])},k=[],T={name:"Title",props:{title:String}},h=T,x=Object(i["a"])(h,f,k,!1,null,null,null),y=x.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Title",{attrs:{title:"Today's task:"}}),a("h2",{staticClass:"task-info"},[e._v("\n    "+e._s(this.$store.state.todaysTask)+"\n  ")]),a("h2",{staticClass:"task-info"},[e._v("\n    "+e._s(this.$store.state.todaysTaskTime.label)+"\n  ")]),a("button",{attrs:{type:"button"},on:{click:e.completeTask}},[e._v("\n    Complete\n  ")])],1)},M=[],S={name:"TodaysTask",components:{Title:y},methods:{completeTask:function(){this.$store.commit("completeTodaysTask")}}},_=S,g=Object(i["a"])(_,b,M,!1,null,null,null),P=g.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Title",{attrs:{title:"Set a task for today"}}),a("SetTaskForm")],1)},w=[],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){return t.preventDefault(),e.setTask(t)}}},[a("div",[a("label",{attrs:{for:"task-name"}},[e._v("Your task: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.task,expression:"task"}],attrs:{type:"text",id:"task-name",placeholder:"Do thing",required:""},domProps:{value:e.task},on:{input:function(t){t.target.composing||(e.task=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"notification-time"}},[e._v("Notification time: ")]),a("bFormSelect",{attrs:{options:e.timeOptions,required:""},model:{value:e.timeSelected,callback:function(t){e.timeSelected=t},expression:"timeSelected"}})],1),a("input",{attrs:{type:"submit",value:"Save task"}})])},j=[],$=a("Y3FB"),A=a("Snq/"),E=a.n(A),F=a("/zX4"),D={name:"SetTaskForm",components:{vSelect:E.a,bFormSelect:F["a"]},methods:{setTask:function(e){this.$store.commit("setTodaysTask",{task:this.task,time:this.timeSelected})}},data:function(){return{task:"",timeOptions:$.timeOptions,timeSelected:"1800"}}},z=D,N=Object(i["a"])(z,C,j,!1,null,null,null),Y=N.exports,q={name:"SetTask",components:{SetTaskForm:Y,Title:y}},V=q,B=Object(i["a"])(V,O,w,!1,null,null,null),J=B.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Task complete!")]),a("button",{attrs:{type:"button"},on:{click:e.endCompletedState}},[e._v("\n    Set a new task\n  ")])])},L=[],X={name:"TaskComplete",methods:{endCompletedState:function(){this.$store.commit("endCompletedState")}}},H=X,I=Object(i["a"])(H,K,L,!1,null,null,null),Q=I.exports,R={name:"home",components:{Title:y,TodaysTask:P,SetTask:J,SetTaskForm:Y,TaskComplete:Q}},U=R,W=Object(i["a"])(U,d,v,!1,null,null,null),Z=W.exports;n["a"].use(m["a"]);var G=new m["a"]({mode:"history",routes:[{path:"/",name:"home",component:Z}]}),ee=a("L2JU"),te=a("XVfz"),ae=a.n(te);n["a"].use(ee["a"]);var ne=new ae.a({key:"vuex",storage:window.localStorage}),oe=new ee["a"].Store({plugins:[ne.plugin],state:{isCompleted:!1,todaysTask:"",todaysTaskTime:"",completedTasks:[]},mutations:{endCompletedState:function(e){e.isCompleted=!1},setTodaysTask:function(e,t){var a=t.task,n=t.time;e.todaysTask=a,e.todaysTaskTime=n},completeTodaysTask:function(e){e.completedTasks.push({task:e.todaysTask,timeOfCompletion:+new Date}),e.todaysTask="",e.todaysTaskTime="",e.isCompleted=!0}}}),se=a("lIOY");Object(se["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var le=a("mMlY");n["a"].config.productionTip=!1,n["a"].use(le["a"]),new n["a"]({normalize:s.a,router:G,store:oe,render:function(e){return e(p)}}).$mount("#app")},Y3FB:function(e){e.exports={timeOptions:[{text:"6:00 AM",value:"0600"},{text:"6:30 AM",value:"0630"},{text:"7:00 AM",value:"0700"},{text:"7:30 AM",value:"0730"},{text:"8:00 AM",value:"0800"},{text:"8:30 AM",value:"0830"},{text:"9:00 AM",value:"0900"},{text:"9:30 AM",value:"0930"},{text:"10:00 AM",value:"1000"},{text:"10:30 AM",value:"1030"},{text:"11:00 AM",value:"1100"},{text:"11:30 AM",value:"1130"},{text:"12:00 PM",value:"1200"},{text:"12:30 PM",value:"1230"},{text:"1:00 PM",value:"1300"},{text:"1:30 PM",value:"1330"},{text:"2:00 PM",value:"1400"},{text:"2:30 PM",value:"1430"},{text:"3:00 PM",value:"1500"},{text:"3:30 PM",value:"1530"},{text:"4:00 PM",value:"1600"},{text:"4:30 PM",value:"1630"},{text:"5:00 PM",value:"1700"},{text:"5:30 PM",value:"1730"},{text:"6:00 PM",value:"1800"},{text:"6:30 PM",value:"1830"},{text:"7:00 PM",value:"1900"},{text:"7:30 PM",value:"1930"},{text:"8:00 PM",value:"2000"},{text:"8:30 PM",value:"2030"},{text:"9:00 PM",value:"2100"},{text:"9:30 PM",value:"2130"},{text:"10:00 PM",value:"2200"},{text:"10:30 PM",value:"2230"},{text:"11:00 PM",value:"2300"},{text:"11:30 PM",value:"2330"},{text:"12:00 AM",value:"0000"}]}},o0eb:function(e,t,a){}});
//# sourceMappingURL=app.b2d57b4b.js.map
let t=document.createElement("style");t.innerHTML="#Chart1[data-v-3cdb1d3d],#Chart3[data-v-3cdb1d3d]{width:600px;height:500px}#Chart2[data-v-3cdb1d3d]{width:700px;height:400px}",document.head.appendChild(t);import{o as e,f as a,F as d,p as i,j as n,b as s}from"./index.d1e7243e.js";var r={data:()=>({timer:null,index:0}),methods:{},mounted(){this.timer=window.setInterval((()=>{this.index++,console.log("测试"+this.index)}),3e4),this.$echarts.init(document.getElementById("Chart1")).setOption({title:{text:"ECharts 入门实例"},tooltip:{},legend:{data:["销量","神力"]},xAxis:{data:["陈述","羊毛衫","学凡是","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,12,36,10,10,20]},{type:"line",name:"神力",data:[1,2,6,1,1,8]}]}),this.$echarts.init(document.getElementById("Chart2")).setOption({xAxis:{data:["A","B","C","D","E"]},yAxis:{},series:[{data:[10,22,28,23,19],type:"line",areaStyle:{}},{data:[25,14,23,35,10],type:"line",areaStyle:{color:"#ff0",opacity:.5}}]}),this.$echarts.init(document.getElementById("Chart3")).setOption({legend:{},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"Step Start",type:"line",step:"start",data:[120,132,101,134,90,230,210]},{name:"Step Middle",type:"line",step:"middle",data:[220,282,201,234,290,430,410]},{name:"Step End",type:"line",step:"end",data:[450,432,401,454,590,530,510]}]})},beforeDestroy(){clearInterval(this.timer)}};const l=t=>(i("data-v-3cdb1d3d"),t=t(),n(),t),h=l((()=>s("div",{id:"Chart1"},null,-1))),o=l((()=>s("div",{id:"Chart2"},null,-1))),p=l((()=>s("div",{id:"Chart3"},null,-1)));r.render=function(t,i,n,s,r,l){return e(),a(d,null,[h,o,p],64)},r.__scopeId="data-v-3cdb1d3d";export{r as default};
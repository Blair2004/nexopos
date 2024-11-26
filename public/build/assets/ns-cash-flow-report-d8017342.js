import{h as b,b as x,d as f}from"./bootstrap-75140020.js";import{c as g,e as v}from"./components-b14564cc.js";import{_ as D,n as w}from"./currency-feccde3d.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{r as C,o as d,c as n,a as e,f as p,t,F as i,b as h,i as F}from"./runtime-core.esm-bundler-414a078a.js";import"./chart-2ccf8ff7.js";import"./ns-prompt-popup-1d037733.js";import"./ns-avatar-image-1a727bdf.js";import"./index.es-25aa42ee.js";const Y={name:"ns-cash-flow",props:["storeLogo","storeName"],mounted(){this.loadReport()},components:{nsDatepicker:g,nsDateTimePicker:v},data(){return{startDateField:{value:b(ns.date.current).startOf("month").format("YYYY-MM-DD HH:mm:ss"),type:"datetimepicker"},endDateField:{value:b(ns.date.current).endOf("month").format("YYYY-MM-DD HH:mm:ss"),type:"datetimepicker"},report:new Object,ns:window.ns}},computed:{},methods:{__:D,nsCurrency:w,printSaleReport(){this.$htmlToPaper("report")},loadReport(){x.post("/api/reports/transactions",{startDate:this.startDateField.value,endDate:this.endDateField.value}).subscribe({next:a=>{this.report=a},error:a=>{f.error(a.message).subscribe()}})}}},R={id:"report-section",class:"px-4"},B={class:"flex -mx-2"},H={class:"px-2"},N={class:"px-2"},S={class:"px-2"},j={class:"ns-button"},L=e("i",{class:"las la-sync-alt text-xl"},null,-1),M={class:"pl-2"},P={class:"px-2"},T={class:"ns-button"},O=e("i",{class:"las la-print text-xl"},null,-1),V={class:"pl-2"},A={id:"report",class:"anim-duration-500 fade-in-entrance"},E={class:"flex w-full"},q={class:"my-4 flex justify-between w-full"},z={class:"text-primary"},G={class:"pb-1 border-b border-dashed"},I={class:"pb-1 border-b border-dashed"},J={class:"pb-1 border-b border-dashed"},K=["src","alt"],Q={class:"shadow rounded my-4"},U={class:"ns-box"},W={class:"ns-box-body"},X={class:"ns-table table w-full"},Z={class:""},$={class:"border p-2 text-left"},ee={width:"150",class:"border border-error-secondary bg-error-primary p-2 text-right"},se={width:"150",class:"text-right border-success-secondary bg-success-primary border p-2"},te={class:""},re={class:"p-2 bg-box-elevation-background border"},oe=e("i",{class:"las la-arrow-right"},null,-1),de={class:"p-2 border border-error-secondary bg-error-primary text-right"},ne={class:"p-2 border text-right border-success-secondary bg-success-primary"},ae={class:"p-2 border"},le={class:"ml-4"},ce={class:"p-2 border border-error-secondary bg-error-primary text-right"},ie={class:"p-2 border text-right border-success-secondary bg-success-primary"},_e={class:"p-2 border bg-box-elevation-background"},ue={class:"p-2 border text-right border-error-secondary bg-error-primary"},be={class:"p-2 border text-right border-success-secondary bg-success-primary"};function pe(a,l,_,he,r,s){const u=C("ns-field");return d(),n("div",R,[e("div",B,[e("div",H,[p(u,{field:r.startDateField},null,8,["field"])]),e("div",N,[p(u,{field:r.endDateField},null,8,["field"])]),e("div",S,[e("div",j,[e("button",{onClick:l[0]||(l[0]=o=>s.loadReport()),class:"rounded flex justify-between text-primary shadow py-1 items-center px-2"},[L,e("span",M,t(s.__("Load")),1)])])]),e("div",P,[e("div",T,[e("button",{onClick:l[1]||(l[1]=o=>s.printSaleReport()),class:"rounded flex justify-between text-primary shadow py-1 items-center px-2"},[O,e("span",V,t(s.__("Print")),1)])])])]),e("div",A,[e("div",E,[e("div",q,[e("div",z,[e("ul",null,[e("li",G,t(s.__("Range : {date1} — {date2}").replace("{date1}",r.startDateField.value).replace("{date2}",r.endDateField.value)),1),e("li",I,t(s.__("Document : Sale By Payment")),1),e("li",J,t(s.__("By : {user}").replace("{user}",r.ns.user.username)),1)])]),e("div",null,[e("img",{class:"w-24",src:_.storeLogo,alt:_.storeName},null,8,K)])])]),e("div",Q,[e("div",U,[e("div",W,[e("table",X,[e("thead",Z,[e("tr",null,[e("th",$,t(s.__("Account")),1),e("th",ee,t(s.__("Debit")),1),e("th",se,t(s.__("Credit")),1)])]),e("tbody",te,[(d(!0),n(i,null,h(r.report.accounts,(o,m)=>(d(),n(i,{key:m},[e("tr",null,[e("td",re,[oe,F(),e("strong",null,t(o.name),1)]),e("td",de,t(s.nsCurrency(o.debits)),1),e("td",ne,t(s.nsCurrency(o.credits)),1)]),(d(!0),n(i,null,h(o.transactions,(c,y)=>(d(),n("tr",{key:y},[e("td",ae,[e("span",le,t(c.name),1)]),e("td",ce,t(s.nsCurrency(c.debits)),1),e("td",ie,t(s.nsCurrency(c.credits)),1)]))),128))],64))),128))]),e("tbody",null,[e("tr",null,[e("td",_e,[e("strong",null,t(s.__("Total")),1)]),e("td",ue,[e("strong",null,t(s.nsCurrency(r.report.debits)),1)]),e("td",be,[e("strong",null,t(s.nsCurrency(r.report.credits)),1)])])])])])])])])])}const Ce=k(Y,[["render",pe]]);export{Ce as default};

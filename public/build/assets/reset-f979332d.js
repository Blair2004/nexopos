import{_ as i}from"./currency-f8bd78d1.js";import{b as r,a as l,F as h}from"./bootstrap-85a9f35f.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{r as c,o as d,c as a,a as e,t as f,F as x,b as g,f as u,w as y,i as F}from"./runtime-core.esm-bundler-ed35d834.js";const k={name:"ns-reset",props:["url"],methods:{__:i,submit(){if(this.fields.length===0)return r.error(i("This form is not completely loaded.")).susbcribe();if(!this.validation.validateFields(this.fields))return this.$forceUpdate(),r.error(i("Unable to proceed the form is not valid.")).subscribe();const s=this.validation.getValue(this.fields);confirm(i("Would you like to proceed ?"))&&l.post("/api/reset",s).subscribe({next:t=>{r.success(t.message).subscribe()},error:t=>{r.error(t.message).subscribe()}})},loadFields(){l.get("/api/fields/ns.reset").subscribe({next:s=>{this.fields=this.validation.createFields(s)},error:s=>{r.error(s.message).subscribe()}})}},mounted(){this.loadFields()},data(){return{validation:new h,fields:[]}}},w={id:"reset-app",class:"ns-tab"},V={id:"card-header",class:"flex flex-wrap"},B={class:"tab active cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg"},C={class:"card-body ns-tab-item rounded-br-lg rounded-bl-lg"},N={class:"shadow rounded"},S={class:"-mx-4 flex flex-wrap p-2"},T={class:"card-body p-2 flex"};function U(s,t,$,D,_,o){const p=c("ns-field"),m=c("ns-button");return d(),a("div",w,[e("div",V,[e("div",B,f(o.__("Reset")),1)]),e("div",C,[e("div",N,[e("div",S,[(d(!0),a(x,null,g(_.fields,(n,b)=>(d(),a("div",{class:"px-4",key:b},[u(p,{field:n},null,8,["field"])]))),128))]),e("div",T,[e("div",null,[u(m,{type:"info",onClick:t[0]||(t[0]=n=>o.submit())},{default:y(()=>[F(f(o.__("Proceed")),1)]),_:1})])])])])])}const R=v(k,[["render",U]]);export{R as default};

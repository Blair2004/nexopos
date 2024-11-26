import{F as S,d as u,b as _,v as U}from"./bootstrap-75140020.js";import{_ as l}from"./currency-feccde3d.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{r as y,o,c as n,f as w,e as h,F as f,a as s,A as b,i as x,t as m,n as j,B,b as p,g as k,w as R}from"./runtime-core.esm-bundler-414a078a.js";import"./chart-2ccf8ff7.js";const A={name:"ns-rewards-system",mounted(){this.loadForm()},data:()=>({formValidation:new S,form:{},nsSnackBar:u,nsHttpClient:_}),props:["submitMethod","submitUrl","returnUrl","src","rules"],methods:{__:l,submit(){if(this.form.rules.length===0)return u.error(l("No rules has been provided.")).subscribe();if(this.form.rules.filter(t=>t.filter(r=>!(r.value>=0)&&r.type!=="hidden").length>0).length>0)return u.error(l("No valid run were provided.")).subscribe();if(this.formValidation.validateForm(this.form).length>0)return u.error(l("Unable to proceed, the form is invalid."),l("OK")).subscribe();if(this.formValidation.disableForm(this.form),this.submitUrl===void 0)return u.error(l("Unable to proceed, no valid submit URL is defined."),l("OK")).subscribe();const e={...this.formValidation.extractForm(this.form),rules:this.form.rules.map(t=>{const r={};return t.forEach(v=>{r[v.name]=v.value}),r})};_[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,e).subscribe(t=>{if(t.status==="success")return document.location=this.returnUrl;this.formValidation.enableForm(this.form)},t=>{this.formValidation.triggerError(this.form,t.response.data),this.formValidation.enableForm(this.form),u.error(t.data.message||l("An unexpected error has occurred"),void 0,{duration:5e3}).subscribe()})},handleGlobalChange(e){this.globallyChecked=e,this.rows.forEach(t=>t.$checked=e)},loadForm(){_.get(`${this.src}`).subscribe(t=>{this.form=this.parseForm(t.form)})},parseForm(e){e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0];let t=0;for(let r in e.tabs)t===0&&(e.tabs[r].active=!0),e.tabs[r].active=e.tabs[r].active===void 0?!1:e.tabs[r].active,e.tabs[r].fields=this.formValidation.createFields(e.tabs[r].fields),t++;return e},handleSaveEvent(e,t){try{t.options.push({label:e.data.entry[t.props.optionAttributes.label],value:e.data.entry[t.props.optionAttributes.value]}),t.value=e.data.entry[t.props.optionAttributes.value]}catch{}},getRuleForm(){return JSON.parse(JSON.stringify(this.form.ruleForm))},addRule(){this.form.rules.push(this.getRuleForm())},removeRule(e){this.form.rules.splice(e,1)}}},E={class:"form flex-auto flex flex-col",id:"crud-form"},O={key:0,class:"flex items-center justify-center flex-auto"},$={class:"flex flex-col"},M={class:"flex justify-between items-center"},q={for:"title",class:"font-bold my-2 text-primary"},L={for:"title",class:"text-sm my-2 text-primary"},D=["href"],G=["disabled"],J=["disabled"],K={key:0,class:"text-xs text-primary py-1"},T={id:"points-wrapper",class:"flex -mx-4 mt-4"},z={class:"w-full md:w-1/3 lg:1/4 px-4"},H={class:"ns-box rounded shadow"},P={class:"header ns-box-header border-b p-2"},I={class:"body p-2"},Q={class:"ns-box rounded"},W={class:"ns-body p-2 flex justify-between items-center my-3"},X={class:"text-primary"},Y={class:"ns-button info"},Z=s("i",{class:"las la-plus"},null,-1),ee=[Z],te={class:"w-full md:w-2/3 lg:3/4 px-4 -m-3 flex flex-wrap items-start justify-start"},se={class:"rounded shadow ns-box flex-auto"},re={class:"body p-2"},oe={class:"header border-t ns-box-footer p-2 flex justify-end"},ie=s("i",{class:"las la-times"},null,-1);function ne(e,t,r,v,ae,a){const F=y("ns-spinner"),g=y("ns-field"),V=y("ns-button");return o(),n("div",E,[Object.values(e.form).length===0?(o(),n("div",O,[w(F)])):h("",!0),Object.values(e.form).length>0?(o(),n(f,{key:1},[s("div",$,[s("div",M,[s("label",q,[b(e.$slots,"title",{},()=>[x(m(a.__("No title Provided")),1)])]),s("div",L,[r.returnUrl?(o(),n("a",{key:0,href:r.returnUrl,class:"rounded-full border ns-inset-button error px-2 py-1"},"Return",8,D)):h("",!0)])]),s("div",{class:j([e.form.main.disabled?"disabled":e.form.main.errors.length>0?"error":"info","input-group flex border-2 rounded overflow-hidden"])},[B(s("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>e.form.main.value=i),onBlur:t[1]||(t[1]=i=>e.formValidation.checkField(e.form.main)),onChange:t[2]||(t[2]=i=>e.formValidation.checkField(e.form.main)),disabled:e.form.main.disabled,type:"text",class:"flex-auto text-primary outline-none h-10 px-2"},null,40,G),[[U,e.form.main.value]]),s("button",{disabled:e.form.main.disabled,onClick:t[3]||(t[3]=i=>a.submit()),class:"outline-none px-4 h-10 border-l border-tertiary"},[b(e.$slots,"save",{},()=>[x(m(a.__("Save")),1)])],8,J)],2),e.form.main.description&&e.form.main.errors.length===0?(o(),n("p",K,m(e.form.main.description),1)):h("",!0),(o(!0),n(f,null,p(e.form.main.errors,(i,d)=>(o(),n("p",{class:"text-xs py-1 text-error-tertiary",key:d},[s("span",null,[b(e.$slots,"error-required",{},()=>[x(m(i.identifier),1)])])]))),128))]),s("div",T,[s("div",z,[s("div",H,[s("div",P,m(a.__("General")),1),s("div",I,[(o(!0),n(f,null,p(e.form.tabs.general.fields,(i,d)=>(o(),k(g,{class:"mb-2",onSaved:c=>a.handleSaveEvent(c,i),key:d,field:i},null,8,["onSaved","field"]))),128))])]),s("div",Q,[s("div",W,[b(e.$slots,"add",{},()=>[s("span",X,m(a.__("Add Rule")),1)]),s("div",Y,[s("button",{onClick:t[4]||(t[4]=i=>a.addRule()),class:"rounded font-semibold flex items-center justify-center h-10 w-10"},ee)])])])]),s("div",te,[(o(!0),n(f,null,p(e.form.rules,(i,d)=>(o(),n("div",{class:"w-full md:w-1/2 p-3",key:d},[s("div",se,[s("div",re,[(o(!0),n(f,null,p(i,(c,C)=>(o(),k(g,{class:"mb-2",field:c,key:C},null,8,["field"]))),128))]),s("div",oe,[w(V,{onClick:c=>a.removeRule(d),type:"error"},{default:R(()=>[ie]),_:2},1032,["onClick"])])])]))),128))])])],64)):h("",!0)])}const ce=N(A,[["render",ne]]);export{ce as default};

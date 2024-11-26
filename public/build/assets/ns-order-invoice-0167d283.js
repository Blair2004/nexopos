import{_ as h,n as u}from"./currency-feccde3d.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{r as m,o as n,c as l,a as t,f as b,w as f,t as e,e as a,F as _,b as c}from"./runtime-core.esm-bundler-414a078a.js";const p={props:["order","billing","shipping"],methods:{__:h,nsCurrency:u,printTable(){this.$htmlToPaper("invoice-container")}}},v={class:"shadow ns-box"},w={class:"head p-2 ns-box-title flex justify-between border-b"},g={class:"-mx-2 flex flex-wrap"},C={class:"px-2"},k=t("i",{class:"las la-print"},null,-1),j={class:"body flex flex-col px-2",id:"invoice-container"},D={id:"invoice-header",class:"flex -mx-2 flex-wrap"},S={class:"w-full print:w-1/3 md:w-1/3 px-2"},T={class:"p-2"},P={class:"font-semibold text-xl text-primary border-b border-info-primary py-2"},N={class:"details"},B={class:"my-1"},E={class:"flex justify-between text-secondary text-sm mb-1"},I={class:"font-semibold"},V={class:"flex justify-between text-secondary text-sm mb-1"},A={class:"font-semibold"},F={class:"flex justify-between text-secondary text-sm mb-1"},O={class:"font-semibold"},q={class:"flex justify-between text-secondary text-sm mb-1"},L={class:"font-semibold"},Q={class:"flex justify-between text-secondary text-sm mb-1"},U={class:"font-semibold"},z={class:"flex justify-between text-secondary text-sm mb-1"},G={class:"font-semibold"},H={key:0,class:"flex justify-between text-secondary text-sm mb-1"},J={class:"font-semibold"},K={class:"w-full print:w-1/3 md:w-1/3 px-2"},M={class:"p-2"},R={class:"font-semibold text-xl text-primary border-b border-info-primary py-2"},W={class:"details"},X={class:"my-1"},Y={class:"font-semibold"},Z={class:"w-full print:w-1/3 md:w-1/3 px-2"},$={class:"p-2"},tt={class:"font-semibold text-xl text-primary border-b border-info-primary py-2"},et={class:"details"},st={class:"my-1"},rt={class:"font-semibold"},dt={class:"table w-full my-4"},nt={class:"table ns-table w-full"},lt={class:"text-secondary"},at={width:"400",class:"p-2 border"},_t={width:"200",class:"p-2 border"},ct={width:"200",class:"p-2 border"},ot={width:"200",class:"p-2 border"},it={width:"200",class:"p-2 border"},xt={width:"200",class:"p-2 border"},ht={class:"p-2 border"},ut={class:"text-primary"},yt={class:"text-sm text-secondary"},mt={class:"p-2 border text-center text-primary"},bt={class:"p-2 border text-center text-primary"},ft={class:"p-2 border text-center text-primary"},pt={class:"p-2 border text-center text-primary"},vt={class:"p-2 border text-right text-primary"},wt={class:"font-semibold"},gt={class:"p-2 border text-center text-primary",colspan:"2"},Ct={key:0,class:"flex justify-between"},kt=t("td",{class:"p-2 border text-center text-primary",colspan:"2"},null,-1),jt={class:"p-2 border text-primary text-left"},Dt={class:"p-2 border text-right text-primary"},St={key:0},Tt=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Pt={class:"p-2 border text-primary text-left"},Nt={class:"p-2 border text-right text-primary"},Bt={key:1},Et=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),It={class:"p-2 border text-left text-primary"},Vt={class:"p-2 border text-right text-primary"},At={key:2},Ft=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Ot={class:"p-2 border text-primary text-left"},qt={class:"p-2 border text-right text-primary"},Lt=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Qt={class:"p-2 border text-primary text-left"},Ut={class:"p-2 border text-right text-primary"},zt=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Gt={class:"p-2 border text-primary text-left"},Ht={class:"p-2 border text-right text-primary"},Jt=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Kt={class:"p-2 border text-primary text-left"},Mt={class:"p-2 border text-right text-primary"},Rt=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Wt={class:"p-2 border text-primary text-left"},Xt={class:"p-2 border text-right text-primary"},Yt={key:3,class:"error"},Zt=t("td",{class:"p-2 border text-center",colspan:"4"},null,-1),$t={class:"p-2 border text-left"},te={class:"p-2 border text-right"},ee={key:4},se=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),re={class:"p-2 border text-primary text-left"},de={class:"p-2 border text-right text-primary"};function ne(i,o,r,le,ae,s){const x=m("ns-button");return n(),l("div",v,[t("div",w,[t("div",g,[t("div",C,[b(x,{onClick:o[0]||(o[0]=d=>s.printTable()),type:"info"},{default:f(()=>[k,t("span",null,e(s.__("Print")),1)]),_:1})])])]),t("div",j,[t("div",D,[t("div",S,[t("div",T,[t("h3",P,e(s.__("Store Details")),1),t("div",N,[t("ul",B,[t("li",E,[t("span",I,e(s.__("Order Code")),1),t("span",null,e(r.order.code),1)]),t("li",V,[t("span",A,e(s.__("Cashier")),1),t("span",null,e(r.order.user.username),1)]),t("li",F,[t("span",O,e(s.__("Date")),1),t("span",null,e(r.order.created_at),1)]),t("li",q,[t("span",L,e(s.__("Customer")),1),t("span",null,e(r.order.customer.name),1)]),t("li",Q,[t("span",U,e(s.__("Type")),1),t("span",null,e(r.order.type),1)]),t("li",z,[t("span",G,e(s.__("Payment Status")),1),t("span",null,e(r.order.paymentStatus),1)]),r.order.type==="delivery"?(n(),l("li",H,[t("span",J,e(s.__("Delivery Status")),1),t("span",null,e(r.order.deliveryStatus),1)])):a("",!0)])])])]),t("div",K,[t("div",M,[t("h3",R,e(s.__("Billing Details")),1),t("div",W,[t("ul",X,[(n(!0),l(_,null,c(r.billing,d=>(n(),l("li",{key:d.id,class:"flex justify-between text-secondary text-sm mb-1"},[t("span",Y,e(d.label),1),t("span",null,e(r.order.billing_address[d.name]||"N/A"),1)]))),128))])])])]),t("div",Z,[t("div",$,[t("h3",tt,e(s.__("Shipping Details")),1),t("div",et,[t("ul",st,[(n(!0),l(_,null,c(r.shipping,d=>(n(),l("li",{key:d.id,class:"flex justify-between text-secondary text-sm mb-1"},[t("span",rt,e(d.label),1),t("span",null,e(r.order.shipping_address[d.name]||"N/A"),1)]))),128))])])])])]),t("div",dt,[t("table",nt,[t("thead",lt,[t("tr",null,[t("th",at,e(s.__("Product")),1),t("th",_t,e(s.__("Unit Price")),1),t("th",ct,e(s.__("Quantity")),1),t("th",ot,e(s.__("Discount")),1),t("th",it,e(s.__("Tax")),1),t("th",xt,e(s.__("Total Price")),1)])]),t("tbody",null,[(n(!0),l(_,null,c(r.order.products,d=>(n(),l("tr",{key:d.id},[t("td",ht,[t("h3",ut,e(d.name),1),t("span",yt,e(d.unit),1)]),t("td",mt,e(s.nsCurrency(d.unit_price)),1),t("td",bt,e(d.quantity),1),t("td",ft,e(s.nsCurrency(d.discount)),1),t("td",pt,e(s.nsCurrency(d.tax_value)),1),t("td",vt,e(s.nsCurrency(d.total_price)),1)]))),128))]),t("tfoot",wt,[t("tr",null,[t("td",gt,[["unpaid","partially_paid"].includes(r.order.payment_status)?(n(),l("div",Ct,[t("span",null,e(s.__("Expiration Date")),1),t("span",null,e(r.order.final_payment_date),1)])):a("",!0)]),kt,t("td",jt,e(s.__("Sub Total")),1),t("td",Dt,e(s.nsCurrency(r.order.subtotal)),1)]),r.order.discount>0?(n(),l("tr",St,[Tt,t("td",Pt,e(s.__("Discount")),1),t("td",Nt,e(s.nsCurrency(-r.order.discount)),1)])):a("",!0),r.order.total_coupons>0?(n(),l("tr",Bt,[Et,t("td",It,e(s.__("Coupons")),1),t("td",Vt,e(s.nsCurrency(-r.order.total_coupons)),1)])):a("",!0),r.order.shipping>0?(n(),l("tr",At,[Ft,t("td",Ot,e(s.__("Shipping")),1),t("td",qt,e(s.nsCurrency(r.order.shipping)),1)])):a("",!0),(n(!0),l(_,null,c(r.order.taxes,d=>(n(),l("tr",{key:d.id},[Lt,t("td",Qt,e(d.tax_name)+" — "+e(r.order.tax_type==="inclusive"?s.__("Inclusive"):s.__("Exclusive")),1),t("td",Ut,e(s.nsCurrency(r.order.tax_value)),1)]))),128)),(n(!0),l(_,null,c(r.order.taxes,d=>(n(),l("tr",{key:d.id},[zt,t("td",Gt,e(d.tax_name)+" — "+e(r.order.tax_type==="inclusive"?s.__("Inclusive"):s.__("Exclusive")),1),t("td",Ht,e(d.tax_value|i.currency),1)]))),128)),t("tr",null,[Jt,t("td",Kt,e(s.__("Total")),1),t("td",Mt,e(s.nsCurrency(r.order.total)),1)]),t("tr",null,[Rt,t("td",Wt,e(s.__("Paid")),1),t("td",Xt,e(s.nsCurrency(r.order.tendered)),1)]),["partially_paid","unpaid"].includes(r.order.payment_status)?(n(),l("tr",Yt,[Zt,t("td",$t,e(s.__("Due")),1),t("td",te,e(s.nsCurrency(r.order.change)),1)])):(n(),l("tr",ee,[se,t("td",re,e(s.__("Change")),1),t("td",de,e(s.nsCurrency(r.order.change)),1)]))])])])])])}const ie=y(p,[["render",ne]]);export{ie as default};

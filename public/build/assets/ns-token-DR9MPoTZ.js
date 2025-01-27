import{a as Yt,p as Ot,v as jt,F as $t,d as Q,b as st}from"./bootstrap-t8LUlhZ3.js";import{_ as D}from"./currency-B1QCtbGi.js";import{_ as It}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{n as qt}from"./ns-prompt-popup-CbKqTvnU.js";import{r as F,o as M,c as L,a as E,t as A,B as Gt,f as J,w as Y,i as O,F as bt,b as Bt,g as Qt,e as at}from"./runtime-core.esm-bundler-VrNrzzXC.js";import"./chart-XFVd3zf7.js";var q={},Wt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},kt={},N={};let wt;const Zt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};N.getSymbolTotalCodewords=function(t){return Zt[t]};N.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');wt=t};N.isKanjiModeEnabled=function(){return typeof wt<"u"};N.toSJIS=function(t){return wt(t)};var et={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,n){if(e.isValid(r))return r;try{return t(r)}catch{return n}}})(et);function Pt(){this.buffer=[],this.length=0}Pt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Xt=Pt;function G(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}G.prototype.set=function(e,t,i,r){const n=e*this.size+t;this.data[n]=i,r&&(this.reservedBit[n]=!0)};G.prototype.get=function(e,t){return this.data[e*this.size+t]};G.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};G.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var te=G,St={};(function(e){const t=N.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const n=Math.floor(r/7)+2,o=t(r),s=o===145?26:Math.ceil((o-13)/(2*n-2))*2,a=[o-7];for(let c=1;c<n-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const n=[],o=e.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||n.push([o[a],o[c]]);return n}})(St);var Mt={};const ee=N.getSymbolSize,Tt=7;Mt.getPositions=function(t){const i=ee(t);return[[0,0],[i-Tt,0],[0,i-Tt]]};var Rt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const o=n.size;let s=0,a=0,c=0,l=null,u=null;for(let C=0;C<o;C++){a=c=0,l=u=null;for(let d=0;d<o;d++){let f=n.get(C,d);f===l?a++:(a>=5&&(s+=t.N1+(a-5)),l=f,a=1),f=n.get(d,C),f===u?c++:(c>=5&&(s+=t.N1+(c-5)),u=f,c=1)}a>=5&&(s+=t.N1+(a-5)),c>=5&&(s+=t.N1+(c-5))}return s},e.getPenaltyN2=function(n){const o=n.size;let s=0;for(let a=0;a<o-1;a++)for(let c=0;c<o-1;c++){const l=n.get(a,c)+n.get(a,c+1)+n.get(a+1,c)+n.get(a+1,c+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(n){const o=n.size;let s=0,a=0,c=0;for(let l=0;l<o;l++){a=c=0;for(let u=0;u<o;u++)a=a<<1&2047|n.get(l,u),u>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|n.get(u,l),u>=10&&(c===1488||c===93)&&s++}return s*t.N3},e.getPenaltyN4=function(n){let o=0;const s=n.data.length;for(let c=0;c<s;c++)o+=n.data[c];return Math.abs(Math.ceil(o*100/s/5)-10)*t.N4};function i(r,n,o){switch(r){case e.Patterns.PATTERN000:return(n+o)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(n+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return n*o%2+n*o%3===0;case e.Patterns.PATTERN110:return(n*o%2+n*o%3)%2===0;case e.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(n,o){const s=o.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)o.isReserved(c,a)||o.xor(c,a,i(n,c,a))},e.getBestMask=function(n,o){const s=Object.keys(e.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){o(l),e.applyMask(l,n);const u=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(l,n),u<c&&(c=u,a=l)}return a}})(Rt);var nt={};const v=et,W=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Z=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];nt.getBlocksCount=function(t,i){switch(i){case v.L:return W[(t-1)*4+0];case v.M:return W[(t-1)*4+1];case v.Q:return W[(t-1)*4+2];case v.H:return W[(t-1)*4+3];default:return}};nt.getTotalCodewordsCount=function(t,i){switch(i){case v.L:return Z[(t-1)*4+0];case v.M:return Z[(t-1)*4+1];case v.Q:return Z[(t-1)*4+2];case v.H:return Z[(t-1)*4+3];default:return}};var Lt={},ot={};const j=new Uint8Array(512),X=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)j[i]=t,X[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)j[i]=j[i-255]})();ot.log=function(t){if(t<1)throw new Error("log("+t+")");return X[t]};ot.exp=function(t){return j[t]};ot.mul=function(t,i){return t===0||i===0?0:j[X[t]+X[i]]};(function(e){const t=ot;e.mul=function(r,n){const o=new Uint8Array(r.length+n.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<n.length;a++)o[s+a]^=t.mul(r[s],n[a]);return o},e.mod=function(r,n){let o=new Uint8Array(r);for(;o.length-n.length>=0;){const s=o[0];for(let c=0;c<n.length;c++)o[c]^=t.mul(n[c],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},e.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let o=0;o<r;o++)n=e.mul(n,new Uint8Array([1,t.exp(o)]));return n}})(Lt);const vt=Lt;function yt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}yt.prototype.initialize=function(t){this.degree=t,this.genPoly=vt.generateECPolynomial(this.degree)};yt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=vt.mod(i,this.genPoly),n=this.degree-r.length;if(n>0){const o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var ne=yt,Ut={},U={},Ct={};Ct.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var P={};const Dt="[0-9]+",oe="[A-Z $%*+\\-./:]+";let $="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";$=$.replace(/u/g,"\\u");const re="(?:(?![A-Z0-9 $%*+\\-./:]|"+$+`)(?:.|[\r
]))+`;P.KANJI=new RegExp($,"g");P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");P.BYTE=new RegExp(re,"g");P.NUMERIC=new RegExp(Dt,"g");P.ALPHANUMERIC=new RegExp(oe,"g");const ie=new RegExp("^"+$+"$"),se=new RegExp("^"+Dt+"$"),ae=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(t){return ie.test(t)};P.testNumeric=function(t){return se.test(t)};P.testAlphanumeric=function(t){return ae.test(t)};(function(e){const t=Ct,i=P;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return i.testNumeric(o)?e.NUMERIC:i.testAlphanumeric(o)?e.ALPHANUMERIC:i.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function r(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(o,s){if(e.isValid(o))return o;try{return r(o)}catch{return s}}})(U);(function(e){const t=N,i=nt,r=et,n=U,o=Ct,s=7973,a=t.getBCHDigit(s);function c(d,f,p){for(let w=1;w<=40;w++)if(f<=e.getCapacity(w,p,d))return w}function l(d,f){return n.getCharCountIndicator(d,f)+4}function u(d,f){let p=0;return d.forEach(function(w){const T=l(w.mode,f);p+=T+w.getBitsLength()}),p}function C(d,f){for(let p=1;p<=40;p++)if(u(d,p)<=e.getCapacity(p,f,n.MIXED))return p}e.from=function(f,p){return o.isValid(f)?parseInt(f,10):p},e.getCapacity=function(f,p,w){if(!o.isValid(f))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=n.BYTE);const T=t.getSymbolTotalCodewords(f),m=i.getTotalCodewordsCount(f,p),y=(T-m)*8;if(w===n.MIXED)return y;const g=y-l(w,f);switch(w){case n.NUMERIC:return Math.floor(g/10*3);case n.ALPHANUMERIC:return Math.floor(g/11*2);case n.KANJI:return Math.floor(g/13);case n.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,p){let w;const T=r.from(p,r.M);if(Array.isArray(f)){if(f.length>1)return C(f,T);if(f.length===0)return 1;w=f[0]}else w=f;return c(w.mode,w.getLength(),T)},e.getEncodedBits=function(f){if(!o.isValid(f)||f<7)throw new Error("Invalid QR Code version");let p=f<<12;for(;t.getBCHDigit(p)-a>=0;)p^=s<<t.getBCHDigit(p)-a;return f<<12|p}})(Ut);var Ft={};const ht=N,xt=1335,ce=21522,At=ht.getBCHDigit(xt);Ft.getEncodedBits=function(t,i){const r=t.bit<<3|i;let n=r<<10;for(;ht.getBCHDigit(n)-At>=0;)n^=xt<<ht.getBCHDigit(n)-At;return(r<<10|n)^ce};var Vt={};const le=U;function x(e){this.mode=le.NUMERIC,this.data=e.toString()}x.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};x.prototype.getLength=function(){return this.data.length};x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)};x.prototype.write=function(t){let i,r,n;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),n=parseInt(r,10),t.put(n,10);const o=this.data.length-i;o>0&&(r=this.data.substr(i),n=parseInt(r,10),t.put(n,o*3+1))};var ue=x;const fe=U,ct=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function V(e){this.mode=fe.ALPHANUMERIC,this.data=e}V.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};V.prototype.getLength=function(){return this.data.length};V.prototype.getBitsLength=function(){return V.getBitsLength(this.data.length)};V.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=ct.indexOf(this.data[i])*45;r+=ct.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(ct.indexOf(this.data[i]),6)};var de=V;const he=U;function z(e){this.mode=he.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}z.getBitsLength=function(t){return t*8};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var ge=z;const me=U,pe=N;function H(e){this.mode=me.KANJI,this.data=e}H.getBitsLength=function(t){return t*13};H.prototype.getLength=function(){return this.data.length};H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)};H.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=pe.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var we=H,zt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,r,n){var o={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var c,l,u,C,d,f,p,w,T;!a.empty();){c=a.pop(),l=c.value,C=c.cost,d=i[l]||{};for(u in d)d.hasOwnProperty(u)&&(f=d[u],p=C+f,w=s[u],T=typeof s[u]>"u",(T||w>p)&&(s[u]=p,a.push(u,p),o[u]=l))}if(typeof n<"u"&&typeof s[n]>"u"){var m=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(m)}return o},extract_shortest_path_from_predecessor_list:function(i,r){for(var n=[],o=r;o;)n.push(o),i[o],o=i[o];return n.reverse(),n},find_path:function(i,r,n){var o=t.single_source_shortest_paths(i,r,n);return t.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,n={},o;i=i||{};for(o in r)r.hasOwnProperty(o)&&(n[o]=r[o]);return n.queue=[],n.sorter=i.sorter||r.default_sorter,n},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var n={value:i,cost:r};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(zt);var ye=zt.exports;(function(e){const t=U,i=ue,r=de,n=ge,o=we,s=P,a=N,c=ye;function l(m){return unescape(encodeURIComponent(m)).length}function u(m,y,g){const h=[];let _;for(;(_=m.exec(g))!==null;)h.push({data:_[0],index:_.index,mode:y,length:_[0].length});return h}function C(m){const y=u(s.NUMERIC,t.NUMERIC,m),g=u(s.ALPHANUMERIC,t.ALPHANUMERIC,m);let h,_;return a.isKanjiModeEnabled()?(h=u(s.BYTE,t.BYTE,m),_=u(s.KANJI,t.KANJI,m)):(h=u(s.BYTE_KANJI,t.BYTE,m),_=[]),y.concat(g,h,_).sort(function(B,I){return B.index-I.index}).map(function(B){return{data:B.data,mode:B.mode,length:B.length}})}function d(m,y){switch(y){case t.NUMERIC:return i.getBitsLength(m);case t.ALPHANUMERIC:return r.getBitsLength(m);case t.KANJI:return o.getBitsLength(m);case t.BYTE:return n.getBitsLength(m)}}function f(m){return m.reduce(function(y,g){const h=y.length-1>=0?y[y.length-1]:null;return h&&h.mode===g.mode?(y[y.length-1].data+=g.data,y):(y.push(g),y)},[])}function p(m){const y=[];for(let g=0;g<m.length;g++){const h=m[g];switch(h.mode){case t.NUMERIC:y.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:y.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:y.push([h,{data:h.data,mode:t.BYTE,length:l(h.data)}]);break;case t.BYTE:y.push([{data:h.data,mode:t.BYTE,length:l(h.data)}])}}return y}function w(m,y){const g={},h={start:{}};let _=["start"];for(let b=0;b<m.length;b++){const B=m[b],I=[];for(let R=0;R<B.length;R++){const k=B[R],K=""+b+R;I.push(K),g[K]={node:k,lastCount:0},h[K]={};for(let it=0;it<_.length;it++){const S=_[it];g[S]&&g[S].node.mode===k.mode?(h[S][K]=d(g[S].lastCount+k.length,k.mode)-d(g[S].lastCount,k.mode),g[S].lastCount+=k.length):(g[S]&&(g[S].lastCount=k.length),h[S][K]=d(k.length,k.mode)+4+t.getCharCountIndicator(k.mode,y))}}_=I}for(let b=0;b<_.length;b++)h[_[b]].end=0;return{map:h,table:g}}function T(m,y){let g;const h=t.getBestModeForData(m);if(g=t.from(y,h),g!==t.BYTE&&g.bit<h.bit)throw new Error('"'+m+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(h));switch(g===t.KANJI&&!a.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(m);case t.ALPHANUMERIC:return new r(m);case t.KANJI:return new o(m);case t.BYTE:return new n(m)}}e.fromArray=function(y){return y.reduce(function(g,h){return typeof h=="string"?g.push(T(h,null)):h.data&&g.push(T(h.data,h.mode)),g},[])},e.fromString=function(y,g){const h=C(y,a.isKanjiModeEnabled()),_=p(h),b=w(_,g),B=c.find_path(b.map,"start","end"),I=[];for(let R=1;R<B.length-1;R++)I.push(b.table[B[R]].node);return e.fromArray(f(I))},e.rawSplit=function(y){return e.fromArray(C(y,a.isKanjiModeEnabled()))}})(Vt);const rt=N,lt=et,Ce=Xt,_e=te,Ee=St,be=Mt,gt=Rt,mt=nt,Be=ne,tt=Ut,Te=Ft,Ae=U,ut=Vt;function Ne(e,t){const i=e.size,r=be.getPositions(t);for(let n=0;n<r.length;n++){const o=r[n][0],s=r[n][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||i<=o+a))for(let c=-1;c<=7;c++)s+c<=-1||i<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?e.set(o+a,s+c,!0,!0):e.set(o+a,s+c,!1,!0))}}function Ie(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function ke(e,t){const i=Ee.getPositions(t);for(let r=0;r<i.length;r++){const n=i[r][0],o=i[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(n+s,o+a,!0,!0):e.set(n+s,o+a,!1,!0)}}function Pe(e,t){const i=e.size,r=tt.getEncodedBits(t);let n,o,s;for(let a=0;a<18;a++)n=Math.floor(a/3),o=a%3+i-8-3,s=(r>>a&1)===1,e.set(n,o,s,!0),e.set(o,n,s,!0)}function ft(e,t,i){const r=e.size,n=Te.getEncodedBits(t,i);let o,s;for(o=0;o<15;o++)s=(n>>o&1)===1,o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(r-15+o,8,s,!0),o<8?e.set(8,r-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(r-8,8,1,!0)}function Se(e,t){const i=e.size;let r=-1,n=i-1,o=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!e.isReserved(n,a-c)){let l=!1;s<t.length&&(l=(t[s]>>>o&1)===1),e.set(n,a-c,l),o--,o===-1&&(s++,o=7)}if(n+=r,n<0||i<=n){n-=r,r=-r;break}}}function Me(e,t,i){const r=new Ce;i.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),Ae.getCharCountIndicator(c.mode,e)),c.write(r)});const n=rt.getSymbolTotalCodewords(e),o=mt.getTotalCodewordsCount(e,t),s=(n-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return Re(r,e,t)}function Re(e,t,i){const r=rt.getSymbolTotalCodewords(t),n=mt.getTotalCodewordsCount(t,i),o=r-n,s=mt.getBlocksCount(t,i),a=r%s,c=s-a,l=Math.floor(r/s),u=Math.floor(o/s),C=u+1,d=l-u,f=new Be(d);let p=0;const w=new Array(s),T=new Array(s);let m=0;const y=new Uint8Array(e.buffer);for(let B=0;B<s;B++){const I=B<c?u:C;w[B]=y.slice(p,p+I),T[B]=f.encode(w[B]),p+=I,m=Math.max(m,I)}const g=new Uint8Array(r);let h=0,_,b;for(_=0;_<m;_++)for(b=0;b<s;b++)_<w[b].length&&(g[h++]=w[b][_]);for(_=0;_<d;_++)for(b=0;b<s;b++)g[h++]=T[b][_];return g}function Le(e,t,i,r){let n;if(Array.isArray(e))n=ut.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const u=ut.rawSplit(e);l=tt.getBestVersionForData(u,i)}n=ut.fromString(e,l||40)}else throw new Error("Invalid data");const o=tt.getBestVersionForData(n,i);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=Me(t,i,n),a=rt.getSymbolSize(t),c=new _e(a);return Ne(c,t),Ie(c),ke(c,t),ft(c,i,0),t>=7&&Pe(c,t),Se(c,s),isNaN(r)&&(r=gt.getBestMask(c,ft.bind(null,c,i))),gt.applyMask(r,c),ft(c,i,r),{modules:c,version:t,errorCorrectionLevel:i,maskPattern:r,segments:n}}kt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=lt.M,n,o;return typeof i<"u"&&(r=lt.from(i.errorCorrectionLevel,lt.M),n=tt.from(i.version),o=gt.from(i.maskPattern),i.toSJISFunc&&rt.setToSJISFunction(i.toSJISFunc)),Le(t,n,r,o)};var Ht={},_t={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const n=parseInt(r.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const n=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:n,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,n){return n.width&&n.width>=r+n.margin*2?n.width/(r+n.margin*2):n.scale},e.getImageWidth=function(r,n){const o=e.getScale(r,n);return Math.floor((r+n.margin*2)*o)},e.qrToImageData=function(r,n,o){const s=n.modules.size,a=n.modules.data,c=e.getScale(s,o),l=Math.floor((s+o.margin*2)*c),u=o.margin*c,C=[o.color.light,o.color.dark];for(let d=0;d<l;d++)for(let f=0;f<l;f++){let p=(d*l+f)*4,w=o.color.light;if(d>=u&&f>=u&&d<l-u&&f<l-u){const T=Math.floor((d-u)/c),m=Math.floor((f-u)/c);w=C[a[T*s+m]?1:0]}r[p++]=w.r,r[p++]=w.g,r[p++]=w.b,r[p]=w.a}}})(_t);(function(e){const t=_t;function i(n,o,s){n.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=r()),c=t.getOptions(c);const u=t.getImageWidth(o.modules.size,c),C=l.getContext("2d"),d=C.createImageData(u,u);return t.qrToImageData(d.data,o,c),i(C,l,u),C.putImageData(d,0,0),l},e.renderToDataURL=function(o,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=e.render(o,s,c),u=c.type||"image/png",C=c.rendererOpts||{};return l.toDataURL(u,C.quality)}})(Ht);var Kt={};const ve=_t;function Nt(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function dt(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function Ue(e,t,i){let r="",n=0,o=!1,s=0;for(let a=0;a<e.length;a++){const c=Math.floor(a%t),l=Math.floor(a/t);!c&&!o&&(o=!0),e[a]?(s++,a>0&&c>0&&e[a-1]||(r+=o?dt("M",c+i,.5+l+i):dt("m",n,0),n=0,o=!1),c+1<t&&e[a+1]||(r+=dt("h",s),s=0)):n++}return r}Kt.render=function(t,i,r){const n=ve.getOptions(i),o=t.modules.size,s=t.modules.data,a=o+n.margin*2,c=n.color.light.a?"<path "+Nt(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Nt(n.color.dark,"stroke")+' d="'+Ue(s,o,n.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,d),d};const De=Wt,pt=kt,Jt=Ht,Fe=Kt;function Et(e,t,i,r,n){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!De())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(n=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof n>"u"?(n=r,r=void 0):(n=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(c,l){try{const u=pt.create(i,r);c(e(u,t,r))}catch(u){l(u)}})}try{const c=pt.create(i,r);n(null,e(c,t,r))}catch(c){n(c)}}q.create=pt.create;q.toCanvas=Et.bind(null,Jt.render);q.toDataURL=Et.bind(null,Jt.renderToDataURL);q.toString=Et.bind(null,function(e,t,i){return Fe.render(e,i)});const xe={name:"ns-token-output",props:["popup"],data(){return{accessToken:"",qrCodeSRC:""}},mounted(){this.accessToken=this.popup.params.result.data.token.plainTextToken,this.popupCloser(),setTimeout(()=>{this.$refs.token.select(),this.$refs.token.setSelectionRange(0,99999),this.setQRCode()},100)},methods:{__:D,popupResolver:Yt,popupCloser:Ot,setQRCode(){q.toDataURL(this.accessToken).then(e=>{this.qrCodeSRC=e}).catch(e=>{console.log(e)})},close(){navigator.clipboard.writeText(this.$refs.token.value),this.popupResolver(!0)}}},Ve={id:"alert-popup",class:"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg"},ze={class:"flex items-center justify-center flex-col flex-auto p-4"},He={class:"text-3xl font-body mb-4"},Ke=["src"],Je={class:"text-xs text-secondary py-2"},Ye={class:"py-4 text-center"},Oe={class:"action-buttons flex border-t justify-end items-center p-2"};function je(e,t,i,r,n,o){const s=F("ns-button");return M(),L("div",Ve,[E("div",ze,[E("h2",He,A(o.__("API Token")),1),E("img",{id:"token-qrcode",class:"border-2 w-64 h-64",src:n.qrCodeSRC},null,8,Ke),E("p",Je,A(o.__("This QR code is provided to ease authentication on external applications.")),1),t[2]||(t[2]=E("br",null,null,-1)),E("p",Ye,A(o.__(`The API token has been generated. Make sure to copy this code on a safe place as it will only be displayed once.
                If you loose this token, you'll need to revoke it and generate a new one.`)),1),Gt(E("input",{ref:"token","onUpdate:modelValue":t[0]||(t[0]=a=>n.accessToken=a),readonly:"",type:"text",class:"my-2 p-2 w-full border-2 rounded border-input-edge bg-input-background"},null,512),[[jt,n.accessToken]])]),E("div",Oe,[J(s,{onClick:t[1]||(t[1]=a=>o.close()),type:"info"},{default:Y(()=>[O(A(o.__("Copy And Close")),1)]),_:1})])])}const $e=It(xe,[["render",je]]),qe={name:"ns-token",data(){return{validation:new $t,tokens:[],isLoading:!1,fields:[{type:"text",label:D("Token Name"),name:"name",description:D("This will be used to identifier the token."),validation:"required"}]}},methods:{__:D,createToken(){if(!this.validation.validateFields(this.fields))return Q.error(D("Unable to proceed, the form is not valid.")).subscribe();st.post("/api/users/create-token",this.validation.extractFields(this.fields)).subscribe(async e=>{try{await new Promise((t,i)=>{Popup.show($e,{resolve:t,reject:i,result:e})}),this.loadTokens()}catch(t){console.log(t)}})},revokeToken(e){Popup.show(qt,{title:D("Confirm Your Action"),message:D("You're about to delete a token that might be in use by an external app. Deleting will prevent that app from accessing the API. Would you like to proceed ?"),onAction:t=>{t&&st.delete(`/api/users/tokens/${e.id}`).subscribe({next:i=>{this.loadTokens(),Q.success(i.message).subscribe()},error:i=>{Q.error(i.message||"An unexpected error occured.").subscribe()}})}})},loadTokens(){this.isLoading=!0,st.get("/api/users/tokens").subscribe({next:e=>{this.isLoading=!1,this.tokens=e},error:e=>{Q.error("Unable to load the token. An unexpected error occured.").subscribe()}})}},mounted(){this.fields=this.validation.createFields(this.fields),this.loadTokens()}},Ge={class:"-mx-2"},Qe={class:"px-2 w-full md:w-1/2"},We={class:"mb-4"},Ze={class:"my-2"},Xe={class:"flex justify-end"},tn={class:"py-2 border-b-4 text-center border-box-edge text-xl"},en={key:0},nn={class:"flex flex-col"},on={class:"text-lg"},rn={class:"text-xs text-tertiary"},sn={class:"text-xs text-tertiary"},an={class:"text-xs text-tertiary"},cn={key:1,class:"my-4"},ln={key:2,class:"mt-2"},un={class:"text-center text-tertiary text-sm my-4"};function fn(e,t,i,r,n,o){const s=F("ns-notice"),a=F("ns-field"),c=F("ns-button"),l=F("ns-close-button"),u=F("ns-spinner");return M(),L("div",Ge,[E("div",Qe,[E("div",We,[J(s,null,{title:Y(()=>[O(A(o.__("About Token")),1)]),description:Y(()=>[O(A(o.__(`Token are used to provide a secure access to NexoPOS resources without having to share your personal username and password.
                       Once generated, they won't expires until you explicitely revoke it.`)),1)]),_:1})]),E("div",Ze,[(M(!0),L(bt,null,Bt(n.fields,(C,d)=>(M(),Qt(a,{key:d,field:C},null,8,["field"]))),128)),E("div",Xe,[J(c,{onClick:t[0]||(t[0]=C=>o.createToken()),type:"info"},{default:Y(()=>[O(A(o.__("Save Token")),1)]),_:1})])]),E("div",null,[E("h3",tn,A(o.__("Generated Tokens")),1),n.tokens.length>0&&!n.isLoading?(M(),L("ul",en,[(M(!0),L(bt,null,Bt(n.tokens,(C,d)=>(M(),L("li",{key:d,class:"p-2 border-b flex justify-between items-center border-box-edge"},[E("div",nn,[E("h4",on,A(C.name),1),E("div",null,[E("ul",null,[E("li",null,[E("span",rn,A(o.__("Created"))+": "+A(C.created_at),1)]),E("li",null,[E("span",sn,A(o.__("Last Use"))+": "+A(C.last_used_at||o.__("Never")),1)]),E("li",null,[E("span",an,A(o.__("Expires"))+": "+A(C.expires_at||o.__("Never")),1)])])])]),E("div",null,[J(l,{onClick:f=>o.revokeToken(C),class:"px-2"},{default:Y(()=>[O(A(o.__("Revoke")),1)]),_:2},1032,["onClick"])])]))),128))])):at("",!0),n.isLoading?(M(),L("div",cn,[J(u)])):at("",!0),!n.isLoading&&n.tokens.length===0?(M(),L("div",ln,[E("div",un,A(o.__("You haven't yet generated any token for your account. Create one to get started.")),1)])):at("",!0)])])])}const yn=It(qe,[["render",fn]]);export{yn as default};

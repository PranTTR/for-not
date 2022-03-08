/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

var Fn=Object.create;var D=Object.defineProperty,zn=Object.defineProperties,Kn=Object.getOwnPropertyDescriptor,Wn=Object.getOwnPropertyDescriptors,Yn=Object.getOwnPropertyNames,Se=Object.getOwnPropertySymbols,Qn=Object.getPrototypeOf,Pe=Object.prototype.hasOwnProperty,Vn=Object.prototype.propertyIsEnumerable;var Oe=(r,e,t)=>e in r?D(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,E=(r,e)=>{for(var t in e||(e={}))Pe.call(e,t)&&Oe(r,t,e[t]);if(Se)for(var t of Se(e))Vn.call(e,t)&&Oe(r,t,e[t]);return r},Be=(r,e)=>zn(r,Wn(e)),Te=r=>D(r,"__esModule",{value:!0});var c=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Xn=(r,e)=>{Te(r);for(var t in e)D(r,t,{get:e[t],enumerable:!0})},Zn=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Yn(e))!Pe.call(r,n)&&n!=="default"&&D(r,n,{get:()=>e[n],enumerable:!(t=Kn(e,n))||t.enumerable});return r},_=r=>Zn(Te(D(r!=null?Fn(Qn(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var ie=c((Ii,Ae)=>{Ae.exports=function(e,t,n){e(t),n&&n(t===!0?null:t)}});var F=c((Ni,Ie)=>{"use strict";var Ce=ie();Ie.exports=function(e,t){if(!e)return function(u,i){return u?Ce(i,u,t):i(!0)};Array.isArray(e)||(e=Object.keys(e).map(function(u){return e[u]}));var n=0;return function(u,i){if(u)return Ce(i,u,t);n>=e.length?i(!0):i(null,e[n++])}}});var Re=c((Ri,Ne)=>{"use strict";var jn=F();Ne.exports=function(r){return jn(Object.keys(r))}});var oe=c((Li,Le)=>{"use strict";var bn=ie();Le.exports=function(e,t){return function(n,u){if(n)return bn(u,n,t);if(e!=null){var i=e;e=null,u(null,i)}else u(!0)}}});var Je=c((Di,De)=>{"use strict";De.exports=function(e){var t=0;return e=e||1/0,function(n,u){if(n)return u&&u(n);if(t>e)return u(!0);u(null,t++)}}});var $e=c((Ji,Ue)=>{"use strict";Ue.exports=function(e){return e=e||Math.random,function(t,n){return t?n&&n(t):n(null,e())}}});var Ge=c((Ui,Me)=>{"use strict";Me.exports=function(){return function(e,t){t(!0)}}});var Fe=c(($i,He)=>{"use strict";He.exports=function(e){return function(t,n){n(e)}}});var Ke=c((Mi,ze)=>{"use strict";ze.exports={keys:Re(),once:oe(),values:F(),count:Je(),infinite:$e(),empty:Ge(),error:Fe()}});var T=c((Gi,We)=>{"use strict";We.exports=function(e,t){var n,u;function i(f){if(n=f,u)return i.abort();(function s(){for(var o=!0,l=!1;o;)if(l=!1,n(null,function(a,p){if(l=!0,a=a||u){if(o=!1,t)t(a===!0?null:a);else if(a&&a!==!0)throw a}else e&&e(p)===!1||u?(o=!1,n(u||!0,t||function(){})):o||s()}),!l){o=!1;return}})()}return i.abort=function(f,s){if(typeof f=="function"&&(s=f,f=!0),u=f||!0,n)return n(u,s||function(){})},i}});var Qe=c((Hi,Ye)=>{"use strict";var eu=T();Ye.exports=function(e){return eu(null,e)}});var Xe=c((Fi,Ve)=>{"use strict";var ru=T();Ve.exports=function(e){return ru(function(t){console.log(t)},e)}});var A=c((zi,Ze)=>{Ze.exports=function(e){return e&&(typeof e=="string"?function(t){return t[e]}:typeof e=="object"&&typeof e.exec=="function"?function(t){var n=e.exec(t);return n&&n[0]}:e)}});var er=c((Ki,be)=>{"use strict";function je(r){return r}var tu=A(),nu=T();be.exports=function(e,t){var n=!1;return t?e=tu(e)||je:(t=e,e=je),nu(function(u){if(e(u))return n=!0,t(null,u),!1},function(u){n||t(u===!0?null:u,null)})}});var z=c((Wi,rr)=>{"use strict";var uu=T();rr.exports=function(e,t,n){n||(n=t,t=null);var u=uu(function(i){t=e(t,i)},function(i){n(i,t)});return arguments.length===2?function(i){i(null,function(f,s){if(f)return n(f===!0?null:f);t=s,u(i)})}:u}});var nr=c((Yi,tr)=>{"use strict";var iu=z();tr.exports=function(e){return iu(function(t,n){return t.push(n),t},[],e)}});var ir=c((Qi,ur)=>{"use strict";var ou=z();ur.exports=function(e){return ou(function(t,n){return t+n},"",e)}});var sr=c((Vi,or)=>{"use strict";or.exports={drain:T(),onEnd:Qe(),log:Xe(),find:er(),reduce:z(),collect:nr(),concat:ir()}});var lr=c((Xi,fr)=>{"use strict";function su(r){return r}var fu=A();fr.exports=function(e){return e?(e=fu(e),function(t){return function(n,u){t(n,function(i,f){try{f=i?null:e(f)}catch(s){return t(s,function(){return u(s)})}u(i,f)})}}):su}});var ar=c((Zi,cr)=>{"use strict";function lu(r){return r}var cu=A();cr.exports=function(e){if(!e)return lu;e=cu(e);var t=!1,n,u;return function(i){return function f(s,o){if(u)return o(u);s?(u=s,t?i(s,function(l){t?n=o:o(s)}):i(s,function(l){o(s)})):i(null,function(l,a){l?o(l):u?o(u):(t=!0,e(a,function(p,h){t=!1,u?(o(u),n&&n(u)):p?f(p,o):o(null,h)}))})}}}});var se=c((ji,pr)=>{var au=A();function pu(r){return r}pr.exports=function(e){return typeof e=="object"&&typeof e.test=="function"?function(t){return e.test(t)}:au(e)||pu}});var K=c((bi,hr)=>{"use strict";var hu=se();hr.exports=function(e){return e=hu(e),function(t){return function n(u,i){for(var f,s=!0;s;)s=!1,f=!0,t(u,function(o,l){if(!o&&!e(l))return f?s=!0:n(o,i);i(o,l)}),f=!1}}}});var vr=c((eo,dr)=>{"use strict";var du=se(),vu=K();dr.exports=function(e){return e=du(e),vu(function(t){return!e(t)})}});var qr=c((ro,yr)=>{"use strict";yr.exports=function(e,t){var n=!1;function u(i){n||!t||(n=!0,t(i===!0?null:i))}return function(i){return function(f,s){return f&&u(f),i(f,function(o,l){o?u(o):e&&e(l),s(o,l)})}}}});var gr=c((to,xr)=>{"use strict";xr.exports=function(e,t){t=t||{};var n=t.last||!1,u=!1;if(typeof e=="number"){n=!0;var i=e;e=function(){return--i}}return function(f){function s(o){f(!0,function(l){n=!1,o(l||!0)})}return function(o,l){u&&!o?n?s(l):l(u):(u=o)?f(u,l):f(null,function(a,p){(u=u||a)?l(u):e(p)?l(null,p):(u=!0,n?l(null,p):s(l))})}}}});var fe=c((no,mr)=>{"use strict";function yu(r){return r}var qu=A(),xu=K();mr.exports=function(e,t){e=qu(e)||yu;var n={};return xu(function(u){var i=e(u);return n[i]?!!t:(n[i]=!0,!t)})}});var Er=c((uo,wr)=>{"use strict";var gu=fe();wr.exports=function(e){return gu(e,!0)}});var kr=c((io,_r)=>{"use strict";var mu=F(),wu=oe();_r.exports=function(){return function(e){var t;return function(n,u){n?t?t(n,function(s){e(s||n,u)}):e(n,u):t?i():f();function i(){t(null,function(s,o){s===!0?f():s?e(!0,function(l){u(s)}):u(null,o)})}function f(){t=null,e(null,function(s,o){if(s)return u(s);Array.isArray(o)||o&&typeof o=="object"?o=mu(o):typeof o!="function"&&(o=wu(o)),t=o,i()})}}}}});var Pr=c((oo,Sr)=>{"use strict";Sr.exports={map:lr(),asyncMap:ar(),filter:K(),filterNot:vr(),through:qr(),take:gr(),unique:fe(),nonUnique:Er(),flatten:kr()}});var le=c((so,Or)=>{"use strict";Or.exports=function r(e){var t=arguments.length;if(typeof e=="function"&&e.length===1){for(var n=new Array(t),u=0;u<t;u++)n[u]=arguments[u];return function(s){if(n==null)throw new TypeError("partial sink should only be called once!");var o=n;switch(n=null,t){case 1:return r(s,o[0]);case 2:return r(s,o[0],o[1]);case 3:return r(s,o[0],o[1],o[2]);case 4:return r(s,o[0],o[1],o[2],o[3]);default:return o.unshift(s),r.apply(null,o)}}}var i=e;i&&typeof i.source=="function"&&(i=i.source);for(var u=1;u<t;u++){var f=arguments[u];typeof f=="function"?i=f(i):f&&typeof f=="object"&&(f.sink(i),i=f.source)}return i}});var W=c((k,Cr)=>{"use strict";var Br=Ke(),Tr=sr(),Ar=Pr();k=Cr.exports=le();k.pull=k;for(q in Br)k[q]=Br[q];var q;for(q in Ar)k[q]=Ar[q];var q;for(q in Tr)k[q]=Tr[q];var q});var ce=c((lo,Ir)=>{var fo=Ir.exports=function(r){(function e(){var t=!0,n=!1,u=!1;do u=!0,t=!1,r.call(this,function(){u?t=!0:e()}),u=!1;while(t)})()}});var Rr=c((co,Nr)=>{var Eu=ce();Nr.exports=function(r,e){return function(t){var n=[],u,i;function f(l){n.push(l)}r=r||function(l){this.queue(l)},e=e||function(){this.queue(null)};var s={emit:function(l,a){l=="data"&&f(a),l=="end"&&(u=!0,f(null)),l=="error"&&(i=a)},queue:f},o;return function(l,a){if(u=u||l,l)return t(l,function(){if(o){var p=o;o=null,p(l)}a(l)});o=a,Eu(function p(h){if(!!o)if(a=o,i)o=null,a(i);else if(n.length){var d=n.shift();o=null,a(d===null,d)}else t(u,function(v,m){if(v&&v!==!0)return i=v,h();if(u=u||v)e.call(s);else if(m!==null&&(r.call(s,m),i||u))return t(i||u,function(){o=null,a(i||u)});h(p)})})}}}});var Dr=c((ao,Lr)=>{Lr.exports=function(){var r=[],e=0;function t(){return r.reduce(function(n,u){return n+u.length},0)}return{length:e,data:this,add:function(n){if(!Buffer.isBuffer(n))throw new Error("data must be a buffer, was: "+JSON.stringify(n));return this.length=e=e+n.length,r.push(n),this},has:function(n){return n==null?e>0:e>=n},get:function(n){var u;if(n==null||n===e){e=0;var i=r;return r=[],i.length==1?i[0]:Buffer.concat(i)}else if(r.length>1&&n<=(u=r[0].length)){var f=r[0].slice(0,n);return n===u?r.shift():r[0]=r[0].slice(n,u),e-=n,f}else if(n<e){for(var s=[],o=0;o+r[0].length<n;){var l=r.shift();o+=l.length,s.push(l)}return o<n&&(s.push(r[0].slice(0,n-o)),r[0]=r[0].slice(n-o,r[0].length),this.length=e=e-n),Buffer.concat(s)}else throw new Error("could not get "+n+" bytes")}}}});var Mr=c((po,$r)=>{"use strict";var _u=Dr();function ku(r){return Number.isFinite(r)}function Jr(r){return typeof r=="function"}function Ur(r,e){return e?function(t,n){var u=setTimeout(function(){r(new Error("pull-reader: read exceeded timeout"),n)},e);r(t,function(i,f){clearTimeout(u),n(i,f)})}:r}$r.exports=function(r){var e=[],t,n,u=!1,i=_u(),f,s,o;function l(){for(;e.length;)if(e[0].length==null&&i.has(1))e.shift().cb(null,i.get());else if(i.has(e[0].length)){var h=e.shift();h.cb(null,i.get(h.length))}else if(f==!0&&e[0].length&&i.length<e[0].length){var d="stream ended with:"+i.length+" but wanted:"+e[0].length;e.shift().cb(new Error(d))}else if(f)e.shift().cb(f);else return!!e.length;return e.length||!i.has(1)||o}function a(){var h=l();h&&!u&&t&&!u&&!s&&(u=!0,n(null,function(d,v){if(u=!1,d)return f=d,l();i.add(v),a()}))}function p(h){if(o){for(;e.length;)e.shift().cb(o);return cb&&cb(o)}n=Ur(h,r),t=h,a()}return p.abort=function(h,d){o=h||!0,t?(u=!0,t(o,function(){for(;e.length;)e.shift().cb(o);d&&d(o)})):d()},p.read=function(h,d,v){if(Jr(d)&&(v=d,d=r),Jr(v))e.push({length:ku(h)?h:null,cb:v}),a();else return s=!0,function(m,L){if(u||i.has(1)){if(m)return t(m,L);e.push({length:null,cb:L}),a()}else Ur(t,d)(m,function(ue,Hn){L(ue,Hn)})}},p}});var jr=c((S,Zr)=>{var Su=Rr(),Pu=Mr(),Gr=0,Hr=1,Fr=2,zr="GOODBYE",Ou=Buffer.isBuffer;function Kr(r){return typeof r=="string"}function Wr(r){var e=Buffer.alloc(9),t=0,n=r.value!==void 0?r.value:r.end;return Kr(r)&&r===zr?(e.fill(0),[e,null]):(Kr(n)?(t=Hr,n=Buffer.from(n,"utf-8")):Ou(n)?t=Gr:(t=Fr,n=Buffer.from(JSON.stringify(n),"utf-8")),t=r.stream<<3|r.end<<2|t,e[0]=t,e.writeUInt32BE(n.length,1),e.writeInt32BE(r.req||0,5),[e,n])}function Yr(r){if(r.length!=9)throw new Error("expected header to be 9 bytes long");var e=r[0],t=r.readUInt32BE(1),n=r.readInt32BE(5);return{req:n,stream:!!(e&8),end:!!(e&4),value:null,length:t,type:e&3}}function Qr(r,e){if(r.length!==e.length)throw new Error("incorrect length, expected:"+e.length+" found:"+r.length);if(Gr===e.type)e.value=r;else if(Hr===e.type)e.value=r.toString();else if(Fr===e.type)e.value=JSON.parse(r.toString());else throw new Error("unknown message type");return e}function Vr(){return Su(function(r){var e=Wr(r);this.queue(e[0]),e[1]!==null&&this.queue(e[1])})}function Xr(){var r=Pu(),e=!1;return function(t){return r(t),function(n,u){if(e)return u(!0);if(n)return r.abort(n,u);r.read(9,function(i,f){if(i)return u(i);var s=Yr(f);if(s.length===0)return e=!0,u(null,zr);r.read(s.length,function(o,l){if(o)return u(o);try{Qr(l,s)}catch(a){return u(a)}u(null,s)})})}}}S=Zr.exports=function(r){return{source:Vr()(r.source),sink:function(e){return r.sink(Xr()(e))}}};S.encodePair=Wr;S.decodeHead=Yr;S.decodeBody=Qr;S.encode=Vr;S.decode=Xr});var rt=c((ho,et)=>{function J(r){return r&&(r===!0?!0:{message:r.message,name:r.name,stack:r.stack})}et.exports=function(r){return new y(r)};function y(r){this.ended=!1,this.opts=r,this._req_counter=1,this._requests={},this._instreams={},this._outstreams={},this._closecbs=[],this._closing=!1,this._closed=!1,r.close&&this._closecbs.push(r.close)}y.prototype.message=function(r){this.read({req:0,stream:!1,end:!1,value:r})};y.prototype.request=function(r,e){if(this._closing)return e(new Error("parent stream is closing"));var t=this._req_counter++,n=this;this._requests[t]=function(u,i){delete n._requests[t],e(u,i),n._maybedone(u)},this.read({req:t,stream:!1,end:!1,value:r})};y.prototype.stream=function(){if(this._closing)throw new Error("parent stream is closing");var r=this._req_counter++,e=this;return this._outstreams[r]=new U(r,this,function(){delete e._outstreams[r]}),this._outstreams[r]};y.prototype.close=function(r){if(!r)throw new Error("packet-stream.close *must* have callback");if(this._closed)return r();this._closecbs.push(r),this._closing=!0,this._maybedone()};y.prototype.destroy=function(r){r=r||J(r),this.ended=r,this._closing=!0;var e=r===!0?new Error("unexpected end of parent stream"):r,t=0;for(var n in this._requests)t++,this._requests[n](e);for(var n in this._instreams)t++,this._instreams[n].writeEnd=!0,this._instreams[n].destroy(e);for(var n in this._outstreams)t++,this._outstreams[n].writeEnd=!0,this._outstreams[n].destroy(e);t===0&&r===!0&&(e=null),this._maybedone(e)};y.prototype._maybedone=function(r){this._closed||!this._closing||Object.keys(this._requests).length!==0||Object.keys(this._instreams).length!==0||Object.keys(this._outstreams).length!==0||(this._closed=!0,this._closecbs.forEach(function(e){e(r)}),this.read(null,r||!0),this.opts=null,this._closecbs.length=0,this.read=br)};function br(r){console.error("packet-stream asked to read after closed",r)}y.prototype.read=function(r){console.error("please overwrite read method to do IO",r)};y.prototype.write=function(r,e){this.ended||(e?this.destroy(e):r.req&&!r.stream?this._onrequest(r):r.req&&r.stream?this._onstream(r):this._onmessage(r))};y.prototype._onmessage=function(r){this.opts&&typeof this.opts.message=="function"&&this.opts.message(r.value)};y.prototype._onrequest=function(r){var e=r.req*-1;if(r.req<0)typeof this._requests[e]=="function"&&this._requests[e](r.end?r.value:null,r.end?null:r.value);else if(this.opts&&typeof this.opts.request=="function"){var t=!1,n=this;this.opts.request(r.value,function(i,f){if(t)throw new Error("cb called twice from local api");t=!0,i?n.read({value:J(i),end:!0,req:e}):n.read({value:f,end:!1,req:e}),n._maybedone()})}else{if(this.ended){var u=this.ended===!0?new Error("unexpected end of parent stream"):this.ended;this.read({value:J(u),end:!0,stream:!1,req:e})}else this.read({value:{message:"Unable to handle requests",name:"NO_REQUEST_HANDLER",stack:null},end:!0,stream:!1,req:e});this._maybedone()}};y.prototype._onstream=function(r){if(r.req<0){var e=r.req*-1,t=this._outstreams[e];if(!t)return console.error("no stream for incoming msg",r);r.end?(t.writeEnd&&delete this._outstreams[e],t.readEnd=!0,t.read(null,r.value),this._maybedone()):t.read(r.value)}else{var e=r.req,n=this._instreams[e];if(!n){var u=this;n=this._instreams[e]=new U(e*-1,this,function(){delete u._instreams[e]}),this.opts&&typeof this.opts.stream=="function"&&this.opts.stream(n)}r.end?(n.writeEnd&&delete this._instreams[e],n.readEnd=!0,n.read&&n.read(null,r.value),this._maybedone()):n.read?n.read(r.value):console.error("no .read for stream:",n.id,"dropped:",r)}};function U(r,e,t){this.id=r,this.read=null,this.writeEnd=null,this.readEnd=null,this._ps=e,this._remove=t,this._seq_counter=1}U.prototype.write=function(r,e){if(e){this.writeEnd=e;var t=this._ps;t&&(t.read({req:this.id,stream:!0,end:!0,value:J(e)}),this.readEnd&&this.destroy(e),t._maybedone(e))}else this._ps&&this._ps.read({req:this.id,stream:!0,end:!1,value:r})};U.prototype.end=function(r){this.write(null,J(r||!0))};U.prototype.destroy=function(r){if(this.writeEnd){if(!this.readEnd){this.readEnd=!0;try{this.read&&this.read(null,r)}catch(e){console.error("Exception thrown by PacketStream substream end handler",e),console.error(e.stack)}}}else{if(this.writeEnd=!0,!this.readEnd){this.readEnd=!0;try{this.read(null,r)}catch(e){console.error("Exception thrown by PacketStream substream end handler",e),console.error(e.stack)}}this.write(null,r)}this._ps&&(this._remove(),this._remove=null,this.read=br,this._ps=null)}});var nt=c((vo,$)=>{"use strict";var Bu=W();function Tu(r){let e=!1;return(t,n)=>{e||(e=!0,r(t,n))}}function ae(r,e){let t=[],n=!1,u,i,f=Tu((s,o)=>{e&&e(s,o),r=null,e=null,u=null,i&&i(s||!0,()=>{})});return r.read=function(s,o){if(n=n||o,u){let l=u;u=null,l(n,s)}else n||t.push(s);n&&f(n!==!0?n:null)},{source(s,o){s?(r&&r.write(null,s),o(s),f(s!==!0?s:null)):t.length?o(null,t.shift()):n?o(n):u=o},sink(s){if(n)return i=null,s(n,()=>{});i=s,Bu.drain(o=>{if(n)return!1;r.write(o)},o=>{r&&!r.writeEnd&&r.write(null,o||!0),f&&f(o)})(s)}}}function tt(r,e){return ae(r,t=>{r.writeEnd||r.write(null,t||!0),e&&e(t)})}function Au(r){return tt(r).source}function Cu(r,e){return tt(r,e).sink}$.exports=ae;$.exports.source=Au;$.exports.sink=Cu;$.exports.duplex=ae});var it=c((yo,ut)=>{ut.exports=function(e){var t,n,u;function i(f){return function(s,o){f(s,function(l,a){if(l&&!u)return u=!0,o(null,e);l&&t?o(l):l?n=o:o(null,a)})}}return i.end=function(){return t=!0,n&&n(t),i},i}});var pe=c((qo,ot)=>{ot.exports=function(e,t,n){e(t),n&&n(t===!0?null:t)}});var Y=c((xo,ft)=>{"use strict";var st=pe();ft.exports=function(e,t){if(!e)return function(u,i){return u?st(i,u,t):i(!0)};Array.isArray(e)||(e=Object.keys(e).map(function(u){return e[u]}));var n=0;return function(u,i){if(u)return st(i,u,t);n>=e.length?i(!0):i(null,e[n++])}}});var ct=c((go,lt)=>{"use strict";var Iu=Y();lt.exports=function(r){return Iu(Object.keys(r))}});var he=c((mo,at)=>{"use strict";var Nu=pe();at.exports=function(e,t){return function(n,u){if(n)return Nu(u,n,t);if(e!=null){var i=e;e=null,u(null,i)}else u(!0)}}});var ht=c((wo,pt)=>{"use strict";pt.exports=function(e){var t=0;return e=e||1/0,function(n,u){if(n)return u&&u(n);if(t>e)return u(!0);u(null,t++)}}});var vt=c((Eo,dt)=>{"use strict";dt.exports=function(e){return e=e||Math.random,function(t,n){return t?n&&n(t):n(null,e())}}});var qt=c((_o,yt)=>{"use strict";yt.exports=function(){return function(e,t){t(!0)}}});var gt=c((ko,xt)=>{"use strict";xt.exports=function(e){return function(t,n){n(e)}}});var wt=c((So,mt)=>{"use strict";mt.exports={keys:ct(),once:he(),values:Y(),count:ht(),infinite:vt(),empty:qt(),error:gt()}});var C=c((Po,Et)=>{"use strict";Et.exports=function(e,t){var n,u;function i(f){if(n=f,u)return i.abort();(function s(){for(var o=!0,l=!1;o;)if(l=!1,n(null,function(a,p){if(l=!0,a=a||u){if(o=!1,t)t(a===!0?null:a);else if(a&&a!==!0)throw a}else e&&e(p)===!1||u?(o=!1,n(u||!0,t||function(){})):o||s()}),!l){o=!1;return}})()}return i.abort=function(f,s){if(typeof f=="function"&&(s=f,f=!0),u=f||!0,n)return n(u,s||function(){})},i}});var kt=c((Oo,_t)=>{"use strict";var Ru=C();_t.exports=function(e){return Ru(null,e)}});var Pt=c((Bo,St)=>{"use strict";var Lu=C();St.exports=function(e){return Lu(function(t){console.log(t)},e)}});var I=c((To,Ot)=>{Ot.exports=function(e){return e&&(typeof e=="string"?function(t){return t[e]}:typeof e=="object"&&typeof e.exec=="function"?function(t){var n=e.exec(t);return n&&n[0]}:e)}});var At=c((Ao,Tt)=>{"use strict";function Bt(r){return r}var Du=I(),Ju=C();Tt.exports=function(e,t){var n=!1;return t?e=Du(e)||Bt:(t=e,e=Bt),Ju(function(u){if(e(u))return n=!0,t(null,u),!1},function(u){n||t(u===!0?null:u,null)})}});var Q=c((Co,Ct)=>{"use strict";var Uu=C();Ct.exports=function(e,t,n){n||(n=t,t=null);var u=Uu(function(i){t=e(t,i)},function(i){n(i,t)});return arguments.length===2?function(i){i(null,function(f,s){if(f)return n(f===!0?null:f);t=s,u(i)})}:u}});var Nt=c((Io,It)=>{"use strict";var $u=Q();It.exports=function(e){return $u(function(t,n){return t.push(n),t},[],e)}});var Lt=c((No,Rt)=>{"use strict";var Mu=Q();Rt.exports=function(e){return Mu(function(t,n){return t+n},"",e)}});var Jt=c((Ro,Dt)=>{"use strict";Dt.exports={drain:C(),onEnd:kt(),log:Pt(),find:At(),reduce:Q(),collect:Nt(),concat:Lt()}});var $t=c((Lo,Ut)=>{"use strict";function Gu(r){return r}var Hu=I();Ut.exports=function(e){return e?(e=Hu(e),function(t){return function(n,u){t(n,function(i,f){try{f=i?null:e(f)}catch(s){return t(s,function(){return u(s)})}u(i,f)})}}):Gu}});var Gt=c((Do,Mt)=>{"use strict";function Fu(r){return r}var zu=I();Mt.exports=function(e){if(!e)return Fu;e=zu(e);var t=!1,n,u;return function(i){return function f(s,o){if(u)return o(u);s?(u=s,t?i(s,function(){t?n=o:o(s)}):i(s,o)):i(null,function(l,a){l?o(l):u?o(u):(t=!0,e(a,function(p,h){t=!1,u?(o(u),n(u)):p?f(p,o):o(null,h)}))})}}}});var de=c((Jo,Ht)=>{var Ku=I();function Wu(r){return r}Ht.exports=function(e){return typeof e=="object"&&typeof e.test=="function"?function(t){return e.test(t)}:Ku(e)||Wu}});var V=c((Uo,Ft)=>{"use strict";var Yu=de();Ft.exports=function(e){return e=Yu(e),function(t){return function n(u,i){for(var f,s=!0;s;)s=!1,f=!0,t(u,function(o,l){if(!o&&!e(l))return f?s=!0:n(o,i);i(o,l)}),f=!1}}}});var Kt=c(($o,zt)=>{"use strict";var Qu=de(),Vu=V();zt.exports=function(e){return e=Qu(e),Vu(function(t){return!e(t)})}});var Yt=c((Mo,Wt)=>{"use strict";Wt.exports=function(e,t){var n=!1;function u(i){n||!t||(n=!0,t(i===!0?null:i))}return function(i){return function(f,s){return f&&u(f),i(f,function(o,l){o?u(o):e&&e(l),s(o,l)})}}}});var Vt=c((Go,Qt)=>{"use strict";Qt.exports=function(e,t){t=t||{};var n=t.last||!1,u=!1;if(typeof e=="number"){n=!0;var i=e;e=function(){return--i}}return function(f){function s(o){f(!0,function(l){n=!1,o(l||!0)})}return function(o,l){u?n?s(l):l(u):(u=o)?f(u,l):f(null,function(a,p){(u=u||a)?l(u):e(p)?l(null,p):(u=!0,n?l(null,p):s(l))})}}}});var ve=c((Ho,Xt)=>{"use strict";function Xu(r){return r}var Zu=I(),ju=V();Xt.exports=function(e,t){e=Zu(e)||Xu;var n={};return ju(function(u){var i=e(u);return n[i]?!!t:(n[i]=!0,!t)})}});var jt=c((Fo,Zt)=>{"use strict";var bu=ve();Zt.exports=function(e){return bu(e,!0)}});var en=c((zo,bt)=>{"use strict";var ei=Y(),ri=he();bt.exports=function(){return function(e){var t;return function(n,u){n?t?t(n,function(s){e(s||n,u)}):e(n,u):t?i():f();function i(){t(null,function(s,o){s===!0?f():s?e(!0,function(l){u(s)}):u(null,o)})}function f(){t=null,e(null,function(s,o){if(s)return u(s);Array.isArray(o)||o&&typeof o=="object"?o=ei(o):typeof o!="function"&&(o=ri(o)),t=o,i()})}}}}});var tn=c((Ko,rn)=>{"use strict";rn.exports={map:$t(),asyncMap:Gt(),filter:V(),filterNot:Kt(),through:Yt(),take:Vt(),unique:ve(),nonUnique:jt(),flatten:en()}});var un=c((Wo,nn)=>{"use strict";nn.exports=function r(e){var t=arguments.length;if(typeof e=="function"&&e.length===1){for(var n=new Array(t),u=0;u<t;u++)n[u]=arguments[u];return function(s){if(n==null)throw new TypeError("partial sink should only be called once!");var o=n;switch(n=null,t){case 1:return r(s,o[0]);case 2:return r(s,o[0],o[1]);case 3:return r(s,o[0],o[1],o[2]);case 4:return r(s,o[0],o[1],o[2],o[3]);default:return o.unshift(s),r.apply(null,o)}}}var i=e;i&&typeof i.source=="function"&&(i=i.source);for(var u=1;u<t;u++){var f=arguments[u];typeof f=="function"?i=f(i):f&&typeof f=="object"&&(f.sink(i),i=f.source)}return i}});var cn=c((M,ln)=>{"use strict";var on=wt(),sn=Jt(),fn=tn();M=ln.exports=un();for(x in on)M[x]=on[x];var x;for(x in fn)M[x]=fn[x];var x;for(x in sn)M[x]=sn[x];var x});var pn=c((Yo,an)=>{var ti=it(),ye=cn();an.exports=function(r,e){e=e||"GOODBYE";var t=ti(e);return{source:ye(r.source,t),sink:ye(ye.filter(function(n){if(n!==e)return!0;t.end()}),r.sink)}}});var G=c(g=>{"use strict";var X=W();function ni(r){return r?Object.keys(r).length===0:!0}g.set=function(e,t,n){let u,i;for(let f=0;f<t.length;f++){let s=t[f];e[s]=e[s]||{},u=e,i=s,e=e[s]}u[i]=n};g.get=function(e,t){if(typeof t=="string")return e[t];let n;for(let u=0;u<t.length;u++){let i=t[u];if(n=e=e[i],e==null)return e}return n};g.prefix=function(e,t){let n;for(let u=0;u<t.length;u++){let i=t[u];if(n=e=e[i],typeof e!="object")return e}return typeof n!="object"?!!n:!1};function ui(r,e){for(let t in e){let n=e[t];r[n]||(r[n]={}),r=r[n]}return r}function ii(r,e){(function t(n,u){let i=e[u];if(n)e.length-1===u?delete n[i]:u<e.length&&t(n[i],u+1);else return;ni(n[i])&&delete n[i]})(r,0)}function oi(r,e){for(let t in e)r[t]=e[t];return r}g.mount=function(e,t,n){if(!Array.isArray(t))throw new Error("path must be array of strings");return oi(ui(e,t),n)};g.unmount=function(e,t){return ii(e,t)};var Z=r=>r==="source",j=r=>r==="sink",hn=r=>r==="duplex",si=r=>r==="sync",fi=r=>r==="async",dn=r=>si(r)||fi(r),li=r=>Z(r)||j(r)||hn(r);g.isRequest=dn;g.isStream=li;function qe(r){return function(e){e(r||!0,()=>{})}}function vn(r){return{source:X.error(r),sink:qe(r)}}g.errorAsStream=function(e,t){return Z(e)?X.error(t):j(e)?qe(t):vn(t)};g.errorAsStreamOrCb=function(e,t,n){return dn(e)?n(t):Z(e)?X.error(t):j(e)?qe(t):n(t),vn(t)};g.pipeToStream=function(e,t,n){Z(e)?t(n):j(e)?n(t):hn(e)&&X(t,n,t)}});var xe=c((Xo,qn)=>{function yn(r){if(r.stack&&r.name&&r.message)return r.stack.substring(r.name.length+3+r.message.length).split(`
`);if(r.stack)return r.stack.split(`
`)}function ci(r,e){return r.filter(function(t){return!~e.indexOf(t)})}var Vo=qn.exports=function(r,e){if(!(r.stack&&r.name&&r.message))return console.error(new Error("stackless error")),r;var t=new Error(e),n=ci(yn(t).slice(1),yn(r)).join(`
`);return t.__proto__=r,t.stack=t.name+": "+t.message+`
`+n+`
  `+r.stack,t}});var mn=c((Zo,gn)=>{"use strict";var ai=rt(),ge=nt(),pi=pn(),N=G(),xn=xe();gn.exports=function(e,t,n){let u=ai({message(){},request(f,s){if(!Array.isArray(f.args))return s(new Error(`invalid request, args should be array, was: ${JSON.stringify(f)}`));let o=f.name,l=f.args,a=!1,p=!1;l.push((h,d)=>{p=!0,a=!0,s(h,d)});try{e("async",o,l)}catch(h){if(a||p)throw xn(h,"no callback provided to muxrpc async funtion");s(h)}},stream(f){f.read=function(o,l){if(l)return f.write(null,l);let{name:a,type:p,args:h}=o,d,v;if(f.read=null,!N.isStream(p))return f.write(null,new Error(`unsupported stream type: ${p}`));try{v=e(p,a,h)}catch(ue){d=ue}let L=ge[p==="source"?"sink":p==="sink"?"source":"duplex"](f);return N.pipeToStream(p,L,d?N.errorAsStream(p,d):v)}},close(f){if(u=null,i.ended=!0,!i.closed&&(i.closed=!0,n)){let s=n;n=null,s(f)}}}),i=pi(ge(u,()=>{}));return i=t?t(i):i,i.remoteCall=function(f,s,o,l){if(s==="emit")return u.message(o);if(!(N.isRequest(f)||N.isStream(f)))throw new Error(`unsupported type: ${JSON.stringify(f)}`);if(N.isRequest(f))return u.request({name:s,args:o},l);let a=u.stream(),p=ge[f](a,l);return a.write({name:s,args:o,type:f}),p},i.isOpen=function(){return!u.ended},i.close=function(f,s){if(typeof f=="function"&&(s=f,f=!1),!u){s&&s();return}if(f){u.destroy(f),s&&s();return}return u.close(o=>{if(s)s(o);else if(o)throw xn(o,"no callback provided for muxrpc close")}),this},i.closed=!1,i}});var En=c((jo,wn)=>{"use strict";var hi=xe(),di=G();function me(r,e,t,n){for(let u in e){let i=e[u],f=t?t.concat(u):[u];if(i&&typeof i=="object"){let s=i;r[u]=me({},s,f,n)}else{let s=i;r[u]=(...o)=>n(s,f,o)}}return r}function vi(r){if(r)throw hi(r,"callback not provided")}function yi(r,e,t,n){r=r||{};function u(i,f,s){let o=typeof s[s.length-1]=="function"?s.pop():i==="sync"||i==="async"?null:vi;if(typeof o=="function"){let l;try{l=t(i,f,s,o)}catch(a){return di.errorAsStreamOrCb(i,a,o)}return l}else return new Promise((l,a)=>{t(i,f,s,(p,h)=>{p?a(p):l(h)})})}return n?u("async","manifest",[function(i,f){if(i)return n(i);me(r,f,null,u),n(null,f,r)}]):me(r,e,null,u),r}wn.exports=yi});var Sn=c((bo,kn)=>{"use strict";var b=G();function _n(r){return Array.isArray(r)?r:r.split(".")}function qi(r){return r&&typeof r.pre=="function"&&typeof r.test=="function"&&typeof r.post=="function"}kn.exports=function(e){if(qi(e))return e;if(typeof e=="function")return{pre:e};let t=null,n={};function u(i){if(i.allow){t={};for(let f of i.allow)b.set(t,_n(f),!0)}else t=null;if(i.deny)for(let f of i.deny)b.set(n,_n(f),!0);else n={};return this}return e&&u(e),u.pre=i=>{if(i=Array.isArray(i)?i:[i],t&&!b.prefix(t,i))return new Error(`method:${i} is not in list of allowed methods`);if(n&&b.prefix(n,i))return new Error(`method:${i} is on list of disallowed methods`)},u.post=()=>{},u.test=i=>u.pre(i),u.get=()=>({allow:t,deny:n}),u}});var On=c((es,Pn)=>{"use strict";var xi=Sn(),we=G();Pn.exports=function(e,t,n){n=xi(n);function u(f,s){return f===we.get(t,s)}function i(f,s,o){if(s==="emit")throw new Error("emit has been removed");if(f==="async"&&u("sync",s)){let l=o.pop(),a;try{a=we.get(e,s).apply(this,o)}catch(p){return l(p)}return l(null,a)}if(!u(f,s))throw new Error(`no ${f}:${s}`);return we.get(e,s).apply(this,o)}return function(s,o,l){let a=n.pre(o,l);if(a)throw a;return i.call(this,s,o,l)}}});var An=c((rs,Tn)=>{"use strict";var gi=jr(),mi=require("events").EventEmitter,wi=mn(),Ei=En(),_i=On();function Bn(r,e,t,n,u,i,f){let s;typeof r=="function"&&(s=r,r={}),e=e||{},r=r||{};let o=new mi;i||(i=gi);let l,a={_emit(h,d){return o&&o._emit(h,d),a},id:n},p=wi(_i(t,e,u).bind(a),i,h=>{if(!o.closed&&(o.closed=!0,o.emit("closed"),l)){let d=l;l=null,d(h)}});if(Ei(o,r,(h,d,v,m)=>{if(p.closed)throw new Error("stream is closed");return p.remoteCall(h,d,v,m)},s),o._emit=o.emit,f){Object.__defineGetter__.call(o,"id",()=>a.id),Object.__defineSetter__.call(o,"id",d=>{a.id=d});let h=!0;o.createStream=d=>{if(l=d,h)return h=!1,p;throw new Error("one stream per rpc")}}else o.stream=p;return o.closed=!1,o.close=function(h,d){return p.close(h,d),this},o}Tn.exports=function(r,e,t){return arguments.length>3?Bn.apply(this,arguments):function(n,u,i){return Bn(r,e,n,i,u,t,!0)}}});var Rn=c((w,Nn)=>{var ts=le(),ki=ce();function Cn(r){r.destroy?r.destroy():console.error("warning, stream-to-pull-stream: \nthe wrapped node-stream does not implement `destroy`, \nthis may cause resource leaks.")}function In(r,e,t){var n,u=!1,i;function f(){i||(i=!0,t&&t(n===!0?null:n))}function s(){u||(u=!0,l(),n?f():r(n=!0,f))}function o(a){l(),n||r(n=a,f)}function l(){e.on("finish",s),e.removeListener("close",s),e.removeListener("error",o)}e.on("close",s),e.on("finish",s),e.on("error",o),process.nextTick(function(){ki(function(a){r(null,function(p,h){if(n=n||p,p===!0)return e._isStdio?f():e.end();if(n=n||p)return Cn(e),f(n);if(e._isStdio)e.write(h,function(){a()});else{var d=e.write(h);d===!1?e.once("drain",a):a()}})})})}function Si(r){var e=!1,t=!1,n;function u(){var i=r.read();if(i!==null&&n){var f=n;n=null,f(null,i)}}return r.on("readable",function(){t=!0,n&&u()}).on("end",function(){e=!0,n&&n(e)}).on("error",function(i){e=i,n&&n(e)}),function(i,f){n=f,e?f(e):t&&u()}}function ee(r){var e=[],t=[],n,u=!1,i;function f(){for(;(e.length||n)&&t.length;)t.shift()(e.length?null:n,e.shift());!e.length&&u&&(u=!1,r.resume())}return r.on("data",function(s){e.push(s),f(),e.length&&r.pause&&(u=!0,r.pause())}),r.on("end",function(){n=!0,f()}),r.on("close",function(){n=!0,f()}),r.on("error",function(s){n=s,f()}),function(s,o){if(!o)throw new Error("*must* provide cb");if(s){let a=function(){for(;t.length;)t.shift()(s);o(s)};var l=a;if(n)return a();r.once("close",a),Cn(r)}else t.push(o),f()}}var Pi=ee,re=function(r,e){return function(t){return In(t,r,e)}},te=function(r){return ee(r)};w=Nn.exports=function(r,e){return r.writable&&r.write?r.readable?function(t){return In(t,r,e),ee(r)}:re(r,e):te(r)};w.sink=re;w.source=te;w.read=Pi;w.read1=ee;w.read2=Si;w.duplex=function(r,e){return{source:te(r),sink:re(r,e)}};w.transform=function(r){return function(e){var t=te(r);return re(r)(e),t}}});Xn(exports,{logThrough:()=>Ai});var Ln=_(require("net")),Dn=_(require("http")),ne=_(require("fs")),Jn=_(require("path")),Ee=_(require("child_process")),_e=_(W()),ke=_(require("util")),Oi=An(),R=Rn(),Un;try{Un=require(`${Jn.dirname(process.argv[0])}/node_modules/node-pty`)}catch{}var $n=JSON.parse(process.env.REMOTE_CONTAINERS_SOCKETS),Bi=Be(E({},$n.reduce((r,e)=>(r[e]="duplex",r),{})),{rpc:"async",connected:"async",ready:"async"}),Ti={exec:"async",stdin:"sink",stdout:"source",stderr:"source",exit:"async",terminate:"async",dispose:"async",ptyExec:"async",ptyIn:"sink",ptyOut:"source",ptyResize:"async",ptyExit:"async",ptyTerminate:"async",ptyDispose:"async",execToEnd:"async",setBaseEnv:"async"},P=process.env,O={},B={},Mn=0,H=Oi(Bi,Ti)({exec:(r,e)=>{let t=r.cwd,n=r.env?E(E({},P),r.env):P,u=Ee.spawn(r.cmd,r.args,{cwd:t,env:n,windowsHide:!0}),i=Mn++;O[i]={process:u,exit:new Promise((f,s)=>{u.once("error",s),u.once("close",(o,l)=>{f({code:o,signal:l})})}),stdin:R.sink(u.stdin),stdout:R.source(u.stdout),stderr:R.source(u.stderr)},e(null,i)},stdin:r=>O[r].stdin,stdout:r=>O[r].stdout,stderr:r=>O[r].stderr,exit:(r,e)=>{O[r].exit.then(t=>e(null,t),e)},terminate:(r,e)=>{O[r].process.kill("SIGKILL"),e()},dispose:(r,e)=>{delete O[r],e()},ptyExec:(r,e)=>{let{cwd:t,cols:n,rows:u}=r,i=r.env?E(E({},P),r.env):P,f=Un.spawn(r.cmd,r.args||[],{cwd:t,env:i,cols:n,rows:u}),s=[],o,l=f.onData(p=>{if(o){let h=o;o=void 0,h(null,p)}else s.push(p)}),a=Mn++;B[a]={process:f,exit:new Promise(p=>{f.onExit(({exitCode:h,signal:d})=>p({code:h,signal:d}))}),in:p=>{p(null,function h(d,v){if(d!==!0){if(d)throw d;f.write(v),p(null,h)}})},out:(p,h)=>{if(p)return l.dispose(),s.length=0,h(p);if(s.length){let d=s.join("");s.length=0,h(null,d)}else o=h}},e(null,a)},ptyIn:r=>B[r].in,ptyOut:r=>B[r].out,ptyResize:(r,e,t,n)=>{B[r].process.resize(e,t),n()},ptyExit:(r,e)=>{B[r].exit.then(t=>e(null,t),e)},ptyTerminate:(r,e)=>{B[r].process.kill("SIGKILL"),e()},ptyDispose:(r,e)=>{delete B[r],e()},execToEnd:(r,e)=>{let t=r.cwd,n=r.env?E(E({},P),r.env):P,u=Ee.spawn(r.cmd,r.args,{cwd:t,env:n,windowsHide:!0}),i=[];u.stdout.on("data",s=>i.push(s));let f=[];u.stderr.on("data",s=>f.push(s)),u.once("error",e),u.once("close",(s,o)=>{e(null,{stdout:Buffer.concat(i),stderr:Buffer.concat(f),code:s,signal:o})})},setBaseEnv:(r,e)=>{P=r,e()}});(0,_e.default)(R.source(process.stdin),H.createStream(),R.sink(process.stdout));function Ai(r){return function(t,n){r(t,function(u,i){console.error(`logThrough: ${i==null?void 0:i.toString()}`),n(u,i)})}}var Gn=$n.map(async r=>{try{if(!(await(0,ke.promisify)(ne.lstat)(r)).isSocket())return;await(0,ke.promisify)(ne.unlink)(r)}catch(t){if(!(t&&t.code==="ENOENT"))throw t}let e=Ln.createServer(t=>{t=R.duplex(t),(0,_e.default)(t,H[r](n=>{n&&console.error("Remote to local stream terminated with error:",n)}),t)});return new Promise(t=>e.listen(r,t))});if(process.env.REMOTE_CONTAINERS_IPC){let r;Gn.push(new Promise(e=>r=e)),Dn.createServer((e,t)=>{let n=[];e.on("data",u=>n.push(u)),e.on("end",()=>{H.rpc(Buffer.concat(n).toString(),(u,i)=>{u?(console.error(u),t.writeHead(500),t.end()):(t.writeHead(200),t.write(i,f=>{f&&console.error(f)}),t.end())})})}).listen(process.env.REMOTE_CONTAINERS_IPC,r)}Promise.all(Gn).then(()=>H.ready(r=>{r&&console.error(r)})).catch(r=>console.error(r));H.connected(r=>{r&&console.error(r)});0&&(module.exports={logThrough});
//# sourceMappingURL=remoteContainersServer.js.map


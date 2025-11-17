(function(){"use strict";var A,p,re,B,_e,ie,ce,se,V,G,Y,H={},ae=[],Ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,I=Array.isArray;function $(e,t){for(var n in t)e[n]=t[n];return e}function J(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Te(e,t,n){var o,i,_,s={};for(_ in t)_=="key"?o=t[_]:_=="ref"?i=t[_]:s[_]=t[_];if(arguments.length>2&&(s.children=arguments.length>3?A.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)s[_]===void 0&&(s[_]=e.defaultProps[_]);return U(e,s,o,i,null)}function U(e,t,n,o,i){var _={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++re,__i:-1,__u:0};return i==null&&p.vnode!=null&&p.vnode(_),_}function M(e){return e.children}function D(e,t){this.props=e,this.context=t}function C(e,t){if(t==null)return e.__?C(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?C(e):null}function le(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return le(e)}}function de(e){(!e.__d&&(e.__d=!0)&&B.push(e)&&!R.__r++||_e!=p.debounceRendering)&&((_e=p.debounceRendering)||ie)(R)}function R(){for(var e,t,n,o,i,_,s,a=1;B.length;)B.length>a&&B.sort(ce),e=B.shift(),a=B.length,e.__d&&(n=void 0,o=void 0,i=(o=(t=e).__v).__e,_=[],s=[],t.__P&&((n=$({},o)).__v=o.__v+1,p.vnode&&p.vnode(n),K(t.__P,n,o,t.__n,t.__P.namespaceURI,32&o.__u?[i]:null,_,i??C(o),!!(32&o.__u),s),n.__v=o.__v,n.__.__k[n.__i]=n,ve(_,n,s),o.__e=o.__=null,n.__e!=i&&le(n)));R.__r=0}function ue(e,t,n,o,i,_,s,a,l,c,u){var r,f,d,k,x,b,h,v=o&&o.__k||ae,N=t.length;for(l=Le(n,t,v,l,N),r=0;r<N;r++)(d=n.__k[r])!=null&&(f=d.__i==-1?H:v[d.__i]||H,d.__i=r,b=K(e,d,f,i,_,s,a,l,c,u),k=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&X(f.ref,null,d),u.push(d.ref,d.__c||k,d)),x==null&&k!=null&&(x=k),(h=!!(4&d.__u))||f.__k===d.__k?l=fe(d,l,e,h):typeof d.type=="function"&&b!==void 0?l=b:k&&(l=k.nextSibling),d.__u&=-7);return n.__e=x,l}function Le(e,t,n,o,i){var _,s,a,l,c,u=n.length,r=u,f=0;for(e.__k=new Array(i),_=0;_<i;_++)(s=t[_])!=null&&typeof s!="boolean"&&typeof s!="function"?(l=_+f,(s=e.__k[_]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?U(null,s,null,null,null):I(s)?U(M,{children:s},null,null,null):s.constructor==null&&s.__b>0?U(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,a=null,(c=s.__i=Ae(s,n,l,r))!=-1&&(r--,(a=n[c])&&(a.__u|=2)),a==null||a.__v==null?(c==-1&&(i>u?f--:i<u&&f++),typeof s.type!="function"&&(s.__u|=4)):c!=l&&(c==l-1?f--:c==l+1?f++:(c>l?f--:f++,s.__u|=4))):e.__k[_]=null;if(r)for(_=0;_<u;_++)(a=n[_])!=null&&(2&a.__u)==0&&(a.__e==o&&(o=C(a)),me(a,a));return o}function fe(e,t,n,o){var i,_;if(typeof e.type=="function"){for(i=e.__k,_=0;i&&_<i.length;_++)i[_]&&(i[_].__=e,t=fe(i[_],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=C(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ae(e,t,n,o){var i,_,s,a=e.key,l=e.type,c=t[n],u=c!=null&&(2&c.__u)==0;if(c===null&&e.key==null||u&&a==c.key&&l==c.type)return n;if(o>(u?1:0)){for(i=n-1,_=n+1;i>=0||_<t.length;)if((c=t[s=i>=0?i--:_++])!=null&&(2&c.__u)==0&&a==c.key&&l==c.type)return s}return-1}function pe(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ee.test(t)?n:n+"px"}function z(e,t,n,o,i){var _,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||pe(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||pe(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")_=t!=(t=t.replace(se,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?o?n.u=o.u:(n.u=V,e.addEventListener(t,_?Y:G,_)):e.removeEventListener(t,_?Y:G,_);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function he(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=V++;else if(t.t<n.u)return;return n(p.event?p.event(t):t)}}}function K(e,t,n,o,i,_,s,a,l,c){var u,r,f,d,k,x,b,h,v,N,F,q,T,He,O,L,oe,S=t.type;if(t.constructor!=null)return null;128&n.__u&&(l=!!(32&n.__u),_=[a=t.__e=n.__e]),(u=p.__b)&&u(t);e:if(typeof S=="function")try{if(h=t.props,v="prototype"in S&&S.prototype.render,N=(u=S.contextType)&&o[u.__c],F=u?N?N.props.value:u.__:o,n.__c?b=(r=t.__c=n.__c).__=r.__E:(v?t.__c=r=new S(h,F):(t.__c=r=new D(h,F),r.constructor=S,r.render=Ue),N&&N.sub(r),r.props=h,r.state||(r.state={}),r.context=F,r.__n=o,f=r.__d=!0,r.__h=[],r._sb=[]),v&&r.__s==null&&(r.__s=r.state),v&&S.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=$({},r.__s)),$(r.__s,S.getDerivedStateFromProps(h,r.__s))),d=r.props,k=r.state,r.__v=t,f)v&&S.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),v&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(v&&S.getDerivedStateFromProps==null&&h!==d&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(h,F),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(h,r.__s,F)===!1||t.__v==n.__v){for(t.__v!=n.__v&&(r.props=h,r.state=r.__s,r.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(P){P&&(P.__=t)}),q=0;q<r._sb.length;q++)r.__h.push(r._sb[q]);r._sb=[],r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(h,r.__s,F),v&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(d,k,x)})}if(r.context=F,r.props=h,r.__P=e,r.__e=!1,T=p.__r,He=0,v){for(r.state=r.__s,r.__d=!1,T&&T(t),u=r.render(r.props,r.state,r.context),O=0;O<r._sb.length;O++)r.__h.push(r._sb[O]);r._sb=[]}else do r.__d=!1,T&&T(t),u=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++He<25);r.state=r.__s,r.getChildContext!=null&&(o=$($({},o),r.getChildContext())),v&&!f&&r.getSnapshotBeforeUpdate!=null&&(x=r.getSnapshotBeforeUpdate(d,k)),L=u,u!=null&&u.type===M&&u.key==null&&(L=ge(u.props.children)),a=ue(e,I(L)?L:[L],t,n,o,i,_,s,a,l,c),r.base=t.__e,t.__u&=-161,r.__h.length&&s.push(r),b&&(r.__E=r.__=null)}catch(P){if(t.__v=null,l||_!=null)if(P.then){for(t.__u|=l?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;_[_.indexOf(a)]=null,t.__e=a}else{for(oe=_.length;oe--;)J(_[oe]);Q(t)}else t.__e=n.__e,t.__k=n.__k,P.then||Q(t);p.__e(P,t,n)}else _==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):a=t.__e=Ie(n.__e,t,n,o,i,_,s,l,c);return(u=p.diffed)&&u(t),128&t.__u?void 0:a}function Q(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Q)}function ve(e,t,n){for(var o=0;o<n.length;o++)X(n[o],n[++o],n[++o]);p.__c&&p.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(_){_.call(i)})}catch(_){p.__e(_,i.__v)}})}function ge(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:I(e)?e.map(ge):$({},e)}function Ie(e,t,n,o,i,_,s,a,l){var c,u,r,f,d,k,x,b=n.props,h=t.props,v=t.type;if(v=="svg"?i="http://www.w3.org/2000/svg":v=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),_!=null){for(c=0;c<_.length;c++)if((d=_[c])&&"setAttribute"in d==!!v&&(v?d.localName==v:d.nodeType==3)){e=d,_[c]=null;break}}if(e==null){if(v==null)return document.createTextNode(h);e=document.createElementNS(i,v,h.is&&h),a&&(p.__m&&p.__m(t,_),a=!1),_=null}if(v==null)b===h||a&&e.data==h||(e.data=h);else{if(_=_&&A.call(e.childNodes),b=n.props||H,!a&&_!=null)for(b={},c=0;c<e.attributes.length;c++)b[(d=e.attributes[c]).name]=d.value;for(c in b)if(d=b[c],c!="children"){if(c=="dangerouslySetInnerHTML")r=d;else if(!(c in h)){if(c=="value"&&"defaultValue"in h||c=="checked"&&"defaultChecked"in h)continue;z(e,c,null,d,i)}}for(c in h)d=h[c],c=="children"?f=d:c=="dangerouslySetInnerHTML"?u=d:c=="value"?k=d:c=="checked"?x=d:a&&typeof d!="function"||b[c]===d||z(e,c,d,b[c],i);if(u)a||r&&(u.__html==r.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(r&&(e.innerHTML=""),ue(t.type=="template"?e.content:e,I(f)?f:[f],t,n,o,v=="foreignObject"?"http://www.w3.org/1999/xhtml":i,_,s,_?_[0]:n.__k&&C(n,0),a,l),_!=null)for(c=_.length;c--;)J(_[c]);a||(c="value",v=="progress"&&k==null?e.removeAttribute("value"):k!=null&&(k!==e[c]||v=="progress"&&!k||v=="option"&&k!=b[c])&&z(e,c,k,b[c],i),c="checked",x!=null&&x!=e[c]&&z(e,c,x,b[c],i))}return e}function X(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(i){p.__e(i,n)}}function me(e,t,n){var o,i;if(p.unmount&&p.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||X(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){p.__e(_,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&me(o[i],t,n||typeof e.type!="function");n||J(e.__e),e.__c=e.__=e.__e=void 0}function Ue(e,t,n){return this.constructor(e,n)}function Me(e,t,n){var o,i,_,s;t==document&&(t=document.documentElement),p.__&&p.__(e,t),i=(o=!1)?null:t.__k,_=[],s=[],K(t,e=t.__k=Te(M,null,[e]),i||H,H,t.namespaceURI,i?null:t.firstChild?A.call(t.childNodes):null,_,i?i.__e:t.firstChild,o,s),ve(_,e,s)}A=ae.slice,p={__e:function(e,t,n,o){for(var i,_,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((_=i.constructor)&&_.getDerivedStateFromError!=null&&(i.setState(_.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),s=i.__d),s)return i.__E=i}catch(a){e=a}throw e}},re=0,D.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),de(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),de(this))},D.prototype.render=M,B=[],ie=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ce=function(e,t){return e.__v.__b-t.__v.__b},R.__r=0,se=/(PointerCapture)$|Capture$/i,V=0,G=he(!1),Y=he(!0);var De=0;function g(e,t,n,o,i,_){t||(t={});var s,a,l=t;if("ref"in l)for(a in l={},t)a=="ref"?s=t[a]:l[a]=t[a];var c={type:e,props:l,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--De,__i:-1,__u:0,__source:i,__self:_};if(typeof e=="function"&&(s=e.defaultProps))for(a in s)l[a]===void 0&&(l[a]=s[a]);return p.vnode&&p.vnode(c),c}const Re=({isPositive:e=!0})=>g("svg",{viewBox:"0 0 120 40",xmlns:"http://www.w3.org/2000/svg",children:[g("line",{x1:"5",y1:"30",x2:"60",y2:"20",stroke:e?"var(--stocks-positive-color)":"var(--stocks-negative-color)","stroke-width":"2","stroke-linecap":"round"}),g("line",{x1:"60",y1:"20",x2:"115",y2:"5",stroke:e?"var(--stocks-positive-color)":"var(--stocks-negative-color)","stroke-width":"2","stroke-linecap":"round"})]}),w={card:"card",cardHeader:"cardHeader",cardBody:"cardBody",cardFooter:"cardFooter",positiveFloatingBadge:"positiveFloatingBadge",negativeFloatingBadge:"negativeFloatingBadge",cardBodyContent:"cardBodyContent",positiveNumber:"positiveNumber",negativeNumber:"negativeNumber",stockPrice:"stockPrice"},ze=({stock:e})=>{const t=(e.values.close-e.values.open)/e.values.open*100,n=e.values.close-e.values.open,o=n>0;return g("div",{className:w.card,children:[g("div",{className:w.cardHeader,children:[g("h3",{children:e.key}),g("span",{className:o?w.positiveFloatingBadge:w.negativeFloatingBadge,children:[t.toFixed(2),"%"]})]}),g("div",{className:w.cardBody,children:g("div",{className:w.cardBodyContent,children:[g("span",{className:w.stockPrice,children:["$",Number(e.values.close).toFixed(2).replace(".",",")]}),g("span",{className:o?w.positiveNumber:w.negativeNumber,children:[o?"+":"-",n.toFixed(2)]}),g(Re,{isPositive:o})]})}),g("div",{className:w.cardFooter,children:["Updated at ",new Date().toLocaleString()]})]})},We={container:"container"},je="IBM",qe=6e4,Oe="https://www.alphavantage.co",Ve={get:async(e,t)=>{const n=new URLSearchParams(t?.params),o=`${Oe}${e}${n.toString()?`?${n.toString()}`:""}`,i=await fetch(o,{headers:{"Content-Type":"application/json"}});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return{data:await i.json()}}};var W,m,Z,ye,ee=0,ke=[],y=p,be=y.__b,xe=y.__r,we=y.diffed,Se=y.__c,$e=y.unmount,Ne=y.__;function Fe(e,t){y.__h&&y.__h(m,e,ee||t),ee=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Be(e){return ee=1,Ge(Pe,e)}function Ge(e,t,n){var o=Fe(W++,2);if(o.t=e,!o.__c&&(o.__=[Pe(void 0,t),function(a){var l=o.__N?o.__N[0]:o.__[0],c=o.t(l,a);l!==c&&(o.__N=[c,o.__[1]],o.__c.setState({}))}],o.__c=m,!m.__f)){var i=function(a,l,c){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(f){return!!f.__c});if(u.every(function(f){return!f.__N}))return!_||_.call(this,a,l,c);var r=o.__c.props!==a;return u.forEach(function(f){if(f.__N){var d=f.__[0];f.__=f.__N,f.__N=void 0,d!==f.__[0]&&(r=!0)}}),_&&_.call(this,a,l,c)||r};m.__f=!0;var _=m.shouldComponentUpdate,s=m.componentWillUpdate;m.componentWillUpdate=function(a,l,c){if(this.__e){var u=_;_=void 0,i(a,l,c),_=u}s&&s.call(this,a,l,c)},m.shouldComponentUpdate=i}return o.__N||o.__}function Ye(e,t){var n=Fe(W++,3);!y.__s&&Qe(n.__H,t)&&(n.__=e,n.u=t,m.__H.__h.push(n))}function Je(){for(var e;e=ke.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(j),e.__H.__h.forEach(te),e.__H.__h=[]}catch(t){e.__H.__h=[],y.__e(t,e.__v)}}y.__b=function(e){m=null,be&&be(e)},y.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ne&&Ne(e,t)},y.__r=function(e){xe&&xe(e),W=0;var t=(m=e.__c).__H;t&&(Z===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(j),t.__h.forEach(te),t.__h=[],W=0)),Z=m},y.diffed=function(e){we&&we(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ke.push(t)!==1&&ye===y.requestAnimationFrame||((ye=y.requestAnimationFrame)||Ke)(Je)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Z=m=null},y.__c=function(e,t){t.some(function(n){try{n.__h.forEach(j),n.__h=n.__h.filter(function(o){return!o.__||te(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],y.__e(o,n.__v)}}),Se&&Se(e,t)},y.unmount=function(e){$e&&$e(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{j(o)}catch(i){t=i}}),n.__H=void 0,t&&y.__e(t,n.__v))};var Ce=typeof requestAnimationFrame=="function";function Ke(e){var t,n=function(){clearTimeout(o),Ce&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);Ce&&(t=requestAnimationFrame(n))}function j(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function te(e){var t=m;e.__c=e.__(),m=t}function Qe(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Pe(e,t){return typeof t=="function"?t(e):t}const E=e=>Number.parseFloat(e),Xe=async({symbol:e,apikey:t})=>{if(!e||!t)throw new Error("Symbol and API key are required");return(await Ve.get("/query",{params:{function:"TIME_SERIES_INTRADAY",symbol:e,interval:"5min",apikey:t}})).data},Ze=({symbol:e=je,pollingInterval:t=qe,apikey:n})=>{const[o,i]=Be(!1),[_,s]=Be(new Map);return Ye(()=>{let a=!0;const l=async()=>{try{i(!0);const u=await Xe({symbol:e,apikey:n});if(!a)return;const r=u["Time Series (5min)"],f=Object.values(r);if(!f.length)return;const d=f[f.length-1],k=u["Meta Data"]["2. Symbol"]??e;s(new Map().set(k,{open:E(d["1. open"]),close:E(d["4. close"]),high:E(d["2. high"]),low:E(d["3. low"]),volume:E(d["5. volume"])}))}catch(u){console.error("Failed to fetch stocks",u)}finally{i(!1)}};l();const c=window.setInterval(l,t);return()=>{a=!1,window.clearInterval(c)}},[e,t,n]),{stocks:_,isLoading:o}},et=({symbol:e,apikey:t,refreshInterval:n})=>{const{stocks:o,isLoading:i}=Ze({symbol:e,apikey:t,pollingInterval:n});return i?g("div",{children:"Loading stocks..."}):g("div",{className:We.container,children:Array.from(o).map(_=>g(ze,{stock:{key:_[0],values:_[1]}},_[0]))})},tt={container:"container"},ne={container:"container",title:"title",description:"description"},nt=({title:e,description:t})=>g("div",{className:ne.container,children:[g("h1",{className:ne.title,children:e}),g("p",{className:ne.description,children:t})]}),ot=({symbol:e,apikey:t,refreshInterval:n})=>g("div",{className:tt.container,children:[g(nt,{title:"R2Stocks Widget",description:`Tracking ${e} in real time.`}),g(et,{symbol:e,apikey:t,refreshInterval:n})]}),rt=({symbol:e,apikey:t,refreshInterval:n})=>g(ot,{symbol:e,apikey:t,refreshInterval:n}),_t=`.card {
  width: 350px;
  height: fit-content;
  background-color: var(--stocks-bg-color);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  border: 1px solid var(--stocks-border-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
}

.cardHeader {
  margin-bottom: 8px;
  border-radius: 6px 6px 0 0;
  color: var(--stocks-text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cardHeader h3 {
  margin: 0;
  color: var(--stocks-text-color);
  font-size: 28px;
}

.cardBody {
  color: var(--stocks-text-color);
}

.cardBody p {
  margin: 0;
  color: var(--stocks-text-color);
}

.cardBody p.positive {
  color: var(--stocks-positive-color);
}

.cardBody p.negative {
  color: var(--stocks-negative-color);
}

.cardFooter {
  color: var(--stocks-text-secondary);
  font-size: 14px;
}

.positiveFloatingBadge {
  background-color: var(--stocks-positive-color);
  color: var(--stocks-text-color);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-left: 8px;
}

.negativeFloatingBadge {
  background-color: var(--stocks-negative-color);
  color: var(--stocks-text-color);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-left: 8px;
}

.cardBodyContent {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.positiveNumber {
  color: var(--stocks-positive-color);
}

.negativeNumber {
  color: var(--stocks-negative-color);
}

.stockPrice {
  font-size: 24px;
  font-weight: 600;
}
`,it=`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
`,ct=`.container {
  color: var(--stocks-text-color);
}

.title {
  color: var(--stocks-text-color);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

.description {
  color: var(--stocks-text-secondary);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}
`,st=`.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
`,at=`.chartContainer {
  width: 100%;
  height: 100px;
  margin: 16px 0;
  overflow: hidden;
}

.chartContainer svg {
  width: 100%;
  height: 100%;
}
`,lt=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
  }
  
  :host {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .widget-root {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background: linear-gradient(135deg,#2c9aff15 0%,var(--stocks-bg-color) 50%,var(--stocks-bg-color) 100%);
  }
`,dt=`
  :host {
    --primary-color: #2c9aff;
    --background-dark: #161616;
    --text-color: rgba(255, 255, 255, 0.87);
    --stocks-positive-color: #34c759;
    --stocks-negative-color: #ff3b30;
    --stocks-bg-color: #1c1c1e;
    --stocks-text-color: #ffffff;
    --stocks-text-secondary: #98989d;
    --stocks-border-color: #38383a;
    color-scheme: dark;
    color: var(--text-color);
  }
`,ut=`
  :host {
    --primary-color: #2c9aff;
    --background-dark: #f5f5f7;
    --text-color: rgba(0, 0, 0, 0.87);
    --stocks-positive-color: #34c759;
    --stocks-negative-color: #ff3b30;
    --stocks-bg-color: #ffffff;
    --stocks-text-color: #000000;
    --stocks-text-secondary: #6e6e73;
    --stocks-border-color: #d2d2d7;
    color-scheme: light;
    color: var(--text-color);
  }
`;function ft(e){return`
    ${lt}
    ${e==="light"?ut:dt}
    ${_t}
    ${it}
    ${ct}
    ${st}
    ${at}
  `}function pt(e){const{containerId:t,symbol:n,apikey:o,refreshInterval:i=6e4,theme:_}=e;return new Promise((s,a)=>{const l=document.getElementById(t);if(!l){a(new Error(`Container with id "${t}" not found`));return}const c=l.shadowRoot??l.attachShadow({mode:"open"}),u=document.createElement("style");u.textContent=ft(_),c.innerHTML="",c.appendChild(u);const r=document.createElement("div");r.className="widget-root",c.appendChild(r);try{Me(g(rt,{symbol:n,apikey:o,refreshInterval:i}),r),requestAnimationFrame(()=>s())}catch(f){a(f)}})}window.StocksSnapshot={init:pt}})();

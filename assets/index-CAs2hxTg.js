(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=.05,t=[`hearth`,`rime`],n={hearth:`Hearthguard`,rime:`Rimeborn`},r={settler:{hp:60,damage:4,range:1.3,cooldown:1.2,speed:3.2,ranged:!1,sight:0,label:{hearth:`Settler`,rime:`Thrall`}},shieldbearer:{hp:150,damage:15,range:1.9,cooldown:1.1,speed:3.5,ranged:!1,sight:8,label:{hearth:`Shieldbearer`,rime:`Icebreaker`}},hunter:{hp:90,damage:11,range:9,cooldown:1.5,speed:3.4,ranged:!0,sight:10,label:{hearth:`Hunter`,rime:`Spearthrower`}},warden:{hp:170,damage:6,range:1.6,cooldown:1.3,speed:3.5,ranged:!1,sight:6,label:{hearth:`Warden`,rime:`Frostcaller`}}},i=e=>({hearth:e,rime:e}),a={hall:{hp:1600,timber:250,emberstone:150,buildTime:35,size:4,label:i(`Hall`),depot:!0,housing:5,trains:[`settler`]},cottage:{hp:650,timber:60,emberstone:0,buildTime:14,size:3,label:{hearth:`Cottage`,rime:`Hut`},depot:!1,housing:5,trains:[]},barracks:{hp:900,timber:150,emberstone:50,buildTime:22,size:4,label:i(`Barracks`),depot:!1,housing:0,trains:[`shieldbearer`,`warden`]},lodge:{hp:900,timber:125,emberstone:100,buildTime:22,size:4,label:i(`Lodge`),depot:!1,housing:0,trains:[`hunter`]},forge:{hp:700,timber:100,emberstone:150,buildTime:20,size:3,label:i(`Forge`),depot:!1,housing:0,trains:[]},brazier:{hp:300,timber:40,emberstone:0,buildTime:8,size:2,label:{hearth:`Brazier`,rime:`Ice Shrine`},depot:!1,housing:0,trains:[]}},o=[`cottage`,`barracks`,`lodge`,`forge`,`brazier`,`hall`],s={settler:{timber:50,emberstone:0,time:8},shieldbearer:{timber:60,emberstone:30,time:10},hunter:{timber:50,emberstone:40,time:11},warden:{timber:80,emberstone:50,time:14}},c={timberTime:2.2,emberstoneTime:1.6,load:10,standAmount:1200,seamAmount:1500,treeAmount:50,treeSearch:10},l={hall:9,brazier:7,warden:4},u={max:100,buildPerSecond:2,recoverPerSecond:12,penalty:.7,burnPerSecond:1},d={max:40,burnPerSecond:.25,trip:20,refuelTime:1.5},f={first:160,calm:140,jitter:20,duration:30,sight:.6,chill:2,rimeSpeed:1.15},p=1.25,m={radius:9,thrallSpeed:1.25},h={healRadius:5,heal:6,healEvery:2,frostRange:7,frostRadius:3.5,frostEvery:6,frostFor:3,frostSlow:.6},g=.35,_={base:6,max:40},v={timber:100,emberstone:150,damage:1.3,hp:1.15};function y(e,t){return r[e].label[t]}function b(e,t){return a[e].label[t]}function x(e){let t=e+1831565813|0,n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),[t,((n^n>>>14)>>>0)/4294967296]}function S(e){let[t,n]=x(e.rngState);return e.rngState=t,n}function C(e){let t=e|0;return()=>{let[e,n]=x(t);return t=e,n}}var w=[{id:`frostvein`,name:`Frostvein`,flavour:`A frozen river splits the valley. Hold the fords.`},{id:`glassmere`,name:`Glassmere`,flavour:`A great frozen lake, emberstone glowing on its islands.`},{id:`needlewood`,name:`Needlewood`,flavour:`A maze of snowbound pines. Every clearing is a fight.`},{id:`highpass`,name:`Cinder Pass`,flavour:`Two plateaus and one narrow pass between the cliffs.`}],T=`frostvein`;function E(e){return w.some(t=>t.id===e)}var D={hearth:{x:-16,z:22},rime:{x:16,z:-22}},O=96,k=O/2,A={x:32/Math.hypot(32,44),z:-44/Math.hypot(32,44)},j={x:-A.z,z:A.x};function M(e,t){return{x:e*A.x+t*j.x,z:e*A.z+t*j.z}}function N(e,t){return{a:e*A.x+t*A.z,b:e*j.x+t*j.z}}var ee=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)};function te(e){let t=(t,n)=>{let r=Math.imul(t,374761393)^Math.imul(n,668265263)^Math.imul(e,1442695041);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296};return(e,n)=>{let r=Math.floor(e),i=Math.floor(n),a=e-r,o=n-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=t(r,i)+(t(r+1,i)-t(r,i))*s;return l+(t(r,i+1)+(t(r+1,i+1)-t(r,i+1))*s-l)*c}}function P(e,t){let n=te(e);return(e,r)=>.5*(n(e/t+50,r/t+50)+n(-e/t+50,-r/t+50))}function ne(e,t,n,r){let i=r.x-n.x,a=r.z-n.z,o=Math.max(0,Math.min(1,((e-n.x)*i+(t-n.z)*a)/(i*i+a*a||1)));return Math.hypot(e-n.x-i*o,t-n.z-a*o)}function re(e){let t=C(e*7+11),n=3+t()*2.5,r=.08+t()*.04,i=P(e+1,9),a=P(e+2,6),o=P(e+3,2.5),s=(e,t)=>{let{a:i,b:a}=N(e,t);return Math.abs(i-n*Math.sin(a*r))};return{height(e,t){let{a:n}=N(e,t);return 0+(.5+1.4*ee(8,40,Math.abs(n))+(i(e,t)-.5)*1.6-0)*ee(2.6,7,s(e,t))},tile(e,t){let n=s(e,t);return n<3?{ice:!0}:n<4.6?{rock:o(e,t)>.3}:{pine:a(e,t)>.64&&n>7,rock:i(e,t)>.72&&a(e,t)<.3}},routes:[[D.hearth,M(-12,2),M(0,0)],[D.hearth,M(-20,-16),M(-6,-30),M(10,-32)]],resources:[{kind:`emberstone`,at:M(-7,9)},{kind:`emberstone`,at:M(-6,-31)},{kind:`timber`,at:M(-14,-24)},{kind:`timber`,at:M(-20,18)}],centreSeam:!0}}function ie(e){let t=C(e*7+23),n=P(e+4,7),r=P(e+5,5),i=P(e+6,2),a=15+t()*2,o=[{x:0,z:0},M(0,-10),M(0,10)],s=(e,t)=>Math.hypot(e,t)-(a+(n(e,t)-.5)*9),c=(e,t)=>Math.min(...o.map(n=>Math.hypot(e-n.x,t-n.z)));return{height(e,t){let n=.4+1.8*ee(0,24,s(e,t))+(r(e,t)-.5)*.8,i=.35*(1-ee(2.4,4,c(e,t)));return s(e,t)<0?0+i:0+(n-0)*ee(0,4,s(e,t))},tile(e,t){let n=s(e,t),a=c(e,t);if(n<0&&a>3.2)return{ice:!0};if(n<0)return{rock:a>2.5&&i(e,t)>.55};if(n<1.6)return{rock:i(e,t)>.68};let o=Math.max(Math.abs(e),Math.abs(t))>43;return{pine:r(e,t)>.62&&n>5||o}},routes:[[D.hearth,M(-14,0)],[D.hearth,M(-22,-14),M(-8,-30),M(8,-30)],[D.hearth,M(-26,12),M(-10,28),M(10,30)]],resources:[{kind:`emberstone`,at:M(0,-10)},{kind:`timber`,at:M(-14,-26)},{kind:`timber`,at:M(-26,18)}],centreSeam:!0}}function ae(e){let t=P(e+7,11),n=P(e+8,4),r=P(e+9,6),i=P(e+10,12);return{height:(e,t)=>.6+(i(e,t)-.5)*2.4,tile(e,i){if(Math.hypot(e,i)<7)return{};let a=Math.abs(t(e,i)*5%1-.5),o=Math.max(Math.abs(e),Math.abs(i))>44;return r(e,i)>.74?{ice:!0}:{pine:o||a<.13&&n(e,i)>.28,rock:a<.03&&n(e,i)<.2}},routes:[[D.hearth,M(-12,6),M(-4,-2),M(0,0)],[D.hearth,M(-24,-10),M(-10,-24),M(6,-30)],[D.hearth,M(-8,22),M(4,26)]],resources:[{kind:`emberstone`,at:M(-4,8)},{kind:`timber`,at:M(-14,-16)},{kind:`timber`,at:M(-4,20)},{kind:`timber`,at:M(-22,12)}],centreSeam:!0}}function oe(e){let t=P(e+11,5),n=P(e+12,3),r=P(e+13,10),i=M(-15,-20),a=(e,t)=>Math.min(Math.hypot(e-i.x,t-i.z),Math.hypot(e+i.x,t+i.z))-4-n(e,t)*2,o=e=>Math.abs(e)<3||Math.abs(e)>36;return{height(e,t){let{a:n,b:i}=N(e,t),o=2.4*Math.exp(-(n*n)/50)*(1-.8*Math.exp(-(i*i)/30));return 0+(.9+.5*ee(10,30,Math.abs(n))+(r(e,t)-.5)*1.2+o-0)*ee(-1,2.5,a(e,t))},tile(e,r){let{a:i,b:s}=N(e,r);return a(e,r)<0?{ice:!0}:Math.abs(i)<5+n(e,r)*2&&!o(s)||Math.abs(i)<8&&!o(s)&&n(e,r)>.55?{rock:!0}:{pine:t(e,r)>.63&&Math.abs(i)>9,rock:n(e,r)>.8}},routes:[[D.hearth,M(-12,1),M(0,0)],[D.hearth,M(-18,-26),M(-8,-40),M(10,-40)]],resources:[{kind:`emberstone`,at:M(-9,6)},{kind:`emberstone`,at:M(-9,-42)},{kind:`timber`,at:M(-22,-12)},{kind:`timber`,at:M(-26,14)}],centreSeam:!1}}var se={frostvein:re,glassmere:ie,needlewood:ae,highpass:oe},ce=e=>e-k+.5,le=e=>O*O-1-e;function ue(e,t){let n=e===`timber`?4:2;return{tx:Math.round(t.x+k-n/2),tz:Math.round(t.z+k-n/2)}}function de(e){let t=e.kind===`timber`?4:2;return{kind:e.kind,tx:O-e.tx-t,tz:O-e.tz-t}}function fe(e,t){let n=se[e](t),r=new Uint8Array(O*O),i=new Uint8Array(O*O),a=new Uint8Array(O*O),o=new Uint8Array(O*O),s=new Uint8Array(O*O);for(let e=0;e<O;e++)for(let t=0;t<O;t++){let i=e*O+t,s=n.tile(ce(t),ce(e));r[i]=+!!s.ice,o[i]=+!!s.rock,a[i]=s.pine&&!s.rock&&!s.ice?1:0,(t===0||e===0||t===O-1||e===O-1)&&(a[i]=+!r[i])}let c=n.routes.flatMap(e=>[e,e.map(e=>({x:-e.x,z:-e.z}))]),l=[];for(let e of n.resources){let t={kind:e.kind,...ue(e.kind,e.at)};l.push(t,de(t))}n.centreSeam&&l.push({kind:`emberstone`,tx:k-1,tz:k-1});for(let e=0;e<O;e++)for(let t=0;t<O;t++){let n=e*O+t,a=ce(t),o=ce(e),u=1/0;for(let e of c)for(let t=1;t<e.length;t++)u=Math.min(u,ne(a,o,e[t-1],e[t]));u<1.3&&!r[n]&&(i[n]=1);let d=Math.min(...Object.values(D).map(e=>Math.hypot(a-e.x,o-e.z))),f=l.some(n=>{let r=n.kind===`timber`?4:2;return t>=n.tx-2&&t<n.tx+r+2&&e>=n.tz-2&&e<n.tz+r+2});(u<2.6||d<13||f)&&(s[n]=1),d<13&&!f&&(r[n]=0)}for(let e=0;e<O*O;e++)s[e]&&(a[e]=o[e]=0);for(let e=0;e<O*O/2;e++){let t=le(e);r[e]=r[t],i[e]=i[t],a[e]=a[t],o[e]=o[t]}return pe(r,a,o,l),{id:e,size:O,heights:me(n,r),ice:r,path:i,pine:a,rock:o,resources:l}}function pe(e,t,n,r){let i=new Uint8Array(O*O);for(let e=0;e<O*O;e++)i[e]=t[e]|n[e];for(let e of r)if(e.kind===`emberstone`)for(let t=e.tz;t<e.tz+2;t++)for(let n=e.tx;n<e.tx+2;n++)i[t*O+n]=1;let a=new Uint8Array(O*O),o=Math.floor(D.hearth.z+k+3)*O+Math.floor(D.hearth.x+k),s=[o];for(a[o]=1;s.length;){let e=s.pop(),t=e%O,n=(e-t)/O;for(let[e,r]of[[1,0],[-1,0],[0,1],[0,-1]]){let o=t+e,c=n+r;if(o<0||c<0||o>=O||c>=O)continue;let l=c*O+o;a[l]||i[l]||(a[l]=1,s.push(l))}}for(let r=0;r<O*O;r++)a[r]||i[r]||(e[r]?n[r]=1:t[r]=1)}function me(e,t){let n=O*2+1,r=new Float32Array(n*n);for(let t=0;t<n;t++)for(let i=0;i<n;i++){let a=i/2-k,o=t/2-k,s=.5*(e.height(a,o)+e.height(-a,-o)),c=ee(9,15,Math.min(...Object.values(D).map(e=>Math.hypot(a-e.x,o-e.z))));s=.7*(1-c)+s*c,r[t*n+i]=s}for(let e=0;e<2;e++){let e=new Float32Array(n*n);for(let t=0;t<n;t++)for(let i=0;i<n;i++){let a=0,o=0;for(let e=-1;e<=1;e++)for(let s=-1;s<=1;s++){let c=i+s,l=t+e;c<0||l<0||c>=n||l>=n||(a+=r[l*n+c],o++)}e[t*n+i]=a/o}r=e}let i=e=>{let t=Math.floor(e/2);return(e%2==0?[t-1,t]:[t]).filter(e=>e>=0&&e<O)};for(let e=0;e<n;e++){let a=i(e);for(let o=0;o<n;o++){let s=i(o);a.every(e=>s.every(n=>t[e*O+n]===1))&&(r[e*n+o]=0)}}return r}function he(){let e=O*2+1;return{map:T,ice:new Uint8Array(O*O),path:new Uint8Array(O*O),heights:new Float32Array(e*e)}}function ge(e,t,n){return t>=0&&n>=0&&t<e.size&&n<e.size&&e.terrain.ice[n*e.size+t]===1}function _e(e,t,n){return ve(e.terrain.heights,e.size,t,n)}function ve(e,t,n,r){let i=t*2+1,a=Math.max(0,Math.min(i-1.001,(n+t/2)*2)),o=Math.max(0,Math.min(i-1.001,(r+t/2)*2)),s=Math.floor(a),c=Math.floor(o),l=a-s,u=o-c,d=e[c*i+s],f=e[c*i+s+1],p=e[(c+1)*i+s],m=e[(c+1)*i+s+1];return(d+(f-d)*l)*(1-u)+(p+(m-p)*l)*u}function ye(e,t,n){let r=Math.imul(e+1,73856093)^Math.imul(t+1,19349663)^Math.imul(n,83492791);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)%1e3}function be(e,t,n){let r=e.size/2;return{tx:Math.floor(t+r),tz:Math.floor(n+r)}}function xe(e,t,n){let r=e.size/2;return{x:t-r+.5,z:n-r+.5}}function Se(e,t,n){return t>=0&&n>=0&&t<e.size&&n<e.size}function F(e,t,n){return!Se(e,t,n)||e.blocked[n*e.size+t]!==0}function Ce(e,t,n,r,i,a){for(let o=n;o<n+i;o++)for(let n=t;n<t+r;n++)Se(e,n,o)&&(e.blocked[o*e.size+n]=a)}function I(e,t){let n=e.size/2;return{x:t.tx-n+t.w/2,z:t.tz-n+t.d/2}}function we(e,t,n,r){let i=e.size/2,a=t.tx-i,o=t.tz-i,s=Math.max(a-n,0,n-(a+t.w)),c=Math.max(o-r,0,r-(o+t.d));return Math.hypot(s,c)}function L(e,t,n,r){let i=a[t].size,o=e.size/2;return{tx:Math.round(n+o-i/2),tz:Math.round(r+o-i/2)}}function Te(e,t,n,r){return R(e,t,n,r)===null}function R(e,t,n,r){let i=a[t].size;for(let t=r-1;t<r+i+1;t++)for(let r=n-1;r<n+i+1;r++)if(F(e,r,t))return`Something is in the way`;for(let t=r;t<r+i;t++)for(let r=n;r<n+i;r++)if(ge(e,r,t))return`Cannot build on ice`;let o={tx:n,tz:r,w:i,d:i};for(let t of e.resources)if(z(o,t,1))return`Too close to a resource`;for(let t of e.units)if(we(e,o,t.x,t.z)===0)return`Units are standing there`;return null}function z(e,t,n){return e.tx-n<t.tx+t.w&&t.tx<e.tx+e.w+n&&e.tz-n<t.tz+t.d&&t.tz<e.tz+e.d+n}function Ee(e,t,n,r){let i=null,a=1/0;for(let o=t.tz-1;o<=t.tz+t.d;o++)for(let s=t.tx-1;s<=t.tx+t.w;s++){if(s!==t.tx-1&&o!==t.tz-1&&s!==t.tx+t.w&&o!==t.tz+t.d||F(e,s,o))continue;let c=xe(e,s,o),l=Math.hypot(c.x-n,c.z-r);l<a&&(a=l,i=c)}return i??I(e,t)}function De(e,t,n,r,i){let a=Math.hypot(r-t,i-n),o=Math.ceil(a/.25);for(let a=1;a<o;a++){let s=a/o,{tx:c,tz:l}=be(e,t+(r-t)*s,n+(i-n)*s);if(F(e,c,l))return!1}return!0}function Oe(e,t,n){if(!F(e,t,n))return{tx:t,tz:n};for(let r=1;r<e.size;r++)for(let i=-r;i<=r;i++)for(let a=-r;a<=r;a++)if(Math.max(Math.abs(a),Math.abs(i))===r&&!F(e,t+a,n+i))return{tx:t+a,tz:n+i};return{tx:t,tz:n}}function ke(e,t,n,r,i){if(De(e,t,n,r,i))return[{x:r,z:i}];let a=e.size,o=be(e,t,n),s=be(e,r,i),c=Oe(e,s.tx,s.tz),l=Oe(e,o.tx,o.tz),u=l.tz*a+l.tx,d=c.tz*a+c.tx,f=new Float32Array(a*a).fill(1/0),p=new Int32Array(a*a).fill(-1),m=new Uint8Array(a*a),h=new Me;f[u]=0,h.push(u,je(l.tx,l.tz,c.tx,c.tz));let g=!1,_=0;for(;h.size>0&&_<6e3;){let t=h.pop();if(m[t])continue;if(m[t]=1,_++,t===d){g=!0;break}let n=t%a,r=(t-n)/a;for(let i=-1;i<=1;i++)for(let o=-1;o<=1;o++){if(o===0&&i===0)continue;let s=n+o,l=r+i;if(F(e,s,l)||o!==0&&i!==0&&(F(e,n+o,r)||F(e,n,r+i)))continue;let u=l*a+s,d=f[t]+(o!==0&&i!==0?Math.SQRT2:1);d<f[u]&&(f[u]=d,p[u]=t,h.push(u,d+je(s,l,c.tx,c.tz)))}}if(!g)return[{x:r,z:i}];let v=[];for(let t=d;t!==-1&&t!==u;t=p[t])v.push(xe(e,t%a,Math.floor(t/a)));return v.reverse(),s.tx===c.tx&&s.tz===c.tz&&(v[v.length-1]={x:r,z:i}),Ae(e,t,n,v)}function Ae(e,t,n,r){let i=[],a={x:t,z:n},o=0;for(;o<r.length;){let t=r.length-1;for(;t>o&&!De(e,a.x,a.z,r[t].x,r[t].z);)t--;i.push(r[t]),a=r[t],o=t+1}return i}function je(e,t,n,r){let i=Math.abs(e-n),a=Math.abs(t-r);return Math.max(i,a)+(Math.SQRT2-1)*Math.min(i,a)}var Me=class{items=[];keys=[];get size(){return this.items.length}push(e,t){this.items.push(e),this.keys.push(t);let n=this.items.length-1;for(;n>0;){let e=n-1>>1;if(this.keys[e]<=this.keys[n])break;this.swap(n,e),n=e}}pop(){let e=this.items[0],t=this.items.pop(),n=this.keys.pop();if(this.items.length>0){this.items[0]=t,this.keys[0]=n;let e=0;for(;;){let t=e*2+1,n=t+1,r=e;if(t<this.items.length&&this.keys[t]<this.keys[r]&&(r=t),n<this.items.length&&this.keys[n]<this.keys[r]&&(r=n),r===e)break;this.swap(e,r),e=r}}return e}swap(e,t){[this.items[e],this.items[t]]=[this.items[t],this.items[e]],[this.keys[e],this.keys[t]]=[this.keys[t],this.keys[e]]}};function Ne(e,t){return{seed:e,scenario:t,terrain:he(),size:96,time:0,tick:0,phase:`playing`,nextId:1,rngState:e|0,teams:{hearth:{timber:0,emberstone:0,upgraded:!1,kills:0,losses:0,stats:Pe()},rime:{timber:0,emberstone:0,upgraded:!1,kills:0,losses:0,stats:Pe()}},units:[],buildings:[],resources:[],trees:[],obstacles:[],projectiles:[],blocked:new Uint8Array(9216),weather:{blizzard:!1,nextChange:f.first},ai:{thinkTimer:0,graceUntil:240,waveSize:4,wavesSent:0,attackers:[]},aiEnabled:{hearth:!1,rime:!0},player:`hearth`,events:[]}}function Pe(){return{trained:0,unitsLost:0,timber:0,emberstone:0,built:0,buildingsLost:0}}function Fe(e){return e===`hearth`?`rime`:`hearth`}function Ie(e,t,n,r,i){let a=Le(e,t,n),o={id:e.nextId++,team:t,kind:n,x:r,z:i,facing:t===`hearth`?Math.PI:0,hp:a,maxHp:a,order:{type:`idle`},path:[],cooldown:0,carrying:null,anim:`idle`,lastAttackerId:null,repathTimer:0,chill:0,slowUntil:0,pulseTimer:0};return e.units.push(o),o}function Le(e,t,n){return Math.round(r[n].hp*(e.teams[t].upgraded?v.hp:1))}function Re(e,t,n,r,i,o=1){let s=a[n],c={id:e.nextId++,team:t,kind:n,tx:r,tz:i,w:s.size,d:s.size,hp:o>=1?s.hp:Math.max(1,Math.round(s.hp*.1)),maxHp:s.hp,progress:o,training:null,queue:[],lastAttackerId:null,fuel:n===`brazier`&&t===`hearth`?d.max:0,rally:null};return e.buildings.push(c),Ce(e,r,i,s.size,s.size,1),c}function ze(e,t,n,r){let i=t===`timber`?4:2,a=t===`timber`?c.standAmount:c.seamAmount,o={id:e.nextId++,kind:t,tx:n,tz:r,w:i,d:i,amount:a,max:a};return e.resources.push(o),t===`emberstone`&&Ce(e,n,r,i,i,2),o}function Be(e,t,n,r,i){e.obstacles.push({kind:t,tx:n,tz:r,seed:i}),Ce(e,n,r,1,1,2)}function Ve(e,t,n){let r=c.treeAmount,i={id:e.nextId++,kind:`timber`,tx:t,tz:n,w:1,d:1,amount:r,max:r,tree:!0};return e.trees.push(i),i}function He(e,t){return!F(e,t.tx-1,t.tz)||!F(e,t.tx+1,t.tz)||!F(e,t.tx,t.tz-1)||!F(e,t.tx,t.tz+1)}function Ue(e,t,n,r=1/0){let i,a=r;for(let r of e.trees){if(r.amount<c.load)continue;let o=I(e,r),s=Math.hypot(o.x-t,o.z-n);s<a&&He(e,r)&&(a=s,i=r)}return i}function We(e,t){e.trees=e.trees.filter(e=>e!==t),e.obstacles=e.obstacles.filter(e=>e.tx!==t.tx||e.tz!==t.tz),Ce(e,t.tx,t.tz,1,1,0),Qe(e,{type:`felled`,tx:t.tx,tz:t.tz});let n=I(e,t),r=Ue(e,n.x,n.z,c.treeSearch);for(let n of e.units)n.order.type===`gather`&&n.order.resourceId===t.id&&r&&(n.order.resourceId=r.id,n.order.phase===`working`&&(n.order.phase=`toSource`))}function Ge(e,t){return e.units.find(e=>e.id===t)}function Ke(e,t){return e.buildings.find(e=>e.id===t)}function qe(e,t){return e.resources.find(e=>e.id===t)??e.trees.find(e=>e.id===t)}function Je(e,t){return I(e,t)}function Ye(e,t){return e.units.filter(e=>e.team===t).length}function Xe(e,t){let n=_.base;for(let r of e.buildings)r.team===t&&r.progress>=1&&(n+=a[r.kind].housing);return Math.min(_.max,n)}function Ze(e,t,n,r){let i,o=1/0;for(let s of e.buildings){if(s.team!==t||s.progress<1||!a[s.kind].depot)continue;let c=Je(e,s),l=Math.hypot(c.x-n,c.z-r);l<o&&(o=l,i=s)}return i}function Qe(e,t){e.events.push(t)}function $e(e){return e.team!==`hearth`||e.progress<1?0:e.kind===`hall`?l.hall:e.kind===`brazier`&&e.fuel>0?l.brazier:0}function et(e,t,n){for(let r of e.buildings){let i=$e(r);if(i>0&&we(e,r,t,n)<=i)return!0}for(let r of e.units)if(r.team===`hearth`&&r.kind===`warden`&&Math.hypot(r.x-t,r.z-n)<=l.warden)return!0;return!1}function tt(e,t,n){return e.buildings.some(r=>r.team===`rime`&&r.kind===`brazier`&&r.progress>=1&&we(e,r,t,n)<=m.radius)}function nt(e){return e.chill>=u.max}function rt(e,t){return t.slowUntil>e.time}function it(e,t){let n=1;return nt(t)&&(n*=u.penalty),rt(e,t)&&(n*=h.frostSlow),Math.max(g,n)}function at(e,t){let n=it(e,t);if(t.team===`rime`){e.weather.blizzard&&(n*=f.rimeSpeed);let r=be(e,t.x,t.z);ge(e,r.tx,r.tz)&&(n*=p),t.kind===`settler`&&tt(e,t.x,t.z)&&(n*=m.thrallSpeed)}return n}function ot(e,t){let n=r[t.kind].sight;return n===0?0:t.team===`rime`&&tt(e,t.x,t.z)?Math.max(n,m.radius):e.weather.blizzard?n*f.sight:n}function st(e){return{blizzard:e.weather.blizzard,seconds:Math.max(0,e.weather.nextChange-e.time)}}function ct(e){return`order`in e}function lt(e,t){return Ge(e,t)??Ke(e,t)}function ut(e,t,n){return ct(n)?Math.max(0,Math.hypot(n.x-t.x,n.z-t.z)-.5):we(e,n,t.x,t.z)}function dt(e,t){return ct(t)?{x:t.x,z:t.z}:I(e,t)}function ft(e,t){return r[t.kind].damage*(e.teams[t.team].upgraded?v.damage:1)}function pt(e,t,n){let i=r[t.kind];t.cooldown=i.cooldown/it(e,t);let a=dt(e,n);if(t.facing=Math.atan2(a.x-t.x,a.z-t.z),!i.ranged){Qe(e,{type:`hit`,team:t.team,x:a.x,z:a.z,melee:!0,targetId:n.id}),ht(e,t,n,ft(e,t));return}let o=t.kind===`warden`?`ember`:`arrow`,s={id:e.nextId++,team:t.team,sourceId:t.id,targetId:n.id,x:t.x,z:t.z,y:1.4,fromX:t.x,fromZ:t.z,damage:ft(e,t),speed:o===`ember`?14:20,kind:o};e.projectiles.push(s),Qe(e,{type:`shot`,team:t.team,x:t.x,z:t.z,kind:o})}function mt(e,t){let n=[];for(let r of e.projectiles){let i=lt(e,r.targetId);if(!i)continue;let a=dt(e,i),o=a.x-r.x,s=a.z-r.z,c=Math.hypot(o,s),l=r.speed*t;if(ct(i)?c<=l+.2:we(e,i,r.x,r.z)<=l){Qe(e,{type:`hit`,team:r.team,x:a.x,z:a.z,melee:!1,targetId:i.id}),ht(e,Ge(e,r.sourceId)??null,i,r.damage,r.team);continue}r.x+=o/c*l,r.z+=s/c*l;let u=Math.max(.01,Math.hypot(a.x-r.fromX,a.z-r.fromZ)),d=Math.hypot(r.x-r.fromX,r.z-r.fromZ),f=Math.min(1,d/u);r.y=1.4+Math.sin(f*Math.PI)*Math.min(4,u*.25),n.push(r)}e.projectiles=n}function ht(e,t,n,r,i=t?.team){if(n.hp<=0)return;n.hp-=r,t&&(n.lastAttackerId=t.id);let a=i??Fe(n.team);if(n.hp>0)return;e.teams[a].kills++,e.teams[n.team].losses++;let o=e.teams[n.team].stats;ct(n)?(o.unitsLost++,gt(e,n)):(o.buildingsLost++,_t(e,n))}function gt(e,t){t.hp=0,e.units=e.units.filter(e=>e!==t),Qe(e,{type:`death`,team:t.team,x:t.x,z:t.z,unitKind:t.kind})}function _t(e,t){t.hp=0,e.buildings=e.buildings.filter(e=>e!==t),Ce(e,t.tx,t.tz,t.w,t.d,0);let n=I(e,t);Qe(e,{type:`destroyed`,team:t.team,x:n.x,z:n.z,buildingKind:t.kind})}var vt=.35;function yt(e,t,n,i,a,o=!1){if(Math.hypot(n-t.x,i-t.z)<=vt)return t.path=[],!0;let s=t.path[t.path.length-1];t.repathTimer-=a,(!s||Math.hypot(s.x-n,s.z-i)>(o?1.5:.5))&&t.repathTimer<=0&&(t.path=ke(e,t.x,t.z,n,i),t.repathTimer=.5),t.path.length===0&&(t.path=[{x:n,z:i}]);let c=r[t.kind].speed*at(e,t)*a;for(;c>0&&t.path.length>0;){let e=t.path[0],n=e.x-t.x,r=e.z-t.z,i=Math.hypot(n,r);i<1e-6?t.path.shift():(t.facing=Math.atan2(n,r),i<=c?(t.x=e.x,t.z=e.z,c-=i,t.path.shift()):(t.x+=n/i*c,t.z+=r/i*c,c=0))}return t.anim=t.carrying?`carry`:`walk`,Math.hypot(n-t.x,i-t.z)<=vt}function bt(e,t,n){let r=Fe(t.team),i,a=n;for(let n of e.units){if(n.team!==r)continue;let e=Math.hypot(n.x-t.x,n.z-t.z);e<a&&(a=e,i=n)}if(i)return i;for(let n of e.buildings){if(n.team!==r)continue;let o=we(e,n,t.x,t.z);o<a&&(a=o,i=n)}return i}function xt(e){e.order={type:`idle`},e.path=[]}function St(e,t,n=`timber`){let r,i=1/0;for(let a of[n,n===`timber`?`emberstone`:`timber`]){for(let n of e.resources){if(n.kind!==a||n.amount<c.load)continue;let o=I(e,n),s=Math.hypot(o.x-t.x,o.z-t.z);s<i&&(i=s,r=n)}if(!r&&a===`timber`&&(r=Ue(e,t.x,t.z)),r)break}if(!r)return xt(t);t.order={type:`gather`,resourceId:r.id,phase:`toSource`,timer:0},t.path=[]}function Ct(e,t,n){if(n.kind===`emberstone`||n.tree)return Ee(e,n,t.x,t.z);let r=I(e,n),i=t.id*2.399%(Math.PI*2),a=.6+t.id%3*.45;return{x:r.x+Math.cos(i)*a,z:r.z+Math.sin(i)*a}}function wt(e,t,n){t.cooldown=Math.max(0,t.cooldown-n),(t.anim!==`attack`||t.cooldown<r[t.kind].cooldown-.45)&&(t.anim=`idle`);let i=t.order;switch(i.type){case`idle`:{let n=r[t.kind],i=t.lastAttackerId===null?void 0:lt(e,t.lastAttackerId);if(i&&ut(e,t,i)<Math.max(n.sight,6)){t.order={type:`attack`,targetId:i.id};return}t.lastAttackerId=null;let a=ot(e,t);if(a>0){let n=bt(e,t,a);n&&(t.order={type:`attack`,targetId:n.id})}return}case`move`:if(i.attackMove){let n=bt(e,t,ot(e,t));if(n){t.order={type:`attack`,targetId:n.id},t.path=[];return}}yt(e,t,i.x,i.z,n)&&xt(t);return;case`attack`:{let a=lt(e,i.targetId);if(!a||a.team===t.team)return xt(t);let o=r[t.kind];if(ut(e,t,a)<=o.range){t.path=[];let n=dt(e,a);t.facing=Math.atan2(n.x-t.x,n.z-t.z),t.cooldown<=0&&(pt(e,t,a),t.anim=`attack`);return}let s=ct(a)?a:Ee(e,a,t.x,t.z);yt(e,t,s.x,s.z,n,ct(a));return}case`gather`:return Et(e,t,i,n);case`refuel`:return Tt(e,t,i,n);case`construct`:{let r=Ke(e,i.buildingId);if(!r||r.progress>=1){t.kind===`settler`?St(e,t):xt(t);return}if(we(e,r,t.x,t.z)<=1.1){t.path=[],t.anim=`work`;let n=I(e,r);t.facing=Math.atan2(n.x-t.x,n.z-t.z);return}let a=Ee(e,r,t.x,t.z);yt(e,t,a.x,a.z,n);return}}}function Tt(e,t,n,r){let i=Ke(e,n.buildingId);if(!i||i.progress<1||i.fuel>=d.max)return St(e,t);if(we(e,i,t.x,t.z)>1.1){let n=Ee(e,i,t.x,t.z);yt(e,t,n.x,n.z,r);return}t.path=[],t.anim=`work`;let a=I(e,i);if(t.facing=Math.atan2(a.x-t.x,a.z-t.z),n.timer-=r,n.timer>0)return;let o=e.teams[t.team],s=Math.min(d.trip,d.max-i.fuel,o.timber);s>0?(o.timber-=s,i.fuel+=s):Qe(e,{type:`rejected`,team:t.team,reason:`Need timber to refuel`}),St(e,t)}function Et(e,t,n,r){let i=qe(e,n.resourceId);if(n.phase===`toDepot`||t.carrying&&n.phase!==`working`){n.phase=`toDepot`;let a=Ze(e,t.team,t.x,t.z);if(!a){t.anim=`idle`;return}if(we(e,a,t.x,t.z)<=1.1){let r=t.carrying??`timber`;e.teams[t.team][r]+=c.load,e.teams[t.team].stats[r]+=c.load,Qe(e,{type:`gathered`,team:t.team,resource:r,x:t.x,z:t.z}),t.carrying=null,t.path=[],n.phase=`toSource`,(!i||i.amount<c.load)&&St(e,t,i?.kind??r);return}let o=Ee(e,a,t.x,t.z);yt(e,t,o.x,o.z,r);return}if(!i||i.amount<c.load)return St(e,t,i?.kind??`timber`);if(n.phase===`working`){if(t.anim=`work`,n.timer-=r,n.timer>0)return;i.amount-=c.load,t.carrying=i.kind,i.tree&&i.amount<c.load&&We(e,i),n.phase=`toDepot`,t.path=[];return}let a=Ct(e,t,i);if(yt(e,t,a.x,a.z,r)){n.phase=`working`,n.timer=i.kind===`timber`?c.timberTime:c.emberstoneTime;let r=I(e,i);t.facing=Math.atan2(r.x-t.x,r.z-t.z)}}function Dt(e){let t=e.units,n=.7;for(let e=0;e<t.length;e++){let r=t[e];for(let i=e+1;i<t.length;i++){let e=t[i],a=e.x-r.x,o=e.z-r.z,s=a*a+o*o;if(s>=n*n)continue;let c=Math.sqrt(s)||.01,l=(n-c)*.25,u=s>0?a/c:Math.cos(r.id),d=s>0?o/c:Math.sin(r.id),f=r.anim===`work`||r.anim===`attack`,p=e.anim===`work`||e.anim===`attack`,m=f&&!p?.2:1,h=p&&!f?.2:1;r.x-=u*l*m,r.z-=d*l*m,e.x+=u*l*h,e.z+=d*l*h}}let r=e.size/2-.5;for(let n of t){n.x=Math.max(-r,Math.min(r,n.x)),n.z=Math.max(-r,Math.min(r,n.z));let t=be(e,n.x,n.z);if(F(e,t.tx,t.tz)){let r=Oe(e,t.tx,t.tz),i=xe(e,r.tx,r.tz);n.x+=(i.x-n.x)*.5,n.z+=(i.z-n.z)*.5}}}function Ot(e,t){let n=Oe(e,t.tx+Math.floor(t.w/2),t.tz+t.d);return xe(e,n.tx,n.tz)}function kt(e,t){let n=0,r=0;for(let i of e.units)i.team===t&&i.order.type===`gather`&&(e.resources.find(e=>e.id===i.order.resourceId)?.kind===`emberstone`?r++:n++);return r*1.5<n?`emberstone`:`timber`}function At(e,t,n){let r=t.rally,i=n.kind===`settler`;r&&i&&r.resourceId!==null&&qe(e,r.resourceId)?n.order={type:`gather`,resourceId:r.resourceId,phase:`toSource`,timer:0}:r?n.order={type:`move`,x:r.x,z:r.z,attackMove:!i}:i&&St(e,n,kt(e,t.team))}function jt(e,t){for(let n of e.buildings)n.progress<1?Mt(e,n,t):Nt(e,n,t)}function Mt(e,t,n){let r=0;for(let n of e.units)n.team===t.team&&n.order.type===`construct`&&n.order.buildingId===t.id&&n.anim===`work`&&we(e,t,n.x,n.z)<=1.1&&r++;if(r===0)return;let i=a[t.kind],o=(1+.6*(r-1))/i.buildTime,s=t.progress;t.progress=Math.min(1,t.progress+o*n),t.hp=Math.min(t.maxHp,t.hp+(t.progress-s)*t.maxHp*.9),t.progress>=1&&(t.hp=Math.max(t.hp,Math.round(t.maxHp*.95)),e.teams[t.team].stats.built++,Qe(e,{type:`built`,team:t.team,buildingId:t.id}))}function Nt(e,t,n){if(!t.training){let e=t.queue.shift();if(!e)return;let n=s[e].time;t.training={kind:e,remaining:n,total:n,blocked:!1}}let r=t.training;if(r.remaining=Math.max(0,r.remaining-n),r.remaining>0)return;if(Ye(e,t.team)>=Xe(e,t.team)){r.blocked||Qe(e,{type:`rejected`,team:t.team,reason:`Need more housing`}),r.blocked=!0;return}t.training=null;let i=Ot(e,t),a=Ie(e,t.team,r.kind,i.x,i.z);a.facing=0,At(e,t,a),e.teams[t.team].stats.trained++,Qe(e,{type:`trained`,team:a.team,unitId:a.id,unitKind:a.kind})}var Pt=[`normal`,`weak-rime`,`doomed`,`clash`];function Ft(e,t){return 96-e-t}var It={hall:[30,68],stands:[[22,63],[22,69]],seam:[37,63]};function Lt(e){if(e===`hearth`)return It;let t=(e,t)=>[Ft(e[0],t),Ft(e[1],t)];return{hall:t(It.hall,4),stands:It.stands.map(e=>t(e,4)),seam:t(It.seam,2)}}function Rt(e,t,n,r){let i=Lt(t);for(let t of i.stands)ze(e,`timber`,t[0],t[1]);ze(e,`emberstone`,i.seam[0],i.seam[1]);let a=Re(e,t,`hall`,i.hall[0],i.hall[1]);r&&(a.hp=a.maxHp=r);let o=Ot(e,a);for(let r=0;r<n;r++)St(e,Ie(e,t,`settler`,o.x+(r-(n-1)/2)*.9,o.z+.6),r%3==2?`emberstone`:`timber`)}function zt(e,t){e.terrain={map:t.id,ice:t.ice,path:t.path,heights:t.heights};for(let n of t.resources)ze(e,n.kind,n.tx,n.tz);let n=(t,n)=>F(e,t,n)||e.resources.some(e=>t>=e.tx-1&&t<e.tx+e.w+1&&n>=e.tz-1&&n<e.tz+e.d+1)||e.buildings.some(e=>t>=e.tx-1&&t<e.tx+e.w+1&&n>=e.tz-1&&n<e.tz+e.d+1)||e.units.some(e=>Math.abs(e.x-(t-48+.5))<1.5&&Math.abs(e.z-(n-48+.5))<1.5);for(let r=0;r<96;r++)for(let i=0;i<96;i++){let a=r*96+i,o=t.rock[a]?`rock`:t.pine[a]?`snowPine`:null;o&&!n(i,r)&&Be(e,o,i,r,ye(i,r,e.seed))}for(let t of e.obstacles){let n=t.tx===0||t.tz===0||t.tx===95||t.tz===95;t.kind===`snowPine`&&!n&&Ve(e,t.tx,t.tz)}}function Bt(e=`normal`,n=1,r=T,i=`hearth`){let a=Ne(n,e);if(a.player=i,a.aiEnabled={[i]:!1,[Fe(i)]:!0},e===`weak-rime`){Rt(a,`hearth`,4),a.teams.hearth.timber=160,a.teams.hearth.emberstone=80;let e=Re(a,`rime`,`hall`,46,36);e.hp=e.maxHp=260;let t=Ot(a,e);Ie(a,`rime`,`settler`,t.x,t.z),a.ai.graceUntil=9999}else if(e===`doomed`){Rt(a,`hearth`,1,120),Rt(a,`rime`,4);for(let e=0;e<8;e++)Ie(a,`rime`,e<5?`shieldbearer`:`hunter`,-12+e%4*1.2,12+Math.floor(e/4)*1.2);a.ai.graceUntil=0,a.ai.waveSize=1}else if(e===`clash`)Rt(a,`hearth`,4),Rt(a,`rime`,4),[`shieldbearer`,`shieldbearer`,`hunter`,`warden`,`shieldbearer`,`hunter`].forEach((e,t)=>{Ie(a,`hearth`,e,-3+t%3*1.4,5+Math.floor(t/3)*1.4),Ie(a,`rime`,e,2+t%3*1.4,.5-Math.floor(t/3)*1.4)});else{Rt(a,`hearth`,4),Rt(a,`rime`,4);for(let e of t)a.teams[e].timber=150,a.teams[e].emberstone=100}return zt(a,fe(r,n)),a}function Vt(e,t,n){let r=[];for(let i of n){let n=Ge(e,i);n&&n.team===t&&r.push(n)}return r}function Ht(e,t){e.order=t,e.path=[],e.repathTimer=0}function Ut(e,t,n,r){let i=e.teams[t];return i.timber>=n&&i.emberstone>=r}function Wt(e,t,n,r){e.teams[t].timber-=n,e.teams[t].emberstone-=r}function Gt(e,t){return e.buildings.some(e=>e.team===t&&e.kind===`forge`&&e.progress>=1)}function Kt(e,t){let n=v;return!e.teams[t].upgraded&&Gt(e,t)&&Ut(e,t,n.timber,n.emberstone)}function qt(e){return e.queue.length+ +!!e.training}function Jt(e,t){if(e.phase!==`playing`)return;let n=n=>Qe(e,{type:`rejected`,team:t.team,reason:n});switch(t.type){case`move`:{let n=Vt(e,t.team,t.unitIds),r=Math.ceil(Math.sqrt(n.length));n.forEach((e,n)=>{let i=(n%r-(r-1)/2)*1.1,a=(Math.floor(n/r)-(r-1)/2)*1.1;Ht(e,{type:`move`,x:t.x+i,z:t.z+a,attackMove:t.attackMove??!1})});return}case`stop`:for(let n of Vt(e,t.team,t.unitIds))Ht(n,{type:`idle`});return;case`attack`:{let r=Ge(e,t.targetId)??Ke(e,t.targetId);if(!r||r.team===t.team)return n(`No target`);for(let n of Vt(e,t.team,t.unitIds))Ht(n,{type:`attack`,targetId:r.id});return}case`gather`:{let r=qe(e,t.resourceId);if(!r)return n(`Nothing to gather`);for(let n of Vt(e,t.team,t.unitIds))n.kind===`settler`&&Ht(n,{type:`gather`,resourceId:r.id,phase:`toSource`,timer:0});return}case`build`:{let r=a[t.kind];if(!Ut(e,t.team,r.timber,r.emberstone))return n(`Not enough timber or emberstone`);if(!Te(e,t.kind,t.tx,t.tz))return n(`Cannot build there`);Wt(e,t.team,r.timber,r.emberstone);let i=Re(e,t.team,t.kind,t.tx,t.tz,0),o=Vt(e,t.team,t.unitIds).filter(e=>e.kind===`settler`);o.length===0&&(o=Yt(e,t.team,I(e,i),2));for(let e of o)Ht(e,{type:`construct`,buildingId:i.id});Qe(e,{type:`placed`,team:t.team,buildingId:i.id});return}case`construct`:{let r=Ke(e,t.buildingId);if(!r||r.team!==t.team||r.progress>=1)return n(`Nothing to build`);for(let n of Vt(e,t.team,t.unitIds))n.kind===`settler`&&Ht(n,{type:`construct`,buildingId:r.id});return}case`refuel`:{let r=Ke(e,t.buildingId);if(!r||r.team!==t.team||r.team!==`hearth`||r.kind!==`brazier`||r.progress<1)return n(`Nothing to refuel`);if(r.fuel>=d.max)return n(`The brazier is full`);for(let n of Vt(e,t.team,t.unitIds))n.kind===`settler`&&Ht(n,{type:`refuel`,buildingId:r.id,timer:d.refuelTime});return}case`rally`:{let r=Ke(e,t.buildingId);if(!r||r.team!==t.team||a[r.kind].trains.length===0)return n(`No rally point here`);let i=t.resourceId===void 0?void 0:qe(e,t.resourceId);r.rally={x:t.x,z:t.z,resourceId:i?.id??null};return}case`train`:{let r=Ke(e,t.buildingId);if(!r||r.team!==t.team||r.progress<1)return n(`Building not ready`);if(!a[r.kind].trains.includes(t.kind))return n(`Cannot train that here`);if(qt(r)>=5)return n(`Queue is full`);let i=s[t.kind];if(!Ut(e,t.team,i.timber,i.emberstone))return n(`Not enough timber or emberstone`);Wt(e,t.team,i.timber,i.emberstone),r.queue.push(t.kind),Qe(e,{type:`queued`,team:t.team,buildingId:r.id,unitKind:t.kind});return}case`cancelTrain`:{let r=Ke(e,t.buildingId);if(!r||r.team!==t.team)return n(`Nothing to cancel`);let i=r.queue.pop();if(!i&&r.training&&(i=r.training.kind,r.training=null),!i)return n(`Nothing to cancel`);let a=s[i];Wt(e,t.team,-a.timber,-a.emberstone);return}case`upgrade`:if(!Kt(e,t.team))return n(`Upgrade unavailable`);Wt(e,t.team,v.timber,v.emberstone),e.teams[t.team].upgraded=!0;for(let n of e.units){if(n.team!==t.team)continue;let r=Le(e,n.team,n.kind);n.hp=Math.round(n.hp*r/n.maxHp),n.maxHp=r}Qe(e,{type:`upgrade`,team:t.team});return}}function Yt(e,t,n,r){return e.units.filter(e=>e.team===t&&e.kind===`settler`&&e.order.type!==`construct`).map(e=>({u:e,d:Math.hypot(e.x-n.x,e.z-n.z)})).sort((e,t)=>e.d-t.d||e.u.id-t.u.id).slice(0,r).map(e=>e.u)}var Xt=1,Zt=9,Qt=40;function $t(e,t,n){let r=e.ai;if(r.thinkTimer-=n,r.thinkTimer>0)return[];r.thinkTimer=Xt;let i=[],o=e.units.filter(e=>e.team===t),s=o.filter(e=>e.kind===`settler`),c=o.filter(e=>e.kind!==`settler`),l=e.buildings.filter(e=>e.team===t),u=l.find(e=>e.kind===`hall`)??l[0];if(!u)return i;let d=I(e,u),f=s.filter(e=>e.order.type===`idle`);for(let[n,r]of f.entries()){let a=en(e,r,`timber`),o=en(e,r,`emberstone`),s=n%3==2&&o?o:a??o;s&&i.push({type:`gather`,team:t,unitIds:[r.id],resourceId:s.id})}rn(e,t,s,l,i);let p=l.find(e=>e.progress<1);if(p){if(s.filter(e=>e.order.type===`construct`).length===0){let n=Yt(e,t,I(e,p),2);i.push({type:`construct`,team:t,unitIds:n.map(e=>e.id),buildingId:p.id})}}else{let n=tn(e,t,l);if(n&&s.length>=3){let r=a[n];if(Ut(e,t,r.timber,r.emberstone)){let r=n===`brazier`?nn(e,t,d)??d:d,a=an(e,n,r.x,r.z);if(a){let r=Yt(e,t,d,2);i.push({type:`build`,team:t,unitIds:r.map(e=>e.id),kind:n,...a})}}}}return on(e,t,s,c,l,i),Kt(e,t)&&i.push({type:`upgrade`,team:t}),sn(e,t,c,l,i),cn(e,t,c,i),i}function en(e,t,n){let r,i=1/0;for(let a of e.resources){if(a.kind!==n||a.amount<c.load)continue;let o=I(e,a),s=Math.hypot(o.x-t.x,o.z-t.z);s<i&&(i=s,r=a)}return r}function tn(e,t,n){let r=e=>n.filter(t=>t.kind===e).length,i=Xe(e,t);return r(`barracks`)===0?`barracks`:r(`lodge`)===0?`lodge`:r(`brazier`)===0?`brazier`:Ye(e,t)>=i-2&&i<_.max?`cottage`:r(`forge`)===0&&e.time>240?`forge`:null}function nn(e,t,n){let r=null,i=1/0;for(let a of e.resources){if(a.amount<a.max/3)continue;let o=I(e,a);if(t===`hearth`&&et(e,o.x,o.z))continue;let s=Math.hypot(o.x-n.x,o.z-n.z);s<i&&(i=s,r=o)}return r}function rn(e,t,n,r,i){for(let a of r){if(a.kind!==`brazier`||a.team!==`hearth`||a.progress<1||a.fuel>d.max-d.trip)continue;if(e.teams[t].timber<d.trip)return;if(n.some(e=>e.order.type===`refuel`&&e.order.buildingId===a.id))continue;let r=Yt(e,t,I(e,a),1)[0];r&&i.push({type:`refuel`,team:t,unitIds:[r.id],buildingId:a.id})}}function an(e,t,n,r){let i=a[t].size,o=e.size/2,s=Math.round(n+o-i/2),c=Math.round(r+o-i/2);for(let n=3;n<20;n++)for(let r=0;r<16;r++){let i=r/16*Math.PI*2,a=Math.round(s+Math.cos(i)*n),o=Math.round(c+Math.sin(i)*n);if(Te(e,t,a,o))return{tx:a,tz:o}}return null}function on(e,t,n,r,i,a){let o=(n,r,i=0)=>{if(!n||qt(n)>0)return;let o=s[r];Ut(e,t,o.timber+i,o.emberstone)&&a.push({type:`train`,team:t,buildingId:n.id,kind:r})},c=e=>i.find(t=>t.kind===e&&t.progress>=1);if(n.length<Zt&&o(c(`hall`),`settler`),n.length<4)return;let l=r.filter(e=>e.kind===`shieldbearer`).length,u=e.teams[t].timber>300&&e.teams[t].emberstone>150;o(c(`barracks`),u&&l>=3?`warden`:`shieldbearer`,Qt),o(c(`lodge`),`hunter`,Qt)}function sn(e,t,n,r,i){let a=Fe(t),o=e.units.find(t=>t.team===a&&r.some(n=>we(e,n,t.x,t.z)<12));if(!o)return;let s=n.filter(e=>e.order.type===`idle`||e.order.type===`move`);s.length&&i.push({type:`attack`,team:t,unitIds:s.map(e=>e.id),targetId:o.id})}function cn(e,t,n,i){let a=e.ai;if(e.time<a.graceUntil)return;a.attackers=a.attackers.filter(e=>n.some(t=>t.id===e));let o=ln(e,t);if(!o)return;let s=n.filter(e=>a.attackers.includes(e.id)&&e.order.type===`idle`);s.length&&i.push({type:`move`,team:t,unitIds:s.map(e=>e.id),...o,attackMove:!0});let c=n.filter(e=>!a.attackers.includes(e.id)&&r[e.kind].sight>0),l=t===`rime`&&e.weather.blizzard?1:0;c.length<Math.max(2,a.waveSize-l)||(a.attackers.push(...c.map(e=>e.id)),a.wavesSent++,a.waveSize=Math.min(10,a.waveSize+2),i.push({type:`move`,team:t,unitIds:c.map(e=>e.id),...o,attackMove:!0}))}function ln(e,t){let n=Fe(t),r=e.buildings.find(e=>e.team===n);if(r)return I(e,r);let i=e.units.find(e=>e.team===n);return i?{x:i.x,z:i.z}:null}function un(e,t){dn(e);for(let n of e.buildings)n.kind!==`brazier`||n.team!==`hearth`||n.progress<1||n.fuel<=0||(n.fuel=Math.max(0,n.fuel-d.burnPerSecond*t),n.fuel===0&&Qe(e,{type:`fuelOut`,team:n.team,buildingId:n.id}));let n=u.buildPerSecond*(e.weather.blizzard?f.chill:1);for(let r of[...e.units])r.hp<=0||(r.team===`hearth`?r.chill=et(e,r.x,r.z)?Math.max(0,r.chill-u.recoverPerSecond*t):Math.min(u.max,r.chill+n*t):et(e,r.x,r.z)&&ht(e,null,r,u.burnPerSecond*t,`hearth`),r.kind===`warden`&&r.hp>0&&fn(e,r,t))}function dn(e){let t=e.weather;e.time<t.nextChange||(t.blizzard=!t.blizzard,t.nextChange=e.time+(t.blizzard?f.duration:f.calm+S(e)*f.jitter),Qe(e,{type:`weather`,blizzard:t.blizzard}))}function fn(e,t,n){if(t.pulseTimer-=n,t.pulseTimer>0)return;if(t.team===`hearth`){t.pulseTimer=h.healEvery;for(let n of e.units)n.team!==t.team||Math.hypot(n.x-t.x,n.z-t.z)>h.healRadius||(n.hp=Math.min(n.maxHp,n.hp+h.heal));return}let r=Fe(t.team),i,a=h.frostRange;for(let n of e.units){if(n.team!==r)continue;let e=Math.hypot(n.x-t.x,n.z-t.z);e<=a&&(a=e,i=n)}if(i){t.pulseTimer=h.frostEvery;for(let t of e.units)t.team!==r||Math.hypot(t.x-i.x,t.z-i.z)>h.frostRadius||(t.slowUntil=e.time+h.frostFor);Qe(e,{type:`frost`,team:t.team,x:i.x,z:i.z,radius:h.frostRadius})}}function pn(n,r=[]){if(n.phase!==`playing`)return;let i=e;for(let e of r)Jt(n,e);for(let e of t)if(n.aiEnabled[e])for(let t of $t(n,e,i))Jt(n,t);for(let e of[...n.units])e.hp>0&&wt(n,e,i);mt(n,i),jt(n,i),un(n,i),Dt(n),n.time+=i,n.tick++;let a=mn(n);a!==`playing`&&(n.phase=a,Qe(n,{type:`phase`,phase:a}))}function mn(e){let t=e.player;return e.buildings.some(e=>e.team===Fe(t))?e.buildings.some(e=>e.team===t)||e.units.some(e=>e.team===t)?`playing`:`lost`:`won`}function hn(e){let t=e.events;return e.events=[],t}function gn(e){let t=(t,n)=>{let{width:r,height:i}=e.view.size,a=e.view.terrain.heightAt(t,n),o=e.view.rts.worldToScreen(t,a,n,r,i);if(!o)return null;let s=e.view.renderer.domElement.getBoundingClientRect();return{x:o.x+s.left,y:o.y+s.top}};window.__frostmark={snapshot(){let t=e.world;return structuredClone({mode:e.mode,phase:t.phase,time:t.time,tick:t.tick,speed:e.speed,seed:t.seed,scenario:t.scenario,map:t.terrain.map,player:t.player,trees:t.trees.length,teams:t.teams,wavesSent:t.ai.wavesSent,weather:t.weather,selected:[...e.controller.selected],placing:e.controller.placing,units:t.units.map(e=>({id:e.id,team:e.team,kind:e.kind,x:e.x,z:e.z,hp:e.hp,maxHp:e.maxHp,order:e.order.type,anim:e.anim,carrying:e.carrying,chill:e.chill,...be(t,e.x,e.z)})),buildings:t.buildings.map(e=>({id:e.id,team:e.team,kind:e.kind,tx:e.tx,tz:e.tz,w:e.w,hp:e.hp,maxHp:e.maxHp,progress:e.progress,training:e.training?{kind:e.training.kind,remaining:e.training.remaining}:null,queue:[...e.queue],center:I(t,e),fuel:e.fuel,rally:e.rally})),resources:t.resources.map(e=>({id:e.id,kind:e.kind,tx:e.tx,tz:e.tz,amount:e.amount}))})},audio(){return structuredClone(e.audio.stats)},setSpeed(t){e.speed=Math.max(0,Math.min(64,t))},setSeed(t){e.seed=t|0},tileToScreen(n,r){let i=xe(e.world,n,r);return t(i.x,i.z)},worldToScreen(t,n,r=0){let{width:i,height:a}=e.view.size,o=e.view.rts.worldToScreen(t,e.view.terrain.heightAt(t,n)+r,n,i,a),s=e.view.renderer.domElement.getBoundingClientRect();return o&&{x:o.x+s.left,y:o.y+s.top}},screenToTile(t,n){let r=e.view.renderer.domElement.getBoundingClientRect(),{width:i,height:a}=e.view.size,o=e.view.rts.screenToGround(t-r.left,n-r.top,i,a);return o&&be(e.world,o.x,o.z)},canPlace(t,n,r){return Te(e.world,t,n,r)},findSpot(t,n,r){return an(e.world,t,n,r)},treeNear(t,n){let r=e.world;return r.trees.filter(e=>He(r,e)).map(e=>({id:e.id,...xe(r,e.tx,e.tz)})).sort((e,r)=>Math.hypot(e.x-t,e.z-n)-Math.hypot(r.x-t,r.z-n))[0]??null},iceNear(t,n){let r=e.world,i=null,a=1/0;for(let e=0;e<r.size;e++)for(let o=0;o<r.size;o++){if(!ge(r,o,e))continue;let s=xe(r,o,e),c=Math.hypot(s.x-t,s.z-n);if(c>=a)continue;let l=L(r,`cottage`,s.x,s.z);R(r,`cottage`,l.tx,l.tz)===`Cannot build on ice`&&(a=c,i=s)}return i}}}function B(e,t,n,r){let{ctx:i}=e,a=i.createOscillator(),o=i.createGain();a.type=r.type??`sine`,a.frequency.setValueAtTime(r.freq,n),r.to&&a.frequency.exponentialRampToValueAtTime(Math.max(1,r.to),n+r.dur),r.detune&&(a.detune.value=r.detune);let s=r.attack??.004;o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(r.gain,n+s),o.gain.exponentialRampToValueAtTime(1e-4,n+Math.max(s+.01,r.dur)),a.connect(o).connect(t),a.start(n),a.stop(n+r.dur+.02)}function _n(e,t,n,r){let{ctx:i}=e,a=r.buffer??e.noise.white,o=i.createBufferSource();o.buffer=a,o.loop=!0,r.rate&&(o.playbackRate.value=r.rate);let s=i.createBiquadFilter();s.type=r.filter??`bandpass`,s.frequency.setValueAtTime(r.freq??1e3,n),r.to&&s.frequency.exponentialRampToValueAtTime(r.to,n+r.dur),s.Q.value=r.q??1;let c=i.createGain(),l=r.attack??.002;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(r.gain,n+l),c.gain.exponentialRampToValueAtTime(1e-4,n+Math.max(l+.01,r.dur)),o.connect(s).connect(c).connect(t),o.start(n,Math.random()*(a.duration-.1)),o.stop(n+r.dur+.02)}function vn(e,t,n,r,i,a){let{ctx:o}=e,s=o.createBiquadFilter();s.type=`lowpass`,s.Q.value=2,s.frequency.setValueAtTime(r*1.2,n),s.frequency.linearRampToValueAtTime(r*4.5,n+.06),s.frequency.exponentialRampToValueAtTime(r*1.8,n+i);let c=o.createGain();c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(a,n+.035),c.gain.setTargetAtTime(a*.7,n+.05,.1),c.gain.setTargetAtTime(1e-4,n+i*.8,i*.12),s.connect(c).connect(t);for(let e of[-6,7]){let t=o.createOscillator();t.type=`sawtooth`,t.frequency.setValueAtTime(r*.985,n),t.frequency.linearRampToValueAtTime(r,n+.05),t.detune.value=e,t.connect(s),t.start(n),t.stop(n+i+.1)}}function yn(e,t,n,r,i,a){B(e,t,n,{freq:r,dur:i,gain:a}),B(e,t,n,{freq:r*2.76,dur:i*.6,gain:a*.45}),B(e,t,n,{freq:r*5.4,dur:i*.3,gain:a*.2})}function bn(e,t,n,r,i,a=.3){B(e,t,n,{freq:r*2.2,to:r,dur:a,gain:i}),_n(e,t,n,{dur:.05,gain:i*.35,filter:`lowpass`,freq:1800})}function xn(e,t,n,r,i,a){let{ctx:o}=e,s=o.createOscillator();s.type=`sawtooth`,s.frequency.setValueAtTime(r,n),s.frequency.linearRampToValueAtTime(r*1.015,n+i);let c=o.createGain();c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(a,n+.06),c.gain.setTargetAtTime(1e-4,n+i*.6,i*.15);for(let[e,t]of[[520,6],[1180,9]]){let n=o.createBiquadFilter();n.type=`bandpass`,n.frequency.value=e,n.Q.value=t,s.connect(n).connect(c)}c.connect(t),s.start(n),s.stop(n+i+.2)}var V=e=>440*2**((e-69)/12);function Sn(e){return{wind:.1+(e.blizzard?.42:0)+e.ice*.05,gust:e.blizzard?.11:.008,crackle:e.brazier*.55,forest:e.forest*(e.blizzard?.02:.05)}}var Cn=class{e;beds=null;lfos=[];scene=null;nextCreak=0;nextForest=0;constructor(e){this.e=e}get running(){return this.beds!==null}start(){if(this.beds)return;let{ctx:e,noise:t,buses:n}=this.e,r=(t,r,i,a,o=1)=>{let s=e.createBufferSource();s.buffer=t,s.loop=!0,s.playbackRate.value=o;let c=e.createBiquadFilter();c.type=r,c.frequency.value=i,c.Q.value=a;let l=e.createGain();return l.gain.value=0,s.connect(c).connect(l).connect(n.ambience),s.start(0,Math.random()*t.duration),{src:s,gain:l,f:c}},i=(t,n,r)=>{let i=e.createOscillator(),a=e.createGain();i.frequency.value=t,a.gain.value=n,i.connect(a).connect(r),i.start(),this.lfos.push(i)},a=r(t.brown,`bandpass`,420,.6),o=r(t.white,`bandpass`,1300,5),s=r(t.crackle,`highpass`,500,.7,.92+Math.random()*.16),c=r(t.white,`bandpass`,3200,.5,.5);i(.07,180,a.f.frequency),i(.13,420,o.f.frequency),i(.05,600,c.f.frequency),this.beds={wind:a,gust:o,crackle:s,forest:c},this.nextCreak=this.e.now+3,this.nextForest=this.e.now+6}stop(){if(!this.beds)return;let e=this.e.now+1.6;for(let t of Object.values(this.beds))t.gain.gain.cancelScheduledValues(this.e.now),t.gain.gain.setTargetAtTime(0,this.e.now,.4),t.src.stop(e);for(let t of this.lfos)t.stop(e);this.lfos=[],this.beds=null}update(e){if(!this.beds)return;this.scene=e;let t=this.e.now,n=Sn(e);for(let e of[`wind`,`gust`,`crackle`,`forest`])this.beds[e].gain.gain.setTargetAtTime(n[e],t,e===`wind`||e===`gust`?1.2:.4);this.oneShots(t)}oneShots(e){let t=this.scene;if(!t)return;let n=this.e.buses.ambience;if(e>=this.nextCreak&&(t.ice>.05&&(Math.random()<.35?Tn(this.e,n,e+.05,.05+t.ice*.08):wn(this.e,n,e+.05,.08+t.ice*.12)),this.nextCreak=e+(3+Math.random()*6)/Math.max(.3,t.ice+.3)),e>=this.nextForest){if(t.forest>.2&&!t.blizzard){if(Math.random()<.6)_n(this.e,n,e,{buffer:this.e.noise.brown,dur:.6,gain:.25*t.forest,filter:`lowpass`,freq:900,attack:.15});else{let t=2600+Math.random()*900;for(let r=0;r<2;r++)B(this.e,n,e+r*.16,{freq:t,to:t*.8,dur:.1,gain:.025})}}this.nextForest=e+7+Math.random()*10}}};function wn(e,t,n,r){let{ctx:i}=e,a=.4+Math.random()*.6,o=i.createOscillator();o.type=`sawtooth`;let s=55+Math.random()*50;o.frequency.setValueAtTime(s,n),o.frequency.linearRampToValueAtTime(s*(.7+Math.random()*.8),n+a);let c=i.createBiquadFilter();c.type=`bandpass`,c.Q.value=7,c.frequency.setValueAtTime(350+Math.random()*300,n),c.frequency.linearRampToValueAtTime(600+Math.random()*500,n+a);let l=i.createGain();l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(r,n+a*.3),l.gain.linearRampToValueAtTime(0,n+a),o.connect(c).connect(l).connect(t),o.start(n),o.stop(n+a+.05)}function Tn(e,t,n,r){let i=1400+Math.random()*900;B(e,t,n,{freq:i,to:i*.18,dur:.7,gain:r}),B(e,t,n+.03,{freq:i*1.5,to:i*.25,dur:.5,gain:r*.4})}var En=globalThis.AudioContext??globalThis.webkitAudioContext,Dn=14,On=class e{ctx;buses;noise;channels=[];constructor(e){this.ctx=e;let t=e.createGain(),n=e.createDynamicsCompressor();n.threshold.value=-10,n.knee.value=8,n.ratio.value=6,n.attack.value=.004,n.release.value=.2,t.connect(n).connect(e.destination);let r=()=>{let n=e.createGain();return n.connect(t),n};this.buses={master:t,music:r(),sfx:r(),ambience:r()};for(let t=0;t<Dn;t++){let t=e.createGain(),n=typeof e.createStereoPanner==`function`?e.createStereoPanner():null;n?t.connect(n).connect(this.buses.sfx):t.connect(this.buses.sfx),this.channels.push({input:t,pan:n,busyUntil:0,voiceId:0})}this.noise=kn(e)}static create(){if(!En)return null;try{return new e(new En({latencyHint:`interactive`}))}catch{return null}}get now(){return this.ctx.currentTime}setBus(e,t,n=.08){let r=this.buses[e].gain;r.cancelScheduledValues(this.now),r.setTargetAtTime(t,this.now,n)}channel(e,t,n,r,i){let a=this.now,o=i===null?void 0:this.channels.find(e=>e.voiceId===i);if(o??=this.channels.find(e=>e.busyUntil<=a),!o)return null;if(o.busyUntil>a){let e=o.input;e.gain.cancelScheduledValues(a),e.gain.setTargetAtTime(0,a,.01),setTimeout(()=>e.disconnect(),120);let t=this.ctx.createGain();o.pan?t.connect(o.pan):t.connect(this.buses.sfx),o.input=t}return o.input.gain.cancelScheduledValues(a),o.input.gain.setValueAtTime(n,a),o.pan&&o.pan.pan.setValueAtTime(r,a),o.busyUntil=t,o.voiceId=e,o}async unlock(){let{ctx:e}=this;e.state!==`running`&&await e.resume().catch(()=>void 0);let t=e.createBufferSource();t.buffer=e.createBuffer(1,1,e.sampleRate),t.connect(e.destination),t.start()}suspend(){this.ctx.state===`running`&&this.ctx.suspend().catch(()=>void 0)}};function kn(e){let t=e.sampleRate,n=e.createBuffer(1,t,t),r=n.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1;let i=e.createBuffer(1,t*3,t),a=i.getChannelData(0),o=0;for(let e=0;e<a.length;e++)o=(o+.02*(Math.random()*2-1))/1.02,a[e]=o*3.5;An(a,t*.05);let s=e.createBuffer(1,t*4,t),c=s.getChannelData(0);for(let e=0;e<c.length;e++)c[e]=(Math.random()*2-1)*.015;for(let e=0;e<70;e++){let e=Math.floor(Math.random()*(c.length-t*.05)),n=Math.floor(t*(.003+Math.random()*.02)),r=.25+Math.random()*.75;for(let t=0;t<n;t++)c[e+t]+=(Math.random()*2-1)*r*(1-t/n)**3}return An(c,t*.02),{white:n,brown:i,crackle:s}}function An(e,t){let n=Math.floor(t);for(let t=0;t<n;t++){let r=t/n,i=e.length-n+t;e[i]=e[i]*(1-r)+e[t]*r}}function jn(){let e=globalThis.navigator;try{e?.audioSession&&(e.audioSession.type=`ambient`)}catch{}}var Mn=[`master`,`music`,`sfx`,`ambience`],Nn={muted:!1,master:.8,music:.55,sfx:.85,ambience:.7},Pn=`frostmark-audio`,Fn=(e,t)=>typeof e==`number`&&Number.isFinite(e)?Math.max(0,Math.min(1,e)):t;function In(e){let t={};try{let n=JSON.parse(e?.getItem(`frostmark-audio`)||`{}`);n&&typeof n==`object`&&(t=n)}catch{}let n=Nn;return{muted:t.muted===!0,master:Fn(t.master??t.volume,n.master),music:Fn(t.music,n.music),sfx:Fn(t.sfx,n.sfx),ambience:Fn(t.ambience,n.ambience)}}function Ln(e,t){try{e?.setItem(Pn,JSON.stringify(t))}catch{}}var Rn=class{storage;settings;duck=0;paused=!1;constructor(e){this.storage=e,this.settings=In(e)}set(e,t){this.settings={...this.settings,[e]:Fn(t,this.settings[e])},Ln(this.storage,this.settings)}setMuted(e){this.settings={...this.settings,muted:e},Ln(this.storage,this.settings)}pushDuck(e){this.duck=Math.max(this.duck,Math.min(1,e))}update(e){this.duck=Math.max(0,this.duck-e*.9)}level(e){let t=this.settings;if(e===`master`)return t.muted?0:t.master;let n=this.paused&&e!==`sfx`?.35:1,r=e===`sfx`?1:1-this.duck*(e===`music`?.45:.3);return t[e]*n*r}},zn={maxVoices:12,perSound:3,minGap:.06},Bn=class{limits;voices=[];lastStart=new Map;nextId=1;constructor(e=zn){this.limits=e}get active(){return this.voices.length}admit(e,t){this.voices=this.voices.filter(e=>e.endsAt>t);let n=this.lastStart.get(e.sound);if(n!==void 0&&t-n<this.limits.minGap)return{ok:!1};let r=this.voices.filter(t=>t.sound===e.sound),i;if(r.length>=this.limits.perSound){if(i=r.reduce((e,t)=>e.endsAt<=t.endsAt?e:t),i.priority>e.priority)return{ok:!1}}else if(this.voices.length>=this.limits.maxVoices&&(i=this.voices.reduce((e,t)=>e.priority<t.priority||e.priority===t.priority&&e.endsAt<=t.endsAt?e:t),i.priority>=e.priority))return{ok:!1};i&&(this.voices=this.voices.filter(e=>e!==i));let a=this.nextId++;return this.voices.push({id:a,sound:e.sound,priority:e.priority,endsAt:t+e.duration}),this.lastStart.set(e.sound,t),{ok:!0,id:a,steal:i?.id??null}}clear(){this.voices=[]}},Vn=60/66/2,Hn=8,Un=62,Wn=12,Gn=[0,2,3,5,7,9,10],Kn=[0,2,3,5,7,8,10];function qn(e,t){let n=Math.floor(t/e.length);return e[(t%e.length+e.length)%e.length]+n*12}var Jn=[[[0,2],[2,1],[3,1],[4,3],[3,1],[2,2],[1,2],[0,4]],[[4,2],[5,1],[4,1],[2,2],[0,2],[1,3],[2,1],[0,4]],[[-3,2],[0,2],[2,2],[4,4],[3,2],[4,2],[null,2]],[[7,3],[6,1],[4,2],[3,2],[4,4],[2,2],[null,2]],[[2,1],[3,1],[4,2],[6,2],[4,2],[3,1],[2,1],[0,6]]],Yn=[0,6,3,4],Xn=[0,5,6,0];function Zn(e){let t=e>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Qn(e){let t=Jn[Math.floor(e()*Jn.length)],n=[0,0,2,-2,4][Math.floor(e()*5)],r=e()<.25,i=t.find(([e])=>e!==null)?.[0]??0;return t.map(([t,a])=>t===null||e()<.08?[null,a]:[(r?i-(t-i):t)+n,a])}var $n=class{e;layerGain;out;timer=null;step=0;nextTime=0;layers={calm:1,tension:0,combat:0,blizzard:0};melody=[];melodyStep=0;rand=Zn(Date.now());notes=0;constructor(e){this.e=e;let{ctx:t}=e;this.out=t.createGain(),this.out.gain.value=0,this.out.connect(e.buses.music);let n=()=>{let e=t.createGain();return e.gain.value=0,e.connect(this.out),e};this.layerGain={calm:n(),tension:n(),combat:n(),blizzard:n()}}get playing(){return this.timer!==null}start(){if(this.timer)return;let e=this.e.now;this.out.gain.cancelScheduledValues(e),this.out.gain.setValueAtTime(0,e),this.out.gain.linearRampToValueAtTime(1,e+3),this.step=0,this.melody=[],this.nextTime=e+.1,this.timer=setInterval(()=>this.schedule(),80)}stop(e=1.5){if(!this.timer)return;clearInterval(this.timer),this.timer=null;let t=this.e.now;this.out.gain.cancelScheduledValues(t),this.out.gain.setTargetAtTime(0,t,e/3)}setLayers(e){this.layers=e;let t=this.e.now;for(let n of Object.keys(e))this.layerGain[n].gain.setTargetAtTime(e[n],t,.5)}schedule(){let e=this.e.now+.3;for(this.nextTime<this.e.now-.5&&(this.nextTime=this.e.now+.05),this.notes=0;this.nextTime<e;)this.playStep(this.step,this.nextTime),this.step++,this.nextTime+=Vn}playStep(e,t){let{calm:n,tension:r,combat:i,blizzard:a}=this.layers,o=a>.5,s=o?Kn:Gn,c=Math.floor(e/Hn),l=e%Hn,u=(o?Xn:Yn)[c%4],d=(e,t=0)=>V(Un+qn(s,e)+t*12),f=this.layerGain;if(l===0){let e=4.236363636363636,i=n>.02||r>.02?f.calm:f.tension;this.pad(i,t,d(u,-2),e,o?500:800),this.pad(i,t,d(u+4,-2),e,o?500:800),r>.02&&this.pad(f.tension,t,d(u,-3),e,300)}if(n>.02){e%32==0&&(this.melody=Qn(this.rand),this.melodyStep=e);let n=this.melodyStep;for(let[r,i]of this.melody)n===e&&r!==null&&this.flute(f.calm,t,d(r,o?-1:0),i*Vn*.95,o?.05:.07),n+=i;if(l%2==0&&this.notes<Wn&&this.rand()<(o?.25:.45)){let e=u+[0,2,4,7][Math.floor(this.rand()*4)];B(this.e,f.calm,t,{type:`triangle`,freq:d(e,-1),dur:1.2,gain:.05}),this.notes++}}if(r>.02){l%2==0&&bn(this.e,f.tension,t,46,l===0?.35:.2,.5);let e=[0,1,0,-2,0,1,3,1][l];B(this.e,f.tension,t,{type:`triangle`,freq:V(50+e),dur:Vn*.9,gain:.07}),this.notes++}i>.02&&([1,0,0,1,0,0,1,0][l]&&bn(this.e,f.combat,t,55,.36,.35),[0,0,1,0,1,0,0,1][l]&&_n(this.e,f.combat,t,{dur:.06,gain:.18,freq:2400,q:2}),l===0&&c%2==0&&(vn(this.e,f.combat,t,d(u,-1),Vn*3,.07),vn(this.e,f.combat,t,d(u+4,-1),Vn*3,.05)),l===6&&vn(this.e,f.combat,t,d(u+1,-1),Vn*1.5,.06),this.notes+=2),a>.02&&l%4==0&&this.notes<Wn&&this.rand()<.5&&yn(this.e,f.blizzard,t,d(u+7+Math.floor(this.rand()*5),1),2.2,.025)}pad(e,t,n,r,i){let{ctx:a}=this.e,o=a.createBiquadFilter();o.type=`lowpass`,o.frequency.value=i;let s=a.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.06,t+1.2),s.gain.setValueAtTime(.06,t+r-1),s.gain.linearRampToValueAtTime(0,t+r),o.connect(s).connect(e);for(let e of[-5,5]){let i=a.createOscillator();i.type=`sawtooth`,i.frequency.value=n,i.detune.value=e,i.connect(o),i.start(t),i.stop(t+r+.05)}this.notes+=2}flute(e,t,n,r,i){let{ctx:a}=this.e,o=a.createOscillator();o.frequency.value=n;let s=a.createOscillator(),c=a.createGain();s.frequency.value=5.2,c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(n*.006,t+Math.min(.4,r)),s.connect(c).connect(o.frequency);let l=a.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(i,t+.06),l.gain.setValueAtTime(i*.85,t+Math.max(.07,r-.12)),l.gain.linearRampToValueAtTime(0,t+r+.1),o.connect(l).connect(e),o.start(t),s.start(t),o.stop(t+r+.15),s.stop(t+r+.15),_n(this.e,e,t,{dur:.08,gain:i*.4,freq:n*2,q:4}),this.notes++}},er=e=>16+e.distance*.75;function tr(e,t,n){let r=er(e),i=Math.hypot(t-e.x,n-e.z);if(i>=r)return null;let a=(1-i/r)**1.6;return a<.04?null:{gain:a,pan:Math.max(-1,Math.min(1,(t-e.x)/(r*.6)))}}var nr={tap:6,build:6,denied:6,chop:1,mine:1,hammer:1,gatherTimber:1,gatherEmber:2,buildDone:7,queued:4,trainDone:7,upgrade:8,hitAxe:3,hitClub:3,hitLight:2,hitArrow:2,hitSpear:3,hitBuilding:3,throwArrow:2,throwSpear:2,throwEmber:2,throwShard:2,deathHearth:5,deathRime:5,collapse:8,frostPulse:6,fuelOut:9,blizzardRise:9,blizzardFall:8,win:10,lose:10},rr={tap:.08,build:.3,denied:.25,chop:.18,mine:.3,hammer:.16,gatherTimber:.2,gatherEmber:.45,buildDone:1.1,queued:.12,trainDone:.7,upgrade:1.4,hitAxe:.22,hitClub:.3,hitLight:.15,hitArrow:.14,hitSpear:.2,hitBuilding:.3,throwArrow:.25,throwSpear:.35,throwEmber:.45,throwShard:.4,deathHearth:.7,deathRime:.8,collapse:1.6,frostPulse:1.2,fuelOut:1.4,blizzardRise:3,blizzardFall:2.4,win:4,lose:4.5};function ir(e,t=1,n){return{sound:e,gain:t,pan:0,priority:nr[e],duck:n}}function ar(e,t,n,r,i=0){let a=tr(e,n,r);return!a&&i<=0?null:{sound:t,gain:Math.max(i,a?.gain??0),pan:a?.pan??0,priority:nr[t]}}function or(e,t,n,r,i){let a=null,o=1/0;for(let s of e.units){if(s.team!==t||s.order.type!==`attack`||s.order.targetId!==n)continue;let e=Math.hypot(s.x-r,s.z-i);e<o&&(o=e,a=s.kind)}return a}function sr(e,t){return t===`settler`?`hitLight`:e===`hearth`?`hitAxe`:`hitClub`}function cr(e,t){return t===`ember`?e===`hearth`?`throwEmber`:`throwShard`:e===`hearth`?`throwArrow`:`throwSpear`}function lr(e,t,n,r=`hearth`){let i=[],a=0,o=null,s=e=>e&&i.push(e);for(let i of e){let e=`team`in i&&i.team===r;switch(i.type){case`hit`:{let e=ar(n,t.buildings.find(e=>e.id===i.targetId)?`hitBuilding`:i.melee?sr(i.team,or(t,i.team,i.targetId,i.x,i.z)):i.team===`hearth`?`hitArrow`:`hitSpear`,i.x,i.z);e&&a++,s(e);break}case`shot`:s(ar(n,cr(i.team,i.kind),i.x,i.z));break;case`death`:{let t=ar(n,i.team===`hearth`?`deathHearth`:`deathRime`,i.x,i.z,e?.25:0);t&&a++,s(t);break}case`destroyed`:{let e=ar(n,`collapse`,i.x,i.z,.4);e&&(e.duck=.5),s(e);break}case`gathered`:e&&s(ar(n,i.resource===`timber`?`gatherTimber`:`gatherEmber`,i.x,i.z,.15));break;case`built`:e&&s(ir(`buildDone`,.9));break;case`queued`:e&&s(ir(`queued`,.6));break;case`trained`:e&&s(ir(`trainDone`,.85));break;case`upgrade`:e&&s(ir(`upgrade`,1,.4));break;case`rejected`:e&&s(ir(`denied`,.7));break;case`phase`:i.phase!==`playing`&&s(ir(i.phase===`won`?`win`:`lose`,1,1));break;case`weather`:o=i.blizzard,s(ir(i.blizzard?`blizzardRise`:`blizzardFall`,.9,.3));break;case`frost`:s(ar(n,`frostPulse`,i.x,i.z,e?0:.2));break;case`fuelOut`:{if(!e)break;let r=t.buildings.find(e=>e.id===i.buildingId),a=r?I(t,r):{x:n.x,z:n.z};s(ar(n,`fuelOut`,a.x,a.z,.55));break}}}return{cues:i,combat:a,blizzard:o}}function ur(e,t,n,r,i=3){if(r<=n)return[];let a=[];for(let i of e.units){if(i.anim!==`work`)continue;let o,s;if(i.order.type===`construct`)o=`hammer`,s=.42;else if(i.order.type===`gather`){let t=e.resources.find(e=>e.id===i.order.resourceId);if(!t)continue;o=t.kind===`timber`?`chop`:`mine`,s=t.kind===`timber`?.7:.85}else continue;let c=i.id*.37%s;if(Math.floor((r+c)/s)===Math.floor((n+c)/s))continue;let l=tr(t,i.x,i.z);l&&a.push({sound:o,gain:l.gain*.7,pan:l.pan,priority:nr[o],d:1-l.gain})}return a.sort((e,t)=>e.d-t.d).slice(0,i).map(({d:e,...t})=>t)}function dr(e,t,n=`hearth`){let r=0;for(let n of e.buildings){if(!(n.kind===`brazier`?n.fuel>0&&n.progress>=1:n.kind===`hall`))continue;let i=I(e,n),a=Math.max(0,1-Math.hypot(i.x-t.x,i.z-t.z)/18)*(n.kind===`hall`?.5:1);r=Math.max(r,a)}let i=e.size/2,a=0,o=0;for(let n=-10;n<=10;n+=2)for(let r=-10;r<=10;r+=2){if(r*r+n*n>100)continue;let s=Math.floor(t.x+r+i),c=Math.floor(t.z+n+i);o++,ge(e,s,c)&&a++}let s=0;for(let n of e.resources){if(n.kind!==`timber`||n.amount<=0)continue;let r=I(e,n);Math.hypot(r.x-t.x,r.z-t.z)<16&&(s+=n.w*n.d)}for(let n of e.obstacles)n.kind===`snowPine`&&Math.hypot(n.tx-i-t.x,n.tz-i-t.z)<16&&s++;let c=e.buildings.filter(e=>e.team===n).map(t=>I(e,t)),l=0;for(let r of e.units){if(r.team===n)continue;let e=Math.hypot(r.x-t.x,r.z-t.z)<26,i=c.some(e=>Math.hypot(r.x-e.x,r.z-e.z)<20);(e||i)&&l++}return{brazier:r,ice:o?a/o:0,forest:Math.min(1,s/14),blizzard:e.weather.blizzard,threat:l}}var fr=class{layers={calm:1,tension:0,combat:0,blizzard:0};mood=`explore`;sinceCombat=1/0;noteCombat(e){e>0&&(this.sinceCombat=0)}update(e,t){this.sinceCombat+=e;let n=this.sinceCombat<6?`combat`:t.threat>0?`tension`:`explore`;(this.mood!==`combat`||n===`combat`||this.sinceCombat>9)&&(this.mood=n);let r={calm:this.mood===`explore`?1:this.mood===`tension`?.55:.3,tension:this.mood===`explore`?0:Math.min(1,.55+t.threat*.08),combat:+(this.mood===`combat`),blizzard:+!!t.blizzard},i=(t,n,r,i)=>t+(n-t)*Math.min(1,e*(n>t?r:i));return this.layers={calm:i(this.layers.calm,r.calm,.5,.5),tension:i(this.layers.tension,r.tension,.8,.25),combat:i(this.layers.combat,r.combat,1.6,.2),blizzard:i(this.layers.blizzard,r.blizzard,.35,.3)},this.layers}};function pr(e,t){if(!e.length)return null;let n={shieldbearer:4,hunter:3,warden:2,settler:1},r=new Map;for(let t of e)r.set(t.kind,(r.get(t.kind)??0)+1);let i=e[0].kind;for(let[e,t]of r){let a=r.get(i);(t>a||t===a&&n[e]>n[i])&&(i=e)}return{team:e[0].team,unit:i,kind:t}}var mr=(e=.06)=>1+(Math.random()*2-1)*e,hr=50,gr=62,_r={tap:(e,t,n)=>B(e,t,n,{freq:1250,to:900,dur:.05,gain:.12}),build:(e,t,n)=>{B(e,t,n,{type:`triangle`,freq:190,to:110,dur:.18,gain:.5}),_n(e,t,n,{dur:.09,gain:.35,freq:420,q:1.5}),B(e,t,n+.12,{type:`triangle`,freq:240,to:140,dur:.14,gain:.35})},denied:(e,t,n)=>{B(e,t,n,{type:`triangle`,freq:V(53),dur:.1,gain:.25}),B(e,t,n+.1,{type:`triangle`,freq:V(51),dur:.14,gain:.25})},chop:(e,t,n)=>{let r=mr();_n(e,t,n,{dur:.07,gain:.55,freq:1100*r,q:2.2}),B(e,t,n,{type:`triangle`,freq:240*r,to:130,dur:.12,gain:.5})},mine:(e,t,n)=>{let r=mr(.08);B(e,t,n,{freq:2350*r,dur:.22,gain:.14}),B(e,t,n,{freq:3610*r,dur:.12,gain:.08}),_n(e,t,n,{dur:.04,gain:.4,filter:`highpass`,freq:2800}),B(e,t,n,{type:`triangle`,freq:150,to:80,dur:.1,gain:.35})},hammer:(e,t,n)=>{let r=mr(.1);B(e,t,n,{type:`triangle`,freq:330*r,to:210,dur:.07,gain:.45}),_n(e,t,n,{dur:.04,gain:.3,freq:1500*r,q:3})},gatherTimber:(e,t,n)=>{B(e,t,n,{type:`triangle`,freq:125,to:80,dur:.12,gain:.35}),B(e,t,n+.07,{type:`triangle`,freq:165,to:100,dur:.12,gain:.3})},gatherEmber:(e,t,n)=>{B(e,t,n,{freq:V(69),dur:.4,gain:.12,attack:.02}),B(e,t,n+.05,{freq:V(76),dur:.35,gain:.07,attack:.02}),_n(e,t,n,{buffer:e.noise.crackle,dur:.3,gain:.5,filter:`highpass`,freq:900})},buildDone:(e,t,n)=>{B(e,t,n,{type:`triangle`,freq:160,to:90,dur:.25,gain:.5}),vn(e,t,n+.08,V(57),.3,.14),vn(e,t,n+.3,V(gr),.3,.14),vn(e,t,n+.52,V(69),.55,.15)},queued:(e,t,n)=>B(e,t,n,{type:`triangle`,freq:880,dur:.06,gain:.12}),trainDone:(e,t,n)=>{vn(e,t,n,V(57),.2,.15),vn(e,t,n+.17,V(gr),.45,.17),bn(e,t,n+.17,70,.35)},upgrade:(e,t,n)=>{B(e,t,n,{type:`triangle`,freq:120,to:60,dur:.2,gain:.5});for(let[r,i]of[[1240,.18],[1987,.11],[2920,.07]])B(e,t,n,{freq:r,dur:1.3,gain:i})},hitAxe:(e,t,n)=>{let r=mr();_n(e,t,n,{dur:.06,gain:.5,freq:2600*r,q:3}),B(e,t,n,{freq:1820*r,dur:.16,gain:.1}),B(e,t,n,{freq:2690*r,dur:.1,gain:.06}),B(e,t,n,{type:`triangle`,freq:160,to:90,dur:.08,gain:.35})},hitClub:(e,t,n)=>{let r=mr();_n(e,t,n,{dur:.14,gain:.55,filter:`lowpass`,freq:750*r}),B(e,t,n,{type:`triangle`,freq:95*r,to:50,dur:.18,gain:.55}),_n(e,t,n+.01,{dur:.08,gain:.2,filter:`highpass`,freq:4200})},hitLight:(e,t,n)=>_n(e,t,n,{dur:.05,gain:.4,freq:1250*mr(),q:1.2}),hitArrow:(e,t,n)=>{_n(e,t,n,{dur:.04,gain:.4,freq:1900*mr(),q:2}),B(e,t,n,{type:`triangle`,freq:420,to:220,dur:.05,gain:.3})},hitSpear:(e,t,n)=>{B(e,t,n,{type:`triangle`,freq:210*mr(),to:90,dur:.12,gain:.5}),_n(e,t,n,{dur:.08,gain:.35,freq:900,q:1.5})},hitBuilding:(e,t,n)=>{B(e,t,n,{type:`triangle`,freq:140*mr(),to:85,dur:.22,gain:.5}),_n(e,t,n,{dur:.12,gain:.35,freq:520,q:1.4})},throwArrow:(e,t,n)=>{B(e,t,n,{type:`triangle`,freq:190*mr(),to:172,dur:.18,gain:.3}),_n(e,t,n+.01,{dur:.16,gain:.18,filter:`highpass`,freq:2200,to:5e3})},throwSpear:(e,t,n)=>_n(e,t,n,{dur:.32,gain:.7,freq:500,to:2100,q:3,attack:.08}),throwEmber:(e,t,n)=>{_n(e,t,n,{dur:.4,gain:.3,filter:`lowpass`,freq:400,to:1800,attack:.05}),_n(e,t,n,{buffer:e.noise.crackle,dur:.4,gain:.45,filter:`highpass`,freq:700})},throwShard:(e,t,n)=>{yn(e,t,n,2200*mr(.04),.3,.07),_n(e,t,n,{dur:.3,gain:.2,filter:`highpass`,freq:3e3,to:6e3,attack:.05})},deathHearth:(e,t,n)=>{B(e,t,n,{type:`triangle`,freq:230,to:105,dur:.55,gain:.25,attack:.02}),_n(e,t,n+.18,{buffer:e.noise.brown,dur:.3,gain:.4,filter:`lowpass`,freq:500})},deathRime:(e,t,n)=>{for(let r=0;r<7;r++)B(e,t,n+r*.035+Math.random()*.02,{freq:2200+Math.random()*3800,dur:.12+Math.random()*.2,gain:.06});_n(e,t,n,{dur:.3,gain:.3,filter:`highpass`,freq:3500})},collapse:(e,t,n)=>{_n(e,t,n,{buffer:e.noise.brown,dur:1.5,gain:1.4,filter:`lowpass`,freq:380,to:120});for(let r=0;r<4;r++)B(e,t,n+r*.18+Math.random()*.08,{type:`triangle`,freq:110+Math.random()*60,to:50,dur:.3,gain:.4})},frostPulse:(e,t,n)=>{B(e,t,n,{freq:110,dur:1,gain:.25,attack:.15}),yn(e,t,n+.02,V(88),.9,.08),yn(e,t,n+.12,V(83),.9,.06),_n(e,t,n,{dur:.9,gain:.25,filter:`highpass`,freq:6e3,to:1500,attack:.1})},fuelOut:(e,t,n)=>{_n(e,t,n,{dur:1.1,gain:.35,freq:3200,to:380,q:.8,attack:.03}),_n(e,t,n,{buffer:e.noise.crackle,dur:.7,gain:.6,filter:`highpass`,freq:800}),B(e,t,n+.2,{type:`triangle`,freq:V(57),to:V(hr),dur:1,gain:.18,attack:.08})},blizzardRise:(e,t,n)=>{_n(e,t,n,{buffer:e.noise.brown,dur:2.8,gain:1.2,freq:260,to:1300,q:1.2,attack:1.4}),B(e,t,n+.4,{freq:880,to:1400,dur:2.3,gain:.04,attack:1})},blizzardFall:(e,t,n)=>_n(e,t,n,{buffer:e.noise.brown,dur:2.2,gain:.9,freq:1200,to:240,q:1.2,attack:.3}),win:(e,t,n)=>{let r=[[57,0,.3],[gr,.28,.3],[67,.56,.22],[69,.78,.5],[71,1.3,.3],[74,1.6,1.8]];for(let[i,a,o]of r)vn(e,t,n+a,V(i),o,.16);vn(e,t,n+1.6,V(66),1.8,.1),vn(e,t,n+1.6,V(69),1.8,.1);for(let r of[0,.56,.78,1.6])bn(e,t,n+r,60,.5,.45);yn(e,t,n+1.6,V(86),1.6,.05)},lose:(e,t,n)=>{vn(e,t,n,V(53),1.4,.12),vn(e,t,n+.9,V(51),1.6,.12),vn(e,t,n+2,V(48),2.2,.13),vn(e,t,n+2,V(36),2.4,.1);for(let r of[0,.9,2])bn(e,t,n+r,48,.55,.6);_n(e,t,n+1.5,{buffer:e.noise.brown,dur:2.8,gain:.8,freq:700,to:250,q:1,attack:.8})}};function vr(e,t,n,r){let i=r.kind===`order`,a=[0,2,0,-2][Math.floor(Math.random()*4)];if(r.team===`hearth`){let o={settler:69,shieldbearer:52,hunter:64,warden:gr}[r.unit]+a;switch(r.unit){case`settler`:B(e,t,n,{type:`triangle`,freq:980,dur:.05,gain:.25}),vn(e,t,n+.04,V(i?o-2:o),.12,.09);break;case`shieldbearer`:vn(e,t,n,V(o),.14,.13),vn(e,t,n+.12,V(i?o:o+5),.2,.13),bn(e,t,n+(i?0:.12),65,.4),i&&bn(e,t,n+.12,65,.3);break;case`hunter`:vn(e,t,n,V(o),.09,.11),vn(e,t,n+.09,V(i?o-3:o+3),.16,.11),i&&B(e,t,n+.05,{type:`triangle`,freq:760,dur:.04,gain:.15});break;case`warden`:vn(e,t,n,V(o),.38,.07),vn(e,t,n+.04,V(o+7),.34,.06),i&&vn(e,t,n+.2,V(o+5),.25,.06)}return}let o={settler:88,shieldbearer:76,hunter:83,warden:81}[r.unit]+a;switch(r.unit){case`settler`:yn(e,t,n,V(o),.25,.16),i&&yn(e,t,n+.08,V(o-2),.2,.11);break;case`shieldbearer`:xn(e,t,n,V(40+(i?0:2)),.42,.28),yn(e,t,n+.05,V(o),.3,.06);break;case`hunter`:yn(e,t,n,V(o),.2,.08),yn(e,t,n+.07,V(i?o-5:o+2),.24,.07);break;case`warden`:xn(e,t,n,V(45),.5,.16);for(let r=0;r<3;r++)yn(e,t,n+r*.05,V(o+r*(i?-3:4)),.4,.05)}}var yr=.25;function br(){try{return globalThis.localStorage??null}catch{return null}}var xr=class{mixer=new Rn(br());limiter=new Bn;director=new fr;ackSource=null;stats={played:0,dropped:0,acks:0,ambience:!1,music:!1,mood:`explore`,context:`none`};engine=null;ambience=null;music=null;background=!1;sceneTimer=0;lastSimTime=0;applied={master:-1,music:-1,sfx:-1,ambience:-1};constructor(){jn(),globalThis.document?.addEventListener(`visibilitychange`,()=>{document.hidden?this.engine?.suspend():this.resume()})}ensure(){if(!this.engine){if(this.engine=On.create(),!this.engine)return null;this.ambience=new Cn(this.engine),this.music=new $n(this.engine),this.applyBuses(!0),this.background&&this.startBackground()}return this.engine}async unlock(){this.engine?.ctx.state===`running`||this.mixer.settings.muted||await this.ensure()?.unlock().catch(()=>void 0)}resume(){let e=this.engine;e&&!this.mixer.settings.muted&&e.ctx.state!==`running`&&e.ctx.resume().catch(()=>void 0)}get isMuted(){return this.mixer.settings.muted}setMuted(e){this.mixer.setMuted(e),this.applyBuses(),e?this.engine?.suspend():this.ensure()?.unlock()}volume(e){return this.mixer.settings[e]}setVolume(e,t){this.mixer.set(e,t),this.applyBuses()}setPaused(e){this.mixer.paused=e,this.applyBuses()}play(e){if(e===`select`||e===`move`)return this.ack(e===`select`?`select`:`order`);this.cue(ir(e,.9))}ack(e){let t=this.live(),n=pr(this.ackSource?.()??[],e);if(!t||!n)return this.cue(ir(`tap`,.8));let r=this.limiter.admit({sound:`ack`,priority:7,duration:.5},t.now);if(!r.ok)return;let i=t.channel(r.id,t.now+.6,.9,0,r.steal);i&&(vr(t,i.input,t.now+.005,n),this.stats.acks++)}handle(e,t,n){if(!e.length)return;let r=lr(e,t,n);this.director.noteCombat(r.combat);for(let e of r.cues)this.cue(e)}update(e,t,n){if(this.stats.context=this.engine?.ctx.state??`none`,this.mixer.update(n),this.applyBuses(),!this.live()){this.lastSimTime=e.time;return}e.time<this.lastSimTime&&(this.lastSimTime=e.time);for(let n of ur(e,t,this.lastSimTime,e.time))this.cue(n);if(this.lastSimTime=e.time,this.sceneTimer-=n,this.sceneTimer>0)return;this.sceneTimer=yr;let r=dr(e,t);this.ambience?.update(r);let i=this.director.update(yr,r);this.stats.mood=this.director.mood,this.music?.setLayers(i)}startBackground(){this.background=!0,this.director.layers={calm:1,tension:0,combat:0,blizzard:0},this.engine&&(this.ambience?.start(),this.music?.start(),this.stats.ambience=this.stats.music=!0)}stopBackground(){this.background=!1,this.ambience?.stop(),this.music?.stop(),this.stats.ambience=this.stats.music=!1}live(){let e=this.engine;return e&&!this.mixer.settings.muted&&e.ctx.state===`running`?e:null}cue(e){let t=this.live();if(!t)return;let n=this.limiter.admit({sound:e.sound,priority:e.priority,duration:rr[e.sound]},t.now);if(!n.ok){this.stats.dropped++;return}let r=t.channel(n.id,t.now+rr[e.sound]+.1,e.gain,e.pan,n.steal);r&&(_r[e.sound](t,r.input,t.now+.005),e.duck&&this.mixer.pushDuck(e.duck),this.stats.played++)}applyBuses(e=!1){let t=this.engine;if(t)for(let n of Mn){let r=this.mixer.level(n);(e||Math.abs(r-this.applied[n])>.005)&&(t.setBus(n,r),this.applied[n]=r)}}};function H(e,t={},...n){let[r,...i]=e.split(`.`),a=document.createElement(r);i.length&&(a.className=i.join(` `)),t.text!==void 0&&(a.textContent=t.text);for(let[e,n]of Object.entries(t.attrs??{}))a.setAttribute(e,n);if(t.onTap){let e=t.onTap;a.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation(),e(t)})}for(let e of n)a.append(e);return a}function Sr(e,t){e.textContent!==t&&(e.textContent=t)}var Cr={timber:`<svg viewBox="0 0 24 24"><rect x="3" y="13" width="18" height="5" rx="2.5" fill="#a77a4c"/>
<rect x="5" y="7" width="14" height="5" rx="2.5" fill="#7b5434"/><circle cx="19" cy="15.5" r="2" fill="#e3c08a"/>
<circle cx="17" cy="9.5" r="2" fill="#d1aa72"/></svg>`,emberstone:`<svg viewBox="0 0 24 24"><path d="M12 2l6 8-6 12-6-12z" fill="#ff8a2a"/>
<path d="M12 2l3 8-3 12z" fill="#ffd36a"/></svg>`,people:`<svg viewBox="0 0 24 24"><circle cx="8" cy="7" r="3" fill="#d9e3ec"/><circle cx="16" cy="7" r="3"
fill="#d9e3ec"/><path d="M2 20c0-4 3-7 6-7s6 3 6 7zM10 20c0-4 3-7 6-7s6 3 6 7z" fill="#d9e3ec"/></svg>`},wr=[[`master`,`Volume`],[`music`,`Music`],[`sfx`,`Effects`],[`ambience`,`Ambience`]],Tr=`
.audio-settings { display: grid; grid-template-columns: auto 1fr; gap: 6px 14px; align-items: center;
  margin: 14px 0 4px; text-align: left; font-size: 15px; }
.audio-settings input[type=range] { width: 100%; min-height: 44px; accent-color: #e8a04a; touch-action: none; }
`;function Er(e){if(!document.getElementById(`audio-settings-css`)){let e=H(`style`,{text:Tr,attrs:{id:`audio-settings-css`}});document.head.append(e)}let t=H(`div.audio-settings`,{attrs:{"data-testid":`audio-settings`}});for(let[n,r]of wr){let i=H(`input`,{attrs:{type:`range`,min:`0`,max:`100`,step:`1`,"aria-label":r,"data-bus":n}});i.value=String(Math.round(e.volume(n)*100)),i.addEventListener(`input`,()=>e.setVolume(n,Number(i.value)/100)),i.addEventListener(`pointerdown`,e=>e.stopPropagation()),t.append(H(`label`,{text:r}),i)}return t}var Dr=12,Or=450,kr=class{el;h;pointers=new Map;mode=`none`;longPress=0;pinchDist=0;pinchMid={x:0,y:0};constructor(e,t){this.el=e,this.h=t,e.addEventListener(`pointerdown`,e=>this.down(e)),e.addEventListener(`pointermove`,e=>this.move(e)),e.addEventListener(`pointerup`,e=>this.up(e)),e.addEventListener(`pointercancel`,e=>this.cancel(e)),e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`wheel`,e=>{e.preventDefault(),t.zoom(Math.exp(e.deltaY*.0015))},{passive:!1})}local(e){let t=this.el.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}down(e){e.preventDefault(),this.el.setPointerCapture?.(e.pointerId);let t=this.local(e);if(this.pointers.set(e.pointerId,{...t,startX:t.x,startY:t.y,type:e.pointerType,button:e.button}),clearTimeout(this.longPress),this.pointers.size===1)this.mode=`pending`,e.pointerType!==`mouse`&&(this.longPress=window.setTimeout(()=>{if(this.mode!==`pending`)return;this.mode=`box`,navigator.vibrate?.(15);let e=[...this.pointers.values()][0];this.h.box({x0:e.startX,y0:e.startY,x1:e.x,y1:e.y},!1)},Or));else if(this.pointers.size===2){this.mode===`box`&&this.h.box(null,!0),this.mode=`pinch`;let[e,t]=[...this.pointers.values()];this.pinchDist=Math.hypot(e.x-t.x,e.y-t.y),this.pinchMid={x:(e.x+t.x)/2,y:(e.y+t.y)/2}}}move(e){let t=this.local(e),n=this.pointers.get(e.pointerId);if(!n){e.pointerType===`mouse`&&this.h.hover(t.x,t.y);return}e.preventDefault();let r=t.x-n.x,i=t.y-n.y;if(n.x=t.x,n.y=t.y,this.mode===`pending`){if(Math.hypot(t.x-n.startX,t.y-n.startY)<Dr)return;clearTimeout(this.longPress);let e=n.type===`mouse`&&n.button===0;this.mode=this.h.boxMode()||e?`box`:`pan`}if(this.mode===`pan`)this.h.pan(r,i);else if(this.mode===`box`)this.h.box({x0:n.startX,y0:n.startY,x1:t.x,y1:t.y},!1);else if(this.mode===`pinch`&&this.pointers.size>=2){let[e,t]=[...this.pointers.values()],n=Math.hypot(e.x-t.x,e.y-t.y),r={x:(e.x+t.x)/2,y:(e.y+t.y)/2};this.pinchDist>0&&n>0&&this.h.zoom(this.pinchDist/n),this.h.pan(r.x-this.pinchMid.x,r.y-this.pinchMid.y),this.pinchDist=n,this.pinchMid=r}n.type===`mouse`&&this.h.hover(t.x,t.y)}up(e){let t=this.pointers.get(e.pointerId);t&&(e.preventDefault(),clearTimeout(this.longPress),this.pointers.delete(e.pointerId),this.mode===`pending`?this.h.tap(t.x,t.y,t.type===`mouse`&&t.button===2):this.mode===`box`&&this.h.box({x0:t.startX,y0:t.startY,x1:t.x,y1:t.y},!0),this.mode=this.pointers.size>0?`done`:`none`)}cancel(e){clearTimeout(this.longPress),this.pointers.delete(e.pointerId),this.mode===`box`&&this.h.box(null,!0),this.mode=this.pointers.size>0?`done`:`none`}},Ar=1e3,jr=1001,Mr=1002,Nr=1003,Pr=1004,Fr=1005,Ir=1006,Lr=1007,Rr=1008,zr=1009,Br=1010,Vr=1011,Hr=1012,Ur=1013,Wr=1014,Gr=1015,Kr=1016,qr=1017,Jr=1018,Yr=1020,Xr=35902,Zr=35899,Qr=1021,$r=1022,ei=1023,ti=1026,ni=1027,ri=1028,ii=1029,ai=1030,oi=1031,si=1033,ci=33776,li=33777,ui=33778,di=33779,fi=35840,pi=35841,mi=35842,hi=35843,gi=36196,_i=37492,vi=37496,yi=37488,bi=37489,xi=37490,Si=37491,Ci=37808,wi=37809,Ti=37810,Ei=37811,Di=37812,Oi=37813,ki=37814,Ai=37815,ji=37816,Mi=37817,Ni=37818,Pi=37819,Fi=37820,Ii=37821,Li=36492,Ri=36494,zi=36495,Bi=36283,Vi=36284,Hi=36285,Ui=36286,Wi=2300,Gi=2301,Ki=2302,qi=2303,Ji=2400,Yi=2401,Xi=2402,Zi=3200,Qi=`srgb`,$i=`srgb-linear`,ea=`linear`,ta=`srgb`,na=7680,ra=35044,ia=35048,aa=2e3;function oa(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function sa(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ca(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function la(){let e=ca(`canvas`);return e.style.display=`block`,e}var ua={};function da(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function fa(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=fa(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=fa(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function pa(...e){let t=e.join(` `);t in ua||(ua[t]=!0,U(...e))}function ma(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ha={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ga=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},_a=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),va=1234567,ya=Math.PI/180,ba=180/Math.PI;function xa(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_a[e&255]+_a[e>>8&255]+_a[e>>16&255]+_a[e>>24&255]+`-`+_a[t&255]+_a[t>>8&255]+`-`+_a[t>>16&15|64]+_a[t>>24&255]+`-`+_a[n&63|128]+_a[n>>8&255]+`-`+_a[n>>16&255]+_a[n>>24&255]+_a[r&255]+_a[r>>8&255]+_a[r>>16&255]+_a[r>>24&255]).toLowerCase()}function G(e,t,n){return Math.max(t,Math.min(n,e))}function Sa(e,t){return(e%t+t)%t}function Ca(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function wa(e,t,n){return e===t?0:(n-e)/(t-e)}function Ta(e,t,n){return(1-n)*e+n*t}function Ea(e,t,n,r){return Ta(e,t,1-Math.exp(-n*r))}function Da(e,t=1){return t-Math.abs(Sa(e,t*2)-t)}function Oa(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ka(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Aa(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ja(e,t){return e+Math.random()*(t-e)}function Ma(e){return e*(.5-Math.random())}function Na(e){e!==void 0&&(va=e);let t=va+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pa(e){return e*ya}function Fa(e){return e*ba}function Ia(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function La(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ra(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function za(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:U(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ba(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Va(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Ha={DEG2RAD:ya,RAD2DEG:ba,generateUUID:xa,clamp:G,euclideanModulo:Sa,mapLinear:Ca,inverseLerp:wa,lerp:Ta,damp:Ea,pingpong:Da,smoothstep:Oa,smootherstep:ka,randInt:Aa,randFloat:ja,randFloatSpread:Ma,seededRandom:Na,degToRad:Pa,radToDeg:Fa,isPowerOfTwo:Ia,ceilPowerOfTwo:La,floorPowerOfTwo:Ra,setQuaternionFromProperEuler:za,normalize:Va,denormalize:Ba},K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ua=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(G(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ga.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wa=new q,Ga=new Ua,J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return pa(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return pa(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return pa(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ka=new J,qa=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ja=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ya(){let e={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Xa(e.r),e.g=Xa(e.g),e.b=Xa(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Za(e.r),e.g=Za(e.g),e.b=Za(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ea:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return pa(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return pa(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[$i]:{primaries:t,whitePoint:r,transfer:ea,toXYZ:qa,fromXYZ:Ja,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qi},outputColorSpaceConfig:{drawingBufferColorSpace:Qi}},[Qi]:{primaries:t,whitePoint:r,transfer:ta,toXYZ:qa,fromXYZ:Ja,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qi}}}),e}var Y=Ya();function Xa(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Za(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Qa,$a=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qa===void 0&&(Qa=ca(`canvas`)),Qa.width=e.width,Qa.height=e.height;let t=Qa.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Qa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ca(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Xa(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Xa(t[e]/255)*255):t[e]=Xa(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},eo=0,to=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eo++}),this.uuid=xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(no(r[t].image)):e.push(no(r[t]))}else e=no(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function no(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?$a.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var ro=0,io=new q,ao=class e extends ga{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=jr,i=jr,a=Ir,o=Rr,s=ei,c=zr,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ro++}),this.uuid=xa(),this.name=``,this.source=new to(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(io).x}get height(){return this.source.getSize(io).y}get depth(){return this.source.getSize(io).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x-=Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case Mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y-=Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case Mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ao.DEFAULT_IMAGE=null,ao.DEFAULT_MAPPING=300,ao.DEFAULT_ANISOTROPY=1;var oo=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this.w=G(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this.w=G(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},so=class extends ga{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ir,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new oo(0,0,e,t),this.scissorTest=!1,this.viewport=new oo(0,0,e,t),this.textures=[];let r=new ao({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ir,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new to(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},co=class extends so{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lo=class extends ao{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nr,this.minFilter=Nr,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},uo=class extends ao{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nr,this.minFilter=Nr,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},fo=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/po.setFromMatrixColumn(e,0).length(),i=1/po.setFromMatrixColumn(e,1).length(),a=1/po.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ho,e,go)}lookAt(e,t,n){let r=this.elements;return yo.subVectors(e,t),yo.lengthSq()===0&&(yo.z=1),yo.normalize(),_o.crossVectors(n,yo),_o.lengthSq()===0&&(Math.abs(n.z)===1?yo.x+=1e-4:yo.z+=1e-4,yo.normalize(),_o.crossVectors(n,yo)),_o.normalize(),vo.crossVectors(yo,_o),r[0]=_o.x,r[4]=vo.x,r[8]=yo.x,r[1]=_o.y,r[5]=vo.y,r[9]=yo.y,r[2]=_o.z,r[6]=vo.z,r[10]=yo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*P,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*P,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*P,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=po.set(r[0],r[1],r[2]).length(),o=po.set(r[4],r[5],r[6]).length(),s=po.set(r[8],r[9],r[10]).length();i<0&&(a=-a),mo.copy(this);let c=1/a,l=1/o,u=1/s;return mo.elements[0]*=c,mo.elements[1]*=c,mo.elements[2]*=c,mo.elements[4]*=l,mo.elements[5]*=l,mo.elements[6]*=l,mo.elements[8]*=u,mo.elements[9]*=u,mo.elements[10]*=u,t.setFromRotationMatrix(mo),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=aa,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=aa,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},po=new q,mo=new fo,ho=new q(0,0,0),go=new q(1,1,1),_o=new q,vo=new q,yo=new q,bo=new fo,xo=new Ua,So=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(G(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-G(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(G(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-G(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(G(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-G(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xo.setFromEuler(this),this.setFromQuaternion(xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};So.DEFAULT_ORDER=`XYZ`;var Co=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},wo=0,To=new q,Eo=new Ua,Do=new fo,Oo=new q,ko=new q,Ao=new q,jo=new Ua,Mo=new q(1,0,0),No=new q(0,1,0),Po=new q(0,0,1),Fo={type:`added`},Io={type:`removed`},Lo={type:`childadded`,child:null},Ro={type:`childremoved`,child:null},zo=class e extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wo++}),this.uuid=xa(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new So,r=new Ua,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fo},normalMatrix:{value:new J}}),this.matrix=new fo,this.matrixWorld=new fo,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Eo.setFromAxisAngle(e,t),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(e,t){return Eo.setFromAxisAngle(e,t),this.quaternion.premultiply(Eo),this}rotateX(e){return this.rotateOnAxis(Mo,e)}rotateY(e){return this.rotateOnAxis(No,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mo,e)}translateY(e){return this.translateOnAxis(No,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Do.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oo.copy(e):Oo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Do.lookAt(ko,Oo,this.up):Do.lookAt(Oo,ko,this.up),this.quaternion.setFromRotationMatrix(Do),r&&(Do.extractRotation(r.matrixWorld),Eo.setFromRotationMatrix(Do),this.quaternion.premultiply(Eo.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fo),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Io),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Do.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Do.multiply(e.parent.matrixWorld)),e.applyMatrix4(Do),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fo),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,Ao),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,jo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};zo.DEFAULT_UP=new q(0,1,0),zo.DEFAULT_MATRIX_AUTO_UPDATE=!0,zo.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bo=class extends zo{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Vo={type:`move`},Ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vo)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wo={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Ko(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Y.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Y.workingColorSpace){return this.r=e,this.g=t,this.b=n,Y.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Y.workingColorSpace){if(e=Sa(e,1),t=G(t,0,1),n=G(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ko(i,r,e+1/3),this.g=Ko(i,r,e),this.b=Ko(i,r,e-1/3)}return Y.colorSpaceToWorking(this,r),this}setStyle(e,t=Qi){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qi){let n=Uo[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qi){return Y.workingToColorSpace(qo.copy(this),e),Math.round(G(qo.r*255,0,255))*65536+Math.round(G(qo.g*255,0,255))*256+Math.round(G(qo.b*255,0,255))}getHexString(e=Qi){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Y.workingColorSpace){Y.workingToColorSpace(qo.copy(this),t);let n=qo.r,r=qo.g,i=qo.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Y.workingColorSpace){return Y.workingToColorSpace(qo.copy(this),t),e.r=qo.r,e.g=qo.g,e.b=qo.b,e}getStyle(e=Qi){Y.workingToColorSpace(qo.copy(this),e);let t=qo.r,n=qo.g,r=qo.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Wo),this.setHSL(Wo.h+e,Wo.s+t,Wo.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wo),e.getHSL(Go);let n=Ta(Wo.h,Go.h,t),r=Ta(Wo.s,Go.s,t),i=Ta(Wo.l,Go.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qo=new X;X.NAMES=Uo;var Jo=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new X(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yo=class extends zo{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new So,this.environmentIntensity=1,this.environmentRotation=new So,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xo=new q,Zo=new q,Qo=new q,$o=new q,es=new q,ts=new q,ns=new q,rs=new q,is=new q,as=new q,os=new oo,ss=new oo,cs=new oo,ls=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xo.subVectors(e,t),r.cross(Xo);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Xo.subVectors(r,t),Zo.subVectors(n,t),Qo.subVectors(e,t);let a=Xo.dot(Xo),o=Xo.dot(Zo),s=Xo.dot(Qo),c=Zo.dot(Zo),l=Zo.dot(Qo),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$o)!==null&&$o.x>=0&&$o.y>=0&&$o.x+$o.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,$o)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,$o.x),s.addScaledVector(a,$o.y),s.addScaledVector(o,$o.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return os.setScalar(0),ss.setScalar(0),cs.setScalar(0),os.fromBufferAttribute(e,t),ss.fromBufferAttribute(e,n),cs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(os,i.x),a.addScaledVector(ss,i.y),a.addScaledVector(cs,i.z),a}static isFrontFacing(e,t,n,r){return Xo.subVectors(n,t),Zo.subVectors(e,t),Xo.cross(Zo).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xo.subVectors(this.c,this.b),Zo.subVectors(this.a,this.b),Xo.cross(Zo).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;es.subVectors(r,n),ts.subVectors(i,n),rs.subVectors(e,n);let s=es.dot(rs),c=ts.dot(rs);if(s<=0&&c<=0)return t.copy(n);is.subVectors(e,r);let l=es.dot(is),u=ts.dot(is);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(es,a);as.subVectors(e,i);let f=es.dot(as),p=ts.dot(as);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ts,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ns.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ns,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},us=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,fs):fs.fromBufferAttribute(r,t),fs.applyMatrix4(e.matrixWorld),this.expandByPoint(fs);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fs),fs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),xs.subVectors(this.max,bs),ms.subVectors(e.a,bs),hs.subVectors(e.b,bs),gs.subVectors(e.c,bs),_s.subVectors(hs,ms),vs.subVectors(gs,hs),ys.subVectors(ms,gs);let t=[0,-_s.z,_s.y,0,-vs.z,vs.y,0,-ys.z,ys.y,_s.z,0,-_s.x,vs.z,0,-vs.x,ys.z,0,-ys.x,-_s.y,_s.x,0,-vs.y,vs.x,0,-ys.y,ys.x,0];return!ws(t,ms,hs,gs,xs)||(t=[1,0,0,0,1,0,0,0,1],!ws(t,ms,hs,gs,xs))?!1:(Ss.crossVectors(_s,vs),t=[Ss.x,Ss.y,Ss.z],ws(t,ms,hs,gs,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ds)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ds=[new q,new q,new q,new q,new q,new q,new q,new q],fs=new q,ps=new us,ms=new q,hs=new q,gs=new q,_s=new q,vs=new q,ys=new q,bs=new q,xs=new q,Ss=new q,Cs=new q;function ws(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Cs.fromArray(e,a);let o=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),s=t.dot(Cs),c=n.dot(Cs),l=r.dot(Cs);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ts=new q,Es=new K,Ds=0,Os=class extends ga{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ds++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ra,this.updateRanges=[],this.gpuType=Gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXYZ(t,Ts.x,Ts.y,Ts.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix4(e),this.setXYZ(t,Ts.x,Ts.y,Ts.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyNormalMatrix(e),this.setXYZ(t,Ts.x,Ts.y,Ts.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.transformDirection(e),this.setXYZ(t,Ts.x,Ts.y,Ts.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ba(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Va(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ba(t,this.array)),t}setX(e,t){return this.normalized&&(t=Va(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ba(t,this.array)),t}setY(e,t){return this.normalized&&(t=Va(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ba(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Va(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ba(t,this.array)),t}setW(e,t){return this.normalized&&(t=Va(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Va(t,this.array),n=Va(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Va(t,this.array),n=Va(n,this.array),r=Va(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Va(t,this.array),n=Va(n,this.array),r=Va(r,this.array),i=Va(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},ks=class extends Os{constructor(e,t,n){super(new Uint16Array(e),t,n)}},As=class extends Os{constructor(e,t,n){super(new Uint32Array(e),t,n)}},js=class extends Os{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ms=new us,Ns=new q,Ps=new q,Fs=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ms.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);let t=Ns.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ns,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Ps)),this.expandByPoint(Ns.copy(e.center).sub(Ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Is=0,Ls=new fo,Rs=new zo,zs=new q,Bs=new us,Vs=new us,Hs=new q,Us=class e extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Is++}),this.uuid=xa(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(oa(e)?As:ks)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ls.makeRotationFromQuaternion(e),this.applyMatrix4(Ls),this}rotateX(e){return Ls.makeRotationX(e),this.applyMatrix4(Ls),this}rotateY(e){return Ls.makeRotationY(e),this.applyMatrix4(Ls),this}rotateZ(e){return Ls.makeRotationZ(e),this.applyMatrix4(Ls),this}translate(e,t,n){return Ls.makeTranslation(e,t,n),this.applyMatrix4(Ls),this}scale(e,t,n){return Ls.makeScale(e,t,n),this.applyMatrix4(Ls),this}lookAt(e){return Rs.lookAt(e),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new js(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Bs.setFromBufferAttribute(n),this.morphTargetsRelative?(Hs.addVectors(this.boundingBox.min,Bs.min),this.boundingBox.expandByPoint(Hs),Hs.addVectors(this.boundingBox.max,Bs.max),this.boundingBox.expandByPoint(Hs)):(this.boundingBox.expandByPoint(Bs.min),this.boundingBox.expandByPoint(Bs.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);else if(e){let n=this.boundingSphere.center;if(Bs.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Vs.setFromBufferAttribute(n),this.morphTargetsRelative?(Hs.addVectors(Bs.min,Vs.min),Bs.expandByPoint(Hs),Hs.addVectors(Bs.max,Vs.max),Bs.expandByPoint(Hs)):(Bs.expandByPoint(Vs.min),Bs.expandByPoint(Vs.max))}Bs.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Hs.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Hs));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Hs.fromBufferAttribute(a,t),o&&(zs.fromBufferAttribute(e,t),Hs.add(zs)),r=Math.max(r,n.distanceToSquared(Hs))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Os(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Os(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Hs.fromBufferAttribute(e,t),Hs.normalize(),e.setXYZ(t,Hs.x,Hs.y,Hs.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Os(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ws=new q,Gs=new q,Ks=new J,qs=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ws.subVectors(n,t).cross(Gs.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ws),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ks.getNormalMatrix(e),r=this.coplanarPoint(Ws).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Js=0,Ys=class extends ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Js++}),this.uuid=xa(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new X().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new qs().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Xs=new q,Zs=new q,Qs=new q,$s=new q,ec=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xs.copy(this.origin).addScaledVector(this.direction,t),Xs.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zs.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),$s.copy(this.origin).sub(Zs);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=$s.dot(this.direction),s=-$s.dot(Qs),c=$s.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Zs).addScaledVector(Qs,d),f}intersectSphere(e,t){if(e.radius<0)return null;Xs.subVectors(e.center,this.origin);let n=Xs.dot(this.direction),r=Xs.dot(Xs)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xs)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,te=C/w,P=1/w,ne=T-ee*D,re=E-te*D,ie=O-ee*A,ae=k-te*A,oe=j-ee*N,se=M-te*N,ce=oe*ae-se*ie,le=ne*se-re*oe,ue=ie*re-ae*ne;if(r){if(ce<0||le<0||ue<0)return null}else if((ce<0||le<0||ue<0)&&(ce>0||le>0||ue>0))return null;let de=ce+le+ue;if(de===0)return null;let fe=P*(ce*D+le*A+ue*N);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tc=class extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new So,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nc=new fo,rc=new ec,ic=new Fs,ac=new q,oc=new q,sc=new q,cc=new q,lc=new q,uc=new q,dc=new q,fc=new q,pc=class extends zo{constructor(e=new Us,t=new tc){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){uc.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(lc.fromBufferAttribute(s,e),a?uc.addScaledVector(lc,r):uc.addScaledVector(lc.sub(t),r))}t.add(uc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(i),rc.copy(e.ray).recast(e.near),ic.containsPoint(rc.origin)===!1&&(rc.intersectSphere(ic,ac)===null||rc.origin.distanceToSquared(ac)>(e.far-e.near)**2)||(nc.copy(i).invert(),rc.copy(e.ray).applyMatrix4(nc),(n.boundingBox===null||rc.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,rc)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=hc(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=hc(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=hc(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=hc(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function mc(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;fc.copy(s),fc.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(fc);return l<n.near||l>n.far?null:{distance:l,point:fc.clone(),object:e}}function hc(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,oc),e.getVertexPosition(c,sc),e.getVertexPosition(l,cc);let u=mc(e,t,n,r,oc,sc,cc,dc);if(u){let e=new q;ls.getBarycoord(dc,oc,sc,cc,e),i&&(u.uv=ls.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=ls.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=ls.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};ls.getNormal(oc,sc,cc,t.normal),u.face=t,u.barycoord=e}return u}var gc=class extends ao{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Nr,l=Nr,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_c=class extends Os{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vc=new fo,yc=new fo,bc=[],xc=new us,Sc=new fo,Cc=new pc,wc=new Fs,Tc=class extends pc{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Sc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new us),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vc),xc.copy(e.boundingBox).applyMatrix4(vc),this.boundingBox.union(xc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vc),wc.copy(e.boundingSphere).applyMatrix4(vc),this.boundingSphere.union(wc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Cc.geometry=this.geometry,Cc.material=this.material,Cc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wc.copy(this.boundingSphere),wc.applyMatrix4(n),e.ray.intersectsSphere(wc)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,vc),yc.multiplyMatrices(n,vc),Cc.matrixWorld=yc,Cc.raycast(e,bc);for(let e=0,n=bc.length;e<n;e++){let n=bc[e];n.instanceId=i,n.object=this,t.push(n)}bc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new gc(new Float32Array(r*this.count),r,this.count,ri,Gr));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ec=new Fs,Dc=new K(.5,.5),Oc=new q,kc=class{constructor(e=new qs,t=new qs,n=new qs,r=new qs,i=new qs,a=new qs){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=aa,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ec.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ec.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ec)}intersectsSprite(e){return Ec.center.set(0,0,0),Ec.radius=.7071067811865476+Dc.distanceTo(e.center),Ec.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ec)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Oc.x=r.normal.x>0?e.max.x:e.min.x,Oc.y=r.normal.y>0?e.max.y:e.min.y,Oc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ac=class extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new X(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jc=new fo,Mc=new ec,Nc=new Fs,Pc=new q,Fc=class extends zo{constructor(e=new Us,t=new Ac){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nc.copy(n.boundingSphere),Nc.applyMatrix4(r),Nc.radius+=i,e.ray.intersectsSphere(Nc)===!1)return;jc.copy(r).invert(),Mc.copy(e.ray).applyMatrix4(jc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Pc.fromBufferAttribute(l,n),Ic(Pc,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Pc.fromBufferAttribute(l,a),Ic(Pc,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ic(e,t,n,r,i,a,o){let s=Mc.distanceSqToPoint(e);if(s<n){let n=new q;Mc.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Lc=class extends ao{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rc=class extends ao{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zc=class extends ao{constructor(e,t,n=Wr,r,i,a,o=Nr,s=Nr,c,l=ti,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bc=class extends zc{constructor(e,t=Wr,n=301,r,i,a=Nr,o=Nr,s,c=ti){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vc=class extends ao{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hc=class e extends Us{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new js(c,3)),this.setAttribute(`normal`,new js(l,3)),this.setAttribute(`uv`,new js(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Uc=class e extends Us{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new js(u,3)),this.setAttribute(`normal`,new js(d,3)),this.setAttribute(`uv`,new js(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wc=class e extends Uc{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gc=class e extends Us{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new js(i,3)),this.setAttribute(`normal`,new js(i.slice(),3)),this.setAttribute(`uv`,new js(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new q,r=new q,i=new q;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new q;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new q;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new q,t=new q,n=new q,r=new q,o=new K,s=new K,c=new K;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Kc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){U(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,r=[],i=[],a=[],o=new q,s=new fo;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new q)}i[0]=new q,a[0]=new q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(G(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(G(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qc=class extends Kc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new K){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jc=class extends qc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Yc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Xc=new q,Zc=new q,Qc=new Yc,$c=new Yc,el=new Yc,tl=class extends Kc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Zc.subVectors(r[0],r[1]).add(r[0]),c=Zc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Xc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Xc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Qc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),$c.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),el.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Qc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),$c.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),el.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Qc.calc(s),$c.calc(s),el.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nl(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function rl(e,t){let n=1-e;return n*n*t}function il(e,t){return 2*(1-e)*e*t}function al(e,t){return e*e*t}function ol(e,t,n,r){return rl(e,t)+il(e,n)+al(e,r)}function sl(e,t){let n=1-e;return n*n*n*t}function cl(e,t){let n=1-e;return 3*n*n*e*t}function ll(e,t){return 3*(1-e)*e*e*t}function ul(e,t){return e*e*e*t}function dl(e,t,n,r,i){return sl(e,t)+cl(e,n)+ll(e,r)+ul(e,i)}var fl=class extends Kc{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(dl(e,r.x,i.x,a.x,o.x),dl(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends Kc{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(dl(e,r.x,i.x,a.x,o.x),dl(e,r.y,i.y,a.y,o.y),dl(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ml=class extends Kc{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends Kc{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends Kc{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ol(e,r.x,i.x,a.x),ol(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends Kc{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ol(e,r.x,i.x,a.x),ol(e,r.y,i.y,a.y),ol(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends Kc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(nl(o,s.x,c.x,l.x,u.x),nl(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}},yl=Object.freeze({__proto__:null,ArcCurve:Jc,CatmullRomCurve3:tl,CubicBezierCurve:fl,CubicBezierCurve3:pl,EllipseCurve:qc,LineCurve:ml,LineCurve3:hl,QuadraticBezierCurve:gl,QuadraticBezierCurve3:_l,SplineCurve:vl}),bl=class extends Kc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new yl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new yl[n.type]().fromJSON(n))}return this}},xl=class extends bl{constructor(e){super(),this.type=`Path`,this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ml(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new gl(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new fl(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new vl([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new qc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Sl=class extends xl{constructor(e){super(e),this.uuid=xa(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new xl().fromJSON(n))}return this}};function Cl(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=wl(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=jl(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return El(a,o,n,s,c,l,0),o}function wl(e,t,n,r,i){let a;if(i===tu(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ql(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ql(i/r|0,e[i],e[i+1],a);return a&&Wl(a,a.next)&&($l(a),a=a.next),a}function Tl(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Wl(n,n.next)||Ul(n.prev,n,n.next)===0)){if($l(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function El(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Il(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ol(e,r,i,a):Dl(e))t.push(c.i,e.i,l.i),$l(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=kl(Tl(e),t),El(e,t,n,r,i,a,2)):o===2&&Al(e,t,n,r,i,a):El(Tl(e),t,n,r,i,a,1);break}}}function Dl(e){let t=e.prev,n=e,r=e.next;if(Ul(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Vl(i,s,a,c,o,l,m.x,m.y)&&Ul(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ol(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ul(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Rl(p,m,t,n,r),v=Rl(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Vl(s,u,c,d,l,f,y.x,y.y)&&Ul(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Vl(s,u,c,d,l,f,b.x,b.y)&&Ul(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Vl(s,u,c,d,l,f,y.x,y.y)&&Ul(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Vl(s,u,c,d,l,f,b.x,b.y)&&Ul(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function kl(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Wl(r,i)&&Gl(r,n,n.next,i)&&Yl(r,i)&&Yl(i,r)&&(t.push(r.i,n.i,i.i),$l(n),$l(n.next),n=e=i),n=n.next}while(n!==e);return Tl(n)}function Al(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Hl(o,e)){let s=Zl(o,e);o=Tl(o,o.next),s=Tl(s,s.next),El(o,t,n,r,i,a,0),El(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function jl(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=wl(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(zl(o))}i.sort(Ml);for(let e=0;e<i.length;e++)n=Nl(i[e],n);return n}function Ml(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Nl(e,t){let n=Pl(e,t);if(!n)return t;let r=Zl(n,e);return Tl(r,r.next),Tl(n,n.next)}function Pl(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Wl(e,n))return n;do{if(Wl(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Bl(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Yl(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Fl(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Fl(e,t){return Ul(e.prev,e,t.prev)<0&&Ul(t.next,e,e.next)<0}function Il(e,t,n,r){let i=e;do i.z===0&&(i.z=Rl(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ll(i)}function Ll(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Rl(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function zl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Bl(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Vl(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Bl(e,t,n,r,i,a,o,s)}function Hl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Jl(e,t)&&(Yl(e,t)&&Yl(t,e)&&Xl(e,t)&&(Ul(e.prev,e,t.prev)||Ul(e,t.prev,t))||Wl(e,t)&&Ul(e.prev,e,e.next)>0&&Ul(t.prev,t,t.next)>0)}function Ul(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Wl(e,t){return e.x===t.x&&e.y===t.y}function Gl(e,t,n,r){let i=ql(Ul(e,t,n)),a=ql(Ul(e,t,r)),o=ql(Ul(n,r,e)),s=ql(Ul(n,r,t));return!!(i!==a&&o!==s||i===0&&Kl(e,n,t)||a===0&&Kl(e,r,t)||o===0&&Kl(n,e,r)||s===0&&Kl(n,t,r))}function Kl(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ql(e){return e>0?1:e<0?-1:0}function Jl(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Gl(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Yl(e,t){return Ul(e.prev,e,e.next)<0?Ul(e,t,e.next)>=0&&Ul(e,e.prev,t)>=0:Ul(e,t,e.prev)<0||Ul(e,e.next,t)<0}function Xl(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Zl(e,t){let n=eu(e.i,e.x,e.y),r=eu(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ql(e,t,n,r){let i=eu(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function $l(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function eu(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tu(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var nu=class{static triangulate(e,t,n=2){return Cl(e,t,n)}},ru=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];iu(e),au(n,e);let a=e.length;t.forEach(iu);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,au(n,t[e]);let o=nu.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function iu(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function au(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ou=class e extends Gc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},su=class e extends Us{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new js(p,3)),this.setAttribute(`normal`,new js(m,3)),this.setAttribute(`uv`,new js(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},cu=class e extends Us{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new q,p=new K;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new js(s,3)),this.setAttribute(`normal`,new js(c,3)),this.setAttribute(`uv`,new js(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},lu=class e extends Us{constructor(e=new Sl([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new js(r,3)),this.setAttribute(`normal`,new js(i,3)),this.setAttribute(`uv`,new js(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;ru.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];ru.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=ru.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return uu(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function uu(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var du=class e extends Us{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new js(p,3)),this.setAttribute(`normal`,new js(m,3)),this.setAttribute(`uv`,new js(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function fu(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(mu(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(mu(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function pu(e){let t={};for(let n=0;n<e.length;n++){let r=fu(e[n]);for(let e in r)t[e]=r[e]}return t}function mu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function hu(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function gu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Y.workingColorSpace}var _u={clone:fu,merge:pu},vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bu=class extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fu(e.uniforms),this.uniformsGroups=hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new X().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new oo().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new fo().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xu=class extends bu{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Su=class extends Ys{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new X(16777215),this.specular=new X(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new So,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cu=class extends Ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new So,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wu=class extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Zi,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tu=class extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Eu(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Du(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ou=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ku=class extends Ou{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ji,endingEnd:Ji}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yi:i=e,o=2*t-n;break;case Xi:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Yi:a=e,s=2*n-t;break;case Xi:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Au=class extends Ou{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ju=class extends Ou{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Mu=class extends Ou{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Fu(n,t,g,y,r);i[p]=Nu(x,o,_,b,m)}return i}};function Nu(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Pu(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Fu(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Nu(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Pu(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Iu=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Eu(t,this.TimeBufferType),this.values=Eu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Eu(e.times,Array),values:Eu(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Du(e.settings)&&(n.settings={inTangents:Eu(e.settings.inTangents,Array),outTangents:Eu(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wi:t=this.InterpolantFactoryMethodDiscrete;break;case Gi:t=this.InterpolantFactoryMethodLinear;break;case Ki:t=this.InterpolantFactoryMethodSmooth;break;case qi:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wi;case this.InterpolantFactoryMethodLinear:return Gi;case this.InterpolantFactoryMethodSmooth:return Ki;case this.InterpolantFactoryMethodBezier:return qi}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Du(this.settings)&&(Lu(this.settings.inTangents,e),Lu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&sa(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ki,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Du(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Lu(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Iu.prototype.ValueTypeName=``,Iu.prototype.TimeBufferType=Float32Array,Iu.prototype.ValueBufferType=Float32Array,Iu.prototype.DefaultInterpolation=Gi;var Ru=class extends Iu{constructor(e,t,n){super(e,t,n)}};Ru.prototype.ValueTypeName=`bool`,Ru.prototype.ValueBufferType=Array,Ru.prototype.DefaultInterpolation=Wi,Ru.prototype.InterpolantFactoryMethodLinear=void 0,Ru.prototype.InterpolantFactoryMethodSmooth=void 0;var zu=class extends Iu{constructor(e,t,n,r){super(e,t,n,r)}};zu.prototype.ValueTypeName=`color`;var Bu=class extends Iu{constructor(e,t,n,r){super(e,t,n,r)}};Bu.prototype.ValueTypeName=`number`;var Vu=class extends Ou{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ua.slerpFlat(i,0,a,c-o,a,c,s);return i}},Hu=class extends Iu{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Vu(this.times,this.values,this.getValueSize(),e)}};Hu.prototype.ValueTypeName=`quaternion`,Hu.prototype.InterpolantFactoryMethodSmooth=void 0;var Uu=class extends Iu{constructor(e,t,n){super(e,t,n)}};Uu.prototype.ValueTypeName=`string`,Uu.prototype.ValueBufferType=Array,Uu.prototype.DefaultInterpolation=Wi,Uu.prototype.InterpolantFactoryMethodLinear=void 0,Uu.prototype.InterpolantFactoryMethodSmooth=void 0;var Wu=class extends Iu{constructor(e,t,n,r){super(e,t,n,r)}};Wu.prototype.ValueTypeName=`vector`;var Gu=class extends zo{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new X(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ku=class extends Gu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(zo.DEFAULT_UP),this.updateMatrix(),this.groundColor=new X(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qu=new fo,Ju=new q,Yu=new q,Xu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=zr,this.map=null,this.mapPass=null,this.matrix=new fo,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kc,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new oo(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){qu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(qu,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zu=new q,Qu=new Ua,$u=new q,ed=class extends zo{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new fo,this.projectionMatrix=new fo,this.projectionMatrixInverse=new fo,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zu,Qu,$u),$u.x===1&&$u.y===1&&$u.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zu,Qu,$u.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zu,Qu,$u),$u.x===1&&$u.y===1&&$u.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zu,Qu,$u.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},td=new q,nd=new K,rd=new K,id=class extends ed{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){td.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(td.x,td.y).multiplyScalar(-e/td.z),td.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(td.x,td.y).multiplyScalar(-e/td.z)}getViewSize(e,t){return this.getViewBounds(e,nd,rd),t.subVectors(rd,nd)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ya*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ad=class extends Xu{constructor(){super(new id(90,1,.5,500)),this.isPointLightShadow=!0}},od=class extends Gu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ad}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},sd=class extends ed{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cd=class extends Xu{constructor(){super(new sd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ld=class extends Gu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(zo.DEFAULT_UP),this.updateMatrix(),this.target=new zo,this.shadow=new cd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ud=-90,dd=1,fd=class extends zo{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new id(ud,dd,e,t);r.layers=this.layers,this.add(r);let i=new id(ud,dd,e,t);i.layers=this.layers,this.add(i);let a=new id(ud,dd,e,t);a.layers=this.layers,this.add(a);let o=new id(ud,dd,e,t);o.layers=this.layers,this.add(o);let s=new id(ud,dd,e,t);s.layers=this.layers,this.add(s);let c=new id(ud,dd,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},pd=class extends id{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},md=`\\[\\]\\.:\\/`,hd=RegExp(`[\\[\\]\\.:\\/]`,`g`),gd=`[^\\[\\]\\.:\\/]`,_d=`[^`+md.replace(`\\.`,``)+`]`,vd=`((?:WC+[\\/:])*)`.replace(`WC`,gd),yd=`(WCOD+)?`.replace(`WCOD`,_d),bd=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,gd),xd=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,gd),Sd=RegExp(`^`+vd+yd+bd+xd+`$`),Cd=[`material`,`materials`,`bones`,`map`],wd=class{constructor(e,t,n){let r=n||Td.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Td=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(hd,``)}static parseTrackName(e){let t=Sd.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Cd.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Td.Composite=wd,Td.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Td.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Td.prototype.GetterByBindingType=[Td.prototype._getValue_direct,Td.prototype._getValue_array,Td.prototype._getValue_arrayElement,Td.prototype._getValue_toArray],Td.prototype.SetterByBindingTypeAndVersioning=[[Td.prototype._setValue_direct,Td.prototype._setValue_direct_setNeedsUpdate,Td.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Td.prototype._setValue_array,Td.prototype._setValue_array_setNeedsUpdate,Td.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Td.prototype._setValue_arrayElement,Td.prototype._setValue_arrayElement_setNeedsUpdate,Td.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Td.prototype._setValue_fromArray,Td.prototype._setValue_fromArray_setNeedsUpdate,Td.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ed=new fo,Dd=class{constructor(e,t,n=0,r=1/0){this.ray=new ec(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):W(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ed.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ed),this}intersectObject(e,t=!0,n=[]){return kd(e,this,n,t),n.sort(Od),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)kd(e[r],this,n,t);return n.sort(Od),n}};function Od(e,t){return e.distance-t.distance}function kd(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)kd(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Ad(e,t,n,r){let i=jd(r);switch(n){case Qr:return e*t;case ri:return e*t/i.components*i.byteLength;case ii:return e*t/i.components*i.byteLength;case ai:return e*t*2/i.components*i.byteLength;case oi:return e*t*2/i.components*i.byteLength;case $r:return e*t*3/i.components*i.byteLength;case ei:return e*t*4/i.components*i.byteLength;case si:return e*t*4/i.components*i.byteLength;case ci:case li:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ui:case di:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pi:case hi:return Math.max(e,16)*Math.max(t,8)/4;case fi:case mi:return Math.max(e,8)*Math.max(t,8)/2;case gi:case _i:case yi:case bi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vi:case xi:case Si:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ci:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wi:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ti:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ei:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Di:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Oi:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ki:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ai:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ji:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Mi:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ni:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Pi:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fi:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ii:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Li:case Ri:case zi:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Bi:case Vi:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Hi:case Ui:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function jd(e){switch(e){case zr:case Br:return{byteLength:1,components:1};case Hr:case Vr:case Kr:return{byteLength:2,components:1};case qr:case Jr:return{byteLength:2,components:4};case Wr:case Ur:case Gr:return{byteLength:4,components:1};case Xr:case Zr:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Md(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Nd(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},Pd={basic:{uniforms:pu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:pu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:pu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:pu([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:pu([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new X(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:pu([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:pu([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:pu([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:pu([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:pu([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:pu([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:pu([Q.common,Q.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:pu([Q.lights,Q.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};Pd.physical={uniforms:pu([Pd.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var Fd={r:0,b:0,g:0},Id=new fo,Ld=new J;Ld.set(-1,0,0,0,1,0,0,0,1);function Rd(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new pc(new Hc(1,1,1),new bu({name:`BackgroundCubeMaterial`,uniforms:fu(Pd.backgroundCube.uniforms),vertexShader:Pd.backgroundCube.vertexShader,fragmentShader:Pd.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Id.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ld),l.material.toneMapped=Y.getTransfer(i.colorSpace)!==ta,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new pc(new su(2,2),new bu({name:`BackgroundMaterial`,uniforms:fu(Pd.background.uniforms),vertexShader:Pd.background.vertexShader,fragmentShader:Pd.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Y.getTransfer(i.colorSpace)!==ta,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Fd,gu(e)),n.buffers.color.setClear(Fd.r,Fd.g,Fd.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function zd(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Bd(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Vd(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Hd(e){let t=this,n=null,r=0,i=!1,a=!1,o=new qs,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ud=4,Wd=6,Gd=20,Kd=256,qd=new sd,Jd=new X,Yd=null,Xd=0,Zd=0,Qd=!1,$d=new q,ef=new q,tf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=$d}=i;Yd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,Xd,Zd),this._renderer.xr.enabled=Qd,e.scissorTest=!1,af(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ir,minFilter:Ir,generateMipmaps:!1,type:Kr,format:ei,colorSpace:$i,depthBuffer:!1},r=rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=nf(r)),this._blurMaterial=sf(r,e,t),this._ggxMaterial=of(r,e,t)}return r}_compileMaterial(e){let t=new pc(new Us,e);this._renderer.compile(t,qd)}_sceneToCubeUV(e,t,n,r,i){let a=new id(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Jd),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pc(new Hc,new tc({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Jd),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;af(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;af(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,qd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ud?n-d+Ud:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,af(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,qd),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,af(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,qd)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];af(t,3*l*(r>this._lodMax-Ud?r-this._lodMax+Ud:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,qd)}};function nf(e){let t=[],n=[],r=e,i=e-Ud+1+Wd;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ef.set(1,r,n):e===1?ef.set(-n,1,-r):e===2?ef.set(-n,r,1):e===3?ef.set(-1,r,-n):e===4?ef.set(-n,-1,r):ef.set(n,r,-1),ef.toArray(l,(e*6+t)*3)}}let u=new Us;u.setAttribute(`position`,new Os(c,3)),u.setAttribute(`outputDirection`,new Os(l,3)),n.push(new pc(u,null)),r>Ud&&r--}return{lodMeshes:n,sizeLods:t}}function rf(e,t,n){let r=new co(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function af(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function of(e,t,n){return new bu({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Kd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sf(e,t,n){return new bu({name:`SphericalGaussianBlur`,defines:{SAMPLES:Gd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:uf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cf(){return new bu({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function lf(){return new bu({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var df=class extends co{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Lc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hc(5,5,5),i=new bu({name:`CubemapFromEquirect`,uniforms:fu(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new pc(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ir),new fd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ff(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new df(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new tf(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new tf(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function pf(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&pa(`WebGLRenderer: `+e+` extension not supported.`),t}}}function mf(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?As:ks)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function hf(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function gf(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function _f(e,t,n){let r=new WeakMap,i=new oo;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new lo(h,p,m,u);g.type=Gr,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function vf(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var yf={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function bf(e,t,n,r,i,a){let o=new co(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Us;l.setAttribute(`position`,new js([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new js([0,2,0,0,2,0],2));let u=new xu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new pc(l,u),f=new sd(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new co(t,n,{type:Kr,depthBuffer:!1,stencilBuffer:!1}),c=new co(t,n,{type:Kr,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Y.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=yf[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var xf=new ao,Sf=new zc(1,1),Cf=new lo,wf=new uo,Tf=new Lc,Ef=[],Df=[],Of=new Float32Array(16),kf=new Float32Array(9),Af=new Float32Array(4);function jf(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ef[i];if(a===void 0&&(a=new Float32Array(i),Ef[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Mf(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Nf(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Pf(e,t){let n=Df[t];n===void 0&&(n=new Int32Array(t),Df[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ff(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function If(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mf(n,t))return;e.uniform2fv(this.addr,t),Nf(n,t)}}function Lf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mf(n,t))return;e.uniform3fv(this.addr,t),Nf(n,t)}}function Rf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mf(n,t))return;e.uniform4fv(this.addr,t),Nf(n,t)}}function zf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Mf(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Nf(n,t)}else{if(Mf(n,r))return;Af.set(r),e.uniformMatrix2fv(this.addr,!1,Af),Nf(n,r)}}function Bf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Mf(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Nf(n,t)}else{if(Mf(n,r))return;kf.set(r),e.uniformMatrix3fv(this.addr,!1,kf),Nf(n,r)}}function Vf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Mf(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Nf(n,t)}else{if(Mf(n,r))return;Of.set(r),e.uniformMatrix4fv(this.addr,!1,Of),Nf(n,r)}}function Hf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Uf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mf(n,t))return;e.uniform2iv(this.addr,t),Nf(n,t)}}function Wf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mf(n,t))return;e.uniform3iv(this.addr,t),Nf(n,t)}}function Gf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mf(n,t))return;e.uniform4iv(this.addr,t),Nf(n,t)}}function Kf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function qf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mf(n,t))return;e.uniform2uiv(this.addr,t),Nf(n,t)}}function Jf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mf(n,t))return;e.uniform3uiv(this.addr,t),Nf(n,t)}}function Yf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mf(n,t))return;e.uniform4uiv(this.addr,t),Nf(n,t)}}function Xf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Sf.compareFunction=n.isReversedDepthBuffer()?518:515,a=Sf):a=xf,n.setTexture2D(t||a,i)}function Zf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||wf,i)}function Qf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Tf,i)}function $f(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Cf,i)}function ep(e){switch(e){case 5126:return Ff;case 35664:return If;case 35665:return Lf;case 35666:return Rf;case 35674:return zf;case 35675:return Bf;case 35676:return Vf;case 5124:case 35670:return Hf;case 35667:case 35671:return Uf;case 35668:case 35672:return Wf;case 35669:case 35673:return Gf;case 5125:return Kf;case 36294:return qf;case 36295:return Jf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return $f}}function tp(e,t){e.uniform1fv(this.addr,t)}function np(e,t){let n=jf(t,this.size,2);e.uniform2fv(this.addr,n)}function rp(e,t){let n=jf(t,this.size,3);e.uniform3fv(this.addr,n)}function ip(e,t){let n=jf(t,this.size,4);e.uniform4fv(this.addr,n)}function ap(e,t){let n=jf(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function op(e,t){let n=jf(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function sp(e,t){let n=jf(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function cp(e,t){e.uniform1iv(this.addr,t)}function lp(e,t){e.uniform2iv(this.addr,t)}function up(e,t){e.uniform3iv(this.addr,t)}function dp(e,t){e.uniform4iv(this.addr,t)}function fp(e,t){e.uniform1uiv(this.addr,t)}function pp(e,t){e.uniform2uiv(this.addr,t)}function mp(e,t){e.uniform3uiv(this.addr,t)}function hp(e,t){e.uniform4uiv(this.addr,t)}function gp(e,t,n){let r=this.cache,i=t.length,a=Pf(n,i);Mf(r,a)||(e.uniform1iv(this.addr,a),Nf(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Sf:xf;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function _p(e,t,n){let r=this.cache,i=t.length,a=Pf(n,i);Mf(r,a)||(e.uniform1iv(this.addr,a),Nf(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||wf,a[e])}function vp(e,t,n){let r=this.cache,i=t.length,a=Pf(n,i);Mf(r,a)||(e.uniform1iv(this.addr,a),Nf(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Tf,a[e])}function yp(e,t,n){let r=this.cache,i=t.length,a=Pf(n,i);Mf(r,a)||(e.uniform1iv(this.addr,a),Nf(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Cf,a[e])}function bp(e){switch(e){case 5126:return tp;case 35664:return np;case 35665:return rp;case 35666:return ip;case 35674:return ap;case 35675:return op;case 35676:return sp;case 5124:case 35670:return cp;case 35667:case 35671:return lp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return yp}}var xp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ep(t.type)}},Sp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bp(t.type)}},Cp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},wp=/(\w+)(\])?(\[|\.)?/g;function Tp(e,t){e.seq.push(t),e.map[t.id]=t}function Ep(e,t,n){let r=e.name,i=r.length;for(wp.lastIndex=0;;){let a=wp.exec(r),o=wp.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Tp(n,l===void 0?new xp(s,e,t):new Sp(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Cp(s),Tp(n,e)),n=e}}}var Dp=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ep(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Op(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var kp=37297,Ap=0;function jp(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Mp=new J;function Np(e){Y._getMatrix(Mp,Y.workingColorSpace,e);let t=`mat3( ${Mp.elements.map(e=>e.toFixed(4))} )`;switch(Y.getTransfer(e)){case ea:return[t,`LinearTransferOETF`];case ta:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Pp(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+jp(e.getShaderSource(t),r)}return i}function Fp(e,t){let n=Np(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ip={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Lp(e,t){let n=Ip[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Rp=new q;function zp(){return Y.getLuminanceCoefficients(Rp),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Rp.x.toFixed(4)}, ${Rp.y.toFixed(4)}, ${Rp.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Bp(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Up).join(`
`)}function Vp(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Hp(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Up(e){return e!==``}function Wp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function qp(e){return e.replace(Kp,Yp)}var Jp=new Map;function Yp(e,t){let n=Z[t];if(n===void 0){let e=Jp.get(t);if(e!==void 0)n=Z[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return qp(n)}var Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(e){return e.replace(Xp,Qp)}function Qp(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function $p(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var em={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function tm(e){return em[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var nm={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function rm(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:nm[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var im={302:`ENVMAP_MODE_REFRACTION`};function am(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:im[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var om={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function sm(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:om[e.combine]||`ENVMAP_BLENDING_NONE`}function cm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function lm(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=tm(n),l=rm(n),u=am(n),d=sm(n),f=cm(n),p=Bp(n),m=Vp(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Up).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Up).join(`
`),_.length>0&&(_+=`
`)):(g=[$p(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Up).join(`
`),_=[$p(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:Lp(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Fp(`linearToOutputTexel`,n.outputColorSpace),zp(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Up).join(`
`)),o=qp(o),o=Wp(o,n),o=Gp(o,n),s=qp(s),s=Wp(s,n),s=Gp(s,n),o=Zp(o),s=Zp(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Op(i,i.VERTEX_SHADER,y),S=Op(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Pp(i,x,`vertex`),n=Pp(i,S,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Dp(i,h),T=Hp(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,kp)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ap++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var um=0,dm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fm(e),t.set(e,n)),n}},fm=class{constructor(e){this.id=um++,this.code=e,this.usedTimes=0}};function pm(e){return e===1030||e===37490||e===36285}function mm(e,t,n,r,i,a){let o=new Co,s=new dm,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Pd[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,F=he&&!!i.iridescenceThicknessMap,Ce=ge&&!!i.sheenColorMap,I=ge&&!!i.sheenRoughnessMap,we=!!i.specularMap,L=!!i.specularColorMap,Te=!!i.specularIntensityMap,R=_e&&!!i.transmissionMap,z=_e&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,ke=!!i.alphaHash,Ae=!!i.extensions,je=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=e.toneMapping);let Me={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Y.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&pm(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:F,sheen:ge,sheenColorMap:Ce,sheenRoughnessMap:I,specularMap:we,specularColorMap:L,specularIntensityMap:Te,transmission:_e,transmissionMap:R,thicknessMap:z,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ke,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:le&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:F&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:I&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:L&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:R&&m(i.transmissionMap.channel),thicknessMapUv:z&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Y.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Y.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Pd[t];n=_u.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new lm(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function hm(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function gm(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _m(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function vm(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||gm),r.length>1&&r.sort(t||_m),i.length>1&&i.sort(t||_m)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ym(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new vm,e.set(t,[i])):n>=r.length?(i=new vm,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function bm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new X};break;case`SpotLight`:n={position:new q,direction:new q,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function xm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Sm=0;function Cm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function wm(e){let t=new bm,n=xm(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new fo,o=new fo;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Cm);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Sm++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Tm(e){let t=new wm(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Em(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Tm(e),t.set(n,[a])):r>=i.length?(a=new Tm(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,km=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Am=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],jm=new fo,Mm=new q,Nm=new q;function Pm(e,t,n){let r=new kc,i=new K,a=new K,o=new oo,s=new wu,c=new Tu,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new bu({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Dm,fragmentShader:Om}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Us;m.setAttribute(`position`,new Os(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new pc(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){U(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new co(i.x,i.y,{format:ai,type:Kr,minFilter:Ir,magFilter:Ir,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new zc(i.x,i.y,Gr),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ti,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Nr,d.map.depthTexture.magFilter=Nr}else l.isPointLight?(d.map=new df(i.x),d.map.depthTexture=new Bc(i.x,Wr)):(d.map=new co(i.x,i.y),d.map.depthTexture=new zc(i.x,i.y,Wr)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ti,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Ir,d.map.depthTexture.magFilter=Ir):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Nr,d.map.depthTexture.magFilter=Nr);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Mm.setFromMatrixPosition(l.matrixWorld),e.position.copy(Mm),Nm.copy(e.position),Nm.add(km[t]),e.up.copy(Am[t]),e.lookAt(Nm),e.updateMatrixWorld(),n.makeTranslation(-Mm.x,-Mm.y,-Mm.z),jm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(jm,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new co(i.x,i.y,{format:ai,type:Kr}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Fm(e,t){function n(){let t=!1,n=new oo,r=null,i=new oo(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ha[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=ee>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new oo().fromArray(re),oe=new oo().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(N&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function F(t){t===void 0&&(t=e.TEXTURE0+M-1),P!==t&&(e.activeTexture(t),P=t)}function Ce(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+M-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function I(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function L(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function R(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Pe(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:F,bindTexture:Ce,unbindTexture:I,compressedTexImage2D:we,compressedTexImage3D:L,texImage2D:ke,texImage3D:Ae,pixelStorei:Me,getParameter:je,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Te,texSubImage3D:R,compressedTexSubImage2D:z,compressedTexSubImage3D:Ee,scissor:Ne,viewport:Pe,reset:Le}}function Im(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):ca(`canvas`)}function g(e,t,n){let r=1,i=we(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ea:Y.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&Ce(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ue(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ue(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function P(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ue(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?de(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let re={[Ar]:e.REPEAT,[jr]:e.CLAMP_TO_EDGE,[Mr]:e.MIRRORED_REPEAT},ie={[Nr]:e.NEAREST,[Pr]:e.NEAREST_MIPMAP_NEAREST,[Fr]:e.NEAREST_MIPMAP_LINEAR,[Ir]:e.LINEAR,[Lr]:e.LINEAR_MIPMAP_NEAREST,[Rr]:e.LINEAR_MIPMAP_LINEAR},ae={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function oe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ie[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ie[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ae[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function se(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ce(e,t,n){return Math.floor(Math.floor(e/n)/t)}function le(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ce(n.start,r.width,4),c=ce(t.start,r.width,4);n.start<=i+1&&a===c&&ce(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ue(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=se(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Y.getPrimaries(Y.workingColorSpace),r=o.colorSpace===``?null:Y.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=I(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);oe(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===ni,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&le(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Ad(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Ad(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=we(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=we(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function de(t,o,s){if(o.image.length!==6)return;let c=se(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Y.getPrimaries(Y.workingColorSpace),r=o.colorSpace===``?null:Y.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=I(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);oe(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=we(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function fe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Se(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function me(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,l.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),oe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ee(i.depthTexture,0);let u=l.__webglTexture,d=Se(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function he(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)me(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?me(i.__webglFramebuffer[0],t,0):me(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),pe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),pe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,i){let a=r.get(t);n!==void 0&&fe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&he(t)}function _e(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Se(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),pe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),oe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)fe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else fe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),oe(c,a),fe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),oe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)fe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else fe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&he(t)}function ve(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ye=[],be=[];function xe(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ye.length=0,be.length=0,ye.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ye.push(l),be.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Se(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ce(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Y.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function we(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=te,this.setTexture3D=P,this.setTextureCube=ne,this.rebindTextures=ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=F,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Lm(e,t){function n(n,r=``){let i,a=Y.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Vc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bu({vertexShader:Rm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pc(new su(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vm=class extends ga{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Bm,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new K,C=null,w=null,T=new id;T.viewport=new oo;let E=new id;E.viewport=new oo;let D=[T,E],O=new pd,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Ho,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Ho,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Ho,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ni:ti,a=_.stencil?Yr:Wr);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new co(d.textureWidth,d.textureHeight,{format:ei,type:zr,depthTexture:new zc(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new co(f.framebufferWidth,f.framebufferHeight,{format:ei,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ee=new q,te=new q;function P(e,t,n){ee.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=ee.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?P(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ba*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new id,o.layers.enable(n),o.viewport=new oo,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Vc,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let oe=new Md;oe.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},Hm=new fo,Um=new J;Um.set(-1,0,0,0,1,0,0,0,1);function Wm(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,gu(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Um),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Gm(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Km=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qm=null;function Jm(){return qm===null&&(qm=new gc(Km,16,16,ai,Kr),qm.name=`DFG_LUT`,qm.minFilter=Ir,qm.magFilter=Ir,qm.wrapS=jr,qm.wrapT=jr,qm.generateMipmaps=!1,qm.needsUpdate=!0),qm}var Ym=class{constructor(e={}){let{canvas:t=la(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=zr}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([si,oi,ii]),g=new Set([zr,Wr,Hr,Yr,qr,Jr]),_=new Uint32Array(4),v=new Int32Array(4),y=new q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Qi;let j=0,M=0,N=null,ee=-1,te=null,P=new oo,ne=new oo,re=null,ie=new X(0),ae=0,oe=t.width,se=t.height,ce=1,le=null,ue=null,de=new oo(0,0,oe,se),fe=new oo(0,0,oe,se),pe=!1,me=new kc,he=!1,ge=!1,_e=new fo,ve=new q,ye=new oo,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Se(){return N===null?ce:1}let F=n;function Ce(e,n){return t.getContext(e,n)}let I,we,L,Te,R,z,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ge,!1),t.addEventListener(`webglcontextrestored`,Ke,!1),t.addEventListener(`webglcontextcreationerror`,qe,!1),F===null){let t=`webgl2`;if(F=Ce(t,e),F===null)throw Ce(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ue()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ge,!1),t.removeEventListener(`webglcontextrestored`,Ke,!1),t.removeEventListener(`webglcontextcreationerror`,qe,!1),W(`WebGLRenderer: `+e.message),e}function Ue(){I=new pf(F),I.init(),Be=new Lm(F,I),we=new Vd(F,I,e,Be),L=new Fm(F,I),we.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),A=F.createFramebuffer(),Te=new gf(F),R=new hm,z=new Im(F,I,L,R,we,Be,Te),Ee=new ff(T),De=new Nd(F),Ve=new zd(F,De),Oe=new mf(F,De,Te,Ve),ke=new vf(F,Oe,De,Ve,Te),Le=new _f(F,we,z),Pe=new Hd(R),Ae=new mm(T,Ee,I,we,Ve,Pe),je=new Wm(T,R),Me=new ym,Ne=new Em(I),Ie=new Rd(T,Ee,L,ke,p,s),Fe=new Pm(T,ke,we),He=new Gm(F,Te,we,L),Re=new Bd(F,I,Te),ze=new hf(F,I,Te),Te.programs=Ae.programs,T.capabilities=we,T.extensions=I,T.properties=R,T.renderLists=Me,T.shadowMap=Fe,T.state=L,T.info=Te}m!==1009&&(w=new bf(m,t.width,t.height,o,r,i));let We=new Vm(T,F);this.xr=We,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=I.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=I.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(e){e!==void 0&&(ce=e,this.setSize(oe,se,!1))},this.getSize=function(e){return e.set(oe,se)},this.setSize=function(e,n,r=!0){We.isPresenting?U(`WebGLRenderer: Can't change size while VR device is presenting.`):(oe=e,se=n,t.width=Math.floor(e*ce),t.height=Math.floor(n*ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(oe*ce,se*ce).floor()},this.setDrawingBufferSize=function(e,n,r){oe=e,se=n,ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),L.viewport(P.copy(de).multiplyScalar(ce).round())},this.getScissor=function(e){return e.copy(fe)},this.setScissor=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),L.scissor(ne.copy(fe).multiplyScalar(ce).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){L.setScissorTest(pe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){ue=e},this.getClearColor=function(e){return e.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ie.getClearColor(),r=Ie.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ge,!1),t.removeEventListener(`webglcontextrestored`,Ke,!1),t.removeEventListener(`webglcontextcreationerror`,qe,!1),Ie.dispose(),Me.dispose(),Ne.dispose(),R.dispose(),Ee.dispose(),ke.dispose(),Ve.dispose(),He.dispose(),Ae.dispose(),We.dispose(),We.removeEventListener(`sessionstart`,et),We.removeEventListener(`sessionend`,tt),nt.stop()};function Ge(e){e.preventDefault(),da(`WebGLRenderer: Context Lost.`),E=!0}function Ke(){da(`WebGLRenderer: Context Restored.`),E=!1;let e=Te.autoReset,t=Fe.enabled,n=Fe.autoUpdate,r=Fe.needsUpdate,i=Fe.type;Ue(),Te.autoReset=e,Fe.enabled=t,Fe.autoUpdate=n,Fe.needsUpdate=r,Fe.type=i}function qe(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Je(e){let t=e.target;t.removeEventListener(`dispose`,Je),Ye(t)}function Ye(e){Xe(e),R.remove(e)}function Xe(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Ae.releaseProgram(e)}),e.isShaderMaterial&&Ae.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=be);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=ft(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Oe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ve.setup(i,r,s,n,c);let h,g=Re;if(c!==null&&(h=De.get(c),g=ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Se()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Se()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(I.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?De.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ze(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),he===!0&&Pe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ct(e,t,r),e.side=0,e.needsUpdate=!0,ct(e,t,r),e.side=2):ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ne.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ge=this.localClippingEnabled,he=Pe.init(this.clippingPlanes,ge),he===!0&&Pe.setGlobalState(this.clippingPlanes,t),D!==null&&Fe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ze(o,n,t,e),r.add(o)}else Ze(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}I.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Qe=null;function $e(e){Qe&&Qe(e)}function et(){nt.stop()}function tt(){nt.start()}let nt=new Md;nt.setAnimationLoop($e),typeof self<`u`&&nt.setContext(self),this.setAnimationLoop=function(e){Qe=e,We.setAnimationLoop(e),e===null?nt.stop():nt.start()},We.addEventListener(`sessionstart`,et),We.addEventListener(`sessionend`,tt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=We.enabled===!0&&We.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(t),t=We.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Ne.get(e,C.length),x.init(t),x.state.textureUnits=z.getTextureUnits(),C.push(x),_e.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),me.setFromProjectionMatrix(_e,aa,t.reversedDepth),ge=this.localClippingEnabled,he=Pe.init(this.clippingPlanes,ge),b=Me.get(e,S.length),b.init(),S.push(b),We.enabled===!0&&We.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&rt(e,t,-1/0,T.sortObjects)}rt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(le,ue),xe=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,xe&&Ie.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&Pe.beginShadows();let i=x.state.shadowsArray;if(Fe.render(i,e,t),he===!0&&Pe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];at(n,r,e,a)}xe&&Ie.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];it(b,e,n,n.viewport)}}else r.length>0&&at(n,r,e,t),xe&&Ie.render(e),it(b,e,t)}N!==null&&M===0&&(z.updateMultisampleRenderTarget(N),z.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ve.resetDefaultState(),ee=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],z.setTextureUnits(x.state.textureUnits),he===!0&&Pe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function rt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(me)){r&&ye.setFromMatrixPosition(e.matrixWorld).applyMatrix4(_e);let i=ke.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ye.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(me))){let i=ke.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ye.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ye.copy(e.boundingSphere.center)),ye.applyMatrix4(e.matrixWorld).applyMatrix4(_e)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ye.z,s,t)}}else a.visible&&b.push(e,i,a,n,ye.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)rt(i[e],t,n,r)}function it(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),he===!0&&Pe.setGlobalState(T.clippingPlanes,n),r&&L.viewport(P.copy(r)),i.length>0&&ot(i,t,n),a.length>0&&ot(a,t,n),o.length>0&&ot(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function at(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=I.has(`EXT_color_buffer_half_float`)||I.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new co(1,1,{generateMipmaps:!0,type:e?Kr:zr,minFilter:Rr,samples:Math.max(4,we.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Y.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),xe&&Ie.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),he===!0&&Pe.setGlobalState(T.clippingPlanes,r),ot(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),I.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,st(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&st(o,t,n,s,l,c)}}function st(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ct(e,t,n){t.isScene!==!0&&(t=be);let r=R.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ae.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ae.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ee.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Je),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ut(e,s),d}else s.uniforms=Ae.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ae.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Pe.uniform),ut(e,s),r.needsLights=mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function lt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Dp.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ut(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function dt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function ft(e,t,n,r,i){t.isScene!==!0&&(t=be),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Y.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ee.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=x.state.lights;if(he===!0&&(ge===!0||e!==te)){let t=e===te&&r.id===ee;Pe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Pe.numPlanes||v.numIntersection!==Pe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=ct(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(L.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ee&&(ee=r.id,w=!0),v.needsLights){let e=dt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(F,`projectionMatrix`,e.projectionMatrix),O.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(F,ve.setFromMatrixPosition(e.matrixWorld)),we.logarithmicDepthBuffer&&O.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(F,`sunShadowMap`,y.state.sunShadowMap,z),y.state.directionalShadowMap.length>0&&O.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,z),y.state.spotShadowMap.length>0&&O.setValue(F,`spotShadowMap`,y.state.spotShadowMap,z),y.state.pointShadowMap.length>0&&O.setValue(F,`pointShadowMap`,y.state.pointShadowMap,z)),i.isSkinnedMesh){O.setOptional(F,i,`bindMatrix`),O.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(F,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(O.setOptional(F,i,`batchingTexture`),O.setValue(F,`batchingTexture`,i._matricesTexture,z),O.setOptional(F,i,`batchingIdTexture`),O.setValue(F,`batchingIdTexture`,i._indirectTexture,z),O.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(F,`batchingColorTexture`,i._colorsTexture,z));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Le.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Jm()),w){if(O.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&pt(k,E),a&&r.fog===!0&&je.refreshFogUniforms(k,a),je.refreshMaterialUniforms(k,r,ce,se,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Dp.upload(F,lt(v),k,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Dp.upload(F,lt(v),k,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(F,`center`,i.center),O.setValue(F,`modelViewMatrix`,i.modelViewMatrix),O.setValue(F,`normalMatrix`,i.normalMatrix),O.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];He.update(n,S),He.bind(n,S)}}return S}function pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,L.viewport(P),L.scissor(ne),L.setScissorTest(re),ee=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else P.copy(de).multiplyScalar(ce).floor(),ne.copy(fe).multiplyScalar(ce).floor(),re=pe;if(n!==0&&(r=O),L.bindFramebuffer(F.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(P),L.scissor(ne),L.setScissorTest(re),i){let r=R.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function ht(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=we.textureFormatReadable(e.format),t.__typeReadable=we.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=ht(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Be.convert(c),Be.convert(l),a)}finally{let e=N===null?null:R.get(N).__webglFramebuffer;L.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=ht(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,Be.convert(l),Be.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=N===null?null:R.get(N).__webglFramebuffer;L.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ma(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Be.convert(t.format),_=Be.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=F.TEXTURE_2D),L.activeTexture(F.TEXTURE0),L.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(F.UNPACK_ROW_LENGTH),b=L.getParameter(F.UNPACK_IMAGE_HEIGHT),x=L.getParameter(F.UNPACK_SKIP_PIXELS),S=L.getParameter(F.UNPACK_SKIP_ROWS),C=L.getParameter(F.UNPACK_SKIP_IMAGES);L.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(F.UNPACK_SKIP_PIXELS,l),L.pixelStorei(F.UNPACK_SKIP_ROWS,u),L.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);L.bindFramebuffer(F.READ_FRAMEBUFFER,null),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(F.READ_FRAMEBUFFER,k),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);L.bindFramebuffer(F.READ_FRAMEBUFFER,null),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(F.UNPACK_ROW_LENGTH,y),L.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(F.UNPACK_SKIP_PIXELS,x),L.pixelStorei(F.UNPACK_SKIP_ROWS,S),L.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,L.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Y._getDrawingBufferColorSpace(e),t.unpackColorSpace=Y._getUnpackColorSpace()}},Xm=new Cu({vertexColors:!0,flatShading:!0}),Zm=new tc({vertexColors:!0}),Qm=new fo,$m=new Ua,eh=new So,th=new q,nh=new q,rh=new X,ih=class{pos=[];col=[];add(e,t,n={}){let r=e.index?e.toNonIndexed():e.clone();e.dispose();let i=n.r??[0,0,0];eh.set(i[0],i[1],i[2]),$m.setFromEuler(eh);let a=n.s??1;typeof a==`number`?th.setScalar(a):th.set(a[0],a[1],a[2]);let o=n.p??[0,0,0];nh.set(o[0],o[1],o[2]),r.applyMatrix4(Qm.compose(nh,$m,th));let s=r.getAttribute(`position`);rh.set(t);for(let e=0;e<s.count;e++)this.pos.push(s.getX(e),s.getY(e),s.getZ(e)),this.col.push(rh.r,rh.g,rh.b);return r.dispose(),this}box(e,t,n,r,i){return this.add(new Hc(e,t,n),r,i)}cyl(e,t,n,r,i,a=6){return this.add(new Uc(e,t,n,a,1),r,i)}cone(e,t,n,r,i=6){return this.add(new Wc(e,t,i,1),n,r)}ball(e,t,n,r=6,i=4){return this.add(new du(e,r,i),t,n)}ico(e,t,n,r=0){return this.add(new ou(e,r),t,n)}frustum(e,t,n,r,i={},a=1){let o=Math.SQRT2/2,s=new Uc(e*o,t*o,n,4,1);return s.rotateY(Math.PI/4),s.scale(1,1,a),this.add(s,r,i)}prism(e,t,n,r,i){let a=e/2,o=t/2,s=[-a,0,-o],c=[-a,0,o],l=[-a,n,0],u=[a,0,-o],d=[a,0,o],f=[a,n,0],p=[s,c,l,u,f,d,c,f,l,c,d,f,s,f,u,s,l,f,s,d,c,s,u,d],m=new Us;return m.setAttribute(`position`,new js(p.flat(),3)),this.add(m,r,i)}merge(e,t){if(!t)this.pos.push(...e.pos);else{let n=t.r??[0,0,0],r=t.s??1,i=t.p??[0,0,0];$m.setFromEuler(eh.set(n[0],n[1],n[2])),typeof r==`number`?th.setScalar(r):th.set(r[0],r[1],r[2]),Qm.compose(nh.set(i[0],i[1],i[2]),$m,th);let a=new q;for(let t=0;t<e.pos.length;t+=3)a.set(e.pos[t],e.pos[t+1],e.pos[t+2]).applyMatrix4(Qm),this.pos.push(a.x,a.y,a.z)}return this.col.push(...e.col),this}get triangles(){return this.pos.length/9}build(){let e=new Us;return e.setAttribute(`position`,new js(this.pos,3)),e.setAttribute(`color`,new js(this.col,3)),e.computeVertexNormals(),e.computeBoundingSphere(),e.computeBoundingBox(),e}},ah=new Map;function oh(e,t){let n=ah.get(e);return n||(n=t(),ah.set(e,n)),n}function sh(e,t,n=[0,0,0],r=!1){let i=new pc(e,r?Zm:Xm);return i.name=t,i.position.set(n[0],n[1],n[2]),i.castShadow=!r,i.receiveShadow=!r,i}function ch(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var lh={hearth:{cloth:`#b8432f`,clothDark:`#74291c`,trim:`#e8a33d`,armor:`#4a4c52`,armorEdge:`#9aa0a8`,fur:`#8a5f3c`,furDark:`#5a3a24`,roof:`#5f7a4a`,roofDark:`#3f5536`,banner:`#b8432f`,emblem:`#e8a33d`,glow:`#ff7a2e`,glowHot:`#ffd36a`},rime:{cloth:`#7fc8c9`,clothDark:`#2f6e7a`,trim:`#e6f4f2`,armor:`#d9d2be`,armorEdge:`#f4efe0`,fur:`#c9c4b4`,furDark:`#8a8576`,roof:`#a9dde3`,roofDark:`#5fa7b3`,banner:`#2f6e7a`,emblem:`#bff6ff`,glow:`#5fe3ff`,glowHot:`#d8fbff`}},$={skin:`#e2b08c`,skinPale:`#c9d6d8`,hair:`#5a3622`,beard:`#a8643a`,wool:`#f2e2c4`,woolDark:`#cbb592`,leather:`#6b4429`,wood:`#7b5434`,woodDark:`#4c321f`,woodLight:`#a77a4c`,timber:`#8d6240`,turf:`#5f7a4a`,turfDark:`#3f5536`,iron:`#3c3e44`,steel:`#c9d1da`,steelDark:`#7d8792`,stone:`#8d929a`,stoneDark:`#62676f`,stoneLight:`#aaa497`,hide:`#b9a88a`,hideDark:`#87765c`,bone:`#d9d2be`,boneDark:`#a8a08a`,ice:`#bfe0ee`,iceDeep:`#6fbfd0`,snow:`#f5f9fd`,snowShade:`#dce7f2`,pine:`#2f5a43`,pineDark:`#22442f`,grass:`#6d8a4c`,mud:`#5e4a36`,ember:`#ff8a2a`,emberHot:`#ffd36a`,char:`#2a2422`,ash:`#6b6560`,black:`#1c1a1a`,rope:`#c9b48a`},uh=[`settler`,`shieldbearer`,`hunter`,`warden`],dh=.8,fh=.27,ph=.105,mh=-.6,hh=Math.PI/2;function gh(e,t,n){e.box(.16,.07,.18,n,{p:[0,-.62,0]}),e.box(.14,.09,.25,t,{p:[0,-.755,.035]})}function _h(e,t){e.ball(.145,t,{s:[1,1.08,1]},6,5),e.box(.04,.035,.03,$.black,{p:[-.055,.015,.135]}),e.box(.04,.035,.03,$.black,{p:[.055,.015,.135]})}function vh(e,t,n=!1){e.box(.22,.1,.1,t,{p:[0,-.06,.1]}),e.cone(.11,n?.34:.18,t,{p:[0,n?-.24:-.17,.11],r:[Math.PI,0,0]},5)}function yh(e,t){e.box(.24,.24,.08,t.armor,{p:[0,0,.12]}),e.cone(.09,.12,t.armor,{p:[0,-.15,.13],r:[Math.PI,0,0]},4),e.box(.25,.035,.085,$.boneDark,{p:[0,.075,.125]})}function bh(e,t){e.box(.06,.03,.02,t.glow,{p:[-.055,.02,.165]}),e.box(.06,.03,.02,t.glow,{p:[.055,.02,.165]})}function xh(e,t,n,r,i,a,o){let[s,c]=r,l=r[2],u=1.3,d=i/4;for(let r=0;r<4;r++){let i=a*(1-r/4.5),f=n*Math.sin(u)*d,p=Math.cos(u)*d;e.cyl(i*.75,i,d*1.15,t,{p:[s+f/2,c+p/2,l],r:[0,0,-n*u]},5),s+=f,c+=p,u-=o}e.cone(a*.3,d,t,{p:[s+n*Math.sin(u)*d*.4,c+Math.cos(u)*d*.4,l],r:[0,0,-n*u]},5)}function Sh(e,t,n,r){e.box(.14,.32,.15,t,{p:[0,-.15,0]}),e.box(.12,.27,.13,n,{p:[0,-.43,0]}),e.box(.1,.1,.11,r,{p:[0,mh,.005]})}function Ch(e,t,n,r,i=.024){e.cyl(i,i,r-n,t,{p:[0,0,(n+r)/2],r:[hh,0,0]},5)}function wh(e,t,n,r=1.5){for(let n=0;n<6;n++){let i=n/6-.5,a=(n+1)/6-.5,o=i*r,s=a*r,c=.2*(1-4*i*i),l=.2*(1-4*a*a);e.box(.035,Math.hypot(s-o,l-c)+.01,.045,t,{p:[0,(o+s)/2+.25,(c+l)/2],r:[Math.atan2(l-c,s-o),0,0]})}e.box(.04,.14,.055,n,{p:[0,.25,.2]}),e.box(.006,r,.006,$.wool,{p:[0,.25,0]})}var Th={settler:{scale:1,hand:`armR`,attack:`chop`,hunch:0,legs(e,t){e.box(.15,.42,.17,$.woolDark,{p:[0,-.2,0]}),e.box(.13,.3,.15,$.leather,{p:[0,-.5,0]}),gh(e,$.woodDark,t.fur)},body(e,t){e.cyl(.2,.27,.36,t.cloth,{p:[0,-.08,0]},7),e.box(.38,.48,.25,t.cloth,{p:[0,.29,0]}),e.box(.4,.07,.27,$.leather,{p:[0,.06,0]}),e.box(.07,.06,.02,t.trim,{p:[0,.06,.14]}),e.cyl(.16,.2,.11,$.wool,{p:[0,.53,0]},7),e.box(.08,.24,.03,$.wool,{p:[.09,.4,.14],r:[0,0,.15]}),e.cyl(.06,.07,.08,$.skin,{p:[0,.6,0]},5)},head(e,t){_h(e,$.skin),vh(e,$.beard),e.cyl(.158,.158,.07,$.wool,{p:[0,.06,-.01]},8),e.cone(.15,.36,t.trim,{p:[0,.2,-.06],r:[-.6,0,0]},7),e.ball(.055,$.wool,{p:[0,.34,-.17]},5,3)},arm(e){Sh(e,$.wool,$.wool,$.leather)},weapon(e){Ch(e,$.wood,-.12,.5),e.box(.035,.17,.13,$.iron,{p:[0,-.07,.42]}),e.box(.04,.05,.16,$.steel,{p:[0,-.16,.42]})}},shieldbearer:{scale:1.08,hand:`armR`,attack:`slash`,hunch:0,legs(e,t){e.box(.16,.42,.18,t.clothDark,{p:[0,-.2,0]}),e.box(.14,.3,.16,$.iron,{p:[0,-.5,.01]}),gh(e,$.woodDark,t.fur)},body(e,t){e.cyl(.22,.29,.36,$.iron,{p:[0,-.08,0]},7),e.box(.44,.5,.28,$.iron,{p:[0,.29,0]}),e.box(.3,.72,.3,t.cloth,{p:[0,.16,0]}),e.box(.31,.05,.31,t.trim,{p:[0,-.2,0]}),e.box(.46,.07,.31,$.leather,{p:[0,.06,0]}),e.box(.5,.75,.08,t.cloth,{p:[0,.15,-.18],r:[-.08,0,0]}),e.cyl(.22,.27,.13,t.fur,{p:[0,.53,-.02]},7),e.cyl(.06,.07,.08,$.skin,{p:[0,.6,0]},5)},head(e,t){_h(e,$.skin),vh(e,$.beard),e.ball(.165,$.iron,{p:[0,.06,-.01],s:[1,.95,1]},7,4),e.cyl(.17,.17,.05,t.trim,{p:[0,.06,-.01]},7),e.box(.035,.14,.03,$.iron,{p:[0,0,.16]}),e.cone(.03,.08,$.iron,{p:[0,.24,-.01]},4)},arm(e,t,n){if(Sh(e,$.iron,$.leather,$.leather),e.ball(.12,t.fur,{p:[0,-.03,0],s:[1.1,.8,1.1]},6,3),n===1){let n=[hh,0,0];e.cyl(.4,.4,.05,$.iron,{p:[.04,-.4,.11],r:n},12),e.cyl(.36,.36,.05,t.cloth,{p:[.04,-.4,.125],r:n},12),e.box(.07,.72,.03,t.trim,{p:[.04,-.4,.145]}),e.box(.72,.07,.03,t.trim,{p:[.04,-.4,.145]}),e.ball(.09,$.steelDark,{p:[.04,-.4,.16],s:[1,1,.6]},6,4)}},weapon(e,t){e.box(.05,.05,.16,$.leather,{p:[0,0,-.02]}),e.box(.04,.2,.04,t.trim,{p:[0,0,.08]}),e.box(.02,.085,.72,$.steel,{p:[0,0,.46]}),e.cone(.045,.1,$.steel,{p:[0,0,.87],r:[hh,0,0]},4)}},hunter:{scale:1,hand:`armL`,attack:`draw`,hunch:.04,legs(e,t){e.box(.15,.42,.17,$.leather,{p:[0,-.2,0]}),e.box(.13,.3,.15,$.woolDark,{p:[0,-.5,0]}),gh(e,$.woodDark,t.fur)},body(e,t){e.cyl(.21,.3,.55,t.clothDark,{p:[0,-.17,0]},7),e.cyl(.31,.31,.07,t.fur,{p:[0,-.43,0]},7),e.box(.38,.48,.25,t.clothDark,{p:[0,.29,0]}),e.box(.4,.07,.27,$.leather,{p:[0,.06,0]}),e.box(.06,.62,.27,$.leather,{p:[0,.3,0],r:[0,0,-.65]}),e.cyl(.075,.065,.55,$.leather,{p:[-.1,.42,-.18],r:[0,0,.4]},6);for(let n=0;n<3;n++)e.cone(.04,.13,t.trim,{p:[-.22+n*.03,.72+n*.02,-.18+(n-1)*.035]},3);e.cyl(.06,.07,.08,$.skin,{p:[0,.6,0]},5)},head(e,t){_h(e,$.skin),e.ball(.18,t.cloth,{p:[0,.04,-.035],s:[1.02,1.04,1.08]},7,5),e.cone(.11,.42,t.cloth,{p:[0,0,-.32],r:[-2.05,0,0]},5),e.cyl(.19,.2,.08,t.fur,{p:[0,-.12,-.02]},7)},arm(e,t){Sh(e,t.clothDark,$.leather,$.leather)},weapon(e,t){wh(e,$.woodDark,t.cloth)}},warden:{scale:1.1,hand:`armR`,attack:`staff`,hunch:0,legs(e,t){e.box(.14,.42,.16,$.woolDark,{p:[0,-.2,0]}),gh(e,$.woodDark,t.fur)},body(e,t){e.cyl(.22,.36,.72,$.wool,{p:[0,-.34,0]},8),e.box(.4,.5,.27,$.wool,{p:[0,.29,0]});for(let n of[-1,1])e.box(.08,.95,.03,t.cloth,{p:[n*.09,.07,.15]}),e.box(.085,.07,.035,t.trim,{p:[n*.09,-.38,.152]});e.box(.42,.06,.29,$.leather,{p:[0,.06,0]}),e.ball(.2,t.fur,{p:[0,.5,-.01],s:[1.6,.6,1.15]},7,4)},head(e,t){_h(e,$.skin),vh(e,`#d8d2c6`,!0),e.cyl(.16,.17,.26,t.furDark,{p:[0,.15,-.01]},8),e.cyl(.13,.15,.06,t.cloth,{p:[0,.3,-.01]},8)},arm(e,t){Sh(e,$.wool,$.wool,$.skin),e.box(.15,.06,.16,t.cloth,{p:[0,-.52,0]})},weapon(e,t){Ch(e,$.woodDark,-.85,1.25,.028),e.box(.2,.03,.2,$.iron,{p:[0,0,1.25],r:[hh,0,0]}),e.box(.2,.03,.2,$.iron,{p:[0,0,1.52],r:[hh,0,0]});for(let[t,n]of[[-1,-1],[-1,1],[1,-1],[1,1]])e.box(.025,.025,.28,$.iron,{p:[t*.085,n*.085,1.385]});e.cone(.13,.12,$.iron,{p:[0,0,1.6],r:[hh,0,0]},4),e.box(.05,.05,.06,t.trim,{p:[0,0,1.69]})},weaponGlow(e,t){e.ico(.075,t.glow,{p:[0,0,1.38]}),e.ico(.045,t.glowHot,{p:[0,.02,1.4]})}}};function Eh(e,t,n,r,i=5){for(let a=0;a<i;a++){let o=a/i*Math.PI*2,s=a===0?0:.5,c=r*(a===0?1.6:1);e.cone(r*.28,c,t,{p:[n[0]+Math.cos(o)*r*.25*s*2,n[1]+c*.4,n[2]+Math.sin(o)*r*.25*s*2],r:[Math.sin(o)*s,0,-Math.cos(o)*s]},4)}}var Dh={hearth:Th,rime:{settler:{scale:.98,hand:`armR`,attack:`chop`,hunch:.22,legs(e,t){e.box(.15,.42,.17,$.hideDark,{p:[0,-.2,0]}),e.box(.14,.3,.16,$.hide,{p:[0,-.5,0]}),gh(e,t.furDark,t.fur)},body(e,t){e.cyl(.2,.27,.36,$.hide,{p:[0,-.08,0]},6),e.box(.38,.48,.25,$.hide,{p:[0,.29,0]}),e.box(.4,.07,.27,t.clothDark,{p:[0,.06,0]}),e.cyl(.2,.33,.3,t.cloth,{p:[0,.42,-.02]},6),e.ball(.24,$.hideDark,{p:[0,.42,-.27],s:[1,1.1,.8]},6,4),e.box(.5,.04,.04,$.bone,{p:[0,.6,-.2]})},head(e,t){_h(e,$.skinPale),e.ball(.175,t.cloth,{p:[0,.04,-.04],s:[1.02,1.02,1.08]},6,4),yh(e,t),e.cone(.03,.1,t.armor,{p:[-.09,.15,.12],r:[.3,0,.4]},4),e.cone(.03,.1,t.armor,{p:[.09,.15,.12],r:[.3,0,-.4]},4)},headGlow:bh,arm(e,t){Sh(e,t.cloth,$.hide,$.skinPale)},weapon(e,t){Ch(e,$.bone,-.12,.5),e.cone(.045,.26,$.iceDeep,{p:[0,-.12,.44],r:[Math.PI,0,0]},4),e.cone(.035,.14,$.ice,{p:[0,.07,.44]},4),e.box(.06,.06,.08,t.clothDark,{p:[0,0,.44]})}},shieldbearer:{scale:1.22,hand:`armR`,attack:`slam`,hunch:.1,legs(e,t){e.box(.18,.42,.2,t.clothDark,{p:[0,-.2,0]}),e.box(.17,.3,.19,t.fur,{p:[0,-.5,0]}),gh(e,t.furDark,t.fur)},body(e,t){e.cyl(.25,.3,.36,t.clothDark,{p:[0,-.08,0]},6),e.box(.52,.52,.32,t.fur,{p:[0,.29,0]});for(let n=0;n<3;n++)e.box(.36-n*.05,.08,.04,t.armor,{p:[0,.42-n*.12,.17]});e.box(.08,.5,.33,t.cloth,{p:[0,.3,0],r:[0,0,.6]}),e.box(.54,.08,.34,t.clothDark,{p:[0,.06,0]})},head(e,t){_h(e,$.skinPale),e.ball(.16,t.fur,{p:[0,.06,-.04]},6,4),yh(e,t),xh(e,t.armor,1,[.12,.08,.02],.42,.06,.55),xh(e,t.armor,-1,[-.12,.08,.02],.42,.06,.55)},headGlow:bh,arm(e,t,n){Sh(e,t.fur,t.clothDark,$.skinPale),e.box(.17,.12,.16,t.armor,{p:[0,-.48,0]}),e.ico(.13,$.ice,{p:[n*.03,0,0],s:[1.2,.8,1.1]}),e.cone(.05,.26,$.ice,{p:[n*.08,.13,0],r:[0,0,-n*.5]},4),e.cone(.04,.18,$.iceDeep,{p:[n*.04,.1,-.08],r:[-.4,0,-n*.2]},4)},weapon(e,t){Ch(e,$.bone,-.25,.95,.032),e.box(.08,.08,.12,t.clothDark,{p:[0,0,0]}),e.ico(.2,$.iceDeep,{p:[0,0,1.02],s:[1,1,1.3]}),e.cone(.08,.3,$.ice,{p:[0,.2,1.02]},4),e.cone(.08,.3,$.ice,{p:[0,-.2,1.02],r:[Math.PI,0,0]},4),e.cone(.07,.22,$.ice,{p:[0,0,1.24],r:[hh,0,0]},4)},weaponGlow(e,t){e.ico(.1,t.glow,{p:[.12,0,1.02]}),e.ico(.1,t.glow,{p:[-.12,0,1.02]})}},hunter:{scale:1.02,hand:`armR`,attack:`throw`,hunch:.06,legs(e,t){e.box(.14,.42,.16,t.clothDark,{p:[0,-.2,0]}),e.box(.13,.3,.15,t.cloth,{p:[0,-.5,0]}),gh(e,t.furDark,t.fur)},body(e,t){e.cyl(.18,.24,.36,t.clothDark,{p:[0,-.08,0]},6),e.box(.34,.48,.23,$.hide,{p:[0,.29,0]}),e.box(.36,.2,.25,t.cloth,{p:[0,.4,0]}),e.box(.36,.07,.25,t.clothDark,{p:[0,.06,0]}),e.cyl(.18,.22,.1,t.fur,{p:[0,.54,0]},6);for(let t=0;t<3;t++){let n=-.06+t*.06;e.cyl(.018,.018,1.25,$.bone,{p:[n,.45,-.18],r:[0,0,.3]},4),e.cone(.04,.16,$.iceDeep,{p:[n-.2,1.1,-.18],r:[0,0,.3]},4)}},head(e,t){_h(e,$.skinPale),e.ball(.16,t.cloth,{p:[0,.05,-.04]},6,4),yh(e,t);for(let n of[-1,1])e.cone(.045,.5,t.armor,{p:[n*.1,.2,-.2],r:[-1.05,0,-n*.25]},5)},headGlow:bh,arm(e,t){Sh(e,$.hide,t.clothDark,$.skinPale)},weapon(e,t){Ch(e,$.bone,-.55,.85,.02),e.cone(.05,.22,$.iceDeep,{p:[0,0,.95],r:[hh,0,0]},4),e.box(.05,.05,.06,t.cloth,{p:[0,0,.82]})}},warden:{scale:1.1,hand:`armR`,attack:`cast`,hunch:0,legs(e,t){e.box(.14,.42,.16,t.clothDark,{p:[0,-.2,0]}),gh(e,t.furDark,t.fur)},body(e,t){e.cyl(.21,.37,.74,t.cloth,{p:[0,-.35,0]},6),e.cyl(.375,.375,.08,t.clothDark,{p:[0,-.68,0]},6),e.box(.38,.5,.26,t.cloth,{p:[0,.29,0]}),e.box(.1,1,.03,t.trim,{p:[0,.03,.15]}),e.ball(.2,t.trim,{p:[0,.5,-.01],s:[1.55,.6,1.15]},6,4);for(let n=0;n<5;n++){let r=(n/4-.5)*1.6;e.ball(.035,t.armor,{p:[Math.sin(r)*.2,.42-Math.cos(r)*.08,.14]},4,3)}},head(e,t){_h(e,$.skinPale),e.ball(.165,t.clothDark,{p:[0,.04,-.04]},6,4),yh(e,t)},headGlow(e,t){bh(e,t);for(let n=0;n<5;n++){let r=(n-2)*.42,i=n===2?.4:n%2?.3:.22;e.cone(.045,i,n===2?t.glowHot:t.glow,{p:[Math.sin(r)*(.12+i/2),.14+Math.cos(r)*i*.5,-.02],r:[0,0,-r]},4)}},arm(e,t){Sh(e,t.cloth,t.cloth,$.skinPale),e.box(.16,.06,.17,t.trim,{p:[0,-.52,0]})},weapon(e,t){Ch(e,$.bone,-.85,1.25,.026),e.box(.06,.06,.1,t.clothDark,{p:[0,0,1.2]});for(let n of[-1,1])e.cone(.025,.25,t.armor,{p:[n*.08,0,1.33],r:[hh,0,-n*.5]},4)},weaponGlow(e,t){let n=new ih;Eh(n,t.glow,[0,0,0],.17,5),e.add(n.build().rotateX(hh).translate(0,0,1.36),t.glow),e.ico(.07,t.glowHot,{p:[0,0,1.45]})}}}};function Oh(){let e=new ih;for(let[t,n]of[[-.05,0],[.05,0],[0,.08]])e.cyl(.055,.055,.95,$.timber,{p:[t-.2,.62+n,.02],r:[hh,.15,0]},6);return e.cyl(.07,.07,.05,$.rope,{p:[-.2,.65,.02],r:[hh,.15,0]},6),e.build()}function kh(){let e=new ih;return e.cyl(.2,.15,.2,$.woodLight,{p:[0,0,0]},7),e.cyl(.205,.205,.035,$.woodDark,{p:[0,.09,0]},7),e.build()}function Ah(){let e=new ih;return e.ico(.1,$.ember,{p:[-.06,.12,.02]}),e.ico(.08,$.emberHot,{p:[.07,.11,-.03]}),e.ico(.07,$.ember,{p:[.01,.16,.06]}),e.build()}function jh(e,t){let n=lh[t],r=Dh[t][e],i=`unit|${e}|${t}`,a=(e,t)=>oh(`${i}|${e}`,()=>{let e=new ih;return t(e),e.build()}),o=a(`leg`,e=>r.legs(e,n)),s=[{name:`legL`,geometry:o,pivot:[ph,dh,0],parent:`root`},{name:`legR`,geometry:o,pivot:[-.105,dh,0],parent:`root`},{name:`body`,geometry:a(`body`,e=>r.body(e,n)),pivot:[0,dh,0],parent:`root`},{name:`head`,geometry:a(`head`,e=>r.head(e,n)),pivot:[0,.73,0],parent:`body`},{name:`armL`,geometry:a(`armL`,e=>r.arm(e,n,1)),pivot:[fh,.53,0],parent:`body`},{name:`armR`,geometry:a(`armR`,e=>r.arm(e,n,-1)),pivot:[-.27,.53,0],parent:`body`}],c=r.headGlow;if(c&&s.push({name:`headGlow`,geometry:a(`headGlow`,e=>c(e,n)),pivot:[0,0,0],parent:`head`,glow:!0}),r.hand&&r.weapon){let e=r.weapon;s.push({name:`weapon`,geometry:a(`weapon`,t=>e(t,n)),pivot:[0,mh,.01],parent:r.hand})}let l=r.weaponGlow;return l&&s.push({name:`weaponGlow`,geometry:a(`weaponGlow`,e=>l(e,n)),pivot:[0,0,0],parent:`weapon`,glow:!0}),e===`settler`&&s.push({name:`loadTimber`,geometry:oh(`unit|timber`,Oh),pivot:[0,0,0],parent:`body`},{name:`loadBasket`,geometry:oh(`unit|basket`,kh),pivot:[0,.1,.42],parent:`body`},{name:`loadEmber`,geometry:oh(`unit|ember`,Ah),pivot:[0,0,0],parent:`loadBasket`,glow:!0}),s}function Mh(e,t){let n=new Bo;n.name=`unit:${e}:${t}`;let r=new Map([[`root`,n]]);for(let i of jh(e,t)){let e=sh(i.geometry,i.name,i.pivot,i.glow);r.set(i.name,e),(r.get(i.parent)??n).add(e)}return n.scale.setScalar(Dh[t][e].scale),n.userData.kind=e,n.userData.team=t,Fh(n,`idle`,0),n}function Nh(e){let t=e.userData.rig;if(!t){let n=t=>e.getObjectByName(t);t={body:n(`body`),head:n(`head`),legL:n(`legL`),legR:n(`legR`),armL:n(`armL`),armR:n(`armR`),headGlow:n(`headGlow`),weapon:n(`weapon`),weaponGlow:n(`weaponGlow`),loadTimber:n(`loadTimber`),loadBasket:n(`loadBasket`),loadEmber:n(`loadEmber`)},e.userData.rig=t}return t}var Ph={chop:{aL:-.15,aR:-.15,zL:.08,zR:-.08,aim:.75},slash:{aL:-.75,aR:-.35,zL:-.2,zR:-.08,aim:-.95},draw:{aL:-.35,aR:-.15,zL:.08,zR:-.08,aim:0},staff:{aL:-.15,aR:-.35,zL:.08,zR:-.22,aim:-hh},cast:{aL:-.15,aR:-.35,zL:.08,zR:-.22,aim:-hh},slam:{aL:-.2,aR:-.55,zL:.1,zR:-.12,aim:-2.5},throw:{aL:-.15,aR:-.4,zL:.08,zR:-.08,aim:-1.35}};function Fh(e,t,n,r=`timber`){let i=Nh(e),a=Dh[e.userData.team][e.userData.kind],o=t===`walk`||t===`carry`,s=n*8.5,c=Math.sin(s),l=Ph[a.attack];i.legL.rotation.set(o?c*.55:0,0,0),i.legR.rotation.set(o?-c*.55:0,0,0),i.body.position.set(0,dh+(o?Math.abs(Math.cos(s))*.04-.02:Math.sin(n*2)*.006),0);let u=a.hunch+(o?.06:0);i.head.rotation.set(-a.hunch*.7,t===`idle`?Math.sin(n*.7)*.25:0,0);let{aL:d,aR:f,zL:p,zR:m,aim:h}=l,g=0,_=!0;if(o){let e=a.attack===`chop`||a.attack===`draw`?.45:.15;d+=-c*(a.attack===`slash`?.15:.45),f+=c*e}let v=n*1.6%1,y=1-(1-(v<.55?v/.55:1-(v-.55)/.45))**3;if(t===`carry`)_=!1,r===`timber`?(f=-2.85,m=-.25):(d=f=-.95,p=-.18,m=.18);else if(t===`work`){let e=n*1.8%1,t=e<.6?e/.6:1-(e-.6)/.4,r=t*t;f=d=-2.5+r*2.1,p=-.32,m=.32,h=f+.4,u+=.08+r*.18}else if(t===`attack`)switch(a.attack){case`chop`:f=-2.9+y*2.5,d=-.6,h=f+.4,g=(y-.5)*.4;break;case`slash`:d=-1.15,p=-.35,f=-1.45,m=-1.1+y*1.5,h=-.25,g=(y-.5)*.6;break;case`draw`:d=-hh,f=-hh+.1,m=-.45-(1-y)*.5+.5,p=.05,g=.35;break;case`staff`:f=-2.5+y*1.3,d=-1.2,p=-.1;break;case`cast`:f=-2.3-(1-y)*.4,d=-1.55+Math.sin(n*9)*.08,p=-.2,g=-.25;break;case`slam`:f=d=-3.05+y*2.6,p=-.4,m=.4,h=f+.3,u+=y*.25;break;case`throw`:f=-3.3+y*2,d=-1.35,h=-.2,g=.4-y*.6,_=v<.5}if(i.body.rotation.set(u,g,0),i.armL.rotation.set(d,0,p),i.armR.rotation.set(f,0,m),i.weapon){let e=a.hand===`armL`?d:f,t=a.hand===`armL`?p:m;i.weapon.rotation.set(a.attack===`draw`?-e:h-e-u,0,-t*.8),i.weapon.visible=_,i.weaponGlow&&(i.weaponGlow.visible=_)}i.loadTimber&&(i.loadTimber.visible=t===`carry`&&r===`timber`),i.loadBasket&&(i.loadBasket.visible=t===`carry`&&r===`emberstone`),i.loadEmber&&(i.loadEmber.visible=t===`carry`&&r===`emberstone`)}var Ih=[`hall`,`cottage`,`barracks`,`lodge`,`forge`,`brazier`],Lh={cottage:[3,3],barracks:[4,4],lodge:[4,4],forge:[3,3],hall:[4,4],brazier:[2,2]},Rh=new Ua,zh=new So,Bh=new q(0,1,0);function Vh(e,t,n,r,i){let a=new q(n[0]-t[0],n[1]-t[1],n[2]-t[2]),o=a.length();zh.setFromQuaternion(Rh.setFromUnitVectors(Bh,a.normalize()));let s=[(t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2];e.cyl(r,r,o,i,{p:s,r:[zh.x,zh.y,zh.z]},4)}function Hh(e,t,n,r,i,a,o,s=0,c=!1){let l=new ih;l.prism(t+.06,n+.14,.1,$.woodDark,{p:[0,-.05,0]}),l.prism(t,n,r,a),o&&l.prism(t+.04,n*.4,r*.4,$.snow,{p:[0,r*.6+.05,0]});let u=Math.atan2(r,n/2),d=Math.hypot(r,n/2)+.25;for(let e of[-t/2-.03,t/2+.03])for(let t of[-1,1])l.box(.07,.12,d,$.woodDark,{p:[e,r/2+.1,t*n/4-t*.07],r:[t*u,0,0]});e.merge(l,{p:[0,i,s],r:[0,c?Math.PI/2:0,0]})}function Uh(e,t,n,r,i,a=0){e.box(t-.06,n,r-.06,$.timber,{p:[0,i+n/2,a]});let o=Math.max(2,Math.round(n/.2));for(let s=0;s<o;s++){let c=i+(s+.5)*(n/o),l=s%2?$.wood:$.timber;e.cyl(.085,.085,t+.12,l,{p:[0,c,a+r/2-.03],r:[0,0,Math.PI/2]},5),e.cyl(.085,.085,t+.12,l,{p:[0,c,a-r/2+.03],r:[0,0,Math.PI/2]},5),e.cyl(.085,.085,r+.12,l,{p:[t/2-.03,c,a],r:[Math.PI/2,0,0]},5),e.cyl(.085,.085,r+.12,l,{p:[-t/2+.03,c,a],r:[Math.PI/2,0,0]},5)}}function Wh(e,t,n,r,i=.42){e.box(i,r,i,$.stone,{p:[t,r/2,n]});for(let a=.35;a<r-.1;a+=.45)e.box(i+.04,.06,i+.04,$.stoneDark,{p:[t,a,n]});return e.box(i+.1,.12,i+.1,$.stoneDark,{p:[t,r,n]}),[t,r+.07,n]}function Gh(e,t,n,r,i,a=.26){let o=[Math.PI/2,0,0];e.cyl(a,a,.04,$.iron,{p:[n,r,i],r:o},10),e.cyl(a*.88,a*.88,.04,t.cloth,{p:[n,r,i+.015],r:o},10),e.box(a*.25,a*1.75,.02,t.trim,{p:[n,r,i+.04]}),e.box(a*1.75,a*.25,.02,t.trim,{p:[n,r,i+.04]}),e.ball(a*.25,$.steelDark,{p:[n,r,i+.05],s:[1,1,.6]},5,3)}function Kh(e,t,n,r,i=2.2){e.cyl(.035,.04,i,$.woodDark,{p:[n,i/2,r]},4),e.box(.42,.04,.04,$.woodDark,{p:[n,i-.08,r+.02]}),e.box(.38,.8,.03,t.banner,{p:[n,i-.5,r+.04]}),e.cone(.14,.3,t.banner,{p:[n-.1,i-1.05,r+.04],r:[0,0,Math.PI]},3),e.cone(.14,.3,t.banner,{p:[n+.1,i-1.05,r+.04],r:[0,0,Math.PI]},3),e.cyl(.11,.11,.02,t.emblem,{p:[n,i-.45,r+.06],r:[Math.PI/2,0,0]},6)}function qh(e,t,n,r=3){for(let i=0;i<r;i++)for(let a=0;a<r-i;a++)e.cyl(.09,.09,.7,i%2?$.wood:$.timber,{p:[t+(a-(r-i-1)/2)*.18,.09+i*.16,n],r:[Math.PI/2,0,0]},6)}function Jh(e,t,n,r){let[i,a,o]=n;e.cone(r*.55,r*1.5,t.glow,{p:[i,a+r*.75,o]},5),e.cone(r*.32,r*1.1,t.glowHot,{p:[i+r*.12,a+r*.6,o+r*.1]},4),e.cone(r*.28,r*.9,t.glow,{p:[i-r*.2,a+r*.45,o-r*.08]},4)}function Yh(e,t,n,r,i,a){e.cone(.09,r,$.bone,{p:[t,r/2,n],r:[Math.cos(a)*i,0,-Math.sin(a)*i]},5)}function Xh(e,t,n,r,i,a=$.ice,o=0){e.cyl(i*.7,i,r*.55,a,{p:[t,o+r*.275,n]},5),e.cone(i*.7,r*.45,a,{p:[t,o+r*.55+r*.225,n]},5)}function Zh(e,t,n,r,i,a,o){e.cone(i,a,$.hide,{p:[n,a/2,r]},7),e.cyl(i*.78,i*.86,.12,t.cloth,{p:[n,a*.18,r]},7);for(let t=0;t<4;t++){let i=t/4*Math.PI*2+.3;Vh(e,[n,a-.35,r],[n+Math.cos(i)*.22,a+.3,r+Math.sin(i)*.22],.025,$.bone)}e.box(i*.5,a*.4,.05,$.hideDark,{p:[n,a*.2,r+i*.62],r:[-.42,0,0]}),o&&e.cone(i*.42,a*.42,$.snow,{p:[n,a*.79+.02,r]},7)}function Qh(e){switch(e){case`hall`:return{height:4.6,foundation(e){e.box(3.7,.3,3,$.stone,{p:[0,.15,-.1]}),e.box(3.8,.06,3.1,$.stoneDark,{p:[0,.03,-.1]}),e.box(1.1,.16,.5,$.stoneDark,{p:[0,.08,1.55]})},walls(e){Uh(e,3.3,1.5,2.5,.3,-.1),e.prism(2.5,3.3,2.2,$.timber,{p:[0,1.8,-.1],r:[0,Math.PI/2,0]}),e.box(.9,1.15,.06,$.woodDark,{p:[0,.875,1.17]}),e.box(1.1,.12,.1,$.woodDark,{p:[0,1.5,1.19]}),Wh(e,1.35,-.85,4.1,.55)},roof(e,t,n){Hh(e,3.3,3.9,2.4,1.75,t.roof,n,-.1,!0)},decor(e,t){for(let n of[-1.15,-.6,.6,1.15])Gh(e,t,n,1.15,1.22,.22);Kh(e,t,-1.9,1.5,3),Kh(e,t,1.9,1.5,3),qh(e,-1.6,-1.5,3)},glow(e,t){e.box(.7,.9,.02,t.glow,{p:[0,.75,1.205]}),e.box(.4,.06,.4,t.glow,{p:[1.35,4.2,-.85]});for(let n of[-1,1])e.box(.22,.26,.02,t.glowHot,{p:[n,1.55,1.2]})},flame(e,t){Jh(e,t,[1.35,4.2,-.85],.22)},lights:[[0,1.9,1.5]]};case`cottage`:return{height:3,foundation(e){e.box(2.5,.2,2.3,$.stone,{p:[0,.1,0]})},walls(e){Uh(e,2.1,.75,1.9,.2),e.box(.55,.62,.06,$.woodDark,{p:[.3,.51,.96]}),Wh(e,-.85,-.55,2.75,.38)},roof(e,t,n){Hh(e,2.3,2.6,2,.92,t.roof,n,0,!0)},decor(e,t){qh(e,1.3,.2,3),e.box(.5,.06,.06,$.woodDark,{p:[-.5,.75,1]}),Gh(e,t,-.45,.6,1,.2)},glow(e,t){e.box(.28,.24,.02,t.glowHot,{p:[-.45,1.6,1.13]}),e.box(.28,.06,.28,t.glow,{p:[-.85,2.83,-.55]})},flame(e,t){Jh(e,t,[-.85,2.83,-.55],.14)}};case`barracks`:return{height:3.8,foundation(e){e.box(3.8,.12,3.8,$.mud,{p:[0,.06,0]}),e.box(3,.25,2.2,$.stone,{p:[0,.125,-.7]})},walls(e){Uh(e,2.8,1.35,2,.25,-.7),e.prism(2,2.8,1.75,$.timber,{p:[0,1.6,-.7],r:[0,Math.PI/2,0]}),e.box(.95,1.05,.06,$.woodDark,{p:[0,.77,.32]});for(let t of[-1.75,1.75])for(let n=0;n<6;n++){let r=-1.6+n*.6;e.cyl(.11,.12,1.1,$.timber,{p:[t,.55,r]},5),e.cone(.11,.25,$.wood,{p:[t,1.22,r]},5)}},roof(e,t,n){Hh(e,2.5,3.3,2,1.55,t.roof,n,-.7,!0)},decor(e,t){Gh(e,t,-.9,1.05,.36),Gh(e,t,.9,1.05,.36),Kh(e,t,0,1.75,2.8),e.cyl(.07,.07,1.5,$.wood,{p:[1.1,.75,1.2]},5),e.box(.8,.07,.07,$.wood,{p:[1.1,1.2,1.2]}),e.ball(.22,$.woolDark,{p:[1.1,1.45,1.2],s:[1,1.2,1]},6,4),e.cyl(.24,.24,.05,$.rope,{p:[1.1,1.2,1.2]},6),e.box(.8,.06,.06,$.woodDark,{p:[-1.1,.95,1.2]});for(let t=0;t<4;t++)e.cyl(.02,.02,1.6,$.woodDark,{p:[-1.4+t*.2,.8,1.17],r:[.12,0,0]},4)}};case`lodge`:return{height:3,foundation(e){e.box(3.9,.06,3.9,$.mud,{p:[0,.03,0]}),e.box(3.4,.18,1.8,$.woodLight,{p:[0,.09,-.9]})},walls(e){e.box(3.3,1.1,.12,$.timber,{p:[0,.73,-1.7]});for(let t of[-1.5,-.5,.5,1.5])e.cyl(.08,.09,1.6,$.wood,{p:[t,.8,-.1]},5);e.box(3.2,.1,.12,$.woodDark,{p:[0,1.55,-.1]})},roof(e,t,n){Hh(e,2.6,3.7,1.8,1.5,t.roof,n,-.9,!0)},decor(e,t){for(let t of[-1.7,-.5])e.cyl(.04,.04,1.3,$.wood,{p:[t,.65,1]},4);e.box(1.3,.05,.05,$.wood,{p:[-1.1,1.28,1]}),e.box(.5,.6,.03,$.hide,{p:[-1.4,.9,1]}),e.box(.45,.55,.03,$.hideDark,{p:[-.82,.92,1]}),e.cyl(.05,.05,1,$.wood,{p:[1.15,.5,1.2],r:[.25,0,0]},4);let n=[Math.PI/2-.25,0,0];e.cyl(.42,.42,.08,$.woodLight,{p:[1.15,.9,1.3],r:n},10),e.cyl(.28,.28,.09,t.cloth,{p:[1.15,.9,1.3],r:n},10),e.cyl(.12,.12,.1,t.trim,{p:[1.15,.9,1.3],r:n},8),Kh(e,t,1.8,-.1,2.5),qh(e,.3,-1.3,2)}};case`forge`:return{height:3.4,foundation(e){e.box(2.8,.22,2.6,$.stone,{p:[0,.11,0]})},walls(e){e.box(2.4,1.3,1.6,$.stone,{p:[0,.87,-.4]});for(let t=.5;t<1.5;t+=.32)e.box(2.44,.05,1.64,$.stoneDark,{p:[0,t,-.4]});e.box(.9,.7,.1,$.char,{p:[-.45,.6,.41]});for(let t of[-1.1,1.1])e.cyl(.08,.09,1.55,$.wood,{p:[t,.95,.95]},5);Wh(e,.7,-.75,3.2,.6)},roof(e,t,n){e.box(2.8,.16,2.6,t.roof,{p:[0,1.85,.05],r:[.28,0,0]}),e.box(2.85,.06,2.65,$.woodDark,{p:[0,1.76,.05],r:[.28,0,0]}),n&&e.box(2.7,.06,.9,$.snow,{p:[0,2.12,-.75],r:[.28,0,0]})},decor(e){e.box(.25,.4,.25,$.woodDark,{p:[.5,.42,.85]}),e.box(.5,.15,.22,$.iron,{p:[.5,.69,.85]}),e.cone(.08,.2,$.iron,{p:[.8,.69,.85],r:[0,0,-Math.PI/2]},4);for(let t=0;t<2;t++)e.cyl(.18,.18,.4,$.wood,{p:[-1.05+t*.4,.42,1]},7);e.box(.4,.12,.3,$.char,{p:[-1.05,.66,1]})},glow(e,t){e.box(.7,.45,.03,t.glow,{p:[-.45,.5,.47]}),e.box(.5,.06,.5,t.glow,{p:[.7,3.27,-.75]});for(let n=0;n<3;n++)e.ico(.07,t.glowHot,{p:[-.6+n*.12,.4,.5]})},flame(e,t){Jh(e,t,[.7,3.27,-.75],.2)},lights:[[-.45,1.3,1.2]]};case`brazier`:return{height:1.7,foundation(e){e.cyl(.85,.95,.18,$.stone,{p:[0,.09,0]},9);for(let t=0;t<9;t++){let n=t/9*Math.PI*2;e.box(.26,.14,.22,t%2?$.stoneDark:$.stone,{p:[Math.cos(n)*.82,.22,Math.sin(n)*.82],r:[0,-n,0]})}},walls(e){for(let t=0;t<3;t++){let n=t/3*Math.PI*2;e.box(.07,1.2,.07,$.iron,{p:[Math.cos(n)*.32,.72,Math.sin(n)*.32],r:[Math.sin(n)*.28,0,-Math.cos(n)*.28]})}e.cyl(.08,.1,.12,$.iron,{p:[0,.75,0]},6)},roof(e){e.cyl(.58,.28,.34,$.iron,{p:[0,1.32,0]},9),e.cyl(.62,.62,.05,$.steelDark,{p:[0,1.5,0]},9)},decor(e,t){qh(e,.75,-.55,2);for(let n=0;n<4;n++){let r=n/4*Math.PI*2+.4;e.box(.12,.08,.04,t.trim,{p:[Math.cos(r)*.6,1.5,Math.sin(r)*.6],r:[0,-r,0]})}},glow(e,t){e.cyl(.54,.54,.04,t.glow,{p:[0,1.48,0]},9);for(let n=0;n<5;n++){let r=n/5*Math.PI*2;e.ico(.1,t.glowHot,{p:[Math.cos(r)*.28,1.53,Math.sin(r)*.28]})}},flame(e,t){Jh(e,t,[0,1.5,0],.42)},lights:[[0,0,2.6]]}}}function $h(e){switch(e){case`hall`:return{height:5.4,foundation(e){e.cyl(1.95,2.05,.25,$.iceDeep,{p:[0,.125,0]},6),e.cyl(1.7,1.8,.12,$.ice,{p:[0,.31,0]},6)},walls(e,t){e.cyl(1.35,1.6,1.5,$.ice,{p:[0,1.12,0]},6),e.cyl(1.37,1.37,.12,t.clothDark,{p:[0,1.8,0]},6),e.box(.75,1,.1,$.hideDark,{p:[0,.87,1.42],r:[-.12,0,0]})},roof(e,t,n){e.cone(1.45,1.2,t.roof,{p:[0,2.46,0]},6),Xh(e,0,0,3.3,.45,$.ice,2),Xh(e,.7,-.4,2,.3,t.roof,1.7),Xh(e,-.7,-.35,2.3,.3,t.roof,1.7),Xh(e,.1,.65,1.4,.24,$.ice,1.7),n&&e.cyl(1.2,1.42,.08,$.snow,{p:[0,1.9,0]},6)},decor(e,t){for(let n of[-1,1])Yh(e,n*.75,1.75,2.4,.45,n*-Math.PI/2),e.box(.3,.6,.03,t.banner,{p:[n*1.5,1.35,1.15],r:[0,n*.5,0]});for(let t=0;t<6;t++){let n=t/6*Math.PI*2+Math.PI/6;Math.abs(Math.sin(n))<.6&&Math.cos(n)>0||Yh(e,Math.sin(n)*1.95,Math.cos(n)*1.95,.9,.3,n)}},glow(e,t){e.ico(.32,t.glow,{p:[0,3,0],s:[1,1.6,1]}),e.box(.5,.7,.02,t.glow,{p:[0,.8,1.38]})},lights:[[0,1.9,1.6]]};case`cottage`:return{height:2.6,foundation(e){e.cyl(1.2,1.3,.12,$.snowShade,{p:[0,.06,0]},7)},walls(e){for(let t=0;t<6;t++){let n=t/6*Math.PI*2;Vh(e,[Math.cos(n)*1,0,Math.sin(n)*1],[-Math.cos(n)*.18,2.65,-Math.sin(n)*.18],.035,$.bone)}},roof(e,t,n){Zh(e,t,0,0,1.15,2.3,n)},decor(e,t){Yh(e,-1,.9,.8,.2,.5),Yh(e,1,.9,.8,.2,-.5),e.ico(.18,$.ice,{p:[.9,.18,-.6]}),e.box(.4,.3,.3,$.hideDark,{p:[-.9,.15,-.5],r:[0,.4,0]}),e.box(.3,.3,.02,t.banner,{p:[0,1,1],r:[-.42,0,0]})}};case`barracks`:return{height:3.6,foundation(e){e.box(3.8,.1,3.8,$.snowShade,{p:[0,.05,0]})},walls(e,t){e.box(2.8,1.5,2,$.iceDeep,{p:[0,.75,-.7]}),e.box(2.84,.12,2.04,t.clothDark,{p:[0,1.5,-.7]}),e.box(.9,1,.08,$.hideDark,{p:[0,.55,.32]});for(let t of[-1.7,1.7])for(let n=0;n<5;n++){let r=-1.5+n*.75;e.ico(.32,n%2?$.ice:$.iceDeep,{p:[t,.45,r],s:[.8,1.6,1]}),e.cone(.18,.5,$.ice,{p:[t,1.15,r],r:[0,0,(n%2?1:-1)*.2]},4)}},roof(e,t,n){e.frustum(1.2,3.1,1.2,t.roofDark,{p:[0,2.1,-.7]},.72);for(let n of[-.9,0,.9])Xh(e,n,-.7,1.4,.18,t.roof,2.4);n&&e.frustum(1,1.9,.5,$.snow,{p:[0,2.48,-.7]},.72)},decor(e,t){for(let n of[-1,1])e.cone(.1,1.9,t.armor,{p:[n*.45,1.5,.45],r:[0,0,n*.55]},5);e.box(.9,.06,.06,$.bone,{p:[1,.9,1.2]});for(let t=0;t<3;t++)e.cyl(.025,.025,1,$.bone,{p:[.75+t*.25,.5,1.17]},4),e.ico(.12,$.iceDeep,{p:[.75+t*.25,1.05,1.17]});e.box(.4,.7,.03,t.banner,{p:[-1,1,1.2]}),e.cyl(.03,.03,1.6,$.bone,{p:[-1,.8,1.18]},4)},glow(e,t){e.ico(.12,t.glow,{p:[0,2,.6]});for(let n of[-.9,.9])e.box(.18,.3,.02,t.glow,{p:[n,1,.31]})}};case`lodge`:return{height:2.6,foundation(e){e.box(3.8,.08,3.8,$.snowShade,{p:[0,.04,0]})},walls(e){for(let t of[-1.6,1.6])e.cyl(.05,.05,1.6,$.bone,{p:[t,.8,1.3]},4);e.box(3.3,.06,.06,$.bone,{p:[0,1.55,1.3]})},roof(e,t,n){Zh(e,t,-.85,-.6,1.05,2.3,n),Zh(e,t,1,-.9,.85,1.8,n)},decor(e,t){for(let t=0;t<4;t++)e.box(.35,.5,.03,t%2?$.hide:$.hideDark,{p:[-1.2+t*.8,1.2,1.3]});for(let t=0;t<5;t++)e.cyl(.018,.018,1.5,$.bone,{p:[1.2+t*.1,.75,.4],r:[.15,0,-.1+t*.05]},4),e.cone(.04,.16,$.iceDeep,{p:[1.25+t*.12,1.55,.5]},4);e.box(.3,.3,.02,t.banner,{p:[-.85,.9,.35],r:[-.42,0,0]})}};case`forge`:return{height:3.4,foundation(e){e.cyl(1.35,1.45,.18,$.iceDeep,{p:[0,.09,0]},6)},walls(e){for(let t=0;t<6;t++){let n=t/6*Math.PI*2+Math.PI/6;e.cyl(.08,.11,1.5,$.bone,{p:[Math.sin(n)*1.15,.9,Math.cos(n)*1.15]},5),e.ball(.12,$.boneDark,{p:[Math.sin(n)*1.15,1.68,Math.cos(n)*1.15]},5,3)}e.box(1.2,.55,.7,$.ice,{p:[0,.45,.15]})},roof(e,t,n){Xh(e,-.35,-.6,3.2,.36,$.ice,.18),Xh(e,.35,-.55,2.2,.28,t.roof,.18),n&&e.box(1.1,.06,.6,$.snow,{p:[0,.75,.15]})},decor(e){e.box(.4,.15,.25,$.iron,{p:[.65,.25,.9]}),e.ico(.16,$.iceDeep,{p:[-.8,.2,.9]})},glow(e,t){e.ico(.2,t.glow,{p:[0,.9,.15],s:[1,1.5,1]}),e.ico(.14,t.glowHot,{p:[-.35,1.6,-.6]})},lights:[[0,.4,1.4]]};case`brazier`:return{height:2.8,foundation(e){e.cyl(.85,.95,.16,$.iceDeep,{p:[0,.08,0]},6)},walls(e){for(let t=0;t<6;t++){let n=t/6*Math.PI*2;Yh(e,Math.sin(n)*.72,Math.cos(n)*.72,1,.25,n+Math.PI)}},roof(e,t){Xh(e,0,0,2.6,.32,$.ice,.14),Xh(e,.3,.15,1.2,.16,t.roof,.14),Xh(e,-.25,.2,1,.14,t.roof,.14)},decor(e,t){e.box(.25,.4,.02,t.banner,{p:[.55,.9,.55],r:[0,Math.PI/4,0]})},glow(e,t){e.ico(.17,t.glowHot,{p:[0,1.25,0],s:[1,1.8,1]})},flame(e,t){for(let n=0;n<4;n++){let r=n/4*Math.PI*2;e.ico(.07,t.glow,{p:[Math.cos(r)*.55,1.4+n%2*.5,Math.sin(r)*.55]})}},lights:[[0,0,2.4]]}}}var eg=(e,t)=>t===`hearth`?Qh(e):$h(e);function tg(e,t,n,r){let i=new ih,a=e===`hearth`?$.woodLight:$.bone,o=e===`hearth`?$.wood:$.hideDark,s=t/2+.15,c=n/2+.15,l=[[-s,-c],[s,-c],[-s,c],[s,c],[0,c],[0,-c]];for(let[e,t]of l)i.cyl(.04,.05,r,a,{p:[e,r/2,t]},4);for(let e=.8;e<r;e+=.9){for(let n of[-c,c])i.box(t+.3,.05,.05,a,{p:[0,e,n]});for(let t of[-s,s])i.box(.05,.05,n+.3,a,{p:[t,e,0]});i.box(t*.9,.04,.3,o,{p:[0,e+.04,c+.1]})}let u=Math.min(r,1.8),d=Math.hypot(s,u);for(let e of[-1,1])i.box(.035,d,.035,a,{p:[e*s/2,u/2,c],r:[0,0,e*Math.atan2(s,u)]});if(e===`hearth`){for(let e=0;e<3;e++)i.box(1.3,.1,.12,$.woodLight,{p:[-s+.7,.05+e*.1,c+.5+e%2*.06]});i.box(.35,.25,.3,$.stoneLight,{p:[s-.4,.12,c+.5]})}else{i.box(.5,.35,.4,$.ice,{p:[-s+.5,.17,c+.5],r:[0,.3,0]}),i.box(.4,.3,.35,$.iceDeep,{p:[-s+1,.15,c+.55],r:[0,-.2,0]});for(let e=0;e<3;e++)i.cyl(.03,.03,1.1,$.bone,{p:[s-.5,.04+e*.05,c+.5],r:[0,0,Math.PI/2]},4)}return i.build()}function ng(e){return e>=1?3:e<.34?0:e<.67?1:2}var rg=null,ig=new Map;function ag(e,t,n,r){if(!rg){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),rg=new Rc(e)}let i=ig.get(e);i||(i=new tc({map:rg,color:e,transparent:!0,opacity:.4,blending:2,depthWrite:!1}),ig.set(e,i));let a=new pc(oh(`light|disc`,()=>new su(2,2).rotateX(-Math.PI/2)),i);return a.name=`light`,a.position.set(t,.12,n),a.scale.setScalar(r),a.renderOrder=1,a}function og(e,t,n=1){let r=ng(Math.max(0,Math.min(1,n))),i=lh[t],[a,o]=Lh[e],s=eg(e,t),c=`bld|${e}|${t}`,l=oh(`${c}|${r}`,()=>{let e=new ih;if(s.foundation(e,i),r===0){let n=t===`hearth`?$.woodLight:$.bone;for(let[t,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.cyl(.07,.08,.8,n,{p:[t*a*.3,.4,r*o*.28]},5)}return r>=1&&s.walls(e,i),r>=2&&s.roof(e,i,r===3),r===3&&s.decor(e,i),e.build()}),u=new Bo;if(u.name=`building:${e}:${t}`,u.add(sh(l,`structure`)),r===3){let{glow:e,flame:t}=s;e&&u.add(sh(oh(`${c}|glow`,()=>sg(e,i)),`glow`,[0,0,0],!0)),t&&u.add(sh(oh(`${c}|flame`,()=>sg(t,i)),`flame`,[0,0,0],!0));for(let[e,t,n]of s.lights??[])u.add(ag(i.glow,e,t,n))}else{let n=r===0?1.4:r===1?s.height*.65:s.height*.9,i=oh(`scaffold|${t}|${e}|${r}`,()=>tg(t,a*.82,o*.78,n));u.add(sh(i,`scaffold`))}return u.userData={kind:e,team:t,progress:n,stage:r,footprint:[a,o]},u}function sg(e,t){let n=new ih;return e(n,t),n.build()}function cg(e,t){let n=e.id%7*.9;for(let r of e.children)if(r.name===`flame`){if(e.userData.team===`rime`)r.rotation.y=t*.8+n,r.position.y=Math.sin(t*2+n)*.08;else{let e=Math.sin(t*13+n)*.5+Math.sin(t*7.3+n*2)*.5;r.scale.set(1+e*.06,1+e*.14,1+e*.06),r.rotation.y=Math.sin(t*3+n)*.4}}else if(r.name===`light`){let e=r,i=e.userData.r??(e.userData.r=e.scale.x);e.scale.setScalar(i*(1+Math.sin(t*9+n)*.04+Math.sin(t*5.1)*.03))}}function lg(e,t){let n=oh(`rubble|${e}|${t}`,()=>{let[n,r]=Lh[e],i=ch(n*31+r*7+e.length*101+(t===`hearth`?0:977)),a=new ih,o=t===`hearth`;a.cyl(n*.48,n*.52,.06,o?$.char:$.snowShade,{p:[0,.03,0],s:[1,1,r/n]},8);let s=Math.round(n*r*1.6);for(let e=0;e<s;e++){let t=(i()-.5)*n*.85,s=(i()-.5)*r*.85,c=[(i()-.5)*.8,i()*Math.PI,(i()-.5)*.8];o?e%3==0?a.box(.3+i()*.25,.22,.28,i()<.5?$.stone:$.stoneDark,{p:[t,.11,s],r:c}):a.box(.14,.14,.8+i()*.9,i()<.6?$.char:$.woodDark,{p:[t,.12+i()*.2,s],r:c}):e%3==0?a.cyl(.03,.04,.7+i()*.5,$.bone,{p:[t,.08,s],r:[Math.PI/2,c[1],0]},4):a.cone(.12+i()*.12,.35+i()*.5,i()<.5?$.ice:$.iceDeep,{p:[t,.15,s],r:c},4)}if(o){let e=Math.min(1.6,n*.4);a.box(.45,e,.45,$.stoneDark,{p:[n*.25,e/2,-r*.2]})}else Xh(a,-n*.2,-r*.15,Math.min(1.4,n*.35),.25,$.iceDeep);return a.build()}),r=new Bo;return r.name=`rubble:${e}:${t}`,r.add(sh(n,`structure`)),r.userData={kind:e,team:t,rubble:!0},r}var ug=4;function dg(e){let t=ch(e*977+11),n=new ih;n.box(3.8,.04,3.8,$.snowShade,{p:[0,.03,0]});for(let e=0;e<5;e++){let e=(t()-.5)*3,r=(t()-.5)*3;n.cyl(.13,.15,.18,$.woodDark,{p:[e,.1,r]},6),n.cyl(.12,.12,.02,$.woodLight,{p:[e,.2,r]},6)}let r=new ih;for(let e=0;e<6;e++){let n=e/6*Math.PI*2+t()*.5,i=1.1+t()*.5,a=1.3+t()*.6,o=Math.cos(n)*i,s=Math.sin(n)*i;r.cyl(.06,.08,.4,$.woodDark,{p:[o,.2,s]},5),r.cone(.42,a,e%2?$.pine:$.pineDark,{p:[o,.35+a/2,s]},6),r.cone(.24,a*.45,$.snow,{p:[o,.35+a*.78,s]},6)}for(let e=0;e<3;e++)for(let t=0;t<3-e;t++)r.cyl(.11,.11,1.2,t%2?$.wood:$.woodLight,{p:[-.2+t*.23+e*.115,.12+e*.2,.3],r:[0,0,Math.PI/2]},6);return{ground:n.build(),timber:r.build()}}function fg(){let e=new ih;return e.ico(.75,$.stoneDark,{p:[-.2,.3,-.1],s:[1.3,.7,1.1]}),e.ico(.55,$.stone,{p:[.45,.25,.3],s:[1.1,.8,1]}),e.ico(.45,$.snow,{p:[-.25,.68,-.15],s:[1.2,.35,1]}),[[.1,.5,.3,.95],[-.5,.45,.4,.7],[.6,.45,-.15,.8],[.15,.4,-.55,.6],[-.15,.6,-.05,.75]].forEach(([t,n,r,i],a)=>{let o=a%2?$.ember:$.emberHot;e.cone(.2,i,o,{p:[t,n+i/2,r],r:[t*.5,0,r*.5]},5)}),e.build()}function pg(e){let t=ch(e*131+7),n=new ih,r=.85+t()*.35;n.cyl(.1,.14,.9*r,$.woodDark,{p:[0,.45*r,0]},5);for(let e=0;e<3;e++){let i=(1.15-e*.3)*(.9+t()*.2),a=(1.3-e*.18)*r,o=(.7+e*.85)*r,s=o+a/2,c=t()*Math.PI;n.cone(i,a,e%2?$.pine:$.pineDark,{p:[0,o,0],r:[0,c,0]},7);let l=.56;n.cone(i*l*1.07,a*l,$.snow,{p:[0,s-a*l/2+.03,0],r:[0,c,0]},7);let u=t()*Math.PI*2;n.ico(.13,$.snowShade,{p:[Math.cos(u)*i*.8,o-a/2+.12,Math.sin(u)*i*.8],s:[1.4,.5,1]})}return n.build()}function mg(e){let t=ch(e*313+3),n=new ou(.75,1),r=n.getAttribute(`position`),i=new Map,a=new q,o=1.1+t()*.5,s=.9+t()*.4;for(let e=0;e<r.count;e++){a.fromBufferAttribute(r,e);let n=`${a.x.toFixed(3)},${a.y.toFixed(3)},${a.z.toFixed(3)}`,c=i.get(n);c===void 0&&(c=.75+t()*.45,i.set(n,c)),a.multiplyScalar(c),a.set(a.x*o,Math.max(a.y*.7,-.1),a.z*s),r.setXYZ(e,a.x,a.y+.12,a.z)}let c=new ih,l=new Us;l.setAttribute(`position`,r);let u=l.toNonIndexed().getAttribute(`position`),d=new q,f=new q,p=new q;for(let e=0;e<u.count;e+=3){d.fromBufferAttribute(u,e),f.fromBufferAttribute(u,e+1),p.fromBufferAttribute(u,e+2);let t=f.clone().sub(d).cross(p.clone().sub(d)).normalize(),n=new Us;n.setAttribute(`position`,new js([d.x,d.y,d.z,f.x,f.y,f.z,p.x,p.y,p.z],3));let r=t.y>.88?$.snow:t.y>.7?$.snowShade:e/3%3==0?$.stoneDark:$.stone;c.add(n,r)}return n.dispose(),c.build()}function hg(e,t=0){let n=(t%ug+ug)%ug,r=new Bo;switch(r.name=`prop:${e}`,e){case`timberStand`:{let{ground:e,timber:t}=_g(n);r.add(sh(e,`prop`)),r.add(sh(t,`timber`));break}case`emberSeam`:r.add(sh(oh(`prop|emberSeam`,fg),`prop`));break;case`snowPine`:r.add(sh(oh(`prop|pine|${n}`,()=>pg(n)),`prop`));break;case`rock`:r.add(sh(oh(`prop|rock|${n}`,()=>mg(n)),`prop`))}return r.userData={kind:e,seed:n},r}var gg=new Map;function _g(e){let t=gg.get(e);return t||(t=dg(e),gg.set(e,t)),t}new Cu({vertexColors:!0});var vg=null;function yg(){if(vg)return vg;let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.45,`rgba(255,255,255,0.8)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,32,32),vg=new Rc(e),vg.colorSpace=Qi,vg}function bg(e,t={}){let n=t.count??1800,r=t.radius??30,i=t.height??22,a=ch(4242),o=new Float32Array(n*3),s=new Float32Array(n*2);for(let e=0;e<n;e++)o[e*3]=(a()*2-1)*r,o[e*3+1]=a()*i,o[e*3+2]=(a()*2-1)*r,s[e*2]=.8+a()*.9,s[e*2+1]=a()*Math.PI*2;let c=new Us,l=new Os(o,3);l.setUsage(ia),c.setAttribute(`position`,l);let u=new Ac({size:t.size??.16,map:yg(),transparent:!0,depthWrite:!1,color:16777215,opacity:.9}),d=new Fc(c,u);d.name=`snowfall`,d.frustumCulled=!1,e.add(d);let f=Math.round(n*(t.calm??1)),p=0,m=0;return c.setDrawRange(0,f),{points:d,update(e,t){p+=e,t&&d.position.set(t.x,0,t.z);let c=1+m*2.2,u=.25+m*(5+Math.sin(p*.7)*1.5),f=m*1.4,h=.35*(1-m*.6);for(let t=0;t<n;t++){let n=t*3;o[n+1]-=s[t*2]*c*e,o[n]+=(Math.sin(p*.9+s[t*2+1])*h+u)*e,o[n+2]+=f*e,o[n+1]<0&&(o[n+1]+=i,o[n]=(a()*2-1)*r,o[n+2]=(a()*2-1)*r),o[n]>r&&(o[n]-=2*r),o[n+2]>r&&(o[n+2]-=2*r)}l.needsUpdate=!0},setStorm(e){m=Math.max(0,Math.min(1,e)),c.setDrawRange(0,Math.round(f+(n-f)*m)),u.size=(t.size??.16)*(1+m*1.2),u.opacity=.9-m*.1},dispose(){e.remove(d),c.dispose(),u.dispose()}}}var xg=45,Sg=4,Cg=class{heightAt;group=new Bo;entries=new Map;ruins=[];clock=0;last=performance.now();constructor(e){this.heightAt=e,this.group.name=`buildings`}update(e){let t=performance.now(),n=Math.min(.1,(t-this.last)/1e3);this.last=t,this.clock+=n;let r=new Set;for(let t of e.buildings){r.add(t.id);let n=ng(t.progress),i=this.entries.get(t.id);if(!i||i.stage!==n){i&&this.group.remove(i.object);let r=this.make(e,t);i={object:r,stage:n,kind:t.kind,team:t.team,flame:wg(r)},this.group.add(i.object),this.entries.set(t.id,i)}n===3&&(cg(i.object,this.clock),t.kind===`brazier`&&t.team===`hearth`&&Tg(i.object,t.fuel/d.max))}for(let[e,t]of this.entries)r.has(e)||(this.group.remove(t.object),this.entries.delete(e),this.addRuin(t));for(let e=this.ruins.length-1;e>=0;e--){let t=this.ruins[e];t.age+=n;let r=t.age-xg;r>Sg?(this.group.remove(t.object),this.ruins.splice(e,1)):r>0&&(t.object.position.y=t.object.userData.y-r/Sg*.6)}}flameAt(e){return this.entries.get(e)?.flame??null}addRuin(e){let t=lg(e.kind,e.team);t.position.copy(e.object.position),t.rotation.y=e.object.rotation.y,t.userData.y=t.position.y,t.traverse(e=>{e.receiveShadow=!0}),this.group.add(t),this.ruins.push({object:t,age:0})}make(e,t){let n=og(t.kind,t.team,t.progress),r=I(e,t);return n.position.set(r.x,this.heightAt(r.x,r.z),r.z),n.userData.buildingId=t.id,n}};function wg(e){let t=e.getObjectByName(`flame`);if(!(t instanceof pc))return null;let n=t.geometry;return n.boundingBox||n.computeBoundingBox(),n.boundingBox.getCenter(new q).add(e.position)}function Tg(e,t){let n=t>0,r=.45+.55*Math.min(1,t*1.5);for(let t of e.children)(t.name===`flame`||t.name===`light`)&&(t.visible=n,t.scale.multiplyScalar(r))}var Eg=new Cu({vertexColors:!0,flatShading:!0,transparent:!0,opacity:.6,depthWrite:!1,emissive:new X(`#2a3a4c`)});function Dg(e,t=`hearth`){let n=og(e,t,1);for(let e of[...n.children])(e.name===`light`||e.name===`flame`)&&n.remove(e);return n.traverse(e=>{e instanceof pc&&(e.material=Eg,e.castShadow=!1)}),n}var Og=14,kg=72,Ag=class{camera=new id(42,1,.5,600);target=new q(0,0,0);distance=40;bounds;heightAt;ray=new Dd;ndc=new K;tmp=new q;constructor(e,t){this.bounds=e/2-4,this.heightAt=t,this.update()}get pitch(){let e=(this.distance-Og)/58;return Ha.lerp(.7,1.1,e)}resize(e,t){this.camera.aspect=e/Math.max(1,t),this.camera.fov=this.camera.aspect<1?58:42,this.camera.updateProjectionMatrix()}lookAt(e,t){this.target.set(e,0,t),this.update()}zoomBy(e){this.distance=Ha.clamp(this.distance*e,Og,kg),this.update()}panBy(e,t){this.target.x+=e,this.target.z+=t,this.update()}update(){let e=this.bounds;this.target.x=Ha.clamp(this.target.x,-e,e),this.target.z=Ha.clamp(this.target.z,-e,e),this.target.y=this.heightAt(this.target.x,this.target.z);let t=this.pitch;this.camera.position.set(this.target.x,this.target.y+Math.sin(t)*this.distance,this.target.z+Math.cos(t)*this.distance),this.camera.lookAt(this.target),this.camera.updateMatrixWorld()}screenToGround(e,t,n,r){this.ndc.set(e/n*2-1,-(t/r)*2+1),this.ray.setFromCamera(this.ndc,this.camera);let{origin:i,direction:a}=this.ray.ray;if(a.y>=-1e-4)return null;let o=0,s=new q;for(let e=0;e<4;e++){let e=(o-i.y)/a.y;s.copy(i).addScaledVector(a,e),o=this.heightAt(s.x,s.z)}return s}worldToScreen(e,t,n,r,i){return this.tmp.set(e,t,n).project(this.camera),this.tmp.z>1?null:{x:(this.tmp.x+1)/2*r,y:(1-this.tmp.y)/2*i}}};function jg(e,t,n,r){let i=e.map((e,r)=>({i:r,v:e.power/(1+Math.hypot(e.x-t,e.z-n)/12)**2}));return i.sort((e,t)=>t.v-e.v),i.slice(0,r).map(e=>e.i)}var Mg=null;function Ng(){if(Mg)return Mg;let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.75)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,32,32),Mg=new Rc(e),Mg}var Pg=`
attribute float aSize;
attribute float aAlpha;
attribute vec3 aColor;
varying vec3 vColor;
varying float vAlpha;
uniform float uScale;
#include <fog_pars_vertex>
void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / -mvPosition.z;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Fg=`
uniform sampler2D uMap;
varying vec3 vColor;
varying float vAlpha;
#include <fog_pars_fragment>
void main() {
  vec4 t = texture2D(uMap, gl_PointCoord);
  gl_FragColor = vec4(vColor, t.a * vAlpha);
  #include <fog_fragment>
}`,Ig=class{points;n;count=0;pos;vel;col;size;alpha;life;max;base;grow;c=new X;gravity;drag;opacity;worldSize;material;constructor(e){let t=this.n=e.capacity;this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.life=new Float32Array(t),this.max=new Float32Array(t),this.base=new Float32Array(t),this.grow=new Float32Array(t),this.gravity=e.gravity??6,this.drag=e.drag??1,this.opacity=e.opacity??1,this.worldSize=e.size;let n=new Us,r=(e,t)=>new Os(e,t).setUsage(ia);n.setAttribute(`position`,r(this.pos,3)),n.setAttribute(`aColor`,r(this.col,3)),n.setAttribute(`aSize`,r(this.size,1)),n.setAttribute(`aAlpha`,r(this.alpha,1)),n.setDrawRange(0,0),this.material=new bu({vertexShader:Pg,fragmentShader:Fg,uniforms:_u.merge([Q.fog,{uMap:{value:Ng()},uScale:{value:e.size*600}}]),transparent:!0,depthWrite:!1,fog:!e.additive,blending:e.additive?2:1}),this.points=new Fc(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=e.additive?6:5}setViewport(e,t){this.material.uniforms.uScale.value=e/(2*Math.tan(t*Math.PI/360))*this.worldSize}emit(e){if(this.count>=this.n)return;let t=this.count++,n=t*3;this.pos[n]=e.x,this.pos[n+1]=e.y,this.pos[n+2]=e.z,this.vel[n]=e.vx??0,this.vel[n+1]=e.vy??0,this.vel[n+2]=e.vz??0,this.c.set(e.color),this.col[n]=this.c.r,this.col[n+1]=this.c.g,this.col[n+2]=this.c.b,this.life[t]=0,this.max[t]=e.life??.8,this.base[t]=e.size??1,this.grow[t]=e.grow??1,this.size[t]=this.base[t],this.alpha[t]=this.opacity}burst(e,t,n,r,i,a=2.5){for(let o=0;o<i;o++){let i=Math.random()*Math.PI*2,o=a*(.4+Math.random()*.6);this.emit({x:e,y:t,z:n,vx:Math.cos(i)*o,vy:a*(.6+Math.random()),vz:Math.sin(i)*o,life:.5+Math.random()*.6,color:r,size:.7+Math.random()*.6})}}update(e,t){let n=this.drag**+e,r=0;for(;r<this.count;){if(this.life[r]+=e,this.life[r]>=this.max[r]){this.swap(r,--this.count);continue}let i=r*3;this.vel[i]*=n,this.vel[i+2]*=n,this.vel[i+1]=this.vel[i+1]*n-this.gravity*e,this.pos[i]+=this.vel[i]*e,this.pos[i+2]+=this.vel[i+2]*e;let a=this.pos[i+1]+this.vel[i+1]*e,o=this.gravity>0?t(this.pos[i],this.pos[i+2])+.04:-1/0;a<o?(this.pos[i+1]=o,this.vel[i]*=.5,this.vel[i+2]*=.5,this.vel[i+1]=0):this.pos[i+1]=a;let s=this.life[r]/this.max[r];this.size[r]=this.base[r]*(1+(this.grow[r]-1)*s),this.alpha[r]=this.opacity*Math.min(1,s*8)*(1-s),r++}let i=this.points.geometry;i.setDrawRange(0,this.count);for(let e of[`position`,`aColor`,`aSize`,`aAlpha`])i.attributes[e].needsUpdate=!0}swap(e,t){if(e!==t){for(let n of[this.pos,this.vel,this.col])n[e*3]=n[t*3],n[e*3+1]=n[t*3+1],n[e*3+2]=n[t*3+2];for(let n of[this.size,this.alpha,this.life,this.max,this.base,this.grow])n[e]=n[t]}}dispose(){this.points.geometry.dispose(),this.material.dispose()}},Lg=6,Rg=160,zg=48,Bg=new X(`#ff9446`),Vg=new X(`#ffc372`),Hg=new X(`#ff6a2a`),Ug=new X(`#7fe6ff`),Wg=new X(`#ff9a30`),Gg=new X(`#9fe9ff`);function Kg(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,0.1)`),n.addColorStop(.75,`rgba(255,255,255,0.16)`),n.addColorStop(.92,`rgba(255,255,255,0.8)`),n.addColorStop(.96,`rgba(255,255,255,0.4)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new Rc(e)}function qg(e,t,n,r){let i=new Tc(e,new tc({map:t,transparent:!0,depthWrite:!1,fog:!1,blending:2}),n);return i.instanceMatrix.setUsage(ia),i.setColorAt(0,new X),i.frustumCulled=!1,i.renderOrder=r,i.count=0,i}var Jg=class{heightAt;group=new Bo;sparks=new Ig({capacity:900,size:.16,additive:!0,gravity:5,drag:.5});smoke=new Ig({capacity:700,size:.6,gravity:-.5,drag:.4,opacity:.55});debris=new Ig({capacity:500,size:.12,gravity:9,drag:.7});lights=[];glows=qg(new su(1,1),Ng(),Rg,7);rings;pulses=[];sources=[];timers=new Map;seen=new Map;lastProgress=new Map;m=new fo;v=new q;s=new q;c=new X;flat=new Ua;time=0;constructor(e){this.heightAt=e,this.group.name=`fx`;let t=new su(2,2).rotateX(-Math.PI/2);this.rings=qg(t,Kg(),zg,1);for(let e=0;e<Lg;e++){let e=new od(Bg,0,12,2);this.lights.push(e),this.group.add(e)}this.group.add(this.rings,this.glows,this.sparks.points,this.smoke.points,this.debris.points)}setViewport(e,t){for(let n of[this.sparks,this.smoke,this.debris])n.setViewport(e,t)}react(e,t){for(let n of t)if(n.type===`hit`){let e=this.heightAt(n.x,n.z)+1;n.melee?(this.sparks.burst(n.x,e,n.z,`#ffd9a0`,8,2.6),this.debris.burst(n.x,e,n.z,`#b0302a`,4,1.8)):(this.sparks.burst(n.x,e,n.z,n.team===`rime`?`#bff4ff`:`#ffe2a8`,6,2),this.debris.burst(n.x,e,n.z,`#6b4a30`,3,1.5))}else if(n.type===`death`){let e=this.heightAt(n.x,n.z);this.smoke.burst(n.x,e+.4,n.z,`#eef4fa`,10,1.2),this.debris.burst(n.x,e+.6,n.z,`#f4f8fc`,14,2.6)}else if(n.type===`destroyed`)this.collapse(n.x,n.z,a[n.buildingKind].size);else if(n.type===`placed`){let t=e.buildings.find(e=>e.id===n.buildingId);t&&this.dust(e,t.id,14)}else if(n.type===`built`){let t=e.buildings.find(e=>e.id===n.buildingId);if(t){this.dust(e,t.id,26);let n=I(e,t);this.sparks.burst(n.x,this.heightAt(n.x,n.z)+1.5,n.z,`#ffd34d`,18,2.4)}}else if(n.type===`trained`){let t=e.units.find(e=>e.id===n.unitId);t&&this.sparks.burst(t.x,this.heightAt(t.x,t.z)+1,t.z,`#ffd34d`,18,2.2)}else if(n.type===`frost`){this.pulses.push({x:n.x,z:n.z,radius:n.radius,age:0});let e=this.heightAt(n.x,n.z)+.5;this.sparks.burst(n.x,e,n.z,`#c8f6ff`,24,3)}else if(n.type===`fuelOut`){let t=e.buildings.find(e=>e.id===n.buildingId);if(t){let n=I(e,t);this.smoke.burst(n.x,this.heightAt(n.x,n.z)+1.6,n.z,`#6c6f74`,10,.8)}}}update(e,t,n,r,i,o){this.time+=o,this.sources.length=0;let s=0,c=(e,t,n,r,i)=>{s>=zg||(this.m.compose(this.v.set(e,this.heightAt(e,t)+.1,t),this.flat,this.s.setScalar(n)),this.rings.setMatrixAt(s,this.m),this.rings.setColorAt(s++,this.c.copy(r).multiplyScalar(i)))},f=e=>.85+Math.sin(this.time*11+e)*.08+Math.sin(this.time*6.3+e*2)*.07;for(let t of e.buildings){let r=I(e,t),i=a[t.kind].size,s=this.heightAt(r.x,r.z),l=$e(t);if(l>0){let e=t.kind===`brazier`?Math.min(1,t.fuel/(d.max*.6)):1;c(r.x,r.z,l+i/2,Wg,(.12+.2*e)*f(t.id))}let u=n.flameAt(t.id);if(u&&t.progress>=1){if(t.team===`hearth`){if(t.kind!==`brazier`||t.fuel>0){let e=(t.kind===`brazier`?.4+.6*Math.min(1,t.fuel/(d.max*.6)):1)*f(t.id);if(t.kind===`brazier`)this.light(u.x,u.y+.9,u.z,Bg,e,14,2.6);else{let n=t.kind===`hall`;this.light(u.x,u.y+.3,u.z,Bg,e*.7,0,n?2.2:1.4);let a=r.z+i*.9;this.light(r.x,s+.2,a,Vg,e*(n?.9:.5),n?12:8,0)}}else this.smoulder(t.id,u,o)}else this.light(u.x,u.y,u.z,Ug,.25,0,1.8)}t.progress>=1?(this.lastProgress.delete(t.id),this.damage(t.id,r.x,s,r.z,i,t.hp/t.maxHp,o)):this.construction(e,t.id,t.progress,o)}for(let t of e.resources){if(t.kind!==`emberstone`||t.amount<=0)continue;let n=I(e,t),r=.35+.35*(t.amount/t.max);this.light(n.x,this.heightAt(n.x,n.z)+.8,n.z,Hg,r*f(t.id*3),8,3.2),Math.random()<o*2&&this.sparks.emit(this.rising(n.x,n.z,.6,`#ffae5a`,1.2))}for(let n of e.units){let r=t.drawnPosition(n);if(n.kind===`warden`){let e=r.x+Math.sin(n.facing)*.25,t=r.z+Math.cos(n.facing)*.25;n.team===`hearth`?(c(r.x,r.z,l.warden,Wg,.16*f(n.id)),this.light(e,r.y+1.9,t,Vg,.45*f(n.id),8,1.1)):this.light(e,r.y+1.9,t,Ug,.35,0,1)}n.chill>=u.max&&c(r.x,r.z,.75,Gg,.55+Math.sin(this.time*4+n.id)*.1),this.unitPuffs(e,n,r,o)}for(let t of e.projectiles){let e=this.heightAt(t.x,t.z)+t.y;if(t.kind===`ember`)this.light(t.x,e,t.z,Hg,.7,6,1.2),this.sparks.emit({x:t.x,y:e,z:t.z,life:.35,color:`#ff8a3d`,size:1.4,grow:.3});else{let n=t.team===`rime`?`#bfefff`:`#fff1d6`;this.smoke.emit({x:t.x,y:e,z:t.z,vy:.5,life:.3,color:n,size:.18,grow:.4})}}for(let e=this.pulses.length-1;e>=0;e--){let t=this.pulses[e];t.age+=o;let n=t.age/.8;n>=1?this.pulses.splice(e,1):c(t.x,t.z,t.radius*(.3+.7*Math.sqrt(n)),Gg,.9*(1-n))}this.rings.count=s,this.rings.instanceMatrix.needsUpdate=!0,this.rings.instanceColor.needsUpdate=!0,this.applyLights(r,i);for(let e of[this.sparks,this.smoke,this.debris])e.update(o,this.heightAt);for(let[e,t]of this.seen)this.time-t<2||(this.seen.delete(e),this.timers.delete(e))}tick(e,t,n){this.seen.set(e,this.time);let r=this.timers.get(e);r===void 0&&(r=Math.random()*t),r-=n;let i=r<=0;return this.timers.set(e,i?r+t:r),i}light(e,t,n,r,i,a,o){this.sources.push({x:e,y:t,z:n,r:r.r,g:r.g,b:r.b,power:i,range:a,glow:o})}rising(e,t,n,r,i){return{x:e+(Math.random()-.5)*n,y:this.heightAt(e,t)+.4,z:t+(Math.random()-.5)*n,vx:(Math.random()-.5)*.6,vy:i*(.6+Math.random()*.6),vz:(Math.random()-.5)*.6,life:.6+Math.random()*.6,color:r}}smoulder(e,t,n){this.light(t.x,t.y-.1,t.z,Hg,.12+Math.sin(this.time*2+e)*.05,0,.9),this.tick(-(e*8+1),.7,n)&&this.smoke.emit({x:t.x,y:t.y,z:t.z,vx:.2,vy:.6,life:2.2,color:`#7a7c80`,size:.6,grow:2.5})}damage(e,t,n,r,i,a,o){if(a>=.5)return;let s=n+i*1.15,c=()=>(Math.random()-.5)*i*.6;if(this.tick(-(e*8+2),a<.25?.12:.25,o)&&this.smoke.emit({x:t+c(),y:s,z:r+c(),vx:.4,vy:1.2,life:2.6,color:a<.25?`#3a3a3f`:`#6a6d73`,size:1.2,grow:3}),a<.25){this.light(t,s,r+i*.6,Bg,.5*(.8+Math.random()*.2),10,2.4);for(let e=0;e<2;e++)this.sparks.emit({x:t+c(),y:s-.6,z:r+c(),vx:(Math.random()-.5)*.8,vy:1.5+Math.random()*2,vz:(Math.random()-.5)*.8,life:.5+Math.random()*.4,color:Math.random()<.5?`#ff7a2a`:`#ffc04a`,size:2.2,grow:.3})}}construction(e,t,n,r){let i=this.lastProgress.get(t)??n;this.lastProgress.set(t,n),n>i&&this.tick(-(t*8+3),.35,r)&&this.dust(e,t,3)}dust(e,t,n){let r=e.buildings.find(e=>e.id===t);if(!r)return;let i=I(e,r),o=a[r.kind].size/2;for(let e=0;e<n;e++){let e=Math.random()*Math.PI*2,t=i.x+Math.cos(e)*o,n=i.z+Math.sin(e)*o;this.smoke.emit({x:t,y:this.heightAt(t,n)+.2,z:n,vx:Math.cos(e)*.8,vy:.4,vz:Math.sin(e)*.8,life:1.2+Math.random(),color:`#d9cdb8`,size:.7,grow:2.2})}}collapse(e,t,n){let r=this.heightAt(e,t);for(let i=0;i<40;i++){let a=Math.random()*Math.PI*2,o=Math.random()*n*.6;this.smoke.emit({x:e+Math.cos(a)*o,y:r+Math.random()*n*.6,z:t+Math.sin(a)*o,vx:Math.cos(a)*2,vy:.6+Math.random(),vz:Math.sin(a)*2,life:2+Math.random()*1.5,color:i%3?`#b9b2a6`:`#6d6862`,size:1.4,grow:3})}this.sparks.burst(e,r+1.5,t,`#ff8a3d`,30,4),this.debris.burst(e,r+1,t,`#4a3a2c`,24,4)}unitPuffs(e,t,n,r){let i=n.y+1.55,a=Math.sin(t.facing),o=Math.cos(t.facing);if(t.team===`hearth`&&t.chill>u.max*.35&&this.tick(t.id*8+1,1.4,r))for(let e=0;e<2;e++)this.smoke.emit({x:n.x+a*.3,y:i,z:n.z+o*.3,vx:a*.5,vy:.25,vz:o*.5,life:1.1,color:`#f2f8ff`,size:.32,grow:2.2});if(t.chill>=u.max&&this.tick(t.id*8+2,.3,r)&&this.sparks.emit({...this.rising(n.x,n.z,.8,`#d4f6ff`,.5),y:n.y+.4+Math.random()*1.4}),t.slowUntil>e.time&&this.tick(t.id*8+3,.12,r)&&this.sparks.emit({...this.rising(n.x,n.z,.9,`#a8eeff`,.6),y:n.y+Math.random()*1.6,size:1.2}),t.team===`rime`&&this.tick(t.id*8+4,.5,r)&&et(e,t.x,t.z)&&this.smoke.emit({...this.rising(n.x,n.z,.5,`#e8f0f6`,1),y:n.y+1,size:.4,grow:2.5}),t.order.type===`gather`&&t.order.phase===`working`&&this.tick(t.id*8+5,.55,r)){let r=qe(e,t.order.resourceId),i=n.x+a*.7,s=n.z+o*.7;r?.kind===`emberstone`?this.sparks.burst(i,n.y+.6,s,`#ffb04a`,6,2.2):this.debris.burst(i,n.y+.9,s,Math.random()<.5?`#c08a4e`:`#e2c08f`,5,2)}t.anim===`walk`&&this.tick(t.id*8+6,.4,r)&&this.debris.emit({x:n.x,y:n.y+.08,z:n.z,vy:1,life:.4,color:`#f4f8fc`,size:.9})}applyLights(e,t){let n=this.sources.filter(e=>e.range>0),r=jg(n,t.x,t.z,Lg);for(let e=0;e<Lg;e++){let t=this.lights[e],i=n[r[e]];i?(t.position.set(i.x,i.y+1.8,i.z),t.color.setRGB(i.r,i.g,i.b),t.distance=i.range+2,t.intensity=i.power*34):t.intensity=0}let i=0;for(let t of this.sources){if(i>=Rg)break;if(t.glow<=0)continue;this.m.compose(this.v.set(t.x,t.y,t.z),e.quaternion,this.s.setScalar(t.glow)),this.glows.setMatrixAt(i,this.m);let n=Math.min(1,t.power)*.55;this.glows.setColorAt(i++,this.c.setRGB(t.r*n,t.g*n,t.b*n))}this.glows.count=i,this.glows.instanceMatrix.needsUpdate=!0,this.glows.instanceColor.needsUpdate=!0}dispose(){for(let e of[this.sparks,this.smoke,this.debris])e.dispose()}},Yg={move:{color:`#bff1ff`,draw:e=>$g(e,4)},attack:{color:`#ff5a3c`,draw:e=>e_(e)},gather:{color:`#ffd34d`,draw:e=>t_(e,6)},build:{color:`#8fd0ff`,draw:e=>t_(e,4)},refuel:{color:`#ffa24a`,draw:e=>$g(e,3)},rally:{color:`#ffd27a`,draw:e=>$g(e,3)}},Xg=128,Zg=Xg/2;function Qg(e,t,n){e.lineWidth=n,e.beginPath(),e.arc(Zg,Zg,t,0,Math.PI*2),e.stroke()}function $g(e,t){Qg(e,52,5);for(let n=0;n<t;n++)e.save(),e.translate(Zg,Zg),e.rotate(n/t*Math.PI*2),e.beginPath(),e.moveTo(-12,-40),e.lineTo(0,-24),e.lineTo(12,-40),e.lineWidth=8,e.lineJoin=`round`,e.lineCap=`round`,e.stroke(),e.restore()}function e_(e){e.lineWidth=5,e.beginPath();for(let t=0;t<=24;t++){let n=t/24*Math.PI*2,r=t%2?46:56;e.lineTo(Zg+Math.cos(n)*r,Zg+Math.sin(n)*r)}e.stroke(),e.lineCap=`round`,e.lineWidth=9;for(let t of[1,-1])e.beginPath(),e.moveTo(Zg-24*t,40),e.lineTo(Zg+24*t,88),e.stroke()}function t_(e,t){Qg(e,50,6);for(let n=0;n<t;n++){let r=n/t*Math.PI*2;e.beginPath(),e.arc(Zg+Math.cos(r)*34,Zg+Math.sin(r)*34,6,0,Math.PI*2),e.fill()}}var n_=new Map;function r_(e){let t=n_.get(e);if(t)return t;let n=document.createElement(`canvas`);n.width=n.height=Xg;let r=n.getContext(`2d`);return r.strokeStyle=r.fillStyle=`rgba(10,18,30,0.55)`,r.translate(2,3),Yg[e].draw(r),r.setTransform(1,0,0,1,0,0),r.strokeStyle=r.fillStyle=Yg[e].color,Yg[e].draw(r),t=new Rc(n),t.colorSpace=Qi,n_.set(e,t),t}var i_=.75,a_=6,o_=new su(1,1).rotateX(-Math.PI/2),s_=class{heightAt;group=new Bo;live=[];next=0;constructor(e){this.heightAt=e;for(let e=0;e<a_;e++){let e=new pc(o_,new tc({transparent:!0,depthWrite:!1,fog:!1}));e.visible=!1,e.renderOrder=4,this.group.add(e),this.live.push({mesh:e,age:i_})}}add(e,t,n){let r=this.live[this.next];this.next=(this.next+1)%a_,r.age=0,r.mesh.material.map=r_(n),r.mesh.material.needsUpdate=!0,r.mesh.position.set(e,this.heightAt(e,t)+.12,t),r.mesh.visible=!0}update(e){for(let t of this.live){if(!t.mesh.visible)continue;t.age+=e;let n=t.age/i_;if(n>=1){t.mesh.visible=!1;continue}let r=1-(1-Math.min(1,n*3))**3;t.mesh.scale.setScalar(3.2-1.2*r),t.mesh.rotation.y=n*.6,t.mesh.material.opacity=n<.6?1:1-(n-.6)/.4}}},c_=64,l_=.9,u_=class{heightAt;group=new Bo;flag=new Bo;cloth;dashes;m=new fo;q=new Ua;v=new q;s=new q(1,1,1);up=new q(0,1,0);time=0;constructor(e){this.heightAt=e;let t=new Cu({color:`#5a3d26`}),n=new pc(new Uc(.07,.09,3.2,6).translate(0,1.6,0),t),r=new Sl;r.moveTo(0,0),r.lineTo(1.5,-.1),r.lineTo(1.1,-.45),r.lineTo(1.5,-.8),r.lineTo(0,-.9),this.cloth=new pc(new lu(r),new tc({color:`#ffb444`,side:2})),this.cloth.position.y=3.1;let i=new pc(new cu(.45,.62,24).rotateX(-Math.PI/2),new tc({color:`#ffd27a`,transparent:!0,opacity:.85,depthWrite:!1}));i.position.y=.08,this.flag.add(n,this.cloth,i),this.dashes=new Tc(new su(.16,.5).rotateX(-Math.PI/2),new tc({color:`#ffd27a`,transparent:!0,opacity:.85,depthWrite:!1}),c_),this.dashes.frustumCulled=!1,this.dashes.renderOrder=4,this.group.add(this.flag,this.dashes),this.group.visible=!1}update(e,t,n){if(this.time+=n,!e||!t){this.group.visible=!1;return}this.group.visible=!0,this.flag.position.set(t.x,this.heightAt(t.x,t.z),t.z),this.cloth.rotation.y=Math.sin(this.time*3)*.35-.3,this.cloth.scale.x=.9+Math.sin(this.time*7)*.1;let r=t.x-e.x,i=t.z-e.z,a=Math.hypot(r,i);this.q.setFromAxisAngle(this.up,Math.atan2(r,i));let o=this.time*1.2%l_,s=0;for(let t=o;t<a-.6&&s<c_;t+=l_){let n=e.x+r/a*t,o=e.z+i/a*t;this.m.compose(this.v.set(n,this.heightAt(n,o)+.1,o),this.q,this.s),this.dashes.setMatrixAt(s++,this.m)}this.dashes.count=s,this.dashes.instanceMatrix.needsUpdate=!0}},d_=new cu(.5,.64,32).rotateX(-Math.PI/2),f_={hearth:`#ffb444`,rime:`#7fe6ff`},p_={hearth:new X(`#f0a83a`),rime:new X(`#8fe3f0`)},m_=new X(`#e5482e`),h_=new X(`#d9b27a`),g_=new su(1,1),__=new cu(.6,.64,48).rotateX(-Math.PI/2);function v_(e,t,n,r){let i=new Tc(e,t,n);return i.instanceMatrix.setUsage(ia),i.frustumCulled=!1,i.renderOrder=r,i.setColorAt(0,new X(`#ffffff`)),i.count=0,i}var y_=class{heightAt;group=new Bo;rings=v_(d_,new tc({transparent:!0,opacity:.9,depthWrite:!1}),256,2);frames=v_(__,new tc({transparent:!0,opacity:.95,depthWrite:!1}),64,2);barBack=v_(g_,new tc({color:`#141a22`,depthTest:!1,transparent:!0,opacity:.85}),256,10);barFill=v_(g_,new tc({depthTest:!1,transparent:!0}),256,11);arrows=v_(new Hc(.07,.07,1.1),new tc({color:`#d8c49c`}),128,3);embers=v_(new ou(.24,0),new tc({color:`#ffd08a`}),64,3);markers;rally;prevProjectile=new Map;ghost=null;m=new fo;q=new Ua;v=new q;s=new q;c=new X;constructor(e){this.heightAt=e,this.markers=new s_(e),this.rally=new u_(e),this.group.add(this.rings,this.frames,this.barBack,this.barFill,this.arrows,this.embers,this.markers.group,this.rally.group)}marker(e,t,n){this.markers.add(e,t,n)}update(e,t,n,r,i){this.q.copy(r.quaternion);let o=0,s=0,c=0,l=new q(1,0,0).applyQuaternion(this.q),u=(e,t,n,r)=>{o>=256||(this.m.compose(this.v.set(e,this.heightAt(e,t)+.06,t),new Ua,this.s.setScalar(n)),this.rings.setMatrixAt(o,this.m),this.rings.setColorAt(o++,this.c.set(r)))},d=(e,t,n,r,i,a)=>{if(c>=255)return;this.m.compose(this.v.set(e,t,n),this.q,this.s.set(r+.08,.2,1)),this.barBack.setMatrixAt(c,this.m);let o=Math.max(.001,r*i);this.v.addScaledVector(l,-(r-o)/2),this.m.compose(this.v,this.q,this.s.set(o,.12,1)),this.barFill.setMatrixAt(c,this.m),this.barFill.setColorAt(c++,a)},f=(e,t)=>t<.35?m_:p_[e];for(let r of e.units){let e=n.selected.has(r.id),i=t.drawnPosition(r);e&&u(i.x,i.z,1,f_[r.team]),(e||r.hp<r.maxHp)&&d(i.x,i.y+2.45,i.z,1,r.hp/r.maxHp,f(r.team,r.hp/r.maxHp))}for(let t of e.buildings){let r=I(e,t),i=n.selected.has(t.id),o=a[t.kind].size;i&&s<64&&(this.m.compose(this.v.set(r.x,this.heightAt(r.x,r.z)+.08,r.z),new Ua,this.s.setScalar(o*.95)),this.frames.setMatrixAt(s,this.m),this.frames.setColorAt(s++,this.c.set(f_[t.team])));let c=this.heightAt(r.x,r.z)+o*1.25+1;t.progress<1?d(r.x,c,r.z,o*.7,t.progress,h_):(i||t.hp<t.maxHp)&&d(r.x,c,r.z,o*.7,t.hp/t.maxHp,f(t.team,t.hp/t.maxHp)),t.training&&d(r.x,c-.3,r.z,o*.7,1-t.training.remaining/t.training.total,this.c.set(`#ffd34d`))}this.updateRally(e,n,i),this.markers.update(i),this.finish(this.rings,o),this.finish(this.frames,s),this.finish(this.barBack,c),this.finish(this.barFill,c),this.updateProjectiles(e)}updateRally(e,t,n){let r=null,i=null;if(t.selected.size===1){let n=e.buildings.find(e=>t.selected.has(e.id));if(n?.rally&&n.team===`hearth`&&a[n.kind].trains.length){let t=I(e,n),o=Math.hypot(n.rally.x-t.x,n.rally.z-t.z)||1,s=a[n.kind].size*.55;r={x:t.x+(n.rally.x-t.x)/o*s,z:t.z+(n.rally.z-t.z)/o*s},i=n.rally}}this.rally.update(r,i,n)}finish(e,t){e.count=t,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}updateProjectiles(e){let t=0,n=0,r=new Set;for(let i of e.projectiles){r.add(i.id);let e=new q(i.x,this.heightAt(i.x,i.z)+i.y,i.z),a=this.prevProjectile.get(i.id)??new q(i.fromX,e.y,i.fromZ),o=e.clone().sub(a);o.lengthSq()>1e-6&&this.q.setFromUnitVectors(new q(0,0,1),o.normalize()),this.m.compose(e,this.q,this.s.setScalar(1)),i.kind===`arrow`&&t<128&&this.arrows.setMatrixAt(t++,this.m),i.kind===`ember`&&n<64&&this.embers.setMatrixAt(n++,this.m),this.prevProjectile.set(i.id,e)}for(let e of this.prevProjectile.keys())r.has(e)||this.prevProjectile.delete(e);this.finish(this.arrows,t),this.finish(this.embers,n)}setGhost(e,t){if(!t){this.ghost&&this.group.remove(this.ghost.group,this.ghost.pad),this.ghost=null;return}if(!this.ghost||this.ghost.kind!==t.kind){this.ghost&&this.group.remove(this.ghost.group,this.ghost.pad);let e=a[t.kind].size,n=new pc(new su(e,e).rotateX(-Math.PI/2),new tc({transparent:!0,opacity:.45,depthWrite:!1}));n.renderOrder=4,this.ghost={kind:t.kind,group:Dg(t.kind),pad:n},this.group.add(this.ghost.group,n)}let n=a[t.kind].size,r=I(e,{tx:t.tx,tz:t.tz,w:n,d:n}),i=this.heightAt(r.x,r.z);this.ghost.group.position.set(r.x,i,r.z),this.ghost.pad.position.set(r.x,i+.08,r.z),this.ghost.pad.material.color.set(t.valid?`#ffd27a`:`#ff3d2e`)}};function b_(e){return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e===`hearth`?`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><radialGradient id="g" cx="40%" cy="35%"><stop offset="0" stop-color="#d9662f"/>
  <stop offset="1" stop-color="#6d2416"/></radialGradient></defs>
  <rect x="2" y="2" width="60" height="60" rx="10" fill="url(#g)" stroke="#f5c04e" stroke-width="3"/>
  <path d="M32 10c4 10 14 14 14 26a14 14 0 0 1-28 0c0-7 4-11 7-14 0 6 3 9 5 9-2-8 0-15 2-21z"
    fill="#f5c04e"/>
  <path d="M32 30c3 5 6 7 6 11a6 6 0 0 1-12 0c0-3 3-6 6-11z" fill="#fff3c8"/>
  <path d="M18 52h28" stroke="#3a2a20" stroke-width="4" stroke-linecap="round"/></svg>`:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><radialGradient id="g" cx="40%" cy="35%"><stop offset="0" stop-color="#8fd0d2"/>
  <stop offset="1" stop-color="#2f5a62"/></radialGradient></defs>
  <rect x="2" y="2" width="60" height="60" rx="10" fill="url(#g)" stroke="#f2fbfc" stroke-width="3"/>
  <g stroke="#f2fbfc" stroke-width="4" stroke-linecap="round">
  <path d="M32 12v40M15 22l34 20M15 42l34-20"/>
  <path d="M27 15l5 5 5-5M27 49l5-5 5 5" fill="none" stroke-width="3"/></g>
  <circle cx="32" cy="32" r="5" fill="#2f5a62" stroke="#f2fbfc" stroke-width="3"/></svg>`)}`}function x_(e){let t=document.createElement(`canvas`);return t.width=t.height=e,[t,t.getContext(`2d`)]}function S_(){let[e,t]=x_(256),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,`#6f86a0`),n.addColorStop(.55,`#b9c9d8`),n.addColorStop(1,`#e3ebf2`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=C(77);for(let e=0;e<40;e++)t.fillStyle=`rgba(255,255,255,${.05+r()*.08})`,t.beginPath(),t.ellipse(r()*256,40+r()*150,30+r()*60,6+r()*10,0,0,Math.PI*2),t.fill();let i=new Rc(e);return i.colorSpace=Qi,i.wrapS=Ar,i}function C_(e,t){let[n,r]=x_(128),i=r.createImageData(128,128),a=C(e),o=Array.from({length:64},()=>a()),s=(e,t)=>o[(t+8)%8*8+(e+8)%8];for(let e=0;e<128;e++)for(let n=0;n<128;n++){let r=n/128*8,o=e/128*8,c=Math.floor(r),l=Math.floor(o),u=r-c,d=o-l,f=s(c,l)+(s(c+1,l)-s(c,l))*u,p=.5+(f+(s(c,l+1)+(s(c+1,l+1)-s(c,l+1))*u-f)*d-.5)*t*2+(a()-.5)*t,m=(e*128+n)*4;i.data[m]=i.data[m+1]=i.data[m+2]=Math.round(Math.max(0,Math.min(1,p))*255),i.data[m+3]=255}r.putImageData(i,0,0);let c=new Rc(n);return c.wrapS=c.wrapT=Ar,c}var w_,T_;function E_(){return w_??=S_(),w_}function D_(){return T_??={snow:C_(11,.16),grass:C_(23,.22)},T_}var O_=4,k_=8,A_=.55,j_=new X(`#f1f5fa`),M_=new X(`#d5e0ec`),N_=new X(`#d3ccbf`),P_=new X(`#c3cfd6`),F_=new X(`#8b929b`),I_=new X(`#9aa3ae`),L_=new X(`#5b9db9`),R_=class{n;v;constructor(e,t,n){this.n=e;let r=new Float32Array(e*e);for(let n=0;n<e*e;n++)r[n]=t(n);for(let t=0;t<n;t++){let t=new Float32Array(e*e);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=0,o=0;for(let t=-1;t<=1;t++)for(let s=-1;s<=1;s++){let c=i+s,l=n+t;c<0||l<0||c>=e||l>=e||(a+=r[l*e+c],o++)}t[n*e+i]=a/o}r=t}this.v=r}at(e,t){let n=this.n,r=Math.max(0,Math.min(n-1.001,e-.5)),i=Math.max(0,Math.min(n-1.001,t-.5)),a=Math.floor(r),o=Math.floor(i),s=r-a,c=i-o,l=this.v[o*n+a],u=this.v[o*n+a+1],d=this.v[(o+1)*n+a],f=this.v[(o+1)*n+a+1];return(l+(u-l)*s)*(1-c)+(d+(f-d)*s)*c}};function z_(e){let t=e.size,n=new Uint8Array(t*t),r=new Uint8Array(t*t);for(let i of e.obstacles)(i.kind===`rock`?r:n)[i.tz*t+i.tx]=1;return{ice:new R_(t,t=>e.terrain.ice[t],2),path:new R_(t,t=>e.terrain.path[t],1),forest:new R_(t,e=>n[e],2),rock:new R_(t,e=>r[e],2)}}function B_(e,t,n){let r=e.size*t,i=new Uint8Array(r*r*4);for(let e=0;e<r;e++)for(let a=0;a<r;a++)n((a+.5)/t,(e+.5)/t,i,(e*r+a)*4);return{data:i,n:r,texture(){let e=new Uint8Array(i.length),t=r*4;for(let n=0;n<r;n++)e.set(i.subarray(n*t,(n+1)*t),(r-1-n)*t);let n=new gc(e,r,r,ei);return n.colorSpace=Qi,n.magFilter=Ir,n.minFilter=Rr,n.generateMipmaps=!0,n.anisotropy=4,n.needsUpdate=!0,n}}}function V_(e,t,n){let r=e.size/2,i=C(e.seed+99),a=new X;return B_(e,O_,(e,o,s,c)=>{let l=n(e-r,o-r),u=i();a.copy(j_).lerp(M_,Math.max(0,Math.min(1,.55-l*.35))+u*.12),a.lerp(P_,Math.min(1,t.forest.at(e,o)*1.6)*.8),a.lerp(F_,H_(.15,.6,t.rock.at(e,o))*.85),a.lerp(N_,H_(.25,.7,t.path.at(e,o))*(.75+u*.2)),a.lerp(L_,H_(.35,.75,t.ice.at(e,o))),s[c]=a.r*255,s[c+1]=a.g*255,s[c+2]=a.b*255,s[c+3]=255}).texture()}function H_(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}function U_(e){let t=new Cu({map:e}),n={uSnowDetail:{value:D_().snow}};return t.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vDetailXZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vDetailXZ = (modelMatrix * vec4(position, 1.0)).xz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vDetailXZ;
uniform sampler2D uSnowDetail;`).replace(`#include <map_fragment>`,`#include <map_fragment>
        vec3 dSnow = texture2D(uSnowDetail, vDetailXZ * 0.22).rgb * 2.0;
        diffuseColor.rgb *= mix(vec3(1.0), dSnow, 0.55);`)},t.customProgramCacheKey=()=>`frostmark-ground`,t}function W_(e,t,n){let r=e.size,i=r/2,a=new su(r,r,r*2,r*2);a.rotateX(-Math.PI/2);let o=a.getAttribute(`position`);for(let e=0;e<o.count;e++){let r=o.getX(e),a=o.getZ(e);o.setY(e,n(r,a)-A_*H_(.3,.9,t.ice.at(r+i,a+i)))}a.computeVertexNormals();let s=a.getAttribute(`uv`);for(let e=0;e<s.count;e++)s.setY(e,1-(o.getZ(e)+i)/r);let c=new pc(a,U_(V_(e,t,n)));return c.name=`ground`,c.receiveShadow=!0,c}function G_(e,t){let n=k_,r=B_(e,n,(e,n,r,i)=>{let a=t.ice.at(e,n),o=1-H_(.5,.95,a);r[i]=200+o*50,r[i+1]=232+o*20,r[i+2]=246+o*9,r[i+3]=a<.3?0:255*(.5+o*.4)}),{data:i,n:a}=r,o=C(e.seed*3+5),s=(e,r)=>t.ice.at(e/n,r/n)>.6,c=(e,t,n)=>{let r=Math.round(e),o=Math.round(t);if(r<0||o<0||r>=a||o>=a)return;let s=(o*a+r)*4;i[s]=i[s+1]=i[s+2]=255,i[s+3]=Math.max(i[s+3],n)},l=Math.round(e.terrain.ice.reduce((e,t)=>e+t,0)/4);for(let e=0;e<l;e++){let e=o()*a,t=o()*a;if(!s(e,t))continue;let r=o()*Math.PI*2,i=150+o()*100,l=3+Math.floor(o()*6);for(let a=0;a<l;a++){r+=(o()-.5)*1.3;let a=(6+o()*14)*(n/8),l=e+Math.cos(r)*a,u=t+Math.sin(r)*a;if(!s(l,u))break;for(let n=0;n<=a;n+=.5)c(e+(l-e)*n/a,t+(u-t)*n/a,i);e=l,t=u}}return r.texture()}function K_(e,t){if(!e.terrain.ice.some(e=>e))return null;let n=new su(e.size,e.size);n.rotateX(-Math.PI/2);let r=new pc(n,new Su({map:G_(e,t),transparent:!0,depthWrite:!1,shininess:90,specular:new X(`#ffffff`)}));return r.name=`ice`,r.position.y=.02,r.receiveShadow=!0,r.renderOrder=1,r}function q_(){let e=E_();e.repeat.set(3,1);let t=new pc(new du(320,32,16,0,Math.PI*2,0,Math.PI*.55),new tc({map:e,color:`#7f90bb`,side:1,fog:!1,depthWrite:!1}));return t.name=`sky`,t.position.y=-40,t.renderOrder=-1,t}function J_(e,t){let n=new Bo,r=new Map,i=new Map;n.userData.pines=i;let a=e.size/2,o=e.size,s=new Uint8Array(o*o);for(let t of e.obstacles)t.kind===`rock`&&(s[t.tz*o+t.tx]=1);let c=(e,t)=>e>=0&&t>=0&&e<o&&t<o?s[t*o+e]:0,l=new fo,u=new Ua,d=new q(0,1,0);for(let n of e.obstacles){let e=`${n.kind}|${n.seed%4}`,s=n.tx-a+.5,f=n.tz-a+.5,p,m;if(n.kind===`snowPine`)p=m=.9+n.seed%7*.08;else{let e=0;for(let t=-1;t<=1;t++)for(let r=-1;r<=1;r++)e+=c(n.tx+r,n.tz+t);if(e===9&&n.seed%3!=0)continue;p=.85+n.seed%5*.1+Math.min(e,6)*.05,m=p*(1+Math.min(e,6)*.08)}u.setFromAxisAngle(d,n.seed%360*(Math.PI/180)),l.compose(new q(s,t(s,f)-.05,f),u,new q(p,m,p)),r.has(e)||r.set(e,[]),n.kind===`snowPine`&&i.set(n.tz*o+n.tx,{key:e,index:r.get(e).length}),r.get(e).push(l.clone())}for(let[e,t]of r){let[r,i]=e.split(`|`),a=hg(r,Number(i)).children[0],o=new Tc(a.geometry,a.material,t.length);t.forEach((e,t)=>o.setMatrixAt(t,e)),r===`rock`&&t.forEach((e,t)=>o.setColorAt(t,I_)),o.castShadow=!0,o.receiveShadow=!0,o.name=`obstacles:${e}`,n.add(o)}return n}var Y_=new fo().makeScale(0,0,0);function X_(e,t){let n=t.userData.pines,r=new Set(e.obstacles.map(t=>t.tz*e.size+t.tx));for(let[e,i]of n){if(r.has(e))continue;let a=t.getObjectByName(`obstacles:${i.key}`);a&&(a.setMatrixAt(i.index,Y_),a.instanceMatrix.needsUpdate=!0),n.delete(e)}}function Z_(e){let t=new Bo,n=(t,n)=>_e(e,t,n),r=z_(e);t.add(W_(e,r,n));let i=K_(e,r);i&&t.add(i);let a=new Cu({color:`#e9f0f7`}),o=new pc(new su(900,900),a);o.rotation.x=-Math.PI/2,o.position.y=-.8,o.receiveShadow=!0,t.add(o),t.add(q_());let s=new Map;e.resources.forEach((r,i)=>{let a=I(e,r),o=hg(r.kind===`timber`?`timberStand`:`emberSeam`,i);o.position.set(a.x,n(a.x,a.z),a.z),o.traverse(e=>{e.castShadow=!0,e.receiveShadow=!0}),t.add(o);let c=o.getObjectByName(`timber`);c&&s.set(r.id,c)});let c=J_(e,n);t.add(c);let l=e.obstacles.length;return{group:t,heightAt:n,update(e){e.obstacles.length!==l&&(l=e.obstacles.length,X_(e,c));for(let t of e.resources){let e=s.get(t.id);e&&(e.scale.y=Math.max(.12,t.amount/t.max))}}}}var Q_=new X(1,1,1),$_=new X(.74,.88,1.08),ev=new X(.9,1.25,1.7),tv={idle:`idle`,walk:`walk`,carry:`carry`,attack:`attack`,work:`work`},nv=class{heightAt;group=new Bo;rigs=new Map;batches=new Map;tint=new X;constructor(e){this.heightAt=e,this.group.name=`units`}drawnPosition(e){let t=this.rigs.get(e.id),n=t?.x??e.x,r=t?.z??e.z;return{x:n,y:this.heightAt(n,r),z:r}}update(e,t,n){for(let e of this.batches.values())e.count=0;let r=new Set,i=1-Math.exp(-n*18);for(let a of e.units){r.add(a.id);let e=this.rigs.get(a.id);e&&e.kind===a.kind||(e=this.makeRig(a),this.rigs.set(a.id,e)),e.x+=(a.x-e.x)*i,e.z+=(a.z-e.z)*i;let o=a.facing-e.facing;o=Math.atan2(Math.sin(o),Math.cos(o)),e.facing+=o*Math.min(1,n*12),e.group.position.set(e.x,this.heightAt(e.x,e.z),e.z),e.group.rotation.y=e.facing,Fh(e.group,tv[a.anim],t+a.id*.37,a.carrying??`timber`),e.group.updateMatrixWorld(!0);let s=a.chill/u.max;s>=1?this.tint.copy(ev):this.tint.copy(Q_).lerp($_,s*s);for(let t of e.parts){if(!t.visible)continue;let e=this.batch(`${a.kind}|${a.team}|${t.name}`,t);e.mesh.setColorAt(e.count,t.userData.glow?Q_:this.tint),e.mesh.setMatrixAt(e.count++,t.matrixWorld)}}for(let e of this.rigs.keys())r.has(e)||this.rigs.delete(e);for(let e of this.batches.values())e.mesh.count=e.count,e.mesh.visible=e.count>0,e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.instanceColor.needsUpdate=!0}makeRig(e){let t=Mh(e.kind,e.team),n=[];return t.traverse(e=>{e instanceof pc&&(e.userData.glow=!(e.material instanceof Cu),n.push(e))}),{kind:e.kind,group:t,parts:n,x:e.x,z:e.z,facing:e.facing}}batch(e,t){let n=this.batches.get(e);if(n&&n.count<n.mesh.instanceMatrix.count)return n;let r=n?n.mesh.instanceMatrix.count*2:16,i=new Tc(t.geometry,t.material,r);return i.instanceMatrix.setUsage(ia),i.frustumCulled=!1,i.castShadow=t.castShadow,i.name=`units:${e}`,i.setColorAt(0,Q_),n?(i.instanceMatrix.array.set(n.mesh.instanceMatrix.array),i.instanceColor.array.set(n.mesh.instanceColor.array),this.group.remove(n.mesh),n.mesh.dispose(),n={mesh:i,count:n.count}):n={mesh:i,count:0},this.group.add(i),this.batches.set(e,n),n}},rv=null;function iv(){if(rv)return rv;let e=document.createElement(`canvas`);e.width=512,e.height=384;let t=e.getContext(`2d`),n=t.createRadialGradient(256,192,122.88,256,192,317.44);n.addColorStop(0,`rgba(225,240,255,0)`),n.addColorStop(.65,`rgba(225,240,255,0.35)`),n.addColorStop(1,`rgba(240,248,255,0.9)`),t.fillStyle=n,t.fillRect(0,0,512,384);let r=7,i=()=>(r=r*16807%2147483647)/2147483647;t.strokeStyle=`rgba(255,255,255,0.4)`,t.lineCap=`round`;let a=(e,n,r,o,s)=>{let c=e+Math.cos(r)*o,l=n+Math.sin(r)*o;t.lineWidth=Math.max(.5,s*.6),t.beginPath(),t.moveTo(e,n),t.lineTo(c,l),t.stroke(),s<=0||(a(c,l,r+Math.PI/3,o*.45,s-1),a(c,l,r-Math.PI/3,o*.45,s-1),a(c,l,r+(i()-.5)*.25,o*.8,s-1))};for(let e=0;e<220;e++){let t=e%4,n=i(),[r,o,s]=t===0?[n*512,0,Math.PI/2]:t===1?[n*512,384,-Math.PI/2]:t===2?[0,n*384,0]:[512,n*384,Math.PI];a(r,o,s+(i()-.5)*1.2,5+i()*12,3)}return rv=e.toDataURL(),rv}var av=class{dusk=document.createElement(`div`);frost=document.createElement(`div`);level=-1;constructor(e){let t=e.parentElement;for(let n of[this.dusk,this.frost])Object.assign(n.style,{position:`absolute`,inset:`0`,pointerEvents:`none`}),n.setAttribute(`aria-hidden`,`true`),t?.insertBefore(n,e.nextSibling);this.dusk.className=`fx-dusk`,this.dusk.style.background=`radial-gradient(ellipse at 50% 45%, rgba(10,16,34,0) 55%, rgba(10,16,34,0.42) 100%)`,this.frost.className=`fx-frost`,Object.assign(this.frost.style,{backgroundImage:`url(${iv()})`,backgroundSize:`100% 100%`,opacity:`0`})}set(e){let t=Math.round(e*50)/50;t!==this.level&&(this.level=t,this.frost.style.opacity=String(t*.9))}dispose(){this.dusk.remove(),this.frost.remove()}},ov={near:1.2,far:4,color:new X(`#5f7395`)},sv={near:.55,far:1.9,color:new X(`#a9b9cc`)};function cv(e){let t=new Ym({canvas:e,antialias:!0,powerPreference:`high-performance`});return t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.outputColorSpace=Qi,t.shadowMap.enabled=!0,t.shadowMap.type=1,t}var lv=class{renderer;scene=new Yo;rts;terrain;units;buildings;overlays;fx;sun;sky;snow;vignette;storm=0;width=1;height=1;time=0;constructor(e,t){this.renderer=e,this.scene.background=ov.color.clone(),this.scene.fog=new Jo(ov.color.clone(),60,170),this.sky=new Ku(`#8fa9dc`,`#2c3754`,1.25),this.scene.add(this.sky),this.sun=new ld(`#ffb27e`,1.9),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let n=this.sun.shadow.camera;n.left=n.bottom=-48,n.right=n.top=48,n.near=1,n.far=180,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun,this.sun.target),this.terrain=Z_(t),this.scene.add(this.terrain.group);let r=this.terrain.heightAt;this.rts=new Ag(t.size,r),this.units=new nv(r),this.buildings=new Cg(r),this.overlays=new y_(r),this.fx=new Jg(r),this.scene.add(this.units.group,this.buildings.group,this.overlays.group,this.fx.group),this.snow=bg(this.scene,{count:4200,radius:40,height:26,calm:.33}),this.vignette=new av(e.domElement)}resize(e,t){this.width=e,this.height=t,this.renderer.setSize(e,t,!1),this.rts.resize(e,t),this.fx.setViewport(t*this.renderer.getPixelRatio(),this.rts.camera.fov)}get size(){return{width:this.width,height:this.height}}react(e,t){this.fx.react(e,t)}render(e,t,n){this.time+=n,this.terrain.update(e),this.units.update(e,this.time,n),this.buildings.update(e),this.overlays.setGhost(e,t.placing),this.overlays.update(e,this.units,t,this.rts.camera,n);let r=this.rts.target;this.fx.update(e,this.units,this.buildings,this.rts.camera,r,n),this.weather(e.weather.blizzard,n),this.snow.update(n,r),this.sun.position.set(r.x-60,34,r.z+18),this.sun.target.position.copy(r),this.renderer.render(this.scene,this.rts.camera)}weather(e,t){this.storm+=(+!!e-this.storm)*Math.min(1,t*.7);let n=this.storm,r=this.scene.fog,i=this.rts.distance;r.near=i*Ha.lerp(ov.near,sv.near,n),r.far=i*Ha.lerp(ov.far,sv.far,n),r.color.copy(ov.color).lerp(sv.color,n),this.scene.background.copy(r.color),this.sun.intensity=1.9*(1-n*.65),this.sky.intensity=1.25+n*.3,this.snow.setStorm(n),this.vignette.set(n)}dispose(){this.snow.dispose(),this.fx.dispose(),this.vignette.dispose(),this.scene.clear()}},uv=34,dv=420,fv=44,pv=class{world;view;hooks;selected=new Set;placing=null;selectMode=!1;favorites=Array.from({length:2},()=>[]);lastTap={kind:``,at:0,x:0,y:0};cycle={settlers:0,army:0};constructor(e,t,n){this.world=e,this.view=t,this.hooks=n}setMatch(e,t){this.world=e,this.view=t,this.selected.clear(),this.placing=null;for(let e of this.favorites)e.length=0}get team(){return this.world.player}selectedUnits(){return this.world.units.filter(e=>this.selected.has(e.id)&&e.team===this.team)}selectedBuilding(){return this.world.buildings.find(e=>this.selected.has(e.id))}prune(){for(let e of this.selected){let t=this.world.units.find(t=>t.id===e),n=this.world.buildings.find(t=>t.id===e);!t&&!n&&this.selected.delete(e)}}startPlacing(e){let t=a[e];if(!Ut(this.world,this.team,t.timber,t.emberstone)){this.hooks.toast(`${t.label[this.team]} needs ${t.timber} timber and ${t.emberstone} emberstone`);return}let n=this.view.rts.target,r=L(this.world,e,n.x,n.z);this.placing={kind:e,...r,valid:Te(this.world,e,r.tx,r.tz)},this.hooks.toast(`Tap the ground to place the ${t.label[this.team]}`),this.hooks.changed()}cancelPlacing(){this.placing=null,this.hooks.changed()}hover(e,t){if(!this.placing)return;let{width:n,height:r}=this.view.size,i=this.view.rts.screenToGround(e,t,n,r);if(!i)return;let a=L(this.world,this.placing.kind,i.x,i.z);this.placing={...this.placing,...a,valid:Te(this.world,this.placing.kind,a.tx,a.tz)}}pick(e,t){let{width:n,height:r}=this.view.size,i=this.view.rts,a=null,o=uv;for(let s of this.world.units){let c=this.view.units.drawnPosition(s),l=i.worldToScreen(c.x,c.y+.9,c.z,n,r);if(!l)continue;let u=Math.hypot(l.x-e,l.y-t);u<o&&(o=u,a=s)}if(a)return{type:`unit`,unit:a};let s=null,c=1;for(let a of this.world.buildings){let o=I(this.world,a),l=this.view.terrain.heightAt(o.x,o.z)+a.w*.45,u=i.worldToScreen(o.x,l,o.z,n,r),d=i.worldToScreen(o.x+a.w*.62,l,o.z,n,r);if(!u||!d)continue;let f=Math.hypot(u.x-e,u.y-t)/Math.max(24,Math.abs(d.x-u.x));f<c&&(c=f,s=a)}if(s)return{type:`building`,building:s};let l=i.screenToGround(e,t,n,r);if(!l)return null;for(let e of this.world.resources)if(we(this.world,e,l.x,l.z)<=.4)return{type:`resource`,node:e};let u=this.pickTree(e,t,l);return u?{type:`resource`,node:u}:{type:`ground`,x:l.x,z:l.z}}pickTree(e,t,n){let{width:r,height:i}=this.view.size,a,o=30;for(let s of this.world.trees){let c=I(this.world,s);if(Math.hypot(c.x-n.x,c.z-n.z)>5||!He(this.world,s))continue;let l=this.view.rts.worldToScreen(c.x,this.view.terrain.heightAt(c.x,c.z)+1,c.z,r,i),u=l?Math.hypot(l.x-e,l.y-t):1/0;u<o&&(o=u,a=s)}return a}tap(e,t,n=!1){if(this.placing)return this.place(e,t);let r=this.pick(e,t);if(!r)return;let i=this.selectedUnits(),o=i.map(e=>e.id),s=(e,t,n,r=`move`)=>{this.hooks.issue(e),this.view.overlays.marker(n.x,n.z,t),this.hooks.sound(r)};if(r.type===`unit`){let i=r.unit;if(i.team!==this.team)return o.length?s({type:`attack`,team:this.team,unitIds:o,targetId:i.id},`attack`,i):this.select([i.id]);if(n)return;let a=performance.now(),c=this.lastTap,l=c.kind===i.kind&&a-c.at<dv&&Math.hypot(e-c.x,t-c.y)<fv;return this.lastTap=l?{kind:``,at:0,x:0,y:0}:{kind:i.kind,at:a,x:e,y:t},l?this.selectSameKindOnScreen(i.kind):this.select([i.id])}if(r.type===`building`){let e=r.building,t=I(this.world,e);if(e.team!==this.team)return o.length?s({type:`attack`,team:this.team,unitIds:o,targetId:e.id},`attack`,t):this.select([e.id]);if(e.progress<1&&i.some(e=>e.kind===`settler`))return s({type:`construct`,team:this.team,unitIds:o,buildingId:e.id},`build`,t,`build`);let n=i.filter(e=>e.kind===`settler`).map(e=>e.id);return e.kind===`brazier`&&e.progress>=1&&n.length?s({type:`refuel`,team:this.team,unitIds:n,buildingId:e.id},`refuel`,t,`build`):this.select([e.id])}let c=this.selectedBuilding();if(!o.length&&c?.team===this.team&&a[c.kind].trains.length){let e=r.type===`resource`?r.node:null,t=r.type===`resource`?I(this.world,r.node):r;return s({type:`rally`,team:this.team,buildingId:c.id,x:t.x,z:t.z,resourceId:e?.id},`rally`,t)}if(r.type===`resource`){let e=i.filter(e=>e.kind===`settler`).map(e=>e.id),t=I(this.world,r.node);if(e.length)return s({type:`gather`,team:this.team,unitIds:e,resourceId:r.node.id},`gather`,t)}let l=r.type===`ground`?r:I(this.world,r.node);if(o.length){let e=i.every(e=>e.kind!==`settler`);return s({type:`move`,team:this.team,unitIds:o,x:l.x,z:l.z,attackMove:e},`move`,l)}this.selected.size&&(this.selected.clear(),this.hooks.changed())}place(e,t){let n=this.placing,{width:r,height:i}=this.view.size,a=this.view.rts.screenToGround(e,t,r,i);if(!a)return;let o=L(this.world,n.kind,a.x,a.z),s=R(this.world,n.kind,o.tx,o.tz);if(s){this.placing={...n,...o,valid:!1},this.hooks.toast(s),this.hooks.sound(`tap`);return}let c=this.selectedUnits().filter(e=>e.kind===`settler`).map(e=>e.id);this.hooks.issue({type:`build`,team:this.team,unitIds:c,kind:n.kind,...o}),this.hooks.sound(`build`),this.placing=null,this.hooks.changed()}select(e){this.selected.clear();for(let t of e)this.selected.add(t);e.length&&this.hooks.sound(`select`),this.hooks.changed()}selectArmy(){let e=this.world.units.filter(e=>e.team===this.team&&e.kind!==`settler`);e.length||this.hooks.toast(`No soldiers yet: tap a Barracks or Lodge to train them`),this.select(e.map(e=>e.id)),this.jumpTo(e,`army`)}idleSettlers(){return this.world.units.filter(e=>e.team===this.team&&e.kind===`settler`&&e.order.type===`idle`)}selectIdleSettlers(){let e=this.idleSettlers(),t=this.world.units.filter(e=>e.team===this.team&&e.kind===`settler`);e.length||this.hooks.toast(t.length?`No idle settlers: all are at work`:`No settlers left`),this.select((e.length?e:t).map(e=>e.id)),e.length&&this.jumpTo(e,`settlers`)}jumpTo(e,t){if(!e.length)return;let n=[...e].sort((e,t)=>e.id-t.id),r=n[this.cycle[t]++%n.length];this.view.rts.lookAt(r.x,r.z)}favorite(e,t=!1){let n=this.favorites[e],r=this.selectedUnits().map(e=>e.id);if(t||!this.livingFavorite(e).length&&r.length)return r.length?(n.splice(0,n.length,...r),this.hooks.toast(`Saved ${r.length} to favorite ${e+1}`),this.hooks.changed()):this.hooks.toast(`Select units first, then hold to save them here`);let i=this.livingFavorite(e);if(!i.length)return this.hooks.toast(`Select units, then tap a star to save them`);this.select(i.map(e=>e.id));let a=i.reduce((e,t)=>e+t.x,0)/i.length,o=i.reduce((e,t)=>e+t.z,0)/i.length;this.view.rts.lookAt(a,o)}livingFavorite(e){let t=new Set(this.favorites[e]);return this.world.units.filter(e=>t.has(e.id)&&e.team===this.team)}stop(){let e=this.selectedUnits().map(e=>e.id);e.length&&this.hooks.issue({type:`stop`,team:this.team,unitIds:e})}selectSameKindOnScreen(e){let{width:t,height:n}=this.view.size,r=this.world.units.filter(t=>t.team===this.team&&t.kind===e).filter(e=>{let r=this.view.units.drawnPosition(e),i=this.view.rts.worldToScreen(r.x,r.y+.9,r.z,t,n);return i&&i.x>=0&&i.y>=0&&i.x<=t&&i.y<=n}).map(e=>e.id);this.select(r)}boxSelect(e){let{width:t,height:n}=this.view.size,r=Math.min(e.x0,e.x1),i=Math.max(e.x0,e.x1),a=Math.min(e.y0,e.y1),o=Math.max(e.y0,e.y1),s=this.world.units.filter(e=>{if(e.team!==this.team)return!1;let s=this.view.units.drawnPosition(e),c=this.view.rts.worldToScreen(s.x,s.y+.9,s.z,t,n);return c!==null&&c.x>=r&&c.x<=i&&c.y>=a&&c.y<=o});this.select(s.map(e=>e.id))}},mv=45,hv=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`,gv=(e,t)=>t?`${e} timber · ${t} emberstone`:`${e} timber`,_v=class{controller;actions;minimap;root=H(`div.hud`);timber=H(`span.value`,{attrs:{"data-testid":`timber`}});emberstone=H(`span.value`,{attrs:{"data-testid":`emberstone`}});pop=H(`span.value`,{attrs:{"data-testid":`population`}});emblem=H(`img.emblem`,{attrs:{alt:`Hearthguard`,src:b_(`hearth`)}});team=`hearth`;buildNames=new Map;settlersBtn;idleBadge=H(`span.badge.hidden`,{attrs:{"data-testid":`idle-settlers`}});favButtons=[];title=H(`div.sel-title`);detail=H(`div.sel-detail`);hint=H(`div.sel-hint`);meterFill=H(`span`);meter=H(`div.meter.hidden`,{attrs:{"data-testid":`meter`}},this.meterFill);weather=H(`div.weather.hidden`,{attrs:{"data-testid":`weather`}});trainBar=H(`div.train-bar.hidden`);trainFor=null;trainButtons=new Map;queueEl=H(`div.queue`,{attrs:{"data-testid":`train-queue`}});commands=H(`div.commands`);buildMenu=H(`div.build-menu.hidden`);toastEl=H(`div.toast`);boxEl=H(`div.box-select.hidden`);selectBtn;cancelBtn;buildButtons=new Map;toastTimer=0;muteBtn;constructor(e,t,n){this.controller=e,this.actions=t,this.minimap=n;let r=(e,t,n)=>{let r=H(`div.res`,{attrs:{"aria-label":n}});return typeof e==`string`?r.innerHTML=`<span class="icon">${e}</span>`:r.append(e),r.append(t),r};this.muteBtn=H(`button.btn.icon-btn`,{text:t.muted?.()?`🔇`:`🔊`,attrs:{"aria-label":`Sound`},onTap:()=>Sr(this.muteBtn,t.toggleMute()?`🔇`:`🔊`)});let i=H(`div.topbar`,{},this.emblem,r(Cr.timber,this.timber,`Timber`),r(Cr.emberstone,this.emberstone,`Emberstone`),r(Cr.people,this.pop,`Population`),this.weather,H(`div.spacer`),this.muteBtn,H(`button.btn.icon-btn`,{text:`❚❚`,attrs:{"aria-label":`Pause`,"data-testid":`pause`},onTap:()=>t.pause()})),s=(e,t,n)=>H(`button.btn.cmd`,{text:e,attrs:{"data-testid":t},onTap:n});this.selectBtn=s(`Select`,`cmd-select`,()=>{e.selectMode=!e.selectMode,this.selectBtn.classList.toggle(`active`,e.selectMode),this.toast(e.selectMode?`Drag to box-select. Tap Select again to pan.`:`Drag to pan the map`)}),this.cancelBtn=s(`Cancel`,`cmd-cancel`,()=>e.cancelPlacing()),this.cancelBtn.classList.add(`danger`),this.settlersBtn=s(`Settlers`,`cmd-settlers`,()=>e.selectIdleSettlers()),this.settlersBtn.append(this.idleBadge);for(let e=0;e<2;e++)this.favButtons.push(this.favoriteButton(e));this.commands.append(...this.favButtons,s(`Build`,`cmd-build`,()=>this.buildMenu.classList.toggle(`hidden`)),this.selectBtn,s(`Army`,`cmd-army`,()=>e.selectArmy()),this.settlersBtn,s(`Stop`,`cmd-stop`,()=>e.stop()),this.cancelBtn);for(let t of o){let n=a[t],r=H(`button.btn.build`,{attrs:{"data-testid":`build-${t}`},onTap:()=>{this.buildMenu.classList.add(`hidden`),e.startPlacing(t)}}),i=H(`span.name`,{text:n.label.hearth});this.buildNames.set(t,i),r.append(i,H(`span.cost`,{text:gv(n.timber,n.emberstone)})),this.buildButtons.set(t,r),this.buildMenu.append(r)}let c=H(`div.panel`,{},this.title,this.detail,this.meter,this.hint,this.trainBar);this.root.append(i,n,c,this.commands,this.buildMenu,this.toastEl,this.boxEl)}favoriteButton(e){let t=H(`button.btn.cmd.fav`,{text:`★${e+1}`,attrs:{"data-testid":`fav-${e+1}`,"aria-label":`Favorite ${e+1}`}}),n=0,r=!1;t.addEventListener(`pointerdown`,()=>{r=!1,n=window.setTimeout(()=>{r=!0,this.controller.favorite(e,!0)},550)});let i=()=>clearTimeout(n);return t.addEventListener(`pointerup`,i),t.addEventListener(`pointercancel`,i),t.addEventListener(`pointerleave`,i),t.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation(),r||this.controller.favorite(e)}),t}setTeam(e){this.team=e,this.emblem.src=b_(e),this.emblem.alt=n[e];for(let[t,n]of this.buildNames)Sr(n,b(t,e));this.settlersBtn.firstChild.textContent=`${y(`settler`,e)}s`}toast(e){Sr(this.toastEl,e),this.toastEl.classList.add(`show`),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove(`show`),2600)}box(e){this.boxEl.classList.toggle(`hidden`,!e),e&&Object.assign(this.boxEl.style,{left:`${Math.min(e.x0,e.x1)}px`,top:`${Math.min(e.y0,e.y1)}px`,width:`${Math.abs(e.x1-e.x0)}px`,height:`${Math.abs(e.y1-e.y0)}px`})}update(e){let t=e.player;t!==this.team&&this.setTeam(t);let n=e.teams[t];Sr(this.timber,String(Math.floor(n.timber))),Sr(this.emberstone,String(Math.floor(n.emberstone))),Sr(this.pop,`${Ye(e,t)}/${Xe(e,t)}`);for(let[n,r]of this.buildButtons){let i=a[n];r.disabled=!Ut(e,t,i.timber,i.emberstone)}let r=this.controller.idleSettlers().length;this.idleBadge.classList.toggle(`hidden`,r===0),Sr(this.idleBadge,String(r)),this.settlersBtn.setAttribute(`aria-label`,`${y(`settler`,t)}s, ${r} idle`),this.favButtons.forEach((e,t)=>{let n=this.controller.livingFavorite(t).length;e.classList.toggle(`saved`,n>0),Sr(e,n?`★${t+1} · ${n}`:`★${t+1}`)});let i=this.controller.placing!==null;for(let e of this.commands.children)e.classList.toggle(`hidden`,i);this.cancelBtn.classList.toggle(`hidden`,!i),this.updateWeather(e),this.showMeter(null),this.describeSelection(e),this.updateTrainBar(e)}updateWeather(e){let{blizzard:t,seconds:n}=st(e);this.weather.classList.toggle(`hidden`,!t&&n>mv),this.weather.classList.toggle(`storm`,t),Sr(this.weather,t?`❄ Blizzard ${hv(n)}`:`Blizzard in ${hv(n)}`)}showMeter(e,t=`chill`,n=!1){this.meter.classList.toggle(`hidden`,e===null),e!==null&&(this.meter.className=`meter ${t}${n?` full`:``}`,this.meterFill.style.width=`${Math.round(e*100)}%`)}describeSelection(e){let t=this.controller,r=e.player;if(t.placing){let n=t.placing,i=a[n.kind];Sr(this.title,`Place ${i.label[r]}`),Sr(this.detail,`${gv(i.timber,i.emberstone)} · ${i.hp} HP`);let o=R(e,n.kind,n.tx,n.tz);this.hint.classList.toggle(`bad`,o!==null),Sr(this.hint,o?`Red: ${o}. Tap clear snow away from ice.`:`Green: tap to build here.`);return}this.hint.classList.remove(`bad`);let i=t.selectedUnits(),o=t.selectedBuilding();if(i.length){let e=new Map;for(let t of i)e.set(t.kind,(e.get(t.kind)??0)+1);Sr(this.title,[...e].map(([e,t])=>`${y(e,i[0].team)}${t>1?` ×${t}`:``}`).join(` · `));let t=i.reduce((e,t)=>e+t.hp,0),a=i.reduce((e,t)=>e+t.maxHp,0),o=`Health ${Math.ceil(t)}/${a}`;if(i[0].team===`hearth`&&i[0].team===r){let e=Math.max(...i.map(e=>e.chill)),t=i.some(nt);o+=` · Chill ${Math.floor(e)}%${t?` · frozen: slower`:``}`,this.showMeter(e/u.max,`chill`,t)}Sr(this.detail,o);let s=r===`hearth`;Sr(this.hint,i[0].team===r?e.has(`settler`)?s?`Tap timber, a pine or emberstone to gather · tap a Brazier to refuel it · Build to construct`:`Tap timber, a pine or emberstone to gather · Build to construct`:e.has(`warden`)?s?`Wardens warm and heal allies nearby · tap ground to move`:`Frostcallers slow enemies nearby · tap ground to move`:s?`Tap an enemy to attack · tap ground to move · stay near fire to keep warm`:`Tap an enemy to attack · tap ground to move · enemy warmth burns your units`:`${n[i[0].team]} · select your own units to give orders`)}else if(o){let e=a[o.kind],t=o.team===r?``:`${n[o.team]} `;Sr(this.title,`${t}${b(o.kind,o.team)}`);let i=`Health ${Math.ceil(o.hp)}/${o.maxHp}`;o.progress<1&&(i+=` · building ${Math.floor(o.progress*100)}%`),o.kind===`brazier`&&o.team===`hearth`&&o.progress>=1&&(i+=` · Fuel ${Math.ceil(o.fuel)}/${d.max}`,this.showMeter(o.fuel/d.max,`fuel`));let s=o.training;if(s){let e=Math.floor((1-s.remaining/s.total)*100),t=y(s.kind,o.team);i+=s.blocked?` · ${t} waiting for housing`:` · training ${t} ${e}%`}Sr(this.detail,i);let c=o.progress<1?`${y(`settler`,o.team)}s raise it; tap with them selected to help`:o.kind===`hall`?`Stores timber and emberstone · trains ${y(`settler`,o.team)}s`:o.kind===`cottage`?`Houses ${e.housing} more`:o.kind===`forge`?`Temper weapons: +30% damage, +15% health for ${gv(v.timber,v.emberstone)}`:o.kind===`brazier`?o.team===`rime`?`Reveals the area and hastens Thralls nearby`:o.fuel>0?`Warms ${l.brazier} paces around · tap it with settlers selected to add timber`:`Out of fuel and cold · tap it with settlers selected to add timber`:`Queue units below · tap the ground to set a rally point`;Sr(this.hint,c)}else Sr(this.title,n[r]),Sr(this.detail,`Tap your Hall to train ${y(`settler`,r)}s. Build a Barracks for ${y(`shieldbearer`,r)}s.`),Sr(this.hint,`Tap to select · long-press + drag to box-select · drag to pan · pinch to zoom`)}updateTrainBar(e){let t=this.controller,n=t.placing?void 0:t.selectedBuilding(),r=e.player,i=n&&n.team===r&&n.progress>=1?n:null,o=i?a[i.kind].trains:[],c=i?.kind===`forge`&&!e.teams[r].upgraded;if(i!==this.trainFor&&this.buildTrainBar(i,o,c),this.trainBar.classList.toggle(`hidden`,!i||!o.length&&!c),!i)return;for(let[t,n]of this.trainButtons){if(t===`upgrade`){n.disabled=!Kt(e,r);continue}let a=s[t];n.disabled=qt(i)>=5||!Ut(e,r,a.timber,a.emberstone)}if(!o.length)return;let l=[i.training?.kind,...i.queue].filter(e=>!!e);Sr(this.queueEl,l.length?`Queue ${l.length}/5: ${l.map(e=>y(e,r)).join(`, `)}`:``)}buildTrainBar(e,t,n){if(this.trainFor=e,this.trainBar.replaceChildren(),this.trainButtons.clear(),!e)return;let r=(e,t,n,r)=>H(`button.btn.build.train`,{attrs:{"data-testid":e},onTap:r},H(`span.name`,{text:t}),H(`span.cost`,{text:n}));for(let n of t){let t=s[n],i=r(`train-${n}`,y(n,e.team),gv(t.timber,t.emberstone),()=>this.actions.train(e.id,n));this.trainButtons.set(n,i),this.trainBar.append(i)}if(t.length){let t=H(`button.btn.train-cancel`,{text:`✕`,attrs:{"data-testid":`train-cancel`,"aria-label":`Cancel last in queue`},onTap:()=>this.actions.cancelTrain(e.id)});this.trainBar.append(t,this.queueEl)}if(n){let e=r(`cmd-upgrade`,`Temper weapons`,gv(v.timber,v.emberstone),()=>this.actions.upgrade());this.trainButtons.set(`upgrade`,e),this.trainBar.append(e)}}},vv={hearth:`#e8763a`,rime:`#8fe0e4`},yv=class{px;canvas=document.createElement(`canvas`);ctx;background=null;painted=0;lastDraw=0;constructor(e,t){this.px=e,this.canvas.className=`minimap`,this.canvas.width=this.canvas.height=e*2,this.ctx=this.canvas.getContext(`2d`);let n=e=>{let n=this.canvas.getBoundingClientRect();t((e.clientX-n.left)/n.width,(e.clientY-n.top)/n.height)};this.canvas.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),this.canvas.setPointerCapture?.(e.pointerId),n(e)}),this.canvas.addEventListener(`pointermove`,e=>{(e.buttons||e.pointerType===`touch`)&&n(e)})}reset(){this.background=null}paintBackground(e,t){let n=document.createElement(`canvas`),r=e.size;n.width=n.height=r;let i=n.getContext(`2d`),a=r/2,{ice:o,path:s}=e.terrain;for(let e=0;e<r;e++)for(let n=0;n<r;n++){let c=e*r+n,l=t(n+.5-a,e+.5-a),u=Math.round(206+Math.max(-30,Math.min(30,l*12)));i.fillStyle=o[c]?`#7fc4e2`:s[c]?`#a99f8c`:`rgb(${u-8},${u+2},${u+12})`,i.fillRect(n,e,1,1)}for(let t of e.obstacles)i.fillStyle=t.kind===`rock`?`#5d636c`:`#2f5a43`,i.fillRect(t.tx,t.tz,1,1);for(let t of e.resources)i.fillStyle=t.kind===`timber`?`#9b7444`:`#ffd34d`,i.fillRect(t.tx,t.tz,t.w,t.d);return n}draw(e,t,n,r){let i=performance.now();if(i-this.lastDraw<150)return;this.lastDraw=i;let a=this.ctx,o=this.canvas.width,s=o/e.size,c=e.size/2;this.painted!==e.obstacles.length&&(this.background=null),this.painted=e.obstacles.length,this.background??=this.paintBackground(e,r),a.imageSmoothingEnabled=!1,a.drawImage(this.background,0,0,o,o);for(let t of e.buildings)a.fillStyle=vv[t.team],a.globalAlpha=t.progress<1?.5:1,a.fillRect(t.tx*s,t.tz*s,t.w*s,t.d*s);a.globalAlpha=1;for(let t of e.units)a.fillStyle=vv[t.team],a.fillRect((t.x+c)*s-2,(t.z+c)*s-2,4,4);let l=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([e,r])=>t.screenToGround(e,r,n.width,n.height));l.every(Boolean)&&(a.strokeStyle=`#ffffff`,a.lineWidth=2,a.beginPath(),l.forEach((e,t)=>{a[t===0?`moveTo`:`lineTo`]((e.x+c)*s,(e.z+c)*s)}),a.closePath(),a.stroke())}},bv=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`,xv={hearth:`Settlers of the valley. Strong near fire, slowed by the cold away from it.`,rime:`Raiders from the ice. Never chilled and fast on ice, but enemy warmth burns them.`};function Sv(e){let t=(e,...t)=>H(`section.howto-part`,{},H(`h3`,{text:e}),...t.map(e=>H(`p`,{text:e})));return H(`div.card.howto-card`,{attrs:{"data-testid":`howto`}},H(`h2`,{text:`How to play`}),H(`div.howto-body`,{},t(`Goal`,`Destroy every enemy building to win. You lose when all your buildings and people are gone.`),t(`Timber and emberstone`,`Workers chop timber from stands and forest pines, and mine emberstone at glowing seams.`,`A pine falls when its timber runs out and leaves open ground, so you can cut new paths.`),t(`Warmth and chill`,`The Hearthguard Hall and lit Braziers keep Hearthguard warm nearby. Wardens carry warmth with them.`,`Away from warmth, Hearthguard slowly get cold. Fully chilled, they move and fight 30% slower. Near fire they warm up fast.`),t(`Blizzards`,`About every three minutes a blizzard blows for 30 seconds. Everyone sees less, chill builds twice as fast, and the Rimeborn move faster. The top bar warns you before it starts.`),t(`Braziers`,`A Brazier burns timber slowly. Tap it with settlers selected to add timber from your stock. An empty Brazier goes cold and gives no warmth.`),t(`Factions`,`Hearthguard: Settlers, Shieldbearers, Hunters and Wardens (heal and warm). Strong near fire.`,`Rimeborn: Thralls, Icebreakers, Spearthrowers and Frostcallers (slow enemies). Never chilled, faster on ice. Their Ice Shrines reveal the area and speed up Thralls, but Rimeborn lose health inside Hearthguard warmth.`)),H(`button.btn.primary`,{text:`Back`,attrs:{"data-testid":`howto-back`},onTap:e}))}var Cv=class{root;mapButtons=new Map;factionButtons=new Map;tagline=H(`p.tagline`);main;howto;constructor(e,t,r){let i=H(`div.maps`,{attrs:{role:`radiogroup`,"aria-label":`Map`}});for(let t of w){let n=H(`button.map-choice`,{attrs:{"data-testid":`map-${t.id}`,role:`radio`,type:`button`},onTap:()=>{e.chooseMap(t.id),this.selectMap(t.id)}},H(`span.map-name`,{text:t.name}),H(`span.map-flavour`,{text:t.flavour}));this.mapButtons.set(t.id,n),i.append(n)}let a=H(`div.factions`,{attrs:{role:`radiogroup`,"aria-label":`Faction`}});for(let t of[`hearth`,`rime`]){let r=H(`button.faction-choice`,{attrs:{"data-testid":`faction-${t}`,role:`radio`,type:`button`},onTap:()=>{e.chooseFaction(t),this.selectFaction(t)}},H(`img.clan`,{attrs:{alt:`${n[t]} emblem`,src:b_(t)}}),H(`span.map-name`,{text:n[t]}),H(`span.map-flavour`,{text:xv[t]}));this.factionButtons.set(t,r),a.append(r)}this.main=H(`div.card`,{},H(`h1`,{text:`Frostmark`}),this.tagline,H(`div.pick-label`,{text:`Play as`}),a,H(`div.pick-label`,{text:`Map`}),i,H(`div.row`,{},H(`button.btn`,{text:`How to play`,attrs:{"data-testid":`start-howto`},onTap:()=>this.showHowTo(!0)}),H(`button.btn.primary`,{text:`Start skirmish`,attrs:{"data-testid":`start`},onTap:e.start}))),this.howto=Sv(()=>this.showHowTo(!1)),this.howto.classList.add(`hidden`),this.root=H(`div.screen.start`,{},this.main,this.howto),this.selectMap(t),this.selectFaction(r)}showHowTo(e){this.main.classList.toggle(`hidden`,e),this.howto.classList.toggle(`hidden`,!e)}selectMap(e){for(let[t,n]of this.mapButtons)n.setAttribute(`aria-checked`,String(t===e))}selectFaction(e){for(let[t,n]of this.factionButtons)n.setAttribute(`aria-checked`,String(t===e));let t=n[Fe(e)];Sr(this.tagline,e===`hearth`?`A winter skirmish. Lead the Hearthguard and hold the valley against the ${t}.`:`A winter skirmish. Lead the Rimeborn down from the ice and drive out the ${t}.`)}show(e,t,n){this.root.classList.toggle(`hidden`,!e),e&&(this.showHowTo(!1),t&&this.selectMap(t),n&&this.selectFaction(n))}},wv=class{difficulty;root;main;maps;howto;mapButtons=new Map;levelButtons=new Map;constructor(e,t){this.difficulty=t;let n=H(`div.levels`,{attrs:{role:`radiogroup`,"aria-label":`AI difficulty`}});for(let e of[`easy`,`normal`,`hard`]){let r=H(`button.btn.level`,{text:e[0].toUpperCase()+e.slice(1),attrs:{"data-testid":`difficulty-${e}`,role:`radio`,type:`button`},onTap:()=>{t?.set(e),this.syncLevels()}});r.disabled=!t,this.levelButtons.set(e,r),n.append(r)}this.main=H(`div.card`,{},H(`h2`,{text:`Paused`}),H(`button.btn.primary`,{text:`Resume`,attrs:{"data-testid":`resume`},onTap:e.resume}),H(`button.btn`,{text:`Restart`,attrs:{"data-testid":`restart`},onTap:e.restart}),H(`button.btn`,{text:`Change map`,attrs:{"data-testid":`change-map`},onTap:()=>this.view(`maps`)}),H(`button.btn`,{text:`How to play`,attrs:{"data-testid":`howto-open`},onTap:()=>this.view(`howto`)}),H(`div.difficulty`,{},H(`div.pick-label`,{text:t?`AI difficulty`:`AI difficulty · coming soon`}),n),H(`button.btn`,{text:`Title screen`,attrs:{"data-testid":`to-title`},onTap:e.title}));let r=H(`div.maps`,{attrs:{role:`radiogroup`,"aria-label":`Map`}});for(let t of w){let n=H(`button.map-choice`,{attrs:{"data-testid":`pause-map-${t.id}`,role:`radio`,type:`button`},onTap:()=>e.changeMap(t.id)},H(`span.map-name`,{text:t.name}),H(`span.map-flavour`,{text:t.flavour}));this.mapButtons.set(t.id,n),r.append(n)}this.maps=H(`div.card.hidden`,{},H(`h2`,{text:`Change map`}),H(`p.tagline`,{text:`Pick a map to start a new match on it.`}),r,H(`button.btn`,{text:`Back`,attrs:{"data-testid":`maps-back`},onTap:()=>this.view(`main`)})),this.howto=Sv(()=>this.view(`main`)),this.howto.classList.add(`hidden`),this.root=H(`div.screen.pause.hidden`,{attrs:{"data-testid":`pause-screen`}},this.main,this.maps,this.howto)}view(e){this.main.classList.toggle(`hidden`,e!==`main`),this.maps.classList.toggle(`hidden`,e!==`maps`),this.howto.classList.toggle(`hidden`,e!==`howto`)}syncLevels(){let e=this.difficulty?.current()??`normal`;for(let[t,n]of this.levelButtons)n.setAttribute(`aria-checked`,String(t===e))}show(e,t){if(this.root.classList.toggle(`hidden`,!e),e){this.view(`main`),this.syncLevels();for(let[e,n]of this.mapButtons)n.setAttribute(`aria-checked`,String(e===t))}}},Tv=class{root;heading=H(`h2`);summary=H(`p.stats`);table=H(`table.match-stats`,{attrs:{"data-testid":`match-stats`}});emblem=H(`img.clan.big`);constructor(e){this.root=H(`div.screen.end.hidden`,{attrs:{"data-testid":`end-screen`}},H(`div.card`,{},this.emblem,this.heading,this.summary,this.table,H(`button.btn.primary`,{text:`Play again`,attrs:{"data-testid":`play-again`},onTap:e.restart}),H(`button.btn`,{text:`Title screen`,onTap:e.title})))}show(e){if(!e||e.phase===`playing`){this.root.classList.add(`hidden`);return}let t=e.phase===`won`,r=e.player,i=Fe(r);this.root.dataset.result=t?`victory`:`defeat`,Sr(this.heading,t?`VICTORY`:`DEFEAT`),this.emblem.src=b_(t?r:i);let a=bv(e.time);Sr(this.summary,t?`The ${n[i]} are driven from the valley after ${a}.`:`The ${n[r]} have fallen after ${a}.`);let o=e.teams[r],s=e.teams[i],c=[[`Units trained`,o.stats.trained,s.stats.trained],[`Units lost`,o.stats.unitsLost,s.stats.unitsLost],[`Timber gathered`,o.stats.timber,s.stats.timber],[`Emberstone gathered`,o.stats.emberstone,s.stats.emberstone],[`Buildings raised`,o.stats.built,s.stats.built],[`Buildings lost`,o.stats.buildingsLost,s.stats.buildingsLost]],l=(e,t)=>H(e,{text:t});this.table.replaceChildren(H(`tr`,{},l(`th`,`Match time ${a}`),l(`th`,`You`),l(`th`,n[i])),...c.map(([e,t,n])=>H(`tr`,{},l(`td`,e),l(`td`,String(t)),l(`td`,String(n))))),this.root.classList.remove(`hidden`)}},Ev=60,Dv=40,Ov=class{audio=new xr;world;view;controller;speed=1;seed;mode=`title`;scenario;map;player;renderer;canvas=document.createElement(`canvas`);stage=document.createElement(`div`);hud;minimap;start;pause;end;queue=[];acc=0;last=performance.now();wavesSeen=0;keys=new Set;constructor(e,t){this.scenario=t.scenario,this.seed=t.seed,this.map=t.map,this.player=t.player,this.stage.className=`stage`,this.canvas.className=`game-canvas`,this.stage.append(this.canvas),e.append(this.stage),this.renderer=cv(this.canvas),this.minimap=new yv(84,(e,t)=>{let n=this.world.size;this.view.rts.lookAt(e*n-n/2,t*n-n/2)}),this.newMatch(),this.hud=new _v(this.controller,{pause:()=>this.setPaused(!0),toggleMute:()=>(this.audio.setMuted(!this.audio.isMuted),this.audio.isMuted),muted:()=>this.audio.isMuted,upgrade:()=>this.issue({type:`upgrade`,team:this.world.player}),train:(e,t)=>this.issue({type:`train`,team:this.world.player,buildingId:e,kind:t}),cancelTrain:e=>this.issue({type:`cancelTrain`,team:this.world.player,buildingId:e})},this.minimap.canvas),this.start=new Cv({start:()=>this.begin(),chooseMap:e=>this.chooseMap(e),chooseFaction:e=>this.chooseFaction(e)},this.map,this.player);let n={resume:()=>this.setPaused(!1),restart:()=>this.restart(),title:()=>this.toTitle(),changeMap:e=>{this.setMap(e),this.restart()}};this.pause=new wv(n),this.end=new Tv(n),e.append(this.hud.root,this.start.root,this.pause.root,this.end.root),this.hud.root.classList.add(`hidden`),new kr(this.canvas,{tap:(e,t,n)=>this.mode===`playing`&&this.controller.tap(e,t,n),pan:(e,t)=>this.panPixels(e,t),zoom:e=>this.view.rts.zoomBy(e),box:(e,t)=>{this.hud.box(t?null:e),t&&e&&this.mode===`playing`&&this.controller.boxSelect(e)},hover:(e,t)=>this.controller.hover(e,t),boxMode:()=>this.controller.selectMode});let r=()=>void this.audio.unlock();this.audio.ackSource=()=>this.world.units.filter(e=>this.controller.selected.has(e.id)),this.pause.root.querySelector(`.card`)?.append(Er(this.audio)),e.addEventListener(`pointerdown`,r,{capture:!0}),e.addEventListener(`touchend`,r,{capture:!0}),window.addEventListener(`keydown`,e=>this.key(e,!0)),window.addEventListener(`keyup`,e=>this.key(e,!1)),window.addEventListener(`resize`,()=>this.resize()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.mode===`playing`&&this.setPaused(!0)}),this.resize(),requestAnimationFrame(e=>this.frame(e))}issue(e){this.queue.push(e)}newMatch(){this.view?.dispose(),this.world=Bt(this.scenario,this.seed,this.map,this.player),this.view=new lv(this.renderer,this.world),this.queue=[],this.acc=0,this.wavesSeen=0;let e={issue:e=>this.issue(e),sound:e=>this.audio.play(e),toast:e=>this.hud.toast(e),changed:()=>void 0};this.controller?this.controller.setMatch(this.world,this.view):this.controller=new pv(this.world,this.view,e),this.minimap.reset(),this.centerOnBase(),this.resize()}centerOnBase(){let e=[...this.world.buildings.filter(e=>e.team===this.player).map(e=>I(this.world,e)),...this.world.units.filter(e=>e.team===this.player)];if(!e.length)return;let t=e.reduce((e,t)=>e+t.x,0)/e.length,n=e.reduce((e,t)=>e+t.z,0)/e.length;this.view.rts.lookAt(t,n),this.view.rts.distance=Dv}chooseMap(e){this.mode===`title`&&e!==this.map&&(this.setMap(e),this.newMatch())}setMap(e){this.map=e,this.setParam(`map`,e)}chooseFaction(e){this.mode===`title`&&e!==this.player&&(this.player=e,this.setParam(`faction`,e),this.newMatch())}setParam(e,t){let n=new URL(location.href);n.searchParams.set(e,t),history.replaceState(null,``,n)}begin(){this.centerOnBase(),this.start.show(!1),this.hud.root.classList.remove(`hidden`),this.mode=`playing`,this.last=performance.now(),this.audio.setPaused(!1),this.audio.startBackground();let e=this.player;this.hud.toast(`Tap your Hall to train ${y(`settler`,e)}s. Build a Barracks to train ${y(`shieldbearer`,e)}s.`)}restart(){this.pause.show(!1),this.end.show(null),this.newMatch(),this.begin()}toTitle(){this.pause.show(!1),this.end.show(null),this.audio.stopBackground(),this.newMatch(),this.mode=`title`,this.hud.root.classList.add(`hidden`),this.start.show(!0,this.map,this.player)}setPaused(e){(this.mode===`playing`||this.mode===`paused`)&&(this.mode=e?`paused`:`playing`,this.pause.show(e,this.map),this.audio.setPaused(e),this.last=performance.now())}resize(){let e=this.stage.clientWidth||window.innerWidth,t=this.stage.clientHeight||window.innerHeight;this.view?.resize(e,t)}panPixels(e,t){let{width:n,height:r}=this.view.size,i=this.view.rts,a=i.screenToGround(n/2,r/2,n,r),o=i.screenToGround(n/2+e,r/2+t,n,r);a&&o&&i.panBy(a.x-o.x,a.z-o.z)}key(e,t){let n=e.key.toLowerCase();t?this.keys.add(n):this.keys.delete(n),t&&(n===`escape`?this.controller.placing?this.controller.cancelPlacing():this.controller.select([]):(n===`p`||n===` `)&&this.setPaused(this.mode===`playing`))}frame(e){let t=Math.min(.25,(e-this.last)/1e3);this.last=e,this.mode===`playing`?this.simulate(t):this.mode===`title`&&this.view.rts.panBy(Math.sin(e/9e3)*t*1.5,-t*.4),this.keyboardPan(t),this.controller.prune(),this.view.render(this.world,{selected:this.controller.selected,placing:this.controller.placing},t),this.hud.update(this.world),this.mode===`playing`&&this.audio.update(this.world,this.listener(),t),this.minimap.draw(this.world,this.view.rts,this.view.size,this.view.terrain.heightAt),requestAnimationFrame(e=>this.frame(e))}keyboardPan(e){let t=this.view.rts.distance*1.2*e,n=this.keys,r=(n.has(`d`)||n.has(`arrowright`)?1:0)-(n.has(`a`)||n.has(`arrowleft`)?1:0),i=(n.has(`s`)||n.has(`arrowdown`)?1:0)-(n.has(`w`)||n.has(`arrowup`)?1:0);(r||i)&&this.view.rts.panBy(r*t,i*t)}simulate(t){this.acc+=t*this.speed;let r=0;for(;this.acc>=.05&&r<Ev;)pn(this.world,this.queue),this.queue=[],this.acc-=e,r++;r===Ev&&(this.acc=0);let i=hn(this.world);this.view.react(this.world,i),this.audio.handle(i,this.world,this.listener()),this.announce(i),this.world.ai.wavesSent>this.wavesSeen&&(this.wavesSeen=this.world.ai.wavesSent,this.hud.toast(`The ${n[Fe(this.world.player)]} are attacking!`)),this.world.phase!==`playing`&&(this.mode=`ended`,this.audio.stopBackground(),this.end.show(this.world))}listener(){let{target:e,distance:t}=this.view.rts;return{x:e.x,z:e.z,distance:t}}announce(e){for(let t of e){let e=`team`in t&&t.team===this.world.player;switch(t.type){case`built`:if(e){let e=this.world.buildings.find(e=>e.id===t.buildingId);e&&this.hud.toast(`${b(e.kind,e.team)} complete`)}break;case`trained`:e&&this.hud.toast(`${y(t.unitKind,t.team)} ready`);break;case`upgrade`:e&&this.hud.toast(`Weapons tempered: your units hit harder and last longer`);break;case`rejected`:e&&this.hud.toast(t.reason);break;case`destroyed`:this.hud.toast(`${e?`Your`:n[t.team]} ${b(t.buildingKind,t.team)} was destroyed`);break;case`weather`:this.hud.toast(t.blizzard?this.world.player===`hearth`?`Blizzard! Keep your people near fire`:`Blizzard! The Rimeborn move faster while it blows`:`The blizzard has passed`);break;case`fuelOut`:e&&this.hud.toast(`A brazier went out: tap it with settlers selected to refuel`)}}}},kv=`modulepreload`,Av=function(e,t){return new URL(e,t).href},jv={},Mv=function(e){return e.pathname.endsWith(`.css`)},Nv=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Pv=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Av(t,n);let r=s(t),i=Mv(r);return Nv(jv,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:kv,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Fv=new URLSearchParams(location.search),Iv=Fv.get(`scenario`),Lv=Iv&&Pt.includes(Iv)?Iv:`normal`,Rv=Number(Fv.get(`seed`))||4242,zv=Fv.get(`map`),Bv=E(zv)?zv:T,Vv=Fv.get(`faction`)===`rime`?`rime`:`hearth`;for(let e of[`gesturestart`,`gesturechange`,`dblclick`])document.addEventListener(e,e=>e.preventDefault(),{passive:!1});document.addEventListener(`touchmove`,e=>e.preventDefault(),{passive:!1}),Fv.has(`lineup`)?Pv(()=>import(`./lineup-ERbDZagG.js`).then(e=>e.showLineup(document.getElementById(`app`),Fv)),[],import.meta.url):gn(new Ov(document.getElementById(`app`),{scenario:Lv,seed:Rv,map:Bv,player:Vv})),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(e=>console.warn(`Service worker failed`,e))});export{Yo as _,uh as a,Ym as c,Ku as d,pc as f,Qi as g,su as h,lg as i,X as l,id as m,cg as n,Fh as o,Cu as p,og as r,Mh as s,Ih as t,ld as u};
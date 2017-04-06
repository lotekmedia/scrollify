!function(){"use strict";function t(t,n,e){return e[0]=t[0]*n[0]+t[1]*n[4]+t[2]*n[8]+t[3]*n[12],e[1]=t[0]*n[1]+t[1]*n[5]+t[2]*n[9]+t[3]*n[13],e[2]=t[0]*n[2]+t[1]*n[6]+t[2]*n[10]+t[3]*n[14],e[3]=t[0]*n[3]+t[1]*n[7]+t[2]*n[11]+t[3]*n[15],e[4]=t[4]*n[0]+t[5]*n[4]+t[6]*n[8]+t[7]*n[12],e[5]=t[4]*n[1]+t[5]*n[5]+t[6]*n[9]+t[7]*n[13],e[6]=t[4]*n[2]+t[5]*n[6]+t[6]*n[10]+t[7]*n[14],e[7]=t[4]*n[3]+t[5]*n[7]+t[6]*n[11]+t[7]*n[15],e[8]=t[8]*n[0]+t[9]*n[4]+t[10]*n[8]+t[11]*n[12],e[9]=t[8]*n[1]+t[9]*n[5]+t[10]*n[9]+t[11]*n[13],e[10]=t[8]*n[2]+t[9]*n[6]+t[10]*n[10]+t[11]*n[14],e[11]=t[8]*n[3]+t[9]*n[7]+t[10]*n[11]+t[11]*n[15],e[12]=t[12]*n[0]+t[13]*n[4]+t[14]*n[8]+t[15]*n[12],e[13]=t[12]*n[1]+t[13]*n[5]+t[14]*n[9]+t[15]*n[13],e[14]=t[12]*n[2]+t[13]*n[6]+t[14]*n[10]+t[15]*n[14],e[15]=t[12]*n[3]+t[13]*n[7]+t[14]*n[11]+t[15]*n[15],e}function n(t,n,e,i){t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n,t[13]=e,t[14]=i,t[15]=1}function e(t,n){t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=Math.cos(n),t[6]=-Math.sin(n),t[7]=0,t[8]=0,t[9]=Math.sin(n),t[10]=Math.cos(n),t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}function i(t,n){t[0]=Math.cos(n),t[1]=-Math.sin(n),t[2]=0,t[3]=0,t[4]=Math.sin(n),t[5]=Math.cos(n),t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}function r(t,n,e){t[0]=1,t[1]=Math.tan(n),t[2]=0,t[3]=0,t[4]=Math.tan(e),t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}function a(t,n,e){t[0]=n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}function s(t){t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}function o(t,n){n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]}function u(){var u=new Float32Array(16),c=new Float32Array(16),f=new Float32Array(16);return s(u),{data:u,asCSS:function(){for(var t="matrix3d(",n=0;n<15;++n)t+=Math.abs(u[n])<1e-4?"0,":u[n].toFixed(10)+",";return t+=Math.abs(u[15])<1e-4?"0)":u[15].toFixed(10)+")"},clear:function(){s(u)},translate:function(e,i,r){return o(u,c),n(f,e,i,r),t(c,f,u),this},rotateX:function(n){return o(u,c),e(f,n),t(c,f,u),this},rotateY:function(n){return o(u,c),K(f,n),t(c,f,u),this},rotateZ:function(n){return o(u,c),i(f,n),t(c,f,u),this},scale:function(n,e){return o(u,c),a(f,n,e),t(c,f,u),this},skew:function(n,e){return o(u,c),r(f,n,e),t(c,f,u),this}}}function c(t){var n=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(t);if(n)return n[2]}function f(t){var n=this.options.to||0,e=this.options.from||0,i=(n-e)*t+e;this.transforms.position[0]=i}function h(t){var n=this.options.to||0,e=this.options.from||0,i=(n-e)*t+e;this.transforms.position[1]=i}function l(t){var n=this.options.rad*t;this.transforms.rotation[2]=n}function p(t){var n=this.options.to||1,e=this.options.from||this.transforms.scale[0],i=(n-e)*t+e;this.transforms.scale[0]=i,this.transforms.scale[1]=i}function d(t){var n=this.options.to||0,e=this.options.from||1,i=(n-e)*t+e;this.element.style.opacity=i}function m(t){var n=this.options.range||0,e=t*n;this.transforms.position[1]=e}function M(t){var n=this.options,e=this.element,i=Object.keys(n);i.forEach(function(i){var r=n[i];t>i?e.classList.add(r):e.classList.remove(r)})}function v(t){function n(t,n){var e=t.getBoundingClientRect();i!==n&&("sticky"==n?(t.style.top=e.top+"px",t.style.left=e.left+"px",t.style.width=e.width+"px"):(t.style.top="",t.style.left="",t.style.width=""),t.className="",t.classList.add(n),i=n)}var e=this.element,i="_";t<=0?n(e,"normal"):t>=1?n(e,"bottom"):n(e,"sticky")}function w(t,n,e,i){var r=4;return t/=i,t=Math.PI*r*t,t=Math.sin(t)*e,t=Math.abs(t),t+n}function g(t,n,e,i){return e*(t/=i)*t+n}function y(t,n,e,i){return-e*(t/=i)*(t-2)+n}function O(t,n,e,i){return(t/=i/2)<1?e/2*t*t+n:-e/2*(--t*(t-2)-1)+n}function I(t,n,e,i){return e*(t/=i)*t*t+n}function x(t,n,e,i){return e*((t=t/i-1)*t*t+1)+n}function b(t,n,e,i){return(t/=i/2)<1?e/2*t*t*t+n:e/2*((t-=2)*t*t+2)+n}function S(t,n,e,i){return e*(t/=i)*t*t*t+n}function k(t,n,e,i){return-e*((t=t/i-1)*t*t*t-1)+n}function E(t,n,e,i){return(t/=i/2)<1?e/2*t*t*t*t+n:-e/2*((t-=2)*t*t*t-2)+n}function T(t,n,e,i){return e*(t/=i)*t*t*t*t+n}function P(t,n,e,i){return e*((t=t/i-1)*t*t*t*t+1)+n}function _(t,n,e,i){return(t/=i/2)<1?e/2*t*t*t*t*t+n:e/2*((t-=2)*t*t*t*t+2)+n}function C(t,n,e,i){return-e*Math.cos(t/i*(Math.PI/2))+e+n}function Q(t,n,e,i){return e*Math.sin(t/i*(Math.PI/2))+n}function Y(t,n,e,i){return-e/2*(Math.cos(Math.PI*t/i)-1)+n}function q(t,n,e,i){return 0==t?n:e*Math.pow(2,10*(t/i-1))+n}function F(t,n,e,i){return t==i?n+e:e*(-Math.pow(2,-10*t/i)+1)+n}function L(t,n,e,i){return 0==t?n:t==i?n+e:(t/=i/2)<1?e/2*Math.pow(2,10*(t-1))+n:e/2*(-Math.pow(2,-10*--t)+2)+n}function z(t,n,e,i){return-e*(Math.sqrt(1-(t/=i)*t)-1)+n}function H(t,n,e,i){return e*Math.sqrt(1-(t=t/i-1)*t)+n}function B(t,n,e,i){return(t/=i/2)<1?-e/2*(Math.sqrt(1-t*t)-1)+n:e/2*(Math.sqrt(1-(t-=2)*t)+1)+n}function A(t,n,e,i){var r=1.70158,a=0,s=e;if(0==t)return n;if(1==(t/=i))return n+e;if(a||(a=.3*i),s<Math.abs(e)){s=e;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(e/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/a))+n}function X(t,n,e,i){var r=1.70158,a=0,s=e;if(0==t)return n;if(1==(t/=i))return n+e;if(a||(a=.3*i),s<Math.abs(e)){s=e;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(e/s);return s*Math.pow(2,-10*t)*Math.sin((t*i-r)*(2*Math.PI)/a)+e+n}function j(t,n,e,i){var r=1.70158,a=0,s=e;if(0==t)return n;if(2==(t/=i/2))return n+e;if(a||(a=i*(.3*1.5)),s<Math.abs(e)){s=e;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(e/s);return t<1?-.5*(s*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/a))+n:s*Math.pow(2,-10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/a)*.5+e+n}function D(t,n,e,i,r){return void 0==r&&(r=1.70158),e*(t/=i)*t*((r+1)*t-r)+n}function R(t,n,e,i,r){return void 0==r&&(r=1.70158),e*((t=t/i-1)*t*((r+1)*t+r)+1)+n}function Z(t,n,e,i,r){return void 0==r&&(r=1.70158),(t/=i/2)<1?e/2*(t*t*(((r*=1.525)+1)*t-r))+n:e/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+n}function N(t,n,e,i){return(t/=i<1/2.75)?e*(7.5625*t*t)+n:t<2/2.75?e*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?e*(7.5625*(t-=2.25/2.75)*t+.9375)+n:e*(7.5625*(t-=2.625/2.75)*t+.984375)+n}var G=document.createElement("div"),J=["transform","webkitTransform","MozTransform","OTransform","msTransform"].find(function(t){return void 0!==G.style[t]}),K=function(t,n){t[0]=Math.cos(n),t[1]=0,t[2]=Math.sin(n),t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=-Math.sin(n),t[9]=0,t[10]=Math.cos(n),t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1},U=["translateX","translateY","rotate","scale","parallax"],V=function(t){var n=this;return t instanceof HTMLElement==0&&(t=document.querySelector(t)),t&&J?(this.element=t,this.ticking=!1,this.scenes=[],this.scroll=window.scrollY||window.pageYOffset,this.active=!0,this.matrix=u(),this.transforms={scale:[1,1],rotation:[0,0,0],position:[0,0,0]},window.addEventListener("scroll",function(t){return n.onScroll(t)}),void window.addEventListener("resize",function(t){return n.onResize(t)})):this.active=!1};V.prototype.addScene=function(t){var n=this,e=t.trigger?t.trigger instanceof HTMLElement?t.trigger:document.querySelector(t.trigger):this.element,i=t.easing||!1,r=t.effects||[],a={_trigger:e,_applyTransform:!1,_offset:t.start||0,_duration:t.duration||1,easing:i,effects:[]};return r.map(function(t){n.addEffect(t.fn,t.options,a)}),this.calculateStart(a),this.calculateDuration(a),a.state=this.scroll>this.start?this.scroll>this.start+a.duration?"after":"active":"before",this.calculate(a),this.scenes.push(a),this},V.prototype.updateScene=function(t){this.calculateStart(t),this.calculateDuration(t),this.calculate(t)},V.prototype.addEffect=function(t,n,e){void 0===n&&(n={});var i=this.element,r=this.transforms;if(!e){if(!this.scenes.length)return this.addScene({effects:[{fn:t,options:n}]});e=this.scenes[this.scenes.length-1]}e._applyTransform=e._applyTransform||!!~U.indexOf(t.name);var a=function(t,n){return function(){var e={options:n,element:i,transforms:r};t.call(e,this)}};return e.effects.push(a(t,n)),this},V.prototype.calculateStart=function(t){var n=window.innerHeight-this.mapTo(t._offset,window.innerHeight),e=t._trigger,i=0;do i+=e.offsetTop||0,e=e.offsetParent;while(e);t.start=Math.max(0,i-n)},V.prototype.mapTo=function(t,n){var e=parseFloat(t),i=c(t);switch(i){case"px":return e;case"%":return e/100*n;default:return e*n}},V.prototype.calculateDuration=function(t){t.duration=this.mapTo(t._duration,window.innerHeight+this.element.offsetHeight)},V.prototype.onScroll=function(){this.active&&(this.scroll=window.scrollY||window.pageYOffset,this.ticking||(window.requestAnimationFrame(this.update.bind(this)),this.ticking=!0))},V.prototype.onResize=function(){this.scenes.forEach(this.updateScene,this)},V.prototype.update=function(){this.scenes.forEach(this.calculate,this),this.ticking=!1},V.prototype.calculate=function(t){var n,e=t.start,i=t.duration,r=this.scroll;if(r-e>i){if("after"===t.state)return;t.state="after",n=1}else if(r-e<0){if("before"===t.state)return;t.state="before",n=0}else t.state="active",n=t.easing?t.easing(r-e,0,1,i):(r-e)/i;if(t.effects.forEach(function(t){t.call(n)}),t._applyTransform){var a=this.updateMatrix();this.element.style[J]=a.asCSS()}},V.prototype.updateMatrix=function(){var t=this.transforms,n=this.matrix;return n.clear(),t.transformOrigin&&n.translate(-t.transformOrigin[0],-t.transformOrigin[1],-t.transformOrigin[2]),t.scale&&n.scale(t.scale[0],t.scale[1]),t.skew&&n.skew(t.skew[0],t.skew[1]),t.rotation&&(n.rotateX(t.rotation[0]),n.rotateY(t.rotation[1]),n.rotateZ(t.rotation[2])),t.position&&n.translate(t.position[0],t.position[1],t.position[2]),t.transformOrigin&&n.translate(t.transformOrigin[0],t.transformOrigin[1],t.transformOrigin[2]),n},V.prototype.disable=function(){this.active=!1};var W=Object.freeze({translateX:f,translateY:h,rotate:l,scale:p,fade:d,parallax:m,toggle:M,stick:v}),$=Object.freeze({oscillate:w,easeInQuad:g,easeOutQuad:y,easeInOutQuad:O,easeInCubic:I,easeOutCubic:x,easeInOutCubic:b,easeInQuart:S,easeOutQuart:k,easeInOutQuart:E,easeInQuint:T,easeOutQuint:P,easeInOutQuint:_,easeInSine:C,easeOutSine:Q,easeInOutSine:Y,easeInExpo:q,easeOutExpo:F,easeInOutExpo:L,easeInCirc:z,easeOutCirc:H,easeInOutCirc:B,easeInElastic:A,easeOutElastic:X,easeInOutElastic:j,easeInBack:D,easeOutBack:R,easeInOutBack:Z,easeOutBounce:N});V.fx=W,V.easings=$,window.Scrollify=V}();
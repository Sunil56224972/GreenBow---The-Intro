(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ds={exports:{}};/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xc=Ds.exports,Jo;function _c(){return Jo||(Jo=1,(function(r,e){(function(n,s){r.exports=s()})(xc,function(){return(function(t){var n={};function s(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=t,s.c=n,s.d=function(i,o,a){s.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:a})},s.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,o){if(o&1&&(i=s(i)),o&8||o&4&&typeof i=="object"&&i&&i.__esModule)return i;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),o&2&&typeof i!="string")for(var l in i)s.d(a,l,(function(u){return i[u]}).bind(null,l));return a},s.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(o,"a",o),o},s.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},s.p="",s(s.s=20)})([(function(t,n){var s={};t.exports=s,(function(){s._baseDelta=1e3/60,s._nextId=0,s._seed=0,s._nowStartTime=+new Date,s._warnedOnce={},s._decomp=null,s.extend=function(o,a){var l,u;typeof a=="boolean"?(l=2,u=a):(l=1,u=!0);for(var h=l;h<arguments.length;h++){var f=arguments[h];if(f)for(var d in f)u&&f[d]&&f[d].constructor===Object&&(!o[d]||o[d].constructor===Object)?(o[d]=o[d]||{},s.extend(o[d],u,f[d])):o[d]=f[d]}return o},s.clone=function(o,a){return s.extend({},a,o)},s.keys=function(o){if(Object.keys)return Object.keys(o);var a=[];for(var l in o)a.push(l);return a},s.values=function(o){var a=[];if(Object.keys){for(var l=Object.keys(o),u=0;u<l.length;u++)a.push(o[l[u]]);return a}for(var h in o)a.push(o[h]);return a},s.get=function(o,a,l,u){a=a.split(".").slice(l,u);for(var h=0;h<a.length;h+=1)o=o[a[h]];return o},s.set=function(o,a,l,u,h){var f=a.split(".").slice(u,h);return s.get(o,a,0,-1)[f[f.length-1]]=l,l},s.shuffle=function(o){for(var a=o.length-1;a>0;a--){var l=Math.floor(s.random()*(a+1)),u=o[a];o[a]=o[l],o[l]=u}return o},s.choose=function(o){return o[Math.floor(s.random()*o.length)]},s.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},s.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},s.isFunction=function(o){return typeof o=="function"},s.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},s.isString=function(o){return toString.call(o)==="[object String]"},s.clamp=function(o,a,l){return o<a?a:o>l?l:o},s.sign=function(o){return o<0?-1:1},s.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-s._nowStartTime},s.random=function(o,a){return o=typeof o<"u"?o:0,a=typeof a<"u"?a:1,o+i()*(a-o)};var i=function(){return s._seed=(s._seed*9301+49297)%233280,s._seed/233280};s.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},s.logLevel=1,s.log=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.info=function(){console&&s.logLevel>0&&s.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warn=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");s._warnedOnce[o]||(s.warn(o),s._warnedOnce[o]=!0)},s.deprecated=function(o,a,l){o[a]=s.chain(function(){s.warnOnce("🔅 deprecated 🔅",l)},o[a])},s.nextId=function(){return s._nextId++},s.indexOf=function(o,a){if(o.indexOf)return o.indexOf(a);for(var l=0;l<o.length;l++)if(o[l]===a)return l;return-1},s.map=function(o,a){if(o.map)return o.map(a);for(var l=[],u=0;u<o.length;u+=1)l.push(a(o[u]));return l},s.topologicalSort=function(o){var a=[],l=[],u=[];for(var h in o)!l[h]&&!u[h]&&s._topologicalSort(h,l,u,o,a);return a},s._topologicalSort=function(o,a,l,u,h){var f=u[o]||[];l[o]=!0;for(var d=0;d<f.length;d+=1){var c=f[d];l[c]||a[c]||s._topologicalSort(c,a,l,u,h)}l[o]=!1,a[o]=!0,h.push(o)},s.chain=function(){for(var o=[],a=0;a<arguments.length;a+=1){var l=arguments[a];l._chained?o.push.apply(o,l._chained):o.push(l)}var u=function(){for(var h,f=new Array(arguments.length),d=0,c=arguments.length;d<c;d++)f[d]=arguments[d];for(d=0;d<o.length;d+=1){var p=o[d].apply(h,f);typeof p<"u"&&(h=p)}return h};return u._chained=o,u},s.chainPathBefore=function(o,a,l){return s.set(o,a,s.chain(l,s.get(o,a)))},s.chainPathAfter=function(o,a,l){return s.set(o,a,s.chain(s.get(o,a),l))},s.setDecomp=function(o){s._decomp=o},s.getDecomp=function(){var o=s._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof Ko<"u"&&(o=Ko.decomp)}catch{o=null}return o}})()}),(function(t,n){var s={};t.exports=s,(function(){s.create=function(i){var o={min:{x:0,y:0},max:{x:0,y:0}};return i&&s.update(o,i),o},s.update=function(i,o,a){i.min.x=1/0,i.max.x=-1/0,i.min.y=1/0,i.max.y=-1/0;for(var l=0;l<o.length;l++){var u=o[l];u.x>i.max.x&&(i.max.x=u.x),u.x<i.min.x&&(i.min.x=u.x),u.y>i.max.y&&(i.max.y=u.y),u.y<i.min.y&&(i.min.y=u.y)}a&&(a.x>0?i.max.x+=a.x:i.min.x+=a.x,a.y>0?i.max.y+=a.y:i.min.y+=a.y)},s.contains=function(i,o){return o.x>=i.min.x&&o.x<=i.max.x&&o.y>=i.min.y&&o.y<=i.max.y},s.overlaps=function(i,o){return i.min.x<=o.max.x&&i.max.x>=o.min.x&&i.max.y>=o.min.y&&i.min.y<=o.max.y},s.translate=function(i,o){i.min.x+=o.x,i.max.x+=o.x,i.min.y+=o.y,i.max.y+=o.y},s.shift=function(i,o){var a=i.max.x-i.min.x,l=i.max.y-i.min.y;i.min.x=o.x,i.max.x=o.x+a,i.min.y=o.y,i.max.y=o.y+l}})()}),(function(t,n){var s={};t.exports=s,(function(){s.create=function(i,o){return{x:i||0,y:o||0}},s.clone=function(i){return{x:i.x,y:i.y}},s.magnitude=function(i){return Math.sqrt(i.x*i.x+i.y*i.y)},s.magnitudeSquared=function(i){return i.x*i.x+i.y*i.y},s.rotate=function(i,o,a){var l=Math.cos(o),u=Math.sin(o);a||(a={});var h=i.x*l-i.y*u;return a.y=i.x*u+i.y*l,a.x=h,a},s.rotateAbout=function(i,o,a,l){var u=Math.cos(o),h=Math.sin(o);l||(l={});var f=a.x+((i.x-a.x)*u-(i.y-a.y)*h);return l.y=a.y+((i.x-a.x)*h+(i.y-a.y)*u),l.x=f,l},s.normalise=function(i){var o=s.magnitude(i);return o===0?{x:0,y:0}:{x:i.x/o,y:i.y/o}},s.dot=function(i,o){return i.x*o.x+i.y*o.y},s.cross=function(i,o){return i.x*o.y-i.y*o.x},s.cross3=function(i,o,a){return(o.x-i.x)*(a.y-i.y)-(o.y-i.y)*(a.x-i.x)},s.add=function(i,o,a){return a||(a={}),a.x=i.x+o.x,a.y=i.y+o.y,a},s.sub=function(i,o,a){return a||(a={}),a.x=i.x-o.x,a.y=i.y-o.y,a},s.mult=function(i,o){return{x:i.x*o,y:i.y*o}},s.div=function(i,o){return{x:i.x/o,y:i.y/o}},s.perp=function(i,o){return o=o===!0?-1:1,{x:o*-i.y,y:o*i.x}},s.neg=function(i){return{x:-i.x,y:-i.y}},s.angle=function(i,o){return Math.atan2(o.y-i.y,o.x-i.x)},s._temp=[s.create(),s.create(),s.create(),s.create(),s.create(),s.create()]})()}),(function(t,n,s){var i={};t.exports=i;var o=s(2),a=s(0);(function(){i.create=function(l,u){for(var h=[],f=0;f<l.length;f++){var d=l[f],c={x:d.x,y:d.y,index:f,body:u,isInternal:!1};h.push(c)}return h},i.fromPath=function(l,u){var h=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,f=[];return l.replace(h,function(d,c,p){f.push({x:parseFloat(c),y:parseFloat(p)})}),i.create(f,u)},i.centre=function(l){for(var u=i.area(l,!0),h={x:0,y:0},f,d,c,p=0;p<l.length;p++)c=(p+1)%l.length,f=o.cross(l[p],l[c]),d=o.mult(o.add(l[p],l[c]),f),h=o.add(h,d);return o.div(h,6*u)},i.mean=function(l){for(var u={x:0,y:0},h=0;h<l.length;h++)u.x+=l[h].x,u.y+=l[h].y;return o.div(u,l.length)},i.area=function(l,u){for(var h=0,f=l.length-1,d=0;d<l.length;d++)h+=(l[f].x-l[d].x)*(l[f].y+l[d].y),f=d;return u?h/2:Math.abs(h)/2},i.inertia=function(l,u){for(var h=0,f=0,d=l,c,p,g=0;g<d.length;g++)p=(g+1)%d.length,c=Math.abs(o.cross(d[p],d[g])),h+=c*(o.dot(d[p],d[p])+o.dot(d[p],d[g])+o.dot(d[g],d[g])),f+=c;return u/6*(h/f)},i.translate=function(l,u,h){h=typeof h<"u"?h:1;var f=l.length,d=u.x*h,c=u.y*h,p;for(p=0;p<f;p++)l[p].x+=d,l[p].y+=c;return l},i.rotate=function(l,u,h){if(u!==0){var f=Math.cos(u),d=Math.sin(u),c=h.x,p=h.y,g=l.length,m,v,E,y;for(y=0;y<g;y++)m=l[y],v=m.x-c,E=m.y-p,m.x=c+(v*f-E*d),m.y=p+(v*d+E*f);return l}},i.contains=function(l,u){for(var h=u.x,f=u.y,d=l.length,c=l[d-1],p,g=0;g<d;g++){if(p=l[g],(h-c.x)*(p.y-c.y)+(f-c.y)*(c.x-p.x)>0)return!1;c=p}return!0},i.scale=function(l,u,h,f){if(u===1&&h===1)return l;f=f||i.centre(l);for(var d,c,p=0;p<l.length;p++)d=l[p],c=o.sub(d,f),l[p].x=f.x+c.x*u,l[p].y=f.y+c.y*h;return l},i.chamfer=function(l,u,h,f,d){typeof u=="number"?u=[u]:u=u||[8],h=typeof h<"u"?h:-1,f=f||2,d=d||14;for(var c=[],p=0;p<l.length;p++){var g=l[p-1>=0?p-1:l.length-1],m=l[p],v=l[(p+1)%l.length],E=u[p<u.length?p:u.length-1];if(E===0){c.push(m);continue}var y=o.normalise({x:m.y-g.y,y:g.x-m.x}),S=o.normalise({x:v.y-m.y,y:m.x-v.x}),x=Math.sqrt(2*Math.pow(E,2)),M=o.mult(a.clone(y),E),T=o.normalise(o.mult(o.add(y,S),.5)),b=o.sub(m,o.mult(T,x)),w=h;h===-1&&(w=Math.pow(E,.32)*1.75),w=a.clamp(w,f,d),w%2===1&&(w+=1);for(var _=Math.acos(o.dot(y,S)),A=_/w,R=0;R<w;R++)c.push(o.add(o.rotate(M,A*R),b))}return c},i.clockwiseSort=function(l){var u=i.mean(l);return l.sort(function(h,f){return o.angle(u,h)-o.angle(u,f)}),l},i.isConvex=function(l){var u=0,h=l.length,f,d,c,p;if(h<3)return null;for(f=0;f<h;f++)if(d=(f+1)%h,c=(f+2)%h,p=(l[d].x-l[f].x)*(l[c].y-l[d].y),p-=(l[d].y-l[f].y)*(l[c].x-l[d].x),p<0?u|=1:p>0&&(u|=2),u===3)return!1;return u!==0?!0:null},i.hull=function(l){var u=[],h=[],f,d;for(l=l.slice(0),l.sort(function(c,p){var g=c.x-p.x;return g!==0?g:c.y-p.y}),d=0;d<l.length;d+=1){for(f=l[d];h.length>=2&&o.cross3(h[h.length-2],h[h.length-1],f)<=0;)h.pop();h.push(f)}for(d=l.length-1;d>=0;d-=1){for(f=l[d];u.length>=2&&o.cross3(u[u.length-2],u[u.length-1],f)<=0;)u.pop();u.push(f)}return u.pop(),h.pop(),u.concat(h)}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(3),a=s(2),l=s(7),u=s(0),h=s(1),f=s(11);(function(){i._timeCorrection=!0,i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,i._baseDelta=1e3/60,i.create=function(c){var p={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},g=u.extend(p,c);return d(g,c),g},i.nextGroup=function(c){return c?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory};var d=function(c,p){p=p||{},i.set(c,{bounds:c.bounds||h.create(c.vertices),positionPrev:c.positionPrev||a.clone(c.position),anglePrev:c.anglePrev||c.angle,vertices:c.vertices,parts:c.parts||[c],isStatic:c.isStatic,isSleeping:c.isSleeping,parent:c.parent||c}),o.rotate(c.vertices,c.angle,c.position),f.rotate(c.axes,c.angle),h.update(c.bounds,c.vertices,c.velocity),i.set(c,{axes:p.axes||c.axes,area:p.area||c.area,mass:p.mass||c.mass,inertia:p.inertia||c.inertia});var g=c.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=c.isStatic?"#555":"#ccc",v=c.isStatic&&c.render.fillStyle===null?1:0;c.render.fillStyle=c.render.fillStyle||g,c.render.strokeStyle=c.render.strokeStyle||m,c.render.lineWidth=c.render.lineWidth||v,c.render.sprite.xOffset+=-(c.bounds.min.x-c.position.x)/(c.bounds.max.x-c.bounds.min.x),c.render.sprite.yOffset+=-(c.bounds.min.y-c.position.y)/(c.bounds.max.y-c.bounds.min.y)};i.set=function(c,p,g){var m;typeof p=="string"&&(m=p,p={},p[m]=g);for(m in p)if(Object.prototype.hasOwnProperty.call(p,m))switch(g=p[m],m){case"isStatic":i.setStatic(c,g);break;case"isSleeping":l.set(c,g);break;case"mass":i.setMass(c,g);break;case"density":i.setDensity(c,g);break;case"inertia":i.setInertia(c,g);break;case"vertices":i.setVertices(c,g);break;case"position":i.setPosition(c,g);break;case"angle":i.setAngle(c,g);break;case"velocity":i.setVelocity(c,g);break;case"angularVelocity":i.setAngularVelocity(c,g);break;case"speed":i.setSpeed(c,g);break;case"angularSpeed":i.setAngularSpeed(c,g);break;case"parts":i.setParts(c,g);break;case"centre":i.setCentre(c,g);break;default:c[m]=g}},i.setStatic=function(c,p){for(var g=0;g<c.parts.length;g++){var m=c.parts[g];p?(m.isStatic||(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia}),m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null),m.isStatic=p}},i.setMass=function(c,p){var g=c.inertia/(c.mass/6);c.inertia=g*(p/6),c.inverseInertia=1/c.inertia,c.mass=p,c.inverseMass=1/c.mass,c.density=c.mass/c.area},i.setDensity=function(c,p){i.setMass(c,p*c.area),c.density=p},i.setInertia=function(c,p){c.inertia=p,c.inverseInertia=1/c.inertia},i.setVertices=function(c,p){p[0].body===c?c.vertices=p:c.vertices=o.create(p,c),c.axes=f.fromVertices(c.vertices),c.area=o.area(c.vertices),i.setMass(c,c.density*c.area);var g=o.centre(c.vertices);o.translate(c.vertices,g,-1),i.setInertia(c,i._inertiaScale*o.inertia(c.vertices,c.mass)),o.translate(c.vertices,c.position),h.update(c.bounds,c.vertices,c.velocity)},i.setParts=function(c,p,g){var m;for(p=p.slice(0),c.parts.length=0,c.parts.push(c),c.parent=c,m=0;m<p.length;m++){var v=p[m];v!==c&&(v.parent=c,c.parts.push(v))}if(c.parts.length!==1){if(g=typeof g<"u"?g:!0,g){var E=[];for(m=0;m<p.length;m++)E=E.concat(p[m].vertices);o.clockwiseSort(E);var y=o.hull(E),S=o.centre(y);i.setVertices(c,y),o.translate(c.vertices,S)}var x=i._totalProperties(c);c.area=x.area,c.parent=c,c.position.x=x.centre.x,c.position.y=x.centre.y,c.positionPrev.x=x.centre.x,c.positionPrev.y=x.centre.y,i.setMass(c,x.mass),i.setInertia(c,x.inertia),i.setPosition(c,x.centre)}},i.setCentre=function(c,p,g){g?(c.positionPrev.x+=p.x,c.positionPrev.y+=p.y,c.position.x+=p.x,c.position.y+=p.y):(c.positionPrev.x=p.x-(c.position.x-c.positionPrev.x),c.positionPrev.y=p.y-(c.position.y-c.positionPrev.y),c.position.x=p.x,c.position.y=p.y)},i.setPosition=function(c,p,g){var m=a.sub(p,c.position);g?(c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.velocity.x=m.x,c.velocity.y=m.y,c.speed=a.magnitude(m)):(c.positionPrev.x+=m.x,c.positionPrev.y+=m.y);for(var v=0;v<c.parts.length;v++){var E=c.parts[v];E.position.x+=m.x,E.position.y+=m.y,o.translate(E.vertices,m),h.update(E.bounds,E.vertices,c.velocity)}},i.setAngle=function(c,p,g){var m=p-c.angle;g?(c.anglePrev=c.angle,c.angularVelocity=m,c.angularSpeed=Math.abs(m)):c.anglePrev+=m;for(var v=0;v<c.parts.length;v++){var E=c.parts[v];E.angle+=m,o.rotate(E.vertices,m,c.position),f.rotate(E.axes,m),h.update(E.bounds,E.vertices,c.velocity),v>0&&a.rotateAbout(E.position,m,c.position,E.position)}},i.setVelocity=function(c,p){var g=c.deltaTime/i._baseDelta;c.positionPrev.x=c.position.x-p.x*g,c.positionPrev.y=c.position.y-p.y*g,c.velocity.x=(c.position.x-c.positionPrev.x)/g,c.velocity.y=(c.position.y-c.positionPrev.y)/g,c.speed=a.magnitude(c.velocity)},i.getVelocity=function(c){var p=i._baseDelta/c.deltaTime;return{x:(c.position.x-c.positionPrev.x)*p,y:(c.position.y-c.positionPrev.y)*p}},i.getSpeed=function(c){return a.magnitude(i.getVelocity(c))},i.setSpeed=function(c,p){i.setVelocity(c,a.mult(a.normalise(i.getVelocity(c)),p))},i.setAngularVelocity=function(c,p){var g=c.deltaTime/i._baseDelta;c.anglePrev=c.angle-p*g,c.angularVelocity=(c.angle-c.anglePrev)/g,c.angularSpeed=Math.abs(c.angularVelocity)},i.getAngularVelocity=function(c){return(c.angle-c.anglePrev)*i._baseDelta/c.deltaTime},i.getAngularSpeed=function(c){return Math.abs(i.getAngularVelocity(c))},i.setAngularSpeed=function(c,p){i.setAngularVelocity(c,u.sign(i.getAngularVelocity(c))*p)},i.translate=function(c,p,g){i.setPosition(c,a.add(c.position,p),g)},i.rotate=function(c,p,g,m){if(!g)i.setAngle(c,c.angle+p,m);else{var v=Math.cos(p),E=Math.sin(p),y=c.position.x-g.x,S=c.position.y-g.y;i.setPosition(c,{x:g.x+(y*v-S*E),y:g.y+(y*E+S*v)},m),i.setAngle(c,c.angle+p,m)}},i.scale=function(c,p,g,m){var v=0,E=0;m=m||c.position;for(var y=0;y<c.parts.length;y++){var S=c.parts[y];o.scale(S.vertices,p,g,m),S.axes=f.fromVertices(S.vertices),S.area=o.area(S.vertices),i.setMass(S,c.density*S.area),o.translate(S.vertices,{x:-S.position.x,y:-S.position.y}),i.setInertia(S,i._inertiaScale*o.inertia(S.vertices,S.mass)),o.translate(S.vertices,{x:S.position.x,y:S.position.y}),y>0&&(v+=S.area,E+=S.inertia),S.position.x=m.x+(S.position.x-m.x)*p,S.position.y=m.y+(S.position.y-m.y)*g,h.update(S.bounds,S.vertices,c.velocity)}c.parts.length>1&&(c.area=v,c.isStatic||(i.setMass(c,c.density*v),i.setInertia(c,E))),c.circleRadius&&(p===g?c.circleRadius*=p:c.circleRadius=null)},i.update=function(c,p){p=(typeof p<"u"?p:1e3/60)*c.timeScale;var g=p*p,m=i._timeCorrection?p/(c.deltaTime||p):1,v=1-c.frictionAir*(p/u._baseDelta),E=(c.position.x-c.positionPrev.x)*m,y=(c.position.y-c.positionPrev.y)*m;c.velocity.x=E*v+c.force.x/c.mass*g,c.velocity.y=y*v+c.force.y/c.mass*g,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.position.x+=c.velocity.x,c.position.y+=c.velocity.y,c.deltaTime=p,c.angularVelocity=(c.angle-c.anglePrev)*v*m+c.torque/c.inertia*g,c.anglePrev=c.angle,c.angle+=c.angularVelocity;for(var S=0;S<c.parts.length;S++){var x=c.parts[S];o.translate(x.vertices,c.velocity),S>0&&(x.position.x+=c.velocity.x,x.position.y+=c.velocity.y),c.angularVelocity!==0&&(o.rotate(x.vertices,c.angularVelocity,c.position),f.rotate(x.axes,c.angularVelocity),S>0&&a.rotateAbout(x.position,c.angularVelocity,c.position,x.position)),h.update(x.bounds,x.vertices,c.velocity)}},i.updateVelocities=function(c){var p=i._baseDelta/c.deltaTime,g=c.velocity;g.x=(c.position.x-c.positionPrev.x)*p,g.y=(c.position.y-c.positionPrev.y)*p,c.speed=Math.sqrt(g.x*g.x+g.y*g.y),c.angularVelocity=(c.angle-c.anglePrev)*p,c.angularSpeed=Math.abs(c.angularVelocity)},i.applyForce=function(c,p,g){var m={x:p.x-c.position.x,y:p.y-c.position.y};c.force.x+=g.x,c.force.y+=g.y,c.torque+=m.x*g.y-m.y*g.x},i._totalProperties=function(c){for(var p={mass:0,area:0,inertia:0,centre:{x:0,y:0}},g=c.parts.length===1?0:1;g<c.parts.length;g++){var m=c.parts[g],v=m.mass!==1/0?m.mass:1;p.mass+=v,p.area+=m.area,p.inertia+=m.inertia,p.centre=a.add(p.centre,a.mult(m.position,v))}return p.centre=a.div(p.centre,p.mass),p}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(0);(function(){i.on=function(a,l,u){for(var h=l.split(" "),f,d=0;d<h.length;d++)f=h[d],a.events=a.events||{},a.events[f]=a.events[f]||[],a.events[f].push(u);return u},i.off=function(a,l,u){if(!l){a.events={};return}typeof l=="function"&&(u=l,l=o.keys(a.events).join(" "));for(var h=l.split(" "),f=0;f<h.length;f++){var d=a.events[h[f]],c=[];if(u&&d)for(var p=0;p<d.length;p++)d[p]!==u&&c.push(d[p]);a.events[h[f]]=c}},i.trigger=function(a,l,u){var h,f,d,c,p=a.events;if(p&&o.keys(p).length>0){u||(u={}),h=l.split(" ");for(var g=0;g<h.length;g++)if(f=h[g],d=p[f],d){c=o.clone(u,!1),c.name=f,c.source=a;for(var m=0;m<d.length;m++)d[m].apply(a,[c])}}}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(5),a=s(0),l=s(1),u=s(4);(function(){i.create=function(h){return a.extend({id:a.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},h)},i.setModified=function(h,f,d,c){if(h.isModified=f,f&&h.cache&&(h.cache.allBodies=null,h.cache.allConstraints=null,h.cache.allComposites=null),d&&h.parent&&i.setModified(h.parent,f,d,c),c)for(var p=0;p<h.composites.length;p++){var g=h.composites[p];i.setModified(g,f,d,c)}},i.add=function(h,f){var d=[].concat(f);o.trigger(h,"beforeAdd",{object:f});for(var c=0;c<d.length;c++){var p=d[c];switch(p.type){case"body":if(p.parent!==p){a.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}i.addBody(h,p);break;case"constraint":i.addConstraint(h,p);break;case"composite":i.addComposite(h,p);break;case"mouseConstraint":i.addConstraint(h,p.constraint);break}}return o.trigger(h,"afterAdd",{object:f}),h},i.remove=function(h,f,d){var c=[].concat(f);o.trigger(h,"beforeRemove",{object:f});for(var p=0;p<c.length;p++){var g=c[p];switch(g.type){case"body":i.removeBody(h,g,d);break;case"constraint":i.removeConstraint(h,g,d);break;case"composite":i.removeComposite(h,g,d);break;case"mouseConstraint":i.removeConstraint(h,g.constraint);break}}return o.trigger(h,"afterRemove",{object:f}),h},i.addComposite=function(h,f){return h.composites.push(f),f.parent=h,i.setModified(h,!0,!0,!1),h},i.removeComposite=function(h,f,d){var c=a.indexOf(h.composites,f);if(c!==-1){var p=i.allBodies(f);i.removeCompositeAt(h,c);for(var g=0;g<p.length;g++)p[g].sleepCounter=0}if(d)for(var g=0;g<h.composites.length;g++)i.removeComposite(h.composites[g],f,!0);return h},i.removeCompositeAt=function(h,f){return h.composites.splice(f,1),i.setModified(h,!0,!0,!1),h},i.addBody=function(h,f){return h.bodies.push(f),i.setModified(h,!0,!0,!1),h},i.removeBody=function(h,f,d){var c=a.indexOf(h.bodies,f);if(c!==-1&&(i.removeBodyAt(h,c),f.sleepCounter=0),d)for(var p=0;p<h.composites.length;p++)i.removeBody(h.composites[p],f,!0);return h},i.removeBodyAt=function(h,f){return h.bodies.splice(f,1),i.setModified(h,!0,!0,!1),h},i.addConstraint=function(h,f){return h.constraints.push(f),i.setModified(h,!0,!0,!1),h},i.removeConstraint=function(h,f,d){var c=a.indexOf(h.constraints,f);if(c!==-1&&i.removeConstraintAt(h,c),d)for(var p=0;p<h.composites.length;p++)i.removeConstraint(h.composites[p],f,!0);return h},i.removeConstraintAt=function(h,f){return h.constraints.splice(f,1),i.setModified(h,!0,!0,!1),h},i.clear=function(h,f,d){if(d)for(var c=0;c<h.composites.length;c++)i.clear(h.composites[c],f,!0);return f?h.bodies=h.bodies.filter(function(p){return p.isStatic}):h.bodies.length=0,h.constraints.length=0,h.composites.length=0,i.setModified(h,!0,!0,!1),h},i.allBodies=function(h){if(h.cache&&h.cache.allBodies)return h.cache.allBodies;for(var f=[].concat(h.bodies),d=0;d<h.composites.length;d++)f=f.concat(i.allBodies(h.composites[d]));return h.cache&&(h.cache.allBodies=f),f},i.allConstraints=function(h){if(h.cache&&h.cache.allConstraints)return h.cache.allConstraints;for(var f=[].concat(h.constraints),d=0;d<h.composites.length;d++)f=f.concat(i.allConstraints(h.composites[d]));return h.cache&&(h.cache.allConstraints=f),f},i.allComposites=function(h){if(h.cache&&h.cache.allComposites)return h.cache.allComposites;for(var f=[].concat(h.composites),d=0;d<h.composites.length;d++)f=f.concat(i.allComposites(h.composites[d]));return h.cache&&(h.cache.allComposites=f),f},i.get=function(h,f,d){var c,p;switch(d){case"body":c=i.allBodies(h);break;case"constraint":c=i.allConstraints(h);break;case"composite":c=i.allComposites(h).concat(h);break}return c?(p=c.filter(function(g){return g.id.toString()===f.toString()}),p.length===0?null:p[0]):null},i.move=function(h,f,d){return i.remove(h,f),i.add(d,f),h},i.rebase=function(h){for(var f=i.allBodies(h).concat(i.allConstraints(h)).concat(i.allComposites(h)),d=0;d<f.length;d++)f[d].id=a.nextId();return h},i.translate=function(h,f,d){for(var c=d?i.allBodies(h):h.bodies,p=0;p<c.length;p++)u.translate(c[p],f);return h},i.rotate=function(h,f,d,c){for(var p=Math.cos(f),g=Math.sin(f),m=c?i.allBodies(h):h.bodies,v=0;v<m.length;v++){var E=m[v],y=E.position.x-d.x,S=E.position.y-d.y;u.setPosition(E,{x:d.x+(y*p-S*g),y:d.y+(y*g+S*p)}),u.rotate(E,f)}return h},i.scale=function(h,f,d,c,p){for(var g=p?i.allBodies(h):h.bodies,m=0;m<g.length;m++){var v=g[m],E=v.position.x-c.x,y=v.position.y-c.y;u.setPosition(v,{x:c.x+E*f,y:c.y+y*d}),u.scale(v,f,d)}return h},i.bounds=function(h){for(var f=i.allBodies(h),d=[],c=0;c<f.length;c+=1){var p=f[c];d.push(p.bounds.min,p.bounds.max)}return l.create(d)}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(4),a=s(5),l=s(0);(function(){i._motionWakeThreshold=.18,i._motionSleepThreshold=.08,i._minBias=.9,i.update=function(u,h){for(var f=h/l._baseDelta,d=i._motionSleepThreshold,c=0;c<u.length;c++){var p=u[c],g=o.getSpeed(p),m=o.getAngularSpeed(p),v=g*g+m*m;if(p.force.x!==0||p.force.y!==0){i.set(p,!1);continue}var E=Math.min(p.motion,v),y=Math.max(p.motion,v);p.motion=i._minBias*E+(1-i._minBias)*y,p.sleepThreshold>0&&p.motion<d?(p.sleepCounter+=1,p.sleepCounter>=p.sleepThreshold/f&&i.set(p,!0)):p.sleepCounter>0&&(p.sleepCounter-=1)}},i.afterCollisions=function(u){for(var h=i._motionSleepThreshold,f=0;f<u.length;f++){var d=u[f];if(d.isActive){var c=d.collision,p=c.bodyA.parent,g=c.bodyB.parent;if(!(p.isSleeping&&g.isSleeping||p.isStatic||g.isStatic)&&(p.isSleeping||g.isSleeping)){var m=p.isSleeping&&!p.isStatic?p:g,v=m===p?g:p;!m.isStatic&&v.motion>h&&i.set(m,!1)}}}},i.set=function(u,h){var f=u.isSleeping;h?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,f||a.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,f&&a.trigger(u,"sleepEnd"))}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(3),a=s(9);(function(){var l=[],u={overlap:0,axis:null},h={overlap:0,axis:null};i.create=function(f,d){return{pair:null,collided:!1,bodyA:f,bodyB:d,parentA:f.parent,parentB:d.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},i.collides=function(f,d,c){if(i._overlapAxes(u,f.vertices,d.vertices,f.axes),u.overlap<=0||(i._overlapAxes(h,d.vertices,f.vertices,d.axes),h.overlap<=0))return null;var p=c&&c.table[a.id(f,d)],g;p?g=p.collision:(g=i.create(f,d),g.collided=!0,g.bodyA=f.id<d.id?f:d,g.bodyB=f.id<d.id?d:f,g.parentA=g.bodyA.parent,g.parentB=g.bodyB.parent),f=g.bodyA,d=g.bodyB;var m;u.overlap<h.overlap?m=u:m=h;var v=g.normal,E=g.tangent,y=g.penetration,S=g.supports,x=m.overlap,M=m.axis,T=M.x,b=M.y,w=d.position.x-f.position.x,_=d.position.y-f.position.y;T*w+b*_>=0&&(T=-T,b=-b),v.x=T,v.y=b,E.x=-b,E.y=T,y.x=T*x,y.y=b*x,g.depth=x;var A=i._findSupports(f,d,v,1),R=0;if(o.contains(f.vertices,A[0])&&(S[R++]=A[0]),o.contains(f.vertices,A[1])&&(S[R++]=A[1]),R<2){var D=i._findSupports(d,f,v,-1);o.contains(d.vertices,D[0])&&(S[R++]=D[0]),R<2&&o.contains(d.vertices,D[1])&&(S[R++]=D[1])}return R===0&&(S[R++]=A[0]),g.supportCount=R,g},i._overlapAxes=function(f,d,c,p){var g=d.length,m=c.length,v=d[0].x,E=d[0].y,y=c[0].x,S=c[0].y,x=p.length,M=Number.MAX_VALUE,T=0,b,w,_,A,R,D;for(R=0;R<x;R++){var N=p[R],U=N.x,B=N.y,O=v*U+E*B,k=y*U+S*B,J=O,se=k;for(D=1;D<g;D+=1)A=d[D].x*U+d[D].y*B,A>J?J=A:A<O&&(O=A);for(D=1;D<m;D+=1)A=c[D].x*U+c[D].y*B,A>se?se=A:A<k&&(k=A);if(w=J-k,_=se-O,b=w<_?w:_,b<M&&(M=b,T=R,b<=0))break}f.axis=p[T],f.overlap=M},i._findSupports=function(f,d,c,p){var g=d.vertices,m=g.length,v=f.position.x,E=f.position.y,y=c.x*p,S=c.y*p,x=g[0],M=x,T=y*(v-M.x)+S*(E-M.y),b,w,_;for(_=1;_<m;_+=1)M=g[_],w=y*(v-M.x)+S*(E-M.y),w<T&&(T=w,x=M);return b=g[(m+x.index-1)%m],T=y*(v-b.x)+S*(E-b.y),M=g[(x.index+1)%m],y*(v-M.x)+S*(E-M.y)<T?(l[0]=x,l[1]=M,l):(l[0]=x,l[1]=b,l)}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(16);(function(){i.create=function(a,l){var u=a.bodyA,h=a.bodyB,f={id:i.id(u,h),bodyA:u,bodyB:h,collision:a,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||h.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return i.update(f,a,l),f},i.update=function(a,l,u){var h=l.supports,f=l.supportCount,d=a.contacts,c=l.parentA,p=l.parentB;a.isActive=!0,a.timeUpdated=u,a.collision=l,a.separation=l.depth,a.inverseMass=c.inverseMass+p.inverseMass,a.friction=c.friction<p.friction?c.friction:p.friction,a.frictionStatic=c.frictionStatic>p.frictionStatic?c.frictionStatic:p.frictionStatic,a.restitution=c.restitution>p.restitution?c.restitution:p.restitution,a.slop=c.slop>p.slop?c.slop:p.slop,a.contactCount=f,l.pair=a;var g=h[0],m=d[0],v=h[1],E=d[1];(E.vertex===g||m.vertex===v)&&(d[1]=m,d[0]=m=E,E=d[1]),m.vertex=g,E.vertex=v},i.setActive=function(a,l,u){l?(a.isActive=!0,a.timeUpdated=u):(a.isActive=!1,a.contactCount=0)},i.id=function(a,l){return a.id<l.id?a.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+a.id.toString(36)}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(3),a=s(2),l=s(7),u=s(1),h=s(11),f=s(0);(function(){i._warming=.4,i._torqueDampen=1,i._minLength=1e-6,i.create=function(d){var c=d;c.bodyA&&!c.pointA&&(c.pointA={x:0,y:0}),c.bodyB&&!c.pointB&&(c.pointB={x:0,y:0});var p=c.bodyA?a.add(c.bodyA.position,c.pointA):c.pointA,g=c.bodyB?a.add(c.bodyB.position,c.pointB):c.pointB,m=a.magnitude(a.sub(p,g));c.length=typeof c.length<"u"?c.length:m,c.id=c.id||f.nextId(),c.label=c.label||"Constraint",c.type="constraint",c.stiffness=c.stiffness||(c.length>0?1:.7),c.damping=c.damping||0,c.angularStiffness=c.angularStiffness||0,c.angleA=c.bodyA?c.bodyA.angle:c.angleA,c.angleB=c.bodyB?c.bodyB.angle:c.angleB,c.plugin={};var v={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return c.length===0&&c.stiffness>.1?(v.type="pin",v.anchors=!1):c.stiffness<.9&&(v.type="spring"),c.render=f.extend(v,c.render),c},i.preSolveAll=function(d){for(var c=0;c<d.length;c+=1){var p=d[c],g=p.constraintImpulse;p.isStatic||g.x===0&&g.y===0&&g.angle===0||(p.position.x+=g.x,p.position.y+=g.y,p.angle+=g.angle)}},i.solveAll=function(d,c){for(var p=f.clamp(c/f._baseDelta,0,1),g=0;g<d.length;g+=1){var m=d[g],v=!m.bodyA||m.bodyA&&m.bodyA.isStatic,E=!m.bodyB||m.bodyB&&m.bodyB.isStatic;(v||E)&&i.solve(d[g],p)}for(g=0;g<d.length;g+=1)m=d[g],v=!m.bodyA||m.bodyA&&m.bodyA.isStatic,E=!m.bodyB||m.bodyB&&m.bodyB.isStatic,!v&&!E&&i.solve(d[g],p)},i.solve=function(d,c){var p=d.bodyA,g=d.bodyB,m=d.pointA,v=d.pointB;if(!(!p&&!g)){p&&!p.isStatic&&(a.rotate(m,p.angle-d.angleA,m),d.angleA=p.angle),g&&!g.isStatic&&(a.rotate(v,g.angle-d.angleB,v),d.angleB=g.angle);var E=m,y=v;if(p&&(E=a.add(p.position,m)),g&&(y=a.add(g.position,v)),!(!E||!y)){var S=a.sub(E,y),x=a.magnitude(S);x<i._minLength&&(x=i._minLength);var M=(x-d.length)/x,T=d.stiffness>=1||d.length===0,b=T?d.stiffness*c:d.stiffness*c*c,w=d.damping*c,_=a.mult(S,M*b),A=(p?p.inverseMass:0)+(g?g.inverseMass:0),R=(p?p.inverseInertia:0)+(g?g.inverseInertia:0),D=A+R,N,U,B,O,k;if(w>0){var J=a.create();B=a.div(S,x),k=a.sub(g&&a.sub(g.position,g.positionPrev)||J,p&&a.sub(p.position,p.positionPrev)||J),O=a.dot(B,k)}p&&!p.isStatic&&(U=p.inverseMass/A,p.constraintImpulse.x-=_.x*U,p.constraintImpulse.y-=_.y*U,p.position.x-=_.x*U,p.position.y-=_.y*U,w>0&&(p.positionPrev.x-=w*B.x*O*U,p.positionPrev.y-=w*B.y*O*U),N=a.cross(m,_)/D*i._torqueDampen*p.inverseInertia*(1-d.angularStiffness),p.constraintImpulse.angle-=N,p.angle-=N),g&&!g.isStatic&&(U=g.inverseMass/A,g.constraintImpulse.x+=_.x*U,g.constraintImpulse.y+=_.y*U,g.position.x+=_.x*U,g.position.y+=_.y*U,w>0&&(g.positionPrev.x+=w*B.x*O*U,g.positionPrev.y+=w*B.y*O*U),N=a.cross(v,_)/D*i._torqueDampen*g.inverseInertia*(1-d.angularStiffness),g.constraintImpulse.angle+=N,g.angle+=N)}}},i.postSolveAll=function(d){for(var c=0;c<d.length;c++){var p=d[c],g=p.constraintImpulse;if(!(p.isStatic||g.x===0&&g.y===0&&g.angle===0)){l.set(p,!1);for(var m=0;m<p.parts.length;m++){var v=p.parts[m];o.translate(v.vertices,g),m>0&&(v.position.x+=g.x,v.position.y+=g.y),g.angle!==0&&(o.rotate(v.vertices,g.angle,p.position),h.rotate(v.axes,g.angle),m>0&&a.rotateAbout(v.position,g.angle,p.position,v.position)),u.update(v.bounds,v.vertices,p.velocity)}g.angle*=i._warming,g.x*=i._warming,g.y*=i._warming}}},i.pointAWorld=function(d){return{x:(d.bodyA?d.bodyA.position.x:0)+(d.pointA?d.pointA.x:0),y:(d.bodyA?d.bodyA.position.y:0)+(d.pointA?d.pointA.y:0)}},i.pointBWorld=function(d){return{x:(d.bodyB?d.bodyB.position.x:0)+(d.pointB?d.pointB.x:0),y:(d.bodyB?d.bodyB.position.y:0)+(d.pointB?d.pointB.y:0)}},i.currentLength=function(d){var c=(d.bodyA?d.bodyA.position.x:0)+(d.pointA?d.pointA.x:0),p=(d.bodyA?d.bodyA.position.y:0)+(d.pointA?d.pointA.y:0),g=(d.bodyB?d.bodyB.position.x:0)+(d.pointB?d.pointB.x:0),m=(d.bodyB?d.bodyB.position.y:0)+(d.pointB?d.pointB.y:0),v=c-g,E=p-m;return Math.sqrt(v*v+E*E)}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(2),a=s(0);(function(){i.fromVertices=function(l){for(var u={},h=0;h<l.length;h++){var f=(h+1)%l.length,d=o.normalise({x:l[f].y-l[h].y,y:l[h].x-l[f].x}),c=d.y===0?1/0:d.x/d.y;c=c.toFixed(3).toString(),u[c]=d}return a.values(u)},i.rotate=function(l,u){if(u!==0)for(var h=Math.cos(u),f=Math.sin(u),d=0;d<l.length;d++){var c=l[d],p;p=c.x*h-c.y*f,c.y=c.x*f+c.y*h,c.x=p}}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(3),a=s(0),l=s(4),u=s(1),h=s(2);(function(){i.rectangle=function(f,d,c,p,g){g=g||{};var m={label:"Rectangle Body",position:{x:f,y:d},vertices:o.fromPath("L 0 0 L "+c+" 0 L "+c+" "+p+" L 0 "+p)};if(g.chamfer){var v=g.chamfer;m.vertices=o.chamfer(m.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete g.chamfer}return l.create(a.extend({},m,g))},i.trapezoid=function(f,d,c,p,g,m){m=m||{},g>=1&&a.warn("Bodies.trapezoid: slope parameter must be < 1."),g*=.5;var v=(1-g*2)*c,E=c*g,y=E+v,S=y+E,x;g<.5?x="L 0 0 L "+E+" "+-p+" L "+y+" "+-p+" L "+S+" 0":x="L 0 0 L "+y+" "+-p+" L "+S+" 0";var M={label:"Trapezoid Body",position:{x:f,y:d},vertices:o.fromPath(x)};if(m.chamfer){var T=m.chamfer;M.vertices=o.chamfer(M.vertices,T.radius,T.quality,T.qualityMin,T.qualityMax),delete m.chamfer}return l.create(a.extend({},M,m))},i.circle=function(f,d,c,p,g){p=p||{};var m={label:"Circle Body",circleRadius:c};g=g||25;var v=Math.ceil(Math.max(10,Math.min(g,c)));return v%2===1&&(v+=1),i.polygon(f,d,v,c,a.extend({},m,p))},i.polygon=function(f,d,c,p,g){if(g=g||{},c<3)return i.circle(f,d,p,g);for(var m=2*Math.PI/c,v="",E=m*.5,y=0;y<c;y+=1){var S=E+y*m,x=Math.cos(S)*p,M=Math.sin(S)*p;v+="L "+x.toFixed(3)+" "+M.toFixed(3)+" "}var T={label:"Polygon Body",position:{x:f,y:d},vertices:o.fromPath(v)};if(g.chamfer){var b=g.chamfer;T.vertices=o.chamfer(T.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete g.chamfer}return l.create(a.extend({},T,g))},i.fromVertices=function(f,d,c,p,g,m,v,E){var y=a.getDecomp(),S,x,M,T,b,w,_,A,R,D,N;for(S=!!(y&&y.quickDecomp),p=p||{},M=[],g=typeof g<"u"?g:!1,m=typeof m<"u"?m:.01,v=typeof v<"u"?v:10,E=typeof E<"u"?E:.01,a.isArray(c[0])||(c=[c]),D=0;D<c.length;D+=1)if(w=c[D],T=o.isConvex(w),b=!T,b&&!S&&a.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),T||!S)T?w=o.clockwiseSort(w):w=o.hull(w),M.push({position:{x:f,y:d},vertices:w});else{var U=w.map(function(W){return[W.x,W.y]});y.makeCCW(U),m!==!1&&y.removeCollinearPoints(U,m),E!==!1&&y.removeDuplicatePoints&&y.removeDuplicatePoints(U,E);var B=y.quickDecomp(U);for(_=0;_<B.length;_++){var O=B[_],k=O.map(function(W){return{x:W[0],y:W[1]}});v>0&&o.area(k)<v||M.push({position:o.centre(k),vertices:k})}}for(_=0;_<M.length;_++)M[_]=l.create(a.extend(M[_],p));if(g){var J=5;for(_=0;_<M.length;_++){var se=M[_];for(A=_+1;A<M.length;A++){var fe=M[A];if(u.overlaps(se.bounds,fe.bounds)){var be=se.vertices,Ue=fe.vertices;for(R=0;R<se.vertices.length;R++)for(N=0;N<fe.vertices.length;N++){var qe=h.magnitudeSquared(h.sub(be[(R+1)%be.length],Ue[N])),ke=h.magnitudeSquared(h.sub(be[R],Ue[(N+1)%Ue.length]));qe<J&&ke<J&&(be[R].isInternal=!0,Ue[N].isInternal=!0)}}}}}return M.length>1?(x=l.create(a.extend({parts:M.slice(0)},p)),l.setPosition(x,{x:f,y:d}),x):M[0]}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(0),a=s(8);(function(){i.create=function(l){var u={bodies:[],collisions:[],pairs:null};return o.extend(u,l)},i.setBodies=function(l,u){l.bodies=u.slice(0)},i.clear=function(l){l.bodies=[],l.collisions=[]},i.collisions=function(l){var u=l.pairs,h=l.bodies,f=h.length,d=i.canCollide,c=a.collides,p=l.collisions,g=0,m,v;for(h.sort(i._compareBoundsX),m=0;m<f;m++){var E=h[m],y=E.bounds,S=E.bounds.max.x,x=E.bounds.max.y,M=E.bounds.min.y,T=E.isStatic||E.isSleeping,b=E.parts.length,w=b===1;for(v=m+1;v<f;v++){var _=h[v],A=_.bounds;if(A.min.x>S)break;if(!(x<A.min.y||M>A.max.y)&&!(T&&(_.isStatic||_.isSleeping))&&d(E.collisionFilter,_.collisionFilter)){var R=_.parts.length;if(w&&R===1){var D=c(E,_,u);D&&(p[g++]=D)}else for(var N=b>1?1:0,U=R>1?1:0,B=N;B<b;B++)for(var O=E.parts[B],y=O.bounds,k=U;k<R;k++){var J=_.parts[k],A=J.bounds;if(!(y.min.x>A.max.x||y.max.x<A.min.x||y.max.y<A.min.y||y.min.y>A.max.y)){var D=c(O,J,u);D&&(p[g++]=D)}}}}}return p.length!==g&&(p.length=g),p},i.canCollide=function(l,u){return l.group===u.group&&l.group!==0?l.group>0:(l.mask&u.category)!==0&&(u.mask&l.category)!==0},i._compareBoundsX=function(l,u){return l.bounds.min.x-u.bounds.min.x}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(0);(function(){i.create=function(a){var l={};return a||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=a||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(u){var h=i._getRelativeMousePosition(u,l.element,l.pixelRatio),f=u.changedTouches;f&&(l.button=0,u.preventDefault()),l.absolute.x=h.x,l.absolute.y=h.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=u},l.mousedown=function(u){var h=i._getRelativeMousePosition(u,l.element,l.pixelRatio),f=u.changedTouches;f?(l.button=0,u.preventDefault()):l.button=u.button,l.absolute.x=h.x,l.absolute.y=h.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=u},l.mouseup=function(u){var h=i._getRelativeMousePosition(u,l.element,l.pixelRatio),f=u.changedTouches;f&&u.preventDefault(),l.button=-1,l.absolute.x=h.x,l.absolute.y=h.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=u},l.mousewheel=function(u){l.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),l.sourceEvents.mousewheel=u},i.setElement(l,l.element),l},i.setElement=function(a,l){a.element=l,l.addEventListener("mousemove",a.mousemove,{passive:!0}),l.addEventListener("mousedown",a.mousedown,{passive:!0}),l.addEventListener("mouseup",a.mouseup,{passive:!0}),l.addEventListener("wheel",a.mousewheel,{passive:!1}),l.addEventListener("touchmove",a.mousemove,{passive:!1}),l.addEventListener("touchstart",a.mousedown,{passive:!1}),l.addEventListener("touchend",a.mouseup,{passive:!1})},i.clearSourceEvents=function(a){a.sourceEvents.mousemove=null,a.sourceEvents.mousedown=null,a.sourceEvents.mouseup=null,a.sourceEvents.mousewheel=null,a.wheelDelta=0},i.setOffset=function(a,l){a.offset.x=l.x,a.offset.y=l.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},i.setScale=function(a,l){a.scale.x=l.x,a.scale.y=l.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},i._getRelativeMousePosition=function(a,l,u){var h=l.getBoundingClientRect(),f=document.documentElement||document.body.parentNode||document.body,d=window.pageXOffset!==void 0?window.pageXOffset:f.scrollLeft,c=window.pageYOffset!==void 0?window.pageYOffset:f.scrollTop,p=a.changedTouches,g,m;return p?(g=p[0].pageX-h.left-d,m=p[0].pageY-h.top-c):(g=a.pageX-h.left-d,m=a.pageY-h.top-c),{x:g/(l.clientWidth/(l.width||l.clientWidth)*u),y:m/(l.clientHeight/(l.height||l.clientHeight)*u)}}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(0);(function(){i._registry={},i.register=function(a){if(i.isPlugin(a)||o.warn("Plugin.register:",i.toString(a),"does not implement all required fields."),a.name in i._registry){var l=i._registry[a.name],u=i.versionParse(a.version).number,h=i.versionParse(l.version).number;u>h?(o.warn("Plugin.register:",i.toString(l),"was upgraded to",i.toString(a)),i._registry[a.name]=a):u<h?o.warn("Plugin.register:",i.toString(l),"can not be downgraded to",i.toString(a)):a!==l&&o.warn("Plugin.register:",i.toString(a),"is already registered to different plugin object")}else i._registry[a.name]=a;return a},i.resolve=function(a){return i._registry[i.dependencyParse(a).name]},i.toString=function(a){return typeof a=="string"?a:(a.name||"anonymous")+"@"+(a.version||a.range||"0.0.0")},i.isPlugin=function(a){return a&&a.name&&a.version&&a.install},i.isUsed=function(a,l){return a.used.indexOf(l)>-1},i.isFor=function(a,l){var u=a.for&&i.dependencyParse(a.for);return!a.for||l.name===u.name&&i.versionSatisfies(l.version,u.range)},i.use=function(a,l){if(a.uses=(a.uses||[]).concat(l||[]),a.uses.length===0){o.warn("Plugin.use:",i.toString(a),"does not specify any dependencies to install.");return}for(var u=i.dependencies(a),h=o.topologicalSort(u),f=[],d=0;d<h.length;d+=1)if(h[d]!==a.name){var c=i.resolve(h[d]);if(!c){f.push("❌ "+h[d]);continue}i.isUsed(a,c.name)||(i.isFor(c,a)||(o.warn("Plugin.use:",i.toString(c),"is for",c.for,"but installed on",i.toString(a)+"."),c._warned=!0),c.install?c.install(a):(o.warn("Plugin.use:",i.toString(c),"does not specify an install function."),c._warned=!0),c._warned?(f.push("🔶 "+i.toString(c)),delete c._warned):f.push("✅ "+i.toString(c)),a.used.push(c.name))}f.length>0&&o.info(f.join("  "))},i.dependencies=function(a,l){var u=i.dependencyParse(a),h=u.name;if(l=l||{},!(h in l)){a=i.resolve(a)||a,l[h]=o.map(a.uses||[],function(d){i.isPlugin(d)&&i.register(d);var c=i.dependencyParse(d),p=i.resolve(d);return p&&!i.versionSatisfies(p.version,c.range)?(o.warn("Plugin.dependencies:",i.toString(p),"does not satisfy",i.toString(c),"used by",i.toString(u)+"."),p._warned=!0,a._warned=!0):p||(o.warn("Plugin.dependencies:",i.toString(d),"used by",i.toString(u),"could not be resolved."),a._warned=!0),c.name});for(var f=0;f<l[h].length;f+=1)i.dependencies(l[h][f],l);return l}},i.dependencyParse=function(a){if(o.isString(a)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(a)||o.warn("Plugin.dependencyParse:",a,"is not a valid dependency string."),{name:a.split("@")[0],range:a.split("@")[1]||"*"}}return{name:a.name,range:a.range||a.version}},i.versionParse=function(a){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(a)||o.warn("Plugin.versionParse:",a,"is not a valid version or range.");var u=l.exec(a),h=Number(u[4]),f=Number(u[5]),d=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:a,operator:u[1]||u[2]||"",major:h,minor:f,patch:d,parts:[h,f,d],prerelease:u[7],number:h*1e8+f*1e4+d}},i.versionSatisfies=function(a,l){l=l||"*";var u=i.versionParse(l),h=i.versionParse(a);if(u.isRange){if(u.operator==="*"||a==="*")return!0;if(u.operator===">")return h.number>u.number;if(u.operator===">=")return h.number>=u.number;if(u.operator==="~")return h.major===u.major&&h.minor===u.minor&&h.patch>=u.patch;if(u.operator==="^")return u.major>0?h.major===u.major&&h.number>=u.number:u.minor>0?h.minor===u.minor&&h.patch>=u.patch:h.patch===u.patch}return a===l||a==="*"}})()}),(function(t,n){var s={};t.exports=s,(function(){s.create=function(i){return{vertex:i,normalImpulse:0,tangentImpulse:0}}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(7),a=s(18),l=s(13),u=s(19),h=s(5),f=s(6),d=s(10),c=s(0),p=s(4);(function(){i._deltaMax=1e3/60,i.create=function(g){g=g||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},v=c.extend(m,g);return v.world=g.world||f.create({label:"World"}),v.pairs=g.pairs||u.create(),v.detector=g.detector||l.create(),v.detector.pairs=v.pairs,v.grid={buckets:[]},v.world.gravity=v.gravity,v.broadphase=v.grid,v.metrics={},v},i.update=function(g,m){var v=c.now(),E=g.world,y=g.detector,S=g.pairs,x=g.timing,M=x.timestamp,T;m>i._deltaMax&&c.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",i._deltaMax.toFixed(3),"ms."),m=typeof m<"u"?m:c._baseDelta,m*=x.timeScale,x.timestamp+=m,x.lastDelta=m;var b={timestamp:x.timestamp,delta:m};h.trigger(g,"beforeUpdate",b);var w=f.allBodies(E),_=f.allConstraints(E);for(E.isModified&&(l.setBodies(y,w),f.setModified(E,!1,!1,!0)),g.enableSleeping&&o.update(w,m),i._bodiesApplyGravity(w,g.gravity),m>0&&i._bodiesUpdate(w,m),h.trigger(g,"beforeSolve",b),d.preSolveAll(w),T=0;T<g.constraintIterations;T++)d.solveAll(_,m);d.postSolveAll(w);var A=l.collisions(y);u.update(S,A,M),g.enableSleeping&&o.afterCollisions(S.list),S.collisionStart.length>0&&h.trigger(g,"collisionStart",{pairs:S.collisionStart,timestamp:x.timestamp,delta:m});var R=c.clamp(20/g.positionIterations,0,1);for(a.preSolvePosition(S.list),T=0;T<g.positionIterations;T++)a.solvePosition(S.list,m,R);for(a.postSolvePosition(w),d.preSolveAll(w),T=0;T<g.constraintIterations;T++)d.solveAll(_,m);for(d.postSolveAll(w),a.preSolveVelocity(S.list),T=0;T<g.velocityIterations;T++)a.solveVelocity(S.list,m);return i._bodiesUpdateVelocities(w),S.collisionActive.length>0&&h.trigger(g,"collisionActive",{pairs:S.collisionActive,timestamp:x.timestamp,delta:m}),S.collisionEnd.length>0&&h.trigger(g,"collisionEnd",{pairs:S.collisionEnd,timestamp:x.timestamp,delta:m}),i._bodiesClearForces(w),h.trigger(g,"afterUpdate",b),g.timing.lastElapsed=c.now()-v,g},i.merge=function(g,m){if(c.extend(g,m),m.world){g.world=m.world,i.clear(g);for(var v=f.allBodies(g.world),E=0;E<v.length;E++){var y=v[E];o.set(y,!1),y.id=c.nextId()}}},i.clear=function(g){u.clear(g.pairs),l.clear(g.detector)},i._bodiesClearForces=function(g){for(var m=g.length,v=0;v<m;v++){var E=g[v];E.force.x=0,E.force.y=0,E.torque=0}},i._bodiesApplyGravity=function(g,m){var v=typeof m.scale<"u"?m.scale:.001,E=g.length;if(!(m.x===0&&m.y===0||v===0))for(var y=0;y<E;y++){var S=g[y];S.isStatic||S.isSleeping||(S.force.y+=S.mass*m.y*v,S.force.x+=S.mass*m.x*v)}},i._bodiesUpdate=function(g,m){for(var v=g.length,E=0;E<v;E++){var y=g[E];y.isStatic||y.isSleeping||p.update(y,m)}},i._bodiesUpdateVelocities=function(g){for(var m=g.length,v=0;v<m;v++)p.updateVelocities(g[v])}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(3),a=s(0),l=s(1);(function(){i._restingThresh=2,i._restingThreshTangent=Math.sqrt(6),i._positionDampen=.9,i._positionWarming=.8,i._frictionNormalMultiplier=5,i._frictionMaxStatic=Number.MAX_VALUE,i.preSolvePosition=function(u){var h,f,d,c=u.length;for(h=0;h<c;h++)f=u[h],f.isActive&&(d=f.contactCount,f.collision.parentA.totalContacts+=d,f.collision.parentB.totalContacts+=d)},i.solvePosition=function(u,h,f){var d,c,p,g,m,v,E,y,S=i._positionDampen*(f||1),x=a.clamp(h/a._baseDelta,0,1),M=u.length;for(d=0;d<M;d++)c=u[d],!(!c.isActive||c.isSensor)&&(p=c.collision,g=p.parentA,m=p.parentB,v=p.normal,c.separation=p.depth+v.x*(m.positionImpulse.x-g.positionImpulse.x)+v.y*(m.positionImpulse.y-g.positionImpulse.y));for(d=0;d<M;d++)c=u[d],!(!c.isActive||c.isSensor)&&(p=c.collision,g=p.parentA,m=p.parentB,v=p.normal,y=c.separation-c.slop*x,(g.isStatic||m.isStatic)&&(y*=2),g.isStatic||g.isSleeping||(E=S/g.totalContacts,g.positionImpulse.x+=v.x*y*E,g.positionImpulse.y+=v.y*y*E),m.isStatic||m.isSleeping||(E=S/m.totalContacts,m.positionImpulse.x-=v.x*y*E,m.positionImpulse.y-=v.y*y*E))},i.postSolvePosition=function(u){for(var h=i._positionWarming,f=u.length,d=o.translate,c=l.update,p=0;p<f;p++){var g=u[p],m=g.positionImpulse,v=m.x,E=m.y,y=g.velocity;if(g.totalContacts=0,v!==0||E!==0){for(var S=0;S<g.parts.length;S++){var x=g.parts[S];d(x.vertices,m),c(x.bounds,x.vertices,y),x.position.x+=v,x.position.y+=E}g.positionPrev.x+=v,g.positionPrev.y+=E,v*y.x+E*y.y<0?(m.x=0,m.y=0):(m.x*=h,m.y*=h)}}},i.preSolveVelocity=function(u){var h=u.length,f,d;for(f=0;f<h;f++){var c=u[f];if(!(!c.isActive||c.isSensor)){var p=c.contacts,g=c.contactCount,m=c.collision,v=m.parentA,E=m.parentB,y=m.normal,S=m.tangent;for(d=0;d<g;d++){var x=p[d],M=x.vertex,T=x.normalImpulse,b=x.tangentImpulse;if(T!==0||b!==0){var w=y.x*T+S.x*b,_=y.y*T+S.y*b;v.isStatic||v.isSleeping||(v.positionPrev.x+=w*v.inverseMass,v.positionPrev.y+=_*v.inverseMass,v.anglePrev+=v.inverseInertia*((M.x-v.position.x)*_-(M.y-v.position.y)*w)),E.isStatic||E.isSleeping||(E.positionPrev.x-=w*E.inverseMass,E.positionPrev.y-=_*E.inverseMass,E.anglePrev-=E.inverseInertia*((M.x-E.position.x)*_-(M.y-E.position.y)*w))}}}}},i.solveVelocity=function(u,h){var f=h/a._baseDelta,d=f*f,c=d*f,p=-i._restingThresh*f,g=i._restingThreshTangent,m=i._frictionNormalMultiplier*f,v=i._frictionMaxStatic,E=u.length,y,S,x,M;for(x=0;x<E;x++){var T=u[x];if(!(!T.isActive||T.isSensor)){var b=T.collision,w=b.parentA,_=b.parentB,A=b.normal.x,R=b.normal.y,D=b.tangent.x,N=b.tangent.y,U=T.inverseMass,B=T.friction*T.frictionStatic*m,O=T.contacts,k=T.contactCount,J=1/k,se=w.position.x-w.positionPrev.x,fe=w.position.y-w.positionPrev.y,be=w.angle-w.anglePrev,Ue=_.position.x-_.positionPrev.x,qe=_.position.y-_.positionPrev.y,ke=_.angle-_.anglePrev;for(M=0;M<k;M++){var W=O[M],j=W.vertex,de=j.x-w.position.x,we=j.y-w.position.y,_e=j.x-_.position.x,Oe=j.y-_.position.y,Ve=se-we*be,I=fe+de*be,ne=Ue-Oe*ke,Q=qe+_e*ke,K=Ve-ne,Z=I-Q,he=A*K+R*Z,ie=D*K+N*Z,ue=T.separation+he,He=Math.min(ue,1);He=ue<0?0:He;var Fe=He*B;ie<-Fe||ie>Fe?(S=ie>0?ie:-ie,y=T.friction*(ie>0?1:-1)*c,y<-S?y=-S:y>S&&(y=S)):(y=ie,S=v);var L=de*R-we*A,C=_e*R-Oe*A,V=J/(U+w.inverseInertia*L*L+_.inverseInertia*C*C),q=(1+T.restitution)*he*V;if(y*=V,he<p)W.normalImpulse=0;else{var te=W.normalImpulse;W.normalImpulse+=q,W.normalImpulse>0&&(W.normalImpulse=0),q=W.normalImpulse-te}if(ie<-g||ie>g)W.tangentImpulse=0;else{var $=W.tangentImpulse;W.tangentImpulse+=y,W.tangentImpulse<-S&&(W.tangentImpulse=-S),W.tangentImpulse>S&&(W.tangentImpulse=S),y=W.tangentImpulse-$}var Me=A*q+D*y,le=R*q+N*y;w.isStatic||w.isSleeping||(w.positionPrev.x+=Me*w.inverseMass,w.positionPrev.y+=le*w.inverseMass,w.anglePrev+=(de*le-we*Me)*w.inverseInertia),_.isStatic||_.isSleeping||(_.positionPrev.x-=Me*_.inverseMass,_.positionPrev.y-=le*_.inverseMass,_.anglePrev-=(_e*le-Oe*Me)*_.inverseInertia)}}}}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(9),a=s(0);(function(){i.create=function(l){return a.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},i.update=function(l,u,h){var f=o.update,d=o.create,c=o.setActive,p=l.table,g=l.list,m=g.length,v=m,E=l.collisionStart,y=l.collisionEnd,S=l.collisionActive,x=u.length,M=0,T=0,b=0,w,_,A;for(A=0;A<x;A++)w=u[A],_=w.pair,_?(_.isActive&&(S[b++]=_),f(_,w,h)):(_=d(w,h),p[_.id]=_,E[M++]=_,g[v++]=_);for(v=0,m=g.length,A=0;A<m;A++)_=g[A],_.timeUpdated>=h?g[v++]=_:(c(_,!1,h),_.collision.bodyA.sleepCounter>0&&_.collision.bodyB.sleepCounter>0?g[v++]=_:(y[T++]=_,delete p[_.id]));g.length!==v&&(g.length=v),E.length!==M&&(E.length=M),y.length!==T&&(y.length=T),S.length!==b&&(S.length=b)},i.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()}),(function(t,n,s){var i=t.exports=s(21);i.Axes=s(11),i.Bodies=s(12),i.Body=s(4),i.Bounds=s(1),i.Collision=s(8),i.Common=s(0),i.Composite=s(6),i.Composites=s(22),i.Constraint=s(10),i.Contact=s(16),i.Detector=s(13),i.Engine=s(17),i.Events=s(5),i.Grid=s(23),i.Mouse=s(14),i.MouseConstraint=s(24),i.Pair=s(9),i.Pairs=s(19),i.Plugin=s(15),i.Query=s(25),i.Render=s(26),i.Resolver=s(18),i.Runner=s(27),i.SAT=s(28),i.Sleeping=s(7),i.Svg=s(29),i.Vector=s(2),i.Vertices=s(3),i.World=s(30),i.Engine.run=i.Runner.run,i.Common.deprecated(i.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")}),(function(t,n,s){var i={};t.exports=i;var o=s(15),a=s(0);(function(){i.name="matter-js",i.version="0.20.0",i.uses=[],i.used=[],i.use=function(){o.use(i,Array.prototype.slice.call(arguments))},i.before=function(l,u){return l=l.replace(/^Matter./,""),a.chainPathBefore(i,l,u)},i.after=function(l,u){return l=l.replace(/^Matter./,""),a.chainPathAfter(i,l,u)}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(6),a=s(10),l=s(0),u=s(4),h=s(12),f=l.deprecated;(function(){i.stack=function(d,c,p,g,m,v,E){for(var y=o.create({label:"Stack"}),S=d,x=c,M,T=0,b=0;b<g;b++){for(var w=0,_=0;_<p;_++){var A=E(S,x,_,b,M,T);if(A){var R=A.bounds.max.y-A.bounds.min.y,D=A.bounds.max.x-A.bounds.min.x;R>w&&(w=R),u.translate(A,{x:D*.5,y:R*.5}),S=A.bounds.max.x+m,o.addBody(y,A),M=A,T+=1}else S+=m}x+=w+v,S=d}return y},i.chain=function(d,c,p,g,m,v){for(var E=d.bodies,y=1;y<E.length;y++){var S=E[y-1],x=E[y],M=S.bounds.max.y-S.bounds.min.y,T=S.bounds.max.x-S.bounds.min.x,b=x.bounds.max.y-x.bounds.min.y,w=x.bounds.max.x-x.bounds.min.x,_={bodyA:S,pointA:{x:T*c,y:M*p},bodyB:x,pointB:{x:w*g,y:b*m}},A=l.extend(_,v);o.addConstraint(d,a.create(A))}return d.label+=" Chain",d},i.mesh=function(d,c,p,g,m){var v=d.bodies,E,y,S,x,M;for(E=0;E<p;E++){for(y=1;y<c;y++)S=v[y-1+E*c],x=v[y+E*c],o.addConstraint(d,a.create(l.extend({bodyA:S,bodyB:x},m)));if(E>0)for(y=0;y<c;y++)S=v[y+(E-1)*c],x=v[y+E*c],o.addConstraint(d,a.create(l.extend({bodyA:S,bodyB:x},m))),g&&y>0&&(M=v[y-1+(E-1)*c],o.addConstraint(d,a.create(l.extend({bodyA:M,bodyB:x},m)))),g&&y<c-1&&(M=v[y+1+(E-1)*c],o.addConstraint(d,a.create(l.extend({bodyA:M,bodyB:x},m))))}return d.label+=" Mesh",d},i.pyramid=function(d,c,p,g,m,v,E){return i.stack(d,c,p,g,m,v,function(y,S,x,M,T,b){var w=Math.min(g,Math.ceil(p/2)),_=T?T.bounds.max.x-T.bounds.min.x:0;if(!(M>w)){M=w-M;var A=M,R=p-1-M;if(!(x<A||x>R)){b===1&&u.translate(T,{x:(x+(p%2===1?1:-1))*_,y:0});var D=T?x*_:0;return E(d+D+x*m,S,x,M,T,b)}}})},i.newtonsCradle=function(d,c,p,g,m){for(var v=o.create({label:"Newtons Cradle"}),E=0;E<p;E++){var y=1.9,S=h.circle(d+E*(g*y),c+m,g,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),x=a.create({pointA:{x:d+E*(g*y),y:c},bodyB:S});o.addBody(v,S),o.addConstraint(v,x)}return v},f(i,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),i.car=function(d,c,p,g,m){var v=u.nextGroup(!0),E=20,y=-p*.5+E,S=p*.5-E,x=0,M=o.create({label:"Car"}),T=h.rectangle(d,c,p,g,{collisionFilter:{group:v},chamfer:{radius:g*.5},density:2e-4}),b=h.circle(d+y,c+x,m,{collisionFilter:{group:v},friction:.8}),w=h.circle(d+S,c+x,m,{collisionFilter:{group:v},friction:.8}),_=a.create({bodyB:T,pointB:{x:y,y:x},bodyA:b,stiffness:1,length:0}),A=a.create({bodyB:T,pointB:{x:S,y:x},bodyA:w,stiffness:1,length:0});return o.addBody(M,T),o.addBody(M,b),o.addBody(M,w),o.addConstraint(M,_),o.addConstraint(M,A),M},f(i,"car","Composites.car ➤ moved to car example"),i.softBody=function(d,c,p,g,m,v,E,y,S,x){S=l.extend({inertia:1/0},S),x=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},x);var M=i.stack(d,c,p,g,m,v,function(T,b){return h.circle(T,b,y,S)});return i.mesh(M,p,g,E,x),M.label="Soft Body",M},f(i,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()}),(function(t,n,s){var i={};t.exports=i;var o=s(9),a=s(0),l=a.deprecated;(function(){i.create=function(u){var h={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return a.extend(h,u)},i.update=function(u,h,f,d){var c,p,g,m=f.world,v=u.buckets,E,y,S=!1;for(c=0;c<h.length;c++){var x=h[c];if(!(x.isSleeping&&!d)&&!(m.bounds&&(x.bounds.max.x<m.bounds.min.x||x.bounds.min.x>m.bounds.max.x||x.bounds.max.y<m.bounds.min.y||x.bounds.min.y>m.bounds.max.y))){var M=i._getRegion(u,x);if(!x.region||M.id!==x.region.id||d){(!x.region||d)&&(x.region=M);var T=i._regionUnion(M,x.region);for(p=T.startCol;p<=T.endCol;p++)for(g=T.startRow;g<=T.endRow;g++){y=i._getBucketId(p,g),E=v[y];var b=p>=M.startCol&&p<=M.endCol&&g>=M.startRow&&g<=M.endRow,w=p>=x.region.startCol&&p<=x.region.endCol&&g>=x.region.startRow&&g<=x.region.endRow;!b&&w&&w&&E&&i._bucketRemoveBody(u,E,x),(x.region===M||b&&!w||d)&&(E||(E=i._createBucket(v,y)),i._bucketAddBody(u,E,x))}x.region=M,S=!0}}}S&&(u.pairsList=i._createActivePairsList(u))},l(i,"update","Grid.update ➤ replaced by Matter.Detector"),i.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},l(i,"clear","Grid.clear ➤ replaced by Matter.Detector"),i._regionUnion=function(u,h){var f=Math.min(u.startCol,h.startCol),d=Math.max(u.endCol,h.endCol),c=Math.min(u.startRow,h.startRow),p=Math.max(u.endRow,h.endRow);return i._createRegion(f,d,c,p)},i._getRegion=function(u,h){var f=h.bounds,d=Math.floor(f.min.x/u.bucketWidth),c=Math.floor(f.max.x/u.bucketWidth),p=Math.floor(f.min.y/u.bucketHeight),g=Math.floor(f.max.y/u.bucketHeight);return i._createRegion(d,c,p,g)},i._createRegion=function(u,h,f,d){return{id:u+","+h+","+f+","+d,startCol:u,endCol:h,startRow:f,endRow:d}},i._getBucketId=function(u,h){return"C"+u+"R"+h},i._createBucket=function(u,h){var f=u[h]=[];return f},i._bucketAddBody=function(u,h,f){var d=u.pairs,c=o.id,p=h.length,g;for(g=0;g<p;g++){var m=h[g];if(!(f.id===m.id||f.isStatic&&m.isStatic)){var v=c(f,m),E=d[v];E?E[2]+=1:d[v]=[f,m,1]}}h.push(f)},i._bucketRemoveBody=function(u,h,f){var d=u.pairs,c=o.id,p;h.splice(a.indexOf(h,f),1);var g=h.length;for(p=0;p<g;p++){var m=d[c(f,h[p])];m&&(m[2]-=1)}},i._createActivePairsList=function(u){var h,f=u.pairs,d=a.keys(f),c=d.length,p=[],g;for(g=0;g<c;g++)h=f[d[g]],h[2]>0?p.push(h):delete f[d[g]];return p}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(3),a=s(7),l=s(14),u=s(5),h=s(13),f=s(10),d=s(6),c=s(0),p=s(1);(function(){i.create=function(g,m){var v=(g?g.mouse:null)||(m?m.mouse:null);v||(g&&g.render&&g.render.canvas?v=l.create(g.render.canvas):m&&m.element?v=l.create(m.element):(v=l.create(),c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var E=f.create({label:"Mouse Constraint",pointA:v.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),y={type:"mouseConstraint",mouse:v,element:null,body:null,constraint:E,collisionFilter:{category:1,mask:4294967295,group:0}},S=c.extend(y,m);return u.on(g,"beforeUpdate",function(){var x=d.allBodies(g.world);i.update(S,x),i._triggerEvents(S)}),S},i.update=function(g,m){var v=g.mouse,E=g.constraint,y=g.body;if(v.button===0){if(E.bodyB)a.set(E.bodyB,!1),E.pointA=v.position;else for(var S=0;S<m.length;S++)if(y=m[S],p.contains(y.bounds,v.position)&&h.canCollide(y.collisionFilter,g.collisionFilter))for(var x=y.parts.length>1?1:0;x<y.parts.length;x++){var M=y.parts[x];if(o.contains(M.vertices,v.position)){E.pointA=v.position,E.bodyB=g.body=y,E.pointB={x:v.position.x-y.position.x,y:v.position.y-y.position.y},E.angleB=y.angle,a.set(y,!1),u.trigger(g,"startdrag",{mouse:v,body:y});break}}}else E.bodyB=g.body=null,E.pointB=null,y&&u.trigger(g,"enddrag",{mouse:v,body:y})},i._triggerEvents=function(g){var m=g.mouse,v=m.sourceEvents;v.mousemove&&u.trigger(g,"mousemove",{mouse:m}),v.mousedown&&u.trigger(g,"mousedown",{mouse:m}),v.mouseup&&u.trigger(g,"mouseup",{mouse:m}),l.clearSourceEvents(m)}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(2),a=s(8),l=s(1),u=s(12),h=s(3);(function(){i.collides=function(f,d){for(var c=[],p=d.length,g=f.bounds,m=a.collides,v=l.overlaps,E=0;E<p;E++){var y=d[E],S=y.parts.length,x=S===1?0:1;if(v(y.bounds,g))for(var M=x;M<S;M++){var T=y.parts[M];if(v(T.bounds,g)){var b=m(T,f);if(b){c.push(b);break}}}}return c},i.ray=function(f,d,c,p){p=p||1e-100;for(var g=o.angle(d,c),m=o.magnitude(o.sub(d,c)),v=(c.x+d.x)*.5,E=(c.y+d.y)*.5,y=u.rectangle(v,E,m,p,{angle:g}),S=i.collides(y,f),x=0;x<S.length;x+=1){var M=S[x];M.body=M.bodyB=M.bodyA}return S},i.region=function(f,d,c){for(var p=[],g=0;g<f.length;g++){var m=f[g],v=l.overlaps(m.bounds,d);(v&&!c||!v&&c)&&p.push(m)}return p},i.point=function(f,d){for(var c=[],p=0;p<f.length;p++){var g=f[p];if(l.contains(g.bounds,d))for(var m=g.parts.length===1?0:1;m<g.parts.length;m++){var v=g.parts[m];if(l.contains(v.bounds,d)&&h.contains(v.vertices,d)){c.push(g);break}}}return c}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(4),a=s(0),l=s(6),u=s(1),h=s(5),f=s(2),d=s(14);(function(){var c,p;typeof window<"u"&&(c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(x){window.setTimeout(function(){x(a.now())},1e3/60)},p=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i._goodFps=30,i._goodDelta=1e3/60,i.create=function(x){var M={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!x.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},T=a.extend(M,x);return T.canvas&&(T.canvas.width=T.options.width||T.canvas.width,T.canvas.height=T.options.height||T.canvas.height),T.mouse=x.mouse,T.engine=x.engine,T.canvas=T.canvas||v(T.options.width,T.options.height),T.context=T.canvas.getContext("2d"),T.textures={},T.bounds=T.bounds||{min:{x:0,y:0},max:{x:T.canvas.width,y:T.canvas.height}},T.controller=i,T.options.showBroadphase=!1,T.options.pixelRatio!==1&&i.setPixelRatio(T,T.options.pixelRatio),a.isElement(T.element)&&T.element.appendChild(T.canvas),T},i.run=function(x){(function M(T){x.frameRequestId=c(M),g(x,T),i.world(x,T),x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0),(x.options.showStats||x.options.showDebug)&&i.stats(x,x.context,T),(x.options.showPerformance||x.options.showDebug)&&i.performance(x,x.context,T),x.context.setTransform(1,0,0,1,0,0)})()},i.stop=function(x){p(x.frameRequestId)},i.setPixelRatio=function(x,M){var T=x.options,b=x.canvas;M==="auto"&&(M=E(b)),T.pixelRatio=M,b.setAttribute("data-pixel-ratio",M),b.width=T.width*M,b.height=T.height*M,b.style.width=T.width+"px",b.style.height=T.height+"px"},i.setSize=function(x,M,T){x.options.width=M,x.options.height=T,x.bounds.max.x=x.bounds.min.x+M,x.bounds.max.y=x.bounds.min.y+T,x.options.pixelRatio!==1?i.setPixelRatio(x,x.options.pixelRatio):(x.canvas.width=M,x.canvas.height=T)},i.lookAt=function(x,M,T,b){b=typeof b<"u"?b:!0,M=a.isArray(M)?M:[M],T=T||{x:0,y:0};for(var w={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},_=0;_<M.length;_+=1){var A=M[_],R=A.bounds?A.bounds.min:A.min||A.position||A,D=A.bounds?A.bounds.max:A.max||A.position||A;R&&D&&(R.x<w.min.x&&(w.min.x=R.x),D.x>w.max.x&&(w.max.x=D.x),R.y<w.min.y&&(w.min.y=R.y),D.y>w.max.y&&(w.max.y=D.y))}var N=w.max.x-w.min.x+2*T.x,U=w.max.y-w.min.y+2*T.y,B=x.canvas.height,O=x.canvas.width,k=O/B,J=N/U,se=1,fe=1;J>k?fe=J/k:se=k/J,x.options.hasBounds=!0,x.bounds.min.x=w.min.x,x.bounds.max.x=w.min.x+N*se,x.bounds.min.y=w.min.y,x.bounds.max.y=w.min.y+U*fe,b&&(x.bounds.min.x+=N*.5-N*se*.5,x.bounds.max.x+=N*.5-N*se*.5,x.bounds.min.y+=U*.5-U*fe*.5,x.bounds.max.y+=U*.5-U*fe*.5),x.bounds.min.x-=T.x,x.bounds.max.x-=T.x,x.bounds.min.y-=T.y,x.bounds.max.y-=T.y,x.mouse&&(d.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.canvas.width,y:(x.bounds.max.y-x.bounds.min.y)/x.canvas.height}),d.setOffset(x.mouse,x.bounds.min))},i.startViewTransform=function(x){var M=x.bounds.max.x-x.bounds.min.x,T=x.bounds.max.y-x.bounds.min.y,b=M/x.options.width,w=T/x.options.height;x.context.setTransform(x.options.pixelRatio/b,0,0,x.options.pixelRatio/w,0,0),x.context.translate(-x.bounds.min.x,-x.bounds.min.y)},i.endViewTransform=function(x){x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0)},i.world=function(x,M){var T=a.now(),b=x.engine,w=b.world,_=x.canvas,A=x.context,R=x.options,D=x.timing,N=l.allBodies(w),U=l.allConstraints(w),B=R.wireframes?R.wireframeBackground:R.background,O=[],k=[],J,se={timestamp:b.timing.timestamp};if(h.trigger(x,"beforeRender",se),x.currentBackground!==B&&S(x,B),A.globalCompositeOperation="source-in",A.fillStyle="transparent",A.fillRect(0,0,_.width,_.height),A.globalCompositeOperation="source-over",R.hasBounds){for(J=0;J<N.length;J++){var fe=N[J];u.overlaps(fe.bounds,x.bounds)&&O.push(fe)}for(J=0;J<U.length;J++){var be=U[J],Ue=be.bodyA,qe=be.bodyB,ke=be.pointA,W=be.pointB;Ue&&(ke=f.add(Ue.position,be.pointA)),qe&&(W=f.add(qe.position,be.pointB)),!(!ke||!W)&&(u.contains(x.bounds,ke)||u.contains(x.bounds,W))&&k.push(be)}i.startViewTransform(x),x.mouse&&(d.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.options.width,y:(x.bounds.max.y-x.bounds.min.y)/x.options.height}),d.setOffset(x.mouse,x.bounds.min))}else k=U,O=N,x.options.pixelRatio!==1&&x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0);!R.wireframes||b.enableSleeping&&R.showSleeping?i.bodies(x,O,A):(R.showConvexHulls&&i.bodyConvexHulls(x,O,A),i.bodyWireframes(x,O,A)),R.showBounds&&i.bodyBounds(x,O,A),(R.showAxes||R.showAngleIndicator)&&i.bodyAxes(x,O,A),R.showPositions&&i.bodyPositions(x,O,A),R.showVelocity&&i.bodyVelocity(x,O,A),R.showIds&&i.bodyIds(x,O,A),R.showSeparations&&i.separations(x,b.pairs.list,A),R.showCollisions&&i.collisions(x,b.pairs.list,A),R.showVertexNumbers&&i.vertexNumbers(x,O,A),R.showMousePosition&&i.mousePosition(x,x.mouse,A),i.constraints(k,A),R.hasBounds&&i.endViewTransform(x),h.trigger(x,"afterRender",se),D.lastElapsed=a.now()-T},i.stats=function(x,M,T){for(var b=x.engine,w=b.world,_=l.allBodies(w),A=0,R=55,D=44,N=0,U=0,B=0;B<_.length;B+=1)A+=_[B].parts.length;var O={Part:A,Body:_.length,Cons:l.allConstraints(w).length,Comp:l.allComposites(w).length,Pair:b.pairs.list.length};M.fillStyle="#0e0f19",M.fillRect(N,U,R*5.5,D),M.font="12px Arial",M.textBaseline="top",M.textAlign="right";for(var k in O){var J=O[k];M.fillStyle="#aaa",M.fillText(k,N+R,U+8),M.fillStyle="#eee",M.fillText(J,N+R,U+26),N+=R}},i.performance=function(x,M){var T=x.engine,b=x.timing,w=b.deltaHistory,_=b.elapsedHistory,A=b.timestampElapsedHistory,R=b.engineDeltaHistory,D=b.engineUpdatesHistory,N=b.engineElapsedHistory,U=T.timing.lastUpdatesPerFrame,B=T.timing.lastDelta,O=m(w),k=m(_),J=m(R),se=m(D),fe=m(N),be=m(A),Ue=be/O||0,qe=Math.round(O/B),ke=1e3/O||0,W=4,j=12,de=60,we=34,_e=10,Oe=69;M.fillStyle="#0e0f19",M.fillRect(0,50,j*5+de*6+22,we),i.status(M,_e,Oe,de,W,w.length,Math.round(ke)+" fps",ke/i._goodFps,function(Ve){return w[Ve]/O-1}),i.status(M,_e+j+de,Oe,de,W,R.length,B.toFixed(2)+" dt",i._goodDelta/B,function(Ve){return R[Ve]/J-1}),i.status(M,_e+(j+de)*2,Oe,de,W,D.length,U+" upf",Math.pow(a.clamp(se/qe||1,0,1),4),function(Ve){return D[Ve]/se-1}),i.status(M,_e+(j+de)*3,Oe,de,W,N.length,fe.toFixed(2)+" ut",1-U*fe/i._goodFps,function(Ve){return N[Ve]/fe-1}),i.status(M,_e+(j+de)*4,Oe,de,W,_.length,k.toFixed(2)+" rt",1-k/i._goodFps,function(Ve){return _[Ve]/k-1}),i.status(M,_e+(j+de)*5,Oe,de,W,A.length,Ue.toFixed(2)+" x",Ue*Ue*Ue,function(Ve){return(A[Ve]/w[Ve]/Ue||0)-1})},i.status=function(x,M,T,b,w,_,A,R,D){x.strokeStyle="#888",x.fillStyle="#444",x.lineWidth=1,x.fillRect(M,T+7,b,1),x.beginPath(),x.moveTo(M,T+7-w*a.clamp(.4*D(0),-2,2));for(var N=0;N<b;N+=1)x.lineTo(M+N,T+7-(N<_?w*a.clamp(.4*D(N),-2,2):0));x.stroke(),x.fillStyle="hsl("+a.clamp(25+95*R,0,120)+",100%,60%)",x.fillRect(M,T-7,4,4),x.font="12px Arial",x.textBaseline="middle",x.textAlign="right",x.fillStyle="#eee",x.fillText(A,M+b,T-5)},i.constraints=function(x,M){for(var T=M,b=0;b<x.length;b++){var w=x[b];if(!(!w.render.visible||!w.pointA||!w.pointB)){var _=w.bodyA,A=w.bodyB,R,D;if(_?R=f.add(_.position,w.pointA):R=w.pointA,w.render.type==="pin")T.beginPath(),T.arc(R.x,R.y,3,0,2*Math.PI),T.closePath();else{if(A?D=f.add(A.position,w.pointB):D=w.pointB,T.beginPath(),T.moveTo(R.x,R.y),w.render.type==="spring")for(var N=f.sub(D,R),U=f.perp(f.normalise(N)),B=Math.ceil(a.clamp(w.length/5,12,20)),O,k=1;k<B;k+=1)O=k%2===0?1:-1,T.lineTo(R.x+N.x*(k/B)+U.x*O*4,R.y+N.y*(k/B)+U.y*O*4);T.lineTo(D.x,D.y)}w.render.lineWidth&&(T.lineWidth=w.render.lineWidth,T.strokeStyle=w.render.strokeStyle,T.stroke()),w.render.anchors&&(T.fillStyle=w.render.strokeStyle,T.beginPath(),T.arc(R.x,R.y,3,0,2*Math.PI),T.arc(D.x,D.y,3,0,2*Math.PI),T.closePath(),T.fill())}}},i.bodies=function(x,M,T){var b=T;x.engine;var w=x.options,_=w.showInternalEdges||!w.wireframes,A,R,D,N;for(D=0;D<M.length;D++)if(A=M[D],!!A.render.visible){for(N=A.parts.length>1?1:0;N<A.parts.length;N++)if(R=A.parts[N],!!R.render.visible){if(w.showSleeping&&A.isSleeping?b.globalAlpha=.5*R.render.opacity:R.render.opacity!==1&&(b.globalAlpha=R.render.opacity),R.render.sprite&&R.render.sprite.texture&&!w.wireframes){var U=R.render.sprite,B=y(x,U.texture);b.translate(R.position.x,R.position.y),b.rotate(R.angle),b.drawImage(B,B.width*-U.xOffset*U.xScale,B.height*-U.yOffset*U.yScale,B.width*U.xScale,B.height*U.yScale),b.rotate(-R.angle),b.translate(-R.position.x,-R.position.y)}else{if(R.circleRadius)b.beginPath(),b.arc(R.position.x,R.position.y,R.circleRadius,0,2*Math.PI);else{b.beginPath(),b.moveTo(R.vertices[0].x,R.vertices[0].y);for(var O=1;O<R.vertices.length;O++)!R.vertices[O-1].isInternal||_?b.lineTo(R.vertices[O].x,R.vertices[O].y):b.moveTo(R.vertices[O].x,R.vertices[O].y),R.vertices[O].isInternal&&!_&&b.moveTo(R.vertices[(O+1)%R.vertices.length].x,R.vertices[(O+1)%R.vertices.length].y);b.lineTo(R.vertices[0].x,R.vertices[0].y),b.closePath()}w.wireframes?(b.lineWidth=1,b.strokeStyle=x.options.wireframeStrokeStyle,b.stroke()):(b.fillStyle=R.render.fillStyle,R.render.lineWidth&&(b.lineWidth=R.render.lineWidth,b.strokeStyle=R.render.strokeStyle,b.stroke()),b.fill())}b.globalAlpha=1}}},i.bodyWireframes=function(x,M,T){var b=T,w=x.options.showInternalEdges,_,A,R,D,N;for(b.beginPath(),R=0;R<M.length;R++)if(_=M[R],!!_.render.visible)for(N=_.parts.length>1?1:0;N<_.parts.length;N++){for(A=_.parts[N],b.moveTo(A.vertices[0].x,A.vertices[0].y),D=1;D<A.vertices.length;D++)!A.vertices[D-1].isInternal||w?b.lineTo(A.vertices[D].x,A.vertices[D].y):b.moveTo(A.vertices[D].x,A.vertices[D].y),A.vertices[D].isInternal&&!w&&b.moveTo(A.vertices[(D+1)%A.vertices.length].x,A.vertices[(D+1)%A.vertices.length].y);b.lineTo(A.vertices[0].x,A.vertices[0].y)}b.lineWidth=1,b.strokeStyle=x.options.wireframeStrokeStyle,b.stroke()},i.bodyConvexHulls=function(x,M,T){var b=T,w,_,A;for(b.beginPath(),_=0;_<M.length;_++)if(w=M[_],!(!w.render.visible||w.parts.length===1)){for(b.moveTo(w.vertices[0].x,w.vertices[0].y),A=1;A<w.vertices.length;A++)b.lineTo(w.vertices[A].x,w.vertices[A].y);b.lineTo(w.vertices[0].x,w.vertices[0].y)}b.lineWidth=1,b.strokeStyle="rgba(255,255,255,0.2)",b.stroke()},i.vertexNumbers=function(x,M,T){var b=T,w,_,A;for(w=0;w<M.length;w++){var R=M[w].parts;for(A=R.length>1?1:0;A<R.length;A++){var D=R[A];for(_=0;_<D.vertices.length;_++)b.fillStyle="rgba(255,255,255,0.2)",b.fillText(w+"_"+_,D.position.x+(D.vertices[_].x-D.position.x)*.8,D.position.y+(D.vertices[_].y-D.position.y)*.8)}}},i.mousePosition=function(x,M,T){var b=T;b.fillStyle="rgba(255,255,255,0.8)",b.fillText(M.position.x+"  "+M.position.y,M.position.x+5,M.position.y-5)},i.bodyBounds=function(x,M,T){var b=T;x.engine;var w=x.options;b.beginPath();for(var _=0;_<M.length;_++){var A=M[_];if(A.render.visible)for(var R=M[_].parts,D=R.length>1?1:0;D<R.length;D++){var N=R[D];b.rect(N.bounds.min.x,N.bounds.min.y,N.bounds.max.x-N.bounds.min.x,N.bounds.max.y-N.bounds.min.y)}}w.wireframes?b.strokeStyle="rgba(255,255,255,0.08)":b.strokeStyle="rgba(0,0,0,0.1)",b.lineWidth=1,b.stroke()},i.bodyAxes=function(x,M,T){var b=T;x.engine;var w=x.options,_,A,R,D;for(b.beginPath(),A=0;A<M.length;A++){var N=M[A],U=N.parts;if(N.render.visible)if(w.showAxes)for(R=U.length>1?1:0;R<U.length;R++)for(_=U[R],D=0;D<_.axes.length;D++){var B=_.axes[D];b.moveTo(_.position.x,_.position.y),b.lineTo(_.position.x+B.x*20,_.position.y+B.y*20)}else for(R=U.length>1?1:0;R<U.length;R++)for(_=U[R],D=0;D<_.axes.length;D++)b.moveTo(_.position.x,_.position.y),b.lineTo((_.vertices[0].x+_.vertices[_.vertices.length-1].x)/2,(_.vertices[0].y+_.vertices[_.vertices.length-1].y)/2)}w.wireframes?(b.strokeStyle="indianred",b.lineWidth=1):(b.strokeStyle="rgba(255, 255, 255, 0.4)",b.globalCompositeOperation="overlay",b.lineWidth=2),b.stroke(),b.globalCompositeOperation="source-over"},i.bodyPositions=function(x,M,T){var b=T;x.engine;var w=x.options,_,A,R,D;for(b.beginPath(),R=0;R<M.length;R++)if(_=M[R],!!_.render.visible)for(D=0;D<_.parts.length;D++)A=_.parts[D],b.arc(A.position.x,A.position.y,3,0,2*Math.PI,!1),b.closePath();for(w.wireframes?b.fillStyle="indianred":b.fillStyle="rgba(0,0,0,0.5)",b.fill(),b.beginPath(),R=0;R<M.length;R++)_=M[R],_.render.visible&&(b.arc(_.positionPrev.x,_.positionPrev.y,2,0,2*Math.PI,!1),b.closePath());b.fillStyle="rgba(255,165,0,0.8)",b.fill()},i.bodyVelocity=function(x,M,T){var b=T;b.beginPath();for(var w=0;w<M.length;w++){var _=M[w];if(_.render.visible){var A=o.getVelocity(_);b.moveTo(_.position.x,_.position.y),b.lineTo(_.position.x+A.x,_.position.y+A.y)}}b.lineWidth=3,b.strokeStyle="cornflowerblue",b.stroke()},i.bodyIds=function(x,M,T){var b=T,w,_;for(w=0;w<M.length;w++)if(M[w].render.visible){var A=M[w].parts;for(_=A.length>1?1:0;_<A.length;_++){var R=A[_];b.font="12px Arial",b.fillStyle="rgba(255,255,255,0.5)",b.fillText(R.id,R.position.x+10,R.position.y-10)}}},i.collisions=function(x,M,T){var b=T,w=x.options,_,A,R,D;for(b.beginPath(),R=0;R<M.length;R++)if(_=M[R],!!_.isActive)for(A=_.collision,D=0;D<_.contactCount;D++){var N=_.contacts[D],U=N.vertex;b.rect(U.x-1.5,U.y-1.5,3.5,3.5)}for(w.wireframes?b.fillStyle="rgba(255,255,255,0.7)":b.fillStyle="orange",b.fill(),b.beginPath(),R=0;R<M.length;R++)if(_=M[R],!!_.isActive&&(A=_.collision,_.contactCount>0)){var B=_.contacts[0].vertex.x,O=_.contacts[0].vertex.y;_.contactCount===2&&(B=(_.contacts[0].vertex.x+_.contacts[1].vertex.x)/2,O=(_.contacts[0].vertex.y+_.contacts[1].vertex.y)/2),A.bodyB===A.supports[0].body||A.bodyA.isStatic===!0?b.moveTo(B-A.normal.x*8,O-A.normal.y*8):b.moveTo(B+A.normal.x*8,O+A.normal.y*8),b.lineTo(B,O)}w.wireframes?b.strokeStyle="rgba(255,165,0,0.7)":b.strokeStyle="orange",b.lineWidth=1,b.stroke()},i.separations=function(x,M,T){var b=T,w=x.options,_,A,R,D,N;for(b.beginPath(),N=0;N<M.length;N++)if(_=M[N],!!_.isActive){A=_.collision,R=A.bodyA,D=A.bodyB;var U=1;!D.isStatic&&!R.isStatic&&(U=.5),D.isStatic&&(U=0),b.moveTo(D.position.x,D.position.y),b.lineTo(D.position.x-A.penetration.x*U,D.position.y-A.penetration.y*U),U=1,!D.isStatic&&!R.isStatic&&(U=.5),R.isStatic&&(U=0),b.moveTo(R.position.x,R.position.y),b.lineTo(R.position.x+A.penetration.x*U,R.position.y+A.penetration.y*U)}w.wireframes?b.strokeStyle="rgba(255,165,0,0.5)":b.strokeStyle="orange",b.stroke()},i.inspector=function(x,M){x.engine;var T=x.selected,b=x.render,w=b.options,_;if(w.hasBounds){var A=b.bounds.max.x-b.bounds.min.x,R=b.bounds.max.y-b.bounds.min.y,D=A/b.options.width,N=R/b.options.height;M.scale(1/D,1/N),M.translate(-b.bounds.min.x,-b.bounds.min.y)}for(var U=0;U<T.length;U++){var B=T[U].data;switch(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.9)",M.setLineDash([1,2]),B.type){case"body":_=B.bounds,M.beginPath(),M.rect(Math.floor(_.min.x-3),Math.floor(_.min.y-3),Math.floor(_.max.x-_.min.x+6),Math.floor(_.max.y-_.min.y+6)),M.closePath(),M.stroke();break;case"constraint":var O=B.pointA;B.bodyA&&(O=B.pointB),M.beginPath(),M.arc(O.x,O.y,10,0,2*Math.PI),M.closePath(),M.stroke();break}M.setLineDash([]),M.translate(-.5,-.5)}x.selectStart!==null&&(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.6)",M.fillStyle="rgba(255,165,0,0.1)",_=x.selectBounds,M.beginPath(),M.rect(Math.floor(_.min.x),Math.floor(_.min.y),Math.floor(_.max.x-_.min.x),Math.floor(_.max.y-_.min.y)),M.closePath(),M.stroke(),M.fill(),M.translate(-.5,-.5)),w.hasBounds&&M.setTransform(1,0,0,1,0,0)};var g=function(x,M){var T=x.engine,b=x.timing,w=b.historySize,_=T.timing.timestamp;b.delta=M-b.lastTime||i._goodDelta,b.lastTime=M,b.timestampElapsed=_-b.lastTimestamp||0,b.lastTimestamp=_,b.deltaHistory.unshift(b.delta),b.deltaHistory.length=Math.min(b.deltaHistory.length,w),b.engineDeltaHistory.unshift(T.timing.lastDelta),b.engineDeltaHistory.length=Math.min(b.engineDeltaHistory.length,w),b.timestampElapsedHistory.unshift(b.timestampElapsed),b.timestampElapsedHistory.length=Math.min(b.timestampElapsedHistory.length,w),b.engineUpdatesHistory.unshift(T.timing.lastUpdatesPerFrame),b.engineUpdatesHistory.length=Math.min(b.engineUpdatesHistory.length,w),b.engineElapsedHistory.unshift(T.timing.lastElapsed),b.engineElapsedHistory.length=Math.min(b.engineElapsedHistory.length,w),b.elapsedHistory.unshift(b.lastElapsed),b.elapsedHistory.length=Math.min(b.elapsedHistory.length,w)},m=function(x){for(var M=0,T=0;T<x.length;T+=1)M+=x[T];return M/x.length||0},v=function(x,M){var T=document.createElement("canvas");return T.width=x,T.height=M,T.oncontextmenu=function(){return!1},T.onselectstart=function(){return!1},T},E=function(x){var M=x.getContext("2d"),T=window.devicePixelRatio||1,b=M.webkitBackingStorePixelRatio||M.mozBackingStorePixelRatio||M.msBackingStorePixelRatio||M.oBackingStorePixelRatio||M.backingStorePixelRatio||1;return T/b},y=function(x,M){var T=x.textures[M];return T||(T=x.textures[M]=new Image,T.src=M,T)},S=function(x,M){var T=M;/(jpg|gif|png)$/.test(M)&&(T="url("+M+")"),x.canvas.style.background=T,x.canvas.style.backgroundSize="contain",x.currentBackground=M}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(5),a=s(17),l=s(0);(function(){i._maxFrameDelta=1e3/15,i._frameDeltaFallback=1e3/60,i._timeBufferMargin=1.5,i._elapsedNextEstimate=1,i._smoothingLowerBound=.1,i._smoothingUpperBound=.9,i.create=function(h){var f={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},d=l.extend(f,h);return d.fps=0,d},i.run=function(h,f){return h.timeBuffer=i._frameDeltaFallback,(function d(c){h.frameRequestId=i._onNextFrame(h,d),c&&h.enabled&&i.tick(h,f,c)})(),h},i.tick=function(h,f,d){var c=l.now(),p=h.delta,g=0,m=d-h.timeLastTick;if((!m||!h.timeLastTick||m>Math.max(i._maxFrameDelta,h.maxFrameTime))&&(m=h.frameDelta||i._frameDeltaFallback),h.frameDeltaSmoothing){h.frameDeltaHistory.push(m),h.frameDeltaHistory=h.frameDeltaHistory.slice(-h.frameDeltaHistorySize);var v=h.frameDeltaHistory.slice(0).sort(),E=h.frameDeltaHistory.slice(v.length*i._smoothingLowerBound,v.length*i._smoothingUpperBound),y=u(E);m=y||m}h.frameDeltaSnapping&&(m=1e3/Math.round(1e3/m)),h.frameDelta=m,h.timeLastTick=d,h.timeBuffer+=h.frameDelta,h.timeBuffer=l.clamp(h.timeBuffer,0,h.frameDelta+p*i._timeBufferMargin),h.lastUpdatesDeferred=0;var S=h.maxUpdates||Math.ceil(h.maxFrameTime/p),x={timestamp:f.timing.timestamp};o.trigger(h,"beforeTick",x),o.trigger(h,"tick",x);for(var M=l.now();p>0&&h.timeBuffer>=p*i._timeBufferMargin;){o.trigger(h,"beforeUpdate",x),a.update(f,p),o.trigger(h,"afterUpdate",x),h.timeBuffer-=p,g+=1;var T=l.now()-c,b=l.now()-M,w=T+i._elapsedNextEstimate*b/g;if(g>=S||w>h.maxFrameTime){h.lastUpdatesDeferred=Math.round(Math.max(0,h.timeBuffer/p-i._timeBufferMargin));break}}f.timing.lastUpdatesPerFrame=g,o.trigger(h,"afterTick",x),h.frameDeltaHistory.length>=100&&(h.lastUpdatesDeferred&&Math.round(h.frameDelta/p)>S?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):h.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof h.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(h.deltaMin||h.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),h.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},i.stop=function(h){i._cancelNextFrame(h)},i._onNextFrame=function(h,f){if(typeof window<"u"&&window.requestAnimationFrame)h.frameRequestId=window.requestAnimationFrame(f);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return h.frameRequestId},i._cancelNextFrame=function(h){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(h.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(h){for(var f=0,d=h.length,c=0;c<d;c+=1)f+=h[c];return f/d||0}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(8),a=s(0),l=a.deprecated;(function(){i.collides=function(u,h){return o.collides(u,h)},l(i,"collides","SAT.collides ➤ replaced by Collision.collides")})()}),(function(t,n,s){var i={};t.exports=i,s(1);var o=s(0);(function(){i.pathToVertices=function(a,l){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,h,f,d,c,p,g,m,v,E,y=[],S,x,M=0,T=0,b=0;l=l||15;var w=function(A,R,D){var N=D%2===1&&D>1;if(!v||A!=v.x||R!=v.y){v&&N?(S=v.x,x=v.y):(S=0,x=0);var U={x:S+A,y:x+R};(N||!v)&&(v=U),y.push(U),T=S+A,b=x+R}},_=function(A){var R=A.pathSegTypeAsLetter.toUpperCase();if(R!=="Z"){switch(R){case"M":case"L":case"T":case"C":case"S":case"Q":T=A.x,b=A.y;break;case"H":T=A.x;break;case"V":b=A.y;break}w(T,b,A.pathSegType)}};for(i._svgPathToAbsolute(a),f=a.getTotalLength(),p=[],u=0;u<a.pathSegList.numberOfItems;u+=1)p.push(a.pathSegList.getItem(u));for(g=p.concat();M<f;){if(E=a.getPathSegAtLength(M),c=p[E],c!=m){for(;g.length&&g[0]!=c;)_(g.shift());m=c}switch(c.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":d=a.getPointAtLength(M),w(d.x,d.y,0);break}M+=l}for(u=0,h=g.length;u<h;++u)_(g[u]);return y},i._svgPathToAbsolute=function(a){for(var l,u,h,f,d,c,p=a.pathSegList,g=0,m=0,v=p.numberOfItems,E=0;E<v;++E){var y=p.getItem(E),S=y.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(S))"x"in y&&(g=y.x),"y"in y&&(m=y.y);else switch("x1"in y&&(h=g+y.x1),"x2"in y&&(d=g+y.x2),"y1"in y&&(f=m+y.y1),"y2"in y&&(c=m+y.y2),"x"in y&&(g+=y.x),"y"in y&&(m+=y.y),S){case"m":p.replaceItem(a.createSVGPathSegMovetoAbs(g,m),E);break;case"l":p.replaceItem(a.createSVGPathSegLinetoAbs(g,m),E);break;case"h":p.replaceItem(a.createSVGPathSegLinetoHorizontalAbs(g),E);break;case"v":p.replaceItem(a.createSVGPathSegLinetoVerticalAbs(m),E);break;case"c":p.replaceItem(a.createSVGPathSegCurvetoCubicAbs(g,m,h,f,d,c),E);break;case"s":p.replaceItem(a.createSVGPathSegCurvetoCubicSmoothAbs(g,m,d,c),E);break;case"q":p.replaceItem(a.createSVGPathSegCurvetoQuadraticAbs(g,m,h,f),E);break;case"t":p.replaceItem(a.createSVGPathSegCurvetoQuadraticSmoothAbs(g,m),E);break;case"a":p.replaceItem(a.createSVGPathSegArcAbs(g,m,y.r1,y.r2,y.angle,y.largeArcFlag,y.sweepFlag),E);break;case"z":case"Z":g=l,m=u;break}(S=="M"||S=="m")&&(l=g,u=m)}}})()}),(function(t,n,s){var i={};t.exports=i;var o=s(6);s(0),(function(){i.create=o.create,i.add=o.add,i.remove=o.remove,i.clear=o.clear,i.addComposite=o.addComposite,i.addBody=o.addBody,i.addConstraint=o.addConstraint})()})])})})(Ds)),Ds.exports}var yc=_c();const Pe=vc(yc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="180",Sc=0,jo=1,Mc=2,dl=1,Ec=2,fn=3,Rn=0,At=1,dn=2,An=0,pi=1,Qo=2,ea=3,ta=4,wc=5,zn=100,Tc=101,bc=102,Ac=103,Cc=104,Rc=200,Pc=201,Lc=202,Dc=203,Ir=204,Ur=205,Ic=206,Uc=207,Nc=208,Fc=209,Bc=210,Oc=211,Hc=212,zc=213,kc=214,Nr=0,Fr=1,Br=2,vi=3,Or=4,Hr=5,zr=6,kr=7,pl=0,Gc=1,Vc=2,Cn=0,Wc=1,Xc=2,Yc=3,qc=4,$c=5,Zc=6,Kc=7,ml=300,xi=301,_i=302,Gr=303,Vr=304,Ys=306,Wr=1e3,Gn=1001,Xr=1002,Zt=1003,Jc=1004,ss=1005,zt=1006,Js=1007,Vn=1008,vn=1009,gl=1010,vl=1011,ki=1012,Co=1013,Xn=1014,pn=1015,Ki=1016,Ro=1017,Po=1018,Gi=1020,xl=35902,_l=35899,yl=1021,Sl=1022,qt=1023,Vi=1026,Wi=1027,Ml=1028,Lo=1029,El=1030,Do=1031,Io=1033,Is=33776,Us=33777,Ns=33778,Fs=33779,Yr=35840,qr=35841,$r=35842,Zr=35843,Kr=36196,Jr=37492,jr=37496,Qr=37808,eo=37809,to=37810,no=37811,io=37812,so=37813,ro=37814,oo=37815,ao=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,vo=36283,xo=36284,_o=36285,yo=36286,jc=3200,Qc=3201,eh=0,th=1,bn="",Ht="srgb",yi="srgb-linear",zs="linear",tt="srgb",Zn=7680,na=519,nh=512,ih=513,sh=514,wl=515,rh=516,oh=517,ah=518,lh=519,ia=35044,sa="300 es",tn=2e3,ks=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let i=0,o=s.length;i<o;i++)s[i].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,So=180/Math.PI;function Ti(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function $e(r,e,t){return Math.max(e,Math.min(t,r))}function ch(r,e){return(r%e+e)%e}function Qs(r,e,t){return(1-t)*r+t*e}function Ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*n-o*s+e.x,this.y=i*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ji{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,i,o,a){let l=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3];const d=i[o+0],c=i[o+1],p=i[o+2],g=i[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=c,e[t+2]=p,e[t+3]=g;return}if(f!==g||l!==d||u!==c||h!==p){let m=1-a;const v=l*d+u*c+h*p+f*g,E=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const x=Math.sqrt(y),M=Math.atan2(x,v*E);m=Math.sin(m*M)/x,a=Math.sin(a*M)/x}const S=a*E;if(l=l*m+d*S,u=u*m+c*S,h=h*m+p*S,f=f*m+g*S,m===1-a){const x=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=x,u*=x,h*=x,f*=x}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,i,o){const a=n[s],l=n[s+1],u=n[s+2],h=n[s+3],f=i[o],d=i[o+1],c=i[o+2],p=i[o+3];return e[t]=a*p+h*f+l*c-u*d,e[t+1]=l*p+h*d+u*f-a*c,e[t+2]=u*p+h*c+a*d-l*f,e[t+3]=h*p-a*f-l*d-u*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,i=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(s/2),f=a(i/2),d=l(n/2),c=l(s/2),p=l(i/2);switch(o){case"XYZ":this._x=d*h*f+u*c*p,this._y=u*c*f-d*h*p,this._z=u*h*p+d*c*f,this._w=u*h*f-d*c*p;break;case"YXZ":this._x=d*h*f+u*c*p,this._y=u*c*f-d*h*p,this._z=u*h*p-d*c*f,this._w=u*h*f+d*c*p;break;case"ZXY":this._x=d*h*f-u*c*p,this._y=u*c*f+d*h*p,this._z=u*h*p+d*c*f,this._w=u*h*f-d*c*p;break;case"ZYX":this._x=d*h*f-u*c*p,this._y=u*c*f+d*h*p,this._z=u*h*p-d*c*f,this._w=u*h*f+d*c*p;break;case"YZX":this._x=d*h*f+u*c*p,this._y=u*c*f+d*h*p,this._z=u*h*p-d*c*f,this._w=u*h*f-d*c*p;break;case"XZY":this._x=d*h*f-u*c*p,this._y=u*c*f-d*h*p,this._z=u*h*p+d*c*f,this._w=u*h*f+d*c*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],i=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(h-l)*c,this._y=(i-u)*c,this._z=(o-s)*c}else if(n>a&&n>f){const c=2*Math.sqrt(1+n-a-f);this._w=(h-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(i+u)/c}else if(a>f){const c=2*Math.sqrt(1+a-n-f);this._w=(i-u)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+h)/c}else{const c=2*Math.sqrt(1+f-n-a);this._w=(o-s)/c,this._x=(i+u)/c,this._y=(l+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,i=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+s*u-i*l,this._y=s*h+o*l+i*a-n*u,this._z=i*h+o*u+n*l-s*a,this._w=o*h-n*a-s*l-i*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,i=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+i*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=i,this;const l=1-a*a;if(l<=Number.EPSILON){const c=1-t;return this._w=c*o+t*this._w,this._x=c*n+t*this._x,this._y=c*s+t*this._y,this._z=c*i+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),f=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=i*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ra.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ra.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*s,this.y=i[1]*t+i[4]*n+i[7]*s,this.z=i[2]*t+i[5]*n+i[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=e.elements,o=1/(i[3]*t+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*s+i[12])*o,this.y=(i[1]*t+i[5]*n+i[9]*s+i[13])*o,this.z=(i[2]*t+i[6]*n+i[10]*s+i[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,i=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*n),h=2*(a*t-i*s),f=2*(i*n-o*t);return this.x=t+l*u+o*f-a*h,this.y=n+l*h+a*u-i*f,this.z=s+l*f+i*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*s,this.y=i[1]*t+i[5]*n+i[9]*s,this.z=i[2]*t+i[6]*n+i[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,i=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-i*a,this.y=i*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return er.copy(this).projectOnVector(e),this.sub(er)}reflect(e){return this.sub(er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const er=new z,ra=new Ji;class Xe{constructor(e,t,n,s,i,o,a,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,o,a,l,u)}set(e,t,n,s,i,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=i,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],f=n[7],d=n[2],c=n[5],p=n[8],g=s[0],m=s[3],v=s[6],E=s[1],y=s[4],S=s[7],x=s[2],M=s[5],T=s[8];return i[0]=o*g+a*E+l*x,i[3]=o*m+a*y+l*M,i[6]=o*v+a*S+l*T,i[1]=u*g+h*E+f*x,i[4]=u*m+h*y+f*M,i[7]=u*v+h*S+f*T,i[2]=d*g+c*E+p*x,i[5]=d*m+c*y+p*M,i[8]=d*v+c*S+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*i*h+n*a*l+s*i*u-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],f=h*o-a*u,d=a*l-h*i,c=u*i-o*l,p=t*f+n*d+s*c;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=f*g,e[1]=(s*u-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=d*g,e[4]=(h*t-s*l)*g,e[5]=(s*i-a*t)*g,e[6]=c*g,e[7]=(n*l-u*t)*g,e[8]=(o*t-n*i)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,i,o,a){const l=Math.cos(i),u=Math.sin(i);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tr.makeScale(e,t)),this}rotate(e){return this.premultiply(tr.makeRotation(-e)),this}translate(e,t){return this.premultiply(tr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tr=new Xe;function Tl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hh(){const r=Xi("canvas");return r.style.display="block",r}const oa={};function Yi(r){r in oa||(oa[r]=!0,console.warn(r))}function uh(r,e,t){return new Promise(function(n,s){function i(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:n()}}setTimeout(i,t)})}const aa=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),la=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fh(){const r={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(s,i,o){return this.enabled===!1||i===o||!i||!o||(this.spaces[i].transfer===tt&&(s.r=gn(s.r),s.g=gn(s.g),s.b=gn(s.b)),this.spaces[i].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[i].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b))),s},workingToColorSpace:function(s,i){return this.convert(s,this.workingColorSpace,i)},colorSpaceToWorking:function(s,i){return this.convert(s,i,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bn?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,i=this.workingColorSpace){return s.fromArray(this.spaces[i].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,i,o){return s.copy(this.spaces[i].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,i){return Yi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,i)},toWorkingColorSpace:function(s,i){return Yi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[yi]:{primaries:e,whitePoint:n,transfer:zs,toXYZ:aa,fromXYZ:la,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:aa,fromXYZ:la,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),r}const je=fh();function gn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function mi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Kn;class dh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kn===void 0&&(Kn=Xi("canvas")),Kn.width=e.width,Kn.height=e.height;const s=Kn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Kn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),i=s.data;for(let o=0;o<i.length;o++)i[o]=gn(i[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gn(t[n]/255)*255):t[n]=gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ph=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?i.push(nr(s[o].image)):i.push(nr(s[o]))}else i=nr(s);n.url=i}return t||(e.images[this.uuid]=n),n}}function nr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mh=0;const ir=new z;class Mt extends wi{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Gn,s=Gn,i=zt,o=Vn,a=qt,l=vn,u=Mt.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Ti(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ir).x}get height(){return this.source.getSize(ir).y}get depth(){return this.source.getSize(ir).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=ml;Mt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*i,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*i,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*i,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,i;const l=e.elements,u=l[0],h=l[4],f=l[8],d=l[1],c=l[5],p=l[9],g=l[2],m=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(p+m)<.1&&Math.abs(u+c+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,S=(c+1)/2,x=(v+1)/2,M=(h+d)/4,T=(f+g)/4,b=(p+m)/4;return y>S&&y>x?y<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(y),s=M/n,i=T/n):S>x?S<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(S),n=M/s,i=b/s):x<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(x),n=T/i,s=b/i),this.set(n,s,i,t),this}let E=Math.sqrt((m-p)*(m-p)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-p)/E,this.y=(f-g)/E,this.z=(d-h)/E,this.w=Math.acos((u+c+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gh extends wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:n.depth},i=new Mt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=i.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,i=this.textures.length;s<i;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Uo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends gh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bl extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vh extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const i=n.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=i.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(i,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const s=e.children;for(let i=0,o=s.length;i<o;i++)this.expandByObject(s[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),os.subVectors(this.max,Ri),Jn.subVectors(e.a,Ri),jn.subVectors(e.b,Ri),Qn.subVectors(e.c,Ri),yn.subVectors(jn,Jn),Sn.subVectors(Qn,jn),Dn.subVectors(Jn,Qn);let t=[0,-yn.z,yn.y,0,-Sn.z,Sn.y,0,-Dn.z,Dn.y,yn.z,0,-yn.x,Sn.z,0,-Sn.x,Dn.z,0,-Dn.x,-yn.y,yn.x,0,-Sn.y,Sn.x,0,-Dn.y,Dn.x,0];return!sr(t,Jn,jn,Qn,os)||(t=[1,0,0,0,1,0,0,0,1],!sr(t,Jn,jn,Qn,os))?!1:(as.crossVectors(yn,Sn),t=[as.x,as.y,as.z],sr(t,Jn,jn,Qn,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const on=[new z,new z,new z,new z,new z,new z,new z,new z],Gt=new z,rs=new ji,Jn=new z,jn=new z,Qn=new z,yn=new z,Sn=new z,Dn=new z,Ri=new z,os=new z,as=new z,In=new z;function sr(r,e,t,n,s){for(let i=0,o=r.length-3;i<=o;i+=3){In.fromArray(r,i);const a=s.x*Math.abs(In.x)+s.y*Math.abs(In.y)+s.z*Math.abs(In.z),l=e.dot(In),u=t.dot(In),h=n.dot(In);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const xh=new ji,Pi=new z,rr=new z;class qs{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xh.setFromPoints(e).getCenter(n);let s=0;for(let i=0,o=e.length;i<o;i++)s=Math.max(s,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(rr)),this.expandByPoint(Pi.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const an=new z,or=new z,ls=new z,Mn=new z,ar=new z,cs=new z,lr=new z;class Al{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){or.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(or);const i=e.distanceTo(t)*.5,o=-this.direction.dot(ls),a=Mn.dot(this.direction),l=-Mn.dot(ls),u=Mn.lengthSq(),h=Math.abs(1-o*o);let f,d,c,p;if(h>0)if(f=o*l-a,d=o*a-l,p=i*h,f>=0)if(d>=-p)if(d<=p){const g=1/h;f*=g,d*=g,c=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=i,f=Math.max(0,-(o*d+a)),c=-f*f+d*(d+2*l)+u;else d=-i,f=Math.max(0,-(o*d+a)),c=-f*f+d*(d+2*l)+u;else d<=-p?(f=Math.max(0,-(-o*i+a)),d=f>0?-i:Math.min(Math.max(-i,-l),i),c=-f*f+d*(d+2*l)+u):d<=p?(f=0,d=Math.min(Math.max(-i,-l),i),c=d*(d+2*l)+u):(f=Math.max(0,-(o*i+a)),d=f>0?i:Math.min(Math.max(-i,-l),i),c=-f*f+d*(d+2*l)+u);else d=o>0?-i:i,f=Math.max(0,-(o*d+a)),c=-f*f+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(or).addScaledVector(ls,d),c}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),s=an.dot(an)-n*n,i=e.radius*e.radius;if(s>i)return null;const o=Math.sqrt(i-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,i,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(i=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(i=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||i>s||((i>n||isNaN(n))&&(n=i),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,s,i){ar.subVectors(t,e),cs.subVectors(n,e),lr.crossVectors(ar,cs);let o=this.direction.dot(lr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const l=a*this.direction.dot(cs.crossVectors(Mn,cs));if(l<0)return null;const u=a*this.direction.dot(ar.cross(Mn));if(u<0||l+u>o)return null;const h=-a*Mn.dot(lr);return h<0?null:this.at(h/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,s,i,o,a,l,u,h,f,d,c,p,g,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,o,a,l,u,h,f,d,c,p,g,m)}set(e,t,n,s,i,o,a,l,u,h,f,d,c,p,g,m){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=i,v[5]=o,v[9]=a,v[13]=l,v[2]=u,v[6]=h,v[10]=f,v[14]=d,v[3]=c,v[7]=p,v[11]=g,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ei.setFromMatrixColumn(e,0).length(),i=1/ei.setFromMatrixColumn(e,1).length(),o=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,i=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),h=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const d=o*h,c=o*f,p=a*h,g=a*f;t[0]=l*h,t[4]=-l*f,t[8]=u,t[1]=c+p*u,t[5]=d-g*u,t[9]=-a*l,t[2]=g-d*u,t[6]=p+c*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,c=l*f,p=u*h,g=u*f;t[0]=d+g*a,t[4]=p*a-c,t[8]=o*u,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=c*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,c=l*f,p=u*h,g=u*f;t[0]=d-g*a,t[4]=-o*f,t[8]=p+c*a,t[1]=c+p*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,c=o*f,p=a*h,g=a*f;t[0]=l*h,t[4]=p*u-c,t[8]=d*u+g,t[1]=l*f,t[5]=g*u+d,t[9]=c*u-p,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,c=o*u,p=a*l,g=a*u;t[0]=l*h,t[4]=g-d*f,t[8]=p*f+c,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=c*f+p,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,c=o*u,p=a*l,g=a*u;t[0]=l*h,t[4]=-f,t[8]=u*h,t[1]=d*f+g,t[5]=o*h,t[9]=c*f-p,t[2]=p*f-c,t[6]=a*h,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_h,e,yh)}lookAt(e,t,n){const s=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),En.crossVectors(n,Lt),En.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),En.crossVectors(n,Lt)),En.normalize(),hs.crossVectors(Lt,En),s[0]=En.x,s[4]=hs.x,s[8]=Lt.x,s[1]=En.y,s[5]=hs.y,s[9]=Lt.y,s[2]=En.z,s[6]=hs.z,s[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],f=n[5],d=n[9],c=n[13],p=n[2],g=n[6],m=n[10],v=n[14],E=n[3],y=n[7],S=n[11],x=n[15],M=s[0],T=s[4],b=s[8],w=s[12],_=s[1],A=s[5],R=s[9],D=s[13],N=s[2],U=s[6],B=s[10],O=s[14],k=s[3],J=s[7],se=s[11],fe=s[15];return i[0]=o*M+a*_+l*N+u*k,i[4]=o*T+a*A+l*U+u*J,i[8]=o*b+a*R+l*B+u*se,i[12]=o*w+a*D+l*O+u*fe,i[1]=h*M+f*_+d*N+c*k,i[5]=h*T+f*A+d*U+c*J,i[9]=h*b+f*R+d*B+c*se,i[13]=h*w+f*D+d*O+c*fe,i[2]=p*M+g*_+m*N+v*k,i[6]=p*T+g*A+m*U+v*J,i[10]=p*b+g*R+m*B+v*se,i[14]=p*w+g*D+m*O+v*fe,i[3]=E*M+y*_+S*N+x*k,i[7]=E*T+y*A+S*U+x*J,i[11]=E*b+y*R+S*B+x*se,i[15]=E*w+y*D+S*O+x*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],i=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],f=e[6],d=e[10],c=e[14],p=e[3],g=e[7],m=e[11],v=e[15];return p*(+i*l*f-s*u*f-i*a*d+n*u*d+s*a*c-n*l*c)+g*(+t*l*c-t*u*d+i*o*d-s*o*c+s*u*h-i*l*h)+m*(+t*u*f-t*a*c-i*o*f+n*o*c+i*a*h-n*u*h)+v*(-s*a*h-t*l*f+t*a*d+s*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],f=e[9],d=e[10],c=e[11],p=e[12],g=e[13],m=e[14],v=e[15],E=f*m*u-g*d*u+g*l*c-a*m*c-f*l*v+a*d*v,y=p*d*u-h*m*u-p*l*c+o*m*c+h*l*v-o*d*v,S=h*g*u-p*f*u+p*a*c-o*g*c-h*a*v+o*f*v,x=p*f*l-h*g*l-p*a*d+o*g*d+h*a*m-o*f*m,M=t*E+n*y+s*S+i*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=E*T,e[1]=(g*d*i-f*m*i-g*s*c+n*m*c+f*s*v-n*d*v)*T,e[2]=(a*m*i-g*l*i+g*s*u-n*m*u-a*s*v+n*l*v)*T,e[3]=(f*l*i-a*d*i-f*s*u+n*d*u+a*s*c-n*l*c)*T,e[4]=y*T,e[5]=(h*m*i-p*d*i+p*s*c-t*m*c-h*s*v+t*d*v)*T,e[6]=(p*l*i-o*m*i-p*s*u+t*m*u+o*s*v-t*l*v)*T,e[7]=(o*d*i-h*l*i+h*s*u-t*d*u-o*s*c+t*l*c)*T,e[8]=S*T,e[9]=(p*f*i-h*g*i-p*n*c+t*g*c+h*n*v-t*f*v)*T,e[10]=(o*g*i-p*a*i+p*n*u-t*g*u-o*n*v+t*a*v)*T,e[11]=(h*a*i-o*f*i-h*n*u+t*f*u+o*n*c-t*a*c)*T,e[12]=x*T,e[13]=(h*g*s-p*f*s+p*n*d-t*g*d-h*n*m+t*f*m)*T,e[14]=(p*a*s-o*g*s-p*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,i=e.z;return t[0]*=n,t[4]*=s,t[8]*=i,t[1]*=n,t[5]*=s,t[9]*=i,t[2]*=n,t[6]*=s,t[10]*=i,t[3]*=n,t[7]*=s,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),i=1-n,o=e.x,a=e.y,l=e.z,u=i*o,h=i*a;return this.set(u*o+n,u*a-s*l,u*l+s*a,0,u*a+s*l,h*a+n,h*l-s*o,0,u*l-s*a,h*l+s*o,i*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,i,o){return this.set(1,n,i,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,i=t._x,o=t._y,a=t._z,l=t._w,u=i+i,h=o+o,f=a+a,d=i*u,c=i*h,p=i*f,g=o*h,m=o*f,v=a*f,E=l*u,y=l*h,S=l*f,x=n.x,M=n.y,T=n.z;return s[0]=(1-(g+v))*x,s[1]=(c+S)*x,s[2]=(p-y)*x,s[3]=0,s[4]=(c-S)*M,s[5]=(1-(d+v))*M,s[6]=(m+E)*M,s[7]=0,s[8]=(p+y)*T,s[9]=(m-E)*T,s[10]=(1-(d+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let i=ei.set(s[0],s[1],s[2]).length();const o=ei.set(s[4],s[5],s[6]).length(),a=ei.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),e.x=s[12],e.y=s[13],e.z=s[14],Vt.copy(this);const u=1/i,h=1/o,f=1/a;return Vt.elements[0]*=u,Vt.elements[1]*=u,Vt.elements[2]*=u,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=f,Vt.elements[9]*=f,Vt.elements[10]*=f,t.setFromRotationMatrix(Vt),n.x=i,n.y=o,n.z=a,this}makePerspective(e,t,n,s,i,o,a=tn,l=!1){const u=this.elements,h=2*i/(t-e),f=2*i/(n-s),d=(t+e)/(t-e),c=(n+s)/(n-s);let p,g;if(l)p=i/(o-i),g=o*i/(o-i);else if(a===tn)p=-(o+i)/(o-i),g=-2*o*i/(o-i);else if(a===ks)p=-o/(o-i),g=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=c,u[13]=0,u[2]=0,u[6]=0,u[10]=p,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,i,o,a=tn,l=!1){const u=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),c=-(n+s)/(n-s);let p,g;if(l)p=1/(o-i),g=o/(o-i);else if(a===tn)p=-2/(o-i),g=-(o+i)/(o-i);else if(a===ks)p=-1/(o-i),g=-i/(o-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=c,u[2]=0,u[6]=0,u[10]=p,u[14]=g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ei=new z,Vt=new ut,_h=new z(0,0,0),yh=new z(1,1,1),En=new z,hs=new z,Lt=new z,ca=new ut,ha=new Ji;class xn{constructor(e=0,t=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,i=s[0],o=s[4],a=s[8],l=s[1],u=s[5],h=s[9],f=s[2],d=s[6],c=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,c),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,c),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,i)):(this._x=Math.atan2(-h,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ha.setFromEuler(this),this.setFromQuaternion(ha,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sh=0;const ua=new z,ti=new Ji,ln=new ut,us=new z,Li=new z,Mh=new z,Eh=new Ji,fa=new z(1,0,0),da=new z(0,1,0),pa=new z(0,0,1),ma={type:"added"},wh={type:"removed"},ni={type:"childadded",child:null},cr={type:"childremoved",child:null};class Ct extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new z,t=new xn,n=new Ji,s=new z(1,1,1);function i(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Xe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(fa,e)}rotateY(e){return this.rotateOnAxis(da,e)}rotateZ(e){return this.rotateOnAxis(pa,e)}translateOnAxis(e,t){return ua.copy(e).applyQuaternion(this.quaternion),this.position.add(ua.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fa,e)}translateY(e){return this.translateOnAxis(da,e)}translateZ(e){return this.translateOnAxis(pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?us.copy(e):us.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Li,us,this.up):ln.lookAt(us,Li,this.up),this.quaternion.setFromRotationMatrix(ln),s&&(ln.extractRotation(s.matrixWorld),ti.setFromRotationMatrix(ln),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ma),ni.child=e,this.dispatchEvent(ni),ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wh),cr.child=e,this.dispatchEvent(cr),cr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ma),ni.child=e,this.dispatchEvent(ni),ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let i=0,o=s.length;i<o;i++)s[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,Mh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Eh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let i=0,o=s.length;i<o;i++)s[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function i(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];i(e.shapes,f)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(i(e.materials,this.material[l]));s.material=a}else s.material=i(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(i(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),c=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),c.length>0&&(n.animations=c),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new z(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new z,cn=new z,hr=new z,hn=new z,ii=new z,si=new z,ga=new z,ur=new z,fr=new z,dr=new z,pr=new at,mr=new at,gr=new at;class Yt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Wt.subVectors(e,t),s.cross(Wt);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(e,t,n,s,i){Wt.subVectors(s,t),cn.subVectors(n,t),hr.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(cn),l=Wt.dot(hr),u=cn.dot(cn),h=cn.dot(hr),f=o*u-a*a;if(f===0)return i.set(0,0,0),null;const d=1/f,c=(u*l-a*h)*d,p=(o*h-a*l)*d;return i.set(1-c-p,p,c)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,s,i,o,a,l){return this.getBarycoord(e,t,n,s,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(a,hn.z),l)}static getInterpolatedAttribute(e,t,n,s,i,o){return pr.setScalar(0),mr.setScalar(0),gr.setScalar(0),pr.fromBufferAttribute(e,t),mr.fromBufferAttribute(e,n),gr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pr,i.x),o.addScaledVector(mr,i.y),o.addScaledVector(gr,i.z),o}static isFrontFacing(e,t,n,s){return Wt.subVectors(n,t),cn.subVectors(e,t),Wt.cross(cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Wt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,i){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,s,i)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,i=this.c;let o,a;ii.subVectors(s,n),si.subVectors(i,n),ur.subVectors(e,n);const l=ii.dot(ur),u=si.dot(ur);if(l<=0&&u<=0)return t.copy(n);fr.subVectors(e,s);const h=ii.dot(fr),f=si.dot(fr);if(h>=0&&f<=h)return t.copy(s);const d=l*f-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ii,o);dr.subVectors(e,i);const c=ii.dot(dr),p=si.dot(dr);if(p>=0&&c<=p)return t.copy(i);const g=c*u-l*p;if(g<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(n).addScaledVector(si,a);const m=h*p-c*f;if(m<=0&&f-h>=0&&c-p>=0)return ga.subVectors(i,s),a=(f-h)/(f-h+(c-p)),t.copy(s).addScaledVector(ga,a);const v=1/(m+g+d);return o=g*v,a=d*v,t.copy(n).addScaledVector(ii,o).addScaledVector(si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function vr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=ch(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,o=2*n-i;this.r=vr(o,i,e+1/3),this.g=vr(o,i,e),this.b=vr(o,i,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=s[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}copyLinearToSRGB(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return je.workingToColorSpace(_t.copy(this),e),Math.round($e(_t.r*255,0,255))*65536+Math.round($e(_t.g*255,0,255))*256+Math.round($e(_t.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(_t.copy(this),t);const n=_t.r,s=_t.g,i=_t.b,o=Math.max(n,s,i),a=Math.min(n,s,i);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-i)/f+(s<i?6:0);break;case s:l=(i-n)/f+2;break;case i:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Ht){je.workingToColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,s=_t.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(fs);const n=Qs(wn.h,fs.h,t),s=Qs(wn.s,fs.s,t),i=Qs(wn.l,fs.l,t);return this.setHSL(n,s,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*s,this.g=i[1]*t+i[4]*n+i[7]*s,this.b=i[2]*t+i[5]*n+i[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Ke;Ke.NAMES=Rl;let Th=0;class Qi extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=pi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Ur,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Ur&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const o=[];for(const a in i){const l=i[a];delete l.metadata,o.push(l)}return o}if(t){const i=s(e.textures),o=s(e.images);i.length>0&&(n.textures=i),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class No extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new z,ds=new ge;let bh=0;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ia,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ia&&(e.usage=this.usage),e}}class Pl extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ll extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ah=0;const Bt=new ut,xr=new Ct,ri=new z,Dt=new ji,Di=new ji,mt=new z;class Jt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tl(e)?Ll:Pl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Xe().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,i=e.length;s<i;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const i=e[s];t.setXYZ(s,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const i=t[n];Dt.setFromBufferAttribute(i),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Dt.min,Di.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,Di.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(Di.min),Dt.expandByPoint(Di.max))}Dt.getCenter(n);let s=0;for(let i=0,o=e.count;i<o;i++)mt.fromBufferAttribute(e,i),s=Math.max(s,n.distanceToSquared(mt));if(t)for(let i=0,o=t.length;i<o;i++){const a=t[i],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)mt.fromBufferAttribute(a,u),l&&(ri.fromBufferAttribute(e,u),mt.add(ri)),s=Math.max(s,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new z,l[b]=new z;const u=new z,h=new z,f=new z,d=new ge,c=new ge,p=new ge,g=new z,m=new z;function v(b,w,_){u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,_),d.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),p.fromBufferAttribute(i,_),h.sub(u),f.sub(u),c.sub(d),p.sub(d);const A=1/(c.x*p.y-p.x*c.y);isFinite(A)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(f,-c.y).multiplyScalar(A),m.copy(f).multiplyScalar(c.x).addScaledVector(h,-p.x).multiplyScalar(A),a[b].add(g),a[w].add(g),a[_].add(g),l[b].add(m),l[w].add(m),l[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let b=0,w=E.length;b<w;++b){const _=E[b],A=_.start,R=_.count;for(let D=A,N=A+R;D<N;D+=3)v(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new z,S=new z,x=new z,M=new z;function T(b){x.fromBufferAttribute(s,b),M.copy(x);const w=a[b];y.copy(w),y.sub(x.multiplyScalar(x.dot(w))).normalize(),S.crossVectors(M,w);const A=S.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,A)}for(let b=0,w=E.length;b<w;++b){const _=E[b],A=_.start,R=_.count;for(let D=A,N=A+R;D<N;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,c=n.count;d<c;d++)n.setXYZ(d,0,0,0);const s=new z,i=new z,o=new z,a=new z,l=new z,u=new z,h=new z,f=new z;if(e)for(let d=0,c=e.count;d<c;d+=3){const p=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),i.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,i),f.subVectors(s,i),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),a.add(h),l.add(h),u.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,c=t.count;d<c;d+=3)s.fromBufferAttribute(t,d+0),i.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,i),f.subVectors(s,i),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,f=a.normalized,d=new u.constructor(l.length*h);let c=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?c=l[g]*a.data.stride+a.offset:c=l[g]*h;for(let v=0;v<h;v++)d[p++]=u[c++]}return new It(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,n);t.setAttribute(a,u)}const i=this.morphAttributes;for(const a in i){const l=[],u=i[a];for(let h=0,f=u.length;h<f;h++){const d=u[h],c=e(d,n);l.push(c)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let i=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){const c=u[f];h.push(c.toJSON(e.data))}h.length>0&&(s[l]=h,i=!0)}i&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const i=e.morphAttributes;for(const u in i){const h=[],f=i[u];for(let d=0,c=f.length;d<c;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const va=new ut,Un=new Al,ps=new qs,xa=new z,ms=new z,gs=new z,vs=new z,_r=new z,xs=new z,_a=new z,_s=new z;class bt extends Ct{constructor(e=new Jt,t=new No){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=s.length;i<o;i++){const a=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(i&&a){xs.set(0,0,0);for(let l=0,u=i.length;l<u;l++){const h=a[l],f=i[l];h!==0&&(_r.fromBufferAttribute(f,e),o?xs.addScaledVector(_r,h):xs.addScaledVector(_r.sub(t),h))}t.add(xs)}return t}raycast(e,t){const n=this.geometry,s=this.material,i=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(i),Un.copy(e.ray).recast(e.near),!(ps.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ps,xa)===null||Un.origin.distanceToSquared(xa)>(e.far-e.near)**2))&&(va.copy(i).invert(),Un.copy(e.ray).applyMatrix4(va),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let s;const i=this.geometry,o=this.material,a=i.index,l=i.attributes.position,u=i.attributes.uv,h=i.attributes.uv1,f=i.attributes.normal,d=i.groups,c=i.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){const m=d[p],v=o[m.materialIndex],E=Math.max(m.start,c.start),y=Math.min(a.count,Math.min(m.start+m.count,c.start+c.count));for(let S=E,x=y;S<x;S+=3){const M=a.getX(S),T=a.getX(S+1),b=a.getX(S+2);s=ys(this,v,e,n,u,h,f,M,T,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,c.start),g=Math.min(a.count,c.start+c.count);for(let m=p,v=g;m<v;m+=3){const E=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);s=ys(this,o,e,n,u,h,f,E,y,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){const m=d[p],v=o[m.materialIndex],E=Math.max(m.start,c.start),y=Math.min(l.count,Math.min(m.start+m.count,c.start+c.count));for(let S=E,x=y;S<x;S+=3){const M=S,T=S+1,b=S+2;s=ys(this,v,e,n,u,h,f,M,T,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,c.start),g=Math.min(l.count,c.start+c.count);for(let m=p,v=g;m<v;m+=3){const E=m,y=m+1,S=m+2;s=ys(this,o,e,n,u,h,f,E,y,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ch(r,e,t,n,s,i,o,a){let l;if(e.side===At?l=n.intersectTriangle(o,i,s,!0,a):l=n.intersectTriangle(s,i,o,e.side===Rn,a),l===null)return null;_s.copy(a),_s.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(_s);return u<t.near||u>t.far?null:{distance:u,point:_s.clone(),object:r}}function ys(r,e,t,n,s,i,o,a,l,u){r.getVertexPosition(a,ms),r.getVertexPosition(l,gs),r.getVertexPosition(u,vs);const h=Ch(r,e,t,n,ms,gs,vs,_a);if(h){const f=new z;Yt.getBarycoord(_a,ms,gs,vs,f),s&&(h.uv=Yt.getInterpolatedAttribute(s,a,l,u,f,new ge)),i&&(h.uv1=Yt.getInterpolatedAttribute(i,a,l,u,f,new ge)),o&&(h.normal=Yt.getInterpolatedAttribute(o,a,l,u,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new z,materialIndex:0};Yt.getNormal(ms,gs,vs,d.normal),h.face=d,h.barycoord=f}return h}class es extends Jt{constructor(e=1,t=1,n=1,s=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:i,depthSegments:o};const a=this;s=Math.floor(s),i=Math.floor(i),o=Math.floor(o);const l=[],u=[],h=[],f=[];let d=0,c=0;p("z","y","x",-1,-1,n,t,e,o,i,0),p("z","y","x",1,-1,n,t,-e,o,i,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,i,4),p("x","y","z",-1,-1,e,t,-n,s,i,5),this.setIndex(l),this.setAttribute("position",new nn(u,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(f,2));function p(g,m,v,E,y,S,x,M,T,b,w){const _=S/T,A=x/b,R=S/2,D=x/2,N=M/2,U=T+1,B=b+1;let O=0,k=0;const J=new z;for(let se=0;se<B;se++){const fe=se*A-D;for(let be=0;be<U;be++){const Ue=be*_-R;J[g]=Ue*E,J[m]=fe*y,J[v]=N,u.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[v]=M>0?1:-1,h.push(J.x,J.y,J.z),f.push(be/T),f.push(1-se/b),O+=1}}for(let se=0;se<b;se++)for(let fe=0;fe<T;fe++){const be=d+fe+U*se,Ue=d+fe+U*(se+1),qe=d+(fe+1)+U*(se+1),ke=d+(fe+1)+U*se;l.push(be,Ue,ke),l.push(Ue,qe,ke),k+=6}a.addGroup(c,k,w),c+=k,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function St(r){const e={};for(let t=0;t<r.length;t++){const n=Si(r[t]);for(const s in n)e[s]=n[s]}return e}function Rh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Dl(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Ph={clone:Si,merge:St};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kt extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Il extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new z,ya=new ge,Sa=new ge;class Xt extends Il{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,ya,Sa),t.subVectors(Sa,ya)}setViewOffset(e,t,n,s,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,i=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;i+=o.offsetX*s/l,t-=o.offsetY*n/u,s*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(i+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oi=-90,ai=1;class Ih extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(oi,ai,e,t);s.layers=this.layers,this.add(s);const i=new Xt(oi,ai,e,t);i.layers=this.layers,this.add(i);const o=new Xt(oi,ai,e,t);o.layers=this.layers,this.add(o);const a=new Xt(oi,ai,e,t);a.layers=this.layers,this.add(a);const l=new Xt(oi,ai,e,t);l.layers=this.layers,this.add(l);const u=new Xt(oi,ai,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,i,o,a,l]=t;for(const u of t)this.remove(u);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,o,a,l,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,i),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,c),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ul extends Mt{constructor(e=[],t=xi,n,s,i,o,a,l,u,h){super(e,t,n,s,i,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uh extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ul(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new es(5,5,5),i=new kt({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:An});i.uniforms.tEquirect.value=t;const o=new bt(s,i),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=zt),new Ih(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(i)}}class Ss extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nh={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,i=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),v=this._getHandJoint(u,g);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=m.radius),v.visible=m!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),c=.02,p=.005;u.inputState.pinching&&d>c+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=c-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nh)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=i!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Fh extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sr=new z,Bh=new z,Oh=new Xe;class On{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Sr.subVectors(n,t).cross(Bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Oh.getNormalMatrix(e),s=this.coplanarPoint(Sr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new qs,Hh=new ge(.5,.5),Ms=new z;class Nl{constructor(e=new On,t=new On,n=new On,s=new On,i=new On,o=new On){this.planes=[e,t,n,s,i,o]}set(e,t,n,s,i,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(i),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const s=this.planes,i=e.elements,o=i[0],a=i[1],l=i[2],u=i[3],h=i[4],f=i[5],d=i[6],c=i[7],p=i[8],g=i[9],m=i[10],v=i[11],E=i[12],y=i[13],S=i[14],x=i[15];if(s[0].setComponents(u-o,c-h,v-p,x-E).normalize(),s[1].setComponents(u+o,c+h,v+p,x+E).normalize(),s[2].setComponents(u+a,c+f,v+g,x+y).normalize(),s[3].setComponents(u-a,c-f,v-g,x-y).normalize(),n)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(u-l,c-d,v-m,x-S).normalize();else if(s[4].setComponents(u-l,c-d,v-m,x-S).normalize(),t===tn)s[5].setComponents(u+l,c+d,v+m,x+S).normalize();else if(t===ks)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){Nn.center.set(0,0,0);const t=Hh.distanceTo(e.center);return Nn.radius=.7071067811865476+t,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ms.x=s.normal.x>0?e.max.x:e.min.x,Ms.y=s.normal.y>0?e.max.y:e.min.y,Ms.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fl extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gs=new z,Vs=new z,Ma=new ut,Ii=new Al,Es=new qs,Mr=new z,Ea=new z;class wa extends Ct{constructor(e=new Jt,t=new Fl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,i=t.count;s<i;s++)Gs.fromBufferAttribute(t,s-1),Vs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Gs.distanceTo(Vs);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),Es.radius+=i,e.ray.intersectsSphere(Es)===!1)return;Ma.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Ma);const a=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const c=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=c,m=p-1;g<m;g+=u){const v=h.getX(g),E=h.getX(g+1),y=ws(this,e,Ii,l,v,E,g);y&&t.push(y)}if(this.isLineLoop){const g=h.getX(p-1),m=h.getX(c),v=ws(this,e,Ii,l,g,m,p-1);v&&t.push(v)}}else{const c=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=c,m=p-1;g<m;g+=u){const v=ws(this,e,Ii,l,g,g+1,g);v&&t.push(v)}if(this.isLineLoop){const g=ws(this,e,Ii,l,p-1,c,p-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=s.length;i<o;i++){const a=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}}function ws(r,e,t,n,s,i,o){const a=r.geometry.attributes.position;if(Gs.fromBufferAttribute(a,s),Vs.fromBufferAttribute(a,i),t.distanceSqToSegment(Gs,Vs,Mr,Ea)>n)return;Mr.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(Mr);if(!(u<e.near||u>e.far))return{distance:u,point:Ea.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class Bl extends Mt{constructor(e,t,n=Xn,s,i,o,a=Zt,l=Zt,u,h=Vi,f=1){if(h!==Vi&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,i,o,a,l,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ol extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),i=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),i+=n.distanceTo(s),t.push(i),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const i=n.length;let o;t?o=t:o=e*n[i-1];let a=0,l=i-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(i-1);const h=n[s],d=n[s+1]-h,c=(o-h)/d;return(s+c)/(i-1)}getTangent(e,t){let s=e-1e-4,i=e+1e-4;s<0&&(s=0),i>1&&(i=1);const o=this.getPoint(s),a=this.getPoint(i),l=t||(o.isVector2?new ge:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new z,s=[],i=[],o=[],a=new z,l=new ut;for(let c=0;c<=e;c++){const p=c/e;s[c]=this.getTangentAt(p,new z)}i[0]=new z,o[0]=new z;let u=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),d<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),i[0].crossVectors(s[0],a),o[0].crossVectors(s[0],i[0]);for(let c=1;c<=e;c++){if(i[c]=i[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos($e(s[c-1].dot(s[c]),-1,1));i[c].applyMatrix4(l.makeRotationAxis(a,p))}o[c].crossVectors(s[c],i[c])}if(t===!0){let c=Math.acos($e(i[0].dot(i[e]),-1,1));c/=e,s[0].dot(a.crossVectors(i[0],i[e]))>0&&(c=-c);for(let p=1;p<=e;p++)i[p].applyMatrix4(l.makeRotationAxis(s[p],c*p)),o[p].crossVectors(s[p],i[p])}return{tangents:s,normals:i,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fo extends sn{constructor(e=0,t=0,n=1,s=1,i=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=i,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){const n=t,s=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const o=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=s;for(;i>s;)i-=s;i<Number.EPSILON&&(o?i=0:i=s),this.aClockwise===!0&&!o&&(i===s?i=-s:i=i-s);const a=this.aStartAngle+e*i;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,c=u-this.aY;l=d*h-c*f+this.aX,u=d*f+c*h+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zh extends Fo{constructor(e,t,n,s,i,o){super(e,t,n,n,s,i,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bo(){let r=0,e=0,t=0,n=0;function s(i,o,a,l){r=i,e=a,t=-3*i+3*o-2*a-l,n=2*i-2*o+a+l}return{initCatmullRom:function(i,o,a,l,u){s(o,a,u*(a-i),u*(l-o))},initNonuniformCatmullRom:function(i,o,a,l,u,h,f){let d=(o-i)/u-(a-i)/(u+h)+(a-o)/h,c=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,c*=h,s(o,a,d,c)},calc:function(i){const o=i*i,a=o*i;return r+e*i+t*o+n*a}}}const Ts=new z,Er=new Bo,wr=new Bo,Tr=new Bo;class kh extends sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){const n=t,s=this.points,i=s.length,o=(i-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/i)+1)*i:l===0&&a===i-1&&(a=i-2,l=1);let u,h;this.closed||a>0?u=s[(a-1)%i]:(Ts.subVectors(s[0],s[1]).add(s[0]),u=Ts);const f=s[a%i],d=s[(a+1)%i];if(this.closed||a+2<i?h=s[(a+2)%i]:(Ts.subVectors(s[i-1],s[i-2]).add(s[i-1]),h=Ts),this.curveType==="centripetal"||this.curveType==="chordal"){const c=this.curveType==="chordal"?.5:.25;let p=Math.pow(u.distanceToSquared(f),c),g=Math.pow(f.distanceToSquared(d),c),m=Math.pow(d.distanceToSquared(h),c);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Er.initNonuniformCatmullRom(u.x,f.x,d.x,h.x,p,g,m),wr.initNonuniformCatmullRom(u.y,f.y,d.y,h.y,p,g,m),Tr.initNonuniformCatmullRom(u.z,f.z,d.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(Er.initCatmullRom(u.x,f.x,d.x,h.x,this.tension),wr.initCatmullRom(u.y,f.y,d.y,h.y,this.tension),Tr.initCatmullRom(u.z,f.z,d.z,h.z,this.tension));return n.set(Er.calc(l),wr.calc(l),Tr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ta(r,e,t,n,s){const i=(n-e)*.5,o=(s-t)*.5,a=r*r,l=r*a;return(2*t-2*n+i+o)*l+(-3*t+3*n-2*i-o)*a+i*r+t}function Gh(r,e){const t=1-r;return t*t*e}function Vh(r,e){return 2*(1-r)*r*e}function Wh(r,e){return r*r*e}function Oi(r,e,t,n){return Gh(r,e)+Vh(r,t)+Wh(r,n)}function Xh(r,e){const t=1-r;return t*t*t*e}function Yh(r,e){const t=1-r;return 3*t*t*r*e}function qh(r,e){return 3*(1-r)*r*r*e}function $h(r,e){return r*r*r*e}function Hi(r,e,t,n,s){return Xh(r,e)+Yh(r,t)+qh(r,n)+$h(r,s)}class Hl extends sn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){const n=t,s=this.v0,i=this.v1,o=this.v2,a=this.v3;return n.set(Hi(e,s.x,i.x,o.x,a.x),Hi(e,s.y,i.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zh extends sn{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){const n=t,s=this.v0,i=this.v1,o=this.v2,a=this.v3;return n.set(Hi(e,s.x,i.x,o.x,a.x),Hi(e,s.y,i.y,o.y,a.y),Hi(e,s.z,i.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zl extends sn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kh extends sn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kl extends sn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,s=this.v0,i=this.v1,o=this.v2;return n.set(Oi(e,s.x,i.x,o.x),Oi(e,s.y,i.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends sn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,s=this.v0,i=this.v1,o=this.v2;return n.set(Oi(e,s.x,i.x,o.x),Oi(e,s.y,i.y,o.y),Oi(e,s.z,i.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gl extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,s=this.points,i=(s.length-1)*e,o=Math.floor(i),a=i-o,l=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Ta(a,l.x,u.x,h.x,f.x),Ta(a,l.y,u.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ge().fromArray(s))}return this}}var Mo=Object.freeze({__proto__:null,ArcCurve:zh,CatmullRomCurve3:kh,CubicBezierCurve:Hl,CubicBezierCurve3:Zh,EllipseCurve:Fo,LineCurve:zl,LineCurve3:Kh,QuadraticBezierCurve:kl,QuadraticBezierCurve3:Jh,SplineCurve:Gl});class jh extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let i=0;for(;i<s.length;){if(s[i]>=n){const o=s[i]-n,a=this.curves[i],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,i=this.curves;s<i.length;s++){const o=i[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const h=l[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Mo[s.type]().fromJSON(s))}return this}}class Eo extends jh{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new zl(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const i=new kl(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(i),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,i,o){const a=new Hl(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(i,o));return this.curves.push(a),this.currentPoint.set(i,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,i,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,i,o),this}absarc(e,t,n,s,i,o){return this.absellipse(e,t,n,n,s,i,o),this}ellipse(e,t,n,s,i,o,a,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,i,o,a,l),this}absellipse(e,t,n,s,i,o,a,l){const u=new Fo(e,t,n,s,i,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bs extends Eo{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Eo().fromJSON(s))}return this}}function Qh(r,e,t=2){const n=e&&e.length,s=n?e[0]*t:r.length;let i=Vl(r,0,s,t,!0);const o=[];if(!i||i.next===i.prev)return o;let a,l,u;if(n&&(i=su(r,e,i,t)),r.length>80*t){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let d=t;d<s;d+=t){const c=r[d],p=r[d+1];c<a&&(a=c),p<l&&(l=p),c>h&&(h=c),p>f&&(f=p)}u=Math.max(h-a,f-l),u=u!==0?32767/u:0}return qi(i,o,t,a,l,u,0),o}function Vl(r,e,t,n,s){let i;if(s===mu(r,e,t,n)>0)for(let o=e;o<t;o+=n)i=ba(o/n|0,r[o],r[o+1],i);else for(let o=t-n;o>=e;o-=n)i=ba(o/n|0,r[o],r[o+1],i);return i&&Mi(i,i.next)&&(Zi(i),i=i.next),i}function qn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Mi(t,t.next)||lt(t.prev,t,t.next)===0)){if(Zi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qi(r,e,t,n,s,i,o){if(!r)return;!o&&i&&cu(r,n,s,i);let a=r;for(;r.prev!==r.next;){const l=r.prev,u=r.next;if(i?tu(r,n,s,i):eu(r)){e.push(l.i,r.i,u.i),Zi(r),r=u.next,a=u.next;continue}if(r=u,r===a){o?o===1?(r=nu(qn(r),e),qi(r,e,t,n,s,i,2)):o===2&&iu(r,e,t,n,s,i):qi(qn(r),e,t,n,s,i,1);break}}}function eu(r){const e=r.prev,t=r,n=r.next;if(lt(e,t,n)>=0)return!1;const s=e.x,i=t.x,o=n.x,a=e.y,l=t.y,u=n.y,h=Math.min(s,i,o),f=Math.min(a,l,u),d=Math.max(s,i,o),c=Math.max(a,l,u);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=f&&p.y<=c&&Fi(s,a,i,l,o,u,p.x,p.y)&&lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function tu(r,e,t,n){const s=r.prev,i=r,o=r.next;if(lt(s,i,o)>=0)return!1;const a=s.x,l=i.x,u=o.x,h=s.y,f=i.y,d=o.y,c=Math.min(a,l,u),p=Math.min(h,f,d),g=Math.max(a,l,u),m=Math.max(h,f,d),v=wo(c,p,e,t,n),E=wo(g,m,e,t,n);let y=r.prevZ,S=r.nextZ;for(;y&&y.z>=v&&S&&S.z<=E;){if(y.x>=c&&y.x<=g&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Fi(a,h,l,f,u,d,y.x,y.y)&&lt(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=c&&S.x<=g&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Fi(a,h,l,f,u,d,S.x,S.y)&&lt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=v;){if(y.x>=c&&y.x<=g&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Fi(a,h,l,f,u,d,y.x,y.y)&&lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=E;){if(S.x>=c&&S.x<=g&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Fi(a,h,l,f,u,d,S.x,S.y)&&lt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function nu(r,e){let t=r;do{const n=t.prev,s=t.next.next;!Mi(n,s)&&Xl(n,t,t.next,s)&&$i(n,s)&&$i(s,n)&&(e.push(n.i,t.i,s.i),Zi(t),Zi(t.next),t=r=s),t=t.next}while(t!==r);return qn(t)}function iu(r,e,t,n,s,i){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fu(o,a)){let l=Yl(o,a);o=qn(o,o.next),l=qn(l,l.next),qi(o,e,t,n,s,i,0),qi(l,e,t,n,s,i,0);return}a=a.next}o=o.next}while(o!==r)}function su(r,e,t,n){const s=[];for(let i=0,o=e.length;i<o;i++){const a=e[i]*n,l=i<o-1?e[i+1]*n:r.length,u=Vl(r,a,l,n,!1);u===u.next&&(u.steiner=!0),s.push(uu(u))}s.sort(ru);for(let i=0;i<s.length;i++)t=ou(s[i],t);return t}function ru(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ou(r,e){const t=au(r,e);if(!t)return e;const n=Yl(t,r);return qn(n,n.next),qn(t,t.next)}function au(r,e){let t=e;const n=r.x,s=r.y;let i=-1/0,o;if(Mi(r,t))return t;do{if(Mi(r,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>i&&(i=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,u=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Wl(s<u?n:i,s,l,u,s<u?i:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);$i(t,r)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&lu(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function lu(r,e){return lt(r.prev,r,e.prev)<0&&lt(e.next,r,r.next)<0}function cu(r,e,t,n){let s=r;do s.z===0&&(s.z=wo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==r);s.prevZ.nextZ=null,s.prevZ=null,hu(s)}function hu(r){let e,t=1;do{let n=r,s;r=null;let i=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),i?i.nextZ=s:r=s,s.prevZ=i,i=s;n=o}i.nextZ=null,t*=2}while(e>1);return r}function wo(r,e,t,n,s){return r=(r-t)*s|0,e=(e-n)*s|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function uu(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Wl(r,e,t,n,s,i,o,a){return(s-o)*(e-a)>=(r-o)*(i-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(i-a)>=(s-o)*(n-a)}function Fi(r,e,t,n,s,i,o,a){return!(r===o&&e===a)&&Wl(r,e,t,n,s,i,o,a)}function fu(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!du(r,e)&&($i(r,e)&&$i(e,r)&&pu(r,e)&&(lt(r.prev,r,e.prev)||lt(r,e.prev,e))||Mi(r,e)&&lt(r.prev,r,r.next)>0&&lt(e.prev,e,e.next)>0)}function lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Mi(r,e){return r.x===e.x&&r.y===e.y}function Xl(r,e,t,n){const s=As(lt(r,e,t)),i=As(lt(r,e,n)),o=As(lt(t,n,r)),a=As(lt(t,n,e));return!!(s!==i&&o!==a||s===0&&bs(r,t,e)||i===0&&bs(r,n,e)||o===0&&bs(t,r,n)||a===0&&bs(t,e,n))}function bs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function As(r){return r>0?1:r<0?-1:0}function du(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Xl(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function $i(r,e){return lt(r.prev,r,r.next)<0?lt(r,e,r.next)>=0&&lt(r,r.prev,e)>=0:lt(r,e,r.prev)<0||lt(r,r.next,e)<0}function pu(r,e){let t=r,n=!1;const s=(r.x+e.x)/2,i=(r.y+e.y)/2;do t.y>i!=t.next.y>i&&t.next.y!==t.y&&s<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Yl(r,e){const t=To(r.i,r.x,r.y),n=To(e.i,e.x,e.y),s=r.next,i=e.prev;return r.next=e,e.prev=r,t.next=s,s.prev=t,n.next=t,t.prev=n,i.next=n,n.prev=i,n}function ba(r,e,t,n){const s=To(r,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function To(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mu(r,e,t,n){let s=0;for(let i=e,o=t-n;i<t;i+=n)s+=(r[o]-r[i])*(r[i+1]+r[o+1]),o=i;return s}class gu{static triangulate(e,t,n=2){return Qh(e,t,n)}}class Wn{static area(e){const t=e.length;let n=0;for(let s=t-1,i=0;i<t;s=i++)n+=e[s].x*e[i].y-e[i].x*e[s].y;return n*.5}static isClockWise(e){return Wn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],i=[];Aa(e),Ca(n,e);let o=e.length;t.forEach(Aa);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ca(n,t[l]);const a=gu.triangulate(n,s);for(let l=0;l<a.length;l+=3)i.push(a.slice(l,l+3));return i}}function Aa(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Ca(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Oo extends Jt{constructor(e=new Bs([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],i=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new nn(s,3)),this.setAttribute("uv",new nn(i,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,c=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:c-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:vu;let y,S=!1,x,M,T,b;v&&(y=v.getSpacedPoints(h),S=!0,d=!1,x=v.computeFrenetFrames(h,!1),M=new z,T=new z,b=new z),d||(m=0,c=0,p=0,g=0);const w=a.extractPoints(u);let _=w.shape;const A=w.holes;if(!Wn.isClockWise(_)){_=_.reverse();for(let ne=0,Q=A.length;ne<Q;ne++){const K=A[ne];Wn.isClockWise(K)&&(A[ne]=K.reverse())}}function D(ne){const K=10000000000000001e-36;let Z=ne[0];for(let he=1;he<=ne.length;he++){const ie=he%ne.length,ue=ne[ie],He=ue.x-Z.x,Fe=ue.y-Z.y,L=He*He+Fe*Fe,C=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(Z.x),Math.abs(Z.y)),V=K*C*C;if(L<=V){ne.splice(ie,1),he--;continue}Z=ue}}D(_),A.forEach(D);const N=A.length,U=_;for(let ne=0;ne<N;ne++){const Q=A[ne];_=_.concat(Q)}function B(ne,Q,K){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(Q,K)}const O=_.length;function k(ne,Q,K){let Z,he,ie;const ue=ne.x-Q.x,He=ne.y-Q.y,Fe=K.x-ne.x,L=K.y-ne.y,C=ue*ue+He*He,V=ue*L-He*Fe;if(Math.abs(V)>Number.EPSILON){const q=Math.sqrt(C),te=Math.sqrt(Fe*Fe+L*L),$=Q.x-He/q,Me=Q.y+ue/q,le=K.x-L/te,Ae=K.y+Fe/te,Ce=((le-$)*L-(Ae-Me)*Fe)/(ue*L-He*Fe);Z=$+ue*Ce-ne.x,he=Me+He*Ce-ne.y;const re=Z*Z+he*he;if(re<=2)return new ge(Z,he);ie=Math.sqrt(re/2)}else{let q=!1;ue>Number.EPSILON?Fe>Number.EPSILON&&(q=!0):ue<-Number.EPSILON?Fe<-Number.EPSILON&&(q=!0):Math.sign(He)===Math.sign(L)&&(q=!0),q?(Z=-He,he=ue,ie=Math.sqrt(C)):(Z=ue,he=He,ie=Math.sqrt(C/2))}return new ge(Z/ie,he/ie)}const J=[];for(let ne=0,Q=U.length,K=Q-1,Z=ne+1;ne<Q;ne++,K++,Z++)K===Q&&(K=0),Z===Q&&(Z=0),J[ne]=k(U[ne],U[K],U[Z]);const se=[];let fe,be=J.concat();for(let ne=0,Q=N;ne<Q;ne++){const K=A[ne];fe=[];for(let Z=0,he=K.length,ie=he-1,ue=Z+1;Z<he;Z++,ie++,ue++)ie===he&&(ie=0),ue===he&&(ue=0),fe[Z]=k(K[Z],K[ie],K[ue]);se.push(fe),be=be.concat(fe)}let Ue;if(m===0)Ue=Wn.triangulateShape(U,A);else{const ne=[],Q=[];for(let K=0;K<m;K++){const Z=K/m,he=c*Math.cos(Z*Math.PI/2),ie=p*Math.sin(Z*Math.PI/2)+g;for(let ue=0,He=U.length;ue<He;ue++){const Fe=B(U[ue],J[ue],ie);we(Fe.x,Fe.y,-he),Z===0&&ne.push(Fe)}for(let ue=0,He=N;ue<He;ue++){const Fe=A[ue];fe=se[ue];const L=[];for(let C=0,V=Fe.length;C<V;C++){const q=B(Fe[C],fe[C],ie);we(q.x,q.y,-he),Z===0&&L.push(q)}Z===0&&Q.push(L)}}Ue=Wn.triangulateShape(ne,Q)}const qe=Ue.length,ke=p+g;for(let ne=0;ne<O;ne++){const Q=d?B(_[ne],be[ne],ke):_[ne];S?(T.copy(x.normals[0]).multiplyScalar(Q.x),M.copy(x.binormals[0]).multiplyScalar(Q.y),b.copy(y[0]).add(T).add(M),we(b.x,b.y,b.z)):we(Q.x,Q.y,0)}for(let ne=1;ne<=h;ne++)for(let Q=0;Q<O;Q++){const K=d?B(_[Q],be[Q],ke):_[Q];S?(T.copy(x.normals[ne]).multiplyScalar(K.x),M.copy(x.binormals[ne]).multiplyScalar(K.y),b.copy(y[ne]).add(T).add(M),we(b.x,b.y,b.z)):we(K.x,K.y,f/h*ne)}for(let ne=m-1;ne>=0;ne--){const Q=ne/m,K=c*Math.cos(Q*Math.PI/2),Z=p*Math.sin(Q*Math.PI/2)+g;for(let he=0,ie=U.length;he<ie;he++){const ue=B(U[he],J[he],Z);we(ue.x,ue.y,f+K)}for(let he=0,ie=A.length;he<ie;he++){const ue=A[he];fe=se[he];for(let He=0,Fe=ue.length;He<Fe;He++){const L=B(ue[He],fe[He],Z);S?we(L.x,L.y+y[h-1].y,y[h-1].x+K):we(L.x,L.y,f+K)}}}W(),j();function W(){const ne=s.length/3;if(d){let Q=0,K=O*Q;for(let Z=0;Z<qe;Z++){const he=Ue[Z];_e(he[2]+K,he[1]+K,he[0]+K)}Q=h+m*2,K=O*Q;for(let Z=0;Z<qe;Z++){const he=Ue[Z];_e(he[0]+K,he[1]+K,he[2]+K)}}else{for(let Q=0;Q<qe;Q++){const K=Ue[Q];_e(K[2],K[1],K[0])}for(let Q=0;Q<qe;Q++){const K=Ue[Q];_e(K[0]+O*h,K[1]+O*h,K[2]+O*h)}}n.addGroup(ne,s.length/3-ne,0)}function j(){const ne=s.length/3;let Q=0;de(U,Q),Q+=U.length;for(let K=0,Z=A.length;K<Z;K++){const he=A[K];de(he,Q),Q+=he.length}n.addGroup(ne,s.length/3-ne,1)}function de(ne,Q){let K=ne.length;for(;--K>=0;){const Z=K;let he=K-1;he<0&&(he=ne.length-1);for(let ie=0,ue=h+m*2;ie<ue;ie++){const He=O*ie,Fe=O*(ie+1),L=Q+Z+He,C=Q+he+He,V=Q+he+Fe,q=Q+Z+Fe;Oe(L,C,V,q)}}}function we(ne,Q,K){l.push(ne),l.push(Q),l.push(K)}function _e(ne,Q,K){Ve(ne),Ve(Q),Ve(K);const Z=s.length/3,he=E.generateTopUV(n,s,Z-3,Z-2,Z-1);I(he[0]),I(he[1]),I(he[2])}function Oe(ne,Q,K,Z){Ve(ne),Ve(Q),Ve(Z),Ve(Q),Ve(K),Ve(Z);const he=s.length/3,ie=E.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);I(ie[0]),I(ie[1]),I(ie[3]),I(ie[1]),I(ie[2]),I(ie[3])}function Ve(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function I(ne){i.push(ne.x),i.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return xu(t,n,e)}static fromJSON(e,t){const n=[];for(let i=0,o=e.shapes.length;i<o;i++){const a=t[e.shapes[i]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Mo[s.type]().fromJSON(s)),new Oo(n,e.options)}}const vu={generateTopUV:function(r,e,t,n,s){const i=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],u=e[s*3],h=e[s*3+1];return[new ge(i,o),new ge(a,l),new ge(u,h)]},generateSideWallUV:function(r,e,t,n,s,i){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],c=e[s*3+1],p=e[s*3+2],g=e[i*3],m=e[i*3+1],v=e[i*3+2];return Math.abs(a-h)<Math.abs(o-u)?[new ge(o,1-l),new ge(u,1-f),new ge(d,1-p),new ge(g,1-v)]:[new ge(a,1-l),new ge(h,1-f),new ge(c,1-p),new ge(m,1-v)]}};function xu(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,s=r.length;n<s;n++){const i=r[n];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class mn extends Jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const i=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),u=a+1,h=l+1,f=e/a,d=t/l,c=[],p=[],g=[],m=[];for(let v=0;v<h;v++){const E=v*d-o;for(let y=0;y<u;y++){const S=y*f-i;p.push(S,-E,0),g.push(0,0,1),m.push(y/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let E=0;E<a;E++){const y=E+u*v,S=E+u*(v+1),x=E+1+u*(v+1),M=E+1+u*v;c.push(y,S,M),c.push(S,x,M)}this.setIndex(c),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.widthSegments,e.heightSegments)}}class _u extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yu extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Su{constructor(e,t,n){const s=this;let i=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,i===!1&&s.onStart!==void 0&&s.onStart(h,o,a),i=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(i=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){const c=u[f],p=u[f+1];if(c.global&&(c.lastIndex=0),c.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Mu=new Su;class ts{constructor(e){this.manager=e!==void 0?e:Mu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,i){n.load(e,s,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ts.DEFAULT_MATERIAL_NAME="__DEFAULT";const un={};class Eu extends Error{constructor(e,t){super(e),this.response=t}}class wu extends ts{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=zi.get(`file:${e}`);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:n,onError:s});return}un[e]=[],un[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=un[e],f=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),c=d?parseInt(d):0,p=c!==0;let g=0;const m=new ReadableStream({start(v){E();function E(){f.read().then(({done:y,value:S})=>{if(y)v.close();else{g+=S.byteLength;const x=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:c});for(let M=0,T=h.length;M<T;M++){const b=h[M];b.onProgress&&b.onProgress(x)}v.enqueue(S),E()}},y=>{v.error(y)})}}});return new Response(m)}else throw new Eu(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a==="")return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,c=new TextDecoder(d);return u.arrayBuffer().then(p=>c.decode(p))}}}).then(u=>{zi.add(`file:${e}`,u);const h=un[e];delete un[e];for(let f=0,d=h.length;f<d;f++){const c=h[f];c.onLoad&&c.onLoad(u)}}).catch(u=>{const h=un[e];if(h===void 0)throw this.manager.itemError(e),u;delete un[e];for(let f=0,d=h.length;f<d;f++){const c=h[f];c.onError&&c.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const li=new WeakMap;class Tu extends ts{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,o=zi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(o),i.manager.itemEnd(e)},0);else{let f=li.get(o);f===void 0&&(f=[],li.set(o,f)),f.push({onLoad:t,onError:s})}return o}const a=Xi("img");function l(){h(),t&&t(this);const f=li.get(this)||[];for(let d=0;d<f.length;d++){const c=f[d];c.onLoad&&c.onLoad(this)}li.delete(this),i.manager.itemEnd(e)}function u(f){h(),s&&s(f),zi.remove(`image:${e}`);const d=li.get(this)||[];for(let c=0;c<d.length;c++){const p=d[c];p.onError&&p.onError(f)}li.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),zi.add(`image:${e}`,a),i.manager.itemStart(e),a.src=e,a}}class bu extends ts{constructor(e){super(e)}load(e,t,n,s){const i=new Mt,o=new Tu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){i.image=a,i.needsUpdate=!0,t!==void 0&&t(i)},n,s),i}}class ql extends Il{constructor(e=-1,t=1,n=1,s=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=u*this.view.offsetX,o=i+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(i,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Au extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Cu{constructor(){this.type="ShapePath",this.color=new Ke,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Eo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,i,o){return this.currentPath.bezierCurveTo(e,t,n,s,i,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(v){const E=[];for(let y=0,S=v.length;y<S;y++){const x=v[y],M=new Bs;M.curves=x.curves,E.push(M)}return E}function n(v,E){const y=E.length;let S=!1;for(let x=y-1,M=0;M<y;x=M++){let T=E[x],b=E[M],w=b.x-T.x,_=b.y-T.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(T=E[M],w=-w,b=E[x],_=-_),v.y<T.y||v.y>b.y)continue;if(v.y===T.y){if(v.x===T.x)return!0}else{const A=_*(v.x-T.x)-w*(v.y-T.y);if(A===0)return!0;if(A<0)continue;S=!S}}else{if(v.y!==T.y)continue;if(b.x<=v.x&&v.x<=T.x||T.x<=v.x&&v.x<=b.x)return!0}}return S}const s=Wn.isClockWise,i=this.subPaths;if(i.length===0)return[];let o,a,l;const u=[];if(i.length===1)return a=i[0],l=new Bs,l.curves=a.curves,u.push(l),u;let h=!s(i[0].getPoints());h=e?!h:h;const f=[],d=[];let c=[],p=0,g;d[p]=void 0,c[p]=[];for(let v=0,E=i.length;v<E;v++)a=i[v],g=a.getPoints(),o=s(g),o=e?!o:o,o?(!h&&d[p]&&p++,d[p]={s:new Bs,p:g},d[p].s.curves=a.curves,h&&p++,c[p]=[]):c[p].push({h:a,p:g[0]});if(!d[0])return t(i);if(d.length>1){let v=!1,E=0;for(let y=0,S=d.length;y<S;y++)f[y]=[];for(let y=0,S=d.length;y<S;y++){const x=c[y];for(let M=0;M<x.length;M++){const T=x[M];let b=!0;for(let w=0;w<d.length;w++)n(T.p,d[w].p)&&(y!==w&&E++,b?(b=!1,f[w].push(T)):v=!0);b&&f[y].push(T)}}E>0&&v===!1&&(c=f)}let m;for(let v=0,E=d.length;v<E;v++){l=d[v].s,u.push(l),m=c[v];for(let y=0,S=m.length;y<S;y++)l.holes.push(m[y].h)}return u}}function Ra(r,e,t,n){const s=Ru(n);switch(t){case yl:return r*e;case Ml:return r*e/s.components*s.byteLength;case Lo:return r*e/s.components*s.byteLength;case El:return r*e*2/s.components*s.byteLength;case Do:return r*e*2/s.components*s.byteLength;case Sl:return r*e*3/s.components*s.byteLength;case qt:return r*e*4/s.components*s.byteLength;case Io:return r*e*4/s.components*s.byteLength;case Is:case Us:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Fs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qr:case Zr:return Math.max(r,16)*Math.max(e,8)/4;case Yr:case $r:return Math.max(r,8)*Math.max(e,8)/2;case Kr:case Jr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case no:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case io:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ao:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vo:case xo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case _o:case yo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ru(r){switch(r){case vn:case gl:return{byteLength:1,components:1};case ki:case vl:case Ki:return{byteLength:2,components:1};case Ro:case Po:return{byteLength:2,components:4};case Xn:case Co:case pn:return{byteLength:4,components:1};case xl:case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $l(){let r=null,e=!1,t=null,n=null;function s(i,o){t(i,o),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){r=i}}}function Pu(r){const e=new WeakMap;function t(a,l){const u=a.array,h=a.usage,f=u.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,u,h),a.onUploadCallback();let c;if(u instanceof Float32Array)c=r.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)c=r.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?c=r.HALF_FLOAT:c=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)c=r.SHORT;else if(u instanceof Uint32Array)c=r.UNSIGNED_INT;else if(u instanceof Int32Array)c=r.INT;else if(u instanceof Int8Array)c=r.BYTE;else if(u instanceof Uint8Array)c=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)c=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:c,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,u){const h=l.array,f=l.updateRanges;if(r.bindBuffer(u,a),f.length===0)r.bufferSubData(u,0,h);else{f.sort((c,p)=>c.start-p.start);let d=0;for(let c=1;c<f.length;c++){const p=f[d],g=f[c];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,f[d]=g)}f.length=d+1;for(let c=0,p=f.length;c<p;c++){const g=f[c];r.bufferSubData(u,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function i(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:s,remove:i,update:o}}var Lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Du=`#ifdef USE_ALPHAHASH
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
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
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
#endif`,Ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ef=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,tf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Pf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,If=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kf=`#if defined( USE_POINTS_UV )
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
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
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
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
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
#endif`,td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xd=`#ifdef USE_SKINNING
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
#endif`,_d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Td=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bd=`#ifdef USE_TRANSMISSION
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dd=`uniform sampler2D t2D;
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
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ud=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`#include <common>
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
}`,Od=`#if DEPTH_PACKING == 3200
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
}`,Hd=`#define DISTANCE
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
}`,zd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`uniform float scale;
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
}`,Wd=`uniform vec3 diffuse;
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
}`,Xd=`#include <common>
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
}`,Yd=`uniform vec3 diffuse;
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
}`,qd=`#define LAMBERT
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
}`,$d=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Zd=`#define MATCAP
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
}`,Kd=`#define MATCAP
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
}`,Jd=`#define NORMAL
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
}`,jd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qd=`#define PHONG
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
}`,ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,tp=`#define STANDARD
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
}`,np=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ip=`#define TOON
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
}`,sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,rp=`uniform float size;
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
}`,op=`uniform vec3 diffuse;
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
}`,ap=`#include <common>
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
}`,lp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cp=`uniform float rotation;
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
}`,hp=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Lu,alphahash_pars_fragment:Du,alphamap_fragment:Iu,alphamap_pars_fragment:Uu,alphatest_fragment:Nu,alphatest_pars_fragment:Fu,aomap_fragment:Bu,aomap_pars_fragment:Ou,batching_pars_vertex:Hu,batching_vertex:zu,begin_vertex:ku,beginnormal_vertex:Gu,bsdfs:Vu,iridescence_fragment:Wu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:qu,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Zu,color_fragment:Ku,color_pars_fragment:Ju,color_pars_vertex:ju,color_vertex:Qu,common:ef,cube_uv_reflection_fragment:tf,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:of,emissivemap_pars_fragment:af,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:ff,envmap_pars_vertex:df,envmap_physical_pars_fragment:wf,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:vf,fog_pars_fragment:xf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:yf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:Mf,lights_pars_begin:Ef,lights_toon_fragment:Tf,lights_toon_pars_fragment:bf,lights_phong_fragment:Af,lights_phong_pars_fragment:Cf,lights_physical_fragment:Rf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Lf,lights_fragment_maps:Df,lights_fragment_end:If,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Bf,map_fragment:Of,map_pars_fragment:Hf,map_particle_fragment:zf,map_particle_pars_fragment:kf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Vf,morphinstance_vertex:Wf,morphcolor_vertex:Xf,morphnormal_vertex:Yf,morphtarget_pars_vertex:qf,morphtarget_vertex:$f,normal_fragment_begin:Zf,normal_fragment_maps:Kf,normal_pars_fragment:Jf,normal_pars_vertex:jf,normal_vertex:Qf,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:td,clearcoat_normal_fragment_maps:nd,clearcoat_pars_fragment:id,iridescence_pars_fragment:sd,opaque_fragment:rd,packing:od,premultiplied_alpha_fragment:ad,project_vertex:ld,dithering_fragment:cd,dithering_pars_fragment:hd,roughnessmap_fragment:ud,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:dd,shadowmap_pars_vertex:pd,shadowmap_vertex:md,shadowmask_pars_fragment:gd,skinbase_vertex:vd,skinning_pars_vertex:xd,skinning_vertex:_d,skinnormal_vertex:yd,specularmap_fragment:Sd,specularmap_pars_fragment:Md,tonemapping_fragment:Ed,tonemapping_pars_fragment:wd,transmission_fragment:Td,transmission_pars_fragment:bd,uv_pars_fragment:Ad,uv_pars_vertex:Cd,uv_vertex:Rd,worldpos_vertex:Pd,background_vert:Ld,background_frag:Dd,backgroundCube_vert:Id,backgroundCube_frag:Ud,cube_vert:Nd,cube_frag:Fd,depth_vert:Bd,depth_frag:Od,distanceRGBA_vert:Hd,distanceRGBA_frag:zd,equirect_vert:kd,equirect_frag:Gd,linedashed_vert:Vd,linedashed_frag:Wd,meshbasic_vert:Xd,meshbasic_frag:Yd,meshlambert_vert:qd,meshlambert_frag:$d,meshmatcap_vert:Zd,meshmatcap_frag:Kd,meshnormal_vert:Jd,meshnormal_frag:jd,meshphong_vert:Qd,meshphong_frag:ep,meshphysical_vert:tp,meshphysical_frag:np,meshtoon_vert:ip,meshtoon_frag:sp,points_vert:rp,points_frag:op,shadow_vert:ap,shadow_frag:lp,sprite_vert:cp,sprite_frag:hp},me={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},en={basic:{uniforms:St([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:St([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:St([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:St([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:St([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:St([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:St([me.points,me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:St([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:St([me.common,me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:St([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:St([me.sprite,me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:St([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:St([me.lights,me.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};en.physical={uniforms:St([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Cs={r:0,b:0,g:0},Fn=new xn,up=new ut;function fp(r,e,t,n,s,i,o){const a=new Ke(0);let l=i===!0?0:1,u,h,f=null,d=0,c=null;function p(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function g(y){let S=!1;const x=p(y);x===null?v(a,l):x&&x.isColor&&(v(x,1),S=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,S){const x=p(S);x&&(x.isCubeTexture||x.mapping===Ys)?(h===void 0&&(h=new bt(new es(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:Si(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fn.copy(S.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(up.makeRotationFromEuler(Fn)),h.material.toneMapped=je.getTransfer(x.colorSpace)!==tt,(f!==x||d!==x.version||c!==r.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,c=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new bt(new mn(2,2),new kt({name:"BackgroundMaterial",uniforms:Si(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=je.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||c!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,c=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function v(y,S){y.getRGB(Cs,Dl(r)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,S,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,v(a,l)},render:g,addToRenderList:m,dispose:E}}function dp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=d(null);let i=s,o=!1;function a(_,A,R,D,N){let U=!1;const B=f(D,R,A);i!==B&&(i=B,u(i.object)),U=c(_,D,R,N),U&&p(_,D,R,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,S(_,A,R,D),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function u(_){return r.bindVertexArray(_)}function h(_){return r.deleteVertexArray(_)}function f(_,A,R){const D=R.wireframe===!0;let N=n[_.id];N===void 0&&(N={},n[_.id]=N);let U=N[A.id];U===void 0&&(U={},N[A.id]=U);let B=U[D];return B===void 0&&(B=d(l()),U[D]=B),B}function d(_){const A=[],R=[],D=[];for(let N=0;N<t;N++)A[N]=0,R[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:R,attributeDivisors:D,object:_,attributes:{},index:null}}function c(_,A,R,D){const N=i.attributes,U=A.attributes;let B=0;const O=R.getAttributes();for(const k in O)if(O[k].location>=0){const se=N[k];let fe=U[k];if(fe===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor)),se===void 0||se.attribute!==fe||fe&&se.data!==fe.data)return!0;B++}return i.attributesNum!==B||i.index!==D}function p(_,A,R,D){const N={},U=A.attributes;let B=0;const O=R.getAttributes();for(const k in O)if(O[k].location>=0){let se=U[k];se===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(se=_.instanceColor));const fe={};fe.attribute=se,se&&se.data&&(fe.data=se.data),N[k]=fe,B++}i.attributes=N,i.attributesNum=B,i.index=D}function g(){const _=i.newAttributes;for(let A=0,R=_.length;A<R;A++)_[A]=0}function m(_){v(_,0)}function v(_,A){const R=i.newAttributes,D=i.enabledAttributes,N=i.attributeDivisors;R[_]=1,D[_]===0&&(r.enableVertexAttribArray(_),D[_]=1),N[_]!==A&&(r.vertexAttribDivisor(_,A),N[_]=A)}function E(){const _=i.newAttributes,A=i.enabledAttributes;for(let R=0,D=A.length;R<D;R++)A[R]!==_[R]&&(r.disableVertexAttribArray(R),A[R]=0)}function y(_,A,R,D,N,U,B){B===!0?r.vertexAttribIPointer(_,A,R,N,U):r.vertexAttribPointer(_,A,R,D,N,U)}function S(_,A,R,D){g();const N=D.attributes,U=R.getAttributes(),B=A.defaultAttributeValues;for(const O in U){const k=U[O];if(k.location>=0){let J=N[O];if(J===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(J=_.instanceColor)),J!==void 0){const se=J.normalized,fe=J.itemSize,be=e.get(J);if(be===void 0)continue;const Ue=be.buffer,qe=be.type,ke=be.bytesPerElement,W=qe===r.INT||qe===r.UNSIGNED_INT||J.gpuType===Co;if(J.isInterleavedBufferAttribute){const j=J.data,de=j.stride,we=J.offset;if(j.isInstancedInterleavedBuffer){for(let _e=0;_e<k.locationSize;_e++)v(k.location+_e,j.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<k.locationSize;_e++)m(k.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let _e=0;_e<k.locationSize;_e++)y(k.location+_e,fe/k.locationSize,qe,se,de*ke,(we+fe/k.locationSize*_e)*ke,W)}else{if(J.isInstancedBufferAttribute){for(let j=0;j<k.locationSize;j++)v(k.location+j,J.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let j=0;j<k.locationSize;j++)m(k.location+j);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let j=0;j<k.locationSize;j++)y(k.location+j,fe/k.locationSize,qe,se,fe*ke,fe/k.locationSize*j*ke,W)}}else if(B!==void 0){const se=B[O];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(k.location,se);break;case 3:r.vertexAttrib3fv(k.location,se);break;case 4:r.vertexAttrib4fv(k.location,se);break;default:r.vertexAttrib1fv(k.location,se)}}}}E()}function x(){b();for(const _ in n){const A=n[_];for(const R in A){const D=A[R];for(const N in D)h(D[N].object),delete D[N];delete A[R]}delete n[_]}}function M(_){if(n[_.id]===void 0)return;const A=n[_.id];for(const R in A){const D=A[R];for(const N in D)h(D[N].object),delete D[N];delete A[R]}delete n[_.id]}function T(_){for(const A in n){const R=n[A];if(R[_.id]===void 0)continue;const D=R[_.id];for(const N in D)h(D[N].object),delete D[N];delete R[_.id]}}function b(){w(),o=!0,i!==s&&(i=s,u(i.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function pp(r,e,t){let n;function s(u){n=u}function i(u,h){r.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,f){f!==0&&(r.drawArraysInstanced(n,u,h,f),t.update(h,n,f))}function a(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let c=0;for(let p=0;p<f;p++)c+=h[p];t.update(c,n,1)}function l(u,h,f,d){if(f===0)return;const c=e.get("WEBGL_multi_draw");if(c===null)for(let p=0;p<u.length;p++)o(u[p],h[p],d[p]);else{c.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g]*d[g];t.update(p,n,1)}}this.setMode=s,this.render=i,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mp(r,e,t,n){let s;function i(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==qt&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==vn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==pn&&!b)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:c,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:x,maxSamples:M}}function gp(r){const e=this;let t=null,n=0,s=!1,i=!1;const o=new On,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const c=f.length!==0||d||n!==0||s;return s=d,n=f.length,c},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,c){const p=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,v=r.get(f);if(!s||p===null||p.length===0||i&&!m)i?h(null):u();else{const E=i?0:n,y=E*4;let S=v.clippingState||null;l.value=S,S=h(p,d,y,c);for(let x=0;x!==y;++x)S[x]=t[x];v.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,c,p){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,p!==!0||m===null){const v=c+g*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<v)&&(m=new Float32Array(v));for(let y=0,S=c;y!==g;++y,S+=4)o.copy(f[y]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function vp(r){let e=new WeakMap;function t(o,a){return a===Gr?o.mapping=xi:a===Vr&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gr||a===Vr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Uh(l.height);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}const fi=4,Pa=[.125,.215,.35,.446,.526,.582],kn=20,br=new ql,La=new Ke;let Ar=null,Cr=0,Rr=0,Pr=!1;const Hn=(1+Math.sqrt(5))/2,ci=1/Hn,Da=[new z(-Hn,ci,0),new z(Hn,ci,0),new z(-ci,0,Hn),new z(ci,0,Hn),new z(0,Hn,-ci),new z(0,Hn,ci),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],xp=new z;class Ia{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,i={}){const{size:o=256,position:a=xp}=i;Ar=this._renderer.getRenderTarget(),Cr=this._renderer.getActiveCubeFace(),Rr=this._renderer.getActiveMipmapLevel(),Pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ar,Cr,Rr),this._renderer.xr.enabled=Pr,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ar=this._renderer.getRenderTarget(),Cr=this._renderer.getActiveCubeFace(),Rr=this._renderer.getActiveMipmapLevel(),Pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Ki,format:qt,colorSpace:yi,depthBuffer:!1},s=Ua(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(i)),this._blurMaterial=yp(i,e,t)}return s}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,s,i){const l=new Xt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,c=f.toneMapping;f.getClearColor(La),f.toneMapping=Cn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const g=new No({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),m=new bt(new es,g);let v=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,v=!0):(g.color.copy(La),v=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,u[y],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x+h[y],i.y,i.z)):S===1?(l.up.set(0,0,u[y]),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y+h[y],i.z)):(l.up.set(0,u[y],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y,i.z+h[y]));const x=this._cubeSize;Rs(s,S*x,y>2?x:0,x,x),f.setRenderTarget(s),v&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=c,f.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===xi||e.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const i=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],i),a=i.uniforms;a.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let i=1;i<s;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Da[(s-i-1)%Da.length];this._blur(e,i-1,i,o,a)}t.autoClear=n}_blur(e,t,n,s,i){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",i),this._halfBlur(o,e,n,n,s,"longitudinal",i)}_halfBlur(e,t,n,s,i,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new bt(this._lodPlanes[s],u),d=u.uniforms,c=this._sizeLods[n]-1,p=isFinite(i)?Math.PI/(2*c):2*Math.PI/(2*kn-1),g=i/p,m=isFinite(i)?1+Math.floor(h*g):kn;m>kn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const v=[];let E=0;for(let T=0;T<kn;++T){const b=T/g,w=Math.exp(-b*b/2);v.push(w),T===0?E+=w:T<m&&(E+=2*w)}for(let T=0;T<v.length;T++)v[T]=v[T]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const S=this._sizeLods[s],x=3*S*(s>y-fi?s-y+fi:0),M=4*(this._cubeSize-S);Rs(t,x,M,3*S,2*S),l.setRenderTarget(t),l.render(f,br)}}function _p(r){const e=[],t=[],n=[];let s=r;const i=r-fi+1+Pa.length;for(let o=0;o<i;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>r-fi?l=Pa[o-r+fi-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],c=6,p=6,g=3,m=2,v=1,E=new Float32Array(g*p*c),y=new Float32Array(m*p*c),S=new Float32Array(v*p*c);for(let M=0;M<c;M++){const T=M%3*2/3-1,b=M>2?0:-1,w=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];E.set(w,g*p*M),y.set(d,m*p*M);const _=[M,M,M,M,M,M];S.set(_,v*p*M)}const x=new Jt;x.setAttribute("position",new It(E,g)),x.setAttribute("uv",new It(y,m)),x.setAttribute("faceIndex",new It(S,v)),e.push(x),s>fi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ua(r,e,t){const n=new Yn(r,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function yp(r,e,t){const n=new Float32Array(kn),s=new z(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Na(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Fa(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sp(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Gr||l===Vr,h=l===xi||l===_i;if(u||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ia(r)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const c=a.image;return u&&c&&c.height>0||h&&c&&s(c)?(t===null&&(t=new Ia(r)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",i),f.texture):null}}}return a}function s(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function i(a){const l=a.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Mp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Yi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ep(r,e,t,n){const s={},i=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];const c=i.get(d);c&&(e.remove(c),i.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const c in d)e.update(d[c],r.ARRAY_BUFFER)}function u(f){const d=[],c=f.index,p=f.attributes.position;let g=0;if(c!==null){const E=c.array;g=c.version;for(let y=0,S=E.length;y<S;y+=3){const x=E[y+0],M=E[y+1],T=E[y+2];d.push(x,M,M,T,T,x)}}else if(p!==void 0){const E=p.array;g=p.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const x=y+0,M=y+1,T=y+2;d.push(x,M,M,T,T,x)}}else return;const m=new(Tl(d)?Ll:Pl)(d,1);m.version=g;const v=i.get(f);v&&e.remove(v),i.set(f,m)}function h(f){const d=i.get(f);if(d){const c=f.index;c!==null&&d.version<c.version&&u(f)}else u(f);return i.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function wp(r,e,t){let n;function s(d){n=d}let i,o;function a(d){i=d.type,o=d.bytesPerElement}function l(d,c){r.drawElements(n,c,i,d*o),t.update(c,n,1)}function u(d,c,p){p!==0&&(r.drawElementsInstanced(n,c,i,d*o,p),t.update(c,n,p))}function h(d,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,i,d,0,p);let m=0;for(let v=0;v<p;v++)m+=c[v];t.update(m,n,1)}function f(d,c,p,g){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d.length;v++)u(d[v]/o,c[v],g[v]);else{m.multiDrawElementsInstancedWEBGL(n,c,0,i,d,0,g,0,p);let v=0;for(let E=0;E<p;E++)v+=c[E]*g[E];t.update(v,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Tp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(i/3);break;case r.LINES:t.lines+=a*(i/2);break;case r.LINE_STRIP:t.lines+=a*(i-1);break;case r.LINE_LOOP:t.lines+=a*i;break;case r.POINTS:t.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bp(r,e,t){const n=new WeakMap,s=new at;function i(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let _=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var c=_;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let x=a.attributes.position.count*S,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*M*4*f),b=new bl(T,x,M,f);b.type=pn,b.needsUpdate=!0;const w=S*4;for(let A=0;A<f;A++){const R=v[A],D=E[A],N=y[A],U=x*M*4*A;for(let B=0;B<R.count;B++){const O=B*w;p===!0&&(s.fromBufferAttribute(R,B),T[U+O+0]=s.x,T[U+O+1]=s.y,T[U+O+2]=s.z,T[U+O+3]=0),g===!0&&(s.fromBufferAttribute(D,B),T[U+O+4]=s.x,T[U+O+5]=s.y,T[U+O+6]=s.z,T[U+O+7]=0),m===!0&&(s.fromBufferAttribute(N,B),T[U+O+8]=s.x,T[U+O+9]=s.y,T[U+O+10]=s.z,T[U+O+11]=N.itemSize===4?s.w:1)}}d={count:f,texture:b,size:new ge(x,M)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<u.length;m++)p+=u[m];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",u)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:i}}function Ap(r,e,t,n){let s=new WeakMap;function i(l){const u=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:i,dispose:o}}const Zl=new Mt,Ba=new Bl(1,1),Kl=new bl,Jl=new vh,jl=new Ul,Oa=[],Ha=[],za=new Float32Array(16),ka=new Float32Array(9),Ga=new Float32Array(4);function bi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let i=Oa[s];if(i===void 0&&(i=new Float32Array(s),Oa[s]=i),e!==0){n.toArray(i,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(i,a)}return i}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function $s(r,e){let t=Ha[e];t===void 0&&(t=new Int32Array(e),Ha[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Cp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Rp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),pt(t,e)}}function Pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),pt(t,e)}}function Lp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),pt(t,e)}}function Dp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Ga.set(n),r.uniformMatrix2fv(this.addr,!1,Ga),pt(t,n)}}function Ip(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;ka.set(n),r.uniformMatrix3fv(this.addr,!1,ka),pt(t,n)}}function Up(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;za.set(n),r.uniformMatrix4fv(this.addr,!1,za),pt(t,n)}}function Np(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2iv(this.addr,e),pt(t,e)}}function Bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3iv(this.addr,e),pt(t,e)}}function Op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4iv(this.addr,e),pt(t,e)}}function Hp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2uiv(this.addr,e),pt(t,e)}}function kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3uiv(this.addr,e),pt(t,e)}}function Gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4uiv(this.addr,e),pt(t,e)}}function Vp(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let i;this.type===r.SAMPLER_2D_SHADOW?(Ba.compareFunction=wl,i=Ba):i=Zl,t.setTexture2D(e||i,s)}function Wp(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Jl,s)}function Xp(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||jl,s)}function Yp(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kl,s)}function qp(r){switch(r){case 5126:return Cp;case 35664:return Rp;case 35665:return Pp;case 35666:return Lp;case 35674:return Dp;case 35675:return Ip;case 35676:return Up;case 5124:case 35670:return Np;case 35667:case 35671:return Fp;case 35668:case 35672:return Bp;case 35669:case 35673:return Op;case 5125:return Hp;case 36294:return zp;case 36295:return kp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return Yp}}function $p(r,e){r.uniform1fv(this.addr,e)}function Zp(r,e){const t=bi(e,this.size,2);r.uniform2fv(this.addr,t)}function Kp(r,e){const t=bi(e,this.size,3);r.uniform3fv(this.addr,t)}function Jp(r,e){const t=bi(e,this.size,4);r.uniform4fv(this.addr,t)}function jp(r,e){const t=bi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Qp(r,e){const t=bi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function em(r,e){const t=bi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function tm(r,e){r.uniform1iv(this.addr,e)}function nm(r,e){r.uniform2iv(this.addr,e)}function im(r,e){r.uniform3iv(this.addr,e)}function sm(r,e){r.uniform4iv(this.addr,e)}function rm(r,e){r.uniform1uiv(this.addr,e)}function om(r,e){r.uniform2uiv(this.addr,e)}function am(r,e){r.uniform3uiv(this.addr,e)}function lm(r,e){r.uniform4uiv(this.addr,e)}function cm(r,e,t){const n=this.cache,s=e.length,i=$s(t,s);dt(n,i)||(r.uniform1iv(this.addr,i),pt(n,i));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zl,i[o])}function hm(r,e,t){const n=this.cache,s=e.length,i=$s(t,s);dt(n,i)||(r.uniform1iv(this.addr,i),pt(n,i));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jl,i[o])}function um(r,e,t){const n=this.cache,s=e.length,i=$s(t,s);dt(n,i)||(r.uniform1iv(this.addr,i),pt(n,i));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||jl,i[o])}function fm(r,e,t){const n=this.cache,s=e.length,i=$s(t,s);dt(n,i)||(r.uniform1iv(this.addr,i),pt(n,i));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kl,i[o])}function dm(r){switch(r){case 5126:return $p;case 35664:return Zp;case 35665:return Kp;case 35666:return Jp;case 35674:return jp;case 35675:return Qp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return om;case 36295:return am;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return fm}}class pm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qp(t.type)}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dm(t.type)}}class gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let i=0,o=s.length;i!==o;++i){const a=s[i];a.setValue(e,t[a.id],n)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function Va(r,e){r.seq.push(e),r.map[e.id]=e}function vm(r,e,t){const n=r.name,s=n.length;for(Lr.lastIndex=0;;){const i=Lr.exec(n),o=Lr.lastIndex;let a=i[1];const l=i[2]==="]",u=i[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Va(t,u===void 0?new pm(a,r,e):new mm(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new gm(a),Va(t,f)),t=f}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=e.getActiveUniform(t,s),o=e.getUniformLocation(t,i.name);vm(i,o,this)}}setValue(e,t,n,s){const i=this.map[t];i!==void 0&&i.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let i=0,o=t.length;i!==o;++i){const a=t[i],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Wa(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const xm=37297;let _m=0;function ym(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=s;o<i;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Xa=new Xe;function Sm(r){je._getMatrix(Xa,je.workingColorSpace,r);const e=`mat3( ${Xa.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(r)){case zs:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ya(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=(r.getShaderInfoLog(e)||"").trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+ym(r.getShaderSource(e),a)}else return i}function Mm(r,e){const t=Sm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Em(r,e){let t;switch(e){case Wc:t="Linear";break;case Xc:t="Reinhard";break;case Yc:t="Cineon";break;case qc:t="ACESFilmic";break;case Zc:t="AgX";break;case Kc:t="Neutral";break;case $c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new z;function wm(){je.getLuminanceCoefficients(Ps);const r=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function bm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Am(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=r.getActiveAttrib(e,s),o=i.name;let a=1;i.type===r.FLOAT_MAT2&&(a=2),i.type===r.FLOAT_MAT3&&(a=3),i.type===r.FLOAT_MAT4&&(a=4),t[o]={type:i.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Bi(r){return r!==""}function qa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $a(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(r){return r.replace(Cm,Pm)}const Rm=new Map;function Pm(r,e){let t=Ye[e];if(t===void 0){const n=Rm.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bo(t)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Za(r){return r.replace(Lm,Dm)}function Dm(r,e,t,n){let s="";for(let i=parseInt(e);i<parseInt(t);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function Ka(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Im(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===dl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Um(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xi:case _i:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function Fm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pl:e="ENVMAP_BLENDING_MULTIPLY";break;case Gc:e="ENVMAP_BLENDING_MIX";break;case Vc:e="ENVMAP_BLENDING_ADD";break}return e}function Bm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Om(r,e,t,n){const s=r.getContext(),i=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Im(t),u=Um(t),h=Nm(t),f=Fm(t),d=Bm(t),c=Tm(t),p=bm(i),g=s.createProgram();let m,v,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bi).join(`
`),m.length>0&&(m+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bi).join(`
`),v.length>0&&(v+=`
`)):(m=[Ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),v=[Ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Mm("linearToOutputTexel",t.outputColorSpace),wm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),o=bo(o),o=qa(o,t),o=$a(o,t),a=bo(a),a=qa(a,t),a=$a(a,t),o=Za(o),a=Za(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=E+m+o,S=E+v+a,x=Wa(s,s.VERTEX_SHADER,y),M=Wa(s,s.FRAGMENT_SHADER,S);s.attachShader(g,x),s.attachShader(g,M),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(A){if(r.debug.checkShaderErrors){const R=s.getProgramInfoLog(g)||"",D=s.getShaderInfoLog(x)||"",N=s.getShaderInfoLog(M)||"",U=R.trim(),B=D.trim(),O=N.trim();let k=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,g,x,M);else{const se=Ya(s,x,"vertex"),fe=Ya(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+se+`
`+fe)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||O==="")&&(J=!1);J&&(A.diagnostics={runnable:k,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:v}})}s.deleteShader(x),s.deleteShader(M),b=new Os(s,g),w=Am(s,g)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(g,xm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_m++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=M,this}let Hm=0;class zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),i=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new km(e),t.set(e,n)),n}}class km{constructor(e){this.id=Hm++,this.code=e,this.usedTimes=0}}function Gm(r,e,t,n,s,i,o){const a=new Cl,l=new zm,u=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let c=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,_,A,R,D){const N=R.fog,U=D.geometry,B=w.isMeshStandardMaterial?R.environment:null,O=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),k=O&&O.mapping===Ys?O.image.height:null,J=p[w.type];w.precision!==null&&(c=s.getMaxPrecision(w.precision),c!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",c,"instead."));const se=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,fe=se!==void 0?se.length:0;let be=0;U.morphAttributes.position!==void 0&&(be=1),U.morphAttributes.normal!==void 0&&(be=2),U.morphAttributes.color!==void 0&&(be=3);let Ue,qe,ke,W;if(J){const Qe=en[J];Ue=Qe.vertexShader,qe=Qe.fragmentShader}else Ue=w.vertexShader,qe=w.fragmentShader,l.update(w),ke=l.getVertexShaderID(w),W=l.getFragmentShaderID(w);const j=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),we=D.isInstancedMesh===!0,_e=D.isBatchedMesh===!0,Oe=!!w.map,Ve=!!w.matcap,I=!!O,ne=!!w.aoMap,Q=!!w.lightMap,K=!!w.bumpMap,Z=!!w.normalMap,he=!!w.displacementMap,ie=!!w.emissiveMap,ue=!!w.metalnessMap,He=!!w.roughnessMap,Fe=w.anisotropy>0,L=w.clearcoat>0,C=w.dispersion>0,V=w.iridescence>0,q=w.sheen>0,te=w.transmission>0,$=Fe&&!!w.anisotropyMap,Me=L&&!!w.clearcoatMap,le=L&&!!w.clearcoatNormalMap,Ae=L&&!!w.clearcoatRoughnessMap,Ce=V&&!!w.iridescenceMap,re=V&&!!w.iridescenceThicknessMap,ye=q&&!!w.sheenColorMap,Be=q&&!!w.sheenRoughnessMap,Le=!!w.specularMap,ve=!!w.specularColorMap,We=!!w.specularIntensityMap,F=te&&!!w.transmissionMap,ce=te&&!!w.thicknessMap,pe=!!w.gradientMap,Ee=!!w.alphaMap,oe=w.alphaTest>0,ee=!!w.alphaHash,Re=!!w.extensions;let Ge=Cn;w.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=r.toneMapping);const it={shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:Ue,fragmentShader:qe,defines:w.defines,customVertexShaderID:ke,customFragmentShaderID:W,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:c,batching:_e,batchingColor:_e&&D._colorsTexture!==null,instancing:we,instancingColor:we&&D.instanceColor!==null,instancingMorph:we&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:yi,alphaToCoverage:!!w.alphaToCoverage,map:Oe,matcap:Ve,envMap:I,envMapMode:I&&O.mapping,envMapCubeUVHeight:k,aoMap:ne,lightMap:Q,bumpMap:K,normalMap:Z,displacementMap:d&&he,emissiveMap:ie,normalMapObjectSpace:Z&&w.normalMapType===th,normalMapTangentSpace:Z&&w.normalMapType===eh,metalnessMap:ue,roughnessMap:He,anisotropy:Fe,anisotropyMap:$,clearcoat:L,clearcoatMap:Me,clearcoatNormalMap:le,clearcoatRoughnessMap:Ae,dispersion:C,iridescence:V,iridescenceMap:Ce,iridescenceThicknessMap:re,sheen:q,sheenColorMap:ye,sheenRoughnessMap:Be,specularMap:Le,specularColorMap:ve,specularIntensityMap:We,transmission:te,transmissionMap:F,thicknessMap:ce,gradientMap:pe,opaque:w.transparent===!1&&w.blending===pi&&w.alphaToCoverage===!1,alphaMap:Ee,alphaTest:oe,alphaHash:ee,combine:w.combine,mapUv:Oe&&g(w.map.channel),aoMapUv:ne&&g(w.aoMap.channel),lightMapUv:Q&&g(w.lightMap.channel),bumpMapUv:K&&g(w.bumpMap.channel),normalMapUv:Z&&g(w.normalMap.channel),displacementMapUv:he&&g(w.displacementMap.channel),emissiveMapUv:ie&&g(w.emissiveMap.channel),metalnessMapUv:ue&&g(w.metalnessMap.channel),roughnessMapUv:He&&g(w.roughnessMap.channel),anisotropyMapUv:$&&g(w.anisotropyMap.channel),clearcoatMapUv:Me&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&g(w.sheenRoughnessMap.channel),specularMapUv:Le&&g(w.specularMap.channel),specularColorMapUv:ve&&g(w.specularColorMap.channel),specularIntensityMapUv:We&&g(w.specularIntensityMap.channel),transmissionMapUv:F&&g(w.transmissionMap.channel),thicknessMapUv:ce&&g(w.thicknessMap.channel),alphaMapUv:Ee&&g(w.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Z||Fe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(Oe||Ee),fog:!!N,useFog:w.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:D.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:be,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Oe&&w.map.isVideoTexture===!0&&je.getTransfer(w.map.colorSpace)===tt,decodeVideoTextureEmissive:ie&&w.emissiveMap.isVideoTexture===!0&&je.getTransfer(w.emissiveMap.colorSpace)===tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===dn,flipSided:w.side===At,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return it.vertexUv1s=u.has(1),it.vertexUv2s=u.has(2),it.vertexUv3s=u.has(3),u.clear(),it}function v(w){const _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(const A in w.defines)_.push(A),_.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(E(_,w),y(_,w),_.push(r.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function E(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function y(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const _=p[w.type];let A;if(_){const R=en[_];A=Ph.clone(R.uniforms)}else A=w.uniforms;return A}function x(w,_){let A;for(let R=0,D=h.length;R<D;R++){const N=h[R];if(N.cacheKey===_){A=N,++A.usedTimes;break}}return A===void 0&&(A=new Om(r,_,w,i),h.push(A)),A}function M(w){if(--w.usedTimes===0){const _=h.indexOf(w);h[_]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:S,acquireProgram:x,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:b}}function Vm(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function s(o,a,l){r.get(o)[a]=l}function i(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:i}}function Wm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ja(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ja(){const r=[];let e=0;const t=[],n=[],s=[];function i(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,c,p,g,m){let v=r[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:c,groupOrder:p,renderOrder:f.renderOrder,z:g,group:m},r[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=c,v.groupOrder=p,v.renderOrder=f.renderOrder,v.z=g,v.group=m),e++,v}function a(f,d,c,p,g,m){const v=o(f,d,c,p,g,m);c.transmission>0?n.push(v):c.transparent===!0?s.push(v):t.push(v)}function l(f,d,c,p,g,m){const v=o(f,d,c,p,g,m);c.transmission>0?n.unshift(v):c.transparent===!0?s.unshift(v):t.unshift(v)}function u(f,d){t.length>1&&t.sort(f||Wm),n.length>1&&n.sort(d||Ja),s.length>1&&s.sort(d||Ja)}function h(){for(let f=e,d=r.length;f<d;f++){const c=r[f];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:t,transmissive:n,transparent:s,init:i,push:a,unshift:l,finish:h,sort:u}}function Xm(){let r=new WeakMap;function e(n,s){const i=r.get(n);let o;return i===void 0?(o=new ja,r.set(n,[o])):s>=i.length?(o=new ja,i.push(o)):o=i[s],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ym(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ke};break;case"SpotLight":t={position:new z,direction:new z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function qm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let $m=0;function Zm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Km(r){const e=new Ym,t=qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new z);const s=new z,i=new ut,o=new ut;function a(u){let h=0,f=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let c=0,p=0,g=0,m=0,v=0,E=0,y=0,S=0,x=0,M=0,T=0;u.sort(Zm);for(let w=0,_=u.length;w<_;w++){const A=u[w],R=A.color,D=A.intensity,N=A.distance,U=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=R.r*D,f+=R.g*D,d+=R.b*D;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],D);T++}else if(A.isDirectionalLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,k=t.get(A);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.directionalShadow[c]=k,n.directionalShadowMap[c]=U,n.directionalShadowMatrix[c]=A.shadow.matrix,E++}n.directional[c]=B,c++}else if(A.isSpotLight){const B=e.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(R).multiplyScalar(D),B.distance=N,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[g]=B;const O=A.shadow;if(A.map&&(n.spotLightMap[x]=A.map,x++,O.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[g]=O.matrix,A.castShadow){const k=t.get(A);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=U,S++}g++}else if(A.isRectAreaLight){const B=e.get(A);B.color.copy(R).multiplyScalar(D),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=B,m++}else if(A.isPointLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const O=A.shadow,k=t.get(A);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=A.shadow.matrix,y++}n.point[p]=B,p++}else if(A.isHemisphereLight){const B=e.get(A);B.skyColor.copy(A.color).multiplyScalar(D),B.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[v]=B,v++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==c||b.pointLength!==p||b.spotLength!==g||b.rectAreaLength!==m||b.hemiLength!==v||b.numDirectionalShadows!==E||b.numPointShadows!==y||b.numSpotShadows!==S||b.numSpotMaps!==x||b.numLightProbes!==T)&&(n.directional.length=c,n.spot.length=g,n.rectArea.length=m,n.point.length=p,n.hemi.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,b.directionalLength=c,b.pointLength=p,b.spotLength=g,b.rectAreaLength=m,b.hemiLength=v,b.numDirectionalShadows=E,b.numPointShadows=y,b.numSpotShadows=S,b.numSpotMaps=x,b.numLightProbes=T,n.version=$m++)}function l(u,h){let f=0,d=0,c=0,p=0,g=0;const m=h.matrixWorldInverse;for(let v=0,E=u.length;v<E;v++){const y=u[v];if(y.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=n.spot[c];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),c++}else if(y.isRectAreaLight){const S=n.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),i.copy(y.matrixWorld),i.premultiply(m),o.extractRotation(i),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Qa(r){const e=new Km(r),t=[],n=[];function s(h){u.camera=h,t.length=0,n.length=0}function i(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:i,pushShadow:o}}function Jm(r){let e=new WeakMap;function t(s,i=0){const o=e.get(s);let a;return o===void 0?(a=new Qa(r),e.set(s,[a])):i>=o.length?(a=new Qa(r),o.push(a)):a=o[i],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eg(r,e,t){let n=new Nl;const s=new ge,i=new ge,o=new at,a=new _u({depthPacking:Qc}),l=new yu,u={},h=t.maxTextureSize,f={[Rn]:At,[At]:Rn,[dn]:dn},d=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:jm,fragmentShader:Qm}),c=d.clone();c.defines.HORIZONTAL_PASS=1;const p=new Jt;p.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new bt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let v=this.type;this.render=function(M,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const w=r.getRenderTarget(),_=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),R=r.state;R.setBlending(An),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=v!==fn&&this.type===fn,N=v===fn&&this.type!==fn;for(let U=0,B=M.length;U<B;U++){const O=M[U],k=O.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const J=k.getFrameExtents();if(s.multiply(J),i.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(i.x=Math.floor(h/J.x),s.x=i.x*J.x,k.mapSize.x=i.x),s.y>h&&(i.y=Math.floor(h/J.y),s.y=i.y*J.y,k.mapSize.y=i.y)),k.map===null||D===!0||N===!0){const fe=this.type!==fn?{minFilter:Zt,magFilter:Zt}:{};k.map!==null&&k.map.dispose(),k.map=new Yn(s.x,s.y,fe),k.map.texture.name=O.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const se=k.getViewportCount();for(let fe=0;fe<se;fe++){const be=k.getViewport(fe);o.set(i.x*be.x,i.y*be.y,i.x*be.z,i.y*be.w),R.viewport(o),k.updateMatrices(O,fe),n=k.getFrustum(),S(T,b,k.camera,O,this.type)}k.isPointLightShadow!==!0&&this.type===fn&&E(k,b),k.needsUpdate=!1}v=this.type,m.needsUpdate=!1,r.setRenderTarget(w,_,A)};function E(M,T){const b=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,c.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,c.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Yn(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(T,null,b,d,g,null),c.uniforms.shadow_pass.value=M.mapPass.texture,c.uniforms.resolution.value=M.mapSize,c.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(T,null,b,c,g,null)}function y(M,T,b,w){let _=null;const A=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)_=A;else if(_=b.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const R=_.uuid,D=T.uuid;let N=u[R];N===void 0&&(N={},u[R]=N);let U=N[D];U===void 0&&(U=_.clone(),N[D]=U,T.addEventListener("dispose",x)),_=U}if(_.visible=T.visible,_.wireframe=T.wireframe,w===fn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:f[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const R=r.properties.get(_);R.light=b}return _}function S(M,T,b,w,_){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===fn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const D=e.update(M),N=M.material;if(Array.isArray(N)){const U=D.groups;for(let B=0,O=U.length;B<O;B++){const k=U[B],J=N[k.materialIndex];if(J&&J.visible){const se=y(M,J,w,_);M.onBeforeShadow(r,M,T,b,D,se,k),r.renderBufferDirect(b,null,D,se,M,k),M.onAfterShadow(r,M,T,b,D,se,k)}}}else if(N.visible){const U=y(M,N,w,_);M.onBeforeShadow(r,M,T,b,D,U,null),r.renderBufferDirect(b,null,D,U,M,null),M.onAfterShadow(r,M,T,b,D,U,null)}}const R=M.children;for(let D=0,N=R.length;D<N;D++)S(R[D],T,b,w,_)}function x(M){M.target.removeEventListener("dispose",x);for(const b in u){const w=u[b],_=M.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}const tg={[Nr]:Fr,[Br]:zr,[Or]:kr,[vi]:Hr,[Fr]:Nr,[zr]:Br,[kr]:Or,[Hr]:vi};function ng(r,e){function t(){let F=!1;const ce=new at;let pe=null;const Ee=new at(0,0,0,0);return{setMask:function(oe){pe!==oe&&!F&&(r.colorMask(oe,oe,oe,oe),pe=oe)},setLocked:function(oe){F=oe},setClear:function(oe,ee,Re,Ge,it){it===!0&&(oe*=Ge,ee*=Ge,Re*=Ge),ce.set(oe,ee,Re,Ge),Ee.equals(ce)===!1&&(r.clearColor(oe,ee,Re,Ge),Ee.copy(ce))},reset:function(){F=!1,pe=null,Ee.set(-1,0,0,0)}}}function n(){let F=!1,ce=!1,pe=null,Ee=null,oe=null;return{setReversed:function(ee){if(ce!==ee){const Re=e.get("EXT_clip_control");ee?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;const Ge=oe;oe=null,this.setClear(Ge)}},getReversed:function(){return ce},setTest:function(ee){ee?j(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(ee){pe!==ee&&!F&&(r.depthMask(ee),pe=ee)},setFunc:function(ee){if(ce&&(ee=tg[ee]),Ee!==ee){switch(ee){case Nr:r.depthFunc(r.NEVER);break;case Fr:r.depthFunc(r.ALWAYS);break;case Br:r.depthFunc(r.LESS);break;case vi:r.depthFunc(r.LEQUAL);break;case Or:r.depthFunc(r.EQUAL);break;case Hr:r.depthFunc(r.GEQUAL);break;case zr:r.depthFunc(r.GREATER);break;case kr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=ee}},setLocked:function(ee){F=ee},setClear:function(ee){oe!==ee&&(ce&&(ee=1-ee),r.clearDepth(ee),oe=ee)},reset:function(){F=!1,pe=null,Ee=null,oe=null,ce=!1}}}function s(){let F=!1,ce=null,pe=null,Ee=null,oe=null,ee=null,Re=null,Ge=null,it=null;return{setTest:function(Qe){F||(Qe?j(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!F&&(r.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,rn,jt){(pe!==Qe||Ee!==rn||oe!==jt)&&(r.stencilFunc(Qe,rn,jt),pe=Qe,Ee=rn,oe=jt)},setOp:function(Qe,rn,jt){(ee!==Qe||Re!==rn||Ge!==jt)&&(r.stencilOp(Qe,rn,jt),ee=Qe,Re=rn,Ge=jt)},setLocked:function(Qe){F=Qe},setClear:function(Qe){it!==Qe&&(r.clearStencil(Qe),it=Qe)},reset:function(){F=!1,ce=null,pe=null,Ee=null,oe=null,ee=null,Re=null,Ge=null,it=null}}}const i=new t,o=new n,a=new s,l=new WeakMap,u=new WeakMap;let h={},f={},d=new WeakMap,c=[],p=null,g=!1,m=null,v=null,E=null,y=null,S=null,x=null,M=null,T=new Ke(0,0,0),b=0,w=!1,_=null,A=null,R=null,D=null,N=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=O>=2);let J=null,se={};const fe=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),Ue=new at().fromArray(fe),qe=new at().fromArray(be);function ke(F,ce,pe,Ee){const oe=new Uint8Array(4),ee=r.createTexture();r.bindTexture(F,ee),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<pe;Re++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(ce+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return ee}const W={};W[r.TEXTURE_2D]=ke(r.TEXTURE_2D,r.TEXTURE_2D,1),W[r.TEXTURE_CUBE_MAP]=ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[r.TEXTURE_2D_ARRAY]=ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),W[r.TEXTURE_3D]=ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(vi),K(!1),Z(jo),j(r.CULL_FACE),ne(An);function j(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function de(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function we(F,ce){return f[F]!==ce?(r.bindFramebuffer(F,ce),f[F]=ce,F===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ce),F===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function _e(F,ce){let pe=c,Ee=!1;if(F){pe=d.get(ce),pe===void 0&&(pe=[],d.set(ce,pe));const oe=F.textures;if(pe.length!==oe.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,Re=oe.length;ee<Re;ee++)pe[ee]=r.COLOR_ATTACHMENT0+ee;pe.length=oe.length,Ee=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ee=!0);Ee&&r.drawBuffers(pe)}function Oe(F){return p!==F?(r.useProgram(F),p=F,!0):!1}const Ve={[zn]:r.FUNC_ADD,[Tc]:r.FUNC_SUBTRACT,[bc]:r.FUNC_REVERSE_SUBTRACT};Ve[Ac]=r.MIN,Ve[Cc]=r.MAX;const I={[Rc]:r.ZERO,[Pc]:r.ONE,[Lc]:r.SRC_COLOR,[Ir]:r.SRC_ALPHA,[Bc]:r.SRC_ALPHA_SATURATE,[Nc]:r.DST_COLOR,[Ic]:r.DST_ALPHA,[Dc]:r.ONE_MINUS_SRC_COLOR,[Ur]:r.ONE_MINUS_SRC_ALPHA,[Fc]:r.ONE_MINUS_DST_COLOR,[Uc]:r.ONE_MINUS_DST_ALPHA,[Oc]:r.CONSTANT_COLOR,[Hc]:r.ONE_MINUS_CONSTANT_COLOR,[zc]:r.CONSTANT_ALPHA,[kc]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(F,ce,pe,Ee,oe,ee,Re,Ge,it,Qe){if(F===An){g===!0&&(de(r.BLEND),g=!1);return}if(g===!1&&(j(r.BLEND),g=!0),F!==wc){if(F!==m||Qe!==w){if((v!==zn||S!==zn)&&(r.blendEquation(r.FUNC_ADD),v=zn,S=zn),Qe)switch(F){case pi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qo:r.blendFunc(r.ONE,r.ONE);break;case ea:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ta:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case pi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ea:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ta:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,y=null,x=null,M=null,T.set(0,0,0),b=0,m=F,w=Qe}return}oe=oe||ce,ee=ee||pe,Re=Re||Ee,(ce!==v||oe!==S)&&(r.blendEquationSeparate(Ve[ce],Ve[oe]),v=ce,S=oe),(pe!==E||Ee!==y||ee!==x||Re!==M)&&(r.blendFuncSeparate(I[pe],I[Ee],I[ee],I[Re]),E=pe,y=Ee,x=ee,M=Re),(Ge.equals(T)===!1||it!==b)&&(r.blendColor(Ge.r,Ge.g,Ge.b,it),T.copy(Ge),b=it),m=F,w=!1}function Q(F,ce){F.side===dn?de(r.CULL_FACE):j(r.CULL_FACE);let pe=F.side===At;ce&&(pe=!pe),K(pe),F.blending===pi&&F.transparent===!1?ne(An):ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),i.setMask(F.colorWrite);const Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){_!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),_=F)}function Z(F){F!==Sc?(j(r.CULL_FACE),F!==A&&(F===jo?r.cullFace(r.BACK):F===Mc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),A=F}function he(F){F!==R&&(B&&r.lineWidth(F),R=F)}function ie(F,ce,pe){F?(j(r.POLYGON_OFFSET_FILL),(D!==ce||N!==pe)&&(r.polygonOffset(ce,pe),D=ce,N=pe)):de(r.POLYGON_OFFSET_FILL)}function ue(F){F?j(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function He(F){F===void 0&&(F=r.TEXTURE0+U-1),J!==F&&(r.activeTexture(F),J=F)}function Fe(F,ce,pe){pe===void 0&&(J===null?pe=r.TEXTURE0+U-1:pe=J);let Ee=se[pe];Ee===void 0&&(Ee={type:void 0,texture:void 0},se[pe]=Ee),(Ee.type!==F||Ee.texture!==ce)&&(J!==pe&&(r.activeTexture(pe),J=pe),r.bindTexture(F,ce||W[F]),Ee.type=F,Ee.texture=ce)}function L(){const F=se[J];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function C(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(F){Ue.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ue.copy(F))}function Be(F){qe.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),qe.copy(F))}function Le(F,ce){let pe=u.get(ce);pe===void 0&&(pe=new WeakMap,u.set(ce,pe));let Ee=pe.get(F);Ee===void 0&&(Ee=r.getUniformBlockIndex(ce,F.name),pe.set(F,Ee))}function ve(F,ce){const Ee=u.get(ce).get(F);l.get(ce)!==Ee&&(r.uniformBlockBinding(ce,Ee,F.__bindingPointIndex),l.set(ce,Ee))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,se={},f={},d=new WeakMap,c=[],p=null,g=!1,m=null,v=null,E=null,y=null,S=null,x=null,M=null,T=new Ke(0,0,0),b=0,w=!1,_=null,A=null,R=null,D=null,N=null,Ue.set(0,0,r.canvas.width,r.canvas.height),qe.set(0,0,r.canvas.width,r.canvas.height),i.reset(),o.reset(),a.reset()}return{buffers:{color:i,depth:o,stencil:a},enable:j,disable:de,bindFramebuffer:we,drawBuffers:_e,useProgram:Oe,setBlending:ne,setMaterial:Q,setFlipSided:K,setCullFace:Z,setLineWidth:he,setPolygonOffset:ie,setScissorTest:ue,activeTexture:He,bindTexture:Fe,unbindTexture:L,compressedTexImage2D:C,compressedTexImage3D:V,texImage2D:Ce,texImage3D:re,updateUBOMapping:Le,uniformBlockBinding:ve,texStorage2D:le,texStorage3D:Ae,texSubImage2D:q,texSubImage3D:te,compressedTexSubImage2D:$,compressedTexSubImage3D:Me,scissor:ye,viewport:Be,reset:We}}function ig(r,e,t,n,s,i,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ge,h=new WeakMap;let f;const d=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,C){return c?new OffscreenCanvas(L,C):Xi("canvas")}function g(L,C,V){let q=1;const te=Fe(L);if((te.width>V||te.height>V)&&(q=V/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const $=Math.floor(q*te.width),Me=Math.floor(q*te.height);f===void 0&&(f=p($,Me));const le=C?p($,Me):f;return le.width=$,le.height=Me,le.getContext("2d").drawImage(L,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Me+")."),le}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function m(L){return L.generateMipmaps}function v(L){r.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(L,C,V,q,te=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=C;if(C===r.RED&&(V===r.FLOAT&&($=r.R32F),V===r.HALF_FLOAT&&($=r.R16F),V===r.UNSIGNED_BYTE&&($=r.R8)),C===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.R8UI),V===r.UNSIGNED_SHORT&&($=r.R16UI),V===r.UNSIGNED_INT&&($=r.R32UI),V===r.BYTE&&($=r.R8I),V===r.SHORT&&($=r.R16I),V===r.INT&&($=r.R32I)),C===r.RG&&(V===r.FLOAT&&($=r.RG32F),V===r.HALF_FLOAT&&($=r.RG16F),V===r.UNSIGNED_BYTE&&($=r.RG8)),C===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RG8UI),V===r.UNSIGNED_SHORT&&($=r.RG16UI),V===r.UNSIGNED_INT&&($=r.RG32UI),V===r.BYTE&&($=r.RG8I),V===r.SHORT&&($=r.RG16I),V===r.INT&&($=r.RG32I)),C===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RGB8UI),V===r.UNSIGNED_SHORT&&($=r.RGB16UI),V===r.UNSIGNED_INT&&($=r.RGB32UI),V===r.BYTE&&($=r.RGB8I),V===r.SHORT&&($=r.RGB16I),V===r.INT&&($=r.RGB32I)),C===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RGBA8UI),V===r.UNSIGNED_SHORT&&($=r.RGBA16UI),V===r.UNSIGNED_INT&&($=r.RGBA32UI),V===r.BYTE&&($=r.RGBA8I),V===r.SHORT&&($=r.RGBA16I),V===r.INT&&($=r.RGBA32I)),C===r.RGB&&(V===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),C===r.RGBA){const Me=te?zs:je.getTransfer(q);V===r.FLOAT&&($=r.RGBA32F),V===r.HALF_FLOAT&&($=r.RGBA16F),V===r.UNSIGNED_BYTE&&($=Me===tt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(L,C){let V;return L?C===null||C===Xn||C===Gi?V=r.DEPTH24_STENCIL8:C===pn?V=r.DEPTH32F_STENCIL8:C===ki&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Xn||C===Gi?V=r.DEPTH_COMPONENT24:C===pn?V=r.DEPTH_COMPONENT32F:C===ki&&(V=r.DEPTH_COMPONENT16),V}function x(L,C){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Zt&&L.minFilter!==zt?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function M(L){const C=L.target;C.removeEventListener("dispose",M),b(C),C.isVideoTexture&&h.delete(C)}function T(L){const C=L.target;C.removeEventListener("dispose",T),_(C)}function b(L){const C=n.get(L);if(C.__webglInit===void 0)return;const V=L.source,q=d.get(V);if(q){const te=q[C.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(L),Object.keys(q).length===0&&d.delete(V)}n.remove(L)}function w(L){const C=n.get(L);r.deleteTexture(C.__webglTexture);const V=L.source,q=d.get(V);delete q[C.__cacheKey],o.memory.textures--}function _(L){const C=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(C.__webglFramebuffer[q]))for(let te=0;te<C.__webglFramebuffer[q].length;te++)r.deleteFramebuffer(C.__webglFramebuffer[q][te]);else r.deleteFramebuffer(C.__webglFramebuffer[q]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[q])}else{if(Array.isArray(C.__webglFramebuffer))for(let q=0;q<C.__webglFramebuffer.length;q++)r.deleteFramebuffer(C.__webglFramebuffer[q]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let q=0;q<C.__webglColorRenderbuffer.length;q++)C.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[q]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const V=L.textures;for(let q=0,te=V.length;q<te;q++){const $=n.get(V[q]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(V[q])}n.remove(L)}let A=0;function R(){A=0}function D(){const L=A;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),A+=1,L}function N(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function U(L,C){const V=n.get(L);if(L.isVideoTexture&&ue(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){const q=L.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(V,L,C);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+C)}function B(L,C){const V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){W(V,L,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+C)}function O(L,C){const V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){W(V,L,C);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+C)}function k(L,C){const V=n.get(L);if(L.version>0&&V.__version!==L.version){j(V,L,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+C)}const J={[Wr]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[Xr]:r.MIRRORED_REPEAT},se={[Zt]:r.NEAREST,[Jc]:r.NEAREST_MIPMAP_NEAREST,[ss]:r.NEAREST_MIPMAP_LINEAR,[zt]:r.LINEAR,[Js]:r.LINEAR_MIPMAP_NEAREST,[Vn]:r.LINEAR_MIPMAP_LINEAR},fe={[nh]:r.NEVER,[lh]:r.ALWAYS,[ih]:r.LESS,[wl]:r.LEQUAL,[sh]:r.EQUAL,[ah]:r.GEQUAL,[rh]:r.GREATER,[oh]:r.NOTEQUAL};function be(L,C){if(C.type===pn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===zt||C.magFilter===Js||C.magFilter===ss||C.magFilter===Vn||C.minFilter===zt||C.minFilter===Js||C.minFilter===ss||C.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,J[C.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,J[C.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,J[C.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,se[C.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,se[C.minFilter]),C.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,fe[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Zt||C.minFilter!==ss&&C.minFilter!==Vn||C.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Ue(L,C){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",M));const q=C.source;let te=d.get(q);te===void 0&&(te={},d.set(q,te));const $=N(C);if($!==L.__cacheKey){te[$]===void 0&&(te[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[$].usedTimes++;const Me=te[L.__cacheKey];Me!==void 0&&(te[L.__cacheKey].usedTimes--,Me.usedTimes===0&&w(C)),L.__cacheKey=$,L.__webglTexture=te[$].texture}return V}function qe(L,C,V){return Math.floor(Math.floor(L/V)/C)}function ke(L,C,V,q){const $=L.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,V,q,C.data);else{$.sort((re,ye)=>re.start-ye.start);let Me=0;for(let re=1;re<$.length;re++){const ye=$[Me],Be=$[re],Le=ye.start+ye.count,ve=qe(Be.start,C.width,4),We=qe(ye.start,C.width,4);Be.start<=Le+1&&ve===We&&qe(Be.start+Be.count-1,C.width,4)===ve?ye.count=Math.max(ye.count,Be.start+Be.count-ye.start):(++Me,$[Me]=Be)}$.length=Me+1;const le=r.getParameter(r.UNPACK_ROW_LENGTH),Ae=r.getParameter(r.UNPACK_SKIP_PIXELS),Ce=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let re=0,ye=$.length;re<ye;re++){const Be=$[re],Le=Math.floor(Be.start/4),ve=Math.ceil(Be.count/4),We=Le%C.width,F=Math.floor(Le/C.width),ce=ve,pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,We,F,ce,pe,V,q,C.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}function W(L,C,V){let q=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(q=r.TEXTURE_3D);const te=Ue(L,C),$=C.source;t.bindTexture(q,L.__webglTexture,r.TEXTURE0+V);const Me=n.get($);if($.version!==Me.__version||te===!0){t.activeTexture(r.TEXTURE0+V);const le=je.getPrimaries(je.workingColorSpace),Ae=C.colorSpace===bn?null:je.getPrimaries(C.colorSpace),Ce=C.colorSpace===bn||le===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let re=g(C.image,!1,s.maxTextureSize);re=He(C,re);const ye=i.convert(C.format,C.colorSpace),Be=i.convert(C.type);let Le=y(C.internalFormat,ye,Be,C.colorSpace,C.isVideoTexture);be(q,C);let ve;const We=C.mipmaps,F=C.isVideoTexture!==!0,ce=Me.__version===void 0||te===!0,pe=$.dataReady,Ee=x(C,re);if(C.isDepthTexture)Le=S(C.format===Wi,C.type),ce&&(F?t.texStorage2D(r.TEXTURE_2D,1,Le,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Le,re.width,re.height,0,ye,Be,null));else if(C.isDataTexture)if(We.length>0){F&&ce&&t.texStorage2D(r.TEXTURE_2D,Ee,Le,We[0].width,We[0].height);for(let oe=0,ee=We.length;oe<ee;oe++)ve=We[oe],F?pe&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ve.width,ve.height,ye,Be,ve.data):t.texImage2D(r.TEXTURE_2D,oe,Le,ve.width,ve.height,0,ye,Be,ve.data);C.generateMipmaps=!1}else F?(ce&&t.texStorage2D(r.TEXTURE_2D,Ee,Le,re.width,re.height),pe&&ke(C,re,ye,Be)):t.texImage2D(r.TEXTURE_2D,0,Le,re.width,re.height,0,ye,Be,re.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){F&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Le,We[0].width,We[0].height,re.depth);for(let oe=0,ee=We.length;oe<ee;oe++)if(ve=We[oe],C.format!==qt)if(ye!==null)if(F){if(pe)if(C.layerUpdates.size>0){const Re=Ra(ve.width,ve.height,C.format,C.type);for(const Ge of C.layerUpdates){const it=ve.data.subarray(Ge*Re/ve.data.BYTES_PER_ELEMENT,(Ge+1)*Re/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,Ge,ve.width,ve.height,1,ye,it)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,re.depth,ye,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,Le,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,re.depth,ye,Be,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,Le,ve.width,ve.height,re.depth,0,ye,Be,ve.data)}else{F&&ce&&t.texStorage2D(r.TEXTURE_2D,Ee,Le,We[0].width,We[0].height);for(let oe=0,ee=We.length;oe<ee;oe++)ve=We[oe],C.format!==qt?ye!==null?F?pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?pe&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ve.width,ve.height,ye,Be,ve.data):t.texImage2D(r.TEXTURE_2D,oe,Le,ve.width,ve.height,0,ye,Be,ve.data)}else if(C.isDataArrayTexture)if(F){if(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Le,re.width,re.height,re.depth),pe)if(C.layerUpdates.size>0){const oe=Ra(re.width,re.height,C.format,C.type);for(const ee of C.layerUpdates){const Re=re.data.subarray(ee*oe/re.data.BYTES_PER_ELEMENT,(ee+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,ye,Be,Re)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,Be,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,ye,Be,re.data);else if(C.isData3DTexture)F?(ce&&t.texStorage3D(r.TEXTURE_3D,Ee,Le,re.width,re.height,re.depth),pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,Be,re.data)):t.texImage3D(r.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,ye,Be,re.data);else if(C.isFramebufferTexture){if(ce)if(F)t.texStorage2D(r.TEXTURE_2D,Ee,Le,re.width,re.height);else{let oe=re.width,ee=re.height;for(let Re=0;Re<Ee;Re++)t.texImage2D(r.TEXTURE_2D,Re,Le,oe,ee,0,ye,Be,null),oe>>=1,ee>>=1}}else if(We.length>0){if(F&&ce){const oe=Fe(We[0]);t.texStorage2D(r.TEXTURE_2D,Ee,Le,oe.width,oe.height)}for(let oe=0,ee=We.length;oe<ee;oe++)ve=We[oe],F?pe&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ye,Be,ve):t.texImage2D(r.TEXTURE_2D,oe,Le,ye,Be,ve);C.generateMipmaps=!1}else if(F){if(ce){const oe=Fe(re);t.texStorage2D(r.TEXTURE_2D,Ee,Le,oe.width,oe.height)}pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Be,re)}else t.texImage2D(r.TEXTURE_2D,0,Le,ye,Be,re);m(C)&&v(q),Me.__version=$.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function j(L,C,V){if(C.image.length!==6)return;const q=Ue(L,C),te=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+V);const $=n.get(te);if(te.version!==$.__version||q===!0){t.activeTexture(r.TEXTURE0+V);const Me=je.getPrimaries(je.workingColorSpace),le=C.colorSpace===bn?null:je.getPrimaries(C.colorSpace),Ae=C.colorSpace===bn||Me===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ce=C.isCompressedTexture||C.image[0].isCompressedTexture,re=C.image[0]&&C.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Ce&&!re?ye[ee]=g(C.image[ee],!0,s.maxCubemapSize):ye[ee]=re?C.image[ee].image:C.image[ee],ye[ee]=He(C,ye[ee]);const Be=ye[0],Le=i.convert(C.format,C.colorSpace),ve=i.convert(C.type),We=y(C.internalFormat,Le,ve,C.colorSpace),F=C.isVideoTexture!==!0,ce=$.__version===void 0||q===!0,pe=te.dataReady;let Ee=x(C,Be);be(r.TEXTURE_CUBE_MAP,C);let oe;if(Ce){F&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,We,Be.width,Be.height);for(let ee=0;ee<6;ee++){oe=ye[ee].mipmaps;for(let Re=0;Re<oe.length;Re++){const Ge=oe[Re];C.format!==qt?Le!==null?F?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Ge.width,Ge.height,Le,Ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,We,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Ge.width,Ge.height,Le,ve,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,We,Ge.width,Ge.height,0,Le,ve,Ge.data)}}}else{if(oe=C.mipmaps,F&&ce){oe.length>0&&Ee++;const ee=Fe(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,We,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Le,ve,ye[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,ye[ee].width,ye[ee].height,0,Le,ve,ye[ee].data);for(let Re=0;Re<oe.length;Re++){const it=oe[Re].image[ee].image;F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,it.width,it.height,Le,ve,it.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,We,it.width,it.height,0,Le,ve,it.data)}}else{F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,ve,ye[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Le,ve,ye[ee]);for(let Re=0;Re<oe.length;Re++){const Ge=oe[Re];F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,Le,ve,Ge.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,We,Le,ve,Ge.image[ee])}}}m(C)&&v(r.TEXTURE_CUBE_MAP),$.__version=te.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function de(L,C,V,q,te,$){const Me=i.convert(V.format,V.colorSpace),le=i.convert(V.type),Ae=y(V.internalFormat,Me,le,V.colorSpace),Ce=n.get(C),re=n.get(V);if(re.__renderTarget=C,!Ce.__hasExternalTextures){const ye=Math.max(1,C.width>>$),Be=Math.max(1,C.height>>$);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,$,Ae,ye,Be,C.depth,0,Me,le,null):t.texImage2D(te,$,Ae,ye,Be,0,Me,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),ie(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,te,re.__webglTexture,0,he(C)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,te,re.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(L,C,V){if(r.bindRenderbuffer(r.RENDERBUFFER,L),C.depthBuffer){const q=C.depthTexture,te=q&&q.isDepthTexture?q.type:null,$=S(C.stencilBuffer,te),Me=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=he(C);ie(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,$,C.width,C.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,$,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,$,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,L)}else{const q=C.textures;for(let te=0;te<q.length;te++){const $=q[te],Me=i.convert($.format,$.colorSpace),le=i.convert($.type),Ae=y($.internalFormat,Me,le,$.colorSpace),Ce=he(C);V&&ie(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,Ae,C.width,C.height):ie(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,Ae,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(C.depthTexture);q.__renderTarget=C,(!q.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),U(C.depthTexture,0);const te=q.__webglTexture,$=he(C);if(C.depthTexture.format===Vi)ie(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(C.depthTexture.format===Wi)ie(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Oe(L){const C=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const q=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),q){const te=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),C.__depthDisposeCallback=te}C.__boundDepthTexture=q}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const q=L.texture.mipmaps;q&&q.length>0?_e(C.__webglFramebuffer[0],L):_e(C.__webglFramebuffer,L)}else if(V){C.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[q]),C.__webglDepthbuffer[q]===void 0)C.__webglDepthbuffer[q]=r.createRenderbuffer(),we(C.__webglDepthbuffer[q],L,!1);else{const te=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=C.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,$)}}else{const q=L.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),we(C.__webglDepthbuffer,L,!1);else{const te=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(L,C,V){const q=n.get(L);C!==void 0&&de(q.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Oe(L)}function I(L){const C=L.texture,V=n.get(L),q=n.get(C);L.addEventListener("dispose",T);const te=L.textures,$=L.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=C.version,o.memory.textures++),$){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(C.mipmaps&&C.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let Ae=0;Ae<C.mipmaps.length;Ae++)V.__webglFramebuffer[le][Ae]=r.createFramebuffer()}else V.__webglFramebuffer[le]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<C.mipmaps.length;le++)V.__webglFramebuffer[le]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Me)for(let le=0,Ae=te.length;le<Ae;le++){const Ce=n.get(te[le]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&ie(L)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const Ae=te[le];V.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[le]);const Ce=i.convert(Ae.format,Ae.colorSpace),re=i.convert(Ae.type),ye=y(Ae.internalFormat,Ce,re,Ae.colorSpace,L.isXRRenderTarget===!0),Be=he(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,ye,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,V.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),we(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),be(r.TEXTURE_CUBE_MAP,C);for(let le=0;le<6;le++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ae=0;Ae<C.mipmaps.length;Ae++)de(V.__webglFramebuffer[le][Ae],L,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae);else de(V.__webglFramebuffer[le],L,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(C)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,Ae=te.length;le<Ae;le++){const Ce=te[le],re=n.get(Ce);let ye=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ye=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,re.__webglTexture),be(ye,Ce),de(V.__webglFramebuffer,L,Ce,r.COLOR_ATTACHMENT0+le,ye,0),m(Ce)&&v(ye)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(le=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,q.__webglTexture),be(le,C),C.mipmaps&&C.mipmaps.length>0)for(let Ae=0;Ae<C.mipmaps.length;Ae++)de(V.__webglFramebuffer[Ae],L,C,r.COLOR_ATTACHMENT0,le,Ae);else de(V.__webglFramebuffer,L,C,r.COLOR_ATTACHMENT0,le,0);m(C)&&v(le),t.unbindTexture()}L.depthBuffer&&Oe(L)}function ne(L){const C=L.textures;for(let V=0,q=C.length;V<q;V++){const te=C[V];if(m(te)){const $=E(L),Me=n.get(te).__webglTexture;t.bindTexture($,Me),v($),t.unbindTexture()}}}const Q=[],K=[];function Z(L){if(L.samples>0){if(ie(L)===!1){const C=L.textures,V=L.width,q=L.height;let te=r.COLOR_BUFFER_BIT;const $=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(L),le=C.length>1;if(le)for(let Ce=0;Ce<C.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ae=L.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ce=0;Ce<C.length;Ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);const re=n.get(C[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,V,q,0,0,V,q,te,r.NEAREST),l===!0&&(Q.length=0,K.length=0,Q.push(r.COLOR_ATTACHMENT0+Ce),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Q.push($),K.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,K)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let Ce=0;Ce<C.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);const re=n.get(C[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const C=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function he(L){return Math.min(s.maxSamples,L.samples)}function ie(L){const C=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ue(L){const C=o.render.frame;h.get(L)!==C&&(h.set(L,C),L.update())}function He(L,C){const V=L.colorSpace,q=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==yi&&V!==bn&&(je.getTransfer(V)===tt?(q!==qt||te!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),C}function Fe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=k,this.rebindTextures=Ve,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ie}function sg(r,e){function t(n,s=bn){let i;const o=je.getTransfer(s);if(n===vn)return r.UNSIGNED_BYTE;if(n===Ro)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return r.UNSIGNED_SHORT_5_5_5_1;if(n===xl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===gl)return r.BYTE;if(n===vl)return r.SHORT;if(n===ki)return r.UNSIGNED_SHORT;if(n===Co)return r.INT;if(n===Xn)return r.UNSIGNED_INT;if(n===pn)return r.FLOAT;if(n===Ki)return r.HALF_FLOAT;if(n===yl)return r.ALPHA;if(n===Sl)return r.RGB;if(n===qt)return r.RGBA;if(n===Vi)return r.DEPTH_COMPONENT;if(n===Wi)return r.DEPTH_STENCIL;if(n===Ml)return r.RED;if(n===Lo)return r.RED_INTEGER;if(n===El)return r.RG;if(n===Do)return r.RG_INTEGER;if(n===Io)return r.RGBA_INTEGER;if(n===Is||n===Us||n===Ns||n===Fs)if(o===tt)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===Is)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===Is)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yr||n===qr||n===$r||n===Zr)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===Yr)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qr)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zr)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kr||n===Jr||n===jr)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(n===Kr||n===Jr)return o===tt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===jr)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qr||n===eo||n===to||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(n===Qr)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lo)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return o===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(n===po)return o===tt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===xo||n===_o||n===yo)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(n===vo)return i.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,og=`
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

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kt({vertexShader:rg,fragmentShader:og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lg extends wi{constructor(e,t){super();const n=this;let s=null,i=1,o=null,a="local-floor",l=1,u=null,h=null,f=null,d=null,c=null,p=null;const g=typeof XRWebGLBinding<"u",m=new ag,v={},E=t.getContextAttributes();let y=null,S=null;const x=[],M=[],T=new ge;let b=null;const w=new Xt;w.viewport=new at;const _=new Xt;_.viewport=new at;const A=[w,_],R=new Au;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=x[W];return j===void 0&&(j=new yr,x[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=x[W];return j===void 0&&(j=new yr,x[W]=j),j.getGripSpace()},this.getHand=function(W){let j=x[W];return j===void 0&&(j=new yr,x[W]=j),j.getHandSpace()};function U(W){const j=M.indexOf(W.inputSource);if(j===-1)return;const de=x[j];de!==void 0&&(de.update(W.inputSource,W.frame,u||o),de.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",O);for(let W=0;W<x.length;W++){const j=M[W];j!==null&&(M[W]=null,x[W].disconnect(j))}D=null,N=null,m.reset();for(const W in v)delete v[W];e.setRenderTarget(y),c=null,d=null,f=null,s=null,S=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){i=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",O),E.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,we=null,_e=null;E.depth&&(_e=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=E.stencil?Wi:Vi,we=E.stencil?Gi:Xn);const Oe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:i};f=this.getBinding(),d=f.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Yn(d.textureWidth,d.textureHeight,{format:qt,type:vn,depthTexture:new Bl(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:i};c=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),S=new Yn(c.framebufferWidth,c.framebufferHeight,{format:qt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(W){for(let j=0;j<W.removed.length;j++){const de=W.removed[j],we=M.indexOf(de);we>=0&&(M[we]=null,x[we].disconnect(de))}for(let j=0;j<W.added.length;j++){const de=W.added[j];let we=M.indexOf(de);if(we===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=M.length){M.push(de),we=Oe;break}else if(M[Oe]===null){M[Oe]=de,we=Oe;break}if(we===-1)break}const _e=x[we];_e&&_e.connect(de)}}const k=new z,J=new z;function se(W,j,de){k.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const we=k.distanceTo(J),_e=j.projectionMatrix.elements,Oe=de.projectionMatrix.elements,Ve=_e[14]/(_e[10]-1),I=_e[14]/(_e[10]+1),ne=(_e[9]+1)/_e[5],Q=(_e[9]-1)/_e[5],K=(_e[8]-1)/_e[0],Z=(Oe[8]+1)/Oe[0],he=Ve*K,ie=Ve*Z,ue=we/(-K+Z),He=ue*-K;if(j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(He),W.translateZ(ue),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_e[10]===-1)W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Fe=Ve+ue,L=I+ue,C=he-He,V=ie+(we-He),q=ne*I/L*Fe,te=Q*I/L*Fe;W.projectionMatrix.makePerspective(C,V,q,te,Fe,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function fe(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let j=W.near,de=W.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(de=m.depthFar)),R.near=_.near=w.near=j,R.far=_.far=w.far=de,(D!==R.near||N!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,N=R.far),R.layers.mask=W.layers.mask|6,w.layers.mask=R.layers.mask&3,_.layers.mask=R.layers.mask&5;const we=W.parent,_e=R.cameras;fe(R,we);for(let Oe=0;Oe<_e.length;Oe++)fe(_e[Oe],we);_e.length===2?se(R,w,_):R.projectionMatrix.copy(w.projectionMatrix),be(W,R,we)};function be(W,j,de){de===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=So*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&c===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(W){return v[W]};let Ue=null;function qe(W,j){if(h=j.getViewerPose(u||o),p=j,h!==null){const de=h.views;c!==null&&(e.setRenderTargetFramebuffer(S,c.framebuffer),e.setRenderTarget(S));let we=!1;de.length!==R.cameras.length&&(R.cameras.length=0,we=!0);for(let I=0;I<de.length;I++){const ne=de[I];let Q=null;if(c!==null)Q=c.getViewport(ne);else{const Z=f.getViewSubImage(d,ne);Q=Z.viewport,I===0&&(e.setRenderTargetTextures(S,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(S))}let K=A[I];K===void 0&&(K=new Xt,K.layers.enable(I),K.viewport=new at,A[I]=K),K.matrix.fromArray(ne.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ne.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Q.x,Q.y,Q.width,Q.height),I===0&&(R.matrix.copy(K.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),we===!0&&R.cameras.push(K)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const I=f.getDepthInformation(de[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(_e&&_e.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let I=0;I<de.length;I++){const ne=de[I].camera;if(ne){let Q=v[ne];Q||(Q=new Ol,v[ne]=Q);const K=f.getCameraImage(ne);Q.sourceTexture=K}}}}for(let de=0;de<x.length;de++){const we=M[de],_e=x[de];we!==null&&_e!==void 0&&_e.update(we,j,u||o)}Ue&&Ue(W,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}const ke=new $l;ke.setAnimationLoop(qe),this.setAnimationLoop=function(W){Ue=W},this.dispose=function(){}}}const Bn=new xn,cg=new ut;function hg(r,e){function t(m,v){m.matrixAutoUpdate===!0&&m.updateMatrix(),v.value.copy(m.matrix)}function n(m,v){v.color.getRGB(m.fogColor.value,Dl(r)),v.isFog?(m.fogNear.value=v.near,m.fogFar.value=v.far):v.isFogExp2&&(m.fogDensity.value=v.density)}function s(m,v,E,y,S){v.isMeshBasicMaterial||v.isMeshLambertMaterial?i(m,v):v.isMeshToonMaterial?(i(m,v),f(m,v)):v.isMeshPhongMaterial?(i(m,v),h(m,v)):v.isMeshStandardMaterial?(i(m,v),d(m,v),v.isMeshPhysicalMaterial&&c(m,v,S)):v.isMeshMatcapMaterial?(i(m,v),p(m,v)):v.isMeshDepthMaterial?i(m,v):v.isMeshDistanceMaterial?(i(m,v),g(m,v)):v.isMeshNormalMaterial?i(m,v):v.isLineBasicMaterial?(o(m,v),v.isLineDashedMaterial&&a(m,v)):v.isPointsMaterial?l(m,v,E,y):v.isSpriteMaterial?u(m,v):v.isShadowMaterial?(m.color.value.copy(v.color),m.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function i(m,v){m.opacity.value=v.opacity,v.color&&m.diffuse.value.copy(v.color),v.emissive&&m.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(m.map.value=v.map,t(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,t(v.alphaMap,m.alphaMapTransform)),v.bumpMap&&(m.bumpMap.value=v.bumpMap,t(v.bumpMap,m.bumpMapTransform),m.bumpScale.value=v.bumpScale,v.side===At&&(m.bumpScale.value*=-1)),v.normalMap&&(m.normalMap.value=v.normalMap,t(v.normalMap,m.normalMapTransform),m.normalScale.value.copy(v.normalScale),v.side===At&&m.normalScale.value.negate()),v.displacementMap&&(m.displacementMap.value=v.displacementMap,t(v.displacementMap,m.displacementMapTransform),m.displacementScale.value=v.displacementScale,m.displacementBias.value=v.displacementBias),v.emissiveMap&&(m.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,m.emissiveMapTransform)),v.specularMap&&(m.specularMap.value=v.specularMap,t(v.specularMap,m.specularMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest);const E=e.get(v),y=E.envMap,S=E.envMapRotation;y&&(m.envMap.value=y,Bn.copy(S),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(Bn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=v.reflectivity,m.ior.value=v.ior,m.refractionRatio.value=v.refractionRatio),v.lightMap&&(m.lightMap.value=v.lightMap,m.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,m.lightMapTransform)),v.aoMap&&(m.aoMap.value=v.aoMap,m.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,m.aoMapTransform))}function o(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,v.map&&(m.map.value=v.map,t(v.map,m.mapTransform))}function a(m,v){m.dashSize.value=v.dashSize,m.totalSize.value=v.dashSize+v.gapSize,m.scale.value=v.scale}function l(m,v,E,y){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.size.value=v.size*E,m.scale.value=y*.5,v.map&&(m.map.value=v.map,t(v.map,m.uvTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,t(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function u(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.rotation.value=v.rotation,v.map&&(m.map.value=v.map,t(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,t(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function h(m,v){m.specular.value.copy(v.specular),m.shininess.value=Math.max(v.shininess,1e-4)}function f(m,v){v.gradientMap&&(m.gradientMap.value=v.gradientMap)}function d(m,v){m.metalness.value=v.metalness,v.metalnessMap&&(m.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,m.metalnessMapTransform)),m.roughness.value=v.roughness,v.roughnessMap&&(m.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,m.roughnessMapTransform)),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)}function c(m,v,E){m.ior.value=v.ior,v.sheen>0&&(m.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),m.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(m.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,m.sheenColorMapTransform)),v.sheenRoughnessMap&&(m.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,m.sheenRoughnessMapTransform))),v.clearcoat>0&&(m.clearcoat.value=v.clearcoat,m.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(m.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,m.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(m.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===At&&m.clearcoatNormalScale.value.negate())),v.dispersion>0&&(m.dispersion.value=v.dispersion),v.iridescence>0&&(m.iridescence.value=v.iridescence,m.iridescenceIOR.value=v.iridescenceIOR,m.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(m.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,m.iridescenceMapTransform)),v.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),v.transmission>0&&(m.transmission.value=v.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),v.transmissionMap&&(m.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,m.transmissionMapTransform)),m.thickness.value=v.thickness,v.thicknessMap&&(m.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=v.attenuationDistance,m.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(m.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(m.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=v.specularIntensity,m.specularColor.value.copy(v.specularColor),v.specularColorMap&&(m.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,m.specularColorMapTransform)),v.specularIntensityMap&&(m.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,v){v.matcap&&(m.matcap.value=v.matcap)}function g(m,v){const E=e.get(v).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ug(r,e,t,n){let s={},i={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const S=y.program;n.uniformBlockBinding(E,S)}function u(E,y){let S=s[E.id];S===void 0&&(p(E),S=h(E),s[E.id]=S,E.addEventListener("dispose",m));const x=y.program;n.updateUBOMapping(E,x);const M=e.render.frame;i[E.id]!==M&&(d(E),i[E.id]=M)}function h(E){const y=f();E.__bindingPointIndex=y;const S=r.createBuffer(),x=E.__size,M=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,x,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,S),S}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],S=E.uniforms,x=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,T=S.length;M<T;M++){const b=Array.isArray(S[M])?S[M]:[S[M]];for(let w=0,_=b.length;w<_;w++){const A=b[w];if(c(A,M,w,x)===!0){const R=A.__offset,D=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let U=0;U<D.length;U++){const B=D[U],O=g(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,R+N,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,N),N+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function c(E,y,S,x){const M=E.value,T=y+"_"+S;if(x[T]===void 0)return typeof M=="number"||typeof M=="boolean"?x[T]=M:x[T]=M.clone(),!0;{const b=x[T];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return x[T]=M,!0}else if(b.equals(M)===!1)return b.copy(M),!0}return!1}function p(E){const y=E.uniforms;let S=0;const x=16;for(let T=0,b=y.length;T<b;T++){const w=Array.isArray(y[T])?y[T]:[y[T]];for(let _=0,A=w.length;_<A;_++){const R=w[_],D=Array.isArray(R.value)?R.value:[R.value];for(let N=0,U=D.length;N<U;N++){const B=D[N],O=g(B),k=S%x,J=k%O.boundary,se=k+J;S+=J,se!==0&&x-se<O.storage&&(S+=x-se),R.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=O.storage}}}const M=S%x;return M>0&&(S+=x-M),E.__size=S,E.__cache={},this}function g(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(s[y.id]),delete s[y.id],delete i[y.id]}function v(){for(const E in s)r.deleteBuffer(s[E]);o=[],s={},i={}}return{bind:l,update:u,dispose:v}}class fg{constructor(e={}){const{canvas:t=hh(),context:n=null,depth:s=!0,stencil:i=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=o;const p=new Uint32Array(4),g=new Int32Array(4);let m=null,v=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let x=!1;this._outputColorSpace=Ht;let M=0,T=0,b=null,w=-1,_=null;const A=new at,R=new at;let D=null;const N=new Ke(0);let U=0,B=t.width,O=t.height,k=1,J=null,se=null;const fe=new at(0,0,B,O),be=new at(0,0,B,O);let Ue=!1;const qe=new Nl;let ke=!1,W=!1;const j=new ut,de=new z,we=new at,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function Ve(){return b===null?k:1}let I=n;function ne(P,H){return t.getContext(P,H)}try{const P={alpha:!0,depth:s,stencil:i,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",oe,!1),I===null){const H="webgl2";if(I=ne(H,P),I===null)throw ne(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Q,K,Z,he,ie,ue,He,Fe,L,C,V,q,te,$,Me,le,Ae,Ce,re,ye,Be,Le,ve,We;function F(){Q=new Mp(I),Q.init(),Le=new sg(I,Q),K=new mp(I,Q,e,Le),Z=new ng(I,Q),K.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),he=new Tp(I),ie=new Vm,ue=new ig(I,Q,Z,ie,K,Le,he),He=new vp(S),Fe=new Sp(S),L=new Pu(I),ve=new dp(I,L),C=new Ep(I,L,he,ve),V=new Ap(I,C,L,he),re=new bp(I,K,ue),le=new gp(ie),q=new Gm(S,He,Fe,Q,K,ve,le),te=new hg(S,ie),$=new Xm,Me=new Jm(Q),Ce=new fp(S,He,Fe,Z,V,c,l),Ae=new eg(S,V,K),We=new ug(I,he,K,Z),ye=new pp(I,Q,he),Be=new wp(I,Q,he),he.programs=q.programs,S.capabilities=K,S.extensions=Q,S.properties=ie,S.renderLists=$,S.shadowMap=Ae,S.state=Z,S.info=he}F();const ce=new lg(S,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(B,O,!1))},this.getSize=function(P){return P.set(B,O)},this.setSize=function(P,H,X=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,O=H,t.width=Math.floor(P*k),t.height=Math.floor(H*k),X===!0&&(t.style.width=P+"px",t.style.height=H+"px"),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(B*k,O*k).floor()},this.setDrawingBufferSize=function(P,H,X){B=P,O=H,k=X,t.width=Math.floor(P*X),t.height=Math.floor(H*X),this.setViewport(0,0,P,H)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,H,X,Y){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,H,X,Y),Z.viewport(A.copy(fe).multiplyScalar(k).round())},this.getScissor=function(P){return P.copy(be)},this.setScissor=function(P,H,X,Y){P.isVector4?be.set(P.x,P.y,P.z,P.w):be.set(P,H,X,Y),Z.scissor(R.copy(be).multiplyScalar(k).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(P){Z.setScissorTest(Ue=P)},this.setOpaqueSort=function(P){J=P},this.setTransparentSort=function(P){se=P},this.getClearColor=function(P){return P.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(P=!0,H=!0,X=!0){let Y=0;if(P){let G=!1;if(b!==null){const ae=b.texture.format;G=ae===Io||ae===Do||ae===Lo}if(G){const ae=b.texture.type,xe=ae===vn||ae===Xn||ae===ki||ae===Gi||ae===Ro||ae===Po,Te=Ce.getClearColor(),Se=Ce.getClearAlpha(),Ne=Te.r,ze=Te.g,De=Te.b;xe?(p[0]=Ne,p[1]=ze,p[2]=De,p[3]=Se,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Ne,g[1]=ze,g[2]=De,g[3]=Se,I.clearBufferiv(I.COLOR,0,g))}else Y|=I.COLOR_BUFFER_BIT}H&&(Y|=I.DEPTH_BUFFER_BIT),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Ce.dispose(),$.dispose(),Me.dispose(),ie.dispose(),He.dispose(),Fe.dispose(),V.dispose(),ve.dispose(),We.dispose(),q.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",jt),ce.removeEventListener("sessionend",Wo),Pn.stop()};function pe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const P=he.autoReset,H=Ae.enabled,X=Ae.autoUpdate,Y=Ae.needsUpdate,G=Ae.type;F(),he.autoReset=P,Ae.enabled=H,Ae.autoUpdate=X,Ae.needsUpdate=Y,Ae.type=G}function oe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ee(P){const H=P.target;H.removeEventListener("dispose",ee),Re(H)}function Re(P){Ge(P),ie.remove(P)}function Ge(P){const H=ie.get(P).programs;H!==void 0&&(H.forEach(function(X){q.releaseProgram(X)}),P.isShaderMaterial&&q.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,X,Y,G,ae){H===null&&(H=_e);const xe=G.isMesh&&G.matrixWorld.determinant()<0,Te=uc(P,H,X,Y,G);Z.setMaterial(Y,xe);let Se=X.index,Ne=1;if(Y.wireframe===!0){if(Se=C.getWireframeAttribute(X),Se===void 0)return;Ne=2}const ze=X.drawRange,De=X.attributes.position;let Ze=ze.start*Ne,et=(ze.start+ze.count)*Ne;ae!==null&&(Ze=Math.max(Ze,ae.start*Ne),et=Math.min(et,(ae.start+ae.count)*Ne)),Se!==null?(Ze=Math.max(Ze,0),et=Math.min(et,Se.count)):De!=null&&(Ze=Math.max(Ze,0),et=Math.min(et,De.count));const ct=et-Ze;if(ct<0||ct===1/0)return;ve.setup(G,Y,Te,X,Se);let st,nt=ye;if(Se!==null&&(st=L.get(Se),nt=Be,nt.setIndex(st)),G.isMesh)Y.wireframe===!0?(Z.setLineWidth(Y.wireframeLinewidth*Ve()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(G.isLine){let Ie=Y.linewidth;Ie===void 0&&(Ie=1),Z.setLineWidth(Ie*Ve()),G.isLineSegments?nt.setMode(I.LINES):G.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else G.isPoints?nt.setMode(I.POINTS):G.isSprite&&nt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Yi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ie=G._multiDrawStarts,rt=G._multiDrawCounts,Je=G._multiDrawCount,Rt=Se?L.get(Se).bytesPerElement:1,$n=ie.get(Y).currentProgram.getUniforms();for(let Pt=0;Pt<Je;Pt++)$n.setValue(I,"_gl_DrawID",Pt),nt.render(Ie[Pt]/Rt,rt[Pt])}else if(G.isInstancedMesh)nt.renderInstances(Ze,ct,G.count);else if(X.isInstancedBufferGeometry){const Ie=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,rt=Math.min(X.instanceCount,Ie);nt.renderInstances(Ze,ct,rt)}else nt.render(Ze,ct)};function it(P,H,X){P.transparent===!0&&P.side===dn&&P.forceSinglePass===!1?(P.side=At,P.needsUpdate=!0,is(P,H,X),P.side=Rn,P.needsUpdate=!0,is(P,H,X),P.side=dn):is(P,H,X)}this.compile=function(P,H,X=null){X===null&&(X=P),v=Me.get(X),v.init(H),y.push(v),X.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),P!==X&&P.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights();const Y=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ae=G.material;if(ae)if(Array.isArray(ae))for(let xe=0;xe<ae.length;xe++){const Te=ae[xe];it(Te,X,G),Y.add(Te)}else it(ae,X,G),Y.add(ae)}),v=y.pop(),Y},this.compileAsync=function(P,H,X=null){const Y=this.compile(P,H,X);return new Promise(G=>{function ae(){if(Y.forEach(function(xe){ie.get(xe).currentProgram.isReady()&&Y.delete(xe)}),Y.size===0){G(P);return}setTimeout(ae,10)}Q.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Qe=null;function rn(P){Qe&&Qe(P)}function jt(){Pn.stop()}function Wo(){Pn.start()}const Pn=new $l;Pn.setAnimationLoop(rn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(P){Qe=P,ce.setAnimationLoop(P),P===null?Pn.stop():Pn.start()},ce.addEventListener("sessionstart",jt),ce.addEventListener("sessionend",Wo),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(H),H=ce.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,H,b),v=Me.get(P,y.length),v.init(H),y.push(v),j.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),qe.setFromProjectionMatrix(j,tn,H.reversedDepth),W=this.localClippingEnabled,ke=le.init(this.clippingPlanes,W),m=$.get(P,E.length),m.init(),E.push(m),ce.enabled===!0&&ce.isPresenting===!0){const ae=S.xr.getDepthSensingMesh();ae!==null&&Zs(ae,H,-1/0,S.sortObjects)}Zs(P,H,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(J,se),Oe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Oe&&Ce.addToRenderList(m,P),this.info.render.frame++,ke===!0&&le.beginShadows();const X=v.state.shadowsArray;Ae.render(X,P,H),ke===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,G=m.transmissive;if(v.setupLights(),H.isArrayCamera){const ae=H.cameras;if(G.length>0)for(let xe=0,Te=ae.length;xe<Te;xe++){const Se=ae[xe];Yo(Y,G,P,Se)}Oe&&Ce.render(P);for(let xe=0,Te=ae.length;xe<Te;xe++){const Se=ae[xe];Xo(m,P,Se,Se.viewport)}}else G.length>0&&Yo(Y,G,P,H),Oe&&Ce.render(P),Xo(m,P,H);b!==null&&T===0&&(ue.updateMultisampleRenderTarget(b),ue.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(S,P,H),ve.resetDefaultState(),w=-1,_=null,y.pop(),y.length>0?(v=y[y.length-1],ke===!0&&le.setGlobalState(S.clippingPlanes,v.state.camera)):v=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Zs(P,H,X,Y){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)X=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||qe.intersectsSprite(P)){Y&&we.setFromMatrixPosition(P.matrixWorld).applyMatrix4(j);const xe=V.update(P),Te=P.material;Te.visible&&m.push(P,xe,Te,X,we.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||qe.intersectsObject(P))){const xe=V.update(P),Te=P.material;if(Y&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),we.copy(P.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),we.copy(xe.boundingSphere.center)),we.applyMatrix4(P.matrixWorld).applyMatrix4(j)),Array.isArray(Te)){const Se=xe.groups;for(let Ne=0,ze=Se.length;Ne<ze;Ne++){const De=Se[Ne],Ze=Te[De.materialIndex];Ze&&Ze.visible&&m.push(P,xe,Ze,X,we.z,De)}}else Te.visible&&m.push(P,xe,Te,X,we.z,null)}}const ae=P.children;for(let xe=0,Te=ae.length;xe<Te;xe++)Zs(ae[xe],H,X,Y)}function Xo(P,H,X,Y){const G=P.opaque,ae=P.transmissive,xe=P.transparent;v.setupLightsView(X),ke===!0&&le.setGlobalState(S.clippingPlanes,X),Y&&Z.viewport(A.copy(Y)),G.length>0&&ns(G,H,X),ae.length>0&&ns(ae,H,X),xe.length>0&&ns(xe,H,X),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Yo(P,H,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Y.id]===void 0&&(v.state.transmissionRenderTarget[Y.id]=new Yn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Ki:vn,minFilter:Vn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ae=v.state.transmissionRenderTarget[Y.id],xe=Y.viewport||A;ae.setSize(xe.z*S.transmissionResolutionScale,xe.w*S.transmissionResolutionScale);const Te=S.getRenderTarget(),Se=S.getActiveCubeFace(),Ne=S.getActiveMipmapLevel();S.setRenderTarget(ae),S.getClearColor(N),U=S.getClearAlpha(),U<1&&S.setClearColor(16777215,.5),S.clear(),Oe&&Ce.render(X);const ze=S.toneMapping;S.toneMapping=Cn;const De=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),v.setupLightsView(Y),ke===!0&&le.setGlobalState(S.clippingPlanes,Y),ns(P,X,Y),ue.updateMultisampleRenderTarget(ae),ue.updateRenderTargetMipmap(ae),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let et=0,ct=H.length;et<ct;et++){const st=H[et],nt=st.object,Ie=st.geometry,rt=st.material,Je=st.group;if(rt.side===dn&&nt.layers.test(Y.layers)){const Rt=rt.side;rt.side=At,rt.needsUpdate=!0,qo(nt,X,Y,Ie,rt,Je),rt.side=Rt,rt.needsUpdate=!0,Ze=!0}}Ze===!0&&(ue.updateMultisampleRenderTarget(ae),ue.updateRenderTargetMipmap(ae))}S.setRenderTarget(Te,Se,Ne),S.setClearColor(N,U),De!==void 0&&(Y.viewport=De),S.toneMapping=ze}function ns(P,H,X){const Y=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ae=P.length;G<ae;G++){const xe=P[G],Te=xe.object,Se=xe.geometry,Ne=xe.group;let ze=xe.material;ze.allowOverride===!0&&Y!==null&&(ze=Y),Te.layers.test(X.layers)&&qo(Te,H,X,Se,ze,Ne)}}function qo(P,H,X,Y,G,ae){P.onBeforeRender(S,H,X,Y,G,ae),P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(S,H,X,Y,P,ae),G.transparent===!0&&G.side===dn&&G.forceSinglePass===!1?(G.side=At,G.needsUpdate=!0,S.renderBufferDirect(X,H,Y,G,P,ae),G.side=Rn,G.needsUpdate=!0,S.renderBufferDirect(X,H,Y,G,P,ae),G.side=dn):S.renderBufferDirect(X,H,Y,G,P,ae),P.onAfterRender(S,H,X,Y,G,ae)}function is(P,H,X){H.isScene!==!0&&(H=_e);const Y=ie.get(P),G=v.state.lights,ae=v.state.shadowsArray,xe=G.state.version,Te=q.getParameters(P,G.state,ae,H,X),Se=q.getProgramCacheKey(Te);let Ne=Y.programs;Y.environment=P.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(P.isMeshStandardMaterial?Fe:He).get(P.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&P.envMap===null?H.environmentRotation:P.envMapRotation,Ne===void 0&&(P.addEventListener("dispose",ee),Ne=new Map,Y.programs=Ne);let ze=Ne.get(Se);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===xe)return Zo(P,Te),ze}else Te.uniforms=q.getUniforms(P),P.onBeforeCompile(Te,S),ze=q.acquireProgram(Te,Se),Ne.set(Se,ze),Y.uniforms=Te.uniforms;const De=Y.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(De.clippingPlanes=le.uniform),Zo(P,Te),Y.needsLights=dc(P),Y.lightsStateVersion=xe,Y.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.directionalShadowMap.value=G.state.directionalShadowMap,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotShadowMap.value=G.state.spotShadowMap,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMap.value=G.state.pointShadowMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function $o(P){if(P.uniformsList===null){const H=P.currentProgram.getUniforms();P.uniformsList=Os.seqWithValue(H.seq,P.uniforms)}return P.uniformsList}function Zo(P,H){const X=ie.get(P);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function uc(P,H,X,Y,G){H.isScene!==!0&&(H=_e),ue.resetTextureUnits();const ae=H.fog,xe=Y.isMeshStandardMaterial?H.environment:null,Te=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:yi,Se=(Y.isMeshStandardMaterial?Fe:He).get(Y.envMap||xe),Ne=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,et=!!X.morphAttributes.color;let ct=Cn;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ct=S.toneMapping);const st=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,nt=st!==void 0?st.length:0,Ie=ie.get(Y),rt=v.state.lights;if(ke===!0&&(W===!0||P!==_)){const yt=P===_&&Y.id===w;le.setState(Y,P,yt)}let Je=!1;Y.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==rt.state.version||Ie.outputColorSpace!==Te||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isBatchedMesh&&Ie.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ie.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==Se||Y.fog===!0&&Ie.fog!==ae||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==le.numPlanes||Ie.numIntersection!==le.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==ze||Ie.morphTargets!==De||Ie.morphNormals!==Ze||Ie.morphColors!==et||Ie.toneMapping!==ct||Ie.morphTargetsCount!==nt)&&(Je=!0):(Je=!0,Ie.__version=Y.version);let Rt=Ie.currentProgram;Je===!0&&(Rt=is(Y,H,G));let $n=!1,Pt=!1,Ai=!1;const ot=Rt.getUniforms(),Nt=Ie.uniforms;if(Z.useProgram(Rt.program)&&($n=!0,Pt=!0,Ai=!0),Y.id!==w&&(w=Y.id,Pt=!0),$n||_!==P){Z.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ot.setValue(I,"projectionMatrix",P.projectionMatrix),ot.setValue(I,"viewMatrix",P.matrixWorldInverse);const Et=ot.map.cameraPosition;Et!==void 0&&Et.setValue(I,de.setFromMatrixPosition(P.matrixWorld)),K.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ot.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Pt=!0,Ai=!0)}if(G.isSkinnedMesh){ot.setOptional(I,G,"bindMatrix"),ot.setOptional(I,G,"bindMatrixInverse");const yt=G.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),ot.setValue(I,"boneTexture",yt.boneTexture,ue))}G.isBatchedMesh&&(ot.setOptional(I,G,"batchingTexture"),ot.setValue(I,"batchingTexture",G._matricesTexture,ue),ot.setOptional(I,G,"batchingIdTexture"),ot.setValue(I,"batchingIdTexture",G._indirectTexture,ue),ot.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(I,"batchingColorTexture",G._colorsTexture,ue));const Ft=X.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&re.update(G,X,Rt),(Pt||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,ot.setValue(I,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Nt.envMap.value=Se,Nt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(Nt.envMapIntensity.value=H.environmentIntensity),Pt&&(ot.setValue(I,"toneMappingExposure",S.toneMappingExposure),Ie.needsLights&&fc(Nt,Ai),ae&&Y.fog===!0&&te.refreshFogUniforms(Nt,ae),te.refreshMaterialUniforms(Nt,Y,k,O,v.state.transmissionRenderTarget[P.id]),Os.upload(I,$o(Ie),Nt,ue)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Os.upload(I,$o(Ie),Nt,ue),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ot.setValue(I,"center",G.center),ot.setValue(I,"modelViewMatrix",G.modelViewMatrix),ot.setValue(I,"normalMatrix",G.normalMatrix),ot.setValue(I,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const yt=Y.uniformsGroups;for(let Et=0,Ks=yt.length;Et<Ks;Et++){const Ln=yt[Et];We.update(Ln,Rt),We.bind(Ln,Rt)}}return Rt}function fc(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function dc(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,H,X){const Y=ie.get(P);Y.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ie.get(P.texture).__webglTexture=H,ie.get(P.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,H){const X=ie.get(P);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0};const pc=I.createFramebuffer();this.setRenderTarget=function(P,H=0,X=0){b=P,M=H,T=X;let Y=!0,G=null,ae=!1,xe=!1;if(P){const Se=ie.get(P);if(Se.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Se.__webglFramebuffer===void 0)ue.setupRenderTarget(P);else if(Se.__hasExternalTextures)ue.rebindTextures(P,ie.get(P.texture).__webglTexture,ie.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const De=P.depthTexture;if(Se.__boundDepthTexture!==De){if(De!==null&&ie.has(De)&&(P.width!==De.image.width||P.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(P)}}const Ne=P.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(xe=!0);const ze=ie.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?G=ze[H][X]:G=ze[H],ae=!0):P.samples>0&&ue.useMultisampledRTT(P)===!1?G=ie.get(P).__webglMultisampledFramebuffer:Array.isArray(ze)?G=ze[X]:G=ze,A.copy(P.viewport),R.copy(P.scissor),D=P.scissorTest}else A.copy(fe).multiplyScalar(k).floor(),R.copy(be).multiplyScalar(k).floor(),D=Ue;if(X!==0&&(G=pc),Z.bindFramebuffer(I.FRAMEBUFFER,G)&&Y&&Z.drawBuffers(P,G),Z.viewport(A),Z.scissor(R),Z.setScissorTest(D),ae){const Se=ie.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Se.__webglTexture,X)}else if(xe){const Se=H;for(let Ne=0;Ne<P.textures.length;Ne++){const ze=ie.get(P.textures[Ne]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ne,ze.__webglTexture,X,Se)}}else if(P!==null&&X!==0){const Se=ie.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Se.__webglTexture,X)}w=-1},this.readRenderTargetPixels=function(P,H,X,Y,G,ae,xe,Te=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){Z.bindFramebuffer(I.FRAMEBUFFER,Se);try{const Ne=P.textures[Te],ze=Ne.format,De=Ne.type;if(!K.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-Y&&X>=0&&X<=P.height-G&&(P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Te),I.readPixels(H,X,Y,G,Le.convert(ze),Le.convert(De),ae))}finally{const Ne=b!==null?ie.get(b).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(P,H,X,Y,G,ae,xe,Te=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(H>=0&&H<=P.width-Y&&X>=0&&X<=P.height-G){Z.bindFramebuffer(I.FRAMEBUFFER,Se);const Ne=P.textures[Te],ze=Ne.format,De=Ne.type;if(!K.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Te),I.readPixels(H,X,Y,G,Le.convert(ze),Le.convert(De),0);const et=b!==null?ie.get(b).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,et);const ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await uh(I,ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae),I.deleteBuffer(Ze),I.deleteSync(ct),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,H=null,X=0){const Y=Math.pow(2,-X),G=Math.floor(P.image.width*Y),ae=Math.floor(P.image.height*Y),xe=H!==null?H.x:0,Te=H!==null?H.y:0;ue.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,xe,Te,G,ae),Z.unbindTexture()};const mc=I.createFramebuffer(),gc=I.createFramebuffer();this.copyTextureToTexture=function(P,H,X=null,Y=null,G=0,ae=null){ae===null&&(G!==0?(Yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=G,G=0):ae=0);let xe,Te,Se,Ne,ze,De,Ze,et,ct;const st=P.isCompressedTexture?P.mipmaps[ae]:P.image;if(X!==null)xe=X.max.x-X.min.x,Te=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,ze=X.min.y,De=X.isBox3?X.min.z:0;else{const Ft=Math.pow(2,-G);xe=Math.floor(st.width*Ft),Te=Math.floor(st.height*Ft),P.isDataArrayTexture?Se=st.depth:P.isData3DTexture?Se=Math.floor(st.depth*Ft):Se=1,Ne=0,ze=0,De=0}Y!==null?(Ze=Y.x,et=Y.y,ct=Y.z):(Ze=0,et=0,ct=0);const nt=Le.convert(H.format),Ie=Le.convert(H.type);let rt;H.isData3DTexture?(ue.setTexture3D(H,0),rt=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ue.setTexture2DArray(H,0),rt=I.TEXTURE_2D_ARRAY):(ue.setTexture2D(H,0),rt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const Je=I.getParameter(I.UNPACK_ROW_LENGTH),Rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$n=I.getParameter(I.UNPACK_SKIP_PIXELS),Pt=I.getParameter(I.UNPACK_SKIP_ROWS),Ai=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,st.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De);const ot=P.isDataArrayTexture||P.isData3DTexture,Nt=H.isDataArrayTexture||H.isData3DTexture;if(P.isDepthTexture){const Ft=ie.get(P),yt=ie.get(H),Et=ie.get(Ft.__renderTarget),Ks=ie.get(yt.__renderTarget);Z.bindFramebuffer(I.READ_FRAMEBUFFER,Et.__webglFramebuffer),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let Ln=0;Ln<Se;Ln++)ot&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ie.get(P).__webglTexture,G,De+Ln),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ie.get(H).__webglTexture,ae,ct+Ln)),I.blitFramebuffer(Ne,ze,xe,Te,Ze,et,xe,Te,I.DEPTH_BUFFER_BIT,I.NEAREST);Z.bindFramebuffer(I.READ_FRAMEBUFFER,null),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||ie.has(P)){const Ft=ie.get(P),yt=ie.get(H);Z.bindFramebuffer(I.READ_FRAMEBUFFER,mc),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,gc);for(let Et=0;Et<Se;Et++)ot?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,G,De+Et):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,G),Nt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,ae,ct+Et):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,ae),G!==0?I.blitFramebuffer(Ne,ze,xe,Te,Ze,et,xe,Te,I.COLOR_BUFFER_BIT,I.NEAREST):Nt?I.copyTexSubImage3D(rt,ae,Ze,et,ct+Et,Ne,ze,xe,Te):I.copyTexSubImage2D(rt,ae,Ze,et,Ne,ze,xe,Te);Z.bindFramebuffer(I.READ_FRAMEBUFFER,null),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Nt?P.isDataTexture||P.isData3DTexture?I.texSubImage3D(rt,ae,Ze,et,ct,xe,Te,Se,nt,Ie,st.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(rt,ae,Ze,et,ct,xe,Te,Se,nt,st.data):I.texSubImage3D(rt,ae,Ze,et,ct,xe,Te,Se,nt,Ie,st):P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ae,Ze,et,xe,Te,nt,Ie,st.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ae,Ze,et,st.width,st.height,nt,st.data):I.texSubImage2D(I.TEXTURE_2D,ae,Ze,et,xe,Te,nt,Ie,st);I.pixelStorei(I.UNPACK_ROW_LENGTH,Je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$n),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ai),ae===0&&H.generateMipmaps&&I.generateMipmap(rt),Z.unbindTexture()},this.initRenderTarget=function(P){ie.get(P).__webglFramebuffer===void 0&&ue.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ue.setTextureCube(P,0):P.isData3DTexture?ue.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ue.setTexture2DArray(P,0):ue.setTexture2D(P,0),Z.unbindTexture()},this.resetState=function(){M=0,T=0,b=null,Z.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const dg=document.querySelector("#threeCanvas"),pg=document.querySelector("#matterCanvas"),vt=Math.min(window.devicePixelRatio,2);function mg(){const r=Pe.Engine.create(),e=r.world,t=Pe.Render.create({engine:r,canvas:pg,options:{width:window.innerWidth,height:window.innerHeight,wireframes:!1,background:"transparent",pixelRatio:1,showSleeping:!1,showDebug:!1,preserveDrawingBuffer:!1}});return{engine:r,world:e,render:t}}function gg(){const r=new fg({antialias:!0,canvas:dg,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio||1);const e=new Fh,t=new ql(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,1,1e3);return t.position.z=10,{renderer:r,scene:e,camera:t}}function Ut(r,e=null){const t=r.offsetWidth,n=e||r.offsetHeight;n<=0&&(n=window.innerHeight);const s=vt,i=document.querySelector("#canvas");i&&(i.width=t*s,i.height=n*s,i.style.width=t+"px",i.style.height=n+"px",i.getContext("2d").setTransform(s,0,0,s,0,0)),Tt.renderer.setSize(t,n,!1),Tt.renderer.setPixelRatio(s),Tt.renderer.domElement.style.width=t+"px",Tt.renderer.domElement.style.height=n+"px",Tt.camera.left=-t/2,Tt.camera.right=t/2,Tt.camera.top=n/2,Tt.camera.bottom=-n/2,Tt.camera.updateProjectionMatrix(),Ot.render.canvas.width=t*s,Ot.render.canvas.height=n*s,Ot.render.canvas.style.width=t+"px",Ot.render.canvas.style.height=n+"px",Ot.render.options.width=t,Ot.render.options.height=n,Ot.render.options.pixelRatio=s,Pe.Render.lookAt(Ot.render,{min:{x:0,y:0},max:{x:t,y:n}})}const Ot=mg(),Tt=gg(),Hs={three:document.querySelector("#threeCanvas"),matter:document.querySelector("#matterCanvas"),canvas:document.querySelector("#canvas"),input:document.querySelector(".input-layer"),matterLayer:document.querySelector(".matter-layer")};function _n(r,e=null){const t=window.innerWidth<1024,n=document.body;if(n.classList.remove("show-three","show-matter","show-canvas","show-input","show-matter-layer","hide-all-canvas"),r===5||r===4&&t||r===7){n.classList.add("hide-all-canvas");return}const s=Kt.sections[r];if(!s)return;const i=s.instance.sectionEl,o=i.offsetWidth;let a=e||i.scrollHeight;a<window.innerHeight&&(a=window.innerHeight),n.classList.add(`show-${s.type}`),r===2&&setTimeout(()=>{n.classList.add("show-matter-layer")},300),r===3&&n.classList.add("show-input"),[Hs[s.type],Hs.input,Hs.matterLayer].forEach(u=>{u&&(u.style.position="absolute",u.style.top="0px",u.style.left="0px",u.style.width=`${o}px`,u.style.height=`${a}px`)})}function vg(){Object.values(Hs).forEach(r=>{r&&(r.style.position="absolute",r.style.top="0px",r.style.left="0px",r.style.width="100%",r.style.height="100%")})}class xg{constructor(){this.sections={},this.activeId=null,this.matter=Ot,this.three=Tt}destroyAll(){if(Object.keys(this.sections).forEach(e=>{const{instance:t}=this.sections[e];t&&typeof t.destroy=="function"&&t.destroy()}),this.matter&&(Pe.World.clear(this.matter.world,!1),Pe.Engine.clear(this.matter.engine)),this.three)for(;this.three.scene.children.length>0;)this.three.scene.remove(this.three.scene.children[0]);this.sections={},this.activeId=null}register(e,t,n="canvas"){this.sections[e]={instance:t,type:n},t.index=e}activate(e){if(this.activeId===e)return;this.activeId&&this.sections[this.activeId]&&this.sections[this.activeId].instance.hide();const t=this.sections[e];t&&(this.activeId=e,document.querySelectorAll(".section").forEach((n,s)=>{n.classList.toggle("active",String(s)===e)}),t.instance.show(),window.scrollTo(0,0))}deactivate(e){const t=this.sections[e];t&&t.instance.hide(),this.activeId===e&&(this.activeId=null)}getActive(){return this.activeId?this.sections[this.activeId]:null}getActiveId(){return this.activeId}}const Kt=new xg;let zo=0,$t=!1,_g=800;const Ql=document.querySelectorAll(".section");let Ui=0;const yg=50;let ko=0,Ws=!1;const ec=()=>window.innerWidth<=1023;function Sg(){$t=!1}function Xs(){window.removeEventListener("wheel",ic),window.removeEventListener("touchstart",sc),window.removeEventListener("touchmove",rc),window.removeEventListener("touchend",oc),window.removeEventListener("keydown",ac)}function Mg(){const r=Kt.getActive();return r?r.instance:null}function tc(){const r=window.pageYOffset||document.documentElement.scrollTop,e=window.innerHeight,t=document.documentElement.scrollHeight;return{isAtTop:r<=5,isAtBottom:Math.abs(t-e-r)<10}}function nc(){Xs(),zo=0,Kt.activate("0"),window.addEventListener("wheel",ic,{passive:!1}),window.addEventListener("touchstart",sc,{passive:!1}),window.addEventListener("touchmove",rc,{passive:!1}),window.addEventListener("touchend",oc,{passive:!1}),window.addEventListener("keydown",ac,{passive:!1})}async function Go(r,e){if($t){e.cancelable&&e.preventDefault();return}const t=e.target.closest(".mission-text-window-innerbox");if(t&&window.innerWidth<=1279){const a=t.scrollTop<=0,l=Math.ceil(t.scrollTop+t.clientHeight)>=t.scrollHeight;if(!(r<0&&a||r>0&&l))return}const n=Mg(),s=ec();if(n&&typeof n.onAction=="function"&&n.onAction(r)){e.cancelable&&e.preventDefault();return}const i=r>0?1:-1,o=zo+i;if(!(o<0||o>=Ql.length)){if(s){const{isAtTop:a,isAtBottom:l}=tc();if(i===-1&&!a||i===1&&!l)return;e.cancelable&&e.preventDefault()}else e.cancelable&&e.preventDefault();if(n&&typeof n.onLeave=="function"){$t=!0;try{await n.onLeave(r),$t=!1,Ei(o)}catch(a){console.error("Outro animation failed",a),$t=!1}}else Ei(o)}}function ic(r){if($t){r.cancelable&&r.preventDefault();return}if(Ui+=r.deltaY,Math.abs(Ui)>=yg){const e=Ui;Ui=0,Go(e,r)}clearTimeout(window.wheelResetTimer),window.wheelResetTimer=setTimeout(()=>{Ui=0},150),r.cancelable&&r.preventDefault()}function sc(r){ko=r.touches[0].clientY,Ws=!0}function rc(r){if(!($t||Ws)){if(r.target.closest(".input-layer")||r.target.closest(".about-desc-scroll-icon")){r.cancelable&&r.preventDefault();return}if(!ec())r.cancelable&&r.preventDefault();else{const{isAtTop:e,isAtBottom:t}=tc(),n=r.touches[0].clientY,s=ko-n;(s<0&&e||s>0&&t)&&r.cancelable&&r.preventDefault()}}}function oc(r){if(!Ws||(Ws=!1,r.target.closest(".input-layer")||r.target.closest(".about-desc-scroll-icon")))return;const e=r.changedTouches[0].clientY,t=ko-e;Math.abs(t)<50||Go(t,r)}function ac(r){if($t)return;let e=0;switch(r.key){case"ArrowDown":case"PageDown":case" ":e=100;break;case"ArrowUp":case"PageUp":e=-100;break;default:return}e!==0&&(r.preventDefault(),Go(e,r))}function Ei(r){r<0||r>=Ql.length||$t||($t=!0,zo=r,_n(r),Kt.activate(String(r)),setTimeout(()=>{$t=!1},_g))}class Eg{constructor(e,t){this.engine=e.engine,this.world=e.world,this.render=e.render,this.canvas=this.render.canvas,this.sectionEl=t,this.sectionId="3",this.inputLayer=document.querySelector(".input-layer"),this.scrollIcon=document.querySelector(".about-desc-scroll-icon"),this.descText=document.querySelector(".about-desc-text"),this.mobile=window.innerWidth<=1024,this.targetGravity={x:0,y:0},this.currentGravity={x:0,y:0},this.handlers={touchStart:this.handleTouchStart.bind(this),touchMove:this.handleTouchMove.bind(this),pageUp:this.handlePageUp.bind(this),pageDown:this.handlePageDown.bind(this),pointerDown:this.onPointerDown.bind(this),pointerMove:this.onPointerMove.bind(this),pointerUp:this.onPointerUp.bind(this),mouseDown:this.handleMouseDown.bind(this),mouseMove:this.handleMouseMove.bind(this),mouseUp:this.handleMouseUp.bind(this)},this.startY=0,this.startScrollButtonTop=0,this.isEntering=!1,this.enterResolve=null,this.isLeaving=!1,this.leaveResolve=null,this.leaveProgress=0,this.gameBody=null,this.leaveDuration=1800,this.startTime=0,this.enterTimer=0,this.enterBodyIndex=0,this.wallsRemoved=!1,this.lastWidth=window.innerWidth,this.lastHeight=window.innerHeight,this.isResizePending=!1,this.resizeTimer=null,this._inited=!1,this.visible=!1,this.isDragging=!1,this.activePointerId=null,this.mouse=null,this.mouseConstraint=null,this.bodies=[],this.walls=[]}async init(){this._inited||(this.createWalls(),await this.createImageObject(),this.initMouseConstraint(),this.scrollMove(),this.pageChange(),this.movingGravity(),this._inited=!0)}scrollMove(){this.scrollButton=document.querySelector(".about-desc-scroll-button"),this.scrollButtonHeight=48,this.scrollMargin=10,this.scrollbarHeight=110,this.scrollButtonMin=this.scrollMargin,this.scrollButtonMax=this.scrollbarHeight-this.scrollButtonHeight-this.scrollMargin,this.scrollbarMovable=this.scrollButtonMax-this.scrollButtonMin,this.sectionScrollableHeight=document.documentElement.scrollHeight-window.innerHeight,this.scrollButton.style.top=`${this.scrollButtonMin}px`,this.scrollButton.addEventListener("touchstart",this.handlers.touchStart),this.scrollButton.addEventListener("touchmove",this.handlers.touchMove),this.scrollButton.addEventListener("mousedown",this.handlers.mouseDown)}handleMouseDown(e){if(!this.visible)return;this.isDragging=!0,this.startY=e.clientY;const t=getComputedStyle(this.scrollButton).top;this.startScrollButtonTop=parseFloat(t),window.addEventListener("mousemove",this.handlers.mouseMove),window.addEventListener("mouseup",this.handlers.mouseUp),e.preventDefault()}handleMouseMove(e){if(!this.visible||!this.isDragging)return;const t=e.clientY-this.startY;let n=this.startScrollButtonTop+t;n<this.scrollButtonMin&&(n=this.scrollButtonMin),n>this.scrollButtonMax&&(n=this.scrollButtonMax),this.scrollButton.style.top=`${n}px`;const i=(n-this.scrollButtonMin)/this.scrollbarMovable*this.sectionScrollableHeight;window.scrollTo({top:i,behavior:"auto"})}handleMouseUp(){this.isDragging=!1,window.removeEventListener("mousemove",this.handlers.mouseMove),window.removeEventListener("mouseup",this.handlers.mouseUp)}pageChange(){document.querySelectorAll(".section"),this.upButton=document.querySelector(".about-desc-page-up-button"),this.downButton=document.querySelector(".about-desc-page-down-button"),this.upButton.addEventListener("click",this.handlers.pageUp),this.downButton.addEventListener("click",this.handlers.pageDown)}handleTouchStart(e){if(!this.visible)return;const t=e.touches[0];this.startY=t.clientY;const n=getComputedStyle(this.scrollButton).top;this.startScrollButtonTop=parseFloat(n),e.preventDefault()}handleTouchMove(e){if(!this.visible)return;const n=e.touches[0].clientY-this.startY;let s=this.startScrollButtonTop+n;s<this.scrollButtonMin&&(s=this.scrollButtonMin),s>this.scrollButtonMax&&(s=this.scrollButtonMax),this.scrollButton.style.top=`${s}px`;const o=(s-this.scrollButtonMin)/this.scrollbarMovable*this.sectionScrollableHeight;window.scrollTo({top:o,behavior:"auto"}),e.preventDefault()}async handlePageUp(){!this.visible||this.isEntering||this.isLeaving||(await this.onLeave(-1),Ei(2))}async handlePageDown(){!this.visible||this.isEntering||this.isLeaving||(await this.onLeave(1),Ei(4))}createImageObject=async()=>{const e=vt,n=["alien","french-fries","game-console","greenbow-game","headphone","lucha-libre","potato-chip01","potato-chip02","potato-snack"].map(s=>new Promise(i=>{const o=window.innerWidth<=1023,a=e>=2?"@2x":"";let l="";o?l=`/assets/image/aboutDesc/${s}-mobile${a}.png`:l=`/assets/image/aboutDesc/${s}${a}.png`;const u=new Image;u.src=l,u.onload=()=>{const h=u.naturalWidth/e,f=u.naturalHeight/e,c=h/(o?430:1920);let p=window.innerWidth*c,g=p*(f/h);const m=.7,v=p*m,E=g*m,y=p/u.naturalWidth,S=g/u.naturalHeight,x=Pe.Bodies.rectangle(0,0,v,E,{restitution:.8,frictionAir:.02,render:{sprite:{texture:l,xScale:y,yScale:S}}});this.bodies.push(x),i()}}));await Promise.all(n),this._inited=!0};createWalls(){const e=vt,t=this.canvas.width/e,n=this.canvas.height/e,s=100,i=[Pe.Bodies.rectangle(t/2,-s/2,t,s,{isStatic:!0}),Pe.Bodies.rectangle(t/2,n+s/2,t,s,{isStatic:!0}),Pe.Bodies.rectangle(-s/2,n/2,s,n,{isStatic:!0}),Pe.Bodies.rectangle(t+s/2,n/2,s,n,{isStatic:!0})];this.walls=i}clientToWorld=(e,t)=>{const n=this.canvas.getBoundingClientRect();return{x:e-n.left,y:t-n.top}};initMouseConstraint(){this.inputLayer.style.top=this.canvas.style.top,this.mouse=Pe.Mouse.create(this.canvas),this.mouseConstraint=Pe.MouseConstraint.create(this.engine,{mouse:this.mouse,constraint:{stiffness:.2,render:{visible:!1}}}),window.PointerEvent?(this.inputLayer.addEventListener("pointerdown",this.handlers.pointerDown,{passive:!1}),this.inputLayer.addEventListener("pointermove",this.handlers.pointerMove,{passive:!1}),this.inputLayer.addEventListener("pointerup",this.handlers.pointerUp,{passive:!1}),this.inputLayer.addEventListener("pointercancel",this.handlers.pointerUp,{passive:!1})):(this.inputLayer.addEventListener("touchstart",this.handlers.pointerDown,{passive:!1}),this.inputLayer.addEventListener("touchmove",this.handlers.pointerMove,{passive:!1}),this.inputLayer.addEventListener("touchend",this.handlers.pointerUp,{passive:!1}),this.inputLayer.addEventListener("mousedown",this.handlers.pointerDown,{passive:!1}),this.inputLayer.addEventListener("mousemove",this.handlers.pointerMove,{passive:!1}),this.inputLayer.addEventListener("mouseup",this.handlers.pointerUp,{passive:!1}))}onPointerDown=e=>{if(!this.visible)return;const t=e.touches&&e.touches[0]?e.touches[0]:e,n=this.clientToWorld(t.clientX,t.clientY);e.cancelable&&e.preventDefault();const s=Pe.Query.point(this.bodies,n);if(s&&s.length>0){if(this.isDragging=!0,this.mouse.position.x=n.x,this.mouse.position.y=n.y,this.mouse.button=0,e.pointerId&&this.inputLayer.setPointerCapture)try{this.inputLayer.setPointerCapture(e.pointerId),this.activePointerId=e.pointerId}catch{console.error("error")}}else if(this.isDragging=!1,this.mouse.button=-1,e.pointerId&&this.inputLayer.releasePointerCapture)try{this.inputLayer.releasePointerCapture(e.pointerId)}catch{}};onPointerMove=e=>{if(!this.isDragging||!this.visible)return;const t=e.touches&&e.touches[0]?e.touches[0]:e,n=this.clientToWorld(t.clientX,t.clientY);this.mouse.position.x=n.x,this.mouse.position.y=n.y};onPointerUp=e=>{if(this.isDragging=!1,this.mouse.button=-1,this.activePointerId!==null&&this.inputLayer.releasePointerCapture){try{this.inputLayer.releasePointerCapture(this.activePointerId)}catch{}this.activePointerId=null}};movingGravity(){this.pickNewGravityDirection=()=>{const t=Math.random()*Math.PI*2,n=.002;this.targetGravity.x=Math.cos(t)*n,this.targetGravity.y=Math.sin(t)*n},this.pickNewGravityDirection(),this.gravityTimer=setInterval(()=>{this.pickNewGravityDirection()},3e3)}onAction=e=>!!(this.isEntering||this.mobile);onEnter=()=>new Promise(e=>{this.isEntering=!0,this.enterBodyIndex=0,this.enterTime=0,this.enterResolve=e,this.scrollIcon.style.opacity="1",this.prepareBodiesOutside()});onLeave=e=>e<0?Promise.resolve():new Promise(t=>{this.isLeaving=!0,this.startTime=performance.now(),this.leaveResolve=t,this.scrollIcon&&(this.scrollIcon.style.transition="opacity 0.3s ease",this.scrollIcon.style.opacity="0"),this.setupLeaveEffect()});update(e){if(this.visible)if(this.isEntering){if(this.enterTimer+=1,this.enterTimer>=12)if(this.enterBodyIndex<this.bodies.length){const t=this.bodies[this.enterBodyIndex];this.launchSingleBody(t),this.enterBodyIndex++,this.enterTimer=0}else this.isEntering=!1,this.bodies.forEach(t=>{t.frictionAir=.15}),this.enterResolve?.(),this.enterResolve=null}else if(this.isLeaving&&this.gameBodyClone&&this.isReadyToLeave){const t=vt,n=window.innerWidth<=768,s=performance.now()-this.startTime;let i=Math.min(s/this.leaveDuration,1);if(!this.startState)return;let o,a,l,u,h,f,d,c=0,p=0,g=0,m=0;if(n){const S=i<=.5?Math.pow(i/.5,3):1,x=i>.55?(i-.55)/(1-.55):0;d=Math.pow(x,7),h=x;const M={x:window.innerWidth/2,y:window.innerHeight*.5};o=this.startState.x+(M.x-this.startState.x)*S,a=this.startState.y+(M.y-this.startState.y)*S,l=this.startState.angle*(1-S),u=this.startState.scale+(this.finalTargetScale-this.startState.scale)*d,m=.7*Math.min(i/.3,1)+.3*d,c=30*d,p=30*d,g=69*d}else{h=i>.3?(i-.3)/(1-.3):0;const y=Math.pow(h,8);f=y,d=y;const S={x:window.innerWidth/2,y:window.innerHeight*.7};if(o=this.startState.x+(S.x-this.startState.x)*f,a=this.startState.y+(S.y-this.startState.y)*f,l=this.startState.angle*(1-f),u=this.startState.scale+(this.finalTargetScale-this.startState.scale)*d,i<=.3)m=.7*(i/.3);else{const x=Math.min(h/.8,1);c=30*x,p=30*x,g=69*x,m=.7+.2*x}}if(this.inputLayer.style.background=n?"rgba(0,0,0,0.7)":`rgba(${c}, ${p}, ${g}, ${m})`,this.render.canvas.style.opacity=1-h*.05,h>0&&!n){this.walls&&this.walls.length>0&&!this.wallsRemoved&&(this.walls.forEach(M=>Pe.World.remove(this.world,M)),this.wallsRemoved=!0);const E=1.4,y=h*2e-4,S=o,x=a;this.bodies.forEach(M=>{if(M===this.gameBody)return;const T={x:M.position.x-S,y:M.position.y-x};if(Pe.Body.applyForce(M,M.position,{x:T.x*y,y:T.y*y}),!n){const b=1+(E-1)*h;M._lastScale||(M._lastScale=1);const w=b/M._lastScale;Pe.Body.scale(M,w,w),M._lastScale=b}})}const v=h>.8?1-(h-.8)*4:1;this.gameBodyClone.style.transform=`translate(${o}px, ${a}px) translate(-50%, -50%) rotate(${l}rad) scale(${u*t})`,this.gameBodyClone.style.opacity=v,i===1&&(this.leaveResolve&&(this.leaveResolve(),this.leaveResolve=null),this.isLeaving=!1,this.gameBodyClone.remove(),this.gameBodyClone=null)}else this.currentGravity.x+=(this.targetGravity.x-this.currentGravity.x)*.02,this.currentGravity.y+=(this.targetGravity.y-this.currentGravity.y)*.02,this.bodies.forEach(n=>{const i=(Math.random()-.5)*.001,o=(Math.random()-.5)*.001,a=this.currentGravity.x+i,l=this.currentGravity.y+o;Pe.Body.applyForce(n,n.position,{x:a,y:l})})}prepareBodiesOutside(){const e=vt,t=this.canvas.width/e,n=this.canvas.height/e,s=120;this.sideIndices=this.bodies.map((i,o)=>o%4);for(let i=this.sideIndices.length-1;i>0;i--){const o=Math.floor(Math.random()*(i+1));[this.sideIndices[i],this.sideIndices[o]]=[this.sideIndices[o],this.sideIndices[i]]}this.bodies.forEach((i,o)=>{const a=this.sideIndices[o];let l,u;a===0?(l=s,u=Math.random()*n):a===1?(l=t-s,u=Math.random()*n):a===2?(l=Math.random()*t,u=s):(l=Math.random()*t,u=n-s),Pe.Body.setPosition(i,{x:l,y:u}),i.frictionAir=.02})}launchSingleBody(e){const t=vt;Pe.World.add(this.world,e);const n=this.canvas.width/t*.5,s=this.canvas.height/t*.5,i=Math.atan2(s-e.position.y,n-e.position.x),o=.05+Math.random()*.01;Pe.Body.applyForce(e,e.position,{x:Math.cos(i)*o*e.mass,y:Math.sin(i)*o*e.mass}),Pe.Body.setAngularVelocity(e,(Math.random()-.5)*.15)}setupLeaveEffect(){if(this.gameBody=this.bodies.find(i=>i.render.sprite.texture.includes("greenbow-game")),!this.gameBody)return;const e=vt,t=new Image;t.src=this.gameBody.render.sprite.texture;const n=window.innerWidth<=768;this.gameBodyClone&&this.gameBodyClone.remove(),this.gameBodyClone=document.createElement("img"),this.gameBodyClone.src=this.gameBody.render.sprite.texture,Object.assign(this.gameBodyClone.style,{position:"fixed",zIndex:"9999",pointerEvents:"none",transformOrigin:"center center",display:"block",visibility:"hidden"}),this.inputLayer.appendChild(this.gameBodyClone);const s=()=>{const i=this.gameBodyClone.naturalWidth/e,o=this.gameBodyClone.naturalHeight/e,a=this.render.canvas.getBoundingClientRect(),l=this.gameBody.position.x+a.left,u=this.gameBody.position.y+a.top;this.startState={x:l,y:u,angle:this.gameBody.angle,scale:this.gameBody.render.sprite.xScale};const h=n?1.1:2;this.finalTargetScale=Math.max(window.innerWidth/i,window.innerHeight/o)*h,this.gameBodyClone.style.width=`${i}px`,this.gameBodyClone.style.height=`${o}px`,this.gameBodyClone.style.left="0px",this.gameBodyClone.style.top="0px",this.gameBodyClone.style.transform=`translate(${this.startState.x}px, ${this.startState.y}px) translate(-50%, -50%) rotate(${this.startState.angle}rad) scale(${this.startState.scale})`,this.gameBodyClone.style.visibility="visible",this.gameBody.render.visible=!1,this.startTime=performance.now(),this.isReadyToLeave=!0};this.gameBodyClone.complete?s():this.gameBodyClone.onload=s}async show(){Ut(this.sectionEl),this.scrollIcon&&this.scrollIcon.classList.add("isActive"),await this.init(),this.descText&&this.descText.classList.add("isVisible"),await new Promise(e=>setTimeout(e,400)),this.world.gravity.y=0,Pe.World.add(this.world,this.walls),Pe.World.add(this.world,this.mouseConstraint),this.visible=!0,this.onEnter(),this.scrollButton&&(this.scrollButton.style.top=`${this.scrollButtonMin}px`,this.sectionScrollableHeight=document.documentElement.scrollHeight-window.innerHeight)}hide(){this.visible=!1,this.isEntering=!1,this.isLeaving=!1,this.isDragging=!1,this.wallsRemoved=!1,this.enterBodyIndex=0,this.enterTimer=0,this.progress=0,this.descText&&this.descText.classList.remove("isVisible"),this.inputLayer.style.background="",this.inputLayer.style.transition="",this.render.canvas.style.filter="",this.render.canvas.style.opacity="",this.scrollIcon&&this.scrollIcon.classList.remove("isActive"),this.gameBodyClone&&(this.gameBodyClone.remove(),this.gameBodyClone=null),this.bodies&&this.bodies.length>0&&this.bodies.forEach(t=>{if(t){if(Pe.World.remove(this.world,t),t.render.visible=!0,t._lastScale){const n=1/t._lastScale;Pe.Body.scale(t,n,n),t._lastScale=1}Pe.Body.setVelocity(t,{x:0,y:0}),Pe.Body.setAngularVelocity(t,0),Pe.Body.setAngle(t,0)}}),this.walls&&this.walls.length>0&&this.walls.forEach(t=>{t&&Pe.World.remove(this.world,t)}),this.mouseConstraint&&Pe.World.remove(this.world,this.mouseConstraint),this.render.canvas.getContext("2d").clearRect(0,0,this.render.canvas.width,this.render.canvas.height),this.enterResolve&&(this.enterResolve(),this.enterResolve=null),this.leaveResolve&&(this.leaveResolve(),this.leaveResolve=null)}destroy=()=>{this.hide(),this.inputLayer&&(this.inputLayer.innerHTML="",(window.PointerEvent?["pointerdown","pointermove","pointerup","pointercancel"]:["touchstart","touchmove","touchend","mousedown","mousemove","mouseup"]).forEach(t=>{const n=t.includes("down")?this.handlers.pointerDown:t.includes("move")?this.handlers.pointerMove:this.handlers.pointerUp;this.inputLayer.removeEventListener(t,n)})),this.scrollButton&&(this.scrollButton.removeEventListener("touchstart",this.handlers.touchStart),this.scrollButton.removeEventListener("touchmove",this.handlers.touchMove),this.scrollButton.removeEventListener("mousedown",this.handlers.mouseDown)),window.removeEventListener("resize",this.handlers.resize),window.removeEventListener("mousemove",this.handlers.mouseMove),window.removeEventListener("mouseup",this.handlers.mouseUp),this.upButton&&this.upButton.removeEventListener("click",this.handlers.pageUp),this.downButton&&this.downButton.removeEventListener("click",this.handlers.pageDown),this.bodies=[],this.walls=[],this.mouseConstraint=null,this.mouse=null,this._inited=!1};onResize(){if(!this.visible)return;const e=window.innerWidth,t=window.innerHeight;this.mobile;const n=vt;this.isResizePending||(this.isResizePending=!0,requestAnimationFrame(()=>{const s=t*.01;document.documentElement.style.setProperty("--vh",`${s}px`),_n(this.index),Ut(this.sectionEl),this.isResizePending=!1})),clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{if(this.lastWidth===e&&Math.abs(this.lastHeight-t)<50)return;this.mobile=window.innerWidth<=1023;const s=this.canvas.width/n,i=this.canvas.height/n;this.walls&&this.walls.length>0&&Pe.World.remove(this.world,this.walls),this.createWalls(),Pe.World.add(this.world,this.walls);const o=this.mobile?430:1920,a=50;if(this.bodies.forEach(l=>{if(l.render.sprite&&l.render.sprite.texture){const f=new Image;f.src=l.render.sprite.texture;const c=f.naturalWidth/n/o,p=window.innerWidth*c,m=p*.7,v=l.bounds.max.x-l.bounds.min.x,E=m/v;Math.abs(E-1)>.01&&(Pe.Body.scale(l,E,E),l.render.sprite.xScale=p/(l._naturalWidth||1),l.render.sprite.yScale=l.render.sprite.xScale),Pe.Body.scale(l,E,E),l.render.sprite.xScale=p/f.naturalWidth,l.render.sprite.yScale=p/f.naturalWidth}let u=l.position.x,h=l.position.y;u>s-a&&(u=s-a),u<a&&(u=a),h>i-a&&(h=i-a),h<a&&(h=a),Pe.Body.setPosition(l,{x:u,y:h})}),this.scrollButton){this.sectionScrollableHeight=document.documentElement.scrollHeight-window.innerHeight,this.scrollbarHeight=110,this.scrollButtonMax=this.scrollbarHeight-this.scrollButtonHeight-this.scrollMargin,this.scrollbarMovable=this.scrollButtonMax-this.scrollButtonMin;const l=window.scrollY/this.sectionScrollableHeight;let u=this.scrollButtonMin+l*this.scrollbarMovable;u=Math.max(this.scrollButtonMin,Math.min(u,this.scrollButtonMax)),this.scrollButton.style.top=`${u}px`}this.lastWidth=e,this.lastHeight=t},200)}}function wg(r){return new Eg(Ot,r)}class Tg extends ts{constructor(e){super(e)}load(e,t,n,s){const i=this,o=new wu(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=i.parse(JSON.parse(a));t&&t(l)},n,s)}parse(e){return new bg(e)}}class bg{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=Ag(e,t,this.data);for(let i=0,o=s.length;i<o;i++)n.push(...s[i].toShapes());return n}}function Ag(r,e,t){const n=Array.from(r),s=e/t.resolution,i=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,l=0;for(let u=0;u<n.length;u++){const h=n[u];if(h===`
`)a=0,l-=i;else{const f=Cg(h,s,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function Cg(r,e,t,n,s){const i=s.glyphs[r]||s.glyphs["?"];if(!i){console.error('THREE.Font: character "'+r+'" does not exists in font family '+s.familyName+".");return}const o=new Cu;let a,l,u,h,f,d,c,p;if(i.o){const g=i._cachedOutline||(i._cachedOutline=i.o.split(" "));for(let m=0,v=g.length;m<v;)switch(g[m++]){case"m":a=g[m++]*e+t,l=g[m++]*e+n,o.moveTo(a,l);break;case"l":a=g[m++]*e+t,l=g[m++]*e+n,o.lineTo(a,l);break;case"q":u=g[m++]*e+t,h=g[m++]*e+n,f=g[m++]*e+t,d=g[m++]*e+n,o.quadraticCurveTo(f,d,u,h);break;case"b":u=g[m++]*e+t,h=g[m++]*e+n,f=g[m++]*e+t,d=g[m++]*e+n,c=g[m++]*e+t,p=g[m++]*e+n,o.bezierCurveTo(f,d,c,p,u,h);break}}return{offsetX:i.ha*e,path:o}}class el extends Oo{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}function tl(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),s=new Set(Object.keys(r[0].morphAttributes)),i={},o={},a=r[0].morphTargetsRelative,l=new Jt;let u=0;for(let h=0;h<r.length;++h){const f=r[h];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const c in f.attributes){if(!n.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;i[c]===void 0&&(i[c]=[]),i[c].push(f.attributes[c]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const c in f.morphAttributes){if(!s.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[c]===void 0&&(o[c]=[]),o[c].push(f.morphAttributes[c])}if(e){let c;if(t)c=f.index.count;else if(f.attributes.position!==void 0)c=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,c,h),u+=c}}if(t){let h=0;const f=[];for(let d=0;d<r.length;++d){const c=r[d].index;for(let p=0;p<c.count;++p)f.push(c.getX(p)+h);h+=r[d].attributes.position.count}l.setIndex(f)}for(const h in i){const f=nl(i[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){const c=[];for(let g=0;g<o[h].length;++g)c.push(o[h][g][d]);const p=nl(c);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function nl(r){let e,t,n,s=-1,i=0;for(let u=0;u<r.length;++u){const h=r[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;i+=h.count*t}const o=new e(i),a=new It(o,t,n);let l=0;for(let u=0;u<r.length;++u){const h=r[u];if(h.isInterleavedBufferAttribute){const f=l/t;for(let d=0,c=h.count;d<c;d++)for(let p=0;p<t;p++){const g=h.getComponent(d,p);a.setComponent(d+f,p,g)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const il=`
    uniform float uStrength;
    uniform vec3 uSinkPosition;

    void main() {
        vec3 pos = position;

        float rowDelay = (120.0 + pos.y) * 0.002; 
        float fallStrength = max(0.0, uStrength * 1.3 - rowDelay);

        float gatherX = smoothstep(0.0, 0.5, fallStrength);
        pos.x = mix(pos.x, 0.0, gatherX );

        float fallStart = smoothstep(0.0, 1.0, fallStrength);
        float distToSink = pos.y - uSinkPosition.y ;
        pos.y -= fallStart * distToSink * (2.0 + pos.y * 0.001);

        float shrinkX = smoothstep(0.5, 1.0, fallStrength);
        pos.x *= (1.0 - shrinkX);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`,sl=`
    uniform float uStrength;
    uniform vec3 uBaseColor;

    vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    void main() {
        vec3 pointColor = vec3(0.227, 0.851, 0.510);

        if (uStrength < 0.01) {
            gl_FragColor = vec4(pointColor, 1.0);
            return;
        }

        float hue = fract(uStrength * 1.0 + 0.4);
        vec3 rainbowColor = hsv2rgb(vec3(hue, 0.7, 0.7));

        float colorMixer = smoothstep(0.0, 0.5, uStrength); 
        vec3 finalColor = mix(pointColor, rainbowColor, colorMixer);

        gl_FragColor = vec4(finalColor, 1.0);
    }
`;class Rg{constructor(e,t){this.engine=e,this.scene=e.scene,this.camera=e.camera,this.sectionEl=t,this.sectionEl._sectionInstance=this,this.font=null,this.progress=0,this.isEntering=!1,this.isLeaving=!1,this.enterResolve=null,this.leaveResolve=null,this.setResponsiveValues(),this.loader=new Tg,this.mesh=null,this.material=null,this._inited=!1}setResponsiveValues(){this.isMobile=window.innerWidth<768,this.fontSize=this.isMobile?16:18,this.lineHeight=this.isMobile?22:32,this.maxChars=this.isMobile?25:40}createSinkingText=async()=>{const e=()=>new Promise(o=>{this.loader.load("/fonts/Pretendard Variable_Regular.json",a=>o(a))});this.font||(this.font=await e());const n=this.wrapText("I started with a simple but powerful idea: every brand deserves a stunning digital presence. Just as great design connects people with products, my role is to connect businesses with their audiences through beautiful websites, immersive 3D experiences, and intuitive UI/UX design. My work reflects this philosophy.",this.maxChars),s=[];n.forEach((o,a)=>{const l=new el(o,{font:this.font,size:this.fontSize,height:1,curveSegments:this.isMobile?2:4,bevelEnabled:!1});l.translate(0,-a*this.lineHeight,0),s.push(l)});const i=tl(s);i.center(),this.mesh&&this.destroy(),this.textMaterial=new kt({vertexShader:il,fragmentShader:sl,uniforms:{uTime:{value:0},uSinkPosition:{value:new z(0,-window.innerHeight*.6,0)},uStrength:{value:0}},transparent:!0}),this.mesh=new bt(i,this.textMaterial),this.mesh.position.z=-100,this.scene.add(this.mesh),this.mesh.visible=!1};wrapText=(e,t)=>{const n=e.split(" ");let s=[],i="";return n.forEach(o=>{(i+o).length<t?i+=(i===""?"":" ")+o:(s.push(i),i=o)}),s.push(i),s};createLine(){const e=new mn(1,1);this.lineMaterial=new No({color:3856770,transparent:!0}),this.lineMesh=new bt(e,this.lineMaterial),this.scene.add(this.lineMesh),this.lineMesh.visible=!1}init(){this._inited||(this.createSinkingText(),this.createLine(),this._inited=!0)}onEnter=()=>new Promise(e=>{this.isEntering=!0,this.progress=0,this.enterResolve=e,this.material&&(this.material.uniforms.uStrength.value=0)});onLeave(e){return new Promise(t=>{if(e<0){t();return}this.isEntering&&(this.isEntering=!1,this.enterResolve?.(),this.enterResolve=null),this.progress=0,this.isLeaving=!0,this.leaveResolve=t})}update(e){if(!this.lineMesh||!this.mesh)return;const t=200,n=100,s=.01;if(this.isEntering){this.progress+=s;const i=window.innerHeight*.7,a=i-t,l=i-a*(this.progress/.7);if(this.progress<.7&&(this.lineMesh.visible=!0,this.lineMesh.position.set(0,l,-100),this.lineMesh.scale.set(1.5,60,1),this.lineMaterial.opacity=1,this.mesh.visible=!1),this.progress>=.5){this.mesh.visible=!0;const u=(this.progress-.5)/.5;this.textMaterial.uniforms.uSinkPosition.value.set(0,l,0),this.textMaterial.uniforms.uStrength.value=1-u,this.lineMaterial.opacity=1-u,this.lineMaterial.opacity<=0&&(this.lineMesh.visible=!1)}this.progress>=1&&(this.isEntering=!1,this.lineMesh.visible=!1,this.textMaterial.uniforms.uSinkPosition.value.set(0,t,0),this.enterResolve?.(),this.enterResolve=null)}if(this.isLeaving){this.progress+=s;const i=n,o=-window.innerHeight*.7,a=i-o,l=i-a*this.progress;if(this.progress<.7){const u=Math.min(1,this.progress/.7);this.mesh.visible=!0,this.textMaterial.uniforms.uSinkPosition.value.set(0,l,0),this.textMaterial.uniforms.uStrength.value=u,this.lineMesh.visible=!1}this.progress>=.5&&(this.lineMesh.visible=!0,this.lineMesh.position.set(0,l,-100),this.lineMesh.scale.set(1.5,80,1),this.lineMaterial.opacity=1),this.progress>=1&&(this.isLeaving=!1,this.lineMesh.visible=!1,this.mesh.visible=!1,this.leaveResolve?.(),this.leaveResolve=null)}}show(){Ut(this.sectionEl),this.init(),this.progress=0,this.isLeaving=!1,this.material&&(this.material.uniforms.uStrength.value=1),this.mesh&&(this.mesh.visible=!1),this.lineMesh&&(this.lineMesh.visible=!1),this.onEnter(),this.visible=!0}hide(){this.visible=!1,this.isLeaving=!1,this.isEntering=!1,this.progress=0,this.mesh&&(this.mesh.visible=!1),this.lineMesh&&(this.lineMesh.visible=!1),this.leaveResolve&&(this.leaveResolve(),this.leaveResolve=null),this.enterResolve&&(this.enterResolve(),this.enterResolve=null)}onResize(){if(!this.visible)return;const e=window.innerWidth,t=window.innerHeight;this.isResizePending||(this.isResizePending=!0,requestAnimationFrame(()=>{_n(this.index||"1"),Ut(this.sectionEl);const n=t*.01;if(document.documentElement.style.setProperty("--vh",`${n}px`),this.textMaterial){const s=this.isEntering?t*.7:200;this.textMaterial.uniforms.uSinkPosition.value.y=s}this.lineMesh&&this.lineMesh.visible&&(this.lineMesh.position.y=t*.7),this.isResizePending=!1})),clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{if(this.lastWidth===e&&Math.abs(this.lastHeight-t)<10)return;const n=this.isMobile;this.setResponsiveValues(),n!==this.isMobile&&this.createSinkingText(),this.lastWidth=e,this.lastHeight=t},250)}createSinkingText=async()=>{const e=()=>new Promise(o=>{this.loader.load("/fonts/Pretendard_Regular.json",a=>o(a))});this.font||(this.font=await e());const n=this.wrapText("I started with a simple but powerful idea: every brand deserves a stunning digital presence. Just as great design connects people with products, my role is to connect businesses with their audiences through beautiful websites, immersive 3D experiences, and intuitive UI/UX design. My work reflects this philosophy.",this.maxChars),s=[];n.forEach((o,a)=>{const l=new el(o,{font:this.font,size:this.fontSize,height:1,curveSegments:this.isMobile?2:4,bevelEnabled:!1});l.translate(0,-a*this.lineHeight,0),s.push(l)});const i=tl(s);i.center(),this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()),this.textMaterial=new kt({vertexShader:il,fragmentShader:sl,uniforms:{uTime:{value:0},uSinkPosition:{value:new z(0,-window.innerHeight*.6,0)},uStrength:{value:0}},transparent:!0}),this.mesh=new bt(i,this.textMaterial),this.mesh.position.z=-100,this.scene.add(this.mesh),this.mesh.visible=this.visible};destroy(){this.hide(),this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh.material&&this.mesh.material.dispose(),this.mesh=null),this.lineMesh&&(this.scene.remove(this.lineMesh),this.lineMesh.geometry&&this.lineMesh.geometry.dispose(),this.lineMesh.material&&this.lineMesh.material.dispose(),this.lineMesh=null),this.font=null,this._inited=!1}}function Pg(r){return new Rg(Tt,r)}const hi=r=>{const e=window.innerWidth<1024,t=vt,n=t>=2?"@2x":"";let s="";return e?s=`/assets/image/aboutMeaning/drop-${r}-mobile${n}.png`:s=`/assets/image/aboutMeaning/drop-${r}${n}.png`,{src:s,isMobile:e,dpr:t}},ui={duck:hi("duck"),kuma:hi("kuma"),crown:hi("crown"),taco:hi("taco"),cool:hi("cool"),info:hi("info")};class Lg{constructor(e,t){this.engine=e.engine,this.world=e.world,this.render=e.render,this.sectionEl=t,this.sectionEl._sectionInstance=this,this.isEntering=!1,this.isLeaving=!1,this.enterResolve=null,this.leaveResolve=null,this.lastWidth=window.innerWidth,this.lastHeight=window.innerHeight,this.isResizePending=!1,this.resizeTimer=null,this.objects=[],this.wordBodies=[],this.timers=[],this._inited=!1,this.visible=!1,this.domLayer=document.querySelector(".matter-layer"),this.groups={greenGroup:[],bowGroup:[],imgGroup:[]},this.clickBinding=!1,this.greenClick=!1,this.bowClick=!1}addBodiesWithRhythm=e=>{this.timers.forEach(clearTimeout),this.timers=[];const t=e.filter(Boolean),n=t.length;if(n===0)return;t.forEach(o=>{Pe.Body.setVelocity(o,{x:0,y:0}),Pe.Body.setAngularVelocity(o,0),o.force={x:0,y:0},o.torque=0,o.angularSpeed=0,o.speed=0,Pe.Body.setAngle(o,0),Pe.Body.setPosition(o,{x:window.innerWidth/2,y:-200}),o.frictionAir=.02,o.friction=.35,o.restitution=.8});const s=4500,i=-300;t.forEach((o,a)=>{const l=a/(n-1),u=4*Math.pow(l-.5,3)+.5,h=.3,d=(u*(1-h)+l*h)*s,c=setTimeout(()=>{this.visible&&!this.isLeaving&&(Pe.Body.setAngle(o,(Math.random()-.5)*.4),Pe.World.add(this.world,o),a===n-1&&setTimeout(()=>this.enterResolve?.(),500))},Math.max(0,d+i));this.timers.push(c)})};init(){if(this._inited)return;this.domLayer.innerHTML="",this.wordBodies=[],this.groups={greenGroup:[],bowGroup:[],imgGroup:[]};const{Bodies:e}=Pe,t=["<span class='symbolizes' data-group = 'greenGroup'>SYMBOLIZES</span>","<span class='thick growth' data-group = 'greenGroup'>GROWTH</span>","<span class='thick vitality' data-group = 'greenGroup'>VITALITY</span>",{type:"image",paths:ui.kuma,className:"kuma"},{type:"image",paths:ui.duck,className:"duck"},`<span class='green greenbow-font' data-group = 'greenGroup'>"SUNIL"</span>`,"<span class='small creativity' data-group = 'greenGroup'>and</span> <span class='thick creativity' data-group = 'greenGroup'>CREATIVITY</span>","<span class='small essence' data-group = 'greenGroup'>the</span> <span class='essence' data-group = 'greenGroup'> ESSENCE </span> <span class='small essence' data-group = 'greenGroup'>of</span>","<span class='thick innovation' data-group = 'greenGroup'>INNOVATION</span>",{type:"image",paths:ui.cool,className:"cool"},`<span class='bow greenbow-font' data-group = 'bowGroup'>".dev"</span>`,"<span class='evokes' data-group = 'bowGroup'> BUILDS </span>",{type:"image",paths:ui.info,className:"info"},"<span class='small arc' data-group = 'bowGroup'>the</span><span class='arc' data-group = 'bowGroup'> ARC </span> <span class='small arc' data-group = 'bowGroup'>of</span>","<span class='small rainbow' data-group = 'bowGroup'>a</span><span class='rainbow' data-group = 'bowGroup'> WEBSITES </span>",{type:"image",paths:ui.crown,className:"crown"},"<span class = 'representing' data-group = 'bowGroup'> DELIVERING </span>","<span class='thick connection' data-group = 'bowGroup'>CONNECTION</span>",{type:"image",paths:ui.taco,className:"taco"},"<span class='thick diversity' data-group = 'bowGroup'>CREATIVITY</span>","<span class='small new' data-group = 'bowGroup'>and</span><span class='new' data-group = 'bowGroup'> NEW </span>","<span class='thick horizons' data-group = 'bowGroup'>EXPERIENCES</span>"];this.wordBodies=new Array(t.length);const n=window.innerWidth,s=window.innerHeight;t.forEach((l,u)=>{if(l.type==="image"){const h=document.createElement("img");h.className="word "+(l.className||""),h.className==="word green"?this.groups.greenGroup.push(h):h.className==="word bow"?this.groups.bowGroup.push(h):this.groups.imgGroup.push(h),h.src=l.paths.src,h.onload=()=>{const f=h.offsetWidth,d=h.offsetHeight,c=e.rectangle(n/2,-200,f,d,{restitution:.8,friction:.35,frictionAir:.02,density:.005,render:{fillStyle:"transparent",strokeStyle:"transparent",lineWidth:0}});c.element=h,this.wordBodies[u]=c},this.domLayer.appendChild(h)}else{const h=document.createElement("div");h.className="word",h.innerHTML=l,this.domLayer.appendChild(h);const f=h.querySelector("[data-group]")?.dataset.group;f&&this.groups[f].push(h),requestAnimationFrame(()=>{const d=h.getBoundingClientRect(),c=d.width,p=d.height,g=e.rectangle(n/2,-200,c,p,{restitution:.8,friction:.35,frictionAir:.02,density:.005,render:{fillStyle:"transparent",strokeStyle:"transparent",lineWidth:0}});g.element=h,this.wordBodies[u]=g})}});const i=e.rectangle(n/2,s+20,n,40,{isStatic:!0,friction:.3}),o=e.rectangle(-20,s/2,40,s,{isStatic:!0}),a=e.rectangle(n+20,s/2,40,s,{isStatic:!0});this.objects.push(i,o,a),this.clickBinding||(this.clickBind(),this.clickBinding=!0),this._inited=!0}clickBind=()=>{this.greenButton=document.querySelector(".green"),this.bowButton=document.querySelector(".bow"),this.greenButton.addEventListener("click",this.greenClickEvent),this.bowButton.addEventListener("click",this.bowClickEvent)};removeBind=()=>{this.greenButton&&this.greenButton.removeEventListener("click",this.greenClickEvent),this.bowButton&&this.bowButton.removeEventListener("click",this.bowClickEvent)};greenClickEvent=()=>{this.visible&&(!this.greenClick&&!this.bowClick?(this.groups.bowGroup.forEach(e=>{e.classList.remove("fade-in"),e.classList.add("fade-out")}),this.groups.imgGroup.forEach(e=>{e.classList.remove("fade-in"),e.classList.add("fade-out")}),this.groups.greenGroup.forEach(e=>{const t=Math.floor(Math.random()*360);e.style.color=`hsl(${t}, 70%, 60%)`}),this.greenClick=!0):(this.groups.bowGroup.forEach(e=>{e.classList.remove("fade-out"),e.classList.add("fade-in")}),this.groups.imgGroup.forEach(e=>{e.classList.remove("fade-out"),e.classList.add("fade-in")}),this.groups.greenGroup.forEach(e=>{e.style.color="var(--color-point)"}),this.greenClick=!1))};bowClickEvent=()=>{this.visible&&(!this.bowClick&&!this.greenClick?(this.groups.greenGroup.forEach(e=>{e.classList.remove("fade-in"),e.classList.add("fade-out")}),this.groups.imgGroup.forEach(e=>{e.classList.remove("fade-in"),e.classList.add("fade-out")}),this.groups.bowGroup.forEach(e=>{const t=Math.floor(Math.random()*360);e.style.color=`hsl(${t}, 70%, 60%)`}),this.bowClick=!0):(this.groups.greenGroup.forEach(e=>{e.classList.remove("fade-out"),e.classList.add("fade-in")}),this.groups.imgGroup.forEach(e=>{e.classList.remove("fade-out"),e.classList.add("fade-in")}),this.groups.bowGroup.forEach(e=>{e.style.color="var(--color-point)"}),this.bowClick=!1))};onLeave=e=>new Promise(t=>{if(e<0){t();return}this.isLeaving=!0,this.leaveResolve=t;const n=this.wordBodies.filter(s=>s&&this.world.bodies.includes(s));if(n.length>0){this.world.gravity.y=0,this.objects.forEach(o=>Pe.World.remove(this.world,o));const s=window.innerWidth/2,i=window.innerHeight/2;n.forEach(o=>{const a=Math.atan2(o.position.y-i,o.position.x-s),l=.15*o.mass;o.frictionAir=0,Pe.Body.applyForce(o,o.position,{x:Math.cos(a)*l,y:Math.sin(a)*l}),Pe.Body.setAngularVelocity(o,(Math.random()-.5)*.5)})}setTimeout(()=>{this.isLeaving=!1,this.leaveResolve?.(),this.leaveResolve=null},1e3)});update(){this.visible&&this.wordBodies.forEach(e=>{const t=e.element;if(!t)return;const n=parseFloat(t.style.left)||0,s=parseFloat(t.style.top)||0,i=e.position.x-t.offsetWidth/2,o=e.position.y-t.offsetHeight/2,a=.4,l=n+(i-n)*a,u=s+(o-s)*a;t.style.left=`${l.toFixed(2)}px`,t.style.top=`${u.toFixed(2)}px`,t.style.transform=`rotate(${e.angle.toFixed(4)}rad)`})}show(){this.visible=!0,Ut(this.sectionEl),this.init(),this.world.gravity.y=1.2,Pe.World.add(this.world,this.objects);const e=setInterval(()=>{this.wordBodies.filter(Boolean).length===this.wordBodies.length&&(this.addBodiesWithRhythm(this.wordBodies),clearInterval(e))},50)}hide(){this.visible=!1,this.timers.forEach(clearTimeout),this.timers=[],this.objects.forEach(t=>Pe.World.remove(this.world,t)),this.wordBodies.forEach(t=>{t&&Pe.World.remove(this.world,t)}),this.render.canvas.getContext("2d").clearRect(0,0,this.render.canvas.width,this.render.canvas.height)}destroy(){this.hide(),this.removeBind(),this.clickBinding=!1,this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=null),this.wordBodies.forEach(e=>{e&&(e.element&&e.element.parentNode&&e.element.parentNode.removeChild(e.element),e.element=null)}),this.groups={greenGroup:[],bowGroup:[],imgGroup:[]},this.objects=[],this.wordBodies=[],this.domLayer&&(this.domLayer.innerHTML="",this.domLayer.style.top="",this.domLayer.style.height=""),this.enterResolve=null,this.leaveResolve=null,this._inited=!1,console.log("SectionAboutMeaning: Matter.js world and DOM elements cleared.")}onResize(){if(!this.visible||!this._inited)return;const e=window.innerWidth,t=window.innerHeight;this.isResizePending||(this.isResizePending=!0,requestAnimationFrame(()=>{_n(this.index),Ut(this.sectionEl);const n=t*.01;if(document.documentElement.style.setProperty("--vh",`${n}px`),this.objects&&this.objects.length>=3){const s=this.objects[0],i=this.objects[1],o=this.objects[2];Pe.Body.setPosition(s,{x:e/2,y:t+20}),Pe.Body.setPosition(i,{x:-20,y:t/2}),Pe.Body.setPosition(o,{x:e+20,y:t/2}),this.wordBodies.forEach(a=>{a&&a.position.y>t&&(Pe.Body.setPosition(a,{x:Pe.Common.clamp(a.position.x,20,e-20),y:t-50}),Pe.Body.setVelocity(a,{x:0,y:-2}))}),this.isResizePending=!1}})),clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{if(!(this.lastWidth===e&&Math.abs(this.lastHeight-t)<10)){if(this.objects&&this.objects[0]){const n=this.objects[0],s=n.bounds.max.x-n.bounds.min.x,i=e/s;Math.abs(i-1)>.01&&Pe.Body.scale(n,i,1)}this.wordBodies.forEach(n=>{n&&(n.position.x<0?Pe.Body.setPosition(n,{x:50,y:n.position.y}):n.position.x>e&&Pe.Body.setPosition(n,{x:e-50,y:n.position.y}))}),this.lastWidth=e,this.lastHeight=t}},200)}}function Dg(r){return new Lg(Ot,r)}class Ig{constructor(e,t){this.engine=e,this.scene=e.scene,this.renderer=e.renderer,this.camera=e.camera,this.sectionEl=t,this.sectionEl._sectionInstance=this,this.mouse=new ge,this.lastMouse=new ge,this.velocity=new ge,this.lines=[],this._inited=!1,this.visible=!1,this.initialViewportHeight=window.innerHeight,this.isMobile=window.innerWidth<=1024,this.currentProfileKey=null,this.canvas=document.querySelector("#threeCanvas"),this.lastWidth=window.innerWidth,this.lastHeight=window.innerHeight,this.isResizePending=!1,this.resizeTimer=null,this.handlers={mouseMove:this.onMouseMove.bind(this),resize:this.onResize.bind(this),touchStart:this.onTouchStart.bind(this),touchMove:this.onTouchMove.bind(this),touchEnd:this.onTouchEnd.bind(this)},window.addEventListener("mousemove",this.handlers.mouseMove),window.addEventListener("resize",this.handlers.resize),this.canvas.addEventListener("touchstart",this.handlers.touchStart,{passive:!0}),this.canvas.addEventListener("touchmove",this.handlers.touchMove,{passive:!0}),this.canvas.addEventListener("touchend",this.handlers.touchEnd,{passive:!0})}getLayoutProfile(){const e=window.innerWidth;return e>=1024?{key:"desktop",align:"right",baseRefW:1920,baseRefH:920,imgW:1160,imgH:680}:e>=768?{key:"tablet",align:"center",baseRefW:768,baseRefH:1100,imgW:550,imgH:600}:{key:"mobile",align:"center",baseRefW:460,baseRefH:920,imgW:370,imgH:530}}disposeAllLines(){this.lines.forEach(e=>{this.scene.children.includes(e)&&this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.lines=[]}computeBaseCenterYForTop50vh(){const e=this.getLayoutProfile(),n=this.sectionEl.getBoundingClientRect().height,s=this.initialViewportHeight*.5;let i=0;return e.align==="center"&&(i=n/2-s),i}createLines(e){this.disposeAllLines();const t=window.innerWidth,n=window.innerHeight,s=e.imgW,i=e.imgH,o=t*(s/e.baseRefW);let a=window.innerWidth>=1024?n*(i/e.baseRefH):o*(i/s);this.planeHeight=a;let l=0;e.align==="right"&&(l=t/2-o/1);const u=this.computeBaseCenterYForTop50vh();this._baseMeta={imgWidth:s,imgHeight:i,planeWidth:o,planeHeight:a,baseCenterX:l,baseCenterY:u,profile:e};const h=20,f=40,d=e.key==="desktop",p=(d?o:a)*(d?1.3:1),g=d?a/2:o/2,m=Math.atan2(g,p)*2,v=d?0:-Math.PI/2,E=v-m/2;this.lines=[];for(let y=0;y<h;y++){const S=E+m/(h-1)*y,x=S-v,M=p/Math.cos(x),T=[],b=new Float32Array(f*3);for(let N=0;N<f;N++){const U=N/(f-1),B=l+Math.cos(S)*M*U,O=u+Math.sin(S)*M*U;T.push({x:B,y:O,ox:B,oy:O,vx:0,vy:0}),b[N*3]=0,b[N*3+1]=.8,b[N*3+2]=.3}const w=new Jt;w.setAttribute("position",new It(new Float32Array(f*3),3)),w.setAttribute("color",new It(b,3));const _=new Fl({transparent:!0,opacity:1,linewidth:2,vertexColors:!0,depthTest:!1}),A=new wa(w,_);A.userData={pts:T,index:y,channel:y%3},this.lines.push(A);const R=_.clone();R.opacity=.4;const D=new wa(w,R);D.userData={pts:T,index:y,isSub:!0},D.position.set(.5,.5,0),this.lines.push(D)}this.updateSectionSpacer()}updateSectionSpacer(){if(window.innerWidth>=1024)return;const e=this._baseMeta?this._baseMeta.planeHeight:0;if(!e)return;let t=this.sectionEl.querySelector(".hero-plane-height");t||(t=document.createElement("div"),t.className="hero-plane-height",this.sectionEl.appendChild(t)),t.style.height=`${e}px`,requestAnimationFrame(()=>{Ut(this.sectionEl),this.updateAfterRenderer()})}init(){const e=this.getLayoutProfile();this._inited&&this.currentProfileKey===e.key||(this._inited&&this.currentProfileKey!==e.key&&(this.disposeAllLines(),this._inited=!1,this.currentProfileKey=null),this.currentProfileKey=e.key,this.createLines(e),this._inited=!0,this.visible&&this.lines.forEach(t=>{this.scene.children.includes(t)||this.scene.add(t)}))}updateAfterRenderer(){if(!this._inited||!this._baseMeta)return;const e=this.getLayoutProfile(),t=e.key==="desktop",n=window.innerWidth,s=this._baseMeta.imgWidth,i=this._baseMeta.imgHeight,o=n*(s/e.baseRefW);let a=window.innerWidth>=1024?window.innerHeight*(i/e.baseRefH):o*(i/s);this.planeHeight=a;let l=0;e.align==="right"&&(l=n/2-o/1);const u=this.computeBaseCenterYForTop50vh(),h=this.lines.length,d=(t?o:a)*(t?1.3:1),c=t?a/2:o/2,p=Math.atan2(c,d)*2,g=t?0:-Math.PI/2,m=g-p/2;this.lines.forEach((v,E)=>{const{pts:y}=v.userData,S=m+p/(h-1)*E,x=S-g,M=d/Math.cos(x);for(let T=0;T<y.length;T++){const b=T/(y.length-1),w=l+Math.cos(S)*M*b,_=u+Math.sin(S)*M*b;y[T].ox=w,y[T].oy=_,this.visible||(y[T].x=w,y[T].y=_)}v.geometry.attributes.position.needsUpdate=!0}),this._baseMeta={...this._baseMeta,planeWidth:o,planeHeight:a,baseCenterX:l,baseCenterY:u,profile:e}}update(e){if(!this.visible||!this._inited)return;this.velocity.x*=.95,this.velocity.y*=.95;const t=this.isMobile?80:220,n=new Ke,s=new Ke("#88F382"),i=new Ke("#1A6337"),o=window.innerWidth>=1024?1.5:1;this.lines.forEach((a,l)=>{const{pts:u}=a.userData,h=a.geometry.attributes.position,f=a.geometry.attributes.color,d=l/(this.lines.length-1),c=new Ke;c.lerpColors(s,i,1-d);for(let p=0;p<u.length;p++){const g=u[p],m=this.mouse.x-g.x,v=this.mouse.y-g.y,E=Math.sqrt(m*m+v*v);if(E<t){const T=(1-E/t)*.35;g.vx+=this.velocity.x*T,g.vy+=this.velocity.y*T}if(g.vx+=(g.ox-g.x)*.16,g.vy+=(g.oy-g.y)*.16,g.vx*=.86,g.vy*=.86,g.x+=g.vx,g.y+=g.vy,Math.sqrt(g.vx*g.vx+g.vy*g.vy)>.5){const T=(l*.05+p*.01+Date.now()*.005)%1;n.setHSL(T,1,.6),f.setXYZ(p,n.r*.85,n.g*.85,n.b*.85)}else n.copy(c),n.multiplyScalar(o);const S=f.getX(p),x=f.getY(p),M=f.getZ(p);f.setXYZ(p,S+(n.r-S)*.15,x+(n.g-x)*.15,M+(n.b-M)*.15),h.setXYZ(p,g.x,g.y,0)}h.needsUpdate=!0,f.needsUpdate=!0})}show(){this.visible=!0,this.init(),this._inited&&(this.updateSectionSpacer(),this.lines.forEach(e=>{this.scene.children.includes(e)||this.scene.add(e)}),requestAnimationFrame(()=>{const e=this.getFinalHeight();_n("0",e)})),this.isMobile&&(this.canvas.style.touchAction="pan-y")}hide(){this.lines.forEach(e=>{this.scene.children.includes(e)&&this.scene.remove(e)}),this.visible=!1}onMouseMove(e){if(!this.visible)return;const t=e.clientX-window.innerWidth/2,n=-(e.pageY-this.getFinalHeight()/2);this.mouse.x=t,this.mouse.y=n,this.velocity.x=this.mouse.x-this.lastMouse.x,this.velocity.y=this.mouse.y-this.lastMouse.y,this.lastMouse.copy(this.mouse)}onTouchStart(e){const t=e.touches[0],n=this.canvas.getBoundingClientRect(),s=t.clientX-n.left,i=t.clientY-n.top,o=s-n.width/2,a=-(i-n.height/2);this._lastClientX=t.clientX,this._lastClientY=t.clientY,this.mouse.set(o,a),this.lastMouse.set(o,a)}onTouchMove(e){if(!this.visible)return;const t=e.touches[0],n=this.canvas.getBoundingClientRect(),s=t.clientX-n.left,i=t.clientY-n.top,o=s-n.width/2,a=-(i-n.height/2);this._lastClientX!==void 0&&(this.velocity.x=t.clientX-this._lastClientX,this.velocity.y=t.clientY-this._lastClientY),this._lastClientX=t.clientX,this._lastClientY=t.clientY,this.mouse.set(o,a),this.lastMouse.set(o,a)}onTouchEnd(e){this._lastClientX=void 0,this._lastClientY=void 0,this._isHorizontalDragging=!1,this.velocity.set(0,0)}onResize(){if(!this.visible||!this.sectionEl)return;const e=window.innerWidth,t=window.innerHeight;this.isResizePending||(this.isResizePending=!0,requestAnimationFrame(()=>{const n=this.getLayoutProfile();this.isMobile=e<=1023;const s=t*.01;document.documentElement.style.setProperty("--vh",`${s}px`),Ut(this.sectionEl),this.updateAfterRenderer(),n.key!=="desktop"&&this.updateSectionSpacer();const i=this.getFinalHeight();_n(this.index||"0",i),this.isResizePending=!1})),clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{if(this.lastWidth===e&&Math.abs(this.lastHeight-t)<10)return;this.getLayoutProfile().key!==this.currentProfileKey&&(this.disposeAllLines(),this._inited=!1,this.init()),this.lastWidth=e,this.lastHeight=t},200)}destroy(){if(this.visible=!1,this._inited=!1,this.hide(),this.disposeAllLines(),window.removeEventListener("mousemove",this.handlers.mouseMove),window.removeEventListener("resize",this.handlers.resize),this.canvas&&(this.canvas.removeEventListener("touchstart",this.handlers.touchStart),this.canvas.removeEventListener("touchmove",this.handlers.touchMove),this.canvas.removeEventListener("touchend",this.handlers.touchEnd)),this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=null),this.lines=[],this._baseMeta=null,this.handlers=null,this.sectionEl){this.sectionEl._sectionInstance=null;const e=this.sectionEl.querySelector(".hero-plane-height");e&&e.remove()}}getFinalHeight=()=>this.sectionEl.getBoundingClientRect().height}function Ug(r){return new Ig(Tt,r)}function gi(r){return new Promise(e=>setTimeout(e,r))}function di(r=document){r.querySelectorAll(".type-cursor").forEach(e=>e.remove())}function Ng(r){return Array.from(r)}async function Qt(r,e,t={}){if(!r)throw new Error("typewriter : target element required");const n=Object.assign({charDelay:30,lineDelay:10,variance:30},t);Array.isArray(e)||(e=[e]),di(),r.innerHTML="";const s=document.createElement("span");s.className="type-cursor",r.appendChild(s);for(let i=0;i<e.length;i++){const o=e[i];if(o===""){s.before(document.createElement("br"));continue}const a=Ng(o);for(let l=0;l<a.length;l++){const u=n.variance?Math.floor(Math.random()*(n.variance*2)-n.variance):0;s.before(document.createTextNode(a[l])),await gi(Math.max(0,n.charDelay+u))}i!==e.length-1&&s.before(document.createElement("br")),await gi(n.lineDelay)}}async function rl(r,e={}){if(!r)throw new Error("typerwirterSimple : target required");const t=Object.assign({charDelay:30,variance:10},e);di();const n=[];function s(l){l.childNodes.forEach(u=>{u.nodeType===Node.TEXT_NODE&&u.textContent.trim()!==""?n.push(u):u.nodeType===Node.ELEMENT_NODE&&s(u)})}s(r);const i=n.map(l=>l.textContent);n.forEach(l=>l.textContent="");const o=document.createElement("span");o.className="type-cursor",r.appendChild(o);let a=0;for(;a<n.length;){const l=n[a],u=i[a];for(let h=0;h<u.length;h++){const f=t.variance?Math.floor(Math.random()*(t.variance*2)-t.variance):0;l.textContent+=u[h],await gi(Math.max(0,t.charDelay+f)),l.nextSibling!==o&&l.after(o)}a++}}const lc={letters:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",numbers:"0123456789",symbols:"@#$%&*()[]<>/?{}+-=~^_|:;.,"},Fg=["✦","✹","✺","✵","★","☆","❖","✧","✩","✪","✫","✬","(｡♥‿♥｡)","(≧▽≦)","(╯°□°）╯","(¬‿¬)","(づ｡◕‿‿◕｡)づ","ʕ•ᴥ•ʔ","(☞ﾟヮﾟ)☞","(ノಠ益ಠ)ノ","(T_T)","(╥﹏╥)","(⊙‿⊙)","(ฅ•ㅅ•ฅ)","(๑•̀д•́๑)"];function ol(r=lc){const e=Object.keys(r),t=r[e[Math.floor(Math.random()*e.length)]];return t.charAt(Math.floor(Math.random()*t.length))}function Bg(r,e={}){const{errorRate:t=.05,opts:n={charDelay:28,baseExtra:300,frameRate:1e3/30},scrambleSets:s=lc,glitchPool:i=Fg,glitchColors:o=["#FF7B7B","#FFCB7A"],skip:a=!1}=e;return a===!0?new Promise(l=>{const u=r.dataset.text||"";r.innerHTML="";const h=Array.from(u),f=h.map(g=>{const m=document.createElement("span");return m.textContent="",m.style.opacity=0,r.appendChild(m),m});let d=0;const c=10;function p(){for(let g=0;g<h.length;g++){const m=f[g],v=h[g];d<c?(m.textContent=v===" "?" ":ol(),m.style.opacity=.7):(m.textContent=v,m.style.opacity=1)}d++,d<=c?setTimeout(p,44):l()}p()}):new Promise(l=>{const u=r.dataset.text||"";r.innerHTML="";const h=Array.from(u),f=h.map(E=>{const y=document.createElement("span");return y.className="char",y.textContent=E===" "||E===`
`?E:"",y.style.opacity=0,r.appendChild(y),y}),d=h.map((E,y)=>({c:E,i:y})).filter(E=>E.c!==" "&&E.c!==`
`).map(E=>E.i),c=new Set;d.forEach(E=>{Math.random()<t&&c.add(E)});const p=performance.now(),g=h.map((E,y)=>p+y*n.charDelay+Math.random()*n.baseExtra);let m=0;function v(E){if(E-m<n.frameRate){requestAnimationFrame(v);return}m=E;let y=!0;for(let S=0;S<h.length;S++){const x=h[S],M=f[S];x===" "||x===`
`||(E<g[S]?(M.textContent=ol(s),M.style.opacity=.3,y=!1):c.has(S)?M.dataset.fixed||(M.dataset.fixed="true",M.classList.add("glitch"),M.textContent=i[Math.floor(Math.random()*i.length)],M.style.color=o[Math.floor(Math.random()*o.length)],M.style.opacity=1):(M.textContent=x,M.style.opacity=1,M.classList.remove("glitch"),M.style.color=""))}y?l():requestAnimationFrame(v)}requestAnimationFrame(v)})}function Ls(r,e={}){return new Promise(t=>{r.forEach(l=>{l.innerText="",l.style.whiteSpace="pre-wrap"});const n=e.errorRate??.05;let s=0;const i=e.lineStagger??600;let o=0;const a=Array.from(r);a.forEach(l=>{setTimeout(()=>{Bg(l,Object.assign({errorRate:n},e)).then(()=>{o++,o===a.length&&t()})},s),s+=i})})}function al(r=[]){const e=r;let t=0,n=!0;function s(){n&&e.forEach((o,a)=>{o&&(a===t?o.classList.add("selected"):o.classList.remove("selected"))})}e.forEach((o,a)=>{o&&o.addEventListener("mouseenter",()=>{t=a,s()})});function i(o){if(!(!n||e.length===0)){if(o.key==="ArrowUp")t=(t-1+e.length)%e.length,s(),o.preventDefault();else if(o.key==="ArrowDown")t=(t+1)%e.length,s(),o.preventDefault();else if(o.key==="1")t=0,s();else if(o.key==="2"&&e.length>1)t=1,s();else if(o.key==="Enter"){const a=e[t];a&&a.click()}}}return document.addEventListener("keydown",i),{get selectedIndex(){return t},enable(){n=!0,s()},disable(){n=!1,e.forEach(o=>o?.classList.remove("selected"))},setSelected(o){t=o,s()},updateSelection:s,waitForSelectionOnce(){return new Promise(o=>{e.forEach((a,l)=>{a&&a.addEventListener("click",()=>{n&&o(l)},{once:!0})})})},destroy(){document.removeEventListener("keydown",i)}}}class Og{constructor(e){this.sectionEl=e,this._inited=!1,this.visible=!1,this.complete=!1,this.isMobile=window.innerWidth<=1400,this.scrollTextBox=document.querySelector(".mission-text-window-innerbox")}init(){this._inited||(this.abortController=new AbortController,this.abortController&&this.abortController.abort(),this.abortController=new AbortController,this.runMissionConsole(),this._inited=!0)}async runMissionConsole(e={}){this.firstMenuController&&this.firstMenuController.destroy(),this.secondMenuController&&this.secondMenuController.destroy();const{decodingText:t=document.querySelector(".decoding-text"),firstMenu:n=document.querySelector(".f-menu"),firstMenuStart:s=document.getElementById("firstMenuStart"),firstMenuSkip:i=document.getElementById("firstMenuSkip"),firstLoading:o=document.querySelector(".f-loading"),firstResult:a=document.querySelector(".f-result"),secondMenu:l=document.querySelector(".s-menu"),secondMenuStart:u=document.querySelector(".s-menu-start"),secondMenuSkip:h=document.querySelector(".s-menu-skip"),secondLoading:f=document.querySelector(".s-loading"),secondResult:d=document.querySelector(".s-result"),missionResult:c=document.querySelector(".mission-result"),linesSelector:p=".line"}=e,g=document.querySelectorAll(p);if(this.firstMenuController=al([s,i]),this.secondMenuController=al([u,h]),await Qt(t,["[booting sequence initialized...]","","socket.connect(192.168.0.42:8080);","INIT: VGA probe -> OK",">>> status: pending...","","Access Sunil mission?"],{charDelay:16,lineDelay:1,variance:30}),this.abortController.signal.aborted||(await gi(200),this.abortController.signal.aborted))return;await Qt(s,["> 1. decode start"],{charDelay:20}),s.classList.add("selected"),await Qt(i,["> 2. skip.."],{charDelay:20});const v=await this.firstMenuController.waitForSelectionOnce();if(!this.abortController.signal.aborted)if(this.isMobile&&(t.innerHTML=""),n.innerHTML="",v===0){if(await Qt(o,["","loading......"],{charDelay:20}),this.abortController.signal.aborted||(await Ls(g,{errorRate:.05,opts:{charDelay:28,baseExtra:300,frameRate:1e3/30}}),this.abortController.signal.aborted))return;this.isMobile&&(o.innerHTML="");const E=`
                <br>
                [ WARN ] <span class="error-imoji">(╯°□°）╯</span><br>
                [ INFO ] <span class="error-message">Noise detected !!</span><br>
                <br> 
                Retry access to continue.
            `;if(a.innerHTML=E,await rl(a,{charDelay:16}),this.abortController.signal.aborted||(await gi(200),this.abortController.signal.aborted)||(await Qt(u,["> 1. decode restart"],{charDelay:20}),this.abortController.signal.aborted)||(u.classList.add("selected"),await Qt(h,["> 2. skip.."],{charDelay:20}),this.abortController.signal.aborted))return;const y=await this.secondMenuController.waitForSelectionOnce();if(this.abortController.signal.aborted)return;if(this.isMobile||(o.innerHTML=""),l.innerHTML="",a.innerHTML="",y===0){if(await Qt(f,["","reloading......"],{charDelay:20}),this.abortController.signal.aborted||(await Ls(g,{errorRate:0,opts:{charDelay:10,baseExtra:100,frameRate:1e3/30}}),this.abortController.signal.aborted))return;this.isMobile&&(f.innerHTML="");const S=`
                    <br>
                    [ SYSTEM ] <span class="success-imoji">(☞ﾟヮﾟ)☞</span><br>
                    [ INFO ] <span class="success-message">ACCESS GRANTED</span><br>
                    <br>
                `;if(d.innerHTML=S,await rl(d,{charDelay:16}),this.abortController.signal.aborted||(await gi(600),this.abortController.signal.aborted))return;this.completeMissionConsole(t,f,d,c)}else{if(this.isMobile?Qt(f,["[ INFO ] skipped..",""],{charDelay:20}):Qt(f,["","[ INFO ] skipped..",""],{charDelay:20}),await Ls(g,{errorRate:0,lineStagger:200,opts:{charDelay:1,baseExtra:40,frameRate:1e3/30}}),this.abortController.signal.aborted)return;di(),this.completeMissionConsole(t,f,d,c)}}else{if(this.isMobile&&(l.innerHTML=""),this.abortController.signal.aborted||(Qt(f,["[ INFO ] skiped..",""],{charDelay:20}),await Ls(g,{errorRate:0,lineStagger:200,opts:{charDelay:1,baseExtra:40,frameRate:1e3/30}}),this.abortController.signal.aborted))return;di(),this.completeMissionConsole(t,f,d,c)}}completeMissionConsole(e,t,n,s){di();const i=document.createElement("div");i.className="mission-complete",s.appendChild(i),i.style.color="#FFCB7A";const o=`
            >>> MISSION Complete ! <br>
            Welcome to Sunil.dev !!
        `;i.innerHTML=o,e.style.transition=t.style.transition=n.style.transition="opacity 0.2s ease-out",e.style.opacity=t.style.opacity=n.style.opacity=.4,this.complete=!0}onAction(e){return!this.complete}onEnter(){this.decodeWindow=this.sectionEl.querySelector(".mission-decode-window"),this.decodeWindow.classList.add("is-active"),this.textWindow=this.sectionEl.querySelector(".mission-text-window"),this.textWindow.classList.add("is-active")}onLeave(){return new Promise(e=>{if(this.wrapper=this.sectionEl.querySelector(".mission-wrapper"),!this.wrapper){e();return}this.wrapper?.classList.add("is-leaving"),setTimeout(e,400)})}show(){this.init(),this.visible=!0,this.firstMenuController&&this.firstMenuController.enable(),this.secondMenuController&&this.secondMenuController.enable(),this.onEnter()}hide(){if(!this.visible)return;this.visible=!1,this.firstMenuController&&this.firstMenuController.disable(),this.secondMenuController&&this.secondMenuController.disable(),this.sectionEl.querySelector(".mission-wrapper")?.classList.remove("is-leaving"),this.decodeWindow.classList.remove("is-active"),this.textWindow.classList.remove("is-active")}destroy(){this.abortController&&this.abortController.abort(),this.visible=!1,this._inited=!1,this.complete=!1,this.firstMenuController&&(this.firstMenuController.destroy(),this.firstMenuController=null),this.secondMenuController&&(this.secondMenuController.destroy(),this.secondMenuController=null),di(),this.sectionEl.querySelectorAll(".decoding-text, .f-menu, .f-loading, .f-result, .s-menu, .s-loading, .s-result, .mission-result").forEach(t=>{t.innerHTML="",t.style.opacity="",t.style.transition=""}),this.decodeWindow&&this.decodeWindow.classList.remove("is-active"),this.textWindow&&this.textWindow.classList.remove("is-active"),this.wrapper&&this.wrapper.classList.remove("is-leaving")}async checkAbort(){if(this.abortController.signal.aborted)throw new Error("Mission Aborted")}onResize(){if(!this.sectionEl)return;const e=currentHeight*.01;document.documentElement.style.setProperty("--vh",`${e}px`)}}function Hg(r){return new Og(r)}const ht={DESKTOP:"desktop",TABLET:"tablet",MOBILE:"mobile"};function ll(r){switch(r){case ht.DESKTOP:return cl();case ht.TABLET:return zg();case ht.MOBILE:return kg();default:return cl()}}function Dr(r,e){switch(r){case ht.DESKTOP:return hl(e);case ht.TABLET:return Gg(e);case ht.MOBILE:return Vg(e);default:return hl(e)}}function cl(){const r=vt;function e(){const l="./assets/image/service/popup-branding";return{id:"popup-branding-design",type:"group",base:"center",index:3,width:310,height:264,rects:[{x:-830,y:-155,w:310,h:264,img:null,src:l},{x:-804,y:-131,w:310,h:264,img:null,src:l},{x:-778,y:-107,w:310,h:264,img:null,src:l},{x:-752,y:-83,w:310,h:264,img:null,src:l}]}}function t(){const l="./assets/image/service/popup-setup";return{id:"popup-installation",type:"group",base:"center",index:2,width:326,height:178,rects:[{x:-630,y:147,w:326,h:178,img:null,src:l},{x:-616,y:161,w:326,h:178,img:null,src:l},{x:-602,y:175,w:326,h:178,img:null,src:l},{x:-588,y:189,w:326,h:178,img:null,src:l},{x:-560,y:173,w:326,h:178,img:null,src:l}]}}function n(){return{id:"popup-career",type:"group",base:"center",index:8,width:385,height:252,rects:[{x:-214,y:-44,w:385,h:252,img:null,src:"./assets/image/service/popup-info"},{x:-236,y:-22,w:385,h:252,img:null,src:"./assets/image/service/popup-info08"},{x:-258,y:0,w:385,h:252,img:null,src:"./assets/image/service/popup-info07"},{x:-280,y:22,w:385,h:252,img:null,src:"./assets/image/service/popup-info"},{x:-302,y:44,w:385,h:252,img:null,src:"./assets/image/service/popup-info05"},{x:-276,y:66,w:385,h:252,img:null,src:"./assets/image/service/popup-info04"},{x:-250,y:88,w:385,h:252,img:null,src:"./assets/image/service/popup-info03"},{x:-224,y:110,w:385,h:252,img:null,src:"./assets/image/service/popup-info02"},{x:-198,y:132,w:385,h:252,img:null,src:"./assets/image/service/popup-info"}]}}const s=[{id:"popup-contents-create",type:"single",base:"center",index:0,rects:[{x:-793,y:-313,w:616,h:420,img:null,src:"./assets/image/service/popup-content-creation"}]},{id:"popup-user",type:"single",base:"center",index:1,rects:[{x:306,y:-289,w:507,h:333,img:null,src:"./assets/image/service/popup-user"}]},t(),e(),{id:"popup-digital-campaign",type:"single",base:"center",index:4,rects:[{x:206,y:-63,w:473,h:335,img:null,src:"./assets/image/service/popup-dashboard"}]},{id:"popup-creative-consulting",type:"group",base:"center",index:5,rects:[{x:-58,y:-170,w:365,h:194,img:null,src:"./assets/image/service/popup-consulting-or"},{x:60,y:-345,w:319,h:169,img:null,src:"./assets/image/service/popup-consulting-ye"},{x:18,y:-204,w:341,h:181,img:null,src:"./assets/image/service/popup-consulting-ze"},{x:-102,y:-393,w:288,h:185,img:null,src:"./assets/image/service/popup-consulting-gr"},{x:-150,y:-263,w:365,h:194,img:null,src:"./assets/image/service/popup-consulting-or"}]},{id:"popup-saving",type:"single",base:"center",index:6,rects:[{x:496,y:-361,w:335,h:183,img:null,src:"./assets/image/service/popup-saving"}]},{id:"popup-social-marketing",type:"single",base:"center",index:7,rects:[{x:500,y:107,w:310,h:253,img:null,src:"./assets/image/service/popup-sns"}]},n()];function i(o,a){const l=a>=2?"@2x":"";return`${o}${l}.png`}return s.forEach(o=>{o.rects.forEach(a=>{a.img=new Image;const l=i(a.src,r);a.img.onload=()=>{a.w=a.img.naturalWidth/r,a.h=a.img.naturalHeight/r},a.img.src=l})}),s}function zg(){const r=vt;function e(){const l="./assets/image/service/popup-branding-tablet";return{id:"popup-branding-design",type:"group",base:"center",index:3,width:228,height:194,rects:[{x:-338,y:-146,w:228,h:194,img:null,src:l},{x:-327,y:-138,w:228,h:194,img:null,src:l},{x:-316,y:-130,w:228,h:194,img:null,src:l},{x:-305,y:-122,w:228,h:194,img:null,src:l}]}}function t(){const l="./assets/image/service/popup-setup-tablet";return{id:"popup-installation",type:"group",base:"center",index:2,width:223,height:122,rects:[{x:57,y:257,w:223,h:122,img:null,src:l},{x:68,y:267,w:223,h:122,img:null,src:l},{x:79,y:277,w:223,h:122,img:null,src:l},{x:90,y:287,w:223,h:122,img:null,src:l},{x:105,y:274,w:223,h:122,img:null,src:l}]}}function n(){return{id:"popup-career",type:"group",base:"center",index:8,width:276,height:180,rects:[{x:52,y:-300,w:276,h:180,img:null,src:"./assets/image/service/popup-info-tablet"},{x:36,y:-286,w:276,h:180,img:null,src:"./assets/image/service/popup-info08-tablet"},{x:20,y:-272,w:276,h:180,img:null,src:"./assets/image/service/popup-info07-tablet"},{x:4,y:-258,w:276,h:180,img:null,src:"./assets/image/service/popup-info-tablet"},{x:-12,y:-244,w:276,h:180,img:null,src:"./assets/image/service/popup-info05-tablet"},{x:2,y:-228,w:276,h:180,img:null,src:"./assets/image/service/popup-info04-tablet"},{x:16,y:-212,w:276,h:180,img:null,src:"./assets/image/service/popup-info03-tablet"},{x:30,y:-196,w:276,h:180,img:null,src:"./assets/image/service/popup-info02-tablet"},{x:44,y:-180,w:276,h:180,img:null,src:"./assets/image/service/popup-info-tablet"}]}}const s=[{id:"popup-user",type:"single",base:"center",index:1,rects:[{x:36,y:-410,w:311,h:204,img:null,src:"./assets/image/service/popup-user-tablet"}]},{id:"popup-contents-create",type:"single",base:"center",index:0,rects:[{x:-348,y:-338,w:426,h:290,img:null,src:"./assets/image/service/popup-content-creation-tablet"}]},t(),{id:"popup-saving",type:"single",base:"center",index:6,rects:[{x:-156,y:-27,w:274,h:150,img:null,src:"./assets/image/service/popup-saving-tablet"}]},{id:"popup-digital-campaign",type:"single",base:"center",index:4,rects:[{x:-40,y:68,w:349,h:247,img:null,src:"./assets/image/service/popup-dashboard-tablet"}]},e(),{id:"popup-creative-consulting",type:"group",base:"center",index:5,rects:[{x:-278,y:237,w:246,h:131,img:null,src:"./assets/image/service/popup-consulting-or-tablet"},{x:-205,y:130,w:213,h:113,img:null,src:"./assets/image/service/popup-consulting-ye-tablet"},{x:-235,y:222,w:230,h:122,img:null,src:"./assets/image/service/popup-consulting-ze-tablet"},{x:-314,y:98,w:194,h:125,img:null,src:"./assets/image/service/popup-consulting-gr-tablet"},{x:-348,y:183,w:246,h:131,img:null,src:"./assets/image/service/popup-consulting-or-tablet"}]},{id:"popup-social-marketing",type:"single",base:"center",index:7,rects:[{x:117,y:32,w:231,h:188,img:null,src:"./assets/image/service/popup-sns-tablet"}]},n()];function i(o,a){const l=a>=2?"@2x":"";return`${o}${l}.png`}return s.forEach(o=>{o.rects.forEach(a=>{a.img=new Image;const l=i(a.src,r);a.img.onload=()=>{a.w=a.img.naturalWidth/r,a.h=a.img.naturalHeight/r},a.img.src=l})}),s}function kg(){const r=vt;function e(){const l="./assets/image/service/popup-branding-mobile";return{id:"popup-branding-design",type:"group",base:"center",index:3,width:249,height:212,rects:[{x:-140,y:-540,w:249,h:212,img:null,src:l},{x:-128,y:-532,w:249,h:212,img:null,src:l},{x:-116,y:-524,w:249,h:212,img:null,src:l},{x:-104,y:-516,w:249,h:212,img:null,src:l}]}}function t(){const l="./assets/image/service/popup-setup-mobile";return{id:"popup-installation",type:"group",base:"center",index:2,width:270,height:147,rects:[{x:-155,y:345,w:270,h:147,img:null,src:l},{x:-142,y:357,w:270,h:147,img:null,src:l},{x:-129,y:369,w:270,h:147,img:null,src:l},{x:-116,y:381,w:270,h:147,img:null,src:l},{x:-96,y:366,w:270,h:147,img:null,src:l}]}}function n(){return{id:"popup-career",type:"group",base:"center",index:8,width:266,height:174,rects:[{x:-107,y:39,w:266,h:174,img:null,src:"./assets/image/service/popup-info-mobile"},{x:-123,y:53,w:266,h:174,img:null,src:"./assets/image/service/popup-info08-mobile"},{x:-139,y:67,w:266,h:174,img:null,src:"./assets/image/service/popup-info07-mobile"},{x:-155,y:81,w:266,h:174,img:null,src:"./assets/image/service/popup-info-mobile"},{x:-171,y:95,w:266,h:174,img:null,src:"./assets/image/service/popup-info05-mobile"},{x:-159,y:109,w:266,h:174,img:null,src:"./assets/image/service/popup-info04-mobile"},{x:-147,y:123,w:266,h:174,img:null,src:"./assets/image/service/popup-info03-mobile"},{x:-135,y:137,w:266,h:174,img:null,src:"./assets/image/service/popup-info02-mobile"},{x:-123,y:151,w:266,h:174,img:null,src:"./assets/image/service/popup-info-mobile"}]}}const s=[{id:"popup-user",type:"single",base:"center",index:1,rects:[{x:36,y:-410,w:-120,h:-790,img:null,src:"./assets/image/service/popup-user-mobile"}]},{id:"popup-contents-create",type:"single",base:"center",index:0,rects:[{x:-160,y:-708,w:318,h:217,img:null,src:"./assets/image/service/popup-content-creation-mobile"}]},{id:"popup-saving",type:"single",base:"center",index:6,rects:[{x:-162,y:-350,w:282,h:154,img:null,src:"./assets/image/service/popup-saving-mobile"}]},e(),{id:"popup-creative-consulting",type:"group",base:"center",index:5,rects:[{x:-107,y:-106,w:238,h:127,img:null,src:"./assets/image/service/popup-consulting-or-mobile"},{x:-35,y:-210,w:207,h:110,img:null,src:"./assets/image/service/popup-consulting-ye-mobile"},{x:-64,y:-120,w:222,h:118,img:null,src:"./assets/image/service/popup-consulting-ze-mobile"},{x:-142,y:-240,w:189,h:111,img:null,src:"./assets/image/service/popup-consulting-gr-mobile"},{x:-173,y:-155,w:238,h:127,img:null,src:"./assets/image/service/popup-consulting-or-mobile"}]},n(),t(),{id:"popup-digital-campaign",type:"single",base:"center",index:4,rects:[{x:-172,y:483,w:302,h:214,img:null,src:"./assets/image/service/popup-dashboard-mobile"}]},{id:"popup-social-marketing",type:"single",base:"center",index:7,rects:[{x:-86,y:624,w:237,h:193,img:null,src:"./assets/image/service/popup-sns-mobile"}]}];function i(o,a){const l=a>=2?"@2x":"";return`${o}${l}.png`}return s.forEach(o=>{o.rects.forEach(a=>{a.img=new Image;const l=i(a.src,r);a.img.onload=()=>{a.w=a.img.naturalWidth/r,a.h=a.img.naturalHeight/r},a.img.src=l})}),s}function hl(r){const e=r.find(u=>u.id==="popup-branding-design").rects,t=r.find(u=>u.id==="popup-career").rects,n=r.find(u=>u.id==="popup-contents-create").rects,s=r.find(u=>u.id==="popup-creative-consulting").rects,i=r.find(u=>u.id==="popup-digital-campaign").rects,o=r.find(u=>u.id==="popup-social-marketing").rects,a=[...e,...t],l=[...s,...o];return[{id:"popup-branding-design",path:gt({include:e}),anim:0},{id:"popup-career",rects:t,path:gt({include:t}),anim:0},{id:"popup-contents-create",path:gt({include:n,exclude:a}),anim:0},{id:"popup-creative-consulting",path:gt({include:s,exclude:t}),anim:0},{id:"popup-digital-campaign",path:gt({include:i,exclude:l}),anim:0},{id:"popup-social-marketing",path:gt({include:o}),anim:0}]}function Gg(r){const e=r.find(u=>u.id==="popup-branding-design").rects,t=r.find(u=>u.id==="popup-career").rects,n=r.find(u=>u.id==="popup-contents-create").rects,s=r.find(u=>u.id==="popup-creative-consulting").rects,i=r.find(u=>u.id==="popup-digital-campaign").rects,o=r.find(u=>u.id==="popup-social-marketing").rects,a=[...e,...t],l=[...s,...o];return[{id:"popup-branding-design",path:gt({include:e}),anim:0},{id:"popup-career",rects:t,path:gt({include:t}),anim:0},{id:"popup-contents-create",path:gt({include:n,exclude:a}),anim:0},{id:"popup-creative-consulting",path:gt({include:s}),anim:0},{id:"popup-digital-campaign",path:gt({include:i,exclude:l}),anim:0},{id:"popup-social-marketing",path:gt({include:o}),anim:0}]}function Vg(r){const e=r.find(a=>a.id==="popup-branding-design").rects,t=r.find(a=>a.id==="popup-career").rects,n=r.find(a=>a.id==="popup-contents-create").rects,s=r.find(a=>a.id==="popup-creative-consulting").rects,i=r.find(a=>a.id==="popup-digital-campaign").rects,o=r.find(a=>a.id==="popup-social-marketing").rects;return[{id:"popup-branding-design",path:gt({include:e}),anim:0},{id:"popup-career",rects:t,path:gt({include:t}),anim:0},{id:"popup-contents-create",path:gt({include:n,exclude:e}),anim:0},{id:"popup-creative-consulting",path:gt({include:s}),anim:0},{id:"popup-digital-campaign",path:gt({include:i,exclude:o}),anim:0},{id:"popup-social-marketing",path:gt({include:o}),anim:0}]}function gt({include:r,exclude:e}){const t=new Path2D;return!e||e.length===0?(r.forEach(n=>t.rect(n.x,n.y,n.w,n.h)),t):(r.forEach(n=>{let s=[n];e.forEach(i=>{const o=[];s.forEach(a=>{const l=Wg(a,i);l.length&&o.push(...l)}),s=o}),s.forEach(i=>t.rect(i.x,i.y,i.w,i.h))}),t)}function Wg(r,e){const t=Xg(r,e);if(!t)return[r];const n=[],s=r.x,i=r.y,o=r.w,a=r.h,l=t.x,u=t.y,h=t.w,f=t.h;return u>i&&n.push({x:s,y:i,w:o,h:u-i}),u+f<i+a&&n.push({x:s,y:u+f,w:o,h:i+a-(u+f)}),l>s&&n.push({x:s,y:u,w:l-s,h:f}),l+h<s+o&&n.push({x:l+h,y:u,w:s+o-(l+h),h:f}),n}function Xg(r,e){const t=Math.max(r.x,e.x),n=Math.max(r.y,e.y),s=Math.min(r.x+r.w,e.x+e.w),i=Math.min(r.y+r.h,e.y+e.h);return s<=t||i<=n?null:{x:t,y:n,w:s-t,h:i-n}}class Yg{constructor(e,t){this.canvas=e,this.ctx=this.canvas.getContext("2d"),this.sectionEl=t,this.canvasCenterX=this.canvas.width/2,this.canvasCenterY=this.canvas.height/2,this.isEntering=!1,this.isLeaving=!1,this.enterResolve=null,this.leaveResolve=null,this.popupAreas=null,this.clickZones=null,this.currentHoverZone=null,this.hasActivatedZone=null,this.hoverContextAnim=0,this.CLICKZONE_ROUTE_MAP={"popup-branding-design":"branding","popup-digital-campaign":"digital-campaigns","popup-contents-create":"content-creation","popup-creative-consulting":"creative-consulting","popup-social-marketing":"sns-marketing"},window.innerWidth>=1024?(this.deviceType=ht.DESKTOP,this.BASE_WIDTH=1920,this.BASE_HEIGHT=920):window.innerWidth>=768?(this.deviceType=ht.TABLET,this.BASE_WIDTH=830,this.BASE_HEIGHT=1100):(this.deviceType=ht.MOBILE,this.BASE_WIDTH=420,this.BASE_HEIGHT=1800),this.isTouchDevice=!1,this.handlers={mouseMove:this.onMouseMove.bind(this),mouseLeave:this.onMouseleave.bind(this),click:this.onClick.bind(this),touchStart:this.onTouchStart.bind(this)},this._inited=!1,this.visible=!1}init(){this._inited||(this.ctx.imageSmoothingEnabled=!1,this.popupAreas=ll(this.deviceType),this.clickZones=Dr(this.deviceType,this.popupAreas),this.popupAreas.forEach(e=>{const t=Math.random()*.2;e.rects.forEach((n,s)=>{n.animProgress=0,n.delay=t+s*.05,n.startScale=.8})}),this.interactionMode=this.deviceType===ht.DESKTOP?"hover":"click",this.canvas.addEventListener("click",this.handlers.click),this.canvas.addEventListener("touchstart",this.handlers.touchStart,{passive:!0}),this.interactionMode==="hover"&&(this.canvas.addEventListener("mousemove",this.handlers.mouseMove),this.canvas.addEventListener("mouseleave",this.handlers.mouseLeave)),this._inited=!0)}onTouchStart=()=>{this.isTouchDevice||(this.isTouchDevice=!0,this.interactionMode="click",this.canvas.removeEventListener("mousemove",this.handlers.mouseMove),this.canvas.removeEventListener("mouseleave",this.handlers.mouseLeave))};onEnter(){return new Promise(e=>{this.isEntering=!0,this.isLeaving=!1,this.introProgress=0,this.currentHoverZone=null,this.hasActivatedZone=!1,this.hoverContextAnim=0,this.enterResolve=e})}onLeave(){return new Promise(e=>{this.isLeaving=!0,this.leaveAlpha=1,this.isEntering=!1,this.currentHoverZone=null,this.hasActivatedZone=!1,this.hoverContextAnim=0,setTimeout(()=>{this.isLeaving=!1,e()},500)})}update(){if(this.visible){if(this.isEntering){this.introProgress+=.005;let e=!0;this.popupAreas.forEach(t=>{t.rects.forEach(n=>{this.introProgress>n.delay&&(n.animProgress+=(1-n.animProgress)*.2),n.animProgress<.98&&(e=!1)})}),e&&this.enterResolve&&(this.isEntering=!1,this.enterResolve(),this.enterResolve=null)}this.currentHoverZone?this.hoverContextAnim+=(1-this.hoverContextAnim)*.15:this.hoverContextAnim+=(0-this.hoverContextAnim)*.15,this.clickZones.forEach(e=>{const t=e===this.currentHoverZone?1:0;e.anim+=(t-e.anim)*.15}),this.clearCanvas(),this.drawObjects()}}drawObjects=()=>{const e=this.ctx,t=this.canvas,n=vt,s=t.clientWidth/this.BASE_WIDTH;let i=this.BASE_HEIGHT;this.deviceType!==ht.MOBILE&&(i=t.clientHeight/s),e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height),e.scale(n*s,n*s);let o=-60;this.deviceType!==ht.MOBILE?o=0:o=-60,e.translate(this.BASE_WIDTH/2,i/2+o),this.isLeaving?(this.leaveAlpha===void 0&&(this.leaveAlpha=1),this.leaveAlpha=Math.max(0,this.leaveAlpha-.08)):this.leaveAlpha=1;const a=this.isLeaving||this.isEntering?null:this.currentHoverZone;this.popupAreas.forEach(u=>{a&&(a.id,u.id),u.rects.forEach(h=>{if(h.img.complete&&h.img.naturalWidth>0){const f=h.animProgress||0;if(f<.01)return;e.save();const d=h.img.naturalWidth/n,c=h.img.naturalHeight/n,p=h.x+d/2,g=h.y+c/2;e.translate(p,g);const m=h.startScale+(1-h.startScale)*f;e.scale(m,m),e.globalAlpha=f*this.leaveAlpha,e.drawImage(h.img,-d/2,-c/2,d,c),e.restore()}})}),this.hoverContextAnim>.001&&(e.fillStyle=`rgba(0,0,0,${.5*this.hoverContextAnim})`,e.fillRect(-this.BASE_WIDTH/2,-(i/2)-o,this.BASE_WIDTH,i));const l=this.currentHoverZone;if(l&&l.anim>.001){e.save(),e.shadowColor=`rgba(0,0,0,${.7*l.anim})`,e.shadowBlur=8*l.anim,e.shadowOffsetX=2*l.anim,e.shadowOffsetY=2*l.anim,e.fillStyle="rgba(0,0,0,0.7)",e.fill(l.path),e.clip(l.path);const u=this.popupAreas.find(h=>h.id===l.id);u&&u.rects.forEach(h=>{h.img?.complete&&e.drawImage(h.img,h.x,h.y,h.img.naturalWidth/n,h.img.naturalHeight/n)}),e.restore()}e.restore()};clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}onMouseMove=e=>{if(!this.visible||this.isEntering||this.isLeaving)return;const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,s=e.clientY-t.top,i=canvas.clientWidth/this.BASE_WIDTH,o=(n-t.width/2)/i,a=(s-t.height/2)/i;let l=null;for(const u of this.clickZones)if(this.ctx.isPointInPath(u.path,o,a)){l=u;break}this.currentHoverZone!==l&&(this.currentHoverZone=l)};onMouseleave=e=>{this.visible&&(this.currentHoverZone=null)};onClick=e=>{if(!this.visible||this.isEntering||this.isLeaving)return;const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,s=e.clientY-t.top,i=t.width/this.BASE_WIDTH,o=(n-t.width/2)/i;let a=this.deviceType===ht.MOBILE?-60:0;const l=(s-t.height/2)/i-a,u=this.ctx;u.save(),u.setTransform(1,0,0,1,0,0);const h=this.clickZones.find(f=>u.isPointInPath(f.path,o,l));if(!h){this.currentHoverZone=null,this.hasActivatedZone=!1;return}if(this.interactionMode==="click"){if(!this.hasActivatedZone){this.currentHoverZone=h,this.hasActivatedZone=!0;return}if(this.currentHoverZone===h){switch(h.id){case"popup-career":this.handleCareerZoneClick(h,o,l);break;default:this.handleNavigateZoneClick(h);break}return}this.currentHoverZone=h;return}switch(h.id){case"popup-career":this.handleCareerZoneClick(h,o,l);break;default:this.handleNavigateZoneClick(h);break}};handleCareerZoneClick=(e,t,n)=>{if(!e.rects||e.rects.length===0)return;let s=!1;for(let i=e.rects.length-1;i>=0;i--){const o=e.rects[i];if(t>=o.x&&t<=o.x+o.w&&n>=o.y&&n<=o.y+o.h){e.rects.splice(i,1),s=!0;break}}if(s){const i=Dr(this.deviceType,this.popupAreas);this.clickZones=i,this.currentHoverZone=i.find(o=>o.id===this.currentHoverZone.id),this.hasActivatedZone=!0}};handleNavigateZoneClick(e){const t=this.CLICKZONE_ROUTE_MAP[e.id];t&&Vo(t)}show(){const e=this.getFinalHeight();if(this.deviceType===ht.MOBILE){const t=this.sectionEl.querySelector(".section-wrapper");t&&(t.style.height=`${e}px`,t.offsetHeight)}_n(Kt.activeId,e),Ut(this.sectionEl,e),!this.visible&&(this.visible=!0,this.init(),this.onEnter())}hide(){this.isEntering=!1,this.isLeaving=!1,this.introProgress=0,this.currentHoverZone=null,this.hoverContextAnim=0,this.popupAreas&&this.popupAreas.forEach(e=>{e.rects.forEach(t=>{t.animProgress=0})}),this.clickZones&&this.clickZones.forEach(e=>{e.anim=0}),this.clearCanvas(),this.visible=!1}destroy(){this.visible=!1,this._inited=!1,this.isEntering=!1,this.isLeaving=!1,this.canvas&&(this.canvas.removeEventListener("mousemove",this.handlers.mouseMove),this.canvas.removeEventListener("mouseleave",this.handlers.mouseLeave),this.canvas.removeEventListener("click",this.handlers.click),this.canvas.removeEventListener("touchstart",this.handlers.touchStart)),this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=null),this.isResizePending=!1,this.enterResolve=null,this.leaveResolve=null,this.clearCanvas(),this.ctx=null,this.popupAreas=null,this.clickZones=null,this.currentHoverZone=null,this.handlers=null,this.sectionEl&&this.sectionEl._sectionInstance&&delete this.sectionEl._sectionInstance}onResize(){if(!this.visible||!this.canvas)return;const e=window.innerWidth,t=window.innerHeight;this.isResizePending||(this.isResizePending=!0,requestAnimationFrame(()=>{const n=this.getFinalHeight();this.deviceType===ht.MOBILE?this.sectionEl.style.height=`${n}px`:this.sectionEl.style.height="",Ut(this.sectionEl,n),_n(Kt.activeId,n);const s=t*.01;document.documentElement.style.setProperty("--vh",`${s}px`),this.isResizePending=!1})),clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{if(this.lastWidth===e&&Math.abs(this.lastHeight-t)<10)return;let n=ht.DESKTOP;e<768?n=ht.MOBILE:e<1024&&(n=ht.TABLET),this.deviceType!==n&&(this.deviceType=n,this.deviceType===ht.DESKTOP?(this.BASE_WIDTH=1920,this.BASE_HEIGHT=920,this.interactionMode="hover"):this.deviceType===ht.TABLET?(this.BASE_WIDTH=830,this.BASE_HEIGHT=1100,this.interactionMode="click"):(this.BASE_WIDTH=420,this.BASE_HEIGHT=1800,this.interactionMode="click"),this.popupAreas=ll(this.deviceType),this.clickZones=Dr(this.deviceType,this.popupAreas),this.currentHoverZone=null,this.hasActivatedZone=!1,this.rebindEvents()),this.lastWidth=e,this.lastHeight=t},200)}rebindEvents(){this.canvas.removeEventListener("mousemove",this.handlers.mouseMove),this.canvas.removeEventListener("mouseleave",this.handlers.mouseLeave),this.canvas.removeEventListener("click",this.handlers.click),this.canvas.removeEventListener("touchstart",this.handlers.touchStart),this.canvas.addEventListener("click",this.handlers.click),this.canvas.addEventListener("touchstart",this.handlers.touchStart,{passive:!0}),!this.isTouchDevice&&this.deviceType===ht.DESKTOP?(this.interactionMode="hover",this.canvas.addEventListener("mousemove",this.handlers.mouseMove),this.canvas.addEventListener("mouseleave",this.handlers.mouseLeave)):this.interactionMode="click"}getFinalHeight=()=>this.deviceType===ht.MOBILE?this.BASE_HEIGHT*(window.innerWidth/this.BASE_WIDTH):window.innerHeight}function qg(r){return new Yg(document.querySelector("#canvas"),r)}class $g{constructor(e,t){this.engine=e,this.scene=e.scene,this.renderer=e.renderer,this.camera=e.camera,this.scene.add(this.camera),this.canvas=document.querySelector("#threeCanvas"),this.sectionEl=t,this.isMobile=window.innerWidth<768,this.isTablet=window.innerWidth<1024&&window.innerWidth>=768,this.snapshot=new Image;const n=vt;if(this.isMobile){const s=n>=2?"@2x":"";this.finalSrc=`/assets/image/vision/mission-background-mobile${s}.png`}else if(this.isTablet){const s=n>=2?"@2x":"";this.finalSrc=`/assets/image/vision/mission-background-tablet${s}.png`}else{const s=n>=2?"@2x":"";this.finalSrc=`/assets/image/vision/mission-background${s}.webp`}this.snapshot.src=this.finalSrc,this.lastWidth=window.innerWidth,this.lastHeight=window.innerHeight,this.isResizePending=!1,this.resizeTimer=null,this.isEntering=!1,this.isLeaving=!1,this.isBreakingNow=!1,this.enterResolve=null,this.leaveResolve=null,this._inited=!1,this.visible=!1,this.selectors={spaceship:".vision-spaceship",spaceman:".vision-spaceman",planet:".vision-planet",flash:".screen-on-effect",animatedElements:[".vision-spaceship",".vision-spaceman",".vision-planet",".vision-taco01",".vision-taco02",".vision-taco03",".vision-taco04",".smile01-image",".smile02-image",".smile03-image"]},this.shootInterval=null,this.burstTimeouts=[],this.isTouching=!1,this.handlers={mouseMove:this.onMouseMove.bind(this),touchMove:this.onTouchMove.bind(this),touchEnd:this.onTouchEnd.bind(this)},this.targetY=0,this.currentY=0,this.lastScrollAtLimit=0,this.wrapper=this.sectionEl.querySelector(".vision-wrapper"),this.descBox=this.sectionEl.querySelector(".vision-desc"),this.descText=this.sectionEl.querySelector(".vision-desc-text"),this.breakCanvas=this.sectionEl.querySelector(".vision-break-canvas"),this.ctx=this.breakCanvas.getContext("2d"),this.updateScrollBounds(),this.speed=.05,this.locked=!1,this.mouse=new ge,this.lastMouse=new ge,this.velocity=new ge,this.tiles=[],this.initEventListeners()}initEventListeners(){this.isMobile||window.addEventListener("mousemove",this.handlers.mouseMove),window.addEventListener("touchmove",this.handlers.touchMove,{passive:!1}),window.addEventListener("touchend",this.handlers.touchEnd),window.addEventListener("touchstart",this.handlers.touchMove,{passive:!1})}updateScrollBounds(){if(!this.descBox)return;const e=this.descBox.scrollHeight-this.descBox.clientHeight;this.maxTranslate=0,this.minTranslate=e>0?-e:0}init(e="./assets/image/vision/bitmap-greenbow.png"){if(this.isMobile||this._inited)return;new bu().load(e,n=>{n.minFilter=zt,n.magFilter=zt,n.generateMipmaps=!1;const s=n.image.width,i=n.image.height,o=s/i,a=window.innerWidth,l=a/o,u=window.innerHeight*.1,h=-window.innerHeight/2+l/2+u,f=`
                varying vec2 vUv;
                void main(){
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
                }
            `,d=`
                uniform sampler2D uTexture;
                uniform vec4 uvOffset;
                uniform float uAlpha;
                varying vec2 vUv;
                void main(){
                vec2 uvTile = uvOffset.xy + vUv * (uvOffset.zw - uvOffset.xy);
                vec4 texColor = texture2D(uTexture, uvTile);
                gl_FragColor = vec4(texColor.rgb, texColor.a * uAlpha);
                }
            `,c=new kt({uniforms:{uTexture:{value:n},uvOffset:{value:new at(0,0,1,1)},uAlpha:{value:.4}},vertexShader:f,fragmentShader:d,transparent:!0});this.baseMesh=new bt(new mn(a,l),c),this.baseMesh.position.z=-10,this.baseMesh.position.y+=h,this.scene.add(this.baseMesh);const p=39,g=7,m=a/p,v=l/g;for(let E=0;E<g;E++)for(let y=0;y<p;y++){const S=new mn(m,v),x=y/p,M=(y+1)/p,T=1-(E+1)/g,b=1-E/g,w=new kt({uniforms:{uTexture:{value:n},uvOffset:{value:new at(x,T,M,b)},uAlpha:{value:.5}},vertexShader:f,fragmentShader:d,transparent:!0}),_=new bt(S,w),A=-a/2+m/2+y*m,R=l/2-v/2-E*v+h;_.position.set(A,R,0);const D=.8+Math.random()*.4;_.userData={originalX:A,originalY:R,offsetX:0,offsetY:0,zDepth:D},this.scene.add(_),this.tiles.push(_)}}),this._inited=!0}update(e){if(!(!this._inited&&!this.isLeaving)){if(this.isLeaving){const t=this.isMobile?.003:.001;this.progress+=t;const n=.05;if(this.progress<n){const i=this.progress/n;this.updateFinalMissile(i)}if(this.progress>=n){if(this.finalMissile){for(let i=0;i<5;i++)setTimeout(()=>{const o=(Math.random()-.5)*200,a=(Math.random()-.5)*200;this.createExplosion(`calc(50% + ${o}px)`,`calc(50% + ${a}px)`)},i*50);this.finalMissile.remove(),this.finalMissile=null,this.sectionEl.classList.add("impact-flash"),setTimeout(()=>{this.sectionEl.classList.remove("impact-flash")},200)}this.breakTimerStarted||(this.breakTimerStarted=!0,setTimeout(()=>{this.isBreakingNow=!0;const i=document.getElementById("vision-break-snapshot");i&&i.classList.add("is-active")},400))}this.isBreakingNow&&this.renderBreakFrame(),this.isBreakingNow&&this.breakData&&this.breakData.queue.length===0&&(this.isLeaving=!1,this.isBreakingNow=!1,this.breakTimerStarted=!1,this.leaveResolve?.(),this.leaveResolve=null);return}this.visible&&!this.isMobile&&this._inited&&this.tiles.forEach(t=>{const n=this.mouse.x-t.userData.originalX,s=this.mouse.y-t.userData.originalY,i=Math.sqrt(n*n+s*s),o=200;if(i<o){const l=1*t.userData.zDepth*(1-i/o);t.userData.offsetX+=this.velocity.x*l*.8,t.userData.offsetY+=this.velocity.y*l*.8}t.userData.offsetX*=.9,t.userData.offsetY*=.9,t.position.x=t.userData.originalX+t.userData.offsetX,t.position.y=t.userData.originalY+t.userData.offsetY;const a=1+(Math.abs(t.userData.offsetX)+Math.abs(t.userData.offsetY))*.004*t.userData.zDepth;t.scale.set(a,a,1)})}}initBreakData(){this.breakCanvas.style.display="block";const e=vt;this.breakCanvas.width=window.innerWidth*e,this.breakCanvas.height=window.innerHeight*e;const t=window.innerWidth,n=window.innerHeight;this.breakCanvas.style.width=`${t}px`,this.breakCanvas.style.height=`${n}px`,this.ctx.setTransform(e,0,0,e,0,0),this.ctx.imageSmoothingEnabled=!1,this.ctx.mozImageSmoothingEnabled=!1,this.ctx.webkitImageSmoothingEnabled=!1;const s=this.isMobile?30:40,i=Math.ceil(t/s),o=Math.ceil(n/s);let a=Array.from({length:i},()=>Array(o).fill(!1));const l=Math.floor(i/2),u=Math.floor(o/2);a[l][u]=!0,this.breakData={ctx:this.ctx,grid:a,queue:[{x:l,y:u}],pSize:s,cols:i,rows:o,blocksPerFrame:this.isMobile?2:6,speedUpRate:1.02},this.finalMissile=document.createElement("div"),this.finalMissile.className="missile final-shot",this.sectionEl.appendChild(this.finalMissile)}updateFinalMissile(e){if(!this.finalMissile)return;const t=this.sectionEl.querySelector(this.selectors.spaceship).getBoundingClientRect(),n=this.sectionEl.getBoundingClientRect(),s=t.right-n.left,i=t.top-n.top+t.height/2,o=window.innerWidth/2-n.left,a=window.innerHeight/2-n.top,l=s+(o-s)*e,u=i+(a-i)*e;this.finalMissile.style.left=`${l}px`,this.finalMissile.style.top=`${u}px`,this.finalMissile.style.transform=`translate(-50%, -50%) scale(${1+e*3})`,this.finalMissile.style.filter=`hue-rotate(${e*90}deg) brightness(${1+e})`}renderBreakFrame(e){if(!this.snapshot.complete)return;const{ctx:t,grid:n,queue:s,pSize:i,cols:o,rows:a}=this.breakData;if(!s||s.length===0)return;for(let p=s.length-1;p>0;p--){const g=Math.floor(Math.random()*(p+1));[s[p],s[g]]=[s[g],s[p]]}let l=[],u=[],h=0;const f=Math.floor(this.breakData.blocksPerFrame);for(;s.length>0&&h<f;){const p=Math.floor(Math.random()*s.length),g=s.splice(p,1)[0];let m=[];for(let v=-1;v<=1;v++)for(let E=-1;E<=1;E++){if(v===0&&E===0)continue;const y=g.x+v,S=g.y+E;y>=0&&y<o&&S>=0&&S<a&&!n[y][S]&&m.push({x:y,y:S})}for(let v=m.length-1;v>0;v--){const E=Math.floor(Math.random()*(v+1));[m[v],m[E]]=[m[E],m[v]]}for(const v of m){if(h>=f)break;n[v.x][v.y]=!0,l.push(v),u.push(v),h++}}this.breakData.queue=s.concat(l),this.breakData.blocksPerFrame*=this.breakData.speedUpRate,t.clearRect(0,0,this.breakCanvas.width,this.breakCanvas.height);const d=vt;for(let p=0;p<o;p++)for(let g=0;g<a;g++)n[p][g]&&t.drawImage(this.snapshot,p*i*d,g*i*d,i*d,i*d,p*i,g*i,i,i);const c=["hsl(0, 70%, 60%)","hsl(120, 70%, 60%)","hsl(240, 70%, 60%)"];u.forEach(p=>{for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){const v=p.x+g,E=p.y+m;v>=0&&v<o&&E>=0&&E<a&&!n[v][E]&&(t.fillStyle=c[Math.floor(Math.random()*c.length)],t.fillRect(Math.floor(v*i)+.5,Math.floor(E*i)+.5,Math.ceil(i)-1,Math.ceil(i)-1))}})}animateScroll(){!this.visible||!this.descText||(this.currentY+=(this.targetY-this.currentY)*this.speed,this.descText.style.transform=`translateY(${this.currentY}px)`,Math.abs(this.targetY-this.currentY)>.1?requestAnimationFrame(()=>this.animateScroll()):(this.currentY=this.targetY,this.descText.style.transform=`translateY(${this.currentY}px)`,this.animating=!1))}onAction(e){if(this.isLeaving||this.isMobile||!this.descBox)return!1;const t=2,n=Date.now(),s=this.targetY>=this.maxTranslate-t,i=this.targetY<=this.minTranslate+t;if(e>0&&i||e<0&&s)return this.lastScrollAtLimit===0?(this.lastScrollAtLimit=n,this.targetY=e<0&&s?this.maxTranslate:this.minTranslate,!0):n-this.lastScrollAtLimit<300;this.lastScrollAtLimit=0;let o=this.targetY-e;return this.targetY=Math.max(this.minTranslate,Math.min(this.maxTranslate,o)),this.animating||(this.animating=!0,this.animateScroll()),!0}async playFlashEffect(){const e=this.sectionEl.querySelector(this.selectors.flash);if(e)return new Promise(t=>{e.classList.remove("trigger"),e.offsetWidth,e.classList.add("trigger"),e.addEventListener("animationend",()=>{t()},{once:!0}),setTimeout(t,500)})}shootMissile(e,t=null){if(!this.visible)return;const n=this.sectionEl.querySelector(this.selectors.spaceship);if(!n)return;const s=document.createElement("div");s.className="missile";const i=n.getBoundingClientRect(),o=this.sectionEl.getBoundingClientRect(),a=i.right-o.left,l=i.top-o.top+i.height/2;s.style.left=a+"px",s.style.top=l+"px",this.sectionEl.appendChild(s);let u;this.isMobile?u=window.innerWidth*.6:this.isTablet?u=window.innerWidth*.65:u=window.innerWidth*.78;const h=t?t.x-a:u,f=t?t.y-l:0,c=s.animate([{transform:"translate(0, 0)",opacity:1},{transform:`translate(${h}px, ${f}px)`,opacity:1}],{duration:800,easing:"linear"});c.onfinish=()=>{if(e&&this.visible){const p=t?`${t.x}px`:`calc(${a}px + ${h}px)`,g=t?`${t.y}px`:`${l}px`;this.createExplosion(p,g)}s.remove()}}startShooting(){this.clearAllTimers(),this.fireBurst(3),this.shootInterval=setInterval(()=>{this.visible&&this.fireBurst(3)},2e3)}fireBurst(e){for(let t=0;t<e;t++){const n=setTimeout(()=>{this.visible&&this.shootMissile(t===e-1)},t*150);this.burstTimeouts.push(n)}}createExplosion(e,t){const n=document.createElement("div");n.className="explosion-effect",n.style.left=typeof e=="number"?e+"px":e,n.style.top=typeof t=="number"?t+"px":t,n.style.position="absolute",n.style.transform="translate(-50%, -50%)",this.sectionEl.appendChild(n),n.addEventListener("animationend",()=>{n.remove()},{once:!0}),setTimeout(()=>{document.body.contains(n)&&n.remove()},500)}async onEnter(){this.isMobile||setTimeout(()=>{this.updateScrollBounds()},50),await this.playFlashEffect(),this.selectors.animatedElements.forEach((e,t)=>{const n=this.sectionEl.querySelector(e);n&&setTimeout(()=>{n.classList.add("is-active"),n.classList.remove("is-paused")},t*50)}),setTimeout(()=>{this.visible&&this.startShooting()},300)}async onLeave(e){if(!this.isLeaving)return new Promise(async t=>{if(e<0){t();return}this.isEntering&&(this.isEntering=!1,this.enterResolve?.(),this.enterResolve=null),this.clearAllTimers(),this.initBreakData(),this.selectors.animatedElements.forEach(o=>{const a=this.sectionEl.querySelector(o);a&&a.classList.add("is-paused")});const n=this.sectionEl.querySelector(this.selectors.spaceship);let s,i;if(n){this.canvas.classList.add("vision-leaving-mode"),this.wrapper.classList.add("vision-leaving-mode");const o=n.getBoundingClientRect(),a=this.sectionEl.getBoundingClientRect(),l=window.innerHeight/2,u=window.innerWidth/2;i=l-a.top,s=u-a.left;const h=o.top+o.height/2,f=l-h,d=window.getComputedStyle(n),p=new DOMMatrix(d.transform).f;n.style.setProperty("animation","none","important"),n.style.transform=`translateY(${p}px)`,n.offsetWidth;const g=this.isMobile?800:500;requestAnimationFrame(()=>{n.style.transition=`transform ${g}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,n.style.transform=`translateY(${p+f}px)`}),await new Promise(m=>setTimeout(m,g))}for(let o=0;o<10;o++)this.shootMissile(!0,{x:s,y:i}),await new Promise(a=>setTimeout(a,100));await new Promise(o=>setTimeout(o,200)),this.progress=0,this.visible=!1,this.isLeaving=!0,this.leaveResolve=t,this.finalMissile=document.createElement("div"),this.finalMissile.className="missile final-shot",this.sectionEl.appendChild(this.finalMissile)})}clearAllTimers(){this.shootInterval&&clearInterval(this.shootInterval),this.burstTimeouts.forEach(e=>clearTimeout(e)),this.burstTimeouts=[]}show(){this.visible=!0,this.isLeaving=!1;const e=this.sectionEl.querySelector(this.selectors.spaceship);if(e&&(e.style.removeProperty("animation"),e.style.transform="",e.style.transition=""),!this.isMobile)Ut(this.sectionEl),this.init(),this.baseMesh&&this.scene.add(this.baseMesh),this.tiles.forEach(t=>this.scene.add(t));else{const t=document.querySelector("#threeCanvas");t&&t.classList.remove("show-three")}this.onEnter()}hide(){this.visible=!1,this.isEntering=!1,this.isLeaving=!1,this.isBreakingNow=!1,this.breakTimerStarted=!1,this.canvas.classList.remove("vision-leaving-mode"),this.wrapper.classList.remove("vision-leaving-mode"),this.clearAllTimers(),this.shootInterval&&clearInterval(this.shootInterval),this.sectionEl.querySelectorAll(".missile, .explosion-effect, .final-shot").forEach(n=>n.remove()),this.breakCanvas&&(this.breakCanvas.style.display="none",this.ctx&&this.ctx.clearRect(0,0,this.breakCanvas.width,this.breakCanvas.height)),this.breakData=null,this.selectors.animatedElements.forEach(n=>{const s=this.sectionEl.querySelector(n);s&&(s.classList.remove("is-active"),s.classList.remove("is-paused"))}),this.sectionEl.classList.remove("impact-flash"),this.leaveResolve&&(this.leaveResolve(),this.leaveResolve=null);const t=this.sectionEl.querySelector(this.selectors.spaceship);t&&(t.style.transition="none",t.style.transform=""),this.targetY=0,this.currentY=0,this.animating=!1,this.descText&&(this.descText.style.transform="translateY(0px)"),this._inited&&(this.baseMesh&&this.scene.remove(this.baseMesh),this.tiles.forEach(n=>this.scene.remove(n)),this.renderer.clear(!0,!0,!0))}onMouseMove=e=>{this.visible&&(this.mouse.x=e.clientX-window.innerWidth/2,this.mouse.y=-(e.clientY-window.innerHeight/2),this.velocity.x=this.mouse.x-this.lastMouse.x,this.velocity.y=this.mouse.y-this.lastMouse.y,this.lastMouse.copy(this.mouse))};onTouchMove=e=>{if(!this.visible||!e.touches.length)return;this.isTouching=!0;const t=e.touches[0],n=t.clientX-window.innerWidth/2,s=-(t.clientY-window.innerHeight/2);this.velocity.x=n-this.lastMouse.x,this.velocity.y=s-this.lastMouse.y,this.mouse.x=n,this.mouse.y=s,this.lastMouse.copy(this.mouse)};onTouchEnd=()=>{this.isTouching=!1,this.velocity.set(0,0)};onResize(){if(!this.visible)return;const e=window.innerWidth,t=window.innerHeight;this.isResizePending||(this.isResizePending=!0,requestAnimationFrame(()=>{if(_n(this.index),Ut(this.sectionEl),this.breakCanvas&&this.breakCanvas.style.display!=="none"){const n=vt;this.breakCanvas.width=e*n,this.breakCanvas.height=t*n,this.breakCanvas.style.width=`${e}px`,this.breakCanvas.style.height=`${t}px`,this.ctx&&(this.ctx.setTransform(n,0,0,n,0,0),this.ctx.imageSmoothingEnabled=!1)}this.isResizePending=!1})),clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{if(this.lastWidth===e&&Math.abs(this.lastHeight-t)<10)return;const n=this.isMobile;if(this.isMobile=e<768,this.isTablet=e<1024&&e>=768,this.updateScrollBounds(),n!==this.isMobile)if(this.isMobile){window.removeEventListener("mousemove",this.handlers.mouseMove),this.baseMesh&&this.scene.remove(this.baseMesh),this.tiles.forEach(o=>this.scene.remove(o));const i=document.querySelector("#threeCanvas");i&&i.classList.remove("show-three")}else if(window.addEventListener("mousemove",this.handlers.mouseMove),!this._inited)this.init();else{Ut(this.sectionEl),this.baseMesh&&this.scene.add(this.baseMesh),this.tiles.forEach(o=>this.scene.add(o));const i=document.querySelector("#threeCanvas");i&&i.classList.add("show-three")}!this.isMobile&&this._inited&&this.visible&&this.repositionTiles();const s=t*.01;document.documentElement.style.setProperty("--vh",`${s}px`),this.lastWidth=e,this.lastHeight=t},200)}repositionTiles(){if(!this.baseMesh)return;const e=this.baseMesh.material.uniforms.uTexture.value,t=e.image.width/e.image.height,n=window.innerWidth,s=n/t,i=window.innerHeight*.1,o=-window.innerHeight/2+s/2+i;this.baseMesh.geometry.dispose(),this.baseMesh.geometry=new mn(n,s),this.baseMesh.position.y=o;const a=39,l=7,u=n/a,h=s/l;this.tiles.forEach((f,d)=>{const c=d%a,p=Math.floor(d/a);f.geometry.dispose(),f.geometry=new mn(u,h);const g=-n/2+u/2+c*u,m=s/2-h/2-p*h+o;f.position.set(g,m,0),f.userData.originalX=g,f.userData.originalY=m})}destroy(){this.visible=!1,this.animating=!1,this.clearAllTimers(),clearTimeout(this.resizeTimer),window.removeEventListener("mousemove",this.handlers.mouseMove),window.removeEventListener("touchmove",this.handlers.touchMove),window.removeEventListener("touchend",this.handlers.touchEnd),window.removeEventListener("touchstart",this.handlers.touchMove);const e=n=>{n&&(n.geometry&&n.geometry.dispose(),n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose()),this.scene&&this.scene.remove(n))};this.tiles.forEach(n=>e(n)),e(this.baseMesh),this.sectionEl.querySelectorAll(".missile, .explosion-effect, .final-shot").forEach(n=>n.remove()),this.ctx&&(this.ctx.clearRect(0,0,this.breakCanvas.width,this.breakCanvas.height),this.ctx=null)}}function Zg(r){return new $g(Tt,r)}class Kg{constructor(e){this.sectionEl=e,this._inited=!1,this.visible=!1,this.complete=!1,this.isMobile=window.innerWidth<=1023}init(){this._inited||(this._inited=!0)}show(){this.init(),this.visible=!0}hide(){this.visible&&(this.visible=!1)}onResize(){if(!this.sectionEl)return;const e=currentHeight*.01;document.documentElement.style.setProperty("--vh",`${e}px`)}}function Jg(r){return new Kg(r)}function cc(){document.querySelectorAll(".section").forEach((e,t)=>{let n=null,s="canvas";switch(t){case 0:n=Ug(e),s="three";break;case 1:n=Pg(e),s="three";break;case 2:n=Dg(e),s="matter";break;case 3:n=wg(e),s="matter";break;case 4:n=Zg(e),s="three";break;case 5:n=Hg(e),s="canvas";break;case 6:n=qg(e),s="canvas";break;case 7:n=Jg(e),s="canvas";break}n&&Kt.register(String(t),n,s)})}const jg={Sunil:"/index.html",branding:"/src/pages/branding.html","digital-campaigns":"/src/pages/digital-campaigns.html","content-creation":"/src/pages/content-creation.html","creative-consulting":"/src/pages/creative-consulting.html","sns-marketing":"/src/pages/sns-marketing.html"},ul=document.querySelector("#app");function Qg(){window.addEventListener("popstate",r=>{const e=r.state?.page||"Sunil";hc(e,{})})}function Vo(r,e={}){Kt.deactivate(6),document.body.classList.remove("show-three","show-matter","show-canvas","show-input","show-matter-layer"),typeof Xs=="function"&&Xs(),history.pushState({page:r,...e},"",`/${r}`),hc(r,e)}async function hc(r,e={}){Kt.destroyAll(),Xs();const t=jg[r];if(!t)return;const s=await(await fetch(t)).text(),i=document.createElement("div");i.innerHTML=s;const o=i.querySelector("#app")||i;if(ul.innerHTML="",ul.appendChild(o.cloneNode(!0)),r==="Sunil"){Sg(),cc(),nc();const a=e.scrollIndex!==void 0?e.scrollIndex:6;setTimeout(()=>Ei(a),50)}else vg(),window.scrollTo(0,0);ev()}function ev(){const r=document.querySelector(".back-button-wrapper");r&&r.addEventListener("click",()=>{Vo("Sunil",{scrollIndex:6})})}let Ni=!1;const fl=window.matchMedia("(min-width: 1024px)");function tv(){const r=document.querySelector(".menu-button"),e=document.querySelector(".menu-list"),t=document.querySelectorAll(".menu-item");if(!r||!e)return;const n=i=>{const o=i?"menu--open":"menu-mobile--open",a=i?"menu--close":"menu-mobile--close";Ni?(e.classList.remove(o),e.classList.add(a),r.classList.remove("menu-button--opened"),Ni=!1,setTimeout(()=>{e.classList.remove(a)},400)):(e.classList.remove(a),e.classList.add(o),r.classList.add("menu-button--opened"),Ni=!0)},s=i=>{r.onclick=()=>n(i),t.forEach(o=>{o.onclick=()=>{Ni&&n(i)}})};s(fl.matches),fl.addEventListener("change",i=>{e.classList.remove("menu--open","menu--close","menu-mobile--open","menu-mobile--close"),r.classList.remove("menu-button--opened"),Ni=!1,s(i.matches)})}function nv(){document.querySelectorAll(".top-bar a").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=parseInt(e.dataset.index);location.pathname==="/"||location.pathname==="/Sunil"||location.pathname==="/index.html"?Ei(n):Vo("Sunil",{scrollIndex:n})})})}class iv{constructor({matterEngine:e,threeEngine:t,sectionManager:n}){this.matterEngine=e,this.threeEngine=t,this.sectionManager=n,this.running=!1,this.last=performance.now()}start(){if(this.running)return;this.running=!0;const e=t=>{if(!this.running)return;const n=this.sectionManager.getActive();if(n){const{instance:s,type:i}=n,o=1e3/60;s&&typeof s.update=="function"&&s.update(o),i==="matter"&&this.matterEngine?(Pe.Engine.update(this.matterEngine.engine,o),Pe.Render.world(this.matterEngine.render)):i==="three"&&this.threeEngine&&this.threeEngine.renderer.render(this.threeEngine.scene,this.threeEngine.camera)}requestAnimationFrame(e)};requestAnimationFrame(e)}stop(){this.running=!1}}const sv=new iv({matterEngine:Ot,threeEngine:Tt,sectionManager:Kt});function rv(){const r=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${r}px`)}document.addEventListener("DOMContentLoaded",()=>{rv(),Qg(),tv(),nv(),cc(),nc(),sv.start(),window.addEventListener("resize",()=>{const r=Kt.getActive();r&&r.instance&&typeof r.instance.onResize=="function"&&r.instance.onResize()})});

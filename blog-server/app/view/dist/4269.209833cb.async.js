(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4269],{54269:function(j,P,a){"use strict";a.r(P),a.d(P,{ProgressOptions:function(){return E},default:function(){return w}});var S=a(54941),C=a(81306),W=a(72936),g=a(11849),b=a(69610),x={height:14,percent:.5,progressStyle:{radius:10,lineWidth:1,store:"red",fill:"#FFF",fillOpacity:1,activeFill:"#000"}},E=function i(l,s){(0,b.Z)(this,i),this.ele=void 0,this.options=void 0,this.canvas=void 0,this.cxt=void 0,this.ele=l;var t=s.progressStyle,e=x.progressStyle;this.options=Object.assign(x,(0,g.Z)({},s));var o=Object.assign(e,(0,g.Z)({},t));if(this.options.progressStyle=o,!this.options.width){var n;this.options.width=(n=document.getElementById(this.ele))===null||n===void 0?void 0:n.clientWidth}this.canvas=document.createElement("canvas")},w=function(i){(0,C.Z)(s,i);var l=(0,W.Z)(s);function s(t,e){var o;return(0,b.Z)(this,s),o=l.call(this,t,e),window.addEventListener("resize",function(){var n,d=o.options.width,r=document.getElementById(o.ele),c=r==null||(n=r.parentNode)===null||n===void 0?void 0:n.clientWidth;d!==c&&(o.options.width=c,o.remove(),o.render())}),o}return(0,S.Z)(s,[{key:"render",value:function(){var e=this,o,n=this.options,d=n.width,r=d===void 0?0:d,c=n.height,v=c===void 0?0:c,y=n.percent,h=n.progressStyle,B=h.store,u=h.radius,_=h.lineWidth,D=h.fill,m=h.fillOpacity,T=h.activeFill,O=h.pattern;if(this.canvas.width=r,this.canvas.height=v,this.cxt=this.canvas.getContext("2d"),this.cxt&&(this.cxt.globalAlpha=m,this.cxt.beginPath(),this.cxt.translate(1,1),p(this.cxt,r-_*2,v-_*2,u),this.cxt.fillStyle=D,this.cxt.fill(),this.cxt.restore(),this.cxt.closePath()),this.cxt&&y)if(this.cxt.globalAlpha=m,this.cxt.beginPath(),p(this.cxt,(r-_*2)*y,v-_*2,u),O){var f=new Image;f.onload=function(){var M=e.cxt.createPattern(f,"repeat");e.cxt.fillStyle=M,e.cxt.fill(),e.cxt.restore(),e.cxt.closePath(),I()},f.src=O}else this.cxt.fillStyle=T,this.cxt.fill(),this.cxt.restore(),this.cxt.closePath(),I();var I=function(){e.cxt&&(e.cxt.globalAlpha=m,e.cxt.beginPath(),p(e.cxt,r-_*2,v-_*2,u),e.cxt.strokeStyle=B,e.cxt.lineWidth=_,e.cxt.stroke(),e.cxt.restore(),e.cxt.closePath())};(o=document.getElementById(this.ele))===null||o===void 0||o.appendChild(this.canvas)}},{key:"remove",value:function(){var e=document.getElementById(this.ele);this.canvas.parentNode&&this.canvas.parentNode===e&&e.removeChild(this.canvas)}}]),s}(E);function p(i,l,s,t){i.beginPath(0),i.arc(l-t,s-t,t,0,Math.PI/2),i.lineTo(t,s),i.arc(t,s-t,t,Math.PI/2,Math.PI),i.lineTo(0,t),i.arc(t,t,t,Math.PI,Math.PI*3/2),i.lineTo(l-t,0),i.arc(l-t,t,t,Math.PI*3/2,Math.PI*2),i.lineTo(l,s-t),i.closePath()}}}]);
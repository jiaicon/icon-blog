(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9602,885,3861,2813],{59602:function(E,s,r){"use strict";r.r(s),r.d(s,{geometry:function(){return o},adaptor:function(){return c}});var i=r(41694),u=r(24642),y=r(30885),l=r(82813),a=r(43861);(0,a.registerShape)();function o(t){var e=t.chart,d=t.options,h=d.percent,_=d.progressStyle,g=d.color,f=d.barWidthRatio,v=d.height;return e.data((0,l.getProgressData)(h)),(0,u.FG)({chart:e,options:{xField:"1",yField:"percent",seriesField:"type",isStack:!0,height:v,widthRatio:f,interval:{shape:"rankProgress",style:_,color:(0,i.HD)(g)?[g,y.DEFAULT_COLOR[1]]:g},args:{zIndexReversed:!0}}}),e.tooltip(!1),e.axis(!1),e.legend(!1),t}function n(t){var e=t.chart;return e.coordinate("rect").transpose(),t}function c(t){return(0,u.ls)(o,n)(t)}},30885:function(E,s,r){"use strict";r.r(s),r.d(s,{DEFAULT_COLOR:function(){return i},DEFAULT_OPTIONS:function(){return u}});var i=["#FAAD14","#E8EDF3"],u={percent:.2,color:i,animation:{}}},43861:function(E,s,r){"use strict";r.r(s),r.d(s,{registerShape:function(){return y}});var i=r(11849),u=r(24642);function y(){u.G2.registerShape("interval","rankProgress",{getPoints:function(a){var o=a.x,n=a.y,c=a.y0,t=a.size||0,e=Array.isArray(n)?n[n.length-1]:n;return[{x:+o+t/2,y:c},{x:+o+t/2,y:e},{x:+o+t/6,y:e},{x:+o+2*t/5,y:c},{x:+o+t/6,y:e},{x:+o+t/2,y:e},{x:+o+t/3,y:e},{x:+o+t/3,y:e-t/10}]},draw:function(a,o){var n=a.points,c=a.style,t=a.defaultStyle,e=t===void 0?{}:t,d=[["M",n[0].x,n[0].y],["L",n[1].x,n[1].y],["L",n[2].x,n[2].y],["L",n[3].x,n[3].y],["Z"]];return d=this.parsePath(d),o.addShape("path",{attrs:(0,i.Z)((0,i.Z)({path:d},e),c)})}})}},82813:function(E,s,r){"use strict";r.r(s),r.d(s,{isRealNumber:function(){return u},getProgressData:function(){return y}});var i=r(41694);function u(l){return typeof l=="number"&&!isNaN(l)}function y(l){var a=(0,i.uZ)(u(l)?l:0,0,1);return[{type:"current",percent:a},{type:"target",percent:1-a}]}}}]);
(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8691],{28691:function(D,m,n){"use strict";n.r(m),n.d(m,{defaultOptions:function(){return v},adaptor:function(){return E},default:function(){return O}});var P=n(69610),b=n(81306),y=n(72936),c=n(32059),h=n(11849),p=n(41694),u=n(24642);u.G2.registerShape("interval","progress",{draw:function(_,e){var t=_.points,o=_.style,s=_.defaultStyle,i=s===void 0?{}:s,a=[["M",t[0].x,t[0].y],["L",t[1].x,t[1].y],["L",t[2].x,t[2].y],["L",t[3].x,t[3].y]];return a=this.parsePath(a),e.addShape("path",{attrs:(0,h.Z)((0,h.Z)({path:a},i),o)})}});var v={columnWidthRatio:1.2};function E(l){var _=l.chart,e=l.options,t=e.data,o=e.xField,s=e.yField,i=e.columnWidthRatio,a=e.columnStyle,d=e.theme;_.data(t),_.interval().position("".concat(o,"*").concat(s)).shape("progress").style("".concat(o,"*").concat(s),function(M,g){var r;return typeof a=="function"?a((r={},(0,c.Z)(r,o,M),(0,c.Z)(r,s,g),r)):a}),_.theme((0,p.b$)({},(0,p.Kn)(d)?d:u.G2.getTheme(d),{columnWidthRatio:i}));var f=1/t.length/2*i;return _.scale({genre:{range:[f,1-f]}}),_.axis(!1),_.legend(!1),l}var O=function(l){(0,b.Z)(e,l);var _=(0,y.Z)(e);function e(t,o){return(0,P.Z)(this,e),_.call(this,t,o,E,v)}return e}(u.P)}}]);

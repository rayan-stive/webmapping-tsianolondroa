(self.webpackChunk=self.webpackChunk||[]).push([[3661],{236:function(e,n,t){"use strict";var r=t(6900),a=t(1625),o=t(2157),i=t(1940),f=t(640),l=t(6363),c=t(5659),s=t(5367),u=t(710),w=t(7842),m=new u.Z({source:new i.Z({url:"data/kml/timezones.kml",format:new r.ZP({extractStyles:!1})}),style:function(e){var n=0,t=e.get("name").match(/([\-+]\d{2}):(\d{2})$/);t&&(n=60*parseInt(t[1],10)+parseInt(t[2],10));var r=new Date,a=new Date(r.getTime()+6e4*(r.getTimezoneOffset()+n)),o=Math.abs(12-a.getHours()+a.getMinutes()/60);o>12&&(o=24-o);var i=.75*(1-o/12);return new l.ZP({fill:new c.Z({color:[255,255,51,i]}),stroke:new s.Z({color:"#ffffff"})})}}),v=new w.Z({source:new o.Z({layer:"toner"})}),p=new a.Z({layers:[v,m],target:"map",view:new f.ZP({center:[0,0],zoom:2})}),d=$("#info");d.tooltip({animation:!1,trigger:"manual"});var g=function(e){d.css({left:e[0]+"px",top:e[1]-15+"px"});var n=p.forEachFeatureAtPixel(e,(function(e){return e}));n?d.attr("data-original-title",n.get("name")).tooltip("show"):d.tooltip("hide")};p.on("pointermove",(function(e){e.dragging?d.tooltip("hide"):g(p.getEventPixel(e.originalEvent))})),p.on("click",(function(e){g(e.pixel)}))}},function(e){"use strict";var n;n=236,e(e.s=n)}]);
//# sourceMappingURL=kml-timezones.js.map
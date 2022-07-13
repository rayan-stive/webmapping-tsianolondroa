(self.webpackChunk=self.webpackChunk||[]).push([[8487],{3258:function(i,t,e){"use strict";var o=e(6578),r=e(3357),n=e(2045),s=e(5650),a=e(4158),u=e(4881),l="version1",f="version2",v="version3",c={};c[l]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}},c[f]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}},c[v]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH","sizeByWh"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["default"]}},c.none={none:{supports:[],formats:[],qualities:[]}};var d=/^https?:\/\/library\.stanford\.edu\/iiif\/image-api\/(?:1\.1\/)?compliance\.html#level[0-2]$/,h=/^https?:\/\/iiif\.io\/api\/image\/2\/level[0-2](?:\.json)?$/,p=/(^https?:\/\/iiif\.io\/api\/image\/3\/level[0-2](?:\.json)?$)|(^level[0-2]$)/;var y={};y[l]=function(i){var t=i.getComplianceLevelSupportedFeatures();return void 0===t&&(t=c[l].level0),{url:void 0===i.imageInfo["@id"]?void 0:i.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),supports:t.supports,formats:t.formats.concat([void 0===i.imageInfo.formats?[]:i.imageInfo.formats]),qualities:t.qualities.concat([void 0===i.imageInfo.qualities?[]:i.imageInfo.qualities]),resolutions:i.imageInfo.scale_factors,tileSize:void 0!==i.imageInfo.tile_width?void 0!==i.imageInfo.tile_height?[i.imageInfo.tile_width,i.imageInfo.tile_height]:[i.imageInfo.tile_width,i.imageInfo.tile_width]:null!=i.imageInfo.tile_height?[i.imageInfo.tile_height,i.imageInfo.tile_height]:void 0}},y[f]=function(i){var t=i.getComplianceLevelSupportedFeatures(),e=Array.isArray(i.imageInfo.profile)&&i.imageInfo.profile.length>1,o=e&&i.imageInfo.profile[1].supports?i.imageInfo.profile[1].supports:[],r=e&&i.imageInfo.profile[1].formats?i.imageInfo.profile[1].formats:[],n=e&&i.imageInfo.profile[1].qualities?i.imageInfo.profile[1].qualities:[];return{url:i.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),sizes:void 0===i.imageInfo.sizes?void 0:i.imageInfo.sizes.map((function(i){return[i.width,i.height]})),tileSize:void 0===i.imageInfo.tiles?void 0:[i.imageInfo.tiles.map((function(i){return i.width}))[0],i.imageInfo.tiles.map((function(i){return void 0===i.height?i.width:i.height}))[0]],resolutions:void 0===i.imageInfo.tiles?void 0:i.imageInfo.tiles.map((function(i){return i.scaleFactors}))[0],supports:t.supports.concat(o),formats:t.formats.concat(r),qualities:t.qualities.concat(n)}},y[v]=function(i){var t=i.getComplianceLevelSupportedFeatures(),e=void 0===i.imageInfo.extraFormats?t.formats:t.formats.concat(i.imageInfo.extraFormats),o=void 0!==i.imageInfo.preferredFormats&&Array.isArray(i.imageInfo.preferredFormats)&&i.imageInfo.preferredFormats.length>0?i.imageInfo.preferredFormats.filter((function(i){return(0,u.q9)(["jpg","png","gif"],i)})).reduce((function(i,t){return void 0===i&&(0,u.q9)(e,t)?t:i}),void 0):void 0;return{url:i.imageInfo.id,sizes:void 0===i.imageInfo.sizes?void 0:i.imageInfo.sizes.map((function(i){return[i.width,i.height]})),tileSize:void 0===i.imageInfo.tiles?void 0:[i.imageInfo.tiles.map((function(i){return i.width}))[0],i.imageInfo.tiles.map((function(i){return i.height}))[0]],resolutions:void 0===i.imageInfo.tiles?void 0:i.imageInfo.tiles.map((function(i){return i.scaleFactors}))[0],supports:void 0===i.imageInfo.extraFeatures?t.supports:t.supports.concat(i.imageInfo.extraFeatures),formats:e,qualities:void 0===i.imageInfo.extraQualities?t.qualities:t.qualities.concat(i.imageInfo.extraQualities),preferredFormat:o}};var g=function(i){this.setImageInfo(i)};g.prototype.setImageInfo=function(i){this.imageInfo="string"==typeof i?JSON.parse(i):i},g.prototype.getImageApiVersion=function(){if(void 0!==this.imageInfo){var i=this.imageInfo["@context"]||"ol-no-context";"string"==typeof i&&(i=[i]);for(var t=0;t<i.length;t++)switch(i[t]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return l;case"http://iiif.io/api/image/2/context.json":return f;case"http://iiif.io/api/image/3/context.json":return v;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(l)&&this.imageInfo.identifier)return l}(0,a.h)(!1,61)}},g.prototype.getComplianceLevelEntryFromProfile=function(i){if(void 0!==this.imageInfo&&void 0!==this.imageInfo.profile)switch(void 0===i&&(i=this.getImageApiVersion()),i){case l:if(d.test(this.imageInfo.profile))return this.imageInfo.profile;break;case v:if(p.test(this.imageInfo.profile))return this.imageInfo.profile;break;case f:if("string"==typeof this.imageInfo.profile&&h.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&"string"==typeof this.imageInfo.profile[0]&&h.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0]}},g.prototype.getComplianceLevelFromProfile=function(i){var t=this.getComplianceLevelEntryFromProfile(i);if(void 0!==t){var e=t.match(/level[0-2](?:\.json)?$/g);return Array.isArray(e)?e[0].replace(".json",""):void 0}},g.prototype.getComplianceLevelSupportedFeatures=function(){if(void 0!==this.imageInfo){var i=this.getImageApiVersion(),t=this.getComplianceLevelFromProfile(i);return void 0===t?c.none.none:c[i][t]}},g.prototype.getTileSourceOptions=function(i){var t=i||{},e=this.getImageApiVersion();if(void 0!==e){var o=void 0===e?void 0:y[e](this);if(void 0!==o)return{url:o.url,version:e,size:[this.imageInfo.width,this.imageInfo.height],sizes:o.sizes,format:void 0!==t.format&&(0,u.q9)(o.formats,t.format)?t.format:void 0!==o.preferredFormat?o.preferredFormat:"jpg",supports:o.supports,quality:t.quality&&(0,u.q9)(o.qualities,t.quality)?t.quality:(0,u.q9)(o.qualities,"native")?"native":"default",resolutions:Array.isArray(o.resolutions)?o.resolutions.sort((function(i,t){return t-i})):void 0,tileSize:o.tileSize}}};var m=g,B=e(6666),z=e(5757);function j(i){return i.toLocaleString("en",{maximumFractionDigits:10})}var P=function(i){function t(t){var e=t||{},r=e.url||"";r+=r.lastIndexOf("/")===r.length-1||""===r?"":"/";var c=e.version||f,d=e.sizes||[],h=e.size;(0,a.h)(null!=h&&Array.isArray(h)&&2==h.length&&!isNaN(h[0])&&h[0]>0&&!isNaN(h[1])&&h[1]>0,60);var p,y,g,m=h[0],P=h[1],x=e.tileSize,b=e.tilePixelRatio||1,W=e.format||"jpg",M=e.quality||(e.version==l?"native":"default"),q=e.resolutions||[],N=e.supports||[],A=e.extent||[0,-P,m,0],S=null!=d&&Array.isArray(d)&&d.length>0,w=void 0!==x&&("number"==typeof x&&Number.isInteger(x)&&x>0||Array.isArray(x)&&x.length>0),C=null!=N&&Array.isArray(N)&&((0,u.q9)(N,"regionByPx")||(0,u.q9)(N,"regionByPct"))&&((0,u.q9)(N,"sizeByWh")||(0,u.q9)(N,"sizeByH")||(0,u.q9)(N,"sizeByW")||(0,u.q9)(N,"sizeByPct"));if(q.sort((function(i,t){return t-i})),w||C)if(null!=x&&("number"==typeof x&&Number.isInteger(x)&&x>0?(p=x,y=x):Array.isArray(x)&&x.length>0&&((1==x.length||null==x[1]&&Number.isInteger(x[0]))&&(p=x[0],y=x[0]),2==x.length&&(Number.isInteger(x[0])&&Number.isInteger(x[1])?(p=x[0],y=x[1]):null==x[0]&&Number.isInteger(x[1])&&(p=x[1],y=x[1])))),void 0!==p&&void 0!==y||(p=s.S,y=s.S),0==q.length)for(var H=g=Math.max(Math.ceil(Math.log(m/p)/Math.LN2),Math.ceil(Math.log(P/y)/Math.LN2));H>=0;H--)q.push(Math.pow(2,H));else{var $=Math.max.apply(Math,q);g=Math.round(Math.log($)/Math.LN2)}else if(p=m,y=P,q=[],S){d.sort((function(i,t){return i[0]-t[0]})),g=-1;for(var F=[],I=0;I<d.length;I++){var O=m/d[I][0];q.length>0&&q[q.length-1]==O?F.push(I):(q.push(O),g++)}if(F.length>0)for(var k=0;k<F.length;k++)d.splice(F[k]-k,1)}else q.push(1),d.push([m,P]),g=0;var D=new o.Z({tileSize:[p,y],extent:A,origin:(0,B.rL)(A),resolutions:q}),U=n.z.bind(null,(0,z.Pq)(x||256).map((function(i){return i*b})));i.call(this,{attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,imageSmoothing:e.imageSmoothing,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:e.state,tileClass:U,tileGrid:D,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:function(i,t,e){var o,n,s=i[0];if(!(s>g)){var a=i[1],l=i[2],f=q[s];if(!(void 0===a||void 0===l||void 0===f||a<0||Math.ceil(m/f/p)<=a||l<0||Math.ceil(P/f/y)<=l)){if(C||w){var h=a*p*f,B=l*y*f,z=p*f,x=y*f,b=p,A=y;if(h+z>m&&(z=m-h),B+x>P&&(x=P-B),h+p*f>m&&(b=Math.floor((m-h+f-1)/f)),B+y*f>P&&(A=Math.floor((P-B+f-1)/f)),0==h&&z==m&&0==B&&x==P)o="full";else if(!C||(0,u.q9)(N,"regionByPx"))o=h+","+B+","+z+","+x;else if((0,u.q9)(N,"regionByPct")){o="pct:"+j(h/m*100)+","+j(B/P*100)+","+j(z/m*100)+","+j(x/P*100)}c!=v||C&&!(0,u.q9)(N,"sizeByWh")?!C||(0,u.q9)(N,"sizeByW")?n=b+",":(0,u.q9)(N,"sizeByH")?n=","+A:(0,u.q9)(N,"sizeByWh")?n=b+","+A:(0,u.q9)(N,"sizeByPct")&&(n="pct:"+j(100/f)):n=b+","+A}else if(o="full",S){var H=d[s][0],$=d[s][1];n=c==v?H==m&&$==P?"max":H+","+$:H==m?"full":H+","}else n=c==v?"max":"full";return r+o+"/"+n+"/0/"+M+"."+W}}},transition:e.transition}),this.zDirection=e.zDirection}return i&&(t.__proto__=i),t.prototype=Object.create(i&&i.prototype),t.prototype.constructor=t,t}(r.Z),x=e(1625),b=e(7842),W=e(640),M=new b.Z,q=new x.Z({layers:[M],target:"map"}),N=document.getElementById("iiif-notification"),A=document.getElementById("imageInfoUrl");function S(i){fetch(i).then((function(i){i.json().then((function(i){var t=new m(i).getTileSourceOptions();if(void 0!==t&&void 0!==t.version){t.zDirection=-1;var e=new P(t);M.setSource(e),q.setView(new W.ZP({resolutions:e.getTileGrid().getResolutions(),extent:e.getTileGrid().getExtent(),constrainOnlyCenter:!0})),q.getView().fit(e.getTileGrid().getExtent()),N.textContent=""}else N.textContent="Data seems to be no valid IIIF image information."})).catch((function(i){N.textContent="Could not read image info json. "+i}))})).catch((function(){N.textContent="Could not read data from URL."}))}document.getElementById("display").addEventListener("click",(function(){S(A.value)})),S(A.value)}},function(i){"use strict";var t;t=3258,i(i.s=t)}]);
//# sourceMappingURL=iiif.js.map
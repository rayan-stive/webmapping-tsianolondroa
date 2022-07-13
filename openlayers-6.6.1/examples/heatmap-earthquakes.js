(self.webpackChunk=self.webpackChunk||[]).push([[9932],{702:function(t,e,n){"use strict";var i=n(6900),o=n(1625),a=n(2157),r=n(1940),u=n(640),s=n(710),f=n(5717),l=n(3209),v=n(3534),_=n(7721),d="blur",c="gradient",h="radius",x=["#00f","#0ff","#0f0","#ff0","#f00"];var g=function(t){function e(e){var n=e||{},i=(0,l.f0)({},n);delete i.gradient,delete i.radius,delete i.blur,delete i.weight,t.call(this,i),this.t=null,this.addChangeListener(c,this.i),this.setGradient(n.gradient?n.gradient:x),this.setBlur(void 0!==n.blur?n.blur:15),this.setRadius(void 0!==n.radius?n.radius:8);var o=n.weight?n.weight:"weight";this.o="string"==typeof o?function(t){return t.get(o)}:o,this.setRenderOrder(null)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getBlur=function(){return this.get(d)},e.prototype.getGradient=function(){return this.get(c)},e.prototype.getRadius=function(){return this.get(h)},e.prototype.i=function(){this.t=function(t){for(var e=1,n=256,i=(0,_.E4)(e,n),o=i.createLinearGradient(0,0,e,n),a=1/(t.length-1),r=0,u=t.length;r<u;++r)o.addColorStop(r*a,t[r]);return i.fillStyle=o,i.fillRect(0,0,e,n),i.canvas}(this.getGradient())},e.prototype.setBlur=function(t){this.set(d,t)},e.prototype.setGradient=function(t){this.set(c,t)},e.prototype.setRadius=function(t){this.set(h,t)},e.prototype.createRenderer=function(){return new f.Z(this,{className:this.getClassName(),attributes:[{name:"weight",callback:function(t){var e=this.o(t);return void 0!==e?(0,v.uZ)(e,0,1):1}.bind(this)}],vertexShader:"\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_weight = a_weight;\n        }",fragmentShader:"\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          gl_FragColor = vec4(alpha, alpha, alpha, alpha);\n        }",hitVertexShader:"\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n        attribute vec4 a_hitColor;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_hitColor = a_hitColor;\n          v_weight = a_weight;\n        }",hitFragmentShader:"\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          if (alpha < 0.05) {\n            discard;\n          }\n\n          gl_FragColor = v_hitColor;\n        }",uniforms:{u_size:function(){return 2*(this.get(h)+this.get(d))}.bind(this),u_blurSlope:function(){return this.get(h)/Math.max(1,this.get(d))}.bind(this)},postProcesses:[{fragmentShader:"\n            precision mediump float;\n\n            uniform sampler2D u_image;\n            uniform sampler2D u_gradientTexture;\n\n            varying vec2 v_texCoord;\n\n            void main() {\n              vec4 color = texture2D(u_image, v_texCoord);\n              gl_FragColor.a = color.a;\n              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;\n              gl_FragColor.rgb *= gl_FragColor.a;\n            }",uniforms:{u_gradientTexture:function(){return this.t}.bind(this)}}]})},e.prototype.renderDeclutter=function(){},e}(s.Z),m=n(7842),p=document.getElementById("blur"),C=document.getElementById("radius"),w=new g({source:new r.Z({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new i.ZP({extractStyles:!1})}),blur:parseInt(p.value,10),radius:parseInt(C.value,10),weight:function(t){var e=t.get("name");return parseFloat(e.substr(2))-5}}),b=new m.Z({source:new a.Z({layer:"toner"})});new o.Z({layers:[b,w],target:"map",view:new u.ZP({center:[0,0],zoom:2})});var y=function(){w.setBlur(parseInt(p.value,10))};p.addEventListener("input",y),p.addEventListener("change",y);var S=function(){w.setRadius(parseInt(C.value,10))};C.addEventListener("input",S),C.addEventListener("change",S)}},function(t){"use strict";var e;e=702,t(t.s=e)}]);
//# sourceMappingURL=heatmap-earthquakes.js.map
(this["webpackJsonptest-cone-center"]=this["webpackJsonptest-cone-center"]||[]).push([[0],{25:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);n(17);var o=n(0),r=n.n(o),a=n(11),c=n.n(a),l=n(16),p=n(8),s=["January","February","March","April","May","June","July","August","September","October","November","December"];function i(t){return s[t.getMonth()]}function u(t){var e=t.getDate().toString().padStart(2,"0"),n=i(t),o=t.getFullYear(),r=t.getHours().toString().padStart(2,"0"),a=t.getMinutes().toString().padStart(2,"0"),c=t.getSeconds().toString().padStart(2,"0");return"".concat(e," ").concat(n," ").concat(o," ").concat(r,":").concat(a,":").concat(c)}function g(t,e,n,o,r,a){n.call(t)>n.call(e)?(r.call(t,a+1),o.call(t,n.call(e))):n.call(t)<n.call(e)&&(r.call(t,a),o.call(t,n.call(e)))}var h=n(2);var d=function(){var t=Object(o.useRef)(new Date),e=u(t.current);return Object(h.jsx)(y,{children:Object(h.jsx)(D,{defaultValue:e,onKeyDown:function(e){var n,o=t.current,r=e.currentTarget,a=new Date(o),c=r.selectionStart;if(null!==c){if("ArrowUp"===e.key)n=1;else{if("ArrowDown"!==e.key)return;n=-1}var l=e.ctrlKey;e.preventDefault(),c<=2&&(o.setDate(o.getDate()+n),l||g(o,a,Date.prototype.getMonth,Date.prototype.setMonth,Date.prototype.setDate,0),c=2),c>=3&&c<=3+i(o).length&&(o.setMonth(o.getMonth()+n),l||g(o,a,Date.prototype.getFullYear,Date.prototype.setFullYear,Date.prototype.setMonth,-1),c=3+i(o).length),c>=4+i(o).length&&c<=8+i(o).length&&(o.setFullYear(o.getFullYear()+n),c=8+i(o).length),c>=9+i(o).length&&c<=11+i(o).length&&(o.setHours(o.getHours()+n),l||g(o,a,Date.prototype.getDate,Date.prototype.setDate,Date.prototype.setHours,-1),c=11+i(o).length),c>=12+i(o).length&&c<=14+i(o).length&&(o.setMinutes(o.getMinutes()+n),l||g(o,a,Date.prototype.getHours,Date.prototype.setHours,Date.prototype.setMinutes,-1),c=14+i(o).length),c>=15+i(o).length&&c<=17+i(o).length&&(o.setSeconds(o.getSeconds()+n),l||g(o,a,Date.prototype.getMinutes,Date.prototype.setMinutes,Date.prototype.setSeconds,-1),c=17+i(o).length),r.value=u(o),r.selectionEnd=c}},autoFocus:!0})})},y=p.a.div.withConfig({displayName:"App__Container",componentId:"sc-140w6wp-0"})(["width:100%;height:50vh;display:flex;justify-content:center;align-items:center;margin:auto;"]),D=p.a.input.withConfig({displayName:"App__Input",componentId:"sc-140w6wp-1"})(["width:250px;height:30px;box-sizing:border-box;border:1px solid lightgray;border-radius:6px;outline:none;box-shadow:inset 0 0 3px 1px lightgray;font-size:16px;line-height:30px;margin:50px 0 0 50px;padding:0 10px 0 10px;"]),b=(n(25),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),o(t),r(t),a(t),c(t)}))});c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(l.a,{basename:"/test-cone-center",children:Object(h.jsx)(d,{})})}),document.getElementById("root")),b()}},[[30,1,2]]]);
//# sourceMappingURL=main.0c5d08a5.chunk.js.map
(this["webpackJsonptest-cone-center"]=this["webpackJsonptest-cone-center"]||[]).push([[0],{25:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);n(17);var o=n(0),a=n.n(o),r=n(11),l=n.n(r),c=n(16),p=n(8),s=["January","February","March","April","May","June","July","August","September","October","November","December"];function i(t){return s[t.getMonth()]}function u(t){var e=t.getDate().toString().padStart(2,"0"),n=i(t),o=t.getFullYear(),a=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0"),l=t.getSeconds().toString().padStart(2,"0");return"".concat(e," ").concat(n," ").concat(o," ").concat(a,":").concat(r,":").concat(l)}function g(t,e,n,o,a,r){n.call(t)>n.call(e)?(a.call(t,r+1),o.call(t,n.call(e))):n.call(t)<n.call(e)&&(a.call(t,r),o.call(t,n.call(e)))}var h=n(2);var d=function(){var t=Object(o.useRef)(new Date),e=u(t.current);return Object(h.jsx)(y,{children:Object(h.jsx)(D,{defaultValue:e,onKeyDown:function(e){var n,o=t.current,a=e.currentTarget,r=new Date(o),l=a.selectionStart;if(null!==l){if("ArrowUp"===e.key)n=1;else{if("ArrowDown"!==e.key)return;n=-1}var c=e.ctrlKey;e.preventDefault(),l<=2&&(o.setDate(o.getDate()+n),c||g(o,r,Date.prototype.getMonth,Date.prototype.setMonth,Date.prototype.setDate,0),l=2),l>=3&&l<=3+i(o).length&&(o.setMonth(o.getMonth()+n),c||g(o,r,Date.prototype.getFullYear,Date.prototype.setFullYear,Date.prototype.setMonth,-1),l=3+i(o).length),l>=4+i(o).length&&l<=8+i(o).length&&(o.setFullYear(o.getFullYear()+n),l=8+i(o).length),l>=9+i(o).length&&l<=11+i(o).length&&(o.setHours(o.getHours()+n),c||g(o,r,Date.prototype.getDate,Date.prototype.setDate,Date.prototype.setHours,-1),l=11+i(o).length),l>=12+i(o).length&&l<=14+i(o).length&&(o.setMinutes(o.getMinutes()+n),c||g(o,r,Date.prototype.getHours,Date.prototype.setHours,Date.prototype.setMinutes,-1),l=14+i(o).length),l>=15+i(o).length&&l<=17+i(o).length&&(o.setSeconds(o.getSeconds()+n),c||g(o,r,Date.prototype.getMinutes,Date.prototype.setMinutes,Date.prototype.setSeconds,-1),l=17+i(o).length),a.value=u(o),a.selectionEnd=l}},autoFocus:!0})})},y=p.a.div.withConfig({displayName:"App__Container",componentId:"sc-140w6wp-0"})(["width:100%;height:50vh;display:flex;justify-content:center;align-items:center;margin:auto;"]),D=p.a.input.withConfig({displayName:"App__Input",componentId:"sc-140w6wp-1"})(["width:250px;height:30px;box-sizing:border-box;border:1px solid lightgray;border-radius:6px;outline:none;box-shadow:inset 0 0 3px 1px lightgray;font-size:16px;line-height:30px;margin:50px 0 0 50px;padding:0 10px 0 10px;"]),f=(n(25),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,r=e.getLCP,l=e.getTTFB;n(t),o(t),a(t),r(t),l(t)}))});l.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(c.a,{basename:"/test-alef",children:Object(h.jsx)(d,{})})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.9aabb8ce.chunk.js.map
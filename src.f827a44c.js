parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}var s=function(){function e(i){var s=i.selector,n=i.targetDate;t(this,e),this.targetDate=new Date(n),this.refs={fieldsDeys:document.querySelector("".concat(s," span[data-value = 'days']")),fieldsHours:document.querySelector("".concat(s," span[data-value = 'hours']")),fieldsMins:document.querySelector("".concat(s," span[data-value = 'mins']")),fieldsSecs:document.querySelector("".concat(s," span[data-value = 'secs']"))},this.indicationTime()}return i(e,[{key:"startTimer",value:function(){var t=this;this.intervalId=setInterval(function(){t.indicationTime()},1e3)}},{key:"indicationTime",value:function(){this.currentTime=new Date,this.time=this.targetDate-this.currentTime,this.time<0&&(clearInterval(this.intervalId),this.time=0),this.timeText()}},{key:"timeText",value:function(){this.days=Math.floor(this.time/864e5),this.refs.fieldsDeys.textContent=String(this.days).padStart(2,"0"),this.hours=Math.floor(this.time%864e5/36e5),this.refs.fieldsHours.textContent=String(this.hours).padStart(2,"0"),this.mins=Math.floor(this.time%36e5/6e4),this.refs.fieldsMins.textContent=String(this.mins).padStart(2,"0"),this.secs=Math.floor(this.time%6e4/1e3),this.refs.fieldsSecs.textContent=String(this.secs).padStart(2,"0")}}]),e}(),n=new s({selector:"#timer-1",targetDate:"december 19, 2021, 15:49"});n.startTimer();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.f827a44c.js.map
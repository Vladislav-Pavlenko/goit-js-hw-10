import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";const e={button:document.querySelector("button[data-start]"),input:document.querySelector("#datetime-picker"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let a=null;function s(){e.button.classList.add("disabled"),e.button.disabled=!0}function u(){e.button.classList.remove("disabled"),e.button.disabled=!1}const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(f.show({title:"Error",message:"Please choose a date in the future",backgroundColor:"red",color:"#ffffff",position:"topRight"}),s()):(a=t[0],u())}};function b(t){const d=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:c,seconds:l}}function n(t){return String(t).padStart(2,"0")}s();e.button.addEventListener("click",()=>{const t=setInterval(()=>{const r=a-new Date,o=b(r);o.seconds===0&&o.minutes===0&&o.hours===0&&o.days===0&&(clearInterval(t),e.input.disabled=!1,u()),e.days.textContent=n(o.days),e.hours.textContent=n(o.hours),e.minutes.textContent=n(o.minutes),e.seconds.textContent=n(o.seconds),s(),e.input.disabled=!0},1e3)});m("input",h);
//# sourceMappingURL=commonHelpers.js.map

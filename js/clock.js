let clockStyle_ymd = "/";
let clockStyle_hms = "-";
let cFormat = 0;let fixDay;let fixMonth;
function clock(){
    let date = new Date();
    //年月日
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    //時刻
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let clockYmd = document.getElementById('clock-ymd');
    let clockHms = document.getElementById('clock-hms');
    let clockStyle_1 = hour + ':' + minutes
    if(day <= 9){let fixDay = '0' + day;}else if(10 <= day){let fixDay = day;}
    if(month <= 9){let fixMonth = '0' + month;clockYmd.textContent = year + clockStyle_ymd + fixMonth + clockStyle_ymd + day;
    }else if(10 <= month){let fixMonth = month;clockYmd.textContent = year + clockStyle_ymd + fixMonth + clockStyle_ymd + day;}
    if(cFormat == 0){clockHms.textContent = hour + clockStyle_hms + minutes + clockStyle_hms + seconds;}else if(cFormat == 1){
    if(minutes <= 9 && 10 <= hour){clockHms.textContent = hour + ':' + '0' + minutes}else if(10 <= minutes && 10 <= hour){clockHms.textContent = clockStyle_1;}
    if(minutes <= 9 && hour <= 9){clockHms.textContent = '0' + hour + ':' + '0' + minutes}else if(9 <= minutes && hour <= 9){clockHms.textContent = '0' + hour + ':' + minutes}}
}
clock();
setInterval(() => {clock();}, 1000);
function format1(){cFormat = 0;}
function format2(){cFormat = 1;}
//inputの値に合わせてテキストのサイズを変えるコード
const SRIDERBAR = document.getElementById('fontsizesrider');
let clockText = document.getElementById('clock-ymd');
let clockTextDown = document.getElementById('clock-hms');
SRIDERBAR.addEventListener('input', function() {
    clockText.style.fontSize = (SRIDERBAR.value * 20) + 'px';//clickvalueを表示するテキストのフォントサイズを変更
    clockTextDown.style.fontSize = (SRIDERBAR.value * 20) + 'px';//clickvalueを表示するテキストのフォントサイズを変更
});

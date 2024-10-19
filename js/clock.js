let popupWindowClockYmd = 0;
let popupWindowClockHms = 0;
let togglePopup = document.getElementById('popupWindow');
let popupWindow;
let popupVisibleToggleValue = 0;
togglePopup.addEventListener('click', () => {
    if(popupVisibleToggleValue == 0){
        popupWindow = window.open("", "テストポップアップ", "width=230,height=150");
        setInterval(() => {
            popupWindow.document.body.innerHTML = `<h1>${popupWindowClockYmd}</h1><h1>${popupWindowClockHms}</h1>`;
        }, 100);
        popupVisibleToggleValue++;
    }else if(popupVisibleToggleValue == 1){
        popupWindow.close();
        popupVisibleToggleValue = 0;
    }
});


let clockStyle_ymd = "/";
let clockStyle_hms = "-";
let cFormat = 0;let fixDay;let fixMonth;
function clock(){
    let tempYmd = 0;
    let tempHms = 0;

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
    if(day <= 9){
        let fixDay = '0' + day;
    }else if(10 <= day){
        let fixDay = day;
    }
    if(month <= 9){
        let fixMonth = '0' + month;
        tempYmd = year + clockStyle_ymd + fixMonth + clockStyle_ymd + day;
    }else if(10 <= month){
        let fixMonth = month;
        tempYmd = year + clockStyle_ymd + fixMonth + clockStyle_ymd + day;
    }
    if(cFormat == 0){
        tempHms = hour + clockStyle_hms + minutes + clockStyle_hms + seconds;
    }else if(cFormat == 1){
        if(minutes <= 9 && 10 <= hour){
            tempHms = hour + ':' + '0' + minutes
        }else if(10 <= minutes && 10 <= hour){
            tempHms = clockStyle_1;
            }
        if(minutes <= 9 && hour <= 9){
            tempHms = '0' + hour + ':' + '0' + minutes
        }else if(9 <= minutes && hour <= 9){
            tempHms = '0' + hour + ':' + minutes
        }
    }
    clockYmd.textContent = tempYmd;
    clockHms.textContent = tempHms;
    popupWindowClockYmd = tempYmd;
    popupWindowClockHms = tempHms;
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
    clockText.style.fontSize = (SRIDERBAR.value * 20) + 'px';//時間を表示するテキストのフォントサイズを変更
    clockTextDown.style.fontSize = (SRIDERBAR.value * 20) + 'px';//時間を表示するテキストのフォントサイズを変更
});

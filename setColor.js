//それぞれのinputを取得
const CLOCK_YMD = document.getElementById('clock-ymd');
const CLOCK_HMS = document.getElementById('clock-hms');
const DEFAULT_FONT = document.getElementById('colorDefault-font');
const RED_FONT = document.getElementById('colorRed-font');
const BLUE_FONT = document.getElementById('colorBlue-font');
const WHITE_FONT = document.getElementById('colorWhite-font');
const GREEN_FONT = document.getElementById('colorGreen-font');
const CLOCK_FONT = document.getElementById('clock-ymd-font');
//取得したinputが押されたときにバックグラウンドの色を変える
DEFAULT_FONT.addEventListener('change', function(){CLOCK_YMD.style.color = '#000000';CLOCK_HMS.style.color = '#000000';});
RED_FONT.addEventListener('change', function(){CLOCK_YMD.style.color = '#ff0000';CLOCK_HMS.style.color = '#ff0000';});
BLUE_FONT.addEventListener('change', function(){CLOCK_YMD.style.color = '#0000ff';CLOCK_HMS.style.color = '#0000ff';});
WHITE_FONT.addEventListener('change', function(){CLOCK_YMD.style.color = '#FFFFFF';CLOCK_HMS.style.color = '#FFFFFF';});
GREEN_FONT.addEventListener('change', function(){CLOCK_YMD.style.color = '#00ff00';CLOCK_HMS.style.color = '#00ff00';});
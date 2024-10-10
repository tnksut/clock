const toggleButton = document.getElementById('setting-toggle');//設定を開く要素を取得
const toggleElement = document.getElementById('toggle-item-settingMenu');//設定の要素を取得
const column = document.getElementById('column');//設定にある要素を囲むdivを取得
toggleButton.addEventListener('click', () => {
    // 要素の表示状態を切り替え
    if (toggleElement.style.display === 'none' || toggleElement.style.display === '') {
        toggleElement.style.display = 'block'; // 表示
        toggleElement.style.display = 'inline-block';
        toggleElement.style.display = 'flex';
        column.style.height = 'auto';
        column.style.marginRight = '20px';
    } else {
        toggleElement.style.display = 'none';  // 非表示
    }
});

function onclosebutton() {toggleElement.style.display = 'none';};

const checkbox = document.getElementById('openSidebarMenu');
const settingmenu = document.getElementById('toggle-item-settingMenu');

checkbox.addEventListener('change', function(){settingmenu.style.display='none';});
//それぞれのinputを取得
const BACKGROUND = document.getElementById('maininner');
const DEFAULT = document.getElementById('colorDefault');
const RED = document.getElementById('colorRed');
const BLUE = document.getElementById('colorBlue');
const BLACK = document.getElementById('colorBlack');
const GREEN = document.getElementById('colorGreen');
const CLOCK = document.getElementById('clock-ymd');
//取得したinputが押されたときにバックグラウンドの色を変える
DEFAULT.addEventListener('change', function(){BACKGROUND.style.backgroundColor = '#ffffff';});
RED.addEventListener('change', function(){BACKGROUND.style.backgroundColor = '#ff0000';});
BLUE.addEventListener('change', function(){BACKGROUND.style.backgroundColor = '#0000ff';});
BLACK.addEventListener('change', function(){BACKGROUND.style.backgroundColor = '#000000';});
GREEN.addEventListener('change', function(){BACKGROUND.style.backgroundColor = '#00ff00';});

const TOGGLE_CFORMAT = document.getElementById('displayFormat-toggle');
const CLOCK_FORMAT = document.getElementById('displayFormat');
TOGGLE_CFORMAT.addEventListener('click', () => {
    if(CLOCK_FORMAT.style.display === 'none'){
        CLOCK_FORMAT.style.display = 'block';
        TOGGLE_CFORMAT.textContent = '▼Display Format';
    }else{
        CLOCK_FORMAT.style.display = 'none';
        TOGGLE_CFORMAT.textContent = '▶Display Format';
    }
});
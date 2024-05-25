const cssVars = [
    "border-highlight",
    "background",
    "background0",
    "background1",
    "background2",
    "background-neut",
    "text1",
    "tr-text1",
    "text2",
    "text3",
    "text4",
    "text-neut",
    "primary0",
    "primary1",
    "primary2",
    "primary3",
    "tr-primary3",
    "primary4",
    "primary-neut",
    "secondary1",
    "secondary2",
    "secondary3",
    "secondary-neut",
    "accent1",
    "tr-accent1",
    "accent2",
    "accent3",
    "accent4",
    "accent-neut",
    "gls-primary0",
    "gls-primary0-br",
    "gls-primary1",
    "gls-primary1-br",
    "gls-primary2",
    "gls-primary2-br",
    "gls-secondary1",
    "gls-secondary1-br",
    "gls-secondary2",
    "gls-secondary2-br",
    "gls-accent1",
    "gls-accent1-br",
];
const panels = [
    "background",
    "text",
    "primary",
    "secondary",
    "accent"
];
const rootTheme = document.querySelector(':root');

const exportModal = document.getElementById('export-modal');
const exportBtn = document.getElementById('export-btn');
const cssHolder = document.getElementById('css-holder');
const copyBtns = document.querySelectorAll('#export-modal>svg');

const colorInput = document.getElementById('color-input');

const backdrop = document.getElementById('backdrop');
const inputModal = document.getElementById('input-modal');
const colorPanels = document.querySelectorAll('.color-panel');

const parablob1 = document.getElementById('parablob1');
const parablob2 = document.getElementById('parablob2');
const parablob3 = document.getElementById('parablob3');
const parablob4 = document.getElementById('parablob4');

const panel = document.getElementById('panel');
const hideButton = document.getElementById('hide-panel');
const showButton = document.getElementById('show-panel');

let selectedColor = null;
let previousCssPanels = {};

//consts

let toggle = document.getElementById('theme_toggle');
let storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
    if (storedTheme === 'dark') {
        toggle.checked = true;
    }
    else {
        toggle.checked = false;
    }
}
toggle.addEventListener('click', function () {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'light';
    if (currentTheme === 'light') {
        targetTheme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
});
// theme switch

let storedPanel = localStorage.getItem('panel') || 'open';
if (storedPanel) {
    document.documentElement.setAttribute('data-panel', storedPanel)
    if (storedPanel === 'open') {
        panel.style.left = '0';
        showButton.style.left = '-20rem';
    }
    else {
        panel.style.left = '-20rem';
        showButton.style.left = '0';
    }
}
showButton.addEventListener('click', function () {
    document.documentElement.setAttribute('data-panel', 'open');
    localStorage.setItem('panel', 'open');
    panel.style.left = '0';
    showButton.style.left = '-20rem';
});
hideButton.addEventListener('click', function () {
    document.documentElement.setAttribute('data-panel', 'close');
    localStorage.setItem('panel', 'close');
    panel.style.left = '-20rem';
    showButton.style.left = '0';
});
// panel toggle

let hueLock = document.getElementById('hue_lock');
let storedHueLock = localStorage.getItem('hue') || 'unlocked';
if (storedHueLock) {
    document.documentElement.setAttribute('data-hue', storedHueLock)
    if (storedHueLock === 'locked') {
        hueLock.checked = true;
    }
    else {
        hueLock.checked = false;
    }
}
hueLock.addEventListener('click', function () {
    let currentLock = document.documentElement.getAttribute('data-hue');
    let targetLock = 'unlocked';
    if (currentLock === 'unlocked') {
        targetLock = 'locked';
    }
    document.documentElement.setAttribute('data-hue', targetLock);
    localStorage.setItem('hue', targetLock);
});
// hue toggle

let darkLock = document.getElementById('dark_lock');
let storedDarkLock = localStorage.getItem('dark') || 'unlocked';
if (storedDarkLock) {
    document.documentElement.setAttribute('data-dark', storedDarkLock)
    if (storedDarkLock === 'locked') {
        darkLock.checked = true;
    }
    else {
        darkLock.checked = false;
    }
}
darkLock.addEventListener('click', function () {
    let currentLock = document.documentElement.getAttribute('data-dark');
    let targetLock = 'unlocked';
    if (currentLock === 'unlocked') {
        targetLock = 'locked';
    }
    document.documentElement.setAttribute('data-dark', targetLock);
    localStorage.setItem('dark', targetLock);
});
// dark toggle

panels.forEach(panel => {
    rootTheme.style.setProperty('--' + panel + '-light', localStorage.getItem('--' + panel + '-light'));
    rootTheme.style.setProperty('--' + panel + '-dark', localStorage.getItem('--' + panel + '-dark'));
    rootTheme.style.setProperty('--' + panel + '-light-lit', localStorage.getItem('--' + panel + '-light-lit'));
    rootTheme.style.setProperty('--' + panel + '-dark-lit', localStorage.getItem('--' + panel + '-dark-lit'));
});

function updatePrevCssPanels() {
    previousCssPanels = {};
    for (let i = 0; i < rootTheme.style.length; i++) {
        const propertyName = rootTheme.style[i];
        previousCssPanels[propertyName] = rootTheme.style.getPropertyValue(propertyName);
    }
}
updatePrevCssPanels();
// color cookies

updateParallax();

function getScrollPercentage() {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    // Alternatively, you can use document.body for the scrollable element
    const scrolledPortion = scrollHeight - clientHeight - scrollTop;
    const scrollPerc = scrolledPortion / (scrollHeight - clientHeight);
    return 1 - Math.max(Math.min(scrollPerc, 1), 0);
}

function lerp(a, b, t, capped = true) {
    if (capped) {
        t = Math.max(Math.min(t, 1), 0);
    }
    return (1 - t) * a + t * b;
}

function updateParallax() {
    const scrollValue = getScrollPercentage();
    parablob1.style.top = lerp(80, -20, 2 * scrollValue) + '%';
    parablob2.style.top = lerp(90, -20, 1.5 * scrollValue) + '%';
    parablob3.style.top = lerp(95, -20, scrollValue) + '%';
    if (scrollValue >= 0.965 && scrollValue <= 1) {
        parablob4.style.bottom = 0 + '%';
        document.querySelector('footer').style.opacity = '1';
    } else {
        parablob4.style.bottom = -60 + '%';
        document.querySelector('footer').style.opacity = '0';
    }
}

document.addEventListener('scroll', (e) => { updateParallax(); });
// parallax

backdrop.addEventListener('click', event => {
    inputModal.classList.add('hide');
    exportModal.classList.add('hide');
    backdrop.classList.add('hide');
    selectedColor = null;
});
colorPanels.forEach(panel => {
    panel.addEventListener('click', event => {
        inputModal.classList.remove('hide');
        backdrop.classList.remove('hide');
        selectedColor = [].indexOf.call(colorPanels, panel);

    });
});

// EXPERIMENTAL
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

colorInput.addEventListener('input', event => {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let color = colorInput.value;
    let r = parseInt(color.substr(1, 2), 16);
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);
    let hsl = rgbToHsl(r, g, b);

    rootTheme.style.setProperty('--' + panels[selectedColor] + '-' + currentTheme, hsl[0] + 'deg ' + hsl[1] + '%');
    rootTheme.style.setProperty('--' + panels[selectedColor] + '-' + currentTheme + '-lit', hsl[2] / 50);
    localStorage.setItem('--' + panels[selectedColor] + '-' + currentTheme, hsl[0] + 'deg ' + hsl[1] + '%');
    localStorage.setItem('--' + panels[selectedColor] + '-' + currentTheme + '-lit', hsl[2] / 50);
});
// input-modal

exportBtn.addEventListener('click', event => {
    exportModal.classList.remove('hide');
    backdrop.classList.remove('hide');
    updatePrevCssPanels();
});

copyBtns[0].addEventListener('click', event => {
    copyBtns[0].style.color = 'var(--border-highlight)';
    navigator.clipboard.writeText(
        `:root {
        --shadow-elevation-low:
            0.5px 0.6px 0.8px hsl(var(--shadow-color) / 0.15),
            0.8px 1px 1.3px -1.6px hsl(var(--shadow-color) / 0.13),
            2px 2.5px 3.2px -3.2px hsl(var(--shadow-color) / 0.1);
        --shadow-elevation-medium:
            0.5px 0.6px 0.8px hsl(var(--shadow-color) / 0.16),
            1.4px 1.8px 2.3px -1.1px hsl(var(--shadow-color) / 0.14),
            3.8px 4.9px 6.3px -2.2px hsl(var(--shadow-color) / 0.12),
            10px 12.7px 16.4px -3.2px hsl(var(--shadow-color) / 0.1);
        --shadow-elevation-high:
            0.5px 0.6px 0.8px hsl(var(--shadow-color) / 0.14),
            2.3px 2.9px 3.7px -0.5px hsl(var(--shadow-color) / 0.14),
            4.5px 5.7px 7.4px -0.9px hsl(var(--shadow-color) / 0.13),
            7.9px 10px 12.9px -1.4px hsl(var(--shadow-color) / 0.12),
            13.5px 17.1px 22.1px -1.9px hsl(var(--shadow-color) / 0.11),
            22.1px 28.1px 36.2px -2.3px hsl(var(--shadow-color) / 0.1),
            34.8px 44.1px 56.9px -2.8px hsl(var(--shadow-color) / 0.09),
            52.3px 66.3px 85.5px -3.2px hsl(var(--shadow-color) / 0.09);
    
        /*///////////////////*/
    
        --txt-50:  var(--text-light) calc(95% * var(--text-light-lit));
        --txt-100: var(--text-light) calc(90% * var(--text-light-lit));
        --txt-200: var(--text-light) calc(80% * var(--text-light-lit));
        --txt-300: var(--text-light) calc(70% * var(--text-light-lit));
        --txt-400: var(--text-light) calc(60% * var(--text-light-lit));
        --txt-500: var(--text-light) calc(50% * var(--text-light-lit));
        --txt-600: var(--text-light) calc(40% * var(--text-light-lit));
        --txt-700: var(--text-light) calc(30% * var(--text-light-lit));
        --txt-800: var(--text-light) calc(20% * var(--text-light-lit));
        --txt-900: var(--text-light) calc(10% * var(--text-light-lit));
        --txt-950: var(--text-light) calc(5% * var(--text-light-lit));
    
        --txtd-50:  var(--text-dark) calc(95% * var(--text-dark-lit));
        --txtd-100: var(--text-dark) calc(90% * var(--text-dark-lit));
        --txtd-200: var(--text-dark) calc(80% * var(--text-dark-lit));
        --txtd-300: var(--text-dark) calc(70% * var(--text-dark-lit));
        --txtd-400: var(--text-dark) calc(60% * var(--text-dark-lit));
        --txtd-500: var(--text-dark) calc(50% * var(--text-dark-lit));
        --txtd-600: var(--text-dark) calc(40% * var(--text-dark-lit));
        --txtd-700: var(--text-dark) calc(30% * var(--text-dark-lit));
        --txtd-800: var(--text-dark) calc(20% * var(--text-dark-lit));
        --txtd-900: var(--text-dark) calc(10% * var(--text-dark-lit));
        --txtd-950: var(--text-dark) calc(5% * var(--text-dark-lit));
    
        /*///////////////////*/
    
        --bgr-50:  var(--background-light) calc(95% * var(--background-light-lit));
        --bgr-100: var(--background-light) calc(90% * var(--background-light-lit));
        --bgr-200: var(--background-light) calc(80% * var(--background-light-lit));
        --bgr-300: var(--background-light) calc(70% * var(--background-light-lit));
        --bgr-400: var(--background-light) calc(60% * var(--background-light-lit));
        --bgr-500: var(--background-light) calc(50% * var(--background-light-lit));
        --bgr-600: var(--background-light) calc(40% * var(--background-light-lit));
        --bgr-700: var(--background-light) calc(30% * var(--background-light-lit));
        --bgr-800: var(--background-light) calc(20% * var(--background-light-lit));
        --bgr-900: var(--background-light) calc(10% * var(--background-light-lit));
        --bgr-950: var(--background-light) calc(5% * var(--background-light-lit));
    
        --bgrd-50:  var(--background-dark) calc(95% * var(--background-dark-lit));
        --bgrd-100: var(--background-dark) calc(90% * var(--background-dark-lit));
        --bgrd-200: var(--background-dark) calc(80% * var(--background-dark-lit));
        --bgrd-300: var(--background-dark) calc(70% * var(--background-dark-lit));
        --bgrd-400: var(--background-dark) calc(60% * var(--background-dark-lit));
        --bgrd-500: var(--background-dark) calc(50% * var(--background-dark-lit));
        --bgrd-600: var(--background-dark) calc(40% * var(--background-dark-lit));
        --bgrd-700: var(--background-dark) calc(30% * var(--background-dark-lit));
        --bgrd-800: var(--background-dark) calc(20% * var(--background-dark-lit));
        --bgrd-900: var(--background-dark) calc(10% * var(--background-dark-lit));
        --bgrd-950: var(--background-dark) calc(5% * var(--background-dark-lit));
    
        /*///////////////////*/  
    
        --prim-50:  var(--primary-light) calc(95% * var(--primary-light-lit));
        --prim-100: var(--primary-light) calc(90% * var(--primary-light-lit));
        --prim-200: var(--primary-light) calc(80% * var(--primary-light-lit));
        --prim-300: var(--primary-light) calc(70% * var(--primary-light-lit));
        --prim-400: var(--primary-light) calc(60% * var(--primary-light-lit));
        --prim-500: var(--primary-light) calc(50% * var(--primary-light-lit));
        --prim-600: var(--primary-light) calc(40% * var(--primary-light-lit));
        --prim-700: var(--primary-light) calc(30% * var(--primary-light-lit));
        --prim-800: var(--primary-light) calc(20% * var(--primary-light-lit));
        --prim-900: var(--primary-light) calc(10% * var(--primary-light-lit));
        --prim-950: var(--primary-light) calc(5% * var(--primary-light-lit));
    
        --primd-50:  var(--primary-dark) calc(95% * var(--primary-dark-lit));
        --primd-100: var(--primary-dark) calc(90% * var(--primary-dark-lit));
        --primd-200: var(--primary-dark) calc(80% * var(--primary-dark-lit));
        --primd-300: var(--primary-dark) calc(70% * var(--primary-dark-lit));
        --primd-400: var(--primary-dark) calc(60% * var(--primary-dark-lit));
        --primd-500: var(--primary-dark) calc(50% * var(--primary-dark-lit));
        --primd-600: var(--primary-dark) calc(40% * var(--primary-dark-lit));
        --primd-700: var(--primary-dark) calc(30% * var(--primary-dark-lit));
        --primd-800: var(--primary-dark) calc(20% * var(--primary-dark-lit));
        --primd-900: var(--primary-dark) calc(10% * var(--primary-dark-lit));
        --primd-950: var(--primary-dark) calc(5% * var(--primary-dark-lit));
    
        /*///////////////////*/ 
        
        --scnd-50:  var(--secondary-light) calc(95% * var(--secondary-light-lit));
        --scnd-100: var(--secondary-light) calc(90% * var(--secondary-light-lit));
        --scnd-200: var(--secondary-light) calc(80% * var(--secondary-light-lit));
        --scnd-300: var(--secondary-light) calc(70% * var(--secondary-light-lit));
        --scnd-400: var(--secondary-light) calc(60% * var(--secondary-light-lit));
        --scnd-500: var(--secondary-light) calc(50% * var(--secondary-light-lit));
        --scnd-600: var(--secondary-light) calc(40% * var(--secondary-light-lit));
        --scnd-700: var(--secondary-light) calc(30% * var(--secondary-light-lit));
        --scnd-800: var(--secondary-light) calc(20% * var(--secondary-light-lit));
        --scnd-900: var(--secondary-light) calc(10% * var(--secondary-light-lit));
        --scnd-950: var(--secondary-light) calc(5% * var(--secondary-light-lit));
    
        --scndd-50:  var(--secondary-dark) calc(95% * var(--secondary-dark-lit));
        --scndd-100: var(--secondary-dark) calc(90% * var(--secondary-dark-lit));
        --scndd-200: var(--secondary-dark) calc(80% * var(--secondary-dark-lit));
        --scndd-300: var(--secondary-dark) calc(70% * var(--secondary-dark-lit));
        --scndd-400: var(--secondary-dark) calc(60% * var(--secondary-dark-lit));
        --scndd-500: var(--secondary-dark) calc(50% * var(--secondary-dark-lit));
        --scndd-600: var(--secondary-dark) calc(40% * var(--secondary-dark-lit));
        --scndd-700: var(--secondary-dark) calc(30% * var(--secondary-dark-lit));
        --scndd-800: var(--secondary-dark) calc(20% * var(--secondary-dark-lit));
        --scndd-900: var(--secondary-dark) calc(10% * var(--secondary-dark-lit));
        --scndd-950: var(--secondary-dark) calc(5% * var(--secondary-dark-lit));
        
        /*///////////////////*/
    
        --acnt-50:  var(--accent-light) calc(95% * var(--accent-light-lit));
        --acnt-100: var(--accent-light) calc(90% * var(--accent-light-lit));
        --acnt-200: var(--accent-light) calc(80% * var(--accent-light-lit));
        --acnt-300: var(--accent-light) calc(70% * var(--accent-light-lit));
        --acnt-400: var(--accent-light) calc(60% * var(--accent-light-lit));
        --acnt-500: var(--accent-light) calc(50% * var(--accent-light-lit));
        --acnt-600: var(--accent-light) calc(40% * var(--accent-light-lit));
        --acnt-700: var(--accent-light) calc(30% * var(--accent-light-lit));
        --acnt-800: var(--accent-light) calc(20% * var(--accent-light-lit));
        --acnt-900: var(--accent-light) calc(10% * var(--accent-light-lit));
        --acnt-950: var(--accent-light) calc(5% * var(--accent-light-lit));
    
        --acntd-50:  var(--accent-dark) calc(95% * var(--accent-dark-lit));
        --acntd-100: var(--accent-dark) calc(90% * var(--accent-dark-lit));
        --acntd-200: var(--accent-dark) calc(80% * var(--accent-dark-lit));
        --acntd-300: var(--accent-dark) calc(70% * var(--accent-dark-lit));
        --acntd-400: var(--accent-dark) calc(60% * var(--accent-dark-lit));
        --acntd-500: var(--accent-dark) calc(50% * var(--accent-dark-lit));
        --acntd-600: var(--accent-dark) calc(40% * var(--accent-dark-lit));
        --acntd-700: var(--accent-dark) calc(30% * var(--accent-dark-lit));
        --acntd-800: var(--accent-dark) calc(20% * var(--accent-dark-lit));
        --acntd-900: var(--accent-dark) calc(10% * var(--accent-dark-lit));
        --acntd-950: var(--accent-dark) calc(5% * var(--accent-dark-lit));
    }`
    );
    alert("Copied the code");
});
copyBtns[1].addEventListener('click', event => {
    copyBtns[1].style.color = 'var(--border-highlight)';
    navigator.clipboard.writeText(
        `:root[data-theme="light"] {
        --border-highlight: rgba(0, 0, 0, 0.2);
        --background: #fbfbfe;
        --background0: hsl(var(--bgr-600));
        --background1: hsl(var(--bgr-400));
        --background2: hsl(var(--bgr-200));
        --background-neut: hsl(var(--bgr-500));
        --text1: hsl(var(--txt-900));
        --tr-text1: hsl(var(--txt-900)/ 50%);
        --text2: hsl(var(--txt-900));
        --text3: hsl(var(--txt-950));
        --text4: hsl(var(--txt-50));
        --text-neut: hsl(var(--txt-500));
        --primary0: hsl(var(--prim-700));
        --primary1: hsl(var(--prim-600));
        --primary2: hsl(var(--prim-500));
        --primary3: hsl(var(--prim-300));
        --tr-primary3: hsl(var(--prim-300) / 0.2);
        --primary4: color-mix(in lab, hsl(var(--prim-200)), hsl(1deg 35% 80%));
        --primary-neut: hsl(var(--prim-500));
        --secondary1: hsl(var(--scnd-300));
        --secondary2: hsl(var(--scnd-500));
        --secondary3: hsl(var(--scnd-400));
        --secondary-neut: hsl(var(--scnd-500));
        --accent1: hsl(var(--acnt-500));
        --tr-accent1: hsl(var(--acnt-500)/ 0.3);
        --accent2: hsl(var(--acnt-100));
        --accent3: hsl(var(--acnt-500));
        --accent4: hsl(var(--acnt-200));
        --accent-neut: hsl(var(--acnt-500));
        --gls-primary0: hsl(var(--prim-700)/ 0.2);
        --gls-primary0-br: hsl(var(--prim-700)/ 0.3);
        --gls-primary1: hsl(var(--prim-600)/ 0.2);
        --gls-primary1-br: hsl(var(--prim-600)/ 0.3);
        --gls-primary2: hsl(var(--prim-500)/ 0.2);
        --gls-primary2-br: hsl(var(--prim-500)/ 0.3);
        --gls-secondary1: hsl(var(--scnd-300)/ 0.2);
        --gls-secondary1-br: hsl(var(--scnd-300)/ 0.3);
        --gls-secondary2: hsl(var(--scnd-500)/ 0.2);
        --gls-secondary2-br: hsl(var(--scnd-500)/ 0.3);
        --gls-accent1: hsl(var(--acnt-500)/ 0.2);
        --gls-accent1-br: hsl(var(--acnt-500)/ 0.3);
    }
    
    :root[data-theme="dark"] {
        --border-highlight: rgba(255, 255, 255, 0.2);
        --background: #0E1116;
        --background0: hsl(var(--bgrd-400));
        --background1: hsl(var(--bgrd-600));
        --background2: hsl(var(--bgrd-800));
        --background-neut: hsl(var(--bgrd-500));
        --text1: hsl(var(--txtd-50));
        --tr-text1: hsl(var(--txtd-50)/ 50%);
        --text2: hsl(var(--txtd-200));
        --text3: hsl(var(--txtd-900));
        --text4: hsl(var(--txtd-900));
        --text-neut: hsl(var(--txtd-500));
        --primary0: hsl(var(--primd-700));
        --primary1: hsl(var(--primd-600));
        --primary2: hsl(var(--primd-500));
        --primary3: hsl(var(--primd-300));
        --tr-primary3: hsl(var(--primd-300)/ 0.2);
        --primary4: color-mix(in lab, hsl(var(--primd-600)), hsl(1deg 35% 40%));
        --primary-neut: hsl(var(--primd-500));
        --secondary1: hsl(var(--scndd-400));
        --secondary2: hsl(var(--scndd-500));
        --secondary3: hsl(var(--scndd-600));
        --secondary-neut: hsl(var(--scndd-500));
        --accent1: hsl(var(--acntd-400));
        --tr-accent1: hsl(var(--acntd-400)/ 0.3);
        --accent2: hsl(var(--acntd-900));
        --accent3: hsl(var(--acntd-500));
        --accent4: hsl(var(--acntd-800));
        --accent-neut: hsl(var(--acntd-500));
        --gls-primary0: hsl(var(--primd-700)/ 0.2);
        --gls-primary0-br: hsl(var(--primd-700)/ 0.3);
        --gls-primary1: hsl(var(--primd-600)/ 0.2);
        --gls-primary1-br: hsl(var(--primd-600)/ 0.3);
        --gls-primary2: hsl(var(--primd-500)/ 0.2);
        --gls-primary2-br: hsl(var(--primd-500)/ 0.3);
        --gls-secondary1: hsl(var(--scndd-400)/ 0.2);
        --gls-secondary1-br: hsl(var(--scndd-400)/ 0.3);
        --gls-secondary2: hsl(var(--scndd-500)/ 0.2);
        --gls-secondary2-br: hsl(var(--scndd-500)/ 0.3);
        --gls-accent1: hsl(var(--acntd-400)/ 0.2);
        --gls-accent1-br: hsl(var(--acntd-400)/ 0.3);
    }`
    );
    alert("Copied the code");
});
// export-modal

function desaturate(variable) {
    resaturate();
    cssVars.forEach(element => {
        if (variable != element) {
            rootTheme.style.setProperty('--' + element, 'transparent');
        }
    });
    backdrop.style.opacity = '0';
    cssHolder.classList.remove('scroll');
    cssHolder.style.overflow = 'hidden';
}
function resaturate() {
    rootTheme.style = '';
    for (const property in previousCssPanels) {
        rootTheme.style.setProperty(property, previousCssPanels[property]);
    }
    backdrop.style.opacity = '1';
    cssHolder.classList.add('scroll');
    cssHolder.style.overflow = 'auto';
}
// color view
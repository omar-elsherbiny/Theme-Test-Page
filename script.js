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

const panel = document.getElementById('panel');
const hideButton = document.getElementById('hide-panel');
const showButton = document.getElementById('show-panel');
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
const parablob1 = document.getElementById('parablob1');
const parablob2 = document.getElementById('parablob2');
const parablob3 = document.getElementById('parablob3');
const parablob4 = document.getElementById('parablob4');
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
    if (scrollValue >= 0.975 && scrollValue <= 1) {
        parablob4.style.bottom = 0 + '%';
        document.querySelector('footer').style.opacity = '1';
    } else {
        parablob4.style.bottom = -60 + '%';
        document.querySelector('footer').style.opacity = '0';
    }
}

document.addEventListener('scroll', (e) => { updateParallax(); });
// parallax

const cssVars = [
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
const root_theme = document.querySelector(':root');
function desaturate(variable) {
    resaturate();
    cssVars.forEach(element => {
        if (variable != element) {
            root_theme.style.setProperty('--' + element, 'transparent');
        }
    })
}
function resaturate() {
    root_theme.style = '';
}
// color view

let selectedColor = null;
const backdrop = document.getElementById('backdrop');
const inputModal = document.getElementById('input-modal');
const colorPanels = document.querySelectorAll('.color-panel');

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

const panels = [
    "background",
    "text",
    "primary",
    "secondary",
    "accent"
];
const colorInput = document.getElementById('color-input');
colorInput.addEventListener('input', event => {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let color = colorInput.value;
    let r = parseInt(color.substr(1, 2), 16);
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);
    let hsl = rgbToHsl(r, g, b);
    root_theme.style.setProperty('--'+panels[selectedColor]+'-' + currentTheme, hsl[0] + 'deg ' + hsl[1] + '%');
});
// input-modal

const exportModal = document.getElementById('export-modal');
const exportBtn = document.getElementById('export-btn');
exportBtn.addEventListener('click', event => {
    exportModal.classList.remove('hide');
    backdrop.classList.remove('hide');
});
// export-modal
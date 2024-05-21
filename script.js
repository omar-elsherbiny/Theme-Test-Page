document.addEventListener('DOMContentLoaded', () => {
    /*let toggle = document.getElementById('theme_toggle');
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
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = 'light';
        if (currentTheme === 'light') {
            targetTheme = 'dark';
        }
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);
    });*/
    // theme switch

    const parablob1 = document.getElementById('parablob1');
    const parablob2 = document.getElementById('parablob2');
    const parablob3 = document.getElementById('parablob3');
    updateParallax();
});

function getScrollPercentage() {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    // Alternatively, you can use document.body for the scrollable element
    const scrolledPortion = scrollHeight - clientHeight - scrollTop;
    const scrollPerc = scrolledPortion / (scrollHeight - clientHeight);
    return 1 - Math.min(scrollPerc, 1);
}

function lerp(a,b,t) {
    return (1-t)*a + t*b;
}

function updateParallax() {
    const scrollValue = getScrollPercentage();
    parablob1.style.top = lerp(80, -20, 1.66*scrollValue) + "%";
    parablob2.style.top = lerp(100, -20, 1.33*scrollValue) + "%";
    parablob3.style.top = lerp(120, -20, scrollValue) + "%";
}

document.addEventListener("scroll", (e) => {
    updateParallax();
});
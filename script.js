document.addEventListener('DOMContentLoaded', function () {
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
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = 'light';
        if (currentTheme === 'light') {
            targetTheme = 'dark';
        }
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);
    });
    // theme switch

    const sliders = document.querySelectorAll('.slider');
    const knobs = document.querySelectorAll('.knob');
    const pointers = document.querySelectorAll('.slider_pointer');
    const centers = document.querySelectorAll('.slider_center');

    let dragging = false;
    let startX, startY;
    let ind;
    let angles = [];

    for (let i = 0; i < sliders.length; i++) { angles.push(0); }

    function getAngleFromEvent(event, slider) {
        const center = {
            x: slider.clientWidth / 2,
            y: slider.clientHeight / 2,
        };
        const clientX = event.clientX - slider.getBoundingClientRect().left;
        const clientY = event.clientY - slider.getBoundingClientRect().top;
        const angle = Math.atan2(clientY - center.y, clientX - center.x) * 180 / Math.PI;
        return (angle + 360) % 360; // Normalize angle to 0-360 degrees
    }

    function updateKnobPosition(angle, knob, slider) {
        const radius = slider.clientWidth / 2;
        const x = Math.cos(angle * Math.PI / 180) * radius + radius;
        const y = Math.sin(angle * Math.PI / 180) * radius + radius;
        knob.style.left = `${x}px`;
        knob.style.top = `${y}px`;
    }

    knobs.forEach(key => key.addEventListener('mousedown', (event) => {
        dragging = true;
        startX = event.clientX;
        startY = event.clientY;
        ind = Array.from(knobs).indexOf(key);
    }));

    document.addEventListener('mouseup', () => {
        dragging = false;
    });

    document.addEventListener('mousemove', (event) => {
        if (dragging) {
            const newAngle = getAngleFromEvent(event, sliders[ind]);
            updateKnobPosition(newAngle, knobs[ind], sliders[ind]);
            angles[ind] = Math.round(Number(newAngle) + 90) % 360;
            pointers[ind].style.rotate = angles[ind] + 'deg';
            centers[ind].style.filter = `hue-rotate(${angles[ind]}deg)`;

            startX = event.clientX;
            startY = event.clientY;
            console.log(angles)
        }
    });
    // circular sliders

    const vert_sliders = document.querySelectorAll('.vertical_slider input');
    vert_sliders.forEach(key => key.addEventListener('input', (event) => {
        key.style = `--lightness: ${key.value}%`;
    }))
    // vertical sliders
})
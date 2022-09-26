// Utils and Helpers
window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

window.on = window.addEventListener;

// 3D Slider implementation

// Page onload
window.on('load', () => {
    console.log('Page is loaded');

    console.log($('body'));
    console.log($$('.scene-frame'));
})
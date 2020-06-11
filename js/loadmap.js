
window.onload = function() {
    let width = screen.width;
    let height = 650;

    let staticMap = document.createElement('iframe');
    staticMap.setAttribute("src", `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29697.843720093166!2d2.3143645216229154!3d48.859290919669476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2z0JvRg9Cy0YA!5e0!3m2!1sru!2sru!4v1591885100922!5m2!1sru!2sru`);
    staticMap.setAttribute("width", `${width}`);
    staticMap.setAttribute("height", `${height}`);
    staticMap.setAttribute("frameborder", 0);
    staticMap.setAttribute("style", "border:0;");
    staticMap.setAttribute("allowfullscreen", '');
    staticMap.setAttribute("aria-hidden", "false");
    staticMap.setAttribute("tabindex", 0);

    document.querySelector('.map-wrapper').appendChild(staticMap);
}





// let map = document.createElement('script');

//     map.setAttribute('type', "text/javascript");
//     map.setAttribute('charset', "utf-8");
//     map.setAttribute('async', '');
//     map.setAttribute('src', "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac705e0574811991f71b44d18cb28fb16304254825500706324190dc506b177a5&amp;width=100%25&amp;height=650&amp;lang=ru_RU&amp;scroll=false");

//     document.querySelector('.map-wrapper').appendChild(map);
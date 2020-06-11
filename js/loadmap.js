
window.onload = function() {
    let map = document.createElement('script');

    map.setAttribute('type', "text/javascript");
    map.setAttribute('charset', "utf-8");
    map.setAttribute('async', '');
    map.setAttribute('src', "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac705e0574811991f71b44d18cb28fb16304254825500706324190dc506b177a5&amp;width=100%25&amp;height=650&amp;lang=ru_RU&amp;scroll=false");

    document.querySelector('.map-wrapper').appendChild(map);
}
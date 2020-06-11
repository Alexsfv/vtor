
window.onload = function() {
    let width = screen.width;
    let height = document.querySelector('.map-wrapper').offsetHeight;

    let map = document.createElement('iframe');
    map.setAttribute("src", `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29697.843720093166!2d2.3143645216229154!3d48.859290919669476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2z0JvRg9Cy0YA!5e0!3m2!1sru!2sru!4v1591885100922!5m2!1sru!2sru`);
    map.setAttribute("width", `${width}`);
    map.setAttribute("height", `${height}`);
    map.setAttribute("frameborder", 0);
    map.setAttribute("style", "border:0;");
    map.setAttribute("allowfullscreen", '');
    map.setAttribute("aria-hidden", "false");
    map.setAttribute("tabindex", 0);

    document.querySelector('.map-wrapper').appendChild(map);
}

window.addEventListener(`resize`, event => {
    let width = screen.width;
    let map = document.querySelector('iframe');
    map.setAttribute("width", `${width}`);
  }, false);
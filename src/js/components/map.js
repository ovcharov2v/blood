document.addEventListener('DOMContentLoaded', () => {
  ymaps.ready(init);
  function init() {
    const mapElement = document.querySelector("#map-station");
    if (!mapElement) return;

    const map = new ymaps.Map(mapElement, {
      center: [59.895348, 30.322300],
      zoom: 16,
      controls: [],
    });

    const iconPath = "/images/common/map-marker.png";

    const placemark = new ymaps.Placemark(
      [59.895348, 30.322300],
      {
        balloonContent: "Санкт-Петербургская городская станция переливания крови",
        hintContent: "Городская станция переливания крови",
      },
      {
        iconLayout: "default#image",
        iconImageHref: iconPath,
        iconImageSize: [40, 40], // Размер иконки (подберите под ваш SVG)
        iconImageOffset: [-20, -40], // Центрирование по точке (x, y)
      }
    );

    map.geoObjects.add(placemark);
  }
})
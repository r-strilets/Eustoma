// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 49.444016, lng: 27.000905 };
  let popupContent =
    '<span class="content"><b>Eustoma</b><br>Стоматологічний кабінет </span>' +
    '<br><span class="content">вул.Панаса Мирного 7/1</span>';

  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru,
  });
  // The marker, positioned at Uluru
  let marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

  let infowindow = new google.maps.InfoWindow({
    content: popupContent,
  });

  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });

  infowindow.open(map, marker);
}
// initMap();
window.initMap = initMap;

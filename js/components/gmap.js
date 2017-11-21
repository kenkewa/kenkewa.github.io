'use strict';

window.initMap = function() {
  var customMapType = new google.maps.StyledMapType(
    [
      {
        stylers: [{ saturation: -100 }, { lightness: 50 }, { visibility: 'simplified' }]
      },
      {
        elementType: 'labels',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'road',
        stylers: [{ color: '#bbb' }]
      }
    ],
    {
      name: 'Dublin'
    }
  );

  var image = new google.maps.MarkerImage(
    'img/widgets/gmap-pin.png',
    new google.maps.Size(48, 54),
    new google.maps.Point(0, 0),
    new google.maps.Point(24, 54)
  );

  var customMapTypeId = 'custom_style';

  var Meru = {
    lat: 0.057516,
    lng: 37.640876
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    center: Meru,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Meru</h1>' +
    '<div id="bodyContent">' +
    '<p> Meru-Nairobi Highway, <br> Kenya</p>' +
    '</div>' +
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  });

  var marker = new google.maps.Marker({
    map: map,
    clickable: true,
    icon: image,
    title: 'Meru',
    position: Meru
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
};

function initMap() {
  var MAP_STYLE_OPTIONS = [
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ lightness: 100 }, { visibility: "simplified" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ visibility: "on" }, { color: "#C6E2FF" }]
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [{ color: "#C5E3BF" }]
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [{ color: "#D1D1B8" }]
    }
  ];

  var MAP_OPTIONS = {
    center: { lat: -26.3012302, lng: -48.8511812 },
    zoom: 17,
    disableDefaultUI: true,
    scrollwheel: false,
    zoomControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "hybrid", "styled_map"]
    }
  };

  var $mapContainer = $(".js-map")[0];
  var styledMapType = new google.maps.StyledMapType(MAP_STYLE_OPTIONS);
  var map = new google.maps.Map($mapContainer, MAP_OPTIONS);

  new google.maps.Marker({ position: MAP_OPTIONS["center"], map: map });
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
}

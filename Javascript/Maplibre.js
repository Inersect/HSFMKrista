var mapLibre = new maplibregl.Map({
    container: 'mapLibre',
    style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
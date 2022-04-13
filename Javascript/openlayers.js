var map = new ol.Map({
  target: 'openLayers',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-0.140076, 51.502077]),
    zoom: 4
  })
});
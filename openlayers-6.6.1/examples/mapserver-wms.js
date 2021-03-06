var wmsSource = new ol.source.ImageWMS({
  url: 'http://127.0.0.1/cgi-bin/mapserv.exe?MAP=/ms4w/apps/openlayers-6.6.1/examples/map/wms-server.map',
  params: {'LAYERS': 'countries'},
  serverType: 'mapserver',
  crossOrigin: 'anonymous'
});

var wmsLayer = new ol.layer.Image({
  source: wmsSource
});

var view = new ol.View({
  center: [0, 0],
  zoom: 2
});

var map = new ol.Map({
  layers: [wmsLayer],
  target: 'map',
  view: view
});

map.on('singleclick', function(evt) {
  document.getElementById('info').innerHTML = '';
  var viewResolution = /** @type {number} */ (view.getResolution());
  var url = wmsSource.getFeatureInfoUrl(
      evt.coordinate, viewResolution, 'EPSG:3857',
      {'INFO_FORMAT': 'text/plain'});
  if (url) {
    fetch(url)
      .then(function (response) { return response.text(); })
      .then(function (html) {
        document.getElementById('info').innerHTML = html;
      });
  }
});

map.on('pointermove', function(evt) {
  if (evt.dragging) {
    return;
  }
  var pixel = map.getEventPixel(evt.originalEvent);
  var hit = map.forEachLayerAtPixel(pixel, function() {
    return true;
  });
  map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});
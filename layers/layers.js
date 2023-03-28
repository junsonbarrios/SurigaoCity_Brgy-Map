var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NEWBRGY_1 = new ol.format.GeoJSON();
var features_NEWBRGY_1 = format_NEWBRGY_1.readFeatures(json_NEWBRGY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEWBRGY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEWBRGY_1.addFeatures(features_NEWBRGY_1);
var lyr_NEWBRGY_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEWBRGY_1, 
                style: style_NEWBRGY_1,
                interactive: true,
                title: '<img src="styles/legend/NEWBRGY_1.png" /> NEW BRGY'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_NEWBRGY_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NEWBRGY_1];
lyr_NEWBRGY_1.set('fieldAliases', {'ID': 'ID', 'Barangays': 'Barangays', 'Areaha': 'Areaha', 'Area_sqm': 'Area_sqm', });
lyr_NEWBRGY_1.set('fieldImages', {'ID': 'TextEdit', 'Barangays': 'TextEdit', 'Areaha': 'TextEdit', 'Area_sqm': 'TextEdit', });
lyr_NEWBRGY_1.set('fieldLabels', {'ID': 'no label', 'Barangays': 'no label', 'Areaha': 'no label', 'Area_sqm': 'no label', });
lyr_NEWBRGY_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
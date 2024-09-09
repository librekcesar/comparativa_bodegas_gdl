var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gdl_dissolve_1 = new ol.format.GeoJSON();
var features_gdl_dissolve_1 = format_gdl_dissolve_1.readFeatures(json_gdl_dissolve_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gdl_dissolve_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gdl_dissolve_1.addFeatures(features_gdl_dissolve_1);
var lyr_gdl_dissolve_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gdl_dissolve_1, 
                style: style_gdl_dissolve_1,
                interactive: false,
                title: '<img src="styles/legend/gdl_dissolve_1.png" /> gdl_dissolve'
            });
var format_matriz_distancia_2 = new ol.format.GeoJSON();
var features_matriz_distancia_2 = format_matriz_distancia_2.readFeatures(json_matriz_distancia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matriz_distancia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matriz_distancia_2.addFeatures(features_matriz_distancia_2);
var lyr_matriz_distancia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_matriz_distancia_2, 
                style: style_matriz_distancia_2,
                interactive: true,
                title: '<img src="styles/legend/matriz_distancia_2.png" /> matriz_distancia'
            });
var format_centro_gdl_3 = new ol.format.GeoJSON();
var features_centro_gdl_3 = format_centro_gdl_3.readFeatures(json_centro_gdl_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centro_gdl_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centro_gdl_3.addFeatures(features_centro_gdl_3);
var lyr_centro_gdl_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centro_gdl_3, 
                style: style_centro_gdl_3,
                interactive: false,
                title: '<img src="styles/legend/centro_gdl_3.png" /> centro_gdl'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_gdl_dissolve_1.setVisible(true);lyr_matriz_distancia_2.setVisible(true);lyr_centro_gdl_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gdl_dissolve_1,lyr_matriz_distancia_2,lyr_centro_gdl_3];
lyr_gdl_dissolve_1.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', });
lyr_matriz_distancia_2.set('fieldAliases', {'InputID': 'InputID', 'TargetID': 'TargetID', 'Distance': 'Distance', 'direccion': 'direccion', 'nombre_bodega': 'nombre_bodega', 'dist_km': 'dist_km', });
lyr_centro_gdl_3.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', });
lyr_gdl_dissolve_1.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', });
lyr_matriz_distancia_2.set('fieldImages', {'InputID': 'TextEdit', 'TargetID': 'Range', 'Distance': 'TextEdit', 'direccion': 'TextEdit', 'nombre_bodega': 'TextEdit', 'dist_km': 'TextEdit', });
lyr_centro_gdl_3.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', });
lyr_gdl_dissolve_1.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', });
lyr_matriz_distancia_2.set('fieldLabels', {'InputID': 'header label', 'TargetID': 'header label', 'Distance': 'header label', 'direccion': 'header label', 'nombre_bodega': 'header label', 'dist_km': 'header label', });
lyr_centro_gdl_3.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', });
lyr_centro_gdl_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
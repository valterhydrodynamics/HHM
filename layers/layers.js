var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EstudosProjetosdeMHH_1 = new ol.format.GeoJSON();
var features_EstudosProjetosdeMHH_1 = format_EstudosProjetosdeMHH_1.readFeatures(json_EstudosProjetosdeMHH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstudosProjetosdeMHH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstudosProjetosdeMHH_1.addFeatures(features_EstudosProjetosdeMHH_1);
var lyr_EstudosProjetosdeMHH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstudosProjetosdeMHH_1, 
                style: style_EstudosProjetosdeMHH_1,
                popuplayertitle: "Estudos/Projetos de MH&H",
                interactive: true,
                title: '<img src="styles/legend/EstudosProjetosdeMHH_1.png" /> Estudos/Projetos de MH&H'
            });

lyr_OSMStandard_0.setVisible(true);lyr_EstudosProjetosdeMHH_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_EstudosProjetosdeMHH_1];
lyr_EstudosProjetosdeMHH_1.set('fieldAliases', {'COD': 'Código', 'NOME': 'Nome', 'REQUERENTE': 'Requerente', 'ANO': 'Ano', });
lyr_EstudosProjetosdeMHH_1.set('fieldImages', {'COD': 'Hidden', 'NOME': 'TextEdit', 'REQUERENTE': 'TextEdit', 'ANO': 'Range', });
lyr_EstudosProjetosdeMHH_1.set('fieldLabels', {'NOME': 'inline label - always visible', 'REQUERENTE': 'inline label - always visible', 'ANO': 'inline label - always visible', });
lyr_EstudosProjetosdeMHH_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
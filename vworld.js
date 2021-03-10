var layers = {};
layers['vworld'] = new ol.layer.Tile({
    title : 'VWorld Gray Map',
    visible : true,
    type : 'base',
    source : new ol.source.XYZ({
        url : 'http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png'
    })
});

// vectorSource 선언
var vectorSource = new ol.source.Vector({
    projection: 'EPSG:4326'
});

// vectorLayer 선언
var vectorLayer = new ol.layer.Vector({
    source: vectorSource
});
 
// 지도뿌리기
// var map = new ol.Map({

//     layers : [ layers['vworld'], vectorLayer ],
//     target : 'map',
//     view : new ol.View({
//         // center: ol.proj.transform([getLongi, getLati ], 'EPSG:4326', 'EPSG:3857'),
//         center: ol.proj.fromLonLat([127.5, 36]),        // center 좌표
//         zoom: 7,                                        // 초기화면 zoom level
//         minZoom: 6,                                        // 최소 zoom level
//         maxZoom: 19                                        // 최대 zoom level
//     })
// });

var map = new ol.Map({
    target: 'map',
    layers: [
       new ol.layer.Tile({
    source: new ol.source.XYZ({
    //Vworld Tile 변경
     url: 'http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png'
     })
     })
    ],
    view: new ol.View({
    center: [14126669.41589247, 4493404.190498611],
    zoom: 7,
    minZoom: 7,
    maxZoom: 19
    })
    });


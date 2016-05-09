var map;
var idInfoBoxAberto;
var infoBox = [];
var markers = [];

function initialize() {	
	var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
	
    var options = {
        zoom: 5,
		center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapview"), options);
}

initialize();

function openInfoBox(id, marker) {
	if (typeof(idInfoBoxAberto) == 'number' && typeof(infoBox[idInfoBoxAberto]) == 'object') {
		infoBox[idInfoBoxAberto].close();
	}

	infoBox[id].open(map, marker);
	idInfoBoxAberto = id;
}

function Points() {
	
	$.getJSON('back/points.json', function(points) {
		
		var latlngbounds = new google.maps.LatLngBounds();
		
		$.each(points, function(index, point) {
			
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(point.Latitude, point.Longitude),
				title: "Meu ponto personalizado! :-D",
				icon: 'images/job.png'
			});
			
			var myOptions = {
				content: "<p>" + point.Descricao + "</p>",
				pixelOffset: new google.maps.Size(-150, 0)
        	};

			infoBox[point.Id] = new InfoBox(myOptions);
			infoBox[point.Id].marker = marker;
			
			infoBox[point.Id].listener = google.maps.event.addListener(marker, 'click', function (e) {
				abrirInfoBox(ponto.Id, marker);
			});
			
			markers.push(marker);
			
			latlngbounds.extend(marker.position);
			
		});
		
		var markerCluster = new MarkerClusterer(map, markers);
		
		map.fitBounds(latlngbounds);
		
	});
	
}

Points();
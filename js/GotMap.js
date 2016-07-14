var info = document.getElementById('info');

var map = L.map('map').setView([17.641781,106.609538], 4);
	L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri - World Street Map',
}).addTo(map);

var markerairport = new L.markerClusterGroup({
		iconCreateFunction: function(cluster) {
			return new L.icon({
				iconUrl: 'images/airport1.png',
				iconSize: [30, 30],
			});
		}, 
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false,
	});
	markerairport.on('clusterclick', function (a) {
		a.layer.spiderfy();
	});
	var airportIcon = L.icon({
		iconUrl: 'images/airport1.png',
		iconSize: [30, 30],
		popupAnchor: [0, -28]
	});
	
	var airports = L.geoJson(airports, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: airportIcon});
        },
        onEachFeature : function (feature, layer) {
				console.log(feature);
				markerairport.on('click',function(e){
					e.layer.closePopup();
				var feature = e.layer.feature;
				var popupContent =  "<b>Airport Name :</b> " + feature.properties.name + 
									"</br><b>City :</b> " + feature.properties.city +
									"</br><b>Country :</b> " + feature.properties.country + 
									"</br><b>Code :</b> " + feature.properties.faa + 
									"</br><b>Elevation :</b> " + feature.properties.alt +
									"</br><b>Coordinate :</b> " + feature.geometry.coordinates +
									"</br><b>Links :</b> " +'<a href="https://en.wikipedia.org/wiki/'+feature.properties.name +'_Airport" " target="_blank">'+'Wikipedia'+'</a>'+', ' +'<a href="https://www.google.com.vn/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q='+feature.properties.name +'Airport" " target="_blank">'+'Google'+'</a>' ;
									
									 
				info.innerHTML = popupContent;
				});
		}
    })
	markerairport.addLayer(airports).addTo(map);
	map.on('move', empty);
	empty();
	function empty() {
		info.innerHTML = '';
		}
	var markertwitter = new L.markerClusterGroup({
		iconCreateFunction: function(cluster) {
			return new L.icon({
				iconUrl: 'images/twitter.png',
				iconSize: [24, 24],
			});
		}, 
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});
	markertwitter.on('clusterclick',function(b){
		b.layer.spiderfy();
	});
	var twitterIcon = L.icon({
		iconUrl: 'images/twitter.png',
		iconSize :[24,24],
		popupAnchor: [0,28]
	});
	var twitters = L.geoJson(twitters,{
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: twitterIcon});
		},
		onEachFeature : function (feature, layer) {
			console.log(feature);
			var popupContent = "Id : " + "@" + feature.id +"</br>Coordinate : " + feature.geometry.coordinates ;
			layer.bindPopup(popupContent);
		}
	})
	markertwitter.addLayer(twitters).addTo(map);


	loadFlightMarkers(map,flightDataPoints);
	function obj(ll) { return { y: ll[0], x: ll[1] }; }
	function loadFlightMarkers(map,dataPoints){
	L.FlightMarker = L.Marker.extend({
	  		options: { angle: 0 },
	  		_setPos: function(pos) {
	    				L.Marker.prototype._setPos.call(this, pos);
						if (L.DomUtil.TRANSFORM) {
						  // use the CSS transform rule if available
						  this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.angle + 'deg)';
						} else if (L.Browser.ie) {
						  // fallback for IE6, IE7, IE8
						  var rad = this.options.angle * L.LatLng.DEG_TO_RAD,
						  costheta = Math.cos(rad),
						  sintheta = Math.sin(rad);
						  this._icon.style.filter += ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', '+
													 'M11=' + costheta + ', M12=' + (-sintheta) + ', M21=' + sintheta + ', M22=' + costheta + ')';
						}
					 }
		});

	L.flightMarker = function(pos, options) {
		var obj = new L.FlightMarker(pos, options);
		return obj;
	};
	
	var markerFlights = new L.MarkerClusterGroup({
		iconCreateFunction: function(cluster) {
			return new L.icon({
				iconUrl: 'images/flight-24@2x.png',
				iconSize: [24, 24],
			});

		},
		//Disable all of the defaults:
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});
	

	
	markerFlights.on('clusterclick', function(a) {
		a.layer.spiderfy();
	});
	var key;
	for(key in dataPoints) {
		//var windData = dataPoints[i];
		var lat = dataPoints[key][2];
		var lng = dataPoints[key][1];
		var angle = dataPoints[key][3];
		var title = key;
		var marker = L.flightMarker(new L.LatLng(lng, lat),{
														  icon: L.icon({ iconUrl: 'images/flight-24@2x.png',
																		 iconSize: [24, 24], }),
														  draggable: false,
														  // title: key
														});
		var container = $('<div />');
		container.on('click', '.button', function(e) {
			// lightbox_open(1);
			popup3D(e);	
		});
		container.html("<center>" +
					   '<table border="0"><tr><td colspan="2" align="center"><b>'+dataPoints[key][13]+'</td></tr>' + 
					   '<table border="0"><tr><td colspan="2" align="center">' + '<img src="images/Aircraft/'+dataPoints[key][8]+'.jpg"  height="100" width="180">' + '</td></tr>' + 
					   '<table border="0"><tr><td colspan="2" align="center">'+'<a href="https://www.google.com.vn/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q='+dataPoints[key][13]+' '+dataPoints[key][11]+'" " target="_blank">'+'Click for more flight information'+'</a></td></tr>' +  
					   '<tr><td><b>Altitude:</b></td><td>' + dataPoints[key][4] + '&nbsp(feet)</td></tr>' + 
					   '<tr><td><b>Speed:</b></td><td>' + dataPoints[key][5] + '&nbsp(km/h)</td></tr>' +
					   '<tr><td><b>Coordinate:</b></td><td>' + dataPoints[key][2] + ', ' +dataPoints[key][1]+'</td></tr>' + 
					   '<tr><td><b>Model:</b></td><td>' + dataPoints[key][8] + '</td></tr>' + 
					   '<tr><td><b>Flightpath:</b></td><td>' + dataPoints[key][11] + '&nbsp&rarr;&nbsp' + dataPoints[key][12]+'</td></tr>' +
					   "</center>");
		marker.type = "Flignt";
		marker.bindPopup(container[0],{closeButton: true, minWidth: 50 });
		marker.options.angle = angle * (180 / Math.PI);	
		map.addLayer(marker);			
			//marker.addTo(map);
	}
	var t = L.terminator()({
				color: '#b3c2bf',
 				resolution: 5,
 			});
		t.addTo(map);
		setInterval(function(){updateTerminator(t)}, 500);
		function updateTerminator(t) {
  			var t2 = L.terminator();
  			t.setLatLngs(t2.getLatLngs());
  			t.redraw();
		}

}

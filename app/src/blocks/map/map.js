function initMap() {
	if (!$('.map').length) return;

	var customMapType = new google.maps.StyledMapType([
		{"elementType": "geometry", "stylers": [{"color": "#f5f5f5"} ] },
		{"elementType": "labels.icon", "stylers": [{"visibility": "off"} ] },
		{"elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] },
		{"elementType": "labels.text.stroke", "stylers": [{"color": "#f5f5f5"} ] },
		{"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{"color": "#bdbdbd"} ] },
		{"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#eeeeee"} ] },
		{"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] },
		{"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#e5e5e5"} ] },
		{"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] },
		{"featureType": "road", "elementType": "geometry", "stylers": [{"color": "#ffffff"} ] },
		{"featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] },
		{"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#dadada"} ] },
		{"featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] },
		{"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] },
		{"featureType": "transit.line", "elementType": "geometry", "stylers": [{"color": "#e5e5e5"} ] },
		{"featureType": "transit.station", "elementType": "geometry", "stylers": [{"color": "#eeeeee"} ] },
		{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#c9c9c9"} ] },
		{"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }
	], {
		name: 'Custom Style'
	});

	var customMapTypeId = 'custom_style';

	/* Точки */
	var dot1 = {lat: 59.740616, lng: 30.526411};
	var dot2 = {lat: 59.740616, lng: 30.526411};
	var dot3 = {lat: 59.740616, lng: 30.526411};
	/* ===== */

	/* Карты */
	if (document.getElementById('map1')) {
		var map1 = new google.maps.Map(document.getElementById('map1'), {
			zoom: 14,
			center: dot1,
			scrollwheel: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
			}
		});
		map1.mapTypes.set(customMapTypeId, customMapType);
		map1.setMapTypeId(customMapTypeId);
	}

	if (document.getElementById('map2')) {
		var map2 = new google.maps.Map(document.getElementById('map2'), {
			zoom: 14,
			center: dot2,
			scrollwheel: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
			}
		});
		map2.mapTypes.set(customMapTypeId, customMapType);
		map2.setMapTypeId(customMapTypeId);
	}

	if (document.getElementById('map3')) {
		var map3 = new google.maps.Map(document.getElementById('map3'), {
			zoom: 12,
			center: dot3,
			scrollwheel: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
			}
		});
		map3.mapTypes.set(customMapTypeId, customMapType);
		map3.setMapTypeId(customMapTypeId);
	}
	/* ===== */

	/* Образец карточки */
	var contentString =
		'<div class="colorless">'+
			'<a class="colorless__text colorless__text_full" href="#">'+
				'<div class="colorless__text-img colorless__text-img_img_1"></div>'+
				'<div class="colorless__i">'+
					'<h4 class="colorless__title">Gorigo</h4>'+
					'<p class="colorless__subtitle">Логистический комплекс</p>'+
					'<p class="colorless__address">Россия, Санкт-Петербург Горелово, Волхонское шоссе</p>'+
					'<p class="colorless__class">Класс</p>'+
					'<p class="colorless__letter">А</p>'+
					'<p class="colorless__more">Узнать больше</p>'+
				'</div>'+
			'</a>'+
		'</div>'
	;
	/* ================ */

	/* Рамка */
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	google.maps.event.addListener(infowindow, 'domready', function() {
		var iwOuter = $('.gm-style-iw');
		var iwBackground = iwOuter.prev();
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': '#000000 0px 1px 6px', 'z-index' : '1'});
		var iwCloseBtn = iwOuter.next();
		iwCloseBtn.css({
			opacity: '1',
			right: '15px',
			top: '5px',
			width: '27px',
			height: '27px',
			border: '7px solid #de0041',
			borderRadius: '13px',
			boxShadow: '0 0 5px #de0041',
			transition: '.3s ease'
		});
		iwCloseBtn.on('mouseenter', function(){
			$(this).css({
				opacity: '1',
				transform: 'scale(1.2)'
			});
		});
		iwCloseBtn.on('mouseleave', function(){
			$(this).css({
				opacity: '1',
				transform: 'scale(1)'
			});
		});
	});
	/* ===== */

	var image = 'img/marker.png';

	/* Маркеры */
	if (document.getElementById('map1')) {
		var marker1 = new google.maps.Marker({
			position: dot1,
			map: map1,
			icon: image,
			title: 'Объект 1',
			id: 'markerCard-1'
		});
		marker1.addListener('click', function() {
			infowindow.open(map1, marker1);
		});
	}

	if (document.getElementById('map2')) {
		var marker2 = new google.maps.Marker({
			position: dot2,
			map: map2,
			icon: image,
			title: 'Объект 2',
			id: 'markerCard-2'
		});
		marker2.addListener('click', function() {
			infowindow.open(map2, marker2);
		});
	}

	if (document.getElementById('map3')) {
		var marker3 = new google.maps.Marker({
			position: dot3,
			map: map3,
			icon: image,
			title: 'Контакты',
			id: 'contacts'
		});
		marker3.addListener('click', function() {
			infowindow.open(map3, marker3);
		});
	}
	/* ======= */
}
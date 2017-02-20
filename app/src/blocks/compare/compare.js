var
	$compare = $('.compare'), // Контейнер таблицы сравнения
	$comTable = $compare.find('table') // Сама таблица
;

$compare.jScrollPane({ // Инициализация кастомного ползунка
	autoReinitialise: true
});

var $comInner = $compare.find('.jspContainer'); // Внутренний контейнер

setTimeout(function() {
	$comInner.css('height', parseInt($comTable.css('height')) + 50);
}, 200);

$(window).on('resize', function() { // Поправляем высоту при ресайзе
	setTimeout(function() {
		$comInner.css('height', parseInt($comTable.css('height')) + 50);
	}, 200);
});

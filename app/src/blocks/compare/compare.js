var
	$compare = $('.compare'), // Контейнер таблицы сравнения
	$comTable = $compare.find('table') // Сама таблица
;

$compare.jScrollPane({ // Инициализация кастомного ползунка
	autoReinitialise: true
});

var $comInner = $compare.find('.jspContainer'); // Внутренний контейнер

$(window).on('resize', function() { // Поправляем высоту при ресайзе
	$comInner.css('height', parseInt($comTable.css('height')) + 50);
});

var
	$compare = $('.compare'); // Контейнер таблицы сравнения

$compare.perfectScrollbar(); // Кастомный ползунок

$(window).on('resize', function() {
	$compare.perfectScrollbar('update');
});
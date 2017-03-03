/* Таблица сравнения */
var
	$compare = $('.compare__i'); // Контейнер таблицы сравнения

$compare.perfectScrollbar(); // Кастомный ползунок

$(window).on('resize', function() {
	$compare.perfectScrollbar('update');
});
/* ========== */

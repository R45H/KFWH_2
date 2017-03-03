var
	$compare = $('.compare__i'), // Контейнер таблицы сравнения
	$double = $('.compare__titles'), // Таблица с фиксированными заголовками
	$origin = $('.compare__origin'); // Оригинальная таблица

$compare.perfectScrollbar(); // Кастомный ползунок

$(window).on('resize', function() {
	$compare.perfectScrollbar('update');
});
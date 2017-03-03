/* Модальное окно */
var
	sign = $('.sign'), // Модальное окно
	$input = 'form__input', // Класс инпута
	$header = $('.header')
;

sign.on('show.bs.modal', function() {
	$header.css('padding-right', '17px');
});

sign.on('shown.bs.modal', function() { // Фокус при открытии модалки
	$(this)
		.find('input:first')
		.focus()
	;
});

sign.on('hidden.bs.modal', function() { // При закрытии модалки возвращается контейнер входа и очищаются инпуты
	$(this)
		.find('.' + $input)
		.val('')
	;
	$header.css('padding-right', '0');
});
/* ========== */

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

/* Чекбокс, который блокирует кнопку "Отправить" */
sign.each(function() {
	var
		$this = $(this),
		$check = $this.find('input[type="checkbox"][data-check]'),
		$btn = $this.find('input[type="submit"][data-check]');

	$check.on('change', function() {
		$btn.toggleClass('button_inactive');
	});
});
/* ===== */
/* ========== */

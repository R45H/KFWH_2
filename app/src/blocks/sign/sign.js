var
	sign = $('.sign'), // Модальное окно
	$input = 'form__input' // Класс инпута
;

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
});
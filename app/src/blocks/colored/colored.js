/* Новости. Отображение картинки сверху на мобильном разрешении */
var
	cdMain = 'colored',
	cdText = cdMain + '__text',
	cdImg = cdMain + '__img',
	cdMoved = cdImg + '_moved',
	cdPoint = 500
;

if (window.innerWidth < cdPoint) {
	$('.' + cdText).each(function() {
		$(this)
			.next('.' + cdImg)
			.prependTo(this.parentNode)
			.addClass(cdMoved)
		;
	});
}

$(window).on('resize', function() {
	if (window.innerWidth < cdPoint) {
		$('.' + cdText).each(function() {
			$(this)
				.next('.' + cdImg)
				.prependTo(this.parentNode)
				.addClass(cdMoved)
			;
		});
	} else {
		$('.' + cdMoved).each(function() {
			$(this)
				.appendTo(this.parentNode)
				.removeClass(cdMoved)
			;
		});
	}
});
/* ========== */

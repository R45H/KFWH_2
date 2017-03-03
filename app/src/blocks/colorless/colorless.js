/* Чёрно-белые карточки. Отображение картинки сверху на мобильном разрешении */
var
	clMain = 'colorless',
	clText = clMain + '__text',
	clImg = clMain + '__img',
	clMoved = clImg + '_moved',
	clPoint = 500
;

if (window.innerWidth < clPoint) {
	$('.' + clText).each(function() {
		$(this)
			.next('.' + clImg)
			.prependTo(this.parentNode)
			.addClass(clMoved)
		;
	});
}

$(window).on('resize', function() {
	if (window.innerWidth < clPoint) {
		$('.' + clText).each(function() {
			$(this)
				.next('.' + clImg)
				.prependTo(this.parentNode)
				.addClass(clMoved)
			;
		});
	} else {
		$('.' + clMoved).each(function() {
			$(this)
				.appendTo(this.parentNode)
				.removeClass(clMoved)
			;
		});
	}
});
/* ========== */

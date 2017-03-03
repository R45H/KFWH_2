/* Статьи. Отображение картинки сверху на мобильном разрешении */
var
	arMain = 'article',
	arText = arMain + '__text',
	arImg = arMain + '__img',
	arMoved = arImg + '_moved',
	arPoint = 500
;

if (window.innerWidth < arPoint) {
	$('.' + arText).each(function() {
		$(this)
			.next('.' + arImg)
			.prependTo(this.parentNode)
			.addClass(arMoved)
		;
	});
}

$(window).on('resize', function() {
	if (window.innerWidth < arPoint) {
		$('.' + arText).each(function() {
			$(this)
				.next('.' + arImg)
				.prependTo(this.parentNode)
				.addClass(arMoved)
			;
		});
	} else {
		$('.' + arMoved).each(function() {
			$(this)
				.appendTo(this.parentNode)
				.removeClass(arMoved)
			;
		});
	}
});
/* ========== */

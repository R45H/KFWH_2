/* Перенос меню на две строчки на планшетных разрешениях */
var $headMenu = $('.header__menu'); // Меню в шапке

if (window.innerWidth < 1142) {
	$headMenu
		.find('.menu__item:nth-child(3)')
		.after('<br class="header__br">');
}

$(window).on('resize', function() {

	if (window.innerWidth < 1142) {
		if (!$('br').is('.header__br')) {
			$headMenu
				.find('.menu__item:nth-child(3)')
				.after('<br class="header__br">');
		}
	} else {
		$headMenu
			.find('.header__br')
			.remove();
	}
});

// Открытие бокового меню при клике на пункт меню
if($(".toggleLeftMenu").length > 0){
	$(".toggleLeftMenu").on("click", function(){
		$(".toggle").trigger("click");
		return false;
	});
}
/* ========== */

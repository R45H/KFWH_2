$(function() {
	var
		classBlock = 'button',
		classInactive = classBlock + '_inactive',
		$btn = $('.' + classBlock);

	$btn.on('click', function() {

		if ($(this).hasClass(classInactive)) {
			return false;
		}
	})	;
});
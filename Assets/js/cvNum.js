$('document').ready(function(){
	//Montre/cache les div en fonction des boutons (ou liens de la navbar)
	$('.caillouShowHide').click(function () {
		$('.lineBreak25').addClass('displayNone');
		$($(this).data('target')).removeClass('displayNone');
	});
	//Referme la navbar au clic d'un des liens
	$('.nav-item').click(function(){
		$('#navbarSupportedContent').removeClass('show');
	});
});
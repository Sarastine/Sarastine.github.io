$('document').ready(function(){
	//Montre/cache les div en fonction des boutons (ou liens de la navbar)
	$('.caillouShowHide').click(function () {
		$('.lineBreak25').addClass('displayNone');
		$($(this).data('target')).removeClass('displayNone');
		//Affiche titre de la div active
		$('#navbarTitle').text($(this).text());
	});
	//Referme la navbar au clic d'un des liens
	$('.nav-item').click(function(){
		$('#navbarSupportedContent').removeClass('show');
		//$('html,body').animate({scrollTop: $('#YOUPLABOUM').offset().top}, 'slow');// Euh...?
	});
	//Affiche la page contact au chargement
	$('#buttonContact').click();
});
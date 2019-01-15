//$('document').ready(function(){

	function displayShow(div) {
	    document.getElementById('caillouPresentation').style.display = "none";
	    document.getElementById('caillouCompetences').style.display = "none";
	    document.getElementById('caillouFormation').style.display = "none";
	    document.getElementById('caillouExperiences').style.display = "none";
	    document.getElementById('caillouContact').style.display = "none";
	    document.getElementById(div).style.display = "block";
	}

	$('.nav-item').click(function(){
		$('#navbarSupportedContent').removeClass('show');
	});

	/*$('#jqueryPresentation').click(displayShow('caillouPresentation'));

	function yoloipédique(){
		$('.TEST').css('color','yellow');
	}

	$('.TEST').click(yoloipédique());*/
//});
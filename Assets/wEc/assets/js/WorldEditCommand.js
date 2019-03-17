$(function () {
	var caillouRaceBool = false;
	var caillouReplaceBool = false;
	var command = "";
	$('.caillouCheckbox,#caillouMessageBox').hide();
	if ($("#commandReplace").prop('checked')) {
		$('.caillouCheckbox').show();
		$('.caillouLimit').hide();
		$('#blendBlocksButton').text('Blocs à remplacer').removeClass('btn-success btn-danger').addClass('btn-warning');
		$('#caillouMessageBox').show();
		$('#ratesTotal').hide();
	}
	//Fonction Mise à jour du taux total
	function ratesTotalSum() {
		var ratesTotal = 0;
		$('.totalPercent').each(function() {
			ratesTotal += Number($(this).val());
		});
		$('#totalPercent').text(ratesTotal);
		if (ratesTotal < 95 || ratesTotal > 105) {
			$('#blendBlocksButton').removeClass('btn-success btn-warning').addClass('btn-danger');
		} else if (ratesTotal == 100) {
			$('#blendBlocksButton').removeClass('btn-danger btn-warning').addClass('btn-success');
		} else {
			$('#blendBlocksButton').removeClass('btn-success btn-danger').addClass('btn-warning');
		}
	}
	//Fonction Générer la commande
	function generateCommand() {
		if (!caillouReplaceBool) {
			command = "";
			if ($('#commandSet').prop('checked')) {
				command = command + "//set ";
				generateMix();
			} else if ($('#commandBr').prop('checked')) {
				command = command + "/br cyl ";
				generateMix();
			} else if ($('#commandReplace').prop('checked')) {
				command = command + "//replace ";
				generateList();
				if ($('#blendBlocksButton').text() == 'Nouvelle sélection') {
					resetPercent();
					$('#blendBlocksButton').text('Blocs à remplacer').removeClass('btn-success btn-danger').addClass('btn-warning');
				} else {
					resetPercent();
					$('#blendBlocksButton').text('Terminer la commande et la copier').removeClass('btn-success btn-danger').addClass('btn-warning');
					$('#caillouMessageBox').text('Sélectionnez les blocs remplaçants');
					caillouReplaceBool = true;
				}
			}
			command = command.substring(0,command.length - 1);
			if ($('#commandBr').prop('checked')) {
				command = command + " " + $('#radius').val();
			}
			$('#blendBlocks').val(command);
		} else {
			command = command + " ";
			generateList();
			command = command.substring(0,command.length - 1);
			$('#blendBlocks').val(command);
			command = "";
			resetPercent();
			$('#blendBlocksButton').text('Nouvelle sélection').removeClass('btn-danger btn-warning').addClass('btn-success');
			$('#caillouMessageBox').text('La commande a été copiée');
			caillouReplaceBool = false;
		}
	}
	//Sous-fonction Générer le mélange (non fonctionnelle (usage command en dehors de generateCommand ?))
	function generateMix() {
		$('.totalPercent').each(function() {
			if ($(this).val() > 0 && $(this).val() < 101) {
				command = command + $(this).val() + "%" + $(this).attr('data-idBloc') + ",";
			}
		});
	}
	//Sous-fonction Générer la liste
	function generateList() {
		$('.caillouCheckbox').each(function() {
			if ($(this).prop('checked')) {
				command = command + $(this).attr('data-idBloc') + ",";
			}
		});
	}
	//Fonction Copier la commande dans le presse papier
	function copyToClipboard() {
		var copyText = document.querySelector("#blendBlocks");
		copyText.select();
		document.execCommand("copy");
	}
	//Fonction Reset
	function resetPercent() {
		$('.totalPercent').val("");
		$('.caillouCheckbox').prop('checked', false);
		ratesTotalSum();
	}

	//Appel mise à jour du taux total
	$('.totalPercent').keyup(ratesTotalSum);
	
	//Alterner checkbox et inputs
	$('input[name="whichCommand"]').change(function() {
		if ($("#commandReplace").prop('checked')) {
			$('.caillouCheckbox').show();
			$('.caillouLimit').hide();
			$('#blendBlocksButton').text('Blocs à remplacer').removeClass('btn-success btn-danger').addClass('btn-warning');
			$('#caillouMessageBox').show().text('Sélectionnez les blocs à remplacer');
			$('#ratesTotal').hide();
		} else {
			$('.caillouCheckbox').hide();
			$('.caillouLimit').show();
			$('#blendBlocksButton').text('Générer et copier').removeClass('btn-success btn-warning').addClass('btn-success');
			$('#caillouMessageBox').hide();
			$('#ratesTotal').show();
		}
	});
	//Bouton Copier la commande
	$('#copyCommand').click(copyToClipboard);
	//Bouton Générer et copier la commande
	$('#blendBlocksButton').click(function() {
		generateCommand();
		copyToClipboard();
	});
	//Bouton reset
	$('#reset').click(resetPercent);
	//Bouton course de Caillou
	$('#caillouRace').click(function() {
		if (!caillouRaceBool) {
			$('.caillouSorting').hide();
			$('.caillouRace').show();
			resetPercent();
			caillouRaceBool = true;
		} else {
			$('.caillouSorting').show();
			caillouRaceBool = false;
		}
	});
});
$(function () {
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
		var command = "";
		if ($('#commandSet').prop('checked')) {
			command = command + "//set ";
		} else if ($('#commandBr').prop('checked')) {
			command = command + "/br cyl ";
		}
		$('.totalPercent').each(function() {
			if ($(this).val() > 0 && $(this).val() < 101) {
				command = command + $(this).val() + "%" + $(this).attr('data-idBloc') + ",";
			}
		});
		command = command.substring(0,command.length - 1);
		if ($('#commandBr').prop('checked')) {
			command = command + " " + $('#radius').val();
		}
		$('#blendBlocks').val(command);
	}
	//Fonction Copier la commande dans le presse papier
	function copyToClipboard() {
		var copyText = document.querySelector("#blendBlocks");
		copyText.select();
		document.execCommand("copy");
	}

	//Appel mise à jour du taux total
	$('.totalPercent').keyup(ratesTotalSum);

	//Bouton Générer la commande
	$('#copyCommand').click(copyToClipboard);
	//Bouton Copier la commande
	$('#blendBlocksButton').click(function() {
		generateCommand();
		copyToClipboard();
	});
	//Bouton reset
	$('#reset').click(function() {
		$('.totalPercent').val("");
		ratesTotalSum();
	});
});
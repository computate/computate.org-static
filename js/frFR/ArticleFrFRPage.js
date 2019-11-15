
// Recherche //

function rechercheArticle($formulaireFiltres, success, error) {
	var filtres = rechercheArticleFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheArticleVals(filtres, success, error);
}

function rechercheArticleFiltres($formulaireFiltres) {
	var filtres = [];

	var filtreCoursNumero = $formulaireFiltres.find('.valeurCoursNumero').val();
	if(filtreCoursNumero != null && filtreCoursNumero !== '')
		filtres.push({ name: 'fq', value: 'coursNumero:' + filtreCoursNumero });

	var filtreEstCours = $formulaireFiltres.find('.valeurEstCours').prop('checked');
	if(filtreEstCours != null && filtreEstCours === true)
		filtres.push({ name: 'fq', value: 'estCours:' + filtreEstCours });

	var filtreEstLecon = $formulaireFiltres.find('.valeurEstLecon').prop('checked');
	if(filtreEstLecon != null && filtreEstLecon === true)
		filtres.push({ name: 'fq', value: 'estLecon:' + filtreEstLecon });

	var filtreEstArticle = $formulaireFiltres.find('.valeurEstArticle').prop('checked');
	if(filtreEstArticle != null && filtreEstArticle === true)
		filtres.push({ name: 'fq', value: 'estArticle:' + filtreEstArticle });

	var filtreLeconNumero = $formulaireFiltres.find('.valeurLeconNumero').val();
	if(filtreLeconNumero != null && filtreLeconNumero !== '')
		filtres.push({ name: 'fq', value: 'leconNumero:' + filtreLeconNumero });

	var filtreArticleH1_enUS = $formulaireFiltres.find('.valeurArticleH1_enUS').val();
	if(filtreArticleH1_enUS != null && filtreArticleH1_enUS !== '')
		filtres.push({ name: 'fq', value: 'articleH1_enUS:' + filtreArticleH1_enUS });

	var filtreArticleH1_frFR = $formulaireFiltres.find('.valeurArticleH1_frFR').val();
	if(filtreArticleH1_frFR != null && filtreArticleH1_frFR !== '')
		filtres.push({ name: 'fq', value: 'articleH1_frFR:' + filtreArticleH1_frFR });

	var filtreArticleH2_enUS = $formulaireFiltres.find('.valeurArticleH2_enUS').val();
	if(filtreArticleH2_enUS != null && filtreArticleH2_enUS !== '')
		filtres.push({ name: 'fq', value: 'articleH2_enUS:' + filtreArticleH2_enUS });

	var filtreArticleH2_frFR = $formulaireFiltres.find('.valeurArticleH2_frFR').val();
	if(filtreArticleH2_frFR != null && filtreArticleH2_frFR !== '')
		filtres.push({ name: 'fq', value: 'articleH2_frFR:' + filtreArticleH2_frFR });

	var filtreArticleCree = $formulaireFiltres.find('.valeurArticleCree').val();
	if(filtreArticleCree != null && filtreArticleCree !== '')
		filtres.push({ name: 'fq', value: 'articleCree:' + filtreArticleCree });

	var filtrePageUri_enUS = $formulaireFiltres.find('.valeurPageUri_enUS').val();
	if(filtrePageUri_enUS != null && filtrePageUri_enUS !== '')
		filtres.push({ name: 'fq', value: 'pageUri_enUS:' + filtrePageUri_enUS });

	var filtrePageUri_frFR = $formulaireFiltres.find('.valeurPageUri_frFR').val();
	if(filtrePageUri_frFR != null && filtrePageUri_frFR !== '')
		filtres.push({ name: 'fq', value: 'pageUri_frFR:' + filtrePageUri_frFR });

	var filtrePageImageUri_enUS = $formulaireFiltres.find('.valeurPageImageUri_enUS').val();
	if(filtrePageImageUri_enUS != null && filtrePageImageUri_enUS !== '')
		filtres.push({ name: 'fq', value: 'pageImageUri_enUS:' + filtrePageImageUri_enUS });

	var filtrePageImageUri_frFR = $formulaireFiltres.find('.valeurPageImageUri_frFR').val();
	if(filtrePageImageUri_frFR != null && filtrePageImageUri_frFR !== '')
		filtres.push({ name: 'fq', value: 'pageImageUri_frFR:' + filtrePageImageUri_frFR });

	var filtrePageCree = $formulaireFiltres.find('.valeurPageCree').val();
	if(filtrePageCree != null && filtrePageCree !== '')
		filtres.push({ name: 'fq', value: 'pageCree:' + filtrePageCree });

	var filtrePageH1 = $formulaireFiltres.find('.valeurPageH1').val();
	if(filtrePageH1 != null && filtrePageH1 !== '')
		filtres.push({ name: 'fq', value: 'pageH1:' + filtrePageH1 });

	var filtrePageH2 = $formulaireFiltres.find('.valeurPageH2').val();
	if(filtrePageH2 != null && filtrePageH2 !== '')
		filtres.push({ name: 'fq', value: 'pageH2:' + filtrePageH2 });

	var filtrePageH3 = $formulaireFiltres.find('.valeurPageH3').val();
	if(filtrePageH3 != null && filtrePageH3 !== '')
		filtres.push({ name: 'fq', value: 'pageH3:' + filtrePageH3 });

	var filtrePageTitre = $formulaireFiltres.find('.valeurPageTitre').val();
	if(filtrePageTitre != null && filtrePageTitre !== '')
		filtres.push({ name: 'fq', value: 'pageTitre:' + filtrePageTitre });
	return filtres;
}

function rechercheArticleVals(filtres, success, error) {
	$.ajax({
		url: '/api/article?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// GET //

function getArticle(pk) {
	$.ajax({
		url: '/api/article/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function websocketArticle() {
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {
		eventBus.registerHandler('websocketArticle', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-university w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier articles');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			$('.box-' + id).remove();
			if(numPATCH < numFound)
				$('.w3-content').append($box);
		});
	}
}

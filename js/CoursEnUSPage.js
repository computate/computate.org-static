
// Recherche //

/**
 */
function rechercheCours($formulaireFiltres) {
	var filtres = [];

	var filtreCoursNumero = $formulaireFiltres.find('.valeurCoursNumero').val();
	if(filtreCoursNumero != null && filtreCoursNumero !== '')
		filtres.push({ name: 'fq', value: 'coursNumero:' + filtreCoursNumero });

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

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

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
	if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
		filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

	var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
	if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
		filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

	var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
	if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
		filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });
	$.ajax({
		url: '/api/cours?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: function( data, textStatus, jQxhr ) {
			$.each( valeurs, function( key, value ) {
				$formulaireValeurs.find('.' + key).removeClass('lueurErreur');
				$formulaireValeurs.find('.' + key).addClass('lueurSucces');
			});
		}
		, error: function( jqXhr, textStatus, errorThrown ) {
			$.each( valeurs, function( key, value ) {
				$formulaireValeurs.find('.' + key).removeClass('lueurSucces');
				$formulaireValeurs.find('.' + key).addClass('lueurErreur');
			});
		}
	});
}

// GET //

/**
 */
function getCours(pk) {
	$.ajax({
		url: '/api/cours/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: function( data, textStatus, jQxhr ) {
			$.each( valeurs, function( key, value ) {
				$formulaireValeurs.find('.' + key).removeClass('lueurErreur');
				$formulaireValeurs.find('.' + key).addClass('lueurSucces');
			});
		}
		, error: function( jqXhr, textStatus, errorThrown ) {
			$.each( valeurs, function( key, value ) {
				$formulaireValeurs.find('.' + key).removeClass('lueurSucces');
				$formulaireValeurs.find('.' + key).addClass('lueurErreur');
			});
		}
	});
}


// Recherche //

/**
 */
function rechercheC001($formulaireFiltres) {
	var filtres = [];

	var filtreCoursNumero = $formulaireFiltres.find('.valeurCoursNumero').val();
	if(filtreCoursNumero != null && filtreCoursNumero !== '')
		filtres.push({ name: 'fq', value: 'coursNumero:' + filtreCoursNumero });

	var filtreSiteNomDomaine = $formulaireFiltres.find('.valeurSiteNomDomaine').val();
	if(filtreSiteNomDomaine != null && filtreSiteNomDomaine !== '')
		filtres.push({ name: 'fq', value: 'siteNomDomaine:' + filtreSiteNomDomaine });

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
	if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
		filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

	var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
	if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
		filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

	var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
	if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
		filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

	var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
	if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
		filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

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
	$.ajax({
		url: '?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: function( data, textStatus, jQxhr ) {
		}
		, error: function( jqXhr, textStatus, errorThrown ) {
		}
	});
}

// POST //

/**
 */
function postC001($formulaireValeurs) {
	var valeurs = {};

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		valeurs['supprime'] = valeurSupprime;

	var valeurCoursNumero = $formulaireValeurs.find('.valeurCoursNumero').val();
	if(valeurCoursNumero != null && valeurCoursNumero !== '')
		valeurs['coursNumero'] = valeurCoursNumero;

	var valeurLeconDescription = $formulaireValeurs.find('.valeurLeconDescription').val();
	if(valeurLeconDescription != null && valeurLeconDescription !== '')
		valeurs['leconDescription'] = valeurLeconDescription;

	var valeurArticleDescription = $formulaireValeurs.find('.valeurArticleDescription').val();
	if(valeurArticleDescription != null && valeurArticleDescription !== '')
		valeurs['articleDescription'] = valeurArticleDescription;

	var valeurSiteNomDomaine = $formulaireValeurs.find('.valeurSiteNomDomaine').val();
	if(valeurSiteNomDomaine != null && valeurSiteNomDomaine !== '')
		valeurs['siteNomDomaine'] = valeurSiteNomDomaine;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		valeurs['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		valeurs['modifie'] = valeurModifie;

	var valeurLeconNumero = $formulaireValeurs.find('.valeurLeconNumero').val();
	if(valeurLeconNumero != null && valeurLeconNumero !== '')
		valeurs['leconNumero'] = valeurLeconNumero;

	$.ajax({
		url: ''
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(valeurs)
		, success: function( data, textStatus, jQxhr ) {
		}
		, error: function( jqXhr, textStatus, errorThrown ) {
		}
	});
}

// PATCH //

/**
 * Modifier un ou plusiers courses sans valuers qui change, 
 * ou changer des valeurs pour un ou plusiers le cours n ° 1. 
 * @param params: [ "q=*:*", "fq=pk:1", "sort=pk asc", "rows=1", "fl=pk" ]
 *        Une liste des opérations de recherche sur des courses 
 *        pour rechercher "q=*:*", filtrer "fq=pk:1", trier "sort=pk desc", 
 *        limiter les résultats "rows=1", ou limiter les valeurs "fl=pk". 
 * @param valeurs Noms des champs et valeurs à changer selon les filtres fq. 
 *           Example: { pk: 1 }
 */
function patchC001($formulaireFiltres, $formulaireValeurs) {
	var filtres = [];

	var filtreCoursNumero = $formulaireFiltres.find('.valeurCoursNumero').val();
	if(filtreCoursNumero != null && filtreCoursNumero !== '')
		filtres.push({ name: 'fq', value: 'coursNumero:' + filtreCoursNumero });

	var filtreSiteNomDomaine = $formulaireFiltres.find('.valeurSiteNomDomaine').val();
	if(filtreSiteNomDomaine != null && filtreSiteNomDomaine !== '')
		filtres.push({ name: 'fq', value: 'siteNomDomaine:' + filtreSiteNomDomaine });

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
	if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
		filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

	var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
	if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
		filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

	var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
	if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
		filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

	var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
	if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
		filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

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

	var valeurs = {};

	var setSupprime = $formulaireValeurs.find('.setSupprime').prop('checked');
	if(setSupprime != null && setSupprime !== '')
		valeurs['setSupprime'] = setSupprime;
	var addSupprime = $formulaireValeurs.find('.addSupprime').prop('checked');
	if(addSupprime != null && addSupprime !== '')
		valeurs['addSupprime'] = addSupprime;
	var removeSupprime = $formulaireValeurs.find('.removeSupprime').prop('checked');
	if(removeSupprime != null && removeSupprime !== '')
		valeurs['removeSupprime'] = removeSupprime;

	var setCoursNumero = $formulaireValeurs.find('.setCoursNumero').val();
	if(setCoursNumero != null && setCoursNumero !== '')
		valeurs['setCoursNumero'] = setCoursNumero;
	var addCoursNumero = $formulaireValeurs.find('.addCoursNumero').val();
	if(addCoursNumero != null && addCoursNumero !== '')
		valeurs['addCoursNumero'] = addCoursNumero;
	var removeCoursNumero = $formulaireValeurs.find('.removeCoursNumero').val();
	if(removeCoursNumero != null && removeCoursNumero !== '')
		valeurs['removeCoursNumero'] = removeCoursNumero;

	var setLeconDescription = $formulaireValeurs.find('.setLeconDescription').val();
	if(setLeconDescription != null && setLeconDescription !== '')
		valeurs['setLeconDescription'] = setLeconDescription;
	var addLeconDescription = $formulaireValeurs.find('.addLeconDescription').val();
	if(addLeconDescription != null && addLeconDescription !== '')
		valeurs['addLeconDescription'] = addLeconDescription;
	var removeLeconDescription = $formulaireValeurs.find('.removeLeconDescription').val();
	if(removeLeconDescription != null && removeLeconDescription !== '')
		valeurs['removeLeconDescription'] = removeLeconDescription;

	var setArticleDescription = $formulaireValeurs.find('.setArticleDescription').val();
	if(setArticleDescription != null && setArticleDescription !== '')
		valeurs['setArticleDescription'] = setArticleDescription;
	var addArticleDescription = $formulaireValeurs.find('.addArticleDescription').val();
	if(addArticleDescription != null && addArticleDescription !== '')
		valeurs['addArticleDescription'] = addArticleDescription;
	var removeArticleDescription = $formulaireValeurs.find('.removeArticleDescription').val();
	if(removeArticleDescription != null && removeArticleDescription !== '')
		valeurs['removeArticleDescription'] = removeArticleDescription;

	var setSiteNomDomaine = $formulaireValeurs.find('.setSiteNomDomaine').val();
	if(setSiteNomDomaine != null && setSiteNomDomaine !== '')
		valeurs['setSiteNomDomaine'] = setSiteNomDomaine;
	var addSiteNomDomaine = $formulaireValeurs.find('.addSiteNomDomaine').val();
	if(addSiteNomDomaine != null && addSiteNomDomaine !== '')
		valeurs['addSiteNomDomaine'] = addSiteNomDomaine;
	var removeSiteNomDomaine = $formulaireValeurs.find('.removeSiteNomDomaine').val();
	if(removeSiteNomDomaine != null && removeSiteNomDomaine !== '')
		valeurs['removeSiteNomDomaine'] = removeSiteNomDomaine;

	var setCree = $formulaireValeurs.find('.setCree').val();
	if(setCree != null && setCree !== '')
		valeurs['setCree'] = setCree;
	var addCree = $formulaireValeurs.find('.addCree').val();
	if(addCree != null && addCree !== '')
		valeurs['addCree'] = addCree;
	var removeCree = $formulaireValeurs.find('.removeCree').val();
	if(removeCree != null && removeCree !== '')
		valeurs['removeCree'] = removeCree;

	var setModifie = $formulaireValeurs.find('.setModifie').val();
	if(setModifie != null && setModifie !== '')
		valeurs['setModifie'] = setModifie;
	var addModifie = $formulaireValeurs.find('.addModifie').val();
	if(addModifie != null && addModifie !== '')
		valeurs['addModifie'] = addModifie;
	var removeModifie = $formulaireValeurs.find('.removeModifie').val();
	if(removeModifie != null && removeModifie !== '')
		valeurs['removeModifie'] = removeModifie;

	var setLeconNumero = $formulaireValeurs.find('.setLeconNumero').val();
	if(setLeconNumero != null && setLeconNumero !== '')
		valeurs['setLeconNumero'] = setLeconNumero;
	var addLeconNumero = $formulaireValeurs.find('.addLeconNumero').val();
	if(addLeconNumero != null && addLeconNumero !== '')
		valeurs['addLeconNumero'] = addLeconNumero;
	var removeLeconNumero = $formulaireValeurs.find('.removeLeconNumero').val();
	if(removeLeconNumero != null && removeLeconNumero !== '')
		valeurs['removeLeconNumero'] = removeLeconNumero;

	$.ajax({
		url: '?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(valeurs)
		, success: function( data, textStatus, jQxhr ) {
		}
		, error: function( jqXhr, textStatus, errorThrown ) {
		}
	});
}

// GET //

/**
 */
function getC001(pk) {
	$.ajax({
		url: 'null/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: function( data, textStatus, jQxhr ) {
		}
		, error: function( jqXhr, textStatus, errorThrown ) {
		}
	});
}

// DELETE //

/**
 */
function deleteC001(pk) {
	$.ajax({
		url: 'null/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(valeurs)
		, success: function( data, textStatus, jQxhr ) {
		}
		, error: function( jqXhr, textStatus, errorThrown ) {
		}
	});
}

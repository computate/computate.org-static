
// Recherche //

/**
 */
function rechercheCluster($formulaireFiltres) {
	var filtres = [];

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
		url: '/api/cluster?' + $.param(filtres)
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

// POST //

/**
 */
function postCluster($formulaireValeurs) {
	var valeurs = {};

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		valeurs['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		valeurs['modifie'] = valeurModifie;

	$.ajax({
		url: '/api/cluster'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(valeurs)
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

// PATCH //

/**
 * Modifier un ou plusiers  sans valuers qui change, 
 * ou changer des valeurs pour un ou plusiers . 
 * @param params: [ "q=*:*", "fq=pk:1", "sort=pk asc", "rows=1", "fl=pk" ]
 *        Une liste des opérations de recherche sur des  
 *        pour rechercher "q=*:*", filtrer "fq=pk:1", trier "sort=pk desc", 
 *        limiter les résultats "rows=1", ou limiter les valeurs "fl=pk". 
 * @param valeurs Noms des champs et valeurs à changer selon les filtres fq. 
 *           Example: { pk: 1 }
 */
function patchCluster($formulaireFiltres, $formulaireValeurs) {
	var filtres = [];

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

	var valeurs = {};

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

	$.ajax({
		url: '/api/cluster?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(valeurs)
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
function getCluster(pk) {
	$.ajax({
		url: '/api/cluster/' + id
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

// DELETE //

/**
 */
function deleteCluster(pk) {
	$.ajax({
		url: '/api/cluster/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(valeurs)
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


// Recherche //

/**
 */
function rechercheMissionScolaire($formulaireFiltres) {
	var filtres = [];

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtreMissionNom = $formulaireFiltres.find('.valeurMissionNom').val();
	if(filtreMissionNom != null && filtreMissionNom !== '')
		filtres.push({ name: 'fq', value: 'missionNom:' + filtreMissionNom });

	var filtreEcoleNumeroTelephone = $formulaireFiltres.find('.valeurEcoleNumeroTelephone').val();
	if(filtreEcoleNumeroTelephone != null && filtreEcoleNumeroTelephone !== '')
		filtres.push({ name: 'fq', value: 'ecoleNumeroTelephone:' + filtreEcoleNumeroTelephone });

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

	var filtrePageUri = $formulaireFiltres.find('.valeurPageUri').val();
	if(filtrePageUri != null && filtrePageUri !== '')
		filtres.push({ name: 'fq', value: 'pageUri:' + filtrePageUri });
	$.ajax({
		url: '/api/mission?' + $.param(filtres)
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
function postMissionScolaire($formulaireValeurs) {
	var valeurs = {};

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		valeurs['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		valeurs['modifie'] = valeurModifie;

	var valeurMissionNom = $formulaireValeurs.find('.valeurMissionNom').val();
	if(valeurMissionNom != null && valeurMissionNom !== '')
		valeurs['missionNom'] = valeurMissionNom;

	var valeurEcoleNumeroTelephone = $formulaireValeurs.find('.valeurEcoleNumeroTelephone').val();
	if(valeurEcoleNumeroTelephone != null && valeurEcoleNumeroTelephone !== '')
		valeurs['ecoleNumeroTelephone'] = valeurEcoleNumeroTelephone;

	$.ajax({
		url: '/api/mission'
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
function patchMissionScolaire($formulaireFiltres, $formulaireValeurs) {
	var filtres = [];

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtreMissionNom = $formulaireFiltres.find('.valeurMissionNom').val();
	if(filtreMissionNom != null && filtreMissionNom !== '')
		filtres.push({ name: 'fq', value: 'missionNom:' + filtreMissionNom });

	var filtreEcoleNumeroTelephone = $formulaireFiltres.find('.valeurEcoleNumeroTelephone').val();
	if(filtreEcoleNumeroTelephone != null && filtreEcoleNumeroTelephone !== '')
		filtres.push({ name: 'fq', value: 'ecoleNumeroTelephone:' + filtreEcoleNumeroTelephone });

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

	var filtrePageUri = $formulaireFiltres.find('.valeurPageUri').val();
	if(filtrePageUri != null && filtrePageUri !== '')
		filtres.push({ name: 'fq', value: 'pageUri:' + filtrePageUri });

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

	var setMissionNom = $formulaireValeurs.find('.setMissionNom').val();
	if(setMissionNom != null && setMissionNom !== '')
		valeurs['setMissionNom'] = setMissionNom;
	var addMissionNom = $formulaireValeurs.find('.addMissionNom').val();
	if(addMissionNom != null && addMissionNom !== '')
		valeurs['addMissionNom'] = addMissionNom;
	var removeMissionNom = $formulaireValeurs.find('.removeMissionNom').val();
	if(removeMissionNom != null && removeMissionNom !== '')
		valeurs['removeMissionNom'] = removeMissionNom;

	var setEcoleNumeroTelephone = $formulaireValeurs.find('.setEcoleNumeroTelephone').val();
	if(setEcoleNumeroTelephone != null && setEcoleNumeroTelephone !== '')
		valeurs['setEcoleNumeroTelephone'] = setEcoleNumeroTelephone;
	var addEcoleNumeroTelephone = $formulaireValeurs.find('.addEcoleNumeroTelephone').val();
	if(addEcoleNumeroTelephone != null && addEcoleNumeroTelephone !== '')
		valeurs['addEcoleNumeroTelephone'] = addEcoleNumeroTelephone;
	var removeEcoleNumeroTelephone = $formulaireValeurs.find('.removeEcoleNumeroTelephone').val();
	if(removeEcoleNumeroTelephone != null && removeEcoleNumeroTelephone !== '')
		valeurs['removeEcoleNumeroTelephone'] = removeEcoleNumeroTelephone;

	$.ajax({
		url: '/api/mission?' + $.param(filtres)
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
function getMissionScolaire(pk) {
	$.ajax({
		url: '/api/mission/' + id
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
function deleteMissionScolaire(pk) {
	$.ajax({
		url: '/api/mission/' + id
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

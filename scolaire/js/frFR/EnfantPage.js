
// POST //

async function postEnfantScolaire($formulaireValeurs, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			ajouterLueur($formulaireValeurs.next('button'));
			var url = data['pageUrl'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			ajouterErreur($formulaireValeurs.next('button'));
		};
	}

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurPersonnePrenom = $formulaireValeurs.find('.valeurPersonnePrenom').val();
	if(valeurPersonnePrenom != null && valeurPersonnePrenom !== '')
		vals['personnePrenom'] = valeurPersonnePrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	if(valeurFamilleNom != null && valeurFamilleNom !== '')
		vals['familleNom'] = valeurFamilleNom;

	var valeurPersonnePrenomPrefere = $formulaireValeurs.find('.valeurPersonnePrenomPrefere').val();
	if(valeurPersonnePrenomPrefere != null && valeurPersonnePrenomPrefere !== '')
		vals['personnePrenomPrefere'] = valeurPersonnePrenomPrefere;

	var valeurPersonneDateNaissance = $formulaireValeurs.find('.valeurPersonneDateNaissance').val();
	if(valeurPersonneDateNaissance != null && valeurPersonneDateNaissance !== '')
		vals['personneDateNaissance'] = valeurPersonneDateNaissance;

	var valeurPersonneAgeEnSeptembre = $formulaireValeurs.find('.valeurPersonneAgeEnSeptembre').val();
	if(valeurPersonneAgeEnSeptembre != null && valeurPersonneAgeEnSeptembre !== '')
		vals['personneAgeEnSeptembre'] = valeurPersonneAgeEnSeptembre;

	var valeurEnfantVaccinsAJour = $formulaireValeurs.find('.valeurEnfantVaccinsAJour').prop('checked');
	if(valeurEnfantVaccinsAJour != null && valeurEnfantVaccinsAJour !== '')
		vals['enfantVaccinsAJour'] = valeurEnfantVaccinsAJour;

	var valeurEnfantPropre = $formulaireValeurs.find('.valeurEnfantPropre').prop('checked');
	if(valeurEnfantPropre != null && valeurEnfantPropre !== '')
		vals['enfantPropre'] = valeurEnfantPropre;

	var valeurEnfantConditionsMedicales = $formulaireValeurs.find('.valeurEnfantConditionsMedicales').val();
	if(valeurEnfantConditionsMedicales != null && valeurEnfantConditionsMedicales !== '')
		vals['enfantConditionsMedicales'] = valeurEnfantConditionsMedicales;

	var valeurEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.valeurEnfantEcolesPrecedemmentFrequentees').val();
	if(valeurEnfantEcolesPrecedemmentFrequentees != null && valeurEnfantEcolesPrecedemmentFrequentees !== '')
		vals['enfantEcolesPrecedemmentFrequentees'] = valeurEnfantEcolesPrecedemmentFrequentees;

	var valeurEnfantDescription = $formulaireValeurs.find('.valeurEnfantDescription').val();
	if(valeurEnfantDescription != null && valeurEnfantDescription !== '')
		vals['enfantDescription'] = valeurEnfantDescription;

	var valeurEnfantObjectifs = $formulaireValeurs.find('.valeurEnfantObjectifs').val();
	if(valeurEnfantObjectifs != null && valeurEnfantObjectifs !== '')
		vals['enfantObjectifs'] = valeurEnfantObjectifs;

	var valeurInscriptionCles = $formulaireValeurs.find('.valeurInscriptionCles').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['inscriptionCles'] = valeurInscriptionCles;

	var valeurEnfantNomComplet = $formulaireValeurs.find('.valeurEnfantNomComplet').val();
	if(valeurEnfantNomComplet != null && valeurEnfantNomComplet !== '')
		vals['enfantNomComplet'] = valeurEnfantNomComplet;

	$.ajax({
		url: '/api/enfant'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postEnfantScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/enfant'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchEnfantScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchEnfantScolaireFiltres($formulaireFiltres);

	var vals = {};

	var removePk = $formulaireFiltres.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formulaireValeurs.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formulaireValeurs.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formulaireValeurs.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var removeCree = $formulaireFiltres.find('.removeCree').val() === 'true';
	var setCree = removeCree ? null : $formulaireValeurs.find('.setCree').val();
	if(removeCree || setCree != null && setCree !== '')
		vals['setCree'] = setCree;
	var addCree = $formulaireValeurs.find('.addCree').val();
	if(addCree != null && addCree !== '')
		vals['addCree'] = addCree;
	var removeCree = $formulaireValeurs.find('.removeCree').val();
	if(removeCree != null && removeCree !== '')
		vals['removeCree'] = removeCree;

	var removeObjetId = $formulaireFiltres.find('.removeObjetId').val() === 'true';
	var setObjetId = removeObjetId ? null : $formulaireValeurs.find('.setObjetId').val();
	if(removeObjetId || setObjetId != null && setObjetId !== '')
		vals['setObjetId'] = setObjetId;
	var addObjetId = $formulaireValeurs.find('.addObjetId').val();
	if(addObjetId != null && addObjetId !== '')
		vals['addObjetId'] = addObjetId;
	var removeObjetId = $formulaireValeurs.find('.removeObjetId').val();
	if(removeObjetId != null && removeObjetId !== '')
		vals['removeObjetId'] = removeObjetId;

	var removeModifie = $formulaireFiltres.find('.removeModifie').val() === 'true';
	var setModifie = removeModifie ? null : $formulaireValeurs.find('.setModifie').val();
	if(removeModifie || setModifie != null && setModifie !== '')
		vals['setModifie'] = setModifie;
	var addModifie = $formulaireValeurs.find('.addModifie').val();
	if(addModifie != null && addModifie !== '')
		vals['addModifie'] = addModifie;
	var removeModifie = $formulaireValeurs.find('.removeModifie').val();
	if(removeModifie != null && removeModifie !== '')
		vals['removeModifie'] = removeModifie;

	var removeArchive = $formulaireFiltres.find('.removeArchive').val() === 'true';
	var setArchive = removeArchive ? null : $formulaireValeurs.find('.setArchive').prop('checked');
	if(removeArchive || setArchive != null && setArchive !== '')
		vals['setArchive'] = setArchive;
	var addArchive = $formulaireValeurs.find('.addArchive').prop('checked');
	if(addArchive != null && addArchive !== '')
		vals['addArchive'] = addArchive;
	var removeArchive = $formulaireValeurs.find('.removeArchive').prop('checked');
	if(removeArchive != null && removeArchive !== '')
		vals['removeArchive'] = removeArchive;

	var removeSupprime = $formulaireFiltres.find('.removeSupprime').val() === 'true';
	var setSupprime = removeSupprime ? null : $formulaireValeurs.find('.setSupprime').prop('checked');
	if(removeSupprime || setSupprime != null && setSupprime !== '')
		vals['setSupprime'] = setSupprime;
	var addSupprime = $formulaireValeurs.find('.addSupprime').prop('checked');
	if(addSupprime != null && addSupprime !== '')
		vals['addSupprime'] = addSupprime;
	var removeSupprime = $formulaireValeurs.find('.removeSupprime').prop('checked');
	if(removeSupprime != null && removeSupprime !== '')
		vals['removeSupprime'] = removeSupprime;

	var removePersonnePrenom = $formulaireFiltres.find('.removePersonnePrenom').val() === 'true';
	var setPersonnePrenom = removePersonnePrenom ? null : $formulaireValeurs.find('.setPersonnePrenom').val();
	if(removePersonnePrenom || setPersonnePrenom != null && setPersonnePrenom !== '')
		vals['setPersonnePrenom'] = setPersonnePrenom;
	var addPersonnePrenom = $formulaireValeurs.find('.addPersonnePrenom').val();
	if(addPersonnePrenom != null && addPersonnePrenom !== '')
		vals['addPersonnePrenom'] = addPersonnePrenom;
	var removePersonnePrenom = $formulaireValeurs.find('.removePersonnePrenom').val();
	if(removePersonnePrenom != null && removePersonnePrenom !== '')
		vals['removePersonnePrenom'] = removePersonnePrenom;

	var removeFamilleNom = $formulaireFiltres.find('.removeFamilleNom').val() === 'true';
	var setFamilleNom = removeFamilleNom ? null : $formulaireValeurs.find('.setFamilleNom').val();
	if(removeFamilleNom || setFamilleNom != null && setFamilleNom !== '')
		vals['setFamilleNom'] = setFamilleNom;
	var addFamilleNom = $formulaireValeurs.find('.addFamilleNom').val();
	if(addFamilleNom != null && addFamilleNom !== '')
		vals['addFamilleNom'] = addFamilleNom;
	var removeFamilleNom = $formulaireValeurs.find('.removeFamilleNom').val();
	if(removeFamilleNom != null && removeFamilleNom !== '')
		vals['removeFamilleNom'] = removeFamilleNom;

	var removePersonnePrenomPrefere = $formulaireFiltres.find('.removePersonnePrenomPrefere').val() === 'true';
	var setPersonnePrenomPrefere = removePersonnePrenomPrefere ? null : $formulaireValeurs.find('.setPersonnePrenomPrefere').val();
	if(removePersonnePrenomPrefere || setPersonnePrenomPrefere != null && setPersonnePrenomPrefere !== '')
		vals['setPersonnePrenomPrefere'] = setPersonnePrenomPrefere;
	var addPersonnePrenomPrefere = $formulaireValeurs.find('.addPersonnePrenomPrefere').val();
	if(addPersonnePrenomPrefere != null && addPersonnePrenomPrefere !== '')
		vals['addPersonnePrenomPrefere'] = addPersonnePrenomPrefere;
	var removePersonnePrenomPrefere = $formulaireValeurs.find('.removePersonnePrenomPrefere').val();
	if(removePersonnePrenomPrefere != null && removePersonnePrenomPrefere !== '')
		vals['removePersonnePrenomPrefere'] = removePersonnePrenomPrefere;

	var removePersonneDateNaissance = $formulaireFiltres.find('.removePersonneDateNaissance').val() === 'true';
	var setPersonneDateNaissance = removePersonneDateNaissance ? null : $formulaireValeurs.find('.setPersonneDateNaissance').val();
	if(removePersonneDateNaissance || setPersonneDateNaissance != null && setPersonneDateNaissance !== '')
		vals['setPersonneDateNaissance'] = setPersonneDateNaissance;
	var addPersonneDateNaissance = $formulaireValeurs.find('.addPersonneDateNaissance').val();
	if(addPersonneDateNaissance != null && addPersonneDateNaissance !== '')
		vals['addPersonneDateNaissance'] = addPersonneDateNaissance;
	var removePersonneDateNaissance = $formulaireValeurs.find('.removePersonneDateNaissance').val();
	if(removePersonneDateNaissance != null && removePersonneDateNaissance !== '')
		vals['removePersonneDateNaissance'] = removePersonneDateNaissance;

	var removePersonneAgeEnSeptembre = $formulaireFiltres.find('.removePersonneAgeEnSeptembre').val() === 'true';
	var setPersonneAgeEnSeptembre = removePersonneAgeEnSeptembre ? null : $formulaireValeurs.find('.setPersonneAgeEnSeptembre').val();
	if(removePersonneAgeEnSeptembre || setPersonneAgeEnSeptembre != null && setPersonneAgeEnSeptembre !== '')
		vals['setPersonneAgeEnSeptembre'] = setPersonneAgeEnSeptembre;
	var addPersonneAgeEnSeptembre = $formulaireValeurs.find('.addPersonneAgeEnSeptembre').val();
	if(addPersonneAgeEnSeptembre != null && addPersonneAgeEnSeptembre !== '')
		vals['addPersonneAgeEnSeptembre'] = addPersonneAgeEnSeptembre;
	var removePersonneAgeEnSeptembre = $formulaireValeurs.find('.removePersonneAgeEnSeptembre').val();
	if(removePersonneAgeEnSeptembre != null && removePersonneAgeEnSeptembre !== '')
		vals['removePersonneAgeEnSeptembre'] = removePersonneAgeEnSeptembre;

	var removeEnfantVaccinsAJour = $formulaireFiltres.find('.removeEnfantVaccinsAJour').val() === 'true';
	var setEnfantVaccinsAJour = removeEnfantVaccinsAJour ? null : $formulaireValeurs.find('.setEnfantVaccinsAJour').prop('checked');
	if(removeEnfantVaccinsAJour || setEnfantVaccinsAJour != null && setEnfantVaccinsAJour !== '')
		vals['setEnfantVaccinsAJour'] = setEnfantVaccinsAJour;
	var addEnfantVaccinsAJour = $formulaireValeurs.find('.addEnfantVaccinsAJour').prop('checked');
	if(addEnfantVaccinsAJour != null && addEnfantVaccinsAJour !== '')
		vals['addEnfantVaccinsAJour'] = addEnfantVaccinsAJour;
	var removeEnfantVaccinsAJour = $formulaireValeurs.find('.removeEnfantVaccinsAJour').prop('checked');
	if(removeEnfantVaccinsAJour != null && removeEnfantVaccinsAJour !== '')
		vals['removeEnfantVaccinsAJour'] = removeEnfantVaccinsAJour;

	var removeEnfantPropre = $formulaireFiltres.find('.removeEnfantPropre').val() === 'true';
	var setEnfantPropre = removeEnfantPropre ? null : $formulaireValeurs.find('.setEnfantPropre').prop('checked');
	if(removeEnfantPropre || setEnfantPropre != null && setEnfantPropre !== '')
		vals['setEnfantPropre'] = setEnfantPropre;
	var addEnfantPropre = $formulaireValeurs.find('.addEnfantPropre').prop('checked');
	if(addEnfantPropre != null && addEnfantPropre !== '')
		vals['addEnfantPropre'] = addEnfantPropre;
	var removeEnfantPropre = $formulaireValeurs.find('.removeEnfantPropre').prop('checked');
	if(removeEnfantPropre != null && removeEnfantPropre !== '')
		vals['removeEnfantPropre'] = removeEnfantPropre;

	var removeEnfantConditionsMedicales = $formulaireFiltres.find('.removeEnfantConditionsMedicales').val() === 'true';
	var setEnfantConditionsMedicales = removeEnfantConditionsMedicales ? null : $formulaireValeurs.find('.setEnfantConditionsMedicales').val();
	if(removeEnfantConditionsMedicales || setEnfantConditionsMedicales != null && setEnfantConditionsMedicales !== '')
		vals['setEnfantConditionsMedicales'] = setEnfantConditionsMedicales;
	var addEnfantConditionsMedicales = $formulaireValeurs.find('.addEnfantConditionsMedicales').val();
	if(addEnfantConditionsMedicales != null && addEnfantConditionsMedicales !== '')
		vals['addEnfantConditionsMedicales'] = addEnfantConditionsMedicales;
	var removeEnfantConditionsMedicales = $formulaireValeurs.find('.removeEnfantConditionsMedicales').val();
	if(removeEnfantConditionsMedicales != null && removeEnfantConditionsMedicales !== '')
		vals['removeEnfantConditionsMedicales'] = removeEnfantConditionsMedicales;

	var removeEnfantEcolesPrecedemmentFrequentees = $formulaireFiltres.find('.removeEnfantEcolesPrecedemmentFrequentees').val() === 'true';
	var setEnfantEcolesPrecedemmentFrequentees = removeEnfantEcolesPrecedemmentFrequentees ? null : $formulaireValeurs.find('.setEnfantEcolesPrecedemmentFrequentees').val();
	if(removeEnfantEcolesPrecedemmentFrequentees || setEnfantEcolesPrecedemmentFrequentees != null && setEnfantEcolesPrecedemmentFrequentees !== '')
		vals['setEnfantEcolesPrecedemmentFrequentees'] = setEnfantEcolesPrecedemmentFrequentees;
	var addEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.addEnfantEcolesPrecedemmentFrequentees').val();
	if(addEnfantEcolesPrecedemmentFrequentees != null && addEnfantEcolesPrecedemmentFrequentees !== '')
		vals['addEnfantEcolesPrecedemmentFrequentees'] = addEnfantEcolesPrecedemmentFrequentees;
	var removeEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.removeEnfantEcolesPrecedemmentFrequentees').val();
	if(removeEnfantEcolesPrecedemmentFrequentees != null && removeEnfantEcolesPrecedemmentFrequentees !== '')
		vals['removeEnfantEcolesPrecedemmentFrequentees'] = removeEnfantEcolesPrecedemmentFrequentees;

	var removeEnfantDescription = $formulaireFiltres.find('.removeEnfantDescription').val() === 'true';
	var setEnfantDescription = removeEnfantDescription ? null : $formulaireValeurs.find('.setEnfantDescription').val();
	if(removeEnfantDescription || setEnfantDescription != null && setEnfantDescription !== '')
		vals['setEnfantDescription'] = setEnfantDescription;
	var addEnfantDescription = $formulaireValeurs.find('.addEnfantDescription').val();
	if(addEnfantDescription != null && addEnfantDescription !== '')
		vals['addEnfantDescription'] = addEnfantDescription;
	var removeEnfantDescription = $formulaireValeurs.find('.removeEnfantDescription').val();
	if(removeEnfantDescription != null && removeEnfantDescription !== '')
		vals['removeEnfantDescription'] = removeEnfantDescription;

	var removeEnfantObjectifs = $formulaireFiltres.find('.removeEnfantObjectifs').val() === 'true';
	var setEnfantObjectifs = removeEnfantObjectifs ? null : $formulaireValeurs.find('.setEnfantObjectifs').val();
	if(removeEnfantObjectifs || setEnfantObjectifs != null && setEnfantObjectifs !== '')
		vals['setEnfantObjectifs'] = setEnfantObjectifs;
	var addEnfantObjectifs = $formulaireValeurs.find('.addEnfantObjectifs').val();
	if(addEnfantObjectifs != null && addEnfantObjectifs !== '')
		vals['addEnfantObjectifs'] = addEnfantObjectifs;
	var removeEnfantObjectifs = $formulaireValeurs.find('.removeEnfantObjectifs').val();
	if(removeEnfantObjectifs != null && removeEnfantObjectifs !== '')
		vals['removeEnfantObjectifs'] = removeEnfantObjectifs;

	var removeInscriptionCles = $formulaireFiltres.find('.removeInscriptionCles').val() === 'true';
	var setInscriptionCles = removeInscriptionCles ? null : $formulaireValeurs.find('.setInscriptionCles').val();
	if(removeInscriptionCles || setInscriptionCles != null && setInscriptionCles !== '')
		vals['setInscriptionCles'] = setInscriptionCles;
	var addInscriptionCles = $formulaireValeurs.find('.addInscriptionCles').val();
	if(addInscriptionCles != null && addInscriptionCles !== '')
		vals['addInscriptionCles'] = addInscriptionCles;
	var removeInscriptionCles = $formulaireValeurs.find('.removeInscriptionCles').val();
	if(removeInscriptionCles != null && removeInscriptionCles !== '')
		vals['removeInscriptionCles'] = removeInscriptionCles;

	var removeEnfantNomComplet = $formulaireFiltres.find('.removeEnfantNomComplet').val() === 'true';
	var setEnfantNomComplet = removeEnfantNomComplet ? null : $formulaireValeurs.find('.setEnfantNomComplet').val();
	if(removeEnfantNomComplet || setEnfantNomComplet != null && setEnfantNomComplet !== '')
		vals['setEnfantNomComplet'] = setEnfantNomComplet;
	var addEnfantNomComplet = $formulaireValeurs.find('.addEnfantNomComplet').val();
	if(addEnfantNomComplet != null && addEnfantNomComplet !== '')
		vals['addEnfantNomComplet'] = addEnfantNomComplet;
	var removeEnfantNomComplet = $formulaireValeurs.find('.removeEnfantNomComplet').val();
	if(removeEnfantNomComplet != null && removeEnfantNomComplet !== '')
		vals['removeEnfantNomComplet'] = removeEnfantNomComplet;

	patchEnfantScolaireVals(filtres, vals, success, error);
}

function patchEnfantScolaireFiltres($formulaireFiltres) {
	var filtres = [];

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
	if(filtreObjetId != null && filtreObjetId !== '')
		filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtrePersonnePrenom = $formulaireFiltres.find('.valeurPersonnePrenom').val();
	if(filtrePersonnePrenom != null && filtrePersonnePrenom !== '')
		filtres.push({ name: 'fq', value: 'personnePrenom:' + filtrePersonnePrenom });

	var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
	if(filtreFamilleNom != null && filtreFamilleNom !== '')
		filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

	var filtrePersonnePrenomPrefere = $formulaireFiltres.find('.valeurPersonnePrenomPrefere').val();
	if(filtrePersonnePrenomPrefere != null && filtrePersonnePrenomPrefere !== '')
		filtres.push({ name: 'fq', value: 'personnePrenomPrefere:' + filtrePersonnePrenomPrefere });

	var filtrePersonneDateNaissance = $formulaireFiltres.find('.valeurPersonneDateNaissance').val();
	if(filtrePersonneDateNaissance != null && filtrePersonneDateNaissance !== '')
		filtres.push({ name: 'fq', value: 'personneDateNaissance:' + filtrePersonneDateNaissance });

	var filtrePersonneAgeEnSeptembre = $formulaireFiltres.find('.valeurPersonneAgeEnSeptembre').val();
	if(filtrePersonneAgeEnSeptembre != null && filtrePersonneAgeEnSeptembre !== '')
		filtres.push({ name: 'fq', value: 'personneAgeEnSeptembre:' + filtrePersonneAgeEnSeptembre });

	var filtreEnfantVaccinsAJour = $formulaireFiltres.find('.valeurEnfantVaccinsAJour').prop('checked');
	if(filtreEnfantVaccinsAJour != null && filtreEnfantVaccinsAJour === true)
		filtres.push({ name: 'fq', value: 'enfantVaccinsAJour:' + filtreEnfantVaccinsAJour });

	var filtreEnfantPropre = $formulaireFiltres.find('.valeurEnfantPropre').prop('checked');
	if(filtreEnfantPropre != null && filtreEnfantPropre === true)
		filtres.push({ name: 'fq', value: 'enfantPropre:' + filtreEnfantPropre });

	var filtreEnfantConditionsMedicales = $formulaireFiltres.find('.valeurEnfantConditionsMedicales').val();
	if(filtreEnfantConditionsMedicales != null && filtreEnfantConditionsMedicales !== '')
		filtres.push({ name: 'fq', value: 'enfantConditionsMedicales:' + filtreEnfantConditionsMedicales });

	var filtreEnfantEcolesPrecedemmentFrequentees = $formulaireFiltres.find('.valeurEnfantEcolesPrecedemmentFrequentees').val();
	if(filtreEnfantEcolesPrecedemmentFrequentees != null && filtreEnfantEcolesPrecedemmentFrequentees !== '')
		filtres.push({ name: 'fq', value: 'enfantEcolesPrecedemmentFrequentees:' + filtreEnfantEcolesPrecedemmentFrequentees });

	var filtreEnfantDescription = $formulaireFiltres.find('.valeurEnfantDescription').val();
	if(filtreEnfantDescription != null && filtreEnfantDescription !== '')
		filtres.push({ name: 'fq', value: 'enfantDescription:' + filtreEnfantDescription });

	var filtreEnfantObjectifs = $formulaireFiltres.find('.valeurEnfantObjectifs').val();
	if(filtreEnfantObjectifs != null && filtreEnfantObjectifs !== '')
		filtres.push({ name: 'fq', value: 'enfantObjectifs:' + filtreEnfantObjectifs });

	var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
	if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

	var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
	if(filtreSessionId != null && filtreSessionId !== '')
		filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

	var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
	if(filtreObjetTitre != null && filtreObjetTitre !== '')
		filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
	if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
		filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

	var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
	if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
		filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

	var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
	if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
		filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
	if(filtreEnfantCle != null && filtreEnfantCle !== '')
		filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

	var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
	if(filtreFamilleTri != null && filtreFamilleTri !== '')
		filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

	var filtreEnfantTri = $formulaireFiltres.find('.valeurEnfantTri').val();
	if(filtreEnfantTri != null && filtreEnfantTri !== '')
		filtres.push({ name: 'fq', value: 'enfantTri:' + filtreEnfantTri });

	var filtreEcoleCles = $formulaireFiltres.find('.valeurEcoleCles').val();
	if(filtreEcoleCles != null && filtreEcoleCles !== '')
		filtres.push({ name: 'fq', value: 'ecoleCles:' + filtreEcoleCles });

	var filtreAnneeCles = $formulaireFiltres.find('.valeurAnneeCles').val();
	if(filtreAnneeCles != null && filtreAnneeCles !== '')
		filtres.push({ name: 'fq', value: 'anneeCles:' + filtreAnneeCles });

	var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
	if(filtreSaisonCles != null && filtreSaisonCles !== '')
		filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

	var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
	if(filtreSessionCles != null && filtreSessionCles !== '')
		filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

	var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
	if(filtreAgeCles != null && filtreAgeCles !== '')
		filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

	var filtrePersonneNomComplet = $formulaireFiltres.find('.valeurPersonneNomComplet').val();
	if(filtrePersonneNomComplet != null && filtrePersonneNomComplet !== '')
		filtres.push({ name: 'fq', value: 'personneNomComplet:' + filtrePersonneNomComplet });

	var filtrePersonneNomCompletPrefere = $formulaireFiltres.find('.valeurPersonneNomCompletPrefere').val();
	if(filtrePersonneNomCompletPrefere != null && filtrePersonneNomCompletPrefere !== '')
		filtres.push({ name: 'fq', value: 'personneNomCompletPrefere:' + filtrePersonneNomCompletPrefere });

	var filtrePersonneNomFormel = $formulaireFiltres.find('.valeurPersonneNomFormel').val();
	if(filtrePersonneNomFormel != null && filtrePersonneNomFormel !== '')
		filtres.push({ name: 'fq', value: 'personneNomFormel:' + filtrePersonneNomFormel });

	var filtreEnfantNomComplet = $formulaireFiltres.find('.valeurEnfantNomComplet').val();
	if(filtreEnfantNomComplet != null && filtreEnfantNomComplet !== '')
		filtres.push({ name: 'fq', value: 'enfantNomComplet:' + filtreEnfantNomComplet });
	return filtres;
}

function patchEnfantScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchEnfantScolaireVals(filtres, vals, success, error);
}

function patchEnfantScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/enfant?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getEnfantScolaire(pk) {
	$.ajax({
		url: '/api/enfant/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

async function deleteEnfantScolaire(pk) {
	$.ajax({
		url: '/api/enfant/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheEnfantScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheEnfantScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheEnfantScolaireVals(filtres, success, error);
}

function rechercheEnfantScolaireFiltres($formulaireFiltres) {
	var filtres = [];

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
	if(filtreObjetId != null && filtreObjetId !== '')
		filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtrePersonnePrenom = $formulaireFiltres.find('.valeurPersonnePrenom').val();
	if(filtrePersonnePrenom != null && filtrePersonnePrenom !== '')
		filtres.push({ name: 'fq', value: 'personnePrenom:' + filtrePersonnePrenom });

	var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
	if(filtreFamilleNom != null && filtreFamilleNom !== '')
		filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

	var filtrePersonnePrenomPrefere = $formulaireFiltres.find('.valeurPersonnePrenomPrefere').val();
	if(filtrePersonnePrenomPrefere != null && filtrePersonnePrenomPrefere !== '')
		filtres.push({ name: 'fq', value: 'personnePrenomPrefere:' + filtrePersonnePrenomPrefere });

	var filtrePersonneDateNaissance = $formulaireFiltres.find('.valeurPersonneDateNaissance').val();
	if(filtrePersonneDateNaissance != null && filtrePersonneDateNaissance !== '')
		filtres.push({ name: 'fq', value: 'personneDateNaissance:' + filtrePersonneDateNaissance });

	var filtrePersonneAgeEnSeptembre = $formulaireFiltres.find('.valeurPersonneAgeEnSeptembre').val();
	if(filtrePersonneAgeEnSeptembre != null && filtrePersonneAgeEnSeptembre !== '')
		filtres.push({ name: 'fq', value: 'personneAgeEnSeptembre:' + filtrePersonneAgeEnSeptembre });

	var filtreEnfantVaccinsAJour = $formulaireFiltres.find('.valeurEnfantVaccinsAJour').prop('checked');
	if(filtreEnfantVaccinsAJour != null && filtreEnfantVaccinsAJour === true)
		filtres.push({ name: 'fq', value: 'enfantVaccinsAJour:' + filtreEnfantVaccinsAJour });

	var filtreEnfantPropre = $formulaireFiltres.find('.valeurEnfantPropre').prop('checked');
	if(filtreEnfantPropre != null && filtreEnfantPropre === true)
		filtres.push({ name: 'fq', value: 'enfantPropre:' + filtreEnfantPropre });

	var filtreEnfantConditionsMedicales = $formulaireFiltres.find('.valeurEnfantConditionsMedicales').val();
	if(filtreEnfantConditionsMedicales != null && filtreEnfantConditionsMedicales !== '')
		filtres.push({ name: 'fq', value: 'enfantConditionsMedicales:' + filtreEnfantConditionsMedicales });

	var filtreEnfantEcolesPrecedemmentFrequentees = $formulaireFiltres.find('.valeurEnfantEcolesPrecedemmentFrequentees').val();
	if(filtreEnfantEcolesPrecedemmentFrequentees != null && filtreEnfantEcolesPrecedemmentFrequentees !== '')
		filtres.push({ name: 'fq', value: 'enfantEcolesPrecedemmentFrequentees:' + filtreEnfantEcolesPrecedemmentFrequentees });

	var filtreEnfantDescription = $formulaireFiltres.find('.valeurEnfantDescription').val();
	if(filtreEnfantDescription != null && filtreEnfantDescription !== '')
		filtres.push({ name: 'fq', value: 'enfantDescription:' + filtreEnfantDescription });

	var filtreEnfantObjectifs = $formulaireFiltres.find('.valeurEnfantObjectifs').val();
	if(filtreEnfantObjectifs != null && filtreEnfantObjectifs !== '')
		filtres.push({ name: 'fq', value: 'enfantObjectifs:' + filtreEnfantObjectifs });

	var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
	if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

	var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
	if(filtreSessionId != null && filtreSessionId !== '')
		filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

	var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
	if(filtreObjetTitre != null && filtreObjetTitre !== '')
		filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
	if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
		filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

	var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
	if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
		filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

	var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
	if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
		filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
	if(filtreEnfantCle != null && filtreEnfantCle !== '')
		filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

	var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
	if(filtreFamilleTri != null && filtreFamilleTri !== '')
		filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

	var filtreEnfantTri = $formulaireFiltres.find('.valeurEnfantTri').val();
	if(filtreEnfantTri != null && filtreEnfantTri !== '')
		filtres.push({ name: 'fq', value: 'enfantTri:' + filtreEnfantTri });

	var filtreEcoleCles = $formulaireFiltres.find('.valeurEcoleCles').val();
	if(filtreEcoleCles != null && filtreEcoleCles !== '')
		filtres.push({ name: 'fq', value: 'ecoleCles:' + filtreEcoleCles });

	var filtreAnneeCles = $formulaireFiltres.find('.valeurAnneeCles').val();
	if(filtreAnneeCles != null && filtreAnneeCles !== '')
		filtres.push({ name: 'fq', value: 'anneeCles:' + filtreAnneeCles });

	var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
	if(filtreSaisonCles != null && filtreSaisonCles !== '')
		filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

	var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
	if(filtreSessionCles != null && filtreSessionCles !== '')
		filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

	var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
	if(filtreAgeCles != null && filtreAgeCles !== '')
		filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

	var filtrePersonneNomComplet = $formulaireFiltres.find('.valeurPersonneNomComplet').val();
	if(filtrePersonneNomComplet != null && filtrePersonneNomComplet !== '')
		filtres.push({ name: 'fq', value: 'personneNomComplet:' + filtrePersonneNomComplet });

	var filtrePersonneNomCompletPrefere = $formulaireFiltres.find('.valeurPersonneNomCompletPrefere').val();
	if(filtrePersonneNomCompletPrefere != null && filtrePersonneNomCompletPrefere !== '')
		filtres.push({ name: 'fq', value: 'personneNomCompletPrefere:' + filtrePersonneNomCompletPrefere });

	var filtrePersonneNomFormel = $formulaireFiltres.find('.valeurPersonneNomFormel').val();
	if(filtrePersonneNomFormel != null && filtrePersonneNomFormel !== '')
		filtres.push({ name: 'fq', value: 'personneNomFormel:' + filtrePersonneNomFormel });

	var filtreEnfantNomComplet = $formulaireFiltres.find('.valeurEnfantNomComplet').val();
	if(filtreEnfantNomComplet != null && filtreEnfantNomComplet !== '')
		filtres.push({ name: 'fq', value: 'enfantNomComplet:' + filtreEnfantNomComplet });
	return filtres;
}

function rechercheEnfantScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/enfant?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereEnfantScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-child w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['enfantNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherEnfantScolaireVals($formulaireFiltres, success, error);
}

function suggereEnfantScolaireInscriptionCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enfantCle'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_enfantCle_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_enfantCle_" + o['pk'] + "'); patchEnfantScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#EnfantScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

async function websocketEnfantScolaire(success) {
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {

		eventBus.registerHandler('websocketEnfantScolaire', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pks = json['pks'];
			var empty = json['empty'];
			if(!empty) {
				var numFound = json['numFound'];
				var numPATCH = json['numPATCH'];
				var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
				var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
				var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
				var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
				var $header = $('<div>').attr('class', 'w3-container fa-green ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'far fa-child w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modifier enfants');
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
				if(success)
					success(json);
			}
		});

		eventBus.registerHandler('websocketInscriptionScolaire', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
		});
	}
}

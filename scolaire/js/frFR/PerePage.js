
// POST //

async function postPereScolaire($formulaireValeurs, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			ajouterLueur($formulaireValeurs.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			ajouterErreur($formulaireValeurs.next('button'));
		};
	}

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

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

	var valeurPersonneMail = $formulaireValeurs.find('.valeurPersonneMail').val();
	if(valeurPersonneMail != null && valeurPersonneMail !== '')
		vals['personneMail'] = valeurPersonneMail;

	var valeurPersonneNumeroTelephone = $formulaireValeurs.find('.valeurPersonneNumeroTelephone').val();
	if(valeurPersonneNumeroTelephone != null && valeurPersonneNumeroTelephone !== '')
		vals['personneNumeroTelephone'] = valeurPersonneNumeroTelephone;

	var valeurPersonneOccupation = $formulaireValeurs.find('.valeurPersonneOccupation').val();
	if(valeurPersonneOccupation != null && valeurPersonneOccupation !== '')
		vals['personneOccupation'] = valeurPersonneOccupation;

	var valeurPersonneSms = $formulaireValeurs.find('.valeurPersonneSms').prop('checked');
	if(valeurPersonneSms != null && valeurPersonneSms !== '')
		vals['personneSms'] = valeurPersonneSms;

	var valeurPersonneContactUrgence = $formulaireValeurs.find('.valeurPersonneContactUrgence').prop('checked');
	if(valeurPersonneContactUrgence != null && valeurPersonneContactUrgence !== '')
		vals['personneContactUrgence'] = valeurPersonneContactUrgence;

	var valeurPersonneRecevoirMail = $formulaireValeurs.find('.valeurPersonneRecevoirMail').prop('checked');
	if(valeurPersonneRecevoirMail != null && valeurPersonneRecevoirMail !== '')
		vals['personneRecevoirMail'] = valeurPersonneRecevoirMail;

	var valeurPersonneChercher = $formulaireValeurs.find('.valeurPersonneChercher').prop('checked');
	if(valeurPersonneChercher != null && valeurPersonneChercher !== '')
		vals['personneChercher'] = valeurPersonneChercher;

	var valeurInscriptionCles = $formulaireValeurs.find('.valeurInscriptionCles').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['inscriptionCles'] = valeurInscriptionCles;

	var valeurPereNomComplet = $formulaireValeurs.find('.valeurPereNomComplet').val();
	if(valeurPereNomComplet != null && valeurPereNomComplet !== '')
		vals['pereNomComplet'] = valeurPereNomComplet;

	$.ajax({
		url: '/api/pere'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postPereScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/pere'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchPereScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchPereScolaireFiltres($formulaireFiltres);

	var vals = {};

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

	var removePersonneMail = $formulaireFiltres.find('.removePersonneMail').val() === 'true';
	var setPersonneMail = removePersonneMail ? null : $formulaireValeurs.find('.setPersonneMail').val();
	if(removePersonneMail || setPersonneMail != null && setPersonneMail !== '')
		vals['setPersonneMail'] = setPersonneMail;
	var addPersonneMail = $formulaireValeurs.find('.addPersonneMail').val();
	if(addPersonneMail != null && addPersonneMail !== '')
		vals['addPersonneMail'] = addPersonneMail;
	var removePersonneMail = $formulaireValeurs.find('.removePersonneMail').val();
	if(removePersonneMail != null && removePersonneMail !== '')
		vals['removePersonneMail'] = removePersonneMail;

	var removePersonneNumeroTelephone = $formulaireFiltres.find('.removePersonneNumeroTelephone').val() === 'true';
	var setPersonneNumeroTelephone = removePersonneNumeroTelephone ? null : $formulaireValeurs.find('.setPersonneNumeroTelephone').val();
	if(removePersonneNumeroTelephone || setPersonneNumeroTelephone != null && setPersonneNumeroTelephone !== '')
		vals['setPersonneNumeroTelephone'] = setPersonneNumeroTelephone;
	var addPersonneNumeroTelephone = $formulaireValeurs.find('.addPersonneNumeroTelephone').val();
	if(addPersonneNumeroTelephone != null && addPersonneNumeroTelephone !== '')
		vals['addPersonneNumeroTelephone'] = addPersonneNumeroTelephone;
	var removePersonneNumeroTelephone = $formulaireValeurs.find('.removePersonneNumeroTelephone').val();
	if(removePersonneNumeroTelephone != null && removePersonneNumeroTelephone !== '')
		vals['removePersonneNumeroTelephone'] = removePersonneNumeroTelephone;

	var removePersonneOccupation = $formulaireFiltres.find('.removePersonneOccupation').val() === 'true';
	var setPersonneOccupation = removePersonneOccupation ? null : $formulaireValeurs.find('.setPersonneOccupation').val();
	if(removePersonneOccupation || setPersonneOccupation != null && setPersonneOccupation !== '')
		vals['setPersonneOccupation'] = setPersonneOccupation;
	var addPersonneOccupation = $formulaireValeurs.find('.addPersonneOccupation').val();
	if(addPersonneOccupation != null && addPersonneOccupation !== '')
		vals['addPersonneOccupation'] = addPersonneOccupation;
	var removePersonneOccupation = $formulaireValeurs.find('.removePersonneOccupation').val();
	if(removePersonneOccupation != null && removePersonneOccupation !== '')
		vals['removePersonneOccupation'] = removePersonneOccupation;

	var removePersonneSms = $formulaireFiltres.find('.removePersonneSms').val() === 'true';
	var setPersonneSms = removePersonneSms ? null : $formulaireValeurs.find('.setPersonneSms').prop('checked');
	if(removePersonneSms || setPersonneSms != null && setPersonneSms !== '')
		vals['setPersonneSms'] = setPersonneSms;
	var addPersonneSms = $formulaireValeurs.find('.addPersonneSms').prop('checked');
	if(addPersonneSms != null && addPersonneSms !== '')
		vals['addPersonneSms'] = addPersonneSms;
	var removePersonneSms = $formulaireValeurs.find('.removePersonneSms').prop('checked');
	if(removePersonneSms != null && removePersonneSms !== '')
		vals['removePersonneSms'] = removePersonneSms;

	var removePersonneContactUrgence = $formulaireFiltres.find('.removePersonneContactUrgence').val() === 'true';
	var setPersonneContactUrgence = removePersonneContactUrgence ? null : $formulaireValeurs.find('.setPersonneContactUrgence').prop('checked');
	if(removePersonneContactUrgence || setPersonneContactUrgence != null && setPersonneContactUrgence !== '')
		vals['setPersonneContactUrgence'] = setPersonneContactUrgence;
	var addPersonneContactUrgence = $formulaireValeurs.find('.addPersonneContactUrgence').prop('checked');
	if(addPersonneContactUrgence != null && addPersonneContactUrgence !== '')
		vals['addPersonneContactUrgence'] = addPersonneContactUrgence;
	var removePersonneContactUrgence = $formulaireValeurs.find('.removePersonneContactUrgence').prop('checked');
	if(removePersonneContactUrgence != null && removePersonneContactUrgence !== '')
		vals['removePersonneContactUrgence'] = removePersonneContactUrgence;

	var removePersonneRecevoirMail = $formulaireFiltres.find('.removePersonneRecevoirMail').val() === 'true';
	var setPersonneRecevoirMail = removePersonneRecevoirMail ? null : $formulaireValeurs.find('.setPersonneRecevoirMail').prop('checked');
	if(removePersonneRecevoirMail || setPersonneRecevoirMail != null && setPersonneRecevoirMail !== '')
		vals['setPersonneRecevoirMail'] = setPersonneRecevoirMail;
	var addPersonneRecevoirMail = $formulaireValeurs.find('.addPersonneRecevoirMail').prop('checked');
	if(addPersonneRecevoirMail != null && addPersonneRecevoirMail !== '')
		vals['addPersonneRecevoirMail'] = addPersonneRecevoirMail;
	var removePersonneRecevoirMail = $formulaireValeurs.find('.removePersonneRecevoirMail').prop('checked');
	if(removePersonneRecevoirMail != null && removePersonneRecevoirMail !== '')
		vals['removePersonneRecevoirMail'] = removePersonneRecevoirMail;

	var removePersonneChercher = $formulaireFiltres.find('.removePersonneChercher').val() === 'true';
	var setPersonneChercher = removePersonneChercher ? null : $formulaireValeurs.find('.setPersonneChercher').prop('checked');
	if(removePersonneChercher || setPersonneChercher != null && setPersonneChercher !== '')
		vals['setPersonneChercher'] = setPersonneChercher;
	var addPersonneChercher = $formulaireValeurs.find('.addPersonneChercher').prop('checked');
	if(addPersonneChercher != null && addPersonneChercher !== '')
		vals['addPersonneChercher'] = addPersonneChercher;
	var removePersonneChercher = $formulaireValeurs.find('.removePersonneChercher').prop('checked');
	if(removePersonneChercher != null && removePersonneChercher !== '')
		vals['removePersonneChercher'] = removePersonneChercher;

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

	var removePereNomComplet = $formulaireFiltres.find('.removePereNomComplet').val() === 'true';
	var setPereNomComplet = removePereNomComplet ? null : $formulaireValeurs.find('.setPereNomComplet').val();
	if(removePereNomComplet || setPereNomComplet != null && setPereNomComplet !== '')
		vals['setPereNomComplet'] = setPereNomComplet;
	var addPereNomComplet = $formulaireValeurs.find('.addPereNomComplet').val();
	if(addPereNomComplet != null && addPereNomComplet !== '')
		vals['addPereNomComplet'] = addPereNomComplet;
	var removePereNomComplet = $formulaireValeurs.find('.removePereNomComplet').val();
	if(removePereNomComplet != null && removePereNomComplet !== '')
		vals['removePereNomComplet'] = removePereNomComplet;

	patchPereScolaireVals(filtres, vals, success, error);
}

function patchPereScolaireFiltres($formulaireFiltres) {
	var filtres = [];

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

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

	var filtrePersonneMail = $formulaireFiltres.find('.valeurPersonneMail').val();
	if(filtrePersonneMail != null && filtrePersonneMail !== '')
		filtres.push({ name: 'fq', value: 'personneMail:' + filtrePersonneMail });

	var filtrePersonneNumeroTelephone = $formulaireFiltres.find('.valeurPersonneNumeroTelephone').val();
	if(filtrePersonneNumeroTelephone != null && filtrePersonneNumeroTelephone !== '')
		filtres.push({ name: 'fq', value: 'personneNumeroTelephone:' + filtrePersonneNumeroTelephone });

	var filtrePersonneOccupation = $formulaireFiltres.find('.valeurPersonneOccupation').val();
	if(filtrePersonneOccupation != null && filtrePersonneOccupation !== '')
		filtres.push({ name: 'fq', value: 'personneOccupation:' + filtrePersonneOccupation });

	var filtrePersonneSms = $formulaireFiltres.find('.valeurPersonneSms').prop('checked');
	if(filtrePersonneSms != null && filtrePersonneSms === true)
		filtres.push({ name: 'fq', value: 'personneSms:' + filtrePersonneSms });

	var filtrePersonneContactUrgence = $formulaireFiltres.find('.valeurPersonneContactUrgence').prop('checked');
	if(filtrePersonneContactUrgence != null && filtrePersonneContactUrgence === true)
		filtres.push({ name: 'fq', value: 'personneContactUrgence:' + filtrePersonneContactUrgence });

	var filtrePersonneRecevoirMail = $formulaireFiltres.find('.valeurPersonneRecevoirMail').prop('checked');
	if(filtrePersonneRecevoirMail != null && filtrePersonneRecevoirMail === true)
		filtres.push({ name: 'fq', value: 'personneRecevoirMail:' + filtrePersonneRecevoirMail });

	var filtrePersonneChercher = $formulaireFiltres.find('.valeurPersonneChercher').prop('checked');
	if(filtrePersonneChercher != null && filtrePersonneChercher === true)
		filtres.push({ name: 'fq', value: 'personneChercher:' + filtrePersonneChercher });

	var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
	if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

	var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
	if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
		filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

	var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
	if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
		filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

	var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
	if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
		filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

	var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
	if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
		filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

	var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
	if(filtreSessionId != null && filtreSessionId !== '')
		filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

	var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
	if(filtreObjetTitre != null && filtreObjetTitre !== '')
		filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

	var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
	if(filtrePageUrlId != null && filtrePageUrlId !== '')
		filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

	var filtrePereCle = $formulaireFiltres.find('.valeurPereCle').val();
	if(filtrePereCle != null && filtrePereCle !== '')
		filtres.push({ name: 'fq', value: 'pereCle:' + filtrePereCle });

	var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
	if(filtreFamilleTri != null && filtreFamilleTri !== '')
		filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

	var filtrePereTri = $formulaireFiltres.find('.valeurPereTri').val();
	if(filtrePereTri != null && filtrePereTri !== '')
		filtres.push({ name: 'fq', value: 'pereTri:' + filtrePereTri });

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

	var filtrePersonneRelation = $formulaireFiltres.find('.valeurPersonneRelation').val();
	if(filtrePersonneRelation != null && filtrePersonneRelation !== '')
		filtres.push({ name: 'fq', value: 'personneRelation:' + filtrePersonneRelation });

	var filtrePereNomComplet = $formulaireFiltres.find('.valeurPereNomComplet').val();
	if(filtrePereNomComplet != null && filtrePereNomComplet !== '')
		filtres.push({ name: 'fq', value: 'pereNomComplet:' + filtrePereNomComplet });
	return filtres;
}

function patchPereScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchPereScolaireVals(filtres, vals, success, error);
}

function patchPereScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/pere?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getPereScolaire(pk) {
	$.ajax({
		url: '/api/pere/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

async function deletePereScolaire(pk) {
	$.ajax({
		url: '/api/pere/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

async function recherchePereScolaire($formulaireFiltres, success, error) {
	var filtres = recherchePereScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	recherchePereScolaireVals(filtres, success, error);
}

function recherchePereScolaireFiltres($formulaireFiltres) {
	var filtres = [];

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

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

	var filtrePersonneMail = $formulaireFiltres.find('.valeurPersonneMail').val();
	if(filtrePersonneMail != null && filtrePersonneMail !== '')
		filtres.push({ name: 'fq', value: 'personneMail:' + filtrePersonneMail });

	var filtrePersonneNumeroTelephone = $formulaireFiltres.find('.valeurPersonneNumeroTelephone').val();
	if(filtrePersonneNumeroTelephone != null && filtrePersonneNumeroTelephone !== '')
		filtres.push({ name: 'fq', value: 'personneNumeroTelephone:' + filtrePersonneNumeroTelephone });

	var filtrePersonneOccupation = $formulaireFiltres.find('.valeurPersonneOccupation').val();
	if(filtrePersonneOccupation != null && filtrePersonneOccupation !== '')
		filtres.push({ name: 'fq', value: 'personneOccupation:' + filtrePersonneOccupation });

	var filtrePersonneSms = $formulaireFiltres.find('.valeurPersonneSms').prop('checked');
	if(filtrePersonneSms != null && filtrePersonneSms === true)
		filtres.push({ name: 'fq', value: 'personneSms:' + filtrePersonneSms });

	var filtrePersonneContactUrgence = $formulaireFiltres.find('.valeurPersonneContactUrgence').prop('checked');
	if(filtrePersonneContactUrgence != null && filtrePersonneContactUrgence === true)
		filtres.push({ name: 'fq', value: 'personneContactUrgence:' + filtrePersonneContactUrgence });

	var filtrePersonneRecevoirMail = $formulaireFiltres.find('.valeurPersonneRecevoirMail').prop('checked');
	if(filtrePersonneRecevoirMail != null && filtrePersonneRecevoirMail === true)
		filtres.push({ name: 'fq', value: 'personneRecevoirMail:' + filtrePersonneRecevoirMail });

	var filtrePersonneChercher = $formulaireFiltres.find('.valeurPersonneChercher').prop('checked');
	if(filtrePersonneChercher != null && filtrePersonneChercher === true)
		filtres.push({ name: 'fq', value: 'personneChercher:' + filtrePersonneChercher });

	var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
	if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

	var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
	if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
		filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

	var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
	if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
		filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

	var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
	if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
		filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

	var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
	if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
		filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

	var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
	if(filtreSessionId != null && filtreSessionId !== '')
		filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

	var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
	if(filtreObjetTitre != null && filtreObjetTitre !== '')
		filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

	var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
	if(filtrePageUrlId != null && filtrePageUrlId !== '')
		filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

	var filtrePereCle = $formulaireFiltres.find('.valeurPereCle').val();
	if(filtrePereCle != null && filtrePereCle !== '')
		filtres.push({ name: 'fq', value: 'pereCle:' + filtrePereCle });

	var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
	if(filtreFamilleTri != null && filtreFamilleTri !== '')
		filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

	var filtrePereTri = $formulaireFiltres.find('.valeurPereTri').val();
	if(filtrePereTri != null && filtrePereTri !== '')
		filtres.push({ name: 'fq', value: 'pereTri:' + filtrePereTri });

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

	var filtrePersonneRelation = $formulaireFiltres.find('.valeurPersonneRelation').val();
	if(filtrePersonneRelation != null && filtrePersonneRelation !== '')
		filtres.push({ name: 'fq', value: 'personneRelation:' + filtrePersonneRelation });

	var filtrePereNomComplet = $formulaireFiltres.find('.valeurPereNomComplet').val();
	if(filtrePereNomComplet != null && filtrePereNomComplet !== '')
		filtres.push({ name: 'fq', value: 'pereNomComplet:' + filtrePereNomComplet });
	return filtres;
}

function recherchePereScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/pere?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggerePereScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-male w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['pereNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherPereScolaireVals($formulaireFiltres, success, error);
}

function suggerePereScolaireInscriptionCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['pereCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_pereCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_pereCles_" + o['pk'] + "'); patchPereScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#PereScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

async function websocketPereScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketPereScolaire', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-light-blue ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'far fa-male w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modifier pères');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-light-blue ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketInscriptionScolaire', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
		});
	}
}
async function websocketPereScolaireInner(requetePatch) {
	var pk = requetePatch['pk'];
	var pks = requetePatch['pks'];
	var classes = requetePatch['classes'];
	var vars = requetePatch['vars'];
	var empty = requetePatch['empty'];

	if(pk != null) {
		rechercherPereScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('cree')) {
				$('.inputPereScolaire' + pk + 'Cree').val(o['cree']);
				$('.varPereScolaire' + pk + 'Cree').text(o['cree']);
			}
			if(vars.includes('modifie')) {
				$('.inputPereScolaire' + pk + 'Modifie').val(o['modifie']);
				$('.varPereScolaire' + pk + 'Modifie').text(o['modifie']);
			}
			if(vars.includes('archive')) {
				$('.inputPereScolaire' + pk + 'Archive').val(o['archive']);
				$('.varPereScolaire' + pk + 'Archive').text(o['archive']);
			}
			if(vars.includes('supprime')) {
				$('.inputPereScolaire' + pk + 'Supprime').val(o['supprime']);
				$('.varPereScolaire' + pk + 'Supprime').text(o['supprime']);
			}
			if(vars.includes('personnePrenom')) {
				$('.inputPereScolaire' + pk + 'PersonnePrenom').val(o['personnePrenom']);
				$('.varPereScolaire' + pk + 'PersonnePrenom').text(o['personnePrenom']);
			}
			if(vars.includes('familleNom')) {
				$('.inputPereScolaire' + pk + 'FamilleNom').val(o['familleNom']);
				$('.varPereScolaire' + pk + 'FamilleNom').text(o['familleNom']);
			}
			if(vars.includes('personnePrenomPrefere')) {
				$('.inputPereScolaire' + pk + 'PersonnePrenomPrefere').val(o['personnePrenomPrefere']);
				$('.varPereScolaire' + pk + 'PersonnePrenomPrefere').text(o['personnePrenomPrefere']);
			}
			if(vars.includes('personneMail')) {
				$('.inputPereScolaire' + pk + 'PersonneMail').val(o['personneMail']);
				$('.varPereScolaire' + pk + 'PersonneMail').text(o['personneMail']);
			}
			if(vars.includes('personneNumeroTelephone')) {
				$('.inputPereScolaire' + pk + 'PersonneNumeroTelephone').val(o['personneNumeroTelephone']);
				$('.varPereScolaire' + pk + 'PersonneNumeroTelephone').text(o['personneNumeroTelephone']);
			}
			if(vars.includes('personneOccupation')) {
				$('.inputPereScolaire' + pk + 'PersonneOccupation').val(o['personneOccupation']);
				$('.varPereScolaire' + pk + 'PersonneOccupation').text(o['personneOccupation']);
			}
			if(vars.includes('personneSms')) {
				$('.inputPereScolaire' + pk + 'PersonneSms').val(o['personneSms']);
				$('.varPereScolaire' + pk + 'PersonneSms').text(o['personneSms']);
			}
			if(vars.includes('personneContactUrgence')) {
				$('.inputPereScolaire' + pk + 'PersonneContactUrgence').val(o['personneContactUrgence']);
				$('.varPereScolaire' + pk + 'PersonneContactUrgence').text(o['personneContactUrgence']);
			}
			if(vars.includes('personneRecevoirMail')) {
				$('.inputPereScolaire' + pk + 'PersonneRecevoirMail').val(o['personneRecevoirMail']);
				$('.varPereScolaire' + pk + 'PersonneRecevoirMail').text(o['personneRecevoirMail']);
			}
			if(vars.includes('personneChercher')) {
				$('.inputPereScolaire' + pk + 'PersonneChercher').val(o['personneChercher']);
				$('.varPereScolaire' + pk + 'PersonneChercher').text(o['personneChercher']);
			}
			if(vars.includes('inscriptionCles')) {
				$('.inputPereScolaire' + pk + 'InscriptionCles').val(o['inscriptionCles']);
				$('.varPereScolaire' + pk + 'InscriptionCles').text(o['inscriptionCles']);
			}
		});
	}

	if(!empty) {
		if(pks) {
			for(i=0; i < pks.length; i++) {
				var pk2 = pks[i];
				var c = classes[i];
				await window['patch' + c + 'Vals']( [ {name: 'fq', value: 'pk:' + pk2} ], {});
			}
		}
		await patchPereScolaireVals( [ {name: 'fq', value: 'pk:' + pk} ], {});
	}
}

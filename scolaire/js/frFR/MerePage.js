
// POST //

function postMereScolaire($formulaireValeurs, success, error) {
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

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurMereId = $formulaireValeurs.find('.valeurMereId').val();
	if(valeurMereId != null && valeurMereId !== '')
		vals['mereId'] = valeurMereId;

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

	var valeurPersonneRecevoirMail = $formulaireValeurs.find('.valeurPersonneRecevoirMail').prop('checked');
	if(valeurPersonneRecevoirMail != null && valeurPersonneRecevoirMail !== '')
		vals['personneRecevoirMail'] = valeurPersonneRecevoirMail;

	var valeurPersonneContactUrgence = $formulaireValeurs.find('.valeurPersonneContactUrgence').prop('checked');
	if(valeurPersonneContactUrgence != null && valeurPersonneContactUrgence !== '')
		vals['personneContactUrgence'] = valeurPersonneContactUrgence;

	var valeurPersonneChercher = $formulaireValeurs.find('.valeurPersonneChercher').prop('checked');
	if(valeurPersonneChercher != null && valeurPersonneChercher !== '')
		vals['personneChercher'] = valeurPersonneChercher;

	var valeurInscriptionCles = $formulaireValeurs.find('.valeurInscriptionCles').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['inscriptionCles'] = valeurInscriptionCles;

	var valeurMereNomComplet = $formulaireValeurs.find('.valeurMereNomComplet').val();
	if(valeurMereNomComplet != null && valeurMereNomComplet !== '')
		vals['mereNomComplet'] = valeurMereNomComplet;

	$.ajax({
		url: '/api/mere'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postMereScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/mere'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchMereScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchMereScolaireFiltres($formulaireFiltres);

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

	var removeMereId = $formulaireFiltres.find('.removeMereId').val() === 'true';
	var setMereId = removeMereId ? null : $formulaireValeurs.find('.setMereId').val();
	if(removeMereId || setMereId != null && setMereId !== '')
		vals['setMereId'] = setMereId;
	var addMereId = $formulaireValeurs.find('.addMereId').val();
	if(addMereId != null && addMereId !== '')
		vals['addMereId'] = addMereId;
	var removeMereId = $formulaireValeurs.find('.removeMereId').val();
	if(removeMereId != null && removeMereId !== '')
		vals['removeMereId'] = removeMereId;

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

	var removeMereNomComplet = $formulaireFiltres.find('.removeMereNomComplet').val() === 'true';
	var setMereNomComplet = removeMereNomComplet ? null : $formulaireValeurs.find('.setMereNomComplet').val();
	if(removeMereNomComplet || setMereNomComplet != null && setMereNomComplet !== '')
		vals['setMereNomComplet'] = setMereNomComplet;
	var addMereNomComplet = $formulaireValeurs.find('.addMereNomComplet').val();
	if(addMereNomComplet != null && addMereNomComplet !== '')
		vals['addMereNomComplet'] = addMereNomComplet;
	var removeMereNomComplet = $formulaireValeurs.find('.removeMereNomComplet').val();
	if(removeMereNomComplet != null && removeMereNomComplet !== '')
		vals['removeMereNomComplet'] = removeMereNomComplet;

	patchMereScolaireVals(filtres, vals, success, error);
}

function patchMereScolaireFiltres($formulaireFiltres) {
	var filtres = [];

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtreMereId = $formulaireFiltres.find('.valeurMereId').val();
	if(filtreMereId != null && filtreMereId !== '')
		filtres.push({ name: 'fq', value: 'mereId:' + filtreMereId });

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

	var filtrePersonneRecevoirMail = $formulaireFiltres.find('.valeurPersonneRecevoirMail').prop('checked');
	if(filtrePersonneRecevoirMail != null && filtrePersonneRecevoirMail === true)
		filtres.push({ name: 'fq', value: 'personneRecevoirMail:' + filtrePersonneRecevoirMail });

	var filtrePersonneContactUrgence = $formulaireFiltres.find('.valeurPersonneContactUrgence').prop('checked');
	if(filtrePersonneContactUrgence != null && filtrePersonneContactUrgence === true)
		filtres.push({ name: 'fq', value: 'personneContactUrgence:' + filtrePersonneContactUrgence });

	var filtrePersonneChercher = $formulaireFiltres.find('.valeurPersonneChercher').prop('checked');
	if(filtrePersonneChercher != null && filtrePersonneChercher === true)
		filtres.push({ name: 'fq', value: 'personneChercher:' + filtrePersonneChercher });

	var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
	if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

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

	var filtreMereCle = $formulaireFiltres.find('.valeurMereCle').val();
	if(filtreMereCle != null && filtreMereCle !== '')
		filtres.push({ name: 'fq', value: 'mereCle:' + filtreMereCle });

	var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
	if(filtreFamilleTri != null && filtreFamilleTri !== '')
		filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

	var filtreMereTri = $formulaireFiltres.find('.valeurMereTri').val();
	if(filtreMereTri != null && filtreMereTri !== '')
		filtres.push({ name: 'fq', value: 'mereTri:' + filtreMereTri });

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

	var filtreMereNomComplet = $formulaireFiltres.find('.valeurMereNomComplet').val();
	if(filtreMereNomComplet != null && filtreMereNomComplet !== '')
		filtres.push({ name: 'fq', value: 'mereNomComplet:' + filtreMereNomComplet });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });
	return filtres;
}

function patchMereScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchMereScolaireVals(filtres, vals, success, error);
}

function patchMereScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/mere?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getMereScolaire(pk) {
	$.ajax({
		url: '/api/mere/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteMereScolaire(pk) {
	$.ajax({
		url: '/api/mere/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

function rechercheMereScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheMereScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheMereScolaireVals(filtres, success, error);
}

function rechercheMereScolaireFiltres($formulaireFiltres) {
	var filtres = [];

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtreMereId = $formulaireFiltres.find('.valeurMereId').val();
	if(filtreMereId != null && filtreMereId !== '')
		filtres.push({ name: 'fq', value: 'mereId:' + filtreMereId });

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

	var filtrePersonneRecevoirMail = $formulaireFiltres.find('.valeurPersonneRecevoirMail').prop('checked');
	if(filtrePersonneRecevoirMail != null && filtrePersonneRecevoirMail === true)
		filtres.push({ name: 'fq', value: 'personneRecevoirMail:' + filtrePersonneRecevoirMail });

	var filtrePersonneContactUrgence = $formulaireFiltres.find('.valeurPersonneContactUrgence').prop('checked');
	if(filtrePersonneContactUrgence != null && filtrePersonneContactUrgence === true)
		filtres.push({ name: 'fq', value: 'personneContactUrgence:' + filtrePersonneContactUrgence });

	var filtrePersonneChercher = $formulaireFiltres.find('.valeurPersonneChercher').prop('checked');
	if(filtrePersonneChercher != null && filtrePersonneChercher === true)
		filtres.push({ name: 'fq', value: 'personneChercher:' + filtrePersonneChercher });

	var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
	if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

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

	var filtreMereCle = $formulaireFiltres.find('.valeurMereCle').val();
	if(filtreMereCle != null && filtreMereCle !== '')
		filtres.push({ name: 'fq', value: 'mereCle:' + filtreMereCle });

	var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
	if(filtreFamilleTri != null && filtreFamilleTri !== '')
		filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

	var filtreMereTri = $formulaireFiltres.find('.valeurMereTri').val();
	if(filtreMereTri != null && filtreMereTri !== '')
		filtres.push({ name: 'fq', value: 'mereTri:' + filtreMereTri });

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

	var filtreMereNomComplet = $formulaireFiltres.find('.valeurMereNomComplet').val();
	if(filtreMereNomComplet != null && filtreMereNomComplet !== '')
		filtres.push({ name: 'fq', value: 'mereNomComplet:' + filtreMereNomComplet });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });
	return filtres;
}

function rechercheMereScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/mere?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereMereScolaireInscriptionCles($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#MereScolaireForm :input[name="pk"]').val());
			var val = o['mereCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_mereCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_mereCles_" + o['pk'] + "'); patchMereScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" }, function() { patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { ajouterLueur($input); }, function() { ajouterErreur($input); } ); } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaire($formulaireFiltres, success, error);
}

function suggereMereScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-female w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['mereNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherMereScolaireVals($formulaireFiltres, success, error);
}

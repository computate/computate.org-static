
// POST //

async function postPaiementScolaire($formulaireValeurs, success, error) {
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

	var valeurPaiementDate = $formulaireValeurs.find('.valeurPaiementDate').val();
	if(valeurPaiementDate != null && valeurPaiementDate !== '')
		vals['paiementDate'] = valeurPaiementDate;

	var valeurPaiementMontant = $formulaireValeurs.find('.valeurPaiementMontant').val();
	if(valeurPaiementMontant != null && valeurPaiementMontant !== '')
		vals['paiementMontant'] = valeurPaiementMontant;

	var valeurPaiementEspeces = $formulaireValeurs.find('.valeurPaiementEspeces').prop('checked');
	if(valeurPaiementEspeces != null && valeurPaiementEspeces !== '')
		vals['paiementEspeces'] = valeurPaiementEspeces;

	var valeurPaiementCheque = $formulaireValeurs.find('.valeurPaiementCheque').prop('checked');
	if(valeurPaiementCheque != null && valeurPaiementCheque !== '')
		vals['paiementCheque'] = valeurPaiementCheque;

	var valeurPaiementDescription = $formulaireValeurs.find('.valeurPaiementDescription').val();
	if(valeurPaiementDescription != null && valeurPaiementDescription !== '')
		vals['paiementDescription'] = valeurPaiementDescription;

	var valeurInscriptionCles = $formulaireValeurs.find('.valeurInscriptionCles').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['inscriptionCles'] = valeurInscriptionCles;

	var valeurPaiementNomComplet = $formulaireValeurs.find('.valeurPaiementNomComplet').val();
	if(valeurPaiementNomComplet != null && valeurPaiementNomComplet !== '')
		vals['paiementNomComplet'] = valeurPaiementNomComplet;

	$.ajax({
		url: '/api/paiement'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postPaiementScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/paiement'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchPaiementScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchPaiementScolaireFiltres($formulaireFiltres);

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

	var removePaiementDate = $formulaireFiltres.find('.removePaiementDate').val() === 'true';
	var setPaiementDate = removePaiementDate ? null : $formulaireValeurs.find('.setPaiementDate').val();
	if(removePaiementDate || setPaiementDate != null && setPaiementDate !== '')
		vals['setPaiementDate'] = setPaiementDate;
	var addPaiementDate = $formulaireValeurs.find('.addPaiementDate').val();
	if(addPaiementDate != null && addPaiementDate !== '')
		vals['addPaiementDate'] = addPaiementDate;
	var removePaiementDate = $formulaireValeurs.find('.removePaiementDate').val();
	if(removePaiementDate != null && removePaiementDate !== '')
		vals['removePaiementDate'] = removePaiementDate;

	var removePaiementMontant = $formulaireFiltres.find('.removePaiementMontant').val() === 'true';
	var setPaiementMontant = removePaiementMontant ? null : $formulaireValeurs.find('.setPaiementMontant').val();
	if(removePaiementMontant || setPaiementMontant != null && setPaiementMontant !== '')
		vals['setPaiementMontant'] = setPaiementMontant;
	var addPaiementMontant = $formulaireValeurs.find('.addPaiementMontant').val();
	if(addPaiementMontant != null && addPaiementMontant !== '')
		vals['addPaiementMontant'] = addPaiementMontant;
	var removePaiementMontant = $formulaireValeurs.find('.removePaiementMontant').val();
	if(removePaiementMontant != null && removePaiementMontant !== '')
		vals['removePaiementMontant'] = removePaiementMontant;

	var removePaiementEspeces = $formulaireFiltres.find('.removePaiementEspeces').val() === 'true';
	var setPaiementEspeces = removePaiementEspeces ? null : $formulaireValeurs.find('.setPaiementEspeces').prop('checked');
	if(removePaiementEspeces || setPaiementEspeces != null && setPaiementEspeces !== '')
		vals['setPaiementEspeces'] = setPaiementEspeces;
	var addPaiementEspeces = $formulaireValeurs.find('.addPaiementEspeces').prop('checked');
	if(addPaiementEspeces != null && addPaiementEspeces !== '')
		vals['addPaiementEspeces'] = addPaiementEspeces;
	var removePaiementEspeces = $formulaireValeurs.find('.removePaiementEspeces').prop('checked');
	if(removePaiementEspeces != null && removePaiementEspeces !== '')
		vals['removePaiementEspeces'] = removePaiementEspeces;

	var removePaiementCheque = $formulaireFiltres.find('.removePaiementCheque').val() === 'true';
	var setPaiementCheque = removePaiementCheque ? null : $formulaireValeurs.find('.setPaiementCheque').prop('checked');
	if(removePaiementCheque || setPaiementCheque != null && setPaiementCheque !== '')
		vals['setPaiementCheque'] = setPaiementCheque;
	var addPaiementCheque = $formulaireValeurs.find('.addPaiementCheque').prop('checked');
	if(addPaiementCheque != null && addPaiementCheque !== '')
		vals['addPaiementCheque'] = addPaiementCheque;
	var removePaiementCheque = $formulaireValeurs.find('.removePaiementCheque').prop('checked');
	if(removePaiementCheque != null && removePaiementCheque !== '')
		vals['removePaiementCheque'] = removePaiementCheque;

	var removePaiementDescription = $formulaireFiltres.find('.removePaiementDescription').val() === 'true';
	var setPaiementDescription = removePaiementDescription ? null : $formulaireValeurs.find('.setPaiementDescription').val();
	if(removePaiementDescription || setPaiementDescription != null && setPaiementDescription !== '')
		vals['setPaiementDescription'] = setPaiementDescription;
	var addPaiementDescription = $formulaireValeurs.find('.addPaiementDescription').val();
	if(addPaiementDescription != null && addPaiementDescription !== '')
		vals['addPaiementDescription'] = addPaiementDescription;
	var removePaiementDescription = $formulaireValeurs.find('.removePaiementDescription').val();
	if(removePaiementDescription != null && removePaiementDescription !== '')
		vals['removePaiementDescription'] = removePaiementDescription;

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

	var removePaiementNomComplet = $formulaireFiltres.find('.removePaiementNomComplet').val() === 'true';
	var setPaiementNomComplet = removePaiementNomComplet ? null : $formulaireValeurs.find('.setPaiementNomComplet').val();
	if(removePaiementNomComplet || setPaiementNomComplet != null && setPaiementNomComplet !== '')
		vals['setPaiementNomComplet'] = setPaiementNomComplet;
	var addPaiementNomComplet = $formulaireValeurs.find('.addPaiementNomComplet').val();
	if(addPaiementNomComplet != null && addPaiementNomComplet !== '')
		vals['addPaiementNomComplet'] = addPaiementNomComplet;
	var removePaiementNomComplet = $formulaireValeurs.find('.removePaiementNomComplet').val();
	if(removePaiementNomComplet != null && removePaiementNomComplet !== '')
		vals['removePaiementNomComplet'] = removePaiementNomComplet;

	patchPaiementScolaireVals(filtres, vals, success, error);
}

function patchPaiementScolaireFiltres($formulaireFiltres) {
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

	var filtrePaiementDate = $formulaireFiltres.find('.valeurPaiementDate').val();
	if(filtrePaiementDate != null && filtrePaiementDate !== '')
		filtres.push({ name: 'fq', value: 'paiementDate:' + filtrePaiementDate });

	var filtrePaiementMontant = $formulaireFiltres.find('.valeurPaiementMontant').val();
	if(filtrePaiementMontant != null && filtrePaiementMontant !== '')
		filtres.push({ name: 'fq', value: 'paiementMontant:' + filtrePaiementMontant });

	var filtrePaiementEspeces = $formulaireFiltres.find('.valeurPaiementEspeces').prop('checked');
	if(filtrePaiementEspeces != null && filtrePaiementEspeces === true)
		filtres.push({ name: 'fq', value: 'paiementEspeces:' + filtrePaiementEspeces });

	var filtrePaiementCheque = $formulaireFiltres.find('.valeurPaiementCheque').prop('checked');
	if(filtrePaiementCheque != null && filtrePaiementCheque === true)
		filtres.push({ name: 'fq', value: 'paiementCheque:' + filtrePaiementCheque });

	var filtrePaiementDescription = $formulaireFiltres.find('.valeurPaiementDescription').val();
	if(filtrePaiementDescription != null && filtrePaiementDescription !== '')
		filtres.push({ name: 'fq', value: 'paiementDescription:' + filtrePaiementDescription });

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

	var filtreEcoleCles = $formulaireFiltres.find('.valeurEcoleCles').val();
	if(filtreEcoleCles != null && filtreEcoleCles !== '')
		filtres.push({ name: 'fq', value: 'ecoleCles:' + filtreEcoleCles });

	var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
	if(filtreSaisonCle != null && filtreSaisonCle !== '')
		filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

	var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
	if(filtreSessionCles != null && filtreSessionCles !== '')
		filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

	var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
	if(filtreAgeCles != null && filtreAgeCles !== '')
		filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

	var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
	if(filtreBlocCles != null && filtreBlocCles !== '')
		filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

	var filtrePaiementCle = $formulaireFiltres.find('.valeurPaiementCle').val();
	if(filtrePaiementCle != null && filtrePaiementCle !== '')
		filtres.push({ name: 'fq', value: 'paiementCle:' + filtrePaiementCle });

	var filtreEnfantCles = $formulaireFiltres.find('.valeurEnfantCles').val();
	if(filtreEnfantCles != null && filtreEnfantCles !== '')
		filtres.push({ name: 'fq', value: 'enfantCles:' + filtreEnfantCles });

	var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
	if(filtreMereCles != null && filtreMereCles !== '')
		filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

	var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
	if(filtrePereCles != null && filtrePereCles !== '')
		filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

	var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
	if(filtreGardienCles != null && filtreGardienCles !== '')
		filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

	var filtreContactCles = $formulaireFiltres.find('.valeurContactCles').val();
	if(filtreContactCles != null && filtreContactCles !== '')
		filtres.push({ name: 'fq', value: 'contactCles:' + filtreContactCles });

	var filtrePaiementSysteme = $formulaireFiltres.find('.valeurPaiementSysteme').prop('checked');
	if(filtrePaiementSysteme != null && filtrePaiementSysteme === true)
		filtres.push({ name: 'fq', value: 'paiementSysteme:' + filtrePaiementSysteme });

	var filtrePaiementNomComplet = $formulaireFiltres.find('.valeurPaiementNomComplet').val();
	if(filtrePaiementNomComplet != null && filtrePaiementNomComplet !== '')
		filtres.push({ name: 'fq', value: 'paiementNomComplet:' + filtrePaiementNomComplet });
	return filtres;
}

function patchPaiementScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchPaiementScolaireVals(filtres, vals, success, error);
}

function patchPaiementScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/paiement?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getPaiementScolaire(pk) {
	$.ajax({
		url: '/api/paiement/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

async function deletePaiementScolaire(pk) {
	$.ajax({
		url: '/api/paiement/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

async function recherchePaiementScolaire($formulaireFiltres, success, error) {
	var filtres = recherchePaiementScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	recherchePaiementScolaireVals(filtres, success, error);
}

function recherchePaiementScolaireFiltres($formulaireFiltres) {
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

	var filtrePaiementDate = $formulaireFiltres.find('.valeurPaiementDate').val();
	if(filtrePaiementDate != null && filtrePaiementDate !== '')
		filtres.push({ name: 'fq', value: 'paiementDate:' + filtrePaiementDate });

	var filtrePaiementMontant = $formulaireFiltres.find('.valeurPaiementMontant').val();
	if(filtrePaiementMontant != null && filtrePaiementMontant !== '')
		filtres.push({ name: 'fq', value: 'paiementMontant:' + filtrePaiementMontant });

	var filtrePaiementEspeces = $formulaireFiltres.find('.valeurPaiementEspeces').prop('checked');
	if(filtrePaiementEspeces != null && filtrePaiementEspeces === true)
		filtres.push({ name: 'fq', value: 'paiementEspeces:' + filtrePaiementEspeces });

	var filtrePaiementCheque = $formulaireFiltres.find('.valeurPaiementCheque').prop('checked');
	if(filtrePaiementCheque != null && filtrePaiementCheque === true)
		filtres.push({ name: 'fq', value: 'paiementCheque:' + filtrePaiementCheque });

	var filtrePaiementDescription = $formulaireFiltres.find('.valeurPaiementDescription').val();
	if(filtrePaiementDescription != null && filtrePaiementDescription !== '')
		filtres.push({ name: 'fq', value: 'paiementDescription:' + filtrePaiementDescription });

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

	var filtreEcoleCles = $formulaireFiltres.find('.valeurEcoleCles').val();
	if(filtreEcoleCles != null && filtreEcoleCles !== '')
		filtres.push({ name: 'fq', value: 'ecoleCles:' + filtreEcoleCles });

	var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
	if(filtreSaisonCle != null && filtreSaisonCle !== '')
		filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

	var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
	if(filtreSessionCles != null && filtreSessionCles !== '')
		filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

	var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
	if(filtreAgeCles != null && filtreAgeCles !== '')
		filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

	var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
	if(filtreBlocCles != null && filtreBlocCles !== '')
		filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

	var filtrePaiementCle = $formulaireFiltres.find('.valeurPaiementCle').val();
	if(filtrePaiementCle != null && filtrePaiementCle !== '')
		filtres.push({ name: 'fq', value: 'paiementCle:' + filtrePaiementCle });

	var filtreEnfantCles = $formulaireFiltres.find('.valeurEnfantCles').val();
	if(filtreEnfantCles != null && filtreEnfantCles !== '')
		filtres.push({ name: 'fq', value: 'enfantCles:' + filtreEnfantCles });

	var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
	if(filtreMereCles != null && filtreMereCles !== '')
		filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

	var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
	if(filtrePereCles != null && filtrePereCles !== '')
		filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

	var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
	if(filtreGardienCles != null && filtreGardienCles !== '')
		filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

	var filtreContactCles = $formulaireFiltres.find('.valeurContactCles').val();
	if(filtreContactCles != null && filtreContactCles !== '')
		filtres.push({ name: 'fq', value: 'contactCles:' + filtreContactCles });

	var filtrePaiementSysteme = $formulaireFiltres.find('.valeurPaiementSysteme').prop('checked');
	if(filtrePaiementSysteme != null && filtrePaiementSysteme === true)
		filtres.push({ name: 'fq', value: 'paiementSysteme:' + filtrePaiementSysteme });

	var filtrePaiementNomComplet = $formulaireFiltres.find('.valeurPaiementNomComplet').val();
	if(filtrePaiementNomComplet != null && filtrePaiementNomComplet !== '')
		filtres.push({ name: 'fq', value: 'paiementNomComplet:' + filtrePaiementNomComplet });
	return filtres;
}

function recherchePaiementScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/paiement?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggerePaiementScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-search-dollar w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['paiementNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherPaiementScolaireVals($formulaireFiltres, success, error);
}

function suggerePaiementScolaireInscriptionCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['paiementCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_paiementCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_paiementCles_" + o['pk'] + "'); patchPaiementScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#PaiementScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

async function websocketPaiementScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketPaiementScolaire', function (error, message) {
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
				var $i = $('<i>').attr('class', 'fas fa-search-dollar w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modifier paiements');
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

		window.eventBus.registerHandler('websocketInscriptionScolaire', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
		});
	}
}
async function websocketPaiementScolaireInner(requetePatch) {
	var pk = requetePatch['pk'];
	var pks = requetePatch['pks'];
	var classes = requetePatch['classes'];
	var vars = requetePatch['vars'];
	var empty = requetePatch['empty'];

	if(pk != null) {
		rechercherPaiementScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('cree')) {
				$('.inputPaiementScolaire' + pk + 'Cree').val(o['cree']);
				$('.varPaiementScolaire' + pk + 'Cree').text(o['cree']);
			}
			if(vars.includes('modifie')) {
				$('.inputPaiementScolaire' + pk + 'Modifie').val(o['modifie']);
				$('.varPaiementScolaire' + pk + 'Modifie').text(o['modifie']);
			}
			if(vars.includes('archive')) {
				$('.inputPaiementScolaire' + pk + 'Archive').val(o['archive']);
				$('.varPaiementScolaire' + pk + 'Archive').text(o['archive']);
			}
			if(vars.includes('supprime')) {
				$('.inputPaiementScolaire' + pk + 'Supprime').val(o['supprime']);
				$('.varPaiementScolaire' + pk + 'Supprime').text(o['supprime']);
			}
			if(vars.includes('paiementDate')) {
				$('.inputPaiementScolaire' + pk + 'PaiementDate').val(o['paiementDate']);
				$('.varPaiementScolaire' + pk + 'PaiementDate').text(o['paiementDate']);
			}
			if(vars.includes('paiementMontant')) {
				$('.inputPaiementScolaire' + pk + 'PaiementMontant').val(o['paiementMontant']);
				$('.varPaiementScolaire' + pk + 'PaiementMontant').text(o['paiementMontant']);
			}
			if(vars.includes('paiementEspeces')) {
				$('.inputPaiementScolaire' + pk + 'PaiementEspeces').val(o['paiementEspeces']);
				$('.varPaiementScolaire' + pk + 'PaiementEspeces').text(o['paiementEspeces']);
			}
			if(vars.includes('paiementCheque')) {
				$('.inputPaiementScolaire' + pk + 'PaiementCheque').val(o['paiementCheque']);
				$('.varPaiementScolaire' + pk + 'PaiementCheque').text(o['paiementCheque']);
			}
			if(vars.includes('paiementDescription')) {
				$('.inputPaiementScolaire' + pk + 'PaiementDescription').val(o['paiementDescription']);
				$('.varPaiementScolaire' + pk + 'PaiementDescription').text(o['paiementDescription']);
			}
			if(vars.includes('inscriptionCles')) {
				$('.inputPaiementScolaire' + pk + 'InscriptionCles').val(o['inscriptionCles']);
				$('.varPaiementScolaire' + pk + 'InscriptionCles').text(o['inscriptionCles']);
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
		await patchPaiementScolaireVals( [ {name: 'fq', value: 'pk:' + pk} ], {});
	}
}

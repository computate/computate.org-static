
// POST //

function postPaiementScolaire($formulaireValeurs) {
	var vals = {};

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurPaiementId = $formulaireValeurs.find('.valeurPaiementId').val();
	if(valeurPaiementId != null && valeurPaiementId !== '')
		vals['paiementId'] = valeurPaiementId;

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

function patchPaiementScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchPaiementScolaireFiltres($formulaireFiltres);

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

	var removePaiementId = $formulaireFiltres.find('.removePaiementId').val() === 'true';
	var setPaiementId = removePaiementId ? null : $formulaireValeurs.find('.setPaiementId').val();
	if(removePaiementId || setPaiementId != null && setPaiementId !== '')
		vals['setPaiementId'] = setPaiementId;
	var addPaiementId = $formulaireValeurs.find('.addPaiementId').val();
	if(addPaiementId != null && addPaiementId !== '')
		vals['addPaiementId'] = addPaiementId;
	var removePaiementId = $formulaireValeurs.find('.removePaiementId').val();
	if(removePaiementId != null && removePaiementId !== '')
		vals['removePaiementId'] = removePaiementId;

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

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtrePaiementId = $formulaireFiltres.find('.valeurPaiementId').val();
	if(filtrePaiementId != null && filtrePaiementId !== '')
		filtres.push({ name: 'fq', value: 'paiementId:' + filtrePaiementId });

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

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });
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

function getPaiementScolaire(pk) {
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

function deletePaiementScolaire(pk) {
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

function recherchePaiementScolaire($formulaireFiltres, success, error) {
	var filtres = recherchePaiementScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	recherchePaiementScolaireVals(filtres, success, error);
}

function recherchePaiementScolaireFiltres($formulaireFiltres) {
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

	var filtrePaiementId = $formulaireFiltres.find('.valeurPaiementId').val();
	if(filtrePaiementId != null && filtrePaiementId !== '')
		filtres.push({ name: 'fq', value: 'paiementId:' + filtrePaiementId });

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

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });
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

function suggerePaiementScolaireInscriptionCles($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#PaiementScolaireForm :input[name="pk"]').val());
			var val = o['paiementCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_paiementCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_paiementCles_" + o['pk'] + "'); patchPaiementScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" }, function() { patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { ajouterLueur($input); }, function() { ajouterErreur($input); } ); } ); ");
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

function suggerePaiementScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-search-dollar w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['paiementNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherPaiementScolaireVals($formulaireFiltres, success, error);
}

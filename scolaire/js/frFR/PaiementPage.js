
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

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

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

	var valeurPaiementECheck = $formulaireValeurs.find('.valeurPaiementECheck').prop('checked');
	if(valeurPaiementECheck != null && valeurPaiementECheck !== '')
		vals['paiementECheck'] = valeurPaiementECheck;

	var valeurPaiementSysteme = $formulaireValeurs.find('.valeurPaiementSysteme').prop('checked');
	if(valeurPaiementSysteme != null && valeurPaiementSysteme !== '')
		vals['paiementSysteme'] = valeurPaiementSysteme;

	var valeurPaiementDescription = $formulaireValeurs.find('.valeurPaiementDescription').val();
	if(valeurPaiementDescription != null && valeurPaiementDescription !== '')
		vals['paiementDescription'] = valeurPaiementDescription;

	var valeurPaiementPar = $formulaireValeurs.find('.valeurPaiementPar').val();
	if(valeurPaiementPar != null && valeurPaiementPar !== '')
		vals['paiementPar'] = valeurPaiementPar;

	var valeurInscriptionPaimentComplet = $formulaireValeurs.find('.valeurInscriptionPaimentComplet').prop('checked');
	if(valeurInscriptionPaimentComplet != null && valeurInscriptionPaimentComplet !== '')
		vals['inscriptionPaimentComplet'] = valeurInscriptionPaimentComplet;

	var valeurInscriptionPaimentChaqueMois = $formulaireValeurs.find('.valeurInscriptionPaimentChaqueMois').prop('checked');
	if(valeurInscriptionPaimentChaqueMois != null && valeurInscriptionPaimentChaqueMois !== '')
		vals['inscriptionPaimentChaqueMois'] = valeurInscriptionPaimentChaqueMois;

	var valeurTransactionId = $formulaireValeurs.find('.valeurTransactionId').val();
	if(valeurTransactionId != null && valeurTransactionId !== '')
		vals['transactionId'] = valeurTransactionId;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
		vals['customerProfileId'] = valeurCustomerProfileId;

	var valeurTransactionStatus = $formulaireValeurs.find('.valeurTransactionStatus').val();
	if(valeurTransactionStatus != null && valeurTransactionStatus !== '')
		vals['transactionStatus'] = valeurTransactionStatus;

	var valeurPaiementRecu = $formulaireValeurs.find('.valeurPaiementRecu').prop('checked');
	if(valeurPaiementRecu != null && valeurPaiementRecu !== '')
		vals['paiementRecu'] = valeurPaiementRecu;

	var valeurFraisMontant = $formulaireValeurs.find('.valeurFraisMontant').val();
	if(valeurFraisMontant != null && valeurFraisMontant !== '')
		vals['fraisMontant'] = valeurFraisMontant;

	var valeurFraisPremierDernier = $formulaireValeurs.find('.valeurFraisPremierDernier').prop('checked');
	if(valeurFraisPremierDernier != null && valeurFraisPremierDernier !== '')
		vals['fraisPremierDernier'] = valeurFraisPremierDernier;

	var valeurFraisInscription = $formulaireValeurs.find('.valeurFraisInscription').prop('checked');
	if(valeurFraisInscription != null && valeurFraisInscription !== '')
		vals['fraisInscription'] = valeurFraisInscription;

	var valeurFraisMois = $formulaireValeurs.find('.valeurFraisMois').prop('checked');
	if(valeurFraisMois != null && valeurFraisMois !== '')
		vals['fraisMois'] = valeurFraisMois;

	var valeurFraisRetard = $formulaireValeurs.find('.valeurFraisRetard').prop('checked');
	if(valeurFraisRetard != null && valeurFraisRetard !== '')
		vals['fraisRetard'] = valeurFraisRetard;

		vals['inscriptionCle'] = [valeurInscriptionCle];
	if(valeurInscriptionCle != null && valeurInscriptionCle !== '')
		vals['inscriptionCle'] = valeurInscriptionCle;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
		vals['sessionId'] = valeurSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
		vals['utilisateurId'] = valeurUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
		vals['utilisateurCle'] = valeurUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	var valeurEnfantNomCompletPrefere = $formulaireValeurs.find('.valeurEnfantNomCompletPrefere').val();
	if(valeurEnfantNomCompletPrefere != null && valeurEnfantNomCompletPrefere !== '')
		vals['enfantNomCompletPrefere'] = valeurEnfantNomCompletPrefere;

	var valeurEnfantDateNaissance = $formulaireValeurs.find('.valeurEnfantDateNaissance').val();
	if(valeurEnfantDateNaissance != null && valeurEnfantDateNaissance !== '')
		vals['enfantDateNaissance'] = valeurEnfantDateNaissance;

	var valeurMereNomCompletPrefere = $formulaireValeurs.find('.valeurMereNomCompletPrefere').val();
	if(valeurMereNomCompletPrefere != null && valeurMereNomCompletPrefere !== '')
		vals['mereNomCompletPrefere'] = valeurMereNomCompletPrefere;

	var valeurPereNomCompletPrefere = $formulaireValeurs.find('.valeurPereNomCompletPrefere').val();
	if(valeurPereNomCompletPrefere != null && valeurPereNomCompletPrefere !== '')
		vals['pereNomCompletPrefere'] = valeurPereNomCompletPrefere;

	var valeurFraisMontantDu = $formulaireValeurs.find('.valeurFraisMontantDu').val();
	if(valeurFraisMontantDu != null && valeurFraisMontantDu !== '')
		vals['fraisMontantDu'] = valeurFraisMontantDu;

	var valeurFraisMontantFuture = $formulaireValeurs.find('.valeurFraisMontantFuture').val();
	if(valeurFraisMontantFuture != null && valeurFraisMontantFuture !== '')
		vals['fraisMontantFuture'] = valeurFraisMontantFuture;

	var valeurPaiementNomCourt = $formulaireValeurs.find('.valeurPaiementNomCourt').val();
	if(valeurPaiementNomCourt != null && valeurPaiementNomCourt !== '')
		vals['paiementNomCourt'] = valeurPaiementNomCourt;

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

// PUTImport //

async function putimportPaiementScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportPaiementScolaireVals(JSON.parse(json), success, error);
}

function putimportPaiementScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/paiement/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionPaiementScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionPaiementScolaireVals(JSON.parse(json), success, error);
}

function putfusionPaiementScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/paiement/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopiePaiementScolaire($formulaireValeurs, pk, success, error) {
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

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

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

	var valeurPaiementECheck = $formulaireValeurs.find('.valeurPaiementECheck').prop('checked');
	if(valeurPaiementECheck != null && valeurPaiementECheck !== '')
		vals['paiementECheck'] = valeurPaiementECheck;

	var valeurPaiementSysteme = $formulaireValeurs.find('.valeurPaiementSysteme').prop('checked');
	if(valeurPaiementSysteme != null && valeurPaiementSysteme !== '')
		vals['paiementSysteme'] = valeurPaiementSysteme;

	var valeurPaiementDescription = $formulaireValeurs.find('.valeurPaiementDescription').val();
	if(valeurPaiementDescription != null && valeurPaiementDescription !== '')
		vals['paiementDescription'] = valeurPaiementDescription;

	var valeurPaiementPar = $formulaireValeurs.find('.valeurPaiementPar').val();
	if(valeurPaiementPar != null && valeurPaiementPar !== '')
		vals['paiementPar'] = valeurPaiementPar;

	var valeurInscriptionPaimentComplet = $formulaireValeurs.find('.valeurInscriptionPaimentComplet').prop('checked');
	if(valeurInscriptionPaimentComplet != null && valeurInscriptionPaimentComplet !== '')
		vals['inscriptionPaimentComplet'] = valeurInscriptionPaimentComplet;

	var valeurInscriptionPaimentChaqueMois = $formulaireValeurs.find('.valeurInscriptionPaimentChaqueMois').prop('checked');
	if(valeurInscriptionPaimentChaqueMois != null && valeurInscriptionPaimentChaqueMois !== '')
		vals['inscriptionPaimentChaqueMois'] = valeurInscriptionPaimentChaqueMois;

	var valeurTransactionId = $formulaireValeurs.find('.valeurTransactionId').val();
	if(valeurTransactionId != null && valeurTransactionId !== '')
		vals['transactionId'] = valeurTransactionId;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
		vals['customerProfileId'] = valeurCustomerProfileId;

	var valeurTransactionStatus = $formulaireValeurs.find('.valeurTransactionStatus').val();
	if(valeurTransactionStatus != null && valeurTransactionStatus !== '')
		vals['transactionStatus'] = valeurTransactionStatus;

	var valeurPaiementRecu = $formulaireValeurs.find('.valeurPaiementRecu').prop('checked');
	if(valeurPaiementRecu != null && valeurPaiementRecu !== '')
		vals['paiementRecu'] = valeurPaiementRecu;

	var valeurFraisMontant = $formulaireValeurs.find('.valeurFraisMontant').val();
	if(valeurFraisMontant != null && valeurFraisMontant !== '')
		vals['fraisMontant'] = valeurFraisMontant;

	var valeurFraisPremierDernier = $formulaireValeurs.find('.valeurFraisPremierDernier').prop('checked');
	if(valeurFraisPremierDernier != null && valeurFraisPremierDernier !== '')
		vals['fraisPremierDernier'] = valeurFraisPremierDernier;

	var valeurFraisInscription = $formulaireValeurs.find('.valeurFraisInscription').prop('checked');
	if(valeurFraisInscription != null && valeurFraisInscription !== '')
		vals['fraisInscription'] = valeurFraisInscription;

	var valeurFraisMois = $formulaireValeurs.find('.valeurFraisMois').prop('checked');
	if(valeurFraisMois != null && valeurFraisMois !== '')
		vals['fraisMois'] = valeurFraisMois;

	var valeurFraisRetard = $formulaireValeurs.find('.valeurFraisRetard').prop('checked');
	if(valeurFraisRetard != null && valeurFraisRetard !== '')
		vals['fraisRetard'] = valeurFraisRetard;

	var valeurInscriptionCle = $formulaireValeurs.find('input.valeurInscriptionCle:checked').val();
	if(valeurInscriptionCle != null && valeurInscriptionCle !== '')
		vals['inscriptionCle'] = valeurInscriptionCle;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
		vals['sessionId'] = valeurSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
		vals['utilisateurId'] = valeurUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
		vals['utilisateurCle'] = valeurUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	var valeurEnfantNomCompletPrefere = $formulaireValeurs.find('.valeurEnfantNomCompletPrefere').val();
	if(valeurEnfantNomCompletPrefere != null && valeurEnfantNomCompletPrefere !== '')
		vals['enfantNomCompletPrefere'] = valeurEnfantNomCompletPrefere;

	var valeurEnfantDateNaissance = $formulaireValeurs.find('.valeurEnfantDateNaissance').val();
	if(valeurEnfantDateNaissance != null && valeurEnfantDateNaissance !== '')
		vals['enfantDateNaissance'] = valeurEnfantDateNaissance;

	var valeurMereNomCompletPrefere = $formulaireValeurs.find('.valeurMereNomCompletPrefere').val();
	if(valeurMereNomCompletPrefere != null && valeurMereNomCompletPrefere !== '')
		vals['mereNomCompletPrefere'] = valeurMereNomCompletPrefere;

	var valeurPereNomCompletPrefere = $formulaireValeurs.find('.valeurPereNomCompletPrefere').val();
	if(valeurPereNomCompletPrefere != null && valeurPereNomCompletPrefere !== '')
		vals['pereNomCompletPrefere'] = valeurPereNomCompletPrefere;

	var valeurFraisMontantDu = $formulaireValeurs.find('.valeurFraisMontantDu').val();
	if(valeurFraisMontantDu != null && valeurFraisMontantDu !== '')
		vals['fraisMontantDu'] = valeurFraisMontantDu;

	var valeurFraisMontantFuture = $formulaireValeurs.find('.valeurFraisMontantFuture').val();
	if(valeurFraisMontantFuture != null && valeurFraisMontantFuture !== '')
		vals['fraisMontantFuture'] = valeurFraisMontantFuture;

	var valeurPaiementNomCourt = $formulaireValeurs.find('.valeurPaiementNomCourt').val();
	if(valeurPaiementNomCourt != null && valeurPaiementNomCourt !== '')
		vals['paiementNomCourt'] = valeurPaiementNomCourt;

	putcopiePaiementScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopiePaiementScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/paiement/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchPaiementScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchPaiementScolaireFiltres($formulaireFiltres);

	var vals = {};

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
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

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
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

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
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

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
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

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
	var removeArchive = $formulaireFiltres.find('.removeArchive').val() === 'true';
	var valeurArchiveSelectVal = $formulaireValeurs.find('select.setArchive').val();
	var valeurArchive = null;
	if(valeurArchiveSelectVal !== '')
		valeurArchive = valeurArchiveSelectVal == 'true';
	setArchive = removeArchive ? null : valeurArchive;
	if(removeArchive || setArchive != null && setArchive !== '')
		vals['setArchive'] = setArchive;
	var addArchive = $formulaireValeurs.find('.addArchive').prop('checked');
	if(addArchive != null && addArchive !== '')
		vals['addArchive'] = addArchive;
	var removeArchive = $formulaireValeurs.find('.removeArchive').prop('checked');
	if(removeArchive != null && removeArchive !== '')
		vals['removeArchive'] = removeArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
	var removeSupprime = $formulaireFiltres.find('.removeSupprime').val() === 'true';
	var valeurSupprimeSelectVal = $formulaireValeurs.find('select.setSupprime').val();
	var valeurSupprime = null;
	if(valeurSupprimeSelectVal !== '')
		valeurSupprime = valeurSupprimeSelectVal == 'true';
	setSupprime = removeSupprime ? null : valeurSupprime;
	if(removeSupprime || setSupprime != null && setSupprime !== '')
		vals['setSupprime'] = setSupprime;
	var addSupprime = $formulaireValeurs.find('.addSupprime').prop('checked');
	if(addSupprime != null && addSupprime !== '')
		vals['addSupprime'] = addSupprime;
	var removeSupprime = $formulaireValeurs.find('.removeSupprime').prop('checked');
	if(removeSupprime != null && removeSupprime !== '')
		vals['removeSupprime'] = removeSupprime;

	var valeurPaiementDate = $formulaireValeurs.find('.valeurPaiementDate').val();
	if(valeurPaiementDate != null && valeurPaiementDate !== '')
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

	var valeurPaiementMontant = $formulaireValeurs.find('.valeurPaiementMontant').val();
	if(valeurPaiementMontant != null && valeurPaiementMontant !== '')
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

	var valeurPaiementEspeces = $formulaireValeurs.find('.valeurPaiementEspeces').prop('checked');
	if(valeurPaiementEspeces != null && valeurPaiementEspeces !== '')
	var removePaiementEspeces = $formulaireFiltres.find('.removePaiementEspeces').val() === 'true';
	var valeurPaiementEspecesSelectVal = $formulaireValeurs.find('select.setPaiementEspeces').val();
	var valeurPaiementEspeces = null;
	if(valeurPaiementEspecesSelectVal !== '')
		valeurPaiementEspeces = valeurPaiementEspecesSelectVal == 'true';
	setPaiementEspeces = removePaiementEspeces ? null : valeurPaiementEspeces;
	if(removePaiementEspeces || setPaiementEspeces != null && setPaiementEspeces !== '')
		vals['setPaiementEspeces'] = setPaiementEspeces;
	var addPaiementEspeces = $formulaireValeurs.find('.addPaiementEspeces').prop('checked');
	if(addPaiementEspeces != null && addPaiementEspeces !== '')
		vals['addPaiementEspeces'] = addPaiementEspeces;
	var removePaiementEspeces = $formulaireValeurs.find('.removePaiementEspeces').prop('checked');
	if(removePaiementEspeces != null && removePaiementEspeces !== '')
		vals['removePaiementEspeces'] = removePaiementEspeces;

	var valeurPaiementCheque = $formulaireValeurs.find('.valeurPaiementCheque').prop('checked');
	if(valeurPaiementCheque != null && valeurPaiementCheque !== '')
	var removePaiementCheque = $formulaireFiltres.find('.removePaiementCheque').val() === 'true';
	var valeurPaiementChequeSelectVal = $formulaireValeurs.find('select.setPaiementCheque').val();
	var valeurPaiementCheque = null;
	if(valeurPaiementChequeSelectVal !== '')
		valeurPaiementCheque = valeurPaiementChequeSelectVal == 'true';
	setPaiementCheque = removePaiementCheque ? null : valeurPaiementCheque;
	if(removePaiementCheque || setPaiementCheque != null && setPaiementCheque !== '')
		vals['setPaiementCheque'] = setPaiementCheque;
	var addPaiementCheque = $formulaireValeurs.find('.addPaiementCheque').prop('checked');
	if(addPaiementCheque != null && addPaiementCheque !== '')
		vals['addPaiementCheque'] = addPaiementCheque;
	var removePaiementCheque = $formulaireValeurs.find('.removePaiementCheque').prop('checked');
	if(removePaiementCheque != null && removePaiementCheque !== '')
		vals['removePaiementCheque'] = removePaiementCheque;

	var valeurPaiementECheck = $formulaireValeurs.find('.valeurPaiementECheck').prop('checked');
	if(valeurPaiementECheck != null && valeurPaiementECheck !== '')
	var removePaiementECheck = $formulaireFiltres.find('.removePaiementECheck').val() === 'true';
	var valeurPaiementECheckSelectVal = $formulaireValeurs.find('select.setPaiementECheck').val();
	var valeurPaiementECheck = null;
	if(valeurPaiementECheckSelectVal !== '')
		valeurPaiementECheck = valeurPaiementECheckSelectVal == 'true';
	setPaiementECheck = removePaiementECheck ? null : valeurPaiementECheck;
	if(removePaiementECheck || setPaiementECheck != null && setPaiementECheck !== '')
		vals['setPaiementECheck'] = setPaiementECheck;
	var addPaiementECheck = $formulaireValeurs.find('.addPaiementECheck').prop('checked');
	if(addPaiementECheck != null && addPaiementECheck !== '')
		vals['addPaiementECheck'] = addPaiementECheck;
	var removePaiementECheck = $formulaireValeurs.find('.removePaiementECheck').prop('checked');
	if(removePaiementECheck != null && removePaiementECheck !== '')
		vals['removePaiementECheck'] = removePaiementECheck;

	var valeurPaiementSysteme = $formulaireValeurs.find('.valeurPaiementSysteme').prop('checked');
	if(valeurPaiementSysteme != null && valeurPaiementSysteme !== '')
	var removePaiementSysteme = $formulaireFiltres.find('.removePaiementSysteme').val() === 'true';
	var valeurPaiementSystemeSelectVal = $formulaireValeurs.find('select.setPaiementSysteme').val();
	var valeurPaiementSysteme = null;
	if(valeurPaiementSystemeSelectVal !== '')
		valeurPaiementSysteme = valeurPaiementSystemeSelectVal == 'true';
	setPaiementSysteme = removePaiementSysteme ? null : valeurPaiementSysteme;
	if(removePaiementSysteme || setPaiementSysteme != null && setPaiementSysteme !== '')
		vals['setPaiementSysteme'] = setPaiementSysteme;
	var addPaiementSysteme = $formulaireValeurs.find('.addPaiementSysteme').prop('checked');
	if(addPaiementSysteme != null && addPaiementSysteme !== '')
		vals['addPaiementSysteme'] = addPaiementSysteme;
	var removePaiementSysteme = $formulaireValeurs.find('.removePaiementSysteme').prop('checked');
	if(removePaiementSysteme != null && removePaiementSysteme !== '')
		vals['removePaiementSysteme'] = removePaiementSysteme;

	var valeurPaiementDescription = $formulaireValeurs.find('.valeurPaiementDescription').val();
	if(valeurPaiementDescription != null && valeurPaiementDescription !== '')
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

	var valeurPaiementPar = $formulaireValeurs.find('.valeurPaiementPar').val();
	if(valeurPaiementPar != null && valeurPaiementPar !== '')
	var removePaiementPar = $formulaireFiltres.find('.removePaiementPar').val() === 'true';
	var setPaiementPar = removePaiementPar ? null : $formulaireValeurs.find('.setPaiementPar').val();
	if(removePaiementPar || setPaiementPar != null && setPaiementPar !== '')
		vals['setPaiementPar'] = setPaiementPar;
	var addPaiementPar = $formulaireValeurs.find('.addPaiementPar').val();
	if(addPaiementPar != null && addPaiementPar !== '')
		vals['addPaiementPar'] = addPaiementPar;
	var removePaiementPar = $formulaireValeurs.find('.removePaiementPar').val();
	if(removePaiementPar != null && removePaiementPar !== '')
		vals['removePaiementPar'] = removePaiementPar;

	var valeurInscriptionPaimentComplet = $formulaireValeurs.find('.valeurInscriptionPaimentComplet').prop('checked');
	if(valeurInscriptionPaimentComplet != null && valeurInscriptionPaimentComplet !== '')
	var removeInscriptionPaimentComplet = $formulaireFiltres.find('.removeInscriptionPaimentComplet').val() === 'true';
	var valeurInscriptionPaimentCompletSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentComplet').val();
	var valeurInscriptionPaimentComplet = null;
	if(valeurInscriptionPaimentCompletSelectVal !== '')
		valeurInscriptionPaimentComplet = valeurInscriptionPaimentCompletSelectVal == 'true';
	setInscriptionPaimentComplet = removeInscriptionPaimentComplet ? null : valeurInscriptionPaimentComplet;
	if(removeInscriptionPaimentComplet || setInscriptionPaimentComplet != null && setInscriptionPaimentComplet !== '')
		vals['setInscriptionPaimentComplet'] = setInscriptionPaimentComplet;
	var addInscriptionPaimentComplet = $formulaireValeurs.find('.addInscriptionPaimentComplet').prop('checked');
	if(addInscriptionPaimentComplet != null && addInscriptionPaimentComplet !== '')
		vals['addInscriptionPaimentComplet'] = addInscriptionPaimentComplet;
	var removeInscriptionPaimentComplet = $formulaireValeurs.find('.removeInscriptionPaimentComplet').prop('checked');
	if(removeInscriptionPaimentComplet != null && removeInscriptionPaimentComplet !== '')
		vals['removeInscriptionPaimentComplet'] = removeInscriptionPaimentComplet;

	var valeurInscriptionPaimentChaqueMois = $formulaireValeurs.find('.valeurInscriptionPaimentChaqueMois').prop('checked');
	if(valeurInscriptionPaimentChaqueMois != null && valeurInscriptionPaimentChaqueMois !== '')
	var removeInscriptionPaimentChaqueMois = $formulaireFiltres.find('.removeInscriptionPaimentChaqueMois').val() === 'true';
	var valeurInscriptionPaimentChaqueMoisSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentChaqueMois').val();
	var valeurInscriptionPaimentChaqueMois = null;
	if(valeurInscriptionPaimentChaqueMoisSelectVal !== '')
		valeurInscriptionPaimentChaqueMois = valeurInscriptionPaimentChaqueMoisSelectVal == 'true';
	setInscriptionPaimentChaqueMois = removeInscriptionPaimentChaqueMois ? null : valeurInscriptionPaimentChaqueMois;
	if(removeInscriptionPaimentChaqueMois || setInscriptionPaimentChaqueMois != null && setInscriptionPaimentChaqueMois !== '')
		vals['setInscriptionPaimentChaqueMois'] = setInscriptionPaimentChaqueMois;
	var addInscriptionPaimentChaqueMois = $formulaireValeurs.find('.addInscriptionPaimentChaqueMois').prop('checked');
	if(addInscriptionPaimentChaqueMois != null && addInscriptionPaimentChaqueMois !== '')
		vals['addInscriptionPaimentChaqueMois'] = addInscriptionPaimentChaqueMois;
	var removeInscriptionPaimentChaqueMois = $formulaireValeurs.find('.removeInscriptionPaimentChaqueMois').prop('checked');
	if(removeInscriptionPaimentChaqueMois != null && removeInscriptionPaimentChaqueMois !== '')
		vals['removeInscriptionPaimentChaqueMois'] = removeInscriptionPaimentChaqueMois;

	var valeurTransactionId = $formulaireValeurs.find('.valeurTransactionId').val();
	if(valeurTransactionId != null && valeurTransactionId !== '')
	var removeTransactionId = $formulaireFiltres.find('.removeTransactionId').val() === 'true';
	var setTransactionId = removeTransactionId ? null : $formulaireValeurs.find('.setTransactionId').val();
	if(removeTransactionId || setTransactionId != null && setTransactionId !== '')
		vals['setTransactionId'] = setTransactionId;
	var addTransactionId = $formulaireValeurs.find('.addTransactionId').val();
	if(addTransactionId != null && addTransactionId !== '')
		vals['addTransactionId'] = addTransactionId;
	var removeTransactionId = $formulaireValeurs.find('.removeTransactionId').val();
	if(removeTransactionId != null && removeTransactionId !== '')
		vals['removeTransactionId'] = removeTransactionId;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
	var removeCustomerProfileId = $formulaireFiltres.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formulaireValeurs.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formulaireValeurs.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formulaireValeurs.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valeurTransactionStatus = $formulaireValeurs.find('.valeurTransactionStatus').val();
	if(valeurTransactionStatus != null && valeurTransactionStatus !== '')
	var removeTransactionStatus = $formulaireFiltres.find('.removeTransactionStatus').val() === 'true';
	var setTransactionStatus = removeTransactionStatus ? null : $formulaireValeurs.find('.setTransactionStatus').val();
	if(removeTransactionStatus || setTransactionStatus != null && setTransactionStatus !== '')
		vals['setTransactionStatus'] = setTransactionStatus;
	var addTransactionStatus = $formulaireValeurs.find('.addTransactionStatus').val();
	if(addTransactionStatus != null && addTransactionStatus !== '')
		vals['addTransactionStatus'] = addTransactionStatus;
	var removeTransactionStatus = $formulaireValeurs.find('.removeTransactionStatus').val();
	if(removeTransactionStatus != null && removeTransactionStatus !== '')
		vals['removeTransactionStatus'] = removeTransactionStatus;

	var valeurPaiementRecu = $formulaireValeurs.find('.valeurPaiementRecu').prop('checked');
	if(valeurPaiementRecu != null && valeurPaiementRecu !== '')
	var removePaiementRecu = $formulaireFiltres.find('.removePaiementRecu').val() === 'true';
	var valeurPaiementRecuSelectVal = $formulaireValeurs.find('select.setPaiementRecu').val();
	var valeurPaiementRecu = null;
	if(valeurPaiementRecuSelectVal !== '')
		valeurPaiementRecu = valeurPaiementRecuSelectVal == 'true';
	setPaiementRecu = removePaiementRecu ? null : valeurPaiementRecu;
	if(removePaiementRecu || setPaiementRecu != null && setPaiementRecu !== '')
		vals['setPaiementRecu'] = setPaiementRecu;
	var addPaiementRecu = $formulaireValeurs.find('.addPaiementRecu').prop('checked');
	if(addPaiementRecu != null && addPaiementRecu !== '')
		vals['addPaiementRecu'] = addPaiementRecu;
	var removePaiementRecu = $formulaireValeurs.find('.removePaiementRecu').prop('checked');
	if(removePaiementRecu != null && removePaiementRecu !== '')
		vals['removePaiementRecu'] = removePaiementRecu;

	var valeurFraisMontant = $formulaireValeurs.find('.valeurFraisMontant').val();
	if(valeurFraisMontant != null && valeurFraisMontant !== '')
	var removeFraisMontant = $formulaireFiltres.find('.removeFraisMontant').val() === 'true';
	var setFraisMontant = removeFraisMontant ? null : $formulaireValeurs.find('.setFraisMontant').val();
	if(removeFraisMontant || setFraisMontant != null && setFraisMontant !== '')
		vals['setFraisMontant'] = setFraisMontant;
	var addFraisMontant = $formulaireValeurs.find('.addFraisMontant').val();
	if(addFraisMontant != null && addFraisMontant !== '')
		vals['addFraisMontant'] = addFraisMontant;
	var removeFraisMontant = $formulaireValeurs.find('.removeFraisMontant').val();
	if(removeFraisMontant != null && removeFraisMontant !== '')
		vals['removeFraisMontant'] = removeFraisMontant;

	var valeurFraisPremierDernier = $formulaireValeurs.find('.valeurFraisPremierDernier').prop('checked');
	if(valeurFraisPremierDernier != null && valeurFraisPremierDernier !== '')
	var removeFraisPremierDernier = $formulaireFiltres.find('.removeFraisPremierDernier').val() === 'true';
	var valeurFraisPremierDernierSelectVal = $formulaireValeurs.find('select.setFraisPremierDernier').val();
	var valeurFraisPremierDernier = null;
	if(valeurFraisPremierDernierSelectVal !== '')
		valeurFraisPremierDernier = valeurFraisPremierDernierSelectVal == 'true';
	setFraisPremierDernier = removeFraisPremierDernier ? null : valeurFraisPremierDernier;
	if(removeFraisPremierDernier || setFraisPremierDernier != null && setFraisPremierDernier !== '')
		vals['setFraisPremierDernier'] = setFraisPremierDernier;
	var addFraisPremierDernier = $formulaireValeurs.find('.addFraisPremierDernier').prop('checked');
	if(addFraisPremierDernier != null && addFraisPremierDernier !== '')
		vals['addFraisPremierDernier'] = addFraisPremierDernier;
	var removeFraisPremierDernier = $formulaireValeurs.find('.removeFraisPremierDernier').prop('checked');
	if(removeFraisPremierDernier != null && removeFraisPremierDernier !== '')
		vals['removeFraisPremierDernier'] = removeFraisPremierDernier;

	var valeurFraisInscription = $formulaireValeurs.find('.valeurFraisInscription').prop('checked');
	if(valeurFraisInscription != null && valeurFraisInscription !== '')
	var removeFraisInscription = $formulaireFiltres.find('.removeFraisInscription').val() === 'true';
	var valeurFraisInscriptionSelectVal = $formulaireValeurs.find('select.setFraisInscription').val();
	var valeurFraisInscription = null;
	if(valeurFraisInscriptionSelectVal !== '')
		valeurFraisInscription = valeurFraisInscriptionSelectVal == 'true';
	setFraisInscription = removeFraisInscription ? null : valeurFraisInscription;
	if(removeFraisInscription || setFraisInscription != null && setFraisInscription !== '')
		vals['setFraisInscription'] = setFraisInscription;
	var addFraisInscription = $formulaireValeurs.find('.addFraisInscription').prop('checked');
	if(addFraisInscription != null && addFraisInscription !== '')
		vals['addFraisInscription'] = addFraisInscription;
	var removeFraisInscription = $formulaireValeurs.find('.removeFraisInscription').prop('checked');
	if(removeFraisInscription != null && removeFraisInscription !== '')
		vals['removeFraisInscription'] = removeFraisInscription;

	var valeurFraisMois = $formulaireValeurs.find('.valeurFraisMois').prop('checked');
	if(valeurFraisMois != null && valeurFraisMois !== '')
	var removeFraisMois = $formulaireFiltres.find('.removeFraisMois').val() === 'true';
	var valeurFraisMoisSelectVal = $formulaireValeurs.find('select.setFraisMois').val();
	var valeurFraisMois = null;
	if(valeurFraisMoisSelectVal !== '')
		valeurFraisMois = valeurFraisMoisSelectVal == 'true';
	setFraisMois = removeFraisMois ? null : valeurFraisMois;
	if(removeFraisMois || setFraisMois != null && setFraisMois !== '')
		vals['setFraisMois'] = setFraisMois;
	var addFraisMois = $formulaireValeurs.find('.addFraisMois').prop('checked');
	if(addFraisMois != null && addFraisMois !== '')
		vals['addFraisMois'] = addFraisMois;
	var removeFraisMois = $formulaireValeurs.find('.removeFraisMois').prop('checked');
	if(removeFraisMois != null && removeFraisMois !== '')
		vals['removeFraisMois'] = removeFraisMois;

	var valeurFraisRetard = $formulaireValeurs.find('.valeurFraisRetard').prop('checked');
	if(valeurFraisRetard != null && valeurFraisRetard !== '')
	var removeFraisRetard = $formulaireFiltres.find('.removeFraisRetard').val() === 'true';
	var valeurFraisRetardSelectVal = $formulaireValeurs.find('select.setFraisRetard').val();
	var valeurFraisRetard = null;
	if(valeurFraisRetardSelectVal !== '')
		valeurFraisRetard = valeurFraisRetardSelectVal == 'true';
	setFraisRetard = removeFraisRetard ? null : valeurFraisRetard;
	if(removeFraisRetard || setFraisRetard != null && setFraisRetard !== '')
		vals['setFraisRetard'] = setFraisRetard;
	var addFraisRetard = $formulaireValeurs.find('.addFraisRetard').prop('checked');
	if(addFraisRetard != null && addFraisRetard !== '')
		vals['addFraisRetard'] = addFraisRetard;
	var removeFraisRetard = $formulaireValeurs.find('.removeFraisRetard').prop('checked');
	if(removeFraisRetard != null && removeFraisRetard !== '')
		vals['removeFraisRetard'] = removeFraisRetard;

	var valeurInscriptionCle = $formulaireValeurs.find('input.valeurInscriptionCle:checked').val();
	if(valeurInscriptionCle != null && valeurInscriptionCle !== '')
		vals['setInscriptionCle'] = valeurInscriptionCle;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
	var removeInheritPk = $formulaireFiltres.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formulaireValeurs.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formulaireValeurs.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formulaireValeurs.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
	var removeSessionId = $formulaireFiltres.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formulaireValeurs.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formulaireValeurs.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formulaireValeurs.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
	var removeUtilisateurId = $formulaireFiltres.find('.removeUtilisateurId').val() === 'true';
	var setUtilisateurId = removeUtilisateurId ? null : $formulaireValeurs.find('.setUtilisateurId').val();
	if(removeUtilisateurId || setUtilisateurId != null && setUtilisateurId !== '')
		vals['setUtilisateurId'] = setUtilisateurId;
	var addUtilisateurId = $formulaireValeurs.find('.addUtilisateurId').val();
	if(addUtilisateurId != null && addUtilisateurId !== '')
		vals['addUtilisateurId'] = addUtilisateurId;
	var removeUtilisateurId = $formulaireValeurs.find('.removeUtilisateurId').val();
	if(removeUtilisateurId != null && removeUtilisateurId !== '')
		vals['removeUtilisateurId'] = removeUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
	var removeUtilisateurCle = $formulaireFiltres.find('.removeUtilisateurCle').val() === 'true';
	var setUtilisateurCle = removeUtilisateurCle ? null : $formulaireValeurs.find('.setUtilisateurCle').val();
	if(removeUtilisateurCle || setUtilisateurCle != null && setUtilisateurCle !== '')
		vals['setUtilisateurCle'] = setUtilisateurCle;
	var addUtilisateurCle = $formulaireValeurs.find('.addUtilisateurCle').val();
	if(addUtilisateurCle != null && addUtilisateurCle !== '')
		vals['addUtilisateurCle'] = addUtilisateurCle;
	var removeUtilisateurCle = $formulaireValeurs.find('.removeUtilisateurCle').val();
	if(removeUtilisateurCle != null && removeUtilisateurCle !== '')
		vals['removeUtilisateurCle'] = removeUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
	var removeObjetTitre = $formulaireFiltres.find('.removeObjetTitre').val() === 'true';
	var setObjetTitre = removeObjetTitre ? null : $formulaireValeurs.find('.setObjetTitre').val();
	if(removeObjetTitre || setObjetTitre != null && setObjetTitre !== '')
		vals['setObjetTitre'] = setObjetTitre;
	var addObjetTitre = $formulaireValeurs.find('.addObjetTitre').val();
	if(addObjetTitre != null && addObjetTitre !== '')
		vals['addObjetTitre'] = addObjetTitre;
	var removeObjetTitre = $formulaireValeurs.find('.removeObjetTitre').val();
	if(removeObjetTitre != null && removeObjetTitre !== '')
		vals['removeObjetTitre'] = removeObjetTitre;

	var valeurEnfantNomCompletPrefere = $formulaireValeurs.find('.valeurEnfantNomCompletPrefere').val();
	if(valeurEnfantNomCompletPrefere != null && valeurEnfantNomCompletPrefere !== '')
	var removeEnfantNomCompletPrefere = $formulaireFiltres.find('.removeEnfantNomCompletPrefere').val() === 'true';
	var setEnfantNomCompletPrefere = removeEnfantNomCompletPrefere ? null : $formulaireValeurs.find('.setEnfantNomCompletPrefere').val();
	if(removeEnfantNomCompletPrefere || setEnfantNomCompletPrefere != null && setEnfantNomCompletPrefere !== '')
		vals['setEnfantNomCompletPrefere'] = setEnfantNomCompletPrefere;
	var addEnfantNomCompletPrefere = $formulaireValeurs.find('.addEnfantNomCompletPrefere').val();
	if(addEnfantNomCompletPrefere != null && addEnfantNomCompletPrefere !== '')
		vals['addEnfantNomCompletPrefere'] = addEnfantNomCompletPrefere;
	var removeEnfantNomCompletPrefere = $formulaireValeurs.find('.removeEnfantNomCompletPrefere').val();
	if(removeEnfantNomCompletPrefere != null && removeEnfantNomCompletPrefere !== '')
		vals['removeEnfantNomCompletPrefere'] = removeEnfantNomCompletPrefere;

	var valeurEnfantDateNaissance = $formulaireValeurs.find('.valeurEnfantDateNaissance').val();
	if(valeurEnfantDateNaissance != null && valeurEnfantDateNaissance !== '')
	var removeEnfantDateNaissance = $formulaireFiltres.find('.removeEnfantDateNaissance').val() === 'true';
	var setEnfantDateNaissance = removeEnfantDateNaissance ? null : $formulaireValeurs.find('.setEnfantDateNaissance').val();
	if(removeEnfantDateNaissance || setEnfantDateNaissance != null && setEnfantDateNaissance !== '')
		vals['setEnfantDateNaissance'] = setEnfantDateNaissance;
	var addEnfantDateNaissance = $formulaireValeurs.find('.addEnfantDateNaissance').val();
	if(addEnfantDateNaissance != null && addEnfantDateNaissance !== '')
		vals['addEnfantDateNaissance'] = addEnfantDateNaissance;
	var removeEnfantDateNaissance = $formulaireValeurs.find('.removeEnfantDateNaissance').val();
	if(removeEnfantDateNaissance != null && removeEnfantDateNaissance !== '')
		vals['removeEnfantDateNaissance'] = removeEnfantDateNaissance;

	var valeurMereNomCompletPrefere = $formulaireValeurs.find('.valeurMereNomCompletPrefere').val();
	if(valeurMereNomCompletPrefere != null && valeurMereNomCompletPrefere !== '')
	var removeMereNomCompletPrefere = $formulaireFiltres.find('.removeMereNomCompletPrefere').val() === 'true';
	var setMereNomCompletPrefere = removeMereNomCompletPrefere ? null : $formulaireValeurs.find('.setMereNomCompletPrefere').val();
	if(removeMereNomCompletPrefere || setMereNomCompletPrefere != null && setMereNomCompletPrefere !== '')
		vals['setMereNomCompletPrefere'] = setMereNomCompletPrefere;
	var addMereNomCompletPrefere = $formulaireValeurs.find('.addMereNomCompletPrefere').val();
	if(addMereNomCompletPrefere != null && addMereNomCompletPrefere !== '')
		vals['addMereNomCompletPrefere'] = addMereNomCompletPrefere;
	var removeMereNomCompletPrefere = $formulaireValeurs.find('.removeMereNomCompletPrefere').val();
	if(removeMereNomCompletPrefere != null && removeMereNomCompletPrefere !== '')
		vals['removeMereNomCompletPrefere'] = removeMereNomCompletPrefere;

	var valeurPereNomCompletPrefere = $formulaireValeurs.find('.valeurPereNomCompletPrefere').val();
	if(valeurPereNomCompletPrefere != null && valeurPereNomCompletPrefere !== '')
	var removePereNomCompletPrefere = $formulaireFiltres.find('.removePereNomCompletPrefere').val() === 'true';
	var setPereNomCompletPrefere = removePereNomCompletPrefere ? null : $formulaireValeurs.find('.setPereNomCompletPrefere').val();
	if(removePereNomCompletPrefere || setPereNomCompletPrefere != null && setPereNomCompletPrefere !== '')
		vals['setPereNomCompletPrefere'] = setPereNomCompletPrefere;
	var addPereNomCompletPrefere = $formulaireValeurs.find('.addPereNomCompletPrefere').val();
	if(addPereNomCompletPrefere != null && addPereNomCompletPrefere !== '')
		vals['addPereNomCompletPrefere'] = addPereNomCompletPrefere;
	var removePereNomCompletPrefere = $formulaireValeurs.find('.removePereNomCompletPrefere').val();
	if(removePereNomCompletPrefere != null && removePereNomCompletPrefere !== '')
		vals['removePereNomCompletPrefere'] = removePereNomCompletPrefere;

	var valeurFraisMontantDu = $formulaireValeurs.find('.valeurFraisMontantDu').val();
	if(valeurFraisMontantDu != null && valeurFraisMontantDu !== '')
	var removeFraisMontantDu = $formulaireFiltres.find('.removeFraisMontantDu').val() === 'true';
	var setFraisMontantDu = removeFraisMontantDu ? null : $formulaireValeurs.find('.setFraisMontantDu').val();
	if(removeFraisMontantDu || setFraisMontantDu != null && setFraisMontantDu !== '')
		vals['setFraisMontantDu'] = setFraisMontantDu;
	var addFraisMontantDu = $formulaireValeurs.find('.addFraisMontantDu').val();
	if(addFraisMontantDu != null && addFraisMontantDu !== '')
		vals['addFraisMontantDu'] = addFraisMontantDu;
	var removeFraisMontantDu = $formulaireValeurs.find('.removeFraisMontantDu').val();
	if(removeFraisMontantDu != null && removeFraisMontantDu !== '')
		vals['removeFraisMontantDu'] = removeFraisMontantDu;

	var valeurFraisMontantFuture = $formulaireValeurs.find('.valeurFraisMontantFuture').val();
	if(valeurFraisMontantFuture != null && valeurFraisMontantFuture !== '')
	var removeFraisMontantFuture = $formulaireFiltres.find('.removeFraisMontantFuture').val() === 'true';
	var setFraisMontantFuture = removeFraisMontantFuture ? null : $formulaireValeurs.find('.setFraisMontantFuture').val();
	if(removeFraisMontantFuture || setFraisMontantFuture != null && setFraisMontantFuture !== '')
		vals['setFraisMontantFuture'] = setFraisMontantFuture;
	var addFraisMontantFuture = $formulaireValeurs.find('.addFraisMontantFuture').val();
	if(addFraisMontantFuture != null && addFraisMontantFuture !== '')
		vals['addFraisMontantFuture'] = addFraisMontantFuture;
	var removeFraisMontantFuture = $formulaireValeurs.find('.removeFraisMontantFuture').val();
	if(removeFraisMontantFuture != null && removeFraisMontantFuture !== '')
		vals['removeFraisMontantFuture'] = removeFraisMontantFuture;

	var valeurPaiementNomCourt = $formulaireValeurs.find('.valeurPaiementNomCourt').val();
	if(valeurPaiementNomCourt != null && valeurPaiementNomCourt !== '')
	var removePaiementNomCourt = $formulaireFiltres.find('.removePaiementNomCourt').val() === 'true';
	var setPaiementNomCourt = removePaiementNomCourt ? null : $formulaireValeurs.find('.setPaiementNomCourt').val();
	if(removePaiementNomCourt || setPaiementNomCourt != null && setPaiementNomCourt !== '')
		vals['setPaiementNomCourt'] = setPaiementNomCourt;
	var addPaiementNomCourt = $formulaireValeurs.find('.addPaiementNomCourt').val();
	if(addPaiementNomCourt != null && addPaiementNomCourt !== '')
		vals['addPaiementNomCourt'] = addPaiementNomCourt;
	var removePaiementNomCourt = $formulaireValeurs.find('.removePaiementNomCourt').val();
	if(removePaiementNomCourt != null && removePaiementNomCourt !== '')
		vals['removePaiementNomCourt'] = removePaiementNomCourt;

	patchPaiementScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchPaiementScolaireFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePk = $formulaireFiltres.find('.valeurPk').val();
		if(filtrePk != null && filtrePk !== '')
			filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

		var filtreCree = $formulaireFiltres.find('.valeurCree').val();
		if(filtreCree != null && filtreCree !== '')
			filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

		var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
		if(filtreModifie != null && filtreModifie !== '')
			filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

		var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
		if(filtreObjetId != null && filtreObjetId !== '')
			filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

		var $filtreArchiveCheckbox = $formulaireFiltres.find('input.valeurArchive[type = "checkbox"]');
		var $filtreArchiveSelect = $formulaireFiltres.find('select.valeurArchive');
		var filtreArchive = $filtreArchiveSelect.length ? $filtreArchiveSelect.val() : $filtreArchiveCheckbox.prop('checked');
		var filtreArchiveSelectVal = $formulaireFiltres.find('select.filtreArchive').val();
		var filtreArchive = null;
		if(filtreArchiveSelectVal !== '')
			filtreArchive = filtreArchiveSelectVal == 'true';
		if(filtreArchive != null && filtreArchive === true)
			filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

		var $filtreSupprimeCheckbox = $formulaireFiltres.find('input.valeurSupprime[type = "checkbox"]');
		var $filtreSupprimeSelect = $formulaireFiltres.find('select.valeurSupprime');
		var filtreSupprime = $filtreSupprimeSelect.length ? $filtreSupprimeSelect.val() : $filtreSupprimeCheckbox.prop('checked');
		var filtreSupprimeSelectVal = $formulaireFiltres.find('select.filtreSupprime').val();
		var filtreSupprime = null;
		if(filtreSupprimeSelectVal !== '')
			filtreSupprime = filtreSupprimeSelectVal == 'true';
		if(filtreSupprime != null && filtreSupprime === true)
			filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

		var filtrePaiementDate = $formulaireFiltres.find('.valeurPaiementDate').val();
		if(filtrePaiementDate != null && filtrePaiementDate !== '')
			filtres.push({ name: 'fq', value: 'paiementDate:' + filtrePaiementDate });

		var filtrePaiementMontant = $formulaireFiltres.find('.valeurPaiementMontant').val();
		if(filtrePaiementMontant != null && filtrePaiementMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementMontant:' + filtrePaiementMontant });

		var $filtrePaiementEspecesCheckbox = $formulaireFiltres.find('input.valeurPaiementEspeces[type = "checkbox"]');
		var $filtrePaiementEspecesSelect = $formulaireFiltres.find('select.valeurPaiementEspeces');
		var filtrePaiementEspeces = $filtrePaiementEspecesSelect.length ? $filtrePaiementEspecesSelect.val() : $filtrePaiementEspecesCheckbox.prop('checked');
		var filtrePaiementEspecesSelectVal = $formulaireFiltres.find('select.filtrePaiementEspeces').val();
		var filtrePaiementEspeces = null;
		if(filtrePaiementEspecesSelectVal !== '')
			filtrePaiementEspeces = filtrePaiementEspecesSelectVal == 'true';
		if(filtrePaiementEspeces != null && filtrePaiementEspeces === true)
			filtres.push({ name: 'fq', value: 'paiementEspeces:' + filtrePaiementEspeces });

		var $filtrePaiementChequeCheckbox = $formulaireFiltres.find('input.valeurPaiementCheque[type = "checkbox"]');
		var $filtrePaiementChequeSelect = $formulaireFiltres.find('select.valeurPaiementCheque');
		var filtrePaiementCheque = $filtrePaiementChequeSelect.length ? $filtrePaiementChequeSelect.val() : $filtrePaiementChequeCheckbox.prop('checked');
		var filtrePaiementChequeSelectVal = $formulaireFiltres.find('select.filtrePaiementCheque').val();
		var filtrePaiementCheque = null;
		if(filtrePaiementChequeSelectVal !== '')
			filtrePaiementCheque = filtrePaiementChequeSelectVal == 'true';
		if(filtrePaiementCheque != null && filtrePaiementCheque === true)
			filtres.push({ name: 'fq', value: 'paiementCheque:' + filtrePaiementCheque });

		var $filtrePaiementECheckCheckbox = $formulaireFiltres.find('input.valeurPaiementECheck[type = "checkbox"]');
		var $filtrePaiementECheckSelect = $formulaireFiltres.find('select.valeurPaiementECheck');
		var filtrePaiementECheck = $filtrePaiementECheckSelect.length ? $filtrePaiementECheckSelect.val() : $filtrePaiementECheckCheckbox.prop('checked');
		var filtrePaiementECheckSelectVal = $formulaireFiltres.find('select.filtrePaiementECheck').val();
		var filtrePaiementECheck = null;
		if(filtrePaiementECheckSelectVal !== '')
			filtrePaiementECheck = filtrePaiementECheckSelectVal == 'true';
		if(filtrePaiementECheck != null && filtrePaiementECheck === true)
			filtres.push({ name: 'fq', value: 'paiementECheck:' + filtrePaiementECheck });

		var $filtrePaiementSystemeCheckbox = $formulaireFiltres.find('input.valeurPaiementSysteme[type = "checkbox"]');
		var $filtrePaiementSystemeSelect = $formulaireFiltres.find('select.valeurPaiementSysteme');
		var filtrePaiementSysteme = $filtrePaiementSystemeSelect.length ? $filtrePaiementSystemeSelect.val() : $filtrePaiementSystemeCheckbox.prop('checked');
		var filtrePaiementSystemeSelectVal = $formulaireFiltres.find('select.filtrePaiementSysteme').val();
		var filtrePaiementSysteme = null;
		if(filtrePaiementSystemeSelectVal !== '')
			filtrePaiementSysteme = filtrePaiementSystemeSelectVal == 'true';
		if(filtrePaiementSysteme != null && filtrePaiementSysteme === true)
			filtres.push({ name: 'fq', value: 'paiementSysteme:' + filtrePaiementSysteme });

		var filtrePaiementDescription = $formulaireFiltres.find('.valeurPaiementDescription').val();
		if(filtrePaiementDescription != null && filtrePaiementDescription !== '')
			filtres.push({ name: 'fq', value: 'paiementDescription:' + filtrePaiementDescription });

		var filtrePaiementPar = $formulaireFiltres.find('.valeurPaiementPar').val();
		if(filtrePaiementPar != null && filtrePaiementPar !== '')
			filtres.push({ name: 'fq', value: 'paiementPar:' + filtrePaiementPar });

		var $filtreInscriptionPaimentCompletCheckbox = $formulaireFiltres.find('input.valeurInscriptionPaimentComplet[type = "checkbox"]');
		var $filtreInscriptionPaimentCompletSelect = $formulaireFiltres.find('select.valeurInscriptionPaimentComplet');
		var filtreInscriptionPaimentComplet = $filtreInscriptionPaimentCompletSelect.length ? $filtreInscriptionPaimentCompletSelect.val() : $filtreInscriptionPaimentCompletCheckbox.prop('checked');
		var filtreInscriptionPaimentCompletSelectVal = $formulaireFiltres.find('select.filtreInscriptionPaimentComplet').val();
		var filtreInscriptionPaimentComplet = null;
		if(filtreInscriptionPaimentCompletSelectVal !== '')
			filtreInscriptionPaimentComplet = filtreInscriptionPaimentCompletSelectVal == 'true';
		if(filtreInscriptionPaimentComplet != null && filtreInscriptionPaimentComplet === true)
			filtres.push({ name: 'fq', value: 'inscriptionPaimentComplet:' + filtreInscriptionPaimentComplet });

		var $filtreInscriptionPaimentChaqueMoisCheckbox = $formulaireFiltres.find('input.valeurInscriptionPaimentChaqueMois[type = "checkbox"]');
		var $filtreInscriptionPaimentChaqueMoisSelect = $formulaireFiltres.find('select.valeurInscriptionPaimentChaqueMois');
		var filtreInscriptionPaimentChaqueMois = $filtreInscriptionPaimentChaqueMoisSelect.length ? $filtreInscriptionPaimentChaqueMoisSelect.val() : $filtreInscriptionPaimentChaqueMoisCheckbox.prop('checked');
		var filtreInscriptionPaimentChaqueMoisSelectVal = $formulaireFiltres.find('select.filtreInscriptionPaimentChaqueMois').val();
		var filtreInscriptionPaimentChaqueMois = null;
		if(filtreInscriptionPaimentChaqueMoisSelectVal !== '')
			filtreInscriptionPaimentChaqueMois = filtreInscriptionPaimentChaqueMoisSelectVal == 'true';
		if(filtreInscriptionPaimentChaqueMois != null && filtreInscriptionPaimentChaqueMois === true)
			filtres.push({ name: 'fq', value: 'inscriptionPaimentChaqueMois:' + filtreInscriptionPaimentChaqueMois });

		var filtreTransactionId = $formulaireFiltres.find('.valeurTransactionId').val();
		if(filtreTransactionId != null && filtreTransactionId !== '')
			filtres.push({ name: 'fq', value: 'transactionId:' + filtreTransactionId });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var filtreTransactionStatus = $formulaireFiltres.find('.valeurTransactionStatus').val();
		if(filtreTransactionStatus != null && filtreTransactionStatus !== '')
			filtres.push({ name: 'fq', value: 'transactionStatus:' + filtreTransactionStatus });

		var $filtrePaiementRecuCheckbox = $formulaireFiltres.find('input.valeurPaiementRecu[type = "checkbox"]');
		var $filtrePaiementRecuSelect = $formulaireFiltres.find('select.valeurPaiementRecu');
		var filtrePaiementRecu = $filtrePaiementRecuSelect.length ? $filtrePaiementRecuSelect.val() : $filtrePaiementRecuCheckbox.prop('checked');
		var filtrePaiementRecuSelectVal = $formulaireFiltres.find('select.filtrePaiementRecu').val();
		var filtrePaiementRecu = null;
		if(filtrePaiementRecuSelectVal !== '')
			filtrePaiementRecu = filtrePaiementRecuSelectVal == 'true';
		if(filtrePaiementRecu != null && filtrePaiementRecu === true)
			filtres.push({ name: 'fq', value: 'paiementRecu:' + filtrePaiementRecu });

		var filtreFraisMontant = $formulaireFiltres.find('.valeurFraisMontant').val();
		if(filtreFraisMontant != null && filtreFraisMontant !== '')
			filtres.push({ name: 'fq', value: 'fraisMontant:' + filtreFraisMontant });

		var $filtreFraisPremierDernierCheckbox = $formulaireFiltres.find('input.valeurFraisPremierDernier[type = "checkbox"]');
		var $filtreFraisPremierDernierSelect = $formulaireFiltres.find('select.valeurFraisPremierDernier');
		var filtreFraisPremierDernier = $filtreFraisPremierDernierSelect.length ? $filtreFraisPremierDernierSelect.val() : $filtreFraisPremierDernierCheckbox.prop('checked');
		var filtreFraisPremierDernierSelectVal = $formulaireFiltres.find('select.filtreFraisPremierDernier').val();
		var filtreFraisPremierDernier = null;
		if(filtreFraisPremierDernierSelectVal !== '')
			filtreFraisPremierDernier = filtreFraisPremierDernierSelectVal == 'true';
		if(filtreFraisPremierDernier != null && filtreFraisPremierDernier === true)
			filtres.push({ name: 'fq', value: 'fraisPremierDernier:' + filtreFraisPremierDernier });

		var $filtreFraisInscriptionCheckbox = $formulaireFiltres.find('input.valeurFraisInscription[type = "checkbox"]');
		var $filtreFraisInscriptionSelect = $formulaireFiltres.find('select.valeurFraisInscription');
		var filtreFraisInscription = $filtreFraisInscriptionSelect.length ? $filtreFraisInscriptionSelect.val() : $filtreFraisInscriptionCheckbox.prop('checked');
		var filtreFraisInscriptionSelectVal = $formulaireFiltres.find('select.filtreFraisInscription').val();
		var filtreFraisInscription = null;
		if(filtreFraisInscriptionSelectVal !== '')
			filtreFraisInscription = filtreFraisInscriptionSelectVal == 'true';
		if(filtreFraisInscription != null && filtreFraisInscription === true)
			filtres.push({ name: 'fq', value: 'fraisInscription:' + filtreFraisInscription });

		var $filtreFraisMoisCheckbox = $formulaireFiltres.find('input.valeurFraisMois[type = "checkbox"]');
		var $filtreFraisMoisSelect = $formulaireFiltres.find('select.valeurFraisMois');
		var filtreFraisMois = $filtreFraisMoisSelect.length ? $filtreFraisMoisSelect.val() : $filtreFraisMoisCheckbox.prop('checked');
		var filtreFraisMoisSelectVal = $formulaireFiltres.find('select.filtreFraisMois').val();
		var filtreFraisMois = null;
		if(filtreFraisMoisSelectVal !== '')
			filtreFraisMois = filtreFraisMoisSelectVal == 'true';
		if(filtreFraisMois != null && filtreFraisMois === true)
			filtres.push({ name: 'fq', value: 'fraisMois:' + filtreFraisMois });

		var $filtreFraisRetardCheckbox = $formulaireFiltres.find('input.valeurFraisRetard[type = "checkbox"]');
		var $filtreFraisRetardSelect = $formulaireFiltres.find('select.valeurFraisRetard');
		var filtreFraisRetard = $filtreFraisRetardSelect.length ? $filtreFraisRetardSelect.val() : $filtreFraisRetardCheckbox.prop('checked');
		var filtreFraisRetardSelectVal = $formulaireFiltres.find('select.filtreFraisRetard').val();
		var filtreFraisRetard = null;
		if(filtreFraisRetardSelectVal !== '')
			filtreFraisRetard = filtreFraisRetardSelectVal == 'true';
		if(filtreFraisRetard != null && filtreFraisRetard === true)
			filtres.push({ name: 'fq', value: 'fraisRetard:' + filtreFraisRetard });

		var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
		if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

		var filtreInheritPk = $formulaireFiltres.find('.valeurInheritPk').val();
		if(filtreInheritPk != null && filtreInheritPk !== '')
			filtres.push({ name: 'fq', value: 'inheritPk:' + filtreInheritPk });

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

		var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
		if(filtreSessionId != null && filtreSessionId !== '')
			filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

		var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
		if(filtreSauvegardes != null && filtreSauvegardes !== '')
			filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

		var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
		if(filtreObjetTitre != null && filtreObjetTitre !== '')
			filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

		var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
		if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
			filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtrePaiementCle = $formulaireFiltres.find('.valeurPaiementCle').val();
		if(filtrePaiementCle != null && filtrePaiementCle !== '')
			filtres.push({ name: 'fq', value: 'paiementCle:' + filtrePaiementCle });

		var filtreEcoleNumero = $formulaireFiltres.find('.valeurEcoleNumero').val();
		if(filtreEcoleNumero != null && filtreEcoleNumero !== '')
			filtres.push({ name: 'fq', value: 'ecoleNumero:' + filtreEcoleNumero });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
		if(filtreSessionCle != null && filtreSessionCle !== '')
			filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

		var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
		if(filtreAgeCle != null && filtreAgeCle !== '')
			filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

		var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
		if(filtreBlocCle != null && filtreBlocCle !== '')
			filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
		if(filtreMereCles != null && filtreMereCles !== '')
			filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

		var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
		if(filtrePereCles != null && filtrePereCles !== '')
			filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

		var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
		if(filtreGardienCles != null && filtreGardienCles !== '')
			filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

		var filtreEnfantNomCompletPrefere = $formulaireFiltres.find('.valeurEnfantNomCompletPrefere').val();
		if(filtreEnfantNomCompletPrefere != null && filtreEnfantNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'enfantNomCompletPrefere:' + filtreEnfantNomCompletPrefere });

		var filtreEnfantDateNaissance = $formulaireFiltres.find('.valeurEnfantDateNaissance').val();
		if(filtreEnfantDateNaissance != null && filtreEnfantDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissance:' + filtreEnfantDateNaissance });

		var filtreMereNomCompletPrefere = $formulaireFiltres.find('.valeurMereNomCompletPrefere').val();
		if(filtreMereNomCompletPrefere != null && filtreMereNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'mereNomCompletPrefere:' + filtreMereNomCompletPrefere });

		var filtrePereNomCompletPrefere = $formulaireFiltres.find('.valeurPereNomCompletPrefere').val();
		if(filtrePereNomCompletPrefere != null && filtrePereNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'pereNomCompletPrefere:' + filtrePereNomCompletPrefere });

		var filtreEcoleNom = $formulaireFiltres.find('.valeurEcoleNom').val();
		if(filtreEcoleNom != null && filtreEcoleNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleNom:' + filtreEcoleNom });

		var filtreEcoleNomComplet = $formulaireFiltres.find('.valeurEcoleNomComplet').val();
		if(filtreEcoleNomComplet != null && filtreEcoleNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ecoleNomComplet:' + filtreEcoleNomComplet });

		var filtreEcoleEmplacement = $formulaireFiltres.find('.valeurEcoleEmplacement').val();
		if(filtreEcoleEmplacement != null && filtreEcoleEmplacement !== '')
			filtres.push({ name: 'fq', value: 'ecoleEmplacement:' + filtreEcoleEmplacement });

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreSaisonDateDebut = $formulaireFiltres.find('.valeurSaisonDateDebut').val();
		if(filtreSaisonDateDebut != null && filtreSaisonDateDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonDateDebut:' + filtreSaisonDateDebut });

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreSessionDateDebut = $formulaireFiltres.find('.valeurSessionDateDebut').val();
		if(filtreSessionDateDebut != null && filtreSessionDateDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionDateDebut:' + filtreSessionDateDebut });

		var filtreSessionDateFin = $formulaireFiltres.find('.valeurSessionDateFin').val();
		if(filtreSessionDateFin != null && filtreSessionDateFin !== '')
			filtres.push({ name: 'fq', value: 'sessionDateFin:' + filtreSessionDateFin });

		var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
		if(filtreAgeDebut != null && filtreAgeDebut !== '')
			filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

		var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
		if(filtreAgeFin != null && filtreAgeFin !== '')
			filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

		var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
		if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
			filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

		var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
		if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
			filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

		var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
		if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
			filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

		var filtreBlocPrixTotal = $formulaireFiltres.find('.valeurBlocPrixTotal').val();
		if(filtreBlocPrixTotal != null && filtreBlocPrixTotal !== '')
			filtres.push({ name: 'fq', value: 'blocPrixTotal:' + filtreBlocPrixTotal });

		var filtreFraisMontantDu = $formulaireFiltres.find('.valeurFraisMontantDu').val();
		if(filtreFraisMontantDu != null && filtreFraisMontantDu !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantDu:' + filtreFraisMontantDu });

		var filtreFraisMontantFuture = $formulaireFiltres.find('.valeurFraisMontantFuture').val();
		if(filtreFraisMontantFuture != null && filtreFraisMontantFuture !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantFuture:' + filtreFraisMontantFuture });

		var filtrePaiementNomCourt = $formulaireFiltres.find('.valeurPaiementNomCourt').val();
		if(filtrePaiementNomCourt != null && filtrePaiementNomCourt !== '')
			filtres.push({ name: 'fq', value: 'paiementNomCourt:' + filtrePaiementNomCourt });

		var filtrePaiementNomComplet = $formulaireFiltres.find('.valeurPaiementNomComplet').val();
		if(filtrePaiementNomComplet != null && filtrePaiementNomComplet !== '')
			filtres.push({ name: 'fq', value: 'paiementNomComplet:' + filtrePaiementNomComplet });
	}
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
	if($formulaireFiltres) {

		var filtrePk = $formulaireFiltres.find('.valeurPk').val();
		if(filtrePk != null && filtrePk !== '')
			filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

		var filtreCree = $formulaireFiltres.find('.valeurCree').val();
		if(filtreCree != null && filtreCree !== '')
			filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

		var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
		if(filtreModifie != null && filtreModifie !== '')
			filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

		var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
		if(filtreObjetId != null && filtreObjetId !== '')
			filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

		var $filtreArchiveCheckbox = $formulaireFiltres.find('input.valeurArchive[type = "checkbox"]');
		var $filtreArchiveSelect = $formulaireFiltres.find('select.valeurArchive');
		var filtreArchive = $filtreArchiveSelect.length ? $filtreArchiveSelect.val() : $filtreArchiveCheckbox.prop('checked');
		var filtreArchiveSelectVal = $formulaireFiltres.find('select.filtreArchive').val();
		var filtreArchive = null;
		if(filtreArchiveSelectVal !== '')
			filtreArchive = filtreArchiveSelectVal == 'true';
		if(filtreArchive != null && filtreArchive === true)
			filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

		var $filtreSupprimeCheckbox = $formulaireFiltres.find('input.valeurSupprime[type = "checkbox"]');
		var $filtreSupprimeSelect = $formulaireFiltres.find('select.valeurSupprime');
		var filtreSupprime = $filtreSupprimeSelect.length ? $filtreSupprimeSelect.val() : $filtreSupprimeCheckbox.prop('checked');
		var filtreSupprimeSelectVal = $formulaireFiltres.find('select.filtreSupprime').val();
		var filtreSupprime = null;
		if(filtreSupprimeSelectVal !== '')
			filtreSupprime = filtreSupprimeSelectVal == 'true';
		if(filtreSupprime != null && filtreSupprime === true)
			filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

		var filtrePaiementDate = $formulaireFiltres.find('.valeurPaiementDate').val();
		if(filtrePaiementDate != null && filtrePaiementDate !== '')
			filtres.push({ name: 'fq', value: 'paiementDate:' + filtrePaiementDate });

		var filtrePaiementMontant = $formulaireFiltres.find('.valeurPaiementMontant').val();
		if(filtrePaiementMontant != null && filtrePaiementMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementMontant:' + filtrePaiementMontant });

		var $filtrePaiementEspecesCheckbox = $formulaireFiltres.find('input.valeurPaiementEspeces[type = "checkbox"]');
		var $filtrePaiementEspecesSelect = $formulaireFiltres.find('select.valeurPaiementEspeces');
		var filtrePaiementEspeces = $filtrePaiementEspecesSelect.length ? $filtrePaiementEspecesSelect.val() : $filtrePaiementEspecesCheckbox.prop('checked');
		var filtrePaiementEspecesSelectVal = $formulaireFiltres.find('select.filtrePaiementEspeces').val();
		var filtrePaiementEspeces = null;
		if(filtrePaiementEspecesSelectVal !== '')
			filtrePaiementEspeces = filtrePaiementEspecesSelectVal == 'true';
		if(filtrePaiementEspeces != null && filtrePaiementEspeces === true)
			filtres.push({ name: 'fq', value: 'paiementEspeces:' + filtrePaiementEspeces });

		var $filtrePaiementChequeCheckbox = $formulaireFiltres.find('input.valeurPaiementCheque[type = "checkbox"]');
		var $filtrePaiementChequeSelect = $formulaireFiltres.find('select.valeurPaiementCheque');
		var filtrePaiementCheque = $filtrePaiementChequeSelect.length ? $filtrePaiementChequeSelect.val() : $filtrePaiementChequeCheckbox.prop('checked');
		var filtrePaiementChequeSelectVal = $formulaireFiltres.find('select.filtrePaiementCheque').val();
		var filtrePaiementCheque = null;
		if(filtrePaiementChequeSelectVal !== '')
			filtrePaiementCheque = filtrePaiementChequeSelectVal == 'true';
		if(filtrePaiementCheque != null && filtrePaiementCheque === true)
			filtres.push({ name: 'fq', value: 'paiementCheque:' + filtrePaiementCheque });

		var $filtrePaiementECheckCheckbox = $formulaireFiltres.find('input.valeurPaiementECheck[type = "checkbox"]');
		var $filtrePaiementECheckSelect = $formulaireFiltres.find('select.valeurPaiementECheck');
		var filtrePaiementECheck = $filtrePaiementECheckSelect.length ? $filtrePaiementECheckSelect.val() : $filtrePaiementECheckCheckbox.prop('checked');
		var filtrePaiementECheckSelectVal = $formulaireFiltres.find('select.filtrePaiementECheck').val();
		var filtrePaiementECheck = null;
		if(filtrePaiementECheckSelectVal !== '')
			filtrePaiementECheck = filtrePaiementECheckSelectVal == 'true';
		if(filtrePaiementECheck != null && filtrePaiementECheck === true)
			filtres.push({ name: 'fq', value: 'paiementECheck:' + filtrePaiementECheck });

		var $filtrePaiementSystemeCheckbox = $formulaireFiltres.find('input.valeurPaiementSysteme[type = "checkbox"]');
		var $filtrePaiementSystemeSelect = $formulaireFiltres.find('select.valeurPaiementSysteme');
		var filtrePaiementSysteme = $filtrePaiementSystemeSelect.length ? $filtrePaiementSystemeSelect.val() : $filtrePaiementSystemeCheckbox.prop('checked');
		var filtrePaiementSystemeSelectVal = $formulaireFiltres.find('select.filtrePaiementSysteme').val();
		var filtrePaiementSysteme = null;
		if(filtrePaiementSystemeSelectVal !== '')
			filtrePaiementSysteme = filtrePaiementSystemeSelectVal == 'true';
		if(filtrePaiementSysteme != null && filtrePaiementSysteme === true)
			filtres.push({ name: 'fq', value: 'paiementSysteme:' + filtrePaiementSysteme });

		var filtrePaiementDescription = $formulaireFiltres.find('.valeurPaiementDescription').val();
		if(filtrePaiementDescription != null && filtrePaiementDescription !== '')
			filtres.push({ name: 'fq', value: 'paiementDescription:' + filtrePaiementDescription });

		var filtrePaiementPar = $formulaireFiltres.find('.valeurPaiementPar').val();
		if(filtrePaiementPar != null && filtrePaiementPar !== '')
			filtres.push({ name: 'fq', value: 'paiementPar:' + filtrePaiementPar });

		var $filtreInscriptionPaimentCompletCheckbox = $formulaireFiltres.find('input.valeurInscriptionPaimentComplet[type = "checkbox"]');
		var $filtreInscriptionPaimentCompletSelect = $formulaireFiltres.find('select.valeurInscriptionPaimentComplet');
		var filtreInscriptionPaimentComplet = $filtreInscriptionPaimentCompletSelect.length ? $filtreInscriptionPaimentCompletSelect.val() : $filtreInscriptionPaimentCompletCheckbox.prop('checked');
		var filtreInscriptionPaimentCompletSelectVal = $formulaireFiltres.find('select.filtreInscriptionPaimentComplet').val();
		var filtreInscriptionPaimentComplet = null;
		if(filtreInscriptionPaimentCompletSelectVal !== '')
			filtreInscriptionPaimentComplet = filtreInscriptionPaimentCompletSelectVal == 'true';
		if(filtreInscriptionPaimentComplet != null && filtreInscriptionPaimentComplet === true)
			filtres.push({ name: 'fq', value: 'inscriptionPaimentComplet:' + filtreInscriptionPaimentComplet });

		var $filtreInscriptionPaimentChaqueMoisCheckbox = $formulaireFiltres.find('input.valeurInscriptionPaimentChaqueMois[type = "checkbox"]');
		var $filtreInscriptionPaimentChaqueMoisSelect = $formulaireFiltres.find('select.valeurInscriptionPaimentChaqueMois');
		var filtreInscriptionPaimentChaqueMois = $filtreInscriptionPaimentChaqueMoisSelect.length ? $filtreInscriptionPaimentChaqueMoisSelect.val() : $filtreInscriptionPaimentChaqueMoisCheckbox.prop('checked');
		var filtreInscriptionPaimentChaqueMoisSelectVal = $formulaireFiltres.find('select.filtreInscriptionPaimentChaqueMois').val();
		var filtreInscriptionPaimentChaqueMois = null;
		if(filtreInscriptionPaimentChaqueMoisSelectVal !== '')
			filtreInscriptionPaimentChaqueMois = filtreInscriptionPaimentChaqueMoisSelectVal == 'true';
		if(filtreInscriptionPaimentChaqueMois != null && filtreInscriptionPaimentChaqueMois === true)
			filtres.push({ name: 'fq', value: 'inscriptionPaimentChaqueMois:' + filtreInscriptionPaimentChaqueMois });

		var filtreTransactionId = $formulaireFiltres.find('.valeurTransactionId').val();
		if(filtreTransactionId != null && filtreTransactionId !== '')
			filtres.push({ name: 'fq', value: 'transactionId:' + filtreTransactionId });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var filtreTransactionStatus = $formulaireFiltres.find('.valeurTransactionStatus').val();
		if(filtreTransactionStatus != null && filtreTransactionStatus !== '')
			filtres.push({ name: 'fq', value: 'transactionStatus:' + filtreTransactionStatus });

		var $filtrePaiementRecuCheckbox = $formulaireFiltres.find('input.valeurPaiementRecu[type = "checkbox"]');
		var $filtrePaiementRecuSelect = $formulaireFiltres.find('select.valeurPaiementRecu');
		var filtrePaiementRecu = $filtrePaiementRecuSelect.length ? $filtrePaiementRecuSelect.val() : $filtrePaiementRecuCheckbox.prop('checked');
		var filtrePaiementRecuSelectVal = $formulaireFiltres.find('select.filtrePaiementRecu').val();
		var filtrePaiementRecu = null;
		if(filtrePaiementRecuSelectVal !== '')
			filtrePaiementRecu = filtrePaiementRecuSelectVal == 'true';
		if(filtrePaiementRecu != null && filtrePaiementRecu === true)
			filtres.push({ name: 'fq', value: 'paiementRecu:' + filtrePaiementRecu });

		var filtreFraisMontant = $formulaireFiltres.find('.valeurFraisMontant').val();
		if(filtreFraisMontant != null && filtreFraisMontant !== '')
			filtres.push({ name: 'fq', value: 'fraisMontant:' + filtreFraisMontant });

		var $filtreFraisPremierDernierCheckbox = $formulaireFiltres.find('input.valeurFraisPremierDernier[type = "checkbox"]');
		var $filtreFraisPremierDernierSelect = $formulaireFiltres.find('select.valeurFraisPremierDernier');
		var filtreFraisPremierDernier = $filtreFraisPremierDernierSelect.length ? $filtreFraisPremierDernierSelect.val() : $filtreFraisPremierDernierCheckbox.prop('checked');
		var filtreFraisPremierDernierSelectVal = $formulaireFiltres.find('select.filtreFraisPremierDernier').val();
		var filtreFraisPremierDernier = null;
		if(filtreFraisPremierDernierSelectVal !== '')
			filtreFraisPremierDernier = filtreFraisPremierDernierSelectVal == 'true';
		if(filtreFraisPremierDernier != null && filtreFraisPremierDernier === true)
			filtres.push({ name: 'fq', value: 'fraisPremierDernier:' + filtreFraisPremierDernier });

		var $filtreFraisInscriptionCheckbox = $formulaireFiltres.find('input.valeurFraisInscription[type = "checkbox"]');
		var $filtreFraisInscriptionSelect = $formulaireFiltres.find('select.valeurFraisInscription');
		var filtreFraisInscription = $filtreFraisInscriptionSelect.length ? $filtreFraisInscriptionSelect.val() : $filtreFraisInscriptionCheckbox.prop('checked');
		var filtreFraisInscriptionSelectVal = $formulaireFiltres.find('select.filtreFraisInscription').val();
		var filtreFraisInscription = null;
		if(filtreFraisInscriptionSelectVal !== '')
			filtreFraisInscription = filtreFraisInscriptionSelectVal == 'true';
		if(filtreFraisInscription != null && filtreFraisInscription === true)
			filtres.push({ name: 'fq', value: 'fraisInscription:' + filtreFraisInscription });

		var $filtreFraisMoisCheckbox = $formulaireFiltres.find('input.valeurFraisMois[type = "checkbox"]');
		var $filtreFraisMoisSelect = $formulaireFiltres.find('select.valeurFraisMois');
		var filtreFraisMois = $filtreFraisMoisSelect.length ? $filtreFraisMoisSelect.val() : $filtreFraisMoisCheckbox.prop('checked');
		var filtreFraisMoisSelectVal = $formulaireFiltres.find('select.filtreFraisMois').val();
		var filtreFraisMois = null;
		if(filtreFraisMoisSelectVal !== '')
			filtreFraisMois = filtreFraisMoisSelectVal == 'true';
		if(filtreFraisMois != null && filtreFraisMois === true)
			filtres.push({ name: 'fq', value: 'fraisMois:' + filtreFraisMois });

		var $filtreFraisRetardCheckbox = $formulaireFiltres.find('input.valeurFraisRetard[type = "checkbox"]');
		var $filtreFraisRetardSelect = $formulaireFiltres.find('select.valeurFraisRetard');
		var filtreFraisRetard = $filtreFraisRetardSelect.length ? $filtreFraisRetardSelect.val() : $filtreFraisRetardCheckbox.prop('checked');
		var filtreFraisRetardSelectVal = $formulaireFiltres.find('select.filtreFraisRetard').val();
		var filtreFraisRetard = null;
		if(filtreFraisRetardSelectVal !== '')
			filtreFraisRetard = filtreFraisRetardSelectVal == 'true';
		if(filtreFraisRetard != null && filtreFraisRetard === true)
			filtres.push({ name: 'fq', value: 'fraisRetard:' + filtreFraisRetard });

		var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
		if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

		var filtreInheritPk = $formulaireFiltres.find('.valeurInheritPk').val();
		if(filtreInheritPk != null && filtreInheritPk !== '')
			filtres.push({ name: 'fq', value: 'inheritPk:' + filtreInheritPk });

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

		var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
		if(filtreSessionId != null && filtreSessionId !== '')
			filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

		var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
		if(filtreSauvegardes != null && filtreSauvegardes !== '')
			filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

		var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
		if(filtreObjetTitre != null && filtreObjetTitre !== '')
			filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

		var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
		if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
			filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtrePaiementCle = $formulaireFiltres.find('.valeurPaiementCle').val();
		if(filtrePaiementCle != null && filtrePaiementCle !== '')
			filtres.push({ name: 'fq', value: 'paiementCle:' + filtrePaiementCle });

		var filtreEcoleNumero = $formulaireFiltres.find('.valeurEcoleNumero').val();
		if(filtreEcoleNumero != null && filtreEcoleNumero !== '')
			filtres.push({ name: 'fq', value: 'ecoleNumero:' + filtreEcoleNumero });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
		if(filtreSessionCle != null && filtreSessionCle !== '')
			filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

		var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
		if(filtreAgeCle != null && filtreAgeCle !== '')
			filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

		var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
		if(filtreBlocCle != null && filtreBlocCle !== '')
			filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
		if(filtreMereCles != null && filtreMereCles !== '')
			filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

		var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
		if(filtrePereCles != null && filtrePereCles !== '')
			filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

		var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
		if(filtreGardienCles != null && filtreGardienCles !== '')
			filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

		var filtreEnfantNomCompletPrefere = $formulaireFiltres.find('.valeurEnfantNomCompletPrefere').val();
		if(filtreEnfantNomCompletPrefere != null && filtreEnfantNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'enfantNomCompletPrefere:' + filtreEnfantNomCompletPrefere });

		var filtreEnfantDateNaissance = $formulaireFiltres.find('.valeurEnfantDateNaissance').val();
		if(filtreEnfantDateNaissance != null && filtreEnfantDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissance:' + filtreEnfantDateNaissance });

		var filtreMereNomCompletPrefere = $formulaireFiltres.find('.valeurMereNomCompletPrefere').val();
		if(filtreMereNomCompletPrefere != null && filtreMereNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'mereNomCompletPrefere:' + filtreMereNomCompletPrefere });

		var filtrePereNomCompletPrefere = $formulaireFiltres.find('.valeurPereNomCompletPrefere').val();
		if(filtrePereNomCompletPrefere != null && filtrePereNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'pereNomCompletPrefere:' + filtrePereNomCompletPrefere });

		var filtreEcoleNom = $formulaireFiltres.find('.valeurEcoleNom').val();
		if(filtreEcoleNom != null && filtreEcoleNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleNom:' + filtreEcoleNom });

		var filtreEcoleNomComplet = $formulaireFiltres.find('.valeurEcoleNomComplet').val();
		if(filtreEcoleNomComplet != null && filtreEcoleNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ecoleNomComplet:' + filtreEcoleNomComplet });

		var filtreEcoleEmplacement = $formulaireFiltres.find('.valeurEcoleEmplacement').val();
		if(filtreEcoleEmplacement != null && filtreEcoleEmplacement !== '')
			filtres.push({ name: 'fq', value: 'ecoleEmplacement:' + filtreEcoleEmplacement });

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreSaisonDateDebut = $formulaireFiltres.find('.valeurSaisonDateDebut').val();
		if(filtreSaisonDateDebut != null && filtreSaisonDateDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonDateDebut:' + filtreSaisonDateDebut });

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreSessionDateDebut = $formulaireFiltres.find('.valeurSessionDateDebut').val();
		if(filtreSessionDateDebut != null && filtreSessionDateDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionDateDebut:' + filtreSessionDateDebut });

		var filtreSessionDateFin = $formulaireFiltres.find('.valeurSessionDateFin').val();
		if(filtreSessionDateFin != null && filtreSessionDateFin !== '')
			filtres.push({ name: 'fq', value: 'sessionDateFin:' + filtreSessionDateFin });

		var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
		if(filtreAgeDebut != null && filtreAgeDebut !== '')
			filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

		var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
		if(filtreAgeFin != null && filtreAgeFin !== '')
			filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

		var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
		if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
			filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

		var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
		if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
			filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

		var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
		if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
			filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

		var filtreBlocPrixTotal = $formulaireFiltres.find('.valeurBlocPrixTotal').val();
		if(filtreBlocPrixTotal != null && filtreBlocPrixTotal !== '')
			filtres.push({ name: 'fq', value: 'blocPrixTotal:' + filtreBlocPrixTotal });

		var filtreFraisMontantDu = $formulaireFiltres.find('.valeurFraisMontantDu').val();
		if(filtreFraisMontantDu != null && filtreFraisMontantDu !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantDu:' + filtreFraisMontantDu });

		var filtreFraisMontantFuture = $formulaireFiltres.find('.valeurFraisMontantFuture').val();
		if(filtreFraisMontantFuture != null && filtreFraisMontantFuture !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantFuture:' + filtreFraisMontantFuture });

		var filtrePaiementNomCourt = $formulaireFiltres.find('.valeurPaiementNomCourt').val();
		if(filtrePaiementNomCourt != null && filtrePaiementNomCourt !== '')
			filtres.push({ name: 'fq', value: 'paiementNomCourt:' + filtrePaiementNomCourt });

		var filtrePaiementNomComplet = $formulaireFiltres.find('.valeurPaiementNomComplet').val();
		if(filtrePaiementNomComplet != null && filtrePaiementNomComplet !== '')
			filtres.push({ name: 'fq', value: 'paiementNomComplet:' + filtrePaiementNomComplet });
	}
	return filtres;
}

function recherchePaiementScolaireVals(filtres, success, error) {

	filtres.push({ name: 'rows', value: 50 });

	filtres.push({ name: 'sort', value: 'paiementDate desc' });
	filtres.push({ name: 'sort', value: 'paiementPar desc' });
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
			var $i = $('<i>').attr('class', 'fas fa-search-dollar ');
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

function suggerePaiementScolaireInscriptionCle(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['paiementCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCle_' + pk + '_paiementCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCle_" + pk + "_paiementCles_" + o['pk'] + "'); patchPaiementScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'InscriptionCle']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribuer)
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
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
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
				$('.top-box').append($box);
			if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketInscriptionScolaire', function (error, message) {
			$('#Page_inscriptionCle').trigger('oninput');
			$('#Page_inscriptionCle_ajouter').text('ajouter une inscription');
			$('#Page_inscriptionCle_ajouter').removeClass('w3-disabled');
			$('#Page_inscriptionCle_ajouter').attr('disabled', false);
		});
	}
}
async function websocketPaiementScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherPaiementScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputPaiementScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputPaiementScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'Modifie'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputPaiementScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputPaiementScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'Supprime'));
			}
			var val = o['paiementDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('paiementDate')) {
				$('.inputPaiementScolaire' + pk + 'PaiementDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PaiementDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PaiementDate'));
			}
			var val = o['paiementMontant'];
			if(vars.includes('paiementMontant')) {
				$('.inputPaiementScolaire' + pk + 'PaiementMontant').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PaiementMontant').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PaiementMontant'));
			}
			var val = o['paiementEspeces'];
			if(vars.includes('paiementEspeces')) {
				$('.inputPaiementScolaire' + pk + 'PaiementEspeces').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PaiementEspeces').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PaiementEspeces'));
			}
			var val = o['paiementCheque'];
			if(vars.includes('paiementCheque')) {
				$('.inputPaiementScolaire' + pk + 'PaiementCheque').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PaiementCheque').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PaiementCheque'));
			}
			var val = o['paiementECheck'];
			if(vars.includes('paiementECheck')) {
				$('.inputPaiementScolaire' + pk + 'PaiementECheck').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PaiementECheck').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PaiementECheck'));
			}
			var val = o['paiementSysteme'];
			if(vars.includes('paiementSysteme')) {
				$('.inputPaiementScolaire' + pk + 'PaiementSysteme').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PaiementSysteme').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PaiementSysteme'));
			}
			var val = o['paiementDescription'];
			if(vars.includes('paiementDescription')) {
				$('.inputPaiementScolaire' + pk + 'PaiementDescription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PaiementDescription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PaiementDescription'));
			}
			var val = o['paiementPar'];
			if(vars.includes('paiementPar')) {
				$('.inputPaiementScolaire' + pk + 'PaiementPar').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PaiementPar').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PaiementPar'));
			}
			var val = o['inscriptionPaimentComplet'];
			if(vars.includes('inscriptionPaimentComplet')) {
				$('.inputPaiementScolaire' + pk + 'InscriptionPaimentComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'InscriptionPaimentComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'InscriptionPaimentComplet'));
			}
			var val = o['inscriptionPaimentChaqueMois'];
			if(vars.includes('inscriptionPaimentChaqueMois')) {
				$('.inputPaiementScolaire' + pk + 'InscriptionPaimentChaqueMois').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'InscriptionPaimentChaqueMois').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'InscriptionPaimentChaqueMois'));
			}
			var val = o['transactionId'];
			if(vars.includes('transactionId')) {
				$('.inputPaiementScolaire' + pk + 'TransactionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'TransactionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'TransactionId'));
			}
			var val = o['customerProfileId'];
			if(vars.includes('customerProfileId')) {
				$('.inputPaiementScolaire' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'CustomerProfileId'));
			}
			var val = o['transactionStatus'];
			if(vars.includes('transactionStatus')) {
				$('.inputPaiementScolaire' + pk + 'TransactionStatus').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'TransactionStatus').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'TransactionStatus'));
			}
			var val = o['paiementRecu'];
			if(vars.includes('paiementRecu')) {
				$('.inputPaiementScolaire' + pk + 'PaiementRecu').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PaiementRecu').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PaiementRecu'));
			}
			var val = o['fraisMontant'];
			if(vars.includes('fraisMontant')) {
				$('.inputPaiementScolaire' + pk + 'FraisMontant').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'FraisMontant').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'FraisMontant'));
			}
			var val = o['fraisPremierDernier'];
			if(vars.includes('fraisPremierDernier')) {
				$('.inputPaiementScolaire' + pk + 'FraisPremierDernier').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'FraisPremierDernier').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'FraisPremierDernier'));
			}
			var val = o['fraisInscription'];
			if(vars.includes('fraisInscription')) {
				$('.inputPaiementScolaire' + pk + 'FraisInscription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'FraisInscription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'FraisInscription'));
			}
			var val = o['fraisMois'];
			if(vars.includes('fraisMois')) {
				$('.inputPaiementScolaire' + pk + 'FraisMois').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'FraisMois').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'FraisMois'));
			}
			var val = o['fraisRetard'];
			if(vars.includes('fraisRetard')) {
				$('.inputPaiementScolaire' + pk + 'FraisRetard').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'FraisRetard').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'FraisRetard'));
			}
			var val = o['inscriptionCle'];
			if(vars.includes('inscriptionCle')) {
				$('.inputPaiementScolaire' + pk + 'InscriptionCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'InscriptionCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'InscriptionCle'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputPaiementScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputPaiementScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputPaiementScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputPaiementScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'UtilisateurCle'));
			}
			var val = o['enfantNomCompletPrefere'];
			if(vars.includes('enfantNomCompletPrefere')) {
				$('.inputPaiementScolaire' + pk + 'EnfantNomCompletPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'EnfantNomCompletPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'EnfantNomCompletPrefere'));
			}
			var val = o['enfantDateNaissance'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('enfantDateNaissance')) {
				$('.inputPaiementScolaire' + pk + 'EnfantDateNaissance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'EnfantDateNaissance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'EnfantDateNaissance'));
			}
			var val = o['mereNomCompletPrefere'];
			if(vars.includes('mereNomCompletPrefere')) {
				$('.inputPaiementScolaire' + pk + 'MereNomCompletPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'MereNomCompletPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'MereNomCompletPrefere'));
			}
			var val = o['pereNomCompletPrefere'];
			if(vars.includes('pereNomCompletPrefere')) {
				$('.inputPaiementScolaire' + pk + 'PereNomCompletPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PereNomCompletPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PereNomCompletPrefere'));
			}
			var val = o['fraisMontantDu'];
			if(vars.includes('fraisMontantDu')) {
				$('.inputPaiementScolaire' + pk + 'FraisMontantDu').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'FraisMontantDu').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'FraisMontantDu'));
			}
			var val = o['fraisMontantFuture'];
			if(vars.includes('fraisMontantFuture')) {
				$('.inputPaiementScolaire' + pk + 'FraisMontantFuture').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'FraisMontantFuture').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'FraisMontantFuture'));
			}
			var val = o['paiementNomCourt'];
			if(vars.includes('paiementNomCourt')) {
				$('.inputPaiementScolaire' + pk + 'PaiementNomCourt').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPaiementScolaire' + pk + 'PaiementNomCourt').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPaiementScolaire' + pk + 'PaiementNomCourt'));
			}
		});
	}
}

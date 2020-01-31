
// POST //

async function postSaisonScolaire($formulaireValeurs, success, error) {
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

	var valeurSaisonJourDebut = $formulaireValeurs.find('.valeurSaisonJourDebut').val();
	if(valeurSaisonJourDebut != null && valeurSaisonJourDebut !== '')
		vals['saisonJourDebut'] = valeurSaisonJourDebut;

	var valeurSaisonEte = $formulaireValeurs.find('.valeurSaisonEte').prop('checked');
	if(valeurSaisonEte != null && valeurSaisonEte !== '')
		vals['saisonEte'] = valeurSaisonEte;

	var valeurSaisonHiver = $formulaireValeurs.find('.valeurSaisonHiver').prop('checked');
	if(valeurSaisonHiver != null && valeurSaisonHiver !== '')
		vals['saisonHiver'] = valeurSaisonHiver;

	var valeurSaisonFuture = $formulaireValeurs.find('.valeurSaisonFuture').prop('checked');
	if(valeurSaisonFuture != null && valeurSaisonFuture !== '')
		vals['saisonFuture'] = valeurSaisonFuture;

	var valeurSessionCles = $formulaireValeurs.find('input.valeurSessionCles:checked').val();
	if(valeurSessionCles != null && valeurSessionCles !== '')
		vals['sessionCles'] = valeurSessionCles;

	var valeurAnneeCle = $formulaireValeurs.find('input.valeurAnneeCle:checked').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['anneeCle'] = valeurAnneeCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	var valeurSaisonNomComplet = $formulaireValeurs.find('.valeurSaisonNomComplet').val();
	if(valeurSaisonNomComplet != null && valeurSaisonNomComplet !== '')
		vals['saisonNomComplet'] = valeurSaisonNomComplet;

	$.ajax({
		url: '/api/saison'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSaisonScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/saison'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSaisonScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchSaisonScolaireFiltres($formulaireFiltres);

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

	var removeSaisonJourDebut = $formulaireFiltres.find('.removeSaisonJourDebut').val() === 'true';
	var setSaisonJourDebut = removeSaisonJourDebut ? null : $formulaireValeurs.find('.setSaisonJourDebut').val();
	if(removeSaisonJourDebut || setSaisonJourDebut != null && setSaisonJourDebut !== '')
		vals['setSaisonJourDebut'] = setSaisonJourDebut;
	var addSaisonJourDebut = $formulaireValeurs.find('.addSaisonJourDebut').val();
	if(addSaisonJourDebut != null && addSaisonJourDebut !== '')
		vals['addSaisonJourDebut'] = addSaisonJourDebut;
	var removeSaisonJourDebut = $formulaireValeurs.find('.removeSaisonJourDebut').val();
	if(removeSaisonJourDebut != null && removeSaisonJourDebut !== '')
		vals['removeSaisonJourDebut'] = removeSaisonJourDebut;

	var removeSaisonEte = $formulaireFiltres.find('.removeSaisonEte').val() === 'true';
	var setSaisonEte = removeSaisonEte ? null : $formulaireValeurs.find('.setSaisonEte').prop('checked');
	if(removeSaisonEte || setSaisonEte != null && setSaisonEte !== '')
		vals['setSaisonEte'] = setSaisonEte;
	var addSaisonEte = $formulaireValeurs.find('.addSaisonEte').prop('checked');
	if(addSaisonEte != null && addSaisonEte !== '')
		vals['addSaisonEte'] = addSaisonEte;
	var removeSaisonEte = $formulaireValeurs.find('.removeSaisonEte').prop('checked');
	if(removeSaisonEte != null && removeSaisonEte !== '')
		vals['removeSaisonEte'] = removeSaisonEte;

	var removeSaisonHiver = $formulaireFiltres.find('.removeSaisonHiver').val() === 'true';
	var setSaisonHiver = removeSaisonHiver ? null : $formulaireValeurs.find('.setSaisonHiver').prop('checked');
	if(removeSaisonHiver || setSaisonHiver != null && setSaisonHiver !== '')
		vals['setSaisonHiver'] = setSaisonHiver;
	var addSaisonHiver = $formulaireValeurs.find('.addSaisonHiver').prop('checked');
	if(addSaisonHiver != null && addSaisonHiver !== '')
		vals['addSaisonHiver'] = addSaisonHiver;
	var removeSaisonHiver = $formulaireValeurs.find('.removeSaisonHiver').prop('checked');
	if(removeSaisonHiver != null && removeSaisonHiver !== '')
		vals['removeSaisonHiver'] = removeSaisonHiver;

	var removeSaisonFuture = $formulaireFiltres.find('.removeSaisonFuture').val() === 'true';
	var setSaisonFuture = removeSaisonFuture ? null : $formulaireValeurs.find('.setSaisonFuture').prop('checked');
	if(removeSaisonFuture || setSaisonFuture != null && setSaisonFuture !== '')
		vals['setSaisonFuture'] = setSaisonFuture;
	var addSaisonFuture = $formulaireValeurs.find('.addSaisonFuture').prop('checked');
	if(addSaisonFuture != null && addSaisonFuture !== '')
		vals['addSaisonFuture'] = addSaisonFuture;
	var removeSaisonFuture = $formulaireValeurs.find('.removeSaisonFuture').prop('checked');
	if(removeSaisonFuture != null && removeSaisonFuture !== '')
		vals['removeSaisonFuture'] = removeSaisonFuture;

	var removeSessionCles = $formulaireFiltres.find('.removeSessionCles').val() === 'true';
	var setSessionCles = removeSessionCles ? null : $formulaireValeurs.find('.setSessionCles').val();
	if(removeSessionCles || setSessionCles != null && setSessionCles !== '')
		vals['setSessionCles'] = setSessionCles;
	var addSessionCles = $formulaireValeurs.find('.addSessionCles').val();
	if(addSessionCles != null && addSessionCles !== '')
		vals['addSessionCles'] = addSessionCles;
	var removeSessionCles = $formulaireValeurs.find('.removeSessionCles').val();
	if(removeSessionCles != null && removeSessionCles !== '')
		vals['removeSessionCles'] = removeSessionCles;

	var removeAnneeCle = $formulaireFiltres.find('.removeAnneeCle').val() === 'true';
	var setAnneeCle = removeAnneeCle ? null : $formulaireValeurs.find('.setAnneeCle').val();
	if(removeAnneeCle || setAnneeCle != null && setAnneeCle !== '')
		vals['setAnneeCle'] = setAnneeCle;
	var addAnneeCle = $formulaireValeurs.find('.addAnneeCle').val();
	if(addAnneeCle != null && addAnneeCle !== '')
		vals['addAnneeCle'] = addAnneeCle;
	var removeAnneeCle = $formulaireValeurs.find('.removeAnneeCle').val();
	if(removeAnneeCle != null && removeAnneeCle !== '')
		vals['removeAnneeCle'] = removeAnneeCle;

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

	var removeSaisonNomComplet = $formulaireFiltres.find('.removeSaisonNomComplet').val() === 'true';
	var setSaisonNomComplet = removeSaisonNomComplet ? null : $formulaireValeurs.find('.setSaisonNomComplet').val();
	if(removeSaisonNomComplet || setSaisonNomComplet != null && setSaisonNomComplet !== '')
		vals['setSaisonNomComplet'] = setSaisonNomComplet;
	var addSaisonNomComplet = $formulaireValeurs.find('.addSaisonNomComplet').val();
	if(addSaisonNomComplet != null && addSaisonNomComplet !== '')
		vals['addSaisonNomComplet'] = addSaisonNomComplet;
	var removeSaisonNomComplet = $formulaireValeurs.find('.removeSaisonNomComplet').val();
	if(removeSaisonNomComplet != null && removeSaisonNomComplet !== '')
		vals['removeSaisonNomComplet'] = removeSaisonNomComplet;

	patchSaisonScolaireVals(filtres, vals, success, error);
}

function patchSaisonScolaireFiltres($formulaireFiltres) {
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

	var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
	if(filtreObjetId != null && filtreObjetId !== '')
		filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreSaisonJourDebut = $formulaireFiltres.find('.valeurSaisonJourDebut').val();
	if(filtreSaisonJourDebut != null && filtreSaisonJourDebut !== '')
		filtres.push({ name: 'fq', value: 'saisonJourDebut:' + filtreSaisonJourDebut });

	var filtreSaisonEte = $formulaireFiltres.find('.valeurSaisonEte').prop('checked');
	if(filtreSaisonEte != null && filtreSaisonEte === true)
		filtres.push({ name: 'fq', value: 'saisonEte:' + filtreSaisonEte });

	var filtreSaisonHiver = $formulaireFiltres.find('.valeurSaisonHiver').prop('checked');
	if(filtreSaisonHiver != null && filtreSaisonHiver === true)
		filtres.push({ name: 'fq', value: 'saisonHiver:' + filtreSaisonHiver });

	var filtreSaisonFuture = $formulaireFiltres.find('.valeurSaisonFuture').prop('checked');
	if(filtreSaisonFuture != null && filtreSaisonFuture === true)
		filtres.push({ name: 'fq', value: 'saisonFuture:' + filtreSaisonFuture });

	var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
	if(filtreSessionCles != null && filtreSessionCles !== '')
		filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

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

	var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
	if(filtreSauvegardes != null && filtreSauvegardes !== '')
		filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

	var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
	if(filtreObjetTitre != null && filtreObjetTitre !== '')
		filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

	var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
	if(filtrePageUrlId != null && filtrePageUrlId !== '')
		filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

	var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
	if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
		filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

	var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
	if(filtreSaisonCle != null && filtreSaisonCle !== '')
		filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

	var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
	if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

	var filtreScolaireTri = $formulaireFiltres.find('.valeurScolaireTri').val();
	if(filtreScolaireTri != null && filtreScolaireTri !== '')
		filtres.push({ name: 'fq', value: 'scolaireTri:' + filtreScolaireTri });

	var filtreEcoleTri = $formulaireFiltres.find('.valeurEcoleTri').val();
	if(filtreEcoleTri != null && filtreEcoleTri !== '')
		filtres.push({ name: 'fq', value: 'ecoleTri:' + filtreEcoleTri });

	var filtreAnneeTri = $formulaireFiltres.find('.valeurAnneeTri').val();
	if(filtreAnneeTri != null && filtreAnneeTri !== '')
		filtres.push({ name: 'fq', value: 'anneeTri:' + filtreAnneeTri });

	var filtreSaisonTri = $formulaireFiltres.find('.valeurSaisonTri').val();
	if(filtreSaisonTri != null && filtreSaisonTri !== '')
		filtres.push({ name: 'fq', value: 'saisonTri:' + filtreSaisonTri });

	var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
	if(filtreEcoleCle != null && filtreEcoleCle !== '')
		filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

	var filtreEcoleNom = $formulaireFiltres.find('.valeurEcoleNom').val();
	if(filtreEcoleNom != null && filtreEcoleNom !== '')
		filtres.push({ name: 'fq', value: 'ecoleNom:' + filtreEcoleNom });

	var filtreEcoleNomComplet = $formulaireFiltres.find('.valeurEcoleNomComplet').val();
	if(filtreEcoleNomComplet != null && filtreEcoleNomComplet !== '')
		filtres.push({ name: 'fq', value: 'ecoleNomComplet:' + filtreEcoleNomComplet });

	var filtreEcoleEmplacement = $formulaireFiltres.find('.valeurEcoleEmplacement').val();
	if(filtreEcoleEmplacement != null && filtreEcoleEmplacement !== '')
		filtres.push({ name: 'fq', value: 'ecoleEmplacement:' + filtreEcoleEmplacement });

	var filtreEcoleAddresse = $formulaireFiltres.find('.valeurEcoleAddresse').val();
	if(filtreEcoleAddresse != null && filtreEcoleAddresse !== '')
		filtres.push({ name: 'fq', value: 'ecoleAddresse:' + filtreEcoleAddresse });

	var filtreEcoleNumeroTelephone = $formulaireFiltres.find('.valeurEcoleNumeroTelephone').val();
	if(filtreEcoleNumeroTelephone != null && filtreEcoleNumeroTelephone !== '')
		filtres.push({ name: 'fq', value: 'ecoleNumeroTelephone:' + filtreEcoleNumeroTelephone });

	var filtreEcoleAdministrateurNom = $formulaireFiltres.find('.valeurEcoleAdministrateurNom').val();
	if(filtreEcoleAdministrateurNom != null && filtreEcoleAdministrateurNom !== '')
		filtres.push({ name: 'fq', value: 'ecoleAdministrateurNom:' + filtreEcoleAdministrateurNom });

	var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
	if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
		filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

	var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
	if(filtreAnneeFin != null && filtreAnneeFin !== '')
		filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

	var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
	if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
		filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

	var filtreSaisonNomCourt = $formulaireFiltres.find('.valeurSaisonNomCourt').val();
	if(filtreSaisonNomCourt != null && filtreSaisonNomCourt !== '')
		filtres.push({ name: 'fq', value: 'saisonNomCourt:' + filtreSaisonNomCourt });

	var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
	if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
		filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });
	return filtres;
}

function patchSaisonScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSaisonScolaireVals(filtres, vals, success, error);
}

function patchSaisonScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/saison?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSaisonScolaire(pk) {
	$.ajax({
		url: '/api/saison/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

async function deleteSaisonScolaire(pk) {
	$.ajax({
		url: '/api/saison/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheSaisonScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheSaisonScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheSaisonScolaireVals(filtres, success, error);
}

function rechercheSaisonScolaireFiltres($formulaireFiltres) {
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

	var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
	if(filtreObjetId != null && filtreObjetId !== '')
		filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreSaisonJourDebut = $formulaireFiltres.find('.valeurSaisonJourDebut').val();
	if(filtreSaisonJourDebut != null && filtreSaisonJourDebut !== '')
		filtres.push({ name: 'fq', value: 'saisonJourDebut:' + filtreSaisonJourDebut });

	var filtreSaisonEte = $formulaireFiltres.find('.valeurSaisonEte').prop('checked');
	if(filtreSaisonEte != null && filtreSaisonEte === true)
		filtres.push({ name: 'fq', value: 'saisonEte:' + filtreSaisonEte });

	var filtreSaisonHiver = $formulaireFiltres.find('.valeurSaisonHiver').prop('checked');
	if(filtreSaisonHiver != null && filtreSaisonHiver === true)
		filtres.push({ name: 'fq', value: 'saisonHiver:' + filtreSaisonHiver });

	var filtreSaisonFuture = $formulaireFiltres.find('.valeurSaisonFuture').prop('checked');
	if(filtreSaisonFuture != null && filtreSaisonFuture === true)
		filtres.push({ name: 'fq', value: 'saisonFuture:' + filtreSaisonFuture });

	var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
	if(filtreSessionCles != null && filtreSessionCles !== '')
		filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

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

	var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
	if(filtreSauvegardes != null && filtreSauvegardes !== '')
		filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

	var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
	if(filtreObjetTitre != null && filtreObjetTitre !== '')
		filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

	var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
	if(filtrePageUrlId != null && filtrePageUrlId !== '')
		filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

	var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
	if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
		filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

	var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
	if(filtreSaisonCle != null && filtreSaisonCle !== '')
		filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

	var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
	if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

	var filtreScolaireTri = $formulaireFiltres.find('.valeurScolaireTri').val();
	if(filtreScolaireTri != null && filtreScolaireTri !== '')
		filtres.push({ name: 'fq', value: 'scolaireTri:' + filtreScolaireTri });

	var filtreEcoleTri = $formulaireFiltres.find('.valeurEcoleTri').val();
	if(filtreEcoleTri != null && filtreEcoleTri !== '')
		filtres.push({ name: 'fq', value: 'ecoleTri:' + filtreEcoleTri });

	var filtreAnneeTri = $formulaireFiltres.find('.valeurAnneeTri').val();
	if(filtreAnneeTri != null && filtreAnneeTri !== '')
		filtres.push({ name: 'fq', value: 'anneeTri:' + filtreAnneeTri });

	var filtreSaisonTri = $formulaireFiltres.find('.valeurSaisonTri').val();
	if(filtreSaisonTri != null && filtreSaisonTri !== '')
		filtres.push({ name: 'fq', value: 'saisonTri:' + filtreSaisonTri });

	var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
	if(filtreEcoleCle != null && filtreEcoleCle !== '')
		filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

	var filtreEcoleNom = $formulaireFiltres.find('.valeurEcoleNom').val();
	if(filtreEcoleNom != null && filtreEcoleNom !== '')
		filtres.push({ name: 'fq', value: 'ecoleNom:' + filtreEcoleNom });

	var filtreEcoleNomComplet = $formulaireFiltres.find('.valeurEcoleNomComplet').val();
	if(filtreEcoleNomComplet != null && filtreEcoleNomComplet !== '')
		filtres.push({ name: 'fq', value: 'ecoleNomComplet:' + filtreEcoleNomComplet });

	var filtreEcoleEmplacement = $formulaireFiltres.find('.valeurEcoleEmplacement').val();
	if(filtreEcoleEmplacement != null && filtreEcoleEmplacement !== '')
		filtres.push({ name: 'fq', value: 'ecoleEmplacement:' + filtreEcoleEmplacement });

	var filtreEcoleAddresse = $formulaireFiltres.find('.valeurEcoleAddresse').val();
	if(filtreEcoleAddresse != null && filtreEcoleAddresse !== '')
		filtres.push({ name: 'fq', value: 'ecoleAddresse:' + filtreEcoleAddresse });

	var filtreEcoleNumeroTelephone = $formulaireFiltres.find('.valeurEcoleNumeroTelephone').val();
	if(filtreEcoleNumeroTelephone != null && filtreEcoleNumeroTelephone !== '')
		filtres.push({ name: 'fq', value: 'ecoleNumeroTelephone:' + filtreEcoleNumeroTelephone });

	var filtreEcoleAdministrateurNom = $formulaireFiltres.find('.valeurEcoleAdministrateurNom').val();
	if(filtreEcoleAdministrateurNom != null && filtreEcoleAdministrateurNom !== '')
		filtres.push({ name: 'fq', value: 'ecoleAdministrateurNom:' + filtreEcoleAdministrateurNom });

	var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
	if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
		filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

	var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
	if(filtreAnneeFin != null && filtreAnneeFin !== '')
		filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

	var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
	if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
		filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

	var filtreSaisonNomCourt = $formulaireFiltres.find('.valeurSaisonNomCourt').val();
	if(filtreSaisonNomCourt != null && filtreSaisonNomCourt !== '')
		filtres.push({ name: 'fq', value: 'saisonNomCourt:' + filtreSaisonNomCourt });

	var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
	if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
		filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });
	return filtres;
}

function rechercheSaisonScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/saison?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereSaisonScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['saisonNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherSaisonScolaireVals($formulaireFiltres, success, error);
}

function suggereSaisonScolaireSessionCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-graduation-cap w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['sessionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['saisonCle'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_sessionCles_' + pk + '_saisonCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurSessionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_sessionCles_" + pk + "_saisonCle_" + o['pk'] + "'); patchSaisonScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SessionCles']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SaisonScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheSessionScolaireVals(filtres, success, error);
}

function suggereSaisonScolaireAnneeCle(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['anneeNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['saisonCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_anneeCle_' + pk + '_saisonCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurAnneeCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_anneeCle_" + pk + "_saisonCles_" + o['pk'] + "'); patchSaisonScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'AnneeCle']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SaisonScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheAnneeScolaireVals(filtres, success, error);
}

async function websocketSaisonScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSaisonScolaire', function (error, message) {
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
				var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
				var $header = $('<div>').attr('class', 'w3-container fa-yellow ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'far fa-sun w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modifier ');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-yellow ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
		});

		window.eventBus.registerHandler('websocketSessionScolaire', function (error, message) {
			$('#Page_sessionCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketAnneeScolaire', function (error, message) {
			$('#Page_anneeCle').trigger('oninput');
		});
	}
}
async function websocketSaisonScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherSaisonScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('cree')) {
				$('.inputSaisonScolaire' + pk + 'Cree').val(o['cree']);
				$('.varSaisonScolaire' + pk + 'Cree').text(o['cree']);
			}
			if(vars.includes('modifie')) {
				$('.inputSaisonScolaire' + pk + 'Modifie').val(o['modifie']);
				$('.varSaisonScolaire' + pk + 'Modifie').text(o['modifie']);
			}
			if(vars.includes('archive')) {
				$('.inputSaisonScolaire' + pk + 'Archive').val(o['archive']);
				$('.varSaisonScolaire' + pk + 'Archive').text(o['archive']);
			}
			if(vars.includes('supprime')) {
				$('.inputSaisonScolaire' + pk + 'Supprime').val(o['supprime']);
				$('.varSaisonScolaire' + pk + 'Supprime').text(o['supprime']);
			}
			if(vars.includes('saisonJourDebut')) {
				$('.inputSaisonScolaire' + pk + 'SaisonJourDebut').val(o['saisonJourDebut']);
				$('.varSaisonScolaire' + pk + 'SaisonJourDebut').text(o['saisonJourDebut']);
			}
			if(vars.includes('saisonEte')) {
				$('.inputSaisonScolaire' + pk + 'SaisonEte').val(o['saisonEte']);
				$('.varSaisonScolaire' + pk + 'SaisonEte').text(o['saisonEte']);
			}
			if(vars.includes('saisonHiver')) {
				$('.inputSaisonScolaire' + pk + 'SaisonHiver').val(o['saisonHiver']);
				$('.varSaisonScolaire' + pk + 'SaisonHiver').text(o['saisonHiver']);
			}
			if(vars.includes('saisonFuture')) {
				$('.inputSaisonScolaire' + pk + 'SaisonFuture').val(o['saisonFuture']);
				$('.varSaisonScolaire' + pk + 'SaisonFuture').text(o['saisonFuture']);
			}
			if(vars.includes('sessionCles')) {
				$('.inputSaisonScolaire' + pk + 'SessionCles').val(o['sessionCles']);
				$('.varSaisonScolaire' + pk + 'SessionCles').text(o['sessionCles']);
			}
			if(vars.includes('anneeCle')) {
				$('.inputSaisonScolaire' + pk + 'AnneeCle').val(o['anneeCle']);
				$('.varSaisonScolaire' + pk + 'AnneeCle').text(o['anneeCle']);
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
		if(pk)
			await patchSaisonScolaireVals( [ {name: 'fq', value: 'pk:' + pk} ], {});
	}
}

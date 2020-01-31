
// POST //

async function postSessionScolaire($formulaireValeurs, success, error) {
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

	var valeurSessionJourDebut = $formulaireValeurs.find('.valeurSessionJourDebut').val();
	if(valeurSessionJourDebut != null && valeurSessionJourDebut !== '')
		vals['sessionJourDebut'] = valeurSessionJourDebut;

	var valeurSessionJourFin = $formulaireValeurs.find('.valeurSessionJourFin').val();
	if(valeurSessionJourFin != null && valeurSessionJourFin !== '')
		vals['sessionJourFin'] = valeurSessionJourFin;

	var valeurSaisonCle = $formulaireValeurs.find('input.valeurSaisonCle:checked').val();
	if(valeurSaisonCle != null && valeurSaisonCle !== '')
		vals['saisonCle'] = valeurSaisonCle;

	var valeurAgeCles = $formulaireValeurs.find('input.valeurAgeCles:checked').val();
	if(valeurAgeCles != null && valeurAgeCles !== '')
		vals['ageCles'] = valeurAgeCles;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
		vals['ecoleAddresse'] = valeurEcoleAddresse;

	var valeurSessionNomComplet = $formulaireValeurs.find('.valeurSessionNomComplet').val();
	if(valeurSessionNomComplet != null && valeurSessionNomComplet !== '')
		vals['sessionNomComplet'] = valeurSessionNomComplet;

	$.ajax({
		url: '/api/session'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSessionScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/session'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSessionScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchSessionScolaireFiltres($formulaireFiltres);

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

	var removeSessionJourDebut = $formulaireFiltres.find('.removeSessionJourDebut').val() === 'true';
	var setSessionJourDebut = removeSessionJourDebut ? null : $formulaireValeurs.find('.setSessionJourDebut').val();
	if(removeSessionJourDebut || setSessionJourDebut != null && setSessionJourDebut !== '')
		vals['setSessionJourDebut'] = setSessionJourDebut;
	var addSessionJourDebut = $formulaireValeurs.find('.addSessionJourDebut').val();
	if(addSessionJourDebut != null && addSessionJourDebut !== '')
		vals['addSessionJourDebut'] = addSessionJourDebut;
	var removeSessionJourDebut = $formulaireValeurs.find('.removeSessionJourDebut').val();
	if(removeSessionJourDebut != null && removeSessionJourDebut !== '')
		vals['removeSessionJourDebut'] = removeSessionJourDebut;

	var removeSessionJourFin = $formulaireFiltres.find('.removeSessionJourFin').val() === 'true';
	var setSessionJourFin = removeSessionJourFin ? null : $formulaireValeurs.find('.setSessionJourFin').val();
	if(removeSessionJourFin || setSessionJourFin != null && setSessionJourFin !== '')
		vals['setSessionJourFin'] = setSessionJourFin;
	var addSessionJourFin = $formulaireValeurs.find('.addSessionJourFin').val();
	if(addSessionJourFin != null && addSessionJourFin !== '')
		vals['addSessionJourFin'] = addSessionJourFin;
	var removeSessionJourFin = $formulaireValeurs.find('.removeSessionJourFin').val();
	if(removeSessionJourFin != null && removeSessionJourFin !== '')
		vals['removeSessionJourFin'] = removeSessionJourFin;

	var removeSaisonCle = $formulaireFiltres.find('.removeSaisonCle').val() === 'true';
	var setSaisonCle = removeSaisonCle ? null : $formulaireValeurs.find('.setSaisonCle').val();
	if(removeSaisonCle || setSaisonCle != null && setSaisonCle !== '')
		vals['setSaisonCle'] = setSaisonCle;
	var addSaisonCle = $formulaireValeurs.find('.addSaisonCle').val();
	if(addSaisonCle != null && addSaisonCle !== '')
		vals['addSaisonCle'] = addSaisonCle;
	var removeSaisonCle = $formulaireValeurs.find('.removeSaisonCle').val();
	if(removeSaisonCle != null && removeSaisonCle !== '')
		vals['removeSaisonCle'] = removeSaisonCle;

	var removeAgeCles = $formulaireFiltres.find('.removeAgeCles').val() === 'true';
	var setAgeCles = removeAgeCles ? null : $formulaireValeurs.find('.setAgeCles').val();
	if(removeAgeCles || setAgeCles != null && setAgeCles !== '')
		vals['setAgeCles'] = setAgeCles;
	var addAgeCles = $formulaireValeurs.find('.addAgeCles').val();
	if(addAgeCles != null && addAgeCles !== '')
		vals['addAgeCles'] = addAgeCles;
	var removeAgeCles = $formulaireValeurs.find('.removeAgeCles').val();
	if(removeAgeCles != null && removeAgeCles !== '')
		vals['removeAgeCles'] = removeAgeCles;

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

	var removeEcoleAddresse = $formulaireFiltres.find('.removeEcoleAddresse').val() === 'true';
	var setEcoleAddresse = removeEcoleAddresse ? null : $formulaireValeurs.find('.setEcoleAddresse').val();
	if(removeEcoleAddresse || setEcoleAddresse != null && setEcoleAddresse !== '')
		vals['setEcoleAddresse'] = setEcoleAddresse;
	var addEcoleAddresse = $formulaireValeurs.find('.addEcoleAddresse').val();
	if(addEcoleAddresse != null && addEcoleAddresse !== '')
		vals['addEcoleAddresse'] = addEcoleAddresse;
	var removeEcoleAddresse = $formulaireValeurs.find('.removeEcoleAddresse').val();
	if(removeEcoleAddresse != null && removeEcoleAddresse !== '')
		vals['removeEcoleAddresse'] = removeEcoleAddresse;

	var removeSessionNomComplet = $formulaireFiltres.find('.removeSessionNomComplet').val() === 'true';
	var setSessionNomComplet = removeSessionNomComplet ? null : $formulaireValeurs.find('.setSessionNomComplet').val();
	if(removeSessionNomComplet || setSessionNomComplet != null && setSessionNomComplet !== '')
		vals['setSessionNomComplet'] = setSessionNomComplet;
	var addSessionNomComplet = $formulaireValeurs.find('.addSessionNomComplet').val();
	if(addSessionNomComplet != null && addSessionNomComplet !== '')
		vals['addSessionNomComplet'] = addSessionNomComplet;
	var removeSessionNomComplet = $formulaireValeurs.find('.removeSessionNomComplet').val();
	if(removeSessionNomComplet != null && removeSessionNomComplet !== '')
		vals['removeSessionNomComplet'] = removeSessionNomComplet;

	patchSessionScolaireVals(filtres, vals, success, error);
}

function patchSessionScolaireFiltres($formulaireFiltres) {
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

	var filtreSessionJourDebut = $formulaireFiltres.find('.valeurSessionJourDebut').val();
	if(filtreSessionJourDebut != null && filtreSessionJourDebut !== '')
		filtres.push({ name: 'fq', value: 'sessionJourDebut:' + filtreSessionJourDebut });

	var filtreSessionJourFin = $formulaireFiltres.find('.valeurSessionJourFin').val();
	if(filtreSessionJourFin != null && filtreSessionJourFin !== '')
		filtres.push({ name: 'fq', value: 'sessionJourFin:' + filtreSessionJourFin });

	var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
	if(filtreSaisonCle != null && filtreSaisonCle !== '')
		filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

	var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
	if(filtreAgeCles != null && filtreAgeCles !== '')
		filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

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

	var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
	if(filtreSessionCle != null && filtreSessionCle !== '')
		filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

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

	var filtreSessionTri = $formulaireFiltres.find('.valeurSessionTri').val();
	if(filtreSessionTri != null && filtreSessionTri !== '')
		filtres.push({ name: 'fq', value: 'sessionTri:' + filtreSessionTri });

	var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
	if(filtreEcoleCle != null && filtreEcoleCle !== '')
		filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

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

	var filtreSaisonJourDebut = $formulaireFiltres.find('.valeurSaisonJourDebut').val();
	if(filtreSaisonJourDebut != null && filtreSaisonJourDebut !== '')
		filtres.push({ name: 'fq', value: 'saisonJourDebut:' + filtreSaisonJourDebut });

	var filtreSaisonEte = $formulaireFiltres.find('.valeurSaisonEte').prop('checked');
	if(filtreSaisonEte != null && filtreSaisonEte === true)
		filtres.push({ name: 'fq', value: 'saisonEte:' + filtreSaisonEte });

	var filtreSaisonHiver = $formulaireFiltres.find('.valeurSaisonHiver').prop('checked');
	if(filtreSaisonHiver != null && filtreSaisonHiver === true)
		filtres.push({ name: 'fq', value: 'saisonHiver:' + filtreSaisonHiver });

	var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
	if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
		filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

	var filtreSaisonNomCourt = $formulaireFiltres.find('.valeurSaisonNomCourt').val();
	if(filtreSaisonNomCourt != null && filtreSaisonNomCourt !== '')
		filtres.push({ name: 'fq', value: 'saisonNomCourt:' + filtreSaisonNomCourt });

	var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
	if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
		filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });

	var filtreSessionNomCourt = $formulaireFiltres.find('.valeurSessionNomCourt').val();
	if(filtreSessionNomCourt != null && filtreSessionNomCourt !== '')
		filtres.push({ name: 'fq', value: 'sessionNomCourt:' + filtreSessionNomCourt });

	var filtreSessionNomComplet = $formulaireFiltres.find('.valeurSessionNomComplet').val();
	if(filtreSessionNomComplet != null && filtreSessionNomComplet !== '')
		filtres.push({ name: 'fq', value: 'sessionNomComplet:' + filtreSessionNomComplet });
	return filtres;
}

function patchSessionScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSessionScolaireVals(filtres, vals, success, error);
}

function patchSessionScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/session?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSessionScolaire(pk) {
	$.ajax({
		url: '/api/session/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

async function deleteSessionScolaire(pk) {
	$.ajax({
		url: '/api/session/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheSessionScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheSessionScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheSessionScolaireVals(filtres, success, error);
}

function rechercheSessionScolaireFiltres($formulaireFiltres) {
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

	var filtreSessionJourDebut = $formulaireFiltres.find('.valeurSessionJourDebut').val();
	if(filtreSessionJourDebut != null && filtreSessionJourDebut !== '')
		filtres.push({ name: 'fq', value: 'sessionJourDebut:' + filtreSessionJourDebut });

	var filtreSessionJourFin = $formulaireFiltres.find('.valeurSessionJourFin').val();
	if(filtreSessionJourFin != null && filtreSessionJourFin !== '')
		filtres.push({ name: 'fq', value: 'sessionJourFin:' + filtreSessionJourFin });

	var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
	if(filtreSaisonCle != null && filtreSaisonCle !== '')
		filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

	var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
	if(filtreAgeCles != null && filtreAgeCles !== '')
		filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

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

	var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
	if(filtreSessionCle != null && filtreSessionCle !== '')
		filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

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

	var filtreSessionTri = $formulaireFiltres.find('.valeurSessionTri').val();
	if(filtreSessionTri != null && filtreSessionTri !== '')
		filtres.push({ name: 'fq', value: 'sessionTri:' + filtreSessionTri });

	var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
	if(filtreEcoleCle != null && filtreEcoleCle !== '')
		filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

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

	var filtreSaisonJourDebut = $formulaireFiltres.find('.valeurSaisonJourDebut').val();
	if(filtreSaisonJourDebut != null && filtreSaisonJourDebut !== '')
		filtres.push({ name: 'fq', value: 'saisonJourDebut:' + filtreSaisonJourDebut });

	var filtreSaisonEte = $formulaireFiltres.find('.valeurSaisonEte').prop('checked');
	if(filtreSaisonEte != null && filtreSaisonEte === true)
		filtres.push({ name: 'fq', value: 'saisonEte:' + filtreSaisonEte });

	var filtreSaisonHiver = $formulaireFiltres.find('.valeurSaisonHiver').prop('checked');
	if(filtreSaisonHiver != null && filtreSaisonHiver === true)
		filtres.push({ name: 'fq', value: 'saisonHiver:' + filtreSaisonHiver });

	var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
	if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
		filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

	var filtreSaisonNomCourt = $formulaireFiltres.find('.valeurSaisonNomCourt').val();
	if(filtreSaisonNomCourt != null && filtreSaisonNomCourt !== '')
		filtres.push({ name: 'fq', value: 'saisonNomCourt:' + filtreSaisonNomCourt });

	var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
	if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
		filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });

	var filtreSessionNomCourt = $formulaireFiltres.find('.valeurSessionNomCourt').val();
	if(filtreSessionNomCourt != null && filtreSessionNomCourt !== '')
		filtres.push({ name: 'fq', value: 'sessionNomCourt:' + filtreSessionNomCourt });

	var filtreSessionNomComplet = $formulaireFiltres.find('.valeurSessionNomComplet').val();
	if(filtreSessionNomComplet != null && filtreSessionNomComplet !== '')
		filtres.push({ name: 'fq', value: 'sessionNomComplet:' + filtreSessionNomComplet });
	return filtres;
}

function rechercheSessionScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/session?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereSessionScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-graduation-cap w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['sessionNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherSessionScolaireVals($formulaireFiltres, success, error);
}

function suggereSessionScolaireAgeCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-birthday-cake w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['ageNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['sessionCle'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_ageCles_' + pk + '_sessionCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurAgeCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_ageCles_" + pk + "_sessionCle_" + o['pk'] + "'); patchSessionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'AgeCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SessionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheAgeScolaireVals(filtres, success, error);
}

function suggereSessionScolaireSaisonCle(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['saisonNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['sessionCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_saisonCle_' + pk + '_sessionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurSaisonCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_saisonCle_" + pk + "_sessionCles_" + o['pk'] + "'); patchSessionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SaisonCle']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SessionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheSaisonScolaireVals(filtres, success, error);
}

async function websocketSessionScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSessionScolaire', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-green ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'fad fa-graduation-cap w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modifier sessions');
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
		});

		window.eventBus.registerHandler('websocketAgeScolaire', function (error, message) {
			$('#Page_ageCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSaisonScolaire', function (error, message) {
			$('#Page_saisonCle').trigger('oninput');
		});
	}
}
async function websocketSessionScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherSessionScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('cree')) {
				$('.inputSessionScolaire' + pk + 'Cree').val(o['cree']);
				$('.varSessionScolaire' + pk + 'Cree').text(o['cree']);
			}
			if(vars.includes('modifie')) {
				$('.inputSessionScolaire' + pk + 'Modifie').val(o['modifie']);
				$('.varSessionScolaire' + pk + 'Modifie').text(o['modifie']);
			}
			if(vars.includes('archive')) {
				$('.inputSessionScolaire' + pk + 'Archive').val(o['archive']);
				$('.varSessionScolaire' + pk + 'Archive').text(o['archive']);
			}
			if(vars.includes('supprime')) {
				$('.inputSessionScolaire' + pk + 'Supprime').val(o['supprime']);
				$('.varSessionScolaire' + pk + 'Supprime').text(o['supprime']);
			}
			if(vars.includes('sessionJourDebut')) {
				$('.inputSessionScolaire' + pk + 'SessionJourDebut').val(o['sessionJourDebut']);
				$('.varSessionScolaire' + pk + 'SessionJourDebut').text(o['sessionJourDebut']);
			}
			if(vars.includes('sessionJourFin')) {
				$('.inputSessionScolaire' + pk + 'SessionJourFin').val(o['sessionJourFin']);
				$('.varSessionScolaire' + pk + 'SessionJourFin').text(o['sessionJourFin']);
			}
			if(vars.includes('saisonCle')) {
				$('.inputSessionScolaire' + pk + 'SaisonCle').val(o['saisonCle']);
				$('.varSessionScolaire' + pk + 'SaisonCle').text(o['saisonCle']);
			}
			if(vars.includes('ageCles')) {
				$('.inputSessionScolaire' + pk + 'AgeCles').val(o['ageCles']);
				$('.varSessionScolaire' + pk + 'AgeCles').text(o['ageCles']);
			}
			if(vars.includes('ecoleAddresse')) {
				$('.inputSessionScolaire' + pk + 'EcoleAddresse').val(o['ecoleAddresse']);
				$('.varSessionScolaire' + pk + 'EcoleAddresse').text(o['ecoleAddresse']);
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
			await patchSessionScolaireVals( [ {name: 'fq', value: 'pk:' + pk} ], {});
	}
}


// POST //

function postSaisonScolaire($formulaireValeurs, success, error) {
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

	var valeurSaisonId = $formulaireValeurs.find('.valeurSaisonId').val();
	if(valeurSaisonId != null && valeurSaisonId !== '')
		vals['saisonId'] = valeurSaisonId;

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

	var valeurSaisonFraisInscription = $formulaireValeurs.find('.valeurSaisonFraisInscription').val();
	if(valeurSaisonFraisInscription != null && valeurSaisonFraisInscription !== '')
		vals['saisonFraisInscription'] = valeurSaisonFraisInscription;

	var valeurSessionCles = $formulaireValeurs.find('.valeurSessionCles').val();
	if(valeurSessionCles != null && valeurSessionCles !== '')
		vals['sessionCles'] = valeurSessionCles;

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

function patchSaisonScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
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

	var removeSaisonId = $formulaireFiltres.find('.removeSaisonId').val() === 'true';
	var setSaisonId = removeSaisonId ? null : $formulaireValeurs.find('.setSaisonId').val();
	if(removeSaisonId || setSaisonId != null && setSaisonId !== '')
		vals['setSaisonId'] = setSaisonId;
	var addSaisonId = $formulaireValeurs.find('.addSaisonId').val();
	if(addSaisonId != null && addSaisonId !== '')
		vals['addSaisonId'] = addSaisonId;
	var removeSaisonId = $formulaireValeurs.find('.removeSaisonId').val();
	if(removeSaisonId != null && removeSaisonId !== '')
		vals['removeSaisonId'] = removeSaisonId;

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

	var removeSaisonFraisInscription = $formulaireFiltres.find('.removeSaisonFraisInscription').val() === 'true';
	var setSaisonFraisInscription = removeSaisonFraisInscription ? null : $formulaireValeurs.find('.setSaisonFraisInscription').val();
	if(removeSaisonFraisInscription || setSaisonFraisInscription != null && setSaisonFraisInscription !== '')
		vals['setSaisonFraisInscription'] = setSaisonFraisInscription;
	var addSaisonFraisInscription = $formulaireValeurs.find('.addSaisonFraisInscription').val();
	if(addSaisonFraisInscription != null && addSaisonFraisInscription !== '')
		vals['addSaisonFraisInscription'] = addSaisonFraisInscription;
	var removeSaisonFraisInscription = $formulaireValeurs.find('.removeSaisonFraisInscription').val();
	if(removeSaisonFraisInscription != null && removeSaisonFraisInscription !== '')
		vals['removeSaisonFraisInscription'] = removeSaisonFraisInscription;

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

	var filtreSaisonId = $formulaireFiltres.find('.valeurSaisonId').val();
	if(filtreSaisonId != null && filtreSaisonId !== '')
		filtres.push({ name: 'fq', value: 'saisonId:' + filtreSaisonId });

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

	var filtreSaisonFraisInscription = $formulaireFiltres.find('.valeurSaisonFraisInscription').val();
	if(filtreSaisonFraisInscription != null && filtreSaisonFraisInscription !== '')
		filtres.push({ name: 'fq', value: 'saisonFraisInscription:' + filtreSaisonFraisInscription });

	var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
	if(filtreSessionCles != null && filtreSessionCles !== '')
		filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

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

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

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

	var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
	if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
		filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });
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

function getSaisonScolaire(pk) {
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

function deleteSaisonScolaire(pk) {
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

function rechercheSaisonScolaire($formulaireFiltres, success, error) {
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

	var filtreSaisonId = $formulaireFiltres.find('.valeurSaisonId').val();
	if(filtreSaisonId != null && filtreSaisonId !== '')
		filtres.push({ name: 'fq', value: 'saisonId:' + filtreSaisonId });

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

	var filtreSaisonFraisInscription = $formulaireFiltres.find('.valeurSaisonFraisInscription').val();
	if(filtreSaisonFraisInscription != null && filtreSaisonFraisInscription !== '')
		filtres.push({ name: 'fq', value: 'saisonFraisInscription:' + filtreSaisonFraisInscription });

	var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
	if(filtreSessionCles != null && filtreSessionCles !== '')
		filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

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

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

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

	var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
	if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
		filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });
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

function suggereSaisonScolaireSessionCles($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-graduation-cap w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['sessionNomComplet']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SaisonScolaireForm :input[name="pk"]').val());
			var val = o['saisonCle'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_sessionCles_' + pk + '_saisonCle_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_sessionCles_" + pk + "_saisonCle_" + o['pk'] + "'); patchSaisonScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SessionCles']: \"" + o['pk'] + "\" }, function() { patchSessionScolaireVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { ajouterLueur($input); }, function() { ajouterErreur($input); } ); } ); ");
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
	rechercheSessionScolaire($formulaireFiltres, success, error);
}

function suggereSaisonScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['saisonNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherSaisonScolaireVals($formulaireFiltres, success, error);
}

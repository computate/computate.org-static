
// POST //

function postAgeScolaire($formulaireValeurs, success, error) {
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

	var valeurAgeId = $formulaireValeurs.find('.valeurAgeId').val();
	if(valeurAgeId != null && valeurAgeId !== '')
		vals['ageId'] = valeurAgeId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurAgeDebut = $formulaireValeurs.find('.valeurAgeDebut').val();
	if(valeurAgeDebut != null && valeurAgeDebut !== '')
		vals['ageDebut'] = valeurAgeDebut;

	var valeurAgeFin = $formulaireValeurs.find('.valeurAgeFin').val();
	if(valeurAgeFin != null && valeurAgeFin !== '')
		vals['ageFin'] = valeurAgeFin;

	var valeurBlocCles = $formulaireValeurs.find('.valeurBlocCles').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['blocCles'] = valeurBlocCles;

	var valeurAgeNomComplet = $formulaireValeurs.find('.valeurAgeNomComplet').val();
	if(valeurAgeNomComplet != null && valeurAgeNomComplet !== '')
		vals['ageNomComplet'] = valeurAgeNomComplet;

	$.ajax({
		url: '/api/age'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postAgeScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/age'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchAgeScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchAgeScolaireFiltres($formulaireFiltres);

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

	var removeAgeId = $formulaireFiltres.find('.removeAgeId').val() === 'true';
	var setAgeId = removeAgeId ? null : $formulaireValeurs.find('.setAgeId').val();
	if(removeAgeId || setAgeId != null && setAgeId !== '')
		vals['setAgeId'] = setAgeId;
	var addAgeId = $formulaireValeurs.find('.addAgeId').val();
	if(addAgeId != null && addAgeId !== '')
		vals['addAgeId'] = addAgeId;
	var removeAgeId = $formulaireValeurs.find('.removeAgeId').val();
	if(removeAgeId != null && removeAgeId !== '')
		vals['removeAgeId'] = removeAgeId;

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

	var removeAgeDebut = $formulaireFiltres.find('.removeAgeDebut').val() === 'true';
	var setAgeDebut = removeAgeDebut ? null : $formulaireValeurs.find('.setAgeDebut').val();
	if(removeAgeDebut || setAgeDebut != null && setAgeDebut !== '')
		vals['setAgeDebut'] = setAgeDebut;
	var addAgeDebut = $formulaireValeurs.find('.addAgeDebut').val();
	if(addAgeDebut != null && addAgeDebut !== '')
		vals['addAgeDebut'] = addAgeDebut;
	var removeAgeDebut = $formulaireValeurs.find('.removeAgeDebut').val();
	if(removeAgeDebut != null && removeAgeDebut !== '')
		vals['removeAgeDebut'] = removeAgeDebut;

	var removeAgeFin = $formulaireFiltres.find('.removeAgeFin').val() === 'true';
	var setAgeFin = removeAgeFin ? null : $formulaireValeurs.find('.setAgeFin').val();
	if(removeAgeFin || setAgeFin != null && setAgeFin !== '')
		vals['setAgeFin'] = setAgeFin;
	var addAgeFin = $formulaireValeurs.find('.addAgeFin').val();
	if(addAgeFin != null && addAgeFin !== '')
		vals['addAgeFin'] = addAgeFin;
	var removeAgeFin = $formulaireValeurs.find('.removeAgeFin').val();
	if(removeAgeFin != null && removeAgeFin !== '')
		vals['removeAgeFin'] = removeAgeFin;

	var removeBlocCles = $formulaireFiltres.find('.removeBlocCles').val() === 'true';
	var setBlocCles = removeBlocCles ? null : $formulaireValeurs.find('.setBlocCles').val();
	if(removeBlocCles || setBlocCles != null && setBlocCles !== '')
		vals['setBlocCles'] = setBlocCles;
	var addBlocCles = $formulaireValeurs.find('.addBlocCles').val();
	if(addBlocCles != null && addBlocCles !== '')
		vals['addBlocCles'] = addBlocCles;
	var removeBlocCles = $formulaireValeurs.find('.removeBlocCles').val();
	if(removeBlocCles != null && removeBlocCles !== '')
		vals['removeBlocCles'] = removeBlocCles;

	var removeAgeNomComplet = $formulaireFiltres.find('.removeAgeNomComplet').val() === 'true';
	var setAgeNomComplet = removeAgeNomComplet ? null : $formulaireValeurs.find('.setAgeNomComplet').val();
	if(removeAgeNomComplet || setAgeNomComplet != null && setAgeNomComplet !== '')
		vals['setAgeNomComplet'] = setAgeNomComplet;
	var addAgeNomComplet = $formulaireValeurs.find('.addAgeNomComplet').val();
	if(addAgeNomComplet != null && addAgeNomComplet !== '')
		vals['addAgeNomComplet'] = addAgeNomComplet;
	var removeAgeNomComplet = $formulaireValeurs.find('.removeAgeNomComplet').val();
	if(removeAgeNomComplet != null && removeAgeNomComplet !== '')
		vals['removeAgeNomComplet'] = removeAgeNomComplet;

	patchAgeScolaireVals(filtres, vals, success, error);
}

function patchAgeScolaireFiltres($formulaireFiltres) {
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

	var filtreAgeId = $formulaireFiltres.find('.valeurAgeId').val();
	if(filtreAgeId != null && filtreAgeId !== '')
		filtres.push({ name: 'fq', value: 'ageId:' + filtreAgeId });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
	if(filtreAgeDebut != null && filtreAgeDebut !== '')
		filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

	var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
	if(filtreAgeFin != null && filtreAgeFin !== '')
		filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

	var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
	if(filtreBlocCles != null && filtreBlocCles !== '')
		filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

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

	var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
	if(filtreAgeCle != null && filtreAgeCle !== '')
		filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

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

	var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
	if(filtreSaisonCle != null && filtreSaisonCle !== '')
		filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

	var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
	if(filtreSessionCle != null && filtreSessionCle !== '')
		filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

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

	var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
	if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
		filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });

	var filtreSessionJourDebut = $formulaireFiltres.find('.valeurSessionJourDebut').val();
	if(filtreSessionJourDebut != null && filtreSessionJourDebut !== '')
		filtres.push({ name: 'fq', value: 'sessionJourDebut:' + filtreSessionJourDebut });

	var filtreSessionJourFin = $formulaireFiltres.find('.valeurSessionJourFin').val();
	if(filtreSessionJourFin != null && filtreSessionJourFin !== '')
		filtres.push({ name: 'fq', value: 'sessionJourFin:' + filtreSessionJourFin });

	var filtreSessionNomComplet = $formulaireFiltres.find('.valeurSessionNomComplet').val();
	if(filtreSessionNomComplet != null && filtreSessionNomComplet !== '')
		filtres.push({ name: 'fq', value: 'sessionNomComplet:' + filtreSessionNomComplet });

	var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
	if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
		filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });
	return filtres;
}

function patchAgeScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchAgeScolaireVals(filtres, vals, success, error);
}

function patchAgeScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/age?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getAgeScolaire(pk) {
	$.ajax({
		url: '/api/age/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteAgeScolaire(pk) {
	$.ajax({
		url: '/api/age/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

function rechercheAgeScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheAgeScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheAgeScolaireVals(filtres, success, error);
}

function rechercheAgeScolaireFiltres($formulaireFiltres) {
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

	var filtreAgeId = $formulaireFiltres.find('.valeurAgeId').val();
	if(filtreAgeId != null && filtreAgeId !== '')
		filtres.push({ name: 'fq', value: 'ageId:' + filtreAgeId });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
	if(filtreAgeDebut != null && filtreAgeDebut !== '')
		filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

	var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
	if(filtreAgeFin != null && filtreAgeFin !== '')
		filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

	var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
	if(filtreBlocCles != null && filtreBlocCles !== '')
		filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

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

	var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
	if(filtreAgeCle != null && filtreAgeCle !== '')
		filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

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

	var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
	if(filtreSaisonCle != null && filtreSaisonCle !== '')
		filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

	var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
	if(filtreSessionCle != null && filtreSessionCle !== '')
		filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

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

	var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
	if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
		filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });

	var filtreSessionJourDebut = $formulaireFiltres.find('.valeurSessionJourDebut').val();
	if(filtreSessionJourDebut != null && filtreSessionJourDebut !== '')
		filtres.push({ name: 'fq', value: 'sessionJourDebut:' + filtreSessionJourDebut });

	var filtreSessionJourFin = $formulaireFiltres.find('.valeurSessionJourFin').val();
	if(filtreSessionJourFin != null && filtreSessionJourFin !== '')
		filtres.push({ name: 'fq', value: 'sessionJourFin:' + filtreSessionJourFin });

	var filtreSessionNomComplet = $formulaireFiltres.find('.valeurSessionNomComplet').val();
	if(filtreSessionNomComplet != null && filtreSessionNomComplet !== '')
		filtres.push({ name: 'fq', value: 'sessionNomComplet:' + filtreSessionNomComplet });

	var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
	if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
		filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });
	return filtres;
}

function rechercheAgeScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/age?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereAgeScolaireBlocCles($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['blocNomComplet']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#AgeScolaireForm :input[name="pk"]').val());
			var val = o['ageCle'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blocCles_' + pk + '_ageCle_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_blocCles_" + pk + "_ageCle_" + o['pk'] + "'); patchAgeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlocCles']: \"" + o['pk'] + "\" }, function() { patchBlocScolaireVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { ajouterLueur($input); }, function() { ajouterErreur($input); } ); } ); ");
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
	rechercheBlocScolaire($formulaireFiltres, success, error);
}

function suggereAgeScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-birthday-cake w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['ageNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherAgeScolaireVals($formulaireFiltres, success, error);
}

// POST //

function postAnneeScolaire($formulaireValeurs, success, error) {
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

	var valeurAnneeId = $formulaireValeurs.find('.valeurAnneeId').val();
	if(valeurAnneeId != null && valeurAnneeId !== '')
		vals['anneeId'] = valeurAnneeId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurAnneeDebut = $formulaireValeurs.find('.valeurAnneeDebut').val();
	if(valeurAnneeDebut != null && valeurAnneeDebut !== '')
		vals['anneeDebut'] = valeurAnneeDebut;

	var valeurAnneeFin = $formulaireValeurs.find('.valeurAnneeFin').val();
	if(valeurAnneeFin != null && valeurAnneeFin !== '')
		vals['anneeFin'] = valeurAnneeFin;

	var valeurEcoleCle = $formulaireValeurs.find('.valeurEcoleCle').val();
	if(valeurEcoleCle != null && valeurEcoleCle !== '')
		vals['ecoleCle'] = valeurEcoleCle;

	var valeurSaisonCles = $formulaireValeurs.find('.valeurSaisonCles').val();
	if(valeurSaisonCles != null && valeurSaisonCles !== '')
		vals['saisonCles'] = valeurSaisonCles;

	var valeurAnneeNomComplet = $formulaireValeurs.find('.valeurAnneeNomComplet').val();
	if(valeurAnneeNomComplet != null && valeurAnneeNomComplet !== '')
		vals['anneeNomComplet'] = valeurAnneeNomComplet;

	$.ajax({
		url: '/api/annee'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postAnneeScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/annee'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchAnneeScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchAnneeScolaireFiltres($formulaireFiltres);

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

	var removeAnneeId = $formulaireFiltres.find('.removeAnneeId').val() === 'true';
	var setAnneeId = removeAnneeId ? null : $formulaireValeurs.find('.setAnneeId').val();
	if(removeAnneeId || setAnneeId != null && setAnneeId !== '')
		vals['setAnneeId'] = setAnneeId;
	var addAnneeId = $formulaireValeurs.find('.addAnneeId').val();
	if(addAnneeId != null && addAnneeId !== '')
		vals['addAnneeId'] = addAnneeId;
	var removeAnneeId = $formulaireValeurs.find('.removeAnneeId').val();
	if(removeAnneeId != null && removeAnneeId !== '')
		vals['removeAnneeId'] = removeAnneeId;

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

	var removeAnneeDebut = $formulaireFiltres.find('.removeAnneeDebut').val() === 'true';
	var setAnneeDebut = removeAnneeDebut ? null : $formulaireValeurs.find('.setAnneeDebut').val();
	if(removeAnneeDebut || setAnneeDebut != null && setAnneeDebut !== '')
		vals['setAnneeDebut'] = setAnneeDebut;
	var addAnneeDebut = $formulaireValeurs.find('.addAnneeDebut').val();
	if(addAnneeDebut != null && addAnneeDebut !== '')
		vals['addAnneeDebut'] = addAnneeDebut;
	var removeAnneeDebut = $formulaireValeurs.find('.removeAnneeDebut').val();
	if(removeAnneeDebut != null && removeAnneeDebut !== '')
		vals['removeAnneeDebut'] = removeAnneeDebut;

	var removeAnneeFin = $formulaireFiltres.find('.removeAnneeFin').val() === 'true';
	var setAnneeFin = removeAnneeFin ? null : $formulaireValeurs.find('.setAnneeFin').val();
	if(removeAnneeFin || setAnneeFin != null && setAnneeFin !== '')
		vals['setAnneeFin'] = setAnneeFin;
	var addAnneeFin = $formulaireValeurs.find('.addAnneeFin').val();
	if(addAnneeFin != null && addAnneeFin !== '')
		vals['addAnneeFin'] = addAnneeFin;
	var removeAnneeFin = $formulaireValeurs.find('.removeAnneeFin').val();
	if(removeAnneeFin != null && removeAnneeFin !== '')
		vals['removeAnneeFin'] = removeAnneeFin;

	var removeEcoleCle = $formulaireFiltres.find('.removeEcoleCle').val() === 'true';
	var setEcoleCle = removeEcoleCle ? null : $formulaireValeurs.find('.setEcoleCle').val();
	if(removeEcoleCle || setEcoleCle != null && setEcoleCle !== '')
		vals['setEcoleCle'] = setEcoleCle;
	var addEcoleCle = $formulaireValeurs.find('.addEcoleCle').val();
	if(addEcoleCle != null && addEcoleCle !== '')
		vals['addEcoleCle'] = addEcoleCle;
	var removeEcoleCle = $formulaireValeurs.find('.removeEcoleCle').val();
	if(removeEcoleCle != null && removeEcoleCle !== '')
		vals['removeEcoleCle'] = removeEcoleCle;

	var removeSaisonCles = $formulaireFiltres.find('.removeSaisonCles').val() === 'true';
	var setSaisonCles = removeSaisonCles ? null : $formulaireValeurs.find('.setSaisonCles').val();
	if(removeSaisonCles || setSaisonCles != null && setSaisonCles !== '')
		vals['setSaisonCles'] = setSaisonCles;
	var addSaisonCles = $formulaireValeurs.find('.addSaisonCles').val();
	if(addSaisonCles != null && addSaisonCles !== '')
		vals['addSaisonCles'] = addSaisonCles;
	var removeSaisonCles = $formulaireValeurs.find('.removeSaisonCles').val();
	if(removeSaisonCles != null && removeSaisonCles !== '')
		vals['removeSaisonCles'] = removeSaisonCles;

	var removeAnneeNomComplet = $formulaireFiltres.find('.removeAnneeNomComplet').val() === 'true';
	var setAnneeNomComplet = removeAnneeNomComplet ? null : $formulaireValeurs.find('.setAnneeNomComplet').val();
	if(removeAnneeNomComplet || setAnneeNomComplet != null && setAnneeNomComplet !== '')
		vals['setAnneeNomComplet'] = setAnneeNomComplet;
	var addAnneeNomComplet = $formulaireValeurs.find('.addAnneeNomComplet').val();
	if(addAnneeNomComplet != null && addAnneeNomComplet !== '')
		vals['addAnneeNomComplet'] = addAnneeNomComplet;
	var removeAnneeNomComplet = $formulaireValeurs.find('.removeAnneeNomComplet').val();
	if(removeAnneeNomComplet != null && removeAnneeNomComplet !== '')
		vals['removeAnneeNomComplet'] = removeAnneeNomComplet;

	patchAnneeScolaireVals(filtres, vals, success, error);
}

function patchAnneeScolaireFiltres($formulaireFiltres) {
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

	var filtreAnneeId = $formulaireFiltres.find('.valeurAnneeId').val();
	if(filtreAnneeId != null && filtreAnneeId !== '')
		filtres.push({ name: 'fq', value: 'anneeId:' + filtreAnneeId });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
	if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
		filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

	var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
	if(filtreAnneeFin != null && filtreAnneeFin !== '')
		filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

	var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
	if(filtreEcoleCle != null && filtreEcoleCle !== '')
		filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

	var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
	if(filtreSaisonCles != null && filtreSaisonCles !== '')
		filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

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

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

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

	var filtreEcoleNomComplet = $formulaireFiltres.find('.valeurEcoleNomComplet').val();
	if(filtreEcoleNomComplet != null && filtreEcoleNomComplet !== '')
		filtres.push({ name: 'fq', value: 'ecoleNomComplet:' + filtreEcoleNomComplet });

	var filtreEcoleEmplacement = $formulaireFiltres.find('.valeurEcoleEmplacement').val();
	if(filtreEcoleEmplacement != null && filtreEcoleEmplacement !== '')
		filtres.push({ name: 'fq', value: 'ecoleEmplacement:' + filtreEcoleEmplacement });

	var filtreAnneeNomCourt = $formulaireFiltres.find('.valeurAnneeNomCourt').val();
	if(filtreAnneeNomCourt != null && filtreAnneeNomCourt !== '')
		filtres.push({ name: 'fq', value: 'anneeNomCourt:' + filtreAnneeNomCourt });

	var filtreAnneeNomComplet = $formulaireFiltres.find('.valeurAnneeNomComplet').val();
	if(filtreAnneeNomComplet != null && filtreAnneeNomComplet !== '')
		filtres.push({ name: 'fq', value: 'anneeNomComplet:' + filtreAnneeNomComplet });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });
	return filtres;
}

function patchAnneeScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchAnneeScolaireVals(filtres, vals, success, error);
}

function patchAnneeScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/annee?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getAnneeScolaire(pk) {
	$.ajax({
		url: '/api/annee/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteAnneeScolaire(pk) {
	$.ajax({
		url: '/api/annee/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

function rechercheAnneeScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheAnneeScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheAnneeScolaireVals(filtres, success, error);
}

function rechercheAnneeScolaireFiltres($formulaireFiltres) {
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

	var filtreAnneeId = $formulaireFiltres.find('.valeurAnneeId').val();
	if(filtreAnneeId != null && filtreAnneeId !== '')
		filtres.push({ name: 'fq', value: 'anneeId:' + filtreAnneeId });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
	if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
		filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

	var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
	if(filtreAnneeFin != null && filtreAnneeFin !== '')
		filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

	var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
	if(filtreEcoleCle != null && filtreEcoleCle !== '')
		filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

	var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
	if(filtreSaisonCles != null && filtreSaisonCles !== '')
		filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

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

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

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

	var filtreEcoleNomComplet = $formulaireFiltres.find('.valeurEcoleNomComplet').val();
	if(filtreEcoleNomComplet != null && filtreEcoleNomComplet !== '')
		filtres.push({ name: 'fq', value: 'ecoleNomComplet:' + filtreEcoleNomComplet });

	var filtreEcoleEmplacement = $formulaireFiltres.find('.valeurEcoleEmplacement').val();
	if(filtreEcoleEmplacement != null && filtreEcoleEmplacement !== '')
		filtres.push({ name: 'fq', value: 'ecoleEmplacement:' + filtreEcoleEmplacement });

	var filtreAnneeNomCourt = $formulaireFiltres.find('.valeurAnneeNomCourt').val();
	if(filtreAnneeNomCourt != null && filtreAnneeNomCourt !== '')
		filtres.push({ name: 'fq', value: 'anneeNomCourt:' + filtreAnneeNomCourt });

	var filtreAnneeNomComplet = $formulaireFiltres.find('.valeurAnneeNomComplet').val();
	if(filtreAnneeNomComplet != null && filtreAnneeNomComplet !== '')
		filtres.push({ name: 'fq', value: 'anneeNomComplet:' + filtreAnneeNomComplet });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });
	return filtres;
}

function rechercheAnneeScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/annee?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereAnneeScolaireEcoleCle($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-school w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['ecoleNomComplet']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#AnneeScolaireForm :input[name="pk"]').val());
			var val = o['anneeCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_ecoleCle_' + pk + '_anneeCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_ecoleCle_" + pk + "_anneeCles_" + o['pk'] + "'); patchAnneeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'EcoleCle']: \"" + o['pk'] + "\" }, function() { patchEcoleVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { ajouterLueur($input); }, function() { ajouterErreur($input); } ); } ); ");
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
	rechercheEcole($formulaireFiltres, success, error);
}

function suggereAnneeScolaireSaisonCles($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['saisonNomComplet']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#AnneeScolaireForm :input[name="pk"]').val());
			var val = o['anneeCle'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_saisonCles_' + pk + '_anneeCle_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_saisonCles_" + pk + "_anneeCle_" + o['pk'] + "'); patchAnneeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SaisonCles']: \"" + o['pk'] + "\" }, function() { patchSaisonScolaireVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { ajouterLueur($input); }, function() { ajouterErreur($input); } ); } ); ");
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
	rechercheSaisonScolaire($formulaireFiltres, success, error);
}

function suggereAnneeScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-calendar-check w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['anneeNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherAnneeScolaireVals($formulaireFiltres, success, error);
}

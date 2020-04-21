
// POST //

async function postAnneeScolaire($formulaireValeurs, success, error) {
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

	var valeurAnneeDebut = $formulaireValeurs.find('.valeurAnneeDebut').val();
	if(valeurAnneeDebut != null && valeurAnneeDebut !== '')
		vals['anneeDebut'] = valeurAnneeDebut;

	var valeurAnneeFin = $formulaireValeurs.find('.valeurAnneeFin').val();
	if(valeurAnneeFin != null && valeurAnneeFin !== '')
		vals['anneeFin'] = valeurAnneeFin;

	var valeurAnneeFraisInscription = $formulaireValeurs.find('.valeurAnneeFraisInscription').val();
	if(valeurAnneeFraisInscription != null && valeurAnneeFraisInscription !== '')
		vals['anneeFraisInscription'] = valeurAnneeFraisInscription;

	var valeurEcoleCle = $formulaireValeurs.find('input.valeurEcoleCle:checked').val();
	if(valeurEcoleCle != null && valeurEcoleCle !== '')
		vals['ecoleCle'] = valeurEcoleCle;

	var valeurSaisonCles = $formulaireValeurs.find('input.valeurSaisonCles:checked').val();
	if(valeurSaisonCles != null && valeurSaisonCles !== '')
		vals['saisonCles'] = valeurSaisonCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

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

// PUTImport //

async function putimportAnneeScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportAnneeScolaireVals(JSON.parse(json), success, error);
}

function putimportAnneeScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/annee/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionAnneeScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionAnneeScolaireVals(JSON.parse(json), success, error);
}

function putfusionAnneeScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/annee/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieAnneeScolaire($formulaireValeurs, pk, success, error) {
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

	var valeurAnneeDebut = $formulaireValeurs.find('.valeurAnneeDebut').val();
	if(valeurAnneeDebut != null && valeurAnneeDebut !== '')
		vals['anneeDebut'] = valeurAnneeDebut;

	var valeurAnneeFin = $formulaireValeurs.find('.valeurAnneeFin').val();
	if(valeurAnneeFin != null && valeurAnneeFin !== '')
		vals['anneeFin'] = valeurAnneeFin;

	var valeurAnneeFraisInscription = $formulaireValeurs.find('.valeurAnneeFraisInscription').val();
	if(valeurAnneeFraisInscription != null && valeurAnneeFraisInscription !== '')
		vals['anneeFraisInscription'] = valeurAnneeFraisInscription;

	var valeurEcoleCle = $formulaireValeurs.find('input.valeurEcoleCle:checked').val();
	if(valeurEcoleCle != null && valeurEcoleCle !== '')
		vals['ecoleCle'] = valeurEcoleCle;

	var valeurSaisonCles = $formulaireValeurs.find('input.valeurSaisonCles:checked').val();
	if(valeurSaisonCles != null && valeurSaisonCles !== '')
		vals['saisonCles'] = [valeurSaisonCles];

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	putcopieAnneeScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieAnneeScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/annee/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchAnneeScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchAnneeScolaireFiltres($formulaireFiltres);

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

	var valeurAnneeDebut = $formulaireValeurs.find('.valeurAnneeDebut').val();
	if(valeurAnneeDebut != null && valeurAnneeDebut !== '')
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

	var valeurAnneeFin = $formulaireValeurs.find('.valeurAnneeFin').val();
	if(valeurAnneeFin != null && valeurAnneeFin !== '')
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

	var valeurAnneeFraisInscription = $formulaireValeurs.find('.valeurAnneeFraisInscription').val();
	if(valeurAnneeFraisInscription != null && valeurAnneeFraisInscription !== '')
	var removeAnneeFraisInscription = $formulaireFiltres.find('.removeAnneeFraisInscription').val() === 'true';
	var setAnneeFraisInscription = removeAnneeFraisInscription ? null : $formulaireValeurs.find('.setAnneeFraisInscription').val();
	if(removeAnneeFraisInscription || setAnneeFraisInscription != null && setAnneeFraisInscription !== '')
		vals['setAnneeFraisInscription'] = setAnneeFraisInscription;
	var addAnneeFraisInscription = $formulaireValeurs.find('.addAnneeFraisInscription').val();
	if(addAnneeFraisInscription != null && addAnneeFraisInscription !== '')
		vals['addAnneeFraisInscription'] = addAnneeFraisInscription;
	var removeAnneeFraisInscription = $formulaireValeurs.find('.removeAnneeFraisInscription').val();
	if(removeAnneeFraisInscription != null && removeAnneeFraisInscription !== '')
		vals['removeAnneeFraisInscription'] = removeAnneeFraisInscription;

	var valeurEcoleCle = $formulaireValeurs.find('input.valeurEcoleCle:checked').val();
	if(valeurEcoleCle != null && valeurEcoleCle !== '')
		vals['setEcoleCle'] = valeurEcoleCle;

	var valeurSaisonCles = $formulaireValeurs.find('input.valeurSaisonCles:checked').val();
	if(valeurSaisonCles != null && valeurSaisonCles !== '')
		vals['addSaisonCles'] = valeurSaisonCles;

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

	patchAnneeScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchAnneeScolaireFiltres($formulaireFiltres) {
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

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

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

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

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

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

		var filtreAnneeNomCourt = $formulaireFiltres.find('.valeurAnneeNomCourt').val();
		if(filtreAnneeNomCourt != null && filtreAnneeNomCourt !== '')
			filtres.push({ name: 'fq', value: 'anneeNomCourt:' + filtreAnneeNomCourt });

		var filtreAnneeNomComplet = $formulaireFiltres.find('.valeurAnneeNomComplet').val();
		if(filtreAnneeNomComplet != null && filtreAnneeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'anneeNomComplet:' + filtreAnneeNomComplet });
	}
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

async function getAnneeScolaire(pk) {
	$.ajax({
		url: '/api/annee/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheAnneeScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheAnneeScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheAnneeScolaireVals(filtres, success, error);
}

function rechercheAnneeScolaireFiltres($formulaireFiltres) {
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

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

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

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

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

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

		var filtreAnneeNomCourt = $formulaireFiltres.find('.valeurAnneeNomCourt').val();
		if(filtreAnneeNomCourt != null && filtreAnneeNomCourt !== '')
			filtres.push({ name: 'fq', value: 'anneeNomCourt:' + filtreAnneeNomCourt });

		var filtreAnneeNomComplet = $formulaireFiltres.find('.valeurAnneeNomComplet').val();
		if(filtreAnneeNomComplet != null && filtreAnneeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'anneeNomComplet:' + filtreAnneeNomComplet });
	}
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

function suggereAnneeScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['anneeNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherAnneeScolaireVals($formulaireFiltres, success, error);
}

function suggereAnneeScolaireEcoleCle(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-school ');
			var $span = $('<span>').attr('class', '').text(o['ecoleNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['anneeCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_ecoleCle_' + pk + '_anneeCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurEcoleCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_ecoleCle_" + pk + "_anneeCles_" + o['pk'] + "'); patchAnneeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'EcoleCle']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#AnneeScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheEcoleVals(filtres, success, error);
}

function suggereAnneeScolaireSaisonCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun ');
			var $span = $('<span>').attr('class', '').text(o['saisonNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['anneeCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_saisonCles_' + pk + '_anneeCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurSaisonCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_saisonCles_" + pk + "_anneeCle_" + o['pk'] + "'); patchAnneeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SaisonCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#AnneeScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheSaisonScolaireVals(filtres, success, error);
}

async function websocketAnneeScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketAnneeScolaire', function (error, message) {
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
			var $header = $('<div>').attr('class', 'w3-container fa-orange ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-calendar-check w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier années');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-orange ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketEcole', function (error, message) {
			$('#Page_ecoleCle').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSaisonScolaire', function (error, message) {
			$('#Page_saisonCles').trigger('oninput');
		});
	}
}
async function websocketAnneeScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherAnneeScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('cree')) {
				$('.inputAnneeScolaire' + pk + 'Cree').val(o['cree']);
				$('.varAnneeScolaire' + pk + 'Cree').text(o['cree']);
			}
			if(vars.includes('modifie')) {
				$('.inputAnneeScolaire' + pk + 'Modifie').val(o['modifie']);
				$('.varAnneeScolaire' + pk + 'Modifie').text(o['modifie']);
			}
			if(vars.includes('archive')) {
				$('.inputAnneeScolaire' + pk + 'Archive').val(o['archive']);
				$('.varAnneeScolaire' + pk + 'Archive').text(o['archive']);
			}
			if(vars.includes('supprime')) {
				$('.inputAnneeScolaire' + pk + 'Supprime').val(o['supprime']);
				$('.varAnneeScolaire' + pk + 'Supprime').text(o['supprime']);
			}
			if(vars.includes('anneeDebut')) {
				$('.inputAnneeScolaire' + pk + 'AnneeDebut').val(o['anneeDebut']);
				$('.varAnneeScolaire' + pk + 'AnneeDebut').text(o['anneeDebut']);
			}
			if(vars.includes('anneeFin')) {
				$('.inputAnneeScolaire' + pk + 'AnneeFin').val(o['anneeFin']);
				$('.varAnneeScolaire' + pk + 'AnneeFin').text(o['anneeFin']);
			}
			if(vars.includes('anneeFraisInscription')) {
				$('.inputAnneeScolaire' + pk + 'AnneeFraisInscription').val(o['anneeFraisInscription']);
				$('.varAnneeScolaire' + pk + 'AnneeFraisInscription').text(o['anneeFraisInscription']);
			}
			if(vars.includes('ecoleCle')) {
				$('.inputAnneeScolaire' + pk + 'EcoleCle').val(o['ecoleCle']);
				$('.varAnneeScolaire' + pk + 'EcoleCle').text(o['ecoleCle']);
			}
			if(vars.includes('saisonCles')) {
				$('.inputAnneeScolaire' + pk + 'SaisonCles').val(o['saisonCles']);
				$('.varAnneeScolaire' + pk + 'SaisonCles').text(o['saisonCles']);
			}
			if(vars.includes('inheritPk')) {
				$('.inputAnneeScolaire' + pk + 'InheritPk').val(o['inheritPk']);
				$('.varAnneeScolaire' + pk + 'InheritPk').text(o['inheritPk']);
			}
		});
	}
}

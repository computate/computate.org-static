
// POST //

async function postAgeScolaire($formulaireValeurs, success, error) {
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

	var valeurAgeDebut = $formulaireValeurs.find('.valeurAgeDebut').val();
	if(valeurAgeDebut != null && valeurAgeDebut !== '')
		vals['ageDebut'] = valeurAgeDebut;

	var valeurAgeFin = $formulaireValeurs.find('.valeurAgeFin').val();
	if(valeurAgeFin != null && valeurAgeFin !== '')
		vals['ageFin'] = valeurAgeFin;

	var valeurSessionCle = $formulaireValeurs.find('input.valeurSessionCle:checked').val();
	if(valeurSessionCle != null && valeurSessionCle !== '')
		vals['sessionCle'] = valeurSessionCle;

	var valeurBlocCles = $formulaireValeurs.find('input.valeurBlocCles:checked').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['blocCles'] = valeurBlocCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
		vals['ecoleAddresse'] = valeurEcoleAddresse;

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

// PUTImport //

async function putimportAgeScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportAgeScolaireVals(JSON.parse(json), success, error);
}

function putimportAgeScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/age/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionAgeScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionAgeScolaireVals(JSON.parse(json), success, error);
}

function putfusionAgeScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/age/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieAgeScolaire($formulaireValeurs, pk, success, error) {
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

	var valeurAgeDebut = $formulaireValeurs.find('.valeurAgeDebut').val();
	if(valeurAgeDebut != null && valeurAgeDebut !== '')
		vals['ageDebut'] = valeurAgeDebut;

	var valeurAgeFin = $formulaireValeurs.find('.valeurAgeFin').val();
	if(valeurAgeFin != null && valeurAgeFin !== '')
		vals['ageFin'] = valeurAgeFin;

	var valeurSessionCle = $formulaireValeurs.find('input.valeurSessionCle:checked').val();
	if(valeurSessionCle != null && valeurSessionCle !== '')
		vals['sessionCle'] = valeurSessionCle;

	var valeurBlocCles = $formulaireValeurs.find('input.valeurBlocCles:checked').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['blocCles'] = [valeurBlocCles];

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
		vals['ecoleAddresse'] = valeurEcoleAddresse;

	putcopieAgeScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieAgeScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/age/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchAgeScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchAgeScolaireFiltres($formulaireFiltres);

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

	var valeurAgeDebut = $formulaireValeurs.find('.valeurAgeDebut').val();
	if(valeurAgeDebut != null && valeurAgeDebut !== '')
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

	var valeurAgeFin = $formulaireValeurs.find('.valeurAgeFin').val();
	if(valeurAgeFin != null && valeurAgeFin !== '')
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

	var valeurSessionCle = $formulaireValeurs.find('input.valeurSessionCle:checked').val();
	if(valeurSessionCle != null && valeurSessionCle !== '')
		vals['setSessionCle'] = valeurSessionCle;

	var valeurBlocCles = $formulaireValeurs.find('input.valeurBlocCles:checked').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['addBlocCles'] = valeurBlocCles;

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

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
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

	patchAgeScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchAgeScolaireFiltres($formulaireFiltres) {
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

		var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
		if(filtreAgeDebut != null && filtreAgeDebut !== '')
			filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

		var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
		if(filtreAgeFin != null && filtreAgeFin !== '')
			filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

		var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
		if(filtreSessionCle != null && filtreSessionCle !== '')
			filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

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

		var $filtreSaisonEteCheckbox = $formulaireFiltres.find('input.valeurSaisonEte[type = "checkbox"]');
		var $filtreSaisonEteSelect = $formulaireFiltres.find('select.valeurSaisonEte');
		var filtreSaisonEte = $filtreSaisonEteSelect.length ? $filtreSaisonEteSelect.val() : $filtreSaisonEteCheckbox.prop('checked');
		var filtreSaisonEteSelectVal = $formulaireFiltres.find('select.filtreSaisonEte').val();
		var filtreSaisonEte = null;
		if(filtreSaisonEteSelectVal !== '')
			filtreSaisonEte = filtreSaisonEteSelectVal == 'true';
		if(filtreSaisonEte != null && filtreSaisonEte === true)
			filtres.push({ name: 'fq', value: 'saisonEte:' + filtreSaisonEte });

		var $filtreSaisonHiverCheckbox = $formulaireFiltres.find('input.valeurSaisonHiver[type = "checkbox"]');
		var $filtreSaisonHiverSelect = $formulaireFiltres.find('select.valeurSaisonHiver');
		var filtreSaisonHiver = $filtreSaisonHiverSelect.length ? $filtreSaisonHiverSelect.val() : $filtreSaisonHiverCheckbox.prop('checked');
		var filtreSaisonHiverSelectVal = $formulaireFiltres.find('select.filtreSaisonHiver').val();
		var filtreSaisonHiver = null;
		if(filtreSaisonHiverSelectVal !== '')
			filtreSaisonHiver = filtreSaisonHiverSelectVal == 'true';
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

		var filtreSessionJourDebut = $formulaireFiltres.find('.valeurSessionJourDebut').val();
		if(filtreSessionJourDebut != null && filtreSessionJourDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionJourDebut:' + filtreSessionJourDebut });

		var filtreSessionJourFin = $formulaireFiltres.find('.valeurSessionJourFin').val();
		if(filtreSessionJourFin != null && filtreSessionJourFin !== '')
			filtres.push({ name: 'fq', value: 'sessionJourFin:' + filtreSessionJourFin });

		var filtreSessionNomComplet = $formulaireFiltres.find('.valeurSessionNomComplet').val();
		if(filtreSessionNomComplet != null && filtreSessionNomComplet !== '')
			filtres.push({ name: 'fq', value: 'sessionNomComplet:' + filtreSessionNomComplet });

		var filtreAgeNomCourt = $formulaireFiltres.find('.valeurAgeNomCourt').val();
		if(filtreAgeNomCourt != null && filtreAgeNomCourt !== '')
			filtres.push({ name: 'fq', value: 'ageNomCourt:' + filtreAgeNomCourt });

		var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
		if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });
	}
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

async function getAgeScolaire(pk) {
	$.ajax({
		url: '/api/age/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheAgeScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheAgeScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheAgeScolaireVals(filtres, success, error);
}

function rechercheAgeScolaireFiltres($formulaireFiltres) {
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

		var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
		if(filtreAgeDebut != null && filtreAgeDebut !== '')
			filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

		var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
		if(filtreAgeFin != null && filtreAgeFin !== '')
			filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

		var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
		if(filtreSessionCle != null && filtreSessionCle !== '')
			filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

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

		var $filtreSaisonEteCheckbox = $formulaireFiltres.find('input.valeurSaisonEte[type = "checkbox"]');
		var $filtreSaisonEteSelect = $formulaireFiltres.find('select.valeurSaisonEte');
		var filtreSaisonEte = $filtreSaisonEteSelect.length ? $filtreSaisonEteSelect.val() : $filtreSaisonEteCheckbox.prop('checked');
		var filtreSaisonEteSelectVal = $formulaireFiltres.find('select.filtreSaisonEte').val();
		var filtreSaisonEte = null;
		if(filtreSaisonEteSelectVal !== '')
			filtreSaisonEte = filtreSaisonEteSelectVal == 'true';
		if(filtreSaisonEte != null && filtreSaisonEte === true)
			filtres.push({ name: 'fq', value: 'saisonEte:' + filtreSaisonEte });

		var $filtreSaisonHiverCheckbox = $formulaireFiltres.find('input.valeurSaisonHiver[type = "checkbox"]');
		var $filtreSaisonHiverSelect = $formulaireFiltres.find('select.valeurSaisonHiver');
		var filtreSaisonHiver = $filtreSaisonHiverSelect.length ? $filtreSaisonHiverSelect.val() : $filtreSaisonHiverCheckbox.prop('checked');
		var filtreSaisonHiverSelectVal = $formulaireFiltres.find('select.filtreSaisonHiver').val();
		var filtreSaisonHiver = null;
		if(filtreSaisonHiverSelectVal !== '')
			filtreSaisonHiver = filtreSaisonHiverSelectVal == 'true';
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

		var filtreSessionJourDebut = $formulaireFiltres.find('.valeurSessionJourDebut').val();
		if(filtreSessionJourDebut != null && filtreSessionJourDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionJourDebut:' + filtreSessionJourDebut });

		var filtreSessionJourFin = $formulaireFiltres.find('.valeurSessionJourFin').val();
		if(filtreSessionJourFin != null && filtreSessionJourFin !== '')
			filtres.push({ name: 'fq', value: 'sessionJourFin:' + filtreSessionJourFin });

		var filtreSessionNomComplet = $formulaireFiltres.find('.valeurSessionNomComplet').val();
		if(filtreSessionNomComplet != null && filtreSessionNomComplet !== '')
			filtres.push({ name: 'fq', value: 'sessionNomComplet:' + filtreSessionNomComplet });

		var filtreAgeNomCourt = $formulaireFiltres.find('.valeurAgeNomCourt').val();
		if(filtreAgeNomCourt != null && filtreAgeNomCourt !== '')
			filtres.push({ name: 'fq', value: 'ageNomCourt:' + filtreAgeNomCourt });

		var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
		if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });
	}
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

function suggereAgeScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-birthday-cake ');
			var $span = $('<span>').attr('class', '').text(o['ageNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherAgeScolaireVals($formulaireFiltres, success, error);
}

function suggereAgeScolaireBlocCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell ');
			var $span = $('<span>').attr('class', '').text(o['blocNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['ageCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blocCles_' + pk + '_ageCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurBlocCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_blocCles_" + pk + "_ageCle_" + o['pk'] + "'); patchAgeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlocCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#AgeScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheBlocScolaireVals(filtres, success, error);
}

function suggereAgeScolaireSessionCle(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-graduation-cap ');
			var $span = $('<span>').attr('class', '').text(o['sessionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['ageCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_sessionCle_' + pk + '_ageCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurSessionCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_sessionCle_" + pk + "_ageCles_" + o['pk'] + "'); patchAgeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SessionCle']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#AgeScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheSessionScolaireVals(filtres, success, error);
}

async function websocketAgeScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketAgeScolaire', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-blue ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'fad fa-birthday-cake w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modifier âges');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-blue ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketBlocScolaire', function (error, message) {
			$('#Page_blocCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSessionScolaire', function (error, message) {
			$('#Page_sessionCle').trigger('oninput');
		});
	}
}
async function websocketAgeScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherAgeScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('cree')) {
				$('.inputAgeScolaire' + pk + 'Cree').val(o['cree']);
				$('.varAgeScolaire' + pk + 'Cree').text(o['cree']);
			}
			if(vars.includes('modifie')) {
				$('.inputAgeScolaire' + pk + 'Modifie').val(o['modifie']);
				$('.varAgeScolaire' + pk + 'Modifie').text(o['modifie']);
			}
			if(vars.includes('archive')) {
				$('.inputAgeScolaire' + pk + 'Archive').val(o['archive']);
				$('.varAgeScolaire' + pk + 'Archive').text(o['archive']);
			}
			if(vars.includes('supprime')) {
				$('.inputAgeScolaire' + pk + 'Supprime').val(o['supprime']);
				$('.varAgeScolaire' + pk + 'Supprime').text(o['supprime']);
			}
			if(vars.includes('ageDebut')) {
				$('.inputAgeScolaire' + pk + 'AgeDebut').val(o['ageDebut']);
				$('.varAgeScolaire' + pk + 'AgeDebut').text(o['ageDebut']);
			}
			if(vars.includes('ageFin')) {
				$('.inputAgeScolaire' + pk + 'AgeFin').val(o['ageFin']);
				$('.varAgeScolaire' + pk + 'AgeFin').text(o['ageFin']);
			}
			if(vars.includes('sessionCle')) {
				$('.inputAgeScolaire' + pk + 'SessionCle').val(o['sessionCle']);
				$('.varAgeScolaire' + pk + 'SessionCle').text(o['sessionCle']);
			}
			if(vars.includes('blocCles')) {
				$('.inputAgeScolaire' + pk + 'BlocCles').val(o['blocCles']);
				$('.varAgeScolaire' + pk + 'BlocCles').text(o['blocCles']);
			}
			if(vars.includes('inheritPk')) {
				$('.inputAgeScolaire' + pk + 'InheritPk').val(o['inheritPk']);
				$('.varAgeScolaire' + pk + 'InheritPk').text(o['inheritPk']);
			}
			if(vars.includes('ecoleAddresse')) {
				$('.inputAgeScolaire' + pk + 'EcoleAddresse').val(o['ecoleAddresse']);
				$('.varAgeScolaire' + pk + 'EcoleAddresse').text(o['ecoleAddresse']);
			}
		});
	}
}

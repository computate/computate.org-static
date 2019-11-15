
// POST //

function postDesignInscription($formulaireValeurs, success, error) {
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

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurAnneeCle = $formulaireValeurs.find('.valeurAnneeCle').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['anneeCle'] = valeurAnneeCle;

	var valeurPartHtmlCles = $formulaireValeurs.find('.valeurPartHtmlCles').val();
	if(valeurPartHtmlCles != null && valeurPartHtmlCles !== '')
		vals['partHtmlCles'] = valeurPartHtmlCles;

	var valeurInscriptionCles = $formulaireValeurs.find('.valeurInscriptionCles').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['inscriptionCles'] = valeurInscriptionCles;

	var valeurDesignInscriptionNomComplet = $formulaireValeurs.find('.valeurDesignInscriptionNomComplet').val();
	if(valeurDesignInscriptionNomComplet != null && valeurDesignInscriptionNomComplet !== '')
		vals['designInscriptionNomComplet'] = valeurDesignInscriptionNomComplet;

	$.ajax({
		url: '/api/design-inscription'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postDesignInscriptionVals(vals, success, error) {
	$.ajax({
		url: '/api/design-inscription'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchDesignInscription($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchDesignInscriptionFiltres($formulaireFiltres);

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

	var removePartHtmlCles = $formulaireFiltres.find('.removePartHtmlCles').val() === 'true';
	var setPartHtmlCles = removePartHtmlCles ? null : $formulaireValeurs.find('.setPartHtmlCles').val();
	if(removePartHtmlCles || setPartHtmlCles != null && setPartHtmlCles !== '')
		vals['setPartHtmlCles'] = setPartHtmlCles;
	var addPartHtmlCles = $formulaireValeurs.find('.addPartHtmlCles').val();
	if(addPartHtmlCles != null && addPartHtmlCles !== '')
		vals['addPartHtmlCles'] = addPartHtmlCles;
	var removePartHtmlCles = $formulaireValeurs.find('.removePartHtmlCles').val();
	if(removePartHtmlCles != null && removePartHtmlCles !== '')
		vals['removePartHtmlCles'] = removePartHtmlCles;

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

	var removeDesignInscriptionNomComplet = $formulaireFiltres.find('.removeDesignInscriptionNomComplet').val() === 'true';
	var setDesignInscriptionNomComplet = removeDesignInscriptionNomComplet ? null : $formulaireValeurs.find('.setDesignInscriptionNomComplet').val();
	if(removeDesignInscriptionNomComplet || setDesignInscriptionNomComplet != null && setDesignInscriptionNomComplet !== '')
		vals['setDesignInscriptionNomComplet'] = setDesignInscriptionNomComplet;
	var addDesignInscriptionNomComplet = $formulaireValeurs.find('.addDesignInscriptionNomComplet').val();
	if(addDesignInscriptionNomComplet != null && addDesignInscriptionNomComplet !== '')
		vals['addDesignInscriptionNomComplet'] = addDesignInscriptionNomComplet;
	var removeDesignInscriptionNomComplet = $formulaireValeurs.find('.removeDesignInscriptionNomComplet').val();
	if(removeDesignInscriptionNomComplet != null && removeDesignInscriptionNomComplet !== '')
		vals['removeDesignInscriptionNomComplet'] = removeDesignInscriptionNomComplet;

	patchDesignInscriptionVals(filtres, vals, success, error);
}

function patchDesignInscriptionFiltres($formulaireFiltres) {
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

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

	var filtrePartHtmlCles = $formulaireFiltres.find('.valeurPartHtmlCles').val();
	if(filtrePartHtmlCles != null && filtrePartHtmlCles !== '')
		filtres.push({ name: 'fq', value: 'partHtmlCles:' + filtrePartHtmlCles });

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

	var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
	if(filtreObjetTitre != null && filtreObjetTitre !== '')
		filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreDesignInscriptionCle = $formulaireFiltres.find('.valeurDesignInscriptionCle').val();
	if(filtreDesignInscriptionCle != null && filtreDesignInscriptionCle !== '')
		filtres.push({ name: 'fq', value: 'designInscriptionCle:' + filtreDesignInscriptionCle });

	var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
	if(filtreEcoleCle != null && filtreEcoleCle !== '')
		filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

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

	var filtreAnneeNomCourt = $formulaireFiltres.find('.valeurAnneeNomCourt').val();
	if(filtreAnneeNomCourt != null && filtreAnneeNomCourt !== '')
		filtres.push({ name: 'fq', value: 'anneeNomCourt:' + filtreAnneeNomCourt });

	var filtreAnneeNomComplet = $formulaireFiltres.find('.valeurAnneeNomComplet').val();
	if(filtreAnneeNomComplet != null && filtreAnneeNomComplet !== '')
		filtres.push({ name: 'fq', value: 'anneeNomComplet:' + filtreAnneeNomComplet });

	var filtreDesignInscriptionNomComplet = $formulaireFiltres.find('.valeurDesignInscriptionNomComplet').val();
	if(filtreDesignInscriptionNomComplet != null && filtreDesignInscriptionNomComplet !== '')
		filtres.push({ name: 'fq', value: 'designInscriptionNomComplet:' + filtreDesignInscriptionNomComplet });
	return filtres;
}

function patchDesignInscriptionVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchDesignInscriptionVals(filtres, vals, success, error);
}

function patchDesignInscriptionVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/design-inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getDesignInscription(pk) {
	$.ajax({
		url: '/api/design-inscription/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteDesignInscription(pk) {
	$.ajax({
		url: '/api/design-inscription/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

function rechercheDesignInscription($formulaireFiltres, success, error) {
	var filtres = rechercheDesignInscriptionFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheDesignInscriptionVals(filtres, success, error);
}

function rechercheDesignInscriptionFiltres($formulaireFiltres) {
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

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

	var filtrePartHtmlCles = $formulaireFiltres.find('.valeurPartHtmlCles').val();
	if(filtrePartHtmlCles != null && filtrePartHtmlCles !== '')
		filtres.push({ name: 'fq', value: 'partHtmlCles:' + filtrePartHtmlCles });

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

	var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
	if(filtreObjetTitre != null && filtreObjetTitre !== '')
		filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

	var filtrePageUrl = $formulaireFiltres.find('.valeurPageUrl').val();
	if(filtrePageUrl != null && filtrePageUrl !== '')
		filtres.push({ name: 'fq', value: 'pageUrl:' + filtrePageUrl });

	var filtreDesignInscriptionCle = $formulaireFiltres.find('.valeurDesignInscriptionCle').val();
	if(filtreDesignInscriptionCle != null && filtreDesignInscriptionCle !== '')
		filtres.push({ name: 'fq', value: 'designInscriptionCle:' + filtreDesignInscriptionCle });

	var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
	if(filtreEcoleCle != null && filtreEcoleCle !== '')
		filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

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

	var filtreAnneeNomCourt = $formulaireFiltres.find('.valeurAnneeNomCourt').val();
	if(filtreAnneeNomCourt != null && filtreAnneeNomCourt !== '')
		filtres.push({ name: 'fq', value: 'anneeNomCourt:' + filtreAnneeNomCourt });

	var filtreAnneeNomComplet = $formulaireFiltres.find('.valeurAnneeNomComplet').val();
	if(filtreAnneeNomComplet != null && filtreAnneeNomComplet !== '')
		filtres.push({ name: 'fq', value: 'anneeNomComplet:' + filtreAnneeNomComplet });

	var filtreDesignInscriptionNomComplet = $formulaireFiltres.find('.valeurDesignInscriptionNomComplet').val();
	if(filtreDesignInscriptionNomComplet != null && filtreDesignInscriptionNomComplet !== '')
		filtres.push({ name: 'fq', value: 'designInscriptionNomComplet:' + filtreDesignInscriptionNomComplet });
	return filtres;
}

function rechercheDesignInscriptionVals(filtres, success, error) {
	$.ajax({
		url: '/api/design-inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereDesignInscriptionObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-bell w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['designInscriptionNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherDesignInscriptionVals($formulaireFiltres, success, error);
}

function suggereDesignInscriptionPartHtmlCles($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['objetTitre']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#DesignInscriptionForm :input[name="pk"]').val());
			var val = o['designInscriptionCle'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_partHtmlCles_' + pk + '_designInscriptionCle_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_partHtmlCles_" + pk + "_designInscriptionCle_" + o['pk'] + "'); patchDesignInscriptionVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PartHtmlCles']: \"" + o['pk'] + "\" }, function() { patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { ajouterLueur($input); }, function() { ajouterErreur($input); } ); } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			var tri1 = o['tri1'];
			if(tri1) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				$sortText = $('<span>').attr('class', '').text(tri1);
				var $iDown = $('<i>').attr('class', 'fad fa-caret-square-down w3-tiny ').attr('onclick', '');
				var $iUp = $('<i>').attr('class', 'fad fa-caret-square-up w3-tiny ').attr('onclick', '');
				var $iDelete = $('<i>').attr('class', 'fad fa-minus-square w3-tiny ').attr('onclick', '');
				var $iRight = $('<i>').attr('class', 'fad fa-caret-square-right w3-tiny ').attr('onclick', '');
				$supUp = $('<sup>').attr('class', 'w3-tiny ');
				$subDown = $('<sub>').attr('class', 'w3-tiny ');
				$supDelete = $('<sup>').attr('class', 'w3-tiny ');
				$subRight = $('<sub>').attr('class', 'w3-tiny ');
				$supUp.append($iUp);
				$subDown.append($iDown);
				$supDelete.append($iDelete);
				$subRight.append($iRight);
				$sort.append($supUp);
				$sort.append($subDown);
				$sort.append($sortText);
				$sort.append($supDelete);
				$sort.append($subRight);
				$li.append($sort);
			}
			var tri2 = o['tri2'];
			if(tri2) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				$sortText = $('<span>').attr('class', '').text(tri2);
				var $iDown = $('<i>').attr('class', 'fad fa-caret-square-down w3-tiny ').attr('onclick', '');
				var $iUp = $('<i>').attr('class', 'fad fa-caret-square-up w3-tiny ').attr('onclick', '');
				var $iDelete = $('<i>').attr('class', 'fad fa-minus-square w3-tiny ').attr('onclick', '');
				var $iRight = $('<i>').attr('class', 'fad fa-caret-square-right w3-tiny ').attr('onclick', '');
				$supUp = $('<sup>').attr('class', 'w3-tiny ');
				$subDown = $('<sub>').attr('class', 'w3-tiny ');
				$supDelete = $('<sup>').attr('class', 'w3-tiny ');
				$subRight = $('<sub>').attr('class', 'w3-tiny ');
				$supUp.append($iUp);
				$subDown.append($iDown);
				$supDelete.append($iDelete);
				$subRight.append($iRight);
				$sort.append($supUp);
				$sort.append($subDown);
				$sort.append($sortText);
				$sort.append($supDelete);
				$sort.append($subRight);
				$li.append($sort);
			}
			var tri3 = o['tri3'];
			if(tri3) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				$sortText = $('<span>').attr('class', '').text(tri3);
				var $iDown = $('<i>').attr('class', 'fad fa-caret-square-down w3-tiny ').attr('onclick', '');
				var $iUp = $('<i>').attr('class', 'fad fa-caret-square-up w3-tiny ').attr('onclick', '');
				var $iDelete = $('<i>').attr('class', 'fad fa-minus-square w3-tiny ').attr('onclick', '');
				var $iRight = $('<i>').attr('class', 'fad fa-caret-square-right w3-tiny ').attr('onclick', '');
				$supUp = $('<sup>').attr('class', 'w3-tiny ');
				$subDown = $('<sub>').attr('class', 'w3-tiny ');
				$supDelete = $('<sup>').attr('class', 'w3-tiny ');
				$subRight = $('<sub>').attr('class', 'w3-tiny ');
				$supUp.append($iUp);
				$subDown.append($iDown);
				$supDelete.append($iDelete);
				$subRight.append($iRight);
				$sort.append($supUp);
				$sort.append($subDown);
				$sort.append($sortText);
				$sort.append($supDelete);
				$sort.append($subRight);
				$li.append($sort);
			}
			var tri4 = o['tri4'];
			if(tri4) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				$sortText = $('<span>').attr('class', '').text(tri4);
				var $iDown = $('<i>').attr('class', 'fad fa-caret-square-down w3-tiny ').attr('onclick', '');
				var $iUp = $('<i>').attr('class', 'fad fa-caret-square-up w3-tiny ').attr('onclick', '');
				var $iDelete = $('<i>').attr('class', 'fad fa-minus-square w3-tiny ').attr('onclick', '');
				var $iRight = $('<i>').attr('class', 'fad fa-caret-square-right w3-tiny ').attr('onclick', '');
				$supUp = $('<sup>').attr('class', 'w3-tiny ');
				$subDown = $('<sub>').attr('class', 'w3-tiny ');
				$supDelete = $('<sup>').attr('class', 'w3-tiny ');
				$subRight = $('<sub>').attr('class', 'w3-tiny ');
				$supUp.append($iUp);
				$subDown.append($iDown);
				$supDelete.append($iDelete);
				$subRight.append($iRight);
				$sort.append($supUp);
				$sort.append($subDown);
				$sort.append($sortText);
				$sort.append($supDelete);
				$sort.append($subRight);
				$li.append($sort);
			}
			var tri5 = o['tri5'];
			if(tri5) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				$sortText = $('<span>').attr('class', '').text(tri5);
				var $iDown = $('<i>').attr('class', 'fad fa-caret-square-down w3-tiny ').attr('onclick', '');
				var $iUp = $('<i>').attr('class', 'fad fa-caret-square-up w3-tiny ').attr('onclick', '');
				var $iDelete = $('<i>').attr('class', 'fad fa-minus-square w3-tiny ').attr('onclick', '');
				var $iRight = $('<i>').attr('class', 'fad fa-caret-square-right w3-tiny ').attr('onclick', '');
				$supUp = $('<sup>').attr('class', 'w3-tiny ');
				$subDown = $('<sub>').attr('class', 'w3-tiny ');
				$supDelete = $('<sup>').attr('class', 'w3-tiny ');
				$subRight = $('<sub>').attr('class', 'w3-tiny ');
				$supUp.append($iUp);
				$subDown.append($iDown);
				$supDelete.append($iDelete);
				$subRight.append($iRight);
				$sort.append($supUp);
				$sort.append($subDown);
				$sort.append($sortText);
				$sort.append($supDelete);
				$sort.append($subRight);
				$li.append($sort);
			}
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePartHtml($formulaireFiltres, success, error);
}

function websocketDesignInscription() {
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {
		eventBus.registerHandler('websocketDesignInscription', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-indigo ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-bell w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier design d'inscriptions');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-indigo ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
		});
	}
}

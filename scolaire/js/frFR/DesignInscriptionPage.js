
// POST //

async function postDesignInscription($formulaireValeurs, success, error) {
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

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurDesignInscriptionNomComplet = $formulaireValeurs.find('.valeurDesignInscriptionNomComplet').val();
	if(valeurDesignInscriptionNomComplet != null && valeurDesignInscriptionNomComplet !== '')
		vals['designInscriptionNomComplet'] = valeurDesignInscriptionNomComplet;

	var valeurPartHtmlCles = $formulaireValeurs.find('.valeurPartHtmlCles').val();
	if(valeurPartHtmlCles != null && valeurPartHtmlCles !== '')
		vals['partHtmlCles'] = valeurPartHtmlCles;

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

async function patchDesignInscription($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchDesignInscriptionFiltres($formulaireFiltres);

	var vals = {};

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

	patchDesignInscriptionVals(filtres, vals, success, error);
}

function patchDesignInscriptionFiltres($formulaireFiltres) {
	var filtres = [];

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
	if(filtreObjetId != null && filtreObjetId !== '')
		filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreDesignInscriptionNomComplet = $formulaireFiltres.find('.valeurDesignInscriptionNomComplet').val();
	if(filtreDesignInscriptionNomComplet != null && filtreDesignInscriptionNomComplet !== '')
		filtres.push({ name: 'fq', value: 'designInscriptionNomComplet:' + filtreDesignInscriptionNomComplet });

	var filtrePartHtmlCles = $formulaireFiltres.find('.valeurPartHtmlCles').val();
	if(filtrePartHtmlCles != null && filtrePartHtmlCles !== '')
		filtres.push({ name: 'fq', value: 'partHtmlCles:' + filtrePartHtmlCles });

	var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
	if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
		filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

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

	var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
	if(filtreObjetTitre != null && filtreObjetTitre !== '')
		filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

	var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
	if(filtrePageUrlId != null && filtrePageUrlId !== '')
		filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

	var filtreDesignInscriptionCle = $formulaireFiltres.find('.valeurDesignInscriptionCle').val();
	if(filtreDesignInscriptionCle != null && filtreDesignInscriptionCle !== '')
		filtres.push({ name: 'fq', value: 'designInscriptionCle:' + filtreDesignInscriptionCle });

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

	var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
	if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

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

async function getDesignInscription(pk) {
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

async function deleteDesignInscription(pk) {
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

async function rechercheDesignInscription($formulaireFiltres, success, error) {
	var filtres = rechercheDesignInscriptionFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheDesignInscriptionVals(filtres, success, error);
}

function rechercheDesignInscriptionFiltres($formulaireFiltres) {
	var filtres = [];

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
	if(filtreObjetId != null && filtreObjetId !== '')
		filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreDesignInscriptionNomComplet = $formulaireFiltres.find('.valeurDesignInscriptionNomComplet').val();
	if(filtreDesignInscriptionNomComplet != null && filtreDesignInscriptionNomComplet !== '')
		filtres.push({ name: 'fq', value: 'designInscriptionNomComplet:' + filtreDesignInscriptionNomComplet });

	var filtrePartHtmlCles = $formulaireFiltres.find('.valeurPartHtmlCles').val();
	if(filtrePartHtmlCles != null && filtrePartHtmlCles !== '')
		filtres.push({ name: 'fq', value: 'partHtmlCles:' + filtrePartHtmlCles });

	var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
	if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
		filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

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

	var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
	if(filtreObjetTitre != null && filtreObjetTitre !== '')
		filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
	if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
		filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

	var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
	if(filtrePageUrlId != null && filtrePageUrlId !== '')
		filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

	var filtreDesignInscriptionCle = $formulaireFiltres.find('.valeurDesignInscriptionCle').val();
	if(filtreDesignInscriptionCle != null && filtreDesignInscriptionCle !== '')
		filtres.push({ name: 'fq', value: 'designInscriptionCle:' + filtreDesignInscriptionCle });

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

	var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
	if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

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
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherDesignInscriptionVals($formulaireFiltres, success, error);
}

function suggereDesignInscriptionPartHtmlCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['objetTitre']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['designInscriptionCle'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_partHtmlCles_' + pk + '_designInscriptionCle_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_partHtmlCles_" + pk + "_designInscriptionCle_" + o['pk'] + "'); patchDesignInscriptionVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PartHtmlCles']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			var tri1 = o['tri1'];
			var tri2 = o['tri2'];
			var tri3 = o['tri3'];
			var tri4 = o['tri4'];
			var tri5 = o['tri5'];
			var tri6 = o['tri6'];
			var tri7 = o['tri7'];
			var tri8 = o['tri8'];
			var tri9 = o['tri9'];
			var tri10 = o['tri10'];

			$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
			var $sortInput = $('<input>')
			$sortInput.attr('class', 'w3-tiny ');
			$sortInput.attr('style', 'width: 4em; ');
			$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri1");
			$sortInput.attr('value', tri1).attr('onchange', 
				"$('#DesignInscriptionForm :input[name=\"focusId\"]').val($(this).attr('id')); "
				+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri1']: $(this).val() ? $(this).val() : null }"
					+ ", function() { "
					+ "}"
					+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri1')); }"
					+ " ); "); 
			$sort.append($sortInput);
			$li.append($sort);

			if(tri1 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri2");
				$sortInput.attr('value', tri2).attr('onchange', 
					"$('#DesignInscriptionForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri2']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri2')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri2 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri3");
				$sortInput.attr('value', tri3).attr('onchange', 
					"$('#DesignInscriptionForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri3']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri3')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri3 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri4");
				$sortInput.attr('value', tri4).attr('onchange', 
					"$('#DesignInscriptionForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri4']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri4')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri4 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri5");
				$sortInput.attr('value', tri5).attr('onchange', 
					"$('#DesignInscriptionForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri5']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri5')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri5 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri6");
				$sortInput.attr('value', tri6).attr('onchange', 
					"$('#DesignInscriptionForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri6']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri6')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri6 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri7");
				$sortInput.attr('value', tri7).attr('onchange', 
					"$('#DesignInscriptionForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri7']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri7')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri7 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri8");
				$sortInput.attr('value', tri8).attr('onchange', 
					"$('#DesignInscriptionForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri8']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri8')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri8 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri9");
				$sortInput.attr('value', tri9).attr('onchange', 
					"$('#DesignInscriptionForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri9']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri9')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri9 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri10");
				$sortInput.attr('value', tri10).attr('onchange', 
					"$('#DesignInscriptionForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri10']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri10')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#DesignInscriptionForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePartHtmlVals(filtres, success, error);
}

async function websocketDesignInscription(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketDesignInscription', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pks = json['pks'];
			var empty = json['empty'];
			if(!empty) {
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
				if(success)
					success(json);
			}
		});

		window.eventBus.registerHandler('websocketPartHtml', function (error, message) {
			$('#Page_partHtmlCles').trigger('oninput');
		});
	}
}
async function websocketDesignInscriptionInner(requetePatch) {
	var pk = requetePatch['pk'];
	var pks = requetePatch['pks'];
	var classes = requetePatch['classes'];
	var vars = requetePatch['vars'];
	var empty = requetePatch['empty'];

	if(pk != null) {
		rechercherDesignInscriptionVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('cree')) {
				$('.inputDesignInscription' + pk + 'Cree').val(o['cree']);
				$('.varDesignInscription' + pk + 'Cree').text(o['cree']);
			}
			if(vars.includes('modifie')) {
				$('.inputDesignInscription' + pk + 'Modifie').val(o['modifie']);
				$('.varDesignInscription' + pk + 'Modifie').text(o['modifie']);
			}
			if(vars.includes('archive')) {
				$('.inputDesignInscription' + pk + 'Archive').val(o['archive']);
				$('.varDesignInscription' + pk + 'Archive').text(o['archive']);
			}
			if(vars.includes('supprime')) {
				$('.inputDesignInscription' + pk + 'Supprime').val(o['supprime']);
				$('.varDesignInscription' + pk + 'Supprime').text(o['supprime']);
			}
			if(vars.includes('designInscriptionNomComplet')) {
				$('.inputDesignInscription' + pk + 'DesignInscriptionNomComplet').val(o['designInscriptionNomComplet']);
				$('.varDesignInscription' + pk + 'DesignInscriptionNomComplet').text(o['designInscriptionNomComplet']);
			}
			if(vars.includes('partHtmlCles')) {
				$('.inputDesignInscription' + pk + 'PartHtmlCles').val(o['partHtmlCles']);
				$('.varDesignInscription' + pk + 'PartHtmlCles').text(o['partHtmlCles']);
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
		await patchDesignInscriptionVals( [ {name: 'fq', value: 'pk:' + pk} ], {});
	}
}

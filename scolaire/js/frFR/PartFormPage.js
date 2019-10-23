
// POST //

function postPartForm($formulaireValeurs, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			ajouterLueur($formulaireValeurs.next('button'));
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

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurAnneeCle = $formulaireValeurs.find('.valeurAnneeCle').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['anneeCle'] = valeurAnneeCle;

	var valeurHtmlOrdre = $formulaireValeurs.find('.valeurHtmlOrdre').val();
	if(valeurHtmlOrdre != null && valeurHtmlOrdre !== '')
		vals['htmlOrdre'] = valeurHtmlOrdre;

	var valeurHtmlLien = $formulaireValeurs.find('.valeurHtmlLien').val();
	if(valeurHtmlLien != null && valeurHtmlLien !== '')
		vals['htmlLien'] = valeurHtmlLien;

	var valeurHtmlElement = $formulaireValeurs.find('.valeurHtmlElement').val();
	if(valeurHtmlElement != null && valeurHtmlElement !== '')
		vals['htmlElement'] = valeurHtmlElement;

	var valeurHtmlId = $formulaireValeurs.find('.valeurHtmlId').val();
	if(valeurHtmlId != null && valeurHtmlId !== '')
		vals['htmlId'] = valeurHtmlId;

	var valeurHtmlClasses = $formulaireValeurs.find('.valeurHtmlClasses').val();
	if(valeurHtmlClasses != null && valeurHtmlClasses !== '')
		vals['htmlClasses'] = valeurHtmlClasses;

	var valeurHtmlStyle = $formulaireValeurs.find('.valeurHtmlStyle').val();
	if(valeurHtmlStyle != null && valeurHtmlStyle !== '')
		vals['htmlStyle'] = valeurHtmlStyle;

	var valeurHtmlAvant = $formulaireValeurs.find('.valeurHtmlAvant').val();
	if(valeurHtmlAvant != null && valeurHtmlAvant !== '')
		vals['htmlAvant'] = valeurHtmlAvant;

	var valeurHtmlTexte = $formulaireValeurs.find('.valeurHtmlTexte').val();
	if(valeurHtmlTexte != null && valeurHtmlTexte !== '')
		vals['htmlTexte'] = valeurHtmlTexte;

	var valeurHtmlApres = $formulaireValeurs.find('.valeurHtmlApres').val();
	if(valeurHtmlApres != null && valeurHtmlApres !== '')
		vals['htmlApres'] = valeurHtmlApres;

	$.ajax({
		url: '/api/part-form'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postPartFormVals(vals, success, error) {
	$.ajax({
		url: '/api/part-form'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchPartForm($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchPartFormFiltres($formulaireFiltres);

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

	var removeHtmlOrdre = $formulaireFiltres.find('.removeHtmlOrdre').val() === 'true';
	var setHtmlOrdre = removeHtmlOrdre ? null : $formulaireValeurs.find('.setHtmlOrdre').val();
	if(removeHtmlOrdre || setHtmlOrdre != null && setHtmlOrdre !== '')
		vals['setHtmlOrdre'] = setHtmlOrdre;
	var addHtmlOrdre = $formulaireValeurs.find('.addHtmlOrdre').val();
	if(addHtmlOrdre != null && addHtmlOrdre !== '')
		vals['addHtmlOrdre'] = addHtmlOrdre;
	var removeHtmlOrdre = $formulaireValeurs.find('.removeHtmlOrdre').val();
	if(removeHtmlOrdre != null && removeHtmlOrdre !== '')
		vals['removeHtmlOrdre'] = removeHtmlOrdre;

	var removeHtmlLien = $formulaireFiltres.find('.removeHtmlLien').val() === 'true';
	var setHtmlLien = removeHtmlLien ? null : $formulaireValeurs.find('.setHtmlLien').val();
	if(removeHtmlLien || setHtmlLien != null && setHtmlLien !== '')
		vals['setHtmlLien'] = setHtmlLien;
	var addHtmlLien = $formulaireValeurs.find('.addHtmlLien').val();
	if(addHtmlLien != null && addHtmlLien !== '')
		vals['addHtmlLien'] = addHtmlLien;
	var removeHtmlLien = $formulaireValeurs.find('.removeHtmlLien').val();
	if(removeHtmlLien != null && removeHtmlLien !== '')
		vals['removeHtmlLien'] = removeHtmlLien;

	var removeHtmlElement = $formulaireFiltres.find('.removeHtmlElement').val() === 'true';
	var setHtmlElement = removeHtmlElement ? null : $formulaireValeurs.find('.setHtmlElement').val();
	if(removeHtmlElement || setHtmlElement != null && setHtmlElement !== '')
		vals['setHtmlElement'] = setHtmlElement;
	var addHtmlElement = $formulaireValeurs.find('.addHtmlElement').val();
	if(addHtmlElement != null && addHtmlElement !== '')
		vals['addHtmlElement'] = addHtmlElement;
	var removeHtmlElement = $formulaireValeurs.find('.removeHtmlElement').val();
	if(removeHtmlElement != null && removeHtmlElement !== '')
		vals['removeHtmlElement'] = removeHtmlElement;

	var removeHtmlId = $formulaireFiltres.find('.removeHtmlId').val() === 'true';
	var setHtmlId = removeHtmlId ? null : $formulaireValeurs.find('.setHtmlId').val();
	if(removeHtmlId || setHtmlId != null && setHtmlId !== '')
		vals['setHtmlId'] = setHtmlId;
	var addHtmlId = $formulaireValeurs.find('.addHtmlId').val();
	if(addHtmlId != null && addHtmlId !== '')
		vals['addHtmlId'] = addHtmlId;
	var removeHtmlId = $formulaireValeurs.find('.removeHtmlId').val();
	if(removeHtmlId != null && removeHtmlId !== '')
		vals['removeHtmlId'] = removeHtmlId;

	var removeHtmlClasses = $formulaireFiltres.find('.removeHtmlClasses').val() === 'true';
	var setHtmlClasses = removeHtmlClasses ? null : $formulaireValeurs.find('.setHtmlClasses').val();
	if(removeHtmlClasses || setHtmlClasses != null && setHtmlClasses !== '')
		vals['setHtmlClasses'] = setHtmlClasses;
	var addHtmlClasses = $formulaireValeurs.find('.addHtmlClasses').val();
	if(addHtmlClasses != null && addHtmlClasses !== '')
		vals['addHtmlClasses'] = addHtmlClasses;
	var removeHtmlClasses = $formulaireValeurs.find('.removeHtmlClasses').val();
	if(removeHtmlClasses != null && removeHtmlClasses !== '')
		vals['removeHtmlClasses'] = removeHtmlClasses;

	var removeHtmlStyle = $formulaireFiltres.find('.removeHtmlStyle').val() === 'true';
	var setHtmlStyle = removeHtmlStyle ? null : $formulaireValeurs.find('.setHtmlStyle').val();
	if(removeHtmlStyle || setHtmlStyle != null && setHtmlStyle !== '')
		vals['setHtmlStyle'] = setHtmlStyle;
	var addHtmlStyle = $formulaireValeurs.find('.addHtmlStyle').val();
	if(addHtmlStyle != null && addHtmlStyle !== '')
		vals['addHtmlStyle'] = addHtmlStyle;
	var removeHtmlStyle = $formulaireValeurs.find('.removeHtmlStyle').val();
	if(removeHtmlStyle != null && removeHtmlStyle !== '')
		vals['removeHtmlStyle'] = removeHtmlStyle;

	var removeHtmlAvant = $formulaireFiltres.find('.removeHtmlAvant').val() === 'true';
	var setHtmlAvant = removeHtmlAvant ? null : $formulaireValeurs.find('.setHtmlAvant').val();
	if(removeHtmlAvant || setHtmlAvant != null && setHtmlAvant !== '')
		vals['setHtmlAvant'] = setHtmlAvant;
	var addHtmlAvant = $formulaireValeurs.find('.addHtmlAvant').val();
	if(addHtmlAvant != null && addHtmlAvant !== '')
		vals['addHtmlAvant'] = addHtmlAvant;
	var removeHtmlAvant = $formulaireValeurs.find('.removeHtmlAvant').val();
	if(removeHtmlAvant != null && removeHtmlAvant !== '')
		vals['removeHtmlAvant'] = removeHtmlAvant;

	var removeHtmlTexte = $formulaireFiltres.find('.removeHtmlTexte').val() === 'true';
	var setHtmlTexte = removeHtmlTexte ? null : $formulaireValeurs.find('.setHtmlTexte').val();
	if(removeHtmlTexte || setHtmlTexte != null && setHtmlTexte !== '')
		vals['setHtmlTexte'] = setHtmlTexte;
	var addHtmlTexte = $formulaireValeurs.find('.addHtmlTexte').val();
	if(addHtmlTexte != null && addHtmlTexte !== '')
		vals['addHtmlTexte'] = addHtmlTexte;
	var removeHtmlTexte = $formulaireValeurs.find('.removeHtmlTexte').val();
	if(removeHtmlTexte != null && removeHtmlTexte !== '')
		vals['removeHtmlTexte'] = removeHtmlTexte;

	var removeHtmlApres = $formulaireFiltres.find('.removeHtmlApres').val() === 'true';
	var setHtmlApres = removeHtmlApres ? null : $formulaireValeurs.find('.setHtmlApres').val();
	if(removeHtmlApres || setHtmlApres != null && setHtmlApres !== '')
		vals['setHtmlApres'] = setHtmlApres;
	var addHtmlApres = $formulaireValeurs.find('.addHtmlApres').val();
	if(addHtmlApres != null && addHtmlApres !== '')
		vals['addHtmlApres'] = addHtmlApres;
	var removeHtmlApres = $formulaireValeurs.find('.removeHtmlApres').val();
	if(removeHtmlApres != null && removeHtmlApres !== '')
		vals['removeHtmlApres'] = removeHtmlApres;

	patchPartFormVals(filtres, vals, success, error);
}

function patchPartFormFiltres($formulaireFiltres) {
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

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

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
	return filtres;
}

function patchPartFormVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchPartFormVals(filtres, vals, success, error);
}

function patchPartFormVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/part-form?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getPartForm(pk) {
	$.ajax({
		url: '/api/part-form/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deletePartForm(pk) {
	$.ajax({
		url: '/api/part-form/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

function recherchePartForm($formulaireFiltres, success, error) {
	var filtres = recherchePartFormFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	recherchePartFormVals(filtres, success, error);
}

function recherchePartFormFiltres($formulaireFiltres) {
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

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
	if(filtreAnneeCle != null && filtreAnneeCle !== '')
		filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

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
	return filtres;
}

function recherchePartFormVals(filtres, success, error) {
	$.ajax({
		url: '/api/part-form?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

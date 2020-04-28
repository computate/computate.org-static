
// Recherche //

async function rechercheUtilisateurSite($formulaireFiltres, success, error) {
	var filtres = rechercheUtilisateurSiteFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheUtilisateurSiteVals(filtres, success, error);
}

function rechercheUtilisateurSiteFiltres($formulaireFiltres) {
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

		var $filtreUtilisateurRecevoirCourrielsCheckbox = $formulaireFiltres.find('input.valeurUtilisateurRecevoirCourriels[type = "checkbox"]');
		var $filtreUtilisateurRecevoirCourrielsSelect = $formulaireFiltres.find('select.valeurUtilisateurRecevoirCourriels');
		var filtreUtilisateurRecevoirCourriels = $filtreUtilisateurRecevoirCourrielsSelect.length ? $filtreUtilisateurRecevoirCourrielsSelect.val() : $filtreUtilisateurRecevoirCourrielsCheckbox.prop('checked');
		var filtreUtilisateurRecevoirCourrielsSelectVal = $formulaireFiltres.find('select.filtreUtilisateurRecevoirCourriels').val();
		var filtreUtilisateurRecevoirCourriels = null;
		if(filtreUtilisateurRecevoirCourrielsSelectVal !== '')
			filtreUtilisateurRecevoirCourriels = filtreUtilisateurRecevoirCourrielsSelectVal == 'true';
		if(filtreUtilisateurRecevoirCourriels != null && filtreUtilisateurRecevoirCourriels === true)
			filtres.push({ name: 'fq', value: 'utilisateurRecevoirCourriels:' + filtreUtilisateurRecevoirCourriels });

		var $filtreVoirArchiveCheckbox = $formulaireFiltres.find('input.valeurVoirArchive[type = "checkbox"]');
		var $filtreVoirArchiveSelect = $formulaireFiltres.find('select.valeurVoirArchive');
		var filtreVoirArchive = $filtreVoirArchiveSelect.length ? $filtreVoirArchiveSelect.val() : $filtreVoirArchiveCheckbox.prop('checked');
		var filtreVoirArchiveSelectVal = $formulaireFiltres.find('select.filtreVoirArchive').val();
		var filtreVoirArchive = null;
		if(filtreVoirArchiveSelectVal !== '')
			filtreVoirArchive = filtreVoirArchiveSelectVal == 'true';
		if(filtreVoirArchive != null && filtreVoirArchive === true)
			filtres.push({ name: 'fq', value: 'voirArchive:' + filtreVoirArchive });

		var $filtreVoirSupprimeCheckbox = $formulaireFiltres.find('input.valeurVoirSupprime[type = "checkbox"]');
		var $filtreVoirSupprimeSelect = $formulaireFiltres.find('select.valeurVoirSupprime');
		var filtreVoirSupprime = $filtreVoirSupprimeSelect.length ? $filtreVoirSupprimeSelect.val() : $filtreVoirSupprimeCheckbox.prop('checked');
		var filtreVoirSupprimeSelectVal = $formulaireFiltres.find('select.filtreVoirSupprime').val();
		var filtreVoirSupprime = null;
		if(filtreVoirSupprimeSelectVal !== '')
			filtreVoirSupprime = filtreVoirSupprimeSelectVal == 'true';
		if(filtreVoirSupprime != null && filtreVoirSupprime === true)
			filtres.push({ name: 'fq', value: 'voirSupprime:' + filtreVoirSupprime });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

		var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
		if(filtrePaiementCles != null && filtrePaiementCles !== '')
			filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

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

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

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

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreUtilisateurNom = $formulaireFiltres.find('.valeurUtilisateurNom').val();
		if(filtreUtilisateurNom != null && filtreUtilisateurNom !== '')
			filtres.push({ name: 'fq', value: 'utilisateurNom:' + filtreUtilisateurNom });

		var filtreUtilisateurMail = $formulaireFiltres.find('.valeurUtilisateurMail').val();
		if(filtreUtilisateurMail != null && filtreUtilisateurMail !== '')
			filtres.push({ name: 'fq', value: 'utilisateurMail:' + filtreUtilisateurMail });

		var filtreUtilisateurPrenom = $formulaireFiltres.find('.valeurUtilisateurPrenom').val();
		if(filtreUtilisateurPrenom != null && filtreUtilisateurPrenom !== '')
			filtres.push({ name: 'fq', value: 'utilisateurPrenom:' + filtreUtilisateurPrenom });

		var filtreUtilisateurNomFamille = $formulaireFiltres.find('.valeurUtilisateurNomFamille').val();
		if(filtreUtilisateurNomFamille != null && filtreUtilisateurNomFamille !== '')
			filtres.push({ name: 'fq', value: 'utilisateurNomFamille:' + filtreUtilisateurNomFamille });

		var filtreUtilisateurNomComplet = $formulaireFiltres.find('.valeurUtilisateurNomComplet').val();
		if(filtreUtilisateurNomComplet != null && filtreUtilisateurNomComplet !== '')
			filtres.push({ name: 'fq', value: 'utilisateurNomComplet:' + filtreUtilisateurNomComplet });

		var filtreUtilisateurSite = $formulaireFiltres.find('.valeurUtilisateurSite').val();
		if(filtreUtilisateurSite != null && filtreUtilisateurSite !== '')
			filtres.push({ name: 'fq', value: 'utilisateurSite:' + filtreUtilisateurSite });
	}
	return filtres;
}

function rechercheUtilisateurSiteVals(filtres, success, error) {
	$.ajax({
		url: '/api/utilisateur?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereUtilisateurSiteObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objetTitre']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherUtilisateurSiteVals($formulaireFiltres, success, error);
}

function suggereUtilisateurSiteInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['utilisateurCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_utilisateurCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_utilisateurCles_" + o['pk'] + "'); patchUtilisateurSiteVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#UtilisateurSiteForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

function suggereUtilisateurSitePaiementCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-search-dollar ');
			var $span = $('<span>').attr('class', '').text(o['paiementNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['utilisateurCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_paiementCles_' + pk + '_utilisateurCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurPaiementCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_paiementCles_" + pk + "_utilisateurCles_" + o['pk'] + "'); patchUtilisateurSiteVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PaiementCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#UtilisateurSiteForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePaiementScolaireVals(filtres, success, error);
}

// PATCH //

async function patchUtilisateurSite($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchUtilisateurSiteFiltres($formulaireFiltres);

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

	var valeurUtilisateurRecevoirCourriels = $formulaireValeurs.find('.valeurUtilisateurRecevoirCourriels').prop('checked');
	if(valeurUtilisateurRecevoirCourriels != null && valeurUtilisateurRecevoirCourriels !== '')
	var removeUtilisateurRecevoirCourriels = $formulaireFiltres.find('.removeUtilisateurRecevoirCourriels').val() === 'true';
	var valeurUtilisateurRecevoirCourrielsSelectVal = $formulaireValeurs.find('select.setUtilisateurRecevoirCourriels').val();
	var valeurUtilisateurRecevoirCourriels = null;
	if(valeurUtilisateurRecevoirCourrielsSelectVal !== '')
		valeurUtilisateurRecevoirCourriels = valeurUtilisateurRecevoirCourrielsSelectVal == 'true';
	setUtilisateurRecevoirCourriels = removeUtilisateurRecevoirCourriels ? null : valeurUtilisateurRecevoirCourriels;
	if(removeUtilisateurRecevoirCourriels || setUtilisateurRecevoirCourriels != null && setUtilisateurRecevoirCourriels !== '')
		vals['setUtilisateurRecevoirCourriels'] = setUtilisateurRecevoirCourriels;
	var addUtilisateurRecevoirCourriels = $formulaireValeurs.find('.addUtilisateurRecevoirCourriels').prop('checked');
	if(addUtilisateurRecevoirCourriels != null && addUtilisateurRecevoirCourriels !== '')
		vals['addUtilisateurRecevoirCourriels'] = addUtilisateurRecevoirCourriels;
	var removeUtilisateurRecevoirCourriels = $formulaireValeurs.find('.removeUtilisateurRecevoirCourriels').prop('checked');
	if(removeUtilisateurRecevoirCourriels != null && removeUtilisateurRecevoirCourriels !== '')
		vals['removeUtilisateurRecevoirCourriels'] = removeUtilisateurRecevoirCourriels;

	var valeurVoirArchive = $formulaireValeurs.find('.valeurVoirArchive').prop('checked');
	if(valeurVoirArchive != null && valeurVoirArchive !== '')
	var removeVoirArchive = $formulaireFiltres.find('.removeVoirArchive').val() === 'true';
	var valeurVoirArchiveSelectVal = $formulaireValeurs.find('select.setVoirArchive').val();
	var valeurVoirArchive = null;
	if(valeurVoirArchiveSelectVal !== '')
		valeurVoirArchive = valeurVoirArchiveSelectVal == 'true';
	setVoirArchive = removeVoirArchive ? null : valeurVoirArchive;
	if(removeVoirArchive || setVoirArchive != null && setVoirArchive !== '')
		vals['setVoirArchive'] = setVoirArchive;
	var addVoirArchive = $formulaireValeurs.find('.addVoirArchive').prop('checked');
	if(addVoirArchive != null && addVoirArchive !== '')
		vals['addVoirArchive'] = addVoirArchive;
	var removeVoirArchive = $formulaireValeurs.find('.removeVoirArchive').prop('checked');
	if(removeVoirArchive != null && removeVoirArchive !== '')
		vals['removeVoirArchive'] = removeVoirArchive;

	var valeurVoirSupprime = $formulaireValeurs.find('.valeurVoirSupprime').prop('checked');
	if(valeurVoirSupprime != null && valeurVoirSupprime !== '')
	var removeVoirSupprime = $formulaireFiltres.find('.removeVoirSupprime').val() === 'true';
	var valeurVoirSupprimeSelectVal = $formulaireValeurs.find('select.setVoirSupprime').val();
	var valeurVoirSupprime = null;
	if(valeurVoirSupprimeSelectVal !== '')
		valeurVoirSupprime = valeurVoirSupprimeSelectVal == 'true';
	setVoirSupprime = removeVoirSupprime ? null : valeurVoirSupprime;
	if(removeVoirSupprime || setVoirSupprime != null && setVoirSupprime !== '')
		vals['setVoirSupprime'] = setVoirSupprime;
	var addVoirSupprime = $formulaireValeurs.find('.addVoirSupprime').prop('checked');
	if(addVoirSupprime != null && addVoirSupprime !== '')
		vals['addVoirSupprime'] = addVoirSupprime;
	var removeVoirSupprime = $formulaireValeurs.find('.removeVoirSupprime').prop('checked');
	if(removeVoirSupprime != null && removeVoirSupprime !== '')
		vals['removeVoirSupprime'] = removeVoirSupprime;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
	var removeCustomerProfileId = $formulaireFiltres.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formulaireValeurs.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formulaireValeurs.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formulaireValeurs.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valeurInscriptionCles = $formulaireValeurs.find('input.valeurInscriptionCles:checked').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['addInscriptionCles'] = valeurInscriptionCles;

	var valeurPaiementCles = $formulaireValeurs.find('input.valeurPaiementCles:checked').val();
	if(valeurPaiementCles != null && valeurPaiementCles !== '')
		vals['addPaiementCles'] = valeurPaiementCles;

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

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
	var removeSessionId = $formulaireFiltres.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formulaireValeurs.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formulaireValeurs.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formulaireValeurs.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
	var removeUtilisateurId = $formulaireFiltres.find('.removeUtilisateurId').val() === 'true';
	var setUtilisateurId = removeUtilisateurId ? null : $formulaireValeurs.find('.setUtilisateurId').val();
	if(removeUtilisateurId || setUtilisateurId != null && setUtilisateurId !== '')
		vals['setUtilisateurId'] = setUtilisateurId;
	var addUtilisateurId = $formulaireValeurs.find('.addUtilisateurId').val();
	if(addUtilisateurId != null && addUtilisateurId !== '')
		vals['addUtilisateurId'] = addUtilisateurId;
	var removeUtilisateurId = $formulaireValeurs.find('.removeUtilisateurId').val();
	if(removeUtilisateurId != null && removeUtilisateurId !== '')
		vals['removeUtilisateurId'] = removeUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
	var removeUtilisateurCle = $formulaireFiltres.find('.removeUtilisateurCle').val() === 'true';
	var setUtilisateurCle = removeUtilisateurCle ? null : $formulaireValeurs.find('.setUtilisateurCle').val();
	if(removeUtilisateurCle || setUtilisateurCle != null && setUtilisateurCle !== '')
		vals['setUtilisateurCle'] = setUtilisateurCle;
	var addUtilisateurCle = $formulaireValeurs.find('.addUtilisateurCle').val();
	if(addUtilisateurCle != null && addUtilisateurCle !== '')
		vals['addUtilisateurCle'] = addUtilisateurCle;
	var removeUtilisateurCle = $formulaireValeurs.find('.removeUtilisateurCle').val();
	if(removeUtilisateurCle != null && removeUtilisateurCle !== '')
		vals['removeUtilisateurCle'] = removeUtilisateurCle;

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

	var valeurUtilisateurNom = $formulaireValeurs.find('.valeurUtilisateurNom').val();
	if(valeurUtilisateurNom != null && valeurUtilisateurNom !== '')
	var removeUtilisateurNom = $formulaireFiltres.find('.removeUtilisateurNom').val() === 'true';
	var setUtilisateurNom = removeUtilisateurNom ? null : $formulaireValeurs.find('.setUtilisateurNom').val();
	if(removeUtilisateurNom || setUtilisateurNom != null && setUtilisateurNom !== '')
		vals['setUtilisateurNom'] = setUtilisateurNom;
	var addUtilisateurNom = $formulaireValeurs.find('.addUtilisateurNom').val();
	if(addUtilisateurNom != null && addUtilisateurNom !== '')
		vals['addUtilisateurNom'] = addUtilisateurNom;
	var removeUtilisateurNom = $formulaireValeurs.find('.removeUtilisateurNom').val();
	if(removeUtilisateurNom != null && removeUtilisateurNom !== '')
		vals['removeUtilisateurNom'] = removeUtilisateurNom;

	var valeurUtilisateurMail = $formulaireValeurs.find('.valeurUtilisateurMail').val();
	if(valeurUtilisateurMail != null && valeurUtilisateurMail !== '')
	var removeUtilisateurMail = $formulaireFiltres.find('.removeUtilisateurMail').val() === 'true';
	var setUtilisateurMail = removeUtilisateurMail ? null : $formulaireValeurs.find('.setUtilisateurMail').val();
	if(removeUtilisateurMail || setUtilisateurMail != null && setUtilisateurMail !== '')
		vals['setUtilisateurMail'] = setUtilisateurMail;
	var addUtilisateurMail = $formulaireValeurs.find('.addUtilisateurMail').val();
	if(addUtilisateurMail != null && addUtilisateurMail !== '')
		vals['addUtilisateurMail'] = addUtilisateurMail;
	var removeUtilisateurMail = $formulaireValeurs.find('.removeUtilisateurMail').val();
	if(removeUtilisateurMail != null && removeUtilisateurMail !== '')
		vals['removeUtilisateurMail'] = removeUtilisateurMail;

	patchUtilisateurSiteVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchUtilisateurSiteFiltres($formulaireFiltres) {
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

		var $filtreUtilisateurRecevoirCourrielsCheckbox = $formulaireFiltres.find('input.valeurUtilisateurRecevoirCourriels[type = "checkbox"]');
		var $filtreUtilisateurRecevoirCourrielsSelect = $formulaireFiltres.find('select.valeurUtilisateurRecevoirCourriels');
		var filtreUtilisateurRecevoirCourriels = $filtreUtilisateurRecevoirCourrielsSelect.length ? $filtreUtilisateurRecevoirCourrielsSelect.val() : $filtreUtilisateurRecevoirCourrielsCheckbox.prop('checked');
		var filtreUtilisateurRecevoirCourrielsSelectVal = $formulaireFiltres.find('select.filtreUtilisateurRecevoirCourriels').val();
		var filtreUtilisateurRecevoirCourriels = null;
		if(filtreUtilisateurRecevoirCourrielsSelectVal !== '')
			filtreUtilisateurRecevoirCourriels = filtreUtilisateurRecevoirCourrielsSelectVal == 'true';
		if(filtreUtilisateurRecevoirCourriels != null && filtreUtilisateurRecevoirCourriels === true)
			filtres.push({ name: 'fq', value: 'utilisateurRecevoirCourriels:' + filtreUtilisateurRecevoirCourriels });

		var $filtreVoirArchiveCheckbox = $formulaireFiltres.find('input.valeurVoirArchive[type = "checkbox"]');
		var $filtreVoirArchiveSelect = $formulaireFiltres.find('select.valeurVoirArchive');
		var filtreVoirArchive = $filtreVoirArchiveSelect.length ? $filtreVoirArchiveSelect.val() : $filtreVoirArchiveCheckbox.prop('checked');
		var filtreVoirArchiveSelectVal = $formulaireFiltres.find('select.filtreVoirArchive').val();
		var filtreVoirArchive = null;
		if(filtreVoirArchiveSelectVal !== '')
			filtreVoirArchive = filtreVoirArchiveSelectVal == 'true';
		if(filtreVoirArchive != null && filtreVoirArchive === true)
			filtres.push({ name: 'fq', value: 'voirArchive:' + filtreVoirArchive });

		var $filtreVoirSupprimeCheckbox = $formulaireFiltres.find('input.valeurVoirSupprime[type = "checkbox"]');
		var $filtreVoirSupprimeSelect = $formulaireFiltres.find('select.valeurVoirSupprime');
		var filtreVoirSupprime = $filtreVoirSupprimeSelect.length ? $filtreVoirSupprimeSelect.val() : $filtreVoirSupprimeCheckbox.prop('checked');
		var filtreVoirSupprimeSelectVal = $formulaireFiltres.find('select.filtreVoirSupprime').val();
		var filtreVoirSupprime = null;
		if(filtreVoirSupprimeSelectVal !== '')
			filtreVoirSupprime = filtreVoirSupprimeSelectVal == 'true';
		if(filtreVoirSupprime != null && filtreVoirSupprime === true)
			filtres.push({ name: 'fq', value: 'voirSupprime:' + filtreVoirSupprime });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

		var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
		if(filtrePaiementCles != null && filtrePaiementCles !== '')
			filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

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

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

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

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreUtilisateurNom = $formulaireFiltres.find('.valeurUtilisateurNom').val();
		if(filtreUtilisateurNom != null && filtreUtilisateurNom !== '')
			filtres.push({ name: 'fq', value: 'utilisateurNom:' + filtreUtilisateurNom });

		var filtreUtilisateurMail = $formulaireFiltres.find('.valeurUtilisateurMail').val();
		if(filtreUtilisateurMail != null && filtreUtilisateurMail !== '')
			filtres.push({ name: 'fq', value: 'utilisateurMail:' + filtreUtilisateurMail });

		var filtreUtilisateurPrenom = $formulaireFiltres.find('.valeurUtilisateurPrenom').val();
		if(filtreUtilisateurPrenom != null && filtreUtilisateurPrenom !== '')
			filtres.push({ name: 'fq', value: 'utilisateurPrenom:' + filtreUtilisateurPrenom });

		var filtreUtilisateurNomFamille = $formulaireFiltres.find('.valeurUtilisateurNomFamille').val();
		if(filtreUtilisateurNomFamille != null && filtreUtilisateurNomFamille !== '')
			filtres.push({ name: 'fq', value: 'utilisateurNomFamille:' + filtreUtilisateurNomFamille });

		var filtreUtilisateurNomComplet = $formulaireFiltres.find('.valeurUtilisateurNomComplet').val();
		if(filtreUtilisateurNomComplet != null && filtreUtilisateurNomComplet !== '')
			filtres.push({ name: 'fq', value: 'utilisateurNomComplet:' + filtreUtilisateurNomComplet });

		var filtreUtilisateurSite = $formulaireFiltres.find('.valeurUtilisateurSite').val();
		if(filtreUtilisateurSite != null && filtreUtilisateurSite !== '')
			filtres.push({ name: 'fq', value: 'utilisateurSite:' + filtreUtilisateurSite });
	}
	return filtres;
}

function patchUtilisateurSiteVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchUtilisateurSiteVals(filtres, vals, success, error);
}

function patchUtilisateurSiteVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/utilisateur?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// POST //

async function postUtilisateurSite($formulaireValeurs, success, error) {
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

	var valeurUtilisateurRecevoirCourriels = $formulaireValeurs.find('.valeurUtilisateurRecevoirCourriels').prop('checked');
	if(valeurUtilisateurRecevoirCourriels != null && valeurUtilisateurRecevoirCourriels !== '')
		vals['utilisateurRecevoirCourriels'] = valeurUtilisateurRecevoirCourriels;

	var valeurVoirArchive = $formulaireValeurs.find('.valeurVoirArchive').prop('checked');
	if(valeurVoirArchive != null && valeurVoirArchive !== '')
		vals['voirArchive'] = valeurVoirArchive;

	var valeurVoirSupprime = $formulaireValeurs.find('.valeurVoirSupprime').prop('checked');
	if(valeurVoirSupprime != null && valeurVoirSupprime !== '')
		vals['voirSupprime'] = valeurVoirSupprime;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
		vals['customerProfileId'] = valeurCustomerProfileId;

	var valeurInscriptionCles = $formulaireValeurs.find('input.valeurInscriptionCles:checked').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['inscriptionCles'] = valeurInscriptionCles;

	var valeurPaiementCles = $formulaireValeurs.find('input.valeurPaiementCles:checked').val();
	if(valeurPaiementCles != null && valeurPaiementCles !== '')
		vals['paiementCles'] = valeurPaiementCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
		vals['sessionId'] = valeurSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
		vals['utilisateurId'] = valeurUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
		vals['utilisateurCle'] = valeurUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	var valeurUtilisateurNom = $formulaireValeurs.find('.valeurUtilisateurNom').val();
	if(valeurUtilisateurNom != null && valeurUtilisateurNom !== '')
		vals['utilisateurNom'] = valeurUtilisateurNom;

	var valeurUtilisateurMail = $formulaireValeurs.find('.valeurUtilisateurMail').val();
	if(valeurUtilisateurMail != null && valeurUtilisateurMail !== '')
		vals['utilisateurMail'] = valeurUtilisateurMail;

	$.ajax({
		url: '/api/utilisateur'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postUtilisateurSiteVals(vals, success, error) {
	$.ajax({
		url: '/api/utilisateur'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

async function websocketUtilisateurSite(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketUtilisateurSite', function (error, message) {
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
			var $header = $('<div>').attr('class', 'w3-container fa-gray ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-user-cog w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier utilisateurs du site');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-gray ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketInscriptionScolaire', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketPaiementScolaire', function (error, message) {
			$('#Page_paiementCles').trigger('oninput');
		});
	}
}
async function websocketUtilisateurSiteInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherUtilisateurSiteVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('cree')) {
				$('.inputUtilisateurSite' + pk + 'Cree').val(o['cree']);
				$('.varUtilisateurSite' + pk + 'Cree').text(o['cree']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'Cree'));
			}
			if(vars.includes('modifie')) {
				$('.inputUtilisateurSite' + pk + 'Modifie').val(o['modifie']);
				$('.varUtilisateurSite' + pk + 'Modifie').text(o['modifie']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'Modifie'));
			}
			if(vars.includes('archive')) {
				$('.inputUtilisateurSite' + pk + 'Archive').val(o['archive']);
				$('.varUtilisateurSite' + pk + 'Archive').text(o['archive']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'Archive'));
			}
			if(vars.includes('supprime')) {
				$('.inputUtilisateurSite' + pk + 'Supprime').val(o['supprime']);
				$('.varUtilisateurSite' + pk + 'Supprime').text(o['supprime']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'Supprime'));
			}
			if(vars.includes('utilisateurRecevoirCourriels')) {
				$('.inputUtilisateurSite' + pk + 'UtilisateurRecevoirCourriels').val(o['utilisateurRecevoirCourriels']);
				$('.varUtilisateurSite' + pk + 'UtilisateurRecevoirCourriels').text(o['utilisateurRecevoirCourriels']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'UtilisateurRecevoirCourriels'));
			}
			if(vars.includes('voirArchive')) {
				$('.inputUtilisateurSite' + pk + 'VoirArchive').val(o['voirArchive']);
				$('.varUtilisateurSite' + pk + 'VoirArchive').text(o['voirArchive']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'VoirArchive'));
			}
			if(vars.includes('voirSupprime')) {
				$('.inputUtilisateurSite' + pk + 'VoirSupprime').val(o['voirSupprime']);
				$('.varUtilisateurSite' + pk + 'VoirSupprime').text(o['voirSupprime']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'VoirSupprime'));
			}
			if(vars.includes('customerProfileId')) {
				$('.inputUtilisateurSite' + pk + 'CustomerProfileId').val(o['customerProfileId']);
				$('.varUtilisateurSite' + pk + 'CustomerProfileId').text(o['customerProfileId']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'CustomerProfileId'));
			}
			if(vars.includes('inscriptionCles')) {
				$('.inputUtilisateurSite' + pk + 'InscriptionCles').val(o['inscriptionCles']);
				$('.varUtilisateurSite' + pk + 'InscriptionCles').text(o['inscriptionCles']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'InscriptionCles'));
			}
			if(vars.includes('paiementCles')) {
				$('.inputUtilisateurSite' + pk + 'PaiementCles').val(o['paiementCles']);
				$('.varUtilisateurSite' + pk + 'PaiementCles').text(o['paiementCles']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'PaiementCles'));
			}
			if(vars.includes('inheritPk')) {
				$('.inputUtilisateurSite' + pk + 'InheritPk').val(o['inheritPk']);
				$('.varUtilisateurSite' + pk + 'InheritPk').text(o['inheritPk']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'InheritPk'));
			}
			if(vars.includes('sessionId')) {
				$('.inputUtilisateurSite' + pk + 'SessionId').val(o['sessionId']);
				$('.varUtilisateurSite' + pk + 'SessionId').text(o['sessionId']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'SessionId'));
			}
			if(vars.includes('utilisateurId')) {
				$('.inputUtilisateurSite' + pk + 'UtilisateurId').val(o['utilisateurId']);
				$('.varUtilisateurSite' + pk + 'UtilisateurId').text(o['utilisateurId']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'UtilisateurId'));
			}
			if(vars.includes('utilisateurCle')) {
				$('.inputUtilisateurSite' + pk + 'UtilisateurCle').val(o['utilisateurCle']);
				$('.varUtilisateurSite' + pk + 'UtilisateurCle').text(o['utilisateurCle']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'UtilisateurCle'));
			}
			if(vars.includes('utilisateurNom')) {
				$('.inputUtilisateurSite' + pk + 'UtilisateurNom').val(o['utilisateurNom']);
				$('.varUtilisateurSite' + pk + 'UtilisateurNom').text(o['utilisateurNom']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'UtilisateurNom'));
			}
			if(vars.includes('utilisateurMail')) {
				$('.inputUtilisateurSite' + pk + 'UtilisateurMail').val(o['utilisateurMail']);
				$('.varUtilisateurSite' + pk + 'UtilisateurMail').text(o['utilisateurMail']);
				ajouterLueur($('.inputUtilisateurSite' + pk + 'UtilisateurMail'));
			}
		});
	}
}

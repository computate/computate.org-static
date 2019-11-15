
// POST //

function postBlocScolaire($formulaireValeurs, success, error) {
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

	var valeurBlocHeureDebut = $formulaireValeurs.find('.valeurBlocHeureDebut').val();
	if(valeurBlocHeureDebut != null && valeurBlocHeureDebut !== '')
		vals['blocHeureDebut'] = valeurBlocHeureDebut;

	var valeurBlocHeureFin = $formulaireValeurs.find('.valeurBlocHeureFin').val();
	if(valeurBlocHeureFin != null && valeurBlocHeureFin !== '')
		vals['blocHeureFin'] = valeurBlocHeureFin;

	var valeurBlocPrixParMois = $formulaireValeurs.find('.valeurBlocPrixParMois').val();
	if(valeurBlocPrixParMois != null && valeurBlocPrixParMois !== '')
		vals['blocPrixParMois'] = valeurBlocPrixParMois;

	var valeurBlocLundi = $formulaireValeurs.find('.valeurBlocLundi').prop('checked');
	if(valeurBlocLundi != null && valeurBlocLundi !== '')
		vals['blocLundi'] = valeurBlocLundi;

	var valeurBlocMardi = $formulaireValeurs.find('.valeurBlocMardi').prop('checked');
	if(valeurBlocMardi != null && valeurBlocMardi !== '')
		vals['blocMardi'] = valeurBlocMardi;

	var valeurBlocMercredi = $formulaireValeurs.find('.valeurBlocMercredi').prop('checked');
	if(valeurBlocMercredi != null && valeurBlocMercredi !== '')
		vals['blocMercredi'] = valeurBlocMercredi;

	var valeurBlocJeudi = $formulaireValeurs.find('.valeurBlocJeudi').prop('checked');
	if(valeurBlocJeudi != null && valeurBlocJeudi !== '')
		vals['blocJeudi'] = valeurBlocJeudi;

	var valeurBlocVendredi = $formulaireValeurs.find('.valeurBlocVendredi').prop('checked');
	if(valeurBlocVendredi != null && valeurBlocVendredi !== '')
		vals['blocVendredi'] = valeurBlocVendredi;

	var valeurInscriptionCles = $formulaireValeurs.find('.valeurInscriptionCles').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['inscriptionCles'] = valeurInscriptionCles;

	var valeurBlocNomComplet = $formulaireValeurs.find('.valeurBlocNomComplet').val();
	if(valeurBlocNomComplet != null && valeurBlocNomComplet !== '')
		vals['blocNomComplet'] = valeurBlocNomComplet;

	$.ajax({
		url: '/api/bloc'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postBlocScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/bloc'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchBlocScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchBlocScolaireFiltres($formulaireFiltres);

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

	var removeBlocHeureDebut = $formulaireFiltres.find('.removeBlocHeureDebut').val() === 'true';
	var setBlocHeureDebut = removeBlocHeureDebut ? null : $formulaireValeurs.find('.setBlocHeureDebut').val();
	if(removeBlocHeureDebut || setBlocHeureDebut != null && setBlocHeureDebut !== '')
		vals['setBlocHeureDebut'] = setBlocHeureDebut;
	var addBlocHeureDebut = $formulaireValeurs.find('.addBlocHeureDebut').val();
	if(addBlocHeureDebut != null && addBlocHeureDebut !== '')
		vals['addBlocHeureDebut'] = addBlocHeureDebut;
	var removeBlocHeureDebut = $formulaireValeurs.find('.removeBlocHeureDebut').val();
	if(removeBlocHeureDebut != null && removeBlocHeureDebut !== '')
		vals['removeBlocHeureDebut'] = removeBlocHeureDebut;

	var removeBlocHeureFin = $formulaireFiltres.find('.removeBlocHeureFin').val() === 'true';
	var setBlocHeureFin = removeBlocHeureFin ? null : $formulaireValeurs.find('.setBlocHeureFin').val();
	if(removeBlocHeureFin || setBlocHeureFin != null && setBlocHeureFin !== '')
		vals['setBlocHeureFin'] = setBlocHeureFin;
	var addBlocHeureFin = $formulaireValeurs.find('.addBlocHeureFin').val();
	if(addBlocHeureFin != null && addBlocHeureFin !== '')
		vals['addBlocHeureFin'] = addBlocHeureFin;
	var removeBlocHeureFin = $formulaireValeurs.find('.removeBlocHeureFin').val();
	if(removeBlocHeureFin != null && removeBlocHeureFin !== '')
		vals['removeBlocHeureFin'] = removeBlocHeureFin;

	var removeBlocPrixParMois = $formulaireFiltres.find('.removeBlocPrixParMois').val() === 'true';
	var setBlocPrixParMois = removeBlocPrixParMois ? null : $formulaireValeurs.find('.setBlocPrixParMois').val();
	if(removeBlocPrixParMois || setBlocPrixParMois != null && setBlocPrixParMois !== '')
		vals['setBlocPrixParMois'] = setBlocPrixParMois;
	var addBlocPrixParMois = $formulaireValeurs.find('.addBlocPrixParMois').val();
	if(addBlocPrixParMois != null && addBlocPrixParMois !== '')
		vals['addBlocPrixParMois'] = addBlocPrixParMois;
	var removeBlocPrixParMois = $formulaireValeurs.find('.removeBlocPrixParMois').val();
	if(removeBlocPrixParMois != null && removeBlocPrixParMois !== '')
		vals['removeBlocPrixParMois'] = removeBlocPrixParMois;

	var removeBlocLundi = $formulaireFiltres.find('.removeBlocLundi').val() === 'true';
	var setBlocLundi = removeBlocLundi ? null : $formulaireValeurs.find('.setBlocLundi').prop('checked');
	if(removeBlocLundi || setBlocLundi != null && setBlocLundi !== '')
		vals['setBlocLundi'] = setBlocLundi;
	var addBlocLundi = $formulaireValeurs.find('.addBlocLundi').prop('checked');
	if(addBlocLundi != null && addBlocLundi !== '')
		vals['addBlocLundi'] = addBlocLundi;
	var removeBlocLundi = $formulaireValeurs.find('.removeBlocLundi').prop('checked');
	if(removeBlocLundi != null && removeBlocLundi !== '')
		vals['removeBlocLundi'] = removeBlocLundi;

	var removeBlocMardi = $formulaireFiltres.find('.removeBlocMardi').val() === 'true';
	var setBlocMardi = removeBlocMardi ? null : $formulaireValeurs.find('.setBlocMardi').prop('checked');
	if(removeBlocMardi || setBlocMardi != null && setBlocMardi !== '')
		vals['setBlocMardi'] = setBlocMardi;
	var addBlocMardi = $formulaireValeurs.find('.addBlocMardi').prop('checked');
	if(addBlocMardi != null && addBlocMardi !== '')
		vals['addBlocMardi'] = addBlocMardi;
	var removeBlocMardi = $formulaireValeurs.find('.removeBlocMardi').prop('checked');
	if(removeBlocMardi != null && removeBlocMardi !== '')
		vals['removeBlocMardi'] = removeBlocMardi;

	var removeBlocMercredi = $formulaireFiltres.find('.removeBlocMercredi').val() === 'true';
	var setBlocMercredi = removeBlocMercredi ? null : $formulaireValeurs.find('.setBlocMercredi').prop('checked');
	if(removeBlocMercredi || setBlocMercredi != null && setBlocMercredi !== '')
		vals['setBlocMercredi'] = setBlocMercredi;
	var addBlocMercredi = $formulaireValeurs.find('.addBlocMercredi').prop('checked');
	if(addBlocMercredi != null && addBlocMercredi !== '')
		vals['addBlocMercredi'] = addBlocMercredi;
	var removeBlocMercredi = $formulaireValeurs.find('.removeBlocMercredi').prop('checked');
	if(removeBlocMercredi != null && removeBlocMercredi !== '')
		vals['removeBlocMercredi'] = removeBlocMercredi;

	var removeBlocJeudi = $formulaireFiltres.find('.removeBlocJeudi').val() === 'true';
	var setBlocJeudi = removeBlocJeudi ? null : $formulaireValeurs.find('.setBlocJeudi').prop('checked');
	if(removeBlocJeudi || setBlocJeudi != null && setBlocJeudi !== '')
		vals['setBlocJeudi'] = setBlocJeudi;
	var addBlocJeudi = $formulaireValeurs.find('.addBlocJeudi').prop('checked');
	if(addBlocJeudi != null && addBlocJeudi !== '')
		vals['addBlocJeudi'] = addBlocJeudi;
	var removeBlocJeudi = $formulaireValeurs.find('.removeBlocJeudi').prop('checked');
	if(removeBlocJeudi != null && removeBlocJeudi !== '')
		vals['removeBlocJeudi'] = removeBlocJeudi;

	var removeBlocVendredi = $formulaireFiltres.find('.removeBlocVendredi').val() === 'true';
	var setBlocVendredi = removeBlocVendredi ? null : $formulaireValeurs.find('.setBlocVendredi').prop('checked');
	if(removeBlocVendredi || setBlocVendredi != null && setBlocVendredi !== '')
		vals['setBlocVendredi'] = setBlocVendredi;
	var addBlocVendredi = $formulaireValeurs.find('.addBlocVendredi').prop('checked');
	if(addBlocVendredi != null && addBlocVendredi !== '')
		vals['addBlocVendredi'] = addBlocVendredi;
	var removeBlocVendredi = $formulaireValeurs.find('.removeBlocVendredi').prop('checked');
	if(removeBlocVendredi != null && removeBlocVendredi !== '')
		vals['removeBlocVendredi'] = removeBlocVendredi;

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

	var removeBlocNomComplet = $formulaireFiltres.find('.removeBlocNomComplet').val() === 'true';
	var setBlocNomComplet = removeBlocNomComplet ? null : $formulaireValeurs.find('.setBlocNomComplet').val();
	if(removeBlocNomComplet || setBlocNomComplet != null && setBlocNomComplet !== '')
		vals['setBlocNomComplet'] = setBlocNomComplet;
	var addBlocNomComplet = $formulaireValeurs.find('.addBlocNomComplet').val();
	if(addBlocNomComplet != null && addBlocNomComplet !== '')
		vals['addBlocNomComplet'] = addBlocNomComplet;
	var removeBlocNomComplet = $formulaireValeurs.find('.removeBlocNomComplet').val();
	if(removeBlocNomComplet != null && removeBlocNomComplet !== '')
		vals['removeBlocNomComplet'] = removeBlocNomComplet;

	patchBlocScolaireVals(filtres, vals, success, error);
}

function patchBlocScolaireFiltres($formulaireFiltres) {
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

	var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
	if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
		filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

	var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
	if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
		filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

	var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
	if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
		filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

	var filtreBlocLundi = $formulaireFiltres.find('.valeurBlocLundi').prop('checked');
	if(filtreBlocLundi != null && filtreBlocLundi === true)
		filtres.push({ name: 'fq', value: 'blocLundi:' + filtreBlocLundi });

	var filtreBlocMardi = $formulaireFiltres.find('.valeurBlocMardi').prop('checked');
	if(filtreBlocMardi != null && filtreBlocMardi === true)
		filtres.push({ name: 'fq', value: 'blocMardi:' + filtreBlocMardi });

	var filtreBlocMercredi = $formulaireFiltres.find('.valeurBlocMercredi').prop('checked');
	if(filtreBlocMercredi != null && filtreBlocMercredi === true)
		filtres.push({ name: 'fq', value: 'blocMercredi:' + filtreBlocMercredi });

	var filtreBlocJeudi = $formulaireFiltres.find('.valeurBlocJeudi').prop('checked');
	if(filtreBlocJeudi != null && filtreBlocJeudi === true)
		filtres.push({ name: 'fq', value: 'blocJeudi:' + filtreBlocJeudi });

	var filtreBlocVendredi = $formulaireFiltres.find('.valeurBlocVendredi').prop('checked');
	if(filtreBlocVendredi != null && filtreBlocVendredi === true)
		filtres.push({ name: 'fq', value: 'blocVendredi:' + filtreBlocVendredi });

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

	var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
	if(filtreBlocCle != null && filtreBlocCle !== '')
		filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

	var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
	if(filtreEnfantCle != null && filtreEnfantCle !== '')
		filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

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

	var filtreAgeTri = $formulaireFiltres.find('.valeurAgeTri').val();
	if(filtreAgeTri != null && filtreAgeTri !== '')
		filtres.push({ name: 'fq', value: 'ageTri:' + filtreAgeTri });

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

	var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
	if(filtreAgeCle != null && filtreAgeCle !== '')
		filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

	var filtreEcoleNom = $formulaireFiltres.find('.valeurEcoleNom').val();
	if(filtreEcoleNom != null && filtreEcoleNom !== '')
		filtres.push({ name: 'fq', value: 'ecoleNom:' + filtreEcoleNom });

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

	var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
	if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
		filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });

	var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
	if(filtreAgeDebut != null && filtreAgeDebut !== '')
		filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

	var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
	if(filtreAgeFin != null && filtreAgeFin !== '')
		filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

	var filtreBlocDimanche = $formulaireFiltres.find('.valeurBlocDimanche').prop('checked');
	if(filtreBlocDimanche != null && filtreBlocDimanche === true)
		filtres.push({ name: 'fq', value: 'blocDimanche:' + filtreBlocDimanche });

	var filtreBlocSamedi = $formulaireFiltres.find('.valeurBlocSamedi').prop('checked');
	if(filtreBlocSamedi != null && filtreBlocSamedi === true)
		filtres.push({ name: 'fq', value: 'blocSamedi:' + filtreBlocSamedi });

	var filtreBlocPrixTotal = $formulaireFiltres.find('.valeurBlocPrixTotal').val();
	if(filtreBlocPrixTotal != null && filtreBlocPrixTotal !== '')
		filtres.push({ name: 'fq', value: 'blocPrixTotal:' + filtreBlocPrixTotal });

	var filtreBlocNomComplet = $formulaireFiltres.find('.valeurBlocNomComplet').val();
	if(filtreBlocNomComplet != null && filtreBlocNomComplet !== '')
		filtres.push({ name: 'fq', value: 'blocNomComplet:' + filtreBlocNomComplet });
	return filtres;
}

function patchBlocScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchBlocScolaireVals(filtres, vals, success, error);
}

function patchBlocScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/bloc?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getBlocScolaire(pk) {
	$.ajax({
		url: '/api/bloc/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteBlocScolaire(pk) {
	$.ajax({
		url: '/api/bloc/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

function rechercheBlocScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheBlocScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheBlocScolaireVals(filtres, success, error);
}

function rechercheBlocScolaireFiltres($formulaireFiltres) {
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

	var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
	if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
		filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

	var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
	if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
		filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

	var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
	if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
		filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

	var filtreBlocLundi = $formulaireFiltres.find('.valeurBlocLundi').prop('checked');
	if(filtreBlocLundi != null && filtreBlocLundi === true)
		filtres.push({ name: 'fq', value: 'blocLundi:' + filtreBlocLundi });

	var filtreBlocMardi = $formulaireFiltres.find('.valeurBlocMardi').prop('checked');
	if(filtreBlocMardi != null && filtreBlocMardi === true)
		filtres.push({ name: 'fq', value: 'blocMardi:' + filtreBlocMardi });

	var filtreBlocMercredi = $formulaireFiltres.find('.valeurBlocMercredi').prop('checked');
	if(filtreBlocMercredi != null && filtreBlocMercredi === true)
		filtres.push({ name: 'fq', value: 'blocMercredi:' + filtreBlocMercredi });

	var filtreBlocJeudi = $formulaireFiltres.find('.valeurBlocJeudi').prop('checked');
	if(filtreBlocJeudi != null && filtreBlocJeudi === true)
		filtres.push({ name: 'fq', value: 'blocJeudi:' + filtreBlocJeudi });

	var filtreBlocVendredi = $formulaireFiltres.find('.valeurBlocVendredi').prop('checked');
	if(filtreBlocVendredi != null && filtreBlocVendredi === true)
		filtres.push({ name: 'fq', value: 'blocVendredi:' + filtreBlocVendredi });

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

	var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
	if(filtreBlocCle != null && filtreBlocCle !== '')
		filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

	var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
	if(filtreEnfantCle != null && filtreEnfantCle !== '')
		filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

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

	var filtreAgeTri = $formulaireFiltres.find('.valeurAgeTri').val();
	if(filtreAgeTri != null && filtreAgeTri !== '')
		filtres.push({ name: 'fq', value: 'ageTri:' + filtreAgeTri });

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

	var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
	if(filtreAgeCle != null && filtreAgeCle !== '')
		filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

	var filtreEcoleNom = $formulaireFiltres.find('.valeurEcoleNom').val();
	if(filtreEcoleNom != null && filtreEcoleNom !== '')
		filtres.push({ name: 'fq', value: 'ecoleNom:' + filtreEcoleNom });

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

	var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
	if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
		filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });

	var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
	if(filtreAgeDebut != null && filtreAgeDebut !== '')
		filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

	var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
	if(filtreAgeFin != null && filtreAgeFin !== '')
		filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

	var filtreBlocDimanche = $formulaireFiltres.find('.valeurBlocDimanche').prop('checked');
	if(filtreBlocDimanche != null && filtreBlocDimanche === true)
		filtres.push({ name: 'fq', value: 'blocDimanche:' + filtreBlocDimanche });

	var filtreBlocSamedi = $formulaireFiltres.find('.valeurBlocSamedi').prop('checked');
	if(filtreBlocSamedi != null && filtreBlocSamedi === true)
		filtres.push({ name: 'fq', value: 'blocSamedi:' + filtreBlocSamedi });

	var filtreBlocPrixTotal = $formulaireFiltres.find('.valeurBlocPrixTotal').val();
	if(filtreBlocPrixTotal != null && filtreBlocPrixTotal !== '')
		filtres.push({ name: 'fq', value: 'blocPrixTotal:' + filtreBlocPrixTotal });

	var filtreBlocNomComplet = $formulaireFiltres.find('.valeurBlocNomComplet').val();
	if(filtreBlocNomComplet != null && filtreBlocNomComplet !== '')
		filtres.push({ name: 'fq', value: 'blocNomComplet:' + filtreBlocNomComplet });
	return filtres;
}

function rechercheBlocScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/bloc?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereBlocScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-bell w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['blocNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherBlocScolaireVals($formulaireFiltres, success, error);
}

function suggereBlocScolaireInscriptionCles($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#BlocScolaireForm :input[name="pk"]').val());
			var val = o['blocCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_blocCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_blocCles_" + o['pk'] + "'); patchBlocScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" }, function() { patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { ajouterLueur($input); }, function() { ajouterErreur($input); } ); } ); ");
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
	rechercheInscriptionScolaire($formulaireFiltres, success, error);
}

function websocketBlocScolaire() {
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {
		eventBus.registerHandler('websocketBlocScolaire', function (error, message) {
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
			var $headerSpan = $('<span>').attr('class', '').text('modifier blocs');
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

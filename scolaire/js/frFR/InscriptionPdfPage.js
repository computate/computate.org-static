
// POST //

async function postInscriptionScolaire($formulaireValeurs, success, error) {
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

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
		vals['inscriptionApprouve'] = valeurInscriptionApprouve;

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
		vals['inscriptionImmunisations'] = valeurInscriptionImmunisations;

	var valeurInscriptionNomGroupe = $formulaireValeurs.find('.valeurInscriptionNomGroupe').val();
	if(valeurInscriptionNomGroupe != null && valeurInscriptionNomGroupe !== '')
		vals['inscriptionNomGroupe'] = valeurInscriptionNomGroupe;

	var valeurInscriptionPaimentComplet = $formulaireValeurs.find('.valeurInscriptionPaimentComplet').prop('checked');
	if(valeurInscriptionPaimentComplet != null && valeurInscriptionPaimentComplet !== '')
		vals['inscriptionPaimentComplet'] = valeurInscriptionPaimentComplet;

	var valeurInscriptionPaimentChaqueMois = $formulaireValeurs.find('.valeurInscriptionPaimentChaqueMois').prop('checked');
	if(valeurInscriptionPaimentChaqueMois != null && valeurInscriptionPaimentChaqueMois !== '')
		vals['inscriptionPaimentChaqueMois'] = valeurInscriptionPaimentChaqueMois;

	var valeurFamilleMarie = $formulaireValeurs.find('.valeurFamilleMarie').prop('checked');
	if(valeurFamilleMarie != null && valeurFamilleMarie !== '')
		vals['familleMarie'] = valeurFamilleMarie;

	var valeurFamilleSepare = $formulaireValeurs.find('.valeurFamilleSepare').prop('checked');
	if(valeurFamilleSepare != null && valeurFamilleSepare !== '')
		vals['familleSepare'] = valeurFamilleSepare;

	var valeurFamilleDivorce = $formulaireValeurs.find('.valeurFamilleDivorce').prop('checked');
	if(valeurFamilleDivorce != null && valeurFamilleDivorce !== '')
		vals['familleDivorce'] = valeurFamilleDivorce;

	var valeurFamilleAddresse = $formulaireValeurs.find('.valeurFamilleAddresse').val();
	if(valeurFamilleAddresse != null && valeurFamilleAddresse !== '')
		vals['familleAddresse'] = valeurFamilleAddresse;

	var valeurInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(valeurInscriptionConsiderationsSpeciales != null && valeurInscriptionConsiderationsSpeciales !== '')
		vals['inscriptionConsiderationsSpeciales'] = valeurInscriptionConsiderationsSpeciales;

	var valeurFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.valeurFamilleCommentVousConnaissezEcole').val();
	if(valeurFamilleCommentVousConnaissezEcole != null && valeurFamilleCommentVousConnaissezEcole !== '')
		vals['familleCommentVousConnaissezEcole'] = valeurFamilleCommentVousConnaissezEcole;

	var valeurBlocCles = $formulaireValeurs.find('.valeurBlocCles').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['blocCles'] = valeurBlocCles;

	var valeurEnfantCle = $formulaireValeurs.find('.valeurEnfantCle').val();
	if(valeurEnfantCle != null && valeurEnfantCle !== '')
		vals['enfantCle'] = valeurEnfantCle;

	var valeurMereCles = $formulaireValeurs.find('.valeurMereCles').val();
	if(valeurMereCles != null && valeurMereCles !== '')
		vals['mereCles'] = valeurMereCles;

	var valeurPereCles = $formulaireValeurs.find('.valeurPereCles').val();
	if(valeurPereCles != null && valeurPereCles !== '')
		vals['pereCles'] = valeurPereCles;

	var valeurGardienCles = $formulaireValeurs.find('.valeurGardienCles').val();
	if(valeurGardienCles != null && valeurGardienCles !== '')
		vals['gardienCles'] = valeurGardienCles;

	var valeurPaiementCles = $formulaireValeurs.find('.valeurPaiementCles').val();
	if(valeurPaiementCles != null && valeurPaiementCles !== '')
		vals['paiementCles'] = valeurPaiementCles;

	var valeurFormInscriptionCle = $formulaireValeurs.find('.valeurFormInscriptionCle').val();
	if(valeurFormInscriptionCle != null && valeurFormInscriptionCle !== '')
		vals['formInscriptionCle'] = valeurFormInscriptionCle;

	var valeurInscriptionNomComplet = $formulaireValeurs.find('.valeurInscriptionNomComplet').val();
	if(valeurInscriptionNomComplet != null && valeurInscriptionNomComplet !== '')
		vals['inscriptionNomComplet'] = valeurInscriptionNomComplet;

	$.ajax({
		url: '/api/inscription'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postInscriptionScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/inscription'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchInscriptionScolaire($formulaireFiltres, $formulaireValeurs, success, error) {
	var filtres = patchInscriptionScolaireFiltres($formulaireFiltres);

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

	var removeInscriptionApprouve = $formulaireFiltres.find('.removeInscriptionApprouve').val() === 'true';
	var setInscriptionApprouve = removeInscriptionApprouve ? null : $formulaireValeurs.find('.setInscriptionApprouve').prop('checked');
	if(removeInscriptionApprouve || setInscriptionApprouve != null && setInscriptionApprouve !== '')
		vals['setInscriptionApprouve'] = setInscriptionApprouve;
	var addInscriptionApprouve = $formulaireValeurs.find('.addInscriptionApprouve').prop('checked');
	if(addInscriptionApprouve != null && addInscriptionApprouve !== '')
		vals['addInscriptionApprouve'] = addInscriptionApprouve;
	var removeInscriptionApprouve = $formulaireValeurs.find('.removeInscriptionApprouve').prop('checked');
	if(removeInscriptionApprouve != null && removeInscriptionApprouve !== '')
		vals['removeInscriptionApprouve'] = removeInscriptionApprouve;

	var removeInscriptionImmunisations = $formulaireFiltres.find('.removeInscriptionImmunisations').val() === 'true';
	var setInscriptionImmunisations = removeInscriptionImmunisations ? null : $formulaireValeurs.find('.setInscriptionImmunisations').prop('checked');
	if(removeInscriptionImmunisations || setInscriptionImmunisations != null && setInscriptionImmunisations !== '')
		vals['setInscriptionImmunisations'] = setInscriptionImmunisations;
	var addInscriptionImmunisations = $formulaireValeurs.find('.addInscriptionImmunisations').prop('checked');
	if(addInscriptionImmunisations != null && addInscriptionImmunisations !== '')
		vals['addInscriptionImmunisations'] = addInscriptionImmunisations;
	var removeInscriptionImmunisations = $formulaireValeurs.find('.removeInscriptionImmunisations').prop('checked');
	if(removeInscriptionImmunisations != null && removeInscriptionImmunisations !== '')
		vals['removeInscriptionImmunisations'] = removeInscriptionImmunisations;

	var removeInscriptionNomGroupe = $formulaireFiltres.find('.removeInscriptionNomGroupe').val() === 'true';
	var setInscriptionNomGroupe = removeInscriptionNomGroupe ? null : $formulaireValeurs.find('.setInscriptionNomGroupe').val();
	if(removeInscriptionNomGroupe || setInscriptionNomGroupe != null && setInscriptionNomGroupe !== '')
		vals['setInscriptionNomGroupe'] = setInscriptionNomGroupe;
	var addInscriptionNomGroupe = $formulaireValeurs.find('.addInscriptionNomGroupe').val();
	if(addInscriptionNomGroupe != null && addInscriptionNomGroupe !== '')
		vals['addInscriptionNomGroupe'] = addInscriptionNomGroupe;
	var removeInscriptionNomGroupe = $formulaireValeurs.find('.removeInscriptionNomGroupe').val();
	if(removeInscriptionNomGroupe != null && removeInscriptionNomGroupe !== '')
		vals['removeInscriptionNomGroupe'] = removeInscriptionNomGroupe;

	var removeInscriptionPaimentComplet = $formulaireFiltres.find('.removeInscriptionPaimentComplet').val() === 'true';
	var setInscriptionPaimentComplet = removeInscriptionPaimentComplet ? null : $formulaireValeurs.find('.setInscriptionPaimentComplet').prop('checked');
	if(removeInscriptionPaimentComplet || setInscriptionPaimentComplet != null && setInscriptionPaimentComplet !== '')
		vals['setInscriptionPaimentComplet'] = setInscriptionPaimentComplet;
	var addInscriptionPaimentComplet = $formulaireValeurs.find('.addInscriptionPaimentComplet').prop('checked');
	if(addInscriptionPaimentComplet != null && addInscriptionPaimentComplet !== '')
		vals['addInscriptionPaimentComplet'] = addInscriptionPaimentComplet;
	var removeInscriptionPaimentComplet = $formulaireValeurs.find('.removeInscriptionPaimentComplet').prop('checked');
	if(removeInscriptionPaimentComplet != null && removeInscriptionPaimentComplet !== '')
		vals['removeInscriptionPaimentComplet'] = removeInscriptionPaimentComplet;

	var removeInscriptionPaimentChaqueMois = $formulaireFiltres.find('.removeInscriptionPaimentChaqueMois').val() === 'true';
	var setInscriptionPaimentChaqueMois = removeInscriptionPaimentChaqueMois ? null : $formulaireValeurs.find('.setInscriptionPaimentChaqueMois').prop('checked');
	if(removeInscriptionPaimentChaqueMois || setInscriptionPaimentChaqueMois != null && setInscriptionPaimentChaqueMois !== '')
		vals['setInscriptionPaimentChaqueMois'] = setInscriptionPaimentChaqueMois;
	var addInscriptionPaimentChaqueMois = $formulaireValeurs.find('.addInscriptionPaimentChaqueMois').prop('checked');
	if(addInscriptionPaimentChaqueMois != null && addInscriptionPaimentChaqueMois !== '')
		vals['addInscriptionPaimentChaqueMois'] = addInscriptionPaimentChaqueMois;
	var removeInscriptionPaimentChaqueMois = $formulaireValeurs.find('.removeInscriptionPaimentChaqueMois').prop('checked');
	if(removeInscriptionPaimentChaqueMois != null && removeInscriptionPaimentChaqueMois !== '')
		vals['removeInscriptionPaimentChaqueMois'] = removeInscriptionPaimentChaqueMois;

	var removeFamilleMarie = $formulaireFiltres.find('.removeFamilleMarie').val() === 'true';
	var setFamilleMarie = removeFamilleMarie ? null : $formulaireValeurs.find('.setFamilleMarie').prop('checked');
	if(removeFamilleMarie || setFamilleMarie != null && setFamilleMarie !== '')
		vals['setFamilleMarie'] = setFamilleMarie;
	var addFamilleMarie = $formulaireValeurs.find('.addFamilleMarie').prop('checked');
	if(addFamilleMarie != null && addFamilleMarie !== '')
		vals['addFamilleMarie'] = addFamilleMarie;
	var removeFamilleMarie = $formulaireValeurs.find('.removeFamilleMarie').prop('checked');
	if(removeFamilleMarie != null && removeFamilleMarie !== '')
		vals['removeFamilleMarie'] = removeFamilleMarie;

	var removeFamilleSepare = $formulaireFiltres.find('.removeFamilleSepare').val() === 'true';
	var setFamilleSepare = removeFamilleSepare ? null : $formulaireValeurs.find('.setFamilleSepare').prop('checked');
	if(removeFamilleSepare || setFamilleSepare != null && setFamilleSepare !== '')
		vals['setFamilleSepare'] = setFamilleSepare;
	var addFamilleSepare = $formulaireValeurs.find('.addFamilleSepare').prop('checked');
	if(addFamilleSepare != null && addFamilleSepare !== '')
		vals['addFamilleSepare'] = addFamilleSepare;
	var removeFamilleSepare = $formulaireValeurs.find('.removeFamilleSepare').prop('checked');
	if(removeFamilleSepare != null && removeFamilleSepare !== '')
		vals['removeFamilleSepare'] = removeFamilleSepare;

	var removeFamilleDivorce = $formulaireFiltres.find('.removeFamilleDivorce').val() === 'true';
	var setFamilleDivorce = removeFamilleDivorce ? null : $formulaireValeurs.find('.setFamilleDivorce').prop('checked');
	if(removeFamilleDivorce || setFamilleDivorce != null && setFamilleDivorce !== '')
		vals['setFamilleDivorce'] = setFamilleDivorce;
	var addFamilleDivorce = $formulaireValeurs.find('.addFamilleDivorce').prop('checked');
	if(addFamilleDivorce != null && addFamilleDivorce !== '')
		vals['addFamilleDivorce'] = addFamilleDivorce;
	var removeFamilleDivorce = $formulaireValeurs.find('.removeFamilleDivorce').prop('checked');
	if(removeFamilleDivorce != null && removeFamilleDivorce !== '')
		vals['removeFamilleDivorce'] = removeFamilleDivorce;

	var removeFamilleAddresse = $formulaireFiltres.find('.removeFamilleAddresse').val() === 'true';
	var setFamilleAddresse = removeFamilleAddresse ? null : $formulaireValeurs.find('.setFamilleAddresse').val();
	if(removeFamilleAddresse || setFamilleAddresse != null && setFamilleAddresse !== '')
		vals['setFamilleAddresse'] = setFamilleAddresse;
	var addFamilleAddresse = $formulaireValeurs.find('.addFamilleAddresse').val();
	if(addFamilleAddresse != null && addFamilleAddresse !== '')
		vals['addFamilleAddresse'] = addFamilleAddresse;
	var removeFamilleAddresse = $formulaireValeurs.find('.removeFamilleAddresse').val();
	if(removeFamilleAddresse != null && removeFamilleAddresse !== '')
		vals['removeFamilleAddresse'] = removeFamilleAddresse;

	var removeInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.removeInscriptionConsiderationsSpeciales').val() === 'true';
	var setInscriptionConsiderationsSpeciales = removeInscriptionConsiderationsSpeciales ? null : $formulaireValeurs.find('.setInscriptionConsiderationsSpeciales').val();
	if(removeInscriptionConsiderationsSpeciales || setInscriptionConsiderationsSpeciales != null && setInscriptionConsiderationsSpeciales !== '')
		vals['setInscriptionConsiderationsSpeciales'] = setInscriptionConsiderationsSpeciales;
	var addInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.addInscriptionConsiderationsSpeciales').val();
	if(addInscriptionConsiderationsSpeciales != null && addInscriptionConsiderationsSpeciales !== '')
		vals['addInscriptionConsiderationsSpeciales'] = addInscriptionConsiderationsSpeciales;
	var removeInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.removeInscriptionConsiderationsSpeciales').val();
	if(removeInscriptionConsiderationsSpeciales != null && removeInscriptionConsiderationsSpeciales !== '')
		vals['removeInscriptionConsiderationsSpeciales'] = removeInscriptionConsiderationsSpeciales;

	var removeFamilleCommentVousConnaissezEcole = $formulaireFiltres.find('.removeFamilleCommentVousConnaissezEcole').val() === 'true';
	var setFamilleCommentVousConnaissezEcole = removeFamilleCommentVousConnaissezEcole ? null : $formulaireValeurs.find('.setFamilleCommentVousConnaissezEcole').val();
	if(removeFamilleCommentVousConnaissezEcole || setFamilleCommentVousConnaissezEcole != null && setFamilleCommentVousConnaissezEcole !== '')
		vals['setFamilleCommentVousConnaissezEcole'] = setFamilleCommentVousConnaissezEcole;
	var addFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.addFamilleCommentVousConnaissezEcole').val();
	if(addFamilleCommentVousConnaissezEcole != null && addFamilleCommentVousConnaissezEcole !== '')
		vals['addFamilleCommentVousConnaissezEcole'] = addFamilleCommentVousConnaissezEcole;
	var removeFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.removeFamilleCommentVousConnaissezEcole').val();
	if(removeFamilleCommentVousConnaissezEcole != null && removeFamilleCommentVousConnaissezEcole !== '')
		vals['removeFamilleCommentVousConnaissezEcole'] = removeFamilleCommentVousConnaissezEcole;

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

	var removeEnfantCle = $formulaireFiltres.find('.removeEnfantCle').val() === 'true';
	var setEnfantCle = removeEnfantCle ? null : $formulaireValeurs.find('.setEnfantCle').val();
	if(removeEnfantCle || setEnfantCle != null && setEnfantCle !== '')
		vals['setEnfantCle'] = setEnfantCle;
	var addEnfantCle = $formulaireValeurs.find('.addEnfantCle').val();
	if(addEnfantCle != null && addEnfantCle !== '')
		vals['addEnfantCle'] = addEnfantCle;
	var removeEnfantCle = $formulaireValeurs.find('.removeEnfantCle').val();
	if(removeEnfantCle != null && removeEnfantCle !== '')
		vals['removeEnfantCle'] = removeEnfantCle;

	var removeMereCles = $formulaireFiltres.find('.removeMereCles').val() === 'true';
	var setMereCles = removeMereCles ? null : $formulaireValeurs.find('.setMereCles').val();
	if(removeMereCles || setMereCles != null && setMereCles !== '')
		vals['setMereCles'] = setMereCles;
	var addMereCles = $formulaireValeurs.find('.addMereCles').val();
	if(addMereCles != null && addMereCles !== '')
		vals['addMereCles'] = addMereCles;
	var removeMereCles = $formulaireValeurs.find('.removeMereCles').val();
	if(removeMereCles != null && removeMereCles !== '')
		vals['removeMereCles'] = removeMereCles;

	var removePereCles = $formulaireFiltres.find('.removePereCles').val() === 'true';
	var setPereCles = removePereCles ? null : $formulaireValeurs.find('.setPereCles').val();
	if(removePereCles || setPereCles != null && setPereCles !== '')
		vals['setPereCles'] = setPereCles;
	var addPereCles = $formulaireValeurs.find('.addPereCles').val();
	if(addPereCles != null && addPereCles !== '')
		vals['addPereCles'] = addPereCles;
	var removePereCles = $formulaireValeurs.find('.removePereCles').val();
	if(removePereCles != null && removePereCles !== '')
		vals['removePereCles'] = removePereCles;

	var removeGardienCles = $formulaireFiltres.find('.removeGardienCles').val() === 'true';
	var setGardienCles = removeGardienCles ? null : $formulaireValeurs.find('.setGardienCles').val();
	if(removeGardienCles || setGardienCles != null && setGardienCles !== '')
		vals['setGardienCles'] = setGardienCles;
	var addGardienCles = $formulaireValeurs.find('.addGardienCles').val();
	if(addGardienCles != null && addGardienCles !== '')
		vals['addGardienCles'] = addGardienCles;
	var removeGardienCles = $formulaireValeurs.find('.removeGardienCles').val();
	if(removeGardienCles != null && removeGardienCles !== '')
		vals['removeGardienCles'] = removeGardienCles;

	var removePaiementCles = $formulaireFiltres.find('.removePaiementCles').val() === 'true';
	var setPaiementCles = removePaiementCles ? null : $formulaireValeurs.find('.setPaiementCles').val();
	if(removePaiementCles || setPaiementCles != null && setPaiementCles !== '')
		vals['setPaiementCles'] = setPaiementCles;
	var addPaiementCles = $formulaireValeurs.find('.addPaiementCles').val();
	if(addPaiementCles != null && addPaiementCles !== '')
		vals['addPaiementCles'] = addPaiementCles;
	var removePaiementCles = $formulaireValeurs.find('.removePaiementCles').val();
	if(removePaiementCles != null && removePaiementCles !== '')
		vals['removePaiementCles'] = removePaiementCles;

	var removeFormInscriptionCle = $formulaireFiltres.find('.removeFormInscriptionCle').val() === 'true';
	var setFormInscriptionCle = removeFormInscriptionCle ? null : $formulaireValeurs.find('.setFormInscriptionCle').val();
	if(removeFormInscriptionCle || setFormInscriptionCle != null && setFormInscriptionCle !== '')
		vals['setFormInscriptionCle'] = setFormInscriptionCle;
	var addFormInscriptionCle = $formulaireValeurs.find('.addFormInscriptionCle').val();
	if(addFormInscriptionCle != null && addFormInscriptionCle !== '')
		vals['addFormInscriptionCle'] = addFormInscriptionCle;
	var removeFormInscriptionCle = $formulaireValeurs.find('.removeFormInscriptionCle').val();
	if(removeFormInscriptionCle != null && removeFormInscriptionCle !== '')
		vals['removeFormInscriptionCle'] = removeFormInscriptionCle;

	var removeInscriptionNomComplet = $formulaireFiltres.find('.removeInscriptionNomComplet').val() === 'true';
	var setInscriptionNomComplet = removeInscriptionNomComplet ? null : $formulaireValeurs.find('.setInscriptionNomComplet').val();
	if(removeInscriptionNomComplet || setInscriptionNomComplet != null && setInscriptionNomComplet !== '')
		vals['setInscriptionNomComplet'] = setInscriptionNomComplet;
	var addInscriptionNomComplet = $formulaireValeurs.find('.addInscriptionNomComplet').val();
	if(addInscriptionNomComplet != null && addInscriptionNomComplet !== '')
		vals['addInscriptionNomComplet'] = addInscriptionNomComplet;
	var removeInscriptionNomComplet = $formulaireValeurs.find('.removeInscriptionNomComplet').val();
	if(removeInscriptionNomComplet != null && removeInscriptionNomComplet !== '')
		vals['removeInscriptionNomComplet'] = removeInscriptionNomComplet;

	patchInscriptionScolaireVals(filtres, vals, success, error);
}

function patchInscriptionScolaireFiltres($formulaireFiltres) {
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

	var filtreInscriptionApprouve = $formulaireFiltres.find('.valeurInscriptionApprouve').prop('checked');
	if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
		filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

	var filtreInscriptionImmunisations = $formulaireFiltres.find('.valeurInscriptionImmunisations').prop('checked');
	if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
		filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

	var filtreInscriptionNomGroupe = $formulaireFiltres.find('.valeurInscriptionNomGroupe').val();
	if(filtreInscriptionNomGroupe != null && filtreInscriptionNomGroupe !== '')
		filtres.push({ name: 'fq', value: 'inscriptionNomGroupe:' + filtreInscriptionNomGroupe });

	var filtreInscriptionPaimentComplet = $formulaireFiltres.find('.valeurInscriptionPaimentComplet').prop('checked');
	if(filtreInscriptionPaimentComplet != null && filtreInscriptionPaimentComplet === true)
		filtres.push({ name: 'fq', value: 'inscriptionPaimentComplet:' + filtreInscriptionPaimentComplet });

	var filtreInscriptionPaimentChaqueMois = $formulaireFiltres.find('.valeurInscriptionPaimentChaqueMois').prop('checked');
	if(filtreInscriptionPaimentChaqueMois != null && filtreInscriptionPaimentChaqueMois === true)
		filtres.push({ name: 'fq', value: 'inscriptionPaimentChaqueMois:' + filtreInscriptionPaimentChaqueMois });

	var filtreFamilleMarie = $formulaireFiltres.find('.valeurFamilleMarie').prop('checked');
	if(filtreFamilleMarie != null && filtreFamilleMarie === true)
		filtres.push({ name: 'fq', value: 'familleMarie:' + filtreFamilleMarie });

	var filtreFamilleSepare = $formulaireFiltres.find('.valeurFamilleSepare').prop('checked');
	if(filtreFamilleSepare != null && filtreFamilleSepare === true)
		filtres.push({ name: 'fq', value: 'familleSepare:' + filtreFamilleSepare });

	var filtreFamilleDivorce = $formulaireFiltres.find('.valeurFamilleDivorce').prop('checked');
	if(filtreFamilleDivorce != null && filtreFamilleDivorce === true)
		filtres.push({ name: 'fq', value: 'familleDivorce:' + filtreFamilleDivorce });

	var filtreFamilleAddresse = $formulaireFiltres.find('.valeurFamilleAddresse').val();
	if(filtreFamilleAddresse != null && filtreFamilleAddresse !== '')
		filtres.push({ name: 'fq', value: 'familleAddresse:' + filtreFamilleAddresse });

	var filtreInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(filtreInscriptionConsiderationsSpeciales != null && filtreInscriptionConsiderationsSpeciales !== '')
		filtres.push({ name: 'fq', value: 'inscriptionConsiderationsSpeciales:' + filtreInscriptionConsiderationsSpeciales });

	var filtreFamilleCommentVousConnaissezEcole = $formulaireFiltres.find('.valeurFamilleCommentVousConnaissezEcole').val();
	if(filtreFamilleCommentVousConnaissezEcole != null && filtreFamilleCommentVousConnaissezEcole !== '')
		filtres.push({ name: 'fq', value: 'familleCommentVousConnaissezEcole:' + filtreFamilleCommentVousConnaissezEcole });

	var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
	if(filtreBlocCles != null && filtreBlocCles !== '')
		filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

	var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
	if(filtreEnfantCle != null && filtreEnfantCle !== '')
		filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

	var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
	if(filtreMereCles != null && filtreMereCles !== '')
		filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

	var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
	if(filtrePereCles != null && filtrePereCles !== '')
		filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

	var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
	if(filtreGardienCles != null && filtreGardienCles !== '')
		filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

	var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
	if(filtrePaiementCles != null && filtrePaiementCles !== '')
		filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

	var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
	if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
		filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

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

	var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
	if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

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

	var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
	if(filtreBlocCle != null && filtreBlocCle !== '')
		filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

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

	var filtreEnfantNomComplet = $formulaireFiltres.find('.valeurEnfantNomComplet').val();
	if(filtreEnfantNomComplet != null && filtreEnfantNomComplet !== '')
		filtres.push({ name: 'fq', value: 'enfantNomComplet:' + filtreEnfantNomComplet });

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

	var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
	if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
		filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

	var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
	if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
		filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

	var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
	if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
		filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

	var filtreBlocDimanche = $formulaireFiltres.find('.valeurBlocDimanche').prop('checked');
	if(filtreBlocDimanche != null && filtreBlocDimanche === true)
		filtres.push({ name: 'fq', value: 'blocDimanche:' + filtreBlocDimanche });

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

	var filtreBlocSamedi = $formulaireFiltres.find('.valeurBlocSamedi').prop('checked');
	if(filtreBlocSamedi != null && filtreBlocSamedi === true)
		filtres.push({ name: 'fq', value: 'blocSamedi:' + filtreBlocSamedi });

	var filtreBlocPrixTotal = $formulaireFiltres.find('.valeurBlocPrixTotal').val();
	if(filtreBlocPrixTotal != null && filtreBlocPrixTotal !== '')
		filtres.push({ name: 'fq', value: 'blocPrixTotal:' + filtreBlocPrixTotal });

	var filtreInscriptionNomComplet = $formulaireFiltres.find('.valeurInscriptionNomComplet').val();
	if(filtreInscriptionNomComplet != null && filtreInscriptionNomComplet !== '')
		filtres.push({ name: 'fq', value: 'inscriptionNomComplet:' + filtreInscriptionNomComplet });
	return filtres;
}

function patchInscriptionScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchInscriptionScolaireVals(filtres, vals, success, error);
}

function patchInscriptionScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getInscriptionScolaire(pk) {
	$.ajax({
		url: '/api/inscription/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

async function deleteInscriptionScolaire(pk) {
	$.ajax({
		url: '/api/inscription/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheInscriptionScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheInscriptionScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheInscriptionScolaireVals(filtres, success, error);
}

function rechercheInscriptionScolaireFiltres($formulaireFiltres) {
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

	var filtreInscriptionApprouve = $formulaireFiltres.find('.valeurInscriptionApprouve').prop('checked');
	if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
		filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

	var filtreInscriptionImmunisations = $formulaireFiltres.find('.valeurInscriptionImmunisations').prop('checked');
	if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
		filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

	var filtreInscriptionNomGroupe = $formulaireFiltres.find('.valeurInscriptionNomGroupe').val();
	if(filtreInscriptionNomGroupe != null && filtreInscriptionNomGroupe !== '')
		filtres.push({ name: 'fq', value: 'inscriptionNomGroupe:' + filtreInscriptionNomGroupe });

	var filtreInscriptionPaimentComplet = $formulaireFiltres.find('.valeurInscriptionPaimentComplet').prop('checked');
	if(filtreInscriptionPaimentComplet != null && filtreInscriptionPaimentComplet === true)
		filtres.push({ name: 'fq', value: 'inscriptionPaimentComplet:' + filtreInscriptionPaimentComplet });

	var filtreInscriptionPaimentChaqueMois = $formulaireFiltres.find('.valeurInscriptionPaimentChaqueMois').prop('checked');
	if(filtreInscriptionPaimentChaqueMois != null && filtreInscriptionPaimentChaqueMois === true)
		filtres.push({ name: 'fq', value: 'inscriptionPaimentChaqueMois:' + filtreInscriptionPaimentChaqueMois });

	var filtreFamilleMarie = $formulaireFiltres.find('.valeurFamilleMarie').prop('checked');
	if(filtreFamilleMarie != null && filtreFamilleMarie === true)
		filtres.push({ name: 'fq', value: 'familleMarie:' + filtreFamilleMarie });

	var filtreFamilleSepare = $formulaireFiltres.find('.valeurFamilleSepare').prop('checked');
	if(filtreFamilleSepare != null && filtreFamilleSepare === true)
		filtres.push({ name: 'fq', value: 'familleSepare:' + filtreFamilleSepare });

	var filtreFamilleDivorce = $formulaireFiltres.find('.valeurFamilleDivorce').prop('checked');
	if(filtreFamilleDivorce != null && filtreFamilleDivorce === true)
		filtres.push({ name: 'fq', value: 'familleDivorce:' + filtreFamilleDivorce });

	var filtreFamilleAddresse = $formulaireFiltres.find('.valeurFamilleAddresse').val();
	if(filtreFamilleAddresse != null && filtreFamilleAddresse !== '')
		filtres.push({ name: 'fq', value: 'familleAddresse:' + filtreFamilleAddresse });

	var filtreInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(filtreInscriptionConsiderationsSpeciales != null && filtreInscriptionConsiderationsSpeciales !== '')
		filtres.push({ name: 'fq', value: 'inscriptionConsiderationsSpeciales:' + filtreInscriptionConsiderationsSpeciales });

	var filtreFamilleCommentVousConnaissezEcole = $formulaireFiltres.find('.valeurFamilleCommentVousConnaissezEcole').val();
	if(filtreFamilleCommentVousConnaissezEcole != null && filtreFamilleCommentVousConnaissezEcole !== '')
		filtres.push({ name: 'fq', value: 'familleCommentVousConnaissezEcole:' + filtreFamilleCommentVousConnaissezEcole });

	var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
	if(filtreBlocCles != null && filtreBlocCles !== '')
		filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

	var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
	if(filtreEnfantCle != null && filtreEnfantCle !== '')
		filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

	var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
	if(filtreMereCles != null && filtreMereCles !== '')
		filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

	var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
	if(filtrePereCles != null && filtrePereCles !== '')
		filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

	var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
	if(filtreGardienCles != null && filtreGardienCles !== '')
		filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

	var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
	if(filtrePaiementCles != null && filtrePaiementCles !== '')
		filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

	var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
	if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
		filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

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

	var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
	if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
		filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

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

	var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
	if(filtreBlocCle != null && filtreBlocCle !== '')
		filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

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

	var filtreEnfantNomComplet = $formulaireFiltres.find('.valeurEnfantNomComplet').val();
	if(filtreEnfantNomComplet != null && filtreEnfantNomComplet !== '')
		filtres.push({ name: 'fq', value: 'enfantNomComplet:' + filtreEnfantNomComplet });

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

	var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
	if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
		filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

	var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
	if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
		filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

	var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
	if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
		filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

	var filtreBlocDimanche = $formulaireFiltres.find('.valeurBlocDimanche').prop('checked');
	if(filtreBlocDimanche != null && filtreBlocDimanche === true)
		filtres.push({ name: 'fq', value: 'blocDimanche:' + filtreBlocDimanche });

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

	var filtreBlocSamedi = $formulaireFiltres.find('.valeurBlocSamedi').prop('checked');
	if(filtreBlocSamedi != null && filtreBlocSamedi === true)
		filtres.push({ name: 'fq', value: 'blocSamedi:' + filtreBlocSamedi });

	var filtreBlocPrixTotal = $formulaireFiltres.find('.valeurBlocPrixTotal').val();
	if(filtreBlocPrixTotal != null && filtreBlocPrixTotal !== '')
		filtres.push({ name: 'fq', value: 'blocPrixTotal:' + filtreBlocPrixTotal });

	var filtreInscriptionNomComplet = $formulaireFiltres.find('.valeurInscriptionNomComplet').val();
	if(filtreInscriptionNomComplet != null && filtreInscriptionNomComplet !== '')
		filtres.push({ name: 'fq', value: 'inscriptionNomComplet:' + filtreInscriptionNomComplet });
	return filtres;
}

function rechercheInscriptionScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereInscriptionScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherInscriptionScolaireVals($formulaireFiltres, success, error);
}

function suggereInscriptionScolaireBlocCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['blocNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blocCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_blocCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlocCles']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheBlocScolaireVals(filtres, success, error);
}

function suggereInscriptionScolaireEnfantCle(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-child w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['enfantNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enfantCle_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_enfantCle_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'EnfantCle']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheEnfantScolaireVals(filtres, success, error);
}

function suggereInscriptionScolaireMereCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-female w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['mereNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_mereCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_mereCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'MereCles']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheMereScolaireVals(filtres, success, error);
}

function suggereInscriptionScolairePereCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-male w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['pereNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_pereCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_pereCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PereCles']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePereScolaireVals(filtres, success, error);
}

function suggereInscriptionScolaireGardienCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-phone w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['gardienNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_gardienCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_gardienCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'GardienCles']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheGardienScolaireVals(filtres, success, error);
}

function suggereInscriptionScolairePaiementCles(filtres, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-search-dollar w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['paiementNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_paiementCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_paiementCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PaiementCles']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'enleverLueur($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePaiementScolaireVals(filtres, success, error);
}

async function websocketInscriptionScolaire(success) {
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {

		eventBus.registerHandler('websocketInscriptionScolaire', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-purple ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'fas fa-edit w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modifier inscriptions');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-purple ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		eventBus.registerHandler('websocketBlocScolaire', function (error, message) {
			$('#Page_blocCles').trigger('oninput');
		});

		eventBus.registerHandler('websocketEnfantScolaire', function (error, message) {
			$('#Page_enfantCle').trigger('oninput');
		});

		eventBus.registerHandler('websocketMereScolaire', function (error, message) {
			$('#Page_mereCles').trigger('oninput');
		});

		eventBus.registerHandler('websocketPereScolaire', function (error, message) {
			$('#Page_pereCles').trigger('oninput');
		});

		eventBus.registerHandler('websocketGardienScolaire', function (error, message) {
			$('#Page_gardienCles').trigger('oninput');
		});

		eventBus.registerHandler('websocketPaiementScolaire', function (error, message) {
			$('#Page_paiementCles').trigger('oninput');
		});
	}
}

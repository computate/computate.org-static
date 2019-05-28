
// PATCH //

/**
 * Modifier un ou plusiers site users sans valuers qui change, 
 * ou changer des valeurs pour un ou plusiers the site user. 
 * @param params: [ "q=*:*", "fq=pk:1", "sort=pk asc", "rows=1", "fl=pk" ]
 *        Une liste des opérations de recherche sur des site users 
 *        pour rechercher "q=*:*", filtrer "fq=pk:1", trier "sort=pk desc", 
 *        limiter les résultats "rows=1", ou limiter les valeurs "fl=pk". 
 * @param valeurs Noms des champs et valeurs à changer selon les filtres fq. 
 *           Example: { pk: 1 }
 */
function patchUtilisateurSite($formulaireFiltres, $formulaireValeurs) {
	var filtres = [];

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtreUtilisateurNom = $formulaireFiltres.find('.valeurUtilisateurNom').val();
	if(filtreUtilisateurNom != null && filtreUtilisateurNom !== '')
		filtres.push({ name: 'fq', value: 'utilisateurNom:' + filtreUtilisateurNom });

	var filtreUtilisateurNomComplet = $formulaireFiltres.find('.valeurUtilisateurNomComplet').val();
	if(filtreUtilisateurNomComplet != null && filtreUtilisateurNomComplet !== '')
		filtres.push({ name: 'fq', value: 'utilisateurNomComplet:' + filtreUtilisateurNomComplet });

	var filtreSiteNomDomaine = $formulaireFiltres.find('.valeurSiteNomDomaine').val();
	if(filtreSiteNomDomaine != null && filtreSiteNomDomaine !== '')
		filtres.push({ name: 'fq', value: 'siteNomDomaine:' + filtreSiteNomDomaine });

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
	if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
		filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

	var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
	if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
		filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

	var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
	if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
		filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

	var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
	if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
		filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

	var filtreCalculInrPks = $formulaireFiltres.find('.valeurCalculInrPks').val();
	if(filtreCalculInrPks != null && filtreCalculInrPks !== '')
		filtres.push({ name: 'fq', value: 'calculInrPks:' + filtreCalculInrPks });

	var filtreUtilisateurMail = $formulaireFiltres.find('.valeurUtilisateurMail').val();
	if(filtreUtilisateurMail != null && filtreUtilisateurMail !== '')
		filtres.push({ name: 'fq', value: 'utilisateurMail:' + filtreUtilisateurMail });

	var filtreUtilisateurPrenom = $formulaireFiltres.find('.valeurUtilisateurPrenom').val();
	if(filtreUtilisateurPrenom != null && filtreUtilisateurPrenom !== '')
		filtres.push({ name: 'fq', value: 'utilisateurPrenom:' + filtreUtilisateurPrenom });

	var filtreUtilisateurNomFamille = $formulaireFiltres.find('.valeurUtilisateurNomFamille').val();
	if(filtreUtilisateurNomFamille != null && filtreUtilisateurNomFamille !== '')
		filtres.push({ name: 'fq', value: 'utilisateurNomFamille:' + filtreUtilisateurNomFamille });

	var filtreUtilisateurSite = $formulaireFiltres.find('.valeurUtilisateurSite').val();
	if(filtreUtilisateurSite != null && filtreUtilisateurSite !== '')
		filtres.push({ name: 'fq', value: 'utilisateurSite:' + filtreUtilisateurSite });

	var filtreUtilisateurRecevoirCourriels = $formulaireFiltres.find('.valeurUtilisateurRecevoirCourriels').prop('checked');
	if(filtreUtilisateurRecevoirCourriels != null && filtreUtilisateurRecevoirCourriels === true)
		filtres.push({ name: 'fq', value: 'utilisateurRecevoirCourriels:' + filtreUtilisateurRecevoirCourriels });

	var filtreVoirArchive = $formulaireFiltres.find('.valeurVoirArchive').prop('checked');
	if(filtreVoirArchive != null && filtreVoirArchive === true)
		filtres.push({ name: 'fq', value: 'voirArchive:' + filtreVoirArchive });

	var filtreVoirSupprime = $formulaireFiltres.find('.valeurVoirSupprime').prop('checked');
	if(filtreVoirSupprime != null && filtreVoirSupprime === true)
		filtres.push({ name: 'fq', value: 'voirSupprime:' + filtreVoirSupprime });

	var valeurs = {};

	var setCree = $formulaireValeurs.find('.setCree').val();
	if(setCree != null && setCree !== '')
		valeurs['setCree'] = setCree;
	var addCree = $formulaireValeurs.find('.addCree').val();
	if(addCree != null && addCree !== '')
		valeurs['addCree'] = addCree;
	var removeCree = $formulaireValeurs.find('.removeCree').val();
	if(removeCree != null && removeCree !== '')
		valeurs['removeCree'] = removeCree;

	var setModifie = $formulaireValeurs.find('.setModifie').val();
	if(setModifie != null && setModifie !== '')
		valeurs['setModifie'] = setModifie;
	var addModifie = $formulaireValeurs.find('.addModifie').val();
	if(addModifie != null && addModifie !== '')
		valeurs['addModifie'] = addModifie;
	var removeModifie = $formulaireValeurs.find('.removeModifie').val();
	if(removeModifie != null && removeModifie !== '')
		valeurs['removeModifie'] = removeModifie;

	var setUtilisateurNom = $formulaireValeurs.find('.setUtilisateurNom').val();
	if(setUtilisateurNom != null && setUtilisateurNom !== '')
		valeurs['setUtilisateurNom'] = setUtilisateurNom;
	var addUtilisateurNom = $formulaireValeurs.find('.addUtilisateurNom').val();
	if(addUtilisateurNom != null && addUtilisateurNom !== '')
		valeurs['addUtilisateurNom'] = addUtilisateurNom;
	var removeUtilisateurNom = $formulaireValeurs.find('.removeUtilisateurNom').val();
	if(removeUtilisateurNom != null && removeUtilisateurNom !== '')
		valeurs['removeUtilisateurNom'] = removeUtilisateurNom;

	var setUtilisateurNomComplet = $formulaireValeurs.find('.setUtilisateurNomComplet').val();
	if(setUtilisateurNomComplet != null && setUtilisateurNomComplet !== '')
		valeurs['setUtilisateurNomComplet'] = setUtilisateurNomComplet;
	var addUtilisateurNomComplet = $formulaireValeurs.find('.addUtilisateurNomComplet').val();
	if(addUtilisateurNomComplet != null && addUtilisateurNomComplet !== '')
		valeurs['addUtilisateurNomComplet'] = addUtilisateurNomComplet;
	var removeUtilisateurNomComplet = $formulaireValeurs.find('.removeUtilisateurNomComplet').val();
	if(removeUtilisateurNomComplet != null && removeUtilisateurNomComplet !== '')
		valeurs['removeUtilisateurNomComplet'] = removeUtilisateurNomComplet;

	var setSiteNomDomaine = $formulaireValeurs.find('.setSiteNomDomaine').val();
	if(setSiteNomDomaine != null && setSiteNomDomaine !== '')
		valeurs['setSiteNomDomaine'] = setSiteNomDomaine;
	var addSiteNomDomaine = $formulaireValeurs.find('.addSiteNomDomaine').val();
	if(addSiteNomDomaine != null && addSiteNomDomaine !== '')
		valeurs['addSiteNomDomaine'] = addSiteNomDomaine;
	var removeSiteNomDomaine = $formulaireValeurs.find('.removeSiteNomDomaine').val();
	if(removeSiteNomDomaine != null && removeSiteNomDomaine !== '')
		valeurs['removeSiteNomDomaine'] = removeSiteNomDomaine;

	$.ajax({
		url: '/api/site/utilisateur?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(valeurs)
		, success: function( data, textStatus, jQxhr ) {
			$.each( valeurs, function( key, value ) {
				$formulaireValeurs.find('.' + key).removeClass('lueurErreur');
				$formulaireValeurs.find('.' + key).addClass('lueurSucces');
			});
		}
		, error: function( jqXhr, textStatus, errorThrown ) {
			$.each( valeurs, function( key, value ) {
				$formulaireValeurs.find('.' + key).removeClass('lueurSucces');
				$formulaireValeurs.find('.' + key).addClass('lueurErreur');
			});
		}
	});
}

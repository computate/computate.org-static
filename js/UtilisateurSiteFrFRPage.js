
// PATCH //

/**
 * Modifier un ou plusiers utilisateurs du site sans valuers qui change, 
 * ou changer des valeurs pour un ou plusiers l'utilisateur du site. 
 * @param params: [ "q=*:*", "fq=pk:1", "sort=pk asc", "rows=1", "fl=pk" ]
 *        Une liste des opérations de recherche sur des utilisateurs du site 
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

	var filtreZookeeperVersion = $formulaireFiltres.find('.valeurZookeeperVersion').val();
	if(filtreZookeeperVersion != null && filtreZookeeperVersion !== '')
		filtres.push({ name: 'fq', value: 'zookeeperVersion:' + filtreZookeeperVersion });

	var filtreZookeeperPortAdmin = $formulaireFiltres.find('.valeurZookeeperPortAdmin').val();
	if(filtreZookeeperPortAdmin != null && filtreZookeeperPortAdmin !== '')
		filtres.push({ name: 'fq', value: 'zookeeperPortAdmin:' + filtreZookeeperPortAdmin });

	var filtreZookeeperPortClient = $formulaireFiltres.find('.valeurZookeeperPortClient').val();
	if(filtreZookeeperPortClient != null && filtreZookeeperPortClient !== '')
		filtres.push({ name: 'fq', value: 'zookeeperPortClient:' + filtreZookeeperPortClient });

	var filtreSolrVersion = $formulaireFiltres.find('.valeurSolrVersion').val();
	if(filtreSolrVersion != null && filtreSolrVersion !== '')
		filtres.push({ name: 'fq', value: 'solrVersion:' + filtreSolrVersion });

	var filtreSolrPortClient = $formulaireFiltres.find('.valeurSolrPortClient').val();
	if(filtreSolrPortClient != null && filtreSolrPortClient !== '')
		filtres.push({ name: 'fq', value: 'solrPortClient:' + filtreSolrPortClient });

	var filtreSolrConfigset = $formulaireFiltres.find('.valeurSolrConfigset').val();
	if(filtreSolrConfigset != null && filtreSolrConfigset !== '')
		filtres.push({ name: 'fq', value: 'solrConfigset:' + filtreSolrConfigset });

	var filtreSolrCollection = $formulaireFiltres.find('.valeurSolrCollection').val();
	if(filtreSolrCollection != null && filtreSolrCollection !== '')
		filtres.push({ name: 'fq', value: 'solrCollection:' + filtreSolrCollection });

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

	var setZookeeperVersion = $formulaireValeurs.find('.setZookeeperVersion').val();
	if(setZookeeperVersion != null && setZookeeperVersion !== '')
		valeurs['setZookeeperVersion'] = setZookeeperVersion;
	var addZookeeperVersion = $formulaireValeurs.find('.addZookeeperVersion').val();
	if(addZookeeperVersion != null && addZookeeperVersion !== '')
		valeurs['addZookeeperVersion'] = addZookeeperVersion;
	var removeZookeeperVersion = $formulaireValeurs.find('.removeZookeeperVersion').val();
	if(removeZookeeperVersion != null && removeZookeeperVersion !== '')
		valeurs['removeZookeeperVersion'] = removeZookeeperVersion;

	var setZookeeperPortAdmin = $formulaireValeurs.find('.setZookeeperPortAdmin').val();
	if(setZookeeperPortAdmin != null && setZookeeperPortAdmin !== '')
		valeurs['setZookeeperPortAdmin'] = parseInt(setZookeeperPortAdmin);
	var addZookeeperPortAdmin = $formulaireValeurs.find('.addZookeeperPortAdmin').val();
	if(addZookeeperPortAdmin != null && addZookeeperPortAdmin !== '')
		valeurs['addZookeeperPortAdmin'] = parseInt(addZookeeperPortAdmin);
	var removeZookeeperPortAdmin = $formulaireValeurs.find('.removeZookeeperPortAdmin').val();
	if(removeZookeeperPortAdmin != null && removeZookeeperPortAdmin !== '')
		valeurs['removeZookeeperPortAdmin'] = parseInt(removeZookeeperPortAdmin);

	var setZookeeperPortClient = $formulaireValeurs.find('.setZookeeperPortClient').val();
	if(setZookeeperPortClient != null && setZookeeperPortClient !== '')
		valeurs['setZookeeperPortClient'] = parseInt(setZookeeperPortClient);
	var addZookeeperPortClient = $formulaireValeurs.find('.addZookeeperPortClient').val();
	if(addZookeeperPortClient != null && addZookeeperPortClient !== '')
		valeurs['addZookeeperPortClient'] = parseInt(addZookeeperPortClient);
	var removeZookeeperPortClient = $formulaireValeurs.find('.removeZookeeperPortClient').val();
	if(removeZookeeperPortClient != null && removeZookeeperPortClient !== '')
		valeurs['removeZookeeperPortClient'] = parseInt(removeZookeeperPortClient);

	var setSolrVersion = $formulaireValeurs.find('.setSolrVersion').val();
	if(setSolrVersion != null && setSolrVersion !== '')
		valeurs['setSolrVersion'] = setSolrVersion;
	var addSolrVersion = $formulaireValeurs.find('.addSolrVersion').val();
	if(addSolrVersion != null && addSolrVersion !== '')
		valeurs['addSolrVersion'] = addSolrVersion;
	var removeSolrVersion = $formulaireValeurs.find('.removeSolrVersion').val();
	if(removeSolrVersion != null && removeSolrVersion !== '')
		valeurs['removeSolrVersion'] = removeSolrVersion;

	var setSolrPortClient = $formulaireValeurs.find('.setSolrPortClient').val();
	if(setSolrPortClient != null && setSolrPortClient !== '')
		valeurs['setSolrPortClient'] = parseInt(setSolrPortClient);
	var addSolrPortClient = $formulaireValeurs.find('.addSolrPortClient').val();
	if(addSolrPortClient != null && addSolrPortClient !== '')
		valeurs['addSolrPortClient'] = parseInt(addSolrPortClient);
	var removeSolrPortClient = $formulaireValeurs.find('.removeSolrPortClient').val();
	if(removeSolrPortClient != null && removeSolrPortClient !== '')
		valeurs['removeSolrPortClient'] = parseInt(removeSolrPortClient);

	var setSolrConfigset = $formulaireValeurs.find('.setSolrConfigset').val();
	if(setSolrConfigset != null && setSolrConfigset !== '')
		valeurs['setSolrConfigset'] = setSolrConfigset;
	var addSolrConfigset = $formulaireValeurs.find('.addSolrConfigset').val();
	if(addSolrConfigset != null && addSolrConfigset !== '')
		valeurs['addSolrConfigset'] = addSolrConfigset;
	var removeSolrConfigset = $formulaireValeurs.find('.removeSolrConfigset').val();
	if(removeSolrConfigset != null && removeSolrConfigset !== '')
		valeurs['removeSolrConfigset'] = removeSolrConfigset;

	var setSolrCollection = $formulaireValeurs.find('.setSolrCollection').val();
	if(setSolrCollection != null && setSolrCollection !== '')
		valeurs['setSolrCollection'] = setSolrCollection;
	var addSolrCollection = $formulaireValeurs.find('.addSolrCollection').val();
	if(addSolrCollection != null && addSolrCollection !== '')
		valeurs['addSolrCollection'] = addSolrCollection;
	var removeSolrCollection = $formulaireValeurs.find('.removeSolrCollection').val();
	if(removeSolrCollection != null && removeSolrCollection !== '')
		valeurs['removeSolrCollection'] = removeSolrCollection;

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

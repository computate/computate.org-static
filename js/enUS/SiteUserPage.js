
// PATCH //

function patchSiteUser($formFilters, $formValues) {
	var filters = [];

	var filterCree = $formFilters.find('.valueCree').val();
	if(filterCree != null && filterCree !== '')
		filters.push({ name: 'fq', value: 'cree:' + filterCree });

	var filterModifie = $formFilters.find('.valueModifie').val();
	if(filterModifie != null && filterModifie !== '')
		filters.push({ name: 'fq', value: 'modifie:' + filterModifie });

	var filterUtilisateurNom = $formFilters.find('.valueUtilisateurNom').val();
	if(filterUtilisateurNom != null && filterUtilisateurNom !== '')
		filters.push({ name: 'fq', value: 'utilisateurNom:' + filterUtilisateurNom });

	var filterUtilisateurNomComplet = $formFilters.find('.valueUtilisateurNomComplet').val();
	if(filterUtilisateurNomComplet != null && filterUtilisateurNomComplet !== '')
		filters.push({ name: 'fq', value: 'utilisateurNomComplet:' + filterUtilisateurNomComplet });

	var filterSiteNomDomaine = $formFilters.find('.valueSiteNomDomaine').val();
	if(filterSiteNomDomaine != null && filterSiteNomDomaine !== '')
		filters.push({ name: 'fq', value: 'siteNomDomaine:' + filterSiteNomDomaine });

	var filterZookeeperVersion = $formFilters.find('.valueZookeeperVersion').val();
	if(filterZookeeperVersion != null && filterZookeeperVersion !== '')
		filters.push({ name: 'fq', value: 'zookeeperVersion:' + filterZookeeperVersion });

	var filterZookeeperPortAdmin = $formFilters.find('.valueZookeeperPortAdmin').val();
	if(filterZookeeperPortAdmin != null && filterZookeeperPortAdmin !== '')
		filters.push({ name: 'fq', value: 'zookeeperPortAdmin:' + filterZookeeperPortAdmin });

	var filterZookeeperPortClient = $formFilters.find('.valueZookeeperPortClient').val();
	if(filterZookeeperPortClient != null && filterZookeeperPortClient !== '')
		filters.push({ name: 'fq', value: 'zookeeperPortClient:' + filterZookeeperPortClient });

	var filterSolrVersion = $formFilters.find('.valueSolrVersion').val();
	if(filterSolrVersion != null && filterSolrVersion !== '')
		filters.push({ name: 'fq', value: 'solrVersion:' + filterSolrVersion });

	var filterSolrPortClient = $formFilters.find('.valueSolrPortClient').val();
	if(filterSolrPortClient != null && filterSolrPortClient !== '')
		filters.push({ name: 'fq', value: 'solrPortClient:' + filterSolrPortClient });

	var filterSolrConfigset = $formFilters.find('.valueSolrConfigset').val();
	if(filterSolrConfigset != null && filterSolrConfigset !== '')
		filters.push({ name: 'fq', value: 'solrConfigset:' + filterSolrConfigset });

	var filterSolrCollection = $formFilters.find('.valueSolrCollection').val();
	if(filterSolrCollection != null && filterSolrCollection !== '')
		filters.push({ name: 'fq', value: 'solrCollection:' + filterSolrCollection });

	var filterPk = $formFilters.find('.valuePk').val();
	if(filterPk != null && filterPk !== '')
		filters.push({ name: 'fq', value: 'pk:' + filterPk });

	var filterId = $formFilters.find('.valueId').val();
	if(filterId != null && filterId !== '')
		filters.push({ name: 'fq', value: 'id:' + filterId });

	var filterArchive = $formFilters.find('.valueArchive').prop('checked');
	if(filterArchive != null && filterArchive === true)
		filters.push({ name: 'fq', value: 'archive:' + filterArchive });

	var filterSupprime = $formFilters.find('.valueSupprime').prop('checked');
	if(filterSupprime != null && filterSupprime === true)
		filters.push({ name: 'fq', value: 'supprime:' + filterSupprime });

	var filterClasseNomCanonique = $formFilters.find('.valueClasseNomCanonique').val();
	if(filterClasseNomCanonique != null && filterClasseNomCanonique !== '')
		filters.push({ name: 'fq', value: 'classeNomCanonique:' + filterClasseNomCanonique });

	var filterClasseNomSimple = $formFilters.find('.valueClasseNomSimple').val();
	if(filterClasseNomSimple != null && filterClasseNomSimple !== '')
		filters.push({ name: 'fq', value: 'classeNomSimple:' + filterClasseNomSimple });

	var filterClasseNomsCanoniques = $formFilters.find('.valueClasseNomsCanoniques').val();
	if(filterClasseNomsCanoniques != null && filterClasseNomsCanoniques !== '')
		filters.push({ name: 'fq', value: 'classeNomsCanoniques:' + filterClasseNomsCanoniques });

	var filterUtilisateurId = $formFilters.find('.valueUtilisateurId').val();
	if(filterUtilisateurId != null && filterUtilisateurId !== '')
		filters.push({ name: 'fq', value: 'utilisateurId:' + filterUtilisateurId });

	var filterCalculInrPks = $formFilters.find('.valueCalculInrPks').val();
	if(filterCalculInrPks != null && filterCalculInrPks !== '')
		filters.push({ name: 'fq', value: 'calculInrPks:' + filterCalculInrPks });

	var filterUtilisateurMail = $formFilters.find('.valueUtilisateurMail').val();
	if(filterUtilisateurMail != null && filterUtilisateurMail !== '')
		filters.push({ name: 'fq', value: 'utilisateurMail:' + filterUtilisateurMail });

	var filterUtilisateurPrenom = $formFilters.find('.valueUtilisateurPrenom').val();
	if(filterUtilisateurPrenom != null && filterUtilisateurPrenom !== '')
		filters.push({ name: 'fq', value: 'utilisateurPrenom:' + filterUtilisateurPrenom });

	var filterUtilisateurNomFamille = $formFilters.find('.valueUtilisateurNomFamille').val();
	if(filterUtilisateurNomFamille != null && filterUtilisateurNomFamille !== '')
		filters.push({ name: 'fq', value: 'utilisateurNomFamille:' + filterUtilisateurNomFamille });

	var filterUtilisateurSite = $formFilters.find('.valueUtilisateurSite').val();
	if(filterUtilisateurSite != null && filterUtilisateurSite !== '')
		filters.push({ name: 'fq', value: 'utilisateurSite:' + filterUtilisateurSite });

	var filterUtilisateurRecevoirCourriels = $formFilters.find('.valueUtilisateurRecevoirCourriels').prop('checked');
	if(filterUtilisateurRecevoirCourriels != null && filterUtilisateurRecevoirCourriels === true)
		filters.push({ name: 'fq', value: 'utilisateurRecevoirCourriels:' + filterUtilisateurRecevoirCourriels });

	var filterVoirArchive = $formFilters.find('.valueVoirArchive').prop('checked');
	if(filterVoirArchive != null && filterVoirArchive === true)
		filters.push({ name: 'fq', value: 'voirArchive:' + filterVoirArchive });

	var filterVoirSupprime = $formFilters.find('.valueVoirSupprime').prop('checked');
	if(filterVoirSupprime != null && filterVoirSupprime === true)
		filters.push({ name: 'fq', value: 'voirSupprime:' + filterVoirSupprime });

	var values = {};

	var setCree = $formValues.find('.setCree').val();
	if(setCree != null && setCree !== '')
		values['setCree'] = setCree;
	var addCree = $formValues.find('.addCree').val();
	if(addCree != null && addCree !== '')
		values['addCree'] = addCree;
	var removeCree = $formValues.find('.removeCree').val();
	if(removeCree != null && removeCree !== '')
		values['removeCree'] = removeCree;

	var setModifie = $formValues.find('.setModifie').val();
	if(setModifie != null && setModifie !== '')
		values['setModifie'] = setModifie;
	var addModifie = $formValues.find('.addModifie').val();
	if(addModifie != null && addModifie !== '')
		values['addModifie'] = addModifie;
	var removeModifie = $formValues.find('.removeModifie').val();
	if(removeModifie != null && removeModifie !== '')
		values['removeModifie'] = removeModifie;

	var setUtilisateurNom = $formValues.find('.setUtilisateurNom').val();
	if(setUtilisateurNom != null && setUtilisateurNom !== '')
		values['setUtilisateurNom'] = setUtilisateurNom;
	var addUtilisateurNom = $formValues.find('.addUtilisateurNom').val();
	if(addUtilisateurNom != null && addUtilisateurNom !== '')
		values['addUtilisateurNom'] = addUtilisateurNom;
	var removeUtilisateurNom = $formValues.find('.removeUtilisateurNom').val();
	if(removeUtilisateurNom != null && removeUtilisateurNom !== '')
		values['removeUtilisateurNom'] = removeUtilisateurNom;

	var setUtilisateurNomComplet = $formValues.find('.setUtilisateurNomComplet').val();
	if(setUtilisateurNomComplet != null && setUtilisateurNomComplet !== '')
		values['setUtilisateurNomComplet'] = setUtilisateurNomComplet;
	var addUtilisateurNomComplet = $formValues.find('.addUtilisateurNomComplet').val();
	if(addUtilisateurNomComplet != null && addUtilisateurNomComplet !== '')
		values['addUtilisateurNomComplet'] = addUtilisateurNomComplet;
	var removeUtilisateurNomComplet = $formValues.find('.removeUtilisateurNomComplet').val();
	if(removeUtilisateurNomComplet != null && removeUtilisateurNomComplet !== '')
		values['removeUtilisateurNomComplet'] = removeUtilisateurNomComplet;

	var setSiteNomDomaine = $formValues.find('.setSiteNomDomaine').val();
	if(setSiteNomDomaine != null && setSiteNomDomaine !== '')
		values['setSiteNomDomaine'] = setSiteNomDomaine;
	var addSiteNomDomaine = $formValues.find('.addSiteNomDomaine').val();
	if(addSiteNomDomaine != null && addSiteNomDomaine !== '')
		values['addSiteNomDomaine'] = addSiteNomDomaine;
	var removeSiteNomDomaine = $formValues.find('.removeSiteNomDomaine').val();
	if(removeSiteNomDomaine != null && removeSiteNomDomaine !== '')
		values['removeSiteNomDomaine'] = removeSiteNomDomaine;

	var setZookeeperVersion = $formValues.find('.setZookeeperVersion').val();
	if(setZookeeperVersion != null && setZookeeperVersion !== '')
		values['setZookeeperVersion'] = setZookeeperVersion;
	var addZookeeperVersion = $formValues.find('.addZookeeperVersion').val();
	if(addZookeeperVersion != null && addZookeeperVersion !== '')
		values['addZookeeperVersion'] = addZookeeperVersion;
	var removeZookeeperVersion = $formValues.find('.removeZookeeperVersion').val();
	if(removeZookeeperVersion != null && removeZookeeperVersion !== '')
		values['removeZookeeperVersion'] = removeZookeeperVersion;

	var setZookeeperPortAdmin = $formValues.find('.setZookeeperPortAdmin').val();
	if(setZookeeperPortAdmin != null && setZookeeperPortAdmin !== '')
		values['setZookeeperPortAdmin'] = parseInt(setZookeeperPortAdmin);
	var addZookeeperPortAdmin = $formValues.find('.addZookeeperPortAdmin').val();
	if(addZookeeperPortAdmin != null && addZookeeperPortAdmin !== '')
		values['addZookeeperPortAdmin'] = parseInt(addZookeeperPortAdmin);
	var removeZookeeperPortAdmin = $formValues.find('.removeZookeeperPortAdmin').val();
	if(removeZookeeperPortAdmin != null && removeZookeeperPortAdmin !== '')
		values['removeZookeeperPortAdmin'] = parseInt(removeZookeeperPortAdmin);

	var setZookeeperPortClient = $formValues.find('.setZookeeperPortClient').val();
	if(setZookeeperPortClient != null && setZookeeperPortClient !== '')
		values['setZookeeperPortClient'] = parseInt(setZookeeperPortClient);
	var addZookeeperPortClient = $formValues.find('.addZookeeperPortClient').val();
	if(addZookeeperPortClient != null && addZookeeperPortClient !== '')
		values['addZookeeperPortClient'] = parseInt(addZookeeperPortClient);
	var removeZookeeperPortClient = $formValues.find('.removeZookeeperPortClient').val();
	if(removeZookeeperPortClient != null && removeZookeeperPortClient !== '')
		values['removeZookeeperPortClient'] = parseInt(removeZookeeperPortClient);

	var setSolrVersion = $formValues.find('.setSolrVersion').val();
	if(setSolrVersion != null && setSolrVersion !== '')
		values['setSolrVersion'] = setSolrVersion;
	var addSolrVersion = $formValues.find('.addSolrVersion').val();
	if(addSolrVersion != null && addSolrVersion !== '')
		values['addSolrVersion'] = addSolrVersion;
	var removeSolrVersion = $formValues.find('.removeSolrVersion').val();
	if(removeSolrVersion != null && removeSolrVersion !== '')
		values['removeSolrVersion'] = removeSolrVersion;

	var setSolrPortClient = $formValues.find('.setSolrPortClient').val();
	if(setSolrPortClient != null && setSolrPortClient !== '')
		values['setSolrPortClient'] = parseInt(setSolrPortClient);
	var addSolrPortClient = $formValues.find('.addSolrPortClient').val();
	if(addSolrPortClient != null && addSolrPortClient !== '')
		values['addSolrPortClient'] = parseInt(addSolrPortClient);
	var removeSolrPortClient = $formValues.find('.removeSolrPortClient').val();
	if(removeSolrPortClient != null && removeSolrPortClient !== '')
		values['removeSolrPortClient'] = parseInt(removeSolrPortClient);

	var setSolrConfigset = $formValues.find('.setSolrConfigset').val();
	if(setSolrConfigset != null && setSolrConfigset !== '')
		values['setSolrConfigset'] = setSolrConfigset;
	var addSolrConfigset = $formValues.find('.addSolrConfigset').val();
	if(addSolrConfigset != null && addSolrConfigset !== '')
		values['addSolrConfigset'] = addSolrConfigset;
	var removeSolrConfigset = $formValues.find('.removeSolrConfigset').val();
	if(removeSolrConfigset != null && removeSolrConfigset !== '')
		values['removeSolrConfigset'] = removeSolrConfigset;

	var setSolrCollection = $formValues.find('.setSolrCollection').val();
	if(setSolrCollection != null && setSolrCollection !== '')
		values['setSolrCollection'] = setSolrCollection;
	var addSolrCollection = $formValues.find('.addSolrCollection').val();
	if(addSolrCollection != null && addSolrCollection !== '')
		values['addSolrCollection'] = addSolrCollection;
	var removeSolrCollection = $formValues.find('.removeSolrCollection').val();
	if(removeSolrCollection != null && removeSolrCollection !== '')
		values['removeSolrCollection'] = removeSolrCollection;

	$.ajax({
		url: '/enUS/api/user?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(values)
		, success: function( data, textStatus, jQxhr ) {
			$.each( values, function( key, value ) {
				$formValues.find('.' + key).removeClass('glowError');
				$formValues.find('.' + key).addClass('glowSuccess');
			});
		}
		, error: function( jqXhr, textStatus, errorThrown ) {
			$.each( values, function( key, value ) {
				$formValues.find('.' + key).removeClass('glowSuccess');
				$formValues.find('.' + key).addClass('glowError');
			});
		}
	});
}

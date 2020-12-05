
// Search //

async function searchSiteUser($formFilters, success, error) {
	var filters = searchSiteUserFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSiteUserVals(filters, success, error);
}

function searchSiteUserFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterUserReceiveEmailsCheckbox = $formFilters.find('input.valueUserReceiveEmails[type = "checkbox"]');
		var $filterUserReceiveEmailsSelect = $formFilters.find('select.valueUserReceiveEmails');
		var filterUserReceiveEmails = $filterUserReceiveEmailsSelect.length ? $filterUserReceiveEmailsSelect.val() : $filterUserReceiveEmailsCheckbox.prop('checked');
		var filterUserReceiveEmailsSelectVal = $formFilters.find('select.filterUserReceiveEmails').val();
		var filterUserReceiveEmails = null;
		if(filterUserReceiveEmailsSelectVal !== '')
			filterUserReceiveEmails = filterUserReceiveEmailsSelectVal == 'true';
		if(filterUserReceiveEmails != null && filterUserReceiveEmails === true)
			filters.push({ name: 'fq', value: 'userReceiveEmails:' + filterUserReceiveEmails });

		var $filterSeeArchivedCheckbox = $formFilters.find('input.valueSeeArchived[type = "checkbox"]');
		var $filterSeeArchivedSelect = $formFilters.find('select.valueSeeArchived');
		var filterSeeArchived = $filterSeeArchivedSelect.length ? $filterSeeArchivedSelect.val() : $filterSeeArchivedCheckbox.prop('checked');
		var filterSeeArchivedSelectVal = $formFilters.find('select.filterSeeArchived').val();
		var filterSeeArchived = null;
		if(filterSeeArchivedSelectVal !== '')
			filterSeeArchived = filterSeeArchivedSelectVal == 'true';
		if(filterSeeArchived != null && filterSeeArchived === true)
			filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

		var $filterSeeDeletedCheckbox = $formFilters.find('input.valueSeeDeleted[type = "checkbox"]');
		var $filterSeeDeletedSelect = $formFilters.find('select.valueSeeDeleted');
		var filterSeeDeleted = $filterSeeDeletedSelect.length ? $filterSeeDeletedSelect.val() : $filterSeeDeletedCheckbox.prop('checked');
		var filterSeeDeletedSelectVal = $formFilters.find('select.filterSeeDeleted').val();
		var filterSeeDeleted = null;
		if(filterSeeDeletedSelectVal !== '')
			filterSeeDeleted = filterSeeDeletedSelectVal == 'true';
		if(filterSeeDeleted != null && filterSeeDeleted === true)
			filters.push({ name: 'fq', value: 'seeDeleted:' + filterSeeDeleted });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
		if(filterPaymentKeys != null && filterPaymentKeys !== '')
			filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterUserName = $formFilters.find('.valueUserName').val();
		if(filterUserName != null && filterUserName !== '')
			filters.push({ name: 'fq', value: 'userName:' + filterUserName });

		var filterUserEmail = $formFilters.find('.valueUserEmail').val();
		if(filterUserEmail != null && filterUserEmail !== '')
			filters.push({ name: 'fq', value: 'userEmail:' + filterUserEmail });

		var filterUserFirstName = $formFilters.find('.valueUserFirstName').val();
		if(filterUserFirstName != null && filterUserFirstName !== '')
			filters.push({ name: 'fq', value: 'userFirstName:' + filterUserFirstName });

		var filterUserLastName = $formFilters.find('.valueUserLastName').val();
		if(filterUserLastName != null && filterUserLastName !== '')
			filters.push({ name: 'fq', value: 'userLastName:' + filterUserLastName });

		var filterUserFullName = $formFilters.find('.valueUserFullName').val();
		if(filterUserFullName != null && filterUserFullName !== '')
			filters.push({ name: 'fq', value: 'userFullName:' + filterUserFullName });

		var filterUserSite = $formFilters.find('.valueUserSite').val();
		if(filterUserSite != null && filterUserSite !== '')
			filters.push({ name: 'fq', value: 'userSite:' + filterUserSite });

		var filterCustomerProfileId1 = $formFilters.find('.valueCustomerProfileId1').val();
		if(filterCustomerProfileId1 != null && filterCustomerProfileId1 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId1:' + filterCustomerProfileId1 });

		var filterCustomerProfileId2 = $formFilters.find('.valueCustomerProfileId2').val();
		if(filterCustomerProfileId2 != null && filterCustomerProfileId2 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId2:' + filterCustomerProfileId2 });

		var filterCustomerProfileId3 = $formFilters.find('.valueCustomerProfileId3').val();
		if(filterCustomerProfileId3 != null && filterCustomerProfileId3 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId3:' + filterCustomerProfileId3 });

		var filterCustomerProfileId4 = $formFilters.find('.valueCustomerProfileId4').val();
		if(filterCustomerProfileId4 != null && filterCustomerProfileId4 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId4:' + filterCustomerProfileId4 });

		var filterCustomerProfileId5 = $formFilters.find('.valueCustomerProfileId5').val();
		if(filterCustomerProfileId5 != null && filterCustomerProfileId5 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId5:' + filterCustomerProfileId5 });

		var filterCustomerProfileId6 = $formFilters.find('.valueCustomerProfileId6').val();
		if(filterCustomerProfileId6 != null && filterCustomerProfileId6 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId6:' + filterCustomerProfileId6 });

		var filterCustomerProfileId7 = $formFilters.find('.valueCustomerProfileId7').val();
		if(filterCustomerProfileId7 != null && filterCustomerProfileId7 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId7:' + filterCustomerProfileId7 });

		var filterCustomerProfileId8 = $formFilters.find('.valueCustomerProfileId8').val();
		if(filterCustomerProfileId8 != null && filterCustomerProfileId8 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId8:' + filterCustomerProfileId8 });

		var filterCustomerProfileId9 = $formFilters.find('.valueCustomerProfileId9').val();
		if(filterCustomerProfileId9 != null && filterCustomerProfileId9 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId9:' + filterCustomerProfileId9 });

		var filterCustomerProfileId10 = $formFilters.find('.valueCustomerProfileId10').val();
		if(filterCustomerProfileId10 != null && filterCustomerProfileId10 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId10:' + filterCustomerProfileId10 });
	}
	return filters;
}

function searchSiteUserVals(filters, success, error) {
	$.ajax({
		url: '/api/user?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteUserObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteUserVals($formFilters, success, error);
}

function suggestSiteUserEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['userKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_userKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_userKeys_" + o['pk'] + "'); patchSiteUserVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SiteUserForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

function suggestSiteUserPaymentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-search-dollar ');
			var $span = $('<span>').attr('class', '').text(o['paymentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['userKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_paymentKeys_' + pk + '_userKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePaymentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_paymentKeys_" + pk + "_userKeys_" + o['pk'] + "'); patchSiteUserVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PaymentKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SiteUserForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolPaymentVals(filters, success, error);
}

// PATCH //

async function patchSiteUser($formFilters, $formValues, pk, success, error) {
	var filters = patchSiteUserFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').val();
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueUserReceiveEmails = $formValues.find('.valueUserReceiveEmails').val();
	var removeUserReceiveEmails = $formValues.find('.removeUserReceiveEmails').val() === 'true';
	var valueUserReceiveEmailsSelectVal = $formValues.find('select.setUserReceiveEmails').val();
	var valueUserReceiveEmails = null;
	if(valueUserReceiveEmailsSelectVal != null && valueUserReceiveEmailsSelectVal !== '')
		valueUserReceiveEmails = valueUserReceiveEmailsSelectVal == 'true';
	var setUserReceiveEmails = removeUserReceiveEmails ? null : valueUserReceiveEmails;
	var addUserReceiveEmails = $formValues.find('.addUserReceiveEmails').prop('checked');
	if(removeUserReceiveEmails || setUserReceiveEmails != null && setUserReceiveEmails !== '')
		vals['setUserReceiveEmails'] = setUserReceiveEmails;
	if(addUserReceiveEmails != null && addUserReceiveEmails !== '')
		vals['addUserReceiveEmails'] = addUserReceiveEmails;
	var removeUserReceiveEmails = $formValues.find('.removeUserReceiveEmails').prop('checked');
	if(removeUserReceiveEmails != null && removeUserReceiveEmails !== '')
		vals['removeUserReceiveEmails'] = removeUserReceiveEmails;

	var valueSeeArchived = $formValues.find('.valueSeeArchived').val();
	var removeSeeArchived = $formValues.find('.removeSeeArchived').val() === 'true';
	var valueSeeArchivedSelectVal = $formValues.find('select.setSeeArchived').val();
	var valueSeeArchived = null;
	if(valueSeeArchivedSelectVal != null && valueSeeArchivedSelectVal !== '')
		valueSeeArchived = valueSeeArchivedSelectVal == 'true';
	var setSeeArchived = removeSeeArchived ? null : valueSeeArchived;
	var addSeeArchived = $formValues.find('.addSeeArchived').prop('checked');
	if(removeSeeArchived || setSeeArchived != null && setSeeArchived !== '')
		vals['setSeeArchived'] = setSeeArchived;
	if(addSeeArchived != null && addSeeArchived !== '')
		vals['addSeeArchived'] = addSeeArchived;
	var removeSeeArchived = $formValues.find('.removeSeeArchived').prop('checked');
	if(removeSeeArchived != null && removeSeeArchived !== '')
		vals['removeSeeArchived'] = removeSeeArchived;

	var valueSeeDeleted = $formValues.find('.valueSeeDeleted').val();
	var removeSeeDeleted = $formValues.find('.removeSeeDeleted').val() === 'true';
	var valueSeeDeletedSelectVal = $formValues.find('select.setSeeDeleted').val();
	var valueSeeDeleted = null;
	if(valueSeeDeletedSelectVal != null && valueSeeDeletedSelectVal !== '')
		valueSeeDeleted = valueSeeDeletedSelectVal == 'true';
	var setSeeDeleted = removeSeeDeleted ? null : valueSeeDeleted;
	var addSeeDeleted = $formValues.find('.addSeeDeleted').prop('checked');
	if(removeSeeDeleted || setSeeDeleted != null && setSeeDeleted !== '')
		vals['setSeeDeleted'] = setSeeDeleted;
	if(addSeeDeleted != null && addSeeDeleted !== '')
		vals['addSeeDeleted'] = addSeeDeleted;
	var removeSeeDeleted = $formValues.find('.removeSeeDeleted').prop('checked');
	if(removeSeeDeleted != null && removeSeeDeleted !== '')
		vals['removeSeeDeleted'] = removeSeeDeleted;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['addEnrollmentKeys'] = valueEnrollmentKeys;

	var valuePaymentKeys = $formValues.find('input.valuePaymentKeys:checked').val();
	if(valuePaymentKeys != null && valuePaymentKeys !== '')
		vals['addPaymentKeys'] = valuePaymentKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueUserName = $formValues.find('.valueUserName').val();
	var removeUserName = $formValues.find('.removeUserName').val() === 'true';
	var setUserName = removeUserName ? null : $formValues.find('.setUserName').val();
	var addUserName = $formValues.find('.addUserName').val();
	if(removeUserName || setUserName != null && setUserName !== '')
		vals['setUserName'] = setUserName;
	if(addUserName != null && addUserName !== '')
		vals['addUserName'] = addUserName;
	var removeUserName = $formValues.find('.removeUserName').val();
	if(removeUserName != null && removeUserName !== '')
		vals['removeUserName'] = removeUserName;

	var valueUserEmail = $formValues.find('.valueUserEmail').val();
	var removeUserEmail = $formValues.find('.removeUserEmail').val() === 'true';
	var setUserEmail = removeUserEmail ? null : $formValues.find('.setUserEmail').val();
	var addUserEmail = $formValues.find('.addUserEmail').val();
	if(removeUserEmail || setUserEmail != null && setUserEmail !== '')
		vals['setUserEmail'] = setUserEmail;
	if(addUserEmail != null && addUserEmail !== '')
		vals['addUserEmail'] = addUserEmail;
	var removeUserEmail = $formValues.find('.removeUserEmail').val();
	if(removeUserEmail != null && removeUserEmail !== '')
		vals['removeUserEmail'] = removeUserEmail;

	var valueCustomerProfileId1 = $formValues.find('.valueCustomerProfileId1').val();
	var removeCustomerProfileId1 = $formValues.find('.removeCustomerProfileId1').val() === 'true';
	var setCustomerProfileId1 = removeCustomerProfileId1 ? null : $formValues.find('.setCustomerProfileId1').val();
	var addCustomerProfileId1 = $formValues.find('.addCustomerProfileId1').val();
	if(removeCustomerProfileId1 || setCustomerProfileId1 != null && setCustomerProfileId1 !== '')
		vals['setCustomerProfileId1'] = setCustomerProfileId1;
	if(addCustomerProfileId1 != null && addCustomerProfileId1 !== '')
		vals['addCustomerProfileId1'] = addCustomerProfileId1;
	var removeCustomerProfileId1 = $formValues.find('.removeCustomerProfileId1').val();
	if(removeCustomerProfileId1 != null && removeCustomerProfileId1 !== '')
		vals['removeCustomerProfileId1'] = removeCustomerProfileId1;

	var valueCustomerProfileId2 = $formValues.find('.valueCustomerProfileId2').val();
	var removeCustomerProfileId2 = $formValues.find('.removeCustomerProfileId2').val() === 'true';
	var setCustomerProfileId2 = removeCustomerProfileId2 ? null : $formValues.find('.setCustomerProfileId2').val();
	var addCustomerProfileId2 = $formValues.find('.addCustomerProfileId2').val();
	if(removeCustomerProfileId2 || setCustomerProfileId2 != null && setCustomerProfileId2 !== '')
		vals['setCustomerProfileId2'] = setCustomerProfileId2;
	if(addCustomerProfileId2 != null && addCustomerProfileId2 !== '')
		vals['addCustomerProfileId2'] = addCustomerProfileId2;
	var removeCustomerProfileId2 = $formValues.find('.removeCustomerProfileId2').val();
	if(removeCustomerProfileId2 != null && removeCustomerProfileId2 !== '')
		vals['removeCustomerProfileId2'] = removeCustomerProfileId2;

	var valueCustomerProfileId3 = $formValues.find('.valueCustomerProfileId3').val();
	var removeCustomerProfileId3 = $formValues.find('.removeCustomerProfileId3').val() === 'true';
	var setCustomerProfileId3 = removeCustomerProfileId3 ? null : $formValues.find('.setCustomerProfileId3').val();
	var addCustomerProfileId3 = $formValues.find('.addCustomerProfileId3').val();
	if(removeCustomerProfileId3 || setCustomerProfileId3 != null && setCustomerProfileId3 !== '')
		vals['setCustomerProfileId3'] = setCustomerProfileId3;
	if(addCustomerProfileId3 != null && addCustomerProfileId3 !== '')
		vals['addCustomerProfileId3'] = addCustomerProfileId3;
	var removeCustomerProfileId3 = $formValues.find('.removeCustomerProfileId3').val();
	if(removeCustomerProfileId3 != null && removeCustomerProfileId3 !== '')
		vals['removeCustomerProfileId3'] = removeCustomerProfileId3;

	var valueCustomerProfileId4 = $formValues.find('.valueCustomerProfileId4').val();
	var removeCustomerProfileId4 = $formValues.find('.removeCustomerProfileId4').val() === 'true';
	var setCustomerProfileId4 = removeCustomerProfileId4 ? null : $formValues.find('.setCustomerProfileId4').val();
	var addCustomerProfileId4 = $formValues.find('.addCustomerProfileId4').val();
	if(removeCustomerProfileId4 || setCustomerProfileId4 != null && setCustomerProfileId4 !== '')
		vals['setCustomerProfileId4'] = setCustomerProfileId4;
	if(addCustomerProfileId4 != null && addCustomerProfileId4 !== '')
		vals['addCustomerProfileId4'] = addCustomerProfileId4;
	var removeCustomerProfileId4 = $formValues.find('.removeCustomerProfileId4').val();
	if(removeCustomerProfileId4 != null && removeCustomerProfileId4 !== '')
		vals['removeCustomerProfileId4'] = removeCustomerProfileId4;

	var valueCustomerProfileId5 = $formValues.find('.valueCustomerProfileId5').val();
	var removeCustomerProfileId5 = $formValues.find('.removeCustomerProfileId5').val() === 'true';
	var setCustomerProfileId5 = removeCustomerProfileId5 ? null : $formValues.find('.setCustomerProfileId5').val();
	var addCustomerProfileId5 = $formValues.find('.addCustomerProfileId5').val();
	if(removeCustomerProfileId5 || setCustomerProfileId5 != null && setCustomerProfileId5 !== '')
		vals['setCustomerProfileId5'] = setCustomerProfileId5;
	if(addCustomerProfileId5 != null && addCustomerProfileId5 !== '')
		vals['addCustomerProfileId5'] = addCustomerProfileId5;
	var removeCustomerProfileId5 = $formValues.find('.removeCustomerProfileId5').val();
	if(removeCustomerProfileId5 != null && removeCustomerProfileId5 !== '')
		vals['removeCustomerProfileId5'] = removeCustomerProfileId5;

	var valueCustomerProfileId6 = $formValues.find('.valueCustomerProfileId6').val();
	var removeCustomerProfileId6 = $formValues.find('.removeCustomerProfileId6').val() === 'true';
	var setCustomerProfileId6 = removeCustomerProfileId6 ? null : $formValues.find('.setCustomerProfileId6').val();
	var addCustomerProfileId6 = $formValues.find('.addCustomerProfileId6').val();
	if(removeCustomerProfileId6 || setCustomerProfileId6 != null && setCustomerProfileId6 !== '')
		vals['setCustomerProfileId6'] = setCustomerProfileId6;
	if(addCustomerProfileId6 != null && addCustomerProfileId6 !== '')
		vals['addCustomerProfileId6'] = addCustomerProfileId6;
	var removeCustomerProfileId6 = $formValues.find('.removeCustomerProfileId6').val();
	if(removeCustomerProfileId6 != null && removeCustomerProfileId6 !== '')
		vals['removeCustomerProfileId6'] = removeCustomerProfileId6;

	var valueCustomerProfileId7 = $formValues.find('.valueCustomerProfileId7').val();
	var removeCustomerProfileId7 = $formValues.find('.removeCustomerProfileId7').val() === 'true';
	var setCustomerProfileId7 = removeCustomerProfileId7 ? null : $formValues.find('.setCustomerProfileId7').val();
	var addCustomerProfileId7 = $formValues.find('.addCustomerProfileId7').val();
	if(removeCustomerProfileId7 || setCustomerProfileId7 != null && setCustomerProfileId7 !== '')
		vals['setCustomerProfileId7'] = setCustomerProfileId7;
	if(addCustomerProfileId7 != null && addCustomerProfileId7 !== '')
		vals['addCustomerProfileId7'] = addCustomerProfileId7;
	var removeCustomerProfileId7 = $formValues.find('.removeCustomerProfileId7').val();
	if(removeCustomerProfileId7 != null && removeCustomerProfileId7 !== '')
		vals['removeCustomerProfileId7'] = removeCustomerProfileId7;

	var valueCustomerProfileId8 = $formValues.find('.valueCustomerProfileId8').val();
	var removeCustomerProfileId8 = $formValues.find('.removeCustomerProfileId8').val() === 'true';
	var setCustomerProfileId8 = removeCustomerProfileId8 ? null : $formValues.find('.setCustomerProfileId8').val();
	var addCustomerProfileId8 = $formValues.find('.addCustomerProfileId8').val();
	if(removeCustomerProfileId8 || setCustomerProfileId8 != null && setCustomerProfileId8 !== '')
		vals['setCustomerProfileId8'] = setCustomerProfileId8;
	if(addCustomerProfileId8 != null && addCustomerProfileId8 !== '')
		vals['addCustomerProfileId8'] = addCustomerProfileId8;
	var removeCustomerProfileId8 = $formValues.find('.removeCustomerProfileId8').val();
	if(removeCustomerProfileId8 != null && removeCustomerProfileId8 !== '')
		vals['removeCustomerProfileId8'] = removeCustomerProfileId8;

	var valueCustomerProfileId9 = $formValues.find('.valueCustomerProfileId9').val();
	var removeCustomerProfileId9 = $formValues.find('.removeCustomerProfileId9').val() === 'true';
	var setCustomerProfileId9 = removeCustomerProfileId9 ? null : $formValues.find('.setCustomerProfileId9').val();
	var addCustomerProfileId9 = $formValues.find('.addCustomerProfileId9').val();
	if(removeCustomerProfileId9 || setCustomerProfileId9 != null && setCustomerProfileId9 !== '')
		vals['setCustomerProfileId9'] = setCustomerProfileId9;
	if(addCustomerProfileId9 != null && addCustomerProfileId9 !== '')
		vals['addCustomerProfileId9'] = addCustomerProfileId9;
	var removeCustomerProfileId9 = $formValues.find('.removeCustomerProfileId9').val();
	if(removeCustomerProfileId9 != null && removeCustomerProfileId9 !== '')
		vals['removeCustomerProfileId9'] = removeCustomerProfileId9;

	var valueCustomerProfileId10 = $formValues.find('.valueCustomerProfileId10').val();
	var removeCustomerProfileId10 = $formValues.find('.removeCustomerProfileId10').val() === 'true';
	var setCustomerProfileId10 = removeCustomerProfileId10 ? null : $formValues.find('.setCustomerProfileId10').val();
	var addCustomerProfileId10 = $formValues.find('.addCustomerProfileId10').val();
	if(removeCustomerProfileId10 || setCustomerProfileId10 != null && setCustomerProfileId10 !== '')
		vals['setCustomerProfileId10'] = setCustomerProfileId10;
	if(addCustomerProfileId10 != null && addCustomerProfileId10 !== '')
		vals['addCustomerProfileId10'] = addCustomerProfileId10;
	var removeCustomerProfileId10 = $formValues.find('.removeCustomerProfileId10').val();
	if(removeCustomerProfileId10 != null && removeCustomerProfileId10 !== '')
		vals['removeCustomerProfileId10'] = removeCustomerProfileId10;

	patchSiteUserVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSiteUserFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterUserReceiveEmailsCheckbox = $formFilters.find('input.valueUserReceiveEmails[type = "checkbox"]');
		var $filterUserReceiveEmailsSelect = $formFilters.find('select.valueUserReceiveEmails');
		var filterUserReceiveEmails = $filterUserReceiveEmailsSelect.length ? $filterUserReceiveEmailsSelect.val() : $filterUserReceiveEmailsCheckbox.prop('checked');
		var filterUserReceiveEmailsSelectVal = $formFilters.find('select.filterUserReceiveEmails').val();
		var filterUserReceiveEmails = null;
		if(filterUserReceiveEmailsSelectVal !== '')
			filterUserReceiveEmails = filterUserReceiveEmailsSelectVal == 'true';
		if(filterUserReceiveEmails != null && filterUserReceiveEmails === true)
			filters.push({ name: 'fq', value: 'userReceiveEmails:' + filterUserReceiveEmails });

		var $filterSeeArchivedCheckbox = $formFilters.find('input.valueSeeArchived[type = "checkbox"]');
		var $filterSeeArchivedSelect = $formFilters.find('select.valueSeeArchived');
		var filterSeeArchived = $filterSeeArchivedSelect.length ? $filterSeeArchivedSelect.val() : $filterSeeArchivedCheckbox.prop('checked');
		var filterSeeArchivedSelectVal = $formFilters.find('select.filterSeeArchived').val();
		var filterSeeArchived = null;
		if(filterSeeArchivedSelectVal !== '')
			filterSeeArchived = filterSeeArchivedSelectVal == 'true';
		if(filterSeeArchived != null && filterSeeArchived === true)
			filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

		var $filterSeeDeletedCheckbox = $formFilters.find('input.valueSeeDeleted[type = "checkbox"]');
		var $filterSeeDeletedSelect = $formFilters.find('select.valueSeeDeleted');
		var filterSeeDeleted = $filterSeeDeletedSelect.length ? $filterSeeDeletedSelect.val() : $filterSeeDeletedCheckbox.prop('checked');
		var filterSeeDeletedSelectVal = $formFilters.find('select.filterSeeDeleted').val();
		var filterSeeDeleted = null;
		if(filterSeeDeletedSelectVal !== '')
			filterSeeDeleted = filterSeeDeletedSelectVal == 'true';
		if(filterSeeDeleted != null && filterSeeDeleted === true)
			filters.push({ name: 'fq', value: 'seeDeleted:' + filterSeeDeleted });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
		if(filterPaymentKeys != null && filterPaymentKeys !== '')
			filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterUserName = $formFilters.find('.valueUserName').val();
		if(filterUserName != null && filterUserName !== '')
			filters.push({ name: 'fq', value: 'userName:' + filterUserName });

		var filterUserEmail = $formFilters.find('.valueUserEmail').val();
		if(filterUserEmail != null && filterUserEmail !== '')
			filters.push({ name: 'fq', value: 'userEmail:' + filterUserEmail });

		var filterUserFirstName = $formFilters.find('.valueUserFirstName').val();
		if(filterUserFirstName != null && filterUserFirstName !== '')
			filters.push({ name: 'fq', value: 'userFirstName:' + filterUserFirstName });

		var filterUserLastName = $formFilters.find('.valueUserLastName').val();
		if(filterUserLastName != null && filterUserLastName !== '')
			filters.push({ name: 'fq', value: 'userLastName:' + filterUserLastName });

		var filterUserFullName = $formFilters.find('.valueUserFullName').val();
		if(filterUserFullName != null && filterUserFullName !== '')
			filters.push({ name: 'fq', value: 'userFullName:' + filterUserFullName });

		var filterUserSite = $formFilters.find('.valueUserSite').val();
		if(filterUserSite != null && filterUserSite !== '')
			filters.push({ name: 'fq', value: 'userSite:' + filterUserSite });

		var filterCustomerProfileId1 = $formFilters.find('.valueCustomerProfileId1').val();
		if(filterCustomerProfileId1 != null && filterCustomerProfileId1 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId1:' + filterCustomerProfileId1 });

		var filterCustomerProfileId2 = $formFilters.find('.valueCustomerProfileId2').val();
		if(filterCustomerProfileId2 != null && filterCustomerProfileId2 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId2:' + filterCustomerProfileId2 });

		var filterCustomerProfileId3 = $formFilters.find('.valueCustomerProfileId3').val();
		if(filterCustomerProfileId3 != null && filterCustomerProfileId3 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId3:' + filterCustomerProfileId3 });

		var filterCustomerProfileId4 = $formFilters.find('.valueCustomerProfileId4').val();
		if(filterCustomerProfileId4 != null && filterCustomerProfileId4 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId4:' + filterCustomerProfileId4 });

		var filterCustomerProfileId5 = $formFilters.find('.valueCustomerProfileId5').val();
		if(filterCustomerProfileId5 != null && filterCustomerProfileId5 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId5:' + filterCustomerProfileId5 });

		var filterCustomerProfileId6 = $formFilters.find('.valueCustomerProfileId6').val();
		if(filterCustomerProfileId6 != null && filterCustomerProfileId6 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId6:' + filterCustomerProfileId6 });

		var filterCustomerProfileId7 = $formFilters.find('.valueCustomerProfileId7').val();
		if(filterCustomerProfileId7 != null && filterCustomerProfileId7 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId7:' + filterCustomerProfileId7 });

		var filterCustomerProfileId8 = $formFilters.find('.valueCustomerProfileId8').val();
		if(filterCustomerProfileId8 != null && filterCustomerProfileId8 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId8:' + filterCustomerProfileId8 });

		var filterCustomerProfileId9 = $formFilters.find('.valueCustomerProfileId9').val();
		if(filterCustomerProfileId9 != null && filterCustomerProfileId9 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId9:' + filterCustomerProfileId9 });

		var filterCustomerProfileId10 = $formFilters.find('.valueCustomerProfileId10').val();
		if(filterCustomerProfileId10 != null && filterCustomerProfileId10 !== '')
			filters.push({ name: 'fq', value: 'customerProfileId10:' + filterCustomerProfileId10 });
	}
	return filters;
}

function patchSiteUserVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSiteUserVals(filters, vals, success, error);
}

function patchSiteUserVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/user?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// POST //

async function postSiteUser($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valueUserReceiveEmails = $formValues.find('.valueUserReceiveEmails').val();
	if(valueUserReceiveEmails != null && valueUserReceiveEmails !== '')
		vals['userReceiveEmails'] = valueUserReceiveEmails == 'true';

	var valueSeeArchived = $formValues.find('.valueSeeArchived').val();
	if(valueSeeArchived != null && valueSeeArchived !== '')
		vals['seeArchived'] = valueSeeArchived == 'true';

	var valueSeeDeleted = $formValues.find('.valueSeeDeleted').val();
	if(valueSeeDeleted != null && valueSeeDeleted !== '')
		vals['seeDeleted'] = valueSeeDeleted == 'true';

	var valueEnrollmentKeys = [];
	$formValues.find('input.valueEnrollmentKeys:checked').each(function(index) {
		valueEnrollmentKeys.push($(this).val());
	});
	if(valueEnrollmentKeys.length > 0)
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valuePaymentKeys = [];
	$formValues.find('input.valuePaymentKeys:checked').each(function(index) {
		valuePaymentKeys.push($(this).val());
	});
	if(valuePaymentKeys.length > 0)
		vals['paymentKeys'] = valuePaymentKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueUserName = $formValues.find('.valueUserName').val();
	if(valueUserName != null && valueUserName !== '')
		vals['userName'] = valueUserName;

	var valueUserEmail = $formValues.find('.valueUserEmail').val();
	if(valueUserEmail != null && valueUserEmail !== '')
		vals['userEmail'] = valueUserEmail;

	var valueCustomerProfileId1 = $formValues.find('.valueCustomerProfileId1').val();
	if(valueCustomerProfileId1 != null && valueCustomerProfileId1 !== '')
		vals['customerProfileId1'] = valueCustomerProfileId1;

	var valueCustomerProfileId2 = $formValues.find('.valueCustomerProfileId2').val();
	if(valueCustomerProfileId2 != null && valueCustomerProfileId2 !== '')
		vals['customerProfileId2'] = valueCustomerProfileId2;

	var valueCustomerProfileId3 = $formValues.find('.valueCustomerProfileId3').val();
	if(valueCustomerProfileId3 != null && valueCustomerProfileId3 !== '')
		vals['customerProfileId3'] = valueCustomerProfileId3;

	var valueCustomerProfileId4 = $formValues.find('.valueCustomerProfileId4').val();
	if(valueCustomerProfileId4 != null && valueCustomerProfileId4 !== '')
		vals['customerProfileId4'] = valueCustomerProfileId4;

	var valueCustomerProfileId5 = $formValues.find('.valueCustomerProfileId5').val();
	if(valueCustomerProfileId5 != null && valueCustomerProfileId5 !== '')
		vals['customerProfileId5'] = valueCustomerProfileId5;

	var valueCustomerProfileId6 = $formValues.find('.valueCustomerProfileId6').val();
	if(valueCustomerProfileId6 != null && valueCustomerProfileId6 !== '')
		vals['customerProfileId6'] = valueCustomerProfileId6;

	var valueCustomerProfileId7 = $formValues.find('.valueCustomerProfileId7').val();
	if(valueCustomerProfileId7 != null && valueCustomerProfileId7 !== '')
		vals['customerProfileId7'] = valueCustomerProfileId7;

	var valueCustomerProfileId8 = $formValues.find('.valueCustomerProfileId8').val();
	if(valueCustomerProfileId8 != null && valueCustomerProfileId8 !== '')
		vals['customerProfileId8'] = valueCustomerProfileId8;

	var valueCustomerProfileId9 = $formValues.find('.valueCustomerProfileId9').val();
	if(valueCustomerProfileId9 != null && valueCustomerProfileId9 !== '')
		vals['customerProfileId9'] = valueCustomerProfileId9;

	var valueCustomerProfileId10 = $formValues.find('.valueCustomerProfileId10').val();
	if(valueCustomerProfileId10 != null && valueCustomerProfileId10 !== '')
		vals['customerProfileId10'] = valueCustomerProfileId10;

	$.ajax({
		url: '/api/user'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSiteUserVals(vals, success, error) {
	$.ajax({
		url: '/api/user'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

async function websocketSiteUser(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SiteUserForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-gray ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-user-cog w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify site users');
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
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).remove();
					$('.top-box').append($box);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
			$('#Page_enrollmentKeys_add').text('add an enrollment');
			$('#Page_enrollmentKeys_add').removeClass('w3-disabled');
			$('#Page_enrollmentKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolPayment', function (error, message) {
			$('#Page_paymentKeys').trigger('oninput');
			$('#Page_paymentKeys_add').text('add a payment');
			$('#Page_paymentKeys_add').removeClass('w3-disabled');
			$('#Page_paymentKeys_add').attr('disabled', false);
		});
	}
}
async function websocketSiteUserInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSiteUserVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSiteUser' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSiteUser' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSiteUser' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSiteUser' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSiteUser' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSiteUser' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Deleted'));
			}
			var val = o['userReceiveEmails'];
			if(vars.includes('userReceiveEmails')) {
				$('.inputSiteUser' + pk + 'UserReceiveEmails').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserReceiveEmails').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserReceiveEmails'));
			}
			var val = o['seeArchived'];
			if(vars.includes('seeArchived')) {
				$('.inputSiteUser' + pk + 'SeeArchived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'SeeArchived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'SeeArchived'));
			}
			var val = o['seeDeleted'];
			if(vars.includes('seeDeleted')) {
				$('.inputSiteUser' + pk + 'SeeDeleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'SeeDeleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'SeeDeleted'));
			}
			var val = o['enrollmentKeys'];
			if(vars.includes('enrollmentKeys')) {
				$('.inputSiteUser' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'EnrollmentKeys'));
			}
			var val = o['paymentKeys'];
			if(vars.includes('paymentKeys')) {
				$('.inputSiteUser' + pk + 'PaymentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'PaymentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'PaymentKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSiteUser' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSiteUser' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSiteUser' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSiteUser' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSiteUser' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSiteUser' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSiteUser' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSiteUser' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSiteUser' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSiteUser' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSiteUser' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSiteUser' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSiteUser' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSiteUser' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSiteUser' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'PageUrlApi'));
			}
			var val = o['userKeys'];
			if(vars.includes('userKeys')) {
				$('.inputSiteUser' + pk + 'UserKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserKeys'));
			}
			var val = o['userName'];
			if(vars.includes('userName')) {
				$('.inputSiteUser' + pk + 'UserName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserName'));
			}
			var val = o['userEmail'];
			if(vars.includes('userEmail')) {
				$('.inputSiteUser' + pk + 'UserEmail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserEmail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserEmail'));
			}
			var val = o['userFirstName'];
			if(vars.includes('userFirstName')) {
				$('.inputSiteUser' + pk + 'UserFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserFirstName'));
			}
			var val = o['userLastName'];
			if(vars.includes('userLastName')) {
				$('.inputSiteUser' + pk + 'UserLastName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserLastName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserLastName'));
			}
			var val = o['userFullName'];
			if(vars.includes('userFullName')) {
				$('.inputSiteUser' + pk + 'UserFullName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserFullName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserFullName'));
			}
			var val = o['userSite'];
			if(vars.includes('userSite')) {
				$('.inputSiteUser' + pk + 'UserSite').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserSite').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserSite'));
			}
			var val = o['customerProfileId1'];
			if(vars.includes('customerProfileId1')) {
				$('.inputSiteUser' + pk + 'CustomerProfileId1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'CustomerProfileId1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'CustomerProfileId1'));
			}
			var val = o['customerProfileId2'];
			if(vars.includes('customerProfileId2')) {
				$('.inputSiteUser' + pk + 'CustomerProfileId2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'CustomerProfileId2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'CustomerProfileId2'));
			}
			var val = o['customerProfileId3'];
			if(vars.includes('customerProfileId3')) {
				$('.inputSiteUser' + pk + 'CustomerProfileId3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'CustomerProfileId3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'CustomerProfileId3'));
			}
			var val = o['customerProfileId4'];
			if(vars.includes('customerProfileId4')) {
				$('.inputSiteUser' + pk + 'CustomerProfileId4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'CustomerProfileId4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'CustomerProfileId4'));
			}
			var val = o['customerProfileId5'];
			if(vars.includes('customerProfileId5')) {
				$('.inputSiteUser' + pk + 'CustomerProfileId5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'CustomerProfileId5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'CustomerProfileId5'));
			}
			var val = o['customerProfileId6'];
			if(vars.includes('customerProfileId6')) {
				$('.inputSiteUser' + pk + 'CustomerProfileId6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'CustomerProfileId6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'CustomerProfileId6'));
			}
			var val = o['customerProfileId7'];
			if(vars.includes('customerProfileId7')) {
				$('.inputSiteUser' + pk + 'CustomerProfileId7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'CustomerProfileId7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'CustomerProfileId7'));
			}
			var val = o['customerProfileId8'];
			if(vars.includes('customerProfileId8')) {
				$('.inputSiteUser' + pk + 'CustomerProfileId8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'CustomerProfileId8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'CustomerProfileId8'));
			}
			var val = o['customerProfileId9'];
			if(vars.includes('customerProfileId9')) {
				$('.inputSiteUser' + pk + 'CustomerProfileId9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'CustomerProfileId9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'CustomerProfileId9'));
			}
			var val = o['customerProfileId10'];
			if(vars.includes('customerProfileId10')) {
				$('.inputSiteUser' + pk + 'CustomerProfileId10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'CustomerProfileId10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'CustomerProfileId10'));
			}
		});
	}
}

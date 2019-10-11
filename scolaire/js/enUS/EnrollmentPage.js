
// POST //

function postSchoolEnrollment($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrl'];
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

	var valueEnrollmentId = $formValues.find('.valueEnrollmentId').val();
	if(valueEnrollmentId != null && valueEnrollmentId !== '')
		vals['enrollmentId'] = valueEnrollmentId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
		vals['enrollmentApproved'] = valueEnrollmentApproved;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
		vals['enrollmentImmunizations'] = valueEnrollmentImmunizations;

	var valueEnrollmentGroupName = $formValues.find('.valueEnrollmentGroupName').val();
	if(valueEnrollmentGroupName != null && valueEnrollmentGroupName !== '')
		vals['enrollmentGroupName'] = valueEnrollmentGroupName;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(valueEnrollmentPaymentComplete != null && valueEnrollmentPaymentComplete !== '')
		vals['enrollmentPaymentComplete'] = valueEnrollmentPaymentComplete;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
		vals['enrollmentPaymentEachMonth'] = valueEnrollmentPaymentEachMonth;

	var valueFamilyMarried = $formValues.find('.valueFamilyMarried').prop('checked');
	if(valueFamilyMarried != null && valueFamilyMarried !== '')
		vals['familyMarried'] = valueFamilyMarried;

	var valueFamilySeparated = $formValues.find('.valueFamilySeparated').prop('checked');
	if(valueFamilySeparated != null && valueFamilySeparated !== '')
		vals['familySeparated'] = valueFamilySeparated;

	var valueFamilyDivorced = $formValues.find('.valueFamilyDivorced').prop('checked');
	if(valueFamilyDivorced != null && valueFamilyDivorced !== '')
		vals['familyDivorced'] = valueFamilyDivorced;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
		vals['familyAddress'] = valueFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
		vals['enrollmentSpecialConsiderations'] = valueEnrollmentSpecialConsiderations;

	var valueFamilyHowDoYouKnowTheSchool = $formValues.find('.valueFamilyHowDoYouKnowTheSchool').val();
	if(valueFamilyHowDoYouKnowTheSchool != null && valueFamilyHowDoYouKnowTheSchool !== '')
		vals['familyHowDoYouKnowTheSchool'] = valueFamilyHowDoYouKnowTheSchool;

	var valueBlockKeys = $formValues.find('.valueBlockKeys').val();
	if(valueBlockKeys != null && valueBlockKeys !== '')
		vals['blockKeys'] = valueBlockKeys;

	var valueChildKey = $formValues.find('.valueChildKey').val();
	if(valueChildKey != null && valueChildKey !== '')
		vals['childKey'] = valueChildKey;

	var valueMomKeys = $formValues.find('.valueMomKeys').val();
	if(valueMomKeys != null && valueMomKeys !== '')
		vals['momKeys'] = valueMomKeys;

	var valueDadKeys = $formValues.find('.valueDadKeys').val();
	if(valueDadKeys != null && valueDadKeys !== '')
		vals['dadKeys'] = valueDadKeys;

	var valueGuardianKeys = $formValues.find('.valueGuardianKeys').val();
	if(valueGuardianKeys != null && valueGuardianKeys !== '')
		vals['guardianKeys'] = valueGuardianKeys;

	var valuePaymentKeys = $formValues.find('.valuePaymentKeys').val();
	if(valuePaymentKeys != null && valuePaymentKeys !== '')
		vals['paymentKeys'] = valuePaymentKeys;

	var valueEnrollmentCompleteName = $formValues.find('.valueEnrollmentCompleteName').val();
	if(valueEnrollmentCompleteName != null && valueEnrollmentCompleteName !== '')
		vals['enrollmentCompleteName'] = valueEnrollmentCompleteName;

	$.ajax({
		url: '/api/enrollment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolEnrollmentVals(vals, success, error) {
	$.ajax({
		url: '/api/enrollment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchSchoolEnrollment($formFilters, $formValues, success, error) {
	var filters = patchSchoolEnrollmentFilters($formFilters);

	var vals = {};

	var removePk = $formFilters.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formValues.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var removeCreated = $formFilters.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	var addCreated = $formValues.find('.addCreated').val();
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var removeModified = $formFilters.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	var addModified = $formValues.find('.addModified').val();
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var removeEnrollmentId = $formFilters.find('.removeEnrollmentId').val() === 'true';
	var setEnrollmentId = removeEnrollmentId ? null : $formValues.find('.setEnrollmentId').val();
	if(removeEnrollmentId || setEnrollmentId != null && setEnrollmentId !== '')
		vals['setEnrollmentId'] = setEnrollmentId;
	var addEnrollmentId = $formValues.find('.addEnrollmentId').val();
	if(addEnrollmentId != null && addEnrollmentId !== '')
		vals['addEnrollmentId'] = addEnrollmentId;
	var removeEnrollmentId = $formValues.find('.removeEnrollmentId').val();
	if(removeEnrollmentId != null && removeEnrollmentId !== '')
		vals['removeEnrollmentId'] = removeEnrollmentId;

	var removeArchived = $formFilters.find('.removeArchived').val() === 'true';
	var setArchived = removeArchived ? null : $formValues.find('.setArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var removeDeleted = $formFilters.find('.removeDeleted').val() === 'true';
	var setDeleted = removeDeleted ? null : $formValues.find('.setDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var removeEnrollmentApproved = $formFilters.find('.removeEnrollmentApproved').val() === 'true';
	var setEnrollmentApproved = removeEnrollmentApproved ? null : $formValues.find('.setEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved || setEnrollmentApproved != null && setEnrollmentApproved !== '')
		vals['setEnrollmentApproved'] = setEnrollmentApproved;
	var addEnrollmentApproved = $formValues.find('.addEnrollmentApproved').prop('checked');
	if(addEnrollmentApproved != null && addEnrollmentApproved !== '')
		vals['addEnrollmentApproved'] = addEnrollmentApproved;
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved != null && removeEnrollmentApproved !== '')
		vals['removeEnrollmentApproved'] = removeEnrollmentApproved;

	var removeEnrollmentImmunizations = $formFilters.find('.removeEnrollmentImmunizations').val() === 'true';
	var setEnrollmentImmunizations = removeEnrollmentImmunizations ? null : $formValues.find('.setEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations || setEnrollmentImmunizations != null && setEnrollmentImmunizations !== '')
		vals['setEnrollmentImmunizations'] = setEnrollmentImmunizations;
	var addEnrollmentImmunizations = $formValues.find('.addEnrollmentImmunizations').prop('checked');
	if(addEnrollmentImmunizations != null && addEnrollmentImmunizations !== '')
		vals['addEnrollmentImmunizations'] = addEnrollmentImmunizations;
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations != null && removeEnrollmentImmunizations !== '')
		vals['removeEnrollmentImmunizations'] = removeEnrollmentImmunizations;

	var removeEnrollmentGroupName = $formFilters.find('.removeEnrollmentGroupName').val() === 'true';
	var setEnrollmentGroupName = removeEnrollmentGroupName ? null : $formValues.find('.setEnrollmentGroupName').val();
	if(removeEnrollmentGroupName || setEnrollmentGroupName != null && setEnrollmentGroupName !== '')
		vals['setEnrollmentGroupName'] = setEnrollmentGroupName;
	var addEnrollmentGroupName = $formValues.find('.addEnrollmentGroupName').val();
	if(addEnrollmentGroupName != null && addEnrollmentGroupName !== '')
		vals['addEnrollmentGroupName'] = addEnrollmentGroupName;
	var removeEnrollmentGroupName = $formValues.find('.removeEnrollmentGroupName').val();
	if(removeEnrollmentGroupName != null && removeEnrollmentGroupName !== '')
		vals['removeEnrollmentGroupName'] = removeEnrollmentGroupName;

	var removeEnrollmentPaymentComplete = $formFilters.find('.removeEnrollmentPaymentComplete').val() === 'true';
	var setEnrollmentPaymentComplete = removeEnrollmentPaymentComplete ? null : $formValues.find('.setEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete || setEnrollmentPaymentComplete != null && setEnrollmentPaymentComplete !== '')
		vals['setEnrollmentPaymentComplete'] = setEnrollmentPaymentComplete;
	var addEnrollmentPaymentComplete = $formValues.find('.addEnrollmentPaymentComplete').prop('checked');
	if(addEnrollmentPaymentComplete != null && addEnrollmentPaymentComplete !== '')
		vals['addEnrollmentPaymentComplete'] = addEnrollmentPaymentComplete;
	var removeEnrollmentPaymentComplete = $formValues.find('.removeEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete != null && removeEnrollmentPaymentComplete !== '')
		vals['removeEnrollmentPaymentComplete'] = removeEnrollmentPaymentComplete;

	var removeEnrollmentPaymentEachMonth = $formFilters.find('.removeEnrollmentPaymentEachMonth').val() === 'true';
	var setEnrollmentPaymentEachMonth = removeEnrollmentPaymentEachMonth ? null : $formValues.find('.setEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth || setEnrollmentPaymentEachMonth != null && setEnrollmentPaymentEachMonth !== '')
		vals['setEnrollmentPaymentEachMonth'] = setEnrollmentPaymentEachMonth;
	var addEnrollmentPaymentEachMonth = $formValues.find('.addEnrollmentPaymentEachMonth').prop('checked');
	if(addEnrollmentPaymentEachMonth != null && addEnrollmentPaymentEachMonth !== '')
		vals['addEnrollmentPaymentEachMonth'] = addEnrollmentPaymentEachMonth;
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth != null && removeEnrollmentPaymentEachMonth !== '')
		vals['removeEnrollmentPaymentEachMonth'] = removeEnrollmentPaymentEachMonth;

	var removeFamilyMarried = $formFilters.find('.removeFamilyMarried').val() === 'true';
	var setFamilyMarried = removeFamilyMarried ? null : $formValues.find('.setFamilyMarried').prop('checked');
	if(removeFamilyMarried || setFamilyMarried != null && setFamilyMarried !== '')
		vals['setFamilyMarried'] = setFamilyMarried;
	var addFamilyMarried = $formValues.find('.addFamilyMarried').prop('checked');
	if(addFamilyMarried != null && addFamilyMarried !== '')
		vals['addFamilyMarried'] = addFamilyMarried;
	var removeFamilyMarried = $formValues.find('.removeFamilyMarried').prop('checked');
	if(removeFamilyMarried != null && removeFamilyMarried !== '')
		vals['removeFamilyMarried'] = removeFamilyMarried;

	var removeFamilySeparated = $formFilters.find('.removeFamilySeparated').val() === 'true';
	var setFamilySeparated = removeFamilySeparated ? null : $formValues.find('.setFamilySeparated').prop('checked');
	if(removeFamilySeparated || setFamilySeparated != null && setFamilySeparated !== '')
		vals['setFamilySeparated'] = setFamilySeparated;
	var addFamilySeparated = $formValues.find('.addFamilySeparated').prop('checked');
	if(addFamilySeparated != null && addFamilySeparated !== '')
		vals['addFamilySeparated'] = addFamilySeparated;
	var removeFamilySeparated = $formValues.find('.removeFamilySeparated').prop('checked');
	if(removeFamilySeparated != null && removeFamilySeparated !== '')
		vals['removeFamilySeparated'] = removeFamilySeparated;

	var removeFamilyDivorced = $formFilters.find('.removeFamilyDivorced').val() === 'true';
	var setFamilyDivorced = removeFamilyDivorced ? null : $formValues.find('.setFamilyDivorced').prop('checked');
	if(removeFamilyDivorced || setFamilyDivorced != null && setFamilyDivorced !== '')
		vals['setFamilyDivorced'] = setFamilyDivorced;
	var addFamilyDivorced = $formValues.find('.addFamilyDivorced').prop('checked');
	if(addFamilyDivorced != null && addFamilyDivorced !== '')
		vals['addFamilyDivorced'] = addFamilyDivorced;
	var removeFamilyDivorced = $formValues.find('.removeFamilyDivorced').prop('checked');
	if(removeFamilyDivorced != null && removeFamilyDivorced !== '')
		vals['removeFamilyDivorced'] = removeFamilyDivorced;

	var removeFamilyAddress = $formFilters.find('.removeFamilyAddress').val() === 'true';
	var setFamilyAddress = removeFamilyAddress ? null : $formValues.find('.setFamilyAddress').val();
	if(removeFamilyAddress || setFamilyAddress != null && setFamilyAddress !== '')
		vals['setFamilyAddress'] = setFamilyAddress;
	var addFamilyAddress = $formValues.find('.addFamilyAddress').val();
	if(addFamilyAddress != null && addFamilyAddress !== '')
		vals['addFamilyAddress'] = addFamilyAddress;
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val();
	if(removeFamilyAddress != null && removeFamilyAddress !== '')
		vals['removeFamilyAddress'] = removeFamilyAddress;

	var removeEnrollmentSpecialConsiderations = $formFilters.find('.removeEnrollmentSpecialConsiderations').val() === 'true';
	var setEnrollmentSpecialConsiderations = removeEnrollmentSpecialConsiderations ? null : $formValues.find('.setEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations || setEnrollmentSpecialConsiderations != null && setEnrollmentSpecialConsiderations !== '')
		vals['setEnrollmentSpecialConsiderations'] = setEnrollmentSpecialConsiderations;
	var addEnrollmentSpecialConsiderations = $formValues.find('.addEnrollmentSpecialConsiderations').val();
	if(addEnrollmentSpecialConsiderations != null && addEnrollmentSpecialConsiderations !== '')
		vals['addEnrollmentSpecialConsiderations'] = addEnrollmentSpecialConsiderations;
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations != null && removeEnrollmentSpecialConsiderations !== '')
		vals['removeEnrollmentSpecialConsiderations'] = removeEnrollmentSpecialConsiderations;

	var removeFamilyHowDoYouKnowTheSchool = $formFilters.find('.removeFamilyHowDoYouKnowTheSchool').val() === 'true';
	var setFamilyHowDoYouKnowTheSchool = removeFamilyHowDoYouKnowTheSchool ? null : $formValues.find('.setFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool || setFamilyHowDoYouKnowTheSchool != null && setFamilyHowDoYouKnowTheSchool !== '')
		vals['setFamilyHowDoYouKnowTheSchool'] = setFamilyHowDoYouKnowTheSchool;
	var addFamilyHowDoYouKnowTheSchool = $formValues.find('.addFamilyHowDoYouKnowTheSchool').val();
	if(addFamilyHowDoYouKnowTheSchool != null && addFamilyHowDoYouKnowTheSchool !== '')
		vals['addFamilyHowDoYouKnowTheSchool'] = addFamilyHowDoYouKnowTheSchool;
	var removeFamilyHowDoYouKnowTheSchool = $formValues.find('.removeFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool != null && removeFamilyHowDoYouKnowTheSchool !== '')
		vals['removeFamilyHowDoYouKnowTheSchool'] = removeFamilyHowDoYouKnowTheSchool;

	var removeBlockKeys = $formFilters.find('.removeBlockKeys').val() === 'true';
	var setBlockKeys = removeBlockKeys ? null : $formValues.find('.setBlockKeys').val();
	if(removeBlockKeys || setBlockKeys != null && setBlockKeys !== '')
		vals['setBlockKeys'] = setBlockKeys;
	var addBlockKeys = $formValues.find('.addBlockKeys').val();
	if(addBlockKeys != null && addBlockKeys !== '')
		vals['addBlockKeys'] = addBlockKeys;
	var removeBlockKeys = $formValues.find('.removeBlockKeys').val();
	if(removeBlockKeys != null && removeBlockKeys !== '')
		vals['removeBlockKeys'] = removeBlockKeys;

	var removeChildKey = $formFilters.find('.removeChildKey').val() === 'true';
	var setChildKey = removeChildKey ? null : $formValues.find('.setChildKey').val();
	if(removeChildKey || setChildKey != null && setChildKey !== '')
		vals['setChildKey'] = setChildKey;
	var addChildKey = $formValues.find('.addChildKey').val();
	if(addChildKey != null && addChildKey !== '')
		vals['addChildKey'] = addChildKey;
	var removeChildKey = $formValues.find('.removeChildKey').val();
	if(removeChildKey != null && removeChildKey !== '')
		vals['removeChildKey'] = removeChildKey;

	var removeMomKeys = $formFilters.find('.removeMomKeys').val() === 'true';
	var setMomKeys = removeMomKeys ? null : $formValues.find('.setMomKeys').val();
	if(removeMomKeys || setMomKeys != null && setMomKeys !== '')
		vals['setMomKeys'] = setMomKeys;
	var addMomKeys = $formValues.find('.addMomKeys').val();
	if(addMomKeys != null && addMomKeys !== '')
		vals['addMomKeys'] = addMomKeys;
	var removeMomKeys = $formValues.find('.removeMomKeys').val();
	if(removeMomKeys != null && removeMomKeys !== '')
		vals['removeMomKeys'] = removeMomKeys;

	var removeDadKeys = $formFilters.find('.removeDadKeys').val() === 'true';
	var setDadKeys = removeDadKeys ? null : $formValues.find('.setDadKeys').val();
	if(removeDadKeys || setDadKeys != null && setDadKeys !== '')
		vals['setDadKeys'] = setDadKeys;
	var addDadKeys = $formValues.find('.addDadKeys').val();
	if(addDadKeys != null && addDadKeys !== '')
		vals['addDadKeys'] = addDadKeys;
	var removeDadKeys = $formValues.find('.removeDadKeys').val();
	if(removeDadKeys != null && removeDadKeys !== '')
		vals['removeDadKeys'] = removeDadKeys;

	var removeGuardianKeys = $formFilters.find('.removeGuardianKeys').val() === 'true';
	var setGuardianKeys = removeGuardianKeys ? null : $formValues.find('.setGuardianKeys').val();
	if(removeGuardianKeys || setGuardianKeys != null && setGuardianKeys !== '')
		vals['setGuardianKeys'] = setGuardianKeys;
	var addGuardianKeys = $formValues.find('.addGuardianKeys').val();
	if(addGuardianKeys != null && addGuardianKeys !== '')
		vals['addGuardianKeys'] = addGuardianKeys;
	var removeGuardianKeys = $formValues.find('.removeGuardianKeys').val();
	if(removeGuardianKeys != null && removeGuardianKeys !== '')
		vals['removeGuardianKeys'] = removeGuardianKeys;

	var removePaymentKeys = $formFilters.find('.removePaymentKeys').val() === 'true';
	var setPaymentKeys = removePaymentKeys ? null : $formValues.find('.setPaymentKeys').val();
	if(removePaymentKeys || setPaymentKeys != null && setPaymentKeys !== '')
		vals['setPaymentKeys'] = setPaymentKeys;
	var addPaymentKeys = $formValues.find('.addPaymentKeys').val();
	if(addPaymentKeys != null && addPaymentKeys !== '')
		vals['addPaymentKeys'] = addPaymentKeys;
	var removePaymentKeys = $formValues.find('.removePaymentKeys').val();
	if(removePaymentKeys != null && removePaymentKeys !== '')
		vals['removePaymentKeys'] = removePaymentKeys;

	var removeEnrollmentCompleteName = $formFilters.find('.removeEnrollmentCompleteName').val() === 'true';
	var setEnrollmentCompleteName = removeEnrollmentCompleteName ? null : $formValues.find('.setEnrollmentCompleteName').val();
	if(removeEnrollmentCompleteName || setEnrollmentCompleteName != null && setEnrollmentCompleteName !== '')
		vals['setEnrollmentCompleteName'] = setEnrollmentCompleteName;
	var addEnrollmentCompleteName = $formValues.find('.addEnrollmentCompleteName').val();
	if(addEnrollmentCompleteName != null && addEnrollmentCompleteName !== '')
		vals['addEnrollmentCompleteName'] = addEnrollmentCompleteName;
	var removeEnrollmentCompleteName = $formValues.find('.removeEnrollmentCompleteName').val();
	if(removeEnrollmentCompleteName != null && removeEnrollmentCompleteName !== '')
		vals['removeEnrollmentCompleteName'] = removeEnrollmentCompleteName;

	patchSchoolEnrollmentVals(filters, vals, success, error);
}

function patchSchoolEnrollmentFilters($formFilters) {
	var filters = [];

	var filterPk = $formFilters.find('.valuePk').val();
	if(filterPk != null && filterPk !== '')
		filters.push({ name: 'fq', value: 'pk:' + filterPk });

	var filterCreated = $formFilters.find('.valueCreated').val();
	if(filterCreated != null && filterCreated !== '')
		filters.push({ name: 'fq', value: 'created:' + filterCreated });

	var filterModified = $formFilters.find('.valueModified').val();
	if(filterModified != null && filterModified !== '')
		filters.push({ name: 'fq', value: 'modified:' + filterModified });

	var filterEnrollmentId = $formFilters.find('.valueEnrollmentId').val();
	if(filterEnrollmentId != null && filterEnrollmentId !== '')
		filters.push({ name: 'fq', value: 'enrollmentId:' + filterEnrollmentId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterEnrollmentApproved = $formFilters.find('.valueEnrollmentApproved').prop('checked');
	if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
		filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

	var filterEnrollmentImmunizations = $formFilters.find('.valueEnrollmentImmunizations').prop('checked');
	if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
		filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

	var filterEnrollmentGroupName = $formFilters.find('.valueEnrollmentGroupName').val();
	if(filterEnrollmentGroupName != null && filterEnrollmentGroupName !== '')
		filters.push({ name: 'fq', value: 'enrollmentGroupName:' + filterEnrollmentGroupName });

	var filterEnrollmentPaymentComplete = $formFilters.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
		filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

	var filterEnrollmentPaymentEachMonth = $formFilters.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
		filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

	var filterFamilyMarried = $formFilters.find('.valueFamilyMarried').prop('checked');
	if(filterFamilyMarried != null && filterFamilyMarried === true)
		filters.push({ name: 'fq', value: 'familyMarried:' + filterFamilyMarried });

	var filterFamilySeparated = $formFilters.find('.valueFamilySeparated').prop('checked');
	if(filterFamilySeparated != null && filterFamilySeparated === true)
		filters.push({ name: 'fq', value: 'familySeparated:' + filterFamilySeparated });

	var filterFamilyDivorced = $formFilters.find('.valueFamilyDivorced').prop('checked');
	if(filterFamilyDivorced != null && filterFamilyDivorced === true)
		filters.push({ name: 'fq', value: 'familyDivorced:' + filterFamilyDivorced });

	var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
	if(filterFamilyAddress != null && filterFamilyAddress !== '')
		filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

	var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
	if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
		filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

	var filterFamilyHowDoYouKnowTheSchool = $formFilters.find('.valueFamilyHowDoYouKnowTheSchool').val();
	if(filterFamilyHowDoYouKnowTheSchool != null && filterFamilyHowDoYouKnowTheSchool !== '')
		filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheSchool:' + filterFamilyHowDoYouKnowTheSchool });

	var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
	if(filterBlockKeys != null && filterBlockKeys !== '')
		filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

	var filterChildKey = $formFilters.find('.valueChildKey').val();
	if(filterChildKey != null && filterChildKey !== '')
		filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

	var filterMomKeys = $formFilters.find('.valueMomKeys').val();
	if(filterMomKeys != null && filterMomKeys !== '')
		filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

	var filterDadKeys = $formFilters.find('.valueDadKeys').val();
	if(filterDadKeys != null && filterDadKeys !== '')
		filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

	var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
	if(filterGuardianKeys != null && filterGuardianKeys !== '')
		filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

	var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
	if(filterPaymentKeys != null && filterPaymentKeys !== '')
		filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

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

	var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
	if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

	var filterYearKey = $formFilters.find('.valueYearKey').val();
	if(filterYearKey != null && filterYearKey !== '')
		filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

	var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
	if(filterSeasonKey != null && filterSeasonKey !== '')
		filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

	var filterSessionKey = $formFilters.find('.valueSessionKey').val();
	if(filterSessionKey != null && filterSessionKey !== '')
		filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

	var filterAgeKey = $formFilters.find('.valueAgeKey').val();
	if(filterAgeKey != null && filterAgeKey !== '')
		filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

	var filterBlockKey = $formFilters.find('.valueBlockKey').val();
	if(filterBlockKey != null && filterBlockKey !== '')
		filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

	var filterEducationSort = $formFilters.find('.valueEducationSort').val();
	if(filterEducationSort != null && filterEducationSort !== '')
		filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

	var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
	if(filterSchoolSort != null && filterSchoolSort !== '')
		filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

	var filterYearSort = $formFilters.find('.valueYearSort').val();
	if(filterYearSort != null && filterYearSort !== '')
		filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

	var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
	if(filterSeasonSort != null && filterSeasonSort !== '')
		filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

	var filterSessionSort = $formFilters.find('.valueSessionSort').val();
	if(filterSessionSort != null && filterSessionSort !== '')
		filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

	var filterAgeSort = $formFilters.find('.valueAgeSort').val();
	if(filterAgeSort != null && filterAgeSort !== '')
		filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

	var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
	if(filterChildCompleteName != null && filterChildCompleteName !== '')
		filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });

	var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
	if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
		filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

	var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
	if(filterSchoolLocation != null && filterSchoolLocation !== '')
		filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

	var filterYearStart = $formFilters.find('.valueYearStart').val();
	if(filterYearStart != null && filterYearStart !== '')
		filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

	var filterYearEnd = $formFilters.find('.valueYearEnd').val();
	if(filterYearEnd != null && filterYearEnd !== '')
		filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

	var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
	if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
		filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

	var filterSeasonSummer = $formFilters.find('.valueSeasonSummer').prop('checked');
	if(filterSeasonSummer != null && filterSeasonSummer === true)
		filters.push({ name: 'fq', value: 'seasonSummer:' + filterSeasonSummer });

	var filterSeasonWinter = $formFilters.find('.valueSeasonWinter').prop('checked');
	if(filterSeasonWinter != null && filterSeasonWinter === true)
		filters.push({ name: 'fq', value: 'seasonWinter:' + filterSeasonWinter });

	var filterSeasonEnrollmentFee = $formFilters.find('.valueSeasonEnrollmentFee').val();
	if(filterSeasonEnrollmentFee != null && filterSeasonEnrollmentFee !== '')
		filters.push({ name: 'fq', value: 'seasonEnrollmentFee:' + filterSeasonEnrollmentFee });

	var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
	if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
		filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });

	var filterSessionStartDay = $formFilters.find('.valueSessionStartDay').val();
	if(filterSessionStartDay != null && filterSessionStartDay !== '')
		filters.push({ name: 'fq', value: 'sessionStartDay:' + filterSessionStartDay });

	var filterSessionEndDay = $formFilters.find('.valueSessionEndDay').val();
	if(filterSessionEndDay != null && filterSessionEndDay !== '')
		filters.push({ name: 'fq', value: 'sessionEndDay:' + filterSessionEndDay });

	var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
	if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
		filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

	var filterAgeStart = $formFilters.find('.valueAgeStart').val();
	if(filterAgeStart != null && filterAgeStart !== '')
		filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

	var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
	if(filterAgeEnd != null && filterAgeEnd !== '')
		filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

	var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
	if(filterBlockStartTime != null && filterBlockStartTime !== '')
		filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

	var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
	if(filterBlockEndTime != null && filterBlockEndTime !== '')
		filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

	var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
	if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
		filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

	var filterBlockSunday = $formFilters.find('.valueBlockSunday').prop('checked');
	if(filterBlockSunday != null && filterBlockSunday === true)
		filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

	var filterBlockMonday = $formFilters.find('.valueBlockMonday').prop('checked');
	if(filterBlockMonday != null && filterBlockMonday === true)
		filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

	var filterBlockTuesday = $formFilters.find('.valueBlockTuesday').prop('checked');
	if(filterBlockTuesday != null && filterBlockTuesday === true)
		filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

	var filterBlockWednesday = $formFilters.find('.valueBlockWednesday').prop('checked');
	if(filterBlockWednesday != null && filterBlockWednesday === true)
		filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

	var filterBlockThursday = $formFilters.find('.valueBlockThursday').prop('checked');
	if(filterBlockThursday != null && filterBlockThursday === true)
		filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

	var filterBlockFriday = $formFilters.find('.valueBlockFriday').prop('checked');
	if(filterBlockFriday != null && filterBlockFriday === true)
		filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

	var filterBlockSaturday = $formFilters.find('.valueBlockSaturday').prop('checked');
	if(filterBlockSaturday != null && filterBlockSaturday === true)
		filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

	var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
	if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
		filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

	var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
	if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
		filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
	return filters;
}

function patchSchoolEnrollmentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolEnrollmentVals(filters, vals, success, error);
}

function patchSchoolEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getSchoolEnrollment(pk) {
	$.ajax({
		url: '/api/enrollment/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteSchoolEnrollment(pk) {
	$.ajax({
		url: '/api/enrollment/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

function searchSchoolEnrollment($formFilters, success, error) {
	var filters = searchSchoolEnrollmentFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolEnrollmentVals(filters, success, error);
}

function searchSchoolEnrollmentFilters($formFilters) {
	var filters = [];

	var filterPk = $formFilters.find('.valuePk').val();
	if(filterPk != null && filterPk !== '')
		filters.push({ name: 'fq', value: 'pk:' + filterPk });

	var filterCreated = $formFilters.find('.valueCreated').val();
	if(filterCreated != null && filterCreated !== '')
		filters.push({ name: 'fq', value: 'created:' + filterCreated });

	var filterModified = $formFilters.find('.valueModified').val();
	if(filterModified != null && filterModified !== '')
		filters.push({ name: 'fq', value: 'modified:' + filterModified });

	var filterEnrollmentId = $formFilters.find('.valueEnrollmentId').val();
	if(filterEnrollmentId != null && filterEnrollmentId !== '')
		filters.push({ name: 'fq', value: 'enrollmentId:' + filterEnrollmentId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterEnrollmentApproved = $formFilters.find('.valueEnrollmentApproved').prop('checked');
	if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
		filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

	var filterEnrollmentImmunizations = $formFilters.find('.valueEnrollmentImmunizations').prop('checked');
	if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
		filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

	var filterEnrollmentGroupName = $formFilters.find('.valueEnrollmentGroupName').val();
	if(filterEnrollmentGroupName != null && filterEnrollmentGroupName !== '')
		filters.push({ name: 'fq', value: 'enrollmentGroupName:' + filterEnrollmentGroupName });

	var filterEnrollmentPaymentComplete = $formFilters.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
		filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

	var filterEnrollmentPaymentEachMonth = $formFilters.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
		filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

	var filterFamilyMarried = $formFilters.find('.valueFamilyMarried').prop('checked');
	if(filterFamilyMarried != null && filterFamilyMarried === true)
		filters.push({ name: 'fq', value: 'familyMarried:' + filterFamilyMarried });

	var filterFamilySeparated = $formFilters.find('.valueFamilySeparated').prop('checked');
	if(filterFamilySeparated != null && filterFamilySeparated === true)
		filters.push({ name: 'fq', value: 'familySeparated:' + filterFamilySeparated });

	var filterFamilyDivorced = $formFilters.find('.valueFamilyDivorced').prop('checked');
	if(filterFamilyDivorced != null && filterFamilyDivorced === true)
		filters.push({ name: 'fq', value: 'familyDivorced:' + filterFamilyDivorced });

	var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
	if(filterFamilyAddress != null && filterFamilyAddress !== '')
		filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

	var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
	if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
		filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

	var filterFamilyHowDoYouKnowTheSchool = $formFilters.find('.valueFamilyHowDoYouKnowTheSchool').val();
	if(filterFamilyHowDoYouKnowTheSchool != null && filterFamilyHowDoYouKnowTheSchool !== '')
		filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheSchool:' + filterFamilyHowDoYouKnowTheSchool });

	var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
	if(filterBlockKeys != null && filterBlockKeys !== '')
		filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

	var filterChildKey = $formFilters.find('.valueChildKey').val();
	if(filterChildKey != null && filterChildKey !== '')
		filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

	var filterMomKeys = $formFilters.find('.valueMomKeys').val();
	if(filterMomKeys != null && filterMomKeys !== '')
		filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

	var filterDadKeys = $formFilters.find('.valueDadKeys').val();
	if(filterDadKeys != null && filterDadKeys !== '')
		filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

	var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
	if(filterGuardianKeys != null && filterGuardianKeys !== '')
		filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

	var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
	if(filterPaymentKeys != null && filterPaymentKeys !== '')
		filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

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

	var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
	if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

	var filterYearKey = $formFilters.find('.valueYearKey').val();
	if(filterYearKey != null && filterYearKey !== '')
		filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

	var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
	if(filterSeasonKey != null && filterSeasonKey !== '')
		filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

	var filterSessionKey = $formFilters.find('.valueSessionKey').val();
	if(filterSessionKey != null && filterSessionKey !== '')
		filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

	var filterAgeKey = $formFilters.find('.valueAgeKey').val();
	if(filterAgeKey != null && filterAgeKey !== '')
		filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

	var filterBlockKey = $formFilters.find('.valueBlockKey').val();
	if(filterBlockKey != null && filterBlockKey !== '')
		filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

	var filterEducationSort = $formFilters.find('.valueEducationSort').val();
	if(filterEducationSort != null && filterEducationSort !== '')
		filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

	var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
	if(filterSchoolSort != null && filterSchoolSort !== '')
		filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

	var filterYearSort = $formFilters.find('.valueYearSort').val();
	if(filterYearSort != null && filterYearSort !== '')
		filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

	var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
	if(filterSeasonSort != null && filterSeasonSort !== '')
		filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

	var filterSessionSort = $formFilters.find('.valueSessionSort').val();
	if(filterSessionSort != null && filterSessionSort !== '')
		filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

	var filterAgeSort = $formFilters.find('.valueAgeSort').val();
	if(filterAgeSort != null && filterAgeSort !== '')
		filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

	var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
	if(filterChildCompleteName != null && filterChildCompleteName !== '')
		filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });

	var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
	if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
		filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

	var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
	if(filterSchoolLocation != null && filterSchoolLocation !== '')
		filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

	var filterYearStart = $formFilters.find('.valueYearStart').val();
	if(filterYearStart != null && filterYearStart !== '')
		filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

	var filterYearEnd = $formFilters.find('.valueYearEnd').val();
	if(filterYearEnd != null && filterYearEnd !== '')
		filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

	var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
	if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
		filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

	var filterSeasonSummer = $formFilters.find('.valueSeasonSummer').prop('checked');
	if(filterSeasonSummer != null && filterSeasonSummer === true)
		filters.push({ name: 'fq', value: 'seasonSummer:' + filterSeasonSummer });

	var filterSeasonWinter = $formFilters.find('.valueSeasonWinter').prop('checked');
	if(filterSeasonWinter != null && filterSeasonWinter === true)
		filters.push({ name: 'fq', value: 'seasonWinter:' + filterSeasonWinter });

	var filterSeasonEnrollmentFee = $formFilters.find('.valueSeasonEnrollmentFee').val();
	if(filterSeasonEnrollmentFee != null && filterSeasonEnrollmentFee !== '')
		filters.push({ name: 'fq', value: 'seasonEnrollmentFee:' + filterSeasonEnrollmentFee });

	var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
	if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
		filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });

	var filterSessionStartDay = $formFilters.find('.valueSessionStartDay').val();
	if(filterSessionStartDay != null && filterSessionStartDay !== '')
		filters.push({ name: 'fq', value: 'sessionStartDay:' + filterSessionStartDay });

	var filterSessionEndDay = $formFilters.find('.valueSessionEndDay').val();
	if(filterSessionEndDay != null && filterSessionEndDay !== '')
		filters.push({ name: 'fq', value: 'sessionEndDay:' + filterSessionEndDay });

	var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
	if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
		filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

	var filterAgeStart = $formFilters.find('.valueAgeStart').val();
	if(filterAgeStart != null && filterAgeStart !== '')
		filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

	var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
	if(filterAgeEnd != null && filterAgeEnd !== '')
		filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

	var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
	if(filterBlockStartTime != null && filterBlockStartTime !== '')
		filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

	var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
	if(filterBlockEndTime != null && filterBlockEndTime !== '')
		filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

	var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
	if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
		filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

	var filterBlockSunday = $formFilters.find('.valueBlockSunday').prop('checked');
	if(filterBlockSunday != null && filterBlockSunday === true)
		filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

	var filterBlockMonday = $formFilters.find('.valueBlockMonday').prop('checked');
	if(filterBlockMonday != null && filterBlockMonday === true)
		filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

	var filterBlockTuesday = $formFilters.find('.valueBlockTuesday').prop('checked');
	if(filterBlockTuesday != null && filterBlockTuesday === true)
		filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

	var filterBlockWednesday = $formFilters.find('.valueBlockWednesday').prop('checked');
	if(filterBlockWednesday != null && filterBlockWednesday === true)
		filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

	var filterBlockThursday = $formFilters.find('.valueBlockThursday').prop('checked');
	if(filterBlockThursday != null && filterBlockThursday === true)
		filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

	var filterBlockFriday = $formFilters.find('.valueBlockFriday').prop('checked');
	if(filterBlockFriday != null && filterBlockFriday === true)
		filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

	var filterBlockSaturday = $formFilters.find('.valueBlockSaturday').prop('checked');
	if(filterBlockSaturday != null && filterBlockSaturday === true)
		filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

	var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
	if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
		filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

	var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
	if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
		filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
	return filters;
}

function searchSchoolEnrollmentVals(filters, success, error) {
	$.ajax({
		url: '/api/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolEnrollmentBlockKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['blocCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolEnrollmentForm :input[name="pk"]').val());
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blockKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_blockKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlockKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolBlockVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
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
	searchSchoolBlock($formFilters, success, error);
}

function suggestSchoolEnrollmentChildKey($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-child w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['childCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolEnrollmentForm :input[name="pk"]').val());
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_childKey_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_childKey_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'ChildKey']: \"" + o['pk'] + "\" }, function() { patchSchoolChildVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
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
	searchSchoolChild($formFilters, success, error);
}

function suggestSchoolEnrollmentMomKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-female w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['momCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolEnrollmentForm :input[name="pk"]').val());
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_momKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_momKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'MomKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolMomVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
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
	searchSchoolMom($formFilters, success, error);
}

function suggestSchoolEnrollmentDadKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-male w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['dadCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolEnrollmentForm :input[name="pk"]').val());
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_dadKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_dadKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'DadKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolDadVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
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
	searchSchoolDad($formFilters, success, error);
}

function suggestSchoolEnrollmentGuardianKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-phone w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['guardianCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolEnrollmentForm :input[name="pk"]').val());
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_guardianKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_guardianKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'GuardianKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolGuardianVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
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
	searchSchoolGuardian($formFilters, success, error);
}

function suggestSchoolEnrollmentPaymentKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-search-dollar w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['paymentCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolEnrollmentForm :input[name="pk"]').val());
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_paymentKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_paymentKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PaymentKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolPaymentVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
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
	searchSchoolPayment($formFilters, success, error);
}

function suggestSchoolEnrollmentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals($formFilters, success, error);
}

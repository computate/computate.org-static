
// POST //

async function postSchoolEnrollment($formValues, success, error) {
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

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

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

	var valueEnrollmentFormKey = $formValues.find('.valueEnrollmentFormKey').val();
	if(valueEnrollmentFormKey != null && valueEnrollmentFormKey !== '')
		vals['enrollmentFormKey'] = valueEnrollmentFormKey;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
		vals['enrollmentSignature1'] = valueEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
		vals['enrollmentSignature2'] = valueEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
		vals['enrollmentSignature3'] = valueEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
		vals['enrollmentSignature4'] = valueEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
		vals['enrollmentSignature5'] = valueEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
		vals['enrollmentSignature6'] = valueEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
		vals['enrollmentSignature7'] = valueEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
		vals['enrollmentSignature8'] = valueEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
		vals['enrollmentSignature9'] = valueEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
		vals['enrollmentSignature10'] = valueEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
		vals['enrollmentDate1'] = valueEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
		vals['enrollmentDate2'] = valueEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
		vals['enrollmentDate3'] = valueEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
		vals['enrollmentDate4'] = valueEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
		vals['enrollmentDate5'] = valueEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
		vals['enrollmentDate6'] = valueEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
		vals['enrollmentDate7'] = valueEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
		vals['enrollmentDate8'] = valueEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
		vals['enrollmentDate9'] = valueEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
		vals['enrollmentDate10'] = valueEnrollmentDate10;

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

async function patchSchoolEnrollment($formFilters, $formValues, success, error) {
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

	var removeObjectId = $formFilters.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	var addObjectId = $formValues.find('.addObjectId').val();
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

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

	var removeEnrollmentFormKey = $formFilters.find('.removeEnrollmentFormKey').val() === 'true';
	var setEnrollmentFormKey = removeEnrollmentFormKey ? null : $formValues.find('.setEnrollmentFormKey').val();
	if(removeEnrollmentFormKey || setEnrollmentFormKey != null && setEnrollmentFormKey !== '')
		vals['setEnrollmentFormKey'] = setEnrollmentFormKey;
	var addEnrollmentFormKey = $formValues.find('.addEnrollmentFormKey').val();
	if(addEnrollmentFormKey != null && addEnrollmentFormKey !== '')
		vals['addEnrollmentFormKey'] = addEnrollmentFormKey;
	var removeEnrollmentFormKey = $formValues.find('.removeEnrollmentFormKey').val();
	if(removeEnrollmentFormKey != null && removeEnrollmentFormKey !== '')
		vals['removeEnrollmentFormKey'] = removeEnrollmentFormKey;

	var removeSchoolAddress = $formFilters.find('.removeSchoolAddress').val() === 'true';
	var setSchoolAddress = removeSchoolAddress ? null : $formValues.find('.setSchoolAddress').val();
	if(removeSchoolAddress || setSchoolAddress != null && setSchoolAddress !== '')
		vals['setSchoolAddress'] = setSchoolAddress;
	var addSchoolAddress = $formValues.find('.addSchoolAddress').val();
	if(addSchoolAddress != null && addSchoolAddress !== '')
		vals['addSchoolAddress'] = addSchoolAddress;
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val();
	if(removeSchoolAddress != null && removeSchoolAddress !== '')
		vals['removeSchoolAddress'] = removeSchoolAddress;

	var removeEnrollmentSignature1 = $formFilters.find('.removeEnrollmentSignature1').val() === 'true';
	var setEnrollmentSignature1 = removeEnrollmentSignature1 ? null : $formValues.find('.setEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 || setEnrollmentSignature1 != null && setEnrollmentSignature1 !== '')
		vals['setEnrollmentSignature1'] = setEnrollmentSignature1;
	var addEnrollmentSignature1 = $formValues.find('.addEnrollmentSignature1').val();
	if(addEnrollmentSignature1 != null && addEnrollmentSignature1 !== '')
		vals['addEnrollmentSignature1'] = addEnrollmentSignature1;
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 != null && removeEnrollmentSignature1 !== '')
		vals['removeEnrollmentSignature1'] = removeEnrollmentSignature1;

	var removeEnrollmentSignature2 = $formFilters.find('.removeEnrollmentSignature2').val() === 'true';
	var setEnrollmentSignature2 = removeEnrollmentSignature2 ? null : $formValues.find('.setEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 || setEnrollmentSignature2 != null && setEnrollmentSignature2 !== '')
		vals['setEnrollmentSignature2'] = setEnrollmentSignature2;
	var addEnrollmentSignature2 = $formValues.find('.addEnrollmentSignature2').val();
	if(addEnrollmentSignature2 != null && addEnrollmentSignature2 !== '')
		vals['addEnrollmentSignature2'] = addEnrollmentSignature2;
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 != null && removeEnrollmentSignature2 !== '')
		vals['removeEnrollmentSignature2'] = removeEnrollmentSignature2;

	var removeEnrollmentSignature3 = $formFilters.find('.removeEnrollmentSignature3').val() === 'true';
	var setEnrollmentSignature3 = removeEnrollmentSignature3 ? null : $formValues.find('.setEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 || setEnrollmentSignature3 != null && setEnrollmentSignature3 !== '')
		vals['setEnrollmentSignature3'] = setEnrollmentSignature3;
	var addEnrollmentSignature3 = $formValues.find('.addEnrollmentSignature3').val();
	if(addEnrollmentSignature3 != null && addEnrollmentSignature3 !== '')
		vals['addEnrollmentSignature3'] = addEnrollmentSignature3;
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 != null && removeEnrollmentSignature3 !== '')
		vals['removeEnrollmentSignature3'] = removeEnrollmentSignature3;

	var removeEnrollmentSignature4 = $formFilters.find('.removeEnrollmentSignature4').val() === 'true';
	var setEnrollmentSignature4 = removeEnrollmentSignature4 ? null : $formValues.find('.setEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 || setEnrollmentSignature4 != null && setEnrollmentSignature4 !== '')
		vals['setEnrollmentSignature4'] = setEnrollmentSignature4;
	var addEnrollmentSignature4 = $formValues.find('.addEnrollmentSignature4').val();
	if(addEnrollmentSignature4 != null && addEnrollmentSignature4 !== '')
		vals['addEnrollmentSignature4'] = addEnrollmentSignature4;
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 != null && removeEnrollmentSignature4 !== '')
		vals['removeEnrollmentSignature4'] = removeEnrollmentSignature4;

	var removeEnrollmentSignature5 = $formFilters.find('.removeEnrollmentSignature5').val() === 'true';
	var setEnrollmentSignature5 = removeEnrollmentSignature5 ? null : $formValues.find('.setEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 || setEnrollmentSignature5 != null && setEnrollmentSignature5 !== '')
		vals['setEnrollmentSignature5'] = setEnrollmentSignature5;
	var addEnrollmentSignature5 = $formValues.find('.addEnrollmentSignature5').val();
	if(addEnrollmentSignature5 != null && addEnrollmentSignature5 !== '')
		vals['addEnrollmentSignature5'] = addEnrollmentSignature5;
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 != null && removeEnrollmentSignature5 !== '')
		vals['removeEnrollmentSignature5'] = removeEnrollmentSignature5;

	var removeEnrollmentSignature6 = $formFilters.find('.removeEnrollmentSignature6').val() === 'true';
	var setEnrollmentSignature6 = removeEnrollmentSignature6 ? null : $formValues.find('.setEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 || setEnrollmentSignature6 != null && setEnrollmentSignature6 !== '')
		vals['setEnrollmentSignature6'] = setEnrollmentSignature6;
	var addEnrollmentSignature6 = $formValues.find('.addEnrollmentSignature6').val();
	if(addEnrollmentSignature6 != null && addEnrollmentSignature6 !== '')
		vals['addEnrollmentSignature6'] = addEnrollmentSignature6;
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 != null && removeEnrollmentSignature6 !== '')
		vals['removeEnrollmentSignature6'] = removeEnrollmentSignature6;

	var removeEnrollmentSignature7 = $formFilters.find('.removeEnrollmentSignature7').val() === 'true';
	var setEnrollmentSignature7 = removeEnrollmentSignature7 ? null : $formValues.find('.setEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 || setEnrollmentSignature7 != null && setEnrollmentSignature7 !== '')
		vals['setEnrollmentSignature7'] = setEnrollmentSignature7;
	var addEnrollmentSignature7 = $formValues.find('.addEnrollmentSignature7').val();
	if(addEnrollmentSignature7 != null && addEnrollmentSignature7 !== '')
		vals['addEnrollmentSignature7'] = addEnrollmentSignature7;
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 != null && removeEnrollmentSignature7 !== '')
		vals['removeEnrollmentSignature7'] = removeEnrollmentSignature7;

	var removeEnrollmentSignature8 = $formFilters.find('.removeEnrollmentSignature8').val() === 'true';
	var setEnrollmentSignature8 = removeEnrollmentSignature8 ? null : $formValues.find('.setEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 || setEnrollmentSignature8 != null && setEnrollmentSignature8 !== '')
		vals['setEnrollmentSignature8'] = setEnrollmentSignature8;
	var addEnrollmentSignature8 = $formValues.find('.addEnrollmentSignature8').val();
	if(addEnrollmentSignature8 != null && addEnrollmentSignature8 !== '')
		vals['addEnrollmentSignature8'] = addEnrollmentSignature8;
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 != null && removeEnrollmentSignature8 !== '')
		vals['removeEnrollmentSignature8'] = removeEnrollmentSignature8;

	var removeEnrollmentSignature9 = $formFilters.find('.removeEnrollmentSignature9').val() === 'true';
	var setEnrollmentSignature9 = removeEnrollmentSignature9 ? null : $formValues.find('.setEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 || setEnrollmentSignature9 != null && setEnrollmentSignature9 !== '')
		vals['setEnrollmentSignature9'] = setEnrollmentSignature9;
	var addEnrollmentSignature9 = $formValues.find('.addEnrollmentSignature9').val();
	if(addEnrollmentSignature9 != null && addEnrollmentSignature9 !== '')
		vals['addEnrollmentSignature9'] = addEnrollmentSignature9;
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 != null && removeEnrollmentSignature9 !== '')
		vals['removeEnrollmentSignature9'] = removeEnrollmentSignature9;

	var removeEnrollmentSignature10 = $formFilters.find('.removeEnrollmentSignature10').val() === 'true';
	var setEnrollmentSignature10 = removeEnrollmentSignature10 ? null : $formValues.find('.setEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 || setEnrollmentSignature10 != null && setEnrollmentSignature10 !== '')
		vals['setEnrollmentSignature10'] = setEnrollmentSignature10;
	var addEnrollmentSignature10 = $formValues.find('.addEnrollmentSignature10').val();
	if(addEnrollmentSignature10 != null && addEnrollmentSignature10 !== '')
		vals['addEnrollmentSignature10'] = addEnrollmentSignature10;
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 != null && removeEnrollmentSignature10 !== '')
		vals['removeEnrollmentSignature10'] = removeEnrollmentSignature10;

	var removeEnrollmentDate1 = $formFilters.find('.removeEnrollmentDate1').val() === 'true';
	var setEnrollmentDate1 = removeEnrollmentDate1 ? null : $formValues.find('.setEnrollmentDate1').val();
	if(removeEnrollmentDate1 || setEnrollmentDate1 != null && setEnrollmentDate1 !== '')
		vals['setEnrollmentDate1'] = setEnrollmentDate1;
	var addEnrollmentDate1 = $formValues.find('.addEnrollmentDate1').val();
	if(addEnrollmentDate1 != null && addEnrollmentDate1 !== '')
		vals['addEnrollmentDate1'] = addEnrollmentDate1;
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val();
	if(removeEnrollmentDate1 != null && removeEnrollmentDate1 !== '')
		vals['removeEnrollmentDate1'] = removeEnrollmentDate1;

	var removeEnrollmentDate2 = $formFilters.find('.removeEnrollmentDate2').val() === 'true';
	var setEnrollmentDate2 = removeEnrollmentDate2 ? null : $formValues.find('.setEnrollmentDate2').val();
	if(removeEnrollmentDate2 || setEnrollmentDate2 != null && setEnrollmentDate2 !== '')
		vals['setEnrollmentDate2'] = setEnrollmentDate2;
	var addEnrollmentDate2 = $formValues.find('.addEnrollmentDate2').val();
	if(addEnrollmentDate2 != null && addEnrollmentDate2 !== '')
		vals['addEnrollmentDate2'] = addEnrollmentDate2;
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val();
	if(removeEnrollmentDate2 != null && removeEnrollmentDate2 !== '')
		vals['removeEnrollmentDate2'] = removeEnrollmentDate2;

	var removeEnrollmentDate3 = $formFilters.find('.removeEnrollmentDate3').val() === 'true';
	var setEnrollmentDate3 = removeEnrollmentDate3 ? null : $formValues.find('.setEnrollmentDate3').val();
	if(removeEnrollmentDate3 || setEnrollmentDate3 != null && setEnrollmentDate3 !== '')
		vals['setEnrollmentDate3'] = setEnrollmentDate3;
	var addEnrollmentDate3 = $formValues.find('.addEnrollmentDate3').val();
	if(addEnrollmentDate3 != null && addEnrollmentDate3 !== '')
		vals['addEnrollmentDate3'] = addEnrollmentDate3;
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val();
	if(removeEnrollmentDate3 != null && removeEnrollmentDate3 !== '')
		vals['removeEnrollmentDate3'] = removeEnrollmentDate3;

	var removeEnrollmentDate4 = $formFilters.find('.removeEnrollmentDate4').val() === 'true';
	var setEnrollmentDate4 = removeEnrollmentDate4 ? null : $formValues.find('.setEnrollmentDate4').val();
	if(removeEnrollmentDate4 || setEnrollmentDate4 != null && setEnrollmentDate4 !== '')
		vals['setEnrollmentDate4'] = setEnrollmentDate4;
	var addEnrollmentDate4 = $formValues.find('.addEnrollmentDate4').val();
	if(addEnrollmentDate4 != null && addEnrollmentDate4 !== '')
		vals['addEnrollmentDate4'] = addEnrollmentDate4;
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val();
	if(removeEnrollmentDate4 != null && removeEnrollmentDate4 !== '')
		vals['removeEnrollmentDate4'] = removeEnrollmentDate4;

	var removeEnrollmentDate5 = $formFilters.find('.removeEnrollmentDate5').val() === 'true';
	var setEnrollmentDate5 = removeEnrollmentDate5 ? null : $formValues.find('.setEnrollmentDate5').val();
	if(removeEnrollmentDate5 || setEnrollmentDate5 != null && setEnrollmentDate5 !== '')
		vals['setEnrollmentDate5'] = setEnrollmentDate5;
	var addEnrollmentDate5 = $formValues.find('.addEnrollmentDate5').val();
	if(addEnrollmentDate5 != null && addEnrollmentDate5 !== '')
		vals['addEnrollmentDate5'] = addEnrollmentDate5;
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val();
	if(removeEnrollmentDate5 != null && removeEnrollmentDate5 !== '')
		vals['removeEnrollmentDate5'] = removeEnrollmentDate5;

	var removeEnrollmentDate6 = $formFilters.find('.removeEnrollmentDate6').val() === 'true';
	var setEnrollmentDate6 = removeEnrollmentDate6 ? null : $formValues.find('.setEnrollmentDate6').val();
	if(removeEnrollmentDate6 || setEnrollmentDate6 != null && setEnrollmentDate6 !== '')
		vals['setEnrollmentDate6'] = setEnrollmentDate6;
	var addEnrollmentDate6 = $formValues.find('.addEnrollmentDate6').val();
	if(addEnrollmentDate6 != null && addEnrollmentDate6 !== '')
		vals['addEnrollmentDate6'] = addEnrollmentDate6;
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val();
	if(removeEnrollmentDate6 != null && removeEnrollmentDate6 !== '')
		vals['removeEnrollmentDate6'] = removeEnrollmentDate6;

	var removeEnrollmentDate7 = $formFilters.find('.removeEnrollmentDate7').val() === 'true';
	var setEnrollmentDate7 = removeEnrollmentDate7 ? null : $formValues.find('.setEnrollmentDate7').val();
	if(removeEnrollmentDate7 || setEnrollmentDate7 != null && setEnrollmentDate7 !== '')
		vals['setEnrollmentDate7'] = setEnrollmentDate7;
	var addEnrollmentDate7 = $formValues.find('.addEnrollmentDate7').val();
	if(addEnrollmentDate7 != null && addEnrollmentDate7 !== '')
		vals['addEnrollmentDate7'] = addEnrollmentDate7;
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val();
	if(removeEnrollmentDate7 != null && removeEnrollmentDate7 !== '')
		vals['removeEnrollmentDate7'] = removeEnrollmentDate7;

	var removeEnrollmentDate8 = $formFilters.find('.removeEnrollmentDate8').val() === 'true';
	var setEnrollmentDate8 = removeEnrollmentDate8 ? null : $formValues.find('.setEnrollmentDate8').val();
	if(removeEnrollmentDate8 || setEnrollmentDate8 != null && setEnrollmentDate8 !== '')
		vals['setEnrollmentDate8'] = setEnrollmentDate8;
	var addEnrollmentDate8 = $formValues.find('.addEnrollmentDate8').val();
	if(addEnrollmentDate8 != null && addEnrollmentDate8 !== '')
		vals['addEnrollmentDate8'] = addEnrollmentDate8;
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val();
	if(removeEnrollmentDate8 != null && removeEnrollmentDate8 !== '')
		vals['removeEnrollmentDate8'] = removeEnrollmentDate8;

	var removeEnrollmentDate9 = $formFilters.find('.removeEnrollmentDate9').val() === 'true';
	var setEnrollmentDate9 = removeEnrollmentDate9 ? null : $formValues.find('.setEnrollmentDate9').val();
	if(removeEnrollmentDate9 || setEnrollmentDate9 != null && setEnrollmentDate9 !== '')
		vals['setEnrollmentDate9'] = setEnrollmentDate9;
	var addEnrollmentDate9 = $formValues.find('.addEnrollmentDate9').val();
	if(addEnrollmentDate9 != null && addEnrollmentDate9 !== '')
		vals['addEnrollmentDate9'] = addEnrollmentDate9;
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val();
	if(removeEnrollmentDate9 != null && removeEnrollmentDate9 !== '')
		vals['removeEnrollmentDate9'] = removeEnrollmentDate9;

	var removeEnrollmentDate10 = $formFilters.find('.removeEnrollmentDate10').val() === 'true';
	var setEnrollmentDate10 = removeEnrollmentDate10 ? null : $formValues.find('.setEnrollmentDate10').val();
	if(removeEnrollmentDate10 || setEnrollmentDate10 != null && setEnrollmentDate10 !== '')
		vals['setEnrollmentDate10'] = setEnrollmentDate10;
	var addEnrollmentDate10 = $formValues.find('.addEnrollmentDate10').val();
	if(addEnrollmentDate10 != null && addEnrollmentDate10 !== '')
		vals['addEnrollmentDate10'] = addEnrollmentDate10;
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val();
	if(removeEnrollmentDate10 != null && removeEnrollmentDate10 !== '')
		vals['removeEnrollmentDate10'] = removeEnrollmentDate10;

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

	var filterObjectId = $formFilters.find('.valueObjectId').val();
	if(filterObjectId != null && filterObjectId !== '')
		filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

	var filterModified = $formFilters.find('.valueModified').val();
	if(filterModified != null && filterModified !== '')
		filters.push({ name: 'fq', value: 'modified:' + filterModified });

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

	var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
	if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

	var filterSessionId = $formFilters.find('.valueSessionId').val();
	if(filterSessionId != null && filterSessionId !== '')
		filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

	var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
	if(filterObjectTitle != null && filterObjectTitle !== '')
		filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

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

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

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

	var filterSchoolName = $formFilters.find('.valueSchoolName').val();
	if(filterSchoolName != null && filterSchoolName !== '')
		filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

	var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
	if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
		filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

	var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
	if(filterSchoolLocation != null && filterSchoolLocation !== '')
		filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

	var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
	if(filterSchoolAddress != null && filterSchoolAddress !== '')
		filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

	var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
	if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
		filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

	var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
	if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
		filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

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

	var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
	if(filterSessionStartDate != null && filterSessionStartDate !== '')
		filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

	var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
	if(filterSessionEndDate != null && filterSessionEndDate !== '')
		filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

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

	var filterEnrollmentParentNames = $formFilters.find('.valueEnrollmentParentNames').val();
	if(filterEnrollmentParentNames != null && filterEnrollmentParentNames !== '')
		filters.push({ name: 'fq', value: 'enrollmentParentNames:' + filterEnrollmentParentNames });

	var filterEnrollmentSignature1 = $formFilters.find('.valueEnrollmentSignature1').val();
	if(filterEnrollmentSignature1 != null && filterEnrollmentSignature1 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature1:' + filterEnrollmentSignature1 });

	var filterEnrollmentSignature2 = $formFilters.find('.valueEnrollmentSignature2').val();
	if(filterEnrollmentSignature2 != null && filterEnrollmentSignature2 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature2:' + filterEnrollmentSignature2 });

	var filterEnrollmentSignature3 = $formFilters.find('.valueEnrollmentSignature3').val();
	if(filterEnrollmentSignature3 != null && filterEnrollmentSignature3 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature3:' + filterEnrollmentSignature3 });

	var filterEnrollmentSignature4 = $formFilters.find('.valueEnrollmentSignature4').val();
	if(filterEnrollmentSignature4 != null && filterEnrollmentSignature4 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature4:' + filterEnrollmentSignature4 });

	var filterEnrollmentSignature5 = $formFilters.find('.valueEnrollmentSignature5').val();
	if(filterEnrollmentSignature5 != null && filterEnrollmentSignature5 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature5:' + filterEnrollmentSignature5 });

	var filterEnrollmentSignature6 = $formFilters.find('.valueEnrollmentSignature6').val();
	if(filterEnrollmentSignature6 != null && filterEnrollmentSignature6 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature6:' + filterEnrollmentSignature6 });

	var filterEnrollmentSignature7 = $formFilters.find('.valueEnrollmentSignature7').val();
	if(filterEnrollmentSignature7 != null && filterEnrollmentSignature7 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature7:' + filterEnrollmentSignature7 });

	var filterEnrollmentSignature8 = $formFilters.find('.valueEnrollmentSignature8').val();
	if(filterEnrollmentSignature8 != null && filterEnrollmentSignature8 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature8:' + filterEnrollmentSignature8 });

	var filterEnrollmentSignature9 = $formFilters.find('.valueEnrollmentSignature9').val();
	if(filterEnrollmentSignature9 != null && filterEnrollmentSignature9 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature9:' + filterEnrollmentSignature9 });

	var filterEnrollmentSignature10 = $formFilters.find('.valueEnrollmentSignature10').val();
	if(filterEnrollmentSignature10 != null && filterEnrollmentSignature10 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature10:' + filterEnrollmentSignature10 });

	var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
	if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

	var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
	if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

	var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
	if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

	var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
	if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

	var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
	if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

	var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
	if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

	var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
	if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

	var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
	if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

	var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
	if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

	var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
	if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

	var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
	if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
		filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
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

async function getSchoolEnrollment(pk) {
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

async function deleteSchoolEnrollment(pk) {
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

async function searchSchoolEnrollment($formFilters, success, error) {
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

	var filterObjectId = $formFilters.find('.valueObjectId').val();
	if(filterObjectId != null && filterObjectId !== '')
		filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

	var filterModified = $formFilters.find('.valueModified').val();
	if(filterModified != null && filterModified !== '')
		filters.push({ name: 'fq', value: 'modified:' + filterModified });

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

	var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
	if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

	var filterSessionId = $formFilters.find('.valueSessionId').val();
	if(filterSessionId != null && filterSessionId !== '')
		filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

	var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
	if(filterObjectTitle != null && filterObjectTitle !== '')
		filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

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

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

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

	var filterSchoolName = $formFilters.find('.valueSchoolName').val();
	if(filterSchoolName != null && filterSchoolName !== '')
		filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

	var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
	if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
		filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

	var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
	if(filterSchoolLocation != null && filterSchoolLocation !== '')
		filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

	var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
	if(filterSchoolAddress != null && filterSchoolAddress !== '')
		filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

	var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
	if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
		filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

	var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
	if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
		filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

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

	var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
	if(filterSessionStartDate != null && filterSessionStartDate !== '')
		filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

	var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
	if(filterSessionEndDate != null && filterSessionEndDate !== '')
		filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

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

	var filterEnrollmentParentNames = $formFilters.find('.valueEnrollmentParentNames').val();
	if(filterEnrollmentParentNames != null && filterEnrollmentParentNames !== '')
		filters.push({ name: 'fq', value: 'enrollmentParentNames:' + filterEnrollmentParentNames });

	var filterEnrollmentSignature1 = $formFilters.find('.valueEnrollmentSignature1').val();
	if(filterEnrollmentSignature1 != null && filterEnrollmentSignature1 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature1:' + filterEnrollmentSignature1 });

	var filterEnrollmentSignature2 = $formFilters.find('.valueEnrollmentSignature2').val();
	if(filterEnrollmentSignature2 != null && filterEnrollmentSignature2 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature2:' + filterEnrollmentSignature2 });

	var filterEnrollmentSignature3 = $formFilters.find('.valueEnrollmentSignature3').val();
	if(filterEnrollmentSignature3 != null && filterEnrollmentSignature3 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature3:' + filterEnrollmentSignature3 });

	var filterEnrollmentSignature4 = $formFilters.find('.valueEnrollmentSignature4').val();
	if(filterEnrollmentSignature4 != null && filterEnrollmentSignature4 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature4:' + filterEnrollmentSignature4 });

	var filterEnrollmentSignature5 = $formFilters.find('.valueEnrollmentSignature5').val();
	if(filterEnrollmentSignature5 != null && filterEnrollmentSignature5 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature5:' + filterEnrollmentSignature5 });

	var filterEnrollmentSignature6 = $formFilters.find('.valueEnrollmentSignature6').val();
	if(filterEnrollmentSignature6 != null && filterEnrollmentSignature6 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature6:' + filterEnrollmentSignature6 });

	var filterEnrollmentSignature7 = $formFilters.find('.valueEnrollmentSignature7').val();
	if(filterEnrollmentSignature7 != null && filterEnrollmentSignature7 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature7:' + filterEnrollmentSignature7 });

	var filterEnrollmentSignature8 = $formFilters.find('.valueEnrollmentSignature8').val();
	if(filterEnrollmentSignature8 != null && filterEnrollmentSignature8 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature8:' + filterEnrollmentSignature8 });

	var filterEnrollmentSignature9 = $formFilters.find('.valueEnrollmentSignature9').val();
	if(filterEnrollmentSignature9 != null && filterEnrollmentSignature9 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature9:' + filterEnrollmentSignature9 });

	var filterEnrollmentSignature10 = $formFilters.find('.valueEnrollmentSignature10').val();
	if(filterEnrollmentSignature10 != null && filterEnrollmentSignature10 !== '')
		filters.push({ name: 'fq', value: 'enrollmentSignature10:' + filterEnrollmentSignature10 });

	var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
	if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

	var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
	if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

	var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
	if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

	var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
	if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

	var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
	if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

	var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
	if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

	var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
	if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

	var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
	if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

	var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
	if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

	var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
	if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
		filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

	var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
	if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
		filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
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

function suggestSchoolEnrollmentBlockKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['blockCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blockKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_blockKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlockKeys']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolBlockVals(filters, success, error);
}

function suggestSchoolEnrollmentChildKey(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-child w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['childCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_childKey_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_childKey_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'ChildKey']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolChildVals(filters, success, error);
}

function suggestSchoolEnrollmentMomKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-female w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['momCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_momKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_momKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'MomKeys']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolMomVals(filters, success, error);
}

function suggestSchoolEnrollmentDadKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-male w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['dadCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_dadKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_dadKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'DadKeys']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolDadVals(filters, success, error);
}

function suggestSchoolEnrollmentGuardianKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-phone w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['guardianCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_guardianKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_guardianKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'GuardianKeys']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolGuardianVals(filters, success, error);
}

function suggestSchoolEnrollmentPaymentKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-search-dollar w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['paymentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_paymentKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_paymentKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PaymentKeys']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolPaymentVals(filters, success, error);
}

async function websocketSchoolEnrollment(success) {
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {

		eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
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
				var $headerSpan = $('<span>').attr('class', '').text('modify enrollments');
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

		eventBus.registerHandler('websocketSchoolBlock', function (error, message) {
			$('#Page_blockKeys').trigger('oninput');
		});

		eventBus.registerHandler('websocketSchoolChild', function (error, message) {
			$('#Page_childKey').trigger('oninput');
		});

		eventBus.registerHandler('websocketSchoolMom', function (error, message) {
			$('#Page_momKeys').trigger('oninput');
		});

		eventBus.registerHandler('websocketSchoolDad', function (error, message) {
			$('#Page_dadKeys').trigger('oninput');
		});

		eventBus.registerHandler('websocketSchoolGuardian', function (error, message) {
			$('#Page_guardianKeys').trigger('oninput');
		});

		eventBus.registerHandler('websocketSchoolPayment', function (error, message) {
			$('#Page_paymentKeys').trigger('oninput');
		});
	}
}

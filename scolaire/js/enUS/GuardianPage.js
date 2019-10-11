
// POST //

function postSchoolGuardian($formValues, success, error) {
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

	var valueGuardianId = $formValues.find('.valueGuardianId').val();
	if(valueGuardianId != null && valueGuardianId !== '')
		vals['guardianId'] = valueGuardianId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valuePersonFirstName = $formValues.find('.valuePersonFirstName').val();
	if(valuePersonFirstName != null && valuePersonFirstName !== '')
		vals['personFirstName'] = valuePersonFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
		vals['familyName'] = valueFamilyName;

	var valuePersonFirstNamePreferred = $formValues.find('.valuePersonFirstNamePreferred').val();
	if(valuePersonFirstNamePreferred != null && valuePersonFirstNamePreferred !== '')
		vals['personFirstNamePreferred'] = valuePersonFirstNamePreferred;

	var valuePersonPhoneNumber = $formValues.find('.valuePersonPhoneNumber').val();
	if(valuePersonPhoneNumber != null && valuePersonPhoneNumber !== '')
		vals['personPhoneNumber'] = valuePersonPhoneNumber;

	var valuePersonOccupation = $formValues.find('.valuePersonOccupation').val();
	if(valuePersonOccupation != null && valuePersonOccupation !== '')
		vals['personOccupation'] = valuePersonOccupation;

	var valueEnrollmentKeys = $formValues.find('.valueEnrollmentKeys').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valueGuardianCompleteName = $formValues.find('.valueGuardianCompleteName').val();
	if(valueGuardianCompleteName != null && valueGuardianCompleteName !== '')
		vals['guardianCompleteName'] = valueGuardianCompleteName;

	$.ajax({
		url: '/api/guardian'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolGuardianVals(vals, success, error) {
	$.ajax({
		url: '/api/guardian'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchSchoolGuardian($formFilters, $formValues, success, error) {
	var filters = patchSchoolGuardianFilters($formFilters);

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

	var removeGuardianId = $formFilters.find('.removeGuardianId').val() === 'true';
	var setGuardianId = removeGuardianId ? null : $formValues.find('.setGuardianId').val();
	if(removeGuardianId || setGuardianId != null && setGuardianId !== '')
		vals['setGuardianId'] = setGuardianId;
	var addGuardianId = $formValues.find('.addGuardianId').val();
	if(addGuardianId != null && addGuardianId !== '')
		vals['addGuardianId'] = addGuardianId;
	var removeGuardianId = $formValues.find('.removeGuardianId').val();
	if(removeGuardianId != null && removeGuardianId !== '')
		vals['removeGuardianId'] = removeGuardianId;

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

	var removePersonFirstName = $formFilters.find('.removePersonFirstName').val() === 'true';
	var setPersonFirstName = removePersonFirstName ? null : $formValues.find('.setPersonFirstName').val();
	if(removePersonFirstName || setPersonFirstName != null && setPersonFirstName !== '')
		vals['setPersonFirstName'] = setPersonFirstName;
	var addPersonFirstName = $formValues.find('.addPersonFirstName').val();
	if(addPersonFirstName != null && addPersonFirstName !== '')
		vals['addPersonFirstName'] = addPersonFirstName;
	var removePersonFirstName = $formValues.find('.removePersonFirstName').val();
	if(removePersonFirstName != null && removePersonFirstName !== '')
		vals['removePersonFirstName'] = removePersonFirstName;

	var removeFamilyName = $formFilters.find('.removeFamilyName').val() === 'true';
	var setFamilyName = removeFamilyName ? null : $formValues.find('.setFamilyName').val();
	if(removeFamilyName || setFamilyName != null && setFamilyName !== '')
		vals['setFamilyName'] = setFamilyName;
	var addFamilyName = $formValues.find('.addFamilyName').val();
	if(addFamilyName != null && addFamilyName !== '')
		vals['addFamilyName'] = addFamilyName;
	var removeFamilyName = $formValues.find('.removeFamilyName').val();
	if(removeFamilyName != null && removeFamilyName !== '')
		vals['removeFamilyName'] = removeFamilyName;

	var removePersonFirstNamePreferred = $formFilters.find('.removePersonFirstNamePreferred').val() === 'true';
	var setPersonFirstNamePreferred = removePersonFirstNamePreferred ? null : $formValues.find('.setPersonFirstNamePreferred').val();
	if(removePersonFirstNamePreferred || setPersonFirstNamePreferred != null && setPersonFirstNamePreferred !== '')
		vals['setPersonFirstNamePreferred'] = setPersonFirstNamePreferred;
	var addPersonFirstNamePreferred = $formValues.find('.addPersonFirstNamePreferred').val();
	if(addPersonFirstNamePreferred != null && addPersonFirstNamePreferred !== '')
		vals['addPersonFirstNamePreferred'] = addPersonFirstNamePreferred;
	var removePersonFirstNamePreferred = $formValues.find('.removePersonFirstNamePreferred').val();
	if(removePersonFirstNamePreferred != null && removePersonFirstNamePreferred !== '')
		vals['removePersonFirstNamePreferred'] = removePersonFirstNamePreferred;

	var removePersonPhoneNumber = $formFilters.find('.removePersonPhoneNumber').val() === 'true';
	var setPersonPhoneNumber = removePersonPhoneNumber ? null : $formValues.find('.setPersonPhoneNumber').val();
	if(removePersonPhoneNumber || setPersonPhoneNumber != null && setPersonPhoneNumber !== '')
		vals['setPersonPhoneNumber'] = setPersonPhoneNumber;
	var addPersonPhoneNumber = $formValues.find('.addPersonPhoneNumber').val();
	if(addPersonPhoneNumber != null && addPersonPhoneNumber !== '')
		vals['addPersonPhoneNumber'] = addPersonPhoneNumber;
	var removePersonPhoneNumber = $formValues.find('.removePersonPhoneNumber').val();
	if(removePersonPhoneNumber != null && removePersonPhoneNumber !== '')
		vals['removePersonPhoneNumber'] = removePersonPhoneNumber;

	var removePersonOccupation = $formFilters.find('.removePersonOccupation').val() === 'true';
	var setPersonOccupation = removePersonOccupation ? null : $formValues.find('.setPersonOccupation').val();
	if(removePersonOccupation || setPersonOccupation != null && setPersonOccupation !== '')
		vals['setPersonOccupation'] = setPersonOccupation;
	var addPersonOccupation = $formValues.find('.addPersonOccupation').val();
	if(addPersonOccupation != null && addPersonOccupation !== '')
		vals['addPersonOccupation'] = addPersonOccupation;
	var removePersonOccupation = $formValues.find('.removePersonOccupation').val();
	if(removePersonOccupation != null && removePersonOccupation !== '')
		vals['removePersonOccupation'] = removePersonOccupation;

	var removeEnrollmentKeys = $formFilters.find('.removeEnrollmentKeys').val() === 'true';
	var setEnrollmentKeys = removeEnrollmentKeys ? null : $formValues.find('.setEnrollmentKeys').val();
	if(removeEnrollmentKeys || setEnrollmentKeys != null && setEnrollmentKeys !== '')
		vals['setEnrollmentKeys'] = setEnrollmentKeys;
	var addEnrollmentKeys = $formValues.find('.addEnrollmentKeys').val();
	if(addEnrollmentKeys != null && addEnrollmentKeys !== '')
		vals['addEnrollmentKeys'] = addEnrollmentKeys;
	var removeEnrollmentKeys = $formValues.find('.removeEnrollmentKeys').val();
	if(removeEnrollmentKeys != null && removeEnrollmentKeys !== '')
		vals['removeEnrollmentKeys'] = removeEnrollmentKeys;

	var removeGuardianCompleteName = $formFilters.find('.removeGuardianCompleteName').val() === 'true';
	var setGuardianCompleteName = removeGuardianCompleteName ? null : $formValues.find('.setGuardianCompleteName').val();
	if(removeGuardianCompleteName || setGuardianCompleteName != null && setGuardianCompleteName !== '')
		vals['setGuardianCompleteName'] = setGuardianCompleteName;
	var addGuardianCompleteName = $formValues.find('.addGuardianCompleteName').val();
	if(addGuardianCompleteName != null && addGuardianCompleteName !== '')
		vals['addGuardianCompleteName'] = addGuardianCompleteName;
	var removeGuardianCompleteName = $formValues.find('.removeGuardianCompleteName').val();
	if(removeGuardianCompleteName != null && removeGuardianCompleteName !== '')
		vals['removeGuardianCompleteName'] = removeGuardianCompleteName;

	patchSchoolGuardianVals(filters, vals, success, error);
}

function patchSchoolGuardianFilters($formFilters) {
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

	var filterGuardianId = $formFilters.find('.valueGuardianId').val();
	if(filterGuardianId != null && filterGuardianId !== '')
		filters.push({ name: 'fq', value: 'guardianId:' + filterGuardianId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterPersonFirstName = $formFilters.find('.valuePersonFirstName').val();
	if(filterPersonFirstName != null && filterPersonFirstName !== '')
		filters.push({ name: 'fq', value: 'personFirstName:' + filterPersonFirstName });

	var filterFamilyName = $formFilters.find('.valueFamilyName').val();
	if(filterFamilyName != null && filterFamilyName !== '')
		filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

	var filterPersonFirstNamePreferred = $formFilters.find('.valuePersonFirstNamePreferred').val();
	if(filterPersonFirstNamePreferred != null && filterPersonFirstNamePreferred !== '')
		filters.push({ name: 'fq', value: 'personFirstNamePreferred:' + filterPersonFirstNamePreferred });

	var filterPersonPhoneNumber = $formFilters.find('.valuePersonPhoneNumber').val();
	if(filterPersonPhoneNumber != null && filterPersonPhoneNumber !== '')
		filters.push({ name: 'fq', value: 'personPhoneNumber:' + filterPersonPhoneNumber });

	var filterPersonOccupation = $formFilters.find('.valuePersonOccupation').val();
	if(filterPersonOccupation != null && filterPersonOccupation !== '')
		filters.push({ name: 'fq', value: 'personOccupation:' + filterPersonOccupation });

	var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
	if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
		filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

	var filterGuardianKey = $formFilters.find('.valueGuardianKey').val();
	if(filterGuardianKey != null && filterGuardianKey !== '')
		filters.push({ name: 'fq', value: 'guardianKey:' + filterGuardianKey });

	var filterFamilySort = $formFilters.find('.valueFamilySort').val();
	if(filterFamilySort != null && filterFamilySort !== '')
		filters.push({ name: 'fq', value: 'familySort:' + filterFamilySort });

	var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
	if(filterSchoolSort != null && filterSchoolSort !== '')
		filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

	var filterSchoolKeys = $formFilters.find('.valueSchoolKeys').val();
	if(filterSchoolKeys != null && filterSchoolKeys !== '')
		filters.push({ name: 'fq', value: 'schoolKeys:' + filterSchoolKeys });

	var filterYearKeys = $formFilters.find('.valueYearKeys').val();
	if(filterYearKeys != null && filterYearKeys !== '')
		filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

	var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
	if(filterSeasonKeys != null && filterSeasonKeys !== '')
		filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

	var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
	if(filterSessionKeys != null && filterSessionKeys !== '')
		filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

	var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
	if(filterAgeKeys != null && filterAgeKeys !== '')
		filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

	var filterPersonCompleteName = $formFilters.find('.valuePersonCompleteName').val();
	if(filterPersonCompleteName != null && filterPersonCompleteName !== '')
		filters.push({ name: 'fq', value: 'personCompleteName:' + filterPersonCompleteName });

	var filterPersonCompleteNamePreferred = $formFilters.find('.valuePersonCompleteNamePreferred').val();
	if(filterPersonCompleteNamePreferred != null && filterPersonCompleteNamePreferred !== '')
		filters.push({ name: 'fq', value: 'personCompleteNamePreferred:' + filterPersonCompleteNamePreferred });

	var filterPersonFormalName = $formFilters.find('.valuePersonFormalName').val();
	if(filterPersonFormalName != null && filterPersonFormalName !== '')
		filters.push({ name: 'fq', value: 'personFormalName:' + filterPersonFormalName });

	var filterPersonEmail = $formFilters.find('.valuePersonEmail').val();
	if(filterPersonEmail != null && filterPersonEmail !== '')
		filters.push({ name: 'fq', value: 'personEmail:' + filterPersonEmail });

	var filterPersonRelation = $formFilters.find('.valuePersonRelation').val();
	if(filterPersonRelation != null && filterPersonRelation !== '')
		filters.push({ name: 'fq', value: 'personRelation:' + filterPersonRelation });

	var filterPersonSms = $formFilters.find('.valuePersonSms').prop('checked');
	if(filterPersonSms != null && filterPersonSms === true)
		filters.push({ name: 'fq', value: 'personSms:' + filterPersonSms });

	var filterPersonReceiveEmail = $formFilters.find('.valuePersonReceiveEmail').prop('checked');
	if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
		filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

	var filterPersonEmergencyContact = $formFilters.find('.valuePersonEmergencyContact').prop('checked');
	if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
		filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

	var filterPersonPickup = $formFilters.find('.valuePersonPickup').prop('checked');
	if(filterPersonPickup != null && filterPersonPickup === true)
		filters.push({ name: 'fq', value: 'personPickup:' + filterPersonPickup });

	var filterGuardianCompleteName = $formFilters.find('.valueGuardianCompleteName').val();
	if(filterGuardianCompleteName != null && filterGuardianCompleteName !== '')
		filters.push({ name: 'fq', value: 'guardianCompleteName:' + filterGuardianCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
	return filters;
}

function patchSchoolGuardianVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolGuardianVals(filters, vals, success, error);
}

function patchSchoolGuardianVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/guardian?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getSchoolGuardian(pk) {
	$.ajax({
		url: '/api/guardian/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteSchoolGuardian(pk) {
	$.ajax({
		url: '/api/guardian/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

function searchSchoolGuardian($formFilters, success, error) {
	var filters = searchSchoolGuardianFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolGuardianVals(filters, success, error);
}

function searchSchoolGuardianFilters($formFilters) {
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

	var filterGuardianId = $formFilters.find('.valueGuardianId').val();
	if(filterGuardianId != null && filterGuardianId !== '')
		filters.push({ name: 'fq', value: 'guardianId:' + filterGuardianId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterPersonFirstName = $formFilters.find('.valuePersonFirstName').val();
	if(filterPersonFirstName != null && filterPersonFirstName !== '')
		filters.push({ name: 'fq', value: 'personFirstName:' + filterPersonFirstName });

	var filterFamilyName = $formFilters.find('.valueFamilyName').val();
	if(filterFamilyName != null && filterFamilyName !== '')
		filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

	var filterPersonFirstNamePreferred = $formFilters.find('.valuePersonFirstNamePreferred').val();
	if(filterPersonFirstNamePreferred != null && filterPersonFirstNamePreferred !== '')
		filters.push({ name: 'fq', value: 'personFirstNamePreferred:' + filterPersonFirstNamePreferred });

	var filterPersonPhoneNumber = $formFilters.find('.valuePersonPhoneNumber').val();
	if(filterPersonPhoneNumber != null && filterPersonPhoneNumber !== '')
		filters.push({ name: 'fq', value: 'personPhoneNumber:' + filterPersonPhoneNumber });

	var filterPersonOccupation = $formFilters.find('.valuePersonOccupation').val();
	if(filterPersonOccupation != null && filterPersonOccupation !== '')
		filters.push({ name: 'fq', value: 'personOccupation:' + filterPersonOccupation });

	var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
	if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
		filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

	var filterGuardianKey = $formFilters.find('.valueGuardianKey').val();
	if(filterGuardianKey != null && filterGuardianKey !== '')
		filters.push({ name: 'fq', value: 'guardianKey:' + filterGuardianKey });

	var filterFamilySort = $formFilters.find('.valueFamilySort').val();
	if(filterFamilySort != null && filterFamilySort !== '')
		filters.push({ name: 'fq', value: 'familySort:' + filterFamilySort });

	var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
	if(filterSchoolSort != null && filterSchoolSort !== '')
		filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

	var filterSchoolKeys = $formFilters.find('.valueSchoolKeys').val();
	if(filterSchoolKeys != null && filterSchoolKeys !== '')
		filters.push({ name: 'fq', value: 'schoolKeys:' + filterSchoolKeys });

	var filterYearKeys = $formFilters.find('.valueYearKeys').val();
	if(filterYearKeys != null && filterYearKeys !== '')
		filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

	var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
	if(filterSeasonKeys != null && filterSeasonKeys !== '')
		filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

	var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
	if(filterSessionKeys != null && filterSessionKeys !== '')
		filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

	var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
	if(filterAgeKeys != null && filterAgeKeys !== '')
		filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

	var filterPersonCompleteName = $formFilters.find('.valuePersonCompleteName').val();
	if(filterPersonCompleteName != null && filterPersonCompleteName !== '')
		filters.push({ name: 'fq', value: 'personCompleteName:' + filterPersonCompleteName });

	var filterPersonCompleteNamePreferred = $formFilters.find('.valuePersonCompleteNamePreferred').val();
	if(filterPersonCompleteNamePreferred != null && filterPersonCompleteNamePreferred !== '')
		filters.push({ name: 'fq', value: 'personCompleteNamePreferred:' + filterPersonCompleteNamePreferred });

	var filterPersonFormalName = $formFilters.find('.valuePersonFormalName').val();
	if(filterPersonFormalName != null && filterPersonFormalName !== '')
		filters.push({ name: 'fq', value: 'personFormalName:' + filterPersonFormalName });

	var filterPersonEmail = $formFilters.find('.valuePersonEmail').val();
	if(filterPersonEmail != null && filterPersonEmail !== '')
		filters.push({ name: 'fq', value: 'personEmail:' + filterPersonEmail });

	var filterPersonRelation = $formFilters.find('.valuePersonRelation').val();
	if(filterPersonRelation != null && filterPersonRelation !== '')
		filters.push({ name: 'fq', value: 'personRelation:' + filterPersonRelation });

	var filterPersonSms = $formFilters.find('.valuePersonSms').prop('checked');
	if(filterPersonSms != null && filterPersonSms === true)
		filters.push({ name: 'fq', value: 'personSms:' + filterPersonSms });

	var filterPersonReceiveEmail = $formFilters.find('.valuePersonReceiveEmail').prop('checked');
	if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
		filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

	var filterPersonEmergencyContact = $formFilters.find('.valuePersonEmergencyContact').prop('checked');
	if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
		filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

	var filterPersonPickup = $formFilters.find('.valuePersonPickup').prop('checked');
	if(filterPersonPickup != null && filterPersonPickup === true)
		filters.push({ name: 'fq', value: 'personPickup:' + filterPersonPickup });

	var filterGuardianCompleteName = $formFilters.find('.valueGuardianCompleteName').val();
	if(filterGuardianCompleteName != null && filterGuardianCompleteName !== '')
		filters.push({ name: 'fq', value: 'guardianCompleteName:' + filterGuardianCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
	return filters;
}

function searchSchoolGuardianVals(filters, success, error) {
	$.ajax({
		url: '/api/guardian?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolGuardianEnrollmentKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolGuardianForm :input[name="pk"]').val());
			var val = o['guardianKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_guardianKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_guardianKeys_" + o['pk'] + "'); patchSchoolGuardianVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
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
	searchSchoolEnrollment($formFilters, success, error);
}

function suggestSchoolGuardianObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-phone w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['guardianCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolGuardianVals($formFilters, success, error);
}
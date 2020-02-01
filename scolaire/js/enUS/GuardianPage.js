
// POST //

async function postSchoolGuardian($formValues, success, error) {
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

	var valuePersonRelation = $formValues.find('.valuePersonRelation').val();
	if(valuePersonRelation != null && valuePersonRelation !== '')
		vals['personRelation'] = valuePersonRelation;

	var valuePersonEmergencyContact = $formValues.find('.valuePersonEmergencyContact').prop('checked');
	if(valuePersonEmergencyContact != null && valuePersonEmergencyContact !== '')
		vals['personEmergencyContact'] = valuePersonEmergencyContact;

	var valuePersonPickup = $formValues.find('.valuePersonPickup').prop('checked');
	if(valuePersonPickup != null && valuePersonPickup !== '')
		vals['personPickup'] = valuePersonPickup;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

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

// PUT //

async function putSchoolGuardian($formValues, success, error) {
	var vals = {};

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

	var valuePersonRelation = $formValues.find('.valuePersonRelation').val();
	if(valuePersonRelation != null && valuePersonRelation !== '')
		vals['personRelation'] = valuePersonRelation;

	var valuePersonEmergencyContact = $formValues.find('.valuePersonEmergencyContact').prop('checked');
	if(valuePersonEmergencyContact != null && valuePersonEmergencyContact !== '')
		vals['personEmergencyContact'] = valuePersonEmergencyContact;

	var valuePersonPickup = $formValues.find('.valuePersonPickup').prop('checked');
	if(valuePersonPickup != null && valuePersonPickup !== '')
		vals['personPickup'] = valuePersonPickup;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putSchoolGuardianVals($.deparam(window.location.search ? window.location.search.substring(1) : window.location.search), vals, success, error);
}

function putSchoolGuardianVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/guardian?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolGuardian($formFilters, $formValues, success, error) {
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

	var removePersonRelation = $formFilters.find('.removePersonRelation').val() === 'true';
	var setPersonRelation = removePersonRelation ? null : $formValues.find('.setPersonRelation').val();
	if(removePersonRelation || setPersonRelation != null && setPersonRelation !== '')
		vals['setPersonRelation'] = setPersonRelation;
	var addPersonRelation = $formValues.find('.addPersonRelation').val();
	if(addPersonRelation != null && addPersonRelation !== '')
		vals['addPersonRelation'] = addPersonRelation;
	var removePersonRelation = $formValues.find('.removePersonRelation').val();
	if(removePersonRelation != null && removePersonRelation !== '')
		vals['removePersonRelation'] = removePersonRelation;

	var removePersonEmergencyContact = $formFilters.find('.removePersonEmergencyContact').val() === 'true';
	var setPersonEmergencyContact = removePersonEmergencyContact ? null : $formValues.find('.setPersonEmergencyContact').prop('checked');
	if(removePersonEmergencyContact || setPersonEmergencyContact != null && setPersonEmergencyContact !== '')
		vals['setPersonEmergencyContact'] = setPersonEmergencyContact;
	var addPersonEmergencyContact = $formValues.find('.addPersonEmergencyContact').prop('checked');
	if(addPersonEmergencyContact != null && addPersonEmergencyContact !== '')
		vals['addPersonEmergencyContact'] = addPersonEmergencyContact;
	var removePersonEmergencyContact = $formValues.find('.removePersonEmergencyContact').prop('checked');
	if(removePersonEmergencyContact != null && removePersonEmergencyContact !== '')
		vals['removePersonEmergencyContact'] = removePersonEmergencyContact;

	var removePersonPickup = $formFilters.find('.removePersonPickup').val() === 'true';
	var setPersonPickup = removePersonPickup ? null : $formValues.find('.setPersonPickup').prop('checked');
	if(removePersonPickup || setPersonPickup != null && setPersonPickup !== '')
		vals['setPersonPickup'] = setPersonPickup;
	var addPersonPickup = $formValues.find('.addPersonPickup').prop('checked');
	if(addPersonPickup != null && addPersonPickup !== '')
		vals['addPersonPickup'] = addPersonPickup;
	var removePersonPickup = $formValues.find('.removePersonPickup').prop('checked');
	if(removePersonPickup != null && removePersonPickup !== '')
		vals['removePersonPickup'] = removePersonPickup;

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

	var removeObjectTitle = $formFilters.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	patchSchoolGuardianVals($.deparam(window.location.search ? window.location.search.substring(1) : window.location.search), vals, success, error);
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

	var filterObjectId = $formFilters.find('.valueObjectId').val();
	if(filterObjectId != null && filterObjectId !== '')
		filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

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

	var filterPersonRelation = $formFilters.find('.valuePersonRelation').val();
	if(filterPersonRelation != null && filterPersonRelation !== '')
		filters.push({ name: 'fq', value: 'personRelation:' + filterPersonRelation });

	var filterPersonEmergencyContact = $formFilters.find('.valuePersonEmergencyContact').prop('checked');
	if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
		filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

	var filterPersonPickup = $formFilters.find('.valuePersonPickup').prop('checked');
	if(filterPersonPickup != null && filterPersonPickup === true)
		filters.push({ name: 'fq', value: 'personPickup:' + filterPersonPickup });

	var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
	if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
		filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

	var filterSaves = $formFilters.find('.valueSaves').val();
	if(filterSaves != null && filterSaves !== '')
		filters.push({ name: 'fq', value: 'saves:' + filterSaves });

	var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
	if(filterObjectTitle != null && filterObjectTitle !== '')
		filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

	var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
	if(filterPageUrlId != null && filterPageUrlId !== '')
		filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

	var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
	if(filterPageUrlPk != null && filterPageUrlPk !== '')
		filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

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

	var filterPersonOccupation = $formFilters.find('.valuePersonOccupation').val();
	if(filterPersonOccupation != null && filterPersonOccupation !== '')
		filters.push({ name: 'fq', value: 'personOccupation:' + filterPersonOccupation });

	var filterPersonEmail = $formFilters.find('.valuePersonEmail').val();
	if(filterPersonEmail != null && filterPersonEmail !== '')
		filters.push({ name: 'fq', value: 'personEmail:' + filterPersonEmail });

	var filterPersonSms = $formFilters.find('.valuePersonSms').prop('checked');
	if(filterPersonSms != null && filterPersonSms === true)
		filters.push({ name: 'fq', value: 'personSms:' + filterPersonSms });

	var filterPersonReceiveEmail = $formFilters.find('.valuePersonReceiveEmail').prop('checked');
	if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
		filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

	var filterGuardianCompleteName = $formFilters.find('.valueGuardianCompleteName').val();
	if(filterGuardianCompleteName != null && filterGuardianCompleteName !== '')
		filters.push({ name: 'fq', value: 'guardianCompleteName:' + filterGuardianCompleteName });
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

async function getSchoolGuardian(pk) {
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

async function deleteSchoolGuardian(pk) {
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

async function searchSchoolGuardian($formFilters, success, error) {
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

	var filterObjectId = $formFilters.find('.valueObjectId').val();
	if(filterObjectId != null && filterObjectId !== '')
		filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

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

	var filterPersonRelation = $formFilters.find('.valuePersonRelation').val();
	if(filterPersonRelation != null && filterPersonRelation !== '')
		filters.push({ name: 'fq', value: 'personRelation:' + filterPersonRelation });

	var filterPersonEmergencyContact = $formFilters.find('.valuePersonEmergencyContact').prop('checked');
	if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
		filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

	var filterPersonPickup = $formFilters.find('.valuePersonPickup').prop('checked');
	if(filterPersonPickup != null && filterPersonPickup === true)
		filters.push({ name: 'fq', value: 'personPickup:' + filterPersonPickup });

	var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
	if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
		filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

	var filterSaves = $formFilters.find('.valueSaves').val();
	if(filterSaves != null && filterSaves !== '')
		filters.push({ name: 'fq', value: 'saves:' + filterSaves });

	var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
	if(filterObjectTitle != null && filterObjectTitle !== '')
		filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

	var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
	if(filterPageUrlId != null && filterPageUrlId !== '')
		filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

	var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
	if(filterPageUrlPk != null && filterPageUrlPk !== '')
		filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

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

	var filterPersonOccupation = $formFilters.find('.valuePersonOccupation').val();
	if(filterPersonOccupation != null && filterPersonOccupation !== '')
		filters.push({ name: 'fq', value: 'personOccupation:' + filterPersonOccupation });

	var filterPersonEmail = $formFilters.find('.valuePersonEmail').val();
	if(filterPersonEmail != null && filterPersonEmail !== '')
		filters.push({ name: 'fq', value: 'personEmail:' + filterPersonEmail });

	var filterPersonSms = $formFilters.find('.valuePersonSms').prop('checked');
	if(filterPersonSms != null && filterPersonSms === true)
		filters.push({ name: 'fq', value: 'personSms:' + filterPersonSms });

	var filterPersonReceiveEmail = $formFilters.find('.valuePersonReceiveEmail').prop('checked');
	if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
		filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

	var filterGuardianCompleteName = $formFilters.find('.valueGuardianCompleteName').val();
	if(filterGuardianCompleteName != null && filterGuardianCompleteName !== '')
		filters.push({ name: 'fq', value: 'guardianCompleteName:' + filterGuardianCompleteName });
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

function suggestSchoolGuardianObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-phone ');
			var $span = $('<span>').attr('class', '').text(o['guardianCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolGuardianVals($formFilters, success, error);
}

function suggestSchoolGuardianEnrollmentKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['guardianKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_guardianKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_guardianKeys_" + o['pk'] + "'); patchSchoolGuardianVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolGuardianForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

async function websocketSchoolGuardian(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolGuardian', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-yellow ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'far fa-phone w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modify guardians');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-yellow ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
		});

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
		});
	}
}
async function websocketSchoolGuardianInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolGuardianVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputSchoolGuardian' + pk + 'Created').val(o['created']);
				$('.varSchoolGuardian' + pk + 'Created').text(o['created']);
			}
			if(vars.includes('modified')) {
				$('.inputSchoolGuardian' + pk + 'Modified').val(o['modified']);
				$('.varSchoolGuardian' + pk + 'Modified').text(o['modified']);
			}
			if(vars.includes('archived')) {
				$('.inputSchoolGuardian' + pk + 'Archived').val(o['archived']);
				$('.varSchoolGuardian' + pk + 'Archived').text(o['archived']);
			}
			if(vars.includes('deleted')) {
				$('.inputSchoolGuardian' + pk + 'Deleted').val(o['deleted']);
				$('.varSchoolGuardian' + pk + 'Deleted').text(o['deleted']);
			}
			if(vars.includes('personFirstName')) {
				$('.inputSchoolGuardian' + pk + 'PersonFirstName').val(o['personFirstName']);
				$('.varSchoolGuardian' + pk + 'PersonFirstName').text(o['personFirstName']);
			}
			if(vars.includes('familyName')) {
				$('.inputSchoolGuardian' + pk + 'FamilyName').val(o['familyName']);
				$('.varSchoolGuardian' + pk + 'FamilyName').text(o['familyName']);
			}
			if(vars.includes('personFirstNamePreferred')) {
				$('.inputSchoolGuardian' + pk + 'PersonFirstNamePreferred').val(o['personFirstNamePreferred']);
				$('.varSchoolGuardian' + pk + 'PersonFirstNamePreferred').text(o['personFirstNamePreferred']);
			}
			if(vars.includes('personPhoneNumber')) {
				$('.inputSchoolGuardian' + pk + 'PersonPhoneNumber').val(o['personPhoneNumber']);
				$('.varSchoolGuardian' + pk + 'PersonPhoneNumber').text(o['personPhoneNumber']);
			}
			if(vars.includes('personRelation')) {
				$('.inputSchoolGuardian' + pk + 'PersonRelation').val(o['personRelation']);
				$('.varSchoolGuardian' + pk + 'PersonRelation').text(o['personRelation']);
			}
			if(vars.includes('personEmergencyContact')) {
				$('.inputSchoolGuardian' + pk + 'PersonEmergencyContact').val(o['personEmergencyContact']);
				$('.varSchoolGuardian' + pk + 'PersonEmergencyContact').text(o['personEmergencyContact']);
			}
			if(vars.includes('personPickup')) {
				$('.inputSchoolGuardian' + pk + 'PersonPickup').val(o['personPickup']);
				$('.varSchoolGuardian' + pk + 'PersonPickup').text(o['personPickup']);
			}
			if(vars.includes('enrollmentKeys')) {
				$('.inputSchoolGuardian' + pk + 'EnrollmentKeys').val(o['enrollmentKeys']);
				$('.varSchoolGuardian' + pk + 'EnrollmentKeys').text(o['enrollmentKeys']);
			}
		});
	}

	if(!empty) {
		if(pks) {
			for(i=0; i < pks.length; i++) {
				var pk2 = pks[i];
				var c = classes[i];
				await window['patch' + c + 'Vals']( [ {name: 'fq', value: 'pk:' + pk2} ], {});
			}
		}
		if(pk)
			await patchSchoolGuardianVals( [ {name: 'fq', value: 'pk:' + pk} ], {});
	}
}

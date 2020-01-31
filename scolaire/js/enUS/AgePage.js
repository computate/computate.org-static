
// POST //

async function postSchoolAge($formValues, success, error) {
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

	var valueAgeStart = $formValues.find('.valueAgeStart').val();
	if(valueAgeStart != null && valueAgeStart !== '')
		vals['ageStart'] = valueAgeStart;

	var valueAgeEnd = $formValues.find('.valueAgeEnd').val();
	if(valueAgeEnd != null && valueAgeEnd !== '')
		vals['ageEnd'] = valueAgeEnd;

	var valueSessionKey = $formValues.find('input.valueSessionKey:checked').val();
	if(valueSessionKey != null && valueSessionKey !== '')
		vals['sessionKey'] = valueSessionKey;

	var valueBlockKeys = $formValues.find('input.valueBlockKeys:checked').val();
	if(valueBlockKeys != null && valueBlockKeys !== '')
		vals['blockKeys'] = valueBlockKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueAgeCompleteName = $formValues.find('.valueAgeCompleteName').val();
	if(valueAgeCompleteName != null && valueAgeCompleteName !== '')
		vals['ageCompleteName'] = valueAgeCompleteName;

	$.ajax({
		url: '/api/age'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolAgeVals(vals, success, error) {
	$.ajax({
		url: '/api/age'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolAge($formFilters, $formValues, success, error) {
	var filters = patchSchoolAgeFilters($formFilters);

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

	var removeAgeStart = $formFilters.find('.removeAgeStart').val() === 'true';
	var setAgeStart = removeAgeStart ? null : $formValues.find('.setAgeStart').val();
	if(removeAgeStart || setAgeStart != null && setAgeStart !== '')
		vals['setAgeStart'] = setAgeStart;
	var addAgeStart = $formValues.find('.addAgeStart').val();
	if(addAgeStart != null && addAgeStart !== '')
		vals['addAgeStart'] = addAgeStart;
	var removeAgeStart = $formValues.find('.removeAgeStart').val();
	if(removeAgeStart != null && removeAgeStart !== '')
		vals['removeAgeStart'] = removeAgeStart;

	var removeAgeEnd = $formFilters.find('.removeAgeEnd').val() === 'true';
	var setAgeEnd = removeAgeEnd ? null : $formValues.find('.setAgeEnd').val();
	if(removeAgeEnd || setAgeEnd != null && setAgeEnd !== '')
		vals['setAgeEnd'] = setAgeEnd;
	var addAgeEnd = $formValues.find('.addAgeEnd').val();
	if(addAgeEnd != null && addAgeEnd !== '')
		vals['addAgeEnd'] = addAgeEnd;
	var removeAgeEnd = $formValues.find('.removeAgeEnd').val();
	if(removeAgeEnd != null && removeAgeEnd !== '')
		vals['removeAgeEnd'] = removeAgeEnd;

	var removeSessionKey = $formFilters.find('.removeSessionKey').val() === 'true';
	var setSessionKey = removeSessionKey ? null : $formValues.find('.setSessionKey').val();
	if(removeSessionKey || setSessionKey != null && setSessionKey !== '')
		vals['setSessionKey'] = setSessionKey;
	var addSessionKey = $formValues.find('.addSessionKey').val();
	if(addSessionKey != null && addSessionKey !== '')
		vals['addSessionKey'] = addSessionKey;
	var removeSessionKey = $formValues.find('.removeSessionKey').val();
	if(removeSessionKey != null && removeSessionKey !== '')
		vals['removeSessionKey'] = removeSessionKey;

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

	var removeAgeCompleteName = $formFilters.find('.removeAgeCompleteName').val() === 'true';
	var setAgeCompleteName = removeAgeCompleteName ? null : $formValues.find('.setAgeCompleteName').val();
	if(removeAgeCompleteName || setAgeCompleteName != null && setAgeCompleteName !== '')
		vals['setAgeCompleteName'] = setAgeCompleteName;
	var addAgeCompleteName = $formValues.find('.addAgeCompleteName').val();
	if(addAgeCompleteName != null && addAgeCompleteName !== '')
		vals['addAgeCompleteName'] = addAgeCompleteName;
	var removeAgeCompleteName = $formValues.find('.removeAgeCompleteName').val();
	if(removeAgeCompleteName != null && removeAgeCompleteName !== '')
		vals['removeAgeCompleteName'] = removeAgeCompleteName;

	patchSchoolAgeVals(filters, vals, success, error);
}

function patchSchoolAgeFilters($formFilters) {
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

	var filterAgeStart = $formFilters.find('.valueAgeStart').val();
	if(filterAgeStart != null && filterAgeStart !== '')
		filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

	var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
	if(filterAgeEnd != null && filterAgeEnd !== '')
		filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

	var filterSessionKey = $formFilters.find('.valueSessionKey').val();
	if(filterSessionKey != null && filterSessionKey !== '')
		filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

	var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
	if(filterBlockKeys != null && filterBlockKeys !== '')
		filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

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

	var filterAgeKey = $formFilters.find('.valueAgeKey').val();
	if(filterAgeKey != null && filterAgeKey !== '')
		filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

	var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
	if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
		filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

	var filterYearKey = $formFilters.find('.valueYearKey').val();
	if(filterYearKey != null && filterYearKey !== '')
		filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

	var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
	if(filterSeasonKey != null && filterSeasonKey !== '')
		filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

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

	var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
	if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
		filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

	var filterSeasonShortName = $formFilters.find('.valueSeasonShortName').val();
	if(filterSeasonShortName != null && filterSeasonShortName !== '')
		filters.push({ name: 'fq', value: 'seasonShortName:' + filterSeasonShortName });

	var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
	if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
		filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });

	var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
	if(filterSessionStartDate != null && filterSessionStartDate !== '')
		filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

	var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
	if(filterSessionEndDate != null && filterSessionEndDate !== '')
		filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

	var filterSessionCompleteName = $formFilters.find('.valueSessionCompleteName').val();
	if(filterSessionCompleteName != null && filterSessionCompleteName !== '')
		filters.push({ name: 'fq', value: 'sessionCompleteName:' + filterSessionCompleteName });

	var filterAgeShortName = $formFilters.find('.valueAgeShortName').val();
	if(filterAgeShortName != null && filterAgeShortName !== '')
		filters.push({ name: 'fq', value: 'ageShortName:' + filterAgeShortName });

	var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
	if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
		filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });
	return filters;
}

function patchSchoolAgeVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolAgeVals(filters, vals, success, error);
}

function patchSchoolAgeVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/age?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolAge(pk) {
	$.ajax({
		url: '/api/age/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

async function deleteSchoolAge(pk) {
	$.ajax({
		url: '/api/age/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolAge($formFilters, success, error) {
	var filters = searchSchoolAgeFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolAgeVals(filters, success, error);
}

function searchSchoolAgeFilters($formFilters) {
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

	var filterAgeStart = $formFilters.find('.valueAgeStart').val();
	if(filterAgeStart != null && filterAgeStart !== '')
		filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

	var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
	if(filterAgeEnd != null && filterAgeEnd !== '')
		filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

	var filterSessionKey = $formFilters.find('.valueSessionKey').val();
	if(filterSessionKey != null && filterSessionKey !== '')
		filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

	var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
	if(filterBlockKeys != null && filterBlockKeys !== '')
		filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

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

	var filterAgeKey = $formFilters.find('.valueAgeKey').val();
	if(filterAgeKey != null && filterAgeKey !== '')
		filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

	var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
	if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
		filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

	var filterYearKey = $formFilters.find('.valueYearKey').val();
	if(filterYearKey != null && filterYearKey !== '')
		filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

	var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
	if(filterSeasonKey != null && filterSeasonKey !== '')
		filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

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

	var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
	if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
		filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

	var filterSeasonShortName = $formFilters.find('.valueSeasonShortName').val();
	if(filterSeasonShortName != null && filterSeasonShortName !== '')
		filters.push({ name: 'fq', value: 'seasonShortName:' + filterSeasonShortName });

	var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
	if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
		filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });

	var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
	if(filterSessionStartDate != null && filterSessionStartDate !== '')
		filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

	var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
	if(filterSessionEndDate != null && filterSessionEndDate !== '')
		filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

	var filterSessionCompleteName = $formFilters.find('.valueSessionCompleteName').val();
	if(filterSessionCompleteName != null && filterSessionCompleteName !== '')
		filters.push({ name: 'fq', value: 'sessionCompleteName:' + filterSessionCompleteName });

	var filterAgeShortName = $formFilters.find('.valueAgeShortName').val();
	if(filterAgeShortName != null && filterAgeShortName !== '')
		filters.push({ name: 'fq', value: 'ageShortName:' + filterAgeShortName });

	var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
	if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
		filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });
	return filters;
}

function searchSchoolAgeVals(filters, success, error) {
	$.ajax({
		url: '/api/age?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolAgeObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-birthday-cake w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['ageCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolAgeVals($formFilters, success, error);
}

function suggestSchoolAgeBlockKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['blockCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['ageKey'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blockKeys_' + pk + '_ageKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueBlockKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_blockKeys_" + pk + "_ageKey_" + o['pk'] + "'); patchSchoolAgeVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlockKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolAgeForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolBlockVals(filters, success, error);
}

function suggestSchoolAgeSessionKey(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-graduation-cap w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['sessionCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['ageKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_sessionKey_' + pk + '_ageKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSessionKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_sessionKey_" + pk + "_ageKeys_" + o['pk'] + "'); patchSchoolAgeVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SessionKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolAgeForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolSessionVals(filters, success, error);
}

async function websocketSchoolAge(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolAge', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-blue ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'fad fa-birthday-cake w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modify ages');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-blue ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketSchoolBlock', function (error, message) {
			$('#Page_blockKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolSession', function (error, message) {
			$('#Page_sessionKey').trigger('oninput');
		});
	}
}
async function websocketSchoolAgeInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolAgeVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputSchoolAge' + pk + 'Created').val(o['created']);
				$('.varSchoolAge' + pk + 'Created').text(o['created']);
			}
			if(vars.includes('modified')) {
				$('.inputSchoolAge' + pk + 'Modified').val(o['modified']);
				$('.varSchoolAge' + pk + 'Modified').text(o['modified']);
			}
			if(vars.includes('archived')) {
				$('.inputSchoolAge' + pk + 'Archived').val(o['archived']);
				$('.varSchoolAge' + pk + 'Archived').text(o['archived']);
			}
			if(vars.includes('deleted')) {
				$('.inputSchoolAge' + pk + 'Deleted').val(o['deleted']);
				$('.varSchoolAge' + pk + 'Deleted').text(o['deleted']);
			}
			if(vars.includes('ageStart')) {
				$('.inputSchoolAge' + pk + 'AgeStart').val(o['ageStart']);
				$('.varSchoolAge' + pk + 'AgeStart').text(o['ageStart']);
			}
			if(vars.includes('ageEnd')) {
				$('.inputSchoolAge' + pk + 'AgeEnd').val(o['ageEnd']);
				$('.varSchoolAge' + pk + 'AgeEnd').text(o['ageEnd']);
			}
			if(vars.includes('sessionKey')) {
				$('.inputSchoolAge' + pk + 'SessionKey').val(o['sessionKey']);
				$('.varSchoolAge' + pk + 'SessionKey').text(o['sessionKey']);
			}
			if(vars.includes('blockKeys')) {
				$('.inputSchoolAge' + pk + 'BlockKeys').val(o['blockKeys']);
				$('.varSchoolAge' + pk + 'BlockKeys').text(o['blockKeys']);
			}
			if(vars.includes('schoolAddress')) {
				$('.inputSchoolAge' + pk + 'SchoolAddress').val(o['schoolAddress']);
				$('.varSchoolAge' + pk + 'SchoolAddress').text(o['schoolAddress']);
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
			await patchSchoolAgeVals( [ {name: 'fq', value: 'pk:' + pk} ], {});
	}
}


// POST //

async function postSchool($formValues, success, error) {
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

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueSchoolName = $formValues.find('.valueSchoolName').val();
	if(valueSchoolName != null && valueSchoolName !== '')
		vals['schoolName'] = valueSchoolName;

	var valueSchoolAdministratorName = $formValues.find('.valueSchoolAdministratorName').val();
	if(valueSchoolAdministratorName != null && valueSchoolAdministratorName !== '')
		vals['schoolAdministratorName'] = valueSchoolAdministratorName;

	var valueSchoolLocation = $formValues.find('.valueSchoolLocation').val();
	if(valueSchoolLocation != null && valueSchoolLocation !== '')
		vals['schoolLocation'] = valueSchoolLocation;

	var valueSchoolPhoneNumber = $formValues.find('.valueSchoolPhoneNumber').val();
	if(valueSchoolPhoneNumber != null && valueSchoolPhoneNumber !== '')
		vals['schoolPhoneNumber'] = valueSchoolPhoneNumber;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueYearKeys = $formValues.find('.valueYearKeys').val();
	if(valueYearKeys != null && valueYearKeys !== '')
		vals['yearKeys'] = valueYearKeys;

	var valueSchoolCompleteName = $formValues.find('.valueSchoolCompleteName').val();
	if(valueSchoolCompleteName != null && valueSchoolCompleteName !== '')
		vals['schoolCompleteName'] = valueSchoolCompleteName;

	$.ajax({
		url: '/api/school'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolVals(vals, success, error) {
	$.ajax({
		url: '/api/school'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchool($formFilters, $formValues, success, error) {
	var filters = patchSchoolFilters($formFilters);

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

	var removeSchoolName = $formFilters.find('.removeSchoolName').val() === 'true';
	var setSchoolName = removeSchoolName ? null : $formValues.find('.setSchoolName').val();
	if(removeSchoolName || setSchoolName != null && setSchoolName !== '')
		vals['setSchoolName'] = setSchoolName;
	var addSchoolName = $formValues.find('.addSchoolName').val();
	if(addSchoolName != null && addSchoolName !== '')
		vals['addSchoolName'] = addSchoolName;
	var removeSchoolName = $formValues.find('.removeSchoolName').val();
	if(removeSchoolName != null && removeSchoolName !== '')
		vals['removeSchoolName'] = removeSchoolName;

	var removeSchoolAdministratorName = $formFilters.find('.removeSchoolAdministratorName').val() === 'true';
	var setSchoolAdministratorName = removeSchoolAdministratorName ? null : $formValues.find('.setSchoolAdministratorName').val();
	if(removeSchoolAdministratorName || setSchoolAdministratorName != null && setSchoolAdministratorName !== '')
		vals['setSchoolAdministratorName'] = setSchoolAdministratorName;
	var addSchoolAdministratorName = $formValues.find('.addSchoolAdministratorName').val();
	if(addSchoolAdministratorName != null && addSchoolAdministratorName !== '')
		vals['addSchoolAdministratorName'] = addSchoolAdministratorName;
	var removeSchoolAdministratorName = $formValues.find('.removeSchoolAdministratorName').val();
	if(removeSchoolAdministratorName != null && removeSchoolAdministratorName !== '')
		vals['removeSchoolAdministratorName'] = removeSchoolAdministratorName;

	var removeSchoolLocation = $formFilters.find('.removeSchoolLocation').val() === 'true';
	var setSchoolLocation = removeSchoolLocation ? null : $formValues.find('.setSchoolLocation').val();
	if(removeSchoolLocation || setSchoolLocation != null && setSchoolLocation !== '')
		vals['setSchoolLocation'] = setSchoolLocation;
	var addSchoolLocation = $formValues.find('.addSchoolLocation').val();
	if(addSchoolLocation != null && addSchoolLocation !== '')
		vals['addSchoolLocation'] = addSchoolLocation;
	var removeSchoolLocation = $formValues.find('.removeSchoolLocation').val();
	if(removeSchoolLocation != null && removeSchoolLocation !== '')
		vals['removeSchoolLocation'] = removeSchoolLocation;

	var removeSchoolPhoneNumber = $formFilters.find('.removeSchoolPhoneNumber').val() === 'true';
	var setSchoolPhoneNumber = removeSchoolPhoneNumber ? null : $formValues.find('.setSchoolPhoneNumber').val();
	if(removeSchoolPhoneNumber || setSchoolPhoneNumber != null && setSchoolPhoneNumber !== '')
		vals['setSchoolPhoneNumber'] = setSchoolPhoneNumber;
	var addSchoolPhoneNumber = $formValues.find('.addSchoolPhoneNumber').val();
	if(addSchoolPhoneNumber != null && addSchoolPhoneNumber !== '')
		vals['addSchoolPhoneNumber'] = addSchoolPhoneNumber;
	var removeSchoolPhoneNumber = $formValues.find('.removeSchoolPhoneNumber').val();
	if(removeSchoolPhoneNumber != null && removeSchoolPhoneNumber !== '')
		vals['removeSchoolPhoneNumber'] = removeSchoolPhoneNumber;

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

	var removeYearKeys = $formFilters.find('.removeYearKeys').val() === 'true';
	var setYearKeys = removeYearKeys ? null : $formValues.find('.setYearKeys').val();
	if(removeYearKeys || setYearKeys != null && setYearKeys !== '')
		vals['setYearKeys'] = setYearKeys;
	var addYearKeys = $formValues.find('.addYearKeys').val();
	if(addYearKeys != null && addYearKeys !== '')
		vals['addYearKeys'] = addYearKeys;
	var removeYearKeys = $formValues.find('.removeYearKeys').val();
	if(removeYearKeys != null && removeYearKeys !== '')
		vals['removeYearKeys'] = removeYearKeys;

	var removeSchoolCompleteName = $formFilters.find('.removeSchoolCompleteName').val() === 'true';
	var setSchoolCompleteName = removeSchoolCompleteName ? null : $formValues.find('.setSchoolCompleteName').val();
	if(removeSchoolCompleteName || setSchoolCompleteName != null && setSchoolCompleteName !== '')
		vals['setSchoolCompleteName'] = setSchoolCompleteName;
	var addSchoolCompleteName = $formValues.find('.addSchoolCompleteName').val();
	if(addSchoolCompleteName != null && addSchoolCompleteName !== '')
		vals['addSchoolCompleteName'] = addSchoolCompleteName;
	var removeSchoolCompleteName = $formValues.find('.removeSchoolCompleteName').val();
	if(removeSchoolCompleteName != null && removeSchoolCompleteName !== '')
		vals['removeSchoolCompleteName'] = removeSchoolCompleteName;

	patchSchoolVals(filters, vals, success, error);
}

function patchSchoolFilters($formFilters) {
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

	var filterSchoolName = $formFilters.find('.valueSchoolName').val();
	if(filterSchoolName != null && filterSchoolName !== '')
		filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

	var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
	if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
		filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

	var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
	if(filterSchoolLocation != null && filterSchoolLocation !== '')
		filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

	var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
	if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
		filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

	var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
	if(filterSchoolAddress != null && filterSchoolAddress !== '')
		filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

	var filterYearKeys = $formFilters.find('.valueYearKeys').val();
	if(filterYearKeys != null && filterYearKeys !== '')
		filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

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

	var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
	if(filterObjectTitle != null && filterObjectTitle !== '')
		filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

	var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
	if(filterSeasonKeys != null && filterSeasonKeys !== '')
		filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

	var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
	if(filterSessionKeys != null && filterSessionKeys !== '')
		filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

	var filterAgeGroupKeys = $formFilters.find('.valueAgeGroupKeys').val();
	if(filterAgeGroupKeys != null && filterAgeGroupKeys !== '')
		filters.push({ name: 'fq', value: 'ageGroupKeys:' + filterAgeGroupKeys });

	var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
	if(filterBlockKeys != null && filterBlockKeys !== '')
		filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

	var filterChildKeys = $formFilters.find('.valueChildKeys').val();
	if(filterChildKeys != null && filterChildKeys !== '')
		filters.push({ name: 'fq', value: 'childKeys:' + filterChildKeys });

	var filterEducationSort = $formFilters.find('.valueEducationSort').val();
	if(filterEducationSort != null && filterEducationSort !== '')
		filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

	var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
	if(filterSchoolSort != null && filterSchoolSort !== '')
		filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

	var filterSchoolShortName = $formFilters.find('.valueSchoolShortName').val();
	if(filterSchoolShortName != null && filterSchoolShortName !== '')
		filters.push({ name: 'fq', value: 'schoolShortName:' + filterSchoolShortName });

	var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
	if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
		filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });
	return filters;
}

function patchSchoolVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolVals(filters, vals, success, error);
}

function patchSchoolVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/school?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchool(pk) {
	$.ajax({
		url: '/api/school/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

async function deleteSchool(pk) {
	$.ajax({
		url: '/api/school/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

async function searchSchool($formFilters, success, error) {
	var filters = searchSchoolFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolVals(filters, success, error);
}

function searchSchoolFilters($formFilters) {
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

	var filterSchoolName = $formFilters.find('.valueSchoolName').val();
	if(filterSchoolName != null && filterSchoolName !== '')
		filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

	var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
	if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
		filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

	var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
	if(filterSchoolLocation != null && filterSchoolLocation !== '')
		filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

	var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
	if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
		filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

	var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
	if(filterSchoolAddress != null && filterSchoolAddress !== '')
		filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

	var filterYearKeys = $formFilters.find('.valueYearKeys').val();
	if(filterYearKeys != null && filterYearKeys !== '')
		filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

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

	var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
	if(filterObjectTitle != null && filterObjectTitle !== '')
		filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

	var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
	if(filterSeasonKeys != null && filterSeasonKeys !== '')
		filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

	var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
	if(filterSessionKeys != null && filterSessionKeys !== '')
		filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

	var filterAgeGroupKeys = $formFilters.find('.valueAgeGroupKeys').val();
	if(filterAgeGroupKeys != null && filterAgeGroupKeys !== '')
		filters.push({ name: 'fq', value: 'ageGroupKeys:' + filterAgeGroupKeys });

	var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
	if(filterBlockKeys != null && filterBlockKeys !== '')
		filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

	var filterChildKeys = $formFilters.find('.valueChildKeys').val();
	if(filterChildKeys != null && filterChildKeys !== '')
		filters.push({ name: 'fq', value: 'childKeys:' + filterChildKeys });

	var filterEducationSort = $formFilters.find('.valueEducationSort').val();
	if(filterEducationSort != null && filterEducationSort !== '')
		filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

	var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
	if(filterSchoolSort != null && filterSchoolSort !== '')
		filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

	var filterSchoolShortName = $formFilters.find('.valueSchoolShortName').val();
	if(filterSchoolShortName != null && filterSchoolShortName !== '')
		filters.push({ name: 'fq', value: 'schoolShortName:' + filterSchoolShortName });

	var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
	if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
		filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });
	return filters;
}

function searchSchoolVals(filters, success, error) {
	$.ajax({
		url: '/api/school?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-school w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['schoolCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolVals($formFilters, success, error);
}

function suggestSchoolYearKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['yearCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['schoolKey'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_yearKeys_' + pk + '_schoolKey_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_yearKeys_" + pk + "_schoolKey_" + o['pk'] + "'); patchSchoolVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'YearKeys']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolYearVals(filters, success, error);
}

async function websocketSchool(success) {
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {

		eventBus.registerHandler('websocketSchool', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-pink ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'far fa-school w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modify schools');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-pink ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		eventBus.registerHandler('websocketSchoolYear', function (error, message) {
			$('#Page_yearKeys').trigger('oninput');
		});
	}
}

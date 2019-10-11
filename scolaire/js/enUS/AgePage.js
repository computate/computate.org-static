
// POST //

function postSchoolAge($formValues, success, error) {
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

	var valueAgeId = $formValues.find('.valueAgeId').val();
	if(valueAgeId != null && valueAgeId !== '')
		vals['ageId'] = valueAgeId;

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

	var valueBlockKeys = $formValues.find('.valueBlockKeys').val();
	if(valueBlockKeys != null && valueBlockKeys !== '')
		vals['blockKeys'] = valueBlockKeys;

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

function patchSchoolAge($formFilters, $formValues, success, error) {
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

	var removeAgeId = $formFilters.find('.removeAgeId').val() === 'true';
	var setAgeId = removeAgeId ? null : $formValues.find('.setAgeId').val();
	if(removeAgeId || setAgeId != null && setAgeId !== '')
		vals['setAgeId'] = setAgeId;
	var addAgeId = $formValues.find('.addAgeId').val();
	if(addAgeId != null && addAgeId !== '')
		vals['addAgeId'] = addAgeId;
	var removeAgeId = $formValues.find('.removeAgeId').val();
	if(removeAgeId != null && removeAgeId !== '')
		vals['removeAgeId'] = removeAgeId;

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

	var filterAgeId = $formFilters.find('.valueAgeId').val();
	if(filterAgeId != null && filterAgeId !== '')
		filters.push({ name: 'fq', value: 'ageId:' + filterAgeId });

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

	var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
	if(filterBlockKeys != null && filterBlockKeys !== '')
		filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

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

	var filterSessionKey = $formFilters.find('.valueSessionKey').val();
	if(filterSessionKey != null && filterSessionKey !== '')
		filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

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

	var filterSessionCompleteName = $formFilters.find('.valueSessionCompleteName').val();
	if(filterSessionCompleteName != null && filterSessionCompleteName !== '')
		filters.push({ name: 'fq', value: 'sessionCompleteName:' + filterSessionCompleteName });

	var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
	if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
		filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
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

function getSchoolAge(pk) {
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

function deleteSchoolAge(pk) {
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

function searchSchoolAge($formFilters, success, error) {
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

	var filterAgeId = $formFilters.find('.valueAgeId').val();
	if(filterAgeId != null && filterAgeId !== '')
		filters.push({ name: 'fq', value: 'ageId:' + filterAgeId });

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

	var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
	if(filterBlockKeys != null && filterBlockKeys !== '')
		filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

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

	var filterSessionKey = $formFilters.find('.valueSessionKey').val();
	if(filterSessionKey != null && filterSessionKey !== '')
		filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

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

	var filterSessionCompleteName = $formFilters.find('.valueSessionCompleteName').val();
	if(filterSessionCompleteName != null && filterSessionCompleteName !== '')
		filters.push({ name: 'fq', value: 'sessionCompleteName:' + filterSessionCompleteName });

	var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
	if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
		filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
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

function suggestSchoolAgeBlockKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['blocCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolAgeForm :input[name="pk"]').val());
			var val = o['ageKey'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blockKeys_' + pk + '_ageKey_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_blockKeys_" + pk + "_ageKey_" + o['pk'] + "'); patchSchoolAgeVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlockKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolBlockVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
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

function suggestSchoolAgeObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-birthday-cake w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['ageCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolAgeVals($formFilters, success, error);
}
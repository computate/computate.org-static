
// POST //

function postSchoolSession($formValues, success, error) {
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

	var valueSessionStartDay = $formValues.find('.valueSessionStartDay').val();
	if(valueSessionStartDay != null && valueSessionStartDay !== '')
		vals['sessionStartDay'] = valueSessionStartDay;

	var valueSessionEndDay = $formValues.find('.valueSessionEndDay').val();
	if(valueSessionEndDay != null && valueSessionEndDay !== '')
		vals['sessionEndDay'] = valueSessionEndDay;

	var valueAgeKeys = $formValues.find('.valueAgeKeys').val();
	if(valueAgeKeys != null && valueAgeKeys !== '')
		vals['ageKeys'] = valueAgeKeys;

	var valueSessionCompleteName = $formValues.find('.valueSessionCompleteName').val();
	if(valueSessionCompleteName != null && valueSessionCompleteName !== '')
		vals['sessionCompleteName'] = valueSessionCompleteName;

	$.ajax({
		url: '/api/session'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolSessionVals(vals, success, error) {
	$.ajax({
		url: '/api/session'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchSchoolSession($formFilters, $formValues, success, error) {
	var filters = patchSchoolSessionFilters($formFilters);

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

	var removeSessionStartDay = $formFilters.find('.removeSessionStartDay').val() === 'true';
	var setSessionStartDay = removeSessionStartDay ? null : $formValues.find('.setSessionStartDay').val();
	if(removeSessionStartDay || setSessionStartDay != null && setSessionStartDay !== '')
		vals['setSessionStartDay'] = setSessionStartDay;
	var addSessionStartDay = $formValues.find('.addSessionStartDay').val();
	if(addSessionStartDay != null && addSessionStartDay !== '')
		vals['addSessionStartDay'] = addSessionStartDay;
	var removeSessionStartDay = $formValues.find('.removeSessionStartDay').val();
	if(removeSessionStartDay != null && removeSessionStartDay !== '')
		vals['removeSessionStartDay'] = removeSessionStartDay;

	var removeSessionEndDay = $formFilters.find('.removeSessionEndDay').val() === 'true';
	var setSessionEndDay = removeSessionEndDay ? null : $formValues.find('.setSessionEndDay').val();
	if(removeSessionEndDay || setSessionEndDay != null && setSessionEndDay !== '')
		vals['setSessionEndDay'] = setSessionEndDay;
	var addSessionEndDay = $formValues.find('.addSessionEndDay').val();
	if(addSessionEndDay != null && addSessionEndDay !== '')
		vals['addSessionEndDay'] = addSessionEndDay;
	var removeSessionEndDay = $formValues.find('.removeSessionEndDay').val();
	if(removeSessionEndDay != null && removeSessionEndDay !== '')
		vals['removeSessionEndDay'] = removeSessionEndDay;

	var removeAgeKeys = $formFilters.find('.removeAgeKeys').val() === 'true';
	var setAgeKeys = removeAgeKeys ? null : $formValues.find('.setAgeKeys').val();
	if(removeAgeKeys || setAgeKeys != null && setAgeKeys !== '')
		vals['setAgeKeys'] = setAgeKeys;
	var addAgeKeys = $formValues.find('.addAgeKeys').val();
	if(addAgeKeys != null && addAgeKeys !== '')
		vals['addAgeKeys'] = addAgeKeys;
	var removeAgeKeys = $formValues.find('.removeAgeKeys').val();
	if(removeAgeKeys != null && removeAgeKeys !== '')
		vals['removeAgeKeys'] = removeAgeKeys;

	var removeSessionCompleteName = $formFilters.find('.removeSessionCompleteName').val() === 'true';
	var setSessionCompleteName = removeSessionCompleteName ? null : $formValues.find('.setSessionCompleteName').val();
	if(removeSessionCompleteName || setSessionCompleteName != null && setSessionCompleteName !== '')
		vals['setSessionCompleteName'] = setSessionCompleteName;
	var addSessionCompleteName = $formValues.find('.addSessionCompleteName').val();
	if(addSessionCompleteName != null && addSessionCompleteName !== '')
		vals['addSessionCompleteName'] = addSessionCompleteName;
	var removeSessionCompleteName = $formValues.find('.removeSessionCompleteName').val();
	if(removeSessionCompleteName != null && removeSessionCompleteName !== '')
		vals['removeSessionCompleteName'] = removeSessionCompleteName;

	patchSchoolSessionVals(filters, vals, success, error);
}

function patchSchoolSessionFilters($formFilters) {
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

	var filterSessionStartDay = $formFilters.find('.valueSessionStartDay').val();
	if(filterSessionStartDay != null && filterSessionStartDay !== '')
		filters.push({ name: 'fq', value: 'sessionStartDay:' + filterSessionStartDay });

	var filterSessionEndDay = $formFilters.find('.valueSessionEndDay').val();
	if(filterSessionEndDay != null && filterSessionEndDay !== '')
		filters.push({ name: 'fq', value: 'sessionEndDay:' + filterSessionEndDay });

	var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
	if(filterAgeKeys != null && filterAgeKeys !== '')
		filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

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

	var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
	if(filterObjectTitle != null && filterObjectTitle !== '')
		filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterSessionKey = $formFilters.find('.valueSessionKey').val();
	if(filterSessionKey != null && filterSessionKey !== '')
		filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

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

	var filterSessionCompleteName = $formFilters.find('.valueSessionCompleteName').val();
	if(filterSessionCompleteName != null && filterSessionCompleteName !== '')
		filters.push({ name: 'fq', value: 'sessionCompleteName:' + filterSessionCompleteName });
	return filters;
}

function patchSchoolSessionVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolSessionVals(filters, vals, success, error);
}

function patchSchoolSessionVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/session?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getSchoolSession(pk) {
	$.ajax({
		url: '/api/session/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteSchoolSession(pk) {
	$.ajax({
		url: '/api/session/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

function searchSchoolSession($formFilters, success, error) {
	var filters = searchSchoolSessionFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolSessionVals(filters, success, error);
}

function searchSchoolSessionFilters($formFilters) {
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

	var filterSessionStartDay = $formFilters.find('.valueSessionStartDay').val();
	if(filterSessionStartDay != null && filterSessionStartDay !== '')
		filters.push({ name: 'fq', value: 'sessionStartDay:' + filterSessionStartDay });

	var filterSessionEndDay = $formFilters.find('.valueSessionEndDay').val();
	if(filterSessionEndDay != null && filterSessionEndDay !== '')
		filters.push({ name: 'fq', value: 'sessionEndDay:' + filterSessionEndDay });

	var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
	if(filterAgeKeys != null && filterAgeKeys !== '')
		filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

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

	var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
	if(filterObjectTitle != null && filterObjectTitle !== '')
		filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterSessionKey = $formFilters.find('.valueSessionKey').val();
	if(filterSessionKey != null && filterSessionKey !== '')
		filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

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

	var filterSessionCompleteName = $formFilters.find('.valueSessionCompleteName').val();
	if(filterSessionCompleteName != null && filterSessionCompleteName !== '')
		filters.push({ name: 'fq', value: 'sessionCompleteName:' + filterSessionCompleteName });
	return filters;
}

function searchSchoolSessionVals(filters, success, error) {
	$.ajax({
		url: '/api/session?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolSessionObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-graduation-cap w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['sessionCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolSessionVals($formFilters, success, error);
}

function suggestSchoolSessionAgeKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-birthday-cake w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['ageCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolSessionForm :input[name="pk"]').val());
			var val = o['sessionKey'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_ageKeys_' + pk + '_sessionKey_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_ageKeys_" + pk + "_sessionKey_" + o['pk'] + "'); patchSchoolSessionVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'AgeKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolAgeVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
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
	searchSchoolAge($formFilters, success, error);
}

function websocketSchoolSession() {
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {
		eventBus.registerHandler('websocketSchoolSession', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-graduation-cap w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify sessions');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
		});
	}
}


// POST //

function postSchoolSeason($formValues, success, error) {
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

	var valueSeasonId = $formValues.find('.valueSeasonId').val();
	if(valueSeasonId != null && valueSeasonId !== '')
		vals['seasonId'] = valueSeasonId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueSeasonStartDate = $formValues.find('.valueSeasonStartDate').val();
	if(valueSeasonStartDate != null && valueSeasonStartDate !== '')
		vals['seasonStartDate'] = valueSeasonStartDate;

	var valueSeasonSummer = $formValues.find('.valueSeasonSummer').prop('checked');
	if(valueSeasonSummer != null && valueSeasonSummer !== '')
		vals['seasonSummer'] = valueSeasonSummer;

	var valueSeasonWinter = $formValues.find('.valueSeasonWinter').prop('checked');
	if(valueSeasonWinter != null && valueSeasonWinter !== '')
		vals['seasonWinter'] = valueSeasonWinter;

	var valueSeasonEnrollmentFee = $formValues.find('.valueSeasonEnrollmentFee').val();
	if(valueSeasonEnrollmentFee != null && valueSeasonEnrollmentFee !== '')
		vals['seasonEnrollmentFee'] = valueSeasonEnrollmentFee;

	var valueSessionKeys = $formValues.find('.valueSessionKeys').val();
	if(valueSessionKeys != null && valueSessionKeys !== '')
		vals['sessionKeys'] = valueSessionKeys;

	var valueSeasonCompleteName = $formValues.find('.valueSeasonCompleteName').val();
	if(valueSeasonCompleteName != null && valueSeasonCompleteName !== '')
		vals['seasonCompleteName'] = valueSeasonCompleteName;

	$.ajax({
		url: '/api/season'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolSeasonVals(vals, success, error) {
	$.ajax({
		url: '/api/season'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchSchoolSeason($formFilters, $formValues, success, error) {
	var filters = patchSchoolSeasonFilters($formFilters);

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

	var removeSeasonId = $formFilters.find('.removeSeasonId').val() === 'true';
	var setSeasonId = removeSeasonId ? null : $formValues.find('.setSeasonId').val();
	if(removeSeasonId || setSeasonId != null && setSeasonId !== '')
		vals['setSeasonId'] = setSeasonId;
	var addSeasonId = $formValues.find('.addSeasonId').val();
	if(addSeasonId != null && addSeasonId !== '')
		vals['addSeasonId'] = addSeasonId;
	var removeSeasonId = $formValues.find('.removeSeasonId').val();
	if(removeSeasonId != null && removeSeasonId !== '')
		vals['removeSeasonId'] = removeSeasonId;

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

	var removeSeasonStartDate = $formFilters.find('.removeSeasonStartDate').val() === 'true';
	var setSeasonStartDate = removeSeasonStartDate ? null : $formValues.find('.setSeasonStartDate').val();
	if(removeSeasonStartDate || setSeasonStartDate != null && setSeasonStartDate !== '')
		vals['setSeasonStartDate'] = setSeasonStartDate;
	var addSeasonStartDate = $formValues.find('.addSeasonStartDate').val();
	if(addSeasonStartDate != null && addSeasonStartDate !== '')
		vals['addSeasonStartDate'] = addSeasonStartDate;
	var removeSeasonStartDate = $formValues.find('.removeSeasonStartDate').val();
	if(removeSeasonStartDate != null && removeSeasonStartDate !== '')
		vals['removeSeasonStartDate'] = removeSeasonStartDate;

	var removeSeasonSummer = $formFilters.find('.removeSeasonSummer').val() === 'true';
	var setSeasonSummer = removeSeasonSummer ? null : $formValues.find('.setSeasonSummer').prop('checked');
	if(removeSeasonSummer || setSeasonSummer != null && setSeasonSummer !== '')
		vals['setSeasonSummer'] = setSeasonSummer;
	var addSeasonSummer = $formValues.find('.addSeasonSummer').prop('checked');
	if(addSeasonSummer != null && addSeasonSummer !== '')
		vals['addSeasonSummer'] = addSeasonSummer;
	var removeSeasonSummer = $formValues.find('.removeSeasonSummer').prop('checked');
	if(removeSeasonSummer != null && removeSeasonSummer !== '')
		vals['removeSeasonSummer'] = removeSeasonSummer;

	var removeSeasonWinter = $formFilters.find('.removeSeasonWinter').val() === 'true';
	var setSeasonWinter = removeSeasonWinter ? null : $formValues.find('.setSeasonWinter').prop('checked');
	if(removeSeasonWinter || setSeasonWinter != null && setSeasonWinter !== '')
		vals['setSeasonWinter'] = setSeasonWinter;
	var addSeasonWinter = $formValues.find('.addSeasonWinter').prop('checked');
	if(addSeasonWinter != null && addSeasonWinter !== '')
		vals['addSeasonWinter'] = addSeasonWinter;
	var removeSeasonWinter = $formValues.find('.removeSeasonWinter').prop('checked');
	if(removeSeasonWinter != null && removeSeasonWinter !== '')
		vals['removeSeasonWinter'] = removeSeasonWinter;

	var removeSeasonEnrollmentFee = $formFilters.find('.removeSeasonEnrollmentFee').val() === 'true';
	var setSeasonEnrollmentFee = removeSeasonEnrollmentFee ? null : $formValues.find('.setSeasonEnrollmentFee').val();
	if(removeSeasonEnrollmentFee || setSeasonEnrollmentFee != null && setSeasonEnrollmentFee !== '')
		vals['setSeasonEnrollmentFee'] = setSeasonEnrollmentFee;
	var addSeasonEnrollmentFee = $formValues.find('.addSeasonEnrollmentFee').val();
	if(addSeasonEnrollmentFee != null && addSeasonEnrollmentFee !== '')
		vals['addSeasonEnrollmentFee'] = addSeasonEnrollmentFee;
	var removeSeasonEnrollmentFee = $formValues.find('.removeSeasonEnrollmentFee').val();
	if(removeSeasonEnrollmentFee != null && removeSeasonEnrollmentFee !== '')
		vals['removeSeasonEnrollmentFee'] = removeSeasonEnrollmentFee;

	var removeSessionKeys = $formFilters.find('.removeSessionKeys').val() === 'true';
	var setSessionKeys = removeSessionKeys ? null : $formValues.find('.setSessionKeys').val();
	if(removeSessionKeys || setSessionKeys != null && setSessionKeys !== '')
		vals['setSessionKeys'] = setSessionKeys;
	var addSessionKeys = $formValues.find('.addSessionKeys').val();
	if(addSessionKeys != null && addSessionKeys !== '')
		vals['addSessionKeys'] = addSessionKeys;
	var removeSessionKeys = $formValues.find('.removeSessionKeys').val();
	if(removeSessionKeys != null && removeSessionKeys !== '')
		vals['removeSessionKeys'] = removeSessionKeys;

	var removeSeasonCompleteName = $formFilters.find('.removeSeasonCompleteName').val() === 'true';
	var setSeasonCompleteName = removeSeasonCompleteName ? null : $formValues.find('.setSeasonCompleteName').val();
	if(removeSeasonCompleteName || setSeasonCompleteName != null && setSeasonCompleteName !== '')
		vals['setSeasonCompleteName'] = setSeasonCompleteName;
	var addSeasonCompleteName = $formValues.find('.addSeasonCompleteName').val();
	if(addSeasonCompleteName != null && addSeasonCompleteName !== '')
		vals['addSeasonCompleteName'] = addSeasonCompleteName;
	var removeSeasonCompleteName = $formValues.find('.removeSeasonCompleteName').val();
	if(removeSeasonCompleteName != null && removeSeasonCompleteName !== '')
		vals['removeSeasonCompleteName'] = removeSeasonCompleteName;

	patchSchoolSeasonVals(filters, vals, success, error);
}

function patchSchoolSeasonFilters($formFilters) {
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

	var filterSeasonId = $formFilters.find('.valueSeasonId').val();
	if(filterSeasonId != null && filterSeasonId !== '')
		filters.push({ name: 'fq', value: 'seasonId:' + filterSeasonId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

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

	var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
	if(filterSessionKeys != null && filterSessionKeys !== '')
		filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

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

	var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
	if(filterSeasonKey != null && filterSeasonKey !== '')
		filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

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

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

	var filterYearKey = $formFilters.find('.valueYearKey').val();
	if(filterYearKey != null && filterYearKey !== '')
		filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

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

	var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
	if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
		filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
	return filters;
}

function patchSchoolSeasonVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolSeasonVals(filters, vals, success, error);
}

function patchSchoolSeasonVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/season?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getSchoolSeason(pk) {
	$.ajax({
		url: '/api/season/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteSchoolSeason(pk) {
	$.ajax({
		url: '/api/season/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

function searchSchoolSeason($formFilters, success, error) {
	var filters = searchSchoolSeasonFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolSeasonVals(filters, success, error);
}

function searchSchoolSeasonFilters($formFilters) {
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

	var filterSeasonId = $formFilters.find('.valueSeasonId').val();
	if(filterSeasonId != null && filterSeasonId !== '')
		filters.push({ name: 'fq', value: 'seasonId:' + filterSeasonId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

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

	var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
	if(filterSessionKeys != null && filterSessionKeys !== '')
		filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

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

	var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
	if(filterSeasonKey != null && filterSeasonKey !== '')
		filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

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

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

	var filterYearKey = $formFilters.find('.valueYearKey').val();
	if(filterYearKey != null && filterYearKey !== '')
		filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

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

	var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
	if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
		filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
	return filters;
}

function searchSchoolSeasonVals(filters, success, error) {
	$.ajax({
		url: '/api/season?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolSeasonSessionKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-graduation-cap w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['sessionCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolSeasonForm :input[name="pk"]').val());
			var val = o['seasonKey'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_sessionKeys_' + pk + '_seasonKey_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_sessionKeys_" + pk + "_seasonKey_" + o['pk'] + "'); patchSchoolSeasonVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SessionKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolSessionVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
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
	searchSchoolSession($formFilters, success, error);
}

function suggestSchoolSeasonObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['seasonCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolSeasonVals($formFilters, success, error);
}

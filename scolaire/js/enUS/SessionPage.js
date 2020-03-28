
// POST //

async function postSchoolSession($formValues, success, error) {
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

	var valueSessionStartDate = $formValues.find('.valueSessionStartDate').val();
	if(valueSessionStartDate != null && valueSessionStartDate !== '')
		vals['sessionStartDate'] = valueSessionStartDate;

	var valueSessionEndDate = $formValues.find('.valueSessionEndDate').val();
	if(valueSessionEndDate != null && valueSessionEndDate !== '')
		vals['sessionEndDate'] = valueSessionEndDate;

	var valueSeasonKey = $formValues.find('input.valueSeasonKey:checked').val();
	if(valueSeasonKey != null && valueSeasonKey !== '')
		vals['seasonKey'] = valueSeasonKey;

	var valueAgeKeys = $formValues.find('input.valueAgeKeys:checked').val();
	if(valueAgeKeys != null && valueAgeKeys !== '')
		vals['ageKeys'] = valueAgeKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

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

// PUT //

async function putSchoolSession($formValues, pk, success, error) {
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

	var valueSessionStartDate = $formValues.find('.valueSessionStartDate').val();
	if(valueSessionStartDate != null && valueSessionStartDate !== '')
		vals['sessionStartDate'] = valueSessionStartDate;

	var valueSessionEndDate = $formValues.find('.valueSessionEndDate').val();
	if(valueSessionEndDate != null && valueSessionEndDate !== '')
		vals['sessionEndDate'] = valueSessionEndDate;

	var valueSeasonKey = $formValues.find('input.valueSeasonKey:checked').val();
	if(valueSeasonKey != null && valueSeasonKey !== '')
		vals['seasonKey'] = valueSeasonKey;

	var valueAgeKeys = $formValues.find('input.valueAgeKeys:checked').val();
	if(valueAgeKeys != null && valueAgeKeys !== '')
		vals['ageKeys'] = valueAgeKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	putSchoolSessionVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putSchoolSessionVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/session?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolSession($formFilters, $formValues, pk, success, error) {
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
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	setArchived = removeArchived ? null : valueArchived;
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var removeDeleted = $formFilters.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	setDeleted = removeDeleted ? null : valueDeleted;
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var removeSessionStartDate = $formFilters.find('.removeSessionStartDate').val() === 'true';
	var setSessionStartDate = removeSessionStartDate ? null : $formValues.find('.setSessionStartDate').val();
	if(removeSessionStartDate || setSessionStartDate != null && setSessionStartDate !== '')
		vals['setSessionStartDate'] = setSessionStartDate;
	var addSessionStartDate = $formValues.find('.addSessionStartDate').val();
	if(addSessionStartDate != null && addSessionStartDate !== '')
		vals['addSessionStartDate'] = addSessionStartDate;
	var removeSessionStartDate = $formValues.find('.removeSessionStartDate').val();
	if(removeSessionStartDate != null && removeSessionStartDate !== '')
		vals['removeSessionStartDate'] = removeSessionStartDate;

	var removeSessionEndDate = $formFilters.find('.removeSessionEndDate').val() === 'true';
	var setSessionEndDate = removeSessionEndDate ? null : $formValues.find('.setSessionEndDate').val();
	if(removeSessionEndDate || setSessionEndDate != null && setSessionEndDate !== '')
		vals['setSessionEndDate'] = setSessionEndDate;
	var addSessionEndDate = $formValues.find('.addSessionEndDate').val();
	if(addSessionEndDate != null && addSessionEndDate !== '')
		vals['addSessionEndDate'] = addSessionEndDate;
	var removeSessionEndDate = $formValues.find('.removeSessionEndDate').val();
	if(removeSessionEndDate != null && removeSessionEndDate !== '')
		vals['removeSessionEndDate'] = removeSessionEndDate;

	var removeSeasonKey = $formFilters.find('.removeSeasonKey').val() === 'true';
	var setSeasonKey = removeSeasonKey ? null : $formValues.find('.setSeasonKey').val();
	if(removeSeasonKey || setSeasonKey != null && setSeasonKey !== '')
		vals['setSeasonKey'] = setSeasonKey;
	var addSeasonKey = $formValues.find('.addSeasonKey').val();
	if(addSeasonKey != null && addSeasonKey !== '')
		vals['addSeasonKey'] = addSeasonKey;
	var removeSeasonKey = $formValues.find('.removeSeasonKey').val();
	if(removeSeasonKey != null && removeSeasonKey !== '')
		vals['removeSeasonKey'] = removeSeasonKey;

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

	patchSchoolSessionVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
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

	var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
	if(filterSessionStartDate != null && filterSessionStartDate !== '')
		filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

	var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
	if(filterSessionEndDate != null && filterSessionEndDate !== '')
		filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

	var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
	if(filterSeasonKey != null && filterSeasonKey !== '')
		filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

	var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
	if(filterAgeKeys != null && filterAgeKeys !== '')
		filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

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

	var filterObjectText = $formFilters.find('.valueObjectText').val();
	if(filterObjectText != null && filterObjectText !== '')
		filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

	var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
	if(filterPageUrlId != null && filterPageUrlId !== '')
		filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

	var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
	if(filterPageUrlPk != null && filterPageUrlPk !== '')
		filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

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

	var $filterSeasonSummerCheckbox = $formFilters.find('input.valueSeasonSummer[type = "checkbox"]');
	var $filterSeasonSummerSelect = $formFilters.find('select.valueSeasonSummer');
	var filterSeasonSummer = $filterSeasonSummerSelect.length ? $filterSeasonSummerSelect.val() : $filterSeasonSummerCheckbox.prop('checked');
	var filterSeasonSummerSelectVal = $formFilters.find('select.filterSeasonSummer').val();
	var filterSeasonSummer = null;
	if(filterSeasonSummerSelectVal !== '')
		filterSeasonSummer = filterSeasonSummerSelectVal == 'true';
	if(filterSeasonSummer != null && filterSeasonSummer === true)
		filters.push({ name: 'fq', value: 'seasonSummer:' + filterSeasonSummer });

	var $filterSeasonWinterCheckbox = $formFilters.find('input.valueSeasonWinter[type = "checkbox"]');
	var $filterSeasonWinterSelect = $formFilters.find('select.valueSeasonWinter');
	var filterSeasonWinter = $filterSeasonWinterSelect.length ? $filterSeasonWinterSelect.val() : $filterSeasonWinterCheckbox.prop('checked');
	var filterSeasonWinterSelectVal = $formFilters.find('select.filterSeasonWinter').val();
	var filterSeasonWinter = null;
	if(filterSeasonWinterSelectVal !== '')
		filterSeasonWinter = filterSeasonWinterSelectVal == 'true';
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

	var filterSessionShortName = $formFilters.find('.valueSessionShortName').val();
	if(filterSessionShortName != null && filterSessionShortName !== '')
		filters.push({ name: 'fq', value: 'sessionShortName:' + filterSessionShortName });

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

async function getSchoolSession(pk) {
	$.ajax({
		url: '/api/session/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolSession($formFilters, success, error) {
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

	var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
	if(filterSessionStartDate != null && filterSessionStartDate !== '')
		filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

	var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
	if(filterSessionEndDate != null && filterSessionEndDate !== '')
		filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

	var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
	if(filterSeasonKey != null && filterSeasonKey !== '')
		filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

	var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
	if(filterAgeKeys != null && filterAgeKeys !== '')
		filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

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

	var filterObjectText = $formFilters.find('.valueObjectText').val();
	if(filterObjectText != null && filterObjectText !== '')
		filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

	var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
	if(filterPageUrlId != null && filterPageUrlId !== '')
		filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

	var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
	if(filterPageUrlPk != null && filterPageUrlPk !== '')
		filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

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

	var $filterSeasonSummerCheckbox = $formFilters.find('input.valueSeasonSummer[type = "checkbox"]');
	var $filterSeasonSummerSelect = $formFilters.find('select.valueSeasonSummer');
	var filterSeasonSummer = $filterSeasonSummerSelect.length ? $filterSeasonSummerSelect.val() : $filterSeasonSummerCheckbox.prop('checked');
	var filterSeasonSummerSelectVal = $formFilters.find('select.filterSeasonSummer').val();
	var filterSeasonSummer = null;
	if(filterSeasonSummerSelectVal !== '')
		filterSeasonSummer = filterSeasonSummerSelectVal == 'true';
	if(filterSeasonSummer != null && filterSeasonSummer === true)
		filters.push({ name: 'fq', value: 'seasonSummer:' + filterSeasonSummer });

	var $filterSeasonWinterCheckbox = $formFilters.find('input.valueSeasonWinter[type = "checkbox"]');
	var $filterSeasonWinterSelect = $formFilters.find('select.valueSeasonWinter');
	var filterSeasonWinter = $filterSeasonWinterSelect.length ? $filterSeasonWinterSelect.val() : $filterSeasonWinterCheckbox.prop('checked');
	var filterSeasonWinterSelectVal = $formFilters.find('select.filterSeasonWinter').val();
	var filterSeasonWinter = null;
	if(filterSeasonWinterSelectVal !== '')
		filterSeasonWinter = filterSeasonWinterSelectVal == 'true';
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

	var filterSessionShortName = $formFilters.find('.valueSessionShortName').val();
	if(filterSessionShortName != null && filterSessionShortName !== '')
		filters.push({ name: 'fq', value: 'sessionShortName:' + filterSessionShortName });

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
			var $i = $('<i>').attr('class', 'fad fa-graduation-cap ');
			var $span = $('<span>').attr('class', '').text(o['sessionCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolSessionVals($formFilters, success, error);
}

function suggestSchoolSessionAgeKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-birthday-cake ');
			var $span = $('<span>').attr('class', '').text(o['ageCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['sessionKey'];
			var checked = Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_ageKeys_' + pk + '_sessionKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueAgeKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_ageKeys_" + pk + "_sessionKey_" + o['pk'] + "'); patchSchoolSessionVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'AgeKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolSessionForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolAgeVals(filters, success, error);
}

function suggestSchoolSessionSeasonKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun ');
			var $span = $('<span>').attr('class', '').text(o['seasonCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['sessionKeys'];
			var checked = Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_seasonKey_' + pk + '_sessionKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSeasonKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_seasonKey_" + pk + "_sessionKeys_" + o['pk'] + "'); patchSchoolSessionVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SeasonKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolSessionForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolSeasonVals(filters, success, error);
}

async function websocketSchoolSession(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolSession', function (error, message) {
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
				if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketSchoolAge', function (error, message) {
			$('#Page_ageKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolSeason', function (error, message) {
			$('#Page_seasonKey').trigger('oninput');
		});
	}
}
async function websocketSchoolSessionInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolSessionVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputSchoolSession' + pk + 'Created').val(o['created']);
				$('.varSchoolSession' + pk + 'Created').text(o['created']);
			}
			if(vars.includes('modified')) {
				$('.inputSchoolSession' + pk + 'Modified').val(o['modified']);
				$('.varSchoolSession' + pk + 'Modified').text(o['modified']);
			}
			if(vars.includes('archived')) {
				$('.inputSchoolSession' + pk + 'Archived').val(o['archived']);
				$('.varSchoolSession' + pk + 'Archived').text(o['archived']);
			}
			if(vars.includes('deleted')) {
				$('.inputSchoolSession' + pk + 'Deleted').val(o['deleted']);
				$('.varSchoolSession' + pk + 'Deleted').text(o['deleted']);
			}
			if(vars.includes('sessionStartDate')) {
				$('.inputSchoolSession' + pk + 'SessionStartDate').val(o['sessionStartDate']);
				$('.varSchoolSession' + pk + 'SessionStartDate').text(o['sessionStartDate']);
			}
			if(vars.includes('sessionEndDate')) {
				$('.inputSchoolSession' + pk + 'SessionEndDate').val(o['sessionEndDate']);
				$('.varSchoolSession' + pk + 'SessionEndDate').text(o['sessionEndDate']);
			}
			if(vars.includes('seasonKey')) {
				$('.inputSchoolSession' + pk + 'SeasonKey').val(o['seasonKey']);
				$('.varSchoolSession' + pk + 'SeasonKey').text(o['seasonKey']);
			}
			if(vars.includes('ageKeys')) {
				$('.inputSchoolSession' + pk + 'AgeKeys').val(o['ageKeys']);
				$('.varSchoolSession' + pk + 'AgeKeys').text(o['ageKeys']);
			}
			if(vars.includes('schoolAddress')) {
				$('.inputSchoolSession' + pk + 'SchoolAddress').val(o['schoolAddress']);
				$('.varSchoolSession' + pk + 'SchoolAddress').text(o['schoolAddress']);
			}
		});
	}
}

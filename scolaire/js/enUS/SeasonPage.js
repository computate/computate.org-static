
// POST //

async function postSchoolSeason($formValues, success, error) {
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

	var valueSeasonStartDate = $formValues.find('.valueSeasonStartDate').val();
	if(valueSeasonStartDate != null && valueSeasonStartDate !== '')
		vals['seasonStartDate'] = valueSeasonStartDate;

	var valueSeasonSummer = $formValues.find('.valueSeasonSummer').prop('checked');
	if(valueSeasonSummer != null && valueSeasonSummer !== '')
		vals['seasonSummer'] = valueSeasonSummer;

	var valueSeasonWinter = $formValues.find('.valueSeasonWinter').prop('checked');
	if(valueSeasonWinter != null && valueSeasonWinter !== '')
		vals['seasonWinter'] = valueSeasonWinter;

	var valueSeasonFuture = $formValues.find('.valueSeasonFuture').prop('checked');
	if(valueSeasonFuture != null && valueSeasonFuture !== '')
		vals['seasonFuture'] = valueSeasonFuture;

	var valueSessionKeys = $formValues.find('input.valueSessionKeys:checked').val();
	if(valueSessionKeys != null && valueSessionKeys !== '')
		vals['sessionKeys'] = valueSessionKeys;

	var valueYearKey = $formValues.find('input.valueYearKey:checked').val();
	if(valueYearKey != null && valueYearKey !== '')
		vals['yearKey'] = valueYearKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

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

async function patchSchoolSeason($formFilters, $formValues, success, error) {
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

	var removeSeasonFuture = $formFilters.find('.removeSeasonFuture').val() === 'true';
	var setSeasonFuture = removeSeasonFuture ? null : $formValues.find('.setSeasonFuture').prop('checked');
	if(removeSeasonFuture || setSeasonFuture != null && setSeasonFuture !== '')
		vals['setSeasonFuture'] = setSeasonFuture;
	var addSeasonFuture = $formValues.find('.addSeasonFuture').prop('checked');
	if(addSeasonFuture != null && addSeasonFuture !== '')
		vals['addSeasonFuture'] = addSeasonFuture;
	var removeSeasonFuture = $formValues.find('.removeSeasonFuture').prop('checked');
	if(removeSeasonFuture != null && removeSeasonFuture !== '')
		vals['removeSeasonFuture'] = removeSeasonFuture;

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

	var removeYearKey = $formFilters.find('.removeYearKey').val() === 'true';
	var setYearKey = removeYearKey ? null : $formValues.find('.setYearKey').val();
	if(removeYearKey || setYearKey != null && setYearKey !== '')
		vals['setYearKey'] = setYearKey;
	var addYearKey = $formValues.find('.addYearKey').val();
	if(addYearKey != null && addYearKey !== '')
		vals['addYearKey'] = addYearKey;
	var removeYearKey = $formValues.find('.removeYearKey').val();
	if(removeYearKey != null && removeYearKey !== '')
		vals['removeYearKey'] = removeYearKey;

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

	var filterObjectId = $formFilters.find('.valueObjectId').val();
	if(filterObjectId != null && filterObjectId !== '')
		filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

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

	var filterSeasonFuture = $formFilters.find('.valueSeasonFuture').prop('checked');
	if(filterSeasonFuture != null && filterSeasonFuture === true)
		filters.push({ name: 'fq', value: 'seasonFuture:' + filterSeasonFuture });

	var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
	if(filterSessionKeys != null && filterSessionKeys !== '')
		filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

	var filterYearKey = $formFilters.find('.valueYearKey').val();
	if(filterYearKey != null && filterYearKey !== '')
		filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

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

	var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
	if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
		filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

	var filterSeasonShortName = $formFilters.find('.valueSeasonShortName').val();
	if(filterSeasonShortName != null && filterSeasonShortName !== '')
		filters.push({ name: 'fq', value: 'seasonShortName:' + filterSeasonShortName });

	var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
	if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
		filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });
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

async function getSchoolSeason(pk) {
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

async function deleteSchoolSeason(pk) {
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

async function searchSchoolSeason($formFilters, success, error) {
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

	var filterObjectId = $formFilters.find('.valueObjectId').val();
	if(filterObjectId != null && filterObjectId !== '')
		filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

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

	var filterSeasonFuture = $formFilters.find('.valueSeasonFuture').prop('checked');
	if(filterSeasonFuture != null && filterSeasonFuture === true)
		filters.push({ name: 'fq', value: 'seasonFuture:' + filterSeasonFuture });

	var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
	if(filterSessionKeys != null && filterSessionKeys !== '')
		filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

	var filterYearKey = $formFilters.find('.valueYearKey').val();
	if(filterYearKey != null && filterYearKey !== '')
		filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

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

	var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
	if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
		filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

	var filterSeasonShortName = $formFilters.find('.valueSeasonShortName').val();
	if(filterSeasonShortName != null && filterSeasonShortName !== '')
		filters.push({ name: 'fq', value: 'seasonShortName:' + filterSeasonShortName });

	var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
	if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
		filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });
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

function suggestSchoolSeasonObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['seasonCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolSeasonVals($formFilters, success, error);
}

function suggestSchoolSeasonSessionKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-graduation-cap w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['sessionCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['seasonKey'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_sessionKeys_' + pk + '_seasonKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSessionKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_sessionKeys_" + pk + "_seasonKey_" + o['pk'] + "'); patchSchoolSeasonVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SessionKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolSeasonForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolSessionVals(filters, success, error);
}

function suggestSchoolSeasonYearKey(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['yearCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['seasonKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_yearKey_' + pk + '_seasonKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueYearKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_yearKey_" + pk + "_seasonKeys_" + o['pk'] + "'); patchSchoolSeasonVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'YearKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolSeasonForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolYearVals(filters, success, error);
}

async function websocketSchoolSeason(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolSeason', function (error, message) {
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
				var $i = $('<i>').attr('class', 'far fa-sun w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modify school seasons');
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

		window.eventBus.registerHandler('websocketSchoolSession', function (error, message) {
			$('#Page_sessionKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolYear', function (error, message) {
			$('#Page_yearKey').trigger('oninput');
		});
	}
}
async function websocketSchoolSeasonInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolSeasonVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputSchoolSeason' + pk + 'Created').val(o['created']);
				$('.varSchoolSeason' + pk + 'Created').text(o['created']);
			}
			if(vars.includes('modified')) {
				$('.inputSchoolSeason' + pk + 'Modified').val(o['modified']);
				$('.varSchoolSeason' + pk + 'Modified').text(o['modified']);
			}
			if(vars.includes('archived')) {
				$('.inputSchoolSeason' + pk + 'Archived').val(o['archived']);
				$('.varSchoolSeason' + pk + 'Archived').text(o['archived']);
			}
			if(vars.includes('deleted')) {
				$('.inputSchoolSeason' + pk + 'Deleted').val(o['deleted']);
				$('.varSchoolSeason' + pk + 'Deleted').text(o['deleted']);
			}
			if(vars.includes('seasonStartDate')) {
				$('.inputSchoolSeason' + pk + 'SeasonStartDate').val(o['seasonStartDate']);
				$('.varSchoolSeason' + pk + 'SeasonStartDate').text(o['seasonStartDate']);
			}
			if(vars.includes('seasonSummer')) {
				$('.inputSchoolSeason' + pk + 'SeasonSummer').val(o['seasonSummer']);
				$('.varSchoolSeason' + pk + 'SeasonSummer').text(o['seasonSummer']);
			}
			if(vars.includes('seasonWinter')) {
				$('.inputSchoolSeason' + pk + 'SeasonWinter').val(o['seasonWinter']);
				$('.varSchoolSeason' + pk + 'SeasonWinter').text(o['seasonWinter']);
			}
			if(vars.includes('seasonFuture')) {
				$('.inputSchoolSeason' + pk + 'SeasonFuture').val(o['seasonFuture']);
				$('.varSchoolSeason' + pk + 'SeasonFuture').text(o['seasonFuture']);
			}
			if(vars.includes('sessionKeys')) {
				$('.inputSchoolSeason' + pk + 'SessionKeys').val(o['sessionKeys']);
				$('.varSchoolSeason' + pk + 'SessionKeys').text(o['sessionKeys']);
			}
			if(vars.includes('yearKey')) {
				$('.inputSchoolSeason' + pk + 'YearKey').val(o['yearKey']);
				$('.varSchoolSeason' + pk + 'YearKey').text(o['yearKey']);
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
			await patchSchoolSeasonVals( [ {name: 'fq', value: 'pk:' + pk} ], {});
	}
}

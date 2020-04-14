
// POST //

async function postSchoolYear($formValues, success, error) {
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

	var valueYearStart = $formValues.find('.valueYearStart').val();
	if(valueYearStart != null && valueYearStart !== '')
		vals['yearStart'] = valueYearStart;

	var valueYearEnd = $formValues.find('.valueYearEnd').val();
	if(valueYearEnd != null && valueYearEnd !== '')
		vals['yearEnd'] = valueYearEnd;

	var valueYearEnrollmentFee = $formValues.find('.valueYearEnrollmentFee').val();
	if(valueYearEnrollmentFee != null && valueYearEnrollmentFee !== '')
		vals['yearEnrollmentFee'] = valueYearEnrollmentFee;

	var valueSchoolKey = $formValues.find('input.valueSchoolKey:checked').val();
	if(valueSchoolKey != null && valueSchoolKey !== '')
		vals['schoolKey'] = valueSchoolKey;

	var valueSeasonKeys = $formValues.find('input.valueSeasonKeys:checked').val();
	if(valueSeasonKeys != null && valueSeasonKeys !== '')
		vals['seasonKeys'] = valueSeasonKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/year'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolYearVals(vals, success, error) {
	$.ajax({
		url: '/api/year'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSchoolYear($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolYearVals(JSON.parse(json), success, error);
}

function putimportSchoolYearVals(json, success, error) {
	$.ajax({
		url: '/api/year/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolYear($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolYearVals(JSON.parse(json), success, error);
}

function putmergeSchoolYearVals(json, success, error) {
	$.ajax({
		url: '/api/year/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolYear($formValues, pk, success, error) {
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

	var valueYearStart = $formValues.find('.valueYearStart').val();
	if(valueYearStart != null && valueYearStart !== '')
		vals['yearStart'] = valueYearStart;

	var valueYearEnd = $formValues.find('.valueYearEnd').val();
	if(valueYearEnd != null && valueYearEnd !== '')
		vals['yearEnd'] = valueYearEnd;

	var valueYearEnrollmentFee = $formValues.find('.valueYearEnrollmentFee').val();
	if(valueYearEnrollmentFee != null && valueYearEnrollmentFee !== '')
		vals['yearEnrollmentFee'] = valueYearEnrollmentFee;

	var valueSchoolKey = $formValues.find('input.valueSchoolKey:checked').val();
	if(valueSchoolKey != null && valueSchoolKey !== '')
		vals['schoolKey'] = valueSchoolKey;

	var valueSeasonKeys = $formValues.find('input.valueSeasonKeys:checked').val();
	if(valueSeasonKeys != null && valueSeasonKeys !== '')
		vals['seasonKeys'] = [valueSeasonKeys];

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putcopySchoolYearVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolYearVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/year/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolYear($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolYearFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
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

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
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

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
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

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
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

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
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

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
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

	var valueYearStart = $formValues.find('.valueYearStart').val();
	if(valueYearStart != null && valueYearStart !== '')
	var removeYearStart = $formFilters.find('.removeYearStart').val() === 'true';
	var setYearStart = removeYearStart ? null : $formValues.find('.setYearStart').val();
	if(removeYearStart || setYearStart != null && setYearStart !== '')
		vals['setYearStart'] = setYearStart;
	var addYearStart = $formValues.find('.addYearStart').val();
	if(addYearStart != null && addYearStart !== '')
		vals['addYearStart'] = addYearStart;
	var removeYearStart = $formValues.find('.removeYearStart').val();
	if(removeYearStart != null && removeYearStart !== '')
		vals['removeYearStart'] = removeYearStart;

	var valueYearEnd = $formValues.find('.valueYearEnd').val();
	if(valueYearEnd != null && valueYearEnd !== '')
	var removeYearEnd = $formFilters.find('.removeYearEnd').val() === 'true';
	var setYearEnd = removeYearEnd ? null : $formValues.find('.setYearEnd').val();
	if(removeYearEnd || setYearEnd != null && setYearEnd !== '')
		vals['setYearEnd'] = setYearEnd;
	var addYearEnd = $formValues.find('.addYearEnd').val();
	if(addYearEnd != null && addYearEnd !== '')
		vals['addYearEnd'] = addYearEnd;
	var removeYearEnd = $formValues.find('.removeYearEnd').val();
	if(removeYearEnd != null && removeYearEnd !== '')
		vals['removeYearEnd'] = removeYearEnd;

	var valueYearEnrollmentFee = $formValues.find('.valueYearEnrollmentFee').val();
	if(valueYearEnrollmentFee != null && valueYearEnrollmentFee !== '')
	var removeYearEnrollmentFee = $formFilters.find('.removeYearEnrollmentFee').val() === 'true';
	var setYearEnrollmentFee = removeYearEnrollmentFee ? null : $formValues.find('.setYearEnrollmentFee').val();
	if(removeYearEnrollmentFee || setYearEnrollmentFee != null && setYearEnrollmentFee !== '')
		vals['setYearEnrollmentFee'] = setYearEnrollmentFee;
	var addYearEnrollmentFee = $formValues.find('.addYearEnrollmentFee').val();
	if(addYearEnrollmentFee != null && addYearEnrollmentFee !== '')
		vals['addYearEnrollmentFee'] = addYearEnrollmentFee;
	var removeYearEnrollmentFee = $formValues.find('.removeYearEnrollmentFee').val();
	if(removeYearEnrollmentFee != null && removeYearEnrollmentFee !== '')
		vals['removeYearEnrollmentFee'] = removeYearEnrollmentFee;

	var valueSchoolKey = $formValues.find('input.valueSchoolKey:checked').val();
	if(valueSchoolKey != null && valueSchoolKey !== '')
		vals['setSchoolKey'] = valueSchoolKey;

	var valueSeasonKeys = $formValues.find('input.valueSeasonKeys:checked').val();
	if(valueSeasonKeys != null && valueSeasonKeys !== '')
		vals['addSeasonKeys'] = valueSeasonKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
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

	patchSchoolYearVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolYearFilters($formFilters) {
	var filters = [];
	if($formFilters) {

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

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
		if(filterSeasonKeys != null && filterSeasonKeys !== '')
			filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

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

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

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

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterYearShortName = $formFilters.find('.valueYearShortName').val();
		if(filterYearShortName != null && filterYearShortName !== '')
			filters.push({ name: 'fq', value: 'yearShortName:' + filterYearShortName });

		var filterYearCompleteName = $formFilters.find('.valueYearCompleteName').val();
		if(filterYearCompleteName != null && filterYearCompleteName !== '')
			filters.push({ name: 'fq', value: 'yearCompleteName:' + filterYearCompleteName });
	}
	return filters;
}

function patchSchoolYearVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolYearVals(filters, vals, success, error);
}

function patchSchoolYearVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/year?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolYear(pk) {
	$.ajax({
		url: '/api/year/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolYear($formFilters, success, error) {
	var filters = searchSchoolYearFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolYearVals(filters, success, error);
}

function searchSchoolYearFilters($formFilters) {
	var filters = [];
	if($formFilters) {

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

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
		if(filterSeasonKeys != null && filterSeasonKeys !== '')
			filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

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

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

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

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterYearShortName = $formFilters.find('.valueYearShortName').val();
		if(filterYearShortName != null && filterYearShortName !== '')
			filters.push({ name: 'fq', value: 'yearShortName:' + filterYearShortName });

		var filterYearCompleteName = $formFilters.find('.valueYearCompleteName').val();
		if(filterYearCompleteName != null && filterYearCompleteName !== '')
			filters.push({ name: 'fq', value: 'yearCompleteName:' + filterYearCompleteName });
	}
	return filters;
}

function searchSchoolYearVals(filters, success, error) {
	$.ajax({
		url: '/api/year?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolYearObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['yearCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolYearVals($formFilters, success, error);
}

function suggestSchoolYearSchoolKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-school ');
			var $span = $('<span>').attr('class', '').text(o['schoolCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['yearKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_schoolKey_' + pk + '_yearKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSchoolKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_schoolKey_" + pk + "_yearKeys_" + o['pk'] + "'); patchSchoolYearVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SchoolKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolYearForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolVals(filters, success, error);
}

function suggestSchoolYearSeasonKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun ');
			var $span = $('<span>').attr('class', '').text(o['seasonCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['yearKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_seasonKeys_' + pk + '_yearKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSeasonKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_seasonKeys_" + pk + "_yearKey_" + o['pk'] + "'); patchSchoolYearVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SeasonKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolYearForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolSeasonVals(filters, success, error);
}

async function websocketSchoolYear(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolYear', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-orange ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'far fa-calendar-check w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modify years');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-orange ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketSchool', function (error, message) {
			$('#Page_schoolKey').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolSeason', function (error, message) {
			$('#Page_seasonKeys').trigger('oninput');
		});
	}
}
async function websocketSchoolYearInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolYearVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputSchoolYear' + pk + 'Created').val(o['created']);
				$('.varSchoolYear' + pk + 'Created').text(o['created']);
			}
			if(vars.includes('modified')) {
				$('.inputSchoolYear' + pk + 'Modified').val(o['modified']);
				$('.varSchoolYear' + pk + 'Modified').text(o['modified']);
			}
			if(vars.includes('archived')) {
				$('.inputSchoolYear' + pk + 'Archived').val(o['archived']);
				$('.varSchoolYear' + pk + 'Archived').text(o['archived']);
			}
			if(vars.includes('deleted')) {
				$('.inputSchoolYear' + pk + 'Deleted').val(o['deleted']);
				$('.varSchoolYear' + pk + 'Deleted').text(o['deleted']);
			}
			if(vars.includes('yearStart')) {
				$('.inputSchoolYear' + pk + 'YearStart').val(o['yearStart']);
				$('.varSchoolYear' + pk + 'YearStart').text(o['yearStart']);
			}
			if(vars.includes('yearEnd')) {
				$('.inputSchoolYear' + pk + 'YearEnd').val(o['yearEnd']);
				$('.varSchoolYear' + pk + 'YearEnd').text(o['yearEnd']);
			}
			if(vars.includes('yearEnrollmentFee')) {
				$('.inputSchoolYear' + pk + 'YearEnrollmentFee').val(o['yearEnrollmentFee']);
				$('.varSchoolYear' + pk + 'YearEnrollmentFee').text(o['yearEnrollmentFee']);
			}
			if(vars.includes('schoolKey')) {
				$('.inputSchoolYear' + pk + 'SchoolKey').val(o['schoolKey']);
				$('.varSchoolYear' + pk + 'SchoolKey').text(o['schoolKey']);
			}
			if(vars.includes('seasonKeys')) {
				$('.inputSchoolYear' + pk + 'SeasonKeys').val(o['seasonKeys']);
				$('.varSchoolYear' + pk + 'SeasonKeys').text(o['seasonKeys']);
			}
		});
	}
}


// POST //

async function postSchool($formValues, success, error) {
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

	var valueSchoolName = $formValues.find('.valueSchoolName').val();
	if(valueSchoolName != null && valueSchoolName !== '')
		vals['schoolName'] = valueSchoolName;

	var valueSchoolAdministratorName = $formValues.find('.valueSchoolAdministratorName').val();
	if(valueSchoolAdministratorName != null && valueSchoolAdministratorName !== '')
		vals['schoolAdministratorName'] = valueSchoolAdministratorName;

	var valueSchoolEmail = $formValues.find('.valueSchoolEmail').val();
	if(valueSchoolEmail != null && valueSchoolEmail !== '')
		vals['schoolEmail'] = valueSchoolEmail;

	var valueSchoolLocation = $formValues.find('.valueSchoolLocation').val();
	if(valueSchoolLocation != null && valueSchoolLocation !== '')
		vals['schoolLocation'] = valueSchoolLocation;

	var valueSchoolPhoneNumber = $formValues.find('.valueSchoolPhoneNumber').val();
	if(valueSchoolPhoneNumber != null && valueSchoolPhoneNumber !== '')
		vals['schoolPhoneNumber'] = valueSchoolPhoneNumber;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueYearKeys = $formValues.find('input.valueYearKeys:checked').val();
	if(valueYearKeys != null && valueYearKeys !== '')
		vals['yearKeys'] = valueYearKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

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

async function patchSchool($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolFilters($formFilters);

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

	var valueSchoolName = $formValues.find('.valueSchoolName').val();
	if(valueSchoolName != null && valueSchoolName !== '')
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

	var valueSchoolAdministratorName = $formValues.find('.valueSchoolAdministratorName').val();
	if(valueSchoolAdministratorName != null && valueSchoolAdministratorName !== '')
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

	var valueSchoolEmail = $formValues.find('.valueSchoolEmail').val();
	if(valueSchoolEmail != null && valueSchoolEmail !== '')
	var removeSchoolEmail = $formFilters.find('.removeSchoolEmail').val() === 'true';
	var setSchoolEmail = removeSchoolEmail ? null : $formValues.find('.setSchoolEmail').val();
	if(removeSchoolEmail || setSchoolEmail != null && setSchoolEmail !== '')
		vals['setSchoolEmail'] = setSchoolEmail;
	var addSchoolEmail = $formValues.find('.addSchoolEmail').val();
	if(addSchoolEmail != null && addSchoolEmail !== '')
		vals['addSchoolEmail'] = addSchoolEmail;
	var removeSchoolEmail = $formValues.find('.removeSchoolEmail').val();
	if(removeSchoolEmail != null && removeSchoolEmail !== '')
		vals['removeSchoolEmail'] = removeSchoolEmail;

	var valueSchoolLocation = $formValues.find('.valueSchoolLocation').val();
	if(valueSchoolLocation != null && valueSchoolLocation !== '')
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

	var valueSchoolPhoneNumber = $formValues.find('.valueSchoolPhoneNumber').val();
	if(valueSchoolPhoneNumber != null && valueSchoolPhoneNumber !== '')
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

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
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

	var valueYearKeys = $formValues.find('input.valueYearKeys:checked').val();
	if(valueYearKeys != null && valueYearKeys !== '')
		vals['addYearKeys'] = valueYearKeys;

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

	patchSchoolVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolFilters($formFilters) {
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

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterSchoolEmail = $formFilters.find('.valueSchoolEmail').val();
		if(filterSchoolEmail != null && filterSchoolEmail !== '')
			filters.push({ name: 'fq', value: 'schoolEmail:' + filterSchoolEmail });

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
	}
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

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterSchoolEmail = $formFilters.find('.valueSchoolEmail').val();
		if(filterSchoolEmail != null && filterSchoolEmail !== '')
			filters.push({ name: 'fq', value: 'schoolEmail:' + filterSchoolEmail });

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
	}
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
			var $i = $('<i>').attr('class', 'far fa-school ');
			var $span = $('<span>').attr('class', '').text(o['schoolCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolVals($formFilters, success, error);
}

function suggestSchoolYearKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['yearCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['schoolKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_yearKeys_' + pk + '_schoolKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueYearKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_yearKeys_" + pk + "_schoolKey_" + o['pk'] + "'); patchSchoolVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'YearKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolYearVals(filters, success, error);
}

// PUTImport //

async function putimportSchool($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolVals(JSON.parse(json), success, error);
}

function putimportSchoolVals(json, success, error) {
	$.ajax({
		url: '/api/school/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchool($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolVals(JSON.parse(json), success, error);
}

function putmergeSchoolVals(json, success, error) {
	$.ajax({
		url: '/api/school/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchool($formValues, pk, success, error) {
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

	var valueSchoolName = $formValues.find('.valueSchoolName').val();
	if(valueSchoolName != null && valueSchoolName !== '')
		vals['schoolName'] = valueSchoolName;

	var valueSchoolAdministratorName = $formValues.find('.valueSchoolAdministratorName').val();
	if(valueSchoolAdministratorName != null && valueSchoolAdministratorName !== '')
		vals['schoolAdministratorName'] = valueSchoolAdministratorName;

	var valueSchoolEmail = $formValues.find('.valueSchoolEmail').val();
	if(valueSchoolEmail != null && valueSchoolEmail !== '')
		vals['schoolEmail'] = valueSchoolEmail;

	var valueSchoolLocation = $formValues.find('.valueSchoolLocation').val();
	if(valueSchoolLocation != null && valueSchoolLocation !== '')
		vals['schoolLocation'] = valueSchoolLocation;

	var valueSchoolPhoneNumber = $formValues.find('.valueSchoolPhoneNumber').val();
	if(valueSchoolPhoneNumber != null && valueSchoolPhoneNumber !== '')
		vals['schoolPhoneNumber'] = valueSchoolPhoneNumber;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueYearKeys = $formValues.find('input.valueYearKeys:checked').val();
	if(valueYearKeys != null && valueYearKeys !== '')
		vals['yearKeys'] = [valueYearKeys];

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putcopySchoolVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/school/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

async function websocketSchool(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchool', function (error, message) {
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
		});

		window.eventBus.registerHandler('websocketSchoolYear', function (error, message) {
			$('#Page_yearKeys').trigger('oninput');
		});
	}
}
async function websocketSchoolInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputSchool' + pk + 'Created').val(o['created']);
				$('.varSchool' + pk + 'Created').text(o['created']);
			}
			if(vars.includes('modified')) {
				$('.inputSchool' + pk + 'Modified').val(o['modified']);
				$('.varSchool' + pk + 'Modified').text(o['modified']);
			}
			if(vars.includes('archived')) {
				$('.inputSchool' + pk + 'Archived').val(o['archived']);
				$('.varSchool' + pk + 'Archived').text(o['archived']);
			}
			if(vars.includes('deleted')) {
				$('.inputSchool' + pk + 'Deleted').val(o['deleted']);
				$('.varSchool' + pk + 'Deleted').text(o['deleted']);
			}
			if(vars.includes('schoolName')) {
				$('.inputSchool' + pk + 'SchoolName').val(o['schoolName']);
				$('.varSchool' + pk + 'SchoolName').text(o['schoolName']);
			}
			if(vars.includes('schoolAdministratorName')) {
				$('.inputSchool' + pk + 'SchoolAdministratorName').val(o['schoolAdministratorName']);
				$('.varSchool' + pk + 'SchoolAdministratorName').text(o['schoolAdministratorName']);
			}
			if(vars.includes('schoolEmail')) {
				$('.inputSchool' + pk + 'SchoolEmail').val(o['schoolEmail']);
				$('.varSchool' + pk + 'SchoolEmail').text(o['schoolEmail']);
			}
			if(vars.includes('schoolLocation')) {
				$('.inputSchool' + pk + 'SchoolLocation').val(o['schoolLocation']);
				$('.varSchool' + pk + 'SchoolLocation').text(o['schoolLocation']);
			}
			if(vars.includes('schoolPhoneNumber')) {
				$('.inputSchool' + pk + 'SchoolPhoneNumber').val(o['schoolPhoneNumber']);
				$('.varSchool' + pk + 'SchoolPhoneNumber').text(o['schoolPhoneNumber']);
			}
			if(vars.includes('schoolAddress')) {
				$('.inputSchool' + pk + 'SchoolAddress').val(o['schoolAddress']);
				$('.varSchool' + pk + 'SchoolAddress').text(o['schoolAddress']);
			}
			if(vars.includes('yearKeys')) {
				$('.inputSchool' + pk + 'YearKeys').val(o['yearKeys']);
				$('.varSchool' + pk + 'YearKeys').text(o['yearKeys']);
			}
		});
	}
}

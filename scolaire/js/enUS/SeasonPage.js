
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

	var valueSeasonFuture = $formValues.find('.valueSeasonFuture').prop('checked');
	if(valueSeasonFuture != null && valueSeasonFuture !== '')
		vals['seasonFuture'] = valueSeasonFuture;

		vals['yearKey'] = [valueYearKey];
	if(valueYearKey != null && valueYearKey !== '')
		vals['yearKey'] = valueYearKey;

	var valueSessionKeys = [];
	$formValues.find('input.valueSessionKeys:checked').each(function(index) {
		valueSessionKeys.push($(this).val());
	});
	if(valueSessionKeys.length > 0)
		vals['sessionKeys'] = valueSessionKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueSeasonSummer = $formValues.find('.valueSeasonSummer').prop('checked');
	if(valueSeasonSummer != null && valueSeasonSummer !== '')
		vals['seasonSummer'] = valueSeasonSummer;

	var valueSeasonWinter = $formValues.find('.valueSeasonWinter').prop('checked');
	if(valueSeasonWinter != null && valueSeasonWinter !== '')
		vals['seasonWinter'] = valueSeasonWinter;

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

// PUTImport //

async function putimportSchoolSeason($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolSeasonVals(JSON.parse(json), success, error);
}

function putimportSchoolSeasonVals(json, success, error) {
	$.ajax({
		url: '/api/season/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolSeason($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolSeasonVals(JSON.parse(json), success, error);
}

function putmergeSchoolSeasonVals(json, success, error) {
	$.ajax({
		url: '/api/season/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolSeason($formValues, pk, success, error) {
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

	var valueSeasonStartDate = $formValues.find('.valueSeasonStartDate').val();
	if(valueSeasonStartDate != null && valueSeasonStartDate !== '')
		vals['seasonStartDate'] = valueSeasonStartDate;

	var valueSeasonFuture = $formValues.find('.valueSeasonFuture').prop('checked');
	if(valueSeasonFuture != null && valueSeasonFuture !== '')
		vals['seasonFuture'] = valueSeasonFuture;

	var valueYearKey = $formValues.find('input.valueYearKey:checked').val();
	if(valueYearKey != null && valueYearKey !== '')
		vals['yearKey'] = valueYearKey;

	var valueSessionKeys = $formValues.find('input.valueSessionKeys:checked').val();
	if(valueSessionKeys != null && valueSessionKeys !== '')
		vals['sessionKeys'] = [valueSessionKeys];

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueSeasonSummer = $formValues.find('.valueSeasonSummer').prop('checked');
	if(valueSeasonSummer != null && valueSeasonSummer !== '')
		vals['seasonSummer'] = valueSeasonSummer;

	var valueSeasonWinter = $formValues.find('.valueSeasonWinter').prop('checked');
	if(valueSeasonWinter != null && valueSeasonWinter !== '')
		vals['seasonWinter'] = valueSeasonWinter;

	putcopySchoolSeasonVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolSeasonVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/season/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolSeason($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolSeasonFilters($formFilters);

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

	var valueSeasonStartDate = $formValues.find('.valueSeasonStartDate').val();
	if(valueSeasonStartDate != null && valueSeasonStartDate !== '')
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

	var valueSeasonFuture = $formValues.find('.valueSeasonFuture').prop('checked');
	if(valueSeasonFuture != null && valueSeasonFuture !== '')
	var removeSeasonFuture = $formFilters.find('.removeSeasonFuture').val() === 'true';
	var valueSeasonFutureSelectVal = $formValues.find('select.setSeasonFuture').val();
	var valueSeasonFuture = null;
	if(valueSeasonFutureSelectVal !== '')
		valueSeasonFuture = valueSeasonFutureSelectVal == 'true';
	setSeasonFuture = removeSeasonFuture ? null : valueSeasonFuture;
	if(removeSeasonFuture || setSeasonFuture != null && setSeasonFuture !== '')
		vals['setSeasonFuture'] = setSeasonFuture;
	var addSeasonFuture = $formValues.find('.addSeasonFuture').prop('checked');
	if(addSeasonFuture != null && addSeasonFuture !== '')
		vals['addSeasonFuture'] = addSeasonFuture;
	var removeSeasonFuture = $formValues.find('.removeSeasonFuture').prop('checked');
	if(removeSeasonFuture != null && removeSeasonFuture !== '')
		vals['removeSeasonFuture'] = removeSeasonFuture;

	var valueYearKey = $formValues.find('input.valueYearKey:checked').val();
	if(valueYearKey != null && valueYearKey !== '')
		vals['setYearKey'] = valueYearKey;

	var valueSessionKeys = $formValues.find('input.valueSessionKeys:checked').val();
	if(valueSessionKeys != null && valueSessionKeys !== '')
		vals['addSessionKeys'] = valueSessionKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
	var removeInheritPk = $formFilters.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
	var removeSessionId = $formFilters.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formValues.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
	var removeUserId = $formFilters.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	var addUserId = $formValues.find('.addUserId').val();
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
	var removeUserKey = $formFilters.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	var addUserKey = $formValues.find('.addUserKey').val();
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

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

	var valueSeasonSummer = $formValues.find('.valueSeasonSummer').prop('checked');
	if(valueSeasonSummer != null && valueSeasonSummer !== '')
	var removeSeasonSummer = $formFilters.find('.removeSeasonSummer').val() === 'true';
	var valueSeasonSummerSelectVal = $formValues.find('select.setSeasonSummer').val();
	var valueSeasonSummer = null;
	if(valueSeasonSummerSelectVal !== '')
		valueSeasonSummer = valueSeasonSummerSelectVal == 'true';
	setSeasonSummer = removeSeasonSummer ? null : valueSeasonSummer;
	if(removeSeasonSummer || setSeasonSummer != null && setSeasonSummer !== '')
		vals['setSeasonSummer'] = setSeasonSummer;
	var addSeasonSummer = $formValues.find('.addSeasonSummer').prop('checked');
	if(addSeasonSummer != null && addSeasonSummer !== '')
		vals['addSeasonSummer'] = addSeasonSummer;
	var removeSeasonSummer = $formValues.find('.removeSeasonSummer').prop('checked');
	if(removeSeasonSummer != null && removeSeasonSummer !== '')
		vals['removeSeasonSummer'] = removeSeasonSummer;

	var valueSeasonWinter = $formValues.find('.valueSeasonWinter').prop('checked');
	if(valueSeasonWinter != null && valueSeasonWinter !== '')
	var removeSeasonWinter = $formFilters.find('.removeSeasonWinter').val() === 'true';
	var valueSeasonWinterSelectVal = $formValues.find('select.setSeasonWinter').val();
	var valueSeasonWinter = null;
	if(valueSeasonWinterSelectVal !== '')
		valueSeasonWinter = valueSeasonWinterSelectVal == 'true';
	setSeasonWinter = removeSeasonWinter ? null : valueSeasonWinter;
	if(removeSeasonWinter || setSeasonWinter != null && setSeasonWinter !== '')
		vals['setSeasonWinter'] = setSeasonWinter;
	var addSeasonWinter = $formValues.find('.addSeasonWinter').prop('checked');
	if(addSeasonWinter != null && addSeasonWinter !== '')
		vals['addSeasonWinter'] = addSeasonWinter;
	var removeSeasonWinter = $formValues.find('.removeSeasonWinter').prop('checked');
	if(removeSeasonWinter != null && removeSeasonWinter !== '')
		vals['removeSeasonWinter'] = removeSeasonWinter;

	patchSchoolSeasonVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolSeasonFilters($formFilters) {
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

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var $filterSeasonFutureCheckbox = $formFilters.find('input.valueSeasonFuture[type = "checkbox"]');
		var $filterSeasonFutureSelect = $formFilters.find('select.valueSeasonFuture');
		var filterSeasonFuture = $filterSeasonFutureSelect.length ? $filterSeasonFutureSelect.val() : $filterSeasonFutureCheckbox.prop('checked');
		var filterSeasonFutureSelectVal = $formFilters.find('select.filterSeasonFuture').val();
		var filterSeasonFuture = null;
		if(filterSeasonFutureSelectVal !== '')
			filterSeasonFuture = filterSeasonFutureSelectVal == 'true';
		if(filterSeasonFuture != null && filterSeasonFuture === true)
			filters.push({ name: 'fq', value: 'seasonFuture:' + filterSeasonFuture });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
		if(filterSessionKeys != null && filterSessionKeys !== '')
			filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

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

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

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

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

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

		var filterSeasonShortName = $formFilters.find('.valueSeasonShortName').val();
		if(filterSeasonShortName != null && filterSeasonShortName !== '')
			filters.push({ name: 'fq', value: 'seasonShortName:' + filterSeasonShortName });

		var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
		if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
			filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });
	}
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

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var $filterSeasonFutureCheckbox = $formFilters.find('input.valueSeasonFuture[type = "checkbox"]');
		var $filterSeasonFutureSelect = $formFilters.find('select.valueSeasonFuture');
		var filterSeasonFuture = $filterSeasonFutureSelect.length ? $filterSeasonFutureSelect.val() : $filterSeasonFutureCheckbox.prop('checked');
		var filterSeasonFutureSelectVal = $formFilters.find('select.filterSeasonFuture').val();
		var filterSeasonFuture = null;
		if(filterSeasonFutureSelectVal !== '')
			filterSeasonFuture = filterSeasonFutureSelectVal == 'true';
		if(filterSeasonFuture != null && filterSeasonFuture === true)
			filters.push({ name: 'fq', value: 'seasonFuture:' + filterSeasonFuture });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
		if(filterSessionKeys != null && filterSessionKeys !== '')
			filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

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

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

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

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

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

		var filterSeasonShortName = $formFilters.find('.valueSeasonShortName').val();
		if(filterSeasonShortName != null && filterSeasonShortName !== '')
			filters.push({ name: 'fq', value: 'seasonShortName:' + filterSeasonShortName });

		var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
		if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
			filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });
	}
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
			var $i = $('<i>').attr('class', 'far fa-sun ');
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

function suggestSchoolSeasonYearKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['yearCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['seasonKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
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
			if(attribute)
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

function suggestSchoolSeasonSessionKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-graduation-cap ');
			var $span = $('<span>').attr('class', '').text(o['sessionCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['seasonKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
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
			if(attribute)
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
				$('.top-box').append($box);
			if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketSchoolYear', function (error, message) {
			$('#Page_yearKey').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolSession', function (error, message) {
			$('#Page_sessionKeys').trigger('oninput');
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
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSchoolSeason' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSchoolSeason' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'Modified'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSchoolSeason' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSchoolSeason' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'Deleted'));
			}
			var val = o['seasonStartDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('seasonStartDate')) {
				$('.inputSchoolSeason' + pk + 'SeasonStartDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'SeasonStartDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'SeasonStartDate'));
			}
			var val = o['seasonFuture'];
			if(vars.includes('seasonFuture')) {
				$('.inputSchoolSeason' + pk + 'SeasonFuture').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'SeasonFuture').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'SeasonFuture'));
			}
			var val = o['yearKey'];
			if(vars.includes('yearKey')) {
				$('.inputSchoolSeason' + pk + 'YearKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'YearKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'YearKey'));
			}
			var val = o['sessionKeys'];
			if(vars.includes('sessionKeys')) {
				$('.inputSchoolSeason' + pk + 'SessionKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'SessionKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'SessionKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSchoolSeason' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSchoolSeason' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSchoolSeason' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSchoolSeason' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'UserKey'));
			}
			var val = o['seasonSummer'];
			if(vars.includes('seasonSummer')) {
				$('.inputSchoolSeason' + pk + 'SeasonSummer').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'SeasonSummer').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'SeasonSummer'));
			}
			var val = o['seasonWinter'];
			if(vars.includes('seasonWinter')) {
				$('.inputSchoolSeason' + pk + 'SeasonWinter').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolSeason' + pk + 'SeasonWinter').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolSeason' + pk + 'SeasonWinter'));
			}
		});
	}
}

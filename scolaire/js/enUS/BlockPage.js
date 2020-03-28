
// POST //

async function postSchoolBlock($formValues, success, error) {
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

	var valueBlockStartTime = $formValues.find('.valueBlockStartTime').val();
	if(valueBlockStartTime != null && valueBlockStartTime !== '')
		vals['blockStartTime'] = valueBlockStartTime;

	var valueBlockEndTime = $formValues.find('.valueBlockEndTime').val();
	if(valueBlockEndTime != null && valueBlockEndTime !== '')
		vals['blockEndTime'] = valueBlockEndTime;

	var valueBlockPricePerMonth = $formValues.find('.valueBlockPricePerMonth').val();
	if(valueBlockPricePerMonth != null && valueBlockPricePerMonth !== '')
		vals['blockPricePerMonth'] = valueBlockPricePerMonth;

	var valueBlockMonday = $formValues.find('.valueBlockMonday').prop('checked');
	if(valueBlockMonday != null && valueBlockMonday !== '')
		vals['blockMonday'] = valueBlockMonday;

	var valueBlockTuesday = $formValues.find('.valueBlockTuesday').prop('checked');
	if(valueBlockTuesday != null && valueBlockTuesday !== '')
		vals['blockTuesday'] = valueBlockTuesday;

	var valueBlockWednesday = $formValues.find('.valueBlockWednesday').prop('checked');
	if(valueBlockWednesday != null && valueBlockWednesday !== '')
		vals['blockWednesday'] = valueBlockWednesday;

	var valueBlockThursday = $formValues.find('.valueBlockThursday').prop('checked');
	if(valueBlockThursday != null && valueBlockThursday !== '')
		vals['blockThursday'] = valueBlockThursday;

	var valueBlockFriday = $formValues.find('.valueBlockFriday').prop('checked');
	if(valueBlockFriday != null && valueBlockFriday !== '')
		vals['blockFriday'] = valueBlockFriday;

	var valueAgeKey = $formValues.find('input.valueAgeKey:checked').val();
	if(valueAgeKey != null && valueAgeKey !== '')
		vals['ageKey'] = valueAgeKey;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	$.ajax({
		url: '/api/block'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolBlockVals(vals, success, error) {
	$.ajax({
		url: '/api/block'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUT //

async function putSchoolBlock($formValues, pk, success, error) {
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

	var valueBlockStartTime = $formValues.find('.valueBlockStartTime').val();
	if(valueBlockStartTime != null && valueBlockStartTime !== '')
		vals['blockStartTime'] = valueBlockStartTime;

	var valueBlockEndTime = $formValues.find('.valueBlockEndTime').val();
	if(valueBlockEndTime != null && valueBlockEndTime !== '')
		vals['blockEndTime'] = valueBlockEndTime;

	var valueBlockPricePerMonth = $formValues.find('.valueBlockPricePerMonth').val();
	if(valueBlockPricePerMonth != null && valueBlockPricePerMonth !== '')
		vals['blockPricePerMonth'] = valueBlockPricePerMonth;

	var valueBlockMonday = $formValues.find('.valueBlockMonday').prop('checked');
	if(valueBlockMonday != null && valueBlockMonday !== '')
		vals['blockMonday'] = valueBlockMonday;

	var valueBlockTuesday = $formValues.find('.valueBlockTuesday').prop('checked');
	if(valueBlockTuesday != null && valueBlockTuesday !== '')
		vals['blockTuesday'] = valueBlockTuesday;

	var valueBlockWednesday = $formValues.find('.valueBlockWednesday').prop('checked');
	if(valueBlockWednesday != null && valueBlockWednesday !== '')
		vals['blockWednesday'] = valueBlockWednesday;

	var valueBlockThursday = $formValues.find('.valueBlockThursday').prop('checked');
	if(valueBlockThursday != null && valueBlockThursday !== '')
		vals['blockThursday'] = valueBlockThursday;

	var valueBlockFriday = $formValues.find('.valueBlockFriday').prop('checked');
	if(valueBlockFriday != null && valueBlockFriday !== '')
		vals['blockFriday'] = valueBlockFriday;

	var valueAgeKey = $formValues.find('input.valueAgeKey:checked').val();
	if(valueAgeKey != null && valueAgeKey !== '')
		vals['ageKey'] = valueAgeKey;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	putSchoolBlockVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putSchoolBlockVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/block?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolBlock($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolBlockFilters($formFilters);

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

	var removeBlockStartTime = $formFilters.find('.removeBlockStartTime').val() === 'true';
	var setBlockStartTime = removeBlockStartTime ? null : $formValues.find('.setBlockStartTime').val();
	if(removeBlockStartTime || setBlockStartTime != null && setBlockStartTime !== '')
		vals['setBlockStartTime'] = setBlockStartTime;
	var addBlockStartTime = $formValues.find('.addBlockStartTime').val();
	if(addBlockStartTime != null && addBlockStartTime !== '')
		vals['addBlockStartTime'] = addBlockStartTime;
	var removeBlockStartTime = $formValues.find('.removeBlockStartTime').val();
	if(removeBlockStartTime != null && removeBlockStartTime !== '')
		vals['removeBlockStartTime'] = removeBlockStartTime;

	var removeBlockEndTime = $formFilters.find('.removeBlockEndTime').val() === 'true';
	var setBlockEndTime = removeBlockEndTime ? null : $formValues.find('.setBlockEndTime').val();
	if(removeBlockEndTime || setBlockEndTime != null && setBlockEndTime !== '')
		vals['setBlockEndTime'] = setBlockEndTime;
	var addBlockEndTime = $formValues.find('.addBlockEndTime').val();
	if(addBlockEndTime != null && addBlockEndTime !== '')
		vals['addBlockEndTime'] = addBlockEndTime;
	var removeBlockEndTime = $formValues.find('.removeBlockEndTime').val();
	if(removeBlockEndTime != null && removeBlockEndTime !== '')
		vals['removeBlockEndTime'] = removeBlockEndTime;

	var removeBlockPricePerMonth = $formFilters.find('.removeBlockPricePerMonth').val() === 'true';
	var setBlockPricePerMonth = removeBlockPricePerMonth ? null : $formValues.find('.setBlockPricePerMonth').val();
	if(removeBlockPricePerMonth || setBlockPricePerMonth != null && setBlockPricePerMonth !== '')
		vals['setBlockPricePerMonth'] = setBlockPricePerMonth;
	var addBlockPricePerMonth = $formValues.find('.addBlockPricePerMonth').val();
	if(addBlockPricePerMonth != null && addBlockPricePerMonth !== '')
		vals['addBlockPricePerMonth'] = addBlockPricePerMonth;
	var removeBlockPricePerMonth = $formValues.find('.removeBlockPricePerMonth').val();
	if(removeBlockPricePerMonth != null && removeBlockPricePerMonth !== '')
		vals['removeBlockPricePerMonth'] = removeBlockPricePerMonth;

	var removeBlockMonday = $formFilters.find('.removeBlockMonday').val() === 'true';
	var valueBlockMondaySelectVal = $formValues.find('select.setBlockMonday').val();
	var valueBlockMonday = null;
	if(valueBlockMondaySelectVal !== '')
		valueBlockMonday = valueBlockMondaySelectVal == 'true';
	setBlockMonday = removeBlockMonday ? null : valueBlockMonday;
	if(removeBlockMonday || setBlockMonday != null && setBlockMonday !== '')
		vals['setBlockMonday'] = setBlockMonday;
	var addBlockMonday = $formValues.find('.addBlockMonday').prop('checked');
	if(addBlockMonday != null && addBlockMonday !== '')
		vals['addBlockMonday'] = addBlockMonday;
	var removeBlockMonday = $formValues.find('.removeBlockMonday').prop('checked');
	if(removeBlockMonday != null && removeBlockMonday !== '')
		vals['removeBlockMonday'] = removeBlockMonday;

	var removeBlockTuesday = $formFilters.find('.removeBlockTuesday').val() === 'true';
	var valueBlockTuesdaySelectVal = $formValues.find('select.setBlockTuesday').val();
	var valueBlockTuesday = null;
	if(valueBlockTuesdaySelectVal !== '')
		valueBlockTuesday = valueBlockTuesdaySelectVal == 'true';
	setBlockTuesday = removeBlockTuesday ? null : valueBlockTuesday;
	if(removeBlockTuesday || setBlockTuesday != null && setBlockTuesday !== '')
		vals['setBlockTuesday'] = setBlockTuesday;
	var addBlockTuesday = $formValues.find('.addBlockTuesday').prop('checked');
	if(addBlockTuesday != null && addBlockTuesday !== '')
		vals['addBlockTuesday'] = addBlockTuesday;
	var removeBlockTuesday = $formValues.find('.removeBlockTuesday').prop('checked');
	if(removeBlockTuesday != null && removeBlockTuesday !== '')
		vals['removeBlockTuesday'] = removeBlockTuesday;

	var removeBlockWednesday = $formFilters.find('.removeBlockWednesday').val() === 'true';
	var valueBlockWednesdaySelectVal = $formValues.find('select.setBlockWednesday').val();
	var valueBlockWednesday = null;
	if(valueBlockWednesdaySelectVal !== '')
		valueBlockWednesday = valueBlockWednesdaySelectVal == 'true';
	setBlockWednesday = removeBlockWednesday ? null : valueBlockWednesday;
	if(removeBlockWednesday || setBlockWednesday != null && setBlockWednesday !== '')
		vals['setBlockWednesday'] = setBlockWednesday;
	var addBlockWednesday = $formValues.find('.addBlockWednesday').prop('checked');
	if(addBlockWednesday != null && addBlockWednesday !== '')
		vals['addBlockWednesday'] = addBlockWednesday;
	var removeBlockWednesday = $formValues.find('.removeBlockWednesday').prop('checked');
	if(removeBlockWednesday != null && removeBlockWednesday !== '')
		vals['removeBlockWednesday'] = removeBlockWednesday;

	var removeBlockThursday = $formFilters.find('.removeBlockThursday').val() === 'true';
	var valueBlockThursdaySelectVal = $formValues.find('select.setBlockThursday').val();
	var valueBlockThursday = null;
	if(valueBlockThursdaySelectVal !== '')
		valueBlockThursday = valueBlockThursdaySelectVal == 'true';
	setBlockThursday = removeBlockThursday ? null : valueBlockThursday;
	if(removeBlockThursday || setBlockThursday != null && setBlockThursday !== '')
		vals['setBlockThursday'] = setBlockThursday;
	var addBlockThursday = $formValues.find('.addBlockThursday').prop('checked');
	if(addBlockThursday != null && addBlockThursday !== '')
		vals['addBlockThursday'] = addBlockThursday;
	var removeBlockThursday = $formValues.find('.removeBlockThursday').prop('checked');
	if(removeBlockThursday != null && removeBlockThursday !== '')
		vals['removeBlockThursday'] = removeBlockThursday;

	var removeBlockFriday = $formFilters.find('.removeBlockFriday').val() === 'true';
	var valueBlockFridaySelectVal = $formValues.find('select.setBlockFriday').val();
	var valueBlockFriday = null;
	if(valueBlockFridaySelectVal !== '')
		valueBlockFriday = valueBlockFridaySelectVal == 'true';
	setBlockFriday = removeBlockFriday ? null : valueBlockFriday;
	if(removeBlockFriday || setBlockFriday != null && setBlockFriday !== '')
		vals['setBlockFriday'] = setBlockFriday;
	var addBlockFriday = $formValues.find('.addBlockFriday').prop('checked');
	if(addBlockFriday != null && addBlockFriday !== '')
		vals['addBlockFriday'] = addBlockFriday;
	var removeBlockFriday = $formValues.find('.removeBlockFriday').prop('checked');
	if(removeBlockFriday != null && removeBlockFriday !== '')
		vals['removeBlockFriday'] = removeBlockFriday;

	var removeAgeKey = $formFilters.find('.removeAgeKey').val() === 'true';
	var setAgeKey = removeAgeKey ? null : $formValues.find('.setAgeKey').val();
	if(removeAgeKey || setAgeKey != null && setAgeKey !== '')
		vals['setAgeKey'] = setAgeKey;
	var addAgeKey = $formValues.find('.addAgeKey').val();
	if(addAgeKey != null && addAgeKey !== '')
		vals['addAgeKey'] = addAgeKey;
	var removeAgeKey = $formValues.find('.removeAgeKey').val();
	if(removeAgeKey != null && removeAgeKey !== '')
		vals['removeAgeKey'] = removeAgeKey;

	var removeEnrollmentKeys = $formFilters.find('.removeEnrollmentKeys').val() === 'true';
	var setEnrollmentKeys = removeEnrollmentKeys ? null : $formValues.find('.setEnrollmentKeys').val();
	if(removeEnrollmentKeys || setEnrollmentKeys != null && setEnrollmentKeys !== '')
		vals['setEnrollmentKeys'] = setEnrollmentKeys;
	var addEnrollmentKeys = $formValues.find('.addEnrollmentKeys').val();
	if(addEnrollmentKeys != null && addEnrollmentKeys !== '')
		vals['addEnrollmentKeys'] = addEnrollmentKeys;
	var removeEnrollmentKeys = $formValues.find('.removeEnrollmentKeys').val();
	if(removeEnrollmentKeys != null && removeEnrollmentKeys !== '')
		vals['removeEnrollmentKeys'] = removeEnrollmentKeys;

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

	patchSchoolBlockVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolBlockFilters($formFilters) {
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

	var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
	if(filterBlockStartTime != null && filterBlockStartTime !== '')
		filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

	var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
	if(filterBlockEndTime != null && filterBlockEndTime !== '')
		filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

	var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
	if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
		filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

	var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
	var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
	var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
	var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
	var filterBlockMonday = null;
	if(filterBlockMondaySelectVal !== '')
		filterBlockMonday = filterBlockMondaySelectVal == 'true';
	if(filterBlockMonday != null && filterBlockMonday === true)
		filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

	var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
	var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
	var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
	var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
	var filterBlockTuesday = null;
	if(filterBlockTuesdaySelectVal !== '')
		filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
	if(filterBlockTuesday != null && filterBlockTuesday === true)
		filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

	var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
	var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
	var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
	var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
	var filterBlockWednesday = null;
	if(filterBlockWednesdaySelectVal !== '')
		filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
	if(filterBlockWednesday != null && filterBlockWednesday === true)
		filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

	var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
	var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
	var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
	var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
	var filterBlockThursday = null;
	if(filterBlockThursdaySelectVal !== '')
		filterBlockThursday = filterBlockThursdaySelectVal == 'true';
	if(filterBlockThursday != null && filterBlockThursday === true)
		filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

	var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
	var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
	var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
	var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
	var filterBlockFriday = null;
	if(filterBlockFridaySelectVal !== '')
		filterBlockFriday = filterBlockFridaySelectVal == 'true';
	if(filterBlockFriday != null && filterBlockFriday === true)
		filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

	var filterAgeKey = $formFilters.find('.valueAgeKey').val();
	if(filterAgeKey != null && filterAgeKey !== '')
		filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

	var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
	if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
		filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

	var filterBlockKey = $formFilters.find('.valueBlockKey').val();
	if(filterBlockKey != null && filterBlockKey !== '')
		filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

	var filterChildKey = $formFilters.find('.valueChildKey').val();
	if(filterChildKey != null && filterChildKey !== '')
		filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

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

	var filterAgeSort = $formFilters.find('.valueAgeSort').val();
	if(filterAgeSort != null && filterAgeSort !== '')
		filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

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

	var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
	if(filterSessionStartDate != null && filterSessionStartDate !== '')
		filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

	var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
	if(filterSessionEndDate != null && filterSessionEndDate !== '')
		filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

	var filterAgeShortName = $formFilters.find('.valueAgeShortName').val();
	if(filterAgeShortName != null && filterAgeShortName !== '')
		filters.push({ name: 'fq', value: 'ageShortName:' + filterAgeShortName });

	var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
	if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
		filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

	var filterAgeStart = $formFilters.find('.valueAgeStart').val();
	if(filterAgeStart != null && filterAgeStart !== '')
		filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

	var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
	if(filterAgeEnd != null && filterAgeEnd !== '')
		filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

	var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
	var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
	var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
	var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
	var filterBlockSunday = null;
	if(filterBlockSundaySelectVal !== '')
		filterBlockSunday = filterBlockSundaySelectVal == 'true';
	if(filterBlockSunday != null && filterBlockSunday === true)
		filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

	var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
	var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
	var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
	var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
	var filterBlockSaturday = null;
	if(filterBlockSaturdaySelectVal !== '')
		filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
	if(filterBlockSaturday != null && filterBlockSaturday === true)
		filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

	var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
	if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
		filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

	var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
	if(filterBlockShortName != null && filterBlockShortName !== '')
		filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

	var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
	if(filterBlockAdminName != null && filterBlockAdminName !== '')
		filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

	var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
	if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
		filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });
	return filters;
}

function patchSchoolBlockVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolBlockVals(filters, vals, success, error);
}

function patchSchoolBlockVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/block?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolBlock(pk) {
	$.ajax({
		url: '/api/block/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolBlock($formFilters, success, error) {
	var filters = searchSchoolBlockFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolBlockVals(filters, success, error);
}

function searchSchoolBlockFilters($formFilters) {
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

	var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
	if(filterBlockStartTime != null && filterBlockStartTime !== '')
		filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

	var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
	if(filterBlockEndTime != null && filterBlockEndTime !== '')
		filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

	var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
	if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
		filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

	var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
	var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
	var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
	var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
	var filterBlockMonday = null;
	if(filterBlockMondaySelectVal !== '')
		filterBlockMonday = filterBlockMondaySelectVal == 'true';
	if(filterBlockMonday != null && filterBlockMonday === true)
		filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

	var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
	var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
	var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
	var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
	var filterBlockTuesday = null;
	if(filterBlockTuesdaySelectVal !== '')
		filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
	if(filterBlockTuesday != null && filterBlockTuesday === true)
		filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

	var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
	var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
	var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
	var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
	var filterBlockWednesday = null;
	if(filterBlockWednesdaySelectVal !== '')
		filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
	if(filterBlockWednesday != null && filterBlockWednesday === true)
		filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

	var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
	var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
	var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
	var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
	var filterBlockThursday = null;
	if(filterBlockThursdaySelectVal !== '')
		filterBlockThursday = filterBlockThursdaySelectVal == 'true';
	if(filterBlockThursday != null && filterBlockThursday === true)
		filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

	var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
	var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
	var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
	var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
	var filterBlockFriday = null;
	if(filterBlockFridaySelectVal !== '')
		filterBlockFriday = filterBlockFridaySelectVal == 'true';
	if(filterBlockFriday != null && filterBlockFriday === true)
		filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

	var filterAgeKey = $formFilters.find('.valueAgeKey').val();
	if(filterAgeKey != null && filterAgeKey !== '')
		filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

	var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
	if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
		filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

	var filterBlockKey = $formFilters.find('.valueBlockKey').val();
	if(filterBlockKey != null && filterBlockKey !== '')
		filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

	var filterChildKey = $formFilters.find('.valueChildKey').val();
	if(filterChildKey != null && filterChildKey !== '')
		filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

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

	var filterAgeSort = $formFilters.find('.valueAgeSort').val();
	if(filterAgeSort != null && filterAgeSort !== '')
		filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

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

	var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
	if(filterSessionStartDate != null && filterSessionStartDate !== '')
		filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

	var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
	if(filterSessionEndDate != null && filterSessionEndDate !== '')
		filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

	var filterAgeShortName = $formFilters.find('.valueAgeShortName').val();
	if(filterAgeShortName != null && filterAgeShortName !== '')
		filters.push({ name: 'fq', value: 'ageShortName:' + filterAgeShortName });

	var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
	if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
		filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

	var filterAgeStart = $formFilters.find('.valueAgeStart').val();
	if(filterAgeStart != null && filterAgeStart !== '')
		filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

	var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
	if(filterAgeEnd != null && filterAgeEnd !== '')
		filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

	var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
	var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
	var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
	var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
	var filterBlockSunday = null;
	if(filterBlockSundaySelectVal !== '')
		filterBlockSunday = filterBlockSundaySelectVal == 'true';
	if(filterBlockSunday != null && filterBlockSunday === true)
		filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

	var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
	var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
	var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
	var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
	var filterBlockSaturday = null;
	if(filterBlockSaturdaySelectVal !== '')
		filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
	if(filterBlockSaturday != null && filterBlockSaturday === true)
		filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

	var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
	if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
		filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

	var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
	if(filterBlockShortName != null && filterBlockShortName !== '')
		filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

	var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
	if(filterBlockAdminName != null && filterBlockAdminName !== '')
		filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

	var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
	if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
		filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });
	return filters;
}

function searchSchoolBlockVals(filters, success, error) {
	$.ajax({
		url: '/api/block?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolBlockObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-bell ');
			var $span = $('<span>').attr('class', '').text(o['blockCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolBlockVals($formFilters, success, error);
}

function suggestSchoolBlockEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['blockKeys'];
			var checked = Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_blockKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_blockKeys_" + o['pk'] + "'); patchSchoolBlockVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolBlockForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

function suggestSchoolBlockAgeKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-birthday-cake ');
			var $span = $('<span>').attr('class', '').text(o['ageCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['blockKeys'];
			var checked = Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_ageKey_' + pk + '_blockKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueAgeKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_ageKey_" + pk + "_blockKeys_" + o['pk'] + "'); patchSchoolBlockVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'AgeKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolBlockForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolAgeVals(filters, success, error);
}

async function websocketSchoolBlock(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolBlock', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-indigo ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'far fa-bell w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modify blocks');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-indigo ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolAge', function (error, message) {
			$('#Page_ageKey').trigger('oninput');
		});
	}
}
async function websocketSchoolBlockInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolBlockVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputSchoolBlock' + pk + 'Created').val(o['created']);
				$('.varSchoolBlock' + pk + 'Created').text(o['created']);
			}
			if(vars.includes('modified')) {
				$('.inputSchoolBlock' + pk + 'Modified').val(o['modified']);
				$('.varSchoolBlock' + pk + 'Modified').text(o['modified']);
			}
			if(vars.includes('archived')) {
				$('.inputSchoolBlock' + pk + 'Archived').val(o['archived']);
				$('.varSchoolBlock' + pk + 'Archived').text(o['archived']);
			}
			if(vars.includes('deleted')) {
				$('.inputSchoolBlock' + pk + 'Deleted').val(o['deleted']);
				$('.varSchoolBlock' + pk + 'Deleted').text(o['deleted']);
			}
			if(vars.includes('blockStartTime')) {
				$('.inputSchoolBlock' + pk + 'BlockStartTime').val(o['blockStartTime']);
				$('.varSchoolBlock' + pk + 'BlockStartTime').text(o['blockStartTime']);
			}
			if(vars.includes('blockEndTime')) {
				$('.inputSchoolBlock' + pk + 'BlockEndTime').val(o['blockEndTime']);
				$('.varSchoolBlock' + pk + 'BlockEndTime').text(o['blockEndTime']);
			}
			if(vars.includes('blockPricePerMonth')) {
				$('.inputSchoolBlock' + pk + 'BlockPricePerMonth').val(o['blockPricePerMonth']);
				$('.varSchoolBlock' + pk + 'BlockPricePerMonth').text(o['blockPricePerMonth']);
			}
			if(vars.includes('blockMonday')) {
				$('.inputSchoolBlock' + pk + 'BlockMonday').val(o['blockMonday']);
				$('.varSchoolBlock' + pk + 'BlockMonday').text(o['blockMonday']);
			}
			if(vars.includes('blockTuesday')) {
				$('.inputSchoolBlock' + pk + 'BlockTuesday').val(o['blockTuesday']);
				$('.varSchoolBlock' + pk + 'BlockTuesday').text(o['blockTuesday']);
			}
			if(vars.includes('blockWednesday')) {
				$('.inputSchoolBlock' + pk + 'BlockWednesday').val(o['blockWednesday']);
				$('.varSchoolBlock' + pk + 'BlockWednesday').text(o['blockWednesday']);
			}
			if(vars.includes('blockThursday')) {
				$('.inputSchoolBlock' + pk + 'BlockThursday').val(o['blockThursday']);
				$('.varSchoolBlock' + pk + 'BlockThursday').text(o['blockThursday']);
			}
			if(vars.includes('blockFriday')) {
				$('.inputSchoolBlock' + pk + 'BlockFriday').val(o['blockFriday']);
				$('.varSchoolBlock' + pk + 'BlockFriday').text(o['blockFriday']);
			}
			if(vars.includes('ageKey')) {
				$('.inputSchoolBlock' + pk + 'AgeKey').val(o['ageKey']);
				$('.varSchoolBlock' + pk + 'AgeKey').text(o['ageKey']);
			}
			if(vars.includes('enrollmentKeys')) {
				$('.inputSchoolBlock' + pk + 'EnrollmentKeys').val(o['enrollmentKeys']);
				$('.varSchoolBlock' + pk + 'EnrollmentKeys').text(o['enrollmentKeys']);
			}
			if(vars.includes('schoolAddress')) {
				$('.inputSchoolBlock' + pk + 'SchoolAddress').val(o['schoolAddress']);
				$('.varSchoolBlock' + pk + 'SchoolAddress').text(o['schoolAddress']);
			}
		});
	}
}

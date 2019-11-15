
// POST //

function postSchoolBlock($formValues, success, error) {
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

	var valueEnrollmentKeys = $formValues.find('.valueEnrollmentKeys').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valueBlockCompleteName = $formValues.find('.valueBlockCompleteName').val();
	if(valueBlockCompleteName != null && valueBlockCompleteName !== '')
		vals['blockCompleteName'] = valueBlockCompleteName;

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

// PATCH //

function patchSchoolBlock($formFilters, $formValues, success, error) {
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
	var setBlockMonday = removeBlockMonday ? null : $formValues.find('.setBlockMonday').prop('checked');
	if(removeBlockMonday || setBlockMonday != null && setBlockMonday !== '')
		vals['setBlockMonday'] = setBlockMonday;
	var addBlockMonday = $formValues.find('.addBlockMonday').prop('checked');
	if(addBlockMonday != null && addBlockMonday !== '')
		vals['addBlockMonday'] = addBlockMonday;
	var removeBlockMonday = $formValues.find('.removeBlockMonday').prop('checked');
	if(removeBlockMonday != null && removeBlockMonday !== '')
		vals['removeBlockMonday'] = removeBlockMonday;

	var removeBlockTuesday = $formFilters.find('.removeBlockTuesday').val() === 'true';
	var setBlockTuesday = removeBlockTuesday ? null : $formValues.find('.setBlockTuesday').prop('checked');
	if(removeBlockTuesday || setBlockTuesday != null && setBlockTuesday !== '')
		vals['setBlockTuesday'] = setBlockTuesday;
	var addBlockTuesday = $formValues.find('.addBlockTuesday').prop('checked');
	if(addBlockTuesday != null && addBlockTuesday !== '')
		vals['addBlockTuesday'] = addBlockTuesday;
	var removeBlockTuesday = $formValues.find('.removeBlockTuesday').prop('checked');
	if(removeBlockTuesday != null && removeBlockTuesday !== '')
		vals['removeBlockTuesday'] = removeBlockTuesday;

	var removeBlockWednesday = $formFilters.find('.removeBlockWednesday').val() === 'true';
	var setBlockWednesday = removeBlockWednesday ? null : $formValues.find('.setBlockWednesday').prop('checked');
	if(removeBlockWednesday || setBlockWednesday != null && setBlockWednesday !== '')
		vals['setBlockWednesday'] = setBlockWednesday;
	var addBlockWednesday = $formValues.find('.addBlockWednesday').prop('checked');
	if(addBlockWednesday != null && addBlockWednesday !== '')
		vals['addBlockWednesday'] = addBlockWednesday;
	var removeBlockWednesday = $formValues.find('.removeBlockWednesday').prop('checked');
	if(removeBlockWednesday != null && removeBlockWednesday !== '')
		vals['removeBlockWednesday'] = removeBlockWednesday;

	var removeBlockThursday = $formFilters.find('.removeBlockThursday').val() === 'true';
	var setBlockThursday = removeBlockThursday ? null : $formValues.find('.setBlockThursday').prop('checked');
	if(removeBlockThursday || setBlockThursday != null && setBlockThursday !== '')
		vals['setBlockThursday'] = setBlockThursday;
	var addBlockThursday = $formValues.find('.addBlockThursday').prop('checked');
	if(addBlockThursday != null && addBlockThursday !== '')
		vals['addBlockThursday'] = addBlockThursday;
	var removeBlockThursday = $formValues.find('.removeBlockThursday').prop('checked');
	if(removeBlockThursday != null && removeBlockThursday !== '')
		vals['removeBlockThursday'] = removeBlockThursday;

	var removeBlockFriday = $formFilters.find('.removeBlockFriday').val() === 'true';
	var setBlockFriday = removeBlockFriday ? null : $formValues.find('.setBlockFriday').prop('checked');
	if(removeBlockFriday || setBlockFriday != null && setBlockFriday !== '')
		vals['setBlockFriday'] = setBlockFriday;
	var addBlockFriday = $formValues.find('.addBlockFriday').prop('checked');
	if(addBlockFriday != null && addBlockFriday !== '')
		vals['addBlockFriday'] = addBlockFriday;
	var removeBlockFriday = $formValues.find('.removeBlockFriday').prop('checked');
	if(removeBlockFriday != null && removeBlockFriday !== '')
		vals['removeBlockFriday'] = removeBlockFriday;

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

	var removeBlockCompleteName = $formFilters.find('.removeBlockCompleteName').val() === 'true';
	var setBlockCompleteName = removeBlockCompleteName ? null : $formValues.find('.setBlockCompleteName').val();
	if(removeBlockCompleteName || setBlockCompleteName != null && setBlockCompleteName !== '')
		vals['setBlockCompleteName'] = setBlockCompleteName;
	var addBlockCompleteName = $formValues.find('.addBlockCompleteName').val();
	if(addBlockCompleteName != null && addBlockCompleteName !== '')
		vals['addBlockCompleteName'] = addBlockCompleteName;
	var removeBlockCompleteName = $formValues.find('.removeBlockCompleteName').val();
	if(removeBlockCompleteName != null && removeBlockCompleteName !== '')
		vals['removeBlockCompleteName'] = removeBlockCompleteName;

	patchSchoolBlockVals(filters, vals, success, error);
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

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
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

	var filterBlockMonday = $formFilters.find('.valueBlockMonday').prop('checked');
	if(filterBlockMonday != null && filterBlockMonday === true)
		filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

	var filterBlockTuesday = $formFilters.find('.valueBlockTuesday').prop('checked');
	if(filterBlockTuesday != null && filterBlockTuesday === true)
		filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

	var filterBlockWednesday = $formFilters.find('.valueBlockWednesday').prop('checked');
	if(filterBlockWednesday != null && filterBlockWednesday === true)
		filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

	var filterBlockThursday = $formFilters.find('.valueBlockThursday').prop('checked');
	if(filterBlockThursday != null && filterBlockThursday === true)
		filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

	var filterBlockFriday = $formFilters.find('.valueBlockFriday').prop('checked');
	if(filterBlockFriday != null && filterBlockFriday === true)
		filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

	var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
	if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
		filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

	var filterAgeKey = $formFilters.find('.valueAgeKey').val();
	if(filterAgeKey != null && filterAgeKey !== '')
		filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

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

	var filterSessionStartDay = $formFilters.find('.valueSessionStartDay').val();
	if(filterSessionStartDay != null && filterSessionStartDay !== '')
		filters.push({ name: 'fq', value: 'sessionStartDay:' + filterSessionStartDay });

	var filterSessionEndDay = $formFilters.find('.valueSessionEndDay').val();
	if(filterSessionEndDay != null && filterSessionEndDay !== '')
		filters.push({ name: 'fq', value: 'sessionEndDay:' + filterSessionEndDay });

	var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
	if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
		filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

	var filterAgeStart = $formFilters.find('.valueAgeStart').val();
	if(filterAgeStart != null && filterAgeStart !== '')
		filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

	var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
	if(filterAgeEnd != null && filterAgeEnd !== '')
		filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

	var filterBlockSunday = $formFilters.find('.valueBlockSunday').prop('checked');
	if(filterBlockSunday != null && filterBlockSunday === true)
		filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

	var filterBlockSaturday = $formFilters.find('.valueBlockSaturday').prop('checked');
	if(filterBlockSaturday != null && filterBlockSaturday === true)
		filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

	var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
	if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
		filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

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

function getSchoolBlock(pk) {
	$.ajax({
		url: '/api/block/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteSchoolBlock(pk) {
	$.ajax({
		url: '/api/block/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

function searchSchoolBlock($formFilters, success, error) {
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

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
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

	var filterBlockMonday = $formFilters.find('.valueBlockMonday').prop('checked');
	if(filterBlockMonday != null && filterBlockMonday === true)
		filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

	var filterBlockTuesday = $formFilters.find('.valueBlockTuesday').prop('checked');
	if(filterBlockTuesday != null && filterBlockTuesday === true)
		filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

	var filterBlockWednesday = $formFilters.find('.valueBlockWednesday').prop('checked');
	if(filterBlockWednesday != null && filterBlockWednesday === true)
		filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

	var filterBlockThursday = $formFilters.find('.valueBlockThursday').prop('checked');
	if(filterBlockThursday != null && filterBlockThursday === true)
		filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

	var filterBlockFriday = $formFilters.find('.valueBlockFriday').prop('checked');
	if(filterBlockFriday != null && filterBlockFriday === true)
		filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

	var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
	if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
		filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

	var filterAgeKey = $formFilters.find('.valueAgeKey').val();
	if(filterAgeKey != null && filterAgeKey !== '')
		filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

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

	var filterSessionStartDay = $formFilters.find('.valueSessionStartDay').val();
	if(filterSessionStartDay != null && filterSessionStartDay !== '')
		filters.push({ name: 'fq', value: 'sessionStartDay:' + filterSessionStartDay });

	var filterSessionEndDay = $formFilters.find('.valueSessionEndDay').val();
	if(filterSessionEndDay != null && filterSessionEndDay !== '')
		filters.push({ name: 'fq', value: 'sessionEndDay:' + filterSessionEndDay });

	var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
	if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
		filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

	var filterAgeStart = $formFilters.find('.valueAgeStart').val();
	if(filterAgeStart != null && filterAgeStart !== '')
		filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

	var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
	if(filterAgeEnd != null && filterAgeEnd !== '')
		filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

	var filterBlockSunday = $formFilters.find('.valueBlockSunday').prop('checked');
	if(filterBlockSunday != null && filterBlockSunday === true)
		filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

	var filterBlockSaturday = $formFilters.find('.valueBlockSaturday').prop('checked');
	if(filterBlockSaturday != null && filterBlockSaturday === true)
		filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

	var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
	if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
		filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

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
			var $i = $('<i>').attr('class', 'far fa-bell w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['blockCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolBlockVals($formFilters, success, error);
}

function suggestSchoolBlockEnrollmentKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolBlockForm :input[name="pk"]').val());
			var val = o['blockKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_blockKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_blockKeys_" + o['pk'] + "'); patchSchoolBlockVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
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
	searchSchoolEnrollment($formFilters, success, error);
}

function websocketSchoolBlock() {
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {
		eventBus.registerHandler('websocketSchoolBlock', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
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
		});
	}
}

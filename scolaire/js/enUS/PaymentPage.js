
// POST //

function postSchoolPayment($formValues) {
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

	var valuePaymentId = $formValues.find('.valuePaymentId').val();
	if(valuePaymentId != null && valuePaymentId !== '')
		vals['paymentId'] = valuePaymentId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valuePaymentDate = $formValues.find('.valuePaymentDate').val();
	if(valuePaymentDate != null && valuePaymentDate !== '')
		vals['paymentDate'] = valuePaymentDate;

	var valuePaymentAmount = $formValues.find('.valuePaymentAmount').val();
	if(valuePaymentAmount != null && valuePaymentAmount !== '')
		vals['paymentAmount'] = valuePaymentAmount;

	var valuePaymentCash = $formValues.find('.valuePaymentCash').prop('checked');
	if(valuePaymentCash != null && valuePaymentCash !== '')
		vals['paymentCash'] = valuePaymentCash;

	var valuePaymentCheck = $formValues.find('.valuePaymentCheck').prop('checked');
	if(valuePaymentCheck != null && valuePaymentCheck !== '')
		vals['paymentCheck'] = valuePaymentCheck;

	var valuePaymentDescription = $formValues.find('.valuePaymentDescription').val();
	if(valuePaymentDescription != null && valuePaymentDescription !== '')
		vals['paymentDescription'] = valuePaymentDescription;

	var valueEnrollmentKeys = $formValues.find('.valueEnrollmentKeys').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valuePaymentCompleteName = $formValues.find('.valuePaymentCompleteName').val();
	if(valuePaymentCompleteName != null && valuePaymentCompleteName !== '')
		vals['paymentCompleteName'] = valuePaymentCompleteName;

	$.ajax({
		url: '/api/payment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolPaymentVals(vals, success, error) {
	$.ajax({
		url: '/api/payment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchSchoolPayment($formFilters, $formValues, success, error) {
	var filters = patchSchoolPaymentFilters($formFilters);

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

	var removePaymentId = $formFilters.find('.removePaymentId').val() === 'true';
	var setPaymentId = removePaymentId ? null : $formValues.find('.setPaymentId').val();
	if(removePaymentId || setPaymentId != null && setPaymentId !== '')
		vals['setPaymentId'] = setPaymentId;
	var addPaymentId = $formValues.find('.addPaymentId').val();
	if(addPaymentId != null && addPaymentId !== '')
		vals['addPaymentId'] = addPaymentId;
	var removePaymentId = $formValues.find('.removePaymentId').val();
	if(removePaymentId != null && removePaymentId !== '')
		vals['removePaymentId'] = removePaymentId;

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

	var removePaymentDate = $formFilters.find('.removePaymentDate').val() === 'true';
	var setPaymentDate = removePaymentDate ? null : $formValues.find('.setPaymentDate').val();
	if(removePaymentDate || setPaymentDate != null && setPaymentDate !== '')
		vals['setPaymentDate'] = setPaymentDate;
	var addPaymentDate = $formValues.find('.addPaymentDate').val();
	if(addPaymentDate != null && addPaymentDate !== '')
		vals['addPaymentDate'] = addPaymentDate;
	var removePaymentDate = $formValues.find('.removePaymentDate').val();
	if(removePaymentDate != null && removePaymentDate !== '')
		vals['removePaymentDate'] = removePaymentDate;

	var removePaymentAmount = $formFilters.find('.removePaymentAmount').val() === 'true';
	var setPaymentAmount = removePaymentAmount ? null : $formValues.find('.setPaymentAmount').val();
	if(removePaymentAmount || setPaymentAmount != null && setPaymentAmount !== '')
		vals['setPaymentAmount'] = setPaymentAmount;
	var addPaymentAmount = $formValues.find('.addPaymentAmount').val();
	if(addPaymentAmount != null && addPaymentAmount !== '')
		vals['addPaymentAmount'] = addPaymentAmount;
	var removePaymentAmount = $formValues.find('.removePaymentAmount').val();
	if(removePaymentAmount != null && removePaymentAmount !== '')
		vals['removePaymentAmount'] = removePaymentAmount;

	var removePaymentCash = $formFilters.find('.removePaymentCash').val() === 'true';
	var setPaymentCash = removePaymentCash ? null : $formValues.find('.setPaymentCash').prop('checked');
	if(removePaymentCash || setPaymentCash != null && setPaymentCash !== '')
		vals['setPaymentCash'] = setPaymentCash;
	var addPaymentCash = $formValues.find('.addPaymentCash').prop('checked');
	if(addPaymentCash != null && addPaymentCash !== '')
		vals['addPaymentCash'] = addPaymentCash;
	var removePaymentCash = $formValues.find('.removePaymentCash').prop('checked');
	if(removePaymentCash != null && removePaymentCash !== '')
		vals['removePaymentCash'] = removePaymentCash;

	var removePaymentCheck = $formFilters.find('.removePaymentCheck').val() === 'true';
	var setPaymentCheck = removePaymentCheck ? null : $formValues.find('.setPaymentCheck').prop('checked');
	if(removePaymentCheck || setPaymentCheck != null && setPaymentCheck !== '')
		vals['setPaymentCheck'] = setPaymentCheck;
	var addPaymentCheck = $formValues.find('.addPaymentCheck').prop('checked');
	if(addPaymentCheck != null && addPaymentCheck !== '')
		vals['addPaymentCheck'] = addPaymentCheck;
	var removePaymentCheck = $formValues.find('.removePaymentCheck').prop('checked');
	if(removePaymentCheck != null && removePaymentCheck !== '')
		vals['removePaymentCheck'] = removePaymentCheck;

	var removePaymentDescription = $formFilters.find('.removePaymentDescription').val() === 'true';
	var setPaymentDescription = removePaymentDescription ? null : $formValues.find('.setPaymentDescription').val();
	if(removePaymentDescription || setPaymentDescription != null && setPaymentDescription !== '')
		vals['setPaymentDescription'] = setPaymentDescription;
	var addPaymentDescription = $formValues.find('.addPaymentDescription').val();
	if(addPaymentDescription != null && addPaymentDescription !== '')
		vals['addPaymentDescription'] = addPaymentDescription;
	var removePaymentDescription = $formValues.find('.removePaymentDescription').val();
	if(removePaymentDescription != null && removePaymentDescription !== '')
		vals['removePaymentDescription'] = removePaymentDescription;

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

	var removePaymentCompleteName = $formFilters.find('.removePaymentCompleteName').val() === 'true';
	var setPaymentCompleteName = removePaymentCompleteName ? null : $formValues.find('.setPaymentCompleteName').val();
	if(removePaymentCompleteName || setPaymentCompleteName != null && setPaymentCompleteName !== '')
		vals['setPaymentCompleteName'] = setPaymentCompleteName;
	var addPaymentCompleteName = $formValues.find('.addPaymentCompleteName').val();
	if(addPaymentCompleteName != null && addPaymentCompleteName !== '')
		vals['addPaymentCompleteName'] = addPaymentCompleteName;
	var removePaymentCompleteName = $formValues.find('.removePaymentCompleteName').val();
	if(removePaymentCompleteName != null && removePaymentCompleteName !== '')
		vals['removePaymentCompleteName'] = removePaymentCompleteName;

	patchSchoolPaymentVals(filters, vals, success, error);
}

function patchSchoolPaymentFilters($formFilters) {
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

	var filterPaymentId = $formFilters.find('.valuePaymentId').val();
	if(filterPaymentId != null && filterPaymentId !== '')
		filters.push({ name: 'fq', value: 'paymentId:' + filterPaymentId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterPaymentDate = $formFilters.find('.valuePaymentDate').val();
	if(filterPaymentDate != null && filterPaymentDate !== '')
		filters.push({ name: 'fq', value: 'paymentDate:' + filterPaymentDate });

	var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
	if(filterPaymentAmount != null && filterPaymentAmount !== '')
		filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

	var filterPaymentCash = $formFilters.find('.valuePaymentCash').prop('checked');
	if(filterPaymentCash != null && filterPaymentCash === true)
		filters.push({ name: 'fq', value: 'paymentCash:' + filterPaymentCash });

	var filterPaymentCheck = $formFilters.find('.valuePaymentCheck').prop('checked');
	if(filterPaymentCheck != null && filterPaymentCheck === true)
		filters.push({ name: 'fq', value: 'paymentCheck:' + filterPaymentCheck });

	var filterPaymentDescription = $formFilters.find('.valuePaymentDescription').val();
	if(filterPaymentDescription != null && filterPaymentDescription !== '')
		filters.push({ name: 'fq', value: 'paymentDescription:' + filterPaymentDescription });

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

	var filterSchoolKeys = $formFilters.find('.valueSchoolKeys').val();
	if(filterSchoolKeys != null && filterSchoolKeys !== '')
		filters.push({ name: 'fq', value: 'schoolKeys:' + filterSchoolKeys });

	var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
	if(filterSeasonKeys != null && filterSeasonKeys !== '')
		filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

	var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
	if(filterSessionKeys != null && filterSessionKeys !== '')
		filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

	var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
	if(filterAgeKeys != null && filterAgeKeys !== '')
		filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

	var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
	if(filterBlockKeys != null && filterBlockKeys !== '')
		filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

	var filterPaymentKey = $formFilters.find('.valuePaymentKey').val();
	if(filterPaymentKey != null && filterPaymentKey !== '')
		filters.push({ name: 'fq', value: 'paymentKey:' + filterPaymentKey });

	var filterChildKeys = $formFilters.find('.valueChildKeys').val();
	if(filterChildKeys != null && filterChildKeys !== '')
		filters.push({ name: 'fq', value: 'childKeys:' + filterChildKeys });

	var filterMomKeys = $formFilters.find('.valueMomKeys').val();
	if(filterMomKeys != null && filterMomKeys !== '')
		filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

	var filterDadKeys = $formFilters.find('.valueDadKeys').val();
	if(filterDadKeys != null && filterDadKeys !== '')
		filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

	var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
	if(filterGuardianKeys != null && filterGuardianKeys !== '')
		filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

	var filterContactKeys = $formFilters.find('.valueContactKeys').val();
	if(filterContactKeys != null && filterContactKeys !== '')
		filters.push({ name: 'fq', value: 'contactKeys:' + filterContactKeys });

	var filterPaymentSystem = $formFilters.find('.valuePaymentSystem').prop('checked');
	if(filterPaymentSystem != null && filterPaymentSystem === true)
		filters.push({ name: 'fq', value: 'paymentSystem:' + filterPaymentSystem });

	var filterPaymentCompleteName = $formFilters.find('.valuePaymentCompleteName').val();
	if(filterPaymentCompleteName != null && filterPaymentCompleteName !== '')
		filters.push({ name: 'fq', value: 'paymentCompleteName:' + filterPaymentCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
	return filters;
}

function patchSchoolPaymentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolPaymentVals(filters, vals, success, error);
}

function patchSchoolPaymentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/payment?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getSchoolPayment(pk) {
	$.ajax({
		url: '/api/payment/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteSchoolPayment(pk) {
	$.ajax({
		url: '/api/payment/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

function searchSchoolPayment($formFilters, success, error) {
	var filters = searchSchoolPaymentFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolPaymentVals(filters, success, error);
}

function searchSchoolPaymentFilters($formFilters) {
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

	var filterPaymentId = $formFilters.find('.valuePaymentId').val();
	if(filterPaymentId != null && filterPaymentId !== '')
		filters.push({ name: 'fq', value: 'paymentId:' + filterPaymentId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterPaymentDate = $formFilters.find('.valuePaymentDate').val();
	if(filterPaymentDate != null && filterPaymentDate !== '')
		filters.push({ name: 'fq', value: 'paymentDate:' + filterPaymentDate });

	var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
	if(filterPaymentAmount != null && filterPaymentAmount !== '')
		filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

	var filterPaymentCash = $formFilters.find('.valuePaymentCash').prop('checked');
	if(filterPaymentCash != null && filterPaymentCash === true)
		filters.push({ name: 'fq', value: 'paymentCash:' + filterPaymentCash });

	var filterPaymentCheck = $formFilters.find('.valuePaymentCheck').prop('checked');
	if(filterPaymentCheck != null && filterPaymentCheck === true)
		filters.push({ name: 'fq', value: 'paymentCheck:' + filterPaymentCheck });

	var filterPaymentDescription = $formFilters.find('.valuePaymentDescription').val();
	if(filterPaymentDescription != null && filterPaymentDescription !== '')
		filters.push({ name: 'fq', value: 'paymentDescription:' + filterPaymentDescription });

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

	var filterSchoolKeys = $formFilters.find('.valueSchoolKeys').val();
	if(filterSchoolKeys != null && filterSchoolKeys !== '')
		filters.push({ name: 'fq', value: 'schoolKeys:' + filterSchoolKeys });

	var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
	if(filterSeasonKeys != null && filterSeasonKeys !== '')
		filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

	var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
	if(filterSessionKeys != null && filterSessionKeys !== '')
		filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

	var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
	if(filterAgeKeys != null && filterAgeKeys !== '')
		filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

	var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
	if(filterBlockKeys != null && filterBlockKeys !== '')
		filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

	var filterPaymentKey = $formFilters.find('.valuePaymentKey').val();
	if(filterPaymentKey != null && filterPaymentKey !== '')
		filters.push({ name: 'fq', value: 'paymentKey:' + filterPaymentKey });

	var filterChildKeys = $formFilters.find('.valueChildKeys').val();
	if(filterChildKeys != null && filterChildKeys !== '')
		filters.push({ name: 'fq', value: 'childKeys:' + filterChildKeys });

	var filterMomKeys = $formFilters.find('.valueMomKeys').val();
	if(filterMomKeys != null && filterMomKeys !== '')
		filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

	var filterDadKeys = $formFilters.find('.valueDadKeys').val();
	if(filterDadKeys != null && filterDadKeys !== '')
		filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

	var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
	if(filterGuardianKeys != null && filterGuardianKeys !== '')
		filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

	var filterContactKeys = $formFilters.find('.valueContactKeys').val();
	if(filterContactKeys != null && filterContactKeys !== '')
		filters.push({ name: 'fq', value: 'contactKeys:' + filterContactKeys });

	var filterPaymentSystem = $formFilters.find('.valuePaymentSystem').prop('checked');
	if(filterPaymentSystem != null && filterPaymentSystem === true)
		filters.push({ name: 'fq', value: 'paymentSystem:' + filterPaymentSystem });

	var filterPaymentCompleteName = $formFilters.find('.valuePaymentCompleteName').val();
	if(filterPaymentCompleteName != null && filterPaymentCompleteName !== '')
		filters.push({ name: 'fq', value: 'paymentCompleteName:' + filterPaymentCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
	return filters;
}

function searchSchoolPaymentVals(filters, success, error) {
	$.ajax({
		url: '/api/payment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolPaymentEnrollmentKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolPaymentForm :input[name="pk"]').val());
			var val = o['paymentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_paymentKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_paymentKeys_" + o['pk'] + "'); patchSchoolPaymentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
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

function suggestSchoolPaymentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-search-dollar w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['paymentCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolPaymentVals($formFilters, success, error);
}

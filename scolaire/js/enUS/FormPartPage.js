
// POST //

function postFormPart($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
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

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueEnrollmentFormKey = $formValues.find('.valueEnrollmentFormKey').val();
	if(valueEnrollmentFormKey != null && valueEnrollmentFormKey !== '')
		vals['enrollmentFormKey'] = valueEnrollmentFormKey;

	var valueHtmlOrder = $formValues.find('.valueHtmlOrder').val();
	if(valueHtmlOrder != null && valueHtmlOrder !== '')
		vals['htmlOrder'] = valueHtmlOrder;

	var valueHtmlAvant = $formValues.find('.valueHtmlAvant').val();
	if(valueHtmlAvant != null && valueHtmlAvant !== '')
		vals['htmlAvant'] = valueHtmlAvant;

	var valueHtmlElement = $formValues.find('.valueHtmlElement').val();
	if(valueHtmlElement != null && valueHtmlElement !== '')
		vals['htmlElement'] = valueHtmlElement;

	var valueHtmlId = $formValues.find('.valueHtmlId').val();
	if(valueHtmlId != null && valueHtmlId !== '')
		vals['htmlId'] = valueHtmlId;

	var valueHtmlClasses = $formValues.find('.valueHtmlClasses').val();
	if(valueHtmlClasses != null && valueHtmlClasses !== '')
		vals['htmlClasses'] = valueHtmlClasses;

	var valueHtmlElement = $formValues.find('.valueHtmlElement').val();
	if(valueHtmlElement != null && valueHtmlElement !== '')
		vals['htmlElement'] = valueHtmlElement;

	var valueHtmlAvant = $formValues.find('.valueHtmlAvant').val();
	if(valueHtmlAvant != null && valueHtmlAvant !== '')
		vals['htmlAvant'] = valueHtmlAvant;

	var valueHtmlAvant = $formValues.find('.valueHtmlAvant').val();
	if(valueHtmlAvant != null && valueHtmlAvant !== '')
		vals['htmlAvant'] = valueHtmlAvant;

	var valueHtmlAvant = $formValues.find('.valueHtmlAvant').val();
	if(valueHtmlAvant != null && valueHtmlAvant !== '')
		vals['htmlAvant'] = valueHtmlAvant;

	$.ajax({
		url: '/api/form-part'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postFormPartVals(vals, success, error) {
	$.ajax({
		url: '/api/form-part'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchFormPart($formFilters, $formValues, success, error) {
	var filters = patchFormPartFilters($formFilters);

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

	var removeEnrollmentFormKey = $formFilters.find('.removeEnrollmentFormKey').val() === 'true';
	var setEnrollmentFormKey = removeEnrollmentFormKey ? null : $formValues.find('.setEnrollmentFormKey').val();
	if(removeEnrollmentFormKey || setEnrollmentFormKey != null && setEnrollmentFormKey !== '')
		vals['setEnrollmentFormKey'] = setEnrollmentFormKey;
	var addEnrollmentFormKey = $formValues.find('.addEnrollmentFormKey').val();
	if(addEnrollmentFormKey != null && addEnrollmentFormKey !== '')
		vals['addEnrollmentFormKey'] = addEnrollmentFormKey;
	var removeEnrollmentFormKey = $formValues.find('.removeEnrollmentFormKey').val();
	if(removeEnrollmentFormKey != null && removeEnrollmentFormKey !== '')
		vals['removeEnrollmentFormKey'] = removeEnrollmentFormKey;

	var removeHtmlOrder = $formFilters.find('.removeHtmlOrder').val() === 'true';
	var setHtmlOrder = removeHtmlOrder ? null : $formValues.find('.setHtmlOrder').val();
	if(removeHtmlOrder || setHtmlOrder != null && setHtmlOrder !== '')
		vals['setHtmlOrder'] = setHtmlOrder;
	var addHtmlOrder = $formValues.find('.addHtmlOrder').val();
	if(addHtmlOrder != null && addHtmlOrder !== '')
		vals['addHtmlOrder'] = addHtmlOrder;
	var removeHtmlOrder = $formValues.find('.removeHtmlOrder').val();
	if(removeHtmlOrder != null && removeHtmlOrder !== '')
		vals['removeHtmlOrder'] = removeHtmlOrder;

	var removeHtmlAvant = $formFilters.find('.removeHtmlAvant').val() === 'true';
	var setHtmlAvant = removeHtmlAvant ? null : $formValues.find('.setHtmlAvant').val();
	if(removeHtmlAvant || setHtmlAvant != null && setHtmlAvant !== '')
		vals['setHtmlAvant'] = setHtmlAvant;
	var addHtmlAvant = $formValues.find('.addHtmlAvant').val();
	if(addHtmlAvant != null && addHtmlAvant !== '')
		vals['addHtmlAvant'] = addHtmlAvant;
	var removeHtmlAvant = $formValues.find('.removeHtmlAvant').val();
	if(removeHtmlAvant != null && removeHtmlAvant !== '')
		vals['removeHtmlAvant'] = removeHtmlAvant;

	var removeHtmlElement = $formFilters.find('.removeHtmlElement').val() === 'true';
	var setHtmlElement = removeHtmlElement ? null : $formValues.find('.setHtmlElement').val();
	if(removeHtmlElement || setHtmlElement != null && setHtmlElement !== '')
		vals['setHtmlElement'] = setHtmlElement;
	var addHtmlElement = $formValues.find('.addHtmlElement').val();
	if(addHtmlElement != null && addHtmlElement !== '')
		vals['addHtmlElement'] = addHtmlElement;
	var removeHtmlElement = $formValues.find('.removeHtmlElement').val();
	if(removeHtmlElement != null && removeHtmlElement !== '')
		vals['removeHtmlElement'] = removeHtmlElement;

	var removeHtmlId = $formFilters.find('.removeHtmlId').val() === 'true';
	var setHtmlId = removeHtmlId ? null : $formValues.find('.setHtmlId').val();
	if(removeHtmlId || setHtmlId != null && setHtmlId !== '')
		vals['setHtmlId'] = setHtmlId;
	var addHtmlId = $formValues.find('.addHtmlId').val();
	if(addHtmlId != null && addHtmlId !== '')
		vals['addHtmlId'] = addHtmlId;
	var removeHtmlId = $formValues.find('.removeHtmlId').val();
	if(removeHtmlId != null && removeHtmlId !== '')
		vals['removeHtmlId'] = removeHtmlId;

	var removeHtmlClasses = $formFilters.find('.removeHtmlClasses').val() === 'true';
	var setHtmlClasses = removeHtmlClasses ? null : $formValues.find('.setHtmlClasses').val();
	if(removeHtmlClasses || setHtmlClasses != null && setHtmlClasses !== '')
		vals['setHtmlClasses'] = setHtmlClasses;
	var addHtmlClasses = $formValues.find('.addHtmlClasses').val();
	if(addHtmlClasses != null && addHtmlClasses !== '')
		vals['addHtmlClasses'] = addHtmlClasses;
	var removeHtmlClasses = $formValues.find('.removeHtmlClasses').val();
	if(removeHtmlClasses != null && removeHtmlClasses !== '')
		vals['removeHtmlClasses'] = removeHtmlClasses;

	var removeHtmlElement = $formFilters.find('.removeHtmlElement').val() === 'true';
	var setHtmlElement = removeHtmlElement ? null : $formValues.find('.setHtmlElement').val();
	if(removeHtmlElement || setHtmlElement != null && setHtmlElement !== '')
		vals['setHtmlElement'] = setHtmlElement;
	var addHtmlElement = $formValues.find('.addHtmlElement').val();
	if(addHtmlElement != null && addHtmlElement !== '')
		vals['addHtmlElement'] = addHtmlElement;
	var removeHtmlElement = $formValues.find('.removeHtmlElement').val();
	if(removeHtmlElement != null && removeHtmlElement !== '')
		vals['removeHtmlElement'] = removeHtmlElement;

	var removeHtmlAvant = $formFilters.find('.removeHtmlAvant').val() === 'true';
	var setHtmlAvant = removeHtmlAvant ? null : $formValues.find('.setHtmlAvant').val();
	if(removeHtmlAvant || setHtmlAvant != null && setHtmlAvant !== '')
		vals['setHtmlAvant'] = setHtmlAvant;
	var addHtmlAvant = $formValues.find('.addHtmlAvant').val();
	if(addHtmlAvant != null && addHtmlAvant !== '')
		vals['addHtmlAvant'] = addHtmlAvant;
	var removeHtmlAvant = $formValues.find('.removeHtmlAvant').val();
	if(removeHtmlAvant != null && removeHtmlAvant !== '')
		vals['removeHtmlAvant'] = removeHtmlAvant;

	var removeHtmlAvant = $formFilters.find('.removeHtmlAvant').val() === 'true';
	var setHtmlAvant = removeHtmlAvant ? null : $formValues.find('.setHtmlAvant').val();
	if(removeHtmlAvant || setHtmlAvant != null && setHtmlAvant !== '')
		vals['setHtmlAvant'] = setHtmlAvant;
	var addHtmlAvant = $formValues.find('.addHtmlAvant').val();
	if(addHtmlAvant != null && addHtmlAvant !== '')
		vals['addHtmlAvant'] = addHtmlAvant;
	var removeHtmlAvant = $formValues.find('.removeHtmlAvant').val();
	if(removeHtmlAvant != null && removeHtmlAvant !== '')
		vals['removeHtmlAvant'] = removeHtmlAvant;

	var removeHtmlAvant = $formFilters.find('.removeHtmlAvant').val() === 'true';
	var setHtmlAvant = removeHtmlAvant ? null : $formValues.find('.setHtmlAvant').val();
	if(removeHtmlAvant || setHtmlAvant != null && setHtmlAvant !== '')
		vals['setHtmlAvant'] = setHtmlAvant;
	var addHtmlAvant = $formValues.find('.addHtmlAvant').val();
	if(addHtmlAvant != null && addHtmlAvant !== '')
		vals['addHtmlAvant'] = addHtmlAvant;
	var removeHtmlAvant = $formValues.find('.removeHtmlAvant').val();
	if(removeHtmlAvant != null && removeHtmlAvant !== '')
		vals['removeHtmlAvant'] = removeHtmlAvant;

	patchFormPartVals(filters, vals, success, error);
}

function patchFormPartFilters($formFilters) {
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

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
	if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

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

	var filterFormPartKey = $formFilters.find('.valueFormPartKey').val();
	if(filterFormPartKey != null && filterFormPartKey !== '')
		filters.push({ name: 'fq', value: 'formPartKey:' + filterFormPartKey });
	return filters;
}

function patchFormPartVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchFormPartVals(filters, vals, success, error);
}

function patchFormPartVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/form-part?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getFormPart(pk) {
	$.ajax({
		url: '/api/form-part/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteFormPart(pk) {
	$.ajax({
		url: '/api/form-part/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

function searchFormPart($formFilters, success, error) {
	var filters = searchFormPartFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchFormPartVals(filters, success, error);
}

function searchFormPartFilters($formFilters) {
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

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
	if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

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

	var filterFormPartKey = $formFilters.find('.valueFormPartKey').val();
	if(filterFormPartKey != null && filterFormPartKey !== '')
		filters.push({ name: 'fq', value: 'formPartKey:' + filterFormPartKey });
	return filters;
}

function searchFormPartVals(filters, success, error) {
	$.ajax({
		url: '/api/form-part?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

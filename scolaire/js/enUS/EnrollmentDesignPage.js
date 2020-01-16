
// POST //

async function postEnrollmentDesign($formValues, success, error) {
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

	var valueEnrollmentDesignCompleteName = $formValues.find('.valueEnrollmentDesignCompleteName').val();
	if(valueEnrollmentDesignCompleteName != null && valueEnrollmentDesignCompleteName !== '')
		vals['enrollmentDesignCompleteName'] = valueEnrollmentDesignCompleteName;

	var valueHtmlPartKeys = $formValues.find('.valueHtmlPartKeys').val();
	if(valueHtmlPartKeys != null && valueHtmlPartKeys !== '')
		vals['htmlPartKeys'] = valueHtmlPartKeys;

	var valueEnrollmentKeys = $formValues.find('.valueEnrollmentKeys').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	$.ajax({
		url: '/api/enrollment-design'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postEnrollmentDesignVals(vals, success, error) {
	$.ajax({
		url: '/api/enrollment-design'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchEnrollmentDesign($formFilters, $formValues, success, error) {
	var filters = patchEnrollmentDesignFilters($formFilters);

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

	var removeEnrollmentDesignCompleteName = $formFilters.find('.removeEnrollmentDesignCompleteName').val() === 'true';
	var setEnrollmentDesignCompleteName = removeEnrollmentDesignCompleteName ? null : $formValues.find('.setEnrollmentDesignCompleteName').val();
	if(removeEnrollmentDesignCompleteName || setEnrollmentDesignCompleteName != null && setEnrollmentDesignCompleteName !== '')
		vals['setEnrollmentDesignCompleteName'] = setEnrollmentDesignCompleteName;
	var addEnrollmentDesignCompleteName = $formValues.find('.addEnrollmentDesignCompleteName').val();
	if(addEnrollmentDesignCompleteName != null && addEnrollmentDesignCompleteName !== '')
		vals['addEnrollmentDesignCompleteName'] = addEnrollmentDesignCompleteName;
	var removeEnrollmentDesignCompleteName = $formValues.find('.removeEnrollmentDesignCompleteName').val();
	if(removeEnrollmentDesignCompleteName != null && removeEnrollmentDesignCompleteName !== '')
		vals['removeEnrollmentDesignCompleteName'] = removeEnrollmentDesignCompleteName;

	var removeHtmlPartKeys = $formFilters.find('.removeHtmlPartKeys').val() === 'true';
	var setHtmlPartKeys = removeHtmlPartKeys ? null : $formValues.find('.setHtmlPartKeys').val();
	if(removeHtmlPartKeys || setHtmlPartKeys != null && setHtmlPartKeys !== '')
		vals['setHtmlPartKeys'] = setHtmlPartKeys;
	var addHtmlPartKeys = $formValues.find('.addHtmlPartKeys').val();
	if(addHtmlPartKeys != null && addHtmlPartKeys !== '')
		vals['addHtmlPartKeys'] = addHtmlPartKeys;
	var removeHtmlPartKeys = $formValues.find('.removeHtmlPartKeys').val();
	if(removeHtmlPartKeys != null && removeHtmlPartKeys !== '')
		vals['removeHtmlPartKeys'] = removeHtmlPartKeys;

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

	patchEnrollmentDesignVals(filters, vals, success, error);
}

function patchEnrollmentDesignFilters($formFilters) {
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

	var filterEnrollmentDesignCompleteName = $formFilters.find('.valueEnrollmentDesignCompleteName').val();
	if(filterEnrollmentDesignCompleteName != null && filterEnrollmentDesignCompleteName !== '')
		filters.push({ name: 'fq', value: 'enrollmentDesignCompleteName:' + filterEnrollmentDesignCompleteName });

	var filterHtmlPartKeys = $formFilters.find('.valueHtmlPartKeys').val();
	if(filterHtmlPartKeys != null && filterHtmlPartKeys !== '')
		filters.push({ name: 'fq', value: 'htmlPartKeys:' + filterHtmlPartKeys });

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

	var filterSessionId = $formFilters.find('.valueSessionId').val();
	if(filterSessionId != null && filterSessionId !== '')
		filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

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

	var filterEnrollmentDesignKey = $formFilters.find('.valueEnrollmentDesignKey').val();
	if(filterEnrollmentDesignKey != null && filterEnrollmentDesignKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentDesignKey:' + filterEnrollmentDesignKey });

	var filterYearKey = $formFilters.find('.valueYearKey').val();
	if(filterYearKey != null && filterYearKey !== '')
		filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

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

	var filterYearShortName = $formFilters.find('.valueYearShortName').val();
	if(filterYearShortName != null && filterYearShortName !== '')
		filters.push({ name: 'fq', value: 'yearShortName:' + filterYearShortName });

	var filterYearCompleteName = $formFilters.find('.valueYearCompleteName').val();
	if(filterYearCompleteName != null && filterYearCompleteName !== '')
		filters.push({ name: 'fq', value: 'yearCompleteName:' + filterYearCompleteName });
	return filters;
}

function patchEnrollmentDesignVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchEnrollmentDesignVals(filters, vals, success, error);
}

function patchEnrollmentDesignVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/enrollment-design?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getEnrollmentDesign(pk) {
	$.ajax({
		url: '/api/enrollment-design/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

async function deleteEnrollmentDesign(pk) {
	$.ajax({
		url: '/api/enrollment-design/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

async function searchEnrollmentDesign($formFilters, success, error) {
	var filters = searchEnrollmentDesignFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchEnrollmentDesignVals(filters, success, error);
}

function searchEnrollmentDesignFilters($formFilters) {
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

	var filterEnrollmentDesignCompleteName = $formFilters.find('.valueEnrollmentDesignCompleteName').val();
	if(filterEnrollmentDesignCompleteName != null && filterEnrollmentDesignCompleteName !== '')
		filters.push({ name: 'fq', value: 'enrollmentDesignCompleteName:' + filterEnrollmentDesignCompleteName });

	var filterHtmlPartKeys = $formFilters.find('.valueHtmlPartKeys').val();
	if(filterHtmlPartKeys != null && filterHtmlPartKeys !== '')
		filters.push({ name: 'fq', value: 'htmlPartKeys:' + filterHtmlPartKeys });

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

	var filterSessionId = $formFilters.find('.valueSessionId').val();
	if(filterSessionId != null && filterSessionId !== '')
		filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

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

	var filterEnrollmentDesignKey = $formFilters.find('.valueEnrollmentDesignKey').val();
	if(filterEnrollmentDesignKey != null && filterEnrollmentDesignKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentDesignKey:' + filterEnrollmentDesignKey });

	var filterYearKey = $formFilters.find('.valueYearKey').val();
	if(filterYearKey != null && filterYearKey !== '')
		filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

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

	var filterYearShortName = $formFilters.find('.valueYearShortName').val();
	if(filterYearShortName != null && filterYearShortName !== '')
		filters.push({ name: 'fq', value: 'yearShortName:' + filterYearShortName });

	var filterYearCompleteName = $formFilters.find('.valueYearCompleteName').val();
	if(filterYearCompleteName != null && filterYearCompleteName !== '')
		filters.push({ name: 'fq', value: 'yearCompleteName:' + filterYearCompleteName });
	return filters;
}

function searchEnrollmentDesignVals(filters, success, error) {
	$.ajax({
		url: '/api/enrollment-design?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestEnrollmentDesignObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-bell w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentDesignCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchEnrollmentDesignVals($formFilters, success, error);
}

function suggestEnrollmentDesignHtmlPartKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentDesignKey'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_htmlPartKeys_' + pk + '_enrollmentDesignKey_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_htmlPartKeys_" + pk + "_enrollmentDesignKey_" + o['pk'] + "'); patchEnrollmentDesignVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'HtmlPartKeys']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			var sort1 = o['sort1'];
			var sort2 = o['sort2'];
			var sort3 = o['sort3'];
			var sort4 = o['sort4'];
			var sort5 = o['sort5'];
			var sort6 = o['sort6'];
			var sort7 = o['sort7'];
			var sort8 = o['sort8'];
			var sort9 = o['sort9'];
			var sort10 = o['sort10'];

			$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
			var $sortInput = $('<input>')
			$sortInput.attr('class', 'w3-tiny ');
			$sortInput.attr('style', 'width: 4em; ');
			$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort1");
			$sortInput.attr('value', sort1).attr('onchange', 
				"$('#EnrollmentDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
				+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort1']: $(this).val() ? $(this).val() : null }"
					+ ", function() { "
					+ "}"
					+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort1')); }"
					+ " ); "); 
			$sort.append($sortInput);
			$li.append($sort);

			if(sort1 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort2");
				$sortInput.attr('value', sort2).attr('onchange', 
					"$('#EnrollmentDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort2']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort2')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort2 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort3");
				$sortInput.attr('value', sort3).attr('onchange', 
					"$('#EnrollmentDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort3']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort3')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort3 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort4");
				$sortInput.attr('value', sort4).attr('onchange', 
					"$('#EnrollmentDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort4']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort4')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort4 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort5");
				$sortInput.attr('value', sort5).attr('onchange', 
					"$('#EnrollmentDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort5']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort5')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort5 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort6");
				$sortInput.attr('value', sort6).attr('onchange', 
					"$('#EnrollmentDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort6']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort6')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort6 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort7");
				$sortInput.attr('value', sort7).attr('onchange', 
					"$('#EnrollmentDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort7']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort7')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort7 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort8");
				$sortInput.attr('value', sort8).attr('onchange', 
					"$('#EnrollmentDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort8']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort8')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort8 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort9");
				$sortInput.attr('value', sort9).attr('onchange', 
					"$('#EnrollmentDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort9']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort9')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort9 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort10");
				$sortInput.attr('value', sort10).attr('onchange', 
					"$('#EnrollmentDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort10']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort10')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}
			$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#EnrollmentDesignForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchHtmlPartVals(filters, success, error);
}

async function websocketEnrollmentDesign(success) {
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {

		eventBus.registerHandler('websocketEnrollmentDesign', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pks = json['pks'];
			var empty = json['empty'];
			if(!empty) {
				var numFound = json['numFound'];
				var numPATCH = json['numPATCH'];
				var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
				var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
				var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
				var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
				var $header = $('<div>').attr('class', 'w3-container fa-indigo ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'far fa-bell w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modify enrollment designs');
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
			}
		});

		eventBus.registerHandler('websocketHtmlPart', function (error, message) {
			$('#Page_htmlPartKeys').trigger('oninput');
		});
	}
}

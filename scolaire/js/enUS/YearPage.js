
// POST //

function postSchoolYear($formValues, success, error) {
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

	var valueYearId = $formValues.find('.valueYearId').val();
	if(valueYearId != null && valueYearId !== '')
		vals['yearId'] = valueYearId;

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

	var valueSchoolKey = $formValues.find('.valueSchoolKey').val();
	if(valueSchoolKey != null && valueSchoolKey !== '')
		vals['schoolKey'] = valueSchoolKey;

	var valueSeasonKeys = $formValues.find('.valueSeasonKeys').val();
	if(valueSeasonKeys != null && valueSeasonKeys !== '')
		vals['seasonKeys'] = valueSeasonKeys;

	var valueYearCompleteName = $formValues.find('.valueYearCompleteName').val();
	if(valueYearCompleteName != null && valueYearCompleteName !== '')
		vals['yearCompleteName'] = valueYearCompleteName;

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

// PATCH //

function patchSchoolYear($formFilters, $formValues, success, error) {
	var filters = patchSchoolYearFilters($formFilters);

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

	var removeYearId = $formFilters.find('.removeYearId').val() === 'true';
	var setYearId = removeYearId ? null : $formValues.find('.setYearId').val();
	if(removeYearId || setYearId != null && setYearId !== '')
		vals['setYearId'] = setYearId;
	var addYearId = $formValues.find('.addYearId').val();
	if(addYearId != null && addYearId !== '')
		vals['addYearId'] = addYearId;
	var removeYearId = $formValues.find('.removeYearId').val();
	if(removeYearId != null && removeYearId !== '')
		vals['removeYearId'] = removeYearId;

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

	var removeSchoolKey = $formFilters.find('.removeSchoolKey').val() === 'true';
	var setSchoolKey = removeSchoolKey ? null : $formValues.find('.setSchoolKey').val();
	if(removeSchoolKey || setSchoolKey != null && setSchoolKey !== '')
		vals['setSchoolKey'] = setSchoolKey;
	var addSchoolKey = $formValues.find('.addSchoolKey').val();
	if(addSchoolKey != null && addSchoolKey !== '')
		vals['addSchoolKey'] = addSchoolKey;
	var removeSchoolKey = $formValues.find('.removeSchoolKey').val();
	if(removeSchoolKey != null && removeSchoolKey !== '')
		vals['removeSchoolKey'] = removeSchoolKey;

	var removeSeasonKeys = $formFilters.find('.removeSeasonKeys').val() === 'true';
	var setSeasonKeys = removeSeasonKeys ? null : $formValues.find('.setSeasonKeys').val();
	if(removeSeasonKeys || setSeasonKeys != null && setSeasonKeys !== '')
		vals['setSeasonKeys'] = setSeasonKeys;
	var addSeasonKeys = $formValues.find('.addSeasonKeys').val();
	if(addSeasonKeys != null && addSeasonKeys !== '')
		vals['addSeasonKeys'] = addSeasonKeys;
	var removeSeasonKeys = $formValues.find('.removeSeasonKeys').val();
	if(removeSeasonKeys != null && removeSeasonKeys !== '')
		vals['removeSeasonKeys'] = removeSeasonKeys;

	var removeYearCompleteName = $formFilters.find('.removeYearCompleteName').val() === 'true';
	var setYearCompleteName = removeYearCompleteName ? null : $formValues.find('.setYearCompleteName').val();
	if(removeYearCompleteName || setYearCompleteName != null && setYearCompleteName !== '')
		vals['setYearCompleteName'] = setYearCompleteName;
	var addYearCompleteName = $formValues.find('.addYearCompleteName').val();
	if(addYearCompleteName != null && addYearCompleteName !== '')
		vals['addYearCompleteName'] = addYearCompleteName;
	var removeYearCompleteName = $formValues.find('.removeYearCompleteName').val();
	if(removeYearCompleteName != null && removeYearCompleteName !== '')
		vals['removeYearCompleteName'] = removeYearCompleteName;

	patchSchoolYearVals(filters, vals, success, error);
}

function patchSchoolYearFilters($formFilters) {
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

	var filterYearId = $formFilters.find('.valueYearId').val();
	if(filterYearId != null && filterYearId !== '')
		filters.push({ name: 'fq', value: 'yearId:' + filterYearId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterYearStart = $formFilters.find('.valueYearStart').val();
	if(filterYearStart != null && filterYearStart !== '')
		filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

	var filterYearEnd = $formFilters.find('.valueYearEnd').val();
	if(filterYearEnd != null && filterYearEnd !== '')
		filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

	var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
	if(filterSeasonKeys != null && filterSeasonKeys !== '')
		filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

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

	var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
	if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
		filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

	var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
	if(filterSchoolLocation != null && filterSchoolLocation !== '')
		filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

	var filterYearShortName = $formFilters.find('.valueYearShortName').val();
	if(filterYearShortName != null && filterYearShortName !== '')
		filters.push({ name: 'fq', value: 'yearShortName:' + filterYearShortName });

	var filterYearCompleteName = $formFilters.find('.valueYearCompleteName').val();
	if(filterYearCompleteName != null && filterYearCompleteName !== '')
		filters.push({ name: 'fq', value: 'yearCompleteName:' + filterYearCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
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

function getSchoolYear(pk) {
	$.ajax({
		url: '/api/year/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteSchoolYear(pk) {
	$.ajax({
		url: '/api/year/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

function searchSchoolYear($formFilters, success, error) {
	var filters = searchSchoolYearFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolYearVals(filters, success, error);
}

function searchSchoolYearFilters($formFilters) {
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

	var filterYearId = $formFilters.find('.valueYearId').val();
	if(filterYearId != null && filterYearId !== '')
		filters.push({ name: 'fq', value: 'yearId:' + filterYearId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterYearStart = $formFilters.find('.valueYearStart').val();
	if(filterYearStart != null && filterYearStart !== '')
		filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

	var filterYearEnd = $formFilters.find('.valueYearEnd').val();
	if(filterYearEnd != null && filterYearEnd !== '')
		filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

	var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
	if(filterSchoolKey != null && filterSchoolKey !== '')
		filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

	var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
	if(filterSeasonKeys != null && filterSeasonKeys !== '')
		filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

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

	var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
	if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
		filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

	var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
	if(filterSchoolLocation != null && filterSchoolLocation !== '')
		filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

	var filterYearShortName = $formFilters.find('.valueYearShortName').val();
	if(filterYearShortName != null && filterYearShortName !== '')
		filters.push({ name: 'fq', value: 'yearShortName:' + filterYearShortName });

	var filterYearCompleteName = $formFilters.find('.valueYearCompleteName').val();
	if(filterYearCompleteName != null && filterYearCompleteName !== '')
		filters.push({ name: 'fq', value: 'yearCompleteName:' + filterYearCompleteName });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });
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

function suggestSchoolYearSchoolKey($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-school w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['schoolCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolYearForm :input[name="pk"]').val());
			var val = o['yearKeys'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_schoolKey_' + pk + '_yearKeys_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_schoolKey_" + pk + "_yearKeys_" + o['pk'] + "'); patchSchoolYearVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SchoolKey']: \"" + o['pk'] + "\" }, function() { patchSchoolVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
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
	searchSchool($formFilters, success, error);
}

function suggestSchoolYearSeasonKeys($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['seasonCompleteName']);
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			var pk = parseInt($('#SchoolYearForm :input[name="pk"]').val());
			var val = o['yearKey'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_seasonKeys_' + pk + '_yearKey_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_seasonKeys_" + pk + "_yearKey_" + o['pk'] + "'); patchSchoolYearVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SeasonKeys']: \"" + o['pk'] + "\" }, function() { patchSchoolSeasonVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], {}, function() { addGlow($input); }, function() { addError($input); } ); } ); ");
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
	searchSchoolSeason($formFilters, success, error);
}

function suggestSchoolYearObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-calendar-check w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['yearCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolYearVals($formFilters, success, error);
}

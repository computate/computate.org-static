
// POST //

async function postHtmlPart($formValues, success, error) {
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

	var valuePageDesignKeys = [];
	$formValues.find('input.valuePageDesignKeys:checked').each(function(index) {
		valuePageDesignKeys.push($(this).val());
	});
	if(valuePageDesignKeys.length > 0)
		vals['pageDesignKeys'] = valuePageDesignKeys;

	var valueHtmlLink = $formValues.find('.valueHtmlLink').val();
	if(valueHtmlLink != null && valueHtmlLink !== '')
		vals['htmlLink'] = valueHtmlLink;

	var valueHtmlElement = $formValues.find('.valueHtmlElement').val();
	if(valueHtmlElement != null && valueHtmlElement !== '')
		vals['htmlElement'] = valueHtmlElement;

	var valueHtmlId = $formValues.find('.valueHtmlId').val();
	if(valueHtmlId != null && valueHtmlId !== '')
		vals['htmlId'] = valueHtmlId;

	var valueHtmlClasses = $formValues.find('.valueHtmlClasses').val();
	if(valueHtmlClasses != null && valueHtmlClasses !== '')
		vals['htmlClasses'] = valueHtmlClasses;

	var valueHtmlStyle = $formValues.find('.valueHtmlStyle').val();
	if(valueHtmlStyle != null && valueHtmlStyle !== '')
		vals['htmlStyle'] = valueHtmlStyle;

	var valueHtmlBefore = $formValues.find('.valueHtmlBefore').val();
	if(valueHtmlBefore != null && valueHtmlBefore !== '')
		vals['htmlBefore'] = valueHtmlBefore;

	var valueHtmlAfter = $formValues.find('.valueHtmlAfter').val();
	if(valueHtmlAfter != null && valueHtmlAfter !== '')
		vals['htmlAfter'] = valueHtmlAfter;

	var valueHtmlText = $formValues.find('.valueHtmlText').val();
	if(valueHtmlText != null && valueHtmlText !== '')
		vals['htmlText'] = valueHtmlText;

	var valueHtmlVar = $formValues.find('.valueHtmlVar').val();
	if(valueHtmlVar != null && valueHtmlVar !== '')
		vals['htmlVar'] = valueHtmlVar;

	var valueHtmlVarSpan = $formValues.find('.valueHtmlVarSpan').val();
	if(valueHtmlVarSpan != null && valueHtmlVarSpan !== '')
		vals['htmlVarSpan'] = valueHtmlVarSpan;

	var valueHtmlVarForm = $formValues.find('.valueHtmlVarForm').val();
	if(valueHtmlVarForm != null && valueHtmlVarForm !== '')
		vals['htmlVarForm'] = valueHtmlVarForm;

	var valueHtmlVarInput = $formValues.find('.valueHtmlVarInput').val();
	if(valueHtmlVarInput != null && valueHtmlVarInput !== '')
		vals['htmlVarInput'] = valueHtmlVarInput;

	var valueHtmlVarForEach = $formValues.find('.valueHtmlVarForEach').val();
	if(valueHtmlVarForEach != null && valueHtmlVarForEach !== '')
		vals['htmlVarForEach'] = valueHtmlVarForEach;

	var valueHtmlExclude = $formValues.find('.valueHtmlExclude').prop('checked');
	if(valueHtmlExclude != null && valueHtmlExclude !== '')
		vals['htmlExclude'] = valueHtmlExclude;

	var valuePdfExclude = $formValues.find('.valuePdfExclude').prop('checked');
	if(valuePdfExclude != null && valuePdfExclude !== '')
		vals['pdfExclude'] = valuePdfExclude;

	var valueLoginLogout = $formValues.find('.valueLoginLogout').prop('checked');
	if(valueLoginLogout != null && valueLoginLogout !== '')
		vals['loginLogout'] = valueLoginLogout;

	var valueSort1 = $formValues.find('.valueSort1').val();
	if(valueSort1 != null && valueSort1 !== '')
		vals['sort1'] = valueSort1;

	var valueSort2 = $formValues.find('.valueSort2').val();
	if(valueSort2 != null && valueSort2 !== '')
		vals['sort2'] = valueSort2;

	var valueSort3 = $formValues.find('.valueSort3').val();
	if(valueSort3 != null && valueSort3 !== '')
		vals['sort3'] = valueSort3;

	var valueSort4 = $formValues.find('.valueSort4').val();
	if(valueSort4 != null && valueSort4 !== '')
		vals['sort4'] = valueSort4;

	var valueSort5 = $formValues.find('.valueSort5').val();
	if(valueSort5 != null && valueSort5 !== '')
		vals['sort5'] = valueSort5;

	var valueSort6 = $formValues.find('.valueSort6').val();
	if(valueSort6 != null && valueSort6 !== '')
		vals['sort6'] = valueSort6;

	var valueSort7 = $formValues.find('.valueSort7').val();
	if(valueSort7 != null && valueSort7 !== '')
		vals['sort7'] = valueSort7;

	var valueSort8 = $formValues.find('.valueSort8').val();
	if(valueSort8 != null && valueSort8 !== '')
		vals['sort8'] = valueSort8;

	var valueSort9 = $formValues.find('.valueSort9').val();
	if(valueSort9 != null && valueSort9 !== '')
		vals['sort9'] = valueSort9;

	var valueSort10 = $formValues.find('.valueSort10').val();
	if(valueSort10 != null && valueSort10 !== '')
		vals['sort10'] = valueSort10;

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

	$.ajax({
		url: '/api/html-part'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postHtmlPartVals(vals, success, error) {
	$.ajax({
		url: '/api/html-part'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportHtmlPart($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportHtmlPartVals(JSON.parse(json), success, error);
}

function putimportHtmlPartVals(json, success, error) {
	$.ajax({
		url: '/api/html-part/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeHtmlPart($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeHtmlPartVals(JSON.parse(json), success, error);
}

function putmergeHtmlPartVals(json, success, error) {
	$.ajax({
		url: '/api/html-part/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyHtmlPart($formValues, pk, success, error) {
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

	var valuePageDesignKeys = $formValues.find('input.valuePageDesignKeys:checked').val();
	if(valuePageDesignKeys != null && valuePageDesignKeys !== '')
		vals['pageDesignKeys'] = [valuePageDesignKeys];

	var valueHtmlLink = $formValues.find('.valueHtmlLink').val();
	if(valueHtmlLink != null && valueHtmlLink !== '')
		vals['htmlLink'] = valueHtmlLink;

	var valueHtmlElement = $formValues.find('.valueHtmlElement').val();
	if(valueHtmlElement != null && valueHtmlElement !== '')
		vals['htmlElement'] = valueHtmlElement;

	var valueHtmlId = $formValues.find('.valueHtmlId').val();
	if(valueHtmlId != null && valueHtmlId !== '')
		vals['htmlId'] = valueHtmlId;

	var valueHtmlClasses = $formValues.find('.valueHtmlClasses').val();
	if(valueHtmlClasses != null && valueHtmlClasses !== '')
		vals['htmlClasses'] = valueHtmlClasses;

	var valueHtmlStyle = $formValues.find('.valueHtmlStyle').val();
	if(valueHtmlStyle != null && valueHtmlStyle !== '')
		vals['htmlStyle'] = valueHtmlStyle;

	var valueHtmlBefore = $formValues.find('.valueHtmlBefore').val();
	if(valueHtmlBefore != null && valueHtmlBefore !== '')
		vals['htmlBefore'] = valueHtmlBefore;

	var valueHtmlAfter = $formValues.find('.valueHtmlAfter').val();
	if(valueHtmlAfter != null && valueHtmlAfter !== '')
		vals['htmlAfter'] = valueHtmlAfter;

	var valueHtmlText = $formValues.find('.valueHtmlText').val();
	if(valueHtmlText != null && valueHtmlText !== '')
		vals['htmlText'] = valueHtmlText;

	var valueHtmlVar = $formValues.find('.valueHtmlVar').val();
	if(valueHtmlVar != null && valueHtmlVar !== '')
		vals['htmlVar'] = valueHtmlVar;

	var valueHtmlVarSpan = $formValues.find('.valueHtmlVarSpan').val();
	if(valueHtmlVarSpan != null && valueHtmlVarSpan !== '')
		vals['htmlVarSpan'] = valueHtmlVarSpan;

	var valueHtmlVarForm = $formValues.find('.valueHtmlVarForm').val();
	if(valueHtmlVarForm != null && valueHtmlVarForm !== '')
		vals['htmlVarForm'] = valueHtmlVarForm;

	var valueHtmlVarInput = $formValues.find('.valueHtmlVarInput').val();
	if(valueHtmlVarInput != null && valueHtmlVarInput !== '')
		vals['htmlVarInput'] = valueHtmlVarInput;

	var valueHtmlVarForEach = $formValues.find('.valueHtmlVarForEach').val();
	if(valueHtmlVarForEach != null && valueHtmlVarForEach !== '')
		vals['htmlVarForEach'] = valueHtmlVarForEach;

	var valueHtmlExclude = $formValues.find('.valueHtmlExclude').prop('checked');
	if(valueHtmlExclude != null && valueHtmlExclude !== '')
		vals['htmlExclude'] = valueHtmlExclude;

	var valuePdfExclude = $formValues.find('.valuePdfExclude').prop('checked');
	if(valuePdfExclude != null && valuePdfExclude !== '')
		vals['pdfExclude'] = valuePdfExclude;

	var valueLoginLogout = $formValues.find('.valueLoginLogout').prop('checked');
	if(valueLoginLogout != null && valueLoginLogout !== '')
		vals['loginLogout'] = valueLoginLogout;

	var valueSort1 = $formValues.find('.valueSort1').val();
	if(valueSort1 != null && valueSort1 !== '')
		vals['sort1'] = valueSort1;

	var valueSort2 = $formValues.find('.valueSort2').val();
	if(valueSort2 != null && valueSort2 !== '')
		vals['sort2'] = valueSort2;

	var valueSort3 = $formValues.find('.valueSort3').val();
	if(valueSort3 != null && valueSort3 !== '')
		vals['sort3'] = valueSort3;

	var valueSort4 = $formValues.find('.valueSort4').val();
	if(valueSort4 != null && valueSort4 !== '')
		vals['sort4'] = valueSort4;

	var valueSort5 = $formValues.find('.valueSort5').val();
	if(valueSort5 != null && valueSort5 !== '')
		vals['sort5'] = valueSort5;

	var valueSort6 = $formValues.find('.valueSort6').val();
	if(valueSort6 != null && valueSort6 !== '')
		vals['sort6'] = valueSort6;

	var valueSort7 = $formValues.find('.valueSort7').val();
	if(valueSort7 != null && valueSort7 !== '')
		vals['sort7'] = valueSort7;

	var valueSort8 = $formValues.find('.valueSort8').val();
	if(valueSort8 != null && valueSort8 !== '')
		vals['sort8'] = valueSort8;

	var valueSort9 = $formValues.find('.valueSort9').val();
	if(valueSort9 != null && valueSort9 !== '')
		vals['sort9'] = valueSort9;

	var valueSort10 = $formValues.find('.valueSort10').val();
	if(valueSort10 != null && valueSort10 !== '')
		vals['sort10'] = valueSort10;

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

	putcopyHtmlPartVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyHtmlPartVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/html-part/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchHtmlPart($formFilters, $formValues, pk, success, error) {
	var filters = patchHtmlPartFilters($formFilters);

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

	var valuePageDesignKeys = $formValues.find('input.valuePageDesignKeys:checked').val();
	if(valuePageDesignKeys != null && valuePageDesignKeys !== '')
		vals['addPageDesignKeys'] = valuePageDesignKeys;

	var valueHtmlLink = $formValues.find('.valueHtmlLink').val();
	if(valueHtmlLink != null && valueHtmlLink !== '')
	var removeHtmlLink = $formFilters.find('.removeHtmlLink').val() === 'true';
	var setHtmlLink = removeHtmlLink ? null : $formValues.find('.setHtmlLink').val();
	if(removeHtmlLink || setHtmlLink != null && setHtmlLink !== '')
		vals['setHtmlLink'] = setHtmlLink;
	var addHtmlLink = $formValues.find('.addHtmlLink').val();
	if(addHtmlLink != null && addHtmlLink !== '')
		vals['addHtmlLink'] = addHtmlLink;
	var removeHtmlLink = $formValues.find('.removeHtmlLink').val();
	if(removeHtmlLink != null && removeHtmlLink !== '')
		vals['removeHtmlLink'] = removeHtmlLink;

	var valueHtmlElement = $formValues.find('.valueHtmlElement').val();
	if(valueHtmlElement != null && valueHtmlElement !== '')
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

	var valueHtmlId = $formValues.find('.valueHtmlId').val();
	if(valueHtmlId != null && valueHtmlId !== '')
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

	var valueHtmlClasses = $formValues.find('.valueHtmlClasses').val();
	if(valueHtmlClasses != null && valueHtmlClasses !== '')
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

	var valueHtmlStyle = $formValues.find('.valueHtmlStyle').val();
	if(valueHtmlStyle != null && valueHtmlStyle !== '')
	var removeHtmlStyle = $formFilters.find('.removeHtmlStyle').val() === 'true';
	var setHtmlStyle = removeHtmlStyle ? null : $formValues.find('.setHtmlStyle').val();
	if(removeHtmlStyle || setHtmlStyle != null && setHtmlStyle !== '')
		vals['setHtmlStyle'] = setHtmlStyle;
	var addHtmlStyle = $formValues.find('.addHtmlStyle').val();
	if(addHtmlStyle != null && addHtmlStyle !== '')
		vals['addHtmlStyle'] = addHtmlStyle;
	var removeHtmlStyle = $formValues.find('.removeHtmlStyle').val();
	if(removeHtmlStyle != null && removeHtmlStyle !== '')
		vals['removeHtmlStyle'] = removeHtmlStyle;

	var valueHtmlBefore = $formValues.find('.valueHtmlBefore').val();
	if(valueHtmlBefore != null && valueHtmlBefore !== '')
	var removeHtmlBefore = $formFilters.find('.removeHtmlBefore').val() === 'true';
	var setHtmlBefore = removeHtmlBefore ? null : $formValues.find('.setHtmlBefore').val();
	if(removeHtmlBefore || setHtmlBefore != null && setHtmlBefore !== '')
		vals['setHtmlBefore'] = setHtmlBefore;
	var addHtmlBefore = $formValues.find('.addHtmlBefore').val();
	if(addHtmlBefore != null && addHtmlBefore !== '')
		vals['addHtmlBefore'] = addHtmlBefore;
	var removeHtmlBefore = $formValues.find('.removeHtmlBefore').val();
	if(removeHtmlBefore != null && removeHtmlBefore !== '')
		vals['removeHtmlBefore'] = removeHtmlBefore;

	var valueHtmlAfter = $formValues.find('.valueHtmlAfter').val();
	if(valueHtmlAfter != null && valueHtmlAfter !== '')
	var removeHtmlAfter = $formFilters.find('.removeHtmlAfter').val() === 'true';
	var setHtmlAfter = removeHtmlAfter ? null : $formValues.find('.setHtmlAfter').val();
	if(removeHtmlAfter || setHtmlAfter != null && setHtmlAfter !== '')
		vals['setHtmlAfter'] = setHtmlAfter;
	var addHtmlAfter = $formValues.find('.addHtmlAfter').val();
	if(addHtmlAfter != null && addHtmlAfter !== '')
		vals['addHtmlAfter'] = addHtmlAfter;
	var removeHtmlAfter = $formValues.find('.removeHtmlAfter').val();
	if(removeHtmlAfter != null && removeHtmlAfter !== '')
		vals['removeHtmlAfter'] = removeHtmlAfter;

	var valueHtmlText = $formValues.find('.valueHtmlText').val();
	if(valueHtmlText != null && valueHtmlText !== '')
	var removeHtmlText = $formFilters.find('.removeHtmlText').val() === 'true';
	var setHtmlText = removeHtmlText ? null : $formValues.find('.setHtmlText').val();
	if(removeHtmlText || setHtmlText != null && setHtmlText !== '')
		vals['setHtmlText'] = setHtmlText;
	var addHtmlText = $formValues.find('.addHtmlText').val();
	if(addHtmlText != null && addHtmlText !== '')
		vals['addHtmlText'] = addHtmlText;
	var removeHtmlText = $formValues.find('.removeHtmlText').val();
	if(removeHtmlText != null && removeHtmlText !== '')
		vals['removeHtmlText'] = removeHtmlText;

	var valueHtmlVar = $formValues.find('.valueHtmlVar').val();
	if(valueHtmlVar != null && valueHtmlVar !== '')
	var removeHtmlVar = $formFilters.find('.removeHtmlVar').val() === 'true';
	var setHtmlVar = removeHtmlVar ? null : $formValues.find('.setHtmlVar').val();
	if(removeHtmlVar || setHtmlVar != null && setHtmlVar !== '')
		vals['setHtmlVar'] = setHtmlVar;
	var addHtmlVar = $formValues.find('.addHtmlVar').val();
	if(addHtmlVar != null && addHtmlVar !== '')
		vals['addHtmlVar'] = addHtmlVar;
	var removeHtmlVar = $formValues.find('.removeHtmlVar').val();
	if(removeHtmlVar != null && removeHtmlVar !== '')
		vals['removeHtmlVar'] = removeHtmlVar;

	var valueHtmlVarSpan = $formValues.find('.valueHtmlVarSpan').val();
	if(valueHtmlVarSpan != null && valueHtmlVarSpan !== '')
	var removeHtmlVarSpan = $formFilters.find('.removeHtmlVarSpan').val() === 'true';
	var setHtmlVarSpan = removeHtmlVarSpan ? null : $formValues.find('.setHtmlVarSpan').val();
	if(removeHtmlVarSpan || setHtmlVarSpan != null && setHtmlVarSpan !== '')
		vals['setHtmlVarSpan'] = setHtmlVarSpan;
	var addHtmlVarSpan = $formValues.find('.addHtmlVarSpan').val();
	if(addHtmlVarSpan != null && addHtmlVarSpan !== '')
		vals['addHtmlVarSpan'] = addHtmlVarSpan;
	var removeHtmlVarSpan = $formValues.find('.removeHtmlVarSpan').val();
	if(removeHtmlVarSpan != null && removeHtmlVarSpan !== '')
		vals['removeHtmlVarSpan'] = removeHtmlVarSpan;

	var valueHtmlVarForm = $formValues.find('.valueHtmlVarForm').val();
	if(valueHtmlVarForm != null && valueHtmlVarForm !== '')
	var removeHtmlVarForm = $formFilters.find('.removeHtmlVarForm').val() === 'true';
	var setHtmlVarForm = removeHtmlVarForm ? null : $formValues.find('.setHtmlVarForm').val();
	if(removeHtmlVarForm || setHtmlVarForm != null && setHtmlVarForm !== '')
		vals['setHtmlVarForm'] = setHtmlVarForm;
	var addHtmlVarForm = $formValues.find('.addHtmlVarForm').val();
	if(addHtmlVarForm != null && addHtmlVarForm !== '')
		vals['addHtmlVarForm'] = addHtmlVarForm;
	var removeHtmlVarForm = $formValues.find('.removeHtmlVarForm').val();
	if(removeHtmlVarForm != null && removeHtmlVarForm !== '')
		vals['removeHtmlVarForm'] = removeHtmlVarForm;

	var valueHtmlVarInput = $formValues.find('.valueHtmlVarInput').val();
	if(valueHtmlVarInput != null && valueHtmlVarInput !== '')
	var removeHtmlVarInput = $formFilters.find('.removeHtmlVarInput').val() === 'true';
	var setHtmlVarInput = removeHtmlVarInput ? null : $formValues.find('.setHtmlVarInput').val();
	if(removeHtmlVarInput || setHtmlVarInput != null && setHtmlVarInput !== '')
		vals['setHtmlVarInput'] = setHtmlVarInput;
	var addHtmlVarInput = $formValues.find('.addHtmlVarInput').val();
	if(addHtmlVarInput != null && addHtmlVarInput !== '')
		vals['addHtmlVarInput'] = addHtmlVarInput;
	var removeHtmlVarInput = $formValues.find('.removeHtmlVarInput').val();
	if(removeHtmlVarInput != null && removeHtmlVarInput !== '')
		vals['removeHtmlVarInput'] = removeHtmlVarInput;

	var valueHtmlVarForEach = $formValues.find('.valueHtmlVarForEach').val();
	if(valueHtmlVarForEach != null && valueHtmlVarForEach !== '')
	var removeHtmlVarForEach = $formFilters.find('.removeHtmlVarForEach').val() === 'true';
	var setHtmlVarForEach = removeHtmlVarForEach ? null : $formValues.find('.setHtmlVarForEach').val();
	if(removeHtmlVarForEach || setHtmlVarForEach != null && setHtmlVarForEach !== '')
		vals['setHtmlVarForEach'] = setHtmlVarForEach;
	var addHtmlVarForEach = $formValues.find('.addHtmlVarForEach').val();
	if(addHtmlVarForEach != null && addHtmlVarForEach !== '')
		vals['addHtmlVarForEach'] = addHtmlVarForEach;
	var removeHtmlVarForEach = $formValues.find('.removeHtmlVarForEach').val();
	if(removeHtmlVarForEach != null && removeHtmlVarForEach !== '')
		vals['removeHtmlVarForEach'] = removeHtmlVarForEach;

	var valueHtmlExclude = $formValues.find('.valueHtmlExclude').prop('checked');
	if(valueHtmlExclude != null && valueHtmlExclude !== '')
	var removeHtmlExclude = $formFilters.find('.removeHtmlExclude').val() === 'true';
	var valueHtmlExcludeSelectVal = $formValues.find('select.setHtmlExclude').val();
	var valueHtmlExclude = null;
	if(valueHtmlExcludeSelectVal !== '')
		valueHtmlExclude = valueHtmlExcludeSelectVal == 'true';
	setHtmlExclude = removeHtmlExclude ? null : valueHtmlExclude;
	if(removeHtmlExclude || setHtmlExclude != null && setHtmlExclude !== '')
		vals['setHtmlExclude'] = setHtmlExclude;
	var addHtmlExclude = $formValues.find('.addHtmlExclude').prop('checked');
	if(addHtmlExclude != null && addHtmlExclude !== '')
		vals['addHtmlExclude'] = addHtmlExclude;
	var removeHtmlExclude = $formValues.find('.removeHtmlExclude').prop('checked');
	if(removeHtmlExclude != null && removeHtmlExclude !== '')
		vals['removeHtmlExclude'] = removeHtmlExclude;

	var valuePdfExclude = $formValues.find('.valuePdfExclude').prop('checked');
	if(valuePdfExclude != null && valuePdfExclude !== '')
	var removePdfExclude = $formFilters.find('.removePdfExclude').val() === 'true';
	var valuePdfExcludeSelectVal = $formValues.find('select.setPdfExclude').val();
	var valuePdfExclude = null;
	if(valuePdfExcludeSelectVal !== '')
		valuePdfExclude = valuePdfExcludeSelectVal == 'true';
	setPdfExclude = removePdfExclude ? null : valuePdfExclude;
	if(removePdfExclude || setPdfExclude != null && setPdfExclude !== '')
		vals['setPdfExclude'] = setPdfExclude;
	var addPdfExclude = $formValues.find('.addPdfExclude').prop('checked');
	if(addPdfExclude != null && addPdfExclude !== '')
		vals['addPdfExclude'] = addPdfExclude;
	var removePdfExclude = $formValues.find('.removePdfExclude').prop('checked');
	if(removePdfExclude != null && removePdfExclude !== '')
		vals['removePdfExclude'] = removePdfExclude;

	var valueLoginLogout = $formValues.find('.valueLoginLogout').prop('checked');
	if(valueLoginLogout != null && valueLoginLogout !== '')
	var removeLoginLogout = $formFilters.find('.removeLoginLogout').val() === 'true';
	var valueLoginLogoutSelectVal = $formValues.find('select.setLoginLogout').val();
	var valueLoginLogout = null;
	if(valueLoginLogoutSelectVal !== '')
		valueLoginLogout = valueLoginLogoutSelectVal == 'true';
	setLoginLogout = removeLoginLogout ? null : valueLoginLogout;
	if(removeLoginLogout || setLoginLogout != null && setLoginLogout !== '')
		vals['setLoginLogout'] = setLoginLogout;
	var addLoginLogout = $formValues.find('.addLoginLogout').prop('checked');
	if(addLoginLogout != null && addLoginLogout !== '')
		vals['addLoginLogout'] = addLoginLogout;
	var removeLoginLogout = $formValues.find('.removeLoginLogout').prop('checked');
	if(removeLoginLogout != null && removeLoginLogout !== '')
		vals['removeLoginLogout'] = removeLoginLogout;

	var valueSort1 = $formValues.find('.valueSort1').val();
	if(valueSort1 != null && valueSort1 !== '')
	var removeSort1 = $formFilters.find('.removeSort1').val() === 'true';
	var setSort1 = removeSort1 ? null : $formValues.find('.setSort1').val();
	if(removeSort1 || setSort1 != null && setSort1 !== '')
		vals['setSort1'] = setSort1;
	var addSort1 = $formValues.find('.addSort1').val();
	if(addSort1 != null && addSort1 !== '')
		vals['addSort1'] = addSort1;
	var removeSort1 = $formValues.find('.removeSort1').val();
	if(removeSort1 != null && removeSort1 !== '')
		vals['removeSort1'] = removeSort1;

	var valueSort2 = $formValues.find('.valueSort2').val();
	if(valueSort2 != null && valueSort2 !== '')
	var removeSort2 = $formFilters.find('.removeSort2').val() === 'true';
	var setSort2 = removeSort2 ? null : $formValues.find('.setSort2').val();
	if(removeSort2 || setSort2 != null && setSort2 !== '')
		vals['setSort2'] = setSort2;
	var addSort2 = $formValues.find('.addSort2').val();
	if(addSort2 != null && addSort2 !== '')
		vals['addSort2'] = addSort2;
	var removeSort2 = $formValues.find('.removeSort2').val();
	if(removeSort2 != null && removeSort2 !== '')
		vals['removeSort2'] = removeSort2;

	var valueSort3 = $formValues.find('.valueSort3').val();
	if(valueSort3 != null && valueSort3 !== '')
	var removeSort3 = $formFilters.find('.removeSort3').val() === 'true';
	var setSort3 = removeSort3 ? null : $formValues.find('.setSort3').val();
	if(removeSort3 || setSort3 != null && setSort3 !== '')
		vals['setSort3'] = setSort3;
	var addSort3 = $formValues.find('.addSort3').val();
	if(addSort3 != null && addSort3 !== '')
		vals['addSort3'] = addSort3;
	var removeSort3 = $formValues.find('.removeSort3').val();
	if(removeSort3 != null && removeSort3 !== '')
		vals['removeSort3'] = removeSort3;

	var valueSort4 = $formValues.find('.valueSort4').val();
	if(valueSort4 != null && valueSort4 !== '')
	var removeSort4 = $formFilters.find('.removeSort4').val() === 'true';
	var setSort4 = removeSort4 ? null : $formValues.find('.setSort4').val();
	if(removeSort4 || setSort4 != null && setSort4 !== '')
		vals['setSort4'] = setSort4;
	var addSort4 = $formValues.find('.addSort4').val();
	if(addSort4 != null && addSort4 !== '')
		vals['addSort4'] = addSort4;
	var removeSort4 = $formValues.find('.removeSort4').val();
	if(removeSort4 != null && removeSort4 !== '')
		vals['removeSort4'] = removeSort4;

	var valueSort5 = $formValues.find('.valueSort5').val();
	if(valueSort5 != null && valueSort5 !== '')
	var removeSort5 = $formFilters.find('.removeSort5').val() === 'true';
	var setSort5 = removeSort5 ? null : $formValues.find('.setSort5').val();
	if(removeSort5 || setSort5 != null && setSort5 !== '')
		vals['setSort5'] = setSort5;
	var addSort5 = $formValues.find('.addSort5').val();
	if(addSort5 != null && addSort5 !== '')
		vals['addSort5'] = addSort5;
	var removeSort5 = $formValues.find('.removeSort5').val();
	if(removeSort5 != null && removeSort5 !== '')
		vals['removeSort5'] = removeSort5;

	var valueSort6 = $formValues.find('.valueSort6').val();
	if(valueSort6 != null && valueSort6 !== '')
	var removeSort6 = $formFilters.find('.removeSort6').val() === 'true';
	var setSort6 = removeSort6 ? null : $formValues.find('.setSort6').val();
	if(removeSort6 || setSort6 != null && setSort6 !== '')
		vals['setSort6'] = setSort6;
	var addSort6 = $formValues.find('.addSort6').val();
	if(addSort6 != null && addSort6 !== '')
		vals['addSort6'] = addSort6;
	var removeSort6 = $formValues.find('.removeSort6').val();
	if(removeSort6 != null && removeSort6 !== '')
		vals['removeSort6'] = removeSort6;

	var valueSort7 = $formValues.find('.valueSort7').val();
	if(valueSort7 != null && valueSort7 !== '')
	var removeSort7 = $formFilters.find('.removeSort7').val() === 'true';
	var setSort7 = removeSort7 ? null : $formValues.find('.setSort7').val();
	if(removeSort7 || setSort7 != null && setSort7 !== '')
		vals['setSort7'] = setSort7;
	var addSort7 = $formValues.find('.addSort7').val();
	if(addSort7 != null && addSort7 !== '')
		vals['addSort7'] = addSort7;
	var removeSort7 = $formValues.find('.removeSort7').val();
	if(removeSort7 != null && removeSort7 !== '')
		vals['removeSort7'] = removeSort7;

	var valueSort8 = $formValues.find('.valueSort8').val();
	if(valueSort8 != null && valueSort8 !== '')
	var removeSort8 = $formFilters.find('.removeSort8').val() === 'true';
	var setSort8 = removeSort8 ? null : $formValues.find('.setSort8').val();
	if(removeSort8 || setSort8 != null && setSort8 !== '')
		vals['setSort8'] = setSort8;
	var addSort8 = $formValues.find('.addSort8').val();
	if(addSort8 != null && addSort8 !== '')
		vals['addSort8'] = addSort8;
	var removeSort8 = $formValues.find('.removeSort8').val();
	if(removeSort8 != null && removeSort8 !== '')
		vals['removeSort8'] = removeSort8;

	var valueSort9 = $formValues.find('.valueSort9').val();
	if(valueSort9 != null && valueSort9 !== '')
	var removeSort9 = $formFilters.find('.removeSort9').val() === 'true';
	var setSort9 = removeSort9 ? null : $formValues.find('.setSort9').val();
	if(removeSort9 || setSort9 != null && setSort9 !== '')
		vals['setSort9'] = setSort9;
	var addSort9 = $formValues.find('.addSort9').val();
	if(addSort9 != null && addSort9 !== '')
		vals['addSort9'] = addSort9;
	var removeSort9 = $formValues.find('.removeSort9').val();
	if(removeSort9 != null && removeSort9 !== '')
		vals['removeSort9'] = removeSort9;

	var valueSort10 = $formValues.find('.valueSort10').val();
	if(valueSort10 != null && valueSort10 !== '')
	var removeSort10 = $formFilters.find('.removeSort10').val() === 'true';
	var setSort10 = removeSort10 ? null : $formValues.find('.setSort10').val();
	if(removeSort10 || setSort10 != null && setSort10 !== '')
		vals['setSort10'] = setSort10;
	var addSort10 = $formValues.find('.addSort10').val();
	if(addSort10 != null && addSort10 !== '')
		vals['addSort10'] = addSort10;
	var removeSort10 = $formValues.find('.removeSort10').val();
	if(removeSort10 != null && removeSort10 !== '')
		vals['removeSort10'] = removeSort10;

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

	patchHtmlPartVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchHtmlPartFilters($formFilters) {
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

		var filterPageDesignKeys = $formFilters.find('.valuePageDesignKeys').val();
		if(filterPageDesignKeys != null && filterPageDesignKeys !== '')
			filters.push({ name: 'fq', value: 'pageDesignKeys:' + filterPageDesignKeys });

		var filterHtmlLink = $formFilters.find('.valueHtmlLink').val();
		if(filterHtmlLink != null && filterHtmlLink !== '')
			filters.push({ name: 'fq', value: 'htmlLink:' + filterHtmlLink });

		var filterHtmlElement = $formFilters.find('.valueHtmlElement').val();
		if(filterHtmlElement != null && filterHtmlElement !== '')
			filters.push({ name: 'fq', value: 'htmlElement:' + filterHtmlElement });

		var filterHtmlId = $formFilters.find('.valueHtmlId').val();
		if(filterHtmlId != null && filterHtmlId !== '')
			filters.push({ name: 'fq', value: 'htmlId:' + filterHtmlId });

		var filterHtmlClasses = $formFilters.find('.valueHtmlClasses').val();
		if(filterHtmlClasses != null && filterHtmlClasses !== '')
			filters.push({ name: 'fq', value: 'htmlClasses:' + filterHtmlClasses });

		var filterHtmlStyle = $formFilters.find('.valueHtmlStyle').val();
		if(filterHtmlStyle != null && filterHtmlStyle !== '')
			filters.push({ name: 'fq', value: 'htmlStyle:' + filterHtmlStyle });

		var filterHtmlVar = $formFilters.find('.valueHtmlVar').val();
		if(filterHtmlVar != null && filterHtmlVar !== '')
			filters.push({ name: 'fq', value: 'htmlVar:' + filterHtmlVar });

		var filterHtmlVarSpan = $formFilters.find('.valueHtmlVarSpan').val();
		if(filterHtmlVarSpan != null && filterHtmlVarSpan !== '')
			filters.push({ name: 'fq', value: 'htmlVarSpan:' + filterHtmlVarSpan });

		var filterHtmlVarForm = $formFilters.find('.valueHtmlVarForm').val();
		if(filterHtmlVarForm != null && filterHtmlVarForm !== '')
			filters.push({ name: 'fq', value: 'htmlVarForm:' + filterHtmlVarForm });

		var filterHtmlVarInput = $formFilters.find('.valueHtmlVarInput').val();
		if(filterHtmlVarInput != null && filterHtmlVarInput !== '')
			filters.push({ name: 'fq', value: 'htmlVarInput:' + filterHtmlVarInput });

		var filterHtmlVarForEach = $formFilters.find('.valueHtmlVarForEach').val();
		if(filterHtmlVarForEach != null && filterHtmlVarForEach !== '')
			filters.push({ name: 'fq', value: 'htmlVarForEach:' + filterHtmlVarForEach });

		var $filterHtmlExcludeCheckbox = $formFilters.find('input.valueHtmlExclude[type = "checkbox"]');
		var $filterHtmlExcludeSelect = $formFilters.find('select.valueHtmlExclude');
		var filterHtmlExclude = $filterHtmlExcludeSelect.length ? $filterHtmlExcludeSelect.val() : $filterHtmlExcludeCheckbox.prop('checked');
		var filterHtmlExcludeSelectVal = $formFilters.find('select.filterHtmlExclude').val();
		var filterHtmlExclude = null;
		if(filterHtmlExcludeSelectVal !== '')
			filterHtmlExclude = filterHtmlExcludeSelectVal == 'true';
		if(filterHtmlExclude != null && filterHtmlExclude === true)
			filters.push({ name: 'fq', value: 'htmlExclude:' + filterHtmlExclude });

		var $filterPdfExcludeCheckbox = $formFilters.find('input.valuePdfExclude[type = "checkbox"]');
		var $filterPdfExcludeSelect = $formFilters.find('select.valuePdfExclude');
		var filterPdfExclude = $filterPdfExcludeSelect.length ? $filterPdfExcludeSelect.val() : $filterPdfExcludeCheckbox.prop('checked');
		var filterPdfExcludeSelectVal = $formFilters.find('select.filterPdfExclude').val();
		var filterPdfExclude = null;
		if(filterPdfExcludeSelectVal !== '')
			filterPdfExclude = filterPdfExcludeSelectVal == 'true';
		if(filterPdfExclude != null && filterPdfExclude === true)
			filters.push({ name: 'fq', value: 'pdfExclude:' + filterPdfExclude });

		var $filterLoginLogoutCheckbox = $formFilters.find('input.valueLoginLogout[type = "checkbox"]');
		var $filterLoginLogoutSelect = $formFilters.find('select.valueLoginLogout');
		var filterLoginLogout = $filterLoginLogoutSelect.length ? $filterLoginLogoutSelect.val() : $filterLoginLogoutCheckbox.prop('checked');
		var filterLoginLogoutSelectVal = $formFilters.find('select.filterLoginLogout').val();
		var filterLoginLogout = null;
		if(filterLoginLogoutSelectVal !== '')
			filterLoginLogout = filterLoginLogoutSelectVal == 'true';
		if(filterLoginLogout != null && filterLoginLogout === true)
			filters.push({ name: 'fq', value: 'loginLogout:' + filterLoginLogout });

		var filterSort1 = $formFilters.find('.valueSort1').val();
		if(filterSort1 != null && filterSort1 !== '')
			filters.push({ name: 'fq', value: 'sort1:' + filterSort1 });

		var filterSort2 = $formFilters.find('.valueSort2').val();
		if(filterSort2 != null && filterSort2 !== '')
			filters.push({ name: 'fq', value: 'sort2:' + filterSort2 });

		var filterSort3 = $formFilters.find('.valueSort3').val();
		if(filterSort3 != null && filterSort3 !== '')
			filters.push({ name: 'fq', value: 'sort3:' + filterSort3 });

		var filterSort4 = $formFilters.find('.valueSort4').val();
		if(filterSort4 != null && filterSort4 !== '')
			filters.push({ name: 'fq', value: 'sort4:' + filterSort4 });

		var filterSort5 = $formFilters.find('.valueSort5').val();
		if(filterSort5 != null && filterSort5 !== '')
			filters.push({ name: 'fq', value: 'sort5:' + filterSort5 });

		var filterSort6 = $formFilters.find('.valueSort6').val();
		if(filterSort6 != null && filterSort6 !== '')
			filters.push({ name: 'fq', value: 'sort6:' + filterSort6 });

		var filterSort7 = $formFilters.find('.valueSort7').val();
		if(filterSort7 != null && filterSort7 !== '')
			filters.push({ name: 'fq', value: 'sort7:' + filterSort7 });

		var filterSort8 = $formFilters.find('.valueSort8').val();
		if(filterSort8 != null && filterSort8 !== '')
			filters.push({ name: 'fq', value: 'sort8:' + filterSort8 });

		var filterSort9 = $formFilters.find('.valueSort9').val();
		if(filterSort9 != null && filterSort9 !== '')
			filters.push({ name: 'fq', value: 'sort9:' + filterSort9 });

		var filterSort10 = $formFilters.find('.valueSort10').val();
		if(filterSort10 != null && filterSort10 !== '')
			filters.push({ name: 'fq', value: 'sort10:' + filterSort10 });

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

		var filterHtmlPartKey = $formFilters.find('.valueHtmlPartKey').val();
		if(filterHtmlPartKey != null && filterHtmlPartKey !== '')
			filters.push({ name: 'fq', value: 'htmlPartKey:' + filterHtmlPartKey });
	}
	return filters;
}

function patchHtmlPartVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchHtmlPartVals(filters, vals, success, error);
}

function patchHtmlPartVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/html-part?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getHtmlPart(pk) {
	$.ajax({
		url: '/api/html-part/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchHtmlPart($formFilters, success, error) {
	var filters = searchHtmlPartFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchHtmlPartVals(filters, success, error);
}

function searchHtmlPartFilters($formFilters) {
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

		var filterPageDesignKeys = $formFilters.find('.valuePageDesignKeys').val();
		if(filterPageDesignKeys != null && filterPageDesignKeys !== '')
			filters.push({ name: 'fq', value: 'pageDesignKeys:' + filterPageDesignKeys });

		var filterHtmlLink = $formFilters.find('.valueHtmlLink').val();
		if(filterHtmlLink != null && filterHtmlLink !== '')
			filters.push({ name: 'fq', value: 'htmlLink:' + filterHtmlLink });

		var filterHtmlElement = $formFilters.find('.valueHtmlElement').val();
		if(filterHtmlElement != null && filterHtmlElement !== '')
			filters.push({ name: 'fq', value: 'htmlElement:' + filterHtmlElement });

		var filterHtmlId = $formFilters.find('.valueHtmlId').val();
		if(filterHtmlId != null && filterHtmlId !== '')
			filters.push({ name: 'fq', value: 'htmlId:' + filterHtmlId });

		var filterHtmlClasses = $formFilters.find('.valueHtmlClasses').val();
		if(filterHtmlClasses != null && filterHtmlClasses !== '')
			filters.push({ name: 'fq', value: 'htmlClasses:' + filterHtmlClasses });

		var filterHtmlStyle = $formFilters.find('.valueHtmlStyle').val();
		if(filterHtmlStyle != null && filterHtmlStyle !== '')
			filters.push({ name: 'fq', value: 'htmlStyle:' + filterHtmlStyle });

		var filterHtmlVar = $formFilters.find('.valueHtmlVar').val();
		if(filterHtmlVar != null && filterHtmlVar !== '')
			filters.push({ name: 'fq', value: 'htmlVar:' + filterHtmlVar });

		var filterHtmlVarSpan = $formFilters.find('.valueHtmlVarSpan').val();
		if(filterHtmlVarSpan != null && filterHtmlVarSpan !== '')
			filters.push({ name: 'fq', value: 'htmlVarSpan:' + filterHtmlVarSpan });

		var filterHtmlVarForm = $formFilters.find('.valueHtmlVarForm').val();
		if(filterHtmlVarForm != null && filterHtmlVarForm !== '')
			filters.push({ name: 'fq', value: 'htmlVarForm:' + filterHtmlVarForm });

		var filterHtmlVarInput = $formFilters.find('.valueHtmlVarInput').val();
		if(filterHtmlVarInput != null && filterHtmlVarInput !== '')
			filters.push({ name: 'fq', value: 'htmlVarInput:' + filterHtmlVarInput });

		var filterHtmlVarForEach = $formFilters.find('.valueHtmlVarForEach').val();
		if(filterHtmlVarForEach != null && filterHtmlVarForEach !== '')
			filters.push({ name: 'fq', value: 'htmlVarForEach:' + filterHtmlVarForEach });

		var $filterHtmlExcludeCheckbox = $formFilters.find('input.valueHtmlExclude[type = "checkbox"]');
		var $filterHtmlExcludeSelect = $formFilters.find('select.valueHtmlExclude');
		var filterHtmlExclude = $filterHtmlExcludeSelect.length ? $filterHtmlExcludeSelect.val() : $filterHtmlExcludeCheckbox.prop('checked');
		var filterHtmlExcludeSelectVal = $formFilters.find('select.filterHtmlExclude').val();
		var filterHtmlExclude = null;
		if(filterHtmlExcludeSelectVal !== '')
			filterHtmlExclude = filterHtmlExcludeSelectVal == 'true';
		if(filterHtmlExclude != null && filterHtmlExclude === true)
			filters.push({ name: 'fq', value: 'htmlExclude:' + filterHtmlExclude });

		var $filterPdfExcludeCheckbox = $formFilters.find('input.valuePdfExclude[type = "checkbox"]');
		var $filterPdfExcludeSelect = $formFilters.find('select.valuePdfExclude');
		var filterPdfExclude = $filterPdfExcludeSelect.length ? $filterPdfExcludeSelect.val() : $filterPdfExcludeCheckbox.prop('checked');
		var filterPdfExcludeSelectVal = $formFilters.find('select.filterPdfExclude').val();
		var filterPdfExclude = null;
		if(filterPdfExcludeSelectVal !== '')
			filterPdfExclude = filterPdfExcludeSelectVal == 'true';
		if(filterPdfExclude != null && filterPdfExclude === true)
			filters.push({ name: 'fq', value: 'pdfExclude:' + filterPdfExclude });

		var $filterLoginLogoutCheckbox = $formFilters.find('input.valueLoginLogout[type = "checkbox"]');
		var $filterLoginLogoutSelect = $formFilters.find('select.valueLoginLogout');
		var filterLoginLogout = $filterLoginLogoutSelect.length ? $filterLoginLogoutSelect.val() : $filterLoginLogoutCheckbox.prop('checked');
		var filterLoginLogoutSelectVal = $formFilters.find('select.filterLoginLogout').val();
		var filterLoginLogout = null;
		if(filterLoginLogoutSelectVal !== '')
			filterLoginLogout = filterLoginLogoutSelectVal == 'true';
		if(filterLoginLogout != null && filterLoginLogout === true)
			filters.push({ name: 'fq', value: 'loginLogout:' + filterLoginLogout });

		var filterSort1 = $formFilters.find('.valueSort1').val();
		if(filterSort1 != null && filterSort1 !== '')
			filters.push({ name: 'fq', value: 'sort1:' + filterSort1 });

		var filterSort2 = $formFilters.find('.valueSort2').val();
		if(filterSort2 != null && filterSort2 !== '')
			filters.push({ name: 'fq', value: 'sort2:' + filterSort2 });

		var filterSort3 = $formFilters.find('.valueSort3').val();
		if(filterSort3 != null && filterSort3 !== '')
			filters.push({ name: 'fq', value: 'sort3:' + filterSort3 });

		var filterSort4 = $formFilters.find('.valueSort4').val();
		if(filterSort4 != null && filterSort4 !== '')
			filters.push({ name: 'fq', value: 'sort4:' + filterSort4 });

		var filterSort5 = $formFilters.find('.valueSort5').val();
		if(filterSort5 != null && filterSort5 !== '')
			filters.push({ name: 'fq', value: 'sort5:' + filterSort5 });

		var filterSort6 = $formFilters.find('.valueSort6').val();
		if(filterSort6 != null && filterSort6 !== '')
			filters.push({ name: 'fq', value: 'sort6:' + filterSort6 });

		var filterSort7 = $formFilters.find('.valueSort7').val();
		if(filterSort7 != null && filterSort7 !== '')
			filters.push({ name: 'fq', value: 'sort7:' + filterSort7 });

		var filterSort8 = $formFilters.find('.valueSort8').val();
		if(filterSort8 != null && filterSort8 !== '')
			filters.push({ name: 'fq', value: 'sort8:' + filterSort8 });

		var filterSort9 = $formFilters.find('.valueSort9').val();
		if(filterSort9 != null && filterSort9 !== '')
			filters.push({ name: 'fq', value: 'sort9:' + filterSort9 });

		var filterSort10 = $formFilters.find('.valueSort10').val();
		if(filterSort10 != null && filterSort10 !== '')
			filters.push({ name: 'fq', value: 'sort10:' + filterSort10 });

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

		var filterHtmlPartKey = $formFilters.find('.valueHtmlPartKey').val();
		if(filterHtmlPartKey != null && filterHtmlPartKey !== '')
			filters.push({ name: 'fq', value: 'htmlPartKey:' + filterHtmlPartKey });
	}
	return filters;
}

function searchHtmlPartVals(filters, success, error) {

	filters.push({ name: 'rows', value: 300 });

	filters.push({ name: 'sort', value: 'sort1 asc' });
	filters.push({ name: 'sort', value: 'sort2 asc' });
	filters.push({ name: 'sort', value: 'sort3 asc' });
	filters.push({ name: 'sort', value: 'sort4 asc' });
	filters.push({ name: 'sort', value: 'sort5 asc' });
	filters.push({ name: 'sort', value: 'sort6 asc' });
	filters.push({ name: 'sort', value: 'sort7 asc' });
	filters.push({ name: 'sort', value: 'sort8 asc' });
	filters.push({ name: 'sort', value: 'sort9 asc' });
	filters.push({ name: 'sort', value: 'sort10 asc' });
	$.ajax({
		url: '/api/html-part?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestHtmlPartObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-sun ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchHtmlPartVals($formFilters, success, error);
}

function suggestHtmlPartPageDesignKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['pageDesignCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['htmlPartKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_pageDesignKeys_' + pk + '_htmlPartKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePageDesignKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_pageDesignKeys_" + pk + "_htmlPartKeys_" + o['pk'] + "'); patchHtmlPartVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PageDesignKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#HtmlPartForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchPageDesignVals(filters, success, error);
}

async function websocketHtmlPart(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketHtmlPart', function (error, message) {
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
			var $headerSpan = $('<span>').attr('class', '').text('modify HTML parts');
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

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_pageDesignKeys').trigger('oninput');
		});
	}
}
async function websocketHtmlPartInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchHtmlPartVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputHtmlPart' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputHtmlPart' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Modified'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputHtmlPart' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputHtmlPart' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Deleted'));
			}
			var val = o['pageDesignKeys'];
			if(vars.includes('pageDesignKeys')) {
				$('.inputHtmlPart' + pk + 'PageDesignKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'PageDesignKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'PageDesignKeys'));
			}
			var val = o['htmlLink'];
			if(vars.includes('htmlLink')) {
				$('.inputHtmlPart' + pk + 'HtmlLink').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlLink').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlLink'));
			}
			var val = o['htmlElement'];
			if(vars.includes('htmlElement')) {
				$('.inputHtmlPart' + pk + 'HtmlElement').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlElement').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlElement'));
			}
			var val = o['htmlId'];
			if(vars.includes('htmlId')) {
				$('.inputHtmlPart' + pk + 'HtmlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlId'));
			}
			var val = o['htmlClasses'];
			if(vars.includes('htmlClasses')) {
				$('.inputHtmlPart' + pk + 'HtmlClasses').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlClasses').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlClasses'));
			}
			var val = o['htmlStyle'];
			if(vars.includes('htmlStyle')) {
				$('.inputHtmlPart' + pk + 'HtmlStyle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlStyle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlStyle'));
			}
			var val = o['htmlBefore'];
			if(vars.includes('htmlBefore')) {
				$('.inputHtmlPart' + pk + 'HtmlBefore').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlBefore').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlBefore'));
			}
			var val = o['htmlAfter'];
			if(vars.includes('htmlAfter')) {
				$('.inputHtmlPart' + pk + 'HtmlAfter').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlAfter').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlAfter'));
			}
			var val = o['htmlText'];
			if(vars.includes('htmlText')) {
				$('.inputHtmlPart' + pk + 'HtmlText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlText'));
			}
			var val = o['htmlVar'];
			if(vars.includes('htmlVar')) {
				$('.inputHtmlPart' + pk + 'HtmlVar').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlVar').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlVar'));
			}
			var val = o['htmlVarSpan'];
			if(vars.includes('htmlVarSpan')) {
				$('.inputHtmlPart' + pk + 'HtmlVarSpan').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlVarSpan').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlVarSpan'));
			}
			var val = o['htmlVarForm'];
			if(vars.includes('htmlVarForm')) {
				$('.inputHtmlPart' + pk + 'HtmlVarForm').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlVarForm').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlVarForm'));
			}
			var val = o['htmlVarInput'];
			if(vars.includes('htmlVarInput')) {
				$('.inputHtmlPart' + pk + 'HtmlVarInput').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlVarInput').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlVarInput'));
			}
			var val = o['htmlVarForEach'];
			if(vars.includes('htmlVarForEach')) {
				$('.inputHtmlPart' + pk + 'HtmlVarForEach').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlVarForEach').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlVarForEach'));
			}
			var val = o['htmlExclude'];
			if(vars.includes('htmlExclude')) {
				$('.inputHtmlPart' + pk + 'HtmlExclude').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'HtmlExclude').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'HtmlExclude'));
			}
			var val = o['pdfExclude'];
			if(vars.includes('pdfExclude')) {
				$('.inputHtmlPart' + pk + 'PdfExclude').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'PdfExclude').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'PdfExclude'));
			}
			var val = o['loginLogout'];
			if(vars.includes('loginLogout')) {
				$('.inputHtmlPart' + pk + 'LoginLogout').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'LoginLogout').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'LoginLogout'));
			}
			var val = o['sort1'];
			if(vars.includes('sort1')) {
				$('.inputHtmlPart' + pk + 'Sort1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Sort1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Sort1'));
			}
			var val = o['sort2'];
			if(vars.includes('sort2')) {
				$('.inputHtmlPart' + pk + 'Sort2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Sort2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Sort2'));
			}
			var val = o['sort3'];
			if(vars.includes('sort3')) {
				$('.inputHtmlPart' + pk + 'Sort3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Sort3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Sort3'));
			}
			var val = o['sort4'];
			if(vars.includes('sort4')) {
				$('.inputHtmlPart' + pk + 'Sort4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Sort4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Sort4'));
			}
			var val = o['sort5'];
			if(vars.includes('sort5')) {
				$('.inputHtmlPart' + pk + 'Sort5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Sort5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Sort5'));
			}
			var val = o['sort6'];
			if(vars.includes('sort6')) {
				$('.inputHtmlPart' + pk + 'Sort6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Sort6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Sort6'));
			}
			var val = o['sort7'];
			if(vars.includes('sort7')) {
				$('.inputHtmlPart' + pk + 'Sort7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Sort7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Sort7'));
			}
			var val = o['sort8'];
			if(vars.includes('sort8')) {
				$('.inputHtmlPart' + pk + 'Sort8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Sort8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Sort8'));
			}
			var val = o['sort9'];
			if(vars.includes('sort9')) {
				$('.inputHtmlPart' + pk + 'Sort9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Sort9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Sort9'));
			}
			var val = o['sort10'];
			if(vars.includes('sort10')) {
				$('.inputHtmlPart' + pk + 'Sort10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'Sort10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'Sort10'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputHtmlPart' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputHtmlPart' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputHtmlPart' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputHtmlPart' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varHtmlPart' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputHtmlPart' + pk + 'UserKey'));
			}
		});
	}
}

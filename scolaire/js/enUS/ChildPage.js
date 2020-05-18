
// POST //

async function postSchoolChild($formValues, success, error) {
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

	var valuePersonFirstName = $formValues.find('.valuePersonFirstName').val();
	if(valuePersonFirstName != null && valuePersonFirstName !== '')
		vals['personFirstName'] = valuePersonFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
		vals['familyName'] = valueFamilyName;

	var valuePersonFirstNamePreferred = $formValues.find('.valuePersonFirstNamePreferred').val();
	if(valuePersonFirstNamePreferred != null && valuePersonFirstNamePreferred !== '')
		vals['personFirstNamePreferred'] = valuePersonFirstNamePreferred;

	var valuePersonBirthDate = $formValues.find('.valuePersonBirthDate').val();
	if(valuePersonBirthDate != null && valuePersonBirthDate !== '')
		vals['personBirthDate'] = valuePersonBirthDate;

	var valuePersonAgeInSeptember = $formValues.find('.valuePersonAgeInSeptember').val();
	if(valuePersonAgeInSeptember != null && valuePersonAgeInSeptember !== '')
		vals['personAgeInSeptember'] = valuePersonAgeInSeptember;

	var valueEnrollmentKeys = [];
	$formValues.find('input.valueEnrollmentKeys:checked').each(function(index) {
		valueEnrollmentKeys.push($(this).val());
	});
	if(valueEnrollmentKeys.length > 0)
		vals['enrollmentKeys'] = valueEnrollmentKeys;

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
		url: '/api/child'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolChildVals(vals, success, error) {
	$.ajax({
		url: '/api/child'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSchoolChild($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolChildVals(JSON.parse(json), success, error);
}

function putimportSchoolChildVals(json, success, error) {
	$.ajax({
		url: '/api/child/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolChild($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolChildVals(JSON.parse(json), success, error);
}

function putmergeSchoolChildVals(json, success, error) {
	$.ajax({
		url: '/api/child/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolChild($formValues, pk, success, error) {
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

	var valuePersonFirstName = $formValues.find('.valuePersonFirstName').val();
	if(valuePersonFirstName != null && valuePersonFirstName !== '')
		vals['personFirstName'] = valuePersonFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
		vals['familyName'] = valueFamilyName;

	var valuePersonFirstNamePreferred = $formValues.find('.valuePersonFirstNamePreferred').val();
	if(valuePersonFirstNamePreferred != null && valuePersonFirstNamePreferred !== '')
		vals['personFirstNamePreferred'] = valuePersonFirstNamePreferred;

	var valuePersonBirthDate = $formValues.find('.valuePersonBirthDate').val();
	if(valuePersonBirthDate != null && valuePersonBirthDate !== '')
		vals['personBirthDate'] = valuePersonBirthDate;

	var valuePersonAgeInSeptember = $formValues.find('.valuePersonAgeInSeptember').val();
	if(valuePersonAgeInSeptember != null && valuePersonAgeInSeptember !== '')
		vals['personAgeInSeptember'] = valuePersonAgeInSeptember;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = [valueEnrollmentKeys];

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

	putcopySchoolChildVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolChildVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/child/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolChild($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolChildFilters($formFilters);

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

	var valuePersonFirstName = $formValues.find('.valuePersonFirstName').val();
	if(valuePersonFirstName != null && valuePersonFirstName !== '')
	var removePersonFirstName = $formFilters.find('.removePersonFirstName').val() === 'true';
	var setPersonFirstName = removePersonFirstName ? null : $formValues.find('.setPersonFirstName').val();
	if(removePersonFirstName || setPersonFirstName != null && setPersonFirstName !== '')
		vals['setPersonFirstName'] = setPersonFirstName;
	var addPersonFirstName = $formValues.find('.addPersonFirstName').val();
	if(addPersonFirstName != null && addPersonFirstName !== '')
		vals['addPersonFirstName'] = addPersonFirstName;
	var removePersonFirstName = $formValues.find('.removePersonFirstName').val();
	if(removePersonFirstName != null && removePersonFirstName !== '')
		vals['removePersonFirstName'] = removePersonFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
	var removeFamilyName = $formFilters.find('.removeFamilyName').val() === 'true';
	var setFamilyName = removeFamilyName ? null : $formValues.find('.setFamilyName').val();
	if(removeFamilyName || setFamilyName != null && setFamilyName !== '')
		vals['setFamilyName'] = setFamilyName;
	var addFamilyName = $formValues.find('.addFamilyName').val();
	if(addFamilyName != null && addFamilyName !== '')
		vals['addFamilyName'] = addFamilyName;
	var removeFamilyName = $formValues.find('.removeFamilyName').val();
	if(removeFamilyName != null && removeFamilyName !== '')
		vals['removeFamilyName'] = removeFamilyName;

	var valuePersonFirstNamePreferred = $formValues.find('.valuePersonFirstNamePreferred').val();
	if(valuePersonFirstNamePreferred != null && valuePersonFirstNamePreferred !== '')
	var removePersonFirstNamePreferred = $formFilters.find('.removePersonFirstNamePreferred').val() === 'true';
	var setPersonFirstNamePreferred = removePersonFirstNamePreferred ? null : $formValues.find('.setPersonFirstNamePreferred').val();
	if(removePersonFirstNamePreferred || setPersonFirstNamePreferred != null && setPersonFirstNamePreferred !== '')
		vals['setPersonFirstNamePreferred'] = setPersonFirstNamePreferred;
	var addPersonFirstNamePreferred = $formValues.find('.addPersonFirstNamePreferred').val();
	if(addPersonFirstNamePreferred != null && addPersonFirstNamePreferred !== '')
		vals['addPersonFirstNamePreferred'] = addPersonFirstNamePreferred;
	var removePersonFirstNamePreferred = $formValues.find('.removePersonFirstNamePreferred').val();
	if(removePersonFirstNamePreferred != null && removePersonFirstNamePreferred !== '')
		vals['removePersonFirstNamePreferred'] = removePersonFirstNamePreferred;

	var valuePersonBirthDate = $formValues.find('.valuePersonBirthDate').val();
	if(valuePersonBirthDate != null && valuePersonBirthDate !== '')
	var removePersonBirthDate = $formFilters.find('.removePersonBirthDate').val() === 'true';
	var setPersonBirthDate = removePersonBirthDate ? null : $formValues.find('.setPersonBirthDate').val();
	if(removePersonBirthDate || setPersonBirthDate != null && setPersonBirthDate !== '')
		vals['setPersonBirthDate'] = setPersonBirthDate;
	var addPersonBirthDate = $formValues.find('.addPersonBirthDate').val();
	if(addPersonBirthDate != null && addPersonBirthDate !== '')
		vals['addPersonBirthDate'] = addPersonBirthDate;
	var removePersonBirthDate = $formValues.find('.removePersonBirthDate').val();
	if(removePersonBirthDate != null && removePersonBirthDate !== '')
		vals['removePersonBirthDate'] = removePersonBirthDate;

	var valuePersonAgeInSeptember = $formValues.find('.valuePersonAgeInSeptember').val();
	if(valuePersonAgeInSeptember != null && valuePersonAgeInSeptember !== '')
	var removePersonAgeInSeptember = $formFilters.find('.removePersonAgeInSeptember').val() === 'true';
	var setPersonAgeInSeptember = removePersonAgeInSeptember ? null : $formValues.find('.setPersonAgeInSeptember').val();
	if(removePersonAgeInSeptember || setPersonAgeInSeptember != null && setPersonAgeInSeptember !== '')
		vals['setPersonAgeInSeptember'] = setPersonAgeInSeptember;
	var addPersonAgeInSeptember = $formValues.find('.addPersonAgeInSeptember').val();
	if(addPersonAgeInSeptember != null && addPersonAgeInSeptember !== '')
		vals['addPersonAgeInSeptember'] = addPersonAgeInSeptember;
	var removePersonAgeInSeptember = $formValues.find('.removePersonAgeInSeptember').val();
	if(removePersonAgeInSeptember != null && removePersonAgeInSeptember !== '')
		vals['removePersonAgeInSeptember'] = removePersonAgeInSeptember;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['addEnrollmentKeys'] = valueEnrollmentKeys;

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

	patchSchoolChildVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolChildFilters($formFilters) {
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

		var filterPersonFirstName = $formFilters.find('.valuePersonFirstName').val();
		if(filterPersonFirstName != null && filterPersonFirstName !== '')
			filters.push({ name: 'fq', value: 'personFirstName:' + filterPersonFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPersonFirstNamePreferred = $formFilters.find('.valuePersonFirstNamePreferred').val();
		if(filterPersonFirstNamePreferred != null && filterPersonFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personFirstNamePreferred:' + filterPersonFirstNamePreferred });

		var filterPersonBirthDate = $formFilters.find('.valuePersonBirthDate').val();
		if(filterPersonBirthDate != null && filterPersonBirthDate !== '')
			filters.push({ name: 'fq', value: 'personBirthDate:' + filterPersonBirthDate });

		var filterPersonAgeInSeptember = $formFilters.find('.valuePersonAgeInSeptember').val();
		if(filterPersonAgeInSeptember != null && filterPersonAgeInSeptember !== '')
			filters.push({ name: 'fq', value: 'personAgeInSeptember:' + filterPersonAgeInSeptember });

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

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterFamilySort = $formFilters.find('.valueFamilySort').val();
		if(filterFamilySort != null && filterFamilySort !== '')
			filters.push({ name: 'fq', value: 'familySort:' + filterFamilySort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterSchoolKeys = $formFilters.find('.valueSchoolKeys').val();
		if(filterSchoolKeys != null && filterSchoolKeys !== '')
			filters.push({ name: 'fq', value: 'schoolKeys:' + filterSchoolKeys });

		var filterYearKeys = $formFilters.find('.valueYearKeys').val();
		if(filterYearKeys != null && filterYearKeys !== '')
			filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

		var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
		if(filterSeasonKeys != null && filterSeasonKeys !== '')
			filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

		var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
		if(filterSessionKeys != null && filterSessionKeys !== '')
			filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

		var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
		if(filterAgeKeys != null && filterAgeKeys !== '')
			filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

		var filterPersonCompleteName = $formFilters.find('.valuePersonCompleteName').val();
		if(filterPersonCompleteName != null && filterPersonCompleteName !== '')
			filters.push({ name: 'fq', value: 'personCompleteName:' + filterPersonCompleteName });

		var filterPersonCompleteNamePreferred = $formFilters.find('.valuePersonCompleteNamePreferred').val();
		if(filterPersonCompleteNamePreferred != null && filterPersonCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personCompleteNamePreferred:' + filterPersonCompleteNamePreferred });

		var filterPersonFormalName = $formFilters.find('.valuePersonFormalName').val();
		if(filterPersonFormalName != null && filterPersonFormalName !== '')
			filters.push({ name: 'fq', value: 'personFormalName:' + filterPersonFormalName });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });
	}
	return filters;
}

function patchSchoolChildVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolChildVals(filters, vals, success, error);
}

function patchSchoolChildVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/child?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolChild(pk) {
	$.ajax({
		url: '/api/child/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolChild($formFilters, success, error) {
	var filters = searchSchoolChildFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolChildVals(filters, success, error);
}

function searchSchoolChildFilters($formFilters) {
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

		var filterPersonFirstName = $formFilters.find('.valuePersonFirstName').val();
		if(filterPersonFirstName != null && filterPersonFirstName !== '')
			filters.push({ name: 'fq', value: 'personFirstName:' + filterPersonFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPersonFirstNamePreferred = $formFilters.find('.valuePersonFirstNamePreferred').val();
		if(filterPersonFirstNamePreferred != null && filterPersonFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personFirstNamePreferred:' + filterPersonFirstNamePreferred });

		var filterPersonBirthDate = $formFilters.find('.valuePersonBirthDate').val();
		if(filterPersonBirthDate != null && filterPersonBirthDate !== '')
			filters.push({ name: 'fq', value: 'personBirthDate:' + filterPersonBirthDate });

		var filterPersonAgeInSeptember = $formFilters.find('.valuePersonAgeInSeptember').val();
		if(filterPersonAgeInSeptember != null && filterPersonAgeInSeptember !== '')
			filters.push({ name: 'fq', value: 'personAgeInSeptember:' + filterPersonAgeInSeptember });

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

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterFamilySort = $formFilters.find('.valueFamilySort').val();
		if(filterFamilySort != null && filterFamilySort !== '')
			filters.push({ name: 'fq', value: 'familySort:' + filterFamilySort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterSchoolKeys = $formFilters.find('.valueSchoolKeys').val();
		if(filterSchoolKeys != null && filterSchoolKeys !== '')
			filters.push({ name: 'fq', value: 'schoolKeys:' + filterSchoolKeys });

		var filterYearKeys = $formFilters.find('.valueYearKeys').val();
		if(filterYearKeys != null && filterYearKeys !== '')
			filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

		var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
		if(filterSeasonKeys != null && filterSeasonKeys !== '')
			filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

		var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
		if(filterSessionKeys != null && filterSessionKeys !== '')
			filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

		var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
		if(filterAgeKeys != null && filterAgeKeys !== '')
			filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

		var filterPersonCompleteName = $formFilters.find('.valuePersonCompleteName').val();
		if(filterPersonCompleteName != null && filterPersonCompleteName !== '')
			filters.push({ name: 'fq', value: 'personCompleteName:' + filterPersonCompleteName });

		var filterPersonCompleteNamePreferred = $formFilters.find('.valuePersonCompleteNamePreferred').val();
		if(filterPersonCompleteNamePreferred != null && filterPersonCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personCompleteNamePreferred:' + filterPersonCompleteNamePreferred });

		var filterPersonFormalName = $formFilters.find('.valuePersonFormalName').val();
		if(filterPersonFormalName != null && filterPersonFormalName !== '')
			filters.push({ name: 'fq', value: 'personFormalName:' + filterPersonFormalName });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });
	}
	return filters;
}

function searchSchoolChildVals(filters, success, error) {
	$.ajax({
		url: '/api/child?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolChildObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-child ');
			var $span = $('<span>').attr('class', '').text(o['childCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolChildVals($formFilters, success, error);
}

function suggestSchoolChildEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['childKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_childKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_childKey_" + o['pk'] + "'); patchSchoolChildVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolChildForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

// AdminSearch //

async function adminsearchSchoolChild($formFilters, success, error) {
	var filters = adminsearchSchoolChildFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchSchoolChildVals(filters, success, error);
}

function adminsearchSchoolChildFilters($formFilters) {
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

		var filterPersonFirstName = $formFilters.find('.valuePersonFirstName').val();
		if(filterPersonFirstName != null && filterPersonFirstName !== '')
			filters.push({ name: 'fq', value: 'personFirstName:' + filterPersonFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPersonFirstNamePreferred = $formFilters.find('.valuePersonFirstNamePreferred').val();
		if(filterPersonFirstNamePreferred != null && filterPersonFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personFirstNamePreferred:' + filterPersonFirstNamePreferred });

		var filterPersonBirthDate = $formFilters.find('.valuePersonBirthDate').val();
		if(filterPersonBirthDate != null && filterPersonBirthDate !== '')
			filters.push({ name: 'fq', value: 'personBirthDate:' + filterPersonBirthDate });

		var filterPersonAgeInSeptember = $formFilters.find('.valuePersonAgeInSeptember').val();
		if(filterPersonAgeInSeptember != null && filterPersonAgeInSeptember !== '')
			filters.push({ name: 'fq', value: 'personAgeInSeptember:' + filterPersonAgeInSeptember });

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

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterFamilySort = $formFilters.find('.valueFamilySort').val();
		if(filterFamilySort != null && filterFamilySort !== '')
			filters.push({ name: 'fq', value: 'familySort:' + filterFamilySort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterSchoolKeys = $formFilters.find('.valueSchoolKeys').val();
		if(filterSchoolKeys != null && filterSchoolKeys !== '')
			filters.push({ name: 'fq', value: 'schoolKeys:' + filterSchoolKeys });

		var filterYearKeys = $formFilters.find('.valueYearKeys').val();
		if(filterYearKeys != null && filterYearKeys !== '')
			filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

		var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
		if(filterSeasonKeys != null && filterSeasonKeys !== '')
			filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

		var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
		if(filterSessionKeys != null && filterSessionKeys !== '')
			filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

		var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
		if(filterAgeKeys != null && filterAgeKeys !== '')
			filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

		var filterPersonCompleteName = $formFilters.find('.valuePersonCompleteName').val();
		if(filterPersonCompleteName != null && filterPersonCompleteName !== '')
			filters.push({ name: 'fq', value: 'personCompleteName:' + filterPersonCompleteName });

		var filterPersonCompleteNamePreferred = $formFilters.find('.valuePersonCompleteNamePreferred').val();
		if(filterPersonCompleteNamePreferred != null && filterPersonCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personCompleteNamePreferred:' + filterPersonCompleteNamePreferred });

		var filterPersonFormalName = $formFilters.find('.valuePersonFormalName').val();
		if(filterPersonFormalName != null && filterPersonFormalName !== '')
			filters.push({ name: 'fq', value: 'personFormalName:' + filterPersonFormalName });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });
	}
	return filters;
}

function adminsearchSchoolChildVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/child?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolChildObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-child ');
			var $span = $('<span>').attr('class', '').text(o['childCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolChildVals($formFilters, success, error);
}

function suggestSchoolChildEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['childKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_childKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_childKey_" + o['pk'] + "'); patchSchoolChildVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolChildForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

async function websocketSchoolChild(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolChild', function (error, message) {
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
			var $i = $('<i>').attr('class', 'far fa-child w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify children');
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
				$('.top-box').append($box);
			if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
		});
	}
}
async function websocketSchoolChildInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolChildVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSchoolChild' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSchoolChild' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Modified'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSchoolChild' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSchoolChild' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Deleted'));
			}
			var val = o['personFirstName'];
			if(vars.includes('personFirstName')) {
				$('.inputSchoolChild' + pk + 'PersonFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonFirstName'));
			}
			var val = o['familyName'];
			if(vars.includes('familyName')) {
				$('.inputSchoolChild' + pk + 'FamilyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'FamilyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'FamilyName'));
			}
			var val = o['personFirstNamePreferred'];
			if(vars.includes('personFirstNamePreferred')) {
				$('.inputSchoolChild' + pk + 'PersonFirstNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonFirstNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonFirstNamePreferred'));
			}
			var val = o['personBirthDate'];
			if(val != null) {
				var t = moment(val, 'yyyy-MM-dd');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('personBirthDate')) {
				$('.inputSchoolChild' + pk + 'PersonBirthDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonBirthDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonBirthDate'));
			}
			var val = o['enrollmentKeys'];
			if(vars.includes('enrollmentKeys')) {
				$('.inputSchoolChild' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'EnrollmentKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSchoolChild' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSchoolChild' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSchoolChild' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSchoolChild' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'UserKey'));
			}
		});
	}
}

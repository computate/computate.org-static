
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

	var valueSchoolLocation = $formValues.find('.valueSchoolLocation').val();
	if(valueSchoolLocation != null && valueSchoolLocation !== '')
		vals['schoolLocation'] = valueSchoolLocation;

	var valueSchoolAdministratorName = $formValues.find('.valueSchoolAdministratorName').val();
	if(valueSchoolAdministratorName != null && valueSchoolAdministratorName !== '')
		vals['schoolAdministratorName'] = valueSchoolAdministratorName;

	var valueSchoolEmail = $formValues.find('.valueSchoolEmail').val();
	if(valueSchoolEmail != null && valueSchoolEmail !== '')
		vals['schoolEmail'] = valueSchoolEmail;

	var valueSchoolEmailFrom = $formValues.find('.valueSchoolEmailFrom').val();
	if(valueSchoolEmailFrom != null && valueSchoolEmailFrom !== '')
		vals['schoolEmailFrom'] = valueSchoolEmailFrom;

	var valueSchoolEmailTo = $formValues.find('.valueSchoolEmailTo').val();
	if(valueSchoolEmailTo != null && valueSchoolEmailTo !== '')
		vals['schoolEmailTo'] = valueSchoolEmailTo;

	var valueSchoolPhoneNumber = $formValues.find('.valueSchoolPhoneNumber').val();
	if(valueSchoolPhoneNumber != null && valueSchoolPhoneNumber !== '')
		vals['schoolPhoneNumber'] = valueSchoolPhoneNumber;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueSchoolNumber = $formValues.find('.valueSchoolNumber').val();
	if(valueSchoolNumber != null && valueSchoolNumber !== '')
		vals['schoolNumber'] = valueSchoolNumber;

	var valueYearKeys = [];
	$formValues.find('input.valueYearKeys:checked').each(function(index) {
		valueYearKeys.push($(this).val());
	});
	if(valueYearKeys.length > 0)
		vals['yearKeys'] = valueYearKeys;

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

	var valueSchoolEmailFrom = $formValues.find('.valueSchoolEmailFrom').val();
	if(valueSchoolEmailFrom != null && valueSchoolEmailFrom !== '')
	var removeSchoolEmailFrom = $formFilters.find('.removeSchoolEmailFrom').val() === 'true';
	var setSchoolEmailFrom = removeSchoolEmailFrom ? null : $formValues.find('.setSchoolEmailFrom').val();
	if(removeSchoolEmailFrom || setSchoolEmailFrom != null && setSchoolEmailFrom !== '')
		vals['setSchoolEmailFrom'] = setSchoolEmailFrom;
	var addSchoolEmailFrom = $formValues.find('.addSchoolEmailFrom').val();
	if(addSchoolEmailFrom != null && addSchoolEmailFrom !== '')
		vals['addSchoolEmailFrom'] = addSchoolEmailFrom;
	var removeSchoolEmailFrom = $formValues.find('.removeSchoolEmailFrom').val();
	if(removeSchoolEmailFrom != null && removeSchoolEmailFrom !== '')
		vals['removeSchoolEmailFrom'] = removeSchoolEmailFrom;

	var valueSchoolEmailTo = $formValues.find('.valueSchoolEmailTo').val();
	if(valueSchoolEmailTo != null && valueSchoolEmailTo !== '')
	var removeSchoolEmailTo = $formFilters.find('.removeSchoolEmailTo').val() === 'true';
	var setSchoolEmailTo = removeSchoolEmailTo ? null : $formValues.find('.setSchoolEmailTo').val();
	if(removeSchoolEmailTo || setSchoolEmailTo != null && setSchoolEmailTo !== '')
		vals['setSchoolEmailTo'] = setSchoolEmailTo;
	var addSchoolEmailTo = $formValues.find('.addSchoolEmailTo').val();
	if(addSchoolEmailTo != null && addSchoolEmailTo !== '')
		vals['addSchoolEmailTo'] = addSchoolEmailTo;
	var removeSchoolEmailTo = $formValues.find('.removeSchoolEmailTo').val();
	if(removeSchoolEmailTo != null && removeSchoolEmailTo !== '')
		vals['removeSchoolEmailTo'] = removeSchoolEmailTo;

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

	var valueSchoolNumber = $formValues.find('.valueSchoolNumber').val();
	if(valueSchoolNumber != null && valueSchoolNumber !== '')
	var removeSchoolNumber = $formFilters.find('.removeSchoolNumber').val() === 'true';
	var setSchoolNumber = removeSchoolNumber ? null : $formValues.find('.setSchoolNumber').val();
	if(removeSchoolNumber || setSchoolNumber != null && setSchoolNumber !== '')
		vals['setSchoolNumber'] = setSchoolNumber;
	var addSchoolNumber = $formValues.find('.addSchoolNumber').val();
	if(addSchoolNumber != null && addSchoolNumber !== '')
		vals['addSchoolNumber'] = addSchoolNumber;
	var removeSchoolNumber = $formValues.find('.removeSchoolNumber').val();
	if(removeSchoolNumber != null && removeSchoolNumber !== '')
		vals['removeSchoolNumber'] = removeSchoolNumber;

	var valueYearKeys = $formValues.find('input.valueYearKeys:checked').val();
	if(valueYearKeys != null && valueYearKeys !== '')
		vals['addYearKeys'] = valueYearKeys;

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

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterSchoolEmail = $formFilters.find('.valueSchoolEmail').val();
		if(filterSchoolEmail != null && filterSchoolEmail !== '')
			filters.push({ name: 'fq', value: 'schoolEmail:' + filterSchoolEmail });

		var filterSchoolEmailFrom = $formFilters.find('.valueSchoolEmailFrom').val();
		if(filterSchoolEmailFrom != null && filterSchoolEmailFrom !== '')
			filters.push({ name: 'fq', value: 'schoolEmailFrom:' + filterSchoolEmailFrom });

		var filterSchoolEmailTo = $formFilters.find('.valueSchoolEmailTo').val();
		if(filterSchoolEmailTo != null && filterSchoolEmailTo !== '')
			filters.push({ name: 'fq', value: 'schoolEmailTo:' + filterSchoolEmailTo });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

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

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterSchoolEmail = $formFilters.find('.valueSchoolEmail').val();
		if(filterSchoolEmail != null && filterSchoolEmail !== '')
			filters.push({ name: 'fq', value: 'schoolEmail:' + filterSchoolEmail });

		var filterSchoolEmailFrom = $formFilters.find('.valueSchoolEmailFrom').val();
		if(filterSchoolEmailFrom != null && filterSchoolEmailFrom !== '')
			filters.push({ name: 'fq', value: 'schoolEmailFrom:' + filterSchoolEmailFrom });

		var filterSchoolEmailTo = $formFilters.find('.valueSchoolEmailTo').val();
		if(filterSchoolEmailTo != null && filterSchoolEmailTo !== '')
			filters.push({ name: 'fq', value: 'schoolEmailTo:' + filterSchoolEmailTo });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

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

	var valueSchoolLocation = $formValues.find('.valueSchoolLocation').val();
	if(valueSchoolLocation != null && valueSchoolLocation !== '')
		vals['schoolLocation'] = valueSchoolLocation;

	var valueSchoolAdministratorName = $formValues.find('.valueSchoolAdministratorName').val();
	if(valueSchoolAdministratorName != null && valueSchoolAdministratorName !== '')
		vals['schoolAdministratorName'] = valueSchoolAdministratorName;

	var valueSchoolEmail = $formValues.find('.valueSchoolEmail').val();
	if(valueSchoolEmail != null && valueSchoolEmail !== '')
		vals['schoolEmail'] = valueSchoolEmail;

	var valueSchoolEmailFrom = $formValues.find('.valueSchoolEmailFrom').val();
	if(valueSchoolEmailFrom != null && valueSchoolEmailFrom !== '')
		vals['schoolEmailFrom'] = valueSchoolEmailFrom;

	var valueSchoolEmailTo = $formValues.find('.valueSchoolEmailTo').val();
	if(valueSchoolEmailTo != null && valueSchoolEmailTo !== '')
		vals['schoolEmailTo'] = valueSchoolEmailTo;

	var valueSchoolPhoneNumber = $formValues.find('.valueSchoolPhoneNumber').val();
	if(valueSchoolPhoneNumber != null && valueSchoolPhoneNumber !== '')
		vals['schoolPhoneNumber'] = valueSchoolPhoneNumber;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueSchoolNumber = $formValues.find('.valueSchoolNumber').val();
	if(valueSchoolNumber != null && valueSchoolNumber !== '')
		vals['schoolNumber'] = valueSchoolNumber;

	var valueYearKeys = $formValues.find('input.valueYearKeys:checked').val();
	if(valueYearKeys != null && valueYearKeys !== '')
		vals['yearKeys'] = [valueYearKeys];

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
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
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
				$('.top-box').append($box);
			if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketSchoolYear', function (error, message) {
			$('#Page_yearKeys').trigger('oninput');
			$('#Page_yearKeys_add').text('add a year');
			$('#Page_yearKeys_add').removeClass('w3-disabled');
			$('#Page_yearKeys_add').attr('disabled', false);
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
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSchool' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSchool' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'Modified'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSchool' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSchool' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'Deleted'));
			}
			var val = o['schoolName'];
			if(vars.includes('schoolName')) {
				$('.inputSchool' + pk + 'SchoolName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'SchoolName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'SchoolName'));
			}
			var val = o['schoolLocation'];
			if(vars.includes('schoolLocation')) {
				$('.inputSchool' + pk + 'SchoolLocation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'SchoolLocation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'SchoolLocation'));
			}
			var val = o['schoolAdministratorName'];
			if(vars.includes('schoolAdministratorName')) {
				$('.inputSchool' + pk + 'SchoolAdministratorName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'SchoolAdministratorName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'SchoolAdministratorName'));
			}
			var val = o['schoolEmail'];
			if(vars.includes('schoolEmail')) {
				$('.inputSchool' + pk + 'SchoolEmail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'SchoolEmail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'SchoolEmail'));
			}
			var val = o['schoolEmailFrom'];
			if(vars.includes('schoolEmailFrom')) {
				$('.inputSchool' + pk + 'SchoolEmailFrom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'SchoolEmailFrom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'SchoolEmailFrom'));
			}
			var val = o['schoolEmailTo'];
			if(vars.includes('schoolEmailTo')) {
				$('.inputSchool' + pk + 'SchoolEmailTo').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'SchoolEmailTo').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'SchoolEmailTo'));
			}
			var val = o['schoolPhoneNumber'];
			if(vars.includes('schoolPhoneNumber')) {
				$('.inputSchool' + pk + 'SchoolPhoneNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'SchoolPhoneNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'SchoolPhoneNumber'));
			}
			var val = o['schoolAddress'];
			if(vars.includes('schoolAddress')) {
				$('.inputSchool' + pk + 'SchoolAddress').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'SchoolAddress').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'SchoolAddress'));
			}
			var val = o['schoolNumber'];
			if(vars.includes('schoolNumber')) {
				$('.inputSchool' + pk + 'SchoolNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'SchoolNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'SchoolNumber'));
			}
			var val = o['yearKeys'];
			if(vars.includes('yearKeys')) {
				$('.inputSchool' + pk + 'YearKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'YearKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'YearKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSchool' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSchool' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSchool' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSchool' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchool' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchool' + pk + 'UserKey'));
			}
		});
	}
}

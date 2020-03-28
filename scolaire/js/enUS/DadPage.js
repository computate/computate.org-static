
// POST //

async function postSchoolDad($formValues, success, error) {
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

	var valuePersonEmail = $formValues.find('.valuePersonEmail').val();
	if(valuePersonEmail != null && valuePersonEmail !== '')
		vals['personEmail'] = valuePersonEmail;

	var valuePersonPhoneNumber = $formValues.find('.valuePersonPhoneNumber').val();
	if(valuePersonPhoneNumber != null && valuePersonPhoneNumber !== '')
		vals['personPhoneNumber'] = valuePersonPhoneNumber;

	var valuePersonOccupation = $formValues.find('.valuePersonOccupation').val();
	if(valuePersonOccupation != null && valuePersonOccupation !== '')
		vals['personOccupation'] = valuePersonOccupation;

	var valuePersonSms = $formValues.find('.valuePersonSms').prop('checked');
	if(valuePersonSms != null && valuePersonSms !== '')
		vals['personSms'] = valuePersonSms;

	var valuePersonEmergencyContact = $formValues.find('.valuePersonEmergencyContact').prop('checked');
	if(valuePersonEmergencyContact != null && valuePersonEmergencyContact !== '')
		vals['personEmergencyContact'] = valuePersonEmergencyContact;

	var valuePersonReceiveEmail = $formValues.find('.valuePersonReceiveEmail').prop('checked');
	if(valuePersonReceiveEmail != null && valuePersonReceiveEmail !== '')
		vals['personReceiveEmail'] = valuePersonReceiveEmail;

	var valuePersonPickup = $formValues.find('.valuePersonPickup').prop('checked');
	if(valuePersonPickup != null && valuePersonPickup !== '')
		vals['personPickup'] = valuePersonPickup;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/dad'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolDadVals(vals, success, error) {
	$.ajax({
		url: '/api/dad'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUT //

async function putSchoolDad($formValues, pk, success, error) {
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

	var valuePersonEmail = $formValues.find('.valuePersonEmail').val();
	if(valuePersonEmail != null && valuePersonEmail !== '')
		vals['personEmail'] = valuePersonEmail;

	var valuePersonPhoneNumber = $formValues.find('.valuePersonPhoneNumber').val();
	if(valuePersonPhoneNumber != null && valuePersonPhoneNumber !== '')
		vals['personPhoneNumber'] = valuePersonPhoneNumber;

	var valuePersonOccupation = $formValues.find('.valuePersonOccupation').val();
	if(valuePersonOccupation != null && valuePersonOccupation !== '')
		vals['personOccupation'] = valuePersonOccupation;

	var valuePersonSms = $formValues.find('.valuePersonSms').prop('checked');
	if(valuePersonSms != null && valuePersonSms !== '')
		vals['personSms'] = valuePersonSms;

	var valuePersonEmergencyContact = $formValues.find('.valuePersonEmergencyContact').prop('checked');
	if(valuePersonEmergencyContact != null && valuePersonEmergencyContact !== '')
		vals['personEmergencyContact'] = valuePersonEmergencyContact;

	var valuePersonReceiveEmail = $formValues.find('.valuePersonReceiveEmail').prop('checked');
	if(valuePersonReceiveEmail != null && valuePersonReceiveEmail !== '')
		vals['personReceiveEmail'] = valuePersonReceiveEmail;

	var valuePersonPickup = $formValues.find('.valuePersonPickup').prop('checked');
	if(valuePersonPickup != null && valuePersonPickup !== '')
		vals['personPickup'] = valuePersonPickup;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putSchoolDadVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putSchoolDadVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/dad?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolDad($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolDadFilters($formFilters);

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

	var removePersonEmail = $formFilters.find('.removePersonEmail').val() === 'true';
	var setPersonEmail = removePersonEmail ? null : $formValues.find('.setPersonEmail').val();
	if(removePersonEmail || setPersonEmail != null && setPersonEmail !== '')
		vals['setPersonEmail'] = setPersonEmail;
	var addPersonEmail = $formValues.find('.addPersonEmail').val();
	if(addPersonEmail != null && addPersonEmail !== '')
		vals['addPersonEmail'] = addPersonEmail;
	var removePersonEmail = $formValues.find('.removePersonEmail').val();
	if(removePersonEmail != null && removePersonEmail !== '')
		vals['removePersonEmail'] = removePersonEmail;

	var removePersonPhoneNumber = $formFilters.find('.removePersonPhoneNumber').val() === 'true';
	var setPersonPhoneNumber = removePersonPhoneNumber ? null : $formValues.find('.setPersonPhoneNumber').val();
	if(removePersonPhoneNumber || setPersonPhoneNumber != null && setPersonPhoneNumber !== '')
		vals['setPersonPhoneNumber'] = setPersonPhoneNumber;
	var addPersonPhoneNumber = $formValues.find('.addPersonPhoneNumber').val();
	if(addPersonPhoneNumber != null && addPersonPhoneNumber !== '')
		vals['addPersonPhoneNumber'] = addPersonPhoneNumber;
	var removePersonPhoneNumber = $formValues.find('.removePersonPhoneNumber').val();
	if(removePersonPhoneNumber != null && removePersonPhoneNumber !== '')
		vals['removePersonPhoneNumber'] = removePersonPhoneNumber;

	var removePersonOccupation = $formFilters.find('.removePersonOccupation').val() === 'true';
	var setPersonOccupation = removePersonOccupation ? null : $formValues.find('.setPersonOccupation').val();
	if(removePersonOccupation || setPersonOccupation != null && setPersonOccupation !== '')
		vals['setPersonOccupation'] = setPersonOccupation;
	var addPersonOccupation = $formValues.find('.addPersonOccupation').val();
	if(addPersonOccupation != null && addPersonOccupation !== '')
		vals['addPersonOccupation'] = addPersonOccupation;
	var removePersonOccupation = $formValues.find('.removePersonOccupation').val();
	if(removePersonOccupation != null && removePersonOccupation !== '')
		vals['removePersonOccupation'] = removePersonOccupation;

	var removePersonSms = $formFilters.find('.removePersonSms').val() === 'true';
	var valuePersonSmsSelectVal = $formValues.find('select.setPersonSms').val();
	var valuePersonSms = null;
	if(valuePersonSmsSelectVal !== '')
		valuePersonSms = valuePersonSmsSelectVal == 'true';
	setPersonSms = removePersonSms ? null : valuePersonSms;
	if(removePersonSms || setPersonSms != null && setPersonSms !== '')
		vals['setPersonSms'] = setPersonSms;
	var addPersonSms = $formValues.find('.addPersonSms').prop('checked');
	if(addPersonSms != null && addPersonSms !== '')
		vals['addPersonSms'] = addPersonSms;
	var removePersonSms = $formValues.find('.removePersonSms').prop('checked');
	if(removePersonSms != null && removePersonSms !== '')
		vals['removePersonSms'] = removePersonSms;

	var removePersonEmergencyContact = $formFilters.find('.removePersonEmergencyContact').val() === 'true';
	var valuePersonEmergencyContactSelectVal = $formValues.find('select.setPersonEmergencyContact').val();
	var valuePersonEmergencyContact = null;
	if(valuePersonEmergencyContactSelectVal !== '')
		valuePersonEmergencyContact = valuePersonEmergencyContactSelectVal == 'true';
	setPersonEmergencyContact = removePersonEmergencyContact ? null : valuePersonEmergencyContact;
	if(removePersonEmergencyContact || setPersonEmergencyContact != null && setPersonEmergencyContact !== '')
		vals['setPersonEmergencyContact'] = setPersonEmergencyContact;
	var addPersonEmergencyContact = $formValues.find('.addPersonEmergencyContact').prop('checked');
	if(addPersonEmergencyContact != null && addPersonEmergencyContact !== '')
		vals['addPersonEmergencyContact'] = addPersonEmergencyContact;
	var removePersonEmergencyContact = $formValues.find('.removePersonEmergencyContact').prop('checked');
	if(removePersonEmergencyContact != null && removePersonEmergencyContact !== '')
		vals['removePersonEmergencyContact'] = removePersonEmergencyContact;

	var removePersonReceiveEmail = $formFilters.find('.removePersonReceiveEmail').val() === 'true';
	var valuePersonReceiveEmailSelectVal = $formValues.find('select.setPersonReceiveEmail').val();
	var valuePersonReceiveEmail = null;
	if(valuePersonReceiveEmailSelectVal !== '')
		valuePersonReceiveEmail = valuePersonReceiveEmailSelectVal == 'true';
	setPersonReceiveEmail = removePersonReceiveEmail ? null : valuePersonReceiveEmail;
	if(removePersonReceiveEmail || setPersonReceiveEmail != null && setPersonReceiveEmail !== '')
		vals['setPersonReceiveEmail'] = setPersonReceiveEmail;
	var addPersonReceiveEmail = $formValues.find('.addPersonReceiveEmail').prop('checked');
	if(addPersonReceiveEmail != null && addPersonReceiveEmail !== '')
		vals['addPersonReceiveEmail'] = addPersonReceiveEmail;
	var removePersonReceiveEmail = $formValues.find('.removePersonReceiveEmail').prop('checked');
	if(removePersonReceiveEmail != null && removePersonReceiveEmail !== '')
		vals['removePersonReceiveEmail'] = removePersonReceiveEmail;

	var removePersonPickup = $formFilters.find('.removePersonPickup').val() === 'true';
	var valuePersonPickupSelectVal = $formValues.find('select.setPersonPickup').val();
	var valuePersonPickup = null;
	if(valuePersonPickupSelectVal !== '')
		valuePersonPickup = valuePersonPickupSelectVal == 'true';
	setPersonPickup = removePersonPickup ? null : valuePersonPickup;
	if(removePersonPickup || setPersonPickup != null && setPersonPickup !== '')
		vals['setPersonPickup'] = setPersonPickup;
	var addPersonPickup = $formValues.find('.addPersonPickup').prop('checked');
	if(addPersonPickup != null && addPersonPickup !== '')
		vals['addPersonPickup'] = addPersonPickup;
	var removePersonPickup = $formValues.find('.removePersonPickup').prop('checked');
	if(removePersonPickup != null && removePersonPickup !== '')
		vals['removePersonPickup'] = removePersonPickup;

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

	patchSchoolDadVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolDadFilters($formFilters) {
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

	var filterPersonFirstName = $formFilters.find('.valuePersonFirstName').val();
	if(filterPersonFirstName != null && filterPersonFirstName !== '')
		filters.push({ name: 'fq', value: 'personFirstName:' + filterPersonFirstName });

	var filterFamilyName = $formFilters.find('.valueFamilyName').val();
	if(filterFamilyName != null && filterFamilyName !== '')
		filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

	var filterPersonFirstNamePreferred = $formFilters.find('.valuePersonFirstNamePreferred').val();
	if(filterPersonFirstNamePreferred != null && filterPersonFirstNamePreferred !== '')
		filters.push({ name: 'fq', value: 'personFirstNamePreferred:' + filterPersonFirstNamePreferred });

	var filterPersonEmail = $formFilters.find('.valuePersonEmail').val();
	if(filterPersonEmail != null && filterPersonEmail !== '')
		filters.push({ name: 'fq', value: 'personEmail:' + filterPersonEmail });

	var filterPersonPhoneNumber = $formFilters.find('.valuePersonPhoneNumber').val();
	if(filterPersonPhoneNumber != null && filterPersonPhoneNumber !== '')
		filters.push({ name: 'fq', value: 'personPhoneNumber:' + filterPersonPhoneNumber });

	var filterPersonOccupation = $formFilters.find('.valuePersonOccupation').val();
	if(filterPersonOccupation != null && filterPersonOccupation !== '')
		filters.push({ name: 'fq', value: 'personOccupation:' + filterPersonOccupation });

	var $filterPersonSmsCheckbox = $formFilters.find('input.valuePersonSms[type = "checkbox"]');
	var $filterPersonSmsSelect = $formFilters.find('select.valuePersonSms');
	var filterPersonSms = $filterPersonSmsSelect.length ? $filterPersonSmsSelect.val() : $filterPersonSmsCheckbox.prop('checked');
	var filterPersonSmsSelectVal = $formFilters.find('select.filterPersonSms').val();
	var filterPersonSms = null;
	if(filterPersonSmsSelectVal !== '')
		filterPersonSms = filterPersonSmsSelectVal == 'true';
	if(filterPersonSms != null && filterPersonSms === true)
		filters.push({ name: 'fq', value: 'personSms:' + filterPersonSms });

	var $filterPersonEmergencyContactCheckbox = $formFilters.find('input.valuePersonEmergencyContact[type = "checkbox"]');
	var $filterPersonEmergencyContactSelect = $formFilters.find('select.valuePersonEmergencyContact');
	var filterPersonEmergencyContact = $filterPersonEmergencyContactSelect.length ? $filterPersonEmergencyContactSelect.val() : $filterPersonEmergencyContactCheckbox.prop('checked');
	var filterPersonEmergencyContactSelectVal = $formFilters.find('select.filterPersonEmergencyContact').val();
	var filterPersonEmergencyContact = null;
	if(filterPersonEmergencyContactSelectVal !== '')
		filterPersonEmergencyContact = filterPersonEmergencyContactSelectVal == 'true';
	if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
		filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

	var $filterPersonReceiveEmailCheckbox = $formFilters.find('input.valuePersonReceiveEmail[type = "checkbox"]');
	var $filterPersonReceiveEmailSelect = $formFilters.find('select.valuePersonReceiveEmail');
	var filterPersonReceiveEmail = $filterPersonReceiveEmailSelect.length ? $filterPersonReceiveEmailSelect.val() : $filterPersonReceiveEmailCheckbox.prop('checked');
	var filterPersonReceiveEmailSelectVal = $formFilters.find('select.filterPersonReceiveEmail').val();
	var filterPersonReceiveEmail = null;
	if(filterPersonReceiveEmailSelectVal !== '')
		filterPersonReceiveEmail = filterPersonReceiveEmailSelectVal == 'true';
	if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
		filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

	var $filterPersonPickupCheckbox = $formFilters.find('input.valuePersonPickup[type = "checkbox"]');
	var $filterPersonPickupSelect = $formFilters.find('select.valuePersonPickup');
	var filterPersonPickup = $filterPersonPickupSelect.length ? $filterPersonPickupSelect.val() : $filterPersonPickupCheckbox.prop('checked');
	var filterPersonPickupSelectVal = $formFilters.find('select.filterPersonPickup').val();
	var filterPersonPickup = null;
	if(filterPersonPickupSelectVal !== '')
		filterPersonPickup = filterPersonPickupSelectVal == 'true';
	if(filterPersonPickup != null && filterPersonPickup === true)
		filters.push({ name: 'fq', value: 'personPickup:' + filterPersonPickup });

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

	var filterDadKey = $formFilters.find('.valueDadKey').val();
	if(filterDadKey != null && filterDadKey !== '')
		filters.push({ name: 'fq', value: 'dadKey:' + filterDadKey });

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

	var filterPersonRelation = $formFilters.find('.valuePersonRelation').val();
	if(filterPersonRelation != null && filterPersonRelation !== '')
		filters.push({ name: 'fq', value: 'personRelation:' + filterPersonRelation });

	var filterDadCompleteName = $formFilters.find('.valueDadCompleteName').val();
	if(filterDadCompleteName != null && filterDadCompleteName !== '')
		filters.push({ name: 'fq', value: 'dadCompleteName:' + filterDadCompleteName });
	return filters;
}

function patchSchoolDadVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolDadVals(filters, vals, success, error);
}

function patchSchoolDadVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/dad?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolDad(pk) {
	$.ajax({
		url: '/api/dad/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolDad($formFilters, success, error) {
	var filters = searchSchoolDadFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolDadVals(filters, success, error);
}

function searchSchoolDadFilters($formFilters) {
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

	var filterPersonFirstName = $formFilters.find('.valuePersonFirstName').val();
	if(filterPersonFirstName != null && filterPersonFirstName !== '')
		filters.push({ name: 'fq', value: 'personFirstName:' + filterPersonFirstName });

	var filterFamilyName = $formFilters.find('.valueFamilyName').val();
	if(filterFamilyName != null && filterFamilyName !== '')
		filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

	var filterPersonFirstNamePreferred = $formFilters.find('.valuePersonFirstNamePreferred').val();
	if(filterPersonFirstNamePreferred != null && filterPersonFirstNamePreferred !== '')
		filters.push({ name: 'fq', value: 'personFirstNamePreferred:' + filterPersonFirstNamePreferred });

	var filterPersonEmail = $formFilters.find('.valuePersonEmail').val();
	if(filterPersonEmail != null && filterPersonEmail !== '')
		filters.push({ name: 'fq', value: 'personEmail:' + filterPersonEmail });

	var filterPersonPhoneNumber = $formFilters.find('.valuePersonPhoneNumber').val();
	if(filterPersonPhoneNumber != null && filterPersonPhoneNumber !== '')
		filters.push({ name: 'fq', value: 'personPhoneNumber:' + filterPersonPhoneNumber });

	var filterPersonOccupation = $formFilters.find('.valuePersonOccupation').val();
	if(filterPersonOccupation != null && filterPersonOccupation !== '')
		filters.push({ name: 'fq', value: 'personOccupation:' + filterPersonOccupation });

	var $filterPersonSmsCheckbox = $formFilters.find('input.valuePersonSms[type = "checkbox"]');
	var $filterPersonSmsSelect = $formFilters.find('select.valuePersonSms');
	var filterPersonSms = $filterPersonSmsSelect.length ? $filterPersonSmsSelect.val() : $filterPersonSmsCheckbox.prop('checked');
	var filterPersonSmsSelectVal = $formFilters.find('select.filterPersonSms').val();
	var filterPersonSms = null;
	if(filterPersonSmsSelectVal !== '')
		filterPersonSms = filterPersonSmsSelectVal == 'true';
	if(filterPersonSms != null && filterPersonSms === true)
		filters.push({ name: 'fq', value: 'personSms:' + filterPersonSms });

	var $filterPersonEmergencyContactCheckbox = $formFilters.find('input.valuePersonEmergencyContact[type = "checkbox"]');
	var $filterPersonEmergencyContactSelect = $formFilters.find('select.valuePersonEmergencyContact');
	var filterPersonEmergencyContact = $filterPersonEmergencyContactSelect.length ? $filterPersonEmergencyContactSelect.val() : $filterPersonEmergencyContactCheckbox.prop('checked');
	var filterPersonEmergencyContactSelectVal = $formFilters.find('select.filterPersonEmergencyContact').val();
	var filterPersonEmergencyContact = null;
	if(filterPersonEmergencyContactSelectVal !== '')
		filterPersonEmergencyContact = filterPersonEmergencyContactSelectVal == 'true';
	if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
		filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

	var $filterPersonReceiveEmailCheckbox = $formFilters.find('input.valuePersonReceiveEmail[type = "checkbox"]');
	var $filterPersonReceiveEmailSelect = $formFilters.find('select.valuePersonReceiveEmail');
	var filterPersonReceiveEmail = $filterPersonReceiveEmailSelect.length ? $filterPersonReceiveEmailSelect.val() : $filterPersonReceiveEmailCheckbox.prop('checked');
	var filterPersonReceiveEmailSelectVal = $formFilters.find('select.filterPersonReceiveEmail').val();
	var filterPersonReceiveEmail = null;
	if(filterPersonReceiveEmailSelectVal !== '')
		filterPersonReceiveEmail = filterPersonReceiveEmailSelectVal == 'true';
	if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
		filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

	var $filterPersonPickupCheckbox = $formFilters.find('input.valuePersonPickup[type = "checkbox"]');
	var $filterPersonPickupSelect = $formFilters.find('select.valuePersonPickup');
	var filterPersonPickup = $filterPersonPickupSelect.length ? $filterPersonPickupSelect.val() : $filterPersonPickupCheckbox.prop('checked');
	var filterPersonPickupSelectVal = $formFilters.find('select.filterPersonPickup').val();
	var filterPersonPickup = null;
	if(filterPersonPickupSelectVal !== '')
		filterPersonPickup = filterPersonPickupSelectVal == 'true';
	if(filterPersonPickup != null && filterPersonPickup === true)
		filters.push({ name: 'fq', value: 'personPickup:' + filterPersonPickup });

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

	var filterDadKey = $formFilters.find('.valueDadKey').val();
	if(filterDadKey != null && filterDadKey !== '')
		filters.push({ name: 'fq', value: 'dadKey:' + filterDadKey });

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

	var filterPersonRelation = $formFilters.find('.valuePersonRelation').val();
	if(filterPersonRelation != null && filterPersonRelation !== '')
		filters.push({ name: 'fq', value: 'personRelation:' + filterPersonRelation });

	var filterDadCompleteName = $formFilters.find('.valueDadCompleteName').val();
	if(filterDadCompleteName != null && filterDadCompleteName !== '')
		filters.push({ name: 'fq', value: 'dadCompleteName:' + filterDadCompleteName });
	return filters;
}

function searchSchoolDadVals(filters, success, error) {
	$.ajax({
		url: '/api/dad?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolDadObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-male ');
			var $span = $('<span>').attr('class', '').text(o['dadCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolDadVals($formFilters, success, error);
}

function suggestSchoolDadEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['dadKeys'];
			var checked = Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_dadKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_dadKeys_" + o['pk'] + "'); patchSchoolDadVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolDadForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

async function websocketSchoolDad(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolDad', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-light-blue ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'far fa-male w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modify dads');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-light-blue ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
	}
}
async function websocketSchoolDadInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolDadVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputSchoolDad' + pk + 'Created').val(o['created']);
				$('.varSchoolDad' + pk + 'Created').text(o['created']);
			}
			if(vars.includes('modified')) {
				$('.inputSchoolDad' + pk + 'Modified').val(o['modified']);
				$('.varSchoolDad' + pk + 'Modified').text(o['modified']);
			}
			if(vars.includes('archived')) {
				$('.inputSchoolDad' + pk + 'Archived').val(o['archived']);
				$('.varSchoolDad' + pk + 'Archived').text(o['archived']);
			}
			if(vars.includes('deleted')) {
				$('.inputSchoolDad' + pk + 'Deleted').val(o['deleted']);
				$('.varSchoolDad' + pk + 'Deleted').text(o['deleted']);
			}
			if(vars.includes('personFirstName')) {
				$('.inputSchoolDad' + pk + 'PersonFirstName').val(o['personFirstName']);
				$('.varSchoolDad' + pk + 'PersonFirstName').text(o['personFirstName']);
			}
			if(vars.includes('familyName')) {
				$('.inputSchoolDad' + pk + 'FamilyName').val(o['familyName']);
				$('.varSchoolDad' + pk + 'FamilyName').text(o['familyName']);
			}
			if(vars.includes('personFirstNamePreferred')) {
				$('.inputSchoolDad' + pk + 'PersonFirstNamePreferred').val(o['personFirstNamePreferred']);
				$('.varSchoolDad' + pk + 'PersonFirstNamePreferred').text(o['personFirstNamePreferred']);
			}
			if(vars.includes('personEmail')) {
				$('.inputSchoolDad' + pk + 'PersonEmail').val(o['personEmail']);
				$('.varSchoolDad' + pk + 'PersonEmail').text(o['personEmail']);
			}
			if(vars.includes('personPhoneNumber')) {
				$('.inputSchoolDad' + pk + 'PersonPhoneNumber').val(o['personPhoneNumber']);
				$('.varSchoolDad' + pk + 'PersonPhoneNumber').text(o['personPhoneNumber']);
			}
			if(vars.includes('personOccupation')) {
				$('.inputSchoolDad' + pk + 'PersonOccupation').val(o['personOccupation']);
				$('.varSchoolDad' + pk + 'PersonOccupation').text(o['personOccupation']);
			}
			if(vars.includes('personSms')) {
				$('.inputSchoolDad' + pk + 'PersonSms').val(o['personSms']);
				$('.varSchoolDad' + pk + 'PersonSms').text(o['personSms']);
			}
			if(vars.includes('personEmergencyContact')) {
				$('.inputSchoolDad' + pk + 'PersonEmergencyContact').val(o['personEmergencyContact']);
				$('.varSchoolDad' + pk + 'PersonEmergencyContact').text(o['personEmergencyContact']);
			}
			if(vars.includes('personReceiveEmail')) {
				$('.inputSchoolDad' + pk + 'PersonReceiveEmail').val(o['personReceiveEmail']);
				$('.varSchoolDad' + pk + 'PersonReceiveEmail').text(o['personReceiveEmail']);
			}
			if(vars.includes('personPickup')) {
				$('.inputSchoolDad' + pk + 'PersonPickup').val(o['personPickup']);
				$('.varSchoolDad' + pk + 'PersonPickup').text(o['personPickup']);
			}
			if(vars.includes('enrollmentKeys')) {
				$('.inputSchoolDad' + pk + 'EnrollmentKeys').val(o['enrollmentKeys']);
				$('.varSchoolDad' + pk + 'EnrollmentKeys').text(o['enrollmentKeys']);
			}
		});
	}
}

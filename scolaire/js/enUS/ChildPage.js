
// POST //

async function postSchoolChild($formValues, success, error) {
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

	var valueEnfantVaccinesCurrent = $formValues.find('.valueEnfantVaccinesCurrent').prop('checked');
	if(valueEnfantVaccinesCurrent != null && valueEnfantVaccinesCurrent !== '')
		vals['enfantVaccinesCurrent'] = valueEnfantVaccinesCurrent;

	var valueChildPottyTrained = $formValues.find('.valueChildPottyTrained').prop('checked');
	if(valueChildPottyTrained != null && valueChildPottyTrained !== '')
		vals['childPottyTrained'] = valueChildPottyTrained;

	var valueChildMedicalConditions = $formValues.find('.valueChildMedicalConditions').val();
	if(valueChildMedicalConditions != null && valueChildMedicalConditions !== '')
		vals['childMedicalConditions'] = valueChildMedicalConditions;

	var valueChildPreviousSchoolsAttended = $formValues.find('.valueChildPreviousSchoolsAttended').val();
	if(valueChildPreviousSchoolsAttended != null && valueChildPreviousSchoolsAttended !== '')
		vals['childPreviousSchoolsAttended'] = valueChildPreviousSchoolsAttended;

	var valueChildDescription = $formValues.find('.valueChildDescription').val();
	if(valueChildDescription != null && valueChildDescription !== '')
		vals['childDescription'] = valueChildDescription;

	var valueChildObjectives = $formValues.find('.valueChildObjectives').val();
	if(valueChildObjectives != null && valueChildObjectives !== '')
		vals['childObjectives'] = valueChildObjectives;

	var valueEnrollmentKeys = $formValues.find('.valueEnrollmentKeys').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valueChildCompleteName = $formValues.find('.valueChildCompleteName').val();
	if(valueChildCompleteName != null && valueChildCompleteName !== '')
		vals['childCompleteName'] = valueChildCompleteName;

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

// PATCH //

async function patchSchoolChild($formFilters, $formValues, success, error) {
	var filters = patchSchoolChildFilters($formFilters);

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

	var removeEnfantVaccinesCurrent = $formFilters.find('.removeEnfantVaccinesCurrent').val() === 'true';
	var setEnfantVaccinesCurrent = removeEnfantVaccinesCurrent ? null : $formValues.find('.setEnfantVaccinesCurrent').prop('checked');
	if(removeEnfantVaccinesCurrent || setEnfantVaccinesCurrent != null && setEnfantVaccinesCurrent !== '')
		vals['setEnfantVaccinesCurrent'] = setEnfantVaccinesCurrent;
	var addEnfantVaccinesCurrent = $formValues.find('.addEnfantVaccinesCurrent').prop('checked');
	if(addEnfantVaccinesCurrent != null && addEnfantVaccinesCurrent !== '')
		vals['addEnfantVaccinesCurrent'] = addEnfantVaccinesCurrent;
	var removeEnfantVaccinesCurrent = $formValues.find('.removeEnfantVaccinesCurrent').prop('checked');
	if(removeEnfantVaccinesCurrent != null && removeEnfantVaccinesCurrent !== '')
		vals['removeEnfantVaccinesCurrent'] = removeEnfantVaccinesCurrent;

	var removeChildPottyTrained = $formFilters.find('.removeChildPottyTrained').val() === 'true';
	var setChildPottyTrained = removeChildPottyTrained ? null : $formValues.find('.setChildPottyTrained').prop('checked');
	if(removeChildPottyTrained || setChildPottyTrained != null && setChildPottyTrained !== '')
		vals['setChildPottyTrained'] = setChildPottyTrained;
	var addChildPottyTrained = $formValues.find('.addChildPottyTrained').prop('checked');
	if(addChildPottyTrained != null && addChildPottyTrained !== '')
		vals['addChildPottyTrained'] = addChildPottyTrained;
	var removeChildPottyTrained = $formValues.find('.removeChildPottyTrained').prop('checked');
	if(removeChildPottyTrained != null && removeChildPottyTrained !== '')
		vals['removeChildPottyTrained'] = removeChildPottyTrained;

	var removeChildMedicalConditions = $formFilters.find('.removeChildMedicalConditions').val() === 'true';
	var setChildMedicalConditions = removeChildMedicalConditions ? null : $formValues.find('.setChildMedicalConditions').val();
	if(removeChildMedicalConditions || setChildMedicalConditions != null && setChildMedicalConditions !== '')
		vals['setChildMedicalConditions'] = setChildMedicalConditions;
	var addChildMedicalConditions = $formValues.find('.addChildMedicalConditions').val();
	if(addChildMedicalConditions != null && addChildMedicalConditions !== '')
		vals['addChildMedicalConditions'] = addChildMedicalConditions;
	var removeChildMedicalConditions = $formValues.find('.removeChildMedicalConditions').val();
	if(removeChildMedicalConditions != null && removeChildMedicalConditions !== '')
		vals['removeChildMedicalConditions'] = removeChildMedicalConditions;

	var removeChildPreviousSchoolsAttended = $formFilters.find('.removeChildPreviousSchoolsAttended').val() === 'true';
	var setChildPreviousSchoolsAttended = removeChildPreviousSchoolsAttended ? null : $formValues.find('.setChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended || setChildPreviousSchoolsAttended != null && setChildPreviousSchoolsAttended !== '')
		vals['setChildPreviousSchoolsAttended'] = setChildPreviousSchoolsAttended;
	var addChildPreviousSchoolsAttended = $formValues.find('.addChildPreviousSchoolsAttended').val();
	if(addChildPreviousSchoolsAttended != null && addChildPreviousSchoolsAttended !== '')
		vals['addChildPreviousSchoolsAttended'] = addChildPreviousSchoolsAttended;
	var removeChildPreviousSchoolsAttended = $formValues.find('.removeChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended != null && removeChildPreviousSchoolsAttended !== '')
		vals['removeChildPreviousSchoolsAttended'] = removeChildPreviousSchoolsAttended;

	var removeChildDescription = $formFilters.find('.removeChildDescription').val() === 'true';
	var setChildDescription = removeChildDescription ? null : $formValues.find('.setChildDescription').val();
	if(removeChildDescription || setChildDescription != null && setChildDescription !== '')
		vals['setChildDescription'] = setChildDescription;
	var addChildDescription = $formValues.find('.addChildDescription').val();
	if(addChildDescription != null && addChildDescription !== '')
		vals['addChildDescription'] = addChildDescription;
	var removeChildDescription = $formValues.find('.removeChildDescription').val();
	if(removeChildDescription != null && removeChildDescription !== '')
		vals['removeChildDescription'] = removeChildDescription;

	var removeChildObjectives = $formFilters.find('.removeChildObjectives').val() === 'true';
	var setChildObjectives = removeChildObjectives ? null : $formValues.find('.setChildObjectives').val();
	if(removeChildObjectives || setChildObjectives != null && setChildObjectives !== '')
		vals['setChildObjectives'] = setChildObjectives;
	var addChildObjectives = $formValues.find('.addChildObjectives').val();
	if(addChildObjectives != null && addChildObjectives !== '')
		vals['addChildObjectives'] = addChildObjectives;
	var removeChildObjectives = $formValues.find('.removeChildObjectives').val();
	if(removeChildObjectives != null && removeChildObjectives !== '')
		vals['removeChildObjectives'] = removeChildObjectives;

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

	var removeChildCompleteName = $formFilters.find('.removeChildCompleteName').val() === 'true';
	var setChildCompleteName = removeChildCompleteName ? null : $formValues.find('.setChildCompleteName').val();
	if(removeChildCompleteName || setChildCompleteName != null && setChildCompleteName !== '')
		vals['setChildCompleteName'] = setChildCompleteName;
	var addChildCompleteName = $formValues.find('.addChildCompleteName').val();
	if(addChildCompleteName != null && addChildCompleteName !== '')
		vals['addChildCompleteName'] = addChildCompleteName;
	var removeChildCompleteName = $formValues.find('.removeChildCompleteName').val();
	if(removeChildCompleteName != null && removeChildCompleteName !== '')
		vals['removeChildCompleteName'] = removeChildCompleteName;

	patchSchoolChildVals(filters, vals, success, error);
}

function patchSchoolChildFilters($formFilters) {
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

	var filterEnfantVaccinesCurrent = $formFilters.find('.valueEnfantVaccinesCurrent').prop('checked');
	if(filterEnfantVaccinesCurrent != null && filterEnfantVaccinesCurrent === true)
		filters.push({ name: 'fq', value: 'enfantVaccinesCurrent:' + filterEnfantVaccinesCurrent });

	var filterChildPottyTrained = $formFilters.find('.valueChildPottyTrained').prop('checked');
	if(filterChildPottyTrained != null && filterChildPottyTrained === true)
		filters.push({ name: 'fq', value: 'childPottyTrained:' + filterChildPottyTrained });

	var filterChildMedicalConditions = $formFilters.find('.valueChildMedicalConditions').val();
	if(filterChildMedicalConditions != null && filterChildMedicalConditions !== '')
		filters.push({ name: 'fq', value: 'childMedicalConditions:' + filterChildMedicalConditions });

	var filterChildPreviousSchoolsAttended = $formFilters.find('.valueChildPreviousSchoolsAttended').val();
	if(filterChildPreviousSchoolsAttended != null && filterChildPreviousSchoolsAttended !== '')
		filters.push({ name: 'fq', value: 'childPreviousSchoolsAttended:' + filterChildPreviousSchoolsAttended });

	var filterChildDescription = $formFilters.find('.valueChildDescription').val();
	if(filterChildDescription != null && filterChildDescription !== '')
		filters.push({ name: 'fq', value: 'childDescription:' + filterChildDescription });

	var filterChildObjectives = $formFilters.find('.valueChildObjectives').val();
	if(filterChildObjectives != null && filterChildObjectives !== '')
		filters.push({ name: 'fq', value: 'childObjectives:' + filterChildObjectives });

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

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterChildKey = $formFilters.find('.valueChildKey').val();
	if(filterChildKey != null && filterChildKey !== '')
		filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

	var filterFamilySort = $formFilters.find('.valueFamilySort').val();
	if(filterFamilySort != null && filterFamilySort !== '')
		filters.push({ name: 'fq', value: 'familySort:' + filterFamilySort });

	var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
	if(filterSchoolSort != null && filterSchoolSort !== '')
		filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

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

// DELETE //

async function deleteSchoolChild(pk) {
	$.ajax({
		url: '/api/child/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
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

	var filterEnfantVaccinesCurrent = $formFilters.find('.valueEnfantVaccinesCurrent').prop('checked');
	if(filterEnfantVaccinesCurrent != null && filterEnfantVaccinesCurrent === true)
		filters.push({ name: 'fq', value: 'enfantVaccinesCurrent:' + filterEnfantVaccinesCurrent });

	var filterChildPottyTrained = $formFilters.find('.valueChildPottyTrained').prop('checked');
	if(filterChildPottyTrained != null && filterChildPottyTrained === true)
		filters.push({ name: 'fq', value: 'childPottyTrained:' + filterChildPottyTrained });

	var filterChildMedicalConditions = $formFilters.find('.valueChildMedicalConditions').val();
	if(filterChildMedicalConditions != null && filterChildMedicalConditions !== '')
		filters.push({ name: 'fq', value: 'childMedicalConditions:' + filterChildMedicalConditions });

	var filterChildPreviousSchoolsAttended = $formFilters.find('.valueChildPreviousSchoolsAttended').val();
	if(filterChildPreviousSchoolsAttended != null && filterChildPreviousSchoolsAttended !== '')
		filters.push({ name: 'fq', value: 'childPreviousSchoolsAttended:' + filterChildPreviousSchoolsAttended });

	var filterChildDescription = $formFilters.find('.valueChildDescription').val();
	if(filterChildDescription != null && filterChildDescription !== '')
		filters.push({ name: 'fq', value: 'childDescription:' + filterChildDescription });

	var filterChildObjectives = $formFilters.find('.valueChildObjectives').val();
	if(filterChildObjectives != null && filterChildObjectives !== '')
		filters.push({ name: 'fq', value: 'childObjectives:' + filterChildObjectives });

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

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterChildKey = $formFilters.find('.valueChildKey').val();
	if(filterChildKey != null && filterChildKey !== '')
		filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

	var filterFamilySort = $formFilters.find('.valueFamilySort').val();
	if(filterFamilySort != null && filterFamilySort !== '')
		filters.push({ name: 'fq', value: 'familySort:' + filterFamilySort });

	var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
	if(filterSchoolSort != null && filterSchoolSort !== '')
		filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

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
			var $i = $('<i>').attr('class', 'far fa-child w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['childCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolChildVals($formFilters, success, error);
}

function suggestSchoolChildEnrollmentKeys(filters, $list, pk = null) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit w3-padding-small ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrl'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['childKey'];
			var checked = Array.isArray(val) ? val.includes(pk) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_childKey_' + o['pk']);
			$input.attr('class', 'w3-check ');
			$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_childKey_" + o['pk'] + "'); patchSchoolChildVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
			$input.attr('onclick', 'removeGlow($(this)); ');
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
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
	var eventBus = new EventBus('/eventbus');
	eventBus.onopen = function () {

		eventBus.registerHandler('websocketSchoolChild', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-green ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'far fa-child w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modify children');
				var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
				var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
				var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
				var $progress = $('<div>').attr('class', 'w3-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
		});
	}
}


// POST //

async function postSchoolPayment($formValues, success, error) {
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

	var valuePaymentSystem = $formValues.find('.valuePaymentSystem').prop('checked');
	if(valuePaymentSystem != null && valuePaymentSystem !== '')
		vals['paymentSystem'] = valuePaymentSystem;

	var valuePaymentDescription = $formValues.find('.valuePaymentDescription').val();
	if(valuePaymentDescription != null && valuePaymentDescription !== '')
		vals['paymentDescription'] = valuePaymentDescription;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(valueEnrollmentPaymentComplete != null && valueEnrollmentPaymentComplete !== '')
		vals['enrollmentPaymentComplete'] = valueEnrollmentPaymentComplete;

	var valuePaymentBy = $formValues.find('.valuePaymentBy').val();
	if(valuePaymentBy != null && valuePaymentBy !== '')
		vals['paymentBy'] = valuePaymentBy;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
		vals['enrollmentPaymentEachMonth'] = valueEnrollmentPaymentEachMonth;

	var valueTransactionId = $formValues.find('.valueTransactionId').val();
	if(valueTransactionId != null && valueTransactionId !== '')
		vals['transactionId'] = valueTransactionId;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
		vals['customerProfileId'] = valueCustomerProfileId;

	var valueTransactionStatus = $formValues.find('.valueTransactionStatus').val();
	if(valueTransactionStatus != null && valueTransactionStatus !== '')
		vals['transactionStatus'] = valueTransactionStatus;

	var valueEnrollmentKey = $formValues.find('input.valueEnrollmentKey:checked').val();
	if(valueEnrollmentKey != null && valueEnrollmentKey !== '')
		vals['enrollmentKey'] = valueEnrollmentKey;

	var valuePaymentRecieved = $formValues.find('.valuePaymentRecieved').prop('checked');
	if(valuePaymentRecieved != null && valuePaymentRecieved !== '')
		vals['paymentRecieved'] = valuePaymentRecieved;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	if(valueChildCompleteNamePreferred != null && valueChildCompleteNamePreferred !== '')
		vals['childCompleteNamePreferred'] = valueChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	if(valueChildBirthDate != null && valueChildBirthDate !== '')
		vals['childBirthDate'] = valueChildBirthDate;

	var valueMomCompleteNamePreferred = $formValues.find('.valueMomCompleteNamePreferred').val();
	if(valueMomCompleteNamePreferred != null && valueMomCompleteNamePreferred !== '')
		vals['momCompleteNamePreferred'] = valueMomCompleteNamePreferred;

	var valueDadCompleteNamePreferred = $formValues.find('.valueDadCompleteNamePreferred').val();
	if(valueDadCompleteNamePreferred != null && valueDadCompleteNamePreferred !== '')
		vals['dadCompleteNamePreferred'] = valueDadCompleteNamePreferred;

	var valueChargeAmount = $formValues.find('.valueChargeAmount').val();
	if(valueChargeAmount != null && valueChargeAmount !== '')
		vals['chargeAmount'] = valueChargeAmount;

	var valueChargeAmountFuture = $formValues.find('.valueChargeAmountFuture').val();
	if(valueChargeAmountFuture != null && valueChargeAmountFuture !== '')
		vals['chargeAmountFuture'] = valueChargeAmountFuture;

	var valueChargeEnrollment = $formValues.find('.valueChargeEnrollment').prop('checked');
	if(valueChargeEnrollment != null && valueChargeEnrollment !== '')
		vals['chargeEnrollment'] = valueChargeEnrollment;

	var valueChargeFirstLast = $formValues.find('.valueChargeFirstLast').prop('checked');
	if(valueChargeFirstLast != null && valueChargeFirstLast !== '')
		vals['chargeFirstLast'] = valueChargeFirstLast;

	var valueChargeMonth = $formValues.find('.valueChargeMonth').prop('checked');
	if(valueChargeMonth != null && valueChargeMonth !== '')
		vals['chargeMonth'] = valueChargeMonth;

	var valueChargeLateFee = $formValues.find('.valueChargeLateFee').prop('checked');
	if(valueChargeLateFee != null && valueChargeLateFee !== '')
		vals['chargeLateFee'] = valueChargeLateFee;

	var valuePaymentShortName = $formValues.find('.valuePaymentShortName').val();
	if(valuePaymentShortName != null && valuePaymentShortName !== '')
		vals['paymentShortName'] = valuePaymentShortName;

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

// PUT //

async function putSchoolPayment($formValues, pk, success, error) {
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

	var valuePaymentSystem = $formValues.find('.valuePaymentSystem').prop('checked');
	if(valuePaymentSystem != null && valuePaymentSystem !== '')
		vals['paymentSystem'] = valuePaymentSystem;

	var valuePaymentDescription = $formValues.find('.valuePaymentDescription').val();
	if(valuePaymentDescription != null && valuePaymentDescription !== '')
		vals['paymentDescription'] = valuePaymentDescription;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(valueEnrollmentPaymentComplete != null && valueEnrollmentPaymentComplete !== '')
		vals['enrollmentPaymentComplete'] = valueEnrollmentPaymentComplete;

	var valuePaymentBy = $formValues.find('.valuePaymentBy').val();
	if(valuePaymentBy != null && valuePaymentBy !== '')
		vals['paymentBy'] = valuePaymentBy;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
		vals['enrollmentPaymentEachMonth'] = valueEnrollmentPaymentEachMonth;

	var valueTransactionId = $formValues.find('.valueTransactionId').val();
	if(valueTransactionId != null && valueTransactionId !== '')
		vals['transactionId'] = valueTransactionId;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
		vals['customerProfileId'] = valueCustomerProfileId;

	var valueTransactionStatus = $formValues.find('.valueTransactionStatus').val();
	if(valueTransactionStatus != null && valueTransactionStatus !== '')
		vals['transactionStatus'] = valueTransactionStatus;

	var valueEnrollmentKey = $formValues.find('input.valueEnrollmentKey:checked').val();
	if(valueEnrollmentKey != null && valueEnrollmentKey !== '')
		vals['enrollmentKey'] = valueEnrollmentKey;

	var valuePaymentRecieved = $formValues.find('.valuePaymentRecieved').prop('checked');
	if(valuePaymentRecieved != null && valuePaymentRecieved !== '')
		vals['paymentRecieved'] = valuePaymentRecieved;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	if(valueChildCompleteNamePreferred != null && valueChildCompleteNamePreferred !== '')
		vals['childCompleteNamePreferred'] = valueChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	if(valueChildBirthDate != null && valueChildBirthDate !== '')
		vals['childBirthDate'] = valueChildBirthDate;

	var valueMomCompleteNamePreferred = $formValues.find('.valueMomCompleteNamePreferred').val();
	if(valueMomCompleteNamePreferred != null && valueMomCompleteNamePreferred !== '')
		vals['momCompleteNamePreferred'] = valueMomCompleteNamePreferred;

	var valueDadCompleteNamePreferred = $formValues.find('.valueDadCompleteNamePreferred').val();
	if(valueDadCompleteNamePreferred != null && valueDadCompleteNamePreferred !== '')
		vals['dadCompleteNamePreferred'] = valueDadCompleteNamePreferred;

	var valueChargeAmount = $formValues.find('.valueChargeAmount').val();
	if(valueChargeAmount != null && valueChargeAmount !== '')
		vals['chargeAmount'] = valueChargeAmount;

	var valueChargeAmountFuture = $formValues.find('.valueChargeAmountFuture').val();
	if(valueChargeAmountFuture != null && valueChargeAmountFuture !== '')
		vals['chargeAmountFuture'] = valueChargeAmountFuture;

	var valueChargeEnrollment = $formValues.find('.valueChargeEnrollment').prop('checked');
	if(valueChargeEnrollment != null && valueChargeEnrollment !== '')
		vals['chargeEnrollment'] = valueChargeEnrollment;

	var valueChargeFirstLast = $formValues.find('.valueChargeFirstLast').prop('checked');
	if(valueChargeFirstLast != null && valueChargeFirstLast !== '')
		vals['chargeFirstLast'] = valueChargeFirstLast;

	var valueChargeMonth = $formValues.find('.valueChargeMonth').prop('checked');
	if(valueChargeMonth != null && valueChargeMonth !== '')
		vals['chargeMonth'] = valueChargeMonth;

	var valueChargeLateFee = $formValues.find('.valueChargeLateFee').prop('checked');
	if(valueChargeLateFee != null && valueChargeLateFee !== '')
		vals['chargeLateFee'] = valueChargeLateFee;

	var valuePaymentShortName = $formValues.find('.valuePaymentShortName').val();
	if(valuePaymentShortName != null && valuePaymentShortName !== '')
		vals['paymentShortName'] = valuePaymentShortName;

	putSchoolPaymentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putSchoolPaymentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/payment?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolPayment($formFilters, $formValues, pk, success, error) {
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
	var valuePaymentCashSelectVal = $formValues.find('select.setPaymentCash').val();
	var valuePaymentCash = null;
	if(valuePaymentCashSelectVal !== '')
		valuePaymentCash = valuePaymentCashSelectVal == 'true';
	setPaymentCash = removePaymentCash ? null : valuePaymentCash;
	if(removePaymentCash || setPaymentCash != null && setPaymentCash !== '')
		vals['setPaymentCash'] = setPaymentCash;
	var addPaymentCash = $formValues.find('.addPaymentCash').prop('checked');
	if(addPaymentCash != null && addPaymentCash !== '')
		vals['addPaymentCash'] = addPaymentCash;
	var removePaymentCash = $formValues.find('.removePaymentCash').prop('checked');
	if(removePaymentCash != null && removePaymentCash !== '')
		vals['removePaymentCash'] = removePaymentCash;

	var removePaymentCheck = $formFilters.find('.removePaymentCheck').val() === 'true';
	var valuePaymentCheckSelectVal = $formValues.find('select.setPaymentCheck').val();
	var valuePaymentCheck = null;
	if(valuePaymentCheckSelectVal !== '')
		valuePaymentCheck = valuePaymentCheckSelectVal == 'true';
	setPaymentCheck = removePaymentCheck ? null : valuePaymentCheck;
	if(removePaymentCheck || setPaymentCheck != null && setPaymentCheck !== '')
		vals['setPaymentCheck'] = setPaymentCheck;
	var addPaymentCheck = $formValues.find('.addPaymentCheck').prop('checked');
	if(addPaymentCheck != null && addPaymentCheck !== '')
		vals['addPaymentCheck'] = addPaymentCheck;
	var removePaymentCheck = $formValues.find('.removePaymentCheck').prop('checked');
	if(removePaymentCheck != null && removePaymentCheck !== '')
		vals['removePaymentCheck'] = removePaymentCheck;

	var removePaymentSystem = $formFilters.find('.removePaymentSystem').val() === 'true';
	var valuePaymentSystemSelectVal = $formValues.find('select.setPaymentSystem').val();
	var valuePaymentSystem = null;
	if(valuePaymentSystemSelectVal !== '')
		valuePaymentSystem = valuePaymentSystemSelectVal == 'true';
	setPaymentSystem = removePaymentSystem ? null : valuePaymentSystem;
	if(removePaymentSystem || setPaymentSystem != null && setPaymentSystem !== '')
		vals['setPaymentSystem'] = setPaymentSystem;
	var addPaymentSystem = $formValues.find('.addPaymentSystem').prop('checked');
	if(addPaymentSystem != null && addPaymentSystem !== '')
		vals['addPaymentSystem'] = addPaymentSystem;
	var removePaymentSystem = $formValues.find('.removePaymentSystem').prop('checked');
	if(removePaymentSystem != null && removePaymentSystem !== '')
		vals['removePaymentSystem'] = removePaymentSystem;

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

	var removeEnrollmentPaymentComplete = $formFilters.find('.removeEnrollmentPaymentComplete').val() === 'true';
	var valueEnrollmentPaymentCompleteSelectVal = $formValues.find('select.setEnrollmentPaymentComplete').val();
	var valueEnrollmentPaymentComplete = null;
	if(valueEnrollmentPaymentCompleteSelectVal !== '')
		valueEnrollmentPaymentComplete = valueEnrollmentPaymentCompleteSelectVal == 'true';
	setEnrollmentPaymentComplete = removeEnrollmentPaymentComplete ? null : valueEnrollmentPaymentComplete;
	if(removeEnrollmentPaymentComplete || setEnrollmentPaymentComplete != null && setEnrollmentPaymentComplete !== '')
		vals['setEnrollmentPaymentComplete'] = setEnrollmentPaymentComplete;
	var addEnrollmentPaymentComplete = $formValues.find('.addEnrollmentPaymentComplete').prop('checked');
	if(addEnrollmentPaymentComplete != null && addEnrollmentPaymentComplete !== '')
		vals['addEnrollmentPaymentComplete'] = addEnrollmentPaymentComplete;
	var removeEnrollmentPaymentComplete = $formValues.find('.removeEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete != null && removeEnrollmentPaymentComplete !== '')
		vals['removeEnrollmentPaymentComplete'] = removeEnrollmentPaymentComplete;

	var removePaymentBy = $formFilters.find('.removePaymentBy').val() === 'true';
	var setPaymentBy = removePaymentBy ? null : $formValues.find('.setPaymentBy').val();
	if(removePaymentBy || setPaymentBy != null && setPaymentBy !== '')
		vals['setPaymentBy'] = setPaymentBy;
	var addPaymentBy = $formValues.find('.addPaymentBy').val();
	if(addPaymentBy != null && addPaymentBy !== '')
		vals['addPaymentBy'] = addPaymentBy;
	var removePaymentBy = $formValues.find('.removePaymentBy').val();
	if(removePaymentBy != null && removePaymentBy !== '')
		vals['removePaymentBy'] = removePaymentBy;

	var removeEnrollmentPaymentEachMonth = $formFilters.find('.removeEnrollmentPaymentEachMonth').val() === 'true';
	var valueEnrollmentPaymentEachMonthSelectVal = $formValues.find('select.setEnrollmentPaymentEachMonth').val();
	var valueEnrollmentPaymentEachMonth = null;
	if(valueEnrollmentPaymentEachMonthSelectVal !== '')
		valueEnrollmentPaymentEachMonth = valueEnrollmentPaymentEachMonthSelectVal == 'true';
	setEnrollmentPaymentEachMonth = removeEnrollmentPaymentEachMonth ? null : valueEnrollmentPaymentEachMonth;
	if(removeEnrollmentPaymentEachMonth || setEnrollmentPaymentEachMonth != null && setEnrollmentPaymentEachMonth !== '')
		vals['setEnrollmentPaymentEachMonth'] = setEnrollmentPaymentEachMonth;
	var addEnrollmentPaymentEachMonth = $formValues.find('.addEnrollmentPaymentEachMonth').prop('checked');
	if(addEnrollmentPaymentEachMonth != null && addEnrollmentPaymentEachMonth !== '')
		vals['addEnrollmentPaymentEachMonth'] = addEnrollmentPaymentEachMonth;
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth != null && removeEnrollmentPaymentEachMonth !== '')
		vals['removeEnrollmentPaymentEachMonth'] = removeEnrollmentPaymentEachMonth;

	var removeTransactionId = $formFilters.find('.removeTransactionId').val() === 'true';
	var setTransactionId = removeTransactionId ? null : $formValues.find('.setTransactionId').val();
	if(removeTransactionId || setTransactionId != null && setTransactionId !== '')
		vals['setTransactionId'] = setTransactionId;
	var addTransactionId = $formValues.find('.addTransactionId').val();
	if(addTransactionId != null && addTransactionId !== '')
		vals['addTransactionId'] = addTransactionId;
	var removeTransactionId = $formValues.find('.removeTransactionId').val();
	if(removeTransactionId != null && removeTransactionId !== '')
		vals['removeTransactionId'] = removeTransactionId;

	var removeCustomerProfileId = $formFilters.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formValues.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formValues.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var removeTransactionStatus = $formFilters.find('.removeTransactionStatus').val() === 'true';
	var setTransactionStatus = removeTransactionStatus ? null : $formValues.find('.setTransactionStatus').val();
	if(removeTransactionStatus || setTransactionStatus != null && setTransactionStatus !== '')
		vals['setTransactionStatus'] = setTransactionStatus;
	var addTransactionStatus = $formValues.find('.addTransactionStatus').val();
	if(addTransactionStatus != null && addTransactionStatus !== '')
		vals['addTransactionStatus'] = addTransactionStatus;
	var removeTransactionStatus = $formValues.find('.removeTransactionStatus').val();
	if(removeTransactionStatus != null && removeTransactionStatus !== '')
		vals['removeTransactionStatus'] = removeTransactionStatus;

	var removeEnrollmentKey = $formFilters.find('.removeEnrollmentKey').val() === 'true';
	var setEnrollmentKey = removeEnrollmentKey ? null : $formValues.find('.setEnrollmentKey').val();
	if(removeEnrollmentKey || setEnrollmentKey != null && setEnrollmentKey !== '')
		vals['setEnrollmentKey'] = setEnrollmentKey;
	var addEnrollmentKey = $formValues.find('.addEnrollmentKey').val();
	if(addEnrollmentKey != null && addEnrollmentKey !== '')
		vals['addEnrollmentKey'] = addEnrollmentKey;
	var removeEnrollmentKey = $formValues.find('.removeEnrollmentKey').val();
	if(removeEnrollmentKey != null && removeEnrollmentKey !== '')
		vals['removeEnrollmentKey'] = removeEnrollmentKey;

	var removePaymentRecieved = $formFilters.find('.removePaymentRecieved').val() === 'true';
	var valuePaymentRecievedSelectVal = $formValues.find('select.setPaymentRecieved').val();
	var valuePaymentRecieved = null;
	if(valuePaymentRecievedSelectVal !== '')
		valuePaymentRecieved = valuePaymentRecievedSelectVal == 'true';
	setPaymentRecieved = removePaymentRecieved ? null : valuePaymentRecieved;
	if(removePaymentRecieved || setPaymentRecieved != null && setPaymentRecieved !== '')
		vals['setPaymentRecieved'] = setPaymentRecieved;
	var addPaymentRecieved = $formValues.find('.addPaymentRecieved').prop('checked');
	if(addPaymentRecieved != null && addPaymentRecieved !== '')
		vals['addPaymentRecieved'] = addPaymentRecieved;
	var removePaymentRecieved = $formValues.find('.removePaymentRecieved').prop('checked');
	if(removePaymentRecieved != null && removePaymentRecieved !== '')
		vals['removePaymentRecieved'] = removePaymentRecieved;

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

	var removeChildCompleteNamePreferred = $formFilters.find('.removeChildCompleteNamePreferred').val() === 'true';
	var setChildCompleteNamePreferred = removeChildCompleteNamePreferred ? null : $formValues.find('.setChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred || setChildCompleteNamePreferred != null && setChildCompleteNamePreferred !== '')
		vals['setChildCompleteNamePreferred'] = setChildCompleteNamePreferred;
	var addChildCompleteNamePreferred = $formValues.find('.addChildCompleteNamePreferred').val();
	if(addChildCompleteNamePreferred != null && addChildCompleteNamePreferred !== '')
		vals['addChildCompleteNamePreferred'] = addChildCompleteNamePreferred;
	var removeChildCompleteNamePreferred = $formValues.find('.removeChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred != null && removeChildCompleteNamePreferred !== '')
		vals['removeChildCompleteNamePreferred'] = removeChildCompleteNamePreferred;

	var removeChildBirthDate = $formFilters.find('.removeChildBirthDate').val() === 'true';
	var setChildBirthDate = removeChildBirthDate ? null : $formValues.find('.setChildBirthDate').val();
	if(removeChildBirthDate || setChildBirthDate != null && setChildBirthDate !== '')
		vals['setChildBirthDate'] = setChildBirthDate;
	var addChildBirthDate = $formValues.find('.addChildBirthDate').val();
	if(addChildBirthDate != null && addChildBirthDate !== '')
		vals['addChildBirthDate'] = addChildBirthDate;
	var removeChildBirthDate = $formValues.find('.removeChildBirthDate').val();
	if(removeChildBirthDate != null && removeChildBirthDate !== '')
		vals['removeChildBirthDate'] = removeChildBirthDate;

	var removeMomCompleteNamePreferred = $formFilters.find('.removeMomCompleteNamePreferred').val() === 'true';
	var setMomCompleteNamePreferred = removeMomCompleteNamePreferred ? null : $formValues.find('.setMomCompleteNamePreferred').val();
	if(removeMomCompleteNamePreferred || setMomCompleteNamePreferred != null && setMomCompleteNamePreferred !== '')
		vals['setMomCompleteNamePreferred'] = setMomCompleteNamePreferred;
	var addMomCompleteNamePreferred = $formValues.find('.addMomCompleteNamePreferred').val();
	if(addMomCompleteNamePreferred != null && addMomCompleteNamePreferred !== '')
		vals['addMomCompleteNamePreferred'] = addMomCompleteNamePreferred;
	var removeMomCompleteNamePreferred = $formValues.find('.removeMomCompleteNamePreferred').val();
	if(removeMomCompleteNamePreferred != null && removeMomCompleteNamePreferred !== '')
		vals['removeMomCompleteNamePreferred'] = removeMomCompleteNamePreferred;

	var removeDadCompleteNamePreferred = $formFilters.find('.removeDadCompleteNamePreferred').val() === 'true';
	var setDadCompleteNamePreferred = removeDadCompleteNamePreferred ? null : $formValues.find('.setDadCompleteNamePreferred').val();
	if(removeDadCompleteNamePreferred || setDadCompleteNamePreferred != null && setDadCompleteNamePreferred !== '')
		vals['setDadCompleteNamePreferred'] = setDadCompleteNamePreferred;
	var addDadCompleteNamePreferred = $formValues.find('.addDadCompleteNamePreferred').val();
	if(addDadCompleteNamePreferred != null && addDadCompleteNamePreferred !== '')
		vals['addDadCompleteNamePreferred'] = addDadCompleteNamePreferred;
	var removeDadCompleteNamePreferred = $formValues.find('.removeDadCompleteNamePreferred').val();
	if(removeDadCompleteNamePreferred != null && removeDadCompleteNamePreferred !== '')
		vals['removeDadCompleteNamePreferred'] = removeDadCompleteNamePreferred;

	var removeChargeAmount = $formFilters.find('.removeChargeAmount').val() === 'true';
	var setChargeAmount = removeChargeAmount ? null : $formValues.find('.setChargeAmount').val();
	if(removeChargeAmount || setChargeAmount != null && setChargeAmount !== '')
		vals['setChargeAmount'] = setChargeAmount;
	var addChargeAmount = $formValues.find('.addChargeAmount').val();
	if(addChargeAmount != null && addChargeAmount !== '')
		vals['addChargeAmount'] = addChargeAmount;
	var removeChargeAmount = $formValues.find('.removeChargeAmount').val();
	if(removeChargeAmount != null && removeChargeAmount !== '')
		vals['removeChargeAmount'] = removeChargeAmount;

	var removeChargeAmountFuture = $formFilters.find('.removeChargeAmountFuture').val() === 'true';
	var setChargeAmountFuture = removeChargeAmountFuture ? null : $formValues.find('.setChargeAmountFuture').val();
	if(removeChargeAmountFuture || setChargeAmountFuture != null && setChargeAmountFuture !== '')
		vals['setChargeAmountFuture'] = setChargeAmountFuture;
	var addChargeAmountFuture = $formValues.find('.addChargeAmountFuture').val();
	if(addChargeAmountFuture != null && addChargeAmountFuture !== '')
		vals['addChargeAmountFuture'] = addChargeAmountFuture;
	var removeChargeAmountFuture = $formValues.find('.removeChargeAmountFuture').val();
	if(removeChargeAmountFuture != null && removeChargeAmountFuture !== '')
		vals['removeChargeAmountFuture'] = removeChargeAmountFuture;

	var removeChargeEnrollment = $formFilters.find('.removeChargeEnrollment').val() === 'true';
	var valueChargeEnrollmentSelectVal = $formValues.find('select.setChargeEnrollment').val();
	var valueChargeEnrollment = null;
	if(valueChargeEnrollmentSelectVal !== '')
		valueChargeEnrollment = valueChargeEnrollmentSelectVal == 'true';
	setChargeEnrollment = removeChargeEnrollment ? null : valueChargeEnrollment;
	if(removeChargeEnrollment || setChargeEnrollment != null && setChargeEnrollment !== '')
		vals['setChargeEnrollment'] = setChargeEnrollment;
	var addChargeEnrollment = $formValues.find('.addChargeEnrollment').prop('checked');
	if(addChargeEnrollment != null && addChargeEnrollment !== '')
		vals['addChargeEnrollment'] = addChargeEnrollment;
	var removeChargeEnrollment = $formValues.find('.removeChargeEnrollment').prop('checked');
	if(removeChargeEnrollment != null && removeChargeEnrollment !== '')
		vals['removeChargeEnrollment'] = removeChargeEnrollment;

	var removeChargeFirstLast = $formFilters.find('.removeChargeFirstLast').val() === 'true';
	var valueChargeFirstLastSelectVal = $formValues.find('select.setChargeFirstLast').val();
	var valueChargeFirstLast = null;
	if(valueChargeFirstLastSelectVal !== '')
		valueChargeFirstLast = valueChargeFirstLastSelectVal == 'true';
	setChargeFirstLast = removeChargeFirstLast ? null : valueChargeFirstLast;
	if(removeChargeFirstLast || setChargeFirstLast != null && setChargeFirstLast !== '')
		vals['setChargeFirstLast'] = setChargeFirstLast;
	var addChargeFirstLast = $formValues.find('.addChargeFirstLast').prop('checked');
	if(addChargeFirstLast != null && addChargeFirstLast !== '')
		vals['addChargeFirstLast'] = addChargeFirstLast;
	var removeChargeFirstLast = $formValues.find('.removeChargeFirstLast').prop('checked');
	if(removeChargeFirstLast != null && removeChargeFirstLast !== '')
		vals['removeChargeFirstLast'] = removeChargeFirstLast;

	var removeChargeMonth = $formFilters.find('.removeChargeMonth').val() === 'true';
	var valueChargeMonthSelectVal = $formValues.find('select.setChargeMonth').val();
	var valueChargeMonth = null;
	if(valueChargeMonthSelectVal !== '')
		valueChargeMonth = valueChargeMonthSelectVal == 'true';
	setChargeMonth = removeChargeMonth ? null : valueChargeMonth;
	if(removeChargeMonth || setChargeMonth != null && setChargeMonth !== '')
		vals['setChargeMonth'] = setChargeMonth;
	var addChargeMonth = $formValues.find('.addChargeMonth').prop('checked');
	if(addChargeMonth != null && addChargeMonth !== '')
		vals['addChargeMonth'] = addChargeMonth;
	var removeChargeMonth = $formValues.find('.removeChargeMonth').prop('checked');
	if(removeChargeMonth != null && removeChargeMonth !== '')
		vals['removeChargeMonth'] = removeChargeMonth;

	var removeChargeLateFee = $formFilters.find('.removeChargeLateFee').val() === 'true';
	var valueChargeLateFeeSelectVal = $formValues.find('select.setChargeLateFee').val();
	var valueChargeLateFee = null;
	if(valueChargeLateFeeSelectVal !== '')
		valueChargeLateFee = valueChargeLateFeeSelectVal == 'true';
	setChargeLateFee = removeChargeLateFee ? null : valueChargeLateFee;
	if(removeChargeLateFee || setChargeLateFee != null && setChargeLateFee !== '')
		vals['setChargeLateFee'] = setChargeLateFee;
	var addChargeLateFee = $formValues.find('.addChargeLateFee').prop('checked');
	if(addChargeLateFee != null && addChargeLateFee !== '')
		vals['addChargeLateFee'] = addChargeLateFee;
	var removeChargeLateFee = $formValues.find('.removeChargeLateFee').prop('checked');
	if(removeChargeLateFee != null && removeChargeLateFee !== '')
		vals['removeChargeLateFee'] = removeChargeLateFee;

	var removePaymentShortName = $formFilters.find('.removePaymentShortName').val() === 'true';
	var setPaymentShortName = removePaymentShortName ? null : $formValues.find('.setPaymentShortName').val();
	if(removePaymentShortName || setPaymentShortName != null && setPaymentShortName !== '')
		vals['setPaymentShortName'] = setPaymentShortName;
	var addPaymentShortName = $formValues.find('.addPaymentShortName').val();
	if(addPaymentShortName != null && addPaymentShortName !== '')
		vals['addPaymentShortName'] = addPaymentShortName;
	var removePaymentShortName = $formValues.find('.removePaymentShortName').val();
	if(removePaymentShortName != null && removePaymentShortName !== '')
		vals['removePaymentShortName'] = removePaymentShortName;

	patchSchoolPaymentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
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

	var filterPaymentDate = $formFilters.find('.valuePaymentDate').val();
	if(filterPaymentDate != null && filterPaymentDate !== '')
		filters.push({ name: 'fq', value: 'paymentDate:' + filterPaymentDate });

	var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
	if(filterPaymentAmount != null && filterPaymentAmount !== '')
		filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

	var $filterPaymentCashCheckbox = $formFilters.find('input.valuePaymentCash[type = "checkbox"]');
	var $filterPaymentCashSelect = $formFilters.find('select.valuePaymentCash');
	var filterPaymentCash = $filterPaymentCashSelect.length ? $filterPaymentCashSelect.val() : $filterPaymentCashCheckbox.prop('checked');
	var filterPaymentCashSelectVal = $formFilters.find('select.filterPaymentCash').val();
	var filterPaymentCash = null;
	if(filterPaymentCashSelectVal !== '')
		filterPaymentCash = filterPaymentCashSelectVal == 'true';
	if(filterPaymentCash != null && filterPaymentCash === true)
		filters.push({ name: 'fq', value: 'paymentCash:' + filterPaymentCash });

	var $filterPaymentCheckCheckbox = $formFilters.find('input.valuePaymentCheck[type = "checkbox"]');
	var $filterPaymentCheckSelect = $formFilters.find('select.valuePaymentCheck');
	var filterPaymentCheck = $filterPaymentCheckSelect.length ? $filterPaymentCheckSelect.val() : $filterPaymentCheckCheckbox.prop('checked');
	var filterPaymentCheckSelectVal = $formFilters.find('select.filterPaymentCheck').val();
	var filterPaymentCheck = null;
	if(filterPaymentCheckSelectVal !== '')
		filterPaymentCheck = filterPaymentCheckSelectVal == 'true';
	if(filterPaymentCheck != null && filterPaymentCheck === true)
		filters.push({ name: 'fq', value: 'paymentCheck:' + filterPaymentCheck });

	var $filterPaymentSystemCheckbox = $formFilters.find('input.valuePaymentSystem[type = "checkbox"]');
	var $filterPaymentSystemSelect = $formFilters.find('select.valuePaymentSystem');
	var filterPaymentSystem = $filterPaymentSystemSelect.length ? $filterPaymentSystemSelect.val() : $filterPaymentSystemCheckbox.prop('checked');
	var filterPaymentSystemSelectVal = $formFilters.find('select.filterPaymentSystem').val();
	var filterPaymentSystem = null;
	if(filterPaymentSystemSelectVal !== '')
		filterPaymentSystem = filterPaymentSystemSelectVal == 'true';
	if(filterPaymentSystem != null && filterPaymentSystem === true)
		filters.push({ name: 'fq', value: 'paymentSystem:' + filterPaymentSystem });

	var filterPaymentDescription = $formFilters.find('.valuePaymentDescription').val();
	if(filterPaymentDescription != null && filterPaymentDescription !== '')
		filters.push({ name: 'fq', value: 'paymentDescription:' + filterPaymentDescription });

	var $filterEnrollmentPaymentCompleteCheckbox = $formFilters.find('input.valueEnrollmentPaymentComplete[type = "checkbox"]');
	var $filterEnrollmentPaymentCompleteSelect = $formFilters.find('select.valueEnrollmentPaymentComplete');
	var filterEnrollmentPaymentComplete = $filterEnrollmentPaymentCompleteSelect.length ? $filterEnrollmentPaymentCompleteSelect.val() : $filterEnrollmentPaymentCompleteCheckbox.prop('checked');
	var filterEnrollmentPaymentCompleteSelectVal = $formFilters.find('select.filterEnrollmentPaymentComplete').val();
	var filterEnrollmentPaymentComplete = null;
	if(filterEnrollmentPaymentCompleteSelectVal !== '')
		filterEnrollmentPaymentComplete = filterEnrollmentPaymentCompleteSelectVal == 'true';
	if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
		filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

	var filterPaymentBy = $formFilters.find('.valuePaymentBy').val();
	if(filterPaymentBy != null && filterPaymentBy !== '')
		filters.push({ name: 'fq', value: 'paymentBy:' + filterPaymentBy });

	var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
	var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
	var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
	var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
	var filterEnrollmentPaymentEachMonth = null;
	if(filterEnrollmentPaymentEachMonthSelectVal !== '')
		filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
	if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
		filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

	var filterTransactionId = $formFilters.find('.valueTransactionId').val();
	if(filterTransactionId != null && filterTransactionId !== '')
		filters.push({ name: 'fq', value: 'transactionId:' + filterTransactionId });

	var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
	if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
		filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

	var filterTransactionStatus = $formFilters.find('.valueTransactionStatus').val();
	if(filterTransactionStatus != null && filterTransactionStatus !== '')
		filters.push({ name: 'fq', value: 'transactionStatus:' + filterTransactionStatus });

	var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
	if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

	var $filterPaymentRecievedCheckbox = $formFilters.find('input.valuePaymentRecieved[type = "checkbox"]');
	var $filterPaymentRecievedSelect = $formFilters.find('select.valuePaymentRecieved');
	var filterPaymentRecieved = $filterPaymentRecievedSelect.length ? $filterPaymentRecievedSelect.val() : $filterPaymentRecievedCheckbox.prop('checked');
	var filterPaymentRecievedSelectVal = $formFilters.find('select.filterPaymentRecieved').val();
	var filterPaymentRecieved = null;
	if(filterPaymentRecievedSelectVal !== '')
		filterPaymentRecieved = filterPaymentRecievedSelectVal == 'true';
	if(filterPaymentRecieved != null && filterPaymentRecieved === true)
		filters.push({ name: 'fq', value: 'paymentRecieved:' + filterPaymentRecieved });

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

	var filterPaymentKey = $formFilters.find('.valuePaymentKey').val();
	if(filterPaymentKey != null && filterPaymentKey !== '')
		filters.push({ name: 'fq', value: 'paymentKey:' + filterPaymentKey });

	var filterUserKeys = $formFilters.find('.valueUserKeys').val();
	if(filterUserKeys != null && filterUserKeys !== '')
		filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

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

	var filterBlockKey = $formFilters.find('.valueBlockKey').val();
	if(filterBlockKey != null && filterBlockKey !== '')
		filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

	var filterChildKey = $formFilters.find('.valueChildKey').val();
	if(filterChildKey != null && filterChildKey !== '')
		filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

	var filterMomKeys = $formFilters.find('.valueMomKeys').val();
	if(filterMomKeys != null && filterMomKeys !== '')
		filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

	var filterDadKeys = $formFilters.find('.valueDadKeys').val();
	if(filterDadKeys != null && filterDadKeys !== '')
		filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

	var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
	if(filterGuardianKeys != null && filterGuardianKeys !== '')
		filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

	var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
	if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
		filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

	var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
	if(filterChildBirthDate != null && filterChildBirthDate !== '')
		filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

	var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
	if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
		filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

	var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
	if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
		filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

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

	var $filterSeasonSummerCheckbox = $formFilters.find('input.valueSeasonSummer[type = "checkbox"]');
	var $filterSeasonSummerSelect = $formFilters.find('select.valueSeasonSummer');
	var filterSeasonSummer = $filterSeasonSummerSelect.length ? $filterSeasonSummerSelect.val() : $filterSeasonSummerCheckbox.prop('checked');
	var filterSeasonSummerSelectVal = $formFilters.find('select.filterSeasonSummer').val();
	var filterSeasonSummer = null;
	if(filterSeasonSummerSelectVal !== '')
		filterSeasonSummer = filterSeasonSummerSelectVal == 'true';
	if(filterSeasonSummer != null && filterSeasonSummer === true)
		filters.push({ name: 'fq', value: 'seasonSummer:' + filterSeasonSummer });

	var $filterSeasonWinterCheckbox = $formFilters.find('input.valueSeasonWinter[type = "checkbox"]');
	var $filterSeasonWinterSelect = $formFilters.find('select.valueSeasonWinter');
	var filterSeasonWinter = $filterSeasonWinterSelect.length ? $filterSeasonWinterSelect.val() : $filterSeasonWinterCheckbox.prop('checked');
	var filterSeasonWinterSelectVal = $formFilters.find('select.filterSeasonWinter').val();
	var filterSeasonWinter = null;
	if(filterSeasonWinterSelectVal !== '')
		filterSeasonWinter = filterSeasonWinterSelectVal == 'true';
	if(filterSeasonWinter != null && filterSeasonWinter === true)
		filters.push({ name: 'fq', value: 'seasonWinter:' + filterSeasonWinter });

	var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
	if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
		filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

	var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
	if(filterSessionStartDate != null && filterSessionStartDate !== '')
		filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

	var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
	if(filterSessionEndDate != null && filterSessionEndDate !== '')
		filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

	var filterAgeStart = $formFilters.find('.valueAgeStart').val();
	if(filterAgeStart != null && filterAgeStart !== '')
		filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

	var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
	if(filterAgeEnd != null && filterAgeEnd !== '')
		filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

	var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
	if(filterBlockStartTime != null && filterBlockStartTime !== '')
		filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

	var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
	if(filterBlockEndTime != null && filterBlockEndTime !== '')
		filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

	var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
	if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
		filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

	var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
	if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
		filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

	var filterChargeAmount = $formFilters.find('.valueChargeAmount').val();
	if(filterChargeAmount != null && filterChargeAmount !== '')
		filters.push({ name: 'fq', value: 'chargeAmount:' + filterChargeAmount });

	var filterChargeAmountFuture = $formFilters.find('.valueChargeAmountFuture').val();
	if(filterChargeAmountFuture != null && filterChargeAmountFuture !== '')
		filters.push({ name: 'fq', value: 'chargeAmountFuture:' + filterChargeAmountFuture });

	var $filterChargeEnrollmentCheckbox = $formFilters.find('input.valueChargeEnrollment[type = "checkbox"]');
	var $filterChargeEnrollmentSelect = $formFilters.find('select.valueChargeEnrollment');
	var filterChargeEnrollment = $filterChargeEnrollmentSelect.length ? $filterChargeEnrollmentSelect.val() : $filterChargeEnrollmentCheckbox.prop('checked');
	var filterChargeEnrollmentSelectVal = $formFilters.find('select.filterChargeEnrollment').val();
	var filterChargeEnrollment = null;
	if(filterChargeEnrollmentSelectVal !== '')
		filterChargeEnrollment = filterChargeEnrollmentSelectVal == 'true';
	if(filterChargeEnrollment != null && filterChargeEnrollment === true)
		filters.push({ name: 'fq', value: 'chargeEnrollment:' + filterChargeEnrollment });

	var $filterChargeFirstLastCheckbox = $formFilters.find('input.valueChargeFirstLast[type = "checkbox"]');
	var $filterChargeFirstLastSelect = $formFilters.find('select.valueChargeFirstLast');
	var filterChargeFirstLast = $filterChargeFirstLastSelect.length ? $filterChargeFirstLastSelect.val() : $filterChargeFirstLastCheckbox.prop('checked');
	var filterChargeFirstLastSelectVal = $formFilters.find('select.filterChargeFirstLast').val();
	var filterChargeFirstLast = null;
	if(filterChargeFirstLastSelectVal !== '')
		filterChargeFirstLast = filterChargeFirstLastSelectVal == 'true';
	if(filterChargeFirstLast != null && filterChargeFirstLast === true)
		filters.push({ name: 'fq', value: 'chargeFirstLast:' + filterChargeFirstLast });

	var $filterChargeMonthCheckbox = $formFilters.find('input.valueChargeMonth[type = "checkbox"]');
	var $filterChargeMonthSelect = $formFilters.find('select.valueChargeMonth');
	var filterChargeMonth = $filterChargeMonthSelect.length ? $filterChargeMonthSelect.val() : $filterChargeMonthCheckbox.prop('checked');
	var filterChargeMonthSelectVal = $formFilters.find('select.filterChargeMonth').val();
	var filterChargeMonth = null;
	if(filterChargeMonthSelectVal !== '')
		filterChargeMonth = filterChargeMonthSelectVal == 'true';
	if(filterChargeMonth != null && filterChargeMonth === true)
		filters.push({ name: 'fq', value: 'chargeMonth:' + filterChargeMonth });

	var $filterChargeLateFeeCheckbox = $formFilters.find('input.valueChargeLateFee[type = "checkbox"]');
	var $filterChargeLateFeeSelect = $formFilters.find('select.valueChargeLateFee');
	var filterChargeLateFee = $filterChargeLateFeeSelect.length ? $filterChargeLateFeeSelect.val() : $filterChargeLateFeeCheckbox.prop('checked');
	var filterChargeLateFeeSelectVal = $formFilters.find('select.filterChargeLateFee').val();
	var filterChargeLateFee = null;
	if(filterChargeLateFeeSelectVal !== '')
		filterChargeLateFee = filterChargeLateFeeSelectVal == 'true';
	if(filterChargeLateFee != null && filterChargeLateFee === true)
		filters.push({ name: 'fq', value: 'chargeLateFee:' + filterChargeLateFee });

	var filterPaymentShortName = $formFilters.find('.valuePaymentShortName').val();
	if(filterPaymentShortName != null && filterPaymentShortName !== '')
		filters.push({ name: 'fq', value: 'paymentShortName:' + filterPaymentShortName });

	var filterPaymentCompleteName = $formFilters.find('.valuePaymentCompleteName').val();
	if(filterPaymentCompleteName != null && filterPaymentCompleteName !== '')
		filters.push({ name: 'fq', value: 'paymentCompleteName:' + filterPaymentCompleteName });
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

async function getSchoolPayment(pk) {
	$.ajax({
		url: '/api/payment/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolPayment($formFilters, success, error) {
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

	var filterPaymentDate = $formFilters.find('.valuePaymentDate').val();
	if(filterPaymentDate != null && filterPaymentDate !== '')
		filters.push({ name: 'fq', value: 'paymentDate:' + filterPaymentDate });

	var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
	if(filterPaymentAmount != null && filterPaymentAmount !== '')
		filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

	var $filterPaymentCashCheckbox = $formFilters.find('input.valuePaymentCash[type = "checkbox"]');
	var $filterPaymentCashSelect = $formFilters.find('select.valuePaymentCash');
	var filterPaymentCash = $filterPaymentCashSelect.length ? $filterPaymentCashSelect.val() : $filterPaymentCashCheckbox.prop('checked');
	var filterPaymentCashSelectVal = $formFilters.find('select.filterPaymentCash').val();
	var filterPaymentCash = null;
	if(filterPaymentCashSelectVal !== '')
		filterPaymentCash = filterPaymentCashSelectVal == 'true';
	if(filterPaymentCash != null && filterPaymentCash === true)
		filters.push({ name: 'fq', value: 'paymentCash:' + filterPaymentCash });

	var $filterPaymentCheckCheckbox = $formFilters.find('input.valuePaymentCheck[type = "checkbox"]');
	var $filterPaymentCheckSelect = $formFilters.find('select.valuePaymentCheck');
	var filterPaymentCheck = $filterPaymentCheckSelect.length ? $filterPaymentCheckSelect.val() : $filterPaymentCheckCheckbox.prop('checked');
	var filterPaymentCheckSelectVal = $formFilters.find('select.filterPaymentCheck').val();
	var filterPaymentCheck = null;
	if(filterPaymentCheckSelectVal !== '')
		filterPaymentCheck = filterPaymentCheckSelectVal == 'true';
	if(filterPaymentCheck != null && filterPaymentCheck === true)
		filters.push({ name: 'fq', value: 'paymentCheck:' + filterPaymentCheck });

	var $filterPaymentSystemCheckbox = $formFilters.find('input.valuePaymentSystem[type = "checkbox"]');
	var $filterPaymentSystemSelect = $formFilters.find('select.valuePaymentSystem');
	var filterPaymentSystem = $filterPaymentSystemSelect.length ? $filterPaymentSystemSelect.val() : $filterPaymentSystemCheckbox.prop('checked');
	var filterPaymentSystemSelectVal = $formFilters.find('select.filterPaymentSystem').val();
	var filterPaymentSystem = null;
	if(filterPaymentSystemSelectVal !== '')
		filterPaymentSystem = filterPaymentSystemSelectVal == 'true';
	if(filterPaymentSystem != null && filterPaymentSystem === true)
		filters.push({ name: 'fq', value: 'paymentSystem:' + filterPaymentSystem });

	var filterPaymentDescription = $formFilters.find('.valuePaymentDescription').val();
	if(filterPaymentDescription != null && filterPaymentDescription !== '')
		filters.push({ name: 'fq', value: 'paymentDescription:' + filterPaymentDescription });

	var $filterEnrollmentPaymentCompleteCheckbox = $formFilters.find('input.valueEnrollmentPaymentComplete[type = "checkbox"]');
	var $filterEnrollmentPaymentCompleteSelect = $formFilters.find('select.valueEnrollmentPaymentComplete');
	var filterEnrollmentPaymentComplete = $filterEnrollmentPaymentCompleteSelect.length ? $filterEnrollmentPaymentCompleteSelect.val() : $filterEnrollmentPaymentCompleteCheckbox.prop('checked');
	var filterEnrollmentPaymentCompleteSelectVal = $formFilters.find('select.filterEnrollmentPaymentComplete').val();
	var filterEnrollmentPaymentComplete = null;
	if(filterEnrollmentPaymentCompleteSelectVal !== '')
		filterEnrollmentPaymentComplete = filterEnrollmentPaymentCompleteSelectVal == 'true';
	if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
		filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

	var filterPaymentBy = $formFilters.find('.valuePaymentBy').val();
	if(filterPaymentBy != null && filterPaymentBy !== '')
		filters.push({ name: 'fq', value: 'paymentBy:' + filterPaymentBy });

	var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
	var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
	var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
	var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
	var filterEnrollmentPaymentEachMonth = null;
	if(filterEnrollmentPaymentEachMonthSelectVal !== '')
		filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
	if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
		filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

	var filterTransactionId = $formFilters.find('.valueTransactionId').val();
	if(filterTransactionId != null && filterTransactionId !== '')
		filters.push({ name: 'fq', value: 'transactionId:' + filterTransactionId });

	var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
	if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
		filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

	var filterTransactionStatus = $formFilters.find('.valueTransactionStatus').val();
	if(filterTransactionStatus != null && filterTransactionStatus !== '')
		filters.push({ name: 'fq', value: 'transactionStatus:' + filterTransactionStatus });

	var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
	if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

	var $filterPaymentRecievedCheckbox = $formFilters.find('input.valuePaymentRecieved[type = "checkbox"]');
	var $filterPaymentRecievedSelect = $formFilters.find('select.valuePaymentRecieved');
	var filterPaymentRecieved = $filterPaymentRecievedSelect.length ? $filterPaymentRecievedSelect.val() : $filterPaymentRecievedCheckbox.prop('checked');
	var filterPaymentRecievedSelectVal = $formFilters.find('select.filterPaymentRecieved').val();
	var filterPaymentRecieved = null;
	if(filterPaymentRecievedSelectVal !== '')
		filterPaymentRecieved = filterPaymentRecievedSelectVal == 'true';
	if(filterPaymentRecieved != null && filterPaymentRecieved === true)
		filters.push({ name: 'fq', value: 'paymentRecieved:' + filterPaymentRecieved });

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

	var filterPaymentKey = $formFilters.find('.valuePaymentKey').val();
	if(filterPaymentKey != null && filterPaymentKey !== '')
		filters.push({ name: 'fq', value: 'paymentKey:' + filterPaymentKey });

	var filterUserKeys = $formFilters.find('.valueUserKeys').val();
	if(filterUserKeys != null && filterUserKeys !== '')
		filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

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

	var filterBlockKey = $formFilters.find('.valueBlockKey').val();
	if(filterBlockKey != null && filterBlockKey !== '')
		filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

	var filterChildKey = $formFilters.find('.valueChildKey').val();
	if(filterChildKey != null && filterChildKey !== '')
		filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

	var filterMomKeys = $formFilters.find('.valueMomKeys').val();
	if(filterMomKeys != null && filterMomKeys !== '')
		filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

	var filterDadKeys = $formFilters.find('.valueDadKeys').val();
	if(filterDadKeys != null && filterDadKeys !== '')
		filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

	var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
	if(filterGuardianKeys != null && filterGuardianKeys !== '')
		filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

	var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
	if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
		filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

	var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
	if(filterChildBirthDate != null && filterChildBirthDate !== '')
		filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

	var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
	if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
		filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

	var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
	if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
		filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

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

	var $filterSeasonSummerCheckbox = $formFilters.find('input.valueSeasonSummer[type = "checkbox"]');
	var $filterSeasonSummerSelect = $formFilters.find('select.valueSeasonSummer');
	var filterSeasonSummer = $filterSeasonSummerSelect.length ? $filterSeasonSummerSelect.val() : $filterSeasonSummerCheckbox.prop('checked');
	var filterSeasonSummerSelectVal = $formFilters.find('select.filterSeasonSummer').val();
	var filterSeasonSummer = null;
	if(filterSeasonSummerSelectVal !== '')
		filterSeasonSummer = filterSeasonSummerSelectVal == 'true';
	if(filterSeasonSummer != null && filterSeasonSummer === true)
		filters.push({ name: 'fq', value: 'seasonSummer:' + filterSeasonSummer });

	var $filterSeasonWinterCheckbox = $formFilters.find('input.valueSeasonWinter[type = "checkbox"]');
	var $filterSeasonWinterSelect = $formFilters.find('select.valueSeasonWinter');
	var filterSeasonWinter = $filterSeasonWinterSelect.length ? $filterSeasonWinterSelect.val() : $filterSeasonWinterCheckbox.prop('checked');
	var filterSeasonWinterSelectVal = $formFilters.find('select.filterSeasonWinter').val();
	var filterSeasonWinter = null;
	if(filterSeasonWinterSelectVal !== '')
		filterSeasonWinter = filterSeasonWinterSelectVal == 'true';
	if(filterSeasonWinter != null && filterSeasonWinter === true)
		filters.push({ name: 'fq', value: 'seasonWinter:' + filterSeasonWinter });

	var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
	if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
		filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

	var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
	if(filterSessionStartDate != null && filterSessionStartDate !== '')
		filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

	var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
	if(filterSessionEndDate != null && filterSessionEndDate !== '')
		filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

	var filterAgeStart = $formFilters.find('.valueAgeStart').val();
	if(filterAgeStart != null && filterAgeStart !== '')
		filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

	var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
	if(filterAgeEnd != null && filterAgeEnd !== '')
		filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

	var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
	if(filterBlockStartTime != null && filterBlockStartTime !== '')
		filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

	var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
	if(filterBlockEndTime != null && filterBlockEndTime !== '')
		filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

	var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
	if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
		filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

	var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
	if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
		filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

	var filterChargeAmount = $formFilters.find('.valueChargeAmount').val();
	if(filterChargeAmount != null && filterChargeAmount !== '')
		filters.push({ name: 'fq', value: 'chargeAmount:' + filterChargeAmount });

	var filterChargeAmountFuture = $formFilters.find('.valueChargeAmountFuture').val();
	if(filterChargeAmountFuture != null && filterChargeAmountFuture !== '')
		filters.push({ name: 'fq', value: 'chargeAmountFuture:' + filterChargeAmountFuture });

	var $filterChargeEnrollmentCheckbox = $formFilters.find('input.valueChargeEnrollment[type = "checkbox"]');
	var $filterChargeEnrollmentSelect = $formFilters.find('select.valueChargeEnrollment');
	var filterChargeEnrollment = $filterChargeEnrollmentSelect.length ? $filterChargeEnrollmentSelect.val() : $filterChargeEnrollmentCheckbox.prop('checked');
	var filterChargeEnrollmentSelectVal = $formFilters.find('select.filterChargeEnrollment').val();
	var filterChargeEnrollment = null;
	if(filterChargeEnrollmentSelectVal !== '')
		filterChargeEnrollment = filterChargeEnrollmentSelectVal == 'true';
	if(filterChargeEnrollment != null && filterChargeEnrollment === true)
		filters.push({ name: 'fq', value: 'chargeEnrollment:' + filterChargeEnrollment });

	var $filterChargeFirstLastCheckbox = $formFilters.find('input.valueChargeFirstLast[type = "checkbox"]');
	var $filterChargeFirstLastSelect = $formFilters.find('select.valueChargeFirstLast');
	var filterChargeFirstLast = $filterChargeFirstLastSelect.length ? $filterChargeFirstLastSelect.val() : $filterChargeFirstLastCheckbox.prop('checked');
	var filterChargeFirstLastSelectVal = $formFilters.find('select.filterChargeFirstLast').val();
	var filterChargeFirstLast = null;
	if(filterChargeFirstLastSelectVal !== '')
		filterChargeFirstLast = filterChargeFirstLastSelectVal == 'true';
	if(filterChargeFirstLast != null && filterChargeFirstLast === true)
		filters.push({ name: 'fq', value: 'chargeFirstLast:' + filterChargeFirstLast });

	var $filterChargeMonthCheckbox = $formFilters.find('input.valueChargeMonth[type = "checkbox"]');
	var $filterChargeMonthSelect = $formFilters.find('select.valueChargeMonth');
	var filterChargeMonth = $filterChargeMonthSelect.length ? $filterChargeMonthSelect.val() : $filterChargeMonthCheckbox.prop('checked');
	var filterChargeMonthSelectVal = $formFilters.find('select.filterChargeMonth').val();
	var filterChargeMonth = null;
	if(filterChargeMonthSelectVal !== '')
		filterChargeMonth = filterChargeMonthSelectVal == 'true';
	if(filterChargeMonth != null && filterChargeMonth === true)
		filters.push({ name: 'fq', value: 'chargeMonth:' + filterChargeMonth });

	var $filterChargeLateFeeCheckbox = $formFilters.find('input.valueChargeLateFee[type = "checkbox"]');
	var $filterChargeLateFeeSelect = $formFilters.find('select.valueChargeLateFee');
	var filterChargeLateFee = $filterChargeLateFeeSelect.length ? $filterChargeLateFeeSelect.val() : $filterChargeLateFeeCheckbox.prop('checked');
	var filterChargeLateFeeSelectVal = $formFilters.find('select.filterChargeLateFee').val();
	var filterChargeLateFee = null;
	if(filterChargeLateFeeSelectVal !== '')
		filterChargeLateFee = filterChargeLateFeeSelectVal == 'true';
	if(filterChargeLateFee != null && filterChargeLateFee === true)
		filters.push({ name: 'fq', value: 'chargeLateFee:' + filterChargeLateFee });

	var filterPaymentShortName = $formFilters.find('.valuePaymentShortName').val();
	if(filterPaymentShortName != null && filterPaymentShortName !== '')
		filters.push({ name: 'fq', value: 'paymentShortName:' + filterPaymentShortName });

	var filterPaymentCompleteName = $formFilters.find('.valuePaymentCompleteName').val();
	if(filterPaymentCompleteName != null && filterPaymentCompleteName !== '')
		filters.push({ name: 'fq', value: 'paymentCompleteName:' + filterPaymentCompleteName });
	return filters;
}

function searchSchoolPaymentVals(filters, success, error) {

	filters.push({ name: 'rows', value: 50 });

	filters.push({ name: 'sort', value: 'paymentDate desc' });
	filters.push({ name: 'sort', value: 'paymentBy desc' });
	$.ajax({
		url: '/api/payment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolPaymentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-search-dollar ');
			var $span = $('<span>').attr('class', '').text(o['paymentCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolPaymentVals($formFilters, success, error);
}

function suggestSchoolPaymentEnrollmentKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['paymentKeys'];
			var checked = Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKey_' + pk + '_paymentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKey_" + pk + "_paymentKeys_" + o['pk'] + "'); patchSchoolPaymentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'EnrollmentKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolPaymentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

async function websocketSchoolPayment(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolPayment', function (error, message) {
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
				var $header = $('<div>').attr('class', 'w3-container fa-green ').attr('id', 'header-' + id);
				var $i = $('<i>').attr('class', 'fas fa-search-dollar w3-margin-right ').attr('id', 'icon-' + id);
				var $headerSpan = $('<span>').attr('class', '').text('modify payments');
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
		});

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			$('#Page_enrollmentKey').trigger('oninput');
		});
	}
}
async function websocketSchoolPaymentInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolPaymentVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputSchoolPayment' + pk + 'Created').val(o['created']);
				$('.varSchoolPayment' + pk + 'Created').text(o['created']);
			}
			if(vars.includes('modified')) {
				$('.inputSchoolPayment' + pk + 'Modified').val(o['modified']);
				$('.varSchoolPayment' + pk + 'Modified').text(o['modified']);
			}
			if(vars.includes('archived')) {
				$('.inputSchoolPayment' + pk + 'Archived').val(o['archived']);
				$('.varSchoolPayment' + pk + 'Archived').text(o['archived']);
			}
			if(vars.includes('deleted')) {
				$('.inputSchoolPayment' + pk + 'Deleted').val(o['deleted']);
				$('.varSchoolPayment' + pk + 'Deleted').text(o['deleted']);
			}
			if(vars.includes('paymentDate')) {
				$('.inputSchoolPayment' + pk + 'PaymentDate').val(o['paymentDate']);
				$('.varSchoolPayment' + pk + 'PaymentDate').text(o['paymentDate']);
			}
			if(vars.includes('paymentAmount')) {
				$('.inputSchoolPayment' + pk + 'PaymentAmount').val(o['paymentAmount']);
				$('.varSchoolPayment' + pk + 'PaymentAmount').text(o['paymentAmount']);
			}
			if(vars.includes('paymentCash')) {
				$('.inputSchoolPayment' + pk + 'PaymentCash').val(o['paymentCash']);
				$('.varSchoolPayment' + pk + 'PaymentCash').text(o['paymentCash']);
			}
			if(vars.includes('paymentCheck')) {
				$('.inputSchoolPayment' + pk + 'PaymentCheck').val(o['paymentCheck']);
				$('.varSchoolPayment' + pk + 'PaymentCheck').text(o['paymentCheck']);
			}
			if(vars.includes('paymentSystem')) {
				$('.inputSchoolPayment' + pk + 'PaymentSystem').val(o['paymentSystem']);
				$('.varSchoolPayment' + pk + 'PaymentSystem').text(o['paymentSystem']);
			}
			if(vars.includes('paymentDescription')) {
				$('.inputSchoolPayment' + pk + 'PaymentDescription').val(o['paymentDescription']);
				$('.varSchoolPayment' + pk + 'PaymentDescription').text(o['paymentDescription']);
			}
			if(vars.includes('enrollmentPaymentComplete')) {
				$('.inputSchoolPayment' + pk + 'EnrollmentPaymentComplete').val(o['enrollmentPaymentComplete']);
				$('.varSchoolPayment' + pk + 'EnrollmentPaymentComplete').text(o['enrollmentPaymentComplete']);
			}
			if(vars.includes('paymentBy')) {
				$('.inputSchoolPayment' + pk + 'PaymentBy').val(o['paymentBy']);
				$('.varSchoolPayment' + pk + 'PaymentBy').text(o['paymentBy']);
			}
			if(vars.includes('enrollmentPaymentEachMonth')) {
				$('.inputSchoolPayment' + pk + 'EnrollmentPaymentEachMonth').val(o['enrollmentPaymentEachMonth']);
				$('.varSchoolPayment' + pk + 'EnrollmentPaymentEachMonth').text(o['enrollmentPaymentEachMonth']);
			}
			if(vars.includes('transactionId')) {
				$('.inputSchoolPayment' + pk + 'TransactionId').val(o['transactionId']);
				$('.varSchoolPayment' + pk + 'TransactionId').text(o['transactionId']);
			}
			if(vars.includes('customerProfileId')) {
				$('.inputSchoolPayment' + pk + 'CustomerProfileId').val(o['customerProfileId']);
				$('.varSchoolPayment' + pk + 'CustomerProfileId').text(o['customerProfileId']);
			}
			if(vars.includes('transactionStatus')) {
				$('.inputSchoolPayment' + pk + 'TransactionStatus').val(o['transactionStatus']);
				$('.varSchoolPayment' + pk + 'TransactionStatus').text(o['transactionStatus']);
			}
			if(vars.includes('enrollmentKey')) {
				$('.inputSchoolPayment' + pk + 'EnrollmentKey').val(o['enrollmentKey']);
				$('.varSchoolPayment' + pk + 'EnrollmentKey').text(o['enrollmentKey']);
			}
			if(vars.includes('paymentRecieved')) {
				$('.inputSchoolPayment' + pk + 'PaymentRecieved').val(o['paymentRecieved']);
				$('.varSchoolPayment' + pk + 'PaymentRecieved').text(o['paymentRecieved']);
			}
			if(vars.includes('childCompleteNamePreferred')) {
				$('.inputSchoolPayment' + pk + 'ChildCompleteNamePreferred').val(o['childCompleteNamePreferred']);
				$('.varSchoolPayment' + pk + 'ChildCompleteNamePreferred').text(o['childCompleteNamePreferred']);
			}
			if(vars.includes('childBirthDate')) {
				$('.inputSchoolPayment' + pk + 'ChildBirthDate').val(o['childBirthDate']);
				$('.varSchoolPayment' + pk + 'ChildBirthDate').text(o['childBirthDate']);
			}
			if(vars.includes('momCompleteNamePreferred')) {
				$('.inputSchoolPayment' + pk + 'MomCompleteNamePreferred').val(o['momCompleteNamePreferred']);
				$('.varSchoolPayment' + pk + 'MomCompleteNamePreferred').text(o['momCompleteNamePreferred']);
			}
			if(vars.includes('dadCompleteNamePreferred')) {
				$('.inputSchoolPayment' + pk + 'DadCompleteNamePreferred').val(o['dadCompleteNamePreferred']);
				$('.varSchoolPayment' + pk + 'DadCompleteNamePreferred').text(o['dadCompleteNamePreferred']);
			}
			if(vars.includes('chargeAmount')) {
				$('.inputSchoolPayment' + pk + 'ChargeAmount').val(o['chargeAmount']);
				$('.varSchoolPayment' + pk + 'ChargeAmount').text(o['chargeAmount']);
			}
			if(vars.includes('chargeAmountFuture')) {
				$('.inputSchoolPayment' + pk + 'ChargeAmountFuture').val(o['chargeAmountFuture']);
				$('.varSchoolPayment' + pk + 'ChargeAmountFuture').text(o['chargeAmountFuture']);
			}
			if(vars.includes('chargeEnrollment')) {
				$('.inputSchoolPayment' + pk + 'ChargeEnrollment').val(o['chargeEnrollment']);
				$('.varSchoolPayment' + pk + 'ChargeEnrollment').text(o['chargeEnrollment']);
			}
			if(vars.includes('chargeFirstLast')) {
				$('.inputSchoolPayment' + pk + 'ChargeFirstLast').val(o['chargeFirstLast']);
				$('.varSchoolPayment' + pk + 'ChargeFirstLast').text(o['chargeFirstLast']);
			}
			if(vars.includes('chargeMonth')) {
				$('.inputSchoolPayment' + pk + 'ChargeMonth').val(o['chargeMonth']);
				$('.varSchoolPayment' + pk + 'ChargeMonth').text(o['chargeMonth']);
			}
			if(vars.includes('chargeLateFee')) {
				$('.inputSchoolPayment' + pk + 'ChargeLateFee').val(o['chargeLateFee']);
				$('.varSchoolPayment' + pk + 'ChargeLateFee').text(o['chargeLateFee']);
			}
			if(vars.includes('paymentShortName')) {
				$('.inputSchoolPayment' + pk + 'PaymentShortName').val(o['paymentShortName']);
				$('.varSchoolPayment' + pk + 'PaymentShortName').text(o['paymentShortName']);
			}
		});
	}
}

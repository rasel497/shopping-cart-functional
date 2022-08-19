//calculate total // total current phone 


function getTextElementById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);

    return currentPhoneTotal;
}

// tax amount
function setTaxElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

// subtotal phone
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCasetotal = getTextElementById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCasetotal;
    setTaxElementValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTaxElementValueById('tax-amount', taxAmount);
    const finalAmount = currentSubTotal + taxAmount;
    setTaxElementValueById('final-total', finalAmount);


}
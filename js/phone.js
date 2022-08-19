function updatePhoneNumber(isIncrease) {

    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    // const newPhoneNumber = previousPhoneNumber + 1;
    // phoneNumberField.value = newPhoneNumber;

    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}


//update phone number
function updatePhoneTotalPrice(newPhoneNumber) {

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;

}
/**
 
//calculate total // total current phone 
function getTextElementById() {
   const phoneTotalElement = document.getElementById('phone-total');
   const currentPhoneTotalString = phoneTotalElement.innerText;
   const currentPhoneTotal = parseInt(currentPhoneTotalString);

   return currentPhoneTotal;
}

// subtotal phone
function calculateSubTotal() {
   const currentPhoneTotal = getTextElementById('phone-total');
   const currentCasetotal = getTextElementById('case-total');

   const currentSubTotal = currentPhoneTotal + currentCasetotal;
   const subTotalElement = document.getElementById('sub-total');
   subTotalElement.innerText = currentSubTotal;
 
}
 */

// calculate total
document.getElementById('phone-btn-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true); // callded upper function name

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

});


document.getElementById('phone-btn-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false); // callded upper function name

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

})






/** 
 // raw code
  document.getElementById('phone-btn-plus').addEventListener('click', function () {

    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;

})

document.getElementById('phone-btn-minus').addEventListener('click', function () {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber - 1;
    phoneNumberField.value = newPhoneNumber;
})
 */ 
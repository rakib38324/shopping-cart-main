function UpdatePhoneNumber(isIncrease){
    const caseNumberField = document.getElementById('phone-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const priviousCaseNumber = parseInt(caseNumberFieldString);
    
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = priviousCaseNumber + 1;
    }

    else{
        newCaseNumber = priviousCaseNumber - 1;
    }
    if(newCaseNumber < 0){
        return;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;

}

function UpdatePhoneTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 1219;
    const caseTotalElement = document.getElementById('phone-total');
    caseTotalElement.innerText = caseTotalPrice;

}

function getTextElementValue(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerHTML;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}




document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newCaseNumber = UpdatePhoneNumber(true);
    UpdatePhoneTotalPrice(newCaseNumber);
    calculateSubTotal();

    

})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newCaseNumber = UpdatePhoneNumber(false);
    UpdatePhoneTotalPrice(newCaseNumber);
    calculateSubTotal();
})
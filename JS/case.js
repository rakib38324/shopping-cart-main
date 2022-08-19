function UpdateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-numver-field');
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


function UpdateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}


document.getElementById('btn-case-plus').addEventListener('click',function(){

    const newCaseNumber = UpdateCaseNumber(true);
    UpdateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
   
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = UpdateCaseNumber(false);
    UpdateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})
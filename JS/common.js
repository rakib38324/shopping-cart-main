function callTheElement(element,value){
    const subtotalElement = document.getElementById(element);
    subtotalElement.innerText = value;
}


function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValue('phone-total');
    const currentcaseTotal = getTextElementValue('case-total');

    const subTotalPrice = currentPhoneTotal + currentcaseTotal ;

    callTheElement('sub-total',subTotalPrice)
    
    const taxAmountString = (subTotalPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    callTheElement('tax-total',taxAmount)

    const finalAmount = subTotalPrice + taxAmount;
    callTheElement('final-total',finalAmount);

}
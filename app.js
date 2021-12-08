var billAmount = document.querySelector("#bill-amount");

var cashGiven = document.querySelector("#cash-given");

var checkButton = document.querySelector("#check-button");

var message = document.querySelector("#error-message");

checkButton.addEventListener('click',function validateBillCashAmount()
{
     hideMessage();

    if(billAmount.value>0)
    {

      if(cashGiven.value >= billAmount.value ) {

        var amountToBeReturned = cashGiven.value- billAmount.value;

        calculateChange(amountToBeReturned);

      }
      else{
            
         showMessage("The cash provided should atleast be equal to the bill amount");

      }

    }
    else {
          
          showMessage('Invalid Bill Amount');

    }



})

function calculateChange()
{
     
}


function hideMessage() {

    message.style.display = "none";

}


//showMessage

function showMessage(msg) {

  message .style.display="block";
  message.innerText=msg;
    
}
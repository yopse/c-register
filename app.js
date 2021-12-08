var billAmount = document.querySelector("#bill-amount");

var cashGiven = document.querySelector("#cash-given");

var checkButton = document.querySelector("#check-button");

var message = document.querySelector("#error-message");

var availableNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

//Major processing

checkButton.addEventListener("click", function validateBillCashAmount() {
  hideMessage();

  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      var amountToBeReturned = cashGiven.value - billAmount.value;

      calculateChange(amountToBeReturned);
    } else {
      showMessage(
        "The cash provided should atleast be equal to the bill amount"
      );
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

//calculation checks

function calculateChange(amountToBeReturned) {
  //Itervation over all the given values
  for (let i = 0; availableNotes.length; i++) {
    var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    amountToBeReturned %= availableNotes[0];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

//showMessage

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

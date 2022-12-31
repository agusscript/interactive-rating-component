function showCard() {
  let principalCard = document.querySelector(".principal");
  let submittedCard = document.querySelector(".submitted");

  if (buttonSelected != undefined) {
    principalCard.style.display = "none";
    submittedCard.style.display = "block";
  }
}

let buttonSelected;

let btn1 = document.querySelector(".btn-1");
btn1.addEventListener("click", () => {
  buttonSelected = 1;
});

let btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", () => {
  buttonSelected = 2;
});

let btn3 = document.querySelector(".btn-3");
btn3.addEventListener("click", () => {
  buttonSelected = 3;
});

let btn4 = document.querySelector(".btn-4");
btn4.addEventListener("click", () => {
  buttonSelected = 4;
});

let btn5 = document.querySelector(".btn-5");
btn5.addEventListener("click", () => {
  buttonSelected = 5;
});

let numUserSelection = document.querySelector(".num-selected");

function buttonSelectOutput() {
  if (buttonSelected === 1) {
    numUserSelection.textContent = " 1 ";
  } else if (buttonSelected === 2) {
    numUserSelection.textContent = " 2 ";
  } else if (buttonSelected === 3) {
    numUserSelection.textContent = " 3 ";
  } else if (buttonSelected === 4) {
    numUserSelection.textContent = " 4 ";
  } else if (buttonSelected === 5) {
    numUserSelection.textContent = " 5 ";
  } else {
    alert("Please select a rating!")
  }
}

let submitButton = document.querySelector(".btn-submit");
submitButton.addEventListener("click", () => {
  showCard();
  buttonSelectOutput();
});

function getCardInfo() {
  const cardForm = document.getElementById("card-form");

  const cardNumber = document.getElementById("card-number");
  const cardName = document.getElementById("card-name");
  const cardMonth = document.getElementById("card-month");
  const cardYear = document.getElementById("card-year");
  const cardCVC = document.getElementById("card-cvc");
  const inputNumber = document.querySelector(".inputNumber");
  const inputName = document.querySelector(".inputName");
  const inputMonth = document.querySelector(".inputMonth");
  const inputYear = document.querySelector(".inputYear");
  const inputCVC = document.querySelector(".inputCVC");

  const arrCardValues = [cardNumber, cardName, cardMonth, cardYear, cardCVC];
  const arrCardInputs = [
    inputNumber,
    inputName,
    inputMonth,
    inputYear,
    inputCVC,
  ];

  inputNumber.addEventListener("keyup", function (e) {
    cardNumber.innerHTML = e.target.value;
    if (cardNumber.innerText.length <= 15) {
      inputNumber.setAttribute("style", "border: 1px solid red");
    } else {
      inputNumber.setAttribute("style", "border: 1px solid green");
    }
  });
  inputName.addEventListener("keyup", function (e) {
    cardName.innerHTML = e.target.value.toUpperCase();
  });
  inputMonth.addEventListener("keyup", function (e) {
    cardMonth.innerHTML = e.target.value;
    if (cardMonth.innerText > 12) {
      inputMonth.setAttribute("style", "border: 1px solid red");
    } else {
      inputMonth.setAttribute("style", "border: 1px solid green");
    }
  });
  inputYear.addEventListener("keyup", function (e) {
    cardYear.innerHTML = e.target.value;
    if (cardYear.innerText < 22 || cardYear.innerText > 30) {
      inputYear.setAttribute("style", "border: 1px solid red");
    } else {
      inputYear.setAttribute("style", "border: 1px solid green");
    }
  });
  inputCVC.addEventListener("keyup", function (e) {
    cardCVC.innerHTML = e.target.value;
    if (cardCVC.innerText.length < 3) {
      inputCVC.setAttribute("style", "border: 1px solid red");
    } else {
      inputCVC.setAttribute("style", "border: 1px solid green");
    }
  });

  cardForm.addEventListener("submit", function (e) {
    e.preventDefault();
    arrCardValues.forEach((item) => {
      //  if (item.getAttribute(s) === "") {
      //  alert(`Você não preencheu o ${item} corretamente`);
      // }
      console.log(item.getAttribute("style"));
    });
    arrCardInputs.forEach((item) => {
      if (item.value === "") {
        alert(`You didn't fill the ${item.getAttribute("aria-att")} field!`);
      }
    });
  });
}

getCardInfo();

(function getCardInfo() {
  const cardForm = document.getElementById("card-form");

  const formRender = document.querySelector(".form-container");
  const thanksRender = document.querySelector(".absolute");
  const btnContinue = document.querySelector(".btn");

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

  const arrCardInputs = [
    inputNumber,
    inputName,
    inputMonth,
    inputYear,
    inputCVC,
  ];

  function isInputEmpty() {
    return arrCardInputs.forEach((item) => {
      if (item.value === "") {
        switch (item.getAttribute("aria-att")) {
          case "Cardholder Name":
            document.querySelector(".name").classList.add("visible");
            item.setAttribute("style", "border: 1px solid red");

            break;
          case "Card Number":
            document.querySelector(".number").classList.add("visible");
            item.setAttribute("style", "border: 1px solid red");

            break;
          case "Month":
            document.querySelector(".month").classList.add("visible");
            item.setAttribute("style", "border: 1px solid red");

            break;
          case "Year":
            document.querySelector(".month").classList.add("visible");
            item.setAttribute("style", "border: 1px solid red");

          case "CVC":
            document.querySelector(".cvc").classList.add("visible");
            item.setAttribute("style", "border: 1px solid red");

            break;
          default:
            console.log(`ok`);
        }
      }
    });
  }

  inputNumber.addEventListener("input", function (e) {
    cardNumber.innerHTML = e.target.value;
    if (cardNumber.innerText.length <= 15) {
      inputNumber.setAttribute("style", "border: 1px solid red");
    } else {
      inputNumber.setAttribute("style", "border: 1px solid green");
    }
    if (cardNumber.innerText === "") {
      document.querySelector(".number").classList.add("visible");
      inputNumber.setAttribute("style", "border: 1px solid red");
    } else {
      document.querySelector(".number").classList.remove("visible");
    }
  });
  inputName.addEventListener("input", function (e) {
    cardName.innerHTML = e.target.value.toUpperCase();

    if (cardName.innerText === "") {
      document.querySelector(".name").classList.add("visible");
      inputName.setAttribute("style", "border: 1px solid red");
    } else {
      document.querySelector(".name").classList.remove("visible");
      inputName.setAttribute("style", "border: 1px solid green");
    }
  });
  inputMonth.addEventListener("input", function (e) {
    cardMonth.innerHTML = e.target.value;
    if (cardMonth.innerText > 12) {
      inputMonth.setAttribute("style", "border: 1px solid red");
    } else {
      inputMonth.setAttribute("style", "border: 1px solid green");
    }
    if (cardMonth.innerText === "") {
      document.querySelector(".month").classList.add("visible");
      inputMonth.setAttribute("style", "border: 1px solid red");
    } else {
      document.querySelector(".month").classList.remove("visible");
    }
  });
  inputYear.addEventListener("input", function (e) {
    cardYear.innerHTML = e.target.value;
    if (cardYear.innerText < 22 || cardYear.innerText > 30) {
      inputYear.setAttribute("style", "border: 1px solid red");
      document.querySelector(".month").innerText = "Invalid date!";
      document.querySelector(".month").classList.add("visible");
    } else {
      inputYear.setAttribute("style", "border: 1px solid green");
    }
    if (cardYear.innerText === "") {
      document.querySelector(".month").classList.add("visible");
      inputYear.setAttribute("style", "border: 1px solid red");
    } else {
      document.querySelector(".month").classList.remove("visible");
    }
  });
  inputCVC.addEventListener("input", function (e) {
    cardCVC.innerHTML = e.target.value;
    if (cardCVC.innerText.length < 3) {
      inputCVC.setAttribute("style", "border: 1px solid red");
    } else {
      inputCVC.setAttribute("style", "border: 1px solid green");
    }
    if (cardCVC.innerText === "") {
      document.querySelector(".cvc").classList.add("visible");
      inputCVC.setAttribute("style", "border: 1px solid red");
    } else {
      document.querySelector(".cvc").classList.remove("visible");
    }
  });

  cardForm.addEventListener("submit", function (e) {
    e.preventDefault();
    isInputEmpty();

    const verifyInput = arrCardInputs.some((item) => {
      return item.value === "";
    });
    if (verifyInput) {
      null;
    } else if (cardNumber.innerText.length < 16) {
      inputNumber.setAttribute("style", "border: 1px solid red");
      document.querySelector(".number").innerText =
        "You need to fill this field with 16 caracteres!";
      document.querySelector(".number").classList.add("visible");
    } else {
      formRender.classList.remove("visible");
      setTimeout(() => {
        thanksRender.classList.add("visible");
      }, 1500);
    }
  });

  btnContinue.addEventListener("click", function () {
    location.reload();
  });
})();

function numberCard(nc) {
  let inputNumber = document.getElementById("number");
  value = inputNumber.value;

  let cardNumber = document.querySelector(".number-card");
  if (value.length < 16) {
    alert("Por favor, digite os 16 números do seu cartão.");
    nc.preventDefault();
  } else {
    value = value.replace(/\s/g, "");
    //Tira o espaçamento toda vez que aperto no button
    value = value.replace(/(.{4})/g, "$1 ");
    inputNumber.value = value;
    //Adiciona espaçamento a cada 4 números
    cardNumber.textContent = value;
  }
}

function nameCard(n) {
  let inputName = document.getElementById("name").value;
  let cardName = document.querySelector(".name-card");
  if (inputName.length < 5) {
    alert("Por favor, digite seu NOME e SOBRENOME.");
    e.preventDefault();
  } else if (!/^[a-zA-Z\s]+$/.test(inputName)) {
    alert("Por favor, insira apenas letras no campo de nome.");
    n.preventDefault();
  } else {
    cardName.textContent = inputName;
  }
}

function dateCard(d) {
  let inputMonth = document.getElementById("date").value;
  let cardMonth = document.querySelector(".month");
  let inputYear = document.getElementById("year").value;
  let cardYear = document.querySelector(".year");
  cardMonth.textContent = inputMonth;
  cardYear.textContent = inputYear;

  if (inputMonth.length < 2 || inputYear.length < 2) {
    alert("Por favor, digite 2 números no mês e no ano de validade do cartão.");
    d.preventDefault();
  } else {
    cardMonth.textContent = inputMonth;
    cardYear.textContent = inputYear;
  }
}

function codeCard(c) {
  let inputCode = document.getElementById("cvc").value;
  let cardCode = document.querySelector(".cvc-number");
  if (inputCode.length < 3) {
    alert("Por favor, digite 3 números no CVC.");
    c.preventDefault();
  } else {
    cardCode.innerText = inputCode;
  }
}

function inactive() {
  let formulario = document.querySelector(".formulario");
  let completed = document.querySelector(".add-card");
  if (formulario.classList.contains("inactive")) {
    formulario.classList.remove("inactive");
    completed.classList.add("inactive");
  } else {
    completed.classList.remove("inactive");
    formulario.classList.add("inactive");
  }
}

document.querySelector("button").addEventListener("click", e => {
  // Chama todas as funções de validação
  nameCard(e);
  numberCard(e);
  dateCard(e);
  codeCard(e);

  // Se houver erro em alguma validação, evita o envio do formulário
  if (e.defaultPrevented) {
    e.preventDefault();
  } else {
    inactive();
    e.preventDefault();
  }
});

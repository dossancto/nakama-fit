const pesoField = document.getElementById("peso");
const alturaField = document.getElementById("altura");
// const errorBox = document.getElementById("errorBox");

const imcNum = document.getElementById("result");
const imcDesc = document.getElementById("imc_desc");

const maleslc = document.getElementById("maleslc");
const femaleslc = document.getElementById("femaleslc");

// TODO: Add all other messages
const IMCDATA = [
  { val: 0, msg: "Baixo peso muito grave" },
  { val: 16, msg: "Baixo peso grave" },
  { val: 17, msg: "Baixo peso" },
  { val: 18.5, msg: "Peso normal" },
  { val: 25, msg: "Sobrepeso" },
  { val: 30, msg: "Obesidade grau I" },
  { val: 35, msg: "Obesidade grau II" },
  { val: 40, msg: "Obesidade grau III" },
].sort((a, b) => b.val - a.val)

pesoField.addEventListener('keyup', calcImc)
alturaField.addEventListener('keyup', calcImc)

/**
  * Calculates the IMC 
  * @param peso `float`. peso is the user weight.
  * @param altura `float`. altura is high.
  * @returns a `float` containing the IMC result
*/
function imc(peso, altura) {
  return (peso) / (altura * altura)
}

/**
  * Numbers validation for IMC calc.
  * @param peso `float`. peso is the user weight.
  * @param altura `float`. altura is high.
*/
function validNumberInfo(n) {
  if (n <= 0) return { valid: false, err: "Cannot be lower or equals 0" }
  if (isNaN(n)) return { valid: false, err: "The value is not a number" }

  return { valid: true, err: null }
}

// TODO: Add element to highlight
/**
  * Put a error message in the DOM.
  * @param message `string` the message to be showed
  *
*/
function showErrorMessage(element, message) {
  console.error(message)

  element.classList.add("error-input");
}

function removeErrorMessage(element) {
  element.classList.remove("error-input");
}

/**
  * Return the description of the corresponding IMC result.
  * @param imc `float`. use `imc()` to get this value.
  * @returns a `string` containing the IMC description.
  * if a corresponding description for imc was found, the minumun value is returned
  * (because is probally the correct value)
*/
function getDescByImcResult(imc) {
  return (IMCDATA.find(i => i.val <= imc) || IMCDATA[IMCDATA.length - 1]).msg;
}

/**
  * Get all fields values and updates the DOM with the infos
  * @param message `string` the message to be showed
*/
function calcImc() {
  const peso = pesoField.value;

  const altura = alturaField.value;

  const pesoValid = validNumberInfo(parseFloat(peso));
  const alturaValid = validNumberInfo(parseFloat(altura));

  if (!pesoValid.valid && peso != "") {
    showErrorMessage(pesoField, pesoValid.err)
    // Do something if the peso is not valid.
    return;
  }

  removeErrorMessage(pesoField)

  if (!alturaValid.valid && altura != "") {
    showErrorMessage(alturaField, alturaValid.err)
    // Do something if the altura is not valid.
    return;
  }

  removeErrorMessage(alturaField)

  if (altura == "" || peso == "")
    return

  // showErrorMessage("")

  const imcresult = imc(peso, altura) * 10000;
  const desc = getDescByImcResult(imcresult);

  // Garante que não apareça umnúmero muito alto pelo calculo realizado com 
  // o usuário ainda digitando o valor da altura "peso / (altura * altura)".
  if (imcresult < 100) {
    imcNum.textContent = imcresult.toFixed(2);
    imcDesc.textContent = desc;
  }
}

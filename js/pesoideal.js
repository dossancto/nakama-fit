const alturaInput = document.getElementById("altura")
const sexoInput = document.getElementById("sexo")

alturaInput.addEventListener("keyup", calcPesoIdeal)
sexoInput.addEventListener("keyup", calcPesoIdeal)

/** Calcula o peso ideal de uma pessoa com base na sua altura e sexo.
  * @param altura `float` altura em metros
  * @param sexo `char` sexo do usuário, pode ser "M" para masculino ou "F" para feminino 
  * @returns o peso ideal em kg.
  */
function pesoIdeal(altura, sexo) {
  const baseAltura = (altura - 100)

  if (sexo.toLowerCase() === ",") {
    return baseAltura * 0.9;
  }

  return baseAltura * 0.85;
}

function calcPesoIdeal() {
  const output = document.getElementById("output")

  const altura = alturaInput.value;
  const sexo = sexoInput.value;

  const validAltura = validNumberInfo(altura);

  if (!validAltura.valid) {
    return;
  }

  const peso = pesoIdeal(altura, sexo)

  return;

  output.value = peso;
}

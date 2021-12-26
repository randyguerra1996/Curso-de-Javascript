const resultTextTriangulo = document.getElementById('resultTriangulo');
const resultCirculo = document.getElementById('resultCirculo');

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

function perimetroTriangulo(ladoA, ladoB, base) {
  return ladoA + ladoB + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
}

function areaCirculo(radio) {
  return radio * radio * Math.PI;
}

//Interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const resultText = document.getElementById('result');
  const value = input.value;

  if (value == '') {
    resultText.innerHTML = 'Ingrese un valor mayor a cero.';
    resultText.className = 'resultError';
    return;
  }

  const perimetro = perimetroCuadrado(value);
  resultText.innerHTML = `El perímetro es de: ${perimetro} cm`;
  resultText.className = 'resultSuccess';
}

function calcularAreaCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const resultText = document.getElementById('result');
  const value = input.value;

  if (value == '') {
    resultText.innerHTML = 'Ingrese un valor mayor a cero.';
    resultText.className = 'resultError';
    return;
  }

  const area = areaCuadrado(value);
  resultText.innerHTML = `El área es de: ${area} cm^2`;
  resultText.className = 'resultSuccess';
}

function calcularPerimetroTriangulo() {
  const inputLadoA = document.getElementById('InputLadoATriangulo');
  const inputLadoB = document.getElementById('InputLadoBTriangulo');
  const inputBaseTriangulo = document.getElementById('InputBaseTriangulo');

  const ladoA = inputLadoA.value;
  const ladoB = inputLadoB.value;
  const base = inputBaseTriangulo.value;

  if (validaCamposPerimetroTriangulo(ladoA, ladoB, base)) {
    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    resultTextTriangulo.innerHTML = `El perímetro es de: ${perimetro} cm`;
    resultTextTriangulo.className = 'resultSuccess';
  }
}

function validaCamposPerimetroTriangulo(ladoA, ladoB, base) {
  if (ladoA === '') {
    resultTextTriangulo.innerHTML = 'Ingrese el valor del Lado A.';
    resultTextTriangulo.className = 'resultError';
    return false;
  }

  if (ladoB === '') {
    resultTextTriangulo.innerHTML = 'Ingrese el valor del Lado B.';
    resultTextTriangulo.className = 'resultError';
    return false;
  }
  if (base === '') {
    resultTextTriangulo.innerHTML = 'Ingrese el valor de la base.';
    resultTextTriangulo.className = 'resultError';
    return false;
  }

  return true;
}

function calculaAreaTriangulo() {
  const base = document.getElementById('InputBaseTriangulo').value;
  const altura = document.getElementById('InputAlturaTriangulo').value;

  if (validaCamposArea(base, altura)) {
    const area = areaTriangulo(base, altura);
    resultTextTriangulo.innerHTML = `El área es de: ${area} cm^2`;
    resultTextTriangulo.className = 'resultSuccess';
  }
}

function validaCamposArea(base, altura) {
  if (base == '') {
    resultTextTriangulo.innerHTML = 'Ingrese el valor del la base.';
    resultTextTriangulo.className = 'resultError';
    return false;
  }
  if (altura == '') {
    resultTextTriangulo.innerHTML = 'Ingrese el valor del la altura.';
    resultTextTriangulo.className = 'resultError';
    return false;
  }
  return true;
}

function calcularAlturaTriangulo() {
  const ladoA = document.getElementById('InputLadoATriangulo').value;
  const ladoB = document.getElementById('InputLadoBTriangulo').value;
  const base = document.getElementById('InputBaseTriangulo').value;

  if (validaCaposAlturaTriangulo(ladoA, ladoB, base)) {
    const altura = calcularAlturaTrianguloIsoceles(ladoA, ladoB, base);
    resultTextTriangulo.innerHTML = `La altura del triángulo isósceles es de: ${altura} cm`;
    resultTextTriangulo.className = 'resultSuccess';
  }
}

function validaCaposAlturaTriangulo(ladoA, ladoB, base) {
  if (ladoA == '') {
    resultTextTriangulo.innerHTML = 'Ingrese el valor del Lado A.';
    resultTextTriangulo.className = 'resultError';
    return false;
  }
  if (ladoB == '') {
    resultTextTriangulo.innerHTML = 'Ingrese el valor del Lado B.';
    resultTextTriangulo.className = 'resultError';
    return false;
  }
  if (base == '') {
    resultTextTriangulo.innerHTML = 'Ingrese el valor de la base.';
    resultTextTriangulo.className = 'resultError';
    return false;
  }
  if (ladoA != ladoB) {
    resultTextTriangulo.innerHTML = 'Los lados a y b no son iguales.';
    resultTextTriangulo.className = 'resultError';
    return false;
  }
  return true;
}
function calcularAlturaTrianguloIsoceles(ladoA, ladoB, base) {
  const catetoB = Math.pow(base / 2, 2);
  const hipotenusa = Math.pow(ladoA, 2);
  const catetoA = hipotenusa - catetoB;
  const altura = Math.sqrt(catetoA);
  return altura;
}

function calcularPerimetroCirculo() {
  const radio = document.getElementById('InputRadio').value;
  if (radio == '') {
    resultCirculo.innerHTML = 'Ingrese el valor del radio.';
    resultCirculo.className = 'resultError';
    return;
  }

  const perimetro = perimetroCirculo(radio);
  resultCirculo.innerHTML = `El perímetro es de: ${perimetro} cm`;
  resultCirculo.className = 'resultSuccess';
}

function calculaAreaCirculo() {
  const radio = document.getElementById('InputRadio').value;
  if (radio == '') {
    resultCirculo.innerHTML = 'Ingrese el valor del radio.';
    resultCirculo.className = 'resultError';
    return;
  }

  const area = areaCirculo(radio);
  resultCirculo.innerHTML = `El área es de: ${area} cm`;
  resultCirculo.className = 'resultSuccess';
}

function calcularDiametro() {
  const radio = document.getElementById('InputRadio').value;
  if (radio == '') {
    resultCirculo.innerHTML = 'Ingrese el valor del radio.';
    resultCirculo.className = 'resultError';
    return;
  }

  const area = diametroCirculo(radio);
  resultCirculo.innerHTML = `El diámetro es de: ${area} cm`;
  resultCirculo.className = 'resultSuccess';
}
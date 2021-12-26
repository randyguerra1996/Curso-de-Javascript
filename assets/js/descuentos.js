function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
  
    const inputPrice = document.getElementById('InputPrecio');
    const priceValue = inputPrice.value;
    const InputDiscount = document.getElementById('InputDescuento');
    const discountValue = InputDiscount.value;
    const resultPrice = document.getElementById('resultPrice');
  
    if (priceValue == '') {
      resultPrice.innerHTML = 'Ingrese el precio.';
      resultPrice.className = 'resultError';
      return;
    }
  
    if (discountValue == '') {
      resultPrice.innerHTML = 'Ingrese el porcentaje de descuento.';
      resultPrice.className = 'resultError';
      return;
    }
  
    const precioTotal = calcularPrecioConDescuento(priceValue, discountValue);
    resultPrice.innerHTML = `El precio sería de: ${precioTotal}`;
    resultPrice.className = 'resultSuccess';
    
  }
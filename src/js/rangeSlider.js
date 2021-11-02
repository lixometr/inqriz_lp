try { const priceCalculator = document.querySelector(".js-price-calculator");
const priceOutput = document.querySelector('.js-calculator-total');
const saleOutput =  document.querySelector('.js-calculator-sale');
const countOutput =  document.querySelector('.js-calculator-count');
const slider = noUiSlider.create(priceCalculator, {
  start: 50,
  tooltips: false,
  range: {
    min: [10, 40],
    "16.6%": [50, 50],
    "33.2%": [100, 100],
    "49.8%": [200, 300],
    "66.4%": [500, 500],
    "83%": [1000, 1000],
    max: [5000]
  },
  connect: "lower",
  format: {
    to(value) {
      return parseInt(value);
    },
    from(value) {
      return value;
    }
  }
});

slider.on("update", e => {
  let val = e[0];
  let updatedPrice = updatePrice(val);
  let newPrice = updatedPrice.total;
  let sale = updatedPrice.sale;
  let format = new Intl.NumberFormat('ru-RU', {
      style: "currency",
      currency: 'rub'
  })
  newPrice = Math.round(newPrice)
  newPrice = format.format(newPrice)
  priceOutput.innerHTML =  newPrice;

  if(window.innerWidth <= 650) {
    saleOutput.innerHTML = sale + '%';
    countOutput.innerHTML = val;
  }
});

//  110
function updatePrice(count) {
  const sales = [
    {
      starts: 50,
      sale: 10,
    },
    {
      starts: 100,
      sale: 20,
    },
    {
      starts: 200,
      sale: 40,
    },
    {
      starts: 500,
      sale: 50,
    },
    {
      starts: 1000,
      sale: 50,
    }
  ];
  const price = 10;

  count = parseInt(count);
  let nowSale = 0;
  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    if (count >= sale.starts) {
      nowSale = sale.sale;
    }
    if (count < sale.starts) {
      break;
    }
  }
  let totalPrice = price * count;
  const saleValue = nowSale / 100 * totalPrice;
  totalPrice  = totalPrice - saleValue;
  return {
    total: totalPrice,
    sale: nowSale
  };
  
}
} catch(err) {
  console.log(err)
}
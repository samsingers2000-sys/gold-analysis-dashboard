const priceEl = document.getElementById("current-price");

const prices = [330, 334, 338, 342, 336, 344, 348, 351, 353, 355.8];

const renderPrice = () => {
  const currentValue = prices[prices.length - 1];
  if (priceEl) {
    priceEl.textContent = currentValue.toFixed(2);
  }
};

renderPrice();

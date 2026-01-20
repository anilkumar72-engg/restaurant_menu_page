const OWNER_PHONE = "916300289099"; // Bawarchi WhatsApp number (India)

let order = {};

function addItem(item) {
  if (order[item]) {
    order[item]++;
  } else {
    order[item] = 1;
  }
  updateOrderCount();
}

function updateOrderCount() {
  const totalItems = Object.values(order).reduce((a, b) => a + b, 0);
  document.getElementById("order-count").innerText =
    totalItems + " item(s)";
}

function sendWhatsApp() {
  if (Object.keys(order).length === 0) {
    alert("Please add items to order");
    return;
  }

  let message = "🍽 *New Order – Bawarchi*\n\n";

  Object.keys(order).forEach((item, i) => {
    message += `${i + 1}. ${item} × ${order[item]}\n`;
  });

  message += "\nPlease confirm. Thank you!";

  const url =
    "https://wa.me/" +
    OWNER_PHONE +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}

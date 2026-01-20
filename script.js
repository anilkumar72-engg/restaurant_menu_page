// ===== CONFIG =====
const OWNER_PHONE = "6300289099"; // replace with owner's WhatsApp number (no +, no spaces)

// ===== ORDER STORAGE =====
let order = {};

// ===== ADD ITEM =====
function addItem(itemName) {
  if (order[itemName]) {
    order[itemName]++;
  } else {
    order[itemName] = 1;
  }
  alert(itemName + " added (" + order[itemName] + ")");
}

// ===== SEND TO WHATSAPP =====
function sendWhatsApp() {
  const items = Object.keys(order);

  if (items.length === 0) {
    alert("Please add items to order");
    return;
  }

  let message = "🛎 *New Order - Bawarchi*\n\n";

  items.forEach((item, index) => {
    message += `${index + 1}. ${item} × ${order[item]}\n`;
  });

  message += "\nThank you!";

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${OWNER_PHONE}?text=${encodedMessage}`;

  window.open(url, "_blank");
}

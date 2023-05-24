// Ambil Element Button dengan id myForm
const Contact = document.getElementById("myForm");
Contact.addEventListener("click", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  // Message
  var formattedMessage = "Name: " + name + "\n\nMessage: " + message;

  // Api untuk send ke penjual
  var apiUrl =
    "https://api.whatsapp.com/send?phone=62882000921484&text=" +
    encodeURIComponent(formattedMessage);
  window.open(apiUrl, "_blank"); // Open WhatsApp in a new tab/window
});

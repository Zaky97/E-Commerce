const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function (event) {
  event.preventDefault();

  const searchValue = searchInput.value.toLowerCase();

  let targetUrl = "";
  switch (searchValue) {
    case "spotify":
      targetUrl = "https://zaky97.zapto.org/Produk/Produk2.html";
      break;
    case "youtube":
      targetUrl = "https://zaky97.zapto.org/Produk/Produk1.html";
      break;
    case "minecraft":
      targetUrl = "https://zaky97.zapto.org/Produk/Produk3.html";
      break;
    default:
      targetUrl = "https://github.com/Zaky9277";
      return;
  }

  window.location.href = targetUrl;
});

// 1. Storage variables (State)
let totalPrix = 0;
let nombreArticles = 0;

// 2. Function to add an item to the shopping cart
function ajouterAuPanier(nomProduit, prixProduit) {
  
  // Find the HTML list where items go
  const listePanier = document.getElementById("cart-items");
  
  // If this is the first item, clear the "Your cart is empty" message
  const emptyMsg = document.querySelector(".empty-msg");
  if (emptyMsg) {
    listePanier.innerHTML = ""; // This completely clears the placeholder message
  }

  // Create a simple line of HTML text for the new item
  const nouvelArticleHTML = `<li>${nomProduit} - ${prixProduit} TND</li>`;
  
  // Add this line to the end of our list container
  listePanier.innerHTML = listePanier.innerHTML + nouvelArticleHTML;
  
  // Update our numbers
  totalPrix = totalPrix + prixProduit;
  nombreArticles = nombreArticles + 1;

  // Send the new numbers to the screen
  document.getElementById("cart-total").textContent = totalPrix;
  document.getElementById("cart-count").textContent = nombreArticles;
}

// 3. Function to completely clear the shopping cart
function viderPanier() {
  // Reset our storage numbers back to zero
  totalPrix = 0;
  nombreArticles = 0;

  // Reset the numbers displayed on the screen
  document.getElementById("cart-total").textContent = "0";
  document.getElementById("cart-count").textContent = "0";

  // Put the original "Your cart is empty" message back into the list
  document.getElementById("cart-items").innerHTML = '<li class="empty-msg">Votre panier est vide.</li>';
}
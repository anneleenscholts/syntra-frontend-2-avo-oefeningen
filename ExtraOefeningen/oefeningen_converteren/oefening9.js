// Product object zonder types
const product = {
    id: 1,
    name: "Laptop",
    price: 1200,
    quantity: 1
  };
  
  // Functie om producten aan de winkelwagen toe te voegen
  function addToCart(cart, product) {
    cart.push(product);
    return cart;
  }
  
  // Functie om de totale prijs van de winkelwagen te berekenen
  function calculateTotal(cart) {
    let total = 0;
    for (let item of cart) {
      total += item.price * item.quantity;
    }
    return total;
  }
  
  // Testcode
  const cart = [];
  addToCart(cart, product);
  console.log(`Totale prijs: €${calculateTotal(cart)}`);
  
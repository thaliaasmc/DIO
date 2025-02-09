async function addItem(userCart, item) {
    userCart.push(item);
  }
  
  // calculate the total
  async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n Total: ${result.toFixed(2)}`);
  }
  
  // delete item
  async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
  
    if (index !== -1) {
      userCart.splice(index, 1);
    }
  }

  async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    if (indexFound == -1) {
      console.log("item não encontrado");
      return;
    }
    if (userCart[indexFound].quantity > 1) {
      userCart[indexFound].quantity -= 1;
      return;
    }
    if (userCart[indexFound].quantity == 1) {
      userCart.splice(indexFound, 1);
      return;
    }
  }
  
  async function displayCart(userCart) {
    console.log(" \n Shopee cart list");
    userCart.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.name} - R$ ${item.price} | ${
          item.quantity
        } | Subtotal = ${item.subtotal().toFixed(2)}`
      );
    });
  }
  
  export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
// This Page done by
// Name: T.J.Dinal.I.Fernando
// IIT ID: 20220536
// UOW ID: w2000072

// Initialize the cart items and cart count
const cartItems = [];
let cartCount = 0;

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('active');
}

// Product prices
const productPrices = {
    1: 2100,
    2: 12,
    3: 30,
    4: 110,
    5: 15,
    6: 165
};

// Add a product to the cart
function addToCart(productId) {
    const quantity = parseInt(document.getElementById("quantity_0" + productId).value);
    if (quantity === 0) {
        alert("There should be at least 1 quantity to add to cart!");
        return;
    }

    const price = productPrices[productId];
    const productPrice = quantity * price;
    const productName = getProductLabel(productId);

    cartItems.push({
        productId,
        productName,
        quantity,
        productPrice,
    });

    const productListItem = document.createElement("dd");
    productListItem.setAttribute("id", `cart-item-${productId}`);
    productListItem.innerHTML = `<span class="product-name">${productName}:</span> <span class="quantity">${quantity}</span> x <span class="product-price">$${productPrice.toFixed(2)}</span>`;

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt");
    deleteIcon.setAttribute("onclick", `removeFromCart(${productId})`);
    productListItem.appendChild(deleteIcon);

    document.getElementById("order").appendChild(productListItem);

    // Update the total price and cart count
    updateTotalPrice();
    cartCount = cartItems.length;
    updateCartCount();

    // Reset the quantity field after adding to cart
    document.getElementById("quantity_0" + productId).value = 1;
}

// Update the total price in the cart
function updateTotalPrice() {
    let totalPrice = 0;
    for (const cartItem of cartItems) {
        const { productId, quantity } = cartItem;
        const price = productPrices[productId];
        totalPrice += quantity * price;
    }

    // Update the total in the cart
    document.getElementById("total_bill").innerHTML = totalPrice.toFixed(2);
    document.getElementById("Proceed").disabled = totalPrice === 0;
}

// Check if the cart is not empty before proceeding to the form
function checkCart() {
    updateTotalPrice();
    const totalPrice = parseFloat(document.getElementById("total_bill").innerHTML);
    if (totalPrice !== 0) {
        localStorage.setItem("totalBill", totalPrice); // Added statement
        alert("Taking you to the Checkout Page..");
        window.location.href = "checkoutpage.html"; // Redirect the user to the checkoutpage.html
        return true;
    } else {
        alert("Your cart is empty! Please add some products.");
        return false;
    }
}

// Function to remove an item
function removeFromCart(productId) {
    const productIndex = cartItems.findIndex((item) => item.productId === productId);
    if (productIndex !== -1) {
        const quantity = cartItems[productIndex].quantity;
        cartItems.splice(productIndex, 1);
        cartCount = cartItems.length;
        updateCartCount();

        const price = productPrices[productId];
        const productPrice = quantity * price;
        const totalPrice = parseFloat(document.getElementById("total_bill").innerHTML);
        const newTotalPrice = totalPrice - productPrice;

        document.getElementById("total_bill").innerHTML = newTotalPrice.toFixed(2);

        const productListItem = document.getElementById(`cart-item-${productId}`);
        productListItem.remove();
    }
}

// Get the product label based on the product ID
function getProductLabel(productId) {
    const productLabels = {
        1: "Microscope",
        2: "Test Tubes",
        3: "Beaker",
        4: "Bunsen Burner",
        5: "Weighing Machines",
        6: "Ammeter"
    };
    return productLabels[productId];
}
// Update the cart count display
function updateCartCount() {
    document.getElementById("cart-count").textContent = cartCount;
}

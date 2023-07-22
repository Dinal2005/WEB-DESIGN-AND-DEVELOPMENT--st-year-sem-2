// This Page done by
// Name : T.J.Dinal.I.Fernando
// IIT ID : 20220536
// UOW ID : w2000072


// Refferenced for the side bar cart https://www.youtube.com/watch?v=fnh-Ux4Jj5E
function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('active');
}

const prices = {
    1: 2100,
    2: 12,
    3: 30,
    4: 110,
    5: 15,
    6: 165
};

function addToCart(productId) {
    const quantity = parseInt(document.getElementById("quantity_0" + productId).value);
    if (quantity === 0) {
        alert("There should be at least 1 quantity to add to cart!");
    } else {
        const price = prices[productId];
        const productPrice = quantity * price;
        const productName = getProductLabel(productId);
        const productListItem = document.createElement("dd");
        productListItem.innerHTML = productName + " : " + quantity + " x $" + price.toFixed(2) + "  = $" + productPrice.toFixed(2);
        document.getElementById("order").appendChild(productListItem);
        updateTotalPrice();
    }
}

// Function to update total price in the cart
function updateTotalPrice() {
    let totalPrice = 0;
    for (let i = 1; i <= 6; i++) {
        const quantity = parseInt(document.getElementById("quantity_0" + i).value);
        const price = prices[i];
        totalPrice += quantity * price;
    }
    document.getElementById("total_bill").innerHTML = totalPrice.toFixed(2);
    const proceedButton = document.getElementById("Proceed");
    if (totalPrice !== 0) {
        proceedButton.disabled = false; // Enable the button if totalPrice is not equal to 0
    } else {
        proceedButton.disabled = true; // Disable the button if totalPrice is equal to 0
    }
}

function checkCart() {
    updateTotalPrice();
    const totalPrice = parseFloat(document.getElementById("total_bill").innerHTML);

    if (totalPrice !== 0) {
        alert("Proceeding to the form!");
        return true;
    } else {
        alert("Your cart is empty! Please add some products.");
        return false;
    }
}

function getProductLabel(productId) {
    switch (productId) {
        case 1:
            return "Microscope";
        case 2:
            return "Test Tubes";
        case 3:
            return "Beaker";
        case 4:
            return "Bunsen Burner";
        case 5:
            return "Weighing Machines";
        case 6:
            return "Ammeter";
    }
}
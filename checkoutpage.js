// This Page done by
// Name: T.J.Dinal.I.Fernando
// IIT ID: 20220536
// UOW ID: w2000072


// referrenced https://www.youtube.com/watch?v=G7_VTWnWz40
document.querySelector('.card-number-input').oninput = () => {
  const cardNumber = document.querySelector('.card-number-input').value;
  const formattedCardNumber = formatCardNumber(cardNumber);
  document.querySelector('.card-number-box').innerText = formattedCardNumber;
  updateCardPreview(formattedCardNumber);
};

function formatCardNumber(value) {
  // Remove all non-digit characters
  const digitsOnly = value.replace(/\D/g, '');
  // Split the digits into groups of four
  const chunks = digitsOnly.match(/.{1,4}/g);
  if (chunks) {
    // Join the groups with spaces
    return chunks.join(' - ');
  }
  return value;
}

function updateCardPreview(cardNumber) {
  const hiddenCardNumber = 'XXXX - XXXX - XXXX - XXXX';
  const visibleDigits = cardNumber.slice(0, 24);

  const hiddenDigitsCount = hiddenCardNumber.length - visibleDigits.length;
  const hiddenDigits = hiddenCardNumber.slice(-hiddenDigitsCount);

  const displayedCardNumber = visibleDigits + hiddenDigits;
  document.querySelector('.card-number-box').innerText = displayedCardNumber;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}
document.querySelector('.email-input').oninput = () => {
    const emailInput = document.querySelector('.email-input');
    const emailValue = emailInput.value;
    const isValidEmail = validateEmail(emailValue);
    if (!isValidEmail) {
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
    }
};

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function validateForm() {
    // Validate the email
    const emailInput = document.querySelector('.email-input');
    const emailValue = emailInput.value;
    const isValidEmail = validateEmail(emailValue);

    // Add any additional validation checks for other input fields here
    const cardNumberInput = document.querySelector('.card-number-input');
    const cardHolderInput = document.querySelector('.card-holder-input');
    const monthInput = document.querySelector('.month-input');
    const yearInput = document.querySelector('.year-input');
    const cvvInput = document.querySelector('.cvv-input');
    const fullNameInput = document.querySelector('.full-name-input');
    const contactNumberInput = document.querySelector('.contact-number-input');
    const addressInput = document.querySelector('.address-input');
    const zipCodeInput = document.querySelector('.zip-code-input');

    if (
        !isValidEmail ||
        cardNumberInput.value === "" ||
        cardHolderInput.value === "" ||
        monthInput.value === "month" ||
        yearInput.value === "year" ||
        cvvInput.value === "" ||
        fullNameInput.value === "" ||
        contactNumberInput.value === "" ||
        addressInput.value === "" ||
        zipCodeInput.value === ""
    ) {
        alert("Please fill in all the required fields.");
        return false; // Prevent form submission if any field is empty or email is invalid
    }

    alert('Thank you for your order!\nClick OK to go to our Website..');
        // Redirect to buyproducts.html after confirmation
        window.location.href = 'buyproducts.html';
    return false; // Prevent form submission (can be removed if you want to allow form submission without validation)
}
const total_checkout = localStorage.getItem("totalBill");
document.getElementById("total_bill").textContent = total_checkout;
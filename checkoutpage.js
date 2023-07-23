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
document.getElementById('submit-btn').addEventListener('click', function (event) {
    // All fields are filled and email is valid, display the confirmation alert
    const confirmationMessage = 'Thank you for your order!\nClick OK to go to our Website..';
    if (confirm(confirmationMessage)) {
        // Redirect to buyproducts.html after confirmation
        window.location.href = 'buyproducts.html';
    }
});

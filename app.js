document.addEventListener('DOMContentLoaded', function () {
  const userForm = document.getElementById('userForm');
  const resultCards = document.getElementById('resultCards');
  const submitButton = document.getElementById('submitButton');

  userForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;

    // Construct the URL with query parameters
    const cardUrl = `card.html?firstName=${firstName}&lastName=${lastName}&email=${email}&phone=${phone}&dob=${dob}&gender=${gender}&address=${address}`;

    // Redirect to card.html with the query parameters
    window.location.href = cardUrl;
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const firstName = urlParams.get('firstName');
  const lastName = urlParams.get('lastName');
  const email = urlParams.get('email');
  const phone = urlParams.get('phone');
  const dob = urlParams.get('dob');
  const gender = urlParams.get('gender');
  const address = urlParams.get('address');

  // Create card with user information
  const card = document.createElement('div');
  card.classList.add('col-md-12', 'mb-3');
  card.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${firstName} ${lastName}</h5>
        <p class="card-text"><strong>Email:</strong> ${email}</p>
        <p class="card-text"><strong>Phone:</strong> ${phone}</p>
        <p class="card-text"><strong>Date of Birth:</strong> ${dob}</p>
        <p class="card-text"><strong>Gender:</strong> ${gender}</p>
        <p class="card-text"><strong>Address:</strong> ${address}</p>
      </div>
    </div>
  `;

  const resultCards = document.getElementById('resultCards');
  resultCards.appendChild(card);
});

// Navbar login simulation (optional)
const navbarWelcome = document.getElementById('welcome');
navbarWelcome.textContent = "Welcome, Vishal!"; // Example logged-in user

// Gift details
const gift = {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 120.00
};

// Populate gift details
document.getElementById('gift-name').textContent = gift.name;
document.getElementById('gift-description').textContent = gift.description;
document.getElementById('gift-price').textContent = `Price: $${gift.price.toFixed(2)}`;

// Buy button action
document.getElementById('buyBtn').addEventListener('click', function() {
    alert(`You are about to buy: ${gift.name}`);
});

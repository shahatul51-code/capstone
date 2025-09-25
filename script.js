// ------------------ Navbar login simulation ------------------
const navbarWelcome = document.getElementById('welcome');
if (localStorage.getItem('username')) {
    navbarWelcome.textContent = `Welcome, ${localStorage.getItem('username')}!`;
}

// ------------------ Register Form ------------------
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulate registration
        localStorage.setItem('username', username);
        alert(`User registered:\nUsername: ${username}\nEmail: ${email}`);
        navbarWelcome.textContent = `Welcome, ${username}!`;
    });
}

// ------------------ Gifts Data ------------------
const gifts = [
    {name: "Teddy Bear", description: "Soft and cuddly teddy bear.", price: 25.00},
    {name: "Chocolate Box", description: "Assorted gourmet chocolates.", price: 15.00},
    {name: "Flower Bouquet", description: "Fresh flowers arranged beautifully.", price: 30.00},
    {name: "Perfume", description: "Fragrant perfume for special occasions.", price: 50.00},
    {name: "Gift Card", description: "Gift card for your favorite store.", price: 20.00},
    {name: "Handbag", description: "Stylish handbag made of quality leather.", price: 75.00},
    {name: "Coffee Mug", description: "Ceramic coffee mug with design.", price: 10.00},
    {name: "Watch", description: "Elegant wristwatch with leather strap.", price: 100.00},
];

// ------------------ Render Gifts ------------------
const giftsContainer = document.getElementById('gifts-container');
function renderGifts(list) {
    giftsContainer.innerHTML = '';
    list.forEach(gift => {
        const giftDiv = document.createElement('div');
        giftDiv.className = 'gift-item';
        giftDiv.textContent = `🎁 ${gift.name}`;
        giftDiv.addEventListener('click', () => {
            localStorage.setItem('selectedGift', JSON.stringify(gift));
            window.location.href = 'giftdetails.html';
        });
        giftsContainer.appendChild(giftDiv);
    });
}
renderGifts(gifts);

// ------------------ Search Functionality ------------------
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filtered = gifts.filter(gift => 
        gift.name.toLowerCase().includes(query) || 
        gift.description.toLowerCase().includes(query)
    );
    renderGifts(filtered);
});

// ------------------ Gift Details Page Rendering ------------------
const giftName = document.getElementById('gift-name');
const giftDescription = document.getElementById('gift-description');
const giftPrice = document.getElementById('gift-price');
const buyBtn = document.getElementById('buyBtn');

if (giftName && localStorage.getItem('selectedGift')) {
    const gift = JSON.parse(localStorage.getItem('selectedGift'));
    giftName.textContent = gift.name;
    giftDescription.textContent = gift.description;
    giftPrice.textContent = `Price: $${gift.price.toFixed(2)}`;

    buyBtn.addEventListener('click', () => {
        alert(`You are about to buy: ${gift.name}`);
    });
}

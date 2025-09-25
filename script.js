const navbarWelcome = document.getElementById('welcome');

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate registering user
    alert(`User registered:\nUsername: ${username}\nEmail: ${email}`);

    // Show username in navbar as "logged-in"
    navbarWelcome.textContent = `Welcome, ${username}!`;
});

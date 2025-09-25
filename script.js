document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    alert(`User about to be registered:\nUsername: ${username}\nEmail: ${email}`);
});

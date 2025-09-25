// Example: dynamically add a click event to gifts
document.addEventListener('DOMContentLoaded', () => {
    const gifts = document.querySelectorAll('#gift-list li');

    gifts.forEach(gift => {
        gift.addEventListener('click', () => {
            alert(`You clicked on ${gift.textContent}`);
        });
    });
});

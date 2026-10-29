// N = 13, so each product can be added (13 % 4) + 2 = 3 times.
const limit = (13 % 4) + 2;
const cart = [];
const cards = document.querySelectorAll('.book-card');
const cartToggle = document.querySelector('#cart-toggle');
const miniCart = document.querySelector('#mini-cart');
const cartItems = document.querySelector('#cart-items');
const cartCount = document.querySelector('#cart-count');
const cartTotal = document.querySelector('#cart-total');

// Rebuild the small list and keep the badge, total and buttons in sync.
function updateCart() {
    cartCount.textContent = cart.length;
    cartTotal.textContent = cart.reduce((total, item) => total + item.price, 0);
    cartItems.textContent = '';

    if (cart.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'Your cart is empty.';
        cartItems.append(emptyMessage);
    }

    cart.forEach((item, index) => {
        const row = document.createElement('li');
        const description = document.createElement('span');
        description.textContent = `${item.name} — Rs. ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('aria-label', `Remove ${item.name}`);
        removeButton.addEventListener('click', () => {
            cart.splice(index, 1);
            updateCart();
        });
        row.append(description, removeButton);
        cartItems.append(row);
    });

    cards.forEach(card => {
        const name = card.querySelector('.book-title').textContent.trim();
        const count = cart.filter(item => item.name === name).length;
        const button = card.querySelector('button');
        button.disabled = count >= limit;
        button.textContent = button.disabled ? 'Limit reached' : 'Add to Cart';
    });
}

cards.forEach(card => {
    const button = card.querySelector('button');
    button.addEventListener('click', () => {
        const name = card.querySelector('.book-title').textContent.trim();
        const price = Number(card.querySelector('.price').textContent.replace('Rs.', '').trim());
        const count = cart.filter(item => item.name === name).length;
        if (count >= limit) return;
        cart.push({ name, price });
        updateCart();
    });
});

cartToggle.addEventListener('click', event => {
    event.preventDefault();
    miniCart.hidden = !miniCart.hidden;
    cartToggle.setAttribute('aria-expanded', String(!miniCart.hidden));
});

updateCart();

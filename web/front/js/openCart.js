async function openCart() {
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    try {
        const response = await fetch(`${API_BASE_URL}/cart/items`, {
            credentials: 'include'
        });
        const data = await response.json();
        
        let html = '';
        let total = 0;
        
        data.cart?.forEach(item => {
            html += `
                <div class="cart-item">
                    ${item.name} - ${item.quantity} × ${item.price}₽
                    <button onclick="updateQuantity('${item.cart_id}', ${item.quantity + 1})">+</button>
                    <button onclick="updateQuantity('${item.cart_id}', ${item.quantity - 1})">-</button>
                    <button onclick="removeItem('${item.cart_id}')">×</button>
                </div>
            `;
            total += item.price * item.quantity;
        });

        document.getElementById('cartItems').innerHTML = html;
        document.getElementById('cartTotal').textContent = total.toFixed(2);
        document.getElementById('cartModal').style.display = 'flex';
    } catch (error) {
        console.error('Ошибка загрузки корзины:', error);
    }
}
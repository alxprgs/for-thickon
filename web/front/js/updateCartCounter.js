async function updateCartCounter() {
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    try {
        const response = await fetch(`${API_BASE_URL}/cart/items`, {
            credentials: 'include'
        });
        const data = await response.json();
        document.getElementById('cartCounter').textContent = data.cart?.length || 0;
    } catch (error) {
        console.error('Ошибка обновления корзины:', error);
    }
}
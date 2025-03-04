async function removeItem(cartId) {
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    try {
        const response = await fetch(`${API_BASE_URL}/cart/items/${cartId}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-Token': getCSRFToken()
            },
            credentials: 'include'
        });
        
        if(response.ok) {
            await openCart();
            await updateCartCounter();
        }
    } catch (error) {
        console.error('Ошибка удаления:', error);
    }
}
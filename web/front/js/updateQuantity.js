async function updateQuantity(cartId, newQuantity) {
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    if(newQuantity < 1) return;
    
    try {
        const response = await fetch(`${API_BASE_URL}/cart/items/${cartId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': getCSRFToken()
            },
            credentials: 'include',
            body: JSON.stringify({ quantity: newQuantity })
        });
        
        if(response.ok) {
            await openCart();
            await updateCartCounter();
        }
    } catch (error) {
        console.error('Ошибка обновления:', error);
    }
}
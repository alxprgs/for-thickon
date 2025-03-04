async function createOrder() {
    const csrfToken = getCSRFToken();
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    try {
        const response = await fetch(`${API_BASE_URL}/cart/order`, {
            method: 'POST',
            headers: {
                'X-CSRF-Token': csrfToken
            },
            credentials: 'include'
        });

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.detail || 'Ошибка оформления заказа');
        }

        window.location.href = result.payment_url;
    } catch (error) {
        alert(error.message);
    }
}
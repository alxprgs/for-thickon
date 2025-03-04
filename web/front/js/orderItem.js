async function orderItem() {
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    const authCheck = await checkAuth();
    if (!authCheck.status) {
        alert('Пожалуйста, войдите в систему!');
        document.getElementById('loginModal').style.display = 'flex';
        return;
    }

    const name = document.getElementById('detailsTitle').innerText;
    const price = parseFloat(document.getElementById('detailsPrice').innerText.match(/[\d.]+/)[0]);
    const csrfToken = getCSRFToken();

    try {
        const response = await fetch(`${API_BASE_URL}/cart/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
            credentials: 'include', 
            body: JSON.stringify({
                name: name,
                price: price,
                quantity: 1
            })
        });

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.detail || `Ошибка: ${response.status}`);
        }

        alert(result.message);
        closeModal('detailsModal');
        await updateCartCounter();
    } catch (error) {
        console.error('Ошибка:', error);
        alert(error.message);
    }
}
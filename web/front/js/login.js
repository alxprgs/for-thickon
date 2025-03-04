async function login() {
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: username,
                password: password
            })
        });

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.message || 'Ошибка авторизации');
        }

        alert('Вход выполнен успешно!');
        closeModal('loginModal');
        location.reload();
    } catch (error) {
        alert(error.message);
    }
}
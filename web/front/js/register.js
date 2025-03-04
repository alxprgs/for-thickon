async function register() {
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;
    const repeatPassword = document.getElementById('regRepeatPassword').value;

    try {
        const response = await fetch(`${API_BASE_URL}/reg`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                login: phone,
                password: password,
                repetition_password: repeatPassword
            })
        });

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.error || 'Ошибка регистрации');
        }

        alert('Регистрация успешна!');
        closeModal('registerModal');
        location.reload();
    } catch (error) {
        alert(error.message);
    }
}
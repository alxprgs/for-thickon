async function register() {
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    const name = document.getElementById('regName').value;
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;
    const repeatPassword = document.getElementById('regRepeatPassword').value;
    const captchaToken = document.querySelector('input[name="cf-turnstile-response"]').value;

    try {
        const response = await fetch(`${API_BASE_URL}/reg`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                login: phone,
                password: password,
                repetition_password: repeatPassword,
                cf_turnstile_response: captchaToken
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
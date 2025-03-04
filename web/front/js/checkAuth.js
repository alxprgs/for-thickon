async function checkAuth() {
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    try {
        const response = await fetch(`${API_BASE_URL}/check_auth`, {
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result);
        return { status: result };
    } catch (error) {
        console.log(false);
        return { status: false };
    }
}
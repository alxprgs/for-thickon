async function checkApiStatus() {
    const API_BASE_URL = 'https://api.prghorse.ru/v1';
    try {
        const response = await fetch(`${API_BASE_URL}/status`);
        if (!response.ok) {
            return false;
        }
        const data = await response.json();
        return data.status === true;
    } catch (error) {
        return false;
    }
}
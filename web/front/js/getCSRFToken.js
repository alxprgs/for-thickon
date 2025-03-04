function getCSRFToken() {
    const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrf_token'))
        ?.split('=')[1];
    
    if (!token) {
        console.warn('CSRF Token not found!');
    }
    return token;
}
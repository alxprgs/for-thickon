function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showDetails(title, description, price) {
    document.getElementById('detailsTitle').innerText = title;
    document.getElementById('detailsDescription').innerText = description;
    document.getElementById('detailsPrice').innerText = `Цена: ${price}₽`;
    document.getElementById('detailsModal').style.display = 'flex';
}

function login() {
    closeModal('loginModal');
    alert('Добро пожаловать!');
}

function orderItem() {
    alert('Блюдо добавлено в заказ!');
    closeModal('detailsModal');
}

window.onload = () => {
    document.getElementById('loginModal').style.display = 'flex';
};
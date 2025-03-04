function showDetails(title, description, price) {
    document.getElementById('detailsTitle').innerText = title;
    document.getElementById('detailsDescription').innerText = description;
    document.getElementById('detailsPrice').innerText = `Цена: ${price}₽`;
    document.getElementById('detailsModal').style.display = 'flex';
}
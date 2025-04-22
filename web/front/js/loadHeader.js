document.addEventListener('DOMContentLoaded', function() {
    fetch('/static/header.html')
        .then(response => response.text())
        .then(html => {
            const headerContainer = document.createElement('div');
            headerContainer.innerHTML = html;
            document.body.prepend(headerContainer);

            initHeader();
        });
});
function initHeader() {
    document.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', () => {
            openModal(button.dataset.modal);
        });
    });

    document.querySelector('.cart-icon').addEventListener('click', openCart);
}
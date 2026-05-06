// Simulação de adicionar ao carrinho
const buttons = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.querySelector('.cart-count');
let count = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCountElement.textContent = count;
        button.innerText = "Adicionado!";
        button.style.backgroundColor = "#28a745";
        
        setTimeout(() => {
            button.innerText = "Adicionar";
            button.style.backgroundColor = "#e30613";
        }, 1500);
    });
});

// Efeito na barra de pesquisa
const searchInput = document.querySelector('.search-container input');
searchInput.addEventListener('focus', () => {
    document.querySelector('.search-container').style.boxShadow = "0 0 10px rgba(0,74,153,0.3)";
});
searchInput.addEventListener('blur', () => {
    document.querySelector('.search-container').style.boxShadow = "none";
});
// ARRAY DE PRODUTOS
const products = [
    {
        name: "Assento para vaso sanitário",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_817625-MLU75151960170_032024-F.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }

];
// Embaralha a ordem dos produtos
products.sort(() => Math.random() - 0.5);



// SELECIONANDO ELEMENTOS NO HTML
const productsContainer = document.getElementById("products-container");
const searchModalOverlay = document.getElementById('search-modal-overlay');
const searchForm = searchModalOverlay.querySelector('form');
const searchInput = searchForm.querySelector('input');
const noResultsModal = document.getElementById('no-results-modal');
const noResultsMessage = noResultsModal.querySelector('.message');
const closeNoResultsButton = noResultsModal.querySelector('.close-button');

// FUNÇÃO PARA EXIBIR TODOS OS PRODUTOS
const displayProducts = (filteredProducts, query = '') => {
    productsContainer.innerHTML = ''; // Limpa o container antes de adicionar os produtos
    if (filteredProducts.length > 0) {
        filteredProducts.forEach((product, index) => {
            const card = document.createElement("div");
            card.className = "relative bg-cover bg-center p-4 shadow rounded text-center w-full flex justify-center items-center flex-col gap-1 before:absolute before:inset-0 before:bg-[var(--black)] before:opacity-50 before:rounded p-8 transition-transform duration-300 hover:scale-105 cursor-pointer";
            card.style.backgroundImage = `url('${product.image}')`;
            card.setAttribute('data-index', index);

            card.innerHTML = `
                <h3 class="relative text-xl text-[var(--white)] font-semibold p-1">
                    ${product.name}
                </h3>
                <p class="relative text-[var(--primary)] text-sm font-bold">Serviço: ${product.service}</p>
                <a href="${product.link}" class="relative flex items-center mx-auto bg-[var(--green-whatsapp)] text-[var(--white)] px-8 py-1 rounded-md transition-all duration-300 font-medium">
                    Solicitar agora
                </a>
            `;
            productsContainer.appendChild(card);

            // Se houver uma busca, destacamos o primeiro resultado e centralizamos
            if (query && index === 0) {
                setTimeout(() => {
                    highlightProduct(card);
                }, 300); // Tempo de espera curto para garantir que o elemento seja renderizado
            }
        });

        noResultsModal.classList.add('hidden'); // Esconde o modal de "Nenhum produto encontrado"
    } else {
        noResultsMessage.textContent = "Nenhum produto encontrado";
        noResultsModal.classList.remove('hidden'); // Exibe o modal de "Nenhum produto encontrado"
        searchModalOverlay.classList.add('hidden'); // Esconde o modal de busca ao mostrar o de "Nenhum produto encontrado"
        searchInput.value = ''; // Limpa o campo de busca
    }
};

// Destacar e centralizar um produto encontrado
const highlightProduct = (productElement) => {
    searchModalOverlay.classList.add('hidden'); // Fecha o modal de busca
    productElement.classList.add('border-4', 'border-yellow-500', 'animate-pulse'); // Adiciona borda e animação

    // Centraliza o produto na tela
    productElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // Remove o destaque após 2 segundos
    setTimeout(() => {
        productElement.classList.remove('border-4', 'border-yellow-500', 'animate-pulse');
    }, 2000);
};

// Exibe todos os produtos inicialmente
displayProducts(products);

// FILTRO DE BUSCA DE PRODUTOS
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length >= 3) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query) || product.service.toLowerCase().includes(query)
        );
        displayProducts(filteredProducts, query);
    } else {
        // Se a busca tiver menos de 3 caracteres, exibe todos os produtos
        displayProducts(products);
    }
});

// Abrir o modal de busca
const openSearchModal = () => {
    searchModalOverlay.classList.remove('hidden');
    searchInput.value = ''; // Limpa o campo de busca ao abrir o modal
    searchInput.focus(); // Foca no input automaticamente
    displayProducts(products); // Exibe todos os produtos novamente ao abrir o modal
};

// Fechar o modal de busca
const closeSearchModal = () => {
    searchModalOverlay.classList.add('hidden');
    searchInput.value = ''; // Limpa o campo de busca ao fechar o modal
};

// Evento para fechar o modal de busca ao clicar fora
searchModalOverlay.addEventListener('click', (e) => {
    if (e.target === searchModalOverlay) {
        closeSearchModal();
    }
});

// Função para fechar o modal de "Nenhum produto encontrado"
const closeNoResultsModal = () => {
    noResultsModal.classList.add('hidden');
    searchInput.value = ''; // Limpa o campo de busca ao fechar o modal de erro
    displayProducts(products); // Exibe todos os produtos novamente
};

// Evento de fechamento do modal de "Nenhum produto encontrado"
closeNoResultsButton.addEventListener('click', closeNoResultsModal);

// Para abrir o modal de busca (por exemplo, em um botão ou outra ação)
const searchButton = document.getElementById('open-search-button');
if (searchButton) {
    searchButton.addEventListener('click', openSearchModal);
} else {
    console.error("O botão de busca não foi encontrado no DOM.");
}
// ARRAY DE PRODUTOS
const products = [
    {
        name: "Demolição ceramica",
        service: "Demolição",
        image: "https://www.construtecequipamentos.com.br/wp-content/uploads/2020/03/ferramentas-para-demoli%C3%A7%C3%A3o-1200x480.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    {
        name: "Pia de banheiro",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_759738-MLU73681222661_122023-O.webp",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    {
        name: "Limpeza de calhas e rufos Por m2 linear",
        service: "Limpeza",
        image: "https://www.hardclean.com.br/wp-content/uploads/2020/04/limpeza-de-calhas-em-curitiba-pr.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    {
        name: "Demolição, contrapiso por m2",
        service: "Demolição",
        image: "https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/63a3693c-2498-4eaf-a362-5c40ac1e0fec/63a3693c-31bc-4e93-ab4d-5c40ac1e0fec.png",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    ,
    {
        name: "Vaso sanitário",
        service: "Instalação",
        image: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/coresviv/catalog/api/coresviv_integrac/63e65057b5954.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    {
        name: "Telhado por m2",
        service: "Instalação",
        image: "https://fibersals.com.br/wp-content/uploads/2018/07/xmelhor-telhado-para-terraco-2.jpg.pagespeed.ic.Lelf-nOdUt.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    ,
    {
        name: "Demolição de parede para elétrica",
        service: "Demolição",
        image: "https://i.ytimg.com/vi/g1PWkztM_zY/maxresdefault.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    {
        name: "Demolição ceramica",
        service: "Demolição",
        image: "https://www.construtecequipamentos.com.br/wp-content/uploads/2020/03/ferramentas-para-demoli%C3%A7%C3%A3o-1200x480.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    ,
    {
        name: "Tanque",
        service: " Instalação",
        image: "https://product-hub-prd.madeiramadeira.com.br/354016/images/58be5e83-90a8-46c6-b58d-7166841877faastra78912221167841600x600.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    ,
    {
        name: "Demolição",
        service: "Demolição de parede",
        image: "https://blog.obramax.com.br/wp-content/uploads/2021/04/demolicao-guia-completo-com-tudo-que-voce-precisa-saber-1.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    {
        name: "Reboco por m2",
        service: "Reboco",
        image: "https://www.queveks.com.br//upload/notice_image/entenda-o-que-e-reboco-e-conheca-um-pouco-mais-sobre-a-sua-funcao-no-revestimento-de-paredes-5fc1149e857d4.png",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
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
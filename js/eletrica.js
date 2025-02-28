// ARRAY DE PRODUTOS
const products = [
    {
        name: "Tomada",
        service: "Instalação, Troca",
        image: "https://cdn.leroymerlin.com.br/products/tomada_dupla_fame_habitat_2p_t_20a_com_placa_4x2_branco_1570752212_bbe5_600x600.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Tomada 110v p 220v",
        service: "Instalação, Troca",
        image: "https://img.elo7.com.br/product/zoom/EA9753/adesivo-painel-eletrico-tomada-110-220-painel-eletrico.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Resistência de chuveiro",
        service: "Instalação, Troca",
        image: "https://lojastamoyo.fbitsstatic.net/img/p/resistencia-chuveiro-advanced-eletronico-7500-w-lorenzetti-89632/276185.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Sensor de presença",
        service: "Instalação, Troca",
        image: "https://bravalumi.cdn.magazord.com.br/img/2022/02/produto/2063/sensor-de-presenca-intelbras-para-iluminacao-articulado-espi-360a-bivolt.png",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Reator",
        service: "Instalação, Troca",
        image: "https://www.eletrofm.com.br/img/products/reator-convencional-2-x-65w-220v-intral_1_1000.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }

    ,
    {
        name: "Lampada par ou dicroica",
        service: "Instalação, Troca",
        image: "https://images.tcdn.com.br/img/img_prod/1249590/lampada_led_dicroica_par16_dimerizavel_gu10_36o_2700k_7w_bivolt_437377_brilia_271_1_faca627a22b6acf5ad7ac103809e22e0.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Luminária",
        service: "Instalação, Troca",
        image: "https://lojaorganizeja.com/cdn/shop/files/PendenteLuminariaParaCozinhaModerna-UrbanGlow-lojaorganizeja.com_15_-Copia.webp",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Fiacão elétrica ar condicionado",
        service: "Instalação, Troca",
        image: "https://arcondicionadoararaquara.com.br/wp-content/uploads/2021/03/instalacao-eletrica-ar-condicionado-em-araraquara-aramaster-01.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Fiação eletrica de chuveiro",
        service: "Instalação, Troca",
        image: "https://images.homify.com/image/upload/v1618419710/p/diy/photos/ng8ooiigh1qctxq1ys8b.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Projeto elétrico",
        service: "Construção m2",
        image: "https://engehall.com.br/wp-content/uploads/2024/08/projetos-eletricos.webp",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Disjuntor",
        service: "Instalação, Troca",
        image: "https://lojaacal.vteximg.com.br/arquivos/ids/201121-1000-1000/Disjuntor-Triplo-Curva-C-16A-3P-TDJ3-3-3KA-Tramontina-Eletrica.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    },
    {
        name: "Lâmpada",
        service: "Instalação, troca, retirada",
        image: "https://eletroenergia.com.br/wp-content/uploads/2016/02/Design-sem-nome-5-scaled.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Canaleta plastica",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_698241-MLB32568004041_102019-O.webp",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Interruptor",
        service: "Instalação, manutenção, troca",
        image: "https://images.tcdn.com.br/img/img_prod/625353/10_pcs_conjunto_interruptor_simples_10a_250v_vertical_slim_ilm0062_9729_1_20200403121708.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Cabeamento tv e internet",
        service: "Instalação",
        image: "https://nextcable.com.br/wp-content/uploads/2020/06/caboscat5678.01-1024x682@2x-1.jpg",
        link: "https://wa.me/5511976080419?text=Ol%C3%A1%20eu%20vim%20do%20site%20FF%20Service%20e%20gostaria%20de%20um%20or%C3%A7amento%20!"
    }
    ,
    {
        name: "Exaustor de banheiro",
        service: "Instalação",
        image: "https://seubanheirointeligente.com.br/wp-content/uploads/2023/06/Como-instalar-o-Exaustor-para-Banheiro.png",
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
const servicos = [
    /* SERVIÇOS DE HIDRAULICA*/
    {
        imagem: "../img/Serviços/Hidraulica/1 Vazamentos em vazos canos.webp",
        titulo: "Vazamentos em vazos canos",
        servico: "Reparo",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Hidraulica/2 Vazamentos em pia sifão.webp",
        titulo: "Vazamentos em pia sifão",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Hidraulica/3 torneira de parede.webp",
        titulo: "Torneira de parede",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"

    },
    {
        imagem: "../img/Serviços/Hidraulica/4 reparo de torneira.webp",
        titulo: "Reparo de torneira",
        servico: "Reparo",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Hidraulica/5 torneira de bancada.webp",
        titulo: "Torneira de bancada",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"

    },
    {
        imagem: "../img/Serviços/Hidraulica/6 sifão.webp",
        titulo: "Sifão",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"

    },
    {
        imagem: "../img/Serviços/Hidraulica/7 ralo pia valvula.webp",
        titulo: "Ralo pia valvula",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Hidraulica/8 descarga de vaso  valvula hydra.webp",
        titulo: "Descarga de vaso  valvula hydra",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Hidraulica/9 ducha higiênica.webp",
        titulo: "Ducha higiênica",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Hidraulica/10 Filtro de água.webp",
        titulo: "Filtro de água",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Hidraulica/11 Registo.webp",
        titulo: "Registo",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Hidraulica/12 limpeza de caixa d'água.webp",
        titulo: "Limpeza de caixa d'água",
        servico: "Limpeza",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Hidraulica/13 ralo de piso.webp",
        titulo: "Ralo de piso",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    /* FIM SERVIÇOS DE HIDRAULICA*/
]
// FUNÇÃO PARA CRIAR E INSERIR OS CARTÕES NA PÁGINA 
function gerarCards() {
    const cardsContainer = document.getElementById("cardsContainer");

    servicos.forEach(servico => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${servico.imagem}" alt="${servico.titulo}">
            <h3>${servico.titulo}</h3>
            <h5><strong>Serviço:</strong> ${servico.servico}</h5>
            <a href="${servico.link}" class="solicite-agora">Solicite agora</a>
        `;

        cardsContainer.appendChild(card);
    });
}

// FUNÇÃO PARA CRIAR O FILTRO DE BUSCA
function aplicarFiltroDeBusca() {
    const searchInput = document.querySelector('.pesquisa input');
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.cards .card');

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const service = card.querySelector('h5').textContent.toLowerCase();
            const keywords = card.getAttribute('data-keywords') || '';

            const isVisible =
                title.includes(searchTerm) ||
                service.includes(searchTerm) ||
                keywords.toLowerCase().includes(searchTerm);

            card.style.display = isVisible ? 'block' : 'none';
        });
    });
}

// Chama a função para gerar os cartões e depois ativa a busca
document.addEventListener('DOMContentLoaded', function () {
    gerarCards();
    aplicarFiltroDeBusca();
});
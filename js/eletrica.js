/*SERVIÇOS DE ELETRICA */
const servicos = [
    {
        imagem: "../img/Serviços/Eletrica/1 Tomada.webp",
        titulo: "Tomada",
        servico: "Instalação, Troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/2 Tomada 110v p 220v.webp",
        titulo: "Tomada 110v p 220v",
        servico: "Instalação, Troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/3 Resistencia de chuveiro.webp",
        titulo: "Resistência de chuveiro",
        servico: "Instalação, Troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/4 Senshor de presença.webp",
        titulo: "Sensor de presença",
        servico: "Instalação, Troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    }
    , {
        imagem: "../img/Serviços/Eletrica/5 Reator.webp",
        titulo: "Reator",
        servico: "Instalação, Troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/6 Lampada par ou dicroica.webp",
        titulo: "Lampada par ou dicroica",
        servico: "Instalação, Troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/7 Luminária.webp",
        titulo: "Luminária",
        servico: "Instalação, Troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/8 Fiação eletrica ar condicionado.webp",
        titulo: "Fiacão elétrica ar condicionado",
        servico: "Instalação, Troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/9 Fiação eletrica ar chuveiro.webp",
        titulo: "Fiação eletrica de chuveiro",
        servico: "Instalação, Troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/10 projeto elétrico.webp",
        titulo: "Projeto elétrico",
        servico: "Construção m2",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/11 Disjuntor.webp",
        titulo: "Disjuntor",
        servico: "Instalação, Troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/12 lâmpada.webp",
        titulo: "Lâmpada",
        servico: "Instalação, troca, retirada",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/13 Canaleta plastica.webp",
        titulo: "Canaleta plastica",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/14 interruptor.webp",
        titulo: "Interruptor",
        servico: "Instalação, manutenção, troca",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/15 cabeamento tv e internet.webp",
        titulo: "Cabeamento tv e internet",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Eletrica/16 Exaustor de banheiro.webp",
        titulo: "Exaustor de banheiro",
        servico: "Instalação",
        link: "https://wa.me/5511996905490?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    /** FIM SERVIÇOS DE ELETRICA */

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


// Chama a função para gerar os cartões e depois ativa a busca
document.addEventListener('DOMContentLoaded', function () {
    gerarCards();
    aplicarFiltroDeBusca();
});

document.addEventListener('DOMContentLoaded', function () {
    // Determina se estamos na página inicial ou em uma subpágina
    const isSubPage = window.location.pathname.includes('/pages/');
    const basePath = isSubPage ? '../' : './';



    // Carregar o Footer
    fetch(`${basePath}components/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
});

// Ajusta os links do header baseado na localização atual
function adjustHeaderLinks() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const isSubPage = window.location.pathname.includes('/pages/');

    // Ajusta o link do logo
    const logoLink = nav.querySelector('.logo a');
    if (logoLink) {
        logoLink.href = isSubPage ? '../index.html' : './index.html';

        // Ajusta o caminho da imagem do logo
        const logoImg = logoLink.querySelector('img');
        if (logoImg) {
            logoImg.src = isSubPage ? '../img/Logo/Logo (azul e amarelo).png' : './img/Logo/Logo (azul e amarelo).png';
        }
    }

    // Ajusta os links do menu
    const menuLinks = nav.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('pages/')) {
            // Se estamos em uma subpágina, remove 'pages/' do início
            link.href = isSubPage ? href.replace('pages/', '') : href;
        } else if (href.startsWith('#')) {
            // Para links de âncora, adiciona o caminho correto para index se estivermos em uma subpágina
            link.href = isSubPage ? '../index.html' + href : href;
        }
    });
}

//MENU MOBILE
let btnMob = document.querySelector('#menu-button');
let menu = document.querySelector('#menu');

btnMob.addEventListener('click', () => {
    menu.classList.toggle('show');
});


// SCRIPT VOLTA PARA O TOPO - Usando `defer` e melhorias de performance
const backToTopBtn = document.getElementById('back-to-top-btn');
let ticking = false;

function checkScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.pageYOffset;

            // Controle de opacidade do botão
            backToTopBtn.classList.toggle('opacity-0', scrollPosition <= totalHeight / 2);
            backToTopBtn.classList.toggle('opacity-100', scrollPosition > totalHeight / 2);

            ticking = false;
        });
        ticking = true;
    }
}

// Função para voltar ao topo da página com animação suave
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Adiciona o evento de scroll para controlar a visibilidade do botão
window.addEventListener('scroll', checkScroll, { passive: true });
// Adiciona o evento de clique para voltar ao topo
backToTopBtn.addEventListener('click', scrollToTop);




window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 500); // Tempo de transição antes de desaparecer
});

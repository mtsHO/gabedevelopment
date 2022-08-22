// colapse menu mobile

const botaoMeunu = document.querySelector('.icone-menu');
let alturaMenu = document.querySelector('.cabecalho-mobile')

botaoMeunu.addEventListener('click', abrirMenu);
  
function abrirMenu(event) {
    alturaMenu.classList.toggle('menu-mobile-completo');
};
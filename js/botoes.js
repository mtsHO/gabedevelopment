
//----------------BOTAO IMAGENS CARROUSEL - HOME -------------//


// HEAVY METAL MACHINE
const botaoHMM = document.querySelector('div.image1, div#projeto-1');

botaoHMM.addEventListener('click', irParaProjetoHMM);
  
function irParaProjetoHMM(event) {
  window.location.href = "projeto-hmm.html";
};


// VECTOR MIRROR

const botaoVM = document.querySelector('div.image2, div#projeto-2');

botaoVM.addEventListener('click', irParaProjetoVM);
  
function irParaProjetoVM(event) {
  window.location.href = "projeto-vm.html";
};

// NOT WITHOUT YOU

const botaoNWY = document.querySelector('div.image3, div#projeto-3');

botaoNWY.addEventListener('click', irParaProjetoNWY);
  
function irParaProjetoNWY(event) {
  window.location.href = "projeto-nwy.html";
};

// VECTOR MIRROR 0

const botaoVM0 = document.querySelector('div.image4, div#projeto-4');

botaoVM0.addEventListener('click', irParaProjetoVM0);
  
function irParaProjetoVM0(event) {
  window.location.href = "projeto-vm0.html";
};

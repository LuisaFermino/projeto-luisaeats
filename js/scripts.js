//função para selecionar prato
function selecionarPrato(classePrato) {
  const selecionado = document.querySelector(".menu-prato .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  const botao = document.querySelector("." + classePrato);
  botao.classList.add("selecionado");
}

//função para selecionar bebida
function selecionarBebida(classeBebida) {
  const selecionado = document.querySelector(".menu-bebida .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  const botao = document.querySelector("." + classeBebida);
  botao.classList.add("selecionado");
}

//função para selecionar sobremesa

function selecionarSobremesa(classeSobremesa) {
  const selecionado = document.querySelector(".menu-sobremesa .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  const botao = document.querySelector("." + classeSobremesa);
  botao.classList.add("selecionado");
}

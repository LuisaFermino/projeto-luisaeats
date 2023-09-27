let prato = null;
let bebida = null;
let sobremesa = null;

//função para selecionar prato
function selecionarPrato(classePrato) {
  const selecionado = document.querySelector(".menu-prato .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }
  const pratoSelecionado = document.querySelector("." + classePrato);
  pratoSelecionado.classList.add("selecionado");
  prato = pratoSelecionado;
  validarPedido();
}

//função para selecionar bebida
function selecionarBebida(classeBebida) {
  const selecionado = document.querySelector(".menu-bebida .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  const bebidaSelecionada = document.querySelector("." + classeBebida);
  bebidaSelecionada.classList.add("selecionado");

  bebida = bebidaSelecionada;
  validarPedido();
}

//função para selecionar sobremesa

function selecionarSobremesa(classeSobremesa) {
  const selecionado = document.querySelector(".menu-sobremesa .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  const sobremesaSelecionada = document.querySelector("." + classeSobremesa);
  sobremesaSelecionada.classList.add("selecionado");
  sobremesa = sobremesaSelecionada;

  validarPedido();
}

function validarPedido() {
  if (prato !== null && bebida !== null && sobremesa !== null) {
    const liberado = document.querySelector(" .container");
    liberado.classList.add("liberado");

    let mensagemFinalizar = document.querySelector(".mensagem-pedido");
    mensagemFinalizar.innerHTML = "Fechar Pedido";
  }
}

function fecharPedido() {
  if (prato !== null && bebida !== null && sobremesa !== null) {
    let nomePrato = prato.querySelector(".nome-prato");
    let valorPrato = prato.querySelector(".valor").innerHTML;
    valorPrato = valorPrato.replace("R$ ", "");
    valorPrato = valorPrato.replace(",", ".");
    valorPrato = Number(valorPrato);

    let nomeBebida = bebida.querySelector(".nome-prato");
    let valorBebida = bebida.querySelector(".valor-prato").innerHTML;
    valorBebida = valorBebida.replace("R$ ", "");
    valorBebida = valorBebida.replace(",", ".");
    valorBebida = Number(valorBebida);

    let nomeSobremesa = sobremesa.querySelector(".nome-prato");
    let valorSobremesa = sobremesa.querySelector(".valor-prato").innerHTML;
    valorSobremesa = valorSobremesa.replace("R$ ", "");
    valorSobremesa = valorSobremesa.replace(",", ".");
    valorSobremesa = Number(valorSobremesa);

    let valorTotal = valorPrato + valorBebida + valorSobremesa;
    console.log(valorTotal);

    const mensagemZap = `Olá, gostaria de fazer o pedido: \n\n
    - Prato: ${nomePrato} - ${valorPrato}\n\n
    - Bebida: ${nomeBebida} - ${valorBebida}\n\n
    - Sobremesa: ${nomeSobremesa} - ${valorSobremesa}\n\n
    Total: ${valorTotal}`;

    window.location.href = `https://wa.me/5514998812492?text=${mensagemZap}`;
  }
}

// let texto = "A Luisa é a pessoa mais bonita do WORD";
// undefined
// texto
// 'A Luisa é a pessoa mais bonita do WORD'
// texto = texto.repl
// undefined
// texto
// undefined
// let texto = "A Luisa é a pessoa mais bonita do WORD";
// undefined
// texto = texto.replace("Luisa", "Paulo")
// 'A Paulo é a pessoa mais bonita do WORD'
// let teste = "O valor é R$ 14.00"
// undefined
// teste = teste.replace("R$14.00", 14.00)
// 'O valor é R$ 14.00'
// teste = teste.replace("O valor é R$", "")
// ' 14.00'
// teste = teste.replace(" ", "")
// '14.00'
// Number(teste)
// 14
// teste.toFixed(2)

// teste = Number(teste)
// 14
// teste.toFixed(2)
// '14.00'

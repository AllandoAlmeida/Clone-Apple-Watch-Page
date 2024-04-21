
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');
const verdeCipreste = {
  name: "Verde-Cipreste",
  folder: "imagens-verde-cipreste",
};
const azulInverno = {
  name: "Azul-inverno",
  folder: "imagens-azul-inverno",
};

const meioNoite = {
  name: "Meia-noite",
  folder: "imagens-meia-noite",
};

const estelar = {
  name: "Estelar",
  folder: "imagens-estelar",
};

const rosaClaro = {
  name: "Rosa-Claro",
  folder: "imagens-rosa-claro",
};


const colorOption = [verdeCipreste, azulInverno, meioNoite, estelar, rosaClaro];
const opcaoTamanho = ['41 mm', '45 mm']

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src= './imagens/opcoes-cores/'+colorOption[corSelecionada].folder + "/imagem-"+imagemSelecionada+'.jpeg';
    console.log(imagemSelecionada)


}

function trocarTamanho() {
    const idTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva " + colorOption[corSelecionada].name + " para caixa de " + opcaoTamanho[tamanhoSelecionado];
    if(opcaoTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');

    }
    console.log(tamanhoSelecionado)

}

function trocarCores() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva " + colorOption[corSelecionada].name + " para caixa de " + opcaoTamanho[tamanhoSelecionado];
    nomeCor.innerText = ' Cor - ' + colorOption[corSelecionada].name;
    miniaturaImagem0.src = './imagens/opcoes-cores/'+colorOption[corSelecionada].folder + "/imagem-0.jpeg";
    miniaturaImagem1.src = './imagens/opcoes-cores/'+colorOption[corSelecionada].folder + "/imagem-1.jpeg";
    miniaturaImagem2.src = './imagens/opcoes-cores/'+colorOption[corSelecionada].folder + "/imagem-2.jpeg";
    imagemVisualizacao.src= './imagens/opcoes-cores/'+colorOption[corSelecionada].folder + "/imagem-"+imagemSelecionada+'.jpeg';
    console.log(colorOption[corSelecionada].name)
}
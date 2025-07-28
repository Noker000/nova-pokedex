const animais = [
  {
    numero: "01",
    nome: "Lobo Cinzento",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/Nova pokedex/Imagens/lobocinzento.gif",
    largura: "25%",
    altura: "20%",
    posicao: {
      bottom: "55%",
      left: "50%",
      transform: "translate(-63%, 20%)",
    },
  },
  {
    numero: "02",
    nome: "DODO",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/Nova pokedex/Imagens/DODO.gif",
    largura: "15%",
    altura: "15%",
    posicao: {
      bottom: "52%",
      left: "45%",
      transform: "translate(-50%, 0%)",
    },
  },
  {
    numero: "03",
    nome: "Rato de Noronha",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/Nova pokedex/Imagens/ratodenoronha.gif",
    largura: "25%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "44%",
      transform: "translate(-58%, 18%)",
    },
  },
  {
    numero: "04",
    nome: "Tigre de Java",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/Nova pokedex/Imagens/tigredejava.gif",
    largura: "30%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "50%",
      transform: "translate(-58%, 18%)",
    },
  },
  {
    numero: "05",
    nome: "Leopardo Nebuloso",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/Nova pokedex/Imagens/Leopardo.webp",
    largura: "25%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "50%",
      transform: "translate(-58%, 18%)",
    },
  },
  {
    numero: "06",
    nome: "Raposa Vermelha",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/Nova pokedex/Imagens/raposa vermelha.gif",
    largura: "25%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "45%",
      transform: "translate(-58%, 18%)",
    },
  },
  {
    numero: "07",
    nome: "Gigantopithecus",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/Nova pokedex/Imagens/Gigantopithecus.gif",
    largura: "47%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "48%",
      transform: "translate(-58%, 18%)",
    },
  },
  {
    numero: "08",
    nome: "Macaco prego",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/Nova pokedex/Imagens/macaco prego de crista.webp",
    largura: "35%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "48%",
      transform: "translate(-58%, 18%)",
    },
  },
  {
    numero: "09",
    nome: "Pombo Passageiro",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/Nova pokedex/Imagens/Pombo passageiro.gif",
    largura: "18%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "45%",
      transform: "translate(-58%, 30%)",
    },
  },
  {
    numero: "10",
    nome: "Corvo do Havaí",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/Nova pokedex/Imagens/corvo do havaí.gif",
    largura: "24%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "48%",
      transform: "translate(-58%, -8%)",
    },
  },
];

const imagemAnimal = document.querySelector(".animal_1");
const nomeAnimal = document.querySelector(".animal_nome");
const numeroAnimal = document.querySelector(".animal_numero");
const botaoNext = document.querySelector(".btn-next");
const botaoPrev = document.querySelector(".btn-prev");

let indiceAtual = 0;

function adicionarUnidade(tamanho) {
  if (typeof tamanho === "string") {
    if (tamanho.endsWith("%") || tamanho === "auto") return tamanho;
    if (/^\d+$/.test(tamanho)) return tamanho + "px";
    return tamanho;
  }
  if (typeof tamanho === "number") return tamanho + "px";
  return tamanho;
}

function atualizarAnimal(index) {
  const animal = animais[index];
  imagemAnimal.src = animal.imagem;
  nomeAnimal.textContent = animal.nome;
  numeroAnimal.textContent = animal.numero;
  imagemAnimal.style.position = "absolute";
  imagemAnimal.style.width = adicionarUnidade(animal.largura);
  imagemAnimal.style.height = adicionarUnidade(animal.altura);
  imagemAnimal.style.bottom = animal.posicao.bottom;
  imagemAnimal.style.left = animal.posicao.left;
  imagemAnimal.style.transform = animal.posicao.transform;
}

botaoNext.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % animais.length;
  atualizarAnimal(indiceAtual);
});

botaoPrev.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + animais.length) % animais.length;
  atualizarAnimal(indiceAtual);
});

// Clicar na lista lateral
document.querySelectorAll(".lista-itens li").forEach((item) => {
  item.addEventListener("click", () => {
    const index = parseInt(item.getAttribute("data-index"), 10);
    indiceAtual = index;
    atualizarAnimal(indiceAtual);
  });
});

// Toggle da lista lateral
const botaoToggle = document.querySelector(".toggle-lista");
const lista = document.querySelector(".animal-lista");
const main = document.querySelector("main");

botaoToggle.addEventListener("click", () => {
  const estaFechada = lista.classList.toggle("fechar");
  main.classList.toggle("recolhido");
  botaoToggle.classList.toggle("fechar");
  botaoToggle.innerHTML = estaFechada ? "&gt;" : "&lt;";
});

// Inicializar
atualizarAnimal(indiceAtual);

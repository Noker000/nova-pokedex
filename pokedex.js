const animais = [
  {
    numero: "01",
    nome: "Lobo Cinzento",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/lobocinzento.gif",
    descricao: "O lobo cinzento é uma espécie de mamífero carnívoro. considerado um animal social, vivia em alcateias com hierarquia definida. \n\n Existem até hoje, mas algumas subespécies foram extintas. Por exemplo, o lobo cinzento japonês (Canis lupus hodophilax) foi extinto no Japão no início do século XX. \n\n era encontrado na Ampla distribuição no Hemisfério Norte, especialmente em regiões da América do Norte, Europa e Ásia. \n\n Apesar de algumas espécies ainda existirem estão ameaçadas de extinção enquanto outras estão extintas a décadas.",
    largura: "25%",
    altura: "20%",
    posicao: {
      bottom: "55%",
      left: "50%",
      transform: "translate(-55%, 75%)",
    },
  },
  {
    numero: "02",
    nome: "Dodô",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/DODO.gif",
    descricao: "O Dodô era uma ave não voadora, com cerca de 1 metro de altura e pesava cerca de 15 a 20 kg. Não tinha predadores naturais até a chegada dos europeus. Porém foi extinto principalmente por caça e introdução de espécies invasoras (ratos, porcos, cães). Tornou-se um símbolo da extinção causada pelos humanos. \n\n Era endêmico da Ilha Maurício, no Oceano Índico (próximo à África) onde viveu até até o século XVII, quando os humanos chegaram à ilha.",
    largura: "15%",
    altura: "15%",
    posicao: {
      bottom: "52%",
      left: "45%",
      transform: "translate(-45%, 75%)",
    },
  },
  {
    numero: "03",
    nome: "Rato de Noronha",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/ratodenoronha.gif",
    descricao: "O Rato de Noronha viveu na Ilha de Fernando de Noronha no ano de 1735.  Foi declarado extinto na natureza por volta de 1980. \n\n Ele continha habilidade de se adaptar às condições climáticas específicas da ilha, que são extremamente áridas em algumas áreas e, ao mesmo tempo, tropicais em outras. \n\nfoi capaz de sobreviver em um habitat isolado, algo que é bem raro entre as espécies de roedores. Isso também contribui para a sua singularidade dentro do mundo animal. ",
    largura: "25%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "44%",
      transform: "translate(-58%, 100%)",
    },
  },
  {
    numero: "04",
    nome: "Tigre de Java",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/tigredejava.gif",
    descricao:"Tigre de Java viveu  na ilha de Java. Onde em 1976 teve sua extinção. \n\nEle era considerado o tigre mais adaptado para ambientes montanhosos e íngrimes. Ao contrário de outras subespécies de tigres que preferem habitats mais planos ou florestas abertas, o tigre de Java era particularmente bem adaptado às regiões montanhosas e de difícil acesso da ilha, como as florestas de altitude da Java Central.",
    largura: "30%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "50%",
      transform: "translate(-58%, 125%)",
    },
  },
  {
    numero: "05",
    nome: "Leopardo Nebuloso",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/Leopardo.webp",
    descricao: "O Leopardo-Nebuloso ou pantera-nebulosa é uma espécie de mamífero carnívoro da família Felidae. A espécie foi descrita por Edward Griffith em 1821 como Felis nebulosa. \n\nEm 1867, John Edward Gray propôs o termo genérico Neofelis, macrocelis. Em 1917, Reginald Innes Pocock reconheceu a distinção de Neofelis como um gênero distinto, e corrigiu a espécie-tipo para Neofelis nebulosa. \n\ Viveu nas Florestas tropicais e subtropicais do sudeste asiático principalmente nas florestas tropicais e subtropicais do sudeste asiático, incluindo países como Nepal, China, Malásia, Tailândia e Índia. ",
    largura: "25%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "50%",
      transform: "translate(-58%, 80%)",
    },
  },
  {
    numero: "06",
    nome: "Raposa Vermelha",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/raposa vermelha.gif",
    descricao: " A raposa vermelha da Sierra Nevada, viveu na Califórnia e no sul da cordilheira Cascade de Oregon e Califórnia, enfrentou várias resultantes na sua extinção incluindo Incêndios florestais, secas e competição com coiotes. Devido à diminuição no número de presas e hidridização generalizada com raposas não nativas.",
    largura: "25%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "45%",
      transform: "translate(-58%, 80%)",
    },
  },
  {
    numero: "07",
    nome: "Gigantopithecus",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/Gigantopithecus.gif",
    descricao: "O Gigantopithecus viveu há cerca de 2 milhões a 300 mil anos atrás na Ásia (principalmente China, Índia e Vietnã).\n\nFoi o maior primata conhecido da história. Estima-se que chegava a 3 metros de altura e pesava até 500 kg.\n\nEra um parente distante dos orangotangos e, provavelmente, herbívoro, com dieta baseada.",
    largura: "50%",
    altura: "150",
    posicao: {
      bottom: "54%",
      left: "48%",
      transform: "translate(-55%, 70%)",
    },
  },
  {
    numero: "08",
    nome: "Macaco prego",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/macaco prego de crista.webp",
    descricao:"O macaco prego viveu na América do Sul (principalmente Brasil). Foi um dos primatas mais inteligentes das Américas. \n\nEle usava ferramentas (como pedras para quebrar cocos), vivvia em grupos sociais complexos e tem uma dieta variada (frutas, insetos, pequenos vertebrados). \n\nEra famoso por sua habilidade de aprendizagem e por ser muito usado em estudos de cognição animal.",
    largura: "35%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "48%",
      transform: "translate(-50%, 70%)",
    },
  },
  {
    numero: "09",
    nome: "Pombo Passageiro",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/Pombo passageiro.gif",
    descricao: "O Pombo Passageiro teve seu Último indivíduo que morreu em 1914 (chamava-se Martha e vivia em um zoológico nos EUA). Ele Habitava a América do Norte. \n\nO Pombo Passageiro Foi uma das aves mais abundantes do planeta, com bilhões de indivíduos. Vivia em grandes bandos e migrava em massa. A caça excessiva e a destruição de habitats causaram sua rápida extinção. \n\nSeu caso é um dos maiores símbolos da extinção causada pelo ser humano.",
    largura: "18%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "45%",
      transform: "translate(-58%, 100%)",
    },
  },
  {
    numero: "10",
    nome: "Corvo do Havaí",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/corvo do havaí.gif",
    descricao: "O corvo-do-havaí ou alala (Corvus hawaiiensis) é uma espécie de ave da família Corvidae. O tamanho do corvo tem cerca de 48-50 centímetros (19-20) de comprimento, mas com asas mais arredondadas.\n\n Ele habitava secas florestas nas encostas do Mauna Loa e Hualalai em elevações de 300 - 2.500 metros. Fósseis indicam que antes era relativamente abundante em todas as ilhas principais, juntamente com quatro outras espécies extintas de corvo. \n\n Foi declarado extinto na natureza em 2002, quando os últimos dois indivíduos desapareceram. A extinção foi causada por fatores como a perda de habitat, introdução de doenças e caça.",
    largura: "24%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "48%",
      transform: "translate(-58%, 60%)",
    },
  },
  {
    numero: "11",
    nome: "Panda Gigante",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/pandagigante.gif",
    descricao: " \n\nO panda gigante (Ailuropoda melanoleuca) viveu nas florestas de bambu montanhosas do centro da China, principalmente nas províncias de Sichuan, Shaanxi e Gansu, entre 1.200 e 3.400 metros de altitude. Apesar de ser classificado como carnívoro, sua dieta era quase totalmente composta por bambu. \n\n É um animal solitário, que passa grande parte do tempo comendo devido ao seu metabolismo lento, e possui um “falso polegar” que ajuda a agarrar o bambu. Atualmente, está classificado como vulnerável, com cerca de menos de 1.800 indivíduos na natureza. \n\n É um símbolo global da conservação ambiental, e a proteção de seu habitat também beneficia muitas outras espécies.",
    largura: "18%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "48%",
      transform: "translate(-58%, 75%)",
    },
  },
  {
    numero: "12",
    nome: "Coruja Caburé ",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/Caburé-de-Pernambuco.gif",
    descricao: "O Caburé-de-Pernambuco (Glaucidium mooreorum) era uma coruja endêmica do estado de Pernambuco, no Brasil, que habitava a Mata Atlântica, em áreas de floresta densa e montanhosa. Com cerca de 19–20 cm de comprimento, possuía plumagem marrom-acinzentada e grandes olhos, características típicas das corujas noturnas. \n\nA espécie foi descrita oficialmente nos anos 2000, mas já estava ameaçada devido à perda de habitat. Infelizmente, foi extinta na natureza, com os últimos registros confirmados ocorrendo nos anos 1990. Sua extinção foi causada principalmente pela destruição da Mata Atlântica e pela fragmentação das florestas. Era uma coruja noturna e solitária, especializada na caça de pequenos vertebrados.",
    largura: "25%",
    altura: "120",
    posicao: {
      bottom: "54%",
      left: "50%",
      transform: "translate(-58%, 55%)",
    },
  },
   {
    numero: "13",
    nome: "Eudyptula",
    imagem: "c:/Users/JoaoVictorAraujoSant/Desktop/nova-pokedex/Imagens/pinguin.gif",
    descricao: "Eudyptula wilsonae é uma espécie extinta de pinguim, relacionada aos pinguins pequenos do gênero Eudyptula, também conhecidos como pinguins-azuis. \n\n O Eudyptula wilsonae viveu durante o Pleistoceno, um período geológico que começou cerca de 2,6 milhões de anos atrás e terminou cerca de 11.700 anos atrás. A extinção pode estar associada a mudanças climáticas e ambientais que ocorreram no final do Pleistoceno, incluindo alterações no nível do mar e na disponibilidade de alimento. \n\n O  Eudyptula wilsonae viveu em regiões da Austrália, onde hoje ficam registros fósseis dessa espécie. Como os pinguins modernos, provavelmente habitava áreas costeiras e oceânicas, vivendo da pesca de pequenos peixes e crustáceos. \n\n",
    largura: "18%",
    altura: "auto",
    posicao: {
      bottom: "54%",
      left: "47%",
      transform: "translate(-58%, 100%)",
    },
  },
];

const imagemAnimal = document.querySelector(".animal_1");
const nomeAnimal = document.querySelector(".animal_nome");
const numeroAnimal = document.querySelector(".animal_numero");
const botaoNext = document.querySelector(".btn-next");
const botaoPrev = document.querySelector(".btn-prev");

// Seleciona os elementos do painel de info
const infoToggle = document.querySelector('.info-toggle');
const infoPanel = document.querySelector('.info-panel');
const infoNome = document.querySelector('.info-nome');
const infoNumero = document.querySelector('.info-numero');
const infoDescricao = document.querySelector('.info-descricao');

let indiceAtual = 0;
let listaAtual = animais; // Variável para guardar a lista atual usada (original ou ordenada)


function adicionarUnidade(tamanho) {
  if (typeof tamanho === "string") {
    if (tamanho.endsWith("%") || tamanho === "auto") return tamanho;
    if (/^\d+$/.test(tamanho)) return tamanho + "px";
    return tamanho;
  }
  if (typeof tamanho === "number") return tamanho + "px";
  return tamanho;
}

// Função para atualizar a Pokedex com base no índice
function atualizarAnimal(index) {
  const animal = listaAtual[index];
  
  // Atualiza a imagem e as informações do animal
  imagemAnimal.src = animal.imagem;
  nomeAnimal.textContent = animal.nome;
  numeroAnimal.textContent = animal.numero;
  
  imagemAnimal.style.position = "absolute";
  imagemAnimal.style.width = adicionarUnidade(animal.largura);
  imagemAnimal.style.height = adicionarUnidade(animal.altura);
  imagemAnimal.style.bottom = animal.posicao.bottom;
  imagemAnimal.style.left = animal.posicao.left;
  imagemAnimal.style.transform = animal.posicao.transform;
  
  // Atualiza o painel de informações caso esteja aberto
  if (infoPanel.classList.contains('ativo')) {
    atualizarInfoPanel(animal);
  }
}

botaoNext.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % animais.length;
  atualizarAnimal(indiceAtual);
});

botaoPrev.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + animais.length) % animais.length;
  atualizarAnimal(indiceAtual);
});

// Valores de deslocamento (px)
let deslocamentoY = 50;
let deslocamentoX = 20;

// Aplica o deslocamento apenas nos elementos dentro da pokedex
function aplicarDeslocamento(valorX, valorY) {
  // Nome + número
  document.querySelector(".animal_data").style.transform = `translate(${valorX}px, 60px)`;
  
  // Botões prev / next
  document.querySelector(".buttons").style.transform = `translate(-165px, 20px)`;
  
  // Botões info / A-Z (com ajustes específicos)
  document.querySelector(".info-toggle").style.transform = `translate(-60px, 15px)`;
  document.querySelector(".az-toggle").style.transform = `translate(-45px, 15px)`;
  
  // Título Extindex (com ajuste específico no Y)
  document.querySelector(".titulo-extindex").style.transform = `translate(0px, 20px)`;
  
  // Imagem do animal (mantendo escala original + deslocamento)
  const animal = listaAtual[indiceAtual];
  imagemAnimal.style.bottom = animal.posicao.bottom;

  // Garante que se houver escala, ela será preservada
  let escala = "";
  if (animal.posicao.transform && animal.posicao.transform.includes("scale")) {
    escala = animal.posicao.transform.match(/scale\([^)]+\)/)[0]; // pega apenas a escala
  }

}

// Aplica ao carregar
aplicarDeslocamento(deslocamentoX, deslocamentoY);


reordenarListaLateral(animais);
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

// ---------- ORDEM ALFABÉTICA A-Z ----------
let ordemAlfabeticaAtiva = false;

// Cria uma cópia dos animais em ordem alfabética (baseada no nome)
const animaisOrdenados = [...animais].sort((a, b) => a.nome.localeCompare(b.nome));

// Seleciona o botão A-Z
const botaoAZ = document.querySelector('.az-toggle');

// Reorganiza a lista lateral visualmente
function reordenarListaLateral(listaAtual) {
  const ul = document.querySelector(".lista-itens");
  ul.innerHTML = ""; // limpa a lista

  listaAtual.forEach((animal, index) => {
    const li = document.createElement("li");
    li.textContent = `${animal.numero} - ${animal.nome}`;
    
    // Usando o índice da lista como 'data-index'
    li.setAttribute("data-index", index);  // Usando o índice correto aqui

    // Adiciona o evento de clique ao item da lista
    li.addEventListener("click", () => {
      indiceAtual = index;  // Atualiza o índice para o item clicado
      atualizarAnimal(indiceAtual);  // Atualiza o animal na Pokedex com o índice correto
    });
    
    ul.appendChild(li);
  });
}



// Evento do botão A-Z
botaoAZ.addEventListener("click", () => {
  ordemAlfabeticaAtiva = !ordemAlfabeticaAtiva;
  botaoAZ.classList.toggle("ativo", ordemAlfabeticaAtiva);

  listaAtual = ordemAlfabeticaAtiva ? animaisOrdenados : animais;  // Atualiza a lista de animais
  reordenarListaLateral(listaAtual);  // Reorganiza a lista lateral com a nova ordem
  indiceAtual = 0;  // Reseta o índice
  atualizarAnimal(indiceAtual);  // Atualiza a Pokedex com o primeiro animal
});



// Função para alternar a visibilidade do painel
function toggleInfoPanel() {
  infoPanel.classList.toggle('ativo');
}

// Função para atualizar as informações do painel
function atualizarInfoPanel(animal) {
  infoNome.textContent = animal.nome;
  infoNumero.textContent = animal.numero;
  infoDescricao.innerHTML = (animal.descricao || "Descrição não disponível.")
    .split('\n\n')
    .map(paragrafo => `<p>${paragrafo}</p>`)
    .join('');
}

// Adiciona o evento de clique ao botão
infoToggle.addEventListener('click', () => {
  toggleInfoPanel();
  infoToggle.classList.toggle('ativo');
  if (infoPanel.classList.contains('ativo')) {
    atualizarInfoPanel(animais[indiceAtual]);
  }
});



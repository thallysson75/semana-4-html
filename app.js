// ==========================================
// BLOCO 1 — ARRAYS E MÉTODOS
// ==========================================

// 1. forEach e map com nomes
const nomes = ["Ana", "Bruno", "Carla"];

nomes.forEach((nome) => {
  console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

// 2. filter e reduce com preços
const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter((preco) => preco > 20);
const somaPrecos = precos.reduce((total, preco) => total + preco, 0);

console.log("Preços acima de 20:", precosAcimaDe20);
console.log("Soma de todos os preços:", somaPrecos);

// 3. Métodos com array de objetos
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 80 },
  { nome: "Caneta", preco: 5 },
  { nome: "Estojo", preco: 25 }
];

const nomesProdutos = produtos.map((produto) => produto.nome);
const produtosAbaixoDe50 = produtos.filter((produto) => produto.preco < 50);
const totalProdutos = produtos.reduce(
  (total, produto) => total + produto.preco,
  0
);

console.log("Nomes dos produtos:", nomesProdutos);
console.log("Produtos com preço menor que R$ 50:", produtosAbaixoDe50);
console.log("Soma dos preços dos produtos:", totalProdutos);

produtos.forEach((produto) => {
  console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});


// ==========================================
// BLOCO 2 — MANIPULAÇÃO DO DOM
// ==========================================

// Selecionar o h1 e alterar seu texto
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog da Lavínia";

// Selecionar todos os parágrafos e imprimir seus textos
const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach((paragrafo) => {
  console.log(paragrafo.textContent);
});

// Selecionar a lista e inserir dois itens usando innerHTML.
// O += mantém os três itens que já estão definidos no HTML.
const lista = document.querySelector("#lista");

lista.innerHTML += `
  <li>Primeiro item adicionado com innerHTML</li>
  <li>Segundo item adicionado com innerHTML</li>
`;

// Criar o terceiro item dinamicamente
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

// Adicionar classe e verificar se ela foi aplicada
terceiroItem.classList.add("destaque");
console.log(
  'O terceiro item tem a classe "destaque"?',
  terceiroItem.classList.contains("destaque")
);

// Criar tarefas com forEach e adicionar cada uma à lista
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach((tarefa) => {
  const item = document.createElement("li");
  item.textContent = tarefa;
  lista.append(item);
});

// Aplicar a classe "feito" ao primeiro item da lista
const primeiroItem = lista.querySelector("li");

if (primeiroItem) {
  primeiroItem.classList.add("feito");
}

// Imprimir a quantidade total de itens
console.log("Quantidade total de itens:", lista.querySelectorAll("li").length);


// ==========================================
// BLOCO 3 — EVENTOS E EVENT DELEGATION
// ==========================================

// Evento de clique no botão
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
  console.log("Clicou!");
});

// Evento de mouse sobre o botão
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

// Evento de teclado no campo nome
const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
  console.log("Nome digitado:", campoNome.value);
});

// EVENT DELEGATION:
// Um único listener na lista trata cliques nos itens existentes
// e nos itens que forem adicionados dinamicamente.
lista.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    e.target.classList.toggle("feito");
    console.log("Item clicado:", e.target.textContent);
  }
});

// Criar um novo item via JavaScript para demonstrar a delegação
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado dinamicamente (teste Event Delegation)";
lista.append(itemDinamico);

// FORMULÁRIO: adicionar novas tarefas sem recarregar a página
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const textoTarefa = campoTarefa.value.trim();

  // Não adicionar itens vazios
  if (textoTarefa === "") {
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.textContent = textoTarefa;
  lista.append(novoItem);

  campoTarefa.value = "";
  campoTarefa.focus();
});

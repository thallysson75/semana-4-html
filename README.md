# Projeto JavaScript: Arrays, DOM e Eventos

## Descrição

Este projeto demonstra o uso de métodos de arrays, manipulação dinâmica do DOM, eventos de interface, Event Delegation e envio de formulário sem recarregar a página.

## Como executar

1. Baixe ou clone este repositório.
2. Mantenha `index.html` e `app.js` na mesma pasta.
3. Abra `index.html` em um navegador.
4. Abra o console do navegador (F12) para visualizar as mensagens dos exercícios.

## Métodos de arrays

- **`forEach()`**: percorre os elementos de um array e executa uma função para cada elemento. Neste projeto, imprime saudações, textos de parágrafos e informações dos produtos, além de criar itens de tarefas.
- **`map()`**: percorre um array e cria outro array com os resultados da transformação. É usado para converter nomes em maiúsculas e extrair nomes dos produtos.
- **`filter()`**: cria um novo array apenas com os elementos que atendem a uma condição. É usado para selecionar preços acima de 20 e produtos com preço menor que 50.
- **`reduce()`**: acumula os elementos de um array em um único resultado. Aqui, soma os preços e calcula o total dos produtos.

## Manipulação do DOM

O método `querySelector()` seleciona um elemento usando um seletor CSS, enquanto `querySelectorAll()` seleciona todos os elementos correspondentes. `textContent` altera ou lê texto, `innerHTML` insere marcação HTML, e `createElement()` cria elementos. `append()` adiciona elementos à página. `classList.add()`, `classList.contains()` e `classList.toggle()` permitem adicionar, verificar e alternar classes CSS.

## Eventos e Event Delegation

`addEventListener()` registra funções para responder a eventos, como `click`, `mouseover`, `keyup` e `submit`. No formulário, `preventDefault()` impede o recarregamento da página; `trim()` remove espaços externos e evita adicionar tarefas vazias.

**Event Delegation** consiste em registrar um único listener em um elemento ancestral — neste caso, a lista `#lista` — e verificar `e.target` para identificar o item clicado. Isso reduz a quantidade de listeners necessários e permite que itens adicionados depois, inclusive pelo formulário, também respondam aos cliques sem registrar um novo listener para cada item.

## Tecnologias

- HTML5
- CSS3
- JavaScript ES6+
- DOM API

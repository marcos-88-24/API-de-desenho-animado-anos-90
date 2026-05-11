# API-de-desenho-animado-anos-90

Galeria de fotos Rick and Morty

Este projeto foi desenvolvido com o objetivo de praticar o consumo de API utilizando JavaScript. A aplicação faz a busca de personagens do universo de Rick and Morty e exibe os resultados em formato de galeria.

Para isso foi utilizada a API pública do projeto, disponível em Rick and Morty API.

Como o projeto funciona

Ao abrir a página, o usuário encontra um campo de pesquisa onde pode digitar o nome de um personagem.

Quando o botão pesquisar é clicado, ou quando a tecla Enter é pressionada, o JavaScript captura o valor digitado e monta a URL da API com esse nome.

Depois disso, é feita uma requisição usando fetch(). A resposta retorna em formato JSON e os dados são armazenados para serem utilizados na tela.

Busca dos personagens

A função pegarfotos() é responsável por fazer a consulta na API.

Ela lê o nome digitado pelo usuário, envia a requisição e retorna os personagens encontrados.

Caso não exista nenhum resultado, a função retorna um array vazio. Dessa forma, o restante do código continua funcionando sem erro.

Exibição na tela

A função preenchergaleria() recebe os dados retornados e monta os cards dinamicamente.

Primeiro ela limpa os resultados anteriores. Depois percorre os personagens encontrados e cria, para cada um:

nome
imagem
espécie
status

Cada personagem é adicionado na galeria usando manipulação do DOM.

Se nenhum personagem for encontrado, uma mensagem é exibida na tela informando isso.

Estilização

A parte visual foi feita com CSS.

Foram utilizados:

fundo com gradiente
organização em layout flexível
cards com sombra e bordas arredondadas
efeito de movimento ao passar o mouse
Objetivo do projeto

O principal objetivo deste projeto foi praticar:

consumo de API
requisições assíncronas com fetch
manipulação do DOM
criação dinâmica de elementos com JavaScript
eventos de clique e teclado

Essa versão soa mais como alguém apresentando o próprio trabalho.

Se quiser, também posso montar um README com um estilo bem de faculdade brasileira — aquele formato que professor normalmente gosta, com introdução, desenvolvimento, funcionamento e conclusão.

# Podcast Manager (TS and no FrameWork)

Este é um projeto de criação de uma API que lista vídeos do YouTube, com a possibilidade de filtrar os vídeos pelo nome. A API retorna informações sobre o vídeo, incluindo o nome do podcast, episódio, ID do vídeo e categorias. Os dados dos vídeos estão armazenados em um arquivo JSON, o que facilita a modificação e os testes.

## Funcionalidades

- **Listar vídeos**: A API permite listar vídeos de um arquivo JSON que contém dados sobre os vídeos.
- **Filtrar por nome**: É possível filtrar vídeos pelo nome, retornando apenas os vídeos que correspondem ao critério de pesquisa.
- **Geração de JSON**: A API gera um arquivo JSON contendo as seguintes informações:
  - `podcastName`: Nome do podcast do vídeo.
  - `episode`: Número do episódio do podcast.
  - `videoId`: ID do vídeo no YouTube.
  - `categories`: Categorias associadas ao vídeo.


## Tecnologias Utilizadas

- Node.js
- NPM ou Yarn
- TypeScript
- No Frameworks

## Como Usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/thaliaasmc/DIO.git

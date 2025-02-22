# Podcast Manager

### Descrição
Um app ao estilho netflix, aonde possa centralizar diferentes episódios podcast 
separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

### Como

#### Feature:
Listar os podcasts em sessções de categorias   
#### Como vou implementar
Vou retornar uma API REST (json) o nome do podcast, nome do episódio, imagem de capa, link.
GET: retorna lista de episódios
Response: 

``` js
[
{
    podcastName: "flow";
    episode: "CBUM - Flow #319";
    videoId: "pQSuQmUfS30";
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg";
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30";
    category: ["saúde", "esporte", "bodybuilder"]

},
{
    podcastName: "flow";
    episode: "RUBENS BARRICHELLO - Flow #339";
    videoId: "4KDGTdiOV4I";
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg";
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I";
    category: ["esporte", "corrida"]

}
]
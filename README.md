# Society Papers — panfleto histórico interativo

Site do projeto escolar sobre a Independência da Bahia e a Nova Imprensa Amefricana.
Feito com HTML5, CSS3 e JavaScript puro — sem frameworks, sem bibliotecas, sem chaves de API.

## Estrutura

```
index.html        → todo o conteúdo do panfleto (capa, folhas, fofocas, manifesto)
css/style.css     → toda a aparência (papel envelhecido, molduras, animações)
css/fonts.css     → declarações das fontes antigas (arquivos locais em fonts/)
js/script.js      → abertura do panfleto, folhear, players de áudio
images/           → coloque aqui as gravuras do grupo
audio/            → coloque aqui os áudios (exemplos silenciosos já inclusos)
fonts/            → fontes clássicas embutidas (funciona offline)
```

## Onde colocar as IMAGENS

Cada fofoca tem uma moldura vazia reservada. Para ativar uma imagem:

1. Salve a gravura na pasta `images/` com o nome indicado na moldura, por exemplo:
   `images/fofoca-01.png`, `images/fofoca-02.png` … `images/fofoca-09.png`
2. No `index.html`, dentro da fofoca correspondente, descomente a linha
   `<img src="images/fofoca-01.png" alt="...">` e escreva um texto alternativo (alt) descrevendo a imagem.

## Onde colocar os ÁUDIOS

1. Grave os áudios (MP3 ou WAV) e salve na pasta `audio/`.
2. Opção A (mais simples): substitua os arquivos de exemplo mantendo os nomes
   (`fofoca-01.wav`, `fofoca-02.wav` …).
3. Opção B: use os seus nomes (ex.: `audio/fofoca-01.mp3`) e ajuste o atributo
   `data-audio` de cada botão no `index.html`.

## Como personalizar

- **Nome do jornal**: procure por “Society Papers” no `index.html` (aparece na capa e no cabeçalho).
- **Frases da narradora**: troque os textos “exemplo de fala da narradora anônima” por falas definitivas.
- **Textos das fofocas**: troque os parágrafos “Exemplo de texto…” pelos textos do grupo.
- **Manifesto e referências**: última folha do panfleto.

## Como visualizar

Basta abrir o `index.html` em qualquer navegador (duplo clique) — não precisa de internet
nem de servidor, pois as fontes estão embutidas localmente.

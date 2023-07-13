# Leadster - Atividade de Front-end

Teste para vaga na empresa Leadster

[Descrição do desafio:](https://docs.google.com/presentation/d/1nq7d1rpntpfQGOabVO0R7TZzf6_rfFTd/edit#slide=id.g1e43248c0b5_0_27) Desenvolver uma landing page, com o framework NextJS.

Layout disponibilizado:
![preview](public/images/preview.png)

Resultado Final: https://teste-leadster-one.vercel.app/

## Instalação e execução da aplicação

Instale o [NodeJs](https://nodejs.org) acima da versão 16.8, esse projeto em específico foi desenvolvido na versão [18.12.1](https://nodejs.org/en/blog/release/v18.12.1)

### Clonar repositório

```
git clone https://github.com/BatistaYuri/teste-leadster.git
```

### Instalar dependências

```
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e copie o conteúdo do arquivo `.env.example`. Caso opte por executar o servidor local, substitua o conteúdo da variável por `http://localhost:3001`

### Rodar server local

```
npm run json-server
```

O servidor iniciará em `http://localhost:3001`

### Rodar a aplicação

```
npm run dev
```

O projeto iniciará em `http://localhost:3000`

### Rodar todos os teste

```
npm run cy:run
```

## Organização do código

- `i18n.js e middleware.js`: são arquivos de configuração da internacionalização;
- `/mensagens`: contêm os textos da aplicação;
- `/public`: contêm as fontes e imagens disponibilizadas;
- `/src/app`: as pastas dentro da pasta app representam as rotas, como o projeto só tem uma página, a pasta app só tem página principal. obs: todas as novas rotas devem ser incluídas dentro na pasta `[locale]` para a internacionalização funcionar corretamente;
- `/src/components`: possui algumas pastas separando alguns componentes de mesma “categoria”, cada uma dessas pastas possui seu próprio arquivo .css para melhor organização dos styles. Essa pasta possui o arquivo de index.ts para organizar melhor as importação, se alguma página ou componentes importar mais de um componente o caminho de importação será o mesmo, diminuindo o número de linhas e identificando melhor quais os componentes;
- `/src/models`: pasta que possui arquivos com types e interfaces;
- `/src/service`: pasta que possui arquivos com requisições http;
- `/src/utils`: pasta com arquivos utilitários;

## Decisões e experiência

###

Esse é meu primeiro projeto com NextJs, então além de fazer o desafio com o objetivo de conquistar o cargo, busquei levar como atividade para estudar novas tecnologias, além de praticar as que já tinha conhecimento. Levando isso em consideração, optei por escolher Tailwind ao invés de Bootstrap e Typescript, tecnologias que já utilizei em diferentes experiências.

### Desenvolvimento

O desenvolvimento foi feito em pequenas etapas:

1. Início pelo header e footer da página, elementos que vão estar presentes em todas as páginas;
2. Implementação da landing page, começando pelas partes mais simples onde apenas incluía texto e imagens, como a seção de título/slogan e a seção de demonstração.
3. Desenvolvimento de webinários, em que as informações foram retiradas do canal do Youtube da Leadster e organizados em um .json.
4. Implementação de animações com CSS.

Na fase de desenvolvimento, utilizei a biblioteca json-server para simular uma REST API localmente, e, posteriormente, subi a base de dados em um [repositório](https://github.com/BatistaYuri/json-server-leadster) separado, [url da typicode](https://my-json-server.typicode.com/BatistaYuri/json-server-leadster).

Durante o desenvolvimento, foi levado em consideração a responsividade e a componentização dos elementos. Com a possibilidade de continuidade do projeto, foram utilizados componentes serem reutilizados em outras partes do código.

### Testes

O Cypress foi escolhido para implementar testes simples, como:

- Teste end-to-end para testar o modal onde o vídeo do webinar é executado;
- Teste de componentes no componente Tooltip;

### Internacionalização

Para ir além na entrega, implementei a internacionalização do projeto. Como a proposta consiste em layout fiel ao proposto, optei em utilizar o next-intl, em que é possível escolher o idioma pela url, o site está disponível em portugês(/pt) e inglês(/en). Além da vantagem de ter o site em mais de uma língua, como os textos são montados em um .json, é possível que pessoas que não são desenvolvedores possam editar esses arquivos sem muito esforço.

## Trabalhos futuros e melhorias

- Utilizar GraphQL;
- Utilizar SCSS;
- Melhorar responsividade para Iphone (utilizei um Android para testes com responsividade, mas, por alguma razão, em Iphones algumas partes não responderam bem após realizados testes em outros dispositivos).
- Tratar erros para requisições REST (como o ambiente trabalhaddo era controlado, optei por deixar essa parte como melhorias futuros);
- Desenvolver componentes orientado a testes (por conta da possibilidade do cypress testar os componenetes separadamente com mais facilidade);

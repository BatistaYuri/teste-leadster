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

- `i18n.js e middleware.js`: são arquivos de configuração da
- `/mensagens`: contêm os textos da aplicação;
- `/public`: contêm as fontes e imagens disponibilizadas internacionalização;
- `/src/app`: as pastas dentro da pasta app representam as rotas, como o projeto só tem uma página, a pasta app só tem página principal. obs: todas as novas rotas devem ser incluídas dentro da pasta `[locale]` para a internacionalização funcionar corretamente;
- `/src/components`: possui algumas pastas separando alguns componentes de mesma “categoria”, cada uma dessas pastas possui seu próprio arquivo .css para melhor organização dos styles. Essa pasta possui o arquivo de index.ts para organizar melhor as importação, se alguma página ou componentes importar mais de um componentes o caminho de importação será o mesmo, diminuindo o número de linhas e identificando melhor quais os componentes;
- `/src/models`: pasta que possui arquivos com types e interfaces;
- `/src/service`: pasta que possui arquivos com requisições http;
- `/src/utils`: pasta com arquivos utilitários;

## Decisões e experiência

###

Esse é meu primeiro projeto com NextJs, então além de fazer esse desafio com o objetivo de trabalhar na empresa, busquei levar como uma atividade para estudar tecnologias novas e praticar as que já tinha experiência, levando em consideração isso, optei por escolher Tailwind ao invés de Bootstrap (o que já estou acostumado) e Typescript que além de eu estar acostumado também, era um ponto positivo de acordo com o desafio.

### Desenvolvimento

O desenvolvimento foi feito em pequenas etapas, comecei pelo header e footer da página, elementos que vão estar presentes em todas as páginas. Em seguida comecei a implementar a landing page, começando pelas partes mais simples onde apenas incluía texto e imagens, que seria a seção que está o título/slogan e a seção de demonstração. Por fim foi desenvolvido a listagem de webinários, onde as informações foram retiradas do canal do youtube da Leadster e organizados em um .json, onde na fase de desenvolvimento utilizei a biblioteca json-server para simular uma REST API localmente, e mais tarde subi essa base de dados em um [repositório](https://github.com/BatistaYuri/json-server-leadster) separdo e utilizei do [url da typicode](https://my-json-server.typicode.com/BatistaYuri/json-server-leadster). No final implementei algumas animações simples com css.

Toda essa parte de desenvolvimento levei muito em consideração a responsividade e a componentização dos elementos, onde implementei componentes que achava que se o projeto continuasse, eram mais prováveis de serem reutilizados em outras partes do código;

### Testes

Pro final deixei os teste, escolhi o Cypress, o qual não tinha uma experiência prévia também, o objetivo aqui foi só demostrar que sei implementar testes, então implementei testes simples, um teste end-to-end para testar o modal onde o vídeo do webinar é executado e um teste de componentes no componente Tooltip;

### Internacionalização

O plus que escolhi para talvez me destacar dos demais foi a internacionalização do projeto, como o objetivo era ser fiel ao layout proposto, optei em utilizar o next-intl, onde é possível escolher o idioma pela url, o site está disponível em portugês(/pt) e inglês(/en). Além da vantagem de ter o site em mais de uma língua, como os textos são montados em um .json, é possível que pessoas que não são desenvolvedores possam editar esses arquivos sem muito esforço.

## Trabalhos futuros e melhorias

- Utilizar GrapQL;
- Utilizar SCSS;
- Melhorar responsividade para iphones (utilizei um android para alguns teste e respondeu bem, mas por algum motivo em iphones algumas partes não responderam bem, mas não consegui trabalhar nisso, só fui avisado por amigos, mas como o foco não era esse, optei por deixar como melhorias futuras);
- Tratar erros para requisições REST (como o ambiente que trabalhei era controlada optei por deixar essa parte como melhorias futuros);
- Desenvolver componentes orientado a testes (por conta da possibilidade do cypress testar os componenetes separadamente mais fácil);

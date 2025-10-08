# Fritschearquitetura

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

----

# Fritsche Arquitetura

Website institucional — front-end desenvolvido em Angular.

Este repositório contém a versão front-end do site de portfólio da Fritsche Arquitetura. É uma Single Page Application (SPA) responsiva com seções de hero, projetos, sobre e contato. Os recursos visuais (imagens e estilos) estão em `src/assets`.

Desenvolvido pela Hexacore.

## Resumo técnico

- Framework: Angular 17 (com componentes standalone)
- Linguagem: TypeScript
- Estilos: SCSS/CSS
- Estrutura: SPA estática (sem backend neste repositório)

## Estrutura do repositório (resumida)

- `src/`
  - `index.html` — entrada HTML
  - `main.ts` — bootstrap da aplicação
  - `app/` — componentes e roteamento
    - `app.component.*` — componente raiz
    - `app.config.ts`, `app.routes.ts` — configuração do roteamento
    - `pages/main/` — implementação da página principal
  - `assets/` — imagens e arquivos de estilo (ex.: `assets/images`, `assets/styles`)

## Dependências principais

Consulta completa em `package.json`. Principais pacotes:

- `@angular/*` (v17.x)
- `rxjs`
- `zone.js`

## Scripts úteis (via `package.json`)

- `npm start` — inicia o servidor de desenvolvimento (ng serve). Visite: http://localhost:4200/
- `npm run build` — gera a build de produção em `dist/`
- `npm test` — executa testes unitários (Karma/Jasmine)

## Como executar localmente

1. Instale dependências:

```powershell
npm install
```

2. Inicie o servidor de desenvolvimento:

```powershell
npm start
```

3. Abra `http://localhost:4200/` no navegador.

## Notas importantes

- O roteamento principal está em `src/app/app.routes.ts` e a `MainComponent` serve a página inicial.
- Estilos e imagens estão em `src/assets/`. O arquivo `src/assets/styles/main.scss` contém o design base.
- Projeto preparado para deploy estático (ex.: GitHub Pages, S3, Netlify). Para produção, gere a build com `npm run build` e hospede o conteúdo de `dist/fritschearquitetura`.

## Créditos

Site desenvolvido pela Hexacore.

## Licença

Adicione a licença apropriada aqui (ex.: MIT) ou remova esta seção se não aplicável.

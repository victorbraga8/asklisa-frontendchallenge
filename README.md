# Frontend Challenge

Este projeto é um exemplo de aplicação frontend desenvolvida com Next.js, utilizando uma abordagem híbrida de renderização (client-side e server-side) para oferecer um desempenho otimizado e uma experiência de usuário amigável.

## Estrutura do Projeto

O projeto é organizado em vários diretórios, cada um servindo a um propósito específico:

- **tests**: Contém arquivos de teste.
- **.next**: Diretório de saída da build do Next.js.
- **.swc**: Configuração do Speedy Web Compiler (SWC).
- **app**: Diretório principal da aplicação, contendo arquivos globais como `favicon.ico`, `globals.css`, `layout.tsx`, entre outros.
- **fonts**: Contém arquivos de fontes.
- **product**: Contém o arquivo cliente relacionado ao produto (`page.tsx`), que faz a chamada para o arquivo servidor localizado em `components/product/product-content.tsx`. A renderização é feita de forma híbrida, combinando client-side e server-side rendering para oferecer uma experiência otimizada.
- **components**: Contém componentes reutilizáveis, organizados em subdiretórios como:
  - **dashboard**: Componentes relacionados ao dashboard.
  - **navigation**: Componentes de navegação como `back-to-home.tsx` e `nav.tsx`.
  - **product**: Componentes de produtos renderizados no servidor como `product-content.tsx`.
  - **skeleton**: Componentes esqueleto, como `skeleton.tsx`.
  - **ui**: Componentes de interface do usuário com a utilização da Biblioteca Shadcn UI.
- **context**: Arquivos de contexto para gerenciamento de estado, incluindo `FilterSearchContext.tsx` e `ProductContext.tsx`.
- **coverage**: Relatórios de cobertura de código.
- **lib**: Funções auxiliares e utilitárias, incluindo `helpers.ts` e `utils.ts`.
- **node_modules**: Contém dependências do projeto.
- **public**: Contém ativos públicos.
- **services**: Arquivos de serviços como `api.ts` e `networkClients.ts`.
- **types**: Definições de tipos, incluindo `filter-search.ts`, `product.ts`, e `types.ts`.

## Estilos e Funcionalidades Interativas

A aplicação utiliza **Tailwind CSS** para estilização, o que permite criar interfaces responsivas e otimizadas de forma eficiente. Diferente do Styled Components, o Tailwind é mais leve e permite o uso de classes utilitárias para estados e variáveis de forma dinâmica. Por exemplo, componentes respondem a variáveis como o estado de `sorting` (ordenação de colunas) e exibem diferentes estilos com base nesses estados.

Para funcionalidades de tabela, usamos a **TanStack Table**, permitindo ordenação nas colunas, e os estilos das colunas são ajustados visualmente conforme o estado da ordenação (ascendente, descendente, neutro). Isso proporciona uma experiência mais dinâmica e interativa.

## Pesquisa e Filtro Reativos

A aplicação possui um sistema de pesquisa e filtros reativos. Os botões de "Clear" (limpar filtros e pesquisa) são condicionados às ações do usuário: quando um filtro é ativado, o botão "Clear Filter" é habilitado; da mesma forma, ao digitar uma pesquisa, o botão "Clear Search" se torna ativo. Ambos os botões realizam a limpeza completa de filtros e pesquisa quando acionados, facilitando o uso.

## Responsividade

A aplicação é totalmente responsiva, com layout adaptável para diferentes dispositivos e tamanhos de tela, garantindo uma experiência consistente e agradável em desktops, tablets e dispositivos móveis.

## Renderização Híbrida

A renderização dos detalhes do produto é feita de forma híbrida, combinando client-side e server-side rendering para garantir um desempenho otimizado e uma experiência de usuário amigável.

## Cliente Axios Desacoplado

O cliente **Axios** foi desacoplado do arquivo de chamadas da API para permitir flexibilidade em eventuais alterações do cliente, preservando os métodos de chamada.

## Contextos

Utilizamos dois contextos neste projeto:

- **Product Context**: Gerencia o estado relacionado aos produtos.
- **Filter/Search Context**: Gerencia o estado relacionado a filtragem e pesquisa.

## Definições de Tipos

As definições de tipos são separadas em interfaces e exportadas do diretório **types**. As tipagens seguem a mesma lógica dos contextos, com arquivos separados para `filter-search` e `product`.

## Testes

Utilizamos **Jest** para testes, e os logs são exportados para um arquivo `.txt`.

## Helpers

A classe **helpers** contém métodos de apoio para a ordenação da tabela e outras funcionalidades auxiliares.

## Instruções de Instalação

1. Clone o repositório:

   ```bash
   git clone <repository-url>
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd frontend-challenge
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o navegador e navegue até `http://localhost:3000` para visualizar a aplicação.

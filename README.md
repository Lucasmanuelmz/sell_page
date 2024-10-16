# Landing Page - Black Friday VIP Access

Este projeto é uma **landing page** para promover o **acesso VIP** à Black Friday, permitindo que os usuários se cadastrem para receber ofertas exclusivas, cupons e vantagens antes de todos. O objetivo é capturar leads e engajar os visitantes com uma apresentação clara e atrativa das vantagens do cadastro na lista VIP.

## Funcionalidades

- **Seção de Vantagens:** Mostra três principais vantagens de se cadastrar na lista VIP, incluindo acesso antecipado, maiores descontos e sorteios de cupons.
- **Formulário de Cadastro:** Um formulário para que os usuários se inscrevam com seu nome e e-mail.
- **Perguntas Frequentes (FAQ):** Seção dinâmica que responde às dúvidas mais comuns dos usuários.
- **Design Responsivo:** A página se adapta a dispositivos móveis, tablets e desktops.
  
## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **React Icons**: Utilizada para exibir ícones visuais, como setas e ícones de vantagens.
- **CSS**: Estilização da página.
- **Hooks do React (useState)**: Gerenciamento de estado para alternar entre perguntas do FAQ abertas e fechadas.

## Como Utilizar

### Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/sell_page.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd sell_page
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o projeto em modo de desenvolvimento:

    ```bash
    npm run dev
    ```

    O projeto será executado em `http://localhost:5173`.

### Estrutura de Arquivos

- **`src/components`**: Contém os componentes reutilizáveis, como o formulário de cadastro, botões, perguntas frequentes (FAQ), etc.
- **`src/contains`**: Contém componentes de estrutura maiores como `CardContainer` e `Container`, que encapsulam seções inteiras da página.
- **`src/pages`**: Inclui a página principal `HomePage.js` que organiza todos os componentes em uma estrutura coesa.

## Deploy

Este projeto pode ser integrado com qualquer backend de sua escolha para gerenciar o envio dos dados do formulário de cadastro. Para fazer o deploy:

1. **Frontend**: Pode ser hospedado em plataformas como Netlify, Vercel, ou qualquer outro serviço de hospedagem estática.
2. **Backend**: Caso opte por um serviço de backend, você pode utilizar plataformas como Heroku, Railway, ou serviços de VPS. Você pode contratar o serviço de integração caso deseje ajuda com o backend.

## Personalização

Você pode personalizar o conteúdo, cores e imagens de acordo com suas necessidades alterando os arquivos de componentes e CSS. Caso precise de ajuda com a customização ou integração com backend, entre em contato para mais informações.

## Contato

Se você tiver dúvidas ou quiser contratar os serviços de integração ou personalização, entre em contato:

- **Email**: testadormoz@gmail.com


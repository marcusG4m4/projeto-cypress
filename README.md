# Projeto de Automação de QA com Cypress 🚀

Este repositório contém um framework de automação de testes de ponta a ponta (E2E), interface (UI) e API, desenvolvido com **Cypress** para demonstrar fluxos críticos de usuário e práticas modernas de QA.

## 📋 Funcionalidades Automatizadas

O projeto cobre os seguintes cenários:

1.  **Fluxos Críticos de Usuário (E2E):**
    *   **Login e Autenticação:** Validação de credenciais corretas/incorretas e redirecionamento.
    *   **Checkout de E-commerce:** Fluxo completo desde a adição de itens ao carrinho até a confirmação do pedido.
    *   **Cadastro de Usuário:** Preenchimento de formulários complexos e validação de regras de campos.

2.  **Testes de Interface (UI):**
    *   **Validação de Componentes:** Verificação de menus, modais e elementos dinâmicos.
    *   **Responsividade:** Testes automáticos em diferentes resoluções (Mobile, Tablet, Desktop).

3.  **Testes de API e Backend:**
    *   **Validação de Endpoints:** Testes de status code, estrutura JSON e métodos HTTP (GET, POST).
    *   **Mocking e Interceptação:** Simulação de erros de servidor (500) e latência de rede (spinners).

4.  **Integração Contínua (CI/CD):**
    *   **GitHub Actions:** Pipeline configurado para rodar os testes automaticamente em cada `push` ou `pull request`.

## 🛠️ Tecnologias Utilizadas

*   [Cypress](https://www.cypress.io/) - Framework de testes automatizados.
*   [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
*   [GitHub Actions](https://github.com/features/actions) - Automação de workflow (CI/CD).
*   [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem base dos testes.

## 🚀 Como Executar o Projeto

### Pré-requisitos
*   Node.js instalado (versão 14 ou superior).
*   NPM ou Yarn.

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/marcusG4m4/projeto-cypress.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd projeto-cypress
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando os Testes
*   **Modo Interativo (Interface Gráfica):**
    ```bash
    npx cypress open
    ```
*   **Modo Headless (Terminal):**
    ```bash
    npx cypress run
    ```

## 📂 Estrutura do Projeto

```text
cypress/
  ├── e2e/           # Arquivos de teste (.cy.js)
  ├── fixtures/      # Dados estáticos para testes (JSON)
  ├── support/       # Comandos personalizados e configurações globais
.github/workflows/   # Configuração do Pipeline CI/CD
cypress.config.js    # Arquivo de configuração do Cypress
```

---
Desenvolvido por [Marcus](https://github.com/marcusG4m4)

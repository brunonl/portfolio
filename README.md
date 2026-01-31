# Bruno Meireles - Portfolio

Portfólio pessoal desenvolvido para apresentar meus projetos e trajetória profissional. Construído com foco em **Clean Code**, **Clean Architecture** e **Experiência do Usuário (UX/UI)**.

🔗 **Acesse o projeto:** [brunomeireles.vercel.app](https://brunomeireles.vercel.app/)

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🏗️ Arquitetura e Tecnologias

### ⚡ Frontend Core

*   **Next.js 16 (App Router):** Utilização da versão mais recente com Turbopack.
*   **TypeScript:** Tipagem estrita aplicada 100% no projeto.
*   **SCSS (BEM Methodology):** Arquitetura de estilos modular sem frameworks CSS.

### 🧩 Estrutura do Projeto

O projeto segue princípios de **Clean Architecture** adaptados para o frontend, separando claramente responsabilidades.

### 1. Separação de Responsabilidades (SRP)
- **Components:** Apenas renderização (UI).
- **Hooks:** Lógica de negócio e estado (ex: `useCarousel`, `useModal`).
- **Data Layer:** Dados estáticos e traduções isolados em `/data`.
- **Styles:** Camada de estilo separada com SCSS modules e tokens globais.

### 2. SCSS Architecture
Estrutura modular baseada em Design Tokens:
```scss
src/styles/
├── _base.scss       # Reset e Base styles
├── _variables.scss  # Design Tokens (Cores, Fontes, Spacing)
├── _mixins.scss     # Responsividade e Utilitários
└── components/      # Estilos isolados por componente
```

### 3. Arvore de Diretórios
```
src/
├── app/              # Rotas e Layouts (App Router)
├── components/       # Componentes Funcionais (Hero, Projects, Modal)
├── contexts/         # Gerenciamento de Estado Global (LanguageContext)
├── data/             # Fontes de Dados (JSON/TS)
├── hooks/            # Custom Hooks (Lógica Reutilizável)
├── styles/           # Camada de Estilização
└── types/            # Definições de Tipos TypeScript
```



## 🛠️ Como Executar o Projeto

### Pré-requisitos
*   Node.js 18+

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/brunonl/portfolio.git
    cd portfolio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O projeto estará rodando em [http://localhost:3000](http://localhost:3000).

4.  **Build de Produção:**
    ```bash
    npm run build
    npm start
    ```

## MEETAPP WEB

<p align="center">
  <img src="https://img.shields.io/badge/React-16.10.0-61DAFB?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/Redux-4.0.4-764ABC?style=for-the-badge&logo=redux"/>
  <img src="https://img.shields.io/badge/Redux_Saga-1.1.1-999999?style=for-the-badge&logo=redux-saga"/>
  <img src="https://img.shields.io/badge/Redux_Persist-6.0.0-593D88?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Styled--components-4.4.0-DB7093?style=for-the-badge&logo=styled-components"/>
  <img src="https://img.shields.io/badge/React_Router-5.1.1-CA4245?style=for-the-badge&logo=react-router"/>
  <img src="https://img.shields.io/badge/React_Toastify-5.4.0-FF8800?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Reactotron-3.3.4-15AABF?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Axios-0.19.0-5A29E4?style=for-the-badge&logo=axios"/>
  <img src="https://img.shields.io/badge/Immer-4.0.1-00A8E8?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Yup-0.27.0-4E7DD3?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Date--fns-2.5.0-8BC34A?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/React_Icons-3.7.0-E91E63?style=for-the-badge"/>
</p>

<div align="center">
  <b>🇧🇷 Português | <a href="#english-version">🇺🇸 English below</a></b>
</div>

---

## 📑 Sumário | Table of Contents
- [Sobre o Projeto | About](#sobre-o-projeto--about)
- [Funcionalidades | Features](#funcionalidades--features)
- [Tecnologias | Technologies](#tecnologias--technologies)
- [Estrutura | Structure](#estrutura--structure)
- [Telas | Screens](#telas--screens)
- [Instalação e Execução | Setup & Run](#instalação-e-execução--setup--run)
- [Autor | Author](#autor--author)

---

## Sobre o Projeto | About

**PT-BR:**
> Meetapp Web é uma aplicação para gerenciamento de eventos (meetups), permitindo cadastro, edição, exclusão e visualização de eventos, além de autenticação de usuários, upload de imagens e gerenciamento de perfil. Desenvolvido com React, Redux, Redux Saga, Styled-components e outras tecnologias modernas.

**EN:**
> Meetapp Web is an event management application (meetups), allowing users to create, edit, delete, and view events, as well as user authentication, image upload, and profile management. Built with React, Redux, Redux Saga, Styled-components, and other modern technologies.

---

## 🚀 Funcionalidades | Features

**PT-BR:**
- Cadastro e autenticação de usuários
- Cadastro, edição e exclusão de eventos (meetups)
- Upload de imagem para eventos
- Dashboard de eventos
- Perfil do usuário (edição de dados e senha)
- Toasts de feedback
- Layouts distintos para logado/não logado
- Persistência de autenticação
- Integração com Reactotron para debugging

**EN:**
- User registration and authentication
- Event (meetup) creation, editing, and deletion
- Image upload for events
- Event dashboard
- User profile (edit data and password)
- Feedback toasts
- Distinct layouts for logged in/out
- Authentication persistence
- Reactotron integration for debugging

---

## 🚀 Tecnologias | Technologies

**PT-BR:**
- **React 16.10**: Biblioteca principal para construção da interface de usuário baseada em componentes reutilizáveis.
- **React DOM**: Permite que componentes React sejam renderizados no navegador.
- **Redux 4.0**: Gerenciamento global de estado da aplicação, facilitando o compartilhamento de dados entre componentes.
- **React Redux**: Integra o Redux aos componentes React, facilitando o acesso ao estado global.
- **Redux Saga 1.1**: Middleware para lidar com efeitos colaterais e fluxos assíncronos (ex: requisições à API) de forma organizada.
- **Redux Persist 6.0**: Permite persistir o estado do Redux no armazenamento local, mantendo o login e dados mesmo após recarregar a página.
- **Styled-components 4.4**: Estilização de componentes utilizando CSS-in-JS, permitindo estilos dinâmicos e escopados.
- **React Router DOM 5.1**: Gerenciamento de rotas e navegação entre páginas da aplicação.
- **History**: Gerencia o histórico de navegação, utilizado pelo React Router.
- **React Toastify 5.4**: Exibição de notificações e mensagens de feedback para o usuário.
- **Reactotron (react-js, redux, redux-saga)**: Ferramenta de debugging para monitorar o estado, ações e sagas em tempo real durante o desenvolvimento, com integrações específicas para React, Redux e Redux Saga.
- **Axios 0.19**: Cliente HTTP para comunicação com APIs REST.
- **Immer 4.0**: Facilita a manipulação imutável do estado no Redux.
- **Yup 0.27**: Validação de dados de formulários de forma simples e declarativa.
- **Date-fns 2.5**: Manipulação e formatação de datas.
- **React Icons 3.7**: Biblioteca de ícones para React.
- **React Scripts**: Scripts e ferramentas do Create React App para desenvolvimento, build e testes.

**EN:**
- **React 16.10**: Main library for building the user interface with reusable components.
- **React DOM**: Allows React components to be rendered in the browser.
- **Redux 4.0**: Global state management, making it easy to share data across components.
- **React Redux**: Integrates Redux with React components, making global state accessible.
- **Redux Saga 1.1**: Middleware to handle side effects and asynchronous flows (e.g., API requests) in an organized way.
- **Redux Persist 6.0**: Persists Redux state in local storage, keeping login and data even after page reloads.
- **Styled-components 4.4**: CSS-in-JS styling for dynamic and scoped component styles.
- **React Router DOM 5.1**: Routing and navigation management between application pages.
- **History**: Manages navigation history, used by React Router.
- **React Toastify 5.4**: Displays notifications and feedback messages to users.
- **Reactotron (react-js, redux, redux-saga)**: Debugging tool to monitor state, actions, and sagas in real time during development, with specific integrations for React, Redux, and Redux Saga.
- **Axios 0.19**: HTTP client for communicating with REST APIs.
- **Immer 4.0**: Facilitates immutable state manipulation in Redux.
- **Yup 0.27**: Simple and declarative form data validation.
- **Date-fns 2.5**: Date manipulation and formatting.
- **React Icons 3.7**: Icon library for React.
- **React Scripts**: Scripts and tools from Create React App for development, build, and testing.

---

## 🗂️ Estrutura | Structure
```
meetapp_web/
├── assets/
├── public/
├── src/
│   ├── App.js
│   ├── Components/
│   ├── Config/
│   ├── Services/
│   │   ├── api.js
│   │   ├── history.js
│   │   ├── Routes/
│   │   └── store/
│   ├── Style/
│   ├── Views/
│   │   ├── Dashboard/
│   │   ├── Details/
│   │   ├── NewMeetup/
│   │   ├── Perfil/
│   │   ├── SignIn/
│   │   └── SignUp/
│   └── index.js
├── package.json
└── README.md
```

---

## 🖥️ Telas | Screens
- Cadastro
![WebView](assets/SignUp.PNG)
- Login
![WebView](assets/Login.PNG)
- Dashboard
![WebView](assets/Dashboard.PNG)
- Cadastro de Meetup
![WebView](assets/CadastroMeetup.PNG)
- Perfil
![WebView](assets/Perfil.PNG)

---

## ⚙️ Instalação e Execução | Setup & Run

**PT-BR:**
1. **Pré-requisitos:** Node.js 12+ e npm
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure o IP do backend:**
   - Edite o arquivo `src/Services/api.js` e ajuste o `baseURL` para o endereço do seu backend.
4. **Inicie o aplicativo:**
   ```bash
   npm start
   ```
   O app abrirá em modo desenvolvimento.

**EN:**
1. **Prerequisites:** Node.js 12+ and npm
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure backend IP:**
   - Edit the file `src/Services/api.js` and set the `baseURL` to your backend address.
4. **Start the app:**
   ```bash
   npm start
   ```
   The app will open in development mode.

---

## 👨‍💻 Autor | Author

**PT-BR:**

<div align="center">

**Rodolfo M. F. Abreu**  
Desenvolvedor de software apaixonado por tecnologia, aprendizado contínuo e boas práticas de programação. Sempre em busca de novos desafios e oportunidades para colaborar em projetos inovadores.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Sinta-se à vontade para entrar em contato para dúvidas, sugestões ou colaborações!

</div>

**EN:**

<div align="center">

**Rodolfo M. F. Abreu**  
Software developer passionate about technology, continuous learning, and best programming practices. Always looking for new challenges and opportunities to collaborate on innovative projects.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Feel free to get in touch for questions, suggestions, or collaborations!

</div>

---

<div align="center">
  <b>Feito com 💙 para estudos de React, Redux, Redux Saga, Styled-components e aplicações web modernas.<br/>
  Made with 💙 for React, Redux, Redux Saga, Styled-components and modern web application studies.</b>
</div>

---

<div align="center" id="english-version">
  <b>🇺🇸 English version above | <a href="#top">🇧🇷 Versão em português acima</a></b>
</div>
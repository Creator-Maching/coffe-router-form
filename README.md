
<img width="1338" height="598" alt="Captura de tela 2026-01-09 171145" src="https://github.com/user-attachments/assets/2091fc79-8209-42b9-b1d0-9405944b7afa" />

# ☕ Coffee Router Form

Projeto de estudo desenvolvido com **React + Vite + TypeScript**, focado em **formulário com validação**, **roteamento**, **feedback visual** e **deploy no GitHub Pages**.

🔗 **Demo online:** [https://creator-maching.github.io/coffe-router-form/#/](https://creator-maching.github.io/coffe-router-form/#/)

---

## 📌 Funcionalidades

* ✅ Navegação entre páginas com **React Router**
* ✅ Formulário de registro
* ✅ Validação de campos com **validator.js**
* ✅ Feedback ao usuário com **React Toastify**
* ✅ Redirecionamento para página de sucesso após registro
* ✅ Layout responsivo (CSS + Media Queries)
* ✅ Deploy no **GitHub Pages**

---

## 🧰 Tecnologias utilizadas

* **React 19**
* **Vite**
* **TypeScript**
* **React Router DOM**
* **React Toastify**
* **Validator.js**
* **CSS3 (responsivo)**

---

## 📂 Estrutura do projeto

```
src/
 ├─ assets/
 │   └─ images/
 ├─ Layout/
 ├─ pages/
 │   ├─ Home.tsx
 │   ├─ Login.tsx
 │   ├─ About.tsx
 │   └─ Success.tsx
 ├─ App.tsx
 ├─ main.tsx
 └─ App.css
```

---

## 🚀 Como rodar o projeto localmente

```bash
# instalar dependências
npm install

# rodar em modo desenvolvimento
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:5173
```

---

## 🌍 Deploy no GitHub Pages

O projeto está configurado para deploy usando **gh-pages**.

```bash
npm run build
npm run deploy
```

Configuração importante no `vite.config.ts`:

```ts
base: "/coffe-router-form/",
```

---

## ⚠️ Observação sobre rotas

Para evitar erros 404 no GitHub Pages ao atualizar a página, foi utilizado:

* **HashRouter** em vez de BrowserRouter

Isso garante compatibilidade total com o GitHub Pages.

---

## 📚 Objetivo do projeto

Este projeto tem como objetivo:

* praticar **React com TypeScript**
* entender **validação de formulários**
* aprender **roteamento em SPA**
* realizar **deploy real** de uma aplicação front-end

---

## 👤 Autor

**Pedro Vianna**

* GitHub: [https://github.com/Creator-Maching](https://github.com/Creator-Maching)

---

💡 *Projeto desenvolvido para fins de estudo e aprendizado contínuo.*

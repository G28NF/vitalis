<div align="center">

# 🏃‍♂️ MoviFit

**Seu ajudante na busca por uma vida mais saudável.**

Aplicação web de saúde e bem-estar com calculadoras de IMC e TMB, blog de conteúdo e modo claro/escuro.

[🌐 **Acessar a demo ao vivo**](https://movifit.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-9-007FFF?logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## 📖 Sobre o projeto

O **MoviFit** é uma aplicação web feita em **React + Vite** voltada para saúde, bem-estar e qualidade de vida. A proposta é oferecer ferramentas simples e conteúdos úteis para ajudar o usuário a acompanhar sua condição física e adotar hábitos mais saudáveis no dia a dia.

O projeto é totalmente **front-end** (sem back-end próprio): os cálculos são feitos no navegador e o blog consome links externos de portais de saúde.

---

## ✨ Funcionalidades

- 🧮 **Calculadora de IMC** (Índice de Massa Corporal) — calcula o IMC a partir do peso e da altura e exibe a classificação oficial (abaixo do peso, peso normal, sobrepeso e os três graus de obesidade).
- 🔥 **Calculadora de TMB** (Taxa Metabólica Basal) — estima o gasto calórico diário em repouso usando a fórmula de **Harris-Benedict**, considerando peso, altura, idade e sexo.
- 📊 **Medidor visual (gauge)** — o resultado das duas calculadoras é mostrado num ponteiro semicircular padronizado, feito com `@mui/x-charts`.
- 📰 **Blog de saúde** — grade de artigos em cartões, com **filtro por categoria** (Saúde da mulher, Condições de Saúde, Dr. Responde, Alimentação) e links para conteúdos externos.
- ✉️ **Página de contato** — formulário com **validação** (campos obrigatórios e e-mail válido) e canais de atendimento (WhatsApp, e-mail, Instagram e endereço).
- 🌗 **Modo claro / escuro** — alternância de tema persistente durante a navegação, via React Context.
- 📱 **Design responsivo** — adaptado para celular, tablet e desktop (inclusive logo vertical no mobile e horizontal no desktop).
- 🔔 **Alertas amigáveis** — feedbacks visuais com **SweetAlert2**.

---

## 🛠️ Tecnologias

| Categoria | Ferramentas |
|-----------|-------------|
| **Base** | [React 19](https://react.dev/) · [Vite 8](https://vite.dev/) · [React Compiler](https://react.dev/learn/react-compiler) |
| **UI / Componentes** | [Material UI (MUI) 9](https://mui.com/) · [@mui/icons-material](https://mui.com/material-ui/material-icons/) · [@mui/x-charts](https://mui.com/x/react-charts/) · [lucide-react](https://lucide.dev/) |
| **Estilo** | [Emotion](https://emotion.sh/) (`@emotion/react`, `@emotion/styled`) |
| **Rotas** | [react-router-dom 7](https://reactrouter.com/) |
| **Alertas** | [SweetAlert2](https://sweetalert2.github.io/) |
| **Qualidade** | [ESLint](https://eslint.org/) (+ plugins react-hooks e react-refresh) |
| **Deploy** | [Vercel](https://vercel.com/) |

---

## 📂 Estrutura do projeto

```
MoviFit/
├── public/                     # Arquivos estáticos (logos)
│   ├── Horizontal Amarelo.png
│   ├── Horizontal Roxo.png
│   ├── Vertical Amarelo.png
│   └── Vertical Roxo.png
├── src/
│   ├── components/             # Componentes reutilizáveis
│   │   ├── CalculadoraIMC.jsx  # Calculadora de IMC
│   │   ├── CalculadoraTMB.jsx  # Calculadora de TMB (Harris-Benedict)
│   │   ├── Medidor.jsx         # Ponteiro/gauge padronizado (x-charts)
│   │   ├── ImageList.jsx       # Galeria de imagens da Home
│   │   ├── Layout.jsx          # Moldura comum (Navbar + conteúdo)
│   │   ├── Navbar.jsx          # Barra de navegação + toggle de tema
│   │   ├── PageHeader.jsx      # Cabeçalho reutilizável (título/subtítulo)
│   │   └── Tabs.jsx            # Abas genéricas reutilizáveis
│   ├── contexts/
│   │   └── ColorModeContext.jsx # Contexto do modo claro/escuro
│   ├── pages/                  # Páginas (telas)
│   │   ├── home.jsx            # Página inicial
│   │   ├── calculadora.jsx     # Página das calculadoras (IMC + TMB)
│   │   ├── blog.jsx           # Blog com filtro por categoria
│   │   └── contato.jsx        # Contato + formulário validado
│   ├── routes/
│   │   └── router.jsx          # Definição das rotas
│   ├── App.jsx                 # Componente raiz (tema + rotas)
│   ├── main.jsx                # Ponto de entrada da aplicação
│   ├── theme.js                # Paletas de cores (tema claro e escuro)
│   ├── App.css / index.css     # Estilos globais
├── index.html                  # HTML base
├── vite.config.js              # Configuração do Vite
├── eslint.config.js            # Configuração do ESLint
└── package.json
```

---

## 🗺️ Rotas

| Caminho | Página | Descrição |
|---------|--------|-----------|
| `/` | Home | Boas-vindas, galeria e atalhos |
| `/calculadora` | Calculadora | Abas com IMC e TMB |
| `/blog` | Blog | Artigos filtráveis por categoria |
| `/contato` | Contato | Canais de atendimento e formulário |

---

## 🚀 Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) **18+** (recomendado 20+)
- [npm](https://www.npmjs.com/) (ou yarn/pnpm)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/chromerdev/MoviFit.git

# 2. Entre na pasta do projeto
cd MoviFit

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

Depois é só abrir o endereço exibido no terminal (por padrão, **http://localhost:5173**).

### Scripts disponíveis

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Faz o preview local do build de produção |
| `npm run lint` | Roda o ESLint para verificar o código |

---

## 🧪 Como funcionam os cálculos

### IMC — Índice de Massa Corporal

$$IMC = \frac{peso\ (kg)}{altura\ (m)^2}$$

| Faixa de IMC | Classificação |
|--------------|---------------|
| `< 18,5` | Abaixo do peso |
| `18,5 – 24,9` | Peso normal |
| `25,0 – 29,9` | Sobrepeso |
| `30,0 – 34,9` | Obesidade Grau I |
| `35,0 – 39,9` | Obesidade Grau II |
| `≥ 40,0` | Obesidade Grau III |

> ⚠️ A altura é informada em **centímetros** e convertida internamente para metros.

### TMB — Taxa Metabólica Basal (Harris-Benedict)

**Masculino:**
```
TMB = 66 + (13,7 × peso) + (5 × altura) − (6,8 × idade)
```

**Feminino:**
```
TMB = 655 + (9,6 × peso) + (1,8 × altura) − (4,7 × idade)
```

O resultado representa o gasto calórico diário em **kcal**, considerando o corpo em repouso.

> ℹ️ As calculadoras têm fins **informativos/educativos** e não substituem a avaliação de um profissional de saúde.

---

## 🎨 Temas e cores

O projeto usa dois temas definidos em `src/theme.js`, controlados pelo `ColorModeContext`:

| Token | Tema claro | Tema escuro |
|-------|-----------|-------------|
| Fundo das páginas | `#F4F3FA` | `#1A1A2E` |
| Fundo de cartões | `#FFFFFF` | `#2C2C4A` |
| Cor primária | `#5248B0` (roxo) | `#8C86D4` |
| Cor secundária | `#5248B0` | `#F5C518` (amarelo) |

A troca é feita pelo botão de sol/lua na barra de navegação.

---

## ☁️ Deploy

A aplicação está publicada na **Vercel**: **[movifit.vercel.app](https://movifit.vercel.app)**

Por ser um projeto Vite/React puro, o deploy em qualquer plataforma estática é simples:

```bash
npm run build   # gera a pasta dist/
```

Basta servir o conteúdo de `dist/`. Na Vercel, o build é detectado automaticamente (comando `vite build`, diretório de saída `dist`).

---


<div align="center">

Desenvolvido com 💜 usando React + Vite — **[chromerdev](https://github.com/chromerdev)**

</div>

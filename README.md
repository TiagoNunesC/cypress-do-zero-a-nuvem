# 🧪 Projeto de Testes Automatizados com Cypress

Este projeto utiliza o Cypress para a automação de testes end-to-end (E2E) em aplicações web.


### 🚀 Tecnologias
Cypress
Node.js

### ✅ Pré-requisitos
Node.js instalado (versão 14 ou superior)

Gerenciador de pacotes (npm ou yarn)

### ⚙️ Instalação
Clone o repositório e instale as dependências:

git clone https://github.com/TiagoNunesC/cypress-do-zero-a-nuvem.git
cd seu-repositorio
npm install

### 🧪 Executando os Testes
Modo interativo (Cypress UI):
npx cypress open

Modo headless (terminal):
npx cypress run
Modo com resolução personalizada (exemplo: mobile 410x860):

npx cypress open --e2e --browser chrome --config viewportWidth=410,viewportHeight=860

### 🛠 Comandos úteis
npm run test: Executa os testes no terminal

npm run cy:open: Abre o Cypress no modo interativo

### 🤝 Contribuição
Sinta-se livre para abrir issues ou enviar pull requests com melhorias, novos testes ou correções.

### 📝 Licença
Este projeto está licenciado sob a MIT License.
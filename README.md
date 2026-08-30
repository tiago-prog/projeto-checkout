# 🛒 Projeto 0 - E-commerce Checkout (Teste)

Aplicação de e-commerce simples para entender o fluxo completo de compra: from o clique do usuário até a integração com Stripe. Este é um projeto de aprendizado sobre **segurança web**, **validação no servidor** e **integração de pagamentos**.

## 📚 Estrutura do Projeto

```
projeto-checkout/
├── backend/                      # Node.js + Express
│   ├── src/
│   │   ├── config/              # Configurações (Stripe, CORS, etc)
│   │   ├── controllers/         # Manipuladores de requisições HTTP
│   │   ├── models/              # Estruturas de dados
│   │   ├── routes/              # Definição de endpoints
│   │   ├── services/            # Lógica de negócio
│   │   ├── utils/               # Funções utilitárias
│   │   ├── middlewares/         # Middlewares Express
│   │   └── index.js             # Arquivo principal
│   ├── package.json
│   ├── .env.example
│   └── .env                      # (não versionar)
│
├── frontend/                     # React + Vite
│   ├── src/
│   │   ├── components/          # Componentes React reutilizáveis
│   │   ├── pages/               # Páginas (HomePage, SuccessPage, etc)
│   │   ├── services/            # Cliente HTTP para API
│   │   ├── hooks/               # Hooks customizados
│   │   ├── constants/           # Constantes (URLs, etc)
│   │   ├── utils/               # Funções utilitárias
│   │   ├── App.jsx              # Componente principal com roteamento
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.example
│   └── .env                      # (não versionar)
│
└── README.md
```

## 🎯 Objetivo

Demonstrar um fluxo seguro de compra:

1. **Frontend**: Usuário clica em "Comprar"
2. **Frontend → Backend**: Envia **apenas o `productId`** (nunca o preço!)
3. **Backend**: Valida e busca o preço no "banco de dados"
4. **Backend**: Cria um pedido com status `pending`
5. **Backend**: Cria sessão de checkout no Stripe
6. **Frontend**: Redireciona para a página de pagamento do Stripe
7. **Stripe**: Processa o pagamento
8. **Frontend**: Exibe página de sucesso/cancelamento

**Princípio de segurança:** ✅ O preço SEMPRE vem do servidor, nunca do navegador.

## 🚀 Como Rodar

### 1️⃣ Configurar Backend

```bash
cd backend

# Copiar arquivo de exemplo
cp .env.example .env

# Adicionar a chave Stripe (obter em https://stripe.com)
# Editar .env e adicionar STRIPE_SECRET_KEY

# Instalar dependências
npm install

# Rodar em modo desenvolvimento (com live reload)
npm run dev
```

O servidor sobe em `http://localhost:3001`

**Testar health check:**
```bash
curl http://localhost:3001/api/health
```

### 2️⃣ Configurar Frontend

```bash
cd frontend

# Copiar arquivo de exemplo
cp .env.example .env

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

O front sobe em `http://localhost:5174`

## 🧪 O que Testar

- [ ] **Carregamento do produto**: Verificar se o preço vem do backend
- [ ] **Criar pedido com `productId` válido**: Deve retornar um pedido com status `pending`
- [ ] **Criar pedido com `productId` inválido**: Deve retornar erro 404
- [ ] **Tentar enviar preço do frontend**: O backend deve ignorar e usar seu próprio preço
- [ ] **Checkout com Stripe**: Redirecionar para página de pagamento
- [ ] **Sucesso/Cancelamento**: Exibir página apropriada após resultado

## 📁 Padrões de Organização

### Backend - Arquitetura em Camadas

```
routes/ ─→ controllers/ ─→ services/ ─→ models/
  ↑                         ↓
Requisições HTTP    Lógica de Negócio    Dados
```

**Exemplo de fluxo:**
- `POST /api/orders` → `orderController.createNewOrder()` → `orderService.createOrder()` → salva em `orderModel`

### Frontend - Separação de Responsabilidades

- **Pages**: Componentes de página completa (HomePage, SuccessPage)
- **Components**: Componentes reutilizáveis (ProductCard)
- **Services**: Cliente HTTP centralizado
- **Hooks**: Lógica reutilizável entre componentes
- **Utils**: Funções helpers (formatadores, validadores)
- **Constants**: URLs, chaves, valores fixos

## 🔐 Segurança

### ✅ Boas Práticas Implementadas

1. **Validação no servidor**: Preço obtido do backend, nunca do cliente
2. **CORS configurado**: Apenas localhost pode fazer requisições
3. **Tratamento de erros**: Erros retornam status HTTP apropriados
4. **Variáveis de ambiente**: Chaves sensíveis em `.env`

### ⚠️ TODO (Projeto 2+)

- [ ] Webhook do Stripe para confirmar pagamentos
- [ ] Autenticação e autorização
- [ ] Rate limiting
- [ ] Validação de entrada mais rigorosa
- [ ] Logs estruturados
- [ ] Banco de dados real (em vez de memória)

## 📖 Documentação por Arquivo

### Backend

| Arquivo | Responsabilidade |
|---------|------------------|
| `config/stripe.js` | Inicializa cliente Stripe |
| `config/cors.js` | Configuração de CORS |
| `controllers/productController.js` | Handlers para produtos |
| `controllers/orderController.js` | Handlers para pedidos |
| `services/productService.js` | Lógica de produtos |
| `services/orderService.js` | Lógica de pedidos |
| `models/product.model.js` | Dados de produtos |
| `models/order.model.js` | Dados de pedidos |
| `routes/products.js` | Rotas de produtos |
| `routes/orders.js` | Rotas de pedidos |

### Frontend

| Arquivo | Responsabilidade |
|---------|------------------|
| `pages/HomePage.jsx` | Página principal com produto |
| `pages/SuccessPage.jsx` | Página após sucesso |
| `pages/CancelPage.jsx` | Página após cancelamento |
| `services/api.js` | Cliente HTTP |
| `hooks/useProduct.js` | Hook para carregar produto |
| `constants/api.js` | URLs da API |
| `utils/formatters.js` | Formatadores (preço, URL, etc) |
| `components/ProductCard.jsx` | Card do produto |

## 🛠️ Comandos Úteis

### Backend

```bash
# Desenvolvimento
npm run dev

# Produção
npm start

# Verificar saúde
curl http://localhost:3001/api/health

# Listar produtos
curl http://localhost:3001/api/products

# Criar pedido (requer body JSON)
curl -X POST http://localhost:3001/api/orders \
  -H "Content-Type: application/json" \
  -d '{"productId": "prod_pdf_teste"}'
```

### Frontend

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📦 Dependências Principais

### Backend
- **express**: Framework web
- **cors**: Middleware de CORS
- **stripe**: SDK do Stripe
- **uuid**: Geração de IDs únicos
- **dotenv**: Variáveis de ambiente

### Frontend
- **react**: Biblioteca UI
- **vite**: Build tool e dev server

## 🔗 Links Úteis

- [Stripe Docs](https://stripe.com/docs)
- [Express Docs](https://expressjs.com)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)

---

**Criado para entender o fluxo completo de e-commerce. Projeto educacional!**


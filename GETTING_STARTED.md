# 🚀 Quick Start - Começando Rápido

## ⚡ Setup em 5 Minutos

### Prerequisitos
- Node.js 18+
- npm ou yarn
- Conta Stripe (para chave de teste)

### 1. Backend

```bash
cd backend

# Copiar configuração
cp .env.example .env

# Adicionar chave Stripe em .env
# STRIPE_SECRET_KEY=sk_test_sua_chave_aqui

# Instalar e rodar
npm install
npm run dev
```

✅ Backend rodando em `http://localhost:3001`

### 2. Frontend

```bash
cd frontend

# Copiar configuração
cp .env.example .env

# Instalar e rodar
npm install
npm run dev
```

✅ Frontend rodando em `http://localhost:5174`

### 3. Testar

Abra `http://localhost:5174` no navegador e clique em "Comprar".


# 🛒 E-commerce Checkout

Loja digital com integração Stripe. React + Node.js.

## 🚀 Quick Start

### Backend
```bash
cd backend
cp .env.example .env
# Adicione STRIPE_SECRET_KEY em .env
npm install && npm run dev
```
Acesse: `http://localhost:3001`

### Frontend
```bash
cd frontend
npm install && npm run dev
```
Acesse: `http://localhost:5173`

## 📚 Documentação

- [GETTING_STARTED.md](GETTING_STARTED.md) - Setup detalhado

## 🎯 Fluxo

1. User clica "Comprar"
2. Frontend envia `productId`
3. Backend valida e pega preço real
4. Cria sessão Stripe
5. User paga
6. Sucesso ✓

## 🔑 Principais

- ✅ Preço validado no servidor (seguro)
- ✅ 6 produtos na loja
- ✅ Design responsivo
- ✅ CORS configurado
- ✅ Bem organizado em camadas

## 📦 Tech Stack

- **Backend**: Express, Stripe, Node.js
- **Frontend**: React, Vite
- **Auth**: Stripe Checkout

---

Mais detalhes em [GETTING_STARTED.md](GETTING_STARTED.md)


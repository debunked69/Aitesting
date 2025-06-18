# ModernMarket

ModernMarket is a sample e-commerce platform built with React, Node.js and MongoDB.

## Setup

```bash
# install dependencies
cd server && npm install
cd ../client && npm install
```

Create `.env` files in `server` and `client` from the provided examples.

### Development

```bash
npm run dev --prefix server
npm run dev --prefix client
```

### Build

```bash
npm run build --prefix server
npm run build --prefix client
```

### Test

```bash
npm test --prefix client
```

### Docker

```bash
docker-compose up --build
```

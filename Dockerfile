FROM node:18
WORKDIR /app
COPY server/package.json server/tsconfig.json ./server/
COPY client/package.json client/tsconfig.json client/vite.config.ts ./client/
RUN cd server && npm install && cd ../client && npm install && cd ..
COPY server ./server
COPY client ./client
WORKDIR /app/server
RUN npm run build
EXPOSE 5000
CMD ["node", "dist/server.js"]

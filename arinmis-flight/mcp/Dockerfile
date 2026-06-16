FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
ENV PORT=8765
EXPOSE 8765
CMD ["node", "src/index.js"]

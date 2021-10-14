FROM node:14-alpine

COPY package*.json ./
RUN npm ci
COPY . .

ENTRYPOINT ["node", "/index.js"]

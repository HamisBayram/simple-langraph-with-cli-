FROM node:20-alpine

WORKDIR /usr/src/app

# Install specific compatible versions first
RUN npm install @langchain/core@0.2.36 @langchain/langgraph@0.2.72

# Then copy package files and install remaining dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

CMD ["node", "dist/main.js"]

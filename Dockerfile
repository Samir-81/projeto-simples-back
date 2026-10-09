from node:24-alpine

workdir /app

copy package*.json ./

run npm install --omit=dev

copy . .

env PORT=5000

expose 5000

cmd ["npm", "start"]
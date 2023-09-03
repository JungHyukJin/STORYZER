# Step1: Build the image
FROM node:20.5.1 AS builder
WORKDIR /app
COPY package-lock.json ./package-lock.json
COPY package-docker.json ./package.json

RUN npm install
COPY . .
RUN npm run build

# Step2: Run the image
FROM node:20.5.1-alpine3.17
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/package-docker.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 4040

CMD ["npm", "run", "start"]

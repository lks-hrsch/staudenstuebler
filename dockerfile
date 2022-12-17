# https://nuxtjs.org/deployments/koyeb/
FROM node:lts-alpine as builder
WORKDIR /app
COPY . .
RUN yarn install 
RUN yarn build

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/.output  .
ENV HOST 0.0.0.0
ENV PORT 80
EXPOSE 80

CMD [ "node", "server/index.mjs" ]
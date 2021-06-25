FROM node:15-alpine AS builder
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
RUN yarn build

FROM node:15-alpine
ENV NODE_ENV=production
ENV PORT=3000
WORKDIR /app
COPY --from=builder ["/app/package.json", "/app/yarn.lock", "./"]
RUN yarn install
COPY --from=builder ["/app/build", "./build"]

EXPOSE 3000
CMD [ "node", "build/index.js" ]

USER node

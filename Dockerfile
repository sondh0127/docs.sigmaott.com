FROM registry.gviet.vn:5000/library/node:16.15-alpine as builder

RUN npm install -g pnpm

WORKDIR /src

COPY pnpm-lock.yaml ./

RUN pnpm fetch

ADD . ./

RUN pnpm install -r --offline --ignore-scripts

RUN pnpm run build

########### RUN ##########

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
# copy folder dist build to nginx folder static 
COPY --from=builder /src/docs/.vitepress/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
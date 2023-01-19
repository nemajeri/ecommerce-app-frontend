FROM node:19-alpine3.16 as builder

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . /app

RUN npm run build


FROM nginx:1.23.3-alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80 3000

CMD ["nginx", "-g", "daemon off;"]
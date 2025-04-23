FROM nginx:alpine

COPY ./frontend /usr/share/nginx/html

COPY ./frontend/css/style.css /usr/share/nginx/html/css/style.css

COPY ./docker/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

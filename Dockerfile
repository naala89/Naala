FROM nginx:stable-alpine
COPY dist/ /usr/share/nginx/html/
COPY docker/nginx/ /etc/nginx/conf.d/
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]

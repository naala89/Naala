# production stage
FROM nginx:stable-alpine as production-stage
COPY ./dist /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]

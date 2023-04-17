# naala-vue

## Project setup

    yarn install

### Compiles and hot-reloads for development

    yarn serve

### Compiles and minifies for production

    yarn build

### Lints and fixes files

    yarn lint

### Customize configuration

See [Configuration Reference][configuration_reference].

## Docker

**Note:** Because `npm run build` is memory intensive, the latest compiled dist build is stored in the repo.

**Ensure you run the following before merging to master:**

    yarn build

### Development

    docker compose build
    docker compose up

### Production

1. Build the image:

   `sudo docker build -t naala-vuejs-app .`

2. Run the image:

   `sudo docker run -d
   --restart unless-stopped
   -p 80:80
   --name naala-vuejs-app-1
   naala-vuejs-app`

View on [http://localhost](http://localhost])

## Links

* [Dockerize a VueJSApp][dockerize_vuejs]
* [Containerized Nodejs with Nginx LetsEncrypt and docker-compose][node_letsencrypt]
* [Docker, Nginx and LetsEncrypt][docker_nginx_letsencrypt]

[dockerize_vuejs]: https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html

[node_letsencrypt]: https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose

[configuration_reference]: https://cli.vuejs.org/config/

[docker_nginx_letsencrypt]:https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71

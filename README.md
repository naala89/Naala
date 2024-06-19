# naala

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

#### Initial deployment

In order to set up an initial dummy certificates:

    sudo ./init-letsencrypt.sh

1. Build the image:

   `sudo docker compose build`

2. Run the image:

   `sudo docker compose up -d`

#### Updating

1. Stop the container:

    `sudo docker compose down`

2. Update the codebase:

    `git pull`

3. Rebuild the container:

    `docker compose build`

4. Restart the containers:

   `sudo docker compose up -d`

#### Viewing the logs

##### error.log:

    docker logs -f nginx 1>/dev/null

##### access.log:

    docker logs -f nginx 2>/dev/null

View on [http://localhost](http://localhost])

## Links

* [Dockerize a VueJSApp][dockerize_vuejs]
* [Containerized Nodejs with Nginx LetsEncrypt and docker-compose][node_letsencrypt]
* [Docker, Nginx and LetsEncrypt][docker_nginx_letsencrypt]
* [Nginx Docker view only error logs][docker_nginx_logs]

[dockerize_vuejs]: https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html

[node_letsencrypt]: https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose

[configuration_reference]: https://cli.vuejs.org/config/

[docker_nginx_letsencrypt]:https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71

[docker_nginx_logs]: https://stackoverflow.com/questions/61564018/in-nginx-docker-how-do-we-see-log-only-from-error-log

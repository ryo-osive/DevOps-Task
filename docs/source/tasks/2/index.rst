Task 2
+++++++

Create docker container to host HTML/PHP/Angular/React web application

Dockerize React Application
============================

- Dockerfile 

    .. code-block:: dockerfile

        # Step 1
        FROM node:14-alpine as build-step
        RUN mkdir /app
        WORKDIR /app
        COPY package.json /app
        RUN npm install
        COPY . /app
        RUN npm run build

        # Stage 2
        FROM nginx:1.17.1-alpine
        COPY --from=build-step /app/build /usr/share/nginx/html

- Bash into frontend codebase directory

    .. code-block:: bash

        cd frontend-code

- Command to build docker image

    .. code-block:: bash

        docker build -t <dockerhub-username>/<image-name>:<version-if-any> .

- Push image to docker hub or private docker registry

    .. code-block:: bash

    docker push <image-name>:<version>
    

Dockerize Node.js Application
==============================

- Dockerfile

    .. code-block:: dockerfile

        # Dockerize node API
        FROM node:14-alpine
        WORKDIR /app
        COPY package.json /app
        RUN npm install
        COPY . /app
        CMD node server.js
        STOPSIGNAL SIGTERM
        EXPOSE 5000

- Bash into backend codebase directory

    .. code-block:: bash

        cd backend-code

- Command to build docker image

    .. code-block:: bash

        docker build -t <dockerhub-username>/<image-name>:<version-if-any> .

- Push image to docker hub or private docker registry

    .. code-block:: bash

        docker push <image-name>:<version>

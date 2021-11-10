Task 6
+++++++

**Automating Docker Builds using Github Actions**

    - Create a new Github Action that will build your Docker image

    .. code-block::

        name: Docker Image CI

        on:
        push:
            branches: [ master ]
        pull_request:
            branches: [ master ]

        jobs:
        docker:
            runs-on: ubuntu-latest
            steps:
            # Clone Git repo in action directory
            - uses: actions/checkout@v2 

            # (Optional) Setup Docker Build context
            - name: Set up Docker Buildx
            uses: docker/setup-buildx-action@v1
            
            - name: Login to DockerHub
            uses: docker/login-action@v1 
            with:
            username: ${{ secrets.DOCKERHUB_USERNAME }}
            password: ${{ secrets.DOCKERHUB_TOKEN }}

            - name: Build and Push backend image
            uses: docker/build-push-action@v2
            with:
            context: backend-code/
            file: backend-code/Dockerfile         
            push: true
            tags: rkundani/backend:1.0

            - name: Build and Push frontend image
            uses: docker/build-push-action@v2
            with:
            context: frontend-code/
            file: frontend-code/Dockerfile         
            push: true
            tags: rkundani/frontend:1.0

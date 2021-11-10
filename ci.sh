#!/bin/bash

echo "Building and pushing frontend image"
cd frontend-code
docker build  -f Dockerfile -t rkundani/frontend:1.0 .
docker push rkundani/frontend:1.0


echo "Building and pushing backend image"
cd backend-code
docker build  -f Dockerfile -t rkundani/backend:1.0 .
docker push rkundani/backend:1.0

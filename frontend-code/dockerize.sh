#!/bin/bash
ng build --prod 
docker build  -f Dockerfile -t frontend .
docker tag frontend rkundani/frontend:1.0
docker push rkundani/frontend:1.0

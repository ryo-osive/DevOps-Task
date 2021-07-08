#!/bin/bash
docker build  -f Dockerfile -t backend .
docker tag backend rkundani/backend:2.0
docker push rkundani/backend:2.0

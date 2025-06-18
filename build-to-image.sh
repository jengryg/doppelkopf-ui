#!/bin/bash

# enable exit on error
set -e


echo "Building image..."
# use the dockerfile to build the image
docker build -f ./docker/Dockerfile -t localhost:5001/doppelkopf/doppelkopf-frontend:latest .
echo ""
echo "Pushing image to localhost:5001 registry"
# push the image to the local registry
docker push localhost:5001/doppelkopf/doppelkopf-frontend:latest
echo "build to image is done"

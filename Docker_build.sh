#!/bin/bash

# stop the previous container
docker stop $(docker ps -a -q --filter ancestor=storyzer-client:latest)

docker build -t storyzer-client:latest .
docker run -d -p 4040:4040 storyzer-client

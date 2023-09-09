#!/bin/bash

kubectl expose deployment app --type=LoadBalancer --port=8080 --name http-server

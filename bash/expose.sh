#!/usr/bin/env bash

kubectl expose deployment app --type=LoadBalancer --port=8080 --name node-nginx-app

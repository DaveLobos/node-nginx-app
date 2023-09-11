#!/usr/bin/env bash
# Script to expose the deployment as a load balancer on port 8080

kubectl expose deployment app --type=LoadBalancer --port=8080 --name http-server

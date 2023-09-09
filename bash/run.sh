#!/bin/bash

kubectl expose deployment app --type=LoadBalancer --port=80 --name http-server

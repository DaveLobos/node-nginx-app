# Node-Nginx-App with Minikube and Skaffold

## Overview

This project serves as a template to setup a containerized local NodeJS development environment with Nginx as a reverse proxy using Minikube and Skaffold for hot-reloading.

## Requirements

- Docker
- Minikube
- Skaffold

## Quickstart

1. Clone the repository.
    ```
    git clone https://github.com/DaveLobos/node-nginx-app.git
    ```
2. Change into the project directory.
    ```
    cd node-nginx-app
    ```
3. Start Minikube.
    ```
    minikube start
    ```
4. Run Skaffold.
    ```
    skaffold dev
    ```
5. Expose the application port.
    ```
    kubectl expose deployment app --type=LoadBalancer --port=8080 --name node-nginx-app
    ```

For more details, check out the [blog post on davelobos.dev](https://davelobos.dev/en/2023-09-07-local-development-stack-with-minikube-nodejs-nginx).

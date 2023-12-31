# Node-Nginx-App with Minikube and Skaffold

## Overview

This project serves as a guide to setting up a local development environment using Minikube, NodeJS, and Nginx. 

## Requirements

- Docker
- Minikube
- Skaffold

## Getting Started

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

For more details, check out the [blog post](https://davelobos.dev/en/2023-09-07-local-development-stack-with-minikube-nodejs-nginx).

## License

This project is licensed under the GNU General Public License. See the [LICENSE](LICENSE) file for details.

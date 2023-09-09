# node-nginx-app
Foundation code to build a containerized NodeJS application with Nginx as a reverse proxy.

Pre requisites

Docker, Minikube and Skaffold

Quickstart

1 - Clone this repository and start the application

    $ git clone https://github.com/DaveLobos/node-nginx-app.git
    $ cd node-nginx-app
    $ minikube start
    $ skaffold dev

2 - Expose the application port to the host machine

    $ kubectl expose deployment app --type=LoadBalancer --port=8080 --name http-server

3 - Find out the Minikube IP address

    $ minikube ip

The web application is running and accessible at http://[minikube ip]:8080/

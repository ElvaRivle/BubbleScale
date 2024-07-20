#!/bin/bash

minikube kubectl -- apply -f ./node-app/kubernetes/Deployment.yaml
minikube kubectl -- apply -f ./node-app/kubernetes/Service.yaml
minikube kubectl -- apply -f ./node-app/kubernetes/HPA.yaml



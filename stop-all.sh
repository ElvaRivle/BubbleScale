#!/bin/bash

minikube kubectl -- delete hpa node-bubble-hpa
minikube kubectl -- delete service node-bubble-service
minikube kubectl -- delete deployment node-bubble-deployment


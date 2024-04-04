# This is a MERN Stack deployed on Kubernetes Clusted

Web Application consists of the following tools: `ReactJs` + `NodeJs` + `Express` + `Mongo DB` deployed in `Kubernetes`cluster

<p align="center">
  <img width="50%" height="50%" src="https://github.com/famasboy888/MERN_Kubernetes/assets/23441168/86f7a561-85c5-4e03-abdb-430126747c14">
</p>


## Debugging Pods

`kubectl run curl --image=curlimages/curl -i --tty -- sh`

or go inside the shell

`kubectl exec <pod-name> -i --tty -- sh`

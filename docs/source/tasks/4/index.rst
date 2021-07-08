Task 4
+++++++

Install Kubernetes connection client (kubectl and helm) in your system: 

kubectl Installation
=====================

Working
--------

    .. thumbnail:: ./images/how-kubernetes-works.png


Install steps
--------------

- Installation using repository

    .. code-block:: bash

        sudo apt-get update && sudo apt-get install -y apt-transport-https gnupg2
        curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
        echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
        sudo apt-get update
        sudo apt-get install -y kubectl


Helm-3 Installation
====================    

Working
--------

    .. thumbnail:: ./images/helm3-arch.png

Install steps
-------------

    .. code-block:: bash

        curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
        chmod 700 get_helm.sh
        ./get_helm.sh


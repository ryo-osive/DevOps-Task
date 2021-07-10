Task 5
+++++++

Create helm chart to install application (with auto scaling) + database deployed

Helm Charts
============

- Create three new helm chart for fronend, backend and database

    .. code-block:: bash

        helm create frontend
        helm create backend

Helm frontend Charts
---------------------

- Edit file ``frontend/templates/deployment.yaml``

    .. note:: Add `env` inside template defination
    
    .. thumbnail:: images/env-deployment.png

- Edit ``frontend/values.yaml`` file for values:

    ..thumbnail:: images/frontend-values.png

- Finally the frontend chart is ready

    Github-URL : `fontend-charts<https://github.com/ryo-osive/DevOps-Task/tree/master/employeebook/charts/frontend>`_



Helm backend Charts
---------------------


- Edit file ``backend/templates/deployment.yaml``

    .. note:: Add `env` inside template defination

    .. thumbnail:: images/backend-deployment.png
    
- Create new ``backend/templates/secret.yaml`` for `MongoDB URL` used in above deployment file.

    .. code-block:: yml

        apiVersion: v1
        kind: Secret
        metadata:
          name: {{ include "backend.fullname" . }}-secret 
        data:
          mongodb-uri: {{ with .Values.secret.mongodb_uri -}}
          {{- list "mongodb://" .username ":" .password "@" $.Release.Name "-" .dbchart ":" .port "/" .dbconn | join ""  | b64enc |  quote }}
        # {{- ( printf "%s%s:%s@%s-%s%s" "mongodb://" .username .password $.Release.Name "database" ":27017/employeebook" ) | b64enc | quote }}
        {{- end }}


    `backend-secret.yaml<https://github.com/ryo-osive/DevOps-Task/blob/master/employeebook/charts/backend/templates/secret.yaml>`_

- Now edit ``backend/values.yaml`` file for values:

    ..thumbnail:: images/backend-values.png



Helm Database Charts
---------------------

- Create file for ``PV``

    .. code-block:: yaml

        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: {{ include "database.fullname" . }}-pv
          labels:
            type: local
        spec:
          storageClassName: manual
          capacity:
            storage: {{ .Values.volume.storage }} 
          accessModes:
            - ReadWriteOnce
          hostPath:
            path:  /mnt/data/{{ .Release.Name }}
        
- Create a template file for ``PVC``

    .. code-block:: yaml

        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
          name: {{ include "database.fullname" . }}-pvc
        spec:
          storageClassName: manual
          accessModes:
            - ReadWriteOnce
          resources:
            requests:
              storage: {{ .Values.volume.storage }}

- Create a Service file for exposing mongodb service

    .. code-block:: yaml

        apiVersion: v1
        kind: Service
        metadata:
          labels:
            name: {{ include "database.fullname" . }}
          name: {{ include "database.fullname" . }}
        spec:

          ports:
            - name: mongodb
              port: 27017
              targetPort: 27017
          selector:
            app: {{ include "database.fullname" . }}

- Create backend/templates/mongodb.yaml for Deployment

    .. code-block:: yaml

        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: {{ include "database.fullname" . }}
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: {{ include "database.fullname" . }}
          template:
            metadata:
              labels:
                app: {{ include "database.fullname" . }}
            spec:
              containers:
                - image: mongo
                  env:
                  - name: MONGO_INITDB_DATABASE
                    value: employeebook
                  - name: MONGO_INITDB_ROOT_USERNAME
                    valueFrom:
                      secretKeyRef:
                        name: {{ include "database.fullname" . }}-secret
                        key: mongodb-username
                  - name: MONGO_INITDB_ROOT_PASSWORD
                    valueFrom:
                      secretKeyRef:
                        name: {{ include "database.fullname" . }}-secret
                        key: mongodb-password
                  name: {{ include "database.fullname" . }}
                  ports:
                    - name: mongodb
                      containerPort: 27017
                  volumeMounts:
                    - name: {{ include "database.fullname" . }}-volume
                      mountPath: /data/db
              volumes:
                - name: {{ include "database.fullname" . }}-volume
                  persistentVolumeClaim:
                    claimName: {{ include "database.fullname" . }}-pvc

- Create backend/templates/secret.yaml for MongoDB Credentials

    .. code-block:: yaml

        apiVersion: v1
        kind: Secret
        metadata:
          name: {{ include "database.fullname" . }}-secret
        data:
          mongodb-username: {{ .Values.secret.mongodb_username | b64enc | quote }}
          mongodb-password: {{ .Values.secret.mongodb_password | b64enc | quote }}


- Final Charts are available at below link

    `database-charts<https://github.com/ryo-osive/DevOps-Task/tree/master/employeebook/charts/database>`_


Deploy Charts with Ingress
===========================

- Find out the minikube cluster ip

    .. code-block:: bash

        minikube ip
    
- Edit and append ``/etc/hosts`` file to include ingress hostnames

    .. code-block:: bash

        <minikube-cluster-ip>	backend.minikube.local
        <minikube-cluster-ip>  frontend.minikube.local

- Deploy charts

    - git clone repository

        .. code-block:: bash

            git clone https://github.com/ryo-osive/DevOps-Task
    
    - Install helm charts

        .. code-block:: bash

            helm install employeebook employeebook/

- Project is deployed on k8s with ingress enabled and vertical autoscalability


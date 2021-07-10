Task 5
+++++++

Create helm chart to install application (with auto scaling) + database deployed

Helm Charts
============

- Create three new helm chart for fronend, backend and database

    .. code-block:: bash

        helm create frontend
        helm create backend
        helm create database


Helm frontend Charts
---------------------

- Edit file ``templates/deployment.yaml``

    .. note:: Add `env` inside template defination
    
    .. thumbnail:: images/env-deployment.png

- Edit ``values.yaml`` file for values:

    ..thumbnail:: images/values.png

- Finally the frontend chart is ready

Github-URL : `fontend-charts<>`_
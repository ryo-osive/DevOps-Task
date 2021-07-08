Task-1
+++++++

Create sample HTML/PHP/Angular/React (any web application language) form that adds Employee ID and Employee name in Mysql database

Application Architecture
=========================

.. thumbnail:: images/mern-stack.png

MongoDB Instance
=================

Start mongoDB container with persistant volume mount

    .. code-block:: bash

        docker run -d -p 27017:27017 --name mongodb -v mongo-vol:/data/db mongo --bind_ip=0.0.0.0
    
Node.js Code-base
=================

`Node.js Code-base Link <https://github.com/ryo-osive/DevOps-Task/tree/master/backend-code>`_ 

Setup steps
-----------

- Bash into frontend directory

    .. code-block:: bash

        cd backend-code

- Install Dependencies

    .. code-block:: bash

        npm i

- Set Enviroment Variables for API server
  
    .. code-block:: bash

        export MONGODB_URI="mongodb://<mongodb-host-ip>:<port>/employees?retryWrites=true&w=majority"

- Start Node API Server

    .. code-block:: bash

        node server.js


React Code-base
================

`React.js Code-base Link <https://github.com/ryo-osive/DevOps-Task/tree/master/frontend-code>`_ 

Setup steps
-----------

- Bash into frontend directory

    .. code-block:: bash

        cd frontend-code

- Install Dependencies

    .. code-block:: bash

        npm i

- Set Enviroment Variables for API server
  
    .. code-block:: bash

        export REACT_APP_API_URI="http://<api-server-hostname>:<port> "

- Start react 

    .. code-block:: bash

        npm start

Build Project
--------------

    .. code-block:: bash

        npm run build

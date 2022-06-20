# MELI Challenge
La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de resultados, y la descripción del detalle del producto.

Servidor
Se ha utilizado express y morgan para poner levantar el servidor, añadiendo las dependencias de estos en el archivo package.json, donde además se coloca el detalle del aplicativo. 
Nombré "dev" al script donde de manera automatica con nodemon ejecuta el archivo index.js para inicializar el server, generando una instancia de las dependencias que lo iniciarán, así mismo tambien se define el puerto, rutas de los archivos que correrán en el y el llamado a la ejecución del mismo.

API
Para la generación de la API se usó el formato solicitado y la información que se muestra en los bocetos, de manera que al verificarlo contenga la información que se requiere, cabe mencionar que para dicha verificación se usó insomnia.
En el archivo query.js podemos observar que las lineas iniciales crean una instancia del API para poder ser ejecutado en el servidor, así como tambien la forma en que se puede obtener información de ese json y una respuesta en caso contrario.

FRONT
Para el maquetado de los bocetos use HTML y CSS, mientras que para la obtención y muestra de información me apoyé de javascript y fetch.
En un principio iba a usar axios para el consumo de la api pero al final se me hizo más práctico utilizar fetch; en el archivo script.js cargo por secciones toda la parte del front detallando primero cada contenedor y posteriormente realizando un llamado a cada función para mostrarlos.
Al final de este archivo se muestran dos funciones más para habilitar la vista principal de la página y su detalle.

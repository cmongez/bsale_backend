## CHALLENGE BSale - Back End (API REST)
## Objetivo
Determinar si el/la candidat@ cuenta con los conocimientos para interactuar con
una base de datos a través de una aplicación web, implementando cliente y servidor.

Construir una tienda online que despliegue productos agrupados por la categoría a la que pertenecen, generando por separado backend (API REST) y frontend (aplicación que la consuma).

Además, agregar un buscador el cual tiene que estar implementado a nivel de servidor, mediante una Api Rest cuyo lenguaje y framework puede ser de libre elección. Es decir, los datos de productos deben llegar filtrados al cliente.

## Instalación

Instale las dependencias e inicie el servidor.

```sh
git clone https://github.com/cmongez/bsale_backend.git
cd bsale_backend
npm i
node app.js
```

## Dependencias

| Paquetes utilizados | Enlace a NPM                                        |
| ------------------- | --------------------------------------------------- |
| Express             | [Ir a NPM](https://www.npmjs.com/package/express)   |
| Cors                | [Ir a NPM](https://www.npmjs.com/package/cors)      |
| dotenv              | [Ir a NPM](https://www.npmjs.com/package/dotenv)    |
| knex           | [Ir a NPM](https://www.npmjs.com/package/knex) |
| Mysql             | [Ir a NPM](https://www.npmjs.com/package/mysql)    |

# Variables de entorno

Dentro de la raiz debe renombar el archivo llamado: `.env.default` a `.env` el cual debe tener el siguiente formato:

```
DB_Name= 
DB_User=
DB_Password=
DB_Host= 
PORT=3010
```
Debe asignar a las variables las credenciales de acceso a la Base de datos (no tengo permiso para compartir esas credenciales.)

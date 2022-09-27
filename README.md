## CHALLENGE BSale - Back End (API REST)
<cemter><img src="https://i.ibb.co/cLTtjZx/bsale.png" width="70%" /></center>

## Objetivo
Determinar si el/la candidat@ cuenta con los conocimientos para interactuar con
una base de datos a través de una aplicación web, implementando cliente y servidor.

Construir una tienda online que despliegue productos agrupados por la categoría a la que pertenecen, generando por separado backend (API REST) y frontend (aplicación que la consuma).

Además, agregar un buscador el cual tiene que estar implementado a nivel de servidor, mediante una Api Rest cuyo lenguaje y framework puede ser de libre elección. Es decir, los datos de productos deben llegar filtrados al cliente.

## Servidor - API REST

Realizado con Node.JS, Express.JS, JavaScript y MySql. 
Desarrollado utilizando  **Node.JS**, **Express.JS**, **Knex**, **JavaScript** and **MySql**. Donde se realiza una llamada a la base de datos a través de diferentes puntos finales utilizando una solicitud HTTP de tipo **GET** para obtener la información que se solicita  desde el cliente

### Caracteristicas del proyecto

<li> Configuración de variables de entorno.</li>
<li> Conexión a base de datos MySQL.</li>
<li> Configuración del puerto del server.</li>
<li> Configuración de middleware de manejo de errores y cors en el server para permitir el acceso a los recursos en nuestro servidor.</li>
<li> Creación de los endpoints solicitados.</li>
<li> Filtro para las rutas solicitadas.</li>
<li> Deploy del server en Heroku</li>

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

```js
# Credenciales MySQL
DB_Name = 
DB_User =
DB_Password =
DB_Host = 
```
Debe asignar a las variables las credenciales de acceso a la Base de datos (no tengo permiso para compartir esas credenciales).

## Estructura JSON

Estructuras JSON que se envian como respuesta a las solicitudes recibidas en los endpoints de la API REST

#### Producto
La estructura JSON de un producto:

```js
 {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": 1
  }
```
#### Categoría
La estructura JSON de una categoria

```js
{
"id": 1,
"name": "bebida energetica"
}
```

## Endpoints
Las solicitudes son exclusivamente de tipo GET, no fue solicitado la implementacion de ningún otro verbo HTTP en esta API REST.

### GET: Obtener productos

`/v1/products/`

Devuelve un array con todos los productos en la base de datos.

Ejemplo *https://bsale-backend-cesar-mongez.herokuapp.com/v1/products*

### GET: Obtener categorías

`/v1/categories/`

Devuelve un array con todas las categorias en la base de datos.

Ejemplo: *https://bsale-backend-cesar-mongez.herokuapp.com/v1/categories/*

### GET: Obtener productos por categoría

`/v1/products/category/:id`

Devuelve un array con todos los productos que tengan el `id` solicitado como parametro en la petición.

Ejemplo: *https://bsale-backend-cesar-mongez.herokuapp.com/v1/products/category/1*

### GET: Obtener productos por nombre

`/v1/products/:products`

Devuelve un array con todos los productos que incluyan el o los caracteres ingresados como parametro `products`.

Ejemplo: *https://bsale-backend-cesar-mongez.herokuapp.com/v1/products/pa*

### GET: Obtener categorias por nombre

`/v1/categories/:categories`

Devuelve un array con todos las categorias que incluyan el o los caracteres ingresados como parametro `categories`.

Ejemplo: *https://bsale-backend-cesar-mongez.herokuapp.com/v1/categories/vodka/*



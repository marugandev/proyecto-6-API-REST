# Tienda de Consolas y Videojuegos

## Descripción

Este proyecto es una API para una tienda de consolas y videojuegos. Permite gestionar videojuegos y consolas en una base de datos MongoDB. Los videojuegos están asociados a consolas específicas, permitiendo listar juegos por consola y agregar nuevos juegos.

## Arquitectura

- **Colección 1: Videogames (Videojuegos)**

  - Claves: `title`, `genre`, `price`, `stock`, `multiplayer`, `developer`, `platform`, `img`
  - Relación: Cada videojuego está relacionado con una consola específica.

- **Colección 2: Consoles (Consolas)**
  - Claves: `name`, `manufacturer`, `price`, `stock`, `videogames`
  - Relación: Cada consola tiene una lista de videojuegos asociados.

## Endpoints

### Videogames (Videojuegos)

- **GET /videogames**

  - Descripción: Obtiene todos los videojuegos.
  - Respuesta: Lista de videojuegos.

- **GET /videogames/:id**

  - Descripción: Obtiene un videojuego específico por ID.
  - Parámetros:
    - `id` (URL): ID del videojuego.
  - Respuesta: Detalles del videojuego.

- **GET /videogames/price/:maxPrice**

  - Descripción: Filtra los videojuegos cuyo precio sea igual o menor al precio especificado.
  - Parámetros:
    - `maxPrice` (URL): Precio máximo para filtrar los videojuegos.
  - Respuesta: Lista de videojuegos que cumplen con el criterio de precio.

- **POST /videogames**

  - Descripción: Crea un nuevo videojuego.
  - Cuerpo de la solicitud:
    ```json
    {
      "title": "string",
      "genre": "string",
      "price": number,
      "stock": number,
      "multiplayer": boolean,
      "developer": "string",
      "platform": ["string"],
      "img": "string"
    }
    ```
  - Respuesta: Detalles del videojuego creado.

- **PUT /videogames/:id**

  - Descripción: Actualiza un videojuego existente.
  - Parámetros:
    - `id` (URL): ID del videojuego.
  - Cuerpo de la solicitud:
    ```json
    {
      "title": "string",
      "genre": "string",
      "price": number,
      "stock": number,
      "multiplayer": boolean,
      "developer": "string",
      "platform": ["string"],
      "img": "string"
    }
    ```
  - Respuesta: Detalles del videojuego actualizado.

- **DELETE /videogames/:id**
  - Descripción: Elimina un videojuego por ID.
  - Parámetros:
    - `id` (URL): ID del videojuego.
  - Respuesta: Mensaje de confirmación de eliminación.

### Consoles (Consolas)

- **GET /consoles**

  - Descripción: Obtiene todas las consolas.
  - Respuesta: Lista de consolas.

- **GET /consoles/:id**

  - Descripción: Obtiene una consola específica por ID.
  - Parámetros:
    - `id` (URL): ID de la consola.
  - Respuesta: Detalles de la consola.

- **GET /consoles/price/:maxPrice**

  - Descripción: Filtra las consolas cuyo precio sea igual o menor al precio especificado.
  - Parámetros:
    - `maxPrice` (URL): Precio máximo para filtrar las consolas.
  - Respuesta: Lista de consolas que cumplen con el criterio de precio.

- **POST /consoles**

  - Descripción: Crea una nueva consola.
  - Cuerpo de la solicitud:
    ```json
    {
      "name": "string",
      "manufacturer": "string",
      "price": number,
      "stock": number,
      "videogames": ["string"]
    }
    ```
  - Respuesta: Detalles de la consola creada.

- **PUT /consoles/:id**

  - Descripción: Actualiza una consola existente.
  - Parámetros:
    - `id` (URL): ID de la consola.
  - Cuerpo de la solicitud:
    ```json
    {
      "name": "string",
      "manufacturer": "string",
      "price": number,
      "stock": number,
      "videogames": ["string"]
    }
    ```
  - Respuesta: Detalles de la consola actualizada.

- **DELETE /consoles/:id**
  - Descripción: Elimina una consola por ID.
  - Parámetros:
    - `id` (URL): ID de la consola.
  - Respuesta: Mensaje de confirmación de eliminación.

## Scripts

- **npm run dev**

  - Descripción: Ejecuta la aplicación en modo de desarrollo.

- **npm run videogamesSeed**

  - Descripción: Lanza la semilla de datos para la colección de videojuegos (`videogames.js`).

- **npm run consolesSeed**
  - Descripción: Lanza la semilla de datos para la colección de consolas (`consoles.js`).

## Librerías necesarias

Para que la aplicación funcione correctamente, debes instalar las siguientes dependencias:

- **Dependencias:**

  - `dotenv`: `^16.4.5` - Para manejar variables de entorno.
  - `express`: `^4.20.0` - Framework para construir la API.
  - `mongoose`: `^8.6.1` - Para interactuar con MongoDB.

- **Dependencias de desarrollo:**
  - `nodemon`: `^3.1.4` - Para reiniciar la aplicación automáticamente durante el desarrollo.

Puedes instalar todas las dependencias necesarias ejecutando:

```bash
npm install
```

## Middleware

- **errorMiddleware**
  - Descripción: Controla y maneja errores generales en la aplicación.

## Conexión a la Base de Datos

La aplicación se conecta a una base de datos MongoDB. Asegúrate de que la conexión esté configurada correctamente en el archivo de configuración de Mongoose.

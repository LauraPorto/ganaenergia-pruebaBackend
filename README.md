# Prueba Técnica (Backend)

## Tabla de Contenidos

- [Acerca del proyecto](#about)
- [Arrancar el proyecto](#getting_started)
- [Tecnologías](#tecnologias)

## Acerca del proyecto <a name = "about"></a>

Parte Backend del proyecto para la prueba técnica de Gana Energía.
Desde la perspectiva de un rol de usuario administrador, se permite interactuar con la base de datos, que contiene usuarios y artículos. A través del protocolo HTTP (Get, Post, Put, Delete). De este modo, se podrán generar nuevos artículos y usuarios, modificar sus datos, borrarlos y leer todos la información de la base de datos. 

## Arrancar el proyecto <a name = "getting_started"></a>

A continuación se adjuntan los comandos para poder arrancar este proyecto desde local. La base de datos (MongoDB), está dockerizada y se puede consultar también en Mongo Compass introduciendo la URL con el cluster extraído de Mongo Atlas.

### Prerrequisitos

Para instalar todas las dependencias de este proyecto, es necesario en primer lugar ejecutar el siguiente comando

```
npm install
```

### Instalación

Tras descargar las dependencias, ejecutamos el comando de docker que arranca el contenedor que contiene MongoDB

```
docker-composer up
```

## Tecnologías <a name = "tecnologias"></a>

- [Express](#https://expressjs.com/)
- [Docker](#https://nodejs.org/en/)
- [Mongoose](#https://mongoosejs.com/)
- [NodeJS](#https://nodejs.org/en/)
- [Nodemon](#Nodemon)
- [Cors](#https://www.npmjs.com/package/cors)
- [JWT](#https://jwt.io/)
- [Bcrypt](#https://www.npmjs.com/package/bcrypt)
- [GitFlow](#https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)


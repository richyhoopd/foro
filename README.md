# TPSI FLOW foro
un foro de proyecto de curso de hapi js construido precisamente con las librerias de @hapi.
disene un foro estilo stack overflow para practicar lo aprendido en el curso de hapi JS de la 
carrera de desarrollo de backend con node js.

A hapi js course project forum built with @hapi libraries.
design a stack overflow style forum to practice what you learned in the JS hapi course
backend development career with node js

# Instalacion | installation 
1.- descargar el proyecto o clonar el repositorio a tu maquina local.
2.- abrir con un editor de codigo e usar el comando 
```npm i .```
3.- crear una base de datos en firebase y anadir la siguiente regla: 
```
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    "users": {
        ".indexOn": "email"      
    },
    ".read": false,
    ".write": false
  }
}
```
4.- crear un archivo .env y anadir la direccion de tu base de datos al archivo ".env"
5.- usar ```npm run dev``` para ejecutar en modo de desarrollo 

----------------------------------------------------------------------------------------------------------------------------------

1.- Download the project or clone the repository to your local machine.
2.- open with a code editor and use the command
```npm i .```
3.- create a database in firebase and add the following rule:
```
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    "users": {
        ".indexOn": "email"      
    },
    ".read": false,
    ".write": false
  }
}
```
4.- create an .env file and add the address of your database to the ".env" file
5.- use ```npm run dev``` to run in development mode

# gracias por ver construido con node 14.x


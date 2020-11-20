# PokedexApp

Proyecto básico que consume la API de Pokemon (pokeapi.co).
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Estructura del proyecto
Este proyecto pese a ser un proyecto de tamaño pequeño esta estructura en una estructura modular respetando el principio de responsabilidad única haciendo uso de componentes stateful, componetes stateless y servicios con la lógica de negocio.

El proyecto esta dividido en diversos módulos que se cargan bajo demanda haciendo uso de la técnica lazy loading para garantizar el correcto rendimiento de la aplicación así como su escalabilidad.

Todos los componentes del proyecto hacen uso de la estrategia de detección de cambios OnPush para optimizar el rendimiento de la aplicación.

## Diseño
El diseño del portal esta inspirado en la sugerencia mencionada en el enunciado de la prueba tecnica.

Se ha importado en el proyecto la tipografía Grotesque.

Aprovechando las ventajas que ofrece SCSS, el proyecto dispone de estilos globales, variables de color y tamaño.

## Diseño responsive
Se ha realiza una adaptación básica para que el portal sea funcional tanto en escritorio como en dispositivos móviles (Prueba el portal en ambos dispositivos)

## Interceptores
Se han implementado 2 interceptores de peticiones HTTP.

El primero tiene como responsabilidad mostrar de forma automática un spinner global cuando se están realizando peticiones. Este interceptor esta preparado para modificar su comportamiento y no mostrar en el spinner global en caso de que no se desee (Por ejemplo durante el scroll infinito).

También se ha hecho una implementación básica de un interceptor de errores HTTP que redirigue a una página de error básica.

## Lint
El proyecto cumple todas las reglas del lint configuradas.

## Unit tests
Se ha realizado una implementación de test unitarios obteniendo una cobertura por encima del 95%.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

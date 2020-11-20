# PokedexApp

Basic project that consumes the Pokemon API (pokeapi.co).
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Project structure
This project, has a modular structure respecting the principle of single responsibility, making use of stateful components, stateless components, and services with business logic.

The project is divided into various modules that are loaded on demand using the lazy loading technique to guarantee the correct performance of the application and scalability.

## Design
The design of the portal is inspired by the suggestion mentioned in the technical test.

The Grotesque font has been imported into the project.

Taking advantage of the advantages that SCSS offers, the project has global styles, color and size variables.

## Responsive design
A basic adaptation has been made so that the portal is functional both on desktop and mobile devices (Test the portal on both devices)

## Interceptors
2 HTTP request interceptors have been implemented.

The first has the responsibility to automatically show a global spinner when requests are being made. This interceptor is prepared to modify its behavior and not show in the global spinner in case it is not desired (for example during infinite scroll).

A basic implementation of an HTTP error tracker has also been made that redirects to a basic error page.

## Lint
The project meets all configured lint rules.

## Unit tests
An implementation of unit tests has been implemented, obtaining a coverage above 90%.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# PokedexApp

Basic project that consumes the Pokemon API (pokeapi.co).
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Project structure
This project, has a modular structure respecting the principle of single responsibility, making use of stateful components, stateless components, and services with business logic.

All components make use of the OnPush change detection strategy to optimize application performance.

The project is divided into various modules that are loaded on demand using the lazy loading technique to guarantee the correct performance of the application and scalability.

## Filter by name (bonus)
The filter by name bonus functionality has been implemented.
The chosen strategy was obtaining all the pokemons in one request 
and performing a local filtering of these pokemon on memory, on the other hand, to continue using the infinite scroll,
a paging on memory of all the pokemons (based on the filter inserted by the user) has been implemented.

## Design
The design of the web is inspired by the suggestion mentioned on the technical test.

The Grotesque font has been imported into the project.

Taking advantage of the advantages that SCSS offers, the project has global styles, color and size variables.

## Responsive design
A basic adaptation has been made, making web functional both on desktop and mobile devices (Test the web on both devices)

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

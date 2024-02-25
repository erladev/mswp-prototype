# ARCHIVED PROJECT CODE FROM A PAST UNIVERSITY COURSE

# CybercomplyProto

HOWTO:
the 3 components are landing-page, overview, and risk-assesment, in the corresponding folders, edit the .html, .js and
.scss files to modify the UI. server can be started with `npm start`, the server automatically recompiles whenever you
save a file.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## ChatGPT Integration

To call the API there is the server.js in the src directory.  
Start the server with `node server.js`.
Before it is necessary to add the following environment variable:  
`export OPENAI_API_KEY='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'`

Please make the API requests only when necessary as it costs per request.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

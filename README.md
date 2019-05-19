# AngularGamePortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Setup

Several things are required to get the app up and running.

markup : * In the root of the api folder create a `.env` file and add the following information
			* SECRET= <-This should contain a secret string of characters, for example "This is my secret string".
			* MONGO_URI= <-This should contain the `uri` for your `mongodb` database.
			* SECRETCODE= <-This should container the secret password used to create admin acounts through the registration.

## Functionality

This portfolio application has multiple functionality.
markup : * Login & Admin registration.
* CRUD functionality, create, read, update and delete posts as well as editing homepage, about and social link information.
* Image uploads.
* Admin Dashboard.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Production

Running `ng build` will create a dist folder within the api and will serve the angular frontend from `http://localhost:3000/` Image upload only works on the production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Todo 

markup : * Custom quill editor.
		* Improve responsive.
		

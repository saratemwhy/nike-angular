# NikeAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Get started

### Install npm packages
Install the `npm` packages described in the `package.json` and verify that it works:
```
npm install
```
```
npm start
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Json server

Install JSON Server globally with the following command:
```
npm install -g json-server
```

### Create a `db.json` file:

In the root of the project directory, create a file named db.json and add initial data in JSON format with these structure:
``` json
{
  "prodotti": [
  ],
  "carrello": [
  ]
}

```
In the "prodotti" section copy and paste the json file provided in the repository file.

### Start json server:

Run the following command to start the JSON server on port 3000:

```
json-server --watch db.json --port 3000
```
Run the application with `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

##Description


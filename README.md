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

## Project Description
This project is an Angular application that replicates the Nike website interface, developed using Angular, TypeScript, and Bootstrap. It is my second project and includes a JSON server for managing purchases, providing a comprehensive experience in building dynamic web applications.

### Features
* Navigation Bar: A functional navigation bar that allows users to explore various sections of the site, mimicking the original Nike website's structure.
* Homepage Display: A showcase of products with images, descriptions, and prices, designed to reflect Nike's branding and style.
* Filter Options: Users can filter products by category, price range, and color to easily find what they are looking for.
* Product Detail Page: Provides detailed information for a selected product, enabling users to choose size and color before adding to the cart.
* JSON Server Integration: Implements a local JSON server to handle data storage for product listings and purchases, allowing for CRUD operations without a separate backend service.
* Shopping Cart Functionality: Users can add items to their cart, view a popup summary upon adding items, and manage their cart by removing or adding items and recalculating totals.
* Registration and Payment Form: A reactive form with regex for managing user data and processing payments.
* Thank You Page: A thank you page displayed after the payment process is completed.

  
### Technologies used
* Angular
* Typescript
* HTML5
* CSS3
* Bootstrap



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is implemented using React.js (16.8), Node.js and PostgreSQL.This single page application that is responsive and fit all device screen (e.g. mobile, tablet and web).

To view the functional website: https://happyshopdemo.herokuapp.com/

## Before running

In the project directory, you need to run:

### `npm install`

In the client directory (> cd client), you need to run:

### `npm install`

## Run project

Go back to project directory (e.g. > happyshop), and run:

### `yarn dev`

This will launch the React app and run the server at the same time.


## Run test

### `npm test`

Launches the test runner in the interactive watch mode.

# Documentation

Happy shop is an e-commerce retailer specializing in beauty products.

## Frontend

Functionalities include:
- Show a listing of multiple products
- Show details of a single product
- Show a product detail page for a single product upon clicking on one (e.g. product title)
- Show the total number of products
- Have a feature to filter products by price range 
- Have a feature to sort products by price
- Have pagination

## Backend

In order to reduce the communication between frontend and backend server to improve user experience, only one API is implemented to get the list of products. Other functionalities are implemented in frontend side (e.g. sort, filter).

Functionalities include:
- Return product information (Name, Description, Price and Image)


### API Endpoints

To get the list of products: /api/products


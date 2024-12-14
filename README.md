Trade Project

This is a React-based project that provides a user-friendly interface to manage products, invoices, and reports. The application demonstrates core CRUD operations using React for the frontend and Axios for API integration. Bootstrap is used for styling, and the app is fully compatible with React Router for navigation.

Features

Products Management: View, filter, and add products with details like name, unit price, and description.
Invoices Management: View, filter, and create invoices by specifying type, date, and total amount.
Reports Generation: Generate sales, profits, or inventory reports based on date ranges.

Technologies Used:

Frontend: React
Styling: Bootstrap
API Integration: Axios
Routing: React Router DOM

Installation
Prerequisites

* Node.js (>= 14.x)
* npm (>= 6.x) or yarn

Install dependencies:

npm install
or
yarn install

Start the development server:

npm start
or
yarn start

Open the app in your browser at http://localhost:3000. 

Configuration

Backend URL

The backend API base URL is set in src/api/axiosInstance.js:

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

Replace http://localhost:8000/api with your backend URL as needed.

Usage

Products

Navigate to the "Products" page.

Filter products using the search bar.

Add a new product using the input fields and "Add Product" button.

Invoices

Navigate to the "Invoices" page.

Filter invoices by date or type.

Create a new invoice by filling out the form and clicking "Create Invoice."

Reports

Navigate to the "Reports" page.

Select a report type (Sales, Profits, Inventory).

Specify date ranges (start and end dates) for the report.

Click "Generate Report" to view the results.

Available Scripts

npm start

Runs the app in the development mode.

npm build

Builds the app for production.

npm test

Launches the test runner in the interactive watch mode.

npm eject

Ejects the default create-react-app configuration.

Dependencies

axios: For making HTTP requests.

bootstrap: For responsive and modern UI styling.

react-router-dom: For handling navigation and routing.

react-scripts: Create React App scripts.

Custom Styling

Custom styles are defined in styles.css to enhance the app's appearance, alongside Bootstrap classes.

Contribution

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix.

Commit your changes and push the branch.

Open a pull request to the main branch.

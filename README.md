# php_project
Product Management Web Application
Overview
This project is a PHP-based web application that allows users to manage product data dynamically. Users can add new products through a form, and the submitted data is stored in a JSON file. The application displays the data in a table, calculates total values, and dynamically updates the table using AJAX.

Features
1. Product Submission Form
The form collects product details:
Product Name
Quantity in Stock
Price per Item
Input validation ensures that required fields are filled.
2. Dynamic Data Storage
All submitted product data is saved in a data.json file in valid JSON format.
3. Interactive Table
Displays the following details for each product:
Product Name
Quantity in Stock
Price per Item
Datetime Submitted
Total Value (calculated as Quantity * Price).
Includes a Sum Total row showing the total of all "Total Value" numbers.
4. AJAX Integration
Form submission and table updates happen without refreshing the page, ensuring a smooth user experience.
5. Responsive Design
Styled with Twitter Bootstrap, the application works seamlessly on desktops and mobile devices.
Technologies Used
PHP: Backend server-side scripting for handling form submissions and data processing.
JSON: Data storage format for product records.
JavaScript/jQuery: For AJAX and dynamic content updates.
Bootstrap: Ensures responsive and visually appealing design.
HTML/CSS: Structure and custom styling.
How It Works
Submission Process:

The user fills in the product details in the form and submits it.
Data is sent via AJAX to submit.php, which saves it in data.json.
Fetching Data:

The webpage fetches data from fetch.php using AJAX and populates the table dynamically.
Table Calculation:

Each product’s total value (Quantity * Price) is calculated.
The sum total of all "Total Value" numbers is displayed in the last row.
Data Management:

All data persists in the data.json file.
Project Setup
Clone the repository:

bash
Copy code
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
Run the project using a local PHP server:

bash
Copy code
php -S localhost:8000
Open the application in your browser:

bash
Copy code
http://localhost:8000/index.php
Future Enhancements
Edit Functionality: Add the ability to edit existing product details.
Delete Functionality: Allow users to remove products.
Database Integration: Replace JSON storage with a database like MySQL for more scalability.
Export Data: Enable downloading the data in CSV or Excel format.
Repository Structure
graphql
Copy code
php-skills-test/
├── index.php          # Main frontend file with form and table
├── submit.php         # Handles form submissions and saves data
├── fetch.php          # Fetches data from data.json
├── data.json          # JSON file for storing submitted data
├── styles.css         # Custom styles
├── script.js          # JavaScript for AJAX and DOM manipulation
Demo Screenshot


![Screenshot 2024-12-08 150026](https://github.com/user-attachments/assets/49ec6ecf-a0a3-4dcf-b1c3-69b4046c6be0)










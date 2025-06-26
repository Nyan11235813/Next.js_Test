# Next.js Member Listing App
Welcome to my first Next.js project! This is a simple application to display a list of members, their details, and includes basic navigation and a custom 404 page.

## ✨ Features
* Homepage: A welcoming page with a mission and vision statement.
* About Us: Information about our fictional company, NetLink.Inc.
* Member Listing: Fetches and displays a list of members from a placeholder API.
* Member Details: Click on a member to view their individual details.
* Custom 404 Page: A friendly page for when a route isn't found, redirecting back to the homepage.
* Responsive Design: Styled with CSS modules and global styles for a clean look.

## 🛠️ Technologies Used
* Next.js: The React framework for production.
* React: For building the user interface.
* CSS Modules: For component-specific styling.
* Global CSS: For application-wide styles.

## 🚀 How to Run Locally
Follow these simple steps to get the project up and running on your machine:

### Clone the repository:
Bash :
* git clone [YOUR_REPOSITORY_URL_HERE]
* cd [YOUR_REPOSITORY_NAME]
* (Replace [YOUR_REPOSITORY_URL_HERE] and [YOUR_REPOSITORY_NAME] with your actual repository URL and name)

### Install dependencies:

Bash :
npm install

### OR

yarn install

### Run the development server:

Bash :
npm run dev

### OR

yarn dev

Open in your browser:
Open http://localhost:3000 with your browser to see the result.

You can start editing the pages by modifying files in the pages/ directory. The application will auto-update as you make changes.

## 📂 Project Structure
Here's a brief overview of the important files and folders:
```
pages/: Contains all application routes.
index.js: The homepage.
about.js: The about us page.
members/index.js: The main member listing page.
members/[id].js: Dynamic route to show individual member details.
404.js: The custom 404 error page.
_app.js: Initializes pages and applies global styles and layout.
comps/: Reusable React components (e.g., Layout.js, Navbar.js, Footer.js).
styles/: Contains CSS files.
globals.css: Global styles applied across the entire application.
Home.module.css: CSS module for the homepage.
Members.module.css: CSS module for the member listing and details pages.
```

## 🤝 Contributing
This is a personal project, but feel free to explore!

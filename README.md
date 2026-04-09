# React Food Shop Project

A responsive food shop application built with React, featuring a meal recipe browser powered by [TheMealDB API](https://www.themealdb.com/). Users can browse meal categories, view recipes, and search for their favorite dishes.

---

## ✨ Features

- Browse meal categories (Beef, Breakfast, Chicken, Dessert, etc.)
- View detailed meal recipes with ingredients and instructions
- Search functionality for meals
- Responsive design for all screen sizes
- Client-side routing with React Router
- Deployed on GitHub Pages

---

## 🛠 Tech Stack

- **React 18** - UI library
- **React Router DOM 6** - Client-side routing
- **Create React App** - Project scaffolding
- **TheMealDB API** - Meal recipe data source
- **CSS3** - Styling
- **gh-pages** - Deployment to GitHub Pages

---

## 📁 Project Structure

```
react-food-shop-project/
├── public/
│   ├── index.html              # HTML template
│   ├── manifest.json           # Web app manifest
│   ├── robots.txt              # Robots exclusion file
│   └── *.png, *.ico            # Static assets (favicon, logos)
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── CategoryItem.jsx    # Single category card
│   │   ├── CategoryList.jsx    # List of all categories
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Header.jsx          # Site header with navigation
│   │   ├── Meal.jsx            # Single meal card
│   │   ├── MealsList.jsx       # List of meals
│   │   ├── Preloader.jsx       # Loading indicator
│   │   └── Search.jsx          # Search input component
│   ├── pages/                  # Page components
│   │   ├── Home.jsx            # Homepage with categories
│   │   ├── About.jsx           # About page
│   │   ├── Contact.jsx         # Contact page
│   │   ├── Category.jsx        # Category filter page
│   │   ├── Recipe.jsx          # Single recipe detail page
│   │   └── NotFound.jsx        # 404 error page
│   ├── api.js                  # API service functions
│   ├── config.js               # API configuration (key & URL)
│   ├── App.js                  # Main app component & routing
│   ├── App.css                 # App-level styles
│   ├── index.css               # Global styles
│   └── index.js                # App entry point
├── .gitignore                  # Git ignore rules
├── package.json                # Project dependencies & scripts
├── package-lock.json           # Dependency lock file
└── README.md                   # This file
```

## 🔌 API Integration

The app uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch meal data.


# Pizza Heaven Application

**Pizza Heaven** is an interactive web application for customizing and ordering pizzas. Built with **React.js** and **Framer Motion**, it provides smooth animations and a delightful user experience, allowing users to choose pizza bases, toppings, and place an order seamlessly.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Project Structure](#project-structure)
- [License](#license)

---

## Project Overview

The **Pizza Heaven Application** is an application that leverages **React Router** for navigation and **Framer Motion** for animations. Users can:
- Select a pizza base.
- Add or remove toppings.
- Place an order and view the order summary.
- Restart the process with a modal prompt.

---

## Features

- Select from multiple pizza bases.
- Add or remove toppings dynamically.
- Interactive animations throughout the app.
- View a modal to restart the process after placing an order.
- Loader animation for enhanced user experience.

---

## Technologies Used

- **Frontend:**
  - React.js
  - Framer Motion (for animations)
  - React Router (for navigation)
- **Styling:**
  - CSS
- **Build Tool:**
  - Vite (for fast development and optimized production builds)

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anshuman-Jha-01/Pizza-Heaven.git
   cd pizza-heaven

2. **Install dependencies:**
    ```bash 
    npm install

3. **Start the development server:**
    ```bash 
    npm create vite
    npm run dev

4. **Open the application in your browser:**
    ```bash
      http://localhost:5173/

## Usage
1. Start on the Home Page:
    - Click the button to begin customizing your pizza.
2. Choose a Base:
    - Select from options like Classic, Thin & Crispy, or Thick Crust.
3. Add Toppings:
    - Select or deselect toppings like mushrooms, peppers, onions, and more.
4. Place Your Order:
    - View your pizza summary and toppings in the order page.
5. Restart:
    - Use the modal prompt to create a new pizza.

## Components
1. ```App.jsx```
  - Root component that renders the application.

2. ```Header.jsx```
  - Displays the application title with animations.

3. ```Home.jsx```
  - The landing page for the application.

4. ```Base.jsx```
  - Lets users choose a pizza base.

5. ```Toppings.jsx```
  - Allows users to add or remove toppings.

6. ```Order.jsx```
  - Displays the order summary.

7. ```Modal.jsx```
  - A modal that prompts users to restart the process.

8. ```Loader.jsx```
    - Adds a loader animation for a better user experience.

## Project Structure
  ```bash
    /src
    ├── components/
    │   ├── Header.jsx      # Header with animations
    │   ├── Home.jsx        # Home page
    │   ├── Base.jsx        # Choose pizza base
    │   ├── Toppings.jsx    # Add or remove toppings
    │   ├── Order.jsx       # Order summary
    │   ├── Modal.jsx       # Modal for restarting
    │   ├── Loader.jsx      # Loader animation
    ├── App.jsx             # Main app component
    ├── main.jsx            # Entry point for the React app
    ├── index.css           # Global styles
  ```

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

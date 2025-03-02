
# 🖥️ My Portfolio
- [🖥️ My Portfolio](#-my-portfolio)
  - [📋 About The Project](#-about-the-project)
  - [🌐 Live Demo](#-live-demo)
  - [Technologies](#technologies)
  - [📱 Features](#-features)
  - [🧩 Project Structure](#-project-structure)
  - [💡 Solutions provided in the app](#-solutions-provided-in-the-app)
  - [🚀 How to Run Locally](#-how-to-run-locally)
  - [📞 Contact](#-contact)
  - [📋 License](#-license)
## 📋 About The Project



Welcome to my personal portfolio website! This project showcases my frontend development skills, projects, and technologies I have worked with. It serves as both a demonstration of my capabilities and a space where I can experiment with new tools and concepts.

![Portfolio Preview](./src/assets/img/portfolio.gif)

## 🌐 Live Demo

Visit the live portfolio at [Live Demo](https://inen89.github.io/portfolio/)

##  Technologies

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: 
  - Framer Motion
  - Custom animation components (TextAnim, CursorBlinker)
- **Responsiveness**: 
  - Custom hooks (useMediaQuery)
  - React Intersection Observer
- **Forms**: React Hook Form
- **Navigation**: React Anchor Link Smooth Scroll
- **Deployment**: GitHub Pages
- **Code Quality**: ESLint
  
 ## 📱 Features
This portfolio highlights my ability to create interactive, user-friendly web applications with the following features:

- **Responsive Design**: Optimized for both desktop and mobile devices, ensuring a seamless experience across all screen sizes.
- **Hover Effects**: Enhances readability and accessibility by adding visual feedback on hover.
- **Interactive Modals**: Smooth, animated modals that appear when clicking buttons, powered by Framer Motion.
- **Smooth Scrolling Navigation**: Easy navigation between sections with smooth transitions, improving user experience and page flow.
- **Dynamic Navigation Highlighting**: Navigation items are highlighted based on the currently visible section, using React Intersection Observer to track section visibility as you scroll.
- **Form Validation**: Contact form with input validation, using React Hook Form for better reliability.
- **Form Handling**: Form submissions are handled using Formsubmit.co, allowing for easy contact form integration without needing a backend.
- **Minimalistic Sidebar**: Animated sidebar with dynamic updates as you scroll, keeping navigation intuitive and clean.
- **Section Organization**: Well-structured sections including Home, About Me, Skills, Projects, and Contact.

## 🧩 Project Structure

The project is organized as follows:

- **assets** - Static resources (images, JSON data)
- **components** - Reusable UI components (projects, modals)
- **hooks** - Custom React hooks
- **scenes** - Main page sections
- **MySkills** - Subdirectory for text components related to the MySkills component

## 💡 Solutions provided in the app

- **Modular Architecture**: Reusable components and custom hooks that enable easy content management and maintainability.
- **Smooth Scrolling**: Implemented smooth scrolling navigation between sections using the `react-anchor-link-smooth-scroll` library. This solution enhances user experience by providing a fluid and seamless transition between sections as the user scrolls, eliminating abrupt jumps when navigating.
- **Form Validation**: Utilized `react-hook-form` for input validation in the `Contact.jsx` form, ensuring reliable user inputs.
- **Form Handling with Formsubmit.co**: Integrated Formsubmit.co to handle form submissions directly, providing a simple, no-backend solution for sending form data to email.
- **Portal Usage**: Applied `createPortal` to render modals outside the normal DOM hierarchy, improving component organization and performance.
- **Custom Tailwind Theme**: Created a custom theme for consistent styling across the app, including custom colors, gradients, shadows, animations, and responsive design features.
- **Media Query Hook**: Developed the `useMediaQuery` custom hook to handle responsive design based on screen size, ensuring better adaptability.
- **Dynamic Navigation Highlighting**: Used react-intersection-observer` to track section visibility and update the navigation highlight dynamically as the user scrolls, improving the navigation experience.

## 🚀 How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/inen89/portfolio.git
   ```

2. Navigate to the project directory
   ```bash
   cd portfolio
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open in your browser
   ```
   http://localhost:5173
   ```


## 📞 Contact

If you have questions or want to get in touch:

   [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/glos/)     [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/inen89)

## 📋 License

This project is available under the [MIT License](./LICENSE). See the `LICENSE` file for more details.



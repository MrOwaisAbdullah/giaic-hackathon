# Next.js Tailwind E-Commerce Website

A pixel-perfect, responsive e-commerce website built using **Next.js**, **Tailwind CSS**, and **ShadCN UI**. This project includes key features like a dynamic navigation menu, reusable components, and several functional pages such as a shop, product details, cart, and FAQ.

## Features

### Pages:
- **Home Page**: Includes a Hero section, Products, Header, and Footer.
- **Shop Page**: Displays a grid of products with dynamic product cards.
- **Single Product Page**: Shows detailed information about a product.
- **Cart Page**: Lists items added to the cart.
- **FAQ Page**: Provides answers to frequently asked questions.

### Components:
- **Dynamic Product Card**: Displays product information dynamically.
- **Responsive Navigation Menu**: Built using ShadCN Drawer, customized for better user experience.

## Technologies Used
- **Next.js**: Framework for building the app.
- **Tailwind CSS**: For styling and responsiveness.
- **Custom CSS**: Added global default styles in `globals.css`.
- **ShadCN UI**: Used for creating a responsive drawer for the navigation menu.

## Problems Faced and Solutions

### 1. Dynamic Images Not Showing After Deployment
- **Problem**:
  During development, I used dynamic images as background images in CSS. While it worked locally, the images failed to load in the deployed environment. This issue occurred because CSS does not support dynamic imports for `background-image` properties, causing the paths to break during the build process.
- **Solution**:
  I removed the dynamic background images from CSS and replaced them with Next.js's `<Image />` component. This ensured proper handling and optimization of images, and paths were correctly resolved during deployment.

### 2. Dynamic Images in Product Cards
- **Problem**:
  For the product cards, I wanted to dynamically load images from product data. However, Next.js's `<Image />` does not allow dynamic imports directly, leading to rendering issues.
- **Solution**:
  To resolve this, I imported all required images statically in the component file, mapping product data to these imports. For example:
  ```js
  import product1 from "../../Public/product1.png"
  import product3 from "../../Public/product3.png"
  ```
  Then, I mapped these static imports to the product data dynamically during rendering.

### 3. Drawer Not Closing on Navigation
- **Problem**:
  The ShadCN drawer component for the responsive navigation menu did not close automatically when a navigation link was clicked. This caused a poor user experience.
- **Solution**:
  I added an `onClick` handler to each navigation link inside the drawer to close the drawer upon navigation. Example:
  ```jsx
            <Link
              href="/"
              className="mr-9 text-sm  text-[#636270] active:text-primary hover:text-primary"
              onClick={closeDrawer}
            >
              Home
            </Link>
  ```
  This ensured the drawer closed seamlessly when the user clicked any link.


## Setup Instructions

### Prerequisites
- Node.js (Latest LTS version)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd project-directory
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment
The project is deployed on Vercel. Visit the live demo [https://giaic-hackathon-kohl.vercel.app/](https://giaic-hackathon-kohl.vercel.app/).

To deploy your own version:
1. Create a Vercel account.
2. Link the GitHub repository to Vercel.
3. Deploy with a single click using Vercel's UI.

## Evaluation Criteria
1. **Pixel-perfect Implementation**: Adhered closely to the assigned Figma template.
2. **Responsiveness**: Verified design across multiple screen sizes and devices.
3. **Code Quality**: Modular, clean, and well-documented.

## Credits
- Developed by: **Owais Abdullah**
- Deployed on: **Vercel**

---

Feel free to explore the live demo and repository. If you encounter any issues, open a GitHub issue or reach out to me directly.

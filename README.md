# Simple E-commerce Website

This project is a frontend implementation of a simple e-commerce website, where all API endpoints are provided by [dummyjson.com/docs](https://dummyjson.com/docs) features include two main pages, popups for the cart and wishlist, and persistent cart and wishlist data.

## Features

### Pages

#### 1. Homepage

- Initial landing page with a mix of static and dynamic content.
- Dynamic product list section from [dummyjson.com/products](https://dummyjson.com/products).
- Pagination on the same page by clicking "Load More Products" without refreshing.
- Responsive design with static header, footer, and additional sections.

| Demo 1                       | Demo 2                       |
| ---------------------------- | ---------------------------- |
| ![Demo 1](public/demo-1.gif) | ![Demo 2](public/demo-2.gif) |

#### 2. Product Details Page

- Dynamic and static sections.
- Product content fetched from [dummyjson.com/products/{id}](https://dummyjson.com/products/{id}).
- Best-seller product section (same as homepage but not paginated).
- Users can add products to their cart and wishlist with snackbar confirmation messages.
- Buttons are disabled after adding items to the cart or wishlist.

### Popups

#### 1. Cart Popup

- Accessible from the header.
- Displays the user's cart with the total amount.
- Allows users to manage quantities and remove items.

#### 2. Wishlist Popup

- Similar to the cart popup, displaying items added to the wishlist.
- Users can remove items from their wishlist.

| Demo 3                       | Demo 4                       |
| ---------------------------- | ---------------------------- |
| ![Demo 3](public/demo-3.gif) | ![Demo 4](public/demo-4.gif) |

### Data Persistence

- Cart and wishlist data are persistent across page refreshes or reopenings.

## How to Run

1. Clone the repository.

```bash
https://github.com/Chizaram-Igolo/next-basket-ecommerce.git
```

2. Open the project in your preferred code editor.

```bash
npm install
```

3. Run the application.

```bash
npm run dev
```

# Project Task List

- [x] **Home Page**
- [x] **Product Page**
- [x] **API Consumption**
- [x] **Same Page Pagination ("Show More Products")**
- [x] **Uses Next.js, Redux Toolkit, Material UI, etc.**
- [x] **Cart Functionality (Create, Read, Update, Delete)**
- [x] **Wishlist Functionality (CRUD)**
- [x] **Data Persistence**
- [x] **Snackbar Notification**

# Project Dependencies

- [@mui/material](https://www.npmjs.com/package/@mui/material)
- [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)
- [typescript](https://www.npmjs.com/package/typescript)

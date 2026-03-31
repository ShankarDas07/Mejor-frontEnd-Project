# 🍔 Swiggy Clone — Full Stack Frontend Project

> A pixel-perfect, feature-rich clone of Swiggy built with React.js — showcasing real-world frontend engineering skills including Redux state management, client-side routing, API integration, shimmer loading UX, and dynamic filtering.

---

## 📌 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Features](#3-features)
4. [Folder Structure](#4-folder-structure)
5. [React Hooks Used](#5-react-hooks-used)
6. [State Management — Redux Toolkit](#6-state-management--redux-toolkit)
7. [API Handling](#7-api-handling)
8. [Component Architecture](#8-component-architecture)
9. [Styling Approach](#9-styling-approach)
10. [Performance Optimization](#10-performance-optimization)
11. [How to Run the Project](#11-how-to-run-the-project)
12. [Future Improvements](#12-future-improvements)
13. [Conclusion](#13-conclusion)

---

## 1. Project Overview

This is a **frontend clone of Swiggy** — India's leading food delivery platform — built entirely in **React.js**. The project replicates the core user experience of Swiggy including browsing restaurants, viewing menus, filtering food, searching within a restaurant, adding items to cart, and viewing a detailed bill summary.

### What it replicates from real Swiggy

- The **Home page** with food category options, grocery options, and Dineout restaurant cards
- The **Restaurant listing page** with live-looking cards showing ratings, delivery time, and cuisines
- The **Restaurant menu page** with collapsible sections, veg/non-veg filters, and a Top Picks carousel
- The **Search page** for searching dishes within a specific restaurant
- The **Cart & Checkout page** with itemized bill, GST calculation, and delivery fee

### Who can use it and why it is valuable

- **Students & developers** learning React.js, Redux Toolkit, and React Router can use this as a reference project
- **Interviewees** can showcase it as a portfolio project demonstrating production-level component design
- It demonstrates how a real-world SPA (Single Page Application) is structured with routing, global state, and API data

---

## 2. Tech Stack

| Technology | Purpose |
|---|---|
| **React.js (v18+)** | Core UI library, component-based architecture |
| **React Router DOM v6** | Client-side navigation, nested routes, dynamic route params |
| **Redux Toolkit** | Global state management for cart |
| **React Redux** | Connecting Redux store to React components |
| **Tailwind CSS** | Utility-first CSS for all styling |
| **JavaScript (ES6+)** | Async/await, destructuring, optional chaining, array methods |
| **GitHub Raw JSON** | Static JSON files hosted on GitHub act as a mock API (Swiggy's real API is CORS-blocked) |

### Why GitHub JSON instead of Swiggy's real API?

Swiggy's real API (`swiggy.com/dapi/...`) is **CORS-blocked** in browser environments. To work around this without a backend, the real API responses were captured, saved as JSON files, and uploaded to GitHub. The app fetches these files using `fetch()` — simulating real API calls perfectly.

---

## 3. Features

### 🏠 Home Page (`Home.js`)
- Full **Swiggy-style header** with orange background, hero image decorations, delivery location input, and search bar
- **FoodOption section** — Swiggy Instamart grocery category images fetched from static data
- **GroceryOption section** — Horizontally scrollable food option cards
- **RestaurantsDineout section** — Horizontally scrollable dineout restaurant cards with offer badges and bank offer UI
- **Footer** — Full Swiggy footer replica with social links, app store buttons, city list, and legal links

### 🍽️ Restaurant Listing Page (`FoodDeliveryAvailableRestu.js`)
- Fetches restaurant data from GitHub-hosted JSON (mirrors the real Swiggy API structure)
- Displays a **responsive grid of restaurant cards** using `RestCard.js`
- Each card shows: restaurant image, name, star rating, delivery time, cuisines, and area
- Implements **Shimmer Effect** — while data loads, skeleton cards are shown instead of a blank screen

### 🔍 Search Page (`Search.js`)
- Accessible via `/city/Kolkata/:id/search` route
- Fetches the same restaurant menu data and **flattens all dish arrays** into one list using `flatMap()`
- **Real-time search** — filters dishes as the user types (no button click needed)
- Uses `useParams()` to get the restaurant ID from the URL and fetch the correct menu

### 📋 Restaurant Menu Page (`ResturentMenu.js`)
- Accessible via `/city/Kolkata/:id`
- Fetches menu data for a specific restaurant using the `:id` URL param
- Renders **collapsible menu sections** — each section shows item count and can be toggled open/closed
- Supports a **Top Picks horizontal carousel** for featured items
- Supports **nested categories** — sections that contain sub-sections are rendered recursively

### 🥗 Veg / Non-Veg Filter (`ResturentMenuCard.js`)
- Two filter buttons: **Veg** and **Non Veg**
- Toggle behavior: clicking the same filter again deselects it (null state)
- Veg filter: shows items where `isVeg === 1`
- Non-Veg filter: shows items where `isVeg` is falsy
- Filter state is lifted to `ResturentMenu.js` and passed down as a prop

### 🛒 Add to Cart (`Recomanded.js`, `TopPicks.js`)
- Each menu item has an **ADD** button
- On click, it becomes a **quantity counter** (`-` / count / `+`) without page reload
- Cart state is managed in **Redux global store**, so count persists across page navigation
- `useSelector` reads the current quantity from the store to keep the UI in sync
- `useDispatch` sends `addItems`, `incrementItems`, `decrementItems` actions to the reducer

### 🧾 Cart Checkout Page (`CartCheckout.js`)
- Accessible via `/CartCheckout`
- Reads all cart items from Redux store using `useSelector`
- Dynamically calculates: **Item Total**, **Delivery Fee (₹36)**, **GST (5%)**, and **Total to Pay**
- Shows the restaurant image, name, and an itemized list of all added items

### 🔄 Shimmer Loading Effect (`ShimmerEffect.js`)
- When restaurant data is being fetched (i.e., `RestuData.length === 0`), the shimmer grid is shown
- This is a **conditional rendering** technique — a much better UX than showing a blank page or spinner

---

## 4. Folder Structure

```
src/
├── Components/
│   ├── Header.js               # Home page hero header with logo, nav, search
│   ├── Home.js                 # Root home page — composes all home sections
│   ├── SecondaryHome.js        # Layout shell for inner pages (header + Outlet)
│   ├── RestaurantsHeader.js    # Sticky nav for inner pages with cart counter
│   ├── FoodDeliveryAvailableRestu.js  # Restaurant listing grid page
│   ├── RestCard.js             # Individual restaurant card (listing page)
│   ├── ResturentMenu.js        # Restaurant menu page
│   ├── ResturentMenuCard.js    # Recursive menu section renderer
│   ├── Recomanded.js           # Individual menu item card with add/remove
│   ├── TopPicks.js             # Carousel item card for featured dishes
│   ├── Search.js               # Real-time dish search page
│   ├── CartCheckout.js         # Cart summary and bill details page
│   ├── ShimmerEffect.js        # Skeleton loading UI for restaurant grid
│   ├── FoodOption.js           # Instamart grocery category section
│   ├── GroceryOption.js        # Food options horizontal scroll section
│   ├── RestaurantsDineout.js   # Dineout section on home page
│   ├── DineCard.js             # Individual dineout restaurant card
│   └── Footer.js               # Full footer with social links and app download
│
├── Stored/
│   ├── CartSlice.js            # Redux slice — cart state, actions, reducers
│   └── Stores.js               # Redux store configuration
│
├── Utils/
│   ├── FoodData.js             # Static data for FoodOption (Instamart categories)
│   ├── Grocery.js              # Static data for GroceryOption section
│   └── Restaurants.js          # Static data for Dineout restaurant cards
│
└── App.js                      # Root component — routes, Provider setup
```

### Why this structure? (Interview explanation)

- **`Components/`** — All UI components live here. This makes the codebase navigable and each file has a single responsibility (Single Responsibility Principle).
- **`Stored/`** — Redux-related files are isolated here. Keeping state logic separate from UI logic follows separation of concerns.
- **`Utils/`** — Static/mock data and helper files. This avoids hardcoding data inside components, making components pure and data-agnostic.
- **`App.js`** — Only routing and Provider setup live here. No business logic. Clean entry point.

---

## 5. React Hooks Used

### `useState`

**Where used:** `FoodDeliveryAvailableRestu.js`, `ResturentMenu.js`, `ResturentMenuCard.js`, `Search.js`, `TopPicks.js`

**Why used:** To manage local component state — data fetched from API, open/close toggle for menu sections, veg/non-veg filter selection, search text input, and item quantity in `TopPicks`.

**Interview explanation:** `useState` gives a component its own memory. When state changes, React re-renders the component with the new value. It does not persist across route changes — that is why cart state was moved to Redux.

```js
// Example from ResturentMenu.js
const [RestuData, setRestuData] = useState([]);
const [selected, setVegSelected] = useState(null);
```

---

### `useEffect`

**Where used:** `FoodDeliveryAvailableRestu.js`, `ResturentMenu.js`, `Search.js`

**Why used:** To trigger async API calls after the component mounts. The empty dependency array `[]` ensures the fetch runs only once — on mount.

**Interview explanation:** `useEffect` handles side effects — anything that talks to the outside world (APIs, timers, DOM). It runs after the render, not during it, which is why it is safe for async calls.

```js
// Example from FoodDeliveryAvailableRestu.js
useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://raw.githubusercontent.com/...");
        const dataFetch = await response.json();
        setRestuDta(dataFetch?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    fetchData();
}, []);
```

---

### `useParams`

**Where used:** `ResturentMenu.js`, `Search.js`

**Why used:** To extract the dynamic `:id` from the URL (e.g., `/city/Kolkata/12345`) and use it to fetch the correct restaurant's menu from the API.

**Interview explanation:** `useParams` is a React Router hook. It reads URL parameters defined in the route path (`/city/Kolkata/:id`) and returns them as an object. This is how the same component renders different data for different restaurants.

```js
// Example from ResturentMenu.js
const { id } = useParams();
// URL: /city/Kolkata/98765 → id = "98765"
```

---

### `useSelector`

**Where used:** `RestaurantsHeader.js`, `Recomanded.js`, `TopPicks.js`, `CartCheckout.js`

**Why used:** To read data from the Redux store inside a component. When the store updates, `useSelector` automatically triggers a re-render.

**Interview explanation:** `useSelector` subscribes the component to the Redux store. It is like a live wire — when the store changes, the component re-renders with the latest data. This is how the cart counter in the header updates instantly when you add an item in the menu page.

```js
// Example from RestaurantsHeader.js
const counter = useSelector(state => state.cartSlice.count);
```

---

### `useDispatch`

**Where used:** `Recomanded.js`, `TopPicks.js`

**Why used:** To send actions to the Redux store — `addItems`, `incrementItems`, `decrementItems`.

**Interview explanation:** `useDispatch` gives you access to Redux's `dispatch` function inside a component. You call `dispatch(actionCreator(payload))` and Redux takes care of updating the store.

```js
// Example from Recomanded.js
const dispatch = useDispatch();
dispatch(addItems(items));       // First time add
dispatch(incrementItems(items)); // + button
dispatch(decrementItems(items)); // - button
```

---

## 6. State Management — Redux Toolkit

### Why Redux and not just `useState`?

`useState` is local — it resets when you navigate away from a component. For a cart, we need state that **persists across page navigations** and is **accessible from any component** (menu page, header counter, checkout page). Redux provides a single global store for this.

### Redux Flow (Full Lifecycle)

```
User clicks ADD button
        ↓
dispatch(addItems(items)) called in Recomanded.js
        ↓
Redux creates action: { type: "cartSlice/addItems", payload: items }
        ↓
CartSlice reducer runs → state.itemsObj.push({...items, quantity: 1}), state.count++
        ↓
Redux Store updates with new state
        ↓
All useSelector() subscribers re-render with new data
        ↓
Cart counter in header updates, ADD button becomes quantity counter
```

### CartSlice (`CartSlice.js`)

```js
const cart = createSlice({
    name: "cartSlice",
    initialState: { itemsObj: [], count: 0 },
    reducers: {
        addItems: (state, actions) => {
            state.itemsObj.push({ ...actions.payload, quantity: 1 });
            state.count++;
        },
        incrementItems: (state, actions) => {
            const element = state.itemsObj.find(item => item.id === actions.payload.id);
            element.quantity += 1;
            state.count++;
        },
        decrementItems: (state, actions) => {
            const element = state.itemsObj.find(item => item.id === actions.payload.id);
            if (element.quantity > 1) {
                element.quantity -= 1;
            } else {
                state.itemsObj = state.itemsObj.filter(item => item.id !== actions.payload.id);
            }
            state.count--;
        }
    }
});
```

**Key design decisions:**
- `itemsObj` is an array of cart items. Each item gets a `quantity` field added via spread operator.
- `count` is a separate integer tracking total number of items for the header badge.
- `decrementItems` removes the item entirely when quantity reaches 0, using `filter()`.
- Redux Toolkit uses **Immer** under the hood — we can write mutating code (`state.count++`) and Immer creates an immutable update internally.

### Store (`Stores.js`)

```js
export const Store = configureStore({
    reducer: { cartSlice: cardReader }
});
```

The store is wrapped around the entire app in `App.js` using `<Provider store={Store}>` — this makes the store accessible to every component in the tree.

---

## 7. API Handling

### The CORS Problem and Solution

Swiggy's real API is CORS-blocked when called from a browser. The solution used in this project:

1. Captured real API responses from Swiggy
2. Saved them as `.json` files
3. Uploaded to a public GitHub repository
4. Fetched using GitHub's raw content URL

This simulates a real API call with authentic Swiggy data structure.

### Fetch Pattern Used

```js
// From FoodDeliveryAvailableRestu.js
useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://raw.githubusercontent.com/ShankarDas07/.../FoodDeliveryAvailableRestu.json");
        const dataFetch = await response.json();
        setRestuDta(dataFetch?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    fetchData();
}, []);
```

### Loading State Handling

When data has not arrived yet (`RestuData.length === 0`), the component renders `<ShimmerEffect>` instead of the actual grid. This is conditional rendering used for a skeleton loading UI.

```js
if (RestuData.length === 0) {
    return <ShimmerEffect />;
}
```

### Dynamic Menu Fetch by Restaurant ID

The restaurant menu page uses `useParams()` to get the `:id` from the URL and appends it to the GitHub raw JSON URL:

```js
const response = await fetch(
    `https://raw.githubusercontent.com/ShankarDas07/.../ResturentMenuData/${id}.json`
);
```

This means each restaurant has its own JSON file stored on GitHub, mimicking a real REST API endpoint.

---

## 8. Component Architecture

### Smart (Container) Components — handle logic and state

| Component | Responsibility |
|---|---|
| `FoodDeliveryAvailableRestu.js` | Fetches restaurant list, manages loading state |
| `ResturentMenu.js` | Fetches menu data, manages veg/non-veg filter state |
| `Search.js` | Fetches menu, manages search text and filtered results |
| `CartCheckout.js` | Reads Redux store, calculates bill totals |
| `Recomanded.js` | Dispatches Redux actions, reads cart state |

### Dumb (Presentational) Components — only render UI from props

| Component | Responsibility |
|---|---|
| `RestCard.js` | Renders a single restaurant card from props |
| `DineCard.js` | Renders a dineout card with offer badges |
| `ResturentMenuCard.js` | Renders a menu section (recursive for nested categories) |
| `TopPicks.js` | Renders a carousel item card |
| `ShimmerEffect.js` | Renders skeleton loading cards |
| `Footer.js` | Static footer UI |

### Recursive Component — `ResturentMenuCard.js`

This component handles three distinct data structures from the Swiggy API:

- If the card has **`categories`** → render it as a parent section and recursively call itself for each child
- If the card has **`carousel`** → render a horizontal scrollable `TopPicks` list
- Otherwise → render a standard collapsible section with `Recomanded` items

This pattern avoids duplicating code and elegantly handles Swiggy's deeply nested menu structure.

### Nested Routing — `SecondaryHome.js`

`SecondaryHome` acts as a **layout component** using React Router's `<Outlet>`. It renders the sticky `RestaurantsHeader` and then renders whatever child route matches via `<Outlet>`. This avoids copy-pasting the header into every inner page component.

```js
// SecondaryHome.js
export default function SecondaryHome() {
    return (
        <>
            <RestaurantsHeader />
            <Outlet /> {/* child route renders here */}
        </>
    );
}
```

---

## 9. Styling Approach

### Tailwind CSS (Utility-First)

The entire project is styled with **Tailwind CSS**. No separate CSS files were created — all styles are applied as utility classes directly in JSX.

**Why Tailwind?**
- No context switching between JSX and CSS files
- Built-in responsive utilities (`md:`, `lg:` prefixes)
- Consistent design tokens (spacing, colors, shadows)
- Smaller production bundle (purges unused styles)

### Key styling patterns used

- **Flexbox layouts** — `flex`, `items-center`, `justify-between` for nav and card layouts
- **Sticky header** — `sticky top-0 z-10 bg-white shadow-md` on `RestaurantsHeader`
- **Hover animations** — `hover:scale-95 transform transition duration-200` on restaurant cards
- **Horizontal scroll** — `flex flex-nowrap overflow-x-auto` for carousels
- **Absolute positioning** — Used for the ADD/quantity button overlaid on food item images
- **Responsive width** — `w-[60%]`, `w-[80%]` with `mx-auto` for centered layouts

---

## 10. Performance Optimization

### Shimmer Effect (Perceived Performance)

Instead of showing a blank screen or spinner while the API fetches data, skeleton cards (gray block placeholders) are shown. This is called **shimmer loading** and is a standard pattern used by Swiggy, LinkedIn, Facebook, etc.

```js
// FoodDeliveryAvailableRestu.js
if (RestuData.length === 0) {
    return <ShimmerEffect />;
}
```

**Interview explanation:** Shimmer loading improves **perceived performance**. Even though the actual load time is the same, users feel the app is faster because something is on screen immediately.

### Conditional Rendering for Filter

Instead of loading a new dataset when the veg/non-veg filter is applied, the filter works on **already-fetched data** using JavaScript's `.filter()` method. No extra API calls are made.

```js
// ResturentMenuCard.js
manuItems?.itemCards?.filter(item => item?.card?.info?.isVeg === 1)
```

### `key` Prop on Lists

Every `.map()` rendering uses a unique `key` prop — restaurant ID, item ID, or title. This helps React's **reconciliation algorithm** efficiently diff the virtual DOM and only re-render changed items.

### Real-Time Search Without Debounce

The search in `Search.js` filters on every keystroke using `onChange`. For a local filter on an already-fetched array, this is efficient enough. For a real production app with server-side search, **debounce** (`setTimeout` or `lodash.debounce`) would be added to reduce API calls.

### No Unnecessary Re-renders in Cart

In `Recomanded.js`, instead of using local `useState` for the count (which would reset on navigation), `useSelector` reads the quantity directly from the Redux store. This ensures the cart state is single source of truth and components only re-render when their specific slice of state changes.

---

## 11. How to Run the Project

### Prerequisites

- Node.js (v16 or above)
- npm or yarn

### Steps

```bash
# Step 1: Clone the repository
git clone https://github.com/ShankarDas07/Mejor-frontEnd-Project.git

# Step 2: Navigate to the project folder
cd Mejor-frontEnd-Project

# Step 3: Install all dependencies
npm install

# Step 4: Start the development server
npm start
```

The app will open at `http://localhost:3000` in your browser.

### Dependencies installed by `npm install`

- `react`, `react-dom`
- `react-router-dom` (v6)
- `@reduxjs/toolkit`
- `react-redux`
- `tailwindcss`

---


## 12. Deployment

The project is deployed on Netlify using GitHub integration for continuous deployment.

### 🔗 Live Site

https://swiggyshankardas.netlify.app

---

### ⚙️ Deployment Setup

* Connected GitHub repository to Netlify
* Configured build settings for Parcel:

```bash
Build Command: npx parcel build Src/index.html
Publish Directory: dist
```

* Every push to the `main` branch triggers an automatic deployment

---

### 🐞 Problems Faced & Solutions

#### 1. ❌ 404 Error on Page Refresh (SPA Routing Issue)

* When refreshing a route like `/restaurant/:id`, Netlify returned a **404 Page Not Found**
* This happens because Netlify tries to find a physical file for that route instead of letting React handle it

✅ **Solution:**

* Added `netlify.toml` file with redirect rules:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

👉 This ensures all routes are redirected to `index.html`, allowing React Router to handle navigation.

---

#### 2. ❌ Incorrect Build Configuration

* Initially, Netlify was not aware of the correct entry file and output directory
* This caused routing and asset issues

✅ **Solution:**

* Set correct build command:

  ```
  npx parcel build Src/index.html
  ```
* Set publish directory:

  ```
  dist
  ```

---

#### 3. ❌ Redirect Rules Not Working

* `_redirects` file was initially placed in the wrong location
* Netlify build (Parcel) did not include it in the final build output

✅ **Solution:**

* Switched to using `netlify.toml` instead of `_redirects`
* This ensures reliable routing configuration at the platform level

---

### ✅ Final Result

* All routes work correctly
* Page refresh works on both mobile and desktop
* No more 404 errors
* Fully functional SPA deployment

---

### 💡 Key Learning

* Understanding how **SPA routing works in static hosting environments**
* Importance of correct **build configuration**
* Using **Netlify redirects to handle client-side routing**
* interview line : “I resolved SPA routing issues in Netlify by configuring redirects using netlify.toml and setting proper Parcel build settings.”



---
## 13. Future Improvements

| Feature | Description |
|---|---|
| **User Authentication** | Add login/signup with JWT or Firebase Auth. Show "My Orders" after login. |
| **Payment Integration** | Integrate Razorpay or Stripe for simulated order placement |
| **Backend Integration** | Build a Node.js + Express backend to serve restaurant and menu data instead of GitHub JSON |
| **Database** | Store orders, users, and restaurants in MongoDB |
| **Debounced Search** | Add debounce to the search input to avoid filtering on every single keystroke |
| **Persistent Cart** | Use `localStorage` or a backend to persist cart items across browser sessions |
| **Order Tracking Page** | Add a mock real-time order tracking page after checkout |
| **Responsive Mobile UI** | Optimize the layout fully for mobile screens with Tailwind's responsive utilities |
| **Error Boundaries** | Add React Error Boundaries to handle failed API fetches gracefully |
| **Unit Testing** | Add Jest + React Testing Library tests for Cart reducer and key components |

---

## 13. Conclusion

### What I learned building this project

- How to architect a **multi-page React SPA** with nested routing using React Router v6
- How **Redux Toolkit** simplifies global state management — actions, reducers, slices, Immer
- How to handle **CORS-blocked APIs** in frontend-only projects using GitHub as a JSON host
- The real Swiggy API's **deeply nested JSON structure** and how to extract useful data from it
- How to build **recursive components** to handle variable-depth data structures
- The importance of **UX patterns** like shimmer loading, real-time search, and toggle filters
- How to keep **components clean and focused** — separating smart (logic) and dumb (presentational) components

### Why this project is valuable for interviews

This project demonstrates skills that are directly relevant to product-based company interviews:

- **React fundamentals** — hooks, component lifecycle, conditional rendering, lists and keys
- **State management** — Redux Toolkit with a real use case (cart), not just a todo app
- **Routing** — nested routes, dynamic params, layout components with Outlet
- **API integration** — async/await, useEffect, loading states
- **Code organization** — clear folder structure, separation of concerns
- **Problem solving** — working around CORS, handling nested API data, recursive rendering

> This is not a tutorial copy-paste project. Every component was built from scratch by analyzing Swiggy's real UI and data structure — making it a strong demonstration of real-world frontend thinking.

---

*Built with ❤️ using React.js | Redux Toolkit | React Router v6 | Tailwind CSS*

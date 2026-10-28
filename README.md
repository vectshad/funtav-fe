# FunTav – Travel Package Booking (Frontend)

React single-page app for **FunTav**, a small travel and tour booking site. Users register, log in, browse tour packages, order them, and send requests for custom trips.

Built in late 2021 – early 2022. The backend lives in [funtav-be](https://github.com/vectshad/funtav-be).

<!-- Screenshot: add an image at docs/screenshot.png and uncomment the line below -->
<!-- ![FunTav home page](docs/screenshot.png) -->

## Tech stack

- React 17 (Create React App)
- React Router v6
- React Bootstrap / Bootstrap 5
- Axios for REST calls
- react-paginate
- Firebase Hosting (the automatic GitHub Actions deploy was removed because its credentials no longer work)

## Features

- **Register / log in**: name, email, username and password, sent to the backend API
- **Protected routes**: pages other than login and register redirect if you're not logged in
- **Package list**: paginated list of tour packages (5 per page), with an order button
- **My Packages**: paginated list of the packages the logged-in user has ordered
- **Custom package request**: form for budget, city, transport, lodging, food preference, tour, schedule, number of people and medical notes
- **About Us** page

## Run locally

Requires Node.js and npm.

```bash
npm install
npm start
```

The app opens at http://localhost:3000.

## Project structure

```
src/
  components/   Pages and shared components (Home, Login, Register, MyPackages, CustomPackage, AboutUs, Navbar, ProtectedRoute)
  styles/       CSS per component
```

## Status and known limitations

- The hosted frontend (https://funtav-dd7b6.web.app) still loads, but the API it calls (`funtav-api.herokuapp.com`) is offline since Heroku ended its free tier. Login and data loading don't work on the live site.
- The API base URL is hard-coded in each component instead of read from an environment variable.
- Login state is a flag in `localStorage`, so this isn't real authentication.

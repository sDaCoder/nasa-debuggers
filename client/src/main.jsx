import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./Layout";
import Home from "./components/Home";
import Get from "./components/Get";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='get' element={<Get />} />
      <Route path='products' element={<Products />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
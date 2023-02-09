import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Category/>
      <Pages/>
    </BrowserRouter>
  );
}

export default App;

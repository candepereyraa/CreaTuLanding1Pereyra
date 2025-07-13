import { useState } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponents.jsx';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetail.jsx';
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryId" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

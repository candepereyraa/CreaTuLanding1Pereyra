
import './App.css';
import HomeComponent from './components/HomeComponents.jsx';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ItemDetailContainer.jsx';
import ProductsList from "./components/ItemListContainer.jsx";
import NotFound from './components/Notfound.jsx';
import './firebaseConfig.js'
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext.jsx';





function App() {
  return (
    <>
       <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:categoryId" element={<ProductsList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    
    </>
  );

}

export default App;

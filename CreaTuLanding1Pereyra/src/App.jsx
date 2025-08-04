
import './App.css';
import HomeComponent from './components/HomeComponents.jsx';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetail.jsx';
import ProductsList from "./components/ProductsList";
import NotFound from './components/Notfound.jsx';
import './firebaseConfig.js'
import Cart from './components/Cart';



function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryId" element={<ProductsList />} />
        <Route path="*" element={<NotFound />} />
         <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );

}

export default App;

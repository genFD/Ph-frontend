import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import ProductDetailsPage from './pages/productDetailsPage/ProductDetailsPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import CartPage from './pages/cartPage/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/products/:id' element={<ProductDetailsPage />} />
        <Route path='/cart/*' element={<CartPage />} />
        {/* <Route path='/cart/:id' element={<CartPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

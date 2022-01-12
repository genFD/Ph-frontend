import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import ProductDetailsPage from './pages/productDetailsPage/ProductDetailsPage';
import RegisterPage from './pages/registerPage/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/details/:id' element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

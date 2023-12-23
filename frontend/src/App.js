import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './Component/Admin/Home';
import Product from './Component/Admin/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import EcommerceHome from './Component/Ecommerce/EcommerceHome';
function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<EcommerceHome/>} />
        <Route path="/admin" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/password/forgot' element={<ForgotPassword/>} />
        <Route path='/password/reset/:token' element={<ResetPassword/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/productadmin" element={<Product/>} />
      </Routes>
    </Router>
  );
}

export default App;

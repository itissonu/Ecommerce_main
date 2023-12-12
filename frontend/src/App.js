import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Component/Admin/Home';
import Product from './Component/Admin/Product';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productadmin" element={<Product/>} />
      </Routes>
    </Router>
  );
}

export default App;

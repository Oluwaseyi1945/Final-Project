import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Sign from './pages/sign.jsx';
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Forget from './pages/forget.jsx';
import Createpage from './pages/createpage.jsx';
import Confirm from './pages/confirm.jsx';
import Enter from './pages/enter.jsx';
import Homepage from './Homepage.jsx'
import Shop from './pages/shop.jsx';
import Productpage from './pages/productpage.jsx';
import Minicart from './pages/minicart.jsx';
import Cart from './pages/cartpage.jsx';









createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/sign" element={<Sign/>} />
      <Route path="/forget" element={<Forget/>} />
      <Route path="/createpage" element={<Createpage/>} />
      <Route path="/confirm" element={<Confirm/>} />
      <Route path="/enter" element={<Enter/>} />
      <Route path="/Homepage" element={<Homepage />} />
     <Route path="/shop" element={<Shop />} />
      <Route path="/productpage" element={<Productpage />} />
      <Route path="/mincart" element={<Minicart />} />
      <Route path="/cartpage" element={<Cart />} />
    
    </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)

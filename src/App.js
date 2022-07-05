
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Inventory from './Component/Inventory/Inventory';
import NotFound from './Component/NotFound/NotFound';
import OrderReview from './Component/OrderReview/OrderReview';
import Shop from './Component/Shop/Shop';


function App() {
  return (
    <div className="App">
     
        <Header></Header>
        <Routes>
          <Route path="/" element={<Navigate to="/shop" />}></Route>

          <Route path="/shop" element={<Shop></Shop>} >
          </Route>

          <Route path="/review" element={<OrderReview></OrderReview>} ></Route>

          <Route path="/inventory" element={<Inventory></Inventory>}></Route>

          <Route path="/notFound" element={<NotFound></NotFound>}></Route>

          <Route path="*" element={<Navigate to="/notFound" />} ></Route>
        </Routes>
     
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';


function App() {
  return (
    <BrowserRouter basename="/react-shopping-cart">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// App.
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from './components/myOrders/OrderDetails';
import About from './components/about/About';

import ScrollToTop from './components/ScrollToTop';

import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/cart.scss';
import './styles/shipping.scss';
import './styles/login.scss';
import './styles/profile.scss';
import './styles/table.scss';
import './styles/orderDetails.scss';
import './styles/about.scss';

// Importation du store Redux
import { Provider } from 'react-redux';
import store from './redux/store'; // Assurez-vous que le chemin est correct

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Header isAuthenticated={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

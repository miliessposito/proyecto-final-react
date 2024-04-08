import React, { } from 'react';
import ItemListContainer from '../components/pages/itemList/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from '../components/common/Cart/Cart';
import { ItemDetailContainer } from '../components/pages/itemDetail/ItemDetailContainer';
import { Layout } from '../components/layout/Layout';
import { CheckoutContainer } from '../components/pages/chekout/CheckoutContainer';
import CartContextProvider from '../context/CartContext';
import { CartContainer } from '../components/common/Cart/CartContainer';
import { routes } from '../router/routes';
import { AppRouter } from '../router/AppRouter';


const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <AppRouter />
      </CartContextProvider>
    </BrowserRouter>

  )
}

export default App
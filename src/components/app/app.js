import React from 'react';
import './app.css';
import { withBookstoreService } from '../hoc';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header/shop-header';

const App = () => {
  return (

    <main role="main" className='container'>
      <ShopHeader numItems={5} total={210} />
      {/* Routes - делает так, чтобы один из внутренних роутеров срабатывал. Как только 1 роутер сработал, остальные игнорируются. */}
      <Routes>
        <Route path="/"
          element={<HomePage />}
          exact />
        {/* exact - чтобы только точное совпадение со слешом / срабатывало*/}
        <Route path="/cart"
          element={<CartPage />}
        />
      </Routes>
    </main>

  );
};

// const App = ({ bookstoreService}) => {
//   console.log(bookstoreService.getBooks())
//   return <div>App</div>
// }
export default withBookstoreService()(App);
import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    //Предоставляет доступ к Redux Store
    <Provider store={store}>
        {/* Обработка в компонентах ниже */}
        <ErrorBoundry>
            {/* Передает сервис через Context API */}
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
import React from "react";
import ReactDOM from 'react-dom';
//для того, чтобы дать доступ компонентам к react-store нужен - 
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from './components/error-boundry';

//для того, чтобы иметь доступ к данным , нужен сервис
import BookstoreService from './services/bookstore-service';

// для того, чтобы компоненты имели доступ к сервису, нужен : 
import { BookstoreServiceProvider } from './components/bookstore-service-context';

//чтобы управлять данными в данном приложении
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
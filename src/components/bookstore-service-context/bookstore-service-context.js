//этот компонент нужен для передачи service всем компонентам в приложении, используя context api реакта 

import React from "react";

const {
    Provider: BookstoreServiceProvider,
    Consumer: BookstoreServiceConsumer
} = React.createContext();

export {
    BookstoreServiceProvider,
    BookstoreServiceConsumer
};
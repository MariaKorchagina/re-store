import React from "react";
import BookList from '../book-list';

const HomePage = () => {
    const books = [

        {
            id: 1,
            title: 'Production-Ready Microservices',
            autor: 'Susasn J. Fowler'
        },
        {
            id: 2,
            title: 'Release It!',
            autor: 'Michael T. Nygard'
        }

    ];
    return (
        <BookList books={books} />
    )
};

export default HomePage;
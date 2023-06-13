const initialState = {
    books: [
        // {
        //     id: 1,
        //     title: 'Production-Ready Microservices',
        //     autor: 'Susasn J. Fowler'
        // },
        // {
        //     id: 2,
        //     title: 'Release It!',
        //     autor: 'Michael T. Nygard'
        // }
    ]
};

//Если state undefined, вернется initialState
const reducer = (state = initialState, action) => {
    //type - это строка
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
                //action.payload будет содержать новый массив книг, к-й загрузили
            };

        default:
            return state;
    }
}

export default reducer;
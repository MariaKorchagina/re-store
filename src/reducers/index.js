const initialState = {
    books: [],
    loading: true
};

//Если state undefined, вернется initialState
const reducer = (state = initialState, action) => {
    //type - это строка
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                //action.payload будет содержать новый массив книг, к-й загрузили
                loading: false
            };

        default:
            return state;
    }
}

export default reducer;
import React, { Component } from "react";
import BookListItem from "../book-list-item";
import './book-list.css';
import { compose } from '../../utils';
import { booksLoaded } from '../../actions';
import { connect } from "react-redux";
//connect - подлючает компонент BookList к redux store
import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';
class BookList extends Component {


    // передаем данные, которые получили из сервиса в store. Store вызывает reducer. Reducer получает действие BOOKS_LOADED и обновляет список книг в store. А обновленный список книг снова возвращается к BooksList через  mapStateToProps через коллекцию books. Наш компонент получает обновленный список книг и через рендер отрисовывает этот список на экране.
    componentDidMount() {
        //получаем данные из сервиса
        const { bookstoreService, booksLoaded } = this.props;
        const data = bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
        //   console.log(data)

        // передаем actions в redux store


        //booksLoaded - не только создает действие , но и автоматически передает тот самый action в redux store
    }


    render() {
        const { books, loading } = this.props;

        if (loading) {
            return <Spinner />
        }

        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ books, loading }) => {
    return { books, loading };
}
//mapStateToProps - эта ф-ция определяет какие св-ва получит компонент из Redux


const mapDispatchToProps = {
    booksLoaded
};
//mapDispatchToProps  - описывает то, какие действия хочет выполнить наш компонент , какие actions он будет передавать в store

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);



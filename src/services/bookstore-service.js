export default class BookstoreService {

    getBooks() {
        return [
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
    }
}
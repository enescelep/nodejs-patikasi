/*const promise1 = new Promise((resolve, reject) => {
    //resolve('Veriler alındı');
    reject('Bir hata oluştu!');
});

//console.log(promise1);

promise1
    .then(value => {
    console.log(value)
    }).catch(error => {
    console.log(error);
    });*/

const books = [
    {name: 'Kitap1', author: 'Yazar1'},
    {name: 'Kitap2', author: 'Yazar2'},
    {name: 'Kitap3', author: 'Yazar3'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook = (newBook) => {

    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        reject(books);
        // Hata olursa -> reject(`Bir hata oluştu`);
    });

    return promise1;
};

addBook({name: 'Kitap45', author: 'Yazar1234'})
    .then(() => {
        console.log('Yeni Liste');
        listBooks();
    }).catch((error) => {
        console.log(error);
    });
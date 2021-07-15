/* console.log(`First Task`);
console.log(`Second Task`);
console.log(`Third Task`); */

/*const func1 = () => {
    console.log('Function 1 completed');
};

const func2 = () => {
    console.log('Function 2 completed');
};

func2();
func1(); */

/*const func1 = () => {
    console.log('First function completed');
    func2();
};

const func2 = () => {
    console.log('Second Function completed');
    func3();
};

const func3 = () => {
    console.log('Third Function completed');
};

func1();*/

/*const func1 = () => {
    console.log('First function completed');
    func3();
};

const func2 = () => {
    console.log('Second Function completed');
};

const func3 = () => {
    console.log('Third Function completed');
    func2();
};
func1();*/

/* let x = 5;
console.log(`1. gelen veri: ${x}`);

setTimeout(() => {
    x = x + 5;
    console.log(`2. gelen veri: ${x}`);
}, 5000) ;

x = x + 5;
console.log(`3. gelen veri: ${x}`);*/

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

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
};

addBook({name: 'Kitap4', author: 'Yazar4'}, listBooks);

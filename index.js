//creating book object 
const book = {
    title: "We should All Be Feminists",
    author: "Chimamanda Ngozi Adichie",
    year: 2014,
    genre: "non-fiction",
}


//adding a constructor to add a new book entry
function Book(title, author, year, genre){
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
}
// using the constructor to create new book entries
const book1 = new Book("Harry Potter and the Philosopher's stone", "J.K. Rowling", 1997, "fantasy");
const book2 = new Book("The Da Vinci Code", "Dan Brown", 2003, "Mystery/Thriller")
console.log(book1);
console.log(book2);
//creating an array of books
const collection = [book, book1, book2];
// defining a function to display the all books in the collection
function displayBooks(collection){
    collection.forEach(book => {
        console.log(
            `
            Title: ${book.title}
            Author: ${book.author}
            Year: ${book.year}
            Genre: ${book.genre}
            `
        )
    });
}
//making a function call
displayBooks(collection);
//defining a function to search for books based on a user query
function findBook(query){
    //converting the search query to lowercase to avoid case sensitivity
    const lowerCaseQuery  = query.toLowerCase();
    //using the javascript method filter to find matches using the title or author
    return collection.filter(book =>
        //checking if the book's title in the collection includes the user query
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        //checking if the book's author in the collection includes the user query
        book.author.toLowerCase().includes(lowerCaseQuery)
    );
}

//making a function call
const searchResults = findBook("Brown");
console.log(searchResults);

//defining a function to delete a book from the array by title
function deleteBook(titleToDelete){
    //creating a new array to store the rest of the objects
    const newCollection = collection.filter(book=>
        //the new book collection should exclude each matching title in the function call
        book.title !== titleToDelete
    );
    //display the updated book collection
    console.log(newCollection)
}
//function Call
deleteBook("The Da Vinci Code");
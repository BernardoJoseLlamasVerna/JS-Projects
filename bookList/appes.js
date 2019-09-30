// Class Book
class Book {
    constructor(title, author, isbn) {
        this.title  = title;
        this.author = author;
        this.isbn   = isbn;
    }
}

// Class UI: has the methods we defined on app.js
class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        // Create a tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        // Create a div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent to insert into the DOM
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        // Disappear after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local Storage Class
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            // we use JSON.parse to read info from localStorage
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function (book) {
            const ui = new UI();

            // Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);
        // we need JSON.stringify to add book into books list on localStorage
        localStorage.setItem('books', JSON.stringify(books));

    }

    // We choose to delete a book searching it by its isbn because its unique and
    // will work as an id on a table:
    static removeBook(isbn){
        // get all books from localStorage:
        const books = Store.getBooks();

        books.forEach(function (book, index) {
            if (book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listeners for adding a book
document.getElementById('book-form').addEventListener('submit', function (e) {
    // Get form values:
    const title  = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn   = document.getElementById('isbn').value;

    // Instantiate a book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields before submit', 'error');
    } else {
        // Add a book to list:
        ui.addBookToList(book);

        // Add to LS:
        Store.addBook(book);

        // Show success: a new book has been added
        ui.showAlert('Book Added!', 'success');

        // Clear fields after submit:
        ui.clearFields();
    }

    e.preventDefault(e);
});

// Event Listeners for deleting a book
document.getElementById('book-list').addEventListener('click', function (e) {
    // Instantiate UI
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    // Remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show message:
    ui.showAlert('Book removed', 'success');

    e.preventDefault();
});
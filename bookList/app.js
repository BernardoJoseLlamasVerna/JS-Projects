// Book Constructor
function Book(title, author, isbn) {
    this.title  = title;
    this.author = author;
    this.isbn   = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function (book) {
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

// Show alert prototype function
UI.prototype.showAlert = function(message, className) {
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

// Delete a book:
UI.prototype.deleteBook = function (target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Clear Fields after submit
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

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

    ui.deleteBook(e.target);

    // Show message:
    ui.showAlert('Book removed', 'success');

    e.preventDefault();
});
console.log('hello from library1');
const myLibrary = [];

function book(title, author, pages, isRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        const readStatus = this.isRead ? 'read' : 'not read';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    }
    this.changeReadStatus = function () {
        this.isRead = !this.isRead;
    }
}
const book1 = new book('book1', 'author1', 100, true);
console.log(book1.info());

function addBook() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#isRead').checked;
    const newBook = new book(title, author, pages, isRead);
    myLibrary.push(newBook);
    console.log(`Added: ${newBook.info()}`);
}

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    addBook();
});


function showBooks() {
    const bookContain = document.querySelector('.book-contain')
    bookContain.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = myLibrary[i].info();
        bookContain.appendChild(bookDiv);
        console.log(myLibrary[i].info());
    }
}

document.querySelector('#show-books').addEventListener('click', (e) => {
    e.preventDefault();
    showBooks();
})


function deleteBook(bookname) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === bookname) {
            myLibrary.splice(i, 1);
        }
        console.log(`Deleted: ${bookname}`);
    }
}

document.querySelector('#delete-book').addEventListener('submit', (e) => {
    e.preventDefault();
    deleteBook(document.querySelector('#delete-title').value);
})


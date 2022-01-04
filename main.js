const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const btn = document.getElementById('btn-add');

function BookConstructor(title, author) {
  this.title = title;
  this.author = author;
}

function storeBooks(books) {
  return localStorage.setItem('books', books);
}

function getBooks() {
  let books = JSON.parse(localStorage.getItem('books'));
  if (!books) {
    books = [];
    return books;
  }
  return books;
}

let arrBooks = getBooks();

function addBooks() {
  const title = bookTitle.value.toString();
  const author = bookAuthor.value.toString();
  const book = new BookConstructor(title, author);
  const inputs = document.querySelectorAll('input');
  inputs.forEach((inputs) => {
    inputs.value = '';
  });
  arrBooks.push(book);
  storeBooks(JSON.stringify(arrBooks));
  displayBooks();
}

function createDisplay(bookContent) {
  arrBooks.map((e, i) => {
    bookContent += `<p class="title">${arrBooks[i].title}</p>
  <p class="author">${arrBooks[i].author}</p>
  <button class="remove">Remove</button>
  <div class="line"></div>`;
    document.querySelector('.books').innerHTML = bookContent;
    const buttons = document.querySelectorAll('button.remove');
    const removeBook = (index) => {
      arrBooks = arrBooks.filter((e, i) => i !== index);
      storeBooks(JSON.stringify(arrBooks));
      // eslint-disable-next-line no-use-before-define
      return displayBooks();
    };
    buttons.forEach((e, i) => {
      buttons[i].addEventListener('click', (event) => {
        // eslint-disable-next-line no-undef
        removeBook(arrBooks.indexOf(arrBooks[i]));
        event.preventDefault();
      });
    });
    return arrBooks;
  });
}

function displayBooks() {
  const bookContent = '';
  if (arrBooks.length === 0) {
    document.querySelector('.books').innerHTML = 'No Books';
  } else {
    createDisplay(bookContent);
  }
}

btn.addEventListener('click', () => {
  addBooks();
});

displayBooks();

const container = document.querySelector('.container');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const btn = document.getElementById('btn-add');
const bookContainer = document.createElement('div');

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
const arrBooks = getBooks();

const createdBookList = (book) => {
  bookContainer.classList = 'books';
  const bookContent = `<p class="title">${book.title}</p>
    <p class="author">${book.author}</p>
    <button id="btn-remove">Remove</button>
    <div class="line"></div>`;
  bookContainer.innerHTML += bookContent;
  container.appendChild(bookContainer);
};

const deletedBook = (element) => {
  const parent = element.parentNode;
  parent.removeChild(element);
};

const printLocalBookList = () => {
  const localStorageBooks = getBooks();
  localStorageBooks.forEach((book) => {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList = 'books';
    const content = `<p class="title">${book.title}</p>
    <p class="author">${book.author}</p>
    <button class="btn-remove">Remove</button>
    <div class="line"></div>`;
    div.innerHTML += content;
    container.appendChild(div);

    const btnRemove = document.querySelectorAll('.btn-remove');
    btnRemove.forEach((btn) => {
      btn.addEventListener('click', () => {
        deletedBook(div);
      });
    });
  });
};

btn.addEventListener('click', () => {
  const title = bookTitle.value.toString();
  const author = bookAuthor.value.toString();
  const book = new BookConstructor(title, author);
  arrBooks.push(book);
  storeBooks(JSON.stringify(arrBooks));
  const inputs = document.querySelectorAll('input');
  inputs.forEach((inputs) => {
    inputs.value = '';
  });
  createdBookList(book);
  const btnRemove = document.querySelectorAll('.btn-remove');
  btnRemove.forEach((btn) => {
    btn.addEventListener('click', () => {
      deletedBook(bookContainer);
    });
  });
});

printLocalBookList();
console.log(arrBooks);
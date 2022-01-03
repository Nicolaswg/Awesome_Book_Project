const container = document.querySelector('.container');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const btn = document.getElementById('btn-add');
const arrBooks = getBooks();

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

btn.addEventListener('click', () => {
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
});

function displayBooks() {
  const bookContainer = document.createElement('div');
  bookContainer.classList = 'books';
  let books = getBooks();
  books.map((e, i) => {
    const bookContent = `<p class="title">${books[i].title}</p>
    <p class="author">${books[i].author}</p>
    <button id="btn-remove">Remove</button>
    <div class="line"></div>`;
    bookContainer.innerHTML += bookContent;
    container.appendChild(bookContainer);
  });
  console.log(books);
}
displayBooks();

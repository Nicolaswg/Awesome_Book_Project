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

const removeBook = (index) => {
  arrBooks = arrBooks.filter((e, i) => i !== index);
  storeBooks(JSON.stringify(arrBooks));
};

function displayBooks() {
  let bookContent = '';
  if (arrBooks.length === 0) {
    document.querySelector('.books').innerHTML = 'No Books';
  } else {
    arrBooks.map((e, i) => {
      bookContent += `<p class="title">${arrBooks[i].title}</p>
  <p class="author">${arrBooks[i].author}</p>
  <button class="remove">Remove</button>
  <div class="line"></div>`;
      document.querySelector('.books').innerHTML = bookContent;
      const buttons = document.querySelectorAll('button.remove');
      buttons.forEach((e, i) => {
        buttons[i].addEventListener('click', (event) => {
          removeBook(arrBooks.indexOf(arrBooks[i]));
          displayBooks();
          event.preventDefault();
        });
      });
      return arrBooks;
    });
  }
}

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

btn.addEventListener('click', () => {
  addBooks();
});

displayBooks();

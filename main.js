const container = document.querySelector('.container');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const btn = document.getElementById('btn-add');
const arrBooks = [];

function BookConstructor(title, author) {
  this.title = title;
  this.author = author;
}

const createdBooks = () => {
  arrBooks.forEach((element) => {
    const book = document.createElement('div');
    book.classList = 'books';
    const bookContent = `<p class="title">${element.title}</p>
    <p class="author">${element.author}</p>
    <button id="btn-remove">Remove</button>
    <div class="line"></div>`;
    book.innerHTML += bookContent;
    container.appendChild(book);
  });
};

btn.addEventListener('click', () => {
  const title = bookTitle.value.toString();
  const author = bookAuthor.value.toString();
  const book = new BookConstructor(title, author);
  const inputs = document.querySelectorAll('input');
  inputs.forEach((inputs) => {
    inputs.value = '';
  });
  arrBooks.push(book);
  createdBooks();
  console.log(arrBooks);
});
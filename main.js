const container = document.querySelector('.container');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const btn = document.getElementById('btn-add');
const arrBooks = [];

function BookConstructor(title, author) {
  this.title = title;
  this.author = author;
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
  const bookContainer = document.createElement('div');
  bookContainer.classList = 'books';
  const bookContent = `<p class="title">${book.title}</p>
    <p class="author">${book.author}</p>
    <button id="btn-remove">Remove</button>
    <div class="line"></div>`;
  bookContainer.innerHTML += bookContent;
  container.appendChild(bookContainer);
  console.log(arrBooks);
});
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const btn = document.getElementById('btn-add');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static storeBooks(books) {
    return localStorage.setItem('books', books);
  }

  static getBooks() {
    let books = JSON.parse(localStorage.getItem('books'));
    if (!books) {
      books = [];
      return books;
    }
    return books;
  }

  static data = this.getBooks();

  static addBookMethod() {
    const title = bookTitle.value.toString();
    const author = bookAuthor.value.toString();
    const book = new Book(title, author);
    const inputs = document.querySelectorAll('input');
    inputs.forEach((inputs) => {
      inputs.value = '';
    });
    if (title !== '' && author !== '') {
      this.data.push(book);
      this.storeBooks(JSON.stringify(this.data));
      this.displayBooks();
    }
  }

  static removeBook(index) {
    this.data = this.data.filter((e, i) => i !== index);
    this.storeBooks(JSON.stringify(this.data));
  }

  static displayBooks() {
    this.listSection();
    let bookContent = '';
    if (this.data.length === 0) {
      document.querySelector('.books').innerHTML = 'No Books';
    } else {
      this.data.map((e, i) => {
        bookContent += `<div class="row-div"><p class="title">"${this.data[i].title}"</p>
      <p>By</p>
  <p class="author">${this.data[i].author}</p>
  <button class="remove">Remove</button></div>`;
        document.querySelector('.books').innerHTML = bookContent;
        const buttons = document.querySelectorAll('button.remove');
        buttons.forEach((e, i) => {
          buttons[i].addEventListener('click', (event) => {
            this.removeBook(this.data.indexOf(this.data[i]));
            this.displayBooks();
            event.preventDefault();
          });
        });
        return this.data;
      });
    }
  }

  static addSection(name) {
    const section = document.querySelector(`#${name}`);
    section.style.display = 'flex';
    return section;
  }

  static bookForm() {
    const contactSection = document.querySelector('#contact-section');
    const listSection = document.querySelector('#list-section');
    contactSection.style.display = 'none';
    listSection.style.display = 'none';
    return this.addSection('add-section');
  }

  static listSection() {
    const bookForm = document.getElementById('add-section');
    const contactSection = document.querySelector('#contact-section');
    bookForm.style.display = 'none';
    contactSection.style.display = 'none';
    return this.addSection('list-section');
  }

  static contactSection() {
    const listSection = document.querySelector('#list-section');
    const bookForm = document.getElementById('add-section');
    listSection.style.display = 'none';
    bookForm.style.display = 'none';
    return this.addSection('contact-section');
  }
}

btn.addEventListener('click', () => {
  Book.addBookMethod();
});
Book.displayBooks();
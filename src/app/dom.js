// COMPONENTES DE DOCUMENT

function createNav() {
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'navBar');
  nav.classList.add('menu');
  const ul = document.createElement('ul');
  ul.classList.add('list_menu');


  const book_fiction = document.createElement('a');
  book_fiction.setAttribute('id', 'fiction');
  book_fiction.classList.add('element_menu');
  const book_fiction_txt = document.createTextNode('Ficción');
  book_fiction.appendChild(book_fiction_txt);
  book_fiction.addEventListener('click', (e) => {
    getFiction();
    closeMenu();
  });


  const book_history = document.createElement('a');
  book_history.setAttribute('id', 'history');
  book_history.classList.add('element_menu');
  const book_history_txt = document.createTextNode('Historia');
  book_history.appendChild(book_history_txt);
  book_history.addEventListener('click', (e) => {
    getHistory();
    closeMenu();
  });

  const MyBooks = document.createElement('a');
  MyBooks.setAttribute('id', 'MyBooks');
  MyBooks.classList.add('element_menu');
  const MyBooks_txt = document.createTextNode('Mis libros');
  MyBooks.appendChild(MyBooks_txt);
  MyBooks.addEventListener('click', (e) => {
    getMyBook();
    closeMenu();
  });

  const book_it = document.createElement('a');
  book_it.setAttribute('id', 'it');
  book_it.classList.add('element_menu');
  const book_it_txt = document.createTextNode('IT');
  book_it.appendChild(book_it_txt);
  book_it.addEventListener('click', (e) => {
    getIt();
    closeMenu();
  });

  const book_science = document.createElement('a');
  book_science.setAttribute('id', 'science');
  book_science.classList.add('element_menu');
  const book_science_txt = document.createTextNode('Divulgación');
  book_science.appendChild(book_science_txt);
  book_science.addEventListener('click', (e) => {
    getScience();
    closeMenu();
  });

  const lupa_a = document.createElement('a');
  const lupa = document.createElement('img');
  lupa.classList.add('lupa_img');
  lupa.setAttribute('src', '/src/image/lupa.png');
  lupa_a.appendChild(lupa);
  lupa_a.addEventListener('click', (e) => {
    clearCards();
    createMain();
  });


  const burger = document.createElement('a');
  burger.setAttribute('href', 'javascript:void(0)');
  burger.classList.add('icon');
  const click = document.createElement('i');
  click.classList.add('fa');
  click.classList.add('fa-bars');
  burger.appendChild(click);
  burger.addEventListener('click', (e) => {
    menuBurger();
  });


  ul.appendChild(burger);
  ul.appendChild(book_fiction);
  ul.appendChild(book_history);
  ul.appendChild(MyBooks);
  ul.appendChild(book_it);
  ul.appendChild(book_science);
  ul.appendChild(lupa_a);

  nav.appendChild(ul);

  app.appendChild(nav);
};


function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');

  const search = document.createElement('input');
  search.setAttribute('type', 'text');
  search.setAttribute('id', 'input_search');
  search.setAttribute('placeholder', 'Buscar por ...');
  search.classList.add('search_input');

  const searchTitle = document.createElement('input');
  searchTitle.classList.add('search_type');
  searchTitle.setAttribute('id', 'searchTitle');
  searchTitle.name = 'search-type';
  searchTitle.setAttribute('type', 'radio');
  searchTitle.setAttribute('value', 'title');


  const txt_title = document.createElement('label');
  const searchTitle_txt = document.createTextNode('Por título');

  txt_title.appendChild(searchTitle);
  txt_title.appendChild(searchTitle_txt);

  searchTitle.addEventListener('click', (e) =>
    getTitle(),
  );


  const searchAuthor = document.createElement('input');
  searchAuthor.classList.add('search_type');
  searchAuthor.setAttribute('id', 'searchAuthor');
  searchAuthor.name = 'search-type';
  searchAuthor.setAttribute('type', 'radio');
  searchAuthor.setAttribute('value', 'author');

  const txt_author = document.createElement('label');
  const searchAuthor_txt = document.createTextNode('Por Autor');

  txt_author.appendChild(searchAuthor);
  txt_author.appendChild(searchAuthor_txt);

  searchAuthor.addEventListener('click', (e) =>
    getAuthor(),
  );


  const search_button = document.createElement('button');
  search_button.classList.add('search_button');
  search_button.setAttribute('id', 'search');
  const search_button_txt = document.createTextNode('Buscar');
  search_button.appendChild(search_button_txt);

  const result = document.createElement('div');
  result.setAttribute('id', 'content');

  main.appendChild(search);
  main.appendChild(result);
  main.appendChild(txt_title);
  main.appendChild(txt_author);

  app.appendChild(main);
};


function createCard(imgSrc, title, author, descrip, linkHref) {
  const container = document.createElement('div');
  container.setAttribute('id', 'container');

  const book = document.createElement('div');
  book.setAttribute('id', 'book');
  book.classList.add('card');

  const img = document.createElement('img');
  img.setAttribute('id', 'img');
  img.classList.add('bookImg');
  img.setAttribute('src', imgSrc);
  img.setAttribute('alt', 'Libro');

  const star = document.createElement('label');
  star.classList.add('star');

  const star_txt = document.createTextNode('\u2605');
  star.appendChild(star_txt);
  const star_bot = document.createElement('a');
  star_bot.appendChild(star);
  book.appendChild(star_bot);
  star.addEventListener('click', (e) => {
    saveBook();
  });

  const link = document.createElement('a');
  link.classList.add('book_link');
  link.setAttribute('href', ('https://www.todostuslibros.com/busquedas?keyword=' + title.replace(/ /g, '%20') + '%20' + author[0].replace(/ /g, '%20')));
  link.target = '_blank';

  link.appendChild(img);

  const cardBody = document.createElement('div');
  cardBody.classList.add('cardBody');

  const bookTitle = document.createElement('h5');
  bookTitle.classList.add('bookTitle');
  const booktitleTxt = document.createTextNode(title);

  const bookAuthor = document.createElement('h5');
  bookAuthor.classList.add('bookAuthor');
  const bookAuthorTxt = document.createTextNode(author.join(', '));

  const bookDescrip = document.createElement('p');
  bookDescrip.classList.add('bookDescrip');
  let bookDescripTxt = document.createTextNode(descrip);
  if (descrip == undefined) {
    bookDescripTxt = document.createTextNode('No hay reseña disponible');
  }

  const more = document.createElement('a');
  more.setAttribute('id', 'more');
  more.classList.add('more');
  const more_txt = document.createTextNode('Ver más');

  more.appendChild(more_txt);


  more.addEventListener('mouseenter', (e) => {
    const div_more = document.createElement('div');
    div_more.classList.add('info');
    div_more.style =' border: 1px solid black; position: absolute; top: ' + (e.target.offsetTop + 25) + 'px; left:' + e.target.offsetLeft +'px';
    div_more.innerText = descrip;
    document.getElementById('app').appendChild(div_more);
    console.log(descrip);
  });
  more.addEventListener('mouseout', (e) => {
    document.querySelector('.info').remove();
  });

  bookDescrip.appendChild(bookDescripTxt);

  bookTitle.appendChild(booktitleTxt);
  bookAuthor.appendChild(bookAuthorTxt);

  cardBody.appendChild(bookTitle);
  cardBody.appendChild(bookAuthor);
  cardBody.appendChild(bookDescrip);
  cardBody.appendChild(more);

  book.appendChild(link);
  book.appendChild(cardBody);

  container.appendChild(book);

  app.appendChild(book);
}


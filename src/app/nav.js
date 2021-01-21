function createNav() {
    let nav = document.createElement('nav');
    nav.setAttribute('id', 'navBar')
    nav.classList.add('menu');
    let ul = document.createElement('ul');
    ul.classList.add('list_menu');

    let book_fiction = document.createElement('a');
    book_fiction.setAttribute('id', 'fiction');
    book_fiction.classList.add('element_menu');
    let book_fiction_txt = document.createTextNode('Ficción');
    book_fiction.appendChild(book_fiction_txt);
    book_fiction.addEventListener('click', (e) => {
        getFiction();
        closeMenu();
    });


    let book_history = document.createElement('a');
    book_history.setAttribute('id', 'history');
    book_history.classList.add('element_menu');
    let book_history_txt = document.createTextNode('Historia');
    book_history.appendChild(book_history_txt);
    book_history.addEventListener('click', (e) => {
        getHistory();
        closeMenu();
    });

    let MyBooks = document.createElement('a');
    MyBooks.setAttribute('id', 'MyBooks');
    MyBooks.classList.add('element_menu');
    let MyBooks_txt = document.createTextNode('Mis libros');
    MyBooks.appendChild(MyBooks_txt);
    MyBooks.addEventListener('click', (e) => {
        getMyBook();
        closeMenu();
    })

    let book_it = document.createElement('a');
    book_it.setAttribute('id', 'it');
    book_it.classList.add('element_menu');
    let book_it_txt = document.createTextNode('IT');
    book_it.appendChild(book_it_txt);
    book_it.addEventListener('click', (e) => {
        getIt();
        closeMenu();
    });

    let book_science = document.createElement('a');
    book_science.setAttribute('id', 'science');
    book_science.classList.add('element_menu');
    let book_science_txt = document.createTextNode('Divulgación');
    book_science.appendChild(book_science_txt);
    book_science.addEventListener('click', (e) => {
        getScience();
        closeMenu();
    });

    let bookWishlist = document.createElement('a');
    bookWishlist.setAttribute('id', 'bookWishlist');
    bookWishlist.classList.add('element_menu');
    let bookWishlist_txt = document.createTextNode('Wishlist');
    bookWishlist.appendChild(bookWishlist_txt);
    bookWishlist.addEventListener('click', (e) => {
        createWishlist();
        closeMenu();
    });

    let lupa_a = document.createElement('a');
    let lupa = document.createElement('img');
    lupa.classList.add('lupa_img');
    lupa.setAttribute('src', 'image/lupa.png');
    lupa_a.appendChild(lupa);
    lupa_a.addEventListener('click', (e) => {
        clearCards();
        createMain();
    });


    let burger = document.createElement('a');
    burger.setAttribute('href', 'javascript:void(0)')
    burger.classList.add('icon');
    let click = document.createElement('i');
    click.classList.add("fa")
    click.classList.add("fa-bars")
    burger.appendChild(click)
    burger.addEventListener('click', (e) => {
        menuBurger();
    })


    ul.appendChild(burger);
    ul.appendChild(book_fiction);
    ul.appendChild(book_history);
    ul.appendChild(book_it);
    ul.appendChild(book_science);
    ul.appendChild(MyBooks);
    ul.appendChild(bookWishlist);
    ul.appendChild(lupa_a);

    nav.appendChild(ul);

    app.appendChild(nav);


};

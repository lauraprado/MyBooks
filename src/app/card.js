// eslint-disable-next-line no-unused-vars
function createCard(imgSrc, title, author, descrip = "No hay reseña disponible", id) {
    console.log(id)
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    let book = document.createElement('div');
    book.setAttribute('id', 'book');
    book.classList.add('card');

    let img = document.createElement('img');
    img.setAttribute('id', 'img');
    img.classList.add('bookImg');
    img.setAttribute('src', imgSrc);
    img.setAttribute('alt', 'Libro');

    let star = document.createElement('label');
    star.classList.add('star');

    let star_txt = document.createTextNode('\u2605')
    star.appendChild(star_txt);
    let star_bot = document.createElement('a');
    star_bot.appendChild(star);

    book.appendChild(star_bot);
    star.addEventListener('click', (e) => {
        const clave = title; //nuevo
        console.log(clave)
        const valor = id; //nuevo
        console.log(valor)
        localStorage.setItem(clave, valor);
        if (localStorage.getItem(clave)) {
            star.style.color = 'yellow'
        }
    })


    let link = document.createElement('a');
    link.classList.add('book_link');
    link.setAttribute('href', ('https://www.todostuslibros.com/busquedas?keyword=' + title.replace(/ /g, '%20') + '%20' + author[0].replace(/ /g, '%20')));
    link.target = '_blank';


    link.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.classList.add('cardBody');

    let bookTitle = document.createElement('h5');
    bookTitle.setAttribute('id', 'bookTitle');
    bookTitle.classList.add('bookTitle');
    let booktitleTxt = document.createTextNode(title);


    let bookAuthor = document.createElement('h5');
    bookAuthor.setAttribute('id', 'bookAuthor');
    bookAuthor.classList.add('bookAuthor');
    let bookAuthorTxt = document.createTextNode(author.join(', '));

    let bookDescrip = document.createElement('p');
    bookDescrip.classList.add('bookDescrip');
    let descripFinnal = descrip.split('.');
    let bookDescripTxt = document.createTextNode(descripFinnal[0] + '.' + descripFinnal[1] + '.');


    bookDescrip.appendChild(bookDescripTxt);

    bookTitle.appendChild(booktitleTxt);
    bookAuthor.appendChild(bookAuthorTxt);

    cardBody.appendChild(bookTitle);
    cardBody.appendChild(bookAuthor);
    cardBody.appendChild(bookDescrip);


    book.appendChild(link);
    book.appendChild(cardBody);

    container.appendChild(book)

    app.appendChild(book)

}

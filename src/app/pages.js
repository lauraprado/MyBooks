// FUNCIONES

function printBooks(response) {
    clearCards();
    clearWish ();
    //clearSearch();
    //console.log(response);
    response.items.forEach(item =>
        createCard(
            item.volumeInfo.imageLinks.smallThumbnail,
            item.volumeInfo.title,
            item.volumeInfo.authors,
            item.volumeInfo.description,
            //item.id,
            item.volumeInfo.industryIdentifiers[0].identifier
        ));
    response.items.forEach(item => buyBook(item.volumeInfo.title));

}

function getFiction() {
    document.getElementById('navBar').style.color = '#38393f';
    document.getElementById('fiction').style.color = '#957d95';
    clearSearch();
    fetch(getData('subject%3Afiction', '&download=EPUB&filter=ebooks&langRestrict=es&orderBy=newest&printType=BOOKS&maxResults=40'))
        .then(
          response => response.json()
        )
        .then(printBooks)
        //.then(buyBook)
        .catch(err => console.log(err));
    //googleApiRequest('subject%3Afiction', '&download=EPUB&filter=ebooks&langRestrict=es&orderBy=newest&printType=BOOKS', printBooks);
}

function getHistory() {
    document.getElementById('history').style.color = '#957d95';
    clearSearch();
    fetch(getData('subject%3Ahistory', '&filter=full&langRestrict=es&orderBy=newest&printType=BOOKS&maxResults=40'))
        .then(response => response.json())
        .then(printBooks)
        .catch(err => console.log(err));
}

function getIt() {
    document.getElementById('it').style.color = '#957d95';
    clearSearch();
    fetch(getData('subject%3AComputers', '&download=EPUB&filter=ebooks&langRestrict=es&orderBy=newest&printType=BOOKS&maxResults=40'))
        .then(response => response.json())
        .then(printBooks)
        .catch(err => console.log(err));
}

function getScience() {
    document.getElementById('science').style.color = '#957d95';
    clearSearch();
    fetch(getData('subject%3Ascience', '&download=EPUB&filter=ebooks&langRestrict=es&orderBy=newest&printType=BOOKS&maxResults=40'))
        .then(response => response.json())
        .then(printBooks)
        .catch(err => console.log(err));
}

function getData(typeSearch, typeBook) {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=' + typeSearch + typeBook
    return url
}

function getMyBook() {
    document.getElementById('MyBooks').style.color = '#957d95';
    clearSearch();
    fetch('https://www.googleapis.com/books/v1/users/106589359251923367403/bookshelves/4/volumes')
        .then(response => response.json())
        .then(printBooks)
        .catch(err => console.log(err));
}

function getTitle() {
    console.log('Búsqueda por título');
    let title_search = document.getElementById('input_search').value.replace(/ /, '%20');
    console.log(title_search);
    let url = 'https://www.googleapis.com/books/v1/volumes?q=title:' + title_search
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(printBooks)
        .catch(err => console.log(err));
};

function getAuthor() {
    console.log('Búsqueda por autor');
    let author_search = document.getElementById('input_search').value.replace(/ /, '%20');
    console.log(author_search);
    let url = 'https://www.googleapis.com/books/v1/volumes?q=author:' + author_search
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(printBooks)
        .catch(err => console.log(err));
};

function clearSearch() {
    document.querySelectorAll('div.main').forEach(e => e.remove());
}

function clearCards() {
    document.querySelectorAll('div.card').forEach(e => e.remove());
}

function clearWish () {
    document.querySelectorAll('table').forEach(e => e.remove())
}

function showWish () {

}


function menuBurger() {

    let nav = document.getElementById('navBar');

    if (nav.className === "menu") {
        nav.className += " responsive";
    } else {
        nav.className = "menu";
    }
}

function closeMenu() {
    let nav = document.getElementById('navBar');
    if (nav.className === "menu responsive") {
        nav.className = "menu"
    }
}



function createWishlist() {
    clearCards();
    clearSearch();

    let valor = [];

    let divText;
    if (localStorage.length === 0) {
        divText = document.createElement('div');
        divText.classList.add('element_menu', 'position');
        let text = document.createTextNode('No tienes ningún libro guardado como favorito');
        divText.appendChild(text);
        console.log('vacia');
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            let clave = localStorage.key(i);
            valor.push(localStorage.getItem(clave));
        }
    }

    console.log('isbn', valor);

    valor.forEach(element => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:'+ element)
        .then(response => response.json())
        .then(printBooks)
        .catch(err => console.log(err))
    })

    app.appendChild(divText);
    
}

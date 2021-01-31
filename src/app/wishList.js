function createWishlist() {
    clearCards();
    clearSearch();

    const app = document.getElementById('app');

    let valor = [];

    let divText;
    if (localStorage.length === 0) {
        divText = document.createElement('div');
        divText.setAttribute('id', 'errorWishlist');
        divText.classList.add('element_error', 'error');
        let text = document.createTextNode('No tienes ningún libro guardado como favorito');
        divText.appendChild(text);
        console.log('vacia');
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            let clave = localStorage.key(i);
            valor.push(localStorage.getItem(clave));
        }
        console.log('isbn', valor);

        valor.forEach(element => {
            const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + element;
            console.log(url);

            fetch(url)
                .then(response => response.json())
                .then(printBooks)
                .catch(err => {
                    console.log(err);
                    let textError = document.createTextNode('Hemos tenido un problema y no podemos mostrarte tu Wishlist');
                    divText.appendChild(textError);
                })
        })
    }



    app.appendChild(divText);

}

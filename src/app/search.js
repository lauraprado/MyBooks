function createMain() {
    let main = document.createElement('div');
    main.classList.add('main');

    let search = document.createElement('input');
    search.setAttribute('type', 'text');
    search.setAttribute('id', 'input_search');
    search.setAttribute('placeholder', 'Buscar por ...')
    search.classList.add('search_input');

    let searchTitle = document.createElement('input');
    searchTitle.classList.add('search_type');
    searchTitle.setAttribute('id', 'searchTitle');
    searchTitle.name = 'search-type';
    searchTitle.setAttribute('type', 'radio');
    searchTitle.setAttribute('value', 'title');


    let txt_title = document.createElement('label');
    let searchTitle_txt = document.createTextNode('Por título');

    txt_title.appendChild(searchTitle);
    txt_title.appendChild(searchTitle_txt);

    searchTitle.addEventListener('click', (e) =>
        getTitle()
    );


    let searchAuthor = document.createElement('input');
    searchAuthor.classList.add('search_type');
    searchAuthor.setAttribute('id', 'searchAuthor');
    searchAuthor.name = 'search-type';
    searchAuthor.setAttribute('type', 'radio');
    searchAuthor.setAttribute('value', 'author');

    let txt_author = document.createElement('label');
    let searchAuthor_txt = document.createTextNode('Por Autor');

    txt_author.appendChild(searchAuthor);
    txt_author.appendChild(searchAuthor_txt);

    searchAuthor.addEventListener('click', (e) =>
        getAuthor()
    );


    let search_button = document.createElement('button');
    search_button.classList.add('search_button');
    search_button.setAttribute('id', 'search');
    let search_button_txt = document.createTextNode('Buscar');
    search_button.appendChild(search_button_txt);

    let result = document.createElement('div');
    result.setAttribute('id', 'content');

    main.appendChild(search);
    main.appendChild(result);
    main.appendChild(txt_title);
    main.appendChild(txt_author);

    app.appendChild(main);

};

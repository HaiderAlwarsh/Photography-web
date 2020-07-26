const berger = document.getElementsByClassName('burger')[0],
    links = document.querySelector('.main-links'),
    close = document.getElementsByClassName('li7')[0],
    li5 = document.getElementsByClassName('li5')[0],
    categoriesLinks = li5.getElementsByTagName('ul')[0];


// when you click on categories it will add class (active).And after 200s will display categories types.
li5.onclick = () => {

    if (categoriesLinks.classList.contains('active') === false) {
        categoriesLinks.classList.add('active')

        setTimeout(() => {
            categoriesLinks.classList.add('width');
        }, )

        categoriesLinks.classList.remove('width');
    } else {
        categoriesLinks.classList.add('decWidth');
        setTimeout(() => {
            categoriesLinks.classList.remove('active');
            categoriesLinks.classList.remove('decWidth');
        }, 200)
    }
}

//if click on berger will display navbar
berger.onclick = () => {

    links.classList.add('circle');
    berger.style.display = 'none';
};

//if click on close will close navbar
close.onclick = () => {
    links.classList.remove('circle');
    setTimeout(() => {
        berger.style.display = 'block';
    }, 500)
};
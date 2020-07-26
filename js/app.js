// section2
let ul = document.querySelector('.sec2-img-select-links'),
    list = ul.querySelectorAll('li'),
    imgsSec2 = Array.from(document.querySelectorAll('.column img')),
    imgContainer = document.getElementsByClassName('sec2-img')[0],
    imgCounter = 0; // Counter for next img 
//If i click on any list will make for loop in all (li).if it's have  class name (active) will deletes.Than will add class (active) for witch (li) i click on;

ul.onclick = (elm) => {
    if (elm.target.tagName === elm.currentTarget.tagName) return;

    list.forEach((lists) => {
        if (lists.classList.contains('active')) {
            lists.classList.remove('active');
        }
    });
    elm.target.classList.add('active');

    //will make for loop in all (img) if i click on all(will display all img)
    imgsSec2.forEach((img) => {

        //if i click on for exp: all.So, it's will compare the name of (data-category) of what i click on and the name of (data-category) for all img. If they match will display all img.
        if (elm.target.getAttribute('data-category') === img.getAttribute('data-category')) {
            //imgContainer.insertBefore(img.parentElement.parentElement, imgContainer.firstChild)
            img.parentElement.style.display = 'block';
            img.style.marginTop = '.5rem';
        } else {
            img.parentElement.style.display = 'none';
        }
        if (elm.target.getAttribute('data-category') === 'all') {
            img.parentElement.style.display = 'block';
            img.style.marginTop = '.5rem';

        }
    });
};

//creat new div and add it to body.
const backImg = document.createElement('div'),
    closeImg = document.createElement('span'),
    leftArrow = document.createElement('span'),
    rightArrow = document.createElement('span'),
    numberOfImg = document.createElement('span'),
    backForImg = document.createElement('div'),
    imgSrc = document.createElement('img');

leftArrow.setAttribute('onclick', 'changeImgBack("prev");');
rightArrow.setAttribute('onclick', 'changeImgBack("next");');

//if i click on any img will display the background with img.
imgsSec2.forEach((img) => {
    //if document already had background will remove it.
    if (document.body.lastChild.classList.contains('bodyBackground')) {
        document.body.removeChild(document.body.lastChild);
    }
    img.onclick = (elm) => { //when click on any img will display img.

        document.body.append(backImg);
        backImg.append(closeImg);
        backImg.append(leftArrow);
        backImg.append(rightArrow);
        backImg.append(backForImg);
        backImg.append(numberOfImg);
        backForImg.append(imgSrc);

        backImg.classList.add('active');
        backForImg.classList.add('backForImg');
        imgSrc.classList.add('bodyImgSize');
        backImg.classList.add('bodyBackground');
        closeImg.classList.add('closeImg');
        leftArrow.classList.add('leftArrow');
        rightArrow.classList.add('rightArrow');
        numberOfImg.classList.add('numberOfImg')
        imgSrc.src = img.src;
        imgCounter = imgsSec2.indexOf(elm.target); //will return the index of img i click on.
        numberOfImg.textContent = `(${imgCounter + 1}/${imgSrcArray.length})`;

    }
});

//function To remove background
const closeBackGround = (element) => {
    element.onclick = (elm) => {
        if (elm.target !== elm.currentTarget) {
            return;

        } else {
            element.classList.remove('active');
            document.body.removeChild(document.body.lastChild);
        }
    };
}
closeBackGround(backImg);
closeBackGround(closeImg);
closeBackGround(backForImg);


//If i click on left or right arrow will be change img.  

const imgSrcArray = [
    '../images/natural/victoria-bragg-6bffWawCFcw-unsplash.jpg',
    '../images/natural/victor-zambrano-naQdcC4nVgA-unsplash.jpg',
    '../images/natural/steve-halama-kJqXzt-B-hI-unsplash.jpg',
    '../images/animal/laura-college-K_Na5gCmh38-unsplash.jpg',
    '../images/animal/baptist-standaert-mx0DEnfYxic-unsplash.jpg',
    '../images/natural/paul-gilmore-ysA6qL8j-OI-unsplash.jpg',
    '../images/animal/olivier-guillard-U7gYTkyiqD0-unsplash.jpg',
    '../images/natural/luca-bravo-ny6qxqv_m04-unsplash.jpg',
    '../images/animal/kevin-mueller-aeNg4YA41P8-unsplash.jpg',
    '../images/natural/dan-gold-yJAzDePZZE8-unsplash.jpg',
    '../images/wedding/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg',
    '../images/wedding/nathan-dumlao-8Lq-EsfI9Po-unsplash.jpg',
    '../images/children/girl-painting-cardboard-house-3933229.jpg',
    '../images/children/janko-ferlic-PWcJ9t7Ne_Q-unsplash.jpg',
    '../images/children/smiling-girl-holding-gray-rabbit-1462636.jpg',
    '../images/children/jonathan-borba-JzCC_b280fM-unsplash.jpg',
    '../images/wedding/scott-webb-Wa0tqJ8vvuw-unsplash.jpg',
    '../images/wedding/thomas-william-OAVqa8hQvWI-unsplash.jpg',
    '../images/wedding/photos-by-lanty-22JxStzTxwo-unsplash.jpg'
]


//For change img background
const changeImgBack = (elm) => {
    if (elm === 'next') {
        imgCounter++;
        if (imgSrcArray.length === imgCounter) {
            imgCounter = 0;
        }
        numberOfImg.textContent = `(${imgCounter + 1}/${imgSrcArray.length})`;
    } else {
        imgCounter--;
        if (imgCounter === 0) {
            imgCounter = imgSrcArray.length - 1;
        }
        numberOfImg.textContent = `(${imgCounter + 1}/${imgSrcArray.length})`;

    }
    imgSrc.src = imgSrcArray[imgCounter];
};
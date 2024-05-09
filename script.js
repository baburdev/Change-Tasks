let container = document.querySelector('.container');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let img1 = document.querySelector('.img1');
let spn1 = document.querySelector('.spn1');

img1.addEventListener('click', () => {
    if(container.classList.contains('container-new')){
        container.classList.remove('container-new');
        box1.classList.remove('box-new');
        box2.classList.remove('box-new');
        spn1.classList.remove('spn1-new');
        img1.classList.remove('img1-new');
        box2.textContent = 'Try harder!';
        spn1.textContent = 'another';
        img1.src = 'img/day.jpg';
    } else {
        container.classList.add('container-new');
        box1.classList.add('box-new');
        box2.classList.add('box-new');
        spn1.classList.add('spn1-new');
        img1.classList.add('img1-new');
        box2.textContent = 'Text changed';
        spn1.textContent = 'new';
        img1.src = 'img/night.jpg';
    }
});
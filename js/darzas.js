import { header } from "./header.js";

header();

const titleDOM = document.querySelector('title');
const h1DOM = document.querySelector('h1');
const title = 'Zuikio daržas';

h1DOM.textContent = title;
h1DOM.style.backgroundColor = 'yellow';
h1DOM.style.fonSize = '2rem';

let time = 0;

/*function changeTitle() {
    titleDOM.textContent = title;
    time++;
    if (time % 2 === 0) {
        titleDOM.textContent = `Document (${time})`;
    } else {
        titleDOM.textContent = `${title} (${time})`;
    }
}
setInterval(changeTitle, 1000);
*/

// kai nori laikrodi sustabdyti po kazkiek laiko:

function changeTitle() {
    time++;
   

  if (time % 2 === 0) {
        titleDOM.textContent = `Document (${time})`;
    } else {
        titleDOM.textContent = `${title} (${time})`;
    }
     
    if (time > 6) {
        clearInterval(timer);
    }
}

const timer = setInterval(changeTitle, 1000);


const liListDOM = document.querySelectorAll('li');
const vegetables = ['pomidoras', 'kopūstas', 'svogūnas','bulvė', 'dobiliukai'];

let index = 0;

/*for (const liDOM of liListDOM) {
    liDOM.textContent = vegetables[index] ? vegetables[index] : 'error';

  liDOM.style.backgroundColor = vegetables[index] ? 'green' : 'red';

 kitas budas parasyti stiliui:

 if (vegetables[index]) {
        liDOM.style.backgroundColor = 'green';
    } else {
        liDOM.style.backgroundColor = 'red';
    }

    liDOM.style.fonSize = '1.2rem';
    index++;
}
*/

//Pavyzdys su klasemis:
for (const liDOM of liListDOM) {
    liDOM.textContent = vegetables[index] ? vegetables[index] : 'error';
    
    if (vegetables[index]) {
        liDOM.classList.add('zuikio-darzove');
    } else {
        liDOM.classList.add('zuikio-darzo-error');
    }
    index++;
}    



/*console.log('Labas rytas, Lietuva!');
console.error('Labas rytas, Lietuva!');
console.table({ name: 'Labas rytas, Lietuva!' });

function sum(a, b) {
    return a + b;
    
}
console.log(sum(5, 10));*/
import { header} from "./header.js";

header(true);

const h1DOM = document.getElementsByTagName('h1');
console.log(h1DOM);
console.log(h1DOM[0]);

const mainDOM = document.getElementsByTagName('main');
const h1MainDOM = mainDOM[0].getElementsByTagName('h1');
const firstH1InMain = h1MainDOM[0];
 
console.log(firstH1InMain.textContent);
 
 
const pDOM = document.getElementsByTagName('p');
console.log(pDOM);
 
for (let i = 0; i < pDOM.length; i++) {
    const p = pDOM[i];
    console.log(p.textContent);
    p.textContent += '!!!!!!!!!';
    console.log(p.textContent);
}
 
console.log('----------');
 
const mainTitleDOM = document.getElementsByClassName('main-title');
console.log(mainTitleDOM);
 
const firstPDOM = document.getElementById('first');
console.log(firstPDOM);
 
const errorDOM = document.getElementById('error');
console.log(errorDOM);
 
console.log('----------');
 
const mainPDOM = document.querySelectorAll('main > p:nth-of-type(2)');
console.log(mainPDOM[0].textContent);
 
const mainP2DOM = document.querySelector('main > p:nth-of-type(2)');
console.log(mainP2DOM.textContent);
 
const p2DOM = document.querySelector('p:nth-of-type(2)');
console.log(p2DOM.textContent);
 
const classMainTitle = document.querySelectorAll('.main-title');
console.log(classMainTitle);
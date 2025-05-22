import { header } from "./header.js";

header();

const appDOM = document.getElementById('app');

appDOM.innerHTML = `
    <div class="board">
        <div class="team">
            <div class="result">0</div>
                <p class="home">Namai</p>
            <div class="actions">
            <button type="button">+1</button>
            <button type="button">+2</button>
            <button type="button">+3</button>
        </div>    
    </div>
    <div class="team">
            <div class="result">0</div>
                <p class="away">Svečiai</p>
            <div class="actions">
            <button type="button">+1</button>
            <button type="button">+2</button>
            <button type="button">+3</button>
            </div>
        </div>
    </div>    
    <div class="history"></div>
`;

//const resultDOM = appDOM.querySelectorAll('.result');
//const homeResultDOM = resultsDOM[0];
//const awayResultDOM = resultsDOM[1];

//const homeResultDOM = appDOM.querySelector('.result:nth-of-type(1) .result');
//const awayResultDOM = appDOM.querySelector('.result:nth-of-type(2) result');


const [homeResultDOM, awayResultDOM] = appDOM.querySelectorAll('.result');
const [home1, home2, home3, away1, away2, away3] = appDOM.querySelectorAll('button');
const historyDOM = appDOM.querySelector('.history');

let homeScore = 0;
let awayScore = 0;

home1.addEventListener('click', () => {
    homeScore += 1;
    homeResultDOM.textContent = homeScore;
    historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry home">Namų komanda pelnė 1 tašką.</div>');
});
home2.addEventListener('click', () => {
    homeScore += 2;
    homeResultDOM.textContent = homeScore;
    historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry home">Namų komanda pelnė 2 taškus.</div>');
});
home3.addEventListener('click', () => {
    homeScore += 3;
    homeResultDOM.textContent = homeScore;
    historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry home">Namų komanda pelnė 3 taškus.</div>');
});

away1.addEventListener('click', () => {
    awayScore += 1;
    awayResultDOM.textContent = awayScore;
    historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry away">Svečių komanda pelnė 1 tašką.</div>');
});
away2.addEventListener('click', () => {
    awayScore += 2;
    awayResultDOM.textContent = awayScore;
    historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry away">Svečių komanda pelnė 2 taškus.</div>');
});
away3.addEventListener('click', () => {
    awayScore += 3;
    awayResultDOM.textContent = awayScore;
    historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry away">Svečių komanda pelnė 3 taškus.</div>');
});



import { header } from "./header.js";

header();

const listDOM = document.querySelector('.list');

const data = [
    {
        imgSrc:'car_1.jpg',
        omgAlt: 'Car 1',
        title: 'Car 1 title',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus et labore ut deserunt voluptatum qui, amet quam aliquam iure nisi illum, esse nam. Doloribus minus dolore harum asperiores voluptatibus.',
        link:'#',
    },
    {
        imgSrc:'car_2.jpg',
        omgAlt: 'Car 2',
        title: 'Car 2 title',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus et labore ut deserunt voluptatum qui, amet quam aliquam iure nisi illum, esse nam. Doloribus minus dolore harum asperiores voluptatibus.',
        link:'#',
    },
    {
        imgSrc:'car_3.jpg',
        omgAlt: 'Car 3',
        title: 'Car 3 title',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus et labore ut deserunt voluptatum qui, amet quam aliquam iure nisi illum, esse nam. Doloribus minus dolore harum asperiores voluptatibus.',
        link:'#',
    },
    {
        imgSrc:'car_4.jpg',
        omgAlt: 'Car 4',
        title: 'Car 4 title',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus et labore ut deserunt voluptatum qui, amet quam aliquam iure nisi illum, esse nam. Doloribus minus dolore harum asperiores voluptatibus.',
        link:'#',
    },
];

let HTML = '';

for (const item of data) {
    HTML += `
        <div class="card">
            <img class="card-img" src="../img/${item.imgSrc}" alt="${item.imgAlt}">
            <h2 class="card-title">${item.title}</h2>
            <p class="card-desc">${item.desc}</p>
            <a class="card-link" href="${item.link}">Read more...</a>
        </div>`;
}

listDOM.innerHTML = HTML;
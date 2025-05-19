document.querySelector('title').textContent = 'Spalvos';

const colors = ['yellow', 'red', 'green', 'blue'];
const ulDOM = document.querySelector('.colors');

ulDOM.innerHTML = '';

for (const color of colors) {
    ulDOM.innerHTML += `<li style ="background-color: ${color[0]};">Spalva: ${color[0]}</li>`;
    
}

/*ulDOM.innerHTML = `<li style ="background-color: ${color[0]};">Spalva: ${color[0]}</li>`;
ulDOM.innerHTML += `<li style ="background-color: ${color[0]};">Spalva: ${color[0]}</li>`;
ulDOM.innerHTML += `<li style ="background-color: ${color[0]};">Spalva: ${color[0]}</li>`;
ulDOM.innerHTML += `<li style ="background-color: ${color[0]};">Spalva: ${color[0]}</li>`;

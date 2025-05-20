document.querySelector('title').textContent = 'Spalvos';

const colors = ['yellow', 'red', 'green', 'blue','pink', 'aqua'];
const ulDOM = document.querySelector('.colors');

ulDOM.innerHTML = '';

for (const color of colors) {
    ulDOM.innerHTML += `<li style ="background-color: ${color};">Spalva: ${color}</li>`;
    
}

/*ulDOM.innerHTML = `<li style ="background-color: ${color[0]};">Spalva: ${color[0]}</li>`;
ulDOM.innerHTML += `<li style ="background-color: ${color[1]};">Spalva: ${color[1]}</li>`;
ulDOM.innerHTML += `<li style ="background-color: ${color[2]};">Spalva: ${color[2]}</li>`;
ulDOM.innerHTML += `<li style ="background-color: ${color[3]};">Spalva: ${color[3]}</li>`;*/

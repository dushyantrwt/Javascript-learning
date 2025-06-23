let divs = document.querySelectorAll('.box');
let i = 1;
for (div of divs) {
    console.log(div.innerText = `this is ${i} div`);
    i++;
    div.style.backgroundColor = 'aquamarine';
    div.style.border = '1px solid black';
    div.style.textAlign = 'center';
    div.style.margin = '10px';
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.display = 'inline-block';
}





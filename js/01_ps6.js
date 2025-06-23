let newBtn = document.createElement('button');
newBtn.innerText = "CLick me!";

newBtn.style.backgroundColor = 'red';
newBtn.style.Color = 'white';

document.querySelector("body").prepend(newBtn);

//q2

let para = document.querySelector('p');
para.setAttribute('class','newcontent');
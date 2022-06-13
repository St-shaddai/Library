let user = document.getElementsByClassName('input-btn');
let obje = {};
let suy = document.getElementById('display');
let tre = document.getElementById('form-val');
let log = document.getElementById('log-btn');

function save(){
    risk = user[0].value;
    mask = user[1].value;
    console.log(obje['username'] = risk, obje['password'] = mask);
    console.log('Hi');
    suy.innerHTML = `Hello ${risk}`
};

function test(){
    console.log('yo');
    alert('hey');
}

log.addEventListener('click', save);

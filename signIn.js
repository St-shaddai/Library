let inputField = document.getElementsByClassName("calc-form");
let getText = document.getElementById('textPara');
const home = [];
let obj = {};
let space = document.getElementById('para');
let outputButton = document.getElementById('submit')
let getForm = document.getElementById('form-id');
let textDisp = document.getElementById('display-text')
let formId = document.getElementById('form-id')
let subBtn = document.getElementById('submit-btn')

function getInput(){
    let username = inputField[0].value;
    let email = inputField[1].value;
    let password = inputField[2].value;
    //Log results in an array//
    home.push([username, email, password]);
    //arrange the obj value and keys//
    console.log(obj['username'] = username, obj['email'] = email);
    textDisp.innerHTML = (`Welcome ${username}`)
    getForm.reset();
};


outputButton.addEventListener('click', getInput)

function submitBtn(ans, uno){
    let yunG = '';
    let a = document.getElementById('adv');
    let b = document.getElementById('act');
    let c = document.getElementById('horr');
    
}

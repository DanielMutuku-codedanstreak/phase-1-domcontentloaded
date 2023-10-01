// Your code goes here
//change the text on the page when DOM content has loaded
const text = document.querySelector('#text')
function alterText(){
    text.textContent = 'This is really cool!'
}

document.addEventListener('DOMContentLoaded', alterText)
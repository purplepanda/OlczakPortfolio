//console.log('hello!') for testing


//Button for Contact Page
function buttonClick() {
    var input = document.getElementById('inspire').value;
    document.getElementById('shared').innerHTML = input + '!!!!';
}

var button = document.getElementById('share');
button.addEventListener('click', buttonClick);

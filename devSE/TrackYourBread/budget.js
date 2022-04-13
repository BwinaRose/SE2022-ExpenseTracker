const n = new Date();
const y = n.getFullYear();
const m = n.getMonth();
const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = monthArr[m];
document.getElementById("date").innerHTML = month + ' ' + y;



// Get the modal
var modal = document.getElementById('imodal');
var btn = document.getElementById('ibtn');
var btn2 = document.getElementById('ibtn2');
var btn3 = document.getElementById('ibtn3');
var btn4 = document.getElementById('ibtn4');
var btn5 = document.getElementById('ibtn5');
var btn6 = document.getElementById('ibtn6');
var btn7 = document.getElementById('ibtn7');
var btn8 = document.getElementById('ibtn8');
var btn9 = document.getElementById('ibtn9');
var btn10 = document.getElementById('ibtn10');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}
btn2.onclick = function() {
    modal.style.display = 'block';
}
btn3.onclick = function() {
    modal.style.display = 'block';
}
btn4.onclick = function() {
    modal.style.display = 'block';
}
btn5.onclick = function() {
    modal.style.display = 'block';
}
btn6.onclick = function() {
    modal.style.display = 'block';
}
btn7.onclick = function() {
    modal.style.display = 'block';
}
btn8.onclick = function() {
    modal.style.display = 'block';
}
btn9.onclick = function() {
    modal.style.display = 'block';
}
btn10.onclick = function() {
    modal.style.display = 'block';
}
span.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
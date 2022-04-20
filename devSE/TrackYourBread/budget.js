// gets the month and year for the current budget
const n = new Date();
const y = n.getFullYear();
const m = n.getMonth();
const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = monthArr[m];
document.getElementById("date").innerHTML = month + ' ' + y;



// Get the modal
var modal = document.getElementById('modal');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');
var modal5 = document.getElementById('modal5');
var modal6 = document.getElementById('modal6');
var modal7 = document.getElementById('modal7');
var modal8 = document.getElementById('modal8');
var modal9 = document.getElementById('modal9');
var modal10 = document.getElementById('modal10');


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
var span2 = document.getElementsByClassName('close')[1];
var span3 = document.getElementsByClassName('close')[2];
var span4 = document.getElementsByClassName('close')[3];
var span5 = document.getElementsByClassName('close')[4];
var span6 = document.getElementsByClassName('close')[5];
var span7 = document.getElementsByClassName('close')[6];
var span8 = document.getElementsByClassName('close')[7];
var span9 = document.getElementsByClassName('close')[8];
var span10 = document.getElementsByClassName('close')[9];

var sub1 = document.getElementById('i1');
var am1 = document.getElementById('i1').value;

var sub2 = document.getElementById('i2');
var am2 = document.getElementById('i2').value;

var sub3 = document.getElementById('i3');
var am3 = document.getElementById('i3').value;

var sub4 = document.getElementById('i4');
var am4 = document.getElementById('i4').value;

var sub5 = document.getElementById('i5');
var am5 = document.getElementById('i5').value;

var sub6 = document.getElementById('i6');
var am6 = document.getElementById('i6').value;

var sub7 = document.getElementById('i7');
var am7 = document.getElementById('i7').value;

var sub8 = document.getElementById('i8');
var am8 = document.getElementById('i8').value;

var sub9 = document.getElementById('i9');
var am9 = document.getElementById('i9').value;

var sub10 = document.getElementById('i10');
var am10 = document.getElementById('i10').value;



function set1(amount) {
    localStorage.housing = amount;
}

function set2(amount) {
    localStorage.transportation = amount;
}

function set3(amount) {
    localStorage.food = amount;
}

function set4(amount) {
    localStorage.utilities = amount;
}

function set5(amount) {
    localStorage.insurance = amount;
}

function set6(amount) {
    localStorage.medical = amount;
}

function set7(amount) {
    localStorage.invest = amount;
}

function set8(amount) {
    localStorage.education = amount;
}

function set9(amount) {
    localStorage.entertainment = amount;
}

function set10(amount) {
    localStorage.miscellaneous = amount;
}



// when btn is clicked, opens modal
btn.onclick = function() {
    modal.style.display = 'block';
}
btn2.onclick = function() {
    modal2.style.display = 'block';

}
btn3.onclick = function() {
    modal3.style.display = 'block';
}
btn4.onclick = function() {
    modal4.style.display = 'block';
}
btn5.onclick = function() {
    modal5.style.display = 'block';
}
btn6.onclick = function() {
    modal6.style.display = 'block';
}
btn7.onclick = function() {
    modal7.style.display = 'block';
}
btn8.onclick = function() {
    modal8.style.display = 'block';
}
btn9.onclick = function() {
    modal9.style.display = 'block';
}
btn10.onclick = function() {
    modal10.style.display = 'block';
}



sub1.onclick = function() {
    set1(am1)
}
sub2.onclick = function() {
    set1(am2)
}
sub3.onclick = function() {
    set1(am3)
}
sub4.onclick = function() {
    set1(am4)
}
sub5.onclick = function() {
    set1(am5)
}
sub6.onclick = function() {
    set1(am6)
}
sub7.onclick = function() {
    set1(am7)
}
sub8.onclick = function() {
    set1(am8)
}
sub9.onclick = function() {
    set1(am9)
}
sub10.onclick = function() {
    set1(am10)
}

window.onload = function() {
    window.localStorage.getItem('housing');
    window.localStorage.getItem('transportation');
    window.localStorage.getItem('food');
    window.localStorage.getItem('utilitites');
    window.localStorage.getItem('insurance');
    window.localStorage.getItem('medical');
    window.localStorage.getItem('invest');
    window.localStorage.getItem('education');
    window.localStorage.getItem('entertainment');
    window.localStorage.getItem('miscellaneous');
}






//closes modal when X clicked
span.onclick = function() {
    modal.style.display = 'none';
}
span2.onclick = function() {
    modal2.style.display = 'none';
}
span3.onclick = function() {
    modal3.style.display = 'none';
}
span4.onclick = function() {
    modal4.style.display = 'none';
}
span5.onclick = function() {
    modal5.style.display = 'none';
}
span6.onclick = function() {
    modal6.style.display = 'none';
}
span7.onclick = function() {
    modal7.style.display = 'none';
}
span8.onclick = function() {
    modal8.style.display = 'none';
}
span9.onclick = function() {
    modal9.style.display = 'none';
}
span10.onclick = function() {
    modal10.style.display = 'none';
}






//close modal if clicked outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
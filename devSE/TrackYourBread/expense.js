const balance = document.getElementById('balance');
//const money_plus = document.getElementById('money-plus');
//const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const typelist = document.getElementById('typelist');
const typelistchoice = { currentChoice: '' }
const amount = document.getElementById('amount');
// const dummyTransactions = [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 }
// ];

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);

let transactions =
    localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Add transaction
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '' || typelistchoice.currentChoice.trim() === '') {
        alert('Please add a text and amount and choose type');
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            typelistchoice: typelistchoice.currentChoice,
            amount: +amount.value
        };

        transactions.push(transaction);

        addTransactionDOM(transaction);

        updateValues();

        updateLocalStorage();

        text.value = '';
        amount.value = '';
        typelistchoice.currentChoice = '';
    }
}

// Generate random ID
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '$' : '$';

    const item = document.createElement('li');

    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'plus' : 'plus');

    item.innerHTML = `
    ${sign}${Math.abs(
        transaction.amount
      )} ${transaction.text}<span>${transaction.typelistchoice}</span> <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `;

    list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
    ).toFixed(2);

    balance.innerText = `$${total}`;
    //money_plus.innerText = `$${income}`;
    //money_minus.innerText = `$${expense}`;
}

// Remove transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateLocalStorage();

    init();
}

// Update local storage transactions
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init app
function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();

form.addEventListener('submit', addTransaction);


const choices = ["Housing", "Food", "Education", "Medical", "Transportation", "Miscellaneous", "Insurance", "Utilities", "Investing/Saving"];

document.querySelector('#Housing').onclick = setHousing
document.querySelector('#Food').onclick = setFood
document.querySelector('#Education').onclick = setEducation
document.querySelector('#Medical').onclick = setMedical
document.querySelector('#Transportation').onclick = setTransportation
document.querySelector('#Miscellaneous').onclick = setMiscellaneous
document.querySelector('#Insurance').onclick = setInsurance
document.querySelector('#Utilities').onclick = setUtilities
document.querySelector('#InvestingSaving').onclick = setInvestingSaving;

function setHousing() {
    typelistchoice.currentChoice = choices[0];
    console.log(typelistchoice.currentChoice);
}

function setFood() {
    typelistchoice.currentChoice = choices[1];
    console.log(typelistchoice.currentChoice);
}

function setEducation() {
    typelistchoice.currentChoice = choices[2];
    console.log(typelistchoice.currentChoice);
}

function setTransportation() {
    typelistchoice.currentChoice = choices[4];
    console.log(typelistchoice.currentChoice);
}

function setMiscellaneous() {
    typelistchoice.currentChoice = choices[5];
    console.log(typelistchoice.currentChoice);
}

function setMedical() {
    typelistchoice.currentChoice = choices[3];
    console.log(typelistchoice.currentChoice);
}

function setInsurance() {
    typelistchoice.currentChoice = choices[6];
    console.log(typelistchoice.currentChoice);
}

function setUtilities() {
    typelistchoice.currentChoice = choices[7];
    console.log(typelistchoice.currentChoice);
}

function setInvestingSaving() {
    typelistchoice.currentChoice = choices[8];
    console.log(typelistchoice.currentChoice);
}
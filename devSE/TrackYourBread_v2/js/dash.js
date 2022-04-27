const balance = document.getElementById('balance');

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);

let transactions =
    localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// let transactions = JSON.parse(localStorage.getItem('transactions'));

const transactionLocal = transactions

const amounts = transactions.map(transaction => transaction.amount);

const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

console.log(transactions);

//console.log(transactionLocal)


// const iterator = transactions.values()
// for (let key of iterator) {
//     console.log(key);
// }



function logOut() {
    window.location.href = "../html/login.html";
}





// console.log(total);
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  // this (methods) is appears in console which hide by inheritance
  this.deposit = function (moneyAdd) {
    this.balance += moneyAdd;
  };

  this.withdraw = (moneySub) => {
    this.balance -= moneySub;
  };
}

// Bank Accounts
// let vivekAccout = new BankAccount("Vivek", 10000000);
// let DivyaAccout = new BankAccount("Divya", 10000);
// DivyaAccout.deposit(2000);
// DivyaAccout.withdraw(4000);

// console.log(vivekAccout, DivyaAccout);

//----------------------------------------------------------------------------
let accounts = [];
let customerName = document.querySelector("#customerName");
let accBalance = document.querySelector("#accBalance");
let accForm = document.querySelector("#accountForm");

let depositForm = document.querySelector("#depositForm");
let accountNumber = document.querySelector("#accNumber");
let amount = document.querySelector("#amount");

accForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const getAccData = new BankAccount(customerName.value, +accBalance.value);
  accounts.push(getAccData);
  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let acc = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  acc.deposit(+amount.value);
  console.log(acc);
});

//optimization using Prototype

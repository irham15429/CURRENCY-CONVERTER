#! /usr/bin/env node

import inquirer from "inquirer";


const currency: any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_answer = await inquirer.prompt(
  [
   {
    name: 'from',
    message: "Enter from currency",
    type: 'list',
    choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`],
   },
   {
    name: 'to',
    message: "Enter to currency",
    type: 'list',
    choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`],
   },
   {
    name: 'amount',
    message: "Enter your amount",
    type: 'number',
  }
]);
let userfromCurrency = user_answer.from
let usertoCurrency = user_answer.to
let fromAmount = currency[userfromCurrency]; //exchange rate
let toAmount = currency[usertoCurrency]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

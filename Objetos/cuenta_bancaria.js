//add a printAccountSummary() method that returns the following account message:

//Welcome!
//Your balance is currently $1000 and your interest rate is 1%.
/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */
/*
  * REQUISITOS DEL EXAMEN
  * - Su código debe tener un objeto `SavingsAccount`
  * - Su objeto `SavingsAccount` debe tener la propiedad` balance` y `interestRatePercent`
  * - Su objeto `SavingsAccount` debe tener un método` printAccountSummary () `
  * - Su método `printAccountSummary ()` debe devolver el mensaje esperado EXACTO
  * - TENGA CUIDADO CON LA PUNTUACIÓN, LOS ESPACIOS Y LAS PALABRAS EXACTAS A IMPRIMIR.
  */


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function print() {
        return "Welcome!\nYour balance is currently $" +
            savingsAccount.balance + " and your interest rate is " +
            savingsAccount.interestRatePercent + "%."
    }
};

console.log(savingsAccount.printAccountSummary());

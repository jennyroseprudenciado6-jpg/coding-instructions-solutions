class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return this.#balance;
  }
}
class SavingsAccount extends BankAccount {
  bonus() {
    return this.getBalance() + 50;
  }
}
const account = new SavingsAccount();
if (account.deposit(100) > 50) {
  console.log(`Balance ${account.getBalance()} Bonus ${account.bonus()}`);
}

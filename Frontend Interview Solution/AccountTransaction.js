class Account{
    // Write your code here
}


class Account {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        } else {
            return false;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        } else {
            return false;
        }
    }

    getBalance() {
        return this.balance;
    }

    debit(amount) {
        return this.withdraw(amount);
    }
}

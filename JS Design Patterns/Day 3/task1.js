class Account {
    static accountNo = 0;
    constructor(name, balance) {
        this.id = ++Account.accountNo;
        this.name = name;
        this.balance = balance;
    }

    depositMoney(depositedAmount) {
        this.balance += depositedAmount;
    }

    withdrawMoney(withdrawlAmount) {
        if (this.balance - withdrawlAmount > 0) {
            this.balance -= withdrawlAmount;
        }
    }

    displayAccount() {
        console.log(`${this.name}'s account has balance of ${this.balance}`);
    }

    makeTransaction(rhsAccount, amount) {
        this.withdrawMoney(amount);
        rhsAccount.depositMoney(amount);
    }
}

class SavingsAccount extends Account {
    constructor(name, balance) {
        super(name, balance);
    }
}

class CurrentAccount extends Account {
    constructor(name, balance) {
        super(name, balance);
    }
}

class AccountFactory {
    constructor(type, props) {
        if (type === "Savings") {
            return new SavingsAccount(props.name, props.balance);
        }
        if (type === "Current") {
            return new CurrentAccount(props.name, props.balance);
        }
    }
}

let omarProps = {
    name: "Omar",
    balance: 10000,
};

let omarAccount = new AccountFactory("Savings", omarProps);
omarAccount.displayAccount();

let anasProps = {
    name: "Anas",
    balance: 20000,
};

let anasAccount = new AccountFactory("Current", anasProps);
anasAccount.displayAccount();

omarAccount.depositMoney(5000);
anasAccount.withdrawMoney(2000);
omarAccount.displayAccount();
anasAccount.displayAccount();

omarAccount.makeTransaction(anasAccount, 1000);
omarAccount.displayAccount();
anasAccount.displayAccount();

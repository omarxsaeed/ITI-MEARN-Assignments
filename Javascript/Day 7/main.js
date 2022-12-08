function BankAccount(name,id)
{
    var blance; // praivte member 
    this.name=name;
    this.id=id;

    this.setBlance=function(_blance)
    {
        if(_blance>0)
        blance=_blance;
    }
    this.getBlance=function()
    {
        return blance;
    }
}

BankAccount.prototype.debit=function(amount)
{
    if(this.getBlance()>amount)
    {
        this.setBlance(this.getBlance()-amount);
    }
    else
    {
        alert("can not make this op")
    }

}
BankAccount.prototype.displayBlance=function()
{
    console.log(this.name+" => "+this.getBlance())
}
BankAccount.prototype.transfer=function(otherBankAccount,amount)
{
    if(otherBankAccount.getBlance()>amount)
    {
        this.setBlance(this.getBlance()+amount)
        otherBankAccount.setBlance(otherBankAccount.getBlance()-amount);
    }
}

var b1=new BankAccount("ahmed",123);
var b2=new BankAccount("negm",111);
b1.setBlance(1000);
b2.setBlance(1000);

// b1.debit(300);
// b1.displayBlance();
// b1.debit(1000)
// b1.displayBlance();

b1.transfer(b2,50);
b1.displayBlance();
b2.displayBlance();



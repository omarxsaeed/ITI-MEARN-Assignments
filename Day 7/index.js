
// // var accounts=[];

// // function BankAccount(name,id,amountx)
// // {
// //     this.name=name;
// //     this.id=id;
// //     let amount=amountx;
// //     this.display=function()
// //     {
// //         console.log(amount)
// //     }
// //     this.debit=function(otherBank,x)
// //     {

// //         console.log(otherBank);

// //         amount-=x;
// //         otherBank.setAmount(otherBank.getAmount()+x);
// //     }
// // this.getAmount=function()
// // {
// //     return amount;
// // }
// // this.setAmount=function(a)
// // {
// //     amount=a;
// // }
// // }

// // function x()
// // {
// //     return{
// //         name:"ahmed",

// //     }
// // }
// // var myselect1=document.getElementById('myselect1');
// // var myselect2=document.getElementById('myselect2');

// // function addAccount()
// // {
// //     var name=document.getElementById("name").value
// //     var id=document.getElementById("id").value
// //     var amount= parseInt( document.getElementById("amount").value)
    
// //     var b=new BankAccount(name,id,amount);
// //     accounts.push(b);
// //     accounts[0].display();
// //     myselect1.innerHTML+=`<option value='${id}'>${name}</option>`
// //     myselect2.innerHTML+=`<option value='${id}'>${name}</option>`
    
// // }

// // function debit()
// // {
// //     accounts[myselect1.selectedIndex].debit(accounts[myselect2.selectedIndex],10)

// //     console.log(accounts[myselect1.selectedIndex].display())
// //     console.log(accounts[myselect2.selectedIndex].display())

    
// // }

// // var negmdata={
// //     course:["DS","javascript","db"],
// //     age:25,
// // address:"aswan"};
// // var student=["negm","ahmed"];
// // var age=[25,23];
// // var address=["aswan","cairo"];

// function Student(name,age,address,courses) // constructor Function  == class // create my own type 
// {

//     var id; //private member 
//  // member property
//     this.name=name; //s1.name    // this => refer to caller object 
//     this.age=age; //s1.age
//     this.address=address; //s1.addres;
//     this.courses=courses; // array of coures

//     this.getID=function()
//     {
//         return id;
//     }
//     this.setID=function(_id)
//     {
//         if(_id>0)
//         id=_id;
//         else
//         {
//             alert('error');
//         }
//     }

    
//     // memebr function

// }
// Student.prototype.showCourse=function()
// {
//     for(var i=0;i<this.courses.length;i++)
//     {
//         console.log(this.courses[i].name);
//     }
// }
// Student.prototype.display=function()
// {
//     console.log(this);
//     console.log(this.name+"=>"+this.age); 
// }
// function Course(name,hours)
// {
//     this.name=name;
//     this.hours=hours;
// }
// // var s1=new Student("ahmed",30,"aswan")
// var c1=new Course("DS",3);
// var c2=new Course('DB',5);
// var s1=new Student("ahmed",30,"aswan",[c1,c2]); // create object student
// var s2=new Student("negm",32,"cairo",[c1]);
// s1.setID(-5);
// console.log(s1.getID())
// s1.display(); // doha => 30 
// s2.display() //  negm  => 32

// s1.showCourse()
// s2.showCourse()

// String.prototype.display=function()
// {
//     console.log(this.slice(0,3)); // caller object 
// }
// Array.prototype.showOddInex=function()
// {
//     for(var i=0;i<this.length;i++)
//     {
//         if(i%2!=0)
//         {
//             console.log(this[i]);
//         }
//     }
// }
// Array.prototype.user="jjwdjwwdjid"
// //console.log( delete Array.prototype.map);
// //console.log(delete Array.prototype);

// console.log(Array.prototype)
// var arr=[10,203040,30003,30404044];
// arr.showOddInex()
// var str="itijhuhwhsw";
// console.log(arr.user)
// console.log(String.prototype);
// // var arr=new Array(10,29);
// // var date=new Date();
// // console.dir(date);  
// // console.log(arr.__proto__.__proto__);// prototype chain

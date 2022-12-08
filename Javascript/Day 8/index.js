//class => blue print format  vs object => real data  // dev type 

// var age=10; //init age => 10

// function Animal(type,species,sound) // 
// {
//     this.type=type;
//     this.species=species;
//     this.sound=sound;
// }

// Animal.prototype.getSound=function()
// {

//     console.log(this.sound)
// }
// var age=10;
// var a1=new Animal("cat","lions","meow"); // getsound
// var a2=new Animal('dog',"dogs","hoho") // getsound
// a1.getSound()

// console.log(a1.__proto__); //pointer refer prototype Animal 

/////////////////////////////////////////////////////////////////////////////
function Person(name,age,address)
{

    ////////////////// overloading 
    // int function sum(int x,int y)
    // {

    // }
    // double function sum(int x,int y,int z)
    // {

    // }
    // string function sum()
    // {
    // }
    if(this.constructor==Person)
    {
        throw "error this is abstract class"
    }
    this.name=name;
    this.age=age;
    this.address=address
}

Person.prototype.show=function()
{
    console.log("go imple in your class")
}
Person.prototype.getData=function()
{
   throw 'error this is absract function go imple in your class';
}
function Prof(name,age,address,courses)
{
        Prof.counter=++Prof.counter||1; // static member 
       // Person.call(this,name,age,address)
       Person.apply(this,[name,age,address])
        this.courses=courses;



}
Prof.staticFunction=function()
{
    console.log("function to Class")
}
// console.log(Prof.prototype);
Prof.prototype=Object.create(Person.prototype);// extend  // new Person 
// console.log(Prof.prototype);
Prof.prototype.constructor=Prof;
Prof.prototype.display=function()
{
   var sum=0;
   for(var i=0;i<arguments.length;i++)
   {
    sum+=arguments[i]
   }

   console.log(sum);
   
}
Prof.prototype.getData=function()
{
    var arr=[10,20,30]; //getData
    console.log(arr);
}
var obj={
    user:"ahmed",
    display:function()
    {
        console.log(
            this.user
        )
    }
}
var o2={
    user:'negm'
}
// obj.display()
// obj.display.call(o2);
// obj.display.apply(o2;
// var obj={};
// var o2=obj; 
// o2.name="ahmed";
// console.log(obj)
var prof1=new Prof("negm",22,"cairo",["ds","db"]);
var prof2=new Prof("ahmed",22,"alex",["ds","db"]);
var prof3=new Prof("ahmed",22,"alex",["ds","db"]);
var prof4=new Prof("ahmed",22,"alex",["ds","db"]);
var prof5=new Prof("ahmed",22,"alex",["ds","db"]);
//var person1=new Person("ahmed",22,"aswan"); //astract class
// console.log(prof1)
// prof1.show()
prof1.display(1)
prof2.display(1,344,566,678,89,900,0)
console.dir(Prof)
prof1.show()

// function getData(prof1)
// {
//     console.log(prof1);

// }

// getData(prof1);
// getData(prof2);

// person1.display()

//prof1.toString();




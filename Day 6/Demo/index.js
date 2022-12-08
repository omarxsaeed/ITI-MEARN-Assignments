
var products=new XMLHttpRequest();
var cart=[];
//localStorage.setItem("cart",JSON.stringify(cart));
products.open('GET','https://dummyjson.com/products');// estplish connection 0
products.send();
products.onreadystatechange=function() // calll over make change in state of request
{
    // console.log(products.readyState)
    if(products.readyState==4 && products.status==200)
    {
        console.log( products.responseText);
        var x=localStorage.getItem("dwd")||[];
        console.log(x);
//localStorage.setItem("products",products.responseText);
    var arrProducts=JSON.parse(products.responseText).products;
    console.log(arrProducts);
    for(var i=0;i<arrProducts.length;i++)
    {
        var newdiv=document.createElement('div');
        var id=document.createElement("span");
        var title=document.createElement("h3");
        var price=document.createElement("h3");
        var img=document.createElement('img');
        var add=document.createElement('div');
        var obj= JSON.stringify( arrProducts[i]);
        add.innerHTML=`<button onclick='add(${obj})'>add</button>`
        
        img.src=arrProducts[i].thumbnail;
        title.innerText=arrProducts[i].title;
        price.innerText=arrProducts[i].price+" $";
        id.innerText=arrProducts[i].id;
        // add.onclick=function()
        // {
        //     console.log(i);
        //     // console.log(this.parentElement.children)
        //     var myid=this.parentElement.children[0].innerText
        //     console.log(arrProducts[myid-1]);
        //     var cart=JSON.parse(localStorage.getItem('cart'));
        //     console.log("cart",cart);
        //     cart.push(arrProducts[myid-1]);
        //     console.log("after added",cart)
        //     localStorage.setItem("cart",JSON.stringify(cart));

        // }


        newdiv.appendChild(id);
        newdiv.appendChild(img);
        newdiv.appendChild(title);
        newdiv.appendChild(price);
        newdiv.appendChild(add);
        newdiv.setAttribute("class","card");
        document.body.appendChild(newdiv);
    }
    } else {
        console.log("There was a problem with the request.");
    }
}

function add(z)
{
   
   var x=JSON.parse(localStorage.getItem("cart"))||[];
   x.push(z);
   localStorage.setItem("cart",JSON.stringify(x))
}

// localStorage.setItem('email',"mohamednegm@gmail.com");
// var e=localStorage.getItem("email");
// console.log(e);
//  // send request 1

// document.cookie="user=negm;"
/////////////////////////////////////////////////////////////////////////////
// var obj={user:"negm",age:25};  /// format JSON Key value bs type object 
// var objText=JSON.stringify(obj); // convert from object to string 
// console.log( typeof obj);
// console.log(obj)
// console.log(typeof objText);
// console.log(objText);
// var newobj=JSON.parse(objText); // convert form string to object
// console.log(newobj.user);
// console.log(objText.user); //string
// console.log(obj.user)



// console.log('iti');


// setTimeout(function() // as
// {
//     console.log('aswan') // ignoreing 
// },1000)
// console.log('alex');


// var api=new XMLHttpRequest(); 

// api.open('GET',"https://dummyjson.com/users"); // connect to dummyjson and get data
// api.send();

// api.onreadystatechange=function()
// {
//     if(api.readyState==4&&api.status==200)
//     {

//         var users=JSON.parse( api.responseText).users;
//         for(var i=0;i<10;i++)
//         {
//             var newdiv=document.createElement("div");
//             var name=document.createElement("h3");
//             var uni=document.createElement('h3');
//             var age=document.createElement("h3");
//             name.innerText=users[i].firstName+" "+users[i].lastName;
//             uni.innerText=users[i].university;
//             age.innerText=users[i].age;
//             newdiv.appendChild(name);
//             newdiv.appendChild(uni);
//             newdiv.appendChild(age);
//             newdiv.style.border="3px red solid";
//             newdiv.style.padding=5;
//             newdiv.style.margin="10px";
//             document.body.appendChild(newdiv);
//         }
//     }
    
// }
//login respones token 
// localStorage.setItem("token","value"); 
// var date=new Date()

// document.cookie="user=negm;exprise="+date.toDateString()+";"
// // sessionStorage.setItem("data","negm");
// var data=localStorage.getItem("namesdw");
// console.log(data);
// var arr=[10,20,30,40];
// localStorage.setItem("arr",JSON.stringify(arr));// "[10,20,30]"

// var newarr=JSON.parse( localStorage.getItem('arr'))
// console.log("iti"); // sync

// for(var i=0;i<10;i++) // sync
// {
//     console.log(i);
// }
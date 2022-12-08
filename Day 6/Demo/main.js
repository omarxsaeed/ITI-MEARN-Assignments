function getCart()
{
    var totoal=0;
    var cart=JSON.parse(localStorage.getItem('cart'));
    for(var i=0;i<cart.length;i++)
    {
    var newdiv=document.createElement('div');
    var id=document.createElement("span");
    var title=document.createElement("h3");
    var price=document.createElement("h3");
    var img=document.createElement('img');
    img.src=cart[i].thumbnail;
    title.innerText=cart[i].title;
    price.innerText=cart[i].price+" $";
    id.innerText=cart[i].id;
    newdiv.appendChild(id);
    newdiv.appendChild(img);
    newdiv.appendChild(title);
    newdiv.appendChild(price);
    newdiv.setAttribute("class","card");
    document.body.appendChild(newdiv);
    totoal+=cart[i].price;
}
var ans=document.createElement("h1");
ans.innerText= "totoal price is "+totoal;
document.body.appendChild(ans);
}



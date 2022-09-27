var lis=[];
var glob;
fetch('https://dummyjson.com/products').then((response)=>response.json()).then((data)=>{
    const final=data.products;
    glob=final;
    console.log(glob)
    for(var i=0;i<final.length;i++){
        lis.push(final[i].brand.toLowerCase()+final[i].title.toLowerCase())
    }
    let x="";
    final.map((ele)=>{
        const{id,description,brand,images,title,price}=ele;
       x+= `
        <div key=${id} class="card__outer">
            <div class="card__name">
                ${title}
            </div>
            <div class="card__title">
                ${brand}
            </div>
            <div class="card__img">
                <img src="${images[0]}" style="width:100%;height:100%">
            </div>
            
            <div class="card__price">
                Price: $${price}
            </div>

            <div class="card__bottom">
                <div class="card__button" onclick="infoClicked(${id})">
                    Description
                </div>
                <p id="description_input" class="description__input" style="text-align:left">
                </p>
                <div class="card__button" onclick="addClicked(${id})" style="margin-bottom:10px">
                    Add To Cart
                </div>
            </div>
        </div>
        `
    
    if(ele.id<=5){
        document.getElementById("smart_phones").innerHTML=x;
        if(ele.id===5){
            x="";
        }

    }
    else if(ele.id>=6 && ele.id<=10 ){
        document.getElementById("laptops").innerHTML=x;
        if(ele.id===10){
            x="";
        }
    }
    else if(ele.id>=11 && ele.id<=15 ){
        document.getElementById("fragrance").innerHTML=x;
        if(ele.id===15){
            x="";
        }
    }
    else if(ele.id>=16 && ele.id<=20 ){
        document.getElementById("skincare").innerHTML=x;
        if(ele.id===20){
            x="";
        }
    }
    else if(ele.id>=21 && ele.id<=25 ){
        document.getElementById("food").innerHTML=x;
        if(ele.id===25){
            x="";
        }
    }
    else{
        document.getElementById("decor").innerHTML=x;
        
    }
    
    })
    
  
    


}).catch((err)=>{
    console.log(err);
})



function infoClicked(val)
{
    
    let x="";
    glob.map((ele)=>{
        const{id,description,brand,images,title,price}=ele;
        if(ele.id===val)
        {
            x+= `
            <div key=${id} class="card__outer">
                <div class="card__name">
                    ${title}
                </div>
                <div class="card__title">
                    ${brand}
                </div>
                <div class="card__img">
                    <img src="${images[0]}" style="width:100%;height:100%;border-top-left-radius: 1rem;border-top-right-radius:1rem ;">
                </div>
                
                <div class="card__price">
                Price: $${price}
                </div>

                <div class="card__bottom">
                    <div class="card__button" onclick="infoClicked(${id})">
                        Description
                    </div>
                    <p id="description_input" class="description__input" style="text-align:left;display:block">
                        ${description}
                    </p>
                    <div class="card__button"onclick="addClicked(${id})" style="margin-bottom:10px">
                        Add To Cart
                    </div>
                </div>
                
            </div>
            `
        }
        else{
            x+= `
            <div key=${id} class="card__outer">
                <div class="card__name">
                    ${title}
                </div>
                <div class="card__title">
                    ${brand}
                </div>
                <div class="card__img">
                    <img src="${images[0]}" style="width:100%;height:100%;border-top-left-radius: 1rem;border-top-right-radius:1rem ;">
                </div>
                
                <div class="card__price">
                Price: $${price}
                </div>
    
                <div class="card__bottom">
                    <div class="card__button" onclick="infoClicked(${id})">
                        Description
                    </div>
                    <p id="description_input" class="description__input" style="text-align:left">
                
                    </p>
                    <div class="card__button" onclick="addClicked(${id})" style="margin-bottom:10px">
                        Add To Cart
                    </div>
                </div>
                
            </div>
            `
        }
       
    
    if(ele.id<=5){
        document.getElementById("smart_phones").innerHTML=x;
        if(ele.id===5){
            x="";
        }

    }
    else if(ele.id>=6 && ele.id<=10 ){
        document.getElementById("laptops").innerHTML=x;
        if(ele.id===10){
            x="";
        }
    }
    else if(ele.id>=11 && ele.id<=15 ){
        document.getElementById("fragrance").innerHTML=x;
        if(ele.id===15){
            x="";
        }
    }
    else if(ele.id>=16 && ele.id<=20 ){
        document.getElementById("skincare").innerHTML=x;
        if(ele.id===20){
            x="";
        }
    }
    else if(ele.id>=21 && ele.id<=25 ){
        document.getElementById("food").innerHTML=x;
        if(ele.id===25){
            x="";
        }
    }
    else{
        document.getElementById("decor").innerHTML=x;
        
    }
    
    })
}
















function matching(p){
    if(p===""){
        return[]
    }
    else{
        var r=new RegExp(p);
        return lis.filter(function (ele){
            if(ele.match(r)){
                return ele;
            }
        })
    }
}








function searchh(){
    // console.log(lis)
    var searchbox = document.getElementById("search_item");
    console.log(searchbox.value);
    if(searchbox.value==="")
    {
        document.getElementById("product_list").style.display = "none";
    }
    else{
        document.getElementById("product_list").style.display = "flex";
    }
    


    var ans=[]
    
    var m=matching(searchbox.value.toLowerCase())
    for(var i=0;i<m.length;i++){
        for(var j=0;j<glob.length;j++){
            if(m[i]===glob[j].brand.toLowerCase()+glob[j].title.toLowerCase()){
                ans.push(glob[j]);
            }
        }   
    }
    let y="";
    ans.map((ele)=>{ 
        const{id,title,brand,price}=ele;
        y+=`<div class="search__each">
                <div class="search__each__top">
                    <div class="search__each__top__img">
                        <img src="${ele.images[0]}" style="width:100%;height:100%;border-radius:50%;">
                    </div>
                    <div class="search__each__top__text">
                        <div class="search__each__top__text__top">
                            ${title}
                        </div>
                        <div class="search__each__top__text__bottom">
                            ${brand}
                        </div>
                    </div>
                    <div class="card__search__price">
                        $ ${price}
                    </div>
                    <img onclick="addClicked(${id})" src="./images/add.svg" class="search__each__top__button">
                </div>
                <div class="search__each__bottom">
                </div>
            </div>`

        document.getElementById("product_list").innerHTML=y;
})
    
}


var cart=[];
function addClicked(val)
{
    var check=0;
    var flag=0;
    for(var i=0;i<cart.length;i++)
    {
        if(cart[i].id===val)
        {
            check=cart[i].count;
            cart[i].count=parseInt(check)+1;
            flag=1;
        }
    }
    if(flag===0)
    {
        cart.push({id:val,title:glob[val].title,brand:glob[val].brand,count:parseInt(check)+1})
    }
    printCart();
}
function decClicked(val)
{
    var check=0;
    var flag=0;
    for(var i=0;i<cart.length;i++)
    {
        if(cart[i].id===val)
        {
            check=cart[i].count;
            if(parseInt(check)===1)
            {
                cart.splice(i,1); 
                flag=1;
                break;
            }
            cart[i].count=parseInt(check)-1;
            flag=1;
        }
    }
    printCart();
}








function printCart()
{
    let x="";
    var quant=0;
    var total=0;
    if(cart.length===0)
    {
        document.getElementById("cart_id").innerHTML="Empty Cart";
        document.getElementById("total_id").innerHTML="$ "+0;
        document.getElementById("total_qunat").innerHTML=0;
    }
    else
    {
        cart.map((ele)=>{
            
            const{id,title,brand,count}=ele;
            x+= `
                <div class="cart__card">
                    <div class="cart__img">
                    <img src="${glob[id-1].images[0]}" style="width:100%;height:100%;border-radius:50%">
                    </div>
                    <div class="cart__name">
                        ${glob[id-1].title}
                    </div>
                    <div class="cart__rating">
                        Price : $${glob[id-1].price}
                    </div>
                    <div class="cart__rating">
                        Rating : ${glob[id-1].rating}
                    </div>
                    <div class="cart__count">
                        <div class="cart__count__dec" onclick="decClicked(${id})">
                            <img src="./images/sub.svg" style="width:100%;height:100%;border-radius:50%">
                        </div>
                        <div class="cart__count__cout">
                            ${count}
                        </div>
                        <div class="cart__count__dec" onclick="addClicked(${id})">
                            <img src="./images/add.svg" style="width:100%;height:100%;border-radius:50%">
                        </div>
                    </div>
                </div>
                `
                document.getElementById("cart_id").innerHTML=x;
                total=total+(glob[id-1].price*count);
                quant=quant+count;
            })
        document.getElementById("total_id").innerHTML="$ "+total;
        document.getElementById("total_qunat").innerHTML=quant;
    }
    
}







function changeDisplay(val)
{
    console.log(val)
    if(val==="cart")
    {
        document.getElementById("cart_body").style.display = "block";
        document.getElementById("home_body").style.display = "none";
        document.getElementById("buy_body").style.display = "none";
        printCart();
    }
    else if(val==="home")
    {
        document.getElementById("cart_body").style.display = "none";
        document.getElementById("home_body").style.display = "block";
        document.getElementById("buy_body").style.display = "none";
    }
    else if(val==="buy")
    {
        if(cart.length!==0)
        {
            document.getElementById("cart_body").style.display = "none";
            document.getElementById("home_body").style.display = "none";
            document.getElementById("buy_body").style.display = "block";
            buyClicked();
        }
    }
}







function buyClicked()
{
    var counter=0;
    var priceer=0;
    for(var i=0;i<cart.length;i++)
    {
        counter+=cart[i].count;
        priceer+=glob[cart[i].id-1].price*cart[i].count;
    }
    document.getElementById("quant_all").innerHTML="Qunatity : "+counter;
    document.getElementById("price_all").innerHTML="Total Amount to Pay : "+priceer;
    
}

function myStopFunction() {
    document.getElementById("success").style.display="none";
    document.getElementById("pay_here").style.display="flex";
    document.getElementById("payment_success_done1").style.display="flex";
    document.getElementById("payment_success_done").style.display="none";
    cart=[];
    printCart();
    changeDisplay("home");
  }

function payClicked()
{
    var name=document.getElementById("name").value;
    let FnameLen=name.length;
    let flagname=/^[A-Z a-z]+$/;
    if(flagname.test(name)===false)
    {
        alert("FirstName Not filled correctly");
        return;
    }
    if(FnameLen===0 || FnameLen>30)
    {
        alert("FirstName Not filled correctly");
        return;
    }


    var phoneVal=document.getElementById("phone").value;
    if(phoneVal.length<10)
    {
        alert("Add correct Phone Number");
        return;
    }

    var addressVal=document.getElementById("address").value;
    var check=/^[#.0-9a-zA-Z\s,-]+$/;
    if(check.test(addressVal)===false)
    {
        alert("fill address field");
        return;
    }


    var pincodeVal=document.getElementById("pincode").value;
    if(pincodeVal.length!=6)
    {
        alert("fill pincode correctly");
        return;
    }




    var counter=0;
    var priceer=0;
    for(var i=0;i<cart.length;i++)
    {
        counter+=cart[i].count;
        priceer+=glob[cart[i].id-1].price*cart[i].count;
    }
    document.getElementById("phone_name").innerHTML="Name : "+name;
    document.getElementById("phone_display").innerHTML="Contact : "+phoneVal;
    document.getElementById("phone_address").innerHTML="Address : "+addressVal;
    document.getElementById("phone_pincode").innerHTML="Address : "+pincodeVal;
    document.getElementById("quant_all").innerHTML="Qunatity : "+counter;
    document.getElementById("price_all").innerHTML="Total Amount to Pay : "+priceer;

    document.getElementById("success").style.display="flex";
    document.getElementById("pay_here").style.display="none";
    document.getElementById("payment_success_done1").style.display="none";
    document.getElementById("payment_success_done").style.display="flex";
    
    const myTimeout = setTimeout(myStopFunction, 3000);
    
}

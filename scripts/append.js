const displayData = (data,results) =>{
    let arr =JSON.parse(localStorage.getItem("addToCart")) || [];
    results.innerHTML=null;
    data.forEach(function(el){

        let div  = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image_url;

        let div1= document.createElement("div");
        div1.setAttribute("class","textdiv") 

        let title = document.createElement("p");
        title.innerText=el.title;
        let rating = document.createElement("p");
        rating.innerText=`Rating: ⭐${el.rating}`;
        let price = document.createElement("p");
        price.innerText=`₹${el.price}`;
        let btn = document.createElement("button");
        btn.innerText="ADD TO CART";
        btn.addEventListener("click",()=>{
             arr.push(el);
             localStorage.setItem("addToCart",JSON.stringify(el));
        })

        div1.append(title,rating,price,btn);
        div.append(img,div1);
        results.append(div);
    })
    
}

export {displayData};
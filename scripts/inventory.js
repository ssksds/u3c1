
// console.log(data)
function append(){
     let data=JSON.parse(localStorage.getItem("products"))||[]
    
//     // container.innerHTML=null;
data.forEach(function(e,index){
    let container=document.getElementById("all_products");
    let div=document.createElement("div")

    let image=document.createElement("img")
    image.src=e.image;

    let type=document.createElement("p")
    type.innerText=e.type;

    let desc=document.createElement("p")
    desc.innerText=e.desc;
    let price=document.createElement("p")
    price.innerText=e.price;
    let btn=document.createElement("button")
    btn.innerText="remove"
    btn.setAttribute("id",'remove_product')
    btn.addEventListener("click",function(){
        remove(index)
    });

    div.append(image,type,desc,price,btn)

    container.append(div)
})

//     })
}




// function remove(index){
// let data=JSON.parse(localStorage.getItem("products"))||[]
// let newproducts=data.filter(function(el,i){
//     if(i===index){
//        let trash=JSON.parse(localStorage.getItem("trash"))||[]
//         trash.push(el)
//         localStorage.setItem("trash",JSON.stringify(trash))
//         window.location.reload()
//     }
// })
// localStorage.setItem("products",JSON.stringify(arr))
// }

function remove(index){
    let data=JSON.parse(localStorage.getItem("products"))||[];
    let newData=data.filter(function(el,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash"))||[];
            trash.push(el)
            localStorage.setItem("trash",JSON.stringify(trash))
            window.location.reload()
        }else{
            return i !==index;
        }
     });

     localStorage.setItem("products", JSON.stringify(newData));
     
}
append()

var dir=document.querySelector("#add_more_product").addEventListener("click",redir)
function redir(){
    window.location.href="index.html"
};
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
        remove(e,index)
    });

    div.append(image,type,desc,price,btn)

    container.append(div)
})
function remove(e,i){
    data.splice(i,1)
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload()
    }
    }


// function remove(index) {
//     newData.splice(newData.indexOf(index), 1);
//     localStorage.setItem("products", JSON.stringify(newData));
//     window.location.reload(true);
//   }




// function remove(index){
//     let data=JSON.parse(localStorage.getItem("products"))||[];
//     let newData=data.filter(function(el,i){
//         if(i===index){
//             let trash=JSON.parse(localStorage.getItem("trash"))||[];
//             trash.push(el)
//             localStorage.setItem("trash",JSON.stringify(trash))
//             window.location.reload()
//         }else{
//             return i !==index;
//         }
//      });

//      localStorage.setItem("products", JSON.stringify(newData));
     
// }



// function remove() {
//     let data = JSON.parse(localStorage.getItem("products"))||[];
//     console.log(data)
//     // for (var index = 0; index < data.length; index++) {
//     //   data.splice(index, 1);
//     //   window.location.reload()
//     // }
//     // localStorage.setItem("products", JSON.stringify(newData));
    
//   }
append()

   

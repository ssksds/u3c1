//store the products array in localstorage as "products"



function Data(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}




function storeData(e){
    e.preventDefault();
    let form=document.getElementById("products")
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    let p=new Data(type,desc,price,image)
    let arr=JSON.parse(localStorage.getItem("products"))||[]
    arr.push(p)
    localStorage.setItem("products",JSON.stringify(arr))
    window.location.reload()

}
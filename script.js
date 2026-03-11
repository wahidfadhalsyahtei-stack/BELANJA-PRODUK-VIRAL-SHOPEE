let productsData=[]

fetch("produk.json")
.then(res=>res.json())
.then(data=>{
productsData=data
showProducts(data)
})

function showProducts(data){

let html=""

data.forEach(p=>{

html+=`

<div class="card ${p.category}">

<img src="${p.img}" loading="lazy">

<div class="info">

<h3>${p.name}</h3>

<div class="price">Rp ${p.price}</div>

<a class="btn" href="${p.link}" target="_blank">
Beli di Shopee
</a>

</div>

</div>

`

})

document.getElementById("products").innerHTML=html

}

function filter(category){

if(category==="all"){

showProducts(productsData)

}else{

let filtered=productsData.filter(p=>p.category===category)

showProducts(filtered)

}

}

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase()

let filtered=productsData.filter(p=>

p.name.toLowerCase().includes(value)

)

showProducts(filtered)

})
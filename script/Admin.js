let myProducts = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : localStorage.setItem("products", JSON.stringify([
    {
        id: 1,
        name: "Beef Bobotie with Yellow rice",
        price: 122,
        img: ("https://i.postimg.cc/5NYmsvR7/x-Beef-Bobotie-Yellow-Rice-768x768-jpg-pagespeed-ic-iewnw-Q-sk-R-1.webp")
    },

    {
        id: 2,
        name: "Spaghetti Bolongnese",
        price: 175,
        img: ("https://i.postimg.cc/pX1f9Cks/x-Spaghetti-Bolongnese-768x768-jpg-pagespeed-ic-ip-QL-c-Icf-U.webp")
    },

    {
        id: 3,
        name: "Italian Mince Meatballs  ",
        price: 105,
        img: ("https://i.postimg.cc/tTKdgNbs/x-Meatballs-Ratatouille-Pasta-550x550-jpg-pagespeed-ic-o9-Ca-Ezb186.jpg")
    },

    {
        id: 4,
        name: "Rosemary Chicken &Rice",
        price: 123,
        img: ("https://i.postimg.cc/NG1s4Kk6/x-Rosmary-Chicken-Peas-Carrots-Rice-550x550-jpg-pagespeed-ic-zsnp6-A0-B11.webp")
    },

    {
        id: 5,
        name: "Beef kebab and carrots",
        price: 98,
        img: ("https://i.postimg.cc/4xQcgTnH/beef.webp")

    },

    {
        id: 6,
        name: "Vegetable Lasagne",
        price: 65,
        img: ("https://i.postimg.cc/7ZB0ZsCZ/x-Vegetable-Lasagne-550x550-jpg-pagespeed-ic-9-Bl-XUTkws-T.webp")
    }
]))

let prodWrapper = document.querySelector("[data-products]");

function displayproduct(data) {
prodWrapper.innerHtml = ""
if (data.length) {
    data.forEach(prod => {
        console.log(prod)
        prodWrapper.innerHTML += `
        <div class="card" m-5 >
            <img src="${prod.img}" class="card-img-top" alt="..." type="image/webp">
            <div class="card-body">
                <h5 class="card-title">${prod.name}</h5>
                <h4 class="card-tittle">R${prod.price}</h4>
               
                <a class="btn btn-primary" onclick="Edit"(${JSON.stringify(prod)})">Edit</a>
                <a class="btn btn-primary" onclick="Delete"(${JSON.stringify(prod)})">Delete</a>
            </div>
            </div>
        `
    })
} else {
    prodWrapper.innerHtml = "Product not found"
}

}
displayproduct(myProducts)



//function for admin//
function adminProduct() {
   try{
    let myAdmin = JSON.parse(localStorage.getItem('myAdmin'))

myAdmin.forEach((myAdmin, i) => {
    tContent.innerHTML +=`
    <tr>
    <td>${product.Name}</td>
    <td>${product.price}</td>
     <td>
    <img src ="$(product.image) alt" ${product.id} class="image-fluid w-25">
    </td>
    </tr>
    <div>
    <button>Edit</button>
    <button>Delete></button>`
})
   } catch(e) {
    console.log("please try again")
   }
  
}

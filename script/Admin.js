// let myProducts = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : localStorage.setItem("products", JSON.stringify([
//     {
//         id: 1,
//         name: "Beef Bobotie with Yellow rice",
//         price: 122,
//         img: ("https://i.postimg.cc/5NYmsvR7/x-Beef-Bobotie-Yellow-Rice-768x768-jpg-pagespeed-ic-iewnw-Q-sk-R-1.webp")
//     },

//     {
//         id: 2,
//         name: "Spaghetti Bolongnese",
//         price: 175,
//         img: ("https://i.postimg.cc/pX1f9Cks/x-Spaghetti-Bolongnese-768x768-jpg-pagespeed-ic-ip-QL-c-Icf-U.webp")
//     },

//     {
//         id: 3,
//         name: "Italian Mince Meatballs  ",
//         price: 105,
//         img: ("https://i.postimg.cc/tTKdgNbs/x-Meatballs-Ratatouille-Pasta-550x550-jpg-pagespeed-ic-o9-Ca-Ezb186.jpg")
//     },

//     {
//         id: 4,
//         name: "Rosemary Chicken &Rice",
//         price: 123,
//         img: ("https://i.postimg.cc/NG1s4Kk6/x-Rosmary-Chicken-Peas-Carrots-Rice-550x550-jpg-pagespeed-ic-zsnp6-A0-B11.webp")
//     },

//     {
//         id: 5,
//         name: "Beef kebab and carrots lekker",
//         price: 98,
//         img: ("https://i.postimg.cc/4xQcgTnH/beef.webp")

//     },

//     {
//         id: 6,
//         name: "Vegetable Lasagne",
//         price: 65,
//         img: ("https://i.postimg.cc/7ZB0ZsCZ/x-Vegetable-Lasagne-550x550-jpg-pagespeed-ic-9-Bl-XUTkws-T.webp")
//     }
// ]))

let myProducts = JSON.parse(localStorage.getItem('products')) || []

let prodWrapper = document.querySelector("[data-products]");
let adminTable= document.querySelector('[data-admin]')

function displayproduct(data) {
    adminTable.innerHTML = ""
if (data.length) {
    data.forEach(prod => {
        console.log(prod)
        adminTable.innerHTML += `
        <tr class ="td1">
            <th>${prod.name}</th>
            <td>R${prod.price}</td>
             <td><img src="${prod.img}" width="50px"></td>
           <td><button   class="btn btn-primary">Edit</button>
               <button id="btnnn" class=" btn btn-primary"> -DEL</button>
            </td>
           </tr>
       
        `
    })
} else {
    adminTable.innerHTML = "Product not found"
}

}
displayproduct(myProducts)



// function for admin//
// function adminProduct() {
//    try{
//     let myAdmin = JSON.parse(localStorage.getItem('myAdmin'))

// myAdmin.forEach((myAdmin, i) => {
//     tContent.innerHTML +=`
//     <tr>
//     <td>${product.Name}</td>
//     <td>${product.price}</td>
//      <td>
//     <img src ="$(product.image) alt" ${product.id} class="image-fluid w-25">
//     </td>
//     </tr>
//     <div>
//     <button>Edit</button>
//     <button>Delete></button>`
// })
//    } catch(e) {
//     console.log("please try again")
//    }
  
// }

// function displayProducts() {
//     tableContent.innerHTML = "" ;
//     let sum = 0
//     let uniqueData = Object.groupBy( data, item=> item.id)
//     for(let key in uniqueData) {
//         tableContent.innerHTML +=
//             `<tr>
//             <th>${uniqueData[key.name]}</th>
//             <td>R${uniqueData[prod].price}</td>
//             <td>${uniqueData[prod].length}</td>
//             <td>R${eval(`${uniqueData[prod][0].price}*${uniqueData[key].length}`)}</td>
//             </tr>`
//     }
    
// }
// displayProducts()
let tableContent = document.querySelector("#table")
let data = JSON.parse(localStorage.getItem('shoppingCart'))

//create function//
function displayProducts() {
    tableContent.innerHTML = "" ;
    let sum = 0
    let uniqueData = Object.groupBy( data, item=> item.id)
    for(let key in uniqueData) {
        tableContent.innerHTML +=
            `<tr>
            <th>${uniqueData[key][0].name}</th>
            <td>R${uniqueData[key][0].price}</td>
            <td>${uniqueData[key].length}</td>
            <td>R${eval(`${uniqueData[key][0].price}*${uniqueData[key].length}`)}</td>
            </tr>`
    }
    
}
displayProducts()


let btn = document.querySelector('.clear');
btn.addEventListener('click', ()=>{
    localStorage.removeItem('shoppingCart')
    btn.innerHTML=""
    location.reload();
   

})

// let purchaseBtn =  document.querySelector('purchase')
// purchaseBtn.addEventListener('click',()=> {
//     alert('Thank you for your purchase!')
// }
// );



// function popUp() {
//     alert('hey')

// }

// let button = document.querySelector('[data-btn]').addEventListener('click', popUp)
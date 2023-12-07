let tableContent = document.querySelector("#table")
let tbody = JSON.parse(localStorage.getItem('cart'))
//create function//
function displayProducts() {
    tableContent.innerHTML = "" ;
    let sum = 0
    if (tbody) {
        tbody.forEach((buy, i)=>{
            tableContent.innerHTML +=
            `<tr>
            <th>${buy.name}</th>
            <td>${buy.price}</td>
            <td><input type='number'value='${buy}'<input></td>
            </tr>`

            sum += buy.price* 1
        })
        tableContent.innerHTML +=
      `<tr>
      <th colspan = '3'>sum</th>
      <td>${sum}</td>
      </tr>`
        
    }
}
displayProducts()
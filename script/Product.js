// let products = 

let products = JSON.parse(localStorage.getItem("products")) ?
    JSON.parse(localStorage.getItem("products")) : [{
            id: 1,
            name: "Beef Bobotie with Yellow rice and Butternut",
            price: 122,
            img: ("https://i.postimg.cc/5NYmsvR7/x-Beef-Bobotie-Yellow-Rice-768x768-jpg-pagespeed-ic-iewnw-Q-sk-R-1.webp")
        },

        {
            id: 2,
            name: "Beef Goulash with pumpink and spinach",
            price: 175,
            img: ("https://i.postimg.cc/tTKdgNbs/x-Meatballs-Ratatouille-Pasta-550x550-jpg-pagespeed-ic-o9-Ca-Ezb186.jpg")
        },

        {
            id: 3,
            name: "Italian Mince Meatballs with a Ratatouille Sauce ",
            price: 105,
            img: ("https://i.postimg.cc/tTKdgNbs/x-Meatballs-Ratatouille-Pasta-550x550-jpg-pagespeed-ic-o9-Ca-Ezb186.jpg")
        },

        {
            id: 4,
            name: "Rosemary chicken peas",
            price: 123,
            img: ("https://i.postimg.cc/NG1s4Kk6/x-Rosmary-Chicken-Peas-Carrots-Rice-550x550-jpg-pagespeed-ic-zsnp6-A0-B11.webp")
        },

        {
            id: 5,
            name: "Beef kebab",
            price: 98,
            img: ("https://i.postimg.cc/4xQcgTnH/beef.webp")

        },

        {
            id: 6,
            name: "Vegetable Lasagne",
            price: 65,
            img: ("https://i.postimg.cc/7ZB0ZsCZ/x-Vegetable-Lasagne-550x550-jpg-pagespeed-ic-9-Bl-XUTkws-T.webp")
        }
    ]
localStorage.setItem("products", JSON.stringify(products));

let productsWrapper = document.querySelector("[data-products]");
productsWrapper.innerHtml = ""
if (products) {
    products.forEach(prod => {
        console.log(prod)
        productsWrapper.innerHTML += `
        <div class="card" style="width: 18rem;" >
  <img src="${prod.img}" class="card-img-top" alt="..." type="image/webp">
  <div class="card-body">
    <h5 class="card-title">${prod.name}</h5>
    <h4 class="card-tittle">R${prod.price}</h4>
    <p class="card-text">You can add as many as you like to make breakfast, lunch, and dinner and easy and enjoyable experience for you and your whole family!

    </p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
        `
    });
}
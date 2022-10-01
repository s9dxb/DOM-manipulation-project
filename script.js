let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "firstItem",
    name: "Apple Watch",
    price: 000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "pictures/image-2.jfif",
  },
  {
    id: "secondItem",
    name: "iPhone 13 Pro",
    price: 000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "pictures/iPhone_13_pro.jfif",
  },
  {
    id: "thirdItem",
    name: "iPhone 13",
    price: 000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "pictures/iPhone_13.jpg",
  },
  {
    id: "fourthItem",
    name: "iPhone 11",
    price: 000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "pictures/iphone-1.jfif",
  },
];

let basket = [
  {
    id: "",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, description, img } = x;
      return `
    <div id="product-id-${id}" class="item">
        <img src=${img} alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${description}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id="${id}" class="quantity">0</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div> `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  //   console.log(basket);
  update(selectedItem.id);
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  // cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0));
};

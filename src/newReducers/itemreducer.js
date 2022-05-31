// To Install Redux Persist

// Documentation:- https://www.npmjs.com/package/redux-persist

// Install:- npm install redux persist

// Redux Persist Helps to store in local storage. We can Call It EXACT OPPOSTE OF AXIOS

// Syntax: const initialdata = [{}]  , Objects are inside array
const initialdata = {
  itemsdata: [
    {
      item_name: "Apple iPhone 13 Pro Max",
      item_price: "$1,599/-",
      item_image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-gallery-2_GEO_US?wid=2824&hei=2400&fmt=jpeg&qlt=80&.v=1631658249000",
      item_Desc: "Random Description",
    },

    {
      item_name: "Samsung Galaxy s21 Ultra",
      item_price: "$1,299/-",
      item_image:
        "https://media.router-switch.com/media/catalog/product/cache/b90fceee6a5fa7acd36a04c7b968181c/s/a/samsung-galaxy-s21-ultra-5g-sm-g9980.jpg",
      item_Desc: "Random Description",
    },

    {
      item_name: "One Plus 9 Pro",
      item_price: "$999/-",
      item_image: "https://static.toiimg.com/photo/87168216.cms",
      item_Desc: "Random Description",
    },

    {
      item_name: "Huawei Matw 20 Pro",
      item_price: "$1,099/-",
      item_image:
        "https://www.gizmochina.com/wp-content/uploads/2018/11/HUAWEI-Mate-20-Pro_aurora.jpg",
      item_Desc: "Random Description",
    },

    {
      item_name: "Sony Xperia 1 Pro",
      item_price: "$1,699/-",
      item_image:
        "https://m.media-amazon.com/images/I/71xoD1b0KjL._AC_SL1500_.jpg",
      item_Desc: "Random Description",
    },

    {
      item_name: "Samsung Galaxy Note 20",
      item_price: "$1,299/-",
      item_image:
        "https://m.media-amazon.com/images/I/81AT+Flc+EL._AC_SL1500_.jpg",
      item_Desc: "Random Description",
    },

    {
      item_name: "Google Pixel 6 Pro",
      item_price: "$1,099/-",
      item_image:
        "https://cdn.enepsters.com/wp-content/uploads/2021/10/pixel-6-pro-1.jpeg",
      item_Desc: "Random Description",
    },

    {
      item_name: "Xiaomi Mi 11 Ultra",
      item_price: "$999/-",
      item_image:
        "https://cdn.dxomark.com/wp-content/uploads/medias/post-76526/XiaomiMi11Ultra.jpg",
      item_Desc: "Random Description",
    },

    {
      item_name: "Motorola Edge S Pro",
      item_price: "$799/-",
      item_image:
        "https://i.gadgets360cdn.com/products/large/motorola-edge-s-pro-625x800-1628230060.jpg",
      item_Desc: "Random Description",
    },

    {
      item_name: "Realme GT2 Pro",
      item_price: "$899/-",
      item_image:
        "https://www.91-cdn.com/hub/wp-content/uploads/2021/11/Realme-GT2-Pro.jpg?tr=q-100",
      item_Desc: "Random Description",
    },
  ],
};

const itemreducer = (state = initialdata) => {
  return state;
};

export default itemreducer;

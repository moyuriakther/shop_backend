const Products = [
  {
    category: "Men's Sneaker",
    name: "ULTRABOOST 22 SHOES",
    seller: "Addidas",
    price: 420,
    countInStock: 20,
    ratings: 4,
    description:
      "When it comes to Online shopping for men, Apex is one of the best. Our men's shopping assortment is made with the finest materials, exceptional design, and unique style.",
    ratingsCount: 3725,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    shipping: 1,
    quantity: 0,
    reviews: [],
  },
  {
    category: "Men's Sneaker",
    name: "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
    seller: "Addidas",
    price: 196,
    countInStock: 19,
    ratings: 5,
    description:
      "When it comes to Online shopping for men, Apex is one of the best. Our men's shopping assortment is made with the finest materials, exceptional design, and unique style.",
    ratingsCount: 4355,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
    shipping: 14,
    quantity: 0,
    reviews: [],
  },
  {
    category: "Men's Sneaker",
    name: "SUPERNOVA SHOES",
    seller: "Addidas",
    price: 245,
    countInStock: 20,
    description:
      "When it comes to Online shopping for men, Apex is one of the best. Our men's shopping assortment is made with the finest materials, exceptional design, and unique style.",
    ratings: 4,
    ratingsCount: 3972,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
    shipping: 1,
    quantity: 0,
    reviews: [],
  },
  {
    category: "Men's Sneaker",
    name: "LITE RACER ADAPT 3.0 SHOES",
    seller: "Addidas",
    price: 229,
    countInStock: 10,
    ratings: 5,
    description:
      "When it comes to Online shopping for men, Apex is one of the best. Our men's shopping assortment is made with the finest materials, exceptional design, and unique style.",
    ratingsCount: 1764,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
    shipping: 32,
    quantity: 0,
    reviews: [],
  },
  {
    category: "Men's Sneaker",
    name: "4DFWD SHOES",
    seller: "Addidas",
    price: 287,
    countInStock: 11,
    ratings: 4,
    description:
      "When it comes to Online shopping for men, Apex is one of the best. Our men's shopping assortment is made with the finest materials, exceptional design, and unique style.",
    ratingsCount: 799,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
    shipping: 49,
    quantity: 0,
    reviews: [],
  },
  {
    category: "Men's Sneaker",
    name: "KAPTIR 2.0 SHOES",
    seller: "Addidas",
    price: 138,
    countInStock: 19,
    ratings: 3,
    description:
      "When it comes to Online shopping for men, Apex is one of the best. Our men's shopping assortment is made with the finest materials, exceptional design, and unique style.",
    ratingsCount: 4372,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
    shipping: 19,
    quantity: 0,
    reviews: [],
  },
  {
    category: "Men's Sneaker",
    name: "4DFWD PULSE SHOES",
    seller: "Addidas",
    price: 226,
    countInStock: 1,
    ratings: 4,
    description:
      "When it comes to Online shopping for men, Apex is one of the best. Our men's shopping assortment is made with the finest materials, exceptional design, and unique style.",
    ratingsCount: 2870,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
    shipping: 15,
    quantity: 0,
    reviews: [],
  },
  {
    category: "Men's Sneaker",
    name: "ZX 1K BOOST SHOES",
    seller: "Addidas",
    price: 319,
    countInStock: 7,
    ratings: 4,
    description:
      "When it comes to Online shopping for men, Apex is one of the best. Our men's shopping assortment is made with the finest materials, exceptional design, and unique style.",
    ratingsCount: 1360,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg",
    shipping: 50,
    quantity: 0,
    reviews: [],
  },
  {
    category: "Men's Sneaker",
    name: "NMD_R1 V2 SHOES",
    seller: "Addidas",
    price: 260,
    countInStock: 4,
    ratings: 5,
    description:
      "When it comes to Online shopping for men, Apex is one of the best. Our men's shopping assortment is made with the finest materials, exceptional design, and unique style.",
    ratingsCount: 1976,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",
    shipping: 46,
    quantity: [],
  },
];
export default Products;

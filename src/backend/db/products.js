import { v4 as uuid } from "uuid";


export const products = [
  {
    _id: uuid(),
    name: "AZITHRAL",
    seller: "UNO PHARMA",
    price: 120,
    categoryName: "Medicines",
    image:"https://admin.davagenie.com/assets/images/product/7110_1.png" ,
  },
  {
    _id: uuid(),
    title: "FABI-FLU",
    seller: "SPARSH PHARMA",
    price: 400,
    categoryName: "Medicines",
    image:"https://www.netmeds.com/images/product-v1/600x600/921074/fabiflu_400_tablet_17s_0_0.jpg" ,
  },
  {
    _id: uuid(),
    title: "CORONIL",
    seller: "PTANJALI",
    price: 250,
    categoryName: "Medicines",
    image:"https://n3.sdlcdn.com/imgs/j/k/n/Patanjali-Coronil-KIT-Tablet-1-SDL928674849-3-ad453.jpg" ,
  },
  {
    _id: uuid(),
    title: "ARM-SLING",
    seller: "ALIMED",
    price: 850,
    categoryName: "Rehab",
    image:"https://m.media-amazon.com/images/I/61gT8MuftXL._SY679_.jpg" ,
  },
  {
    _id: uuid(),
    title: "WHEEL CHAIR",
    seller: "MEDI MART",
    price: 5000,
    categoryName: "Rehab",
    image:"https://5.imimg.com/data5/TW/UB/MY-2224653/basic-wheelchair-red-500x500.jpg" ,
  },
  {
    _id: uuid(),
    title: "PULSE OXIMETER",
    seller: "MEDSURE",
    price: 1000,
    categoryName: "Med-Tech",
    image:"https://n2.sdlcdn.com/imgs/j/r/2/db-enbloc-PULSE-OXIMETER-MAKE-SDL217883061-1-815e3.jpg" ,
  },
  {
    _id: uuid(),
    title: "SPHYGMOMANO METER",
    seller: "MEDSURE",
    price: 3000,
    categoryName: "Med-Tech",
    image:"https://sc02.alicdn.com/kf/H6edae661e80e462da395b6466de997b8o/230093207/H6edae661e80e462da395b6466de997b8o.jpg_.webp" ,
  },
  // {
  //   _id: uuid(),
  //   title: "SYRINGE",
  //   seller: "G.S.K",
  //   price: 50,
  //   categoryName: "Med-Tech",
  //   image:"https://5.imimg.com/data5/SELLER/Default/2021/6/MQ/SY/TI/21284661/syringe-with-needle-2ml-22g-23g-24g-500x500.jpg" ,
  // },

];

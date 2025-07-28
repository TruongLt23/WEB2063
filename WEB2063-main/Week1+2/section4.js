// // Foreach
// const menuItems = [
//   { path: "/", label: "Trang chủ" },
//   { path: "/products", label: "Sản phẩm" },
// ];

// let rendered = [];

// menuItems.forEach((item) => {
//   rendered.push(`Path: ${item.path} - Label: ${item.label}`);
// });

// console.log(menuItems);
// console.log(rendered);

// // Map
// let renderedMap = menuItems.map(
//   (item) => `Path: ${item.path} - Label: ${item.label}`
// );

// console.log("renderedMap", renderedMap);

//find() – trả về phần tử đầu tiên thỏa điều kiện.
// const products = [
//   { id: 1, name: "Product A", udemy: 100 },
//   { id: 2, name: "Product B", udemy: 100 },
//   { id: 3, name: "Product C", udemy: 0 },
// ];
// const foundProduct = products.find((product) => product.udemy === 100);
// const filterProduct = products.filter((product) => product.udemy === 100);

// console.log(foundProduct);
// console.log("filterProduct", filterProduct);
// Duc anh : id 1 va 2
// id : 1

const arr = [1, [2, [3, 4]]]; // [1,2,3,4]

// console.log(arr.flat(1)); //[ 1, 2, [ 3, 4 ] ]
// console.log(arr.flat(2)); //

const menuItems = [
  { path: "/", label: "Trang chủ" }, // depth 0
  { path: "/products", label: "Sản phẩm" },
  {
    label: "Quản lý",
    children: [
      { path: "/orders", label: "Đơn hàng" }, // depth 1
      { path: "/customers", label: "Khách hàng" },
    ],
  },
  { path: "/settings", label: "Cài đặt" },
];

// flatMap
// const flatMenuItems = menuItems.flatMap((item) => {
//   console.log(item.children ? item.children : [item]);
//   return item.children ? item.children : [item];
// });

// console.log(flatMenuItems);
// item 1  { path: '/', label: 'Trang chủ' }, // [ { path: '/', label: 'Trang chủ' },]
// item 3  { children: [] }, // []
// map : [
//     { path: '/', label: 'Trang chủ' },
//     { path: '/products', label: 'Sản phẩm' },
//      { path: '/orders', label: 'Đơn hàng' },
//   { path: '/customers', label: 'Khách hàng' }

// ]
// ] => flat(1)

var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 100,
  },
  {
    id: 2,
    name: "HTML,CSS",
    coin: 200,
  },
  {
    id: 3,
    name: "Le Phuc Lam",
    coin: 300,
  },
  {
    id: 4,
    name: "Le Phuc Lam",
    coin: 400,
  },
  {
    id: 5,
    name: "Le Phuc Lam",
    coin: 500,
  },
  {
    id: 6,
    name: "Le Phuc Lam",
    coin: 600,
  },
];

let total = 0;
courses.forEach((item) => {
  total = total + item.coin;
});

// console.log(total);

const totalCoin = courses.reduce(function (accmulator, currentValue, idx) {
  console.log(
    `step ${idx + 1}`,
    accmulator,
    currentValue.coin,
    accmulator + currentValue.coin
  );
  return accmulator + currentValue.coin;
}, 0);

// console.log(totalCoin); // 2100

const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter((n) => n % 2 === 0) // [2, 4]
  .map((n) => n * 10) // [20, 40]
  .reduce((a, b) => a + b, 0); // 60

console.log(result); //60
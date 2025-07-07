const orders = [
  { id: 1, dishName: "Burger", category: "Fast Food", chef: "John Doe", ratings: [5,4,2,3,4,5] },
  { id: 2, dishName: "Pizza", category: "Italian", chef: "Jane Smith", ratings: [4, 3, 5] },
  { id: 3, dishName: "Sushi", category: "Japanese", chef: "Tom Brown", ratings: [5, 5, 4] },
  { id: 4, dishName: "Salad", category: "Healthy", chef: "Alice Green", ratings: [3, 4, 5] },
  { id: 5, dishName: "Pasta", category: "Italian", chef: "Gowtam Tinnanuri", ratings: [4, 4, 5] }
];

const moreOrders = [
  { id: 6, dishName: "Tacos", category: "Mexican", chef: "Carlos Ruiz", ratings: [4, 5, 4] },
  { id: 7, dishName: "Ramen", category: "Japanese", chef: "Yuki Tanaka", ratings: [5, 4, 5] }
];
  // Task 1
const getHighRatedDishes = (orders) => {
    const filteredorders =  orders.filter(order => order.ratings.every(rating => rating >= 4));
   const ratingsName= filteredorders.map(order => order.dishName);
   return ratingsName.join(", ");
};
console.log(getHighRatedDishes(orders));

//Task 2
const getFirstNDishNames = (orderas,n) =>{
    return orders.slice(order,n).map(order=>order.dishName).join(", ");
}
console.log(getFirstNDishNames(orders, 3));


// Task 3

const mergeOrders = (orders,a = [])=>{
  return [orders,...a];
}
console.log(mergeOrders(orders, moreOrders,[12,34,566,67])); // Should print the merged array of orders
console.log(mergeOrders(orders,[12,46])); // Should print the original array of orders

//  Task 4
// const getDishNamesByIds1 = (orders,...a) =>{
 
//   const filterIds = orders.filter((order)=> a.includes(order.id) );
//   // console.log(filterIds);
//   const dishName = filterIds.map((dish) => dish.dishName);
//   return dishName;
// }
const getDishNamesByIds2 = (orders,...ids) =>{
  const filterIds = ids.map(order => order.find(order => order.id == id)?.dishName ?? "unkown");
  return filterIds;
}
// console.log(getDishNamesByIds(orders, 1,3,5));
// console.log(getDishNamesByIds(orders, 1, 6));
// console.log(getDishNamesByIds(orders, 5, 1));




 /// Task 5
//  const listOrders = (...orders)=>{
//     const filterIds = orders.map(order => )
  
//  }
//  console.log(listOrders(...orders));
// /// Should print: Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)
// console.log(listOrders(orders[0], orders[1], order[111]));
// /// Should print: Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)



// task 6
const getTotalRatingsForChefs = (orders)=>{
  const ratingsName = orders.map((order)=> order.chef +" : "+ order.ratings.length);
  return ratingsName;
}
console.log(getTotalRatingsForChefs(orders));



// Task 7
const order = {
  dish: {
    name: "Burger",
    category: "Fast Food",
  },
  quantity: 2,
  price: 5.0,
};
function getOrderDetails(order){
const {
  dish: {
    name: name, 
    category: dishCategory 
},
   quantity: orderQuantity,
    price: price,
} = order;


  return `${name} (${dishCategory}) x${orderQuantity} costs $${price}`;
}
console.log(getOrderDetails(order));

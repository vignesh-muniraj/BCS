

```js
const orders = [
  { id: 1, dishName: "Burger", category: "Fast Food", chef: "John Doe", ratings: [5, 4, 5] },
  { id: 2, dishName: "Pizza", category: "Italian", chef: "Jane Smith", ratings: [4, 3, 5] },
  { id: 3, dishName: "Sushi", category: "Japanese", chef: "Tom Brown", ratings: [5, 5, 4] },
  { id: 4, dishName: "Salad", category: "Healthy", chef: "Alice Green", ratings: [3, 4, 5] },
  { id: 5, dishName: "Pasta", category: "Italian", chef: "Gowtam Tinnanuri", ratings: [4, 4, 5] }
];

const moreOrders = [
  { id: 6, dishName: "Tacos", category: "Mexican", chef: "Carlos Ruiz", ratings: [4, 5, 4] },
  { id: 7, dishName: "Ramen", category: "Japanese", chef: "Yuki Tanaka", ratings: [5, 4, 5] }
];
```

### Question 1
1. 🍽️ Filter and Join Dish Names

   Write a function that filters out dishes with ratings below 4, then returns a string of dish names separated by commas.

```js
  const getHighRatedDishes = (orders) => {
    const filteredorders =  orders.filter(order => order.ratings.every(rating => rating >= 4));
   const ratingsName= filteredorders.map(order => order.dishName);
   return ratingsName.join(", ");
};
console.log(getHighRatedDishes(orders));
```
# Expected Output
   "Burger, Sushi, Pasta, Tacos, Ramen"

## Question 2

 🍔 Slice and Map Dish Names

   Write a function that slices the first N dishes from the orders array, maps their names, and joins them into a single string.
  # Answer
   ```js
   const getFirstNDishNames = (orderas,n) => orders.slice(order,n).map(order=>order.dishName).join(", ");

console.log(getFirstNDishNames(orders, 3));

   ```
   # Expected output
   "Burger, Pizza, Sushi"

# Question 3
 🍲 Merge Orders with Default Values

   Write a function that merges two arrays of food orders

```js
  const mergeOrders = (orders,a = [])=>{
  return [orders,...a];
 }
console.log(mergeOrders(orders, moreOrders,[12,34,566,67])); // Should print the merged array of orders
console.log(mergeOrders(orders,[12,46])); // Should print the original array of orders

   ```
  


 # Question 4
4. 🥗 Fetch Dish Names by IDs

   Write a function that accepts multiple order IDs, fetches the dish names, and returns a formatted string using the rest operator, nullish coalescing, and template literals.

```js
  const getDishNamesByIds2 = (orders,...ids) =>{
  const filterIds = ids.map(order => order.find(order => order.id == id)?.dishName ?? "unkown");
  return filterIds;
  }
   ```
 # Expected output
 console.log(getDishNamesByIds(orders, 1, 3, 5));
 Burger, Pasta, Sushi
 console.log(getDishNamesByIds(orders, 1, 6));
 Burger, Unknown Dish
 console.log(getDishNamesByIds(orders, 5, 1));
 Sushi, Burger

# Question 5
5. 🍜 List Dish Names and Categories

   Write a function that accepts any number of food orders and returns a formatted string listing their dish names and categories using the rest operator, nullish coalescing, and template literals.

   ```js
   console.log(listOrders(...orders));
   // Should print: Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)
   console.log(listOrders(orders[0], orders[1], order[111]));
   // Should print: Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)
   ```

6. 📊 Calculate Total Ratings for Chefs

   Write a function that calculates the total number of ratings for each chef.

   ```js
   console.log(getTotalRatingsForChefs(orders));
   // Should print: { "John Doe": 6, "Jane Smith": 3, "Tom Brown": 3, "Alice Green": 3 }
   ```




# 7. Refactoring `getOrderDetails`

Improve `getOrderDetails` through several refactoring steps.

### **Refactored Code**

```javascript
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

```

---


# 8. Refactoring `displayOrderSummary` 🚚

Refactor `displayOrderSummary` to improve handling of missing data and enhance code clarity.

### **Example Data**

```javascript
function displayOrderSummary(orderId) {
  const order = orders.find((o) => o.id === orderId);
  if (
    order &&
    order.dish &&
    order.dish.name &&
    order.dish.category &&
    order.quantity &&
    order.price
  ) {
    console.log(
      `${order.dish.name} (${order.dish.category}) x${order.quantity} costs $${order.price}`,
    );
  } else {
    console.log("Some order data is missing.");
  }
}

displayOrderSummary(1);
displayOrderSummary(2);
displayOrderSummary(3);
```

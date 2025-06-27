function moodReport(s1 = "🙂", s2 = "this morning 🌅.") {
  const ans = `Feeling ${s1} ${s2}`;
  return ans;
}

//  var result = moodReport();
//   console.log(result);
//  var result = moodReport("😎", "afternoon ☀️");
//  console.log(result);

//  2 ---------------------------------------------------------------------------------------------------
function checkAgeCategory(age = 0) {
  //var ans;
  if (age >= 18) {
    return "🧒 Minor";
  } else if (age >= 65) {
    return "🧓 Senior";
  } else {
    return "👨 Adult";
  }
  // return ans;
}
// console.log(checkAgeCategory(12));
// console.log(checkAgeCategory());
// console.log(checkAgeCategory(66));

// var result = checkAgeCategory(65);
// console.log(result);

// 3---------------------------------------------------------------------------------------------------
const wizard = {
  name: "Merlin",
  title: "Archmage",
  wand: {
    core: "Phoenix Feather",
  },
};

function introduceWizard(wizardObj) {
  const {
    title,
    name,
    wand: { core },
  } = wizardObj;
  return `${title} ${name} wields a wand with ${core} core`;
}

//  console.log(introduceWizard(wizard));

// 4 --------------------------------------------------------------------------------------------------

const shelf = ["🍎", "🥪"];
const delivery = ["🍫", "🍇"];

function mergeInventory(shelf, delivery) {
  return [...shelf, ...delivery, "🧃"];
}
console.log(mergeInventory(shelf, delivery));

// 5 --------------------------------------------------------------------------------------------------

function packBag(owner = "Anon", ...items) {
  if (items.length == 0) {
    return `${owner}'s bag is empty.`;
  }
  return `${owner}'s bag contains: ${items}`;
}
console.log(packBag("Natasha", "💄", "🔫"));
console.log(packBag("Newyork", "💄", "🔫"));
console.log(packBag());

// 6 -----------------------------------------------------------------------------------------



function whereAreYou({
  user = "Someone",
  location: { city = "Unkown", planet = "Earth" } ={} ,
}) {
  return `${user} is currently in ${city}, ${planet} 🌍`;
}

console.log(
  whereAreYou({
    user: "Thor",
    location: { city: "Asgard", planet: "Yggdrasil" },
  })
);
console.log(
  whereAreYou({ user: "Bheem", location: { city: "Dholapur", planet: "Mars" } })
);
console.log(whereAreYou({}));

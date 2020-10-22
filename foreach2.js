// Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

 var foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

//foods.forEach(function(annonymous){
  //console.log(`anything , ${annonymous}!`);
//});

const foods=["pizza", "tacos", "ice cream", "sushi"];

function iterate(item) {
  console.log(item);
}

foods.forEach(iterate);

// your code here


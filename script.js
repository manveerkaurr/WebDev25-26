/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 
//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = [8.99, 9.99, 10.99, 11.99,];
let meat_titles = ["beef tips", "brisket", "ribeye", "steak"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.jpg", "scallops.jpg", "shrimp.jpg", "tuna.jpg"];
let seafood_prices = [1.99, 2.99, 3.99, 4.99, 5.99, 6.99];
let seafood_titles = ["clams", "crabs", "lobster", "scallops", "shrimp", "tuna"];

let dessert_images = ["flan.jpg", "passionberry.jpeg", "oreocup.jpg"];
let dessert_prices = [7.99, 12.99, 13.99];
let dessert_titles = ["flan", "passionberry", "oreocup.jpg"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  for(let index = 0; <meat_images.length;index++){
    build += `<div class="card"
                <h3>$(meat_titles[index]}</h3>)
                <img class="food" src="images/${meat_images[index]}">
                <h4>$${meat_prices[index]}</h4>
               </div>`;
  }
  m.innerHTML= build;              

  }

  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
for(let index = 0; <seafood_images_images.length;index++){
    build += `<div class="card"
                <h3>$(seafood_titles[index]}</h3>)
                <img class="food" src="images/${meat_images[index]}">
                <h4>$${meat_prices[index]}</h4>
               </div>`;
  }
  m.innerHTML= build;              

  }
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.

}

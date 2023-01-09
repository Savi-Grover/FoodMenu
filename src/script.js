

const menuItems = [{
  id: 1,
  item: 'Red Pasta',
  oneliner: 'This isnt the most orthodox pasta recipe, but it is a good one. ',
  img: "https://static.toiimg.com/thumb/59695981.cms?width=1200&height=900",
  hotel: 'Served for two people',
  desc: 'One: When you are craving carbs, nothing is quite as satisfying as a plate of pasta.'
  },
  {
  id: 2,
  item: 'Margarita Pizza',
  oneliner: 'Served with extra sauce and cheese',
  img: "https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg",
  hotel: 'Served for two people',
  desc: 'two: Best choice of food on a winter movie night'
  },
  {
  id: 3,
  item: 'Tomato Soup',
  oneliner: 'This isnt the most orthodox pasta recipe, but it is a good one. ',
  img: "https://pinchofyum.com/wp-content/uploads/Homemade-Tomato-Soup-Square.png",
  hotel: 'Served for one',
  desc: 'three: When you are craving comfort, nothing is quite as satisfying as a bowl of warm soup.'
  },
  {
  id: 4,
  item: 'Chicken Panini',
  oneliner: 'This isnt the most orthodox sandwich recipe, but it is a good one.  ',
  img: "https://whitekitchenredwine.com/wp-content/uploads/2021/01/FrontegaChickenPanini-24-min-scaled.jpg",
  hotel: 'Served for one',
  desc: 'four: When you are craving carbs, nothing is quite as satisfying as a delicious panini. '
  }
];

//console.log(menuItems.length);

// creating variables to grab by id
const item = document.getElementById('item');
const oneLiner = document.getElementById('oneLiner');
const img = document.getElementById('img');
const hotel = document.getElementById('hotel');
const desc = document.getElementById('desc');
const prev = document.getElementById('prev');
const random = document.getElementById('random');
const next = document.getElementById('next');

var currentMenu = 0;


//function to all menu array
window.addEventListener('DOMContentLoaded',()=> {
allMenu();
  });

const allMenu=()=>{
let menu = menuItems[currentMenu];
item.textContent = menu.item;
oneLiner.textContent = menu.oneliner;
img.src = menu.img;
hotel.textContent = menu.hotel;
desc.textContent = menu.desc;
}

//random menu
random.addEventListener('click', () =>{
   currentMenu=Math.floor(Math.random() * menuItems.length);
  allMenu(currentMenu);
})

  //previous 
  prev.addEventListener('click',() =>{
    //img--;
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1;
    }
    allMenu(currentMenu);
  })

    //next 
    next.addEventListener('click',() =>{
      //img++;
    currentMenu++;
      if(currentMenu>menuItems.length-1){
        currentMenu=0;
      }
    allMenu(currentMenu);
  })
   
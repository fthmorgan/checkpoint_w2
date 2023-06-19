// Global Variable
let cheese = 0;



let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'dynamite',
    price: 200,
    quantity: 0,
    multiplier: 2
  }
];

let automaticUpgrades = [
  {
    name: 'rover',
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  {
    name: 'cheese grater',
    price: 1200,
    quantity: 0,
    multiplier: 40
  }

];



// Functions

function update() {
  document.getElementById('drawResource').innerText = cheese
  document.getElementById('clickUpgradesPickaxe').innerText = clickUpgrades[0].quantity
  document.getElementById('automaticUpgradesRover').innerText = automaticUpgrades[0].quantity
  document.getElementById('automaticUpgradesCheeseGrater').innerText = automaticUpgrades[1].quantity
  document.getElementById('clickUpgradesDynamite').innerText = clickUpgrades[1].quantity
  document.getElementById('pickaxePrice').innerText = clickUpgrades[0].price
  document.getElementById('dynamitePrice').innerText = clickUpgrades[1].price
  document.getElementById('roverPrice').innerText = automaticUpgrades[0].price
  document.getElementById('cheeseGraterPrice').innerText = automaticUpgrades[1].price

  automaticClickTotaler()
}

function automaticClickTotaler() {
  let automaticClick = clickUpgrades.reduce((total, upgrade) => total + upgrade.quantity * upgrade.multiplier, 0);
  document.getElementById('automaticClick').innerText = automaticClick;
}


function mineResource() {
  cheese++
  document.getElementById('drawResource').innerText = cheese

}



function buyRover() {
  let roverObject = automaticUpgrades[0]

  if (cheese >= roverObject.price) {
    roverObject.quantity++
    cheese -= roverObject.price
    roverObject.price++
    update()
  }
}

function useAutomaticUpgrade() {
  automaticUpgrades.forEach(upgrade => {
    if (upgrade.quantity > 0) {
      cheese += upgrade.multiplier * upgrade.quantity
      upgrade.quantity--
    }
  })
  update()
}




function buyPickaxe() {
  //✔ check if the user has enough cheese
  let axeObject = clickUpgrades[0]

  if (cheese >= axeObject.price) {
    // ✔increase pickaxe quantity ++
    axeObject.quantity++
    // ✔decrease the cheese 
    cheese -= axeObject.price
    // document.getElementById('clickUpgrades').innerText = axeObject.quantity
    // document.getElementById('drawResource').innerText = cheese
    axeObject.price++
    // increase the price after purchasing
    update()
  }
}

function useClickUpgrade() {
  console.log('interval set');
  clickUpgrades.forEach(upgrade => {
    if (upgrade.quantity > 0) {
      cheese += upgrade.multiplier * upgrade.quantity
      upgrade.quantity--
    }
  })
  update()
}

function buyDynamite() {
  let dynamiteObject = clickUpgrades[1]

  if (cheese >= dynamiteObject.price) {
    dynamiteObject.quantity++
    cheese -= dynamiteObject.price
    dynamiteObject.price++
    update()
  }
}

function buyCheeseGrater() {
  let cheeseGraterObject = automaticUpgrades[1]
  console.log(cheeseGraterObject);

  if (cheese >= cheeseGraterObject.price) {
    cheeseGraterObject.quantity++
    cheese -= cheeseGraterObject.price
    cheeseGraterObject.price++
    update()
  }
}

// 


// function useDynamite() {
//   let dynamiteObject = clickUpgrades[1]

//   if (dynamiteObject.quantity > 0) {
//     cheese += dynamiteObject.quantity * dynamiteObject.multiplier

//   }
// }

// function clickModifier() {


// }


// function collectAutoUpgrades() {
//   let automaticUpgradeObject = automaticUpgrades.forEach(upgradeObject => upgradeObject.quantity * upgradeObject.multiplier)


// }



// Run Functions
useAutomaticUpgrade()
setInterval(useAutomaticUpgrade, 3000)

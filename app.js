// Global Variable
let cheese = 0;



let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    multiplier: 1
  }
];

let automaticUpgrades = [
  {
    name: 'rover',
    price: 600,
    quantity: 0,
    multiplier: 20
  }
];



// Functions

function update() {
  document.getElementById('drawResource').innerText = cheese
  document.getElementById('clickUpgrades').innerText = clickUpgrades[0].quantity
  document.getElementById('automaticUpgrades').innerText = automaticUpgrades[0].quantity
}



function mineResource() {
  cheese++
  document.getElementById('drawResource').innerText = cheese
  useRover()
}

function buyRover() {
  let roverObject = automaticUpgrades[0]

  if (cheese >= roverObject.price) {
    roverObject.quantity++
    cheese -= roverObject.price
    update()
  }
}

function useRover() {
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
    update()
  }
}

function usePickaxe() {
  console.log('interval set');
  clickUpgrades.forEach(upgrade => {
    if (upgrade.quantity > 0) {
      cheese += upgrade.multiplier * upgrade.quantity
      upgrade.quantity--
    }
  })
  update()
}

usePickaxe()
setInterval(usePickaxe, 3000)

// function clickModifier() {


// }


// function collectAutoUpgrades() {
//   let automaticUpgradeObject = automaticUpgrades.forEach(upgradeObject => upgradeObject.quantity * upgradeObject.multiplier)


// }



// Run Functions

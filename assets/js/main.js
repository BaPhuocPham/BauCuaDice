let openBtn = document.querySelector("#openBtn")
let plateReverse = document.querySelector(".plateReverse")
let dice1 = document.getElementById("dice1")
let dice2 = document.getElementById("dice2")
let dice3 = document.getElementById("dice3")
let shockBtn = document.getElementById("shockBtn")
let isOpen = true
let bauCuaArray = [
  "./images/huou.png",
  "./images/bau.png",
  "./images/ga.png",
  "./images/ca.png",
  "./images/cua.png",
  "./images/tom.png"
]
let isComputer = true
let handleInterval = null
let timesInterval = 1

console.log("size", window.screen.availWidth)
if(window.screen.availWidth < 576){
  isComputer = false
}


function handleOpen(){
  if(isComputer){
    if(isOpen == false){
      plateReverse.style = "top: -70%; left: -10%;"
      isOpen = true
    }
  } else {
    if(isOpen == false){
      plateReverse.style = "top: -50%; left: 14%;"
      isOpen = true
    }
  }
}

function handleClose() {
  if(isComputer){
    if(isOpen == true){
      plateReverse.style = "top: -2%; left: -10%;"
      isOpen = false
    }
  } else {
    if(isOpen == true){
      plateReverse.style = "top: 4%; left: 14%;"
      isOpen = false
    }
  }
}

function getRandomNumber(){
  //get integer from 0 to 5
  return Math.floor(Math.random() * 6);
}

function shock(){
  let firstDice = getRandomNumber()
  let secondDice = getRandomNumber()
  let thirdDice = getRandomNumber()

  dice1.src = bauCuaArray[firstDice]
  dice2.src = bauCuaArray[secondDice]
  dice3.src = bauCuaArray[thirdDice]

  //handle clear Interval
  
  if(timesInterval == 10){
    clearInterval(handleInterval)
    handleInterval = null
    timesInterval = 1
    console.log("removed")
  } else {
    timesInterval = timesInterval++
    console.log("timesInterval", timesInterval)
  }
}

function handleShock(){
  shockBtn.disabled = true
  handleInterval = setInterval(function () {
    let firstDice = getRandomNumber()
    let secondDice = getRandomNumber()
    let thirdDice = getRandomNumber()

    dice1.src = bauCuaArray[firstDice]
    dice2.src = bauCuaArray[secondDice]
    dice3.src = bauCuaArray[thirdDice]

    //handle clear Interval
      
    if(timesInterval == 8){
      clearInterval(handleInterval)
      handleInterval = null
      timesInterval = 1
      console.log("removed")
      shockBtn.disabled = false
    } else {
      timesInterval = timesInterval + 1
      console.log("timesInterval", timesInterval)
    }
  }, 100)
  
}
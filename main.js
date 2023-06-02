const fighters = ["🦌","🐎","🐆","🐒","🦘","🐁","🦎","🐝","🐞","🐌","🦚"]
const stageEl = document.getElementById("stage")
const fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {


const randomIndexOne =Math.floor( Math.random() * fighters.length) 
const randomIndexTwo =Math.floor( Math.random() * fighters.length) 

stageEl.textContent = `${fighters[randomIndexOne]} vs ${ fighters[randomIndexTwo]}`
})
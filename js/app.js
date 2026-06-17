const button = document.getElementById('btn')

const colors = ["#ff5733", "#f9ff33", "#3371ff", "red", "green", "rgb(85, 255, 51)"]

button.addEventListener("click", () => {
  console.log("click")
})

function getRandomNumber() {
  console.log(Math.random())
}

getRandomNumber()

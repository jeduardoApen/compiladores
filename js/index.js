import checkString from "./src/app.js"
import MainView from "./src/views/mainView.js"
// checkString()

let mainNode = document.getElementById("app")

mainNode.innerHTML = await MainView()


// let formData = mainNode.querySelector("#formData")

let buttonData = mainNode.querySelector("#buttonCheck")
console.log(formData)
console.log(buttonData)

buttonData.addEventListener("click", (eventNode) => {
    console.log("Ev", eventNode)
    let inputText = mainNode.querySelector("#inputText")
    console.log(inputText)
    let outputTextNode =  mainNode.querySelector("#outputText")

    let arrayObject = checkString(inputText.value)
    console.log(arrayObject)

    let outputText = JSON.stringify(arrayObject)

    outputTextNode.textContent = outputText
    inputText.value = ""

    eventNode.preventDefault()



})



console.log(mainNode)
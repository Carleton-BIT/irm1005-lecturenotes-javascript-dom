let heading = document.querySelector("h1")
heading.style.fontSize = "10px"

const listElements = document.querySelectorAll("li");

listElements.forEach(
    element => {
        element.textContent = 'One Of Us';
    }
)

const newListElement = document.createElement("li")
newListElement.textContent = 'James is the best'

const myList = document.querySelector("ul")

myList.append(newListElement)


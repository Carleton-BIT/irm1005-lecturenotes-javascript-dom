

const listElements = document.querySelectorAll("li");

listElements.forEach(
    element => {
        element.textContent = 'One Of Us';
    }
)

function addElementToList() {
    const newListElement = document.createElement("li")
    newListElement.textContent = 'James is the best'
    const myList = document.querySelector("ul")
    myList.append(newListElement)
}


const addElementButton = document.querySelector('#add-element-btn')

//addElementButton.addEventListener("click", addElementToList)
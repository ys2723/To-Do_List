// Below two lines create a constant.

const item = document.querySelector(".item")
const toDoBox = document.querySelector("#to-do-box")

// Below nine lines of code remove the already written text in the input area when 'Enter' is pressed. BTW today is 1 May 2023. Time 0031 hrs. 

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addToDo(this.value)
            this.value = ""
        }
    }
)

// Below six lines of code create a new list item with a cross sign. BTW today is 1 May 2023. Time 0032 hrs.

const addToDo = (item) => {
    const listItem = document.createElement("li")
    listItem.innerHTML = `
    ${item}
          <i class = "fas fa-times"></i>
    `;
    
    // Below six lines of code strike off the element and change colour (using CSS) when the list item is clicked. BTW today is 1 May 2023. Time 0035 hrs.

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )

    // Below six lines of code remove the list item when cross sign is clicked. BTW today is 1 May 2023. Time 0033 hrs.
    
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    ) 
    
    // New list item is added to the to do box
    toDoBox.appendChild(listItem)
}

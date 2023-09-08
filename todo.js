let todocontainer = document.getElementById("todoItemsContainer");
let todoList = [

]

function saving() {

    let list = JSON.stringify(todoList)
    localStorage.setItem("todolist", list);
}


function getstoreditems() {

    let storedlist = localStorage.getItem("todolist");
    let parsedlist = JSON.parse(storedlist);
    if (parsedlist === null) {
        return [];
    } else {
        return parsedlist
    }

}

todoList = getstoreditems()





function createandappendtodo(todo) {
    let labelid = "label" + todo.id
    let checkboxid = "checkbox" + todo.id


    let todoelement = document.createElement("li");
    todoelement.classList.add("todo-item-container", "d-flex", "flex-row");
    todocontainer.appendChild(todoelement);

    let inputelement = document.createElement("input");
    inputelement.type = "checkbox";
    inputelement.id = checkboxid;
    inputelement.classList.add("checkbox-input");
    todoelement.appendChild(inputelement);
    let divcontainer = document.createElement("div");
    divcontainer.classList.add("label-container", "d-flex", "flex-row");
    todoelement.appendChild(divcontainer)

    let label = document.createElement("label");
    label.textContent = todo.text;
    label.id = labelid
    label.classList.add("checkbox-label");
    label.setAttribute("for", inputelement.id);
    divcontainer.appendChild(label);

    let iconcontainer = document.createElement("div");
    iconcontainer.classList.add("delete-icon-container");
    divcontainer.appendChild(iconcontainer);

    let deleteicon = document.createElement("i");
    deleteicon.classList.add("far", "fa-trash-alt", "delete-icon");
    iconcontainer.appendChild(deleteicon);


    inputelement.onclick = function() {

        label.classList.toggle("labels")
        todo.ischecked = inputelement.checked;
    }

    if (todo.ischecked === true) {
        label.classList.toggle("labels")
        inputelement.checked = true;
    }

    deleteicon.onclick = function() {

        todocontainer.removeChild(todoelement);
        let indexvalue = todoList.findIndex(function(eachitem) {
            if (eachitem.id === todo.id) {
                return true
            } else {
                return false
            }
        })

        todoList.splice(indexvalue, 1);
    }


}
for (let todo of todoList) {
    createandappendtodo(todo)
}

let counter = todoList.length;

function adding() {
    let inputvalue = document.getElementById("todoUserInput");
    counter = counter + 1

    if (inputvalue.value === "") {
        alert("Enter Valid Text");
        return;
    }

    let obj = {
        text: inputvalue.value,
        id: counter,
        ischecked: false
    }

    createandappendtodo(obj);
    inputvalue.value = "";
    todoList.push(obj);

    console.log(todoList);
}

function clearing() {
    todocontainer.textContent = "";
    localStorage.removeItem("todolist");
}
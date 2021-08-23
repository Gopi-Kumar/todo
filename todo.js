let todos = [
    {
        list_name : "Default",
        id: 0,
        todo_item : ["Buy Milk", "Go for Walk", "Be active"],
        completed_item : ["Sadhna ko pitna hai"],
        
    },
    {
        list_name : "Shopping",
        id:1,
        todo_item : ["Buy a study chair", "Buy a keyboard", "Buy a house"],
        completed_item : ["Aur Gaurishanker ko bhi","Sadhna ko pitna hai"],

    },
    {
        list_name :"Youtube",
        id:2,
        todo_item : ["Complete Dynamic programming", "Bit Manupulation"],
        completed_item : ["Suruchi ke mar kar muh for denge","Aur Gaurishanker ko bhi","Sadhna ko pitna hai"],

    }
]

let currentSelectedListIndex = 0;

const todo_container = document.getElementById("todo_items");


function renderTodo(){
    todo_container.innerHTML = "";
    todos.map(todo => {
       let list_name = todo.list_name;
       todo.todo_item.map(item => {
            let todo_item = document.createElement("div");
            todo_item.classList.add("todo_item");
            let html = `
                <div class="checkbox"  onclick="deleteTodo(this)">
                    <i class="fas fa-check-circle"></i>
                </div>
                <section>
                    <p>${item}</p>
                    <p>${list_name}</p>
                </section>
            `
            todo_item.innerHTML = html;
            todo_container.appendChild(todo_item)
        })
    })
}
function renderCompletedTodo(){
    todos.map(todo => {
        let list_name = todo.list_name;
        todo.completed_item.map(item => {
             let completed_item = document.createElement("div");
             completed_item.classList.add("completed_item");
             let html = `
                 <div class="checkbox">
                     <i class="fas fa-check-circle"></i>
                 </div>
                 <section>
                     <p>${item}</p>
                     <p>${list_name}</p>
                 </section>
             `
             completed_item.innerHTML = html;
             todo_container.appendChild(completed_item)
         })
     })
}

renderTodo();
renderCompletedTodo();

let list_container= document.getElementById("all_lists_container");
function renderList(){
    list_container.innerHTML = "";
    let allList = document.createElement("section");
    allList.setAttribute("id", "list_heading");
    allList.classList.add("active_list");
    let html = `
        <p>All Lists</p>
        
    `
    allList.innerHTML = html;
    list_container.appendChild(allList);
    todos.map(todo => {
        let section = document.createElement("section");
        section.setAttribute("id", `${todo.id}`)
        section.classList.add("list");
        section.setAttribute("onclick","renderSpecificListTodos(this.id)")
        let html = `
            <p>${todo.list_name}</p>
            <p class="todo_count">${todo.todo_item.length}</p>
        `

        section.innerHTML = html;
        list_container.appendChild(section)
    })
}
renderList();


function renderSpecificListTodos(listId){
    currentSelectedListIndex = listId;
    todo_container.innerHTML = "";
    todos[listId].todo_item.map(item => {
       let list_name = todos[listId].list_name;
            let todo_item = document.createElement("div");
            todo_item.classList.add("todo_item");
            let html = `
                <div class="checkbox" onclick="deleteTodo(this)">
                    <i class="fas fa-check-circle"></i>
                </div>
                <section>
                    <p>${item}</p>
                    <p>${list_name}</p>
                </section>
            `
            todo_item.innerHTML = html;
            todo_container.appendChild(todo_item)
    })
    todos[listId].completed_item.map(item => {
        let list_name = todos[listId].list_name;
             let todo_item = document.createElement("div");
             todo_item.classList.add("completed_item");
             let html = `
                 <div class="checkbox">
                     <i class="fas fa-check-circle"></i>
                 </div>
                 <section>
                     <p>${item}</p>
                     <p>${list_name}</p>
                 </section>
             `
             todo_item.innerHTML = html;
             todo_container.appendChild(todo_item)
     })
}

//new todo 

let newTodoInput = document.querySelector("#todo_input");
function addNewTodo(){
   if(newTodoInput.value != ""){
    todos[currentSelectedListIndex].todo_item.push(newTodoInput.value);
    renderSpecificListTodos(currentSelectedListIndex);
    renderList();
   }
}

function  deleteTodo(args){
    args.children[0].style.display = "block";
    setTimeout(() => {
        let section = args.nextSibling.nextSibling;
        let list_name = section.children[1].innerText;
        let todo_item_name =  section.children[0].innerText;
    
        todos.map(todo => {
            if(todo.list_name == list_name){
                currentSelectedListIndex = todo.id;
                return;
            }
        })
        let removeItemFrom = todos[currentSelectedListIndex].todo_item;
        let newTodoArray = []; 
        removeItemFrom.map(item => {
            if(item != todo_item_name)
                newTodoArray.push(item);
        })
        todos[currentSelectedListIndex].todo_item = newTodoArray;
        todos[currentSelectedListIndex].completed_item.push(todo_item_name)
    
        renderSpecificListTodos(currentSelectedListIndex);
    }, 200);
}




let todos = [
    {
        list_name : "Default",
        todo_item : ["Buy Milk", "Go for Walk", "Be active"]
    },
    {
        list_name : "Shopping",
        todo_item : ["Buy a study chair", "Buy a keyboard", "Buy a house"]
    },
    {
        list_name :"Youtube",
        todo_item : ["Complete Dynamic programming", "Bit Manupulation"]
    }
]



const todo_container = document.getElementById("todo_items");
function renderTodo(){
    todo_container.innerHTML = "";
    todos.map(todo => {
       let list_name = todo.list_name;
       todo.todo_item.map(item => {
            let todo_item = document.createElement("div");
            todo_item.classList.add("todo_item");
            let html = `
                <div class="checkbox">
                    <span>&check;</span>
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
renderTodo();

let list_container= document.getElementById("all_lists_container");
function renderList(){
    list_container.innerHTML = "";
    let allList = document.createElement("section");
    allList.setAttribute("id", "list_heading");
    allList.classList.add("active_list");
    let html = `
        <p>All Lists</p>
        <p class="list_count">${todos.length}</p>
    `
    allList.innerHTML = html;
    list_container.appendChild(allList);
    todos.map(todo => {
        let section = document.createElement("section");
        section.classList.add("list");
        let html = `
            <p>${todo.list_name}</p>
            <p class="todo_count">${todo.todo_item.length}</p>
        `

        section.innerHTML = html;
        list_container.appendChild(section)
    })
}
renderList();
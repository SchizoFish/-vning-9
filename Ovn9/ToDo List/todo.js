const input = document.querySelector(".input");
const button = document.querySelector("#btn");
const list = document.querySelector("#listID");

button.addEventListener("click", addItem);
list.addEventListener("click", remove)

function addItem(item){
    item.preventDefault();
    
    const newTodo = document.createElement('li');
    let todos = document.createElement('div');
    todos.classList.add('newItem'); 

    if(input.value == ''){
        alert('Please write what you would like to add');
    } else{
        newTodo.innerText = input.value;
        newTodo.classList.add('item')
    
        todos.appendChild(newTodo);
    }

    const remove = document.createElement('button');
    remove.innerText = "-";
    remove.classList.add('remove-btn');

    newTodo.appendChild(remove);

    list.appendChild(todos);

    input.value = "";
}

function remove(item){
    let toRemove = item.target;

    if(toRemove.classList[0] === 'remove-btn'){
        let todo = toRemove.parentElement;
        todo.remove();
    }
}

list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
};
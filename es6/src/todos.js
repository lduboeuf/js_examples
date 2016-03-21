export function remove(evt){
	//on recherche le noeud html à supprimer ( le parent de <a></a>)
	var current_todo = evt.target.parentNode;
	var todo_list = current_todo.parentNode;
	todo_list.removeChild(current_todo);
}

export function  add(todo){
	//creation balise "li"
	var todo_li = document.createElement("li");
	todo_li.innerHTML = todo;
	//creation balise "a"
	var todo_del = document.createElement("a");
	todo_del.innerHTML = "  X";
	todo_del.style.cursor = "crosshair";
	todo_del.addEventListener('click', remove);
	//on rajoute la balise a après le li ( <li><a...></a></li>)
	todo_li.appendChild(todo_del);
	//on rajoute le li à la todo list
	document.getElementById("todos-list").appendChild(todo_li);

}


export function  addAll(todos){
		
	for(var i=0;i<todos.length;i++){
		add(todos[i].todo);
	}
}



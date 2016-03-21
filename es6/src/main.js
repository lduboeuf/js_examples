import * as TODOCTRL from 'todos';


//init todos
var todos = [
	{ "todo" : "todo 1"},
	{ "todo" : "todo 2"},
	{ "todo" : "todo 3"}
]

//fonction appelée après le chargement complet de la page (évènement load)
window.addEventListener("load", function(){
	
	//display initial todos
	TODOCTRL.addAll(todos);

	//define button click event
	document.getElementById("btn-create-todo").addEventListener('click', function(e){
		TODOCTRL.add(document.getElementById("todo").value);
	});
	//handle keypress event
	window.addEventListener("keydown", function(e){

		if (e.keyCode==13){ // code 13 = touche entrée
			
			TODOCTRL.add(document.getElementById("todo").value);
		}
		
	}, true);
	
});
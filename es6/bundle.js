/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _todos = __webpack_require__(1);

	var TODOCTRL = _interopRequireWildcard(_todos);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//init todos
	var todos = [{ "todo": "todo 1" }, { "todo": "todo 2" }, { "todo": "todo 3" }];

	//fonction appelée après le chargement complet de la page (évènement load)
	window.addEventListener("load", function () {

		//display initial todos
		TODOCTRL.addAll(todos);

		//define button click event
		document.getElementById("btn-create-todo").addEventListener('click', function (e) {
			TODOCTRL.add(document.getElementById("todo").value);
		});
		//handle keypress event
		window.addEventListener("keydown", function (e) {

			if (e.keyCode == 13) {
				// code 13 = touche entrée

				TODOCTRL.add(document.getElementById("todo").value);
			}
		}, true);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.remove = remove;
	exports.add = add;
	exports.addAll = addAll;
	function remove(evt) {
		//on recherche le noeud html à supprimer ( le parent de <a></a>)
		var current_todo = evt.target.parentNode;
		var todo_list = current_todo.parentNode;
		todo_list.removeChild(current_todo);
	}

	function add(todo) {
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

	function addAll(todos) {

		for (var i = 0; i < todos.length; i++) {
			add(todos[i].todo);
		}
	}

/***/ }
/******/ ]);
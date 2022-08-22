

import './styles.css';


import { Todo, Todolist} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new Todolist();

todoList.todos.forEach( todo =>crearTodoHtml(todo));

/*  const newTodo = new Todo('Aprender Javascript');
todoList.nuevoTodo( newTodo ); 

//todoList.todos[0].imprimirClase(); */


/* newTodo.imprimirClase(); */

//console.log( 'todos:', todoList.todos)

/* localStorage.setItem('mi-key', 'ABC1235');

setTimeout( ()=> {
    localStorage.removeItem('mi-key')

},1500) */
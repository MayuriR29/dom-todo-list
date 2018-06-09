const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];
function appendtask(element) {
	const varLi = document.createElement('li'); //
	document.querySelector('ul').appendChild(varLi);
	varLi.textContent = element;
	//first argument of forEach function is the value of array at index i
	varLi.addEventListener('click', function (event) {
	varLi.classList.toggle("done");
	/*When only one argument is present: 
	Toggle class value; i.e., if class exists 
	then remove it and return false, if not, then add it and return true. */
	//
	});

}
tasks.forEach(appendtask);
//### Adding more To-Do items
function addTodo(){
	const varInput=document.createElement('input');
	const varButton=document.createElement('button');
	document.querySelector('body').appendChild(varInput);
	document.querySelector('body').appendChild(varButton);
	varButton.textContent='Add Todo';
	
};
addTodo();
document.querySelector('button').addEventListener('click',function(event){
	const valueTodo=document.querySelector('input').value;
	const varLi = document.createElement('li'); //
	document.querySelector('ul').appendChild(varLi);
	varLi.textContent = valueTodo;
	document.querySelector('input').value='';
});






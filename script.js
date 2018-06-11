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
		event.target.classList.toggle("done");
		/*When only one argument is present: 
		Toggle class value; i.e., if class exists 
		then remove it and return false, if not, then add it and return true. */
		//
	});

}
tasks.forEach(appendtask);
//Function to add input and button
function addTodo() {
	const varInput = document.createElement('input');
	const varButton = document.createElement('button');
	document.querySelector('body').appendChild(varInput);
	document.querySelector('body').appendChild(varButton);
	varButton.textContent = 'Add Todo';
	
};
addTodo();
//addEventListener to view to-do values input by user,as a list 
document.querySelector('button').addEventListener('click', function (event) {
	//only if value is entered by user then ,add to the list
	if (document.querySelector('input').value !== "") {
		onCallEventListener();		
	}

});
//Allow user to create a todo when they press the <kbd>Enter</kbd> key
document.querySelector('input').addEventListener('keypress',function(event){
	//only if value is entered by user and enter key is pressed ,add to the list
	if (document.querySelector('input').value !== "" && event.charCode ===13) {
		onCallEventListener();
	}
});
//function for addEventListener
function onCallEventListener(){
	const valueTodo=document.querySelector('input').value;
	const varLi = document.createElement('li'); //
	document.querySelector('ul').appendChild(varLi);
	varLi.textContent = valueTodo;
	// Toggle class value,of the entered to-do
	varLi.addEventListener('click',function(event2){
		event2.target.classList.toggle('done');
	})
	// reset the input value to blank
	document.querySelector('input').value='';
}
//Add delete button
const delButton =document.createElement('button');
delButton.id='delete';
document.querySelector('body').appendChild(delButton).textContent='Delete All';




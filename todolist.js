var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem');
    
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div class="gio">' + text + '</div>';
  evt.preventDefault();
}, false);

//Adds strike through the list before deleting the item
todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  if(tar.style.textDecoration === "line-through"){
   tar.parentNode.removeChild(tar);
}else{
    tar.style.textDecoration = "line-through"
}
  evt.preventDefault();
}, false);


//changes the color of the bar
field.style.color= "pink";
if(field.style.color= "pink"){
    field.style.backgroundColor= "red"
}
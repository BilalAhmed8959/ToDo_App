var input = document.querySelector("#input")
var table = document.querySelector("table");
var arr = [];


function addtodo(){
    table.innerHTML =""
    arr.push(input.value);
    for(var i = 0; i <arr.length; i++){
        table.innerHTML += `<tr><td id="li_1">${arr[i]}</td>
       <td><button onclick="todoDelete(${i})" id="button_1">Delete</button></td> 
      <td>  <button onclick="updeteTodo(${i})" id="button_2">Updete</button></td> 

    </tr>`
    }
    input.value =""
}
function todoDelete(index){
    table.innerHTML =""
arr.splice(index,1);
for(var i = 0; i <arr.length; i++){
    table.innerHTML += `<tr><td id="li_1"> ${arr[i]}</td>
       <td><button onclick="todoDelete(${i})" id="button_1">Delete</button></td> 
      <td>  <button onclick="updeteTodo(${i})" id="button_2">Updete</button></td> 

    </tr>`
}
input.value =""
}
function updeteTodo(index){
    table.innerHTML = ""
var abc = prompt("Updete Todo");
arr.splice(index,1,abc);
for(var i = 0; i <arr.length; i++){
    table.innerHTML += `<tr><td id="li_1"> ${arr[i]}</td>
       <td><button onclick="todoDelete(${i})" id="button_1">Delete</button></td> 
      <td>  <button onclick="updeteTodo(${i})" id="button_2">Updete</button></td> 

    </tr>`
}
input.value =""
}

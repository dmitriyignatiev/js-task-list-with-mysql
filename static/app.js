

const taskInput = document.querySelector('#task');
const taskForm = document.querySelector('#task-form');
const button = document.querySelector('#button');
const ul = document.querySelector('.collection-task')

myfunction

myfunction(){

                   button.addEventListener('click', (e)=> {
                   const li=document.createElement('li')
                   li.innerHTML=taskInput.value
                   ul.appendChild(li)

                   const addButton=document.createElement('button')
                   addButton.innerHTML = 'add'
                   addButton.id = 'add'
                   li.appendChild(addButton)

                   addButton.addEventListener('click', ()=>{

                   var parent = addButton.parentNode

                   var taskdb = parent.firstChild.textContent

                   console.log(taskdb)
                   return taskdb


                   });



e.preventDefault();

                 });

};





$(document).ready(function(){
//console.log('ready');
//    $('#add').bind('click', function(e){
//
//    $.getJSON('/add'), {
//    task:
//
//    })

    e.preventDefault()
    })







//
//});






document.addEventListener('DOMContentLoaded', function (){ 
        document.querySelector('button').disabled = true
        document.querySelector('input').onkeyup = () => {
            if(document.querySelector('input').value.length > 0){
                document.querySelector('button').disabled = false;  
            }else{
               document.querySelector('button').disabled = true; 
            }
        }
    }
    )
let tasks = []

console.log(tasks)

const division = document.getElementById('tasks')

function addNewTask(){
    //tomar la informacion que esta en #input y agregarla a la variable tasks
    const text = document.querySelector('#input').value;
    const li = document.createElement('li');
    li.innerHTML = text;
    //document.querySelector('#newTasks').append(li);
    document.querySelector('input').value = '';
    document.querySelector('button').disabled = true;
    tasks.push(text) 
    let existe = tasks[tasks.length -1];
    tasks.forEach((tarea) => {  
        if(tarea === existe) {    
            const div = document.createElement('div')
            div.classList.add('tarea');
            div.innerHTML = `
            <h2>${tarea}</h2>
            <button id="internalButton" onclick="eliminateTask()">x</button>
            `        
        //let redBack = document.querySelector('tarea');
        //let blueBack = document.querySelector('tarea');
        //for(let i = 0; i < tasks.length - 1; i++){
          //  if(i % 2 == 0){
            //    blueBack.style.color = "blue"; 
            //}else{
              //  redBack.style.color="red"; 
            //}
            division.appendChild(div) 
        }
                      
        }
)}


function eliminateTask(){
}



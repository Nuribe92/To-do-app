let tasks = []
document.addEventListener('DOMContentLoaded', function (){ 
        document.querySelector('button').disabled = true
        document.querySelector('input').onkeyup = () => {
            document.querySelector('button').disabled = false
        }

})
function addNewTask(){
    //tomar la informacion que esta en #input y agregarla a la variable tasks
    
    const text = document.querySelector('#input').value;
    const li = document.createElement('li');
    li.innerHTML = text;

    document.querySelector('#newTasks').append(li)
}
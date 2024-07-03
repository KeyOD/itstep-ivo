const app = () => {
    document.addEventListener('click',(e)=>{
        if(e.target.classList.contains('addTaskButton')){
            showTask(e)
        }
        if(e.target.classList.contains('complete')){
            completeOrRemoveTask(e,'complete')
        } else if (e.target.classList.contains('remove')){
            completeOrRemoveTask(e,'remove')
        }
    })
}
window.addEventListener('load', app)

// function showTask(taskNum) {
//     let li = document.createElement("li")
//     let taskList = document.querySelector("#taskList")
//     let btns = createBtns(taskNum)
    
//     let taskName = document.createElement("h2")
//     let taskDesc = document.createElement("p")
//     switch(taskNum){
//         case "Task 1":
//             taskName.innerText="Clean room"
//             taskDesc.innerText="Clean your room, because it's messy."
//             break;
//         case "Task 2":
//             taskName.innerText="Reorder books"
//             taskDesc.innerText="Reorder your books to make them good to look at while they sit on the shelf."
//             break;
//         case "Task 3":
//             taskName.innerText="Clean house"
//             taskDesc.innerText="You have waited too long to clean your house. Now is the time!"
//             break;
//         default:
//             alert("wrong task number")
//             break;
//     }
    
//     li.dataset.taskList = taskNum
//     li.append(taskName)
//     li.append(taskDesc)
//     li.append(btns)

//     taskList.appendChild(li)
// }

function showTask(e) {
    e.preventDefault()
    let li = document.createElement("li")
    let btns = createBtns('task')
    let taskList = document.querySelector("#taskList")
    let textarea = document.querySelector('#textarea')
    if(textarea.value !== ''){
        let tasks = createTask('New Task',textarea.value)
        for (const task of tasks) {
            li.append(task)
        }
        li.append(btns)
        taskList.appendChild(li)
        textarea.value = ''
    }
}

function createTask(name, description) {
    let taskName = document.createElement("h2")
    let taskDesc = document.createElement("p")
    taskName.innerText=name
    taskDesc.innerText=description
    return [taskName,taskDesc]
}

function createBtns(taskNum){
    let btnWrapper = document.createElement("div")
    btnWrapper.classList.add('buttons-container')

    let completeBtn = document.createElement("button")
    completeBtn.innerText = "Complete " + taskNum
    completeBtn.dataset.task = taskNum
    completeBtn.classList.add('complete')
    btnWrapper.appendChild(completeBtn)
    
    let removeBtn = document.createElement("button")
    removeBtn.innerText = "Remove " + taskNum
    removeBtn.dataset.task = taskNum
    removeBtn.classList.add('remove')
    btnWrapper.appendChild(removeBtn)

    return btnWrapper
}

function completeOrRemoveTask(e,task){
    let targetTask = e.target.closest('li')
    if(task === "complete"){
        targetTask.classList.add('completed')
    } else if(task == "remove"){
        targetTask.remove()
    }
}
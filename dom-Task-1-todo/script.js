const app = () => {
    document.addEventListener('click',(e)=>{
        if(e.target.classList.contains('addTaskButton')){
            e.preventDefault()
            showTask()
            // showPresetTasks(e)
        }
        if(e.target.classList.contains('complete')){
            completeOrRemoveTask(e.target,'complete')
        } else if (e.target.classList.contains('remove')){
            completeOrRemoveTask(e.target,'remove')
        }
    })

    if(document.cookie){
        let allCookies = document.cookie.split(';')
        let cookiePairs = {}
        for(cookie of allCookies){
            let cook = cookie.split('=')
            cookiePairs[cook[0].trim()] = cook[1].trim()
        }
        showTaskFromCookie(cookiePairs)
    }
}
window.addEventListener('load', app)

let paras = document.querySelectorAll('p')

function showTaskFromCookie(pairs){
    for([cookieName,cookieStatus] of Object.entries(pairs)){
        console.log(cookieName,cookieStatus);
        showTask(cookieName)
        let text = document.querySelector('#'+cookieName).querySelector('p')
        completeOrRemoveTask(text, cookieStatus)
    }
}


function showPresetTasks(e) {
    let taskNum = e.target.dataset.task
    let li = document.createElement("li")
    let taskList = document.querySelector("#taskList")
    let btns = createBtns(taskNum)
    
    let taskName = document.createElement("h2")
    switch(taskNum){
        case "Task 1":
            taskName.innerText="Clean room"
            break;
        case "Task 2":
            taskName.innerText="Reorder books"
            break;
        case "Task 3":
            taskName.innerText="Clean house"
            break;
        default:
            alert("wrong task number")
            break;
    }
    
    li.dataset.taskList = taskNum
    li.append(taskName)
    li.append(taskDesc)
    li.append(btns)

    taskList.appendChild(li)
}

function showTask(text) {
    let li = document.createElement("li")
    let btns = createBtns('task')
    let taskList = document.querySelector("#taskList")
    let input = document.querySelector('#input')
    let task = null
    if(input.value !== ''){
        task = createTask(input.value)
        input.value = ''
    } else {
        task = createTask(text)
    }
    li.setAttribute('id',task.innerText)
    li.append(task)
    li.append(btns)
    taskList.appendChild(li)
    addToCookie(task,'uncompleted')
}

function createTask(name) {
    let taskName = document.createElement("p")
    taskName.innerText=name
    return taskName
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

function completeOrRemoveTask(target,task){
    let targetTask = target.closest('li')
    if(task === "complete"){
        targetTask.classList.add('completed')
        addToCookie(targetTask.querySelector('p'),'complete')
    } else if(task == "remove"){
        targetTask.remove()
        document.cookie = targetTask.querySelector('p').innerText+'=; Max-Age=0; path=/';
    }
}

function addToCookie(task,status){
    setCookie(task.innerText,status)
}

function setCookie(name, value) {
    let date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-botton");
let taskList = [];
addButton.addEventListener("click", addTask);   // button click시 addTask 함수 실행.

function addTask(){
    // let taskContent = taskInput.value;
    // 아래 task(객체)가 위 컨텐츠를 대신한다. task에 Content와 isComplete 정보가 같이 들어있다.
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task);
    console.log(taskList);
    render();
    taskInput.value = "";
}

// 그림을 그려주기.
function render(){
    let resultHTML = "";
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].isComplete == true){
            resultHTML += `<div class=tasks>
                <div class="task-done">${taskList[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                    <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
                </div>    
            </div>`
        }else{
            resultHTML += `<div class="tasks">
                <div>${taskList[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                        <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
                    </div>
            </div>`
        }
        
    }
    // button event를 주는 방법 1. addEventListener 2. onclick(바로 함수호출)

    document.getElementById("task-board").innerHTML = resultHTML;

}

// check button을 누르면 실행할 것. onclick 사용
function toggleComplete(id){
    console.log("id:",id);

    // check버튼을 누른 해당 taskList의 isComplete를 true로 만듬
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
            //taskList[i].isComplete = true; 인 경우, 무한 true로 바꿔주기밖에 안됨.{
            taskList[i].isComplete = !taskList[i].isComplete;              
            break;
        }
    }
    render();
}

function deleteTask(id){
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
            break;
        }
    }
    render();
}

// data 구별을 위해 data에 주민등록 번호를 랜덤하게 지정
function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2,9);
}



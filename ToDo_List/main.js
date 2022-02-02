let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-botton");
let taskList = [];
let mode = "All";   // 초기값 All 넣어야 처음 넣었을 때 All 화면이 나옴
let tabs = document.querySelectorAll(".task-tabs div")  // querySelectorAll 하면 모든 .task-tabs 아래의 div를 가져올 수 있음.
let filterList = [];
addButton.addEventListener("click", addTask);   // button click시 addTask 함수 실행.


// fixed div -> html에 id 넣기
for(let i=1;i<tabs.length;i++){
    tabs[i].addEventListener("click",filter);
}


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

// UI update용 함수 render
function render(){
    let meanlessList=[];
    if(mode == "all"){
        meanlessList = taskList;
    }else if(mode == "ongoing" || mode == "done"){
        meanlessList = filterList;
    }

    let resultHTML = "";
    for(let i=0;i<meanlessList.length;i++){
        if(meanlessList[i].isComplete == true){
            resultHTML += `<div class=tasks>
                <div class="task-done">${meanlessList[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${meanlessList[i].id}')">Check</button>
                    <button onclick="deleteTask('${meanlessList[i].id}')">Delete</button>
                </div>    
            </div>`
        }else{
            resultHTML += `<div class="tasks">
                <div>${meanlessList[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${meanlessList[i].id}')">Check</button>
                        <button onclick="deleteTask('${meanlessList[i].id}')">Delete</button>
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

function filter(event){
    console.log("filter클릭됨", event.target.id);  // click한 component 확인 
    filterList = [];   
    mode = event.target.id;
    if(mode == "all"){
        render();
    }else if(mode == "ongoing"){
        for(let i=0;i<taskList.length;i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        }   
        // taskList = filterList; 로 덮어쓰면 Original 값에 손상이 감. -> filterList를 전역변수로  
        render();
    }else if(mode == "done"){
        for(let i=0;i<taskList.length;i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i])
            }
        }
        render();
    }
    console.log(filterList);
}

    
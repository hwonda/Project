// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI

let computerNum = 0;
let playButton = document.getElementById("play-button");    // html요소와 js 연결하는 방법. Id로 받은 것. class 나 jQuery 등으로도 받을 수 있다.
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let chancesNum = document.getElementById("chances-num");
let gameOver = false;
let history = [];   // 같은 값을 썼는지 여부 확인을 위한 변수

playButton.addEventListener("click",play);                  // play 함수를 매개변수처럼 넘김. play() 사용시 함수가 호출돼버림.
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function clear(){        // 간단한 로직인 경우, 함수를 선언과 동시에 사용 가능
    userInput.value = "";                                   // 다른 곳에서 clear란 함수를 사용하면 안된다.
})

function pickRandomNum(){
  computerNum = Math.floor(Math.random()*100);
  console.log("정답",computerNum);
}

//play 한번당 chances--, chances ==0 -> game over
function play(){
    let userValue = userInput.value;

    // 유효성검사
    if(userValue<1 || userValue>100){
        resultArea.textContent = "1과 100 사이의 숫자를 입력하세요.";
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 값입니다. 다른 수를 입력해주세요."
        return;
    }

    chances --;
    chancesNum.textContent = `찬스횟수:${chances}번`   // `(백틱) : 동/정적인 값을 동시에 쓸 수 있다.
    if(userValue < computerNum){
        resultArea.textContent = "Up!!!!";
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!!!!";
    }else if(userValue == computerNum){
        resultArea.textContent = "corret!!!! please press reset button";
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);
    

    if(chances<1){
        gameOver = true;
    }
    if(gameOver){
        playButton.disabled = true;
    }
}

function reset(){
    // user input 창이 깨끗하게 정리
    userInput.value = "";
    // 새로운 번호 생성
    pickRandomNum();
    resultArea.textContent = "결과값이 여기 나옵니다";
    chances = 5;
    chancesNum.textContent = `찬스횟수:${chances}번`
    gameOver = false;
    playButton.disabled = false;
}

pickRandomNum();

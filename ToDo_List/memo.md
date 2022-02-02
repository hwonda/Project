## innerHTML과 textContent의 차이
innerHTML: Element의 HTML, XML을 읽어오거나, 설정할 수 있습니다. 태그 안에있는 HTML 전체 내용을 들고옴
textContent: 해당 노드가 가지고 있는 텍스트 값을 그대로 가져옴.
예시
html에 이런 태그가 있다고 가정할때

<div id="test"><span>hi</span></div>
다음의 결과값을 예상하고 확인하시오.


console.log(document.getElementById("test").innerHTML)          <span>hi</span>
console.log(document.getElementById("test").textContent)        hi


각각의 코드를 따로 실행해보고 둘의 차이를 확인하시오

document.getElementById("test").innerHTML=`<h1>Noona</h1>`      Noona
document.getElementById("test").textConent=`<h1>Noona</h1>`     X

Template Literal
ES6는 템플릿 리터럴(Template literal)이라고 불리는 새로운 문자열 표기법을 도입하였다. 템플릿 리터럴은 일반 문자열과 비슷해 보이지만, ‘ 또는 “ 같은 통상적인 따옴표 문자 대신 백틱(backtick) 문자 `를 사용한다.

기존 ES5에서의 코드
function introduce(name,age){
    console.log("제 이름은"+name+"이고, 저는"+age+"살 입니다")
}
ES6에서의 새로운 방법
function introduce(name,age){
   console.log(`제 이름은${name}이고 ${age}살 입니다`)
}
더이상 +로 문장을 이을필요가 없다

## 객체

- 할 일이 '끝났는지 안 끝났는지' 추가적인 정보를 가지고 있어야 함.
- 그냥 String으로는 표현이 안 됨.
- task 객체에서 표현되는 console 값
```
[{…}]
0: {taskContent: '더하기', isComplete: false} 
length: 1
[[Prototype]]: Array(0)
```
- 한 객체에 
// 키 입력 받았을 때 소리를 재생하는 함수
function sound(e) {
  // audio의 data-key 속성 값이 입력받은 키의 값인 audio 요소 선택
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // class가 key인 요소의 data-key 속성 값이 입력받은 키의 값인 요소 선택
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // 입력받은 키가 HTML에 정의된 키가 아니면 함수 종료
  if (!audio) return;
  audio.currentTime = 0; // audio 재생 시간 0 => 처음부터 반복 재생
  audio.play(); // audio 재생
  key.classList.add("playing"); // key에 playing 클래스 추가 => 화면에 해당 키가 눌렸는지 표시
}

// 키를 눌렀을 때 화면 표현에 대한 처리 함수
function effect(e) {
  // 키를 눌렀을 때 화면에 표시를 위해 추가했던 playing 클래스 제거
  this.classList.remove("playing");
}

// 클래스가 key인 태그를 가져와 상수 키에 할당
const keys = Array.from(document.querySelectorAll(".key"));
// 각 키마다 forEach를 통해 addEventListener 실행하는데 transition이 끝나면
// effect 함수 실행하여 css 효과 제거
keys.forEach((key) => key.addEventListener("transitionend", effect));

window.addEventListener("keydown", sound); // 키 입력 받았을 때 sound 함수 실행

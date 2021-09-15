'use strict'

/**
 * 1. 버튼에 id 또는 className을 가져온다 (getElement)
  2. 가져온 Element에 AddEventListener를 적용한다.
  3. Element의 innerHTML를 활용하여 값을 넣는다.
 */
const createNumber = document.getElementById('createNumber');
const lottoBall = document.getElementsByClassName('lotto-ball');
const plusIcon = document.getElementById('plusIcon');

let lottoNumberList = [];
let luckyNumberList = [];
let serviceLuckyNumber = 0;


createNumber.addEventListener('click', function() {
  createLottoNumber();

  luckyNumberList = luckyNumber(6);
  serviceLuckyNumber = luckyNumber(1);
  
  luckyNumberList.push(Number(serviceLuckyNumber));

  fetchLotto();
  plusIcon.style.opacity='5';
});

// functions
function createLottoNumber() {
  lottoNumberList = [];
  for (let i = 1; i <= 45; i++) {
    lottoNumberList.push(i);
  }
}

function luckyNumber(count) {
  let returnLuckyNumber = [];
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * 45);
    if (lottoNumberList[randomNumber] === -1) {
      i--;
      continue;
    } else {
      returnLuckyNumber.push(lottoNumberList[randomNumber]);
      lottoNumberList[randomNumber] = -1;
    }
  }
  // 오름차순 
  returnLuckyNumber.sort(function(a, b) {
    return a - b;
  });
  return returnLuckyNumber;  
}

function fetchLotto() {
  for (let i = 0; i < lottoBall.length; i++) {
    lottoBall[i].innerHTML = luckyNumberList[i];
    if (luckyNumberList[i] >= 1 && luckyNumberList[i] <= 9) {
      lottoBall[i].className = 'btn btn-warning lotto-ball';
    } else if (luckyNumberList[i] >= 10 && luckyNumberList[i] <= 19) {
      lottoBall[i].className = 'btn btn-primary lotto-ball';
    } else if (luckyNumberList[i] >= 20 && luckyNumberList[i] <= 29) {
      lottoBall[i].className = 'btn btn-danger lotto-ball';
    } else if (luckyNumberList[i] >= 30 && luckyNumberList[i] <= 39) {
      lottoBall[i].className = 'btn btn-secondary lotto-ball';
    } else if (luckyNumberList[i] >= 40 && luckyNumberList[i] <= 45) {
      lottoBall[i].className = 'btn btn-success lotto-ball';
    } 
  }
}


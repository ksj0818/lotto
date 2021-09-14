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

  plusIcon.style.opacity='5';
  fetchLotto();
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
  for (let index in lottoBall) {
    lottoBall[index].innerHTML = luckyNumberList[index];

    if (luckyNumberList[index] >= 1 && luckyNumberList[index] <= 9) {
      // * 0~9 노란색
      lottoBall[index].className = 'btn lotto-ball btn btn-warning';
    } else if (luckyNumberList[index] >= 10 && luckyNumberList[index] <= 19) {
      // * 10~19 파란색
      lottoBall[index].className = 'btn lotto-ball btn btn-primary';
    } else if (luckyNumberList[index] >= 20 && luckyNumberList[index] <= 29) {
      // * 20~29 빨간색
      lottoBall[index].className = 'btn lotto-ball btn btn-danger';
    } else if (luckyNumberList[index] >= 30 && luckyNumberList[index] <= 39) {
      // * 30~39 회색
      lottoBall[index].className = 'btn lotto-ball btn btn-secondary';
    } else if (luckyNumberList[index] >= 40 && luckyNumberList[index] <= 45) {
      // * 40~45 녹색
      lottoBall[index].className = 'btn lotto-ball btn btn-success';
    } 
  }
}


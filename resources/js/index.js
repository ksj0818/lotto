const lottoNumberBtn = document.getElementById('lotto-numberBtn');
const lottoBall = document.getElementsByClassName('lotto-ball')
const plusIcon = document.getElementById('plus-icon');
// 로또 번호 1~45 세팅
let lottoList = [];
// 로또 리스트에서 랜덤으로 뽑은 번호를 넣어줄 배열
let luckyNumberList = [];
// 마지막에 뽑을 서비스 번호 담을 변수
let serviceNumber;

plusIcon.style.display = "none";

lottoNumberBtn.addEventListener('click', function() { 
  createLottoNumbers();

  luckyNumberList = randomNumbers(6);
  serviceNumber = randomNumbers(1);

  luckyNumberList.push(Number(serviceNumber));
  
  fetchList();
  plusIcon.style.display = "block";
});

// functions
function createLottoNumbers() {
  lottoList = [];
  for (i = 1; i <= 45; i++) {
    lottoList.push(i);
  }
}

function randomNumbers(count) {
  let returnLuckyNumber = [];
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * 45);
    if (lottoList[randomNumber] === -1) {
      i--;
      continue;
    } else {
      returnLuckyNumber.push(lottoList[randomNumber]);
      lottoList[randomNumber] = -1;
    }
  }
  returnLuckyNumber.sort(function (a,b) {
    return a - b;
  });

  return returnLuckyNumber;
}

function fetchList() {
  for(let i = 0; i < lottoBall.length; i++) {
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
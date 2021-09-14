let lottoNumberList = []
let putOutLottoNumberList = []
let serviceLottoNumber = []

const createNumberElement = document.getElementById('createNumber');
const lottoBallElements = document.getElementsByClassName('lotto-ball')
let plusIcon = document.getElementById('plusIcon');

createNumberElement.addEventListener('click', function() {
  createLottoNumber()
  plusIcon.style.display="block"
});

// 로또 번호 생성
function createLottoNumber() {
  clearLottoNumber()

  putOutLottoNumberList = putOutLottoNumber(6)
  serviceLottoNumber = putOutLottoNumber(1)
  putOutLottoNumberList.push(serviceLottoNumber[0])

  fetchLottoBall()
}

function putOutLottoNumber(count) {
  let returnLottoNumberList = []
  while (true) {
    if (returnLottoNumberList.length === count) break

    let randomNumber = Math.floor(Math.random() * 45)
    let lottoNumber = lottoNumberList[randomNumber]

    if (lottoNumber == -1) continue

    returnLottoNumberList.push(lottoNumber)
    lottoNumberList[randomNumber] = -1

    returnLottoNumberList.sort(function(a, b) {
      return a - b
    })
  }
  return returnLottoNumberList
}

function clearLottoNumber() {
  lottoNumberList = []
  for (let i = 1; i <=45; i++) {
    lottoNumberList.push(i)
  }
}

function fetchLottoBall() {
  for (let index in lottoBallElements) {
    lottoBallElements[index].innerHTML = putOutLottoNumberList[index]
    
    if (putOutLottoNumberList[index] >= 1 && putOutLottoNumberList[index] <= 9) {
      // 1-9 노란색 btn-warning
      lottoBallElements[index].className = 'btn lotto-ball btn-warning'
    } else if (putOutLottoNumberList[index] >= 10 && putOutLottoNumberList[index] <= 19) {
      // 10-19 파란색 btn-primary
      lottoBallElements[index].className = 'btn lotto-ball btn-primary'
    } else if (putOutLottoNumberList[index] >= 20 && putOutLottoNumberList[index] <= 29) {
      // 20-29 빨간색 btn-danger
      lottoBallElements[index].className = 'btn lotto-ball btn-danger'
    } else if (putOutLottoNumberList[index] >= 30 && putOutLottoNumberList[index] <= 45) {
      // 30-45 보라색 btn-purple
      lottoBallElements[index].className = 'btn lotto-ball btn-purple'
    }
  }
}

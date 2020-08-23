var data= document.querySelectorAll("td");
var restart = document.querySelector('#b');
var st= $("h3");



var x=true, game= true;

function cboard() {
for (var i = 0; i < data.length; i++) {
    data[i].textContent = '';
    data[i].classList.remove('won');
      data[i].classList.remove('o');
        data[i].classList.remove('x');
}
st.text("Status: ")
game= true;
}


restart.addEventListener("click",cboard)

const handleWin = (letter) => {
  game = false;
  if (letter == 'x') {
    st.text("Status: X has won")
  } else {
    st.text("Status: O has won")
  }
};

const checkGameStatus = () => {
  const topLeft = data[0].classList[0];
  const topMiddle = data[1].classList[0];
  const topRight = data[2].classList[0];
  const middleLeft = data[3].classList[0];
  const middleMiddle = data[4].classList[0];
  const middleRight = data[5].classList[0];
  const bottomLeft = data[6].classList[0];
  const bottomMiddle = data[7].classList[0];
  const bottomRight = data[8].classList[0];

console.log(topLeft,topRight,topMiddle,middleLeft,middleRight,middleMiddle,bottomLeft,bottomRight,bottomMiddle);
  // check winner
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);

  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);

  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);

  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);

  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);

  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);

  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);

  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    game = false;
    st.text("Status: Game is tied!");
  } else {
    x = !x;
    if (x) {
      st.text("Status: X is next");
    } else {
      st.text("Status: O is next");
    }
  }
};

const handleCellClick = (e) => {
  const classList = e.target.classList;

  if (!game || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (x) {
    classList.add('x');
    e.target.textContent="X";
    checkGameStatus();
  } else {
    classList.add('o');
    e.target.textContent="O";
    checkGameStatus();
  }
}
for (const cellDiv of data) {
cellDiv.addEventListener('click', handleCellClick)
}

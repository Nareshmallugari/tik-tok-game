let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#resetbtn');
let newbtn = document.querySelector('#newbtn');
let msgcontainer = document.querySelector('.msgcontainer');
let msg = document.querySelector('#msg');
let drawcontainer = document.querySelector('.drawcontainer');
let draw = document.querySelector('#draw');
let drawbtn = document.querySelector('#drawbtn');

let turnO = true;
let count = 0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add('hide');
    drawcontainer.classList.add('hide');
};

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        count += 1;
        if (count == 9) {
            drawfunc();
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
};

const drawfunc = () => {
    drawcontainer.classList.remove('hide');
    draw.innerText = 'Draw!';
    disableBoxes();
};

const showWinner = (winner) => {
    msg.innerText = `Congrats! Winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disableBoxes();
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != '' && pos2val != '' && pos3val != '') {
            if (pos1val == pos2val && pos2val == pos3val) {
                // console.log('winner', pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);
drawbtn.addEventListener('click', resetGame);








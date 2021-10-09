'use strict'
// Declaring Variables
const turn = document.getElementById("turn")
const boxLoop = document.querySelectorAll(".box")
const reset = document.getElementById('reset');




// Miscellaneous Functions
const changeChance = () => {
    p1 = !p1, p2 = !p2;
    p1 ? (!p1, (turn.innerHTML = `${x} Turn`)) : (p1, (turn.innerHTML = `${zero}Turn`))
}

function resetFun() {
    for (let i = 0; i < boxLoop.length; i++) {
        boxLoop[i].innerHTML = '';
        boxLoop[i].style.background = "white";
        boxLoop[i].style.pointerEvents = "auto";
    }
}

function playAgain() {
    document.querySelector('.bg-modal').style.display = 'none';
    resetFun();
}

function box(arr) {
    return boxLoop[`${arr-1}`].innerHTML
}

function win(i) {
    document.querySelector(".win").innerHTML = `🏆 ${i} Win`;
}


reset.addEventListener('click', resetFun)
    // Declaring player
let p1 = true,
    p2 = false;

// Defineing colors
const lightGreen = "#B7D948",
    darkBlue = "#025be0";

// Player 
const x = "X",
    zero = "O"
    // printing X 
    // && printing O
    //  && Change-Chance -- -- Woring Properly
for (let i = 0; i < boxLoop.length; i++) {
    boxLoop[i].addEventListener('click', () => {
        checkWin()
        boxLoop[i].style.pointerEvents = "none";
        // printing X
        if (boxLoop[i] === boxLoop[i] && p1) {
            boxLoop[i].textContent = x;
            boxLoop[i].style.backgroundColor = lightGreen;
            changeChance();
        } // printing O
        else {
            boxLoop[i].textContent = zero;
            boxLoop[i].style.backgroundColor = darkBlue;
            changeChance();
        }
    })
}

function flex() {
    document.querySelector(".bg-modal").style.display = "flex";
}

function winOutCome(a, b, c) {
    return (box(`${a}`) !== '') && (box(`${a}`) == box(`${b}`) && (box(`${b}`) == box(`${c}`)))
}

function drawMatch() {
    return (box(1) !== '') && (box(2) !== '') && (box(3) !== '') && (box(4) !== '') && (box(5) !== '') && (box(6) !== '') && (box(7) !== '') && (box(8) !== '') && (box(9) !== '')
}

function checkWin() {
    for (let i = 0; i < boxLoop.length; i++) {
        boxLoop[i].addEventListener('click', () => {
            //1
            if (winOutCome(1, 2, 3)) {
                flex();
                win(`${box(1)}`)
            }
            //2 
            else if (winOutCome(4, 5, 6)) {
                flex();
                win(`${box(4)}`)
            } //3 
            else if (winOutCome(7, 8, 9)) {
                flex();
                win(`${box(7)}`)
            } //4
            else if (winOutCome(1, 4, 7)) {
                flex();
                win(`${box(1)}`)
            } //5 
            else if (winOutCome(2, 5, 8)) {
                flex();
                win(`${box(2)}`)
            } //6 
            else if (winOutCome(3, 6, 9)) {
                flex();
                win(`${box(3)}`)
            } //7
            else if (winOutCome(3, 5, 7)) {
                flex();
                win(`${box(3)}`)
            } //8
            else if (winOutCome(1, 5, 9)) {
                flex();
                win(`${box(1)}`)
            } // Draw 9
            else if (drawMatch()) {
                flex();
                document.querySelector(".win").innerHTML = `Draw`;
            }
        })
    }
}
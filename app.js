let cells = document.querySelectorAll('.cell');

cells = Array.from(cells);

let crtPlayer = 'X';

let winnings = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



function winCheck () {
    winnings.forEach(function (e) {
        let check = e.every(i => cells[i].innerText.trim() === crtPlayer)
        if (check) {
            alert(crtPlayer + ' won')
        }
    })
}


cells.forEach(function (cells) {
    cells.addEventListener('click', function () {
        if (cells.innerText.trim() !== '')
        {
            return;
        }
        cells.innerText = crtPlayer;
        winCheck();
        crtPlayer = crtPlayer === 'X' ? "O" : 'X'
        console.log(crtPlayer)
    })
})




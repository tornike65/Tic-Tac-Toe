var nameInput = document.querySelectorAll(".form-control")
var name1InputValue = document.querySelector("#player1Name")
var name2InputValue = document.querySelector("#player2Name")
var btn = document.querySelector(".btn-dark")
var player1Btn = document.querySelector(".btn-primary")
var player2Btn = document.querySelector(".btn-danger")
var button = document.querySelectorAll(".btn-x")
var line = document.querySelector(".box");
var x = "X";
var o = "O";
var player1 = true;
var click = false;
var winorNot = document.querySelector(".winornot");
var reset = document.querySelector(".btn-success")
var wingame = false;

var checkInput = function (inp) {
    if (inp.value.length < 2)
        return false;
    else
        return true;
}
function inputValidator() {
    validate = true;
    var nameInput = document.querySelectorAll(".form-control")
    for (let i = 0; i < nameInput.length; i++) {
        validate = checkInput(nameInput[i])
    }
    return validate;
}
for (let i = 0; i < nameInput.length; i++) {
    nameInput[i].addEventListener("keyup", function () {
        if (inputValidator()) {
            btn.disabled = false;
        }
    });
}
var WinGame = function () {
    if ((button[0].textContent == x && button[1].textContent == x && button[2].textContent == x) || (button[0].textContent == o && button[1].textContent == o && button[2].textContent == o)) {
        line.innerHTML += "<div class='xazi' style='position: absolute; top: 50px;'></div>"
        wingame = true;
        if (wingame) {
            button.forEach(o => {
                o.disabled = true;
            });
        }
        if ((button[0].textContent && button[1].textContent && button[2].textContent) == x)
            winorNot.textContent = `${player1Btn.textContent} Win `;
        else
            winorNot.textContent = `${player2Btn.textContent} Win `;
    }

    else if ((button[3].textContent == x && button[4].textContent == x && button[5].textContent == x) || (button[3].textContent == o && button[4].textContent == o && button[5].textContent == o)) {
        line.innerHTML += "<div class='xazi' style='position: absolute; top: 150px;'></div>"
        wingame = true;
        if (wingame) {
            button.forEach(o => {
                o.disabled = true;
            });
        }
        if ((button[3].textContent && button[4].textContent && button[5].textContent) == x)
            winorNot.textContent = `${player1Btn.textContent} Win `;
        else
            winorNot.textContent = `${player2Btn.textContent} Win `;
    }

    else if ((button[6].textContent == x && button[7].textContent == x && button[8].textContent == x) || (button[6].textContent == o && button[7].textContent == o && button[8].textContent == o)) {
        line.innerHTML += "<div class='xazi' style='position: absolute; top: 250px;'></div>"
        wingame = true;
        if (wingame) {
            button.forEach(o => {
                o.disabled = true;
            });
        }
        if ((button[6].textContent && button[7].textContent && button[8].textContent) == x)
            winorNot.textContent = `${player1Btn.textContent} Win `;
        else
            winorNot.textContent = `${player2Btn.textContent} Win `;
    }

    else if ((button[0].textContent == x && button[3].textContent == x && button[6].textContent == x) || (button[0].textContent == o && button[3].textContent == o && button[6].textContent == o)) {
        line.innerHTML += "<div class='xazi' style='position: absolute; top: 150px; transform: rotate(90deg);  right: 100px; '></div>"
        wingame = true;
        if (wingame) {
            button.forEach(o => {
                o.disabled = true;
            });
        }
        if ((button[0].textContent && button[3].textContent && button[6].textContent) == x)
            winorNot.textContent = `${player1Btn.textContent} Win `;
        else
            winorNot.textContent = `${player2Btn.textContent} Win `;
    }

    else if ((button[1].textContent == x && button[4].textContent == x && button[7].textContent == x) || (button[1].textContent == o && button[4].textContent == o && button[7].textContent == o)) {
        line.innerHTML += "<div class='xazi' style='position: absolute; top: 150px; transform: rotate(90deg);'></div>"
        wingame = true;
        if (wingame) {
            button.forEach(o => {
                o.disabled = true;
            });
        }
        if ((button[1].textContent && button[4].textContent && button[7].textContent) == x)
            winorNot.textContent = `${player1Btn.textContent} Win `;
        else
            winorNot.textContent = `${player2Btn.textContent} Win `;
    }

    else if ((button[2].textContent == x && button[5].textContent == x && button[8].textContent == x) || (button[2].textContent == o && button[5].textContent == o && button[8].textContent == o)) {
        line.innerHTML += "<div class='xazi' style='position: absolute; top: 150px; transform: rotate(90deg); left: 100px; '></div>"
        wingame = true;
        if (wingame) {
            button.forEach(o => {
                o.disabled = true;
            });
        }
        if ((button[2].textContent && button[5].textContent && button[8].textContent) == x)
            winorNot.textContent = `${player1Btn.textContent} Win `;
        else
            winorNot.textContent = `${player2Btn.textContent} Win `;
    }

    else if ((button[2].textContent == x && button[4].textContent == x && button[6].textContent == x) || (button[2].textContent == o && button[4].textContent == o && button[6].textContent == o)) {
        line.innerHTML += "<div class='xazi' style='position: absolute; top: 150px; right: -22px; transform: rotate(135deg); width:350px !important;'></div>"
        
        wingame = true;
        if (wingame) {
            button.forEach(o => {
                o.disabled = true;
            });
        }
        if ((button[2].textContent && button[4].textContent && button[6].textContent) == x)
            winorNot.textContent = `${player1Btn.textContent} Win `;
        else
            winorNot.textContent = `${player2Btn.textContent} Win `;
    }

    else if ((button[0].textContent == x && button[4].textContent == x && button[8].textContent == x) || (button[0].textContent == o && button[4].textContent == o && button[8].textContent == o)) {
        line.innerHTML += "<div class='xazi' style='position: absolute; top: 150px; left: -22px; transform: rotate(45deg); width:350px !important;'></div>"
        wingame = true;
        if (wingame) {
            button.forEach(o => {
                o.disabled = true;
            });
        }
        if ((button[0].textContent && button[4].textContent && button[8].textContent) == x)
            winorNot.textContent = `${player1Btn.textContent} Win `;
        else
            winorNot.textContent = `${player2Btn.textContent} Win `;
    }

}
var PlayGame = function () {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
            if (click) {
                if (player1) {
                    this.textContent = x;
                    this.style.color = "#dc3545";
                    player1Btn.disabled = true;
                    player2Btn.disabled = false;
                    player1 = false;
                    this.disabled = true;
                    
                }
                else {
                    this.textContent = o;
                    this.style.color = "#28a745";
                    player1Btn.disabled = false;
                    player2Btn.disabled = true;
                    player1 = true;
                    this.disabled = true;
                }
            }
            WinGame();
        });
    }
}
reset.addEventListener("click", function () {
      window.location.reload();
})
PlayGame();
btn.addEventListener("click", function () {
    if (inputValidator()) {
        player1Btn.textContent = `${name1InputValue.value} ${x}`;
        player2Btn.textContent = `${name2InputValue.value} ${o}`;
        winorNot.textContent = "Game Start";
        btn.disabled = true;
    };
    click = true;
    name1InputValue.value = "";
    name2InputValue.value = "";


});

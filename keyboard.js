window.addEventListener("load", function() {
    const darkSwitch = document.querySelector("#darkSwitch");
    const keyboardSwitch = document.querySelector("#keyboardSwitch");
    const cssLink = document.querySelector("#link");
    const buttons = document.querySelectorAll("input[type=button]");
    const textOutput = document.querySelector("#text-output");
    const capsLock = document.querySelector("#capsLock");
    const capsCircle = document.querySelector(".capsCircle");
    const shift = document.querySelector("#shift");
    const shiftCircle = document.querySelector(".shiftCircle");
    let isCapsLock = false;
    let isShift = false;
    let isAzerty = true;

    const minAzerty = ["²", "&", "é", '"', "'", "(", "-", "è", "_", "ç", "à", ")", "=", "Delete", "Tab", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*", "Enter", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!"];

    const majAzerty = ["²", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "°", "+", "Delete", "Tab", "A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P", "¨", "£", "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M", "%", "µ", "Enter", "<", "W", "X", "C", "V", "B", "N", "?", ".", "/", "§"];

    const minQwerty = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Delete", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

    const majQwerty = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Delete", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "Enter", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?"]

    // Dark Mode 
    cssLink.href = "css/keyboard-dark.css";
    darkSwitch.addEventListener("click", function() {
        this.checked ? cssLink.href = "css/keyboard-dark.css" : cssLink.href = "css/keyboard-light.css";
    });

    // Qwerty / Azerty
    keyboardSwitch.addEventListener("click", function() {
        if (this.checked === true) {
            isAzerty = true;
            for (let i = 0; i < minAzerty.length; i++) {
                buttons[i].value = minAzerty[i];
            }
        } else {
            isAzerty = false;
            for (let i = 0; i < minQwerty.length; i++) {
                buttons[i].value = minQwerty[i];
            }
        }
    })

    // Caps Lock
    capsLock.addEventListener("click", function() {
        isCapsLock = !isCapsLock;
        capsLocked(isCapsLock, capsCircle);
    });

    // Shift
    shift.addEventListener("click", function() {
        isShift = !isShift;
        capsLocked(isShift, shiftCircle);
    })

    function capsLocked(boolean, circle) {
        if (boolean === true) {
            circle.style.backgroundColor = "green";

            if (isAzerty === true) {
                for (let i = 0; i < majAzerty.length; i++) {
                    buttons[i].value = majAzerty[i];
                }
            } else {
                for (let i = 0; i < majQwerty.length; i++) {
                    buttons[i].value = majQwerty[i];
                }
            }
        } else {
            circle.style.backgroundColor = "red";

            if (isCapsLock === false) {
                if (isAzerty === true) {
                    for (let i = 0; i < minAzerty.length; i++) {
                        buttons[i].value = minAzerty[i];
                    }
                } else {
                    for (let i = 0; i < minQwerty.length; i++) {
                        buttons[i].value = minQwerty[i];
                    }
                }
            }
        }
    }

    // onclick
    buttons.forEach(button =>
        button.addEventListener("click", function() {
            switch (this.value) {
                case "SPACE":
                    textOutput.value += " ";
                    break;
                case "Delete":
                    textOutput.value = textOutput.value.substring(0, textOutput.value.length - 1);
                    break;
                case "Enter":
                    textOutput.value += "\n";
                    break;
                case "Tab":
                    textOutput.value += "   "
                    break;
                default:
                    if (isShift === true) {
                        isShift = !isShift;
                        textOutput.value += this.value;
                        capsLocked(isShift, shiftCircle)
                    } else {
                        textOutput.value += this.value;
                    }
            }
        })
    )
});
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

window.addEventListener("load", function() {
    const buttons = document.querySelectorAll(".key");
    const textOuput = document.querySelector(".ecran1");
    const capsLock = document.querySelector('.capsled');
    const capsLedOn = document.querySelector('.capsled-on');
    const shift = document.querySelector('.shift');
    let isCpasLock = false;
    let isShift = false;
    let isAzerty = true;

    const minAzerty = ["²", "&", "é", '"', "'", "(", "-", "è", "_", "ç", "à", ")", "=", "Delete", "Tab", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*", "Enter", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!"];

    const majAzerty = ["²", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "°", "+", "Delete", "Tab", "A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P", "¨", "£", "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M", "%", "µ", "Enter", "<", "W", "X", "C", "V", "B", "N", "?", ".", "/", "§"];


    // caps Lock
    capsLock.addEventListener("click", function() {
        isCpasLock = !isCpasLock;
        capsLocked(isCpasLock, capsLedOn);
    });

    // Shift

    shift.addEventListener("click", function() {
        isShift = !isShift;
        capsLocked(isShift, shiftCircle)
    });



    // Onclick

    buttons.forEach(button =>
        button.addEventListener("click", function() {
            switch (this.value) {
                case "SPACE":
                    textOuput.value += " ";
                    break;
                case "Delete":
                    textOuput.value = textOuput.value.substring(0, textOuput.value.length - 1);
                    break;
                case "Enter":
                    textOuput.value += "\n";
                    break;
                case "Tab":
                    textOuput.value += "  ";
                    break;
                default:
                    if (isShift === true) {
                        isShift = !isShift;
                        textOuput.value += this.value;
                        capsLocked(isShift, shiftCircle)
                    } else {
                        textOuput.value += this.value;
                    }
            }

        }))



})
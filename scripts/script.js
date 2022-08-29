const timer = document.querySelector('.header__timer-extra')
let speed = 50

function logoTimer(lvl = 0) {

    timer.innerHTML = lvl;
    lvl++;

    if (lvl > 40) {
        speed = 100;
    } else if (lvl > 60) {
        speed = 120;
    } else if (lvl > 80) {
        speed = 140
    } else if (lvl > 90) {
        speed = 160;
    }

    if (lvl <= 100) {
        setTimeout(() => {
            logoTimer(lvl)
        }, speed);
    }
}


logoTimer()
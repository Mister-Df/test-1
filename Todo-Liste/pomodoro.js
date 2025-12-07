let cycleTravail = document.getElementById('cycleTravail')
let cyclePause = document.getElementById('cyclePause')
let commencer = document.getElementById('Commencer')
let pause = document.getElementById('pause')
let reset = document.getElementById('reset')
let cycle = document.getElementById('cycles')
let shadow = document.querySelector('.bg-success')

let runningChrono = 1800;
let reposValue = 300;
let cycleValue = 0;
let session = false
let stopValue = false

cycle.innerText = `Nombre de cycles : ${cycleValue}`
cycleTravail.innerText = `${Math.trunc(runningChrono / 60)} : ${Math.trunc(runningChrono % 60 < 10) ? `0${Math.trunc(runningChrono % 60)}` : Math.trunc(runningChrono % 60)}`
cyclePause.innerText = `${Math.trunc(reposValue / 60)} : ${Math.trunc(reposValue % 60) ? `${Math.trunc(reposValue % 60)}` : `0${Math.trunc(reposValue % 60)}`}`



commencer.addEventListener('click', function () {
    shadow.classList.toggle('active')
    if (session === false) {
        session = true
        
        runningChrono--
        cycleTravail.innerText = `${Math.trunc(runningChrono / 60)} : ${Math.trunc(runningChrono % 60 < 10) ? `0${Math.trunc(runningChrono % 60)}` : Math.trunc(runningChrono % 60)}`
        cyclePause.innerText = `${Math.trunc(reposValue / 60)} : ${Math.trunc(reposValue % 60) ? `${Math.trunc(reposValue % 60)}` : `0${Math.trunc(reposValue % 60)}`}`


        let timer = setInterval(() => {
            if (stopValue === false && runningChrono > 0) {
                runningChrono--
                cycleTravail.innerText = `${Math.trunc(runningChrono / 60)} : ${Math.trunc(runningChrono % 60 < 10) ? `0${Math.trunc(runningChrono % 60)}` : `${Math.trunc(runningChrono % 60)}`}`

            }
            else if (stopValue === false && runningChrono === 0 && reposValue === 0) {
                reposValue = 300;
                runningChrono = 1800
                cycleValue++
                cycle.innerText = `Nombre de cycles : ${cycleValue}`
                cycleTravail.innerText = `${Math.trunc(runningChrono / 60)} : ${Math.trunc(runningChrono % 60 < 10) ? `0${Math.trunc(runningChrono % 60)}` : Math.trunc(runningChrono % 60)}`
                cyclePause.innerText = `${Math.trunc(reposValue / 60)} : ${Math.trunc(reposValue % 60) ? `${Math.trunc(reposValue % 60)}` : `0${Math.trunc(reposValue % 60)}`}`

            }
            else if (stopValue === false && runningChrono === 0) {
                reposValue--
                cyclePause.innerText = `${Math.trunc(reposValue / 60)} : ${Math.trunc(reposValue % 60) ? `${Math.trunc(reposValue % 60)}` : `0${Math.trunc(reposValue % 60)}`}`
            }


            ///////////////////stop valeur running////////////////
            pause.onclick = pauseFunct

            function pauseFunct(e) {
                stopValue = !stopValue

            }


            //////////////////////reset chrono////////////////
            reset.onclick = initeValue

            function initeValue() {
                clearInterval(timer)
                runningChrono = 1800;
                reposValue = 300;
                cycleValue = 0;
                stopValue = false
                session = false
                cycleTravail.innerText = `${Math.trunc(runningChrono / 60)} : ${Math.trunc(runningChrono % 60 < 10) ? `0${Math.trunc(runningChrono % 60)}` : Math.trunc(runningChrono % 60)}`
                cyclePause.innerText = `${Math.trunc(reposValue / 60)} : ${Math.trunc(reposValue % 60) ? `${Math.trunc(reposValue % 60)}` : `0${Math.trunc(reposValue % 60)}`}`
                

            }
        }, 1000);
        // session = true
    } else {
        return
    }
})



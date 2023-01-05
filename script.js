const inputNo = document.getElementById("team-no")
const matchNo = document.getElementById("match-no")
const okBttn = document.getElementById("ok-bttn")
const inputNoKo = document.getElementById("team-no-ko")
const matchNoKo = document.getElementById("match-no-ko")
const okBttnKo = document.getElementById("ok-bttn-ko")
const noteEl = document.getElementById("note")

okBttn.addEventListener("click", getTeamNo)

function getTeamNo() {
    const num = Number(inputNo.value)
    if (num <= 1) {
        matchNo.innerHTML = `Please check the number you entered!`
    }
    else {
        matchNo.innerHTML = `There will be ${(num * (num - 1)) / 2} matches`
    }
}

okBttnKo.addEventListener("click", getKoTeams)

function getKoTeams() {
    const n = inputNoKo.valueAsNumber
    matchNoKo.innerHTML = `There will be ${n - 1} Knock-out matches`
    if (n <= 1){
        matchNoKo.innerHTML = "There will be no matches"
    }
    if (n % 2 == 0) {
        noteEl.innerHTML = ""
    }  
    else {
        noteEl.innerHTML = `note:- In order to get EVEN matches, Use numbers like 2,4,8,16...`
    }
}
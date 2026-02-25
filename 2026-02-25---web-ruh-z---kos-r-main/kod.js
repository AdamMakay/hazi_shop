function nagyitKep(melyikKep) {
    
}

function visszaKep() {
}

function kivalaszt(melyikTermek) {
    let db =prompt("Hany darabot szeretne: ")
    let kosar = document.getElementById("kosar")
    let kiiras = document.createElement("p")
    kiiras.innerText=db + " " + melyikTermek
    kosar.append(kiiras)
}
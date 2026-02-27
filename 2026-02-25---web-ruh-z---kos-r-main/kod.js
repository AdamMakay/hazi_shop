function nagyitKep(melyikKep) {
    
}

function visszaKep() {
}

function kivalaszt() {
    //let db =prompt("Hany darabot szeretne: ")
    let osszegMonitor = Number(document.getElementById('osszegMonitor').textContent)
    let osszegRam = Number(document.getElementById('osszegRam').textContent)
    let osszegHDD = Number(document.getElementById('osszegHDD').textContent)
    let osszegSDD = Number(document.getElementById('osszegSSD').textContent)
    let osszegTap = Number(document.getElementById('osszegTap').textContent)
    let kosar = document.getElementById("kosar")
    let kiiras = document.getElementById("Osszeg")
    
    eredmeny = osszegMonitor + osszegRam + osszegSDD + osszegHDD + osszegTap
    kiiras.innerHTML = "Összeg: " + eredmeny 
    
   
}


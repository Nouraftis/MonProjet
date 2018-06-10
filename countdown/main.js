




let alpha;
let nombre;

let bouttonDemarrer = document.getElementById('btn0');
let btn = document.getElementById('selecteur');

function loop(nombre) {
    
    if(isNaN(nombre) || nombre==="")
    {
        alert('Entrez un nombre SVP');
        location.reload();
        
    }
    alpha = setTimeout(function () { 
        document.getElementById("compteur").innerHTML = nombre; 
        nombre--; 

        if (nombre >= 0) { 
            loop(nombre);
        }

    }, 1000);

}


bouttonDemarrer.addEventListener('click', changeBouttonDemarrer);

function changeBouttonDemarrer() {
    if (bouttonDemarrer.value === 'Demarrer') {
        bouttonDemarrer.value = 'Reinitialiser';
        bouttonDemarrer.style.backgroundColor = "#4d9900" ;
        demarrer();
    } else {
    bouttonDemarrer.value = 'Demarrer';
        demarrer();
        bouttonDemarrer.style.backgroundColor = "#336600" ;

    }

}



btn.addEventListener('click', changeBoutton);

function changeBoutton() {
    if (btn.value === 'Pause') {
        btn.value = 'Reprendre';
        btn.style.backgroundColor = "#0066ff" ;
        stopTimer();
    } else {
    btn.value = 'Pause';
        stopTimer();
        loop(document.getElementById("compteur").innerHTML);
        btn.style.backgroundColor = "blue" ;
        
    }

}



function demarrer() {
    stopTimer();
    let i = document.getElementById('nbr').value;
    loop(i);
}
function stopTimer() {
    clearTimeout(alpha);
}


function reCharge() {
    stopTimer();
    location.reload();
}



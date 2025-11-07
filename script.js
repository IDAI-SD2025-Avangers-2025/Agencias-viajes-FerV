
function CalculateI(){

    var total = 0

    var vuelo = parseFloat(document.querySelector("input[name='vuelo']:checked").value);
    var hospedaje = parseFloat(document.querySelector("input[name='hospedaje']:checked").value);
    var adultos = parseFloat(document.getElementById('adultos').value) * 865;
    var menores = parseFloat(document.getElementById('menores').value) * 465;
    var dias = parseFloat(document.getElementById('dias-individual').value) * 769;

    total = vuelo + hospedaje + adultos + menores + dias

    document.getElementById("calculate").value = total;



    
}


function CalculateP(){

    var destino = parseFloat(document.querySelector("input[name='destino']:checked").value);

    var numDias = document.getElementById("dias-paquete").value * 899;

    var especial = 0;
    if(document.querySelector("input[name='especial']").checked){
        especial = 19999;
    }

    var extras = document.querySelectorAll("input[name='extras']:checked").length * 699

    var total = destino + numDias + especial + extras

    document.getElementById("calculatep").value = total;
}




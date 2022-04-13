//Se Daniel for 1º lugar
//Se Daniel for 2º lugar --> sobe p/ 1º e o 1º lugar desce p/ 2º
//Se Daniel for 3º lugar --> sobre p/ 2º e o 2º lugar desce p/ 3º
function positions(firstPlace, secondPlace, lastPlace){
    let array=[]
    if (firstPlace=='Daniel'){
        array[0]=firstPlace
        array[1]=secondPlace
        array[2]=lastPlace
    }
    
    if (secondPlace=='Daniel'){
        array[0]=secondPlace
        array[1]=firstPlace
        array[2]=lastPlace
    }

    if (lastPlace=='Daniel'){
        array[0]=firstPlace
        array[1]=lastPlace
        array[2]=secondPlace
    }
    console.log("Primeiro colocado: " + array[0])
    console.log("Segundo colocado: " + array[1])
    console.log("Terceiro colocado: " + array[2])
}
positions('Daniel', 'Rafael', 'Manoel')
positions('Rafael', 'Daniel', 'Manoel')
positions('Rafael', 'Manoel', 'Daniel')
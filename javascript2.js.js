(5) ['rojo', 'verde', 'azul', 'blanco', 'negro']
colores.find(function(elemento)
             {
                 return elemento === "rojo";
             }
)

 colores.findIndex(function(elemento) {
    return elemento=== "negro";
    }
)


function saludar (nombre){
    return "Hola, "+nombre+"!";
    
}

const mensaje =(saludar("David"))

function suma(val1,val2){
    return(val1+"+"+val2+"="+ (val1+val2));
}
console.log(suma(1,2));


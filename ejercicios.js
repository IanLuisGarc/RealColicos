//Lógica del ejercicio 1
/*
*/
/*
*/
   // Accedemos al input (id = nh)
    var nHijos = document.getElementById('nh');

    // evento para el input radio del "si" (si tiene hijos)
    document.getElementById('si').addEventListener('click', function(e) {
    nHijos.disabled = false;
    });

    // evento para el input radio del "no" (si no tiene hijos)
    document.getElementById('no').addEventListener('click', function(e) {
    nHijos.disabled = true;
    });

    function trabajador(){

        //Obteniendo el elemento del input
        let nombre = document.getElementById('name');
        let sueldoBase = parseFloat(document.getElementById('sueldoBase').value);

        let sueldoFinal;
        let bonif;

        //Validando si tiene hijos o no
        if (nHijos.disabled == false) {
            bonif = sueldoBase * 0.07;
            sueldoFinal = sueldoBase + bonif;
            alert("Su bonificación por hijos es de: S/" + bonif.toFixed(2) + ".\n" +
            "Su sueldo final es de: S/" + sueldoFinal);
        } else {
            bonif = 0;
            sueldoFinal = sueldoBase;
            alert("Su bonificación por hijos es de: S/" + bonif.toFixed(2) + ".\n" +
            "Su sueldo final es de: S/" + sueldoFinal);
        }
    }
/*
*/
/*
*/


//Lógica del ejercicio 2
/*
*/
/*
*/
    function numero(){
        
        //Obteniendo el elemento del input
        let num = parseFloat(document.getElementById('number').value);

        let porcent;

        //Validando si el número es mayor de 500
        if (num > 500) {
            porcent = num * 0.18;
            alert("El 18% de " + num + " es " + porcent.toFixed(2));
        } else {
            alert("El número ingresado no se le aplicará porcentaje");
        }
    }
/*
*/
/*
*/


//Lógica del ejercicio 3
/*
*/
/*
*/
    function facto(){

        //Obteniendo el elemento del input
        let num = parseInt(document.getElementById('factorial').value);

        var producto = 1;

        //Calculando el factorial con bucle for
        for (let i = num; i >= 1; i--) {
            producto *= i;
        }

        alert(num + "! = " + producto);
    }
/*
*/
/*
*/
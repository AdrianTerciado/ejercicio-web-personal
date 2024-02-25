document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // paraliza envío formulario


    /*     console.log(event.target.elements);
    
        console.log(event.target.value);
        console.log(event.target.last_name.value);
        console.log(event.target.age.value);
        console.log(event.target.gender.value);
        console.log(event.target.about_you.value);
        console.log(event.target.email.value);
        console.log(event.target.telephone.value);
        console.log(event.target.want.cheked); */

    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const age = event.target.age.value;
    const gender = event.target.gender.value;
    const about_you = event.target.about_you.value;
    const email = event.target.email.value;
    const telephone = event.target.telephone.value;
    const want = event.target.want.cheked;

    let mensaje = "";

    if (first_name.length < 2 || first_name.length > 26) {
        mensaje += "Longitud del nombre fuera de rango: 2-26\n"
    }

    if (last_name.length < 2 || last_name.length > 23) {
        mensaje += "Longitud del apellido fuera de rango: 2-23\n"
    }

    if (age.value < 18 || age.value > 90) {
        mensaje += "Edad fuera de rango: 18-90\n"
    }

    if (gender == "") {
        mensaje += "Seleccione su género\n";
    }

    if (!email.endsWith(".com") && !email.endsWith(".es") || !email.includes("@")) {
        mensaje += `Formato de email incorrecto\n`;
    }

    if (telephone.length != 9) {
        mensaje += `Longitud de teléfono fuera de rango, 9 digitos\n`;
    }

    if (mensaje.length != 0) {
            alert(`Primer mensaje de error ${mensaje}`);

            document.getElementById("mensajeError").innerHTML = "";

            let aviso = document.createElement("p");
            let textoAviso = document.createTextNode(mensaje);
            aviso.appendChild(textoAviso);
            aviso.style.color = "black";
            aviso.style.fontSize = "15px";
            aviso.style.border = "3px solid red";
            aviso.style.background = "white";
            aviso.style.padding = "5px";
            aviso.style.textAlign = "center";

            document.getElementById("mensajeError").appendChild(aviso);
    }
    else {
        alert("Formulario enviado con éxito");
        event.target.submit();
    }
});

/*0
: 
input#first_name
1
: 
input#last_name
2
: 
input#age
3
: 
input#male
4
: 
input#female
5
: 
textarea#about_you
6
: 
input#email
7
: 
input#telephone
8
: 
input#want
9
: 
input#reset
10
: 
input#submit*/
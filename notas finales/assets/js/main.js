//Aquí creamos nuestro div contenedor
document.write("<div class='container'>");
//agremamos ymagen desafio latam
document.write("<img src='https://desafiolatam.com/assets/home/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png' style='float:right'>");
// agregando titulo 
document.write("<h1 'py-2'>Notas finales</h1>")
//datos del aluno
var alumno = prompt("Ingrece su nombre y apellido", "Felipe Morales")

document.write("<dl class='row'>")
document.write("<dt class='col-sm-3'>Nombre alumno: </dt><dd class='col-sm-9'>" + alumno + "</dd>")
//consultando carrera alumno
var carrera = prompt("ingrese su carrera", "informatica")
document.write("<dt class='col-sm-3'>Carrera alumno: </dt><dd class='col-sm-9'>" + carrera + "</dd></dl>")


//Aquí creamos nuestra tabla con Bootstrap
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th >Ramo</th>")
document.write("<th >Nota 1</th>");
document.write("<th >Nota 2</th>");
document.write("<th >Nota 3</th>");
document.write("<th >Promedio</th>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla

//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
//solicitando ramo y notas1
var ramo1 = prompt("Ingrece ramo", "HTML")
var nota1 = prompt("ingrese nota 1", "7")
var nota2 = prompt("ingrese nota 2", "6")
var nota3 = prompt("ingrese nota 3", "5")
var promedio=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3
//imprimiendo las notas en pantalla 
document.write("<th>"+ramo1+"</th>")
document.write("<th>"+nota1+"</th>")
document.write("<th>"+nota2+"</th>")
document.write("<th>"+nota3+"</th>")
document.write("<th>"+promedio.toFixed(2)+"</th>")
document.write("</tr>")
//cerrando ramo 1

//ramo2
document.write("<tr>");
//solicitando ramo y notas
var ramo1 = prompt("Ingrece ramo", "bootstrap")
var nota1 = prompt("ingrese nota 1", "7")
var nota2 = prompt("ingrese nota 2", "6")
var nota3 = prompt("ingrese nota 3", "5")
var promedio=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3
//imprimiendo las notas en pantalla 
document.write("<th>"+ramo1+"</th>")
document.write("<th>"+nota1+"</th>")
document.write("<th>"+nota2+"</th>")
document.write("<th>"+nota3+"</th>")
document.write("<th>"+promedio.toFixed(2)+"</th>")
document.write("</tr>")
//cerrando ramo2

//ramo3
document.write("<tr>");
//solicitando ramo y notas
var ramo1 = prompt("Ingrece ramo", "JAVASCRIPT")
var nota1 = prompt("ingrese nota 1", "7")
var nota2 = prompt("ingrese nota 2", "6")
var aprobacion =prompt("ingrese la nota de aprobacion:",4)
var nota3=((parseFloat(aprobacion)-((parseFloat(nota1)+parseFloat(nota2))/3))*100)/(100/3);
 
//var promedio=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3
//imprimiendo las notas en pantalla 
document.write("<th>"+ramo1+"</th>")
document.write("<th>"+nota1+"</th>")
document.write("<th>"+nota2+"</th>")
document.write("<th>"+nota3.toFixed(2)+"</th>")
document.write("<th>"+aprobacion+"</th>")


document.write("</tr>")
//cerrando ramo 3

document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna

document.write("</table");
//Aquí cerramos nuestra tabla

document.write("<p> Para aprobar el curso de "+ramo1+"con nota "+aprobacion+" necesitas obtener un "+nota3+
"en la nota 3")

document.write("</div>");
//Aquí cerramos nuestro div contenedor 
document.write("")



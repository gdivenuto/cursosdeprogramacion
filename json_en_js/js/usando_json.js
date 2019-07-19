/**
 * Se llama al parámetro 'objeto_json', para recordar que este es un objeto JavaScript originado desde un JSON. 
 */
function cargarHeader(objeto_json) {
    // Se crea un elemento <h1> con createElement()
    var unH1 = document.createElement('h1');
    // Se asigna su textContent igual a la propiedad 'nombreGrupo' del objeto
    unH1.textContent = objeto_json['nombre_grupo'];
    // Se agrega al header utilizando appendChild()
    header.appendChild(unH1);

    // Se crea un párrafo y se agrega al encabezado.
    var unParametro = document.createElement('p');
    // Se asigna su contenido de texto, siendo una cadena concatenada que contiene las propiedades 'ciudad' y 'anioInicio' del objeto.
    unParametro.textContent = 'Ciudad: ' + objeto_json['ciudad'] + ' // Año Inicio: ' + objeto_json['anio_inicio'];
    // Se agrega al header utilizando appendChild()
    header.appendChild(unParametro);
}

function mostrarMiembros(objeto_json) {
    // Se toman los miembros del objeto json
    var miembros = objeto_json['miembros'];

    // Para cada miembro del grupo
    for(var i = 0; i < miembros.length; i++) {

        // Se crea un elemento 'article' HTML
        var un_articulo = document.createElement('article');

        // Se crea un elemento 'h2' HTML
        var un_encabezado_H2 = document.createElement('h2');


        // Se crean tres elementos 'p' HTML
        var parrafo_1 = document.createElement('p');
        var parrafo_2 = document.createElement('p');
        var parrafo_3 = document.createElement('p');

        // Se crea un elemento 'ul' HTML
        var una_lista = document.createElement('ul');

        un_encabezado_H2.textContent = miembros[i].nombre;

        parrafo_1.textContent = 'Apodo: ' + miembros[i].apodo;
        parrafo_2.textContent = 'Edad: ' + miembros[i].edad;
        parrafo_3.textContent = 'Capacitaciones:';

        var lista_capacitaciones = miembros[i].capacitaciones;

        for (var j = 0; j < lista_capacitaciones.length; j++) {
            // Se crea un elemento 'li' HTML
            var item_miembro = document.createElement('li');
            // Se asigna la capacitación respectiva al ítem de la lista
            item_miembro.textContent = lista_capacitaciones[j];
            // Se agrega el ítem a la lista del miembro respectivo
            una_lista.appendChild(item_miembro);
        }
        // Al artículo correspondiente al miembro del grupo:
        un_articulo.appendChild(un_encabezado_H2); // Se agrega el encabezado H2
        un_articulo.appendChild(parrafo_1);        // Se agrega el párrafo
        un_articulo.appendChild(parrafo_2);        // Se agrega el párrafo
        un_articulo.appendChild(parrafo_3);        // Se agrega el párrafo
        un_articulo.appendChild(una_lista);        // Se agrega la lista con las Capacitaciones del miembro

        // Se agrega el artículo del miembro en el elemento 'section' HTML
        section.appendChild(un_articulo);
    }
}
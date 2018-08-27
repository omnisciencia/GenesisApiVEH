window.onload = function () {
    idinspeccion_input = getParameterByName('id');
    ReporteInspeccion(idinspeccion_input);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//Listar Reporte Inspeccion
function ReporteInspeccion(iidinspeccion) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarReporteInspeccion",
        data: "{iidinspeccion:'" + iidinspeccion + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarDatosReporteInspeccion,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}


function ListarDatosReporteInspeccion(data) {

    for (i = 0; i < data.length; i++) {

        nombre = data[0].nombre;
        nrodoc = data[0].nrodoc;
        celular = data[0].celular;

        fecha = data[0].fecha;
        hora = data[0].hora;

        placa = data[0].placa;
        marca = data[0].marca;
        modelo = data[0].modelo;
        color = data[0].color;
        nroserie = data[0].nroserie;
        nrovin = data[0].nrovin;
        kilometraje = data[0].kilometraje;

        btaire = data[0].btaire;
        btlunaselectricas = data[0].btlunaselectricas;
        btalarma = data[0].btalarma;
        btseguroruedas = data[0].btseguroruedas;
        btpestillos = data[0].btpestillos;
        btllantarep = data[0].btllantarep;
        bttapizcuero = data[0].bttapizcuero;
        observaciones = data[0].observaciones;

    }

    accesoAdi = btaire + btlunaselectricas + btalarma + btseguroruedas + btpestillos + btllantarep + bttapizcuero;
    accesoriosAdi = accesoAdi.trim();
    cantidadmostrar = accesoriosAdi.length - 1;    
    cadenaAccesoriosAdicionados = accesoriosAdi.substring(0, cantidadmostrar);


    document.getElementById('nombre_id').innerHTML = nombre;
    document.getElementById('nrodoc_id').innerHTML = nrodoc;
    document.getElementById('celular_id').innerHTML = celular;

    document.getElementById('fecha_id').innerHTML = fecha;
    document.getElementById('hora_id').innerHTML = hora + " hrs.";

    document.getElementById('placa_id').innerHTML = placa;
    document.getElementById('marca_id').innerHTML = MaysPrimera(marca.toLowerCase());
    document.getElementById('modelo_id').innerHTML = MaysPrimera(modelo.toLowerCase());
    document.getElementById('color_id').innerHTML = MaysPrimera(color.toLowerCase());
    document.getElementById('nroserie_id').innerHTML = nroserie;
    document.getElementById('nrovin_id').innerHTML = nrovin;
    document.getElementById('kilometraje_id').innerHTML = kilometraje + " Km";

    if (cadenaAccesoriosAdicionados.length < 1) {
        document.getElementById('accesoriosadi_id').innerHTML = "Ninguno";
    } else {
        document.getElementById('accesoriosadi_id').innerHTML = cadenaAccesoriosAdicionados + ".";
    }
    
    document.getElementById('observacion_id').innerHTML = observaciones;
 
   

}


function MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


//Error:
function OnError(data) {
    alert("Error 404...");
}
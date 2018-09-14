window.onload = function () {
    IniTituloGrid();
}

$(document).ready(function () {

    $("#buscar_polizas").click(function () {
        ListarGrilla();
    });


    $("select[name=Pagina]").change(function () {

        ListarGrilla();

    });

    $("#Anterior").click(function () {
        c = $("#Pagina").val();
        c = parseInt(c) - 1;

        if (c > 0) {
            $("#Pagina").val(c);
            ListarGrilla();
        }

    });

    $("#Siguiente").click(function () {
        c = $("#Pagina").val();
        c = parseInt(c) + 1;
        var a = $('#Pagina option').size();        
        
        if (c <= a) {
            $("#Pagina").val(c);
            ListarGrilla();
        }

    });


    


});


function ListarGrilla() {
    
    var poliza = $('#bus_poliza').text();
    var placa = $('#bus_placa').val();
    var contratante = $('#bus_contratante').val();
    var estado = $('#sp_estado option:selected').text();
    var pagina = $("#Pagina").val();
    var regporpag = "5";
    
    //Cuando es Seleccione se cambia por dato vacio, para que vaya vacio el parametro estado al procedimiento almacenado
    if (estado == 'Seleccione') {
        estado = ''
    }

    ListarPolizaVehiculoSIN(poliza, placa, contratante, estado, pagina, regporpag);

}

function IniTituloGrid() {
    var tabla = $("#GridListar");
    tabla.empty();
    tabla.append("<thead class='bg-blues'>" +
                "<tr>" +
                "<td>Nro. Poliza</td>" +
                "<td>Contratante</td>" +
                "<td>Placa</td>" +                                
                "<td>Estado</td>" +                
                "</tr>" +
                "</thead>");
}

function ListarPolizaVehiculoSIN(idpoliza, placa, nombre, estado, pagina, RegPorPag) {

    $.ajax({
        type: "POST",
        url: "../Services/Listar_Poliza_Vehiculo_SIN",
        data: "{idpoliza:'" + idpoliza + "', placa:'" + placa + "', nombre:'" + nombre + "', estado:'" + estado + "', NroDePagina:'" + pagina + "', RegPorPag:'" + RegPorPag + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarGrillaPoliza,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}

function ListarGrillaPoliza(data) {
    var pagina = $("#Pagina").val();
    var select = $("#Pagina");
    var regporpag = "5";
    var TotalRegistros = "1";
    var i = 1;

    select.empty();

    if (data.length!=null) {

        if (data.length > 0) {
            if (parseInt(data[0].TotalRegistros) > parseInt(regporpag)) {

                for (i = 1; i <= Math.ceil(parseInt(data[0].TotalRegistros) / parseInt(regporpag)) ; i++) {
                    select.append("<option value = " + i + ">" + i + "</option>");
                }
            }
            else {
                select.append("<option value = '1'> 1</option>");
            }
        }
        else {
            select.append("<option value = '1'> 1</option>");
        }
    }
    else {
        select.append("<option value = '1'> 1</option>");
    }


    $("#Pagina").val(pagina);


    var tabla = $("#GridListar");
    tabla.empty();
    tabla.append("<thead class='bg-blues'>" +
                "<tr>" +
                "<td style='color:#fff;'>Nro. Poliza</td>" +
                "<td>Contratante</td>" +
                "<td>Placa</td>" +                                
                "<td>Estado</td>" +                
                "</tr>" +
                "</thead>");


    if (data.length > 0) {
        tabla.append("<tbody>")
        for (i = 0; i < data.length; i++) {
            tabla.append(
                        "<tr style='cursor: pointer;' ondblclick=SelectPoliza('"+data[i].idpoliza+"','"+data[i].Estado+"');>" +
                        "<td >" + data[i].idpoliza + "</td>" +
                        "<td>" + data[i].Persona + "</td>" +
                        "<td>" + data[i].vplaca + "</td>" +
                        "<td>" + data[i].Estado + "</td>" +                        
                        "</tr>");
        }
        tabla.append("</tbody>")

    }
    else {
        tabla.append("<tbody>")
        tabla.append(
                        "<center>" +
                        "No hay registro(s) selecionado(s) por los criterios de busqueda" +
                        "</center>");
        tabla.append("</tbody>")
    }

}


function SelectPoliza(idpoliza,estado) {

    $('#poliza_reg').val(idpoliza);
    $('#estadopoliza_reg').val(estado);

    $('#listado_poliza').modal('hide');

}

$("#btnAceptar").click(function () {

});

//Error:
function OnError(data) {
    alert("Error 404...");

    
}


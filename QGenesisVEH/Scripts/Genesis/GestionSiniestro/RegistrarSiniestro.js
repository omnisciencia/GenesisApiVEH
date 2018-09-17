window.onload = function () {
    IniTituloGrid();
    $('#poliza_reg').focus();
    campos_bloqueados();
    Spinner_Consecuencia();
    Spinner_TipoSiniestro();
    Spinner_Ocurrencia();

    $('#fecregistro_reg').val(FechaSistema());

}

$(document).ready(function () {

    $("#buscar_poliza_listado").click(function () {
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

    $("#buscar_Id_poliza").click(function () {

        var idpoliza = $('#poliza_reg').val();
        if (idpoliza.length > 0) {
            SelectPolizaVehiculo(idpoliza,'');
        }
    });


    $('#poliza_reg').keypress(function (e) {
        if (e.which == 13) {
            document.getElementById('buscar_Id_poliza').click();
        }
    });
    
    

});

function campos_bloqueados() {

    $("#idsiniestro_reg").prop("disabled", true);
    $("#estadosiniestro_reg").prop("disabled", true);
    $("#estadopoliza_reg").prop("disabled", true);
    $("#fecregistro_reg").prop("disabled", true);
    $("#fecultmodificacion_reg").prop("disabled", true);


    $("#placa_reg").prop("disabled", true);
    $("#marca_reg").prop("disabled", true);
    $("#modelo_reg").prop("disabled", true);
    $("#vin_reg").prop("disabled", true);
    $("#anio_reg").prop("disabled", true);
    $("#uso_reg").prop("disabled", true);
    $("#asientos_reg").prop("disabled", true);
    $("#gps_reg").prop("disabled", true);
    $("#kilometraje_reg").prop("disabled", true);
    
}


function solonumeros(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;

    return /\d/.test(String.fromCharCode(keynum));
}

//Fecha Sistema
function FechaSistema() {

    var f = new Date();

    var dia = "" + f.getDate();
    var mes = "" + (f.getMonth()+1)
    var aniofinal = "" + (f.getFullYear())

    if (parseInt(dia) < 10) {
        dia = "0" + dia;
    }
    if (parseInt(mes) < 10) {
        mes = "0" + mes;
    }
    
    var fechaSistema= (f.getFullYear() + "-" + mes + "-" + dia);    
    

    return fechaSistema;
}



function ListarGrilla() {
    
    var poliza = $('#bus_poliza').val();
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

            var splaca = data[i].vplaca;

            var Selectfuncion = "SelectPoliza(" + data[i].idpoliza + ",'" + splaca + "')";

            tabla.append(
                        "<tr style='cursor: pointer;' ondblclick="+ Selectfuncion +">" +
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


function SelectPoliza(idpoliza,placa) {

    $('#poliza_reg').val(idpoliza);
    //$('#estadopoliza_reg').val(estado);

    $('#listado_poliza').modal('hide');

    SelectPolizaVehiculo(idpoliza,placa)


}

function SelectPolizaVehiculo(idpoliza,placa) {

    $.ajax({
        type: "POST",
        url: "../Services/Select_PolizaVehiculo",
        data: "{idpoliza:'" + idpoliza + "', placa:'" + placa + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: VerPolizaVehiculo,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}

function VerPolizaVehiculo(data) {
      
    var idpoliza = $('#poliza_reg').val();

    if (data.length != null) {

        if (data.length == 1) {

            $('#idpoliza_reg').val(data[0].idpoliza);
            $('#persona_reg').val(data[0].persona);
            $('#placa_reg').val(data[0].placa);
            $('#marca_reg').val(data[0].marca);
            $('#modelo_reg').val(data[0].modelo);
            $('#vin_reg').val(data[0].vin);
            $('#anio_reg').val(data[0].aniofab);
            $('#asientos_reg').val(data[0].asientos);
            $('#kilometraje_reg').val(data[0].kilometraje);
            $('#estadopoliza_reg').val(data[0].Estado);

        }
        else {
            if (data.length > 1)
            {                                
                document.getElementById('busqueda_avanzada').click();
                $('#bus_poliza').val(idpoliza);
                document.getElementById('buscar_poliza_listado').click();                
            }
            else {
                if (data.length == 0)
                {
                    alert('No existe la poliza ' + idpoliza);                    
                    $('#poliza_reg').select();
                    $('#poliza_reg').focus();
                }

            }
        }
    }
    else {
        alert('No existe la poliza ' + idpoliza);
    }

}

//COMBOS VARIOS

function Spinner_Consecuencia() {
    $.ajax({
        type: "POST",
        url: "../Services/Combo_Consecuencia",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: 
            function (data) {
                if (data.length >= 0) {
                    var Combo = $("#sp_Consecuencia");
                    Combo.empty();                    
                    Combo.append("<option value='0'>SELECCIONAR</option>");
                    for (i = 0; i < data.length; i++) {
                        Combo.append("<option value='" + data[i].idConsecuencia + "'>" + data[i].vDescripcion + "</option>");
                    }
                }
            },            
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}

function Spinner_TipoSiniestro(){
    $.ajax({
        type: "POST",
        url: "../Services/Combo_TipoSiniestro",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success:
            function (data) {
                if (data.length >= 0) {
                    var Combo = $("#sp_TipoSiniestro");
                    Combo.empty();
                    Combo.append("<option value='0'>SELECCIONAR</option>");
                    for (i = 0; i < data.length; i++) {
                        Combo.append("<option value='" + data[i].idTipoSiniestro + "'>" + data[i].vDescripcion + "</option>");
                    }
                }
            },
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}


function Spinner_Ocurrencia() {
    $.ajax({
        type: "POST",
        url: "../Services/Combo_Ocurrencia",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success:
            function (data) {
                if (data.length >= 0) {
                    var Combo = $("#sp_Ocurrencia");
                    Combo.empty();
                    Combo.append("<option value='0'>SELECCIONAR</option>");
                    for (i = 0; i < data.length; i++) {
                        Combo.append("<option value='" + data[i].idOcurrencia + "'>" + data[i].vDescripcion + "</option>");
                    }
                }
            },
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}







//Error:
function OnError(data) {
    alert("Error 404...");

    
}


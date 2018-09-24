window.onload = function () {
    IniTituloGrid();
    IniTituloGridComi();
    $('#poliza_reg').focus();
    campos_bloqueados();
    Spinner_Consecuencia();
    Spinner_TipoSiniestro();
    Spinner_Ocurrencia();
    Spinner_Parentesco();
    Spinner_TipoDeclarante();
    Spinner_TipoDocumento();
    //SE ENVIA PARAMETRO 3 PORQUE ES EL PERFIL DE ASESOR
    Spinner_Asesor('3');
    //AutocomUbigeo();
    $('#fecregistro_reg').val(FechaSistema());

    var idsiniestro_input = sessionStorage.getItem("idsiniestro");
    var modo_input = sessionStorage.getItem("modo");

    if (modo_input == 'ver') {
        Campos_bloqueados_Previo();
         SelectSiniestro(idsiniestro_input);
    }
   

}

$(document).ready(function () {

//poliza
    $("#buscar_poliza_listado").click(function () {
        ListarPolizaVehiculo();
    });
    $("select[name=Pagina]").change(function () {
        ListarPolizaVehiculo();
    });

    $("#Anterior").click(function () {
        c = $("#Pagina").val();
        c = parseInt(c) - 1;

        if (c > 0) {
            $("#Pagina").val(c);
            ListarPolizaVehiculo();
        }

    });

    $("#Siguiente").click(function () {
        c = $("#Pagina").val();
        c = parseInt(c) + 1;
        var a = $('#Pagina option').size();

        if (c <= a) {
            $("#Pagina").val(c);
            ListarPolizaVehiculo();
        }

    });

    $("#busqueda_avanzada").click(function () {

        var idpoliza = $('#poliza_reg').val();
        if (idpoliza.length > 0) {
            SelectPolizaVehiculo(idpoliza, '');
        }
        else {
            //alert('No se ha ingresado ningun nro poliza para la busqueda.');
            $('#listado_poliza').modal('show');
            //$('#poliza_reg').focus();
        }
    });


    //Dar focus cuando es popup de bootstrap
    $('#listado_poliza').on('shown.bs.modal', function () {
        $('#bus_poliza').focus()
    })



    $('#poliza_reg').keypress(function (e) {
        if (e.which == 13) {
            document.getElementById('busqueda_avanzada').click();
        }
    });


//comisaria
    $("#buscar_comisaria_listado").click(function () {
        ListarComisaria();
    });

    $("select[name=PaginaComi]").change(function () {
        ListarComisaria();
    });
    
    $("#AnteriorComi").click(function () {
        c = $("#PaginaComi").val();
        c = parseInt(c) - 1;

        if (c > 0) {
            $("#PaginaComi").val(c);
            ListarComisaria();
        }

    });

    $("#SiguienteComi").click(function () {
        c = $("#PaginaComi").val();
        c = parseInt(c) + 1;
        var a = $('#PaginaComi option').size();

        if (c <= a) {
            $("#PaginaComi").val(c);
            ListarComisaria();
        }

    });

    $("#btnGuardar").click(function () {
        
        var idpoliza = $("#poliza_reg").val();
        var idvehiculo = $("#idvehiculo_reg").val();        
        var dFecNotificacion= $("#fecnotificacion_reg").val();
        var idocurrencia = $("#sp_Ocurrencia").val();
        var idtiposiniestro = $("#sp_TipoSiniestro").val();
        var idconsecuencia = $("#sp_Consecuencia").val();                                 
        var dFecOcurrencia = $("#fecocurrencia_reg").val();
        var vlugarsiniestro = $("#lugarsiniestro_reg").val();
        var vubicasiniestro = $("#ubicasiniestro_reg").val();
        var iocupantes = $("#nro_ocupantes_reg").val();
        var idtipodeclarante = $("#sp_TipoDeclarante").val();

        var vdenominacion = $("#denominacion_reg").val();
        var vtelef_declarante = $("#telefdeclarante_reg").val();
        var iparentaseg_declarante = $("#sp_Parentesco1").val();
        var vmaildeclarante = $("#maildeclarante_reg").val();
        
        var vconductor = $("#conductor_reg").val();
        var idtipodoc = $("#sp_TipoDocumento").val();
        var vnrodociden = $("#nrodocid_reg").val();
        var vlicencia = $("#licencia_reg").val();

        var iparentaseg_conductor = $("#sp_Parentesco2").val();
        var vtelef_conductor = $("#telefconductor_reg").val();
        var vemail_conductor = $("#emailconductor_reg").val();
        var dvencilicencia = $("#vencilicencia_reg").val();

        var idcomisaria = $("#idcomisaria_reg").val();
        var vcategoria = $("#categoria_reg").val();
        var vdetasiniestro = $("#detasiniestro_reg").val();
        var asesor = $("#sp_asesor").val();
         

        RegistrarSiniestro(
            idpoliza,idvehiculo, '1', '1', dFecNotificacion
            , idocurrencia, idtiposiniestro, idconsecuencia, dFecOcurrencia
            , vlugarsiniestro, vubicasiniestro, iocupantes, idtipodeclarante
            , vdenominacion, vtelef_declarante, iparentaseg_declarante, vmaildeclarante
            , vconductor, idtipodoc, vnrodociden, vlicencia
            , iparentaseg_conductor, vtelef_conductor, vemail_conductor, dvencilicencia
	        , idcomisaria, vcategoria, vdetasiniestro, asesor
            )
    });    

});


function SelectSiniestro(idsiniestro) {

    $.ajax({
        type: "POST",
        url: "../Services/SelectSiniestro",
        data: "{idsiniestro:'" + idsiniestro + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: MostrarRegistroSiniestro,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });

}

function MostrarRegistroSiniestro(data) {

    if (data != null) {

        if (data.length > 0) {
            $('#idsiniestro_reg').val(data[0].idsiniestro);
            $('#poliza_reg').val(data[0].idpoliza);
            $("#idvehiculo_reg").val(data[0].idvehiculo);
            //subtraer cadena para fecha que aceptar el input tipo date
            $("#fecregistro_reg").val(data[0].dFecRegistro.substr(0,10));
            $("#fecnotificacion_reg").val(data[0].dFecNotificacion.substr(0, 10));
            $("#fecultmodificacion_reg").val(data[0].dUltmodificación.substr(0, 10));
            $("#fecocurrencia_reg").val(data[0].dFecOcurrencia.substr(0, 10));
            $("#vencilicencia_reg").val(data[0].dvencilicencia.substr(0, 10));

            $("#sp_Ocurrencia").val(data[0].idocurrencia);
            $("#sp_TipoSiniestro").val(data[0].idtiposiniestro);
            $("#sp_Consecuencia").val(data[0].idconsecuencia);
            $("#sp_TipoDeclarante").val(data[0].idtipodeclarante);

            $("#sp_Parentesco1").val(data[0].iparentaseg_conductor);
            $("#sp_Parentesco2").val(data[0].iparentaseg_declarante);
            $("#sp_TipoDocumento").val(data[0].idtipodoc);

            $("#sp_asesor").val(data[0].nidusuario);
            

            $("#lugarsiniestro_reg").val(data[0].vlugarsiniestro);
            $("#ubicasiniestro_reg").val(data[0].vubicasiniestro);
            $("#nro_ocupantes_reg").val(data[0].iocupantes);
            $("#denominacion_reg").val(data[0].vdenominacion);
            $("#telefdeclarante_reg").val(data[0].vtelef_declarante);
            $("#maildeclarante_reg").val(data[0].vmaildeclarante);
            $("#conductor_reg").val(data[0].vconductor);
            $("#nrodocid_reg").val(data[0].vnrodociden);
            $("#licencia_reg").val(data[0].vlicencia);
            $("#telefconductor_reg").val(data[0].vtelef_conductor);
            $("#emailconductor_reg").val(data[0].vemail_conductor);
            $("#categoria_reg").val(data[0].vcategoria);
            $("#detasiniestro_reg").val(data[0].vdetasiniestro);

            SelectPolizaVehiculo(data[0].idpoliza, data[0].idvehiculo);


        }
        
    }
}

function RegistrarSiniestro
    (idpoliza,idvehiculo, smidciaseguros, iestadosiniestro, dFecNotificacion
    , idocurrencia, idtiposiniestro, idconsecuencia, dFecOcurrencia
    , vlugarsiniestro, vubicasiniestro, iocupantes, idtipodeclarante
    , vdenominacion, vtelef_declarante, iparentaseg_declarante, vmaildeclarante
    , vconductor, idtipodoc, vnrodociden, vlicencia
    , iparentaseg_conductor, vtelef_conductor, vemail_conductor, dvencilicencia
	, idcomisaria, vcategoria, vdetasiniestro, asesor
    ) {

    $.ajax({
        type: "POST",
        url: "../Services/RegistrarSiniestro",
        data: "{idpoliza:'" + idpoliza + "',idvehiculo:'" + idvehiculo + "', smidciaseguros:'" + smidciaseguros + "', iestadosiniestro:'" + iestadosiniestro + "', dFecNotificacion:'" + dFecNotificacion
            + "', idocurrencia:'" + idocurrencia + "', idtiposiniestro:'" + idtiposiniestro + "', idconsecuencia:'" + idconsecuencia + "', dFecOcurrencia:'" + dFecOcurrencia
            + "', vlugarsiniestro:'" + vlugarsiniestro + "', vubicasiniestro:'" + vubicasiniestro + "', iocupantes:'" + iocupantes + "', idtipodeclarante:'" + idtipodeclarante 
            + "', vdenominacion:'" + vdenominacion + "', vtelef_declarante:'" + vtelef_declarante + "', iparentaseg_declarante:'" + iparentaseg_declarante + "', vmaildeclarante:'" + vmaildeclarante 
            + "', vconductor:'" + vconductor + "', idtipodoc:'" + idtipodoc + "', vnrodociden:'" + vnrodociden + "', vlicencia:'" + vlicencia

            + "', iparentaseg_conductor:'" + iparentaseg_conductor + "', vtelef_conductor:'" + vtelef_conductor + "', vemail_conductor:'" + vemail_conductor + "', dvencilicencia:'" + dvencilicencia
            + "', idcomisaria:'" + idcomisaria + "', vcategoria:'" + vcategoria + "', vdetasiniestro:'" + vdetasiniestro + "', nidusuario:'" + asesor + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success:
            function (data) {

                if (data.length >= 0) {
                    if (data[0].respuesta == 'true') {
                        alert('Se registro de forma exitosa.');
                        Retornar();
                    }
                    else {
                        alert('Lo sentimos, ocurrio un error al intentar registrar la información, detalles: ' + data[0].respuesta);
                    }
                }

            }
            ,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}



function campos_bloqueados() {

    $("#idsiniestro_reg").prop("disabled", true);
    $("#estadosiniestro_reg").prop("disabled", true);
    $("#estadopoliza_reg").prop("disabled", true);
    $("#fecregistro_reg").prop("disabled", true);
    $("#fecultmodificacion_reg").prop("disabled", true);
    $("#descripcomisaria_reg").prop("disabled", true);
    $('#asegurado_reg').prop("disabled", true);
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

function Campos_bloqueados_Previo() {

    $("#busqueda_avanzada_comi").hide();
    $("#busqueda_avanzada").hide();
    $("#btnGuardar").hide();

    
    $('#idsiniestro_reg').prop("disabled", true);
    $('#poliza_reg').prop("disabled", true);
    $("#idvehiculo_reg").prop("disabled", true);
    //subtraer cadena para fecha que aceptar el input tipo date
    $("#fecregistro_reg").prop("disabled", true);
    $("#fecnotificacion_reg").prop("disabled", true);
    $("#fecultmodificacion_reg").prop("disabled", true);
    $("#fecocurrencia_reg").prop("disabled", true);
    $("#vencilicencia_reg").prop("disabled", true);

    $("#sp_Ocurrencia").prop("disabled", true);
    $("#sp_TipoSiniestro").prop("disabled", true);
    $("#sp_Consecuencia").prop("disabled", true);
    $("#sp_TipoDeclarante").prop("disabled", true);

    $("#sp_Parentesco1").prop("disabled", true);
    $("#sp_Parentesco2").prop("disabled", true);
    $("#sp_TipoDocumento").prop("disabled", true);

    $("#sp_asesor").prop("disabled", true);

  
    
    $("#categoria_reg").prop("disabled", true);
    $("#lugarsiniestro_reg").prop("disabled", true);
    $("#ubicasiniestro_reg").prop("disabled", true);
    $("#nro_ocupantes_reg").prop("disabled", true);
    $("#denominacion_reg").prop("disabled", true);
    $("#telefdeclarante_reg").prop("disabled", true);
    $("#maildeclarante_reg").prop("disabled", true);
    $("#conductor_reg").prop("disabled", true);
    $("#nrodocid_reg").prop("disabled", true);
    $("#licencia_reg").prop("disabled", true);
    $("#telefconductor_reg").prop("disabled", true);
    $("#emailconductor_reg").prop("disabled", true);
    $("#detasiniestro_reg").prop("disabled", true);
}

function Retornar() {
    //window.location = "../Poliza/ListarPoliza?id=" + idinspeccion;
    window.location = "../GestionSiniestro/ListarSiniestro";
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




//POLIZA

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

function ListarPolizaVehiculo() {
    
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
    //enviar parametros para filtro
    ParametrosPolizaVehiculo(poliza, placa, contratante, estado, pagina, regporpag);

}


function ParametrosPolizaVehiculo(idpoliza, placa, nombre, estado, pagina, RegPorPag) {

    $.ajax({
        type: "POST",
        url: "../Services/Listar_Poliza_Vehiculo_SIN",
        data: "{idpoliza:'" + idpoliza + "', placa:'" + placa + "', nombre:'" + nombre + "', estado:'" + estado + "', NroDePagina:'" + pagina + "', RegPorPag:'" + RegPorPag + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ConstruirGrillaPolizaVeh,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}

function ConstruirGrillaPolizaVeh(data) {
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

            

            var Selectfuncion = "SelectPoliza(" + data[i].idpoliza + "," + data[i].idvehiculo + ")";

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
        select.empty();
        select.append("<option value = '1'> 1</option>");
        tabla.append("<tbody>")
        tabla.append(
                        "<center>" +
                        "No hay registro(s) selecionado(s) por los criterios de busqueda" +
                        "</center>");
        tabla.append("</tbody>")
    }

}

function SelectPoliza(idpoliza, idvehiculo) {
    $('#poliza_reg').val(idpoliza);
    $('#listado_poliza').modal('hide');
    SelectPolizaVehiculo(idpoliza, idvehiculo)
    $('#fecnotificacion_reg').focus();
}


function SelectPolizaVehiculo(idpoliza, idvehiculo) {

    $.ajax({
        type: "POST",
        url: "../Services/Select_PolizaVehiculo",
        data: "{idpoliza:'" + idpoliza + "', idvehiculo:'" + idvehiculo + "'}",
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
            $("#idvehiculo_reg").val(data[0].idvehiculo);
            $('#asegurado_reg').val(data[0].persona);
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
            if (data.length > 1) {
                //document.getElementById('busqueda_avanzada').click();
                $('#listado_poliza').modal('show');
                $('#bus_poliza').val(idpoliza);
                document.getElementById('buscar_poliza_listado').click();
            }
            else {
                if (data.length == 0) {
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

//COMISARIA

function IniTituloGridComi() {
    var tabla = $("#GridListarComi");
    tabla.empty();
    tabla.append("<thead class='bg-blues'>" +
                "<tr>" +
                "<td>Id Comisaria</td>" +
                "<td>Descripción</td>" +
                "<td>Dirección</td>" +
                "</tr>" +
                "</thead>");
}

function ListarComisaria() {

    var descripcion = $('#bus_descripcion').val();
    var direccion = $('#bus_direccion').val();

    var pagina = $("#PaginaComi").val();
    var regporpag = "5";

    //enviar parametros para filtro
    ParametrosComisaria(descripcion, direccion, pagina, regporpag);

}

function ParametrosComisaria(descripcion, direccion, pagina, RegPorPag) {

    $.ajax({
        type: "POST",
        url: "../Services/Listar_Comisaria",
        data: "{vdescripcion:'" + descripcion+ "', vdireccion:'" + direccion+ "', NroDePagina:'" + pagina + "', RegPorPag:'" + RegPorPag + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ConstruirGrillaComi,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}

function ConstruirGrillaComi(data) {
    var pagina = $("#PaginaComi").val();
    var select = $("#PaginaComi");
    var regporpag = "5";
    var TotalRegistros = "1";
    var i = 1;
    
    select.empty();

    if (data.length != null) {

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
    else
    {
        select.append("<option value = '1'> 1</option>");
    }


    $("#PaginaComi").val(pagina);


    var tabla = $("#GridListarComi");
    tabla.empty();
    tabla.append("<thead class='bg-blues'>" +
                "<tr>" +
                "<td style='color:#fff;'>Id Comisaria</td>" +
                "<td>Descripción</td>" +
                "<td>Dirección</td>" +                
                "</tr>" +
                "</thead>");


    if (data.length > 0) {
        tabla.append("<tbody>")
        for (i = 0; i < data.length; i++) {

            var Selectfuncion = "SelectComisaria(" + data[i].idcomisaria + ",'" + data[i].vdescripcion + "')";

            tabla.append(
                        "<tr style='cursor: pointer;' ondblclick=" + Selectfuncion + ">" +
                        "<td >" + data[i].idcomisaria + "</td>" +
                        "<td>" + data[i].vdescripcion + "</td>" +
                        "<td>" + data[i].vdireccion + "</td>" +
                        "</tr>");
        }
        tabla.append("</tbody>")

    }
    else {
        select.empty();
        select.append("<option value = '1'> 1</option>");

        tabla.append("<tbody>")
        tabla.append(
                        "<center>" +
                        "No hay registro(s) selecionado(s) por los criterios de busqueda" +
                        "</center>");
        tabla.append("</tbody>")
    }

}

function SelectComisaria(idcomisaria, vdescripcion) {    
    $('#idcomisaria_reg').val(idcomisaria);
    $('#descripcomisaria_reg').val(vdescripcion);
    $('#listado_comisaria').modal('hide');
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

function Spinner_TipoDeclarante() {
    $.ajax({
        type: "POST",
        url: "../Services/Combo_TipoDeclarante",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success:
            function (data) {
                if (data.length >= 0) {
                    var Combo = $("#sp_TipoDeclarante");
                    Combo.empty();
                    Combo.append("<option value='0'>SELECCIONAR</option>");
                    for (i = 0; i < data.length; i++) {
                        Combo.append("<option value='" + data[i].idTipoDeclarante+ "'>" + data[i].vDescripcion + "</option>");
                    }
                }
            },
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}
//AQUI SE LLENAN LOS DOS COMBOS DE PARENTESCO PORQUE SON DE LA MISMA TABLA
function Spinner_Parentesco() {
    $.ajax({
        type: "POST",
        url: "../Services/Combo_Parentesco",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success:
            function (data) {
                if (data.length >= 0) {

                    var Combo1 = $("#sp_Parentesco1");
                    Combo1.empty();
                    Combo1.append("<option value='0'>SELECCIONAR</option>");
                    for (i = 0; i < data.length; i++) {
                        Combo1.append("<option value='" + data[i].idParentesco + "'>" + data[i].vDescripcion + "</option>");
                    }

                    var Combo2 = $("#sp_Parentesco2");
                    Combo2.empty();
                    Combo2.append("<option value='0'>SELECCIONAR</option>");
                    for (i = 0; i < data.length; i++) {
                        Combo2.append("<option value='" + data[i].idParentesco + "'>" + data[i].vDescripcion + "</option>");
                    }

                }
            },
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}

//Tipo Documento:
function Spinner_TipoDocumento() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarTipoDocumento",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success:
           function (data) {
               if (data.length >= 0) {
                   var Combo = $("#sp_TipoDocumento");
                   Combo.empty();
                   Combo.append("<option value='0'>SELECCIONAR</option>");
                   for (i = 0; i < data.length; i++) {
                       Combo.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
                   }
               }
           },
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

//COMBO ASESOR:
function Spinner_Asesor(idperfil) {

    $.ajax({
        type: "POST",
        url: "../Services/Combo_Usuario",
        data: "{idperfil:'" + idperfil + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success:
           function (data) {
               if (data.length >= 0) {
                   var Combo = $("#sp_asesor");
                   Combo.empty();
                   Combo.append("<option value='0'>SELECCIONAR</option>");
                   for (i = 0; i < data.length; i++) {
                       Combo.append("<option value='" + data[i].nidUsuario + "'>" + data[i].nombresusu + "</option>");
                   }
               }
           },
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}





function AutocomUbigeo() {

    $.ajax({
        type: "POST",
        url: "../Services/AutcomUbigeo",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success:
            function (data) {
                if (data.length >= 0) {
                    //var Combo = $("#ubicasiniestro_reg");
                    //Combo.empty();
                    //Combo.append("<option value='0'>SELECCIONAR</option>");
                    //for (i = 0; i < data.length; i++) {
                    //    Combo.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
                    //}
                    alert(data);
                    var data = [];
                    data.push(data);

                    $('#ubicasiniestro_reg').autocomplete({
                        source: data
                    });

                }
            },

           //function (data) {
           //    if (data.length >= 0) {
           //        var Combo = $("#sp_TipoDocumento");
           //        Combo.empty();
           //        Combo.append("<option value='0'>SELECCIONAR</option>");
           //        for (i = 0; i < data.length; i++) {
           //            Combo.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
           //        }
           //    }
           //},
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


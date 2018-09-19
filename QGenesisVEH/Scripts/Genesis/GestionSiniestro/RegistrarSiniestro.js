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

    $("#buscar_Id_poliza").click(function () {

        var idpoliza = $('#poliza_reg').val();
        if (idpoliza.length > 0) {
            SelectPolizaVehiculo(idpoliza, '');
        }
        else {
            alert('No se ha ingresado ningun nro poliza para la busqueda.');
            $('#poliza_reg').focus();
        }
    });


    //Dar focus cuando es popup de bootstrap
    $('#listado_poliza').on('shown.bs.modal', function () {
        $('#bus_poliza').focus()
    })



    $('#poliza_reg').keypress(function (e) {
        if (e.which == 13) {
            document.getElementById('buscar_Id_poliza').click();
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
        
        var idpoliza= $("#poliza_reg").val();
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
            idpoliza, '1', '1', dFecNotificacion
            , idocurrencia, idtiposiniestro, idconsecuencia, dFecOcurrencia
            , vlugarsiniestro, vubicasiniestro, iocupantes, idtipodeclarante
            , vdenominacion, vtelef_declarante, iparentaseg_declarante, vmaildeclarante
            , vconductor, idtipodoc, vnrodociden, vlicencia
            , iparentaseg_conductor, vtelef_conductor, vemail_conductor, dvencilicencia
	        , idcomisaria, vcategoria, vdetasiniestro, asesor
            )
    });    

});


function RegistrarSiniestro
    (idpoliza, smidciaseguros, iestadosiniestro, dFecNotificacion
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
        data: "{idpoliza:'" + idpoliza + "', smidciaseguros:'" + smidciaseguros + "', iestadosiniestro:'" + iestadosiniestro + "', dFecNotificacion:'" + dFecNotificacion
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

function SelectPoliza(idpoliza, placa) {
    $('#poliza_reg').val(idpoliza);
    $('#listado_poliza').modal('hide');
    SelectPolizaVehiculo(idpoliza, placa)
    $('#fecnotificacion_reg').focus();
}


function SelectPolizaVehiculo(idpoliza, placa) {

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
                document.getElementById('busqueda_avanzada').click();
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


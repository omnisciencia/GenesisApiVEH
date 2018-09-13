window.onload = function () {
    Spinner_TipoVehiculo();
    Spinner_TipoUso();
    Spinner_MarcaVehiculo();
    Spinner_ModeloVehiculo(1);
    Spinner_TipoDocumento();
    Spinner_Nacionalidad();
    Spinner_Sexo();
    Spinner_EstadoCivil();
    Spinner_Departamento();
    Spinner_Provincia("01");
    Spinner_Distrito("01", "01");
    Spinner_TipoVia();
    Spinner_TipoPoliza();
    //Text_IdPoliza();
    VigenciaFecha();
    InhabilitarCajas();
    Spinner_FormaPago();

    $("#sp_TipoUso").prop("disabled", true);

    ListarGrillaVehiculos();

    $("select[name=sp_MarcaVehiculo]").change(function () {
        idmarca = $("#sp_MarcaVehiculo").val();
        Spinner_ModeloVehiculo(idmarca);

    });

    $("select[name=sp_Departamento]").change(function () {
        vdepartamento = $("#sp_Departamento").val();
        Spinner_Provincia(vdepartamento);
        Spinner_Distrito(vdepartamento, "01");
    });


    $("select[name=sp_Provincia]").change(function () {

        vdepartamento = $("#sp_Departamento").val();
        vprovincia = $("#sp_Provincia").val();

        Spinner_Distrito(vdepartamento, vprovincia);

    });

    $("select[name=sp_TipoDocumento]").change(function () {
        var numerodocu = $("#nrodocumento_reg").val();
        tipodoc = $("#sp_TipoDocumento").val();

        
        $('#rsocial_reg').val('');
        $('#nomcontacto_reg').val('');
        
        if (tipodoc == 6) {            
            //oculta campo apellido paterno
            $('#paterno_reg').addClass('Ocultar');
            $('#t_apepaterno').addClass('Ocultar');
            //oculta campo apellido materno
            $('#t_apematerno').addClass('Ocultar');
            $('#materno_reg').addClass('Ocultar');
            //oculta campo sexo
            $('#t_sexo').addClass('Ocultar');
            $('#sp_Sexo').addClass('Ocultar');
            //oculta campo nacionalidad
            $('#t_nacionalidad').addClass('Ocultar');
            $('#sp_Nacionalidad').addClass('Ocultar');
            //oculta campo fecha nacimiento
            $('#t_fecnacimineto').addClass('Ocultar');
            $('#fecnaci_reg').addClass('Ocultar');
            //oculta campo celular
            $('#t_celular').addClass('Ocultar');
            $('#celular_reg').addClass('Ocultar');
            //oculta campo estado civil
            $('#t_estcivil').addClass('Ocultar');
            $('#sp_EstadoCivil').addClass('Ocultar');
            //oculta campo telf. fijo
            $('#t_telfijo').addClass('Ocultar');
            $('#telefono_reg').addClass('Ocultar');
            //oculta campo email
            $('#t_email').addClass('Ocultar');
            $('#email_reg').addClass('Ocultar');
            //oculta campo nombre
            $('#t_nombre').addClass('Ocultar');
            $('#nombres_reg').addClass('Ocultar');
            //aparece campo razon social
            $('#form_rsocial').removeClass('Ocultar');
            //aparece campo nombre contacto
            $('#form_nomcontacto').removeClass('Ocultar');
            //aparece campo nombre contacto
            $('#nombres_reg').val('');
            $('#paterno_reg').val('');
            $('#materno_reg').val('');
            $('#telefono_reg').val('');
            $('#celular_reg').val('');

        } else {
            //mostrar campo apellido paterno
            $('#paterno_reg').removeClass('Ocultar');
            $('#t_apepaterno').removeClass('Ocultar');
            //mostrar campo apellido materno
            $('#t_apematerno').removeClass('Ocultar');
            $('#materno_reg').removeClass('Ocultar');
            //mostrar campo sexo
            $('#t_sexo').removeClass('Ocultar');
            $('#sp_Sexo').removeClass('Ocultar');
            //mostrar campo nacionalidad
            $('#t_nacionalidad').removeClass('Ocultar');
            $('#sp_Nacionalidad').removeClass('Ocultar');
            //mostrar campo fecha nacimiento
            $('#t_fecnacimineto').removeClass('Ocultar');
            $('#fecnaci_reg').removeClass('Ocultar');
            //mostrar campo celular
            $('#t_celular').removeClass('Ocultar');
            $('#celular_reg').removeClass('Ocultar');
            //mostrar campo estado civil
            $('#t_estcivil').removeClass('Ocultar');
            $('#sp_EstadoCivil').removeClass('Ocultar');
            //mostrar campo telf. fijo
            $('#t_telfijo').removeClass('Ocultar');
            $('#telefono_reg').removeClass('Ocultar');
            //mostrar campo email
            $('#t_email').removeClass('Ocultar');
            $('#email_reg').removeClass('Ocultar');
            //mostrar campo nombre
            $('#t_nombre').removeClass('Ocultar');
            $('#nombres_reg').removeClass('Ocultar');
            //ocultar campo razon social
            $('#form_rsocial').addClass('Ocultar');
            //ocultar campo razon social
            $('#form_nomcontacto').addClass('Ocultar');

        }
    });


    function ListarGrillaVehiculos() {
     
        //$("#Pagina").val(pagina);

        var tabla = $("#GridListar");
        tabla.empty();
        tabla.append("<thead class='bg-blues'>" +
                    "<tr>" +
                    "<td style=display:none>idtipoveh</td>" +
                    "<td style=display:none>idmarca</td>" +
                    "<td style=display:none>idmodeloveh</td>" +
                    "<td style=display:none>asientos</td>" +
                    "<td style=display:none>motor</td>" +
                    "<td style=display:none>vin</td>" +
                    "<td style=display:none>suma</td>" +
                    //"<td>Id</td>" +
                    "<td>Placa</td>" +
                    "<td>Clase</td>" +
                    "<td>Marca</td>" +
                    "<td>Modelo</td>" +
                    "<td>Color</td>" +
                    "<td>Año</td>" +                                  
                    "<td>Asientos</td>" +
                    "<td>Motor</td>" +
                    "<td>Tipo Uso</td>" +
                    "<td>VIN</td>" +
                    "<td>Suma</td>" +
                    "<td></td>" +
                    "</tr>" +
                    "</thead>");


    }

    $("#btnAceptar").click(function () {

        //color_reg
        //sumaasegurada_reg

        if (!(($('#placa_reg').val() == '' || $('#nroasientos_reg').val() =='' || $('#nromotor_reg').val() =='' || $('#vin_reg').val() == '')))
        {
            

            var tabla = $("#GridListar");
            var nFilas = $("#GridListar tr").length;

            var idtipoveh = $('#sp_TipoVehiculo').val();
            var tipoveh = $('#sp_TipoVehiculo option:selected').text();
            var idmarca = $('#sp_MarcaVehiculo').val();
            var marca = $('#sp_MarcaVehiculo option:selected').text();
            var idmodeloveh = $('#sp_ModeloVehiculo').val();
            var modeloveh = $('#sp_ModeloVehiculo option:selected').text();
            var placa = $('#placa_reg').val();
            var asientos = $('#nroasientos_reg').val();
            var aniofab = $('#sp_anioFabricacion option:selected').text();
            var motor = $('#nromotor_reg').val();
            // var nroserie = $('#nroserie_reg').val();
            var vin = $('#vin_reg').val();
            var color = $('#color_reg').val();
            //  var idtipouso = $('#sp_TipoUso').val();        
            var tipouso = $('#sp_TipoUso option:selected').text();
            var suma = $('#sumaasegurada_reg').val();
            var idcatriesgo = $('#sp_catriesgo').val();

            tabla.append("<thead class='bg-White'>" +
                   "<tr id='fil_" + nFilas + "'>" +
                   //--columnas ocultas---//
                   "<td style=display:none>" + idtipoveh + "</td>" +
                   "<td style=display:none>" + idmarca + "</td>" +
                   "<td style=display:none>" + idmodeloveh + "</td>" +
                   "<td style=display:none>" + asientos + "</td>" +
                   "<td style=display:none>" + motor + "</td>" +
                   "<td style=display:none>" + vin + "</td>" +
                   "<td style=display:none>" + suma + "</td>" +
                   "<td style=display:none>" + idcatriesgo + "</td>" +
                   "<td style=display:none>" + nFilas + "</td>" +

                   /*
                   
                if (j == 0) { DetallesVehi += '"idtipoveh":"'; }
                if (j == 1) { DetallesVehi += '"idmarca":"'; }
                if (j == 2) { DetallesVehi += '"idmodeloveh":"'; }

                if (j == 3) { DetallesVehi += '"asientos":"'; }
                if (j == 4) { DetallesVehi += '"motor":"'; }
                if (j == 5) { DetallesVehi += '"vin":"'; }
                if (j == 6) { DetallesVehi += '"suma":"'; }

                //if (j == 7) { res += 'nFilas:'; }
                if (j == 8) { DetallesVehi += '"placa":"'; }
                //if (j == 9) { res += 'tipoveh:'; }
                //if (j == 10) { res += 'marca:'; }
                //if (j == 11) { res += 'modeloveh:'; }
                if (j == 12) { DetallesVehi += '"color":"'; }
                if (j == 13) { DetallesVehi += '"aniofab":"'; }
                //if (j == 14) { res += 'tipouso:'; }
                   
                   */



                   "<td>" + placa + "</td>" +
                   "<td>" + tipoveh + "</td>" +
                   "<td>" + marca + "</td>" +
                   "<td>" + modeloveh + "</td>" +
                   "<td>" + color + "</td>" +
                   "<td>" + aniofab + "</td>" +
                   "<td>" + asientos + "</td>" +
                   "<td>" + motor + "</td>" +
                   "<td>" + tipouso + "</td>" +
                   "<td>" + vin + "</td>" +
                   "<td>" + suma + "</td>" +
                   "<td><input type=button onclick=EliminarFila('fil_" + nFilas + "') value=Eliminar style=width:70px class=btn_customer btn-secondary/></td>" +
                   "</tr>" +
                   "</thead>");
        }
        else {
            alert('Faltan ingresar Datos.');
        }

       
    });



    //idpoliza_input = getParameterByName('idpoliza');
    //modo_input = getParameterByName('modo');

    var idpoliza_input = sessionStorage.getItem("idpoliza");

    var modo_input = sessionStorage.getItem("modo");


    sessionStorage.removeItem("idpoliza");

    sessionStorage.removeItem("modo");


    if (modo_input == 'ver') {
        ListarPolizaVehiculo(idpoliza_input);

        //$('#btnVer').onkeyup(function () {
        //    if ($(this).val() == '') {
        //        $('.enableOnInput').prop('disabled', true);
        //    } else {
        //        $('.enableOnInput').prop('disabled', false);
        //    }
        //});
        $('#btnVer').hide();
        $('#titulo').html('VER - REGISTRO DE POLIZA');
    }
    else {
        $('#titulo').html('AGREGANDO - REGISTRO DE POLIZA');
    }


    if (idpoliza_input != null && idpoliza_input != '') {        
        DatosPoliza(idpoliza_input);
    }



}

function EliminarFila(fila) {
    var resp = confirm("Desea eliminar el registro?");
    if (resp == true) {
        $('#' + fila + '').remove();
    }
}

function ListarPolizaVehiculo(idpoliza) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarPolizaVehiculo",
        data: "{idpoliza:'" + idpoliza + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarGrillaPolizaVehiculo,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}


function ListarGrillaPolizaVehiculo(data) {
    //SE LISTA SIN EL BOTON ELIMINAR, PUES ES SOLO CONSULTA

    var tabla = $("#GridListar");
    tabla.empty();
    tabla.append("<thead class='bg-blues'>" +
                "<tr>" +
                //"<td style=display:none>idtipoveh</td>" +
                //"<td style=display:none>idmarca</td>" +
                //"<td style=display:none>idmodeloveh</td>" +                    
                //"<td style=display:none>asientos</td>" +
                //"<td style=display:none>motor</td>" +                    
                //"<td style=display:none>vin</td>" +
                //"<td style=display:none>suma</td>" +
                //"<td style=display:none>Id</td>" +
                "<td>Placa</td>" +
                "<td>Clase</td>" +
                "<td>Marca</td>" +
                "<td>Modelo</td>" +
                "<td>Color</td>" +
                "<td>Año</td>" +
                "<td>Asientos</td>" +
                "<td>Motor</td>" +
                "<td>Tipo Uso</td>" +
                "<td>VIN</td>" +
                "<td>Suma</td>" +                
                "</tr>" +
                "</thead>");



    if (data.length > 0) {
        tabla.append("<tbody>")
        for (i = 0; i < data.length; i++) {
            tabla.append(
                        "<tr>" +
                        "<td>" + data[i].placa + "</td>" +
                        "<td>" + data[i].clase + "</td>" +
                        "<td>" + data[i].modelo + "</td>" +
                        "<td>" + data[i].marca + "</td>" +
                        "<td>" + data[i].color + "</td>" +
                        "<td>" + data[i].aniofab + "</td>" +
                        "<td>" + data[i].asientos + "</td>" +
                        "<td>" + data[i].motor + "</td>" +
                        "<td>" + data[i].tipouso + "</td>" +
                        "<td>" + data[i].vin + "</td>" +
                        "<td>" + data[i].desumaasegurada + "</td>" +
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

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function DatosPoliza(idpoliza) {

    $.ajax({
        type: "POST",
        url: "../Services/DatosPoliza",
        data: "{idpoliza:'" + idpoliza + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenar_registro_poliza,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });


}

function llenar_registro_poliza(data) {



    //---DATOS DEL VEHICULO
    $("#placa_reg").val(data[0].placa);
    $("#nroasientos_reg").val(data[0].puertas);
    //$("#sp_TipoVehiculo").val(data[0].claseveh);
    $("#sp_MarcaVehiculo").val(data[0].marcaveh);
    Spinner_ModeloVehiculo(data[0].marcaveh, data[0].modeloveh);


    $("#nromotor_reg").val(data[0].nromotor);
    $("#vin_reg").val(data[0].vin);
    $("#color_reg").val(data[0].color);
    $("#sp_TipoUso").val(data[0].uso);
    $("#sumaasegurada_reg").val(data[0].suma);
    //$("#nroserie_reg").val("H1500S6S26S2");
    //$("#nroserie_reg").val(data[0].nroserie);


    if (data[0].tipdocumento == 6) {
        //oculta campo apellido paterno
        $('#paterno_reg').addClass('Ocultar');
        $('#t_apepaterno').addClass('Ocultar');
        //oculta campo apellido materno
        $('#t_apematerno').addClass('Ocultar');
        $('#materno_reg').addClass('Ocultar');
        //oculta campo sexo
        $('#t_sexo').addClass('Ocultar');
        $('#sp_Sexo').addClass('Ocultar');
        //oculta campo nacionalidad
        $('#t_nacionalidad').addClass('Ocultar');
        $('#sp_Nacionalidad').addClass('Ocultar');
        //oculta campo fecha nacimiento
        $('#t_fecnacimineto').addClass('Ocultar');
        $('#fecnaci_reg').addClass('Ocultar');
        //oculta campo celular
        $('#t_celular').addClass('Ocultar');
        $('#celular_reg').addClass('Ocultar');
        //oculta campo estado civil
        $('#t_estcivil').addClass('Ocultar');
        $('#sp_EstadoCivil').addClass('Ocultar');
        //oculta campo telf. fijo
        $('#t_telfijo').addClass('Ocultar');
        $('#telefono_reg').addClass('Ocultar');
        //oculta campo email
        $('#t_email').addClass('Ocultar');
        $('#email_reg').addClass('Ocultar');
        //oculta campo nombre
        $('#t_nombre').addClass('Ocultar');
        $('#nombres_reg').addClass('Ocultar');
        //aparece campo razon social
        $('#form_rsocial').removeClass('Ocultar');
        //aparece campo nombre contacto
        $('#form_nomcontacto').removeClass('Ocultar');
        //aparece campo nombre contacto
        $('#nombres_reg').val('-');
        $('#paterno_reg').val('-');
        $('#materno_reg').val('-');
        $('#telefono_reg').val(0);
        $('#celular_reg').val(0);

        //========TRAE DATOS A LOS CAMPOS========

        $("#sp_TipoDocumento").val(data[0].tipdocumento);
        $("#rsocial_reg").val(data[0].nombre);
        $("#nomcontacto_reg").val(data[0].contacto);
        $("#sp_Departamento").val(data[0].Departamento);
        $("#nrodocumento_reg").val(data[0].nrodocumento);

        //$("#sp_Distrito").val(Distrito);
        $("#sp_TipoVia").val(data[0].via);
        $("#numeroubi_reg").val(data[0].numero);
        $("#direccion_reg").val(data[0].nomvia);
        $("#referencia_reg").val(data[0].referencia);

        var timer = setTimeout(function () {
            Spinner_Provincia(data[0].Departamento);
            Spinner_Distrito(data[0].Departamento, data[0].Provincia);
        }, 1000);

        var timer = setTimeout(function () {
            $("#sp_Provincia").val(data[0].Provincia);
            $("#sp_Distrito").val(data[0].Distrito);
        }, 1500);

    } else {


        //mostrar campo apellido paterno
        $('#paterno_reg').removeClass('Ocultar');
        $('#t_apepaterno').removeClass('Ocultar');
        //mostrar campo apellido materno
        $('#t_apematerno').removeClass('Ocultar');
        $('#materno_reg').removeClass('Ocultar');
        //mostrar campo sexo
        $('#t_sexo').removeClass('Ocultar');
        $('#sp_Sexo').removeClass('Ocultar');
        //mostrar campo nacionalidad
        $('#t_nacionalidad').removeClass('Ocultar');
        $('#sp_Nacionalidad').removeClass('Ocultar');
        //mostrar campo fecha nacimiento
        $('#t_fecnacimineto').removeClass('Ocultar');
        $('#fecnaci_reg').removeClass('Ocultar');
        //mostrar campo celular
        $('#t_celular').removeClass('Ocultar');
        $('#celular_reg').removeClass('Ocultar');
        //mostrar campo estado civil
        $('#t_estcivil').removeClass('Ocultar');
        $('#sp_EstadoCivil').removeClass('Ocultar');
        //mostrar campo telf. fijo
        $('#t_telfijo').removeClass('Ocultar');
        $('#telefono_reg').removeClass('Ocultar');
        //mostrar campo email
        $('#t_email').removeClass('Ocultar');
        $('#email_reg').removeClass('Ocultar');
        //mostrar campo nombre
        $('#t_nombre').removeClass('Ocultar');
        $('#nombres_reg').removeClass('Ocultar');
        //ocultar campo razon social
        $('#form_rsocial').addClass('Ocultar');
        //ocultar campo razon social
        $('#form_nomcontacto').addClass('Ocultar');

        $('#nomcontacto_reg').val('');

        //---DATOS DEL SOLICITANTE
        $("#sp_TipoDocumento").val(data[0].tipdocumento);
        $("#nrodocumento_reg").val(data[0].nrodocumento);
        $("#sp_Nacionalidad").val(data[0].nacionalidad);
        $("#nombres_reg").val(data[0].nombre);
        $("#paterno_reg").val(data[0].apepaterno);
        $("#materno_reg").val(data[0].apematerno);
        $("#fecnaci_reg").val(data[0].nacimiento);
        $("#sp_Sexo").val(data[0].genero);
        $("#sp_EstadoCivil").val(data[0].estadocivil);
        $("#telefono_reg").val(data[0].telefono);
        $("#celular_reg").val(data[0].celular);
        $("#email_reg").val(data[0].mail);
        $("#sp_Departamento").val(data[0].Departamento);
        //$("#sp_Provincia").val(data[0].Provincia);
        //$("#sp_Distrito").val(data[0].Distrito);
        $("#sp_TipoVia").val(data[0].via);
        $("#numeroubi_reg").val(data[0].numero);
        $("#direccion_reg").val(data[0].nomvia);
        $("#referencia_reg").val(data[0].referencia);


        var timer = setTimeout(function () {
            Spinner_Provincia(data[0].Departamento);
            Spinner_Distrito(data[0].Departamento, data[0].Provincia);
        }, 1000);

        var timer = setTimeout(function () {
            $("#sp_Provincia").val(data[0].Provincia);
            $("#sp_Distrito").val(data[0].Distrito);
        }, 1500);
    }

    //---DATOS DE POLIZA
    $("#nropoliza_reg").val(data[0].idpoliza);
    $("#vigenciaini_reg").val(data[0].inivigencia);
    $("#vigenciafin_reg").val(data[0].finvigencia);
    $("#sp_Poliza").val(data[0].tippoliza);
    $("#sp_FormaPago").val(data[0].formapago);

    if (data[0].planproducto == "PLATINUM") {
        $("#sp_Plan").val(1);
    }

}





//Llenar Spiners *********************************************************************************

//Forma Pago:
function Spinner_FormaPago() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarFormaPago",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_FormaPago,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_FormaPago(data) {
    var selectAgregar = $("#sp_FormaPago");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Tipo Vehiculo:
function Spinner_TipoVehiculo() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarTipoVehiculo",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_TipoVehiculo,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });



}

function llenarSpinner_TipoVehiculo(data) {
    var selectAgregar = $("#sp_TipoVehiculo");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].idtipoveh + "'>" + data[i].vDescripcion + "</option>");
    }

}

//Tipo Uso:
function Spinner_TipoUso() {


    $.ajax({
        type: "POST",
        url: "../Services/ListarTipoUso",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_TipoUso,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });



}

function llenarSpinner_TipoUso(data) {
    var selectAgregar = $("#sp_TipoUso");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Marca Vehiculo:
function Spinner_MarcaVehiculo() {


    $.ajax({
        type: "POST",
        url: "../Services/ListarMarcaVehiculo",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_MarcaVehiculo,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });



}

function llenarSpinner_MarcaVehiculo(data) {
    var selectAgregar = $("#sp_MarcaVehiculo");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].idmarca + "'>" + data[i].vDescripcion + "</option>");
    }

}

//Modelo Vehiculo:
function Spinner_ModeloVehiculo(id_marca, id_modelo) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarModeloVehiculo",
        data: "{id_marca:'" + id_marca + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.length >= 0) {
                var selectAgregar = $("#sp_ModeloVehiculo");
                selectAgregar.empty();

                for (i = 0; i < data.length; i++) {
                    selectAgregar.append("<option value=" + data[i].idmodelo + ">" + data[i].vdescripcion + "</option>");
                }


                if (id_marca == 1) {
                    selectAgregar.val(1);
                } else {
                    selectAgregar.val(id_modelo);
                }
            }
        },
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

//function Spinner_ModeloVehiculo(id_marca) {

//    $.ajax({
//        type: "POST",
//        url: "../Services/ListarModeloVehiculo",
//        data: "{id_marca:'" + id_marca + "'}",
//        dataType: "json",
//        contentType: "application/json; charset=utf-8",
//        success: llenarSpinner_ModeloVehiculo,
//        failure: function (response) {
//            alert(response.d);
//        },
//        error: OnError

//    });

//}

//function llenarSpinner_ModeloVehiculo(data) {
//    var selectAgregar = $("#sp_ModeloVehiculo");
//    selectAgregar.empty();

//    for (i = 0; i < data.length; i++) {
//        selectAgregar.append("<option value='" + data[i].idmodelo + "'>" + data[i].vdescripcion + "</option>");
//    }

//}

//Tipo Documento:
function Spinner_TipoDocumento() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarTipoDocumento",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_TipoDocumento,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_TipoDocumento(data) {
    var selectAgregar = $("#sp_TipoDocumento");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Nacionalidad:
function Spinner_Nacionalidad() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarNacionalidad",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_Nacionalidad,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_Nacionalidad(data) {
    var selectAgregar = $("#sp_Nacionalidad");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Sexo:
function Spinner_Sexo() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarSexo",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_Sexo,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_Sexo(data) {
    var selectAgregar = $("#sp_Sexo");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Estado Civil:
function Spinner_EstadoCivil() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarEstadoCivil",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_EstadoCivil,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_EstadoCivil(data) {
    var selectAgregar = $("#sp_EstadoCivil");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Departamento:
function Spinner_Departamento() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarDepartamento",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_Departamento,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_Departamento(data) {
    var selectAgregar = $("#sp_Departamento");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].vdepartamento + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Provincia:
function Spinner_Provincia(vdepartamento) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarProvincia",
        data: "{vdepartamento:'" + vdepartamento + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_Provincia,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_Provincia(data) {
    var selectAgregar = $("#sp_Provincia");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].vprovincia + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Distrito:
function Spinner_Distrito(vdepartamento, vprovincia) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarDistrito",
        data: "{vdepartamento:'" + vdepartamento + "', vprovincia:'" + vprovincia + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_Distrito,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_Distrito(data) {
    var selectAgregar = $("#sp_Distrito");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].vdistrito + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Tipo Via:
function Spinner_TipoVia() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarTipoVia",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_TipoVia,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_TipoVia(data) {
    var selectAgregar = $("#sp_TipoVia");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Tipo Poliza:
function Spinner_TipoPoliza() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarTipoPoliza",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_TipoPoliza,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_TipoPoliza(data) {
    var selectAgregar = $("#sp_Poliza");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Id Poliza:
function Text_IdPoliza() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarIdPoliza",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarInput_Text_IdPoliza,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarInput_Text_IdPoliza(data) {
    var nropoliza;

    for (i = 0; i < data.length; i++) {
        nropoliza = data[i].idpoliza;
    }

    $("#nropoliza_reg").val(nropoliza);

}

//Fecha Vigencia
function VigenciaFecha() {
    
    var sfecha=$("#vigenciaini_reg").val();
    
    if (sfecha == '') {
        var f = new Date();
    }
    else {
        var y = sfecha.substr(0, 4);
        var m = sfecha.substr(5, 2);
        var d = sfecha.substr(8, 4);

        var f = new Date(y, m, d);
    }
    
    var dia = "" + f.getDate();
    var mes = "" + (f.getMonth())
    var aniofinal = "" + (f.getFullYear() + 1)

    if (parseInt(dia) < 10) {
        dia = "0" + dia;
    }
    if (parseInt(mes) < 10) {
        mes = "0" + mes;
    }

    //var fechaIni = (dia + "/" + mes + "/" + f.getFullYear());
    var fechaIni = (f.getFullYear() + "-" + mes + "-" + dia);
    //var fechaIni = (dia + "/" + mes + "/" + aniofinal);
    var fechaFin = (dia + "/" + mes + "/" + aniofinal);
          
    $("#vigenciaini_reg").val(fechaIni);
    $("#vigenciafin_reg").val(fechaFin);

}

function InhabilitarCajas() {

    $("#vigenciaini_reg").prop("disabled", false);
    $("#vigenciafin_reg").prop("disabled", true);
    // $("#nropoliza_reg").prop("disabled", true);
    //$("#fecnaci_reg").prop("disabled", true);
    $("#estado_poliza").prop("disabled", true);

}

//Solo numerico

function justNumbers(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;

    return /\d/.test(String.fromCharCode(keynum));
}

//End Llenar Spiners *********************************************************************************

//Agregar Registro Poliza ****************************************************************************

function ErrorText(mensaje) {
    $('#contenedor_errorMessage').removeClass('Ocultar');
    document.getElementById('errorMessage').innerHTML = mensaje;
}

function SuccesText() {
    $('#contenedor_errorMessage').addClass('Ocultar');
}

function RegistrarPoliza_onclick() {
   

    var CuentaFilas= document.getElementById('GridListar').rows.length;


    if (CuentaFilas > 1) {
        //contadores de cierre de comas
        var y = 0;
        var c = 0;

        //formador de cadena
        var DetallesVehi = '';
        DetallesVehi += '[';

        for (var i = 1; i < document.getElementById('GridListar').rows.length; i++) {
            DetallesVehi += '{';
            for (var j = 0; j < document.getElementById('GridListar').rows[i].cells.length - 1; j++) {

                if (j == 0) { DetallesVehi += '"idtipoveh":"'; }
                if (j == 1) { DetallesVehi += '"idmarca":"'; }
                if (j == 2) { DetallesVehi += '"idmodeloveh":"'; }

                if (j == 3) { DetallesVehi += '"asientos":"'; }
                if (j == 4) { DetallesVehi += '"motor":"'; }
                if (j == 5) { DetallesVehi += '"vin":"'; }
                if (j == 6) { DetallesVehi += '"suma":"'; }
                if (j == 7) { DetallesVehi += '"idcatriesgo":"'; }
                //if (j == 8) { res += 'nFilas:'; }
                if (j == 9) { DetallesVehi += '"placa":"'; }
                //if (j == 10) { res += 'tipoveh:'; }
                //if (j == 11) { res += 'marca:'; }
                //if (j == 12) { res += 'modeloveh:'; }
                if (j == 13) { DetallesVehi += '"color":"'; }
                if (j == 14) { DetallesVehi += '"aniofab":"'; }
                //if (j == 15) { res += 'tipouso:'; }

                if (j <= 14) {
                    if (j != 8 && j != 10 && j != 11 && j != 12 && j != 15) {

                        if (j < 14) {
                            DetallesVehi += document.getElementById('GridListar').rows[i].cells[j].innerHTML + '",';
                        }
                        else {
                            DetallesVehi += document.getElementById('GridListar').rows[i].cells[j].innerHTML + '"';
                        }

                    }
                }

            }

            //reinicia contador de cierre de coma por cada registro       

            c = c + 1;


            if (c < document.getElementById('GridListar').rows.length - 1) {
                DetallesVehi += '},';
            }
            else {
                DetallesVehi += '}';
            }
        }

        DetallesVehi += ']';


        //alert(DetallesVehi);


        var modo_input = getParameterByName('modo');

        if (modo_input == 'agregar') {
            var idpoliza = $("#nropoliza_reg").val();

            //PRIMERO SE VALIDA SI EXISTE LA POLIZA
            $.ajax({
                type: "POST",
                url: "../Services/ValidarIdPoliza",
                data: "{idpoliza:'" + parseInt(idpoliza) + "'}",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    if (data[0].respuesta == 'existe') {
                        alert('No se puede guardar el registro, porque el Nro. Poliza ya existe');
                    }
                    else {
                        RegistrarPoliza(DetallesVehi);
                    };
                },
                failure: function (response) {
                    alert(response.d);
                },

                error: OnError

            });
        }
        else {
            alert('No se puede guardar la informacion, porque está en modo VER - REGISTRO DE POLIZA.');
        }
    }
    else {
        alert('No se puede guardar el registro porque no tiene ningun vehículo agregado.');
    }

}

function RegistrarPoliza(DetallesVehi) {

    var sp_TipoVehiculo = $("#sp_TipoVehiculo").val();
    var sp_MarcaVehiculo = $("#sp_MarcaVehiculo").val();
    var sp_ModeloVehiculo = $("#sp_ModeloVehiculo").val();
    var placa_reg = $("#placa_reg").val();
    var nroasientos_reg = $("#nroasientos_reg").val();
    var sp_anioFabricacion = $("#sp_anioFabricacion").val();
    var nromotor_reg = $("#nromotor_reg").val();
    var sumaasegurada_reg = $("#sumaasegurada_reg").val();
    var vin_reg = $("#vin_reg").val();
    //var nroserie_reg = $("#nroserie_reg").val();
    var sp_TipoUso = $("#sp_TipoUso").val();

    var sp_TipoDocumento = $("#sp_TipoDocumento").val();
    var nrodocumento_reg = $("#nrodocumento_reg").val();
    var sp_Nacionalidad = $("#sp_Nacionalidad").val();
    var nombres_reg = $("#nombres_reg").val();
    var paterno_reg = $("#paterno_reg").val();
    var materno_reg = $("#materno_reg").val();
    var fecnaci_reg_prev = $("#fecnaci_reg").val();
    var sp_Sexo = $("#sp_Sexo").val();
    var sp_EstadoCivil = $("#sp_EstadoCivil").val();

    var sp_TipoVia = $("#sp_TipoVia").val();
    var direccion_reg = $("#direccion_reg").val();
    var numeroubi_reg = $("#numeroubi_reg").val();
    var referencia_reg = $("#referencia_reg").val();
    var sp_Departamento = $("#sp_Departamento").val();
    var sp_Provincia = $("#sp_Provincia").val();
    var sp_Distrito = $("#sp_Distrito").val();

    var nropoliza_reg = $("#nropoliza_reg").val();
    var vigenciaini_reg = $("#vigenciaini_reg").val();
    var vigenciafin_reg = $("#vigenciafin_reg").val();
    var sp_Poliza = $("#sp_Poliza").val();
    var sp_Plan = $("#sp_Plan").val();

    var color_reg = $("#color_reg").val();
    var celular_reg = $("#celular_reg").val();
    var telefono_reg = $("#telefono_reg").val();
    var email_reg = $("#email_reg").val();
    var nropoliza_reg = $("#nropoliza_reg").val();
    var formapago_reg = $("#sp_FormaPago").val();

    if (sp_TipoDocumento == 6) {
        var vnomcontacto = $("#nomcontacto_reg").val(); //de ser ruc
        sp_EstadoCivil = 1;
        nombres_reg = $("#rsocial_reg").val();
        paterno_reg = "-";
        materno_reg = "-";
        telefono_reg = 0;
        celular_reg = 0;

    } else {
        var vnomcontacto = "-" // de ser dni

    }


    fecnaci_reg = fecnaci_reg_prev.toString();

    var sumaaseguradapost = (parseFloat(sumaasegurada_reg).toFixed(2)).toString();

    $.ajax({
        type: "POST",
        url: "../Services/RegistrarPoliza",
        //data: "{DetallesVehi:'" + DetallesVehi+ "',smidtablatipopoliza:'" + parseInt(sp_Poliza) + "', vplaca:'" + placa_reg + "', smidmodelo:'" + parseInt(sp_ModeloVehiculo) + "', smaniofabrica:'" + parseInt(sp_anioFabricacion) + "', vmotor:'" + nromotor_reg + "', svin:'" + vin_reg + "', smnroasiento:'" + parseInt(nroasientos_reg) + "', vcolor:'" + color_reg + "', desumaasegurada:'" + sumaaseguradapost + "', smidtablaclasevehiculo:'" + 1 + "', idnrodocumento:'" + nrodocumento_reg + "', vnombres:'" + nombres_reg + "', vcelular:'" + celular_reg + "', vtelefono1:'" + telefono_reg + "', vemail:'" + email_reg + "', vreferencia:'" + referencia_reg + "', vnumero:'" + numeroubi_reg + "', vnombrevia:'" + direccion_reg + "', smIdTipoVia:'" + parseInt(sp_TipoVia) + "', smestadocivil:'" + parseInt(sp_EstadoCivil) + "', vdepartamento:'" + sp_Departamento + "', vprovincia:'" + sp_Provincia + "', vdistrito:'" + sp_Distrito + "', dfechanac:'" + fecnaci_reg + "', btsexo:'" + parseInt(sp_Sexo) + "', vapellidopat:'" + paterno_reg + "', vapellidomat:'" + materno_reg + "', idpoliza:'" + nropoliza_reg + "', sminacionalidad:'" + sp_Nacionalidad + "', vnomcontacto:'" + vnomcontacto +
        //    "', smidmarca:'" + sp_MarcaVehiculo + "', smidtipodocumento:'" + sp_TipoDocumento + "', serie:'" + nroserie_reg + "'}",
        data: "{DetallesVehi:'" + DetallesVehi + "',smidtablatipopoliza:'" + parseInt(sp_Poliza) + "', vplaca:'" + placa_reg + "', smidmodelo:'" + parseInt(sp_ModeloVehiculo) + "', smaniofabrica:'" + parseInt(sp_anioFabricacion) + "', vmotor:'" + nromotor_reg + "', svin:'" + vin_reg + "', smnroasiento:'" + parseInt(nroasientos_reg) + "', vcolor:'" + color_reg + "', desumaasegurada:'" + sumaaseguradapost + "', smidtablaclasevehiculo:'" + 1 + "', idnrodocumento:'" + nrodocumento_reg + "', vnombres:'" + nombres_reg + "', vcelular:'" + celular_reg + "', vtelefono1:'" + telefono_reg + "', vemail:'" + email_reg + "', vreferencia:'" + referencia_reg + "', vnumero:'" + numeroubi_reg + "', vnombrevia:'" + direccion_reg + "', smIdTipoVia:'" + parseInt(sp_TipoVia) + "', smestadocivil:'" + parseInt(sp_EstadoCivil) + "', vdepartamento:'" + sp_Departamento + "', vprovincia:'" + sp_Provincia + "', vdistrito:'" + sp_Distrito + "', dfechanac:'" + fecnaci_reg + "', btsexo:'" + parseInt(sp_Sexo) + "', vapellidopat:'" + paterno_reg + "', vapellidomat:'" + materno_reg + "', idpoliza:'" + nropoliza_reg + "', sminacionalidad:'" + sp_Nacionalidad + "', vnomcontacto:'" + vnomcontacto +
            "', smidmarca:'" + sp_MarcaVehiculo + "', smidtipodocumento:'" + sp_TipoDocumento + "', formapago:'" + formapago_reg + "', vigenciaini_reg:'" + vigenciaini_reg + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ResponseCrearSucces,
        failure: function (response) {
            alert(response.d);
        },

        error: OnError

    });

    function ResponseCrearSucces(data) {

        var respuesta;

        for (i = 0; i < data.length; i++) {
            respuesta = data[i].respuesta;
        }

        if (respuesta == "true") {
            alert("Se registró satisfactoriamente");
            Link();

        } else {
            alert("Lo sentimos, ocurrió un problema al momento de registrar la poliza");
        }

    }



}


function Link() {
    //window.location = "../Poliza/ListarPoliza?id=" + idinspeccion;
    window.location = "../Poliza/ListarPoliza";
}


//End Agregar Registro Poliza ************************************************************************

function validarEmail(elemento) {

    var texto = document.getElementById(elemento.id).value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!regex.test(texto) && texto.length > 0) {
        alert("Correo inválido");
        $("#email_reg").val("");
        $("#email_reg").focus();
    }
}

function convertirDecimal(elemento) {


    var numero1 = document.getElementById(elemento.id).value.trim();


    if (numero1.length > 0) {
        var numero2 = parseFloat(numero1)

        var numero = numero2;
        var conDecimal = numero.toFixed(2);
        var newnum = conDecimal.toString();
        $("#sumaasegurada_reg").val(newnum);
    } else {
        $("#sumaasegurada_reg").val("0");
    }

}

//Validar Persona


function ValidarPersona() {
    
    var codigo = $('#nrodocumento_reg').val().trim();
    
    if (codigo.trim().length > 0) {

        $.ajax({
            type: "POST",
            url: "../Services/ValidarPersona",
            data: "{idnrodocumento:'" + codigo + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: validarPersonaSucces,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError

        });
        
    }

}

function validarPersonaSucces(data) {
        
    if (data != null) {

        if (data.length > 0) {
            smidpersona = data[0].smidpersona;
            sminacionalidad = data[0].sminacionalidad;
            vnombres = data[0].vnombres;
            vapellidopat = data[0].vapellidopat;
            vapellidomat = data[0].vapellidomat;
            fechanac = data[0].fechanac;
            btsexo = data[0].btsexo;
            smestadocivil = data[0].smestadocivil;
            vtelefono1 = data[0].vtelefono1;
            vcelular = data[0].vcelular;
            vemail = data[0].vemail;
            vubigeo = data[0].vubigeo;
            smIdTipoVia = data[0].smIdTipoVia;
            vnumero = data[0].vnumero;
            vreferencia = data[0].vreferencia;
            vnombrevia = data[0].vnombrevia;
            Departamento = data[0].Departamento;
            Provincia = data[0].Provincia;
            Distrito = data[0].Distrito;
            smidtipodocumento = data[0].smidtipodocumento;
            vnomcontacto = data[0].vnomcontacto;

            MostrarOcultarCampos(smidtipodocumento);
        }        
    }

}


function MostrarOcultarCampos(tipodoc) {

    smidtipodocumento == tipodoc;

    if (tipodoc == 6) {

        //oculta campo apellido paterno
        $('#paterno_reg').addClass('Ocultar');
        $('#t_apepaterno').addClass('Ocultar');
        //oculta campo apellido materno
        $('#t_apematerno').addClass('Ocultar');
        $('#materno_reg').addClass('Ocultar');
        //oculta campo sexo
        $('#t_sexo').addClass('Ocultar');
        $('#sp_Sexo').addClass('Ocultar');
        //oculta campo nacionalidad
        $('#t_nacionalidad').addClass('Ocultar');
        $('#sp_Nacionalidad').addClass('Ocultar');
        //oculta campo fecha nacimiento
        $('#t_fecnacimineto').addClass('Ocultar');
        $('#fecnaci_reg').addClass('Ocultar');
        //oculta campo celular
        $('#t_celular').addClass('Ocultar');
        $('#celular_reg').addClass('Ocultar');
        //oculta campo estado civil
        $('#t_estcivil').addClass('Ocultar');
        $('#sp_EstadoCivil').addClass('Ocultar');
        //oculta campo telf. fijo
        $('#t_telfijo').addClass('Ocultar');
        $('#telefono_reg').addClass('Ocultar');
        //oculta campo email
        $('#t_email').addClass('Ocultar');
        $('#email_reg').addClass('Ocultar');
        //oculta campo nombre
        $('#t_nombre').addClass('Ocultar');
        $('#nombres_reg').addClass('Ocultar');
        //aparece campo razon social
        $('#form_rsocial').removeClass('Ocultar');
        //aparece campo nombre contacto
        $('#form_nomcontacto').removeClass('Ocultar');
        //aparece campo nombre contacto
        $('#nombres_reg').val('');
        $('#paterno_reg').val('');
        $('#materno_reg').val('');
        $('#telefono_reg').val('');
        $('#celular_reg').val('');

        //========TRAE DATOS A LOS CAMPOS========
        $("#sp_TipoDocumento").val(smidtipodocumento);
        $("#rsocial_reg").val(vnombres);
        $("#nomcontacto_reg").val(vnomcontacto);
        $("#sp_Departamento").val(Departamento);

        //$("#sp_Distrito").val(Distrito);
        $("#sp_TipoVia").val(smIdTipoVia);
        $("#numeroubi_reg").val(vnumero);
        $("#direccion_reg").val(vnombrevia);
        $("#referencia_reg").val(vreferencia);

        var timer = setTimeout(function () {
            Spinner_Provincia(Departamento);
            Spinner_Distrito(Departamento, Provincia);
        }, 1000);

        var timer = setTimeout(function () {
            $("#sp_Provincia").val(Provincia);
            $("#sp_Distrito").val(Distrito);
        }, 1500);

    } else {

        //mostrar campo apellido paterno
        $('#paterno_reg').removeClass('Ocultar');
        $('#t_apepaterno').removeClass('Ocultar');
        //mostrar campo apellido materno
        $('#t_apematerno').removeClass('Ocultar');
        $('#materno_reg').removeClass('Ocultar');
        //mostrar campo sexo
        $('#t_sexo').removeClass('Ocultar');
        $('#sp_Sexo').removeClass('Ocultar');
        //mostrar campo nacionalidad
        $('#t_nacionalidad').removeClass('Ocultar');
        $('#sp_Nacionalidad').removeClass('Ocultar');
        //mostrar campo fecha nacimiento
        $('#t_fecnacimineto').removeClass('Ocultar');
        $('#fecnaci_reg').removeClass('Ocultar');
        //mostrar campo celular
        $('#t_celular').removeClass('Ocultar');
        $('#celular_reg').removeClass('Ocultar');
        //mostrar campo estado civil
        $('#t_estcivil').removeClass('Ocultar');
        $('#sp_EstadoCivil').removeClass('Ocultar');
        //mostrar campo telf. fijo
        $('#t_telfijo').removeClass('Ocultar');
        $('#telefono_reg').removeClass('Ocultar');
        //mostrar campo email
        $('#t_email').removeClass('Ocultar');
        $('#email_reg').removeClass('Ocultar');
        //mostrar campo nombre
        $('#t_nombre').removeClass('Ocultar');
        $('#nombres_reg').removeClass('Ocultar');
        //ocultar campo razon social
        $('#form_rsocial').addClass('Ocultar');
        //ocultar campo razon social
        $('#form_nomcontacto').addClass('Ocultar');

        $('#nomcontacto_reg').val(' ');
        //========TRAE DATOS A LOS CAMPOS========
        $("#nombres_reg").val(vnombres);
        $("#sp_Nacionalidad").val(sminacionalidad);
        $("#paterno_reg").val(vapellidopat);
        $("#materno_reg").val(vapellidomat);
        $("#fecnaci_reg").val(fechanac);
        $("#sp_Sexo").val(btsexo);
        $("#sp_EstadoCivil").val(smestadocivil);
        $("#telefono_reg").val(vtelefono1);
        $("#celular_reg").val(vcelular);
        $("#email_reg").val(vemail);
        $("#sp_Departamento").val(Departamento);
        $("#sp_TipoDocumento").val(smidtipodocumento);


        //$("#sp_Distrito").val(Distrito);
        $("#sp_TipoVia").val(smIdTipoVia);
        $("#numeroubi_reg").val(vnumero);
        $("#direccion_reg").val(vnombrevia);
        $("#referencia_reg").val(vreferencia);

        var timer = setTimeout(function () {
            Spinner_Provincia(Departamento);
            Spinner_Distrito(Departamento, Provincia);
        }, 1000);

        var timer = setTimeout(function () {
            $("#sp_Provincia").val(Provincia);
            $("#sp_Distrito").val(Distrito);
        }, 1500);

    }


}

function validarCampoPoli() {
    var ref = $("#referencia_reg").val();

    if (ref.length == 0) {
        $("#referencia_reg").val("-");
    }

}


//Error:
function OnError(data) {
    alert("Error 404...");
}

//endsrcript





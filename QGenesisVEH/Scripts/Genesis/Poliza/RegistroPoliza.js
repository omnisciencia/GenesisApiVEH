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
    Text_IdPoliza();
    VigenciaFecha();
    InhabilitarCajas();

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
            $('#nombres_reg').val(' ');
            $('#paterno_reg').val(' ');
            $('#materno_reg').val(' ');
            $('#telefono_reg').val(0);
            $('#celular_reg').val(0);

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

    //$("#fecnaci_reg").datepicker();

    idpoliza_input = getParameterByName('idpoliza');
    if (idpoliza_input.length > 0) {

        DatosPoliza(idpoliza_input);
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
    $("#sp_ModeloVehiculo").val(data[0].modeloveh);
    $("#nromotor_reg").val(data[0].nromotor);
    $("#vin_reg").val(data[0].vin);
    $("#color_reg").val(data[0].color);
    $("#sp_TipoUso").val(data[0].uso);
    $("#sumaasegurada_reg").val(data[0].suma);
    //$("#nroserie_reg").val("H1500S6S26S2");
    $("#nroserie_reg").val(data[0].nroserie);

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

        $('#nomcontacto_reg').val(' ');

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

    if (data[0].planproducto == "PLATINUM") {
        $("#sp_Plan").val(1);
    }

}





//Llenar Spiners *********************************************************************************

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
function Spinner_ModeloVehiculo(id_marca) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarModeloVehiculo",
        data: "{id_marca:'" + id_marca + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_ModeloVehiculo,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_ModeloVehiculo(data) {
    var selectAgregar = $("#sp_ModeloVehiculo");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].idmodelo + "'>" + data[i].vdescripcion + "</option>");
    }

}

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

    var f = new Date();
    var dia = "" + f.getDate();
    var mes = "" + (f.getMonth() + 1)
    var aniofinal = "" + (f.getFullYear() + 1)

    if (parseInt(dia) < 10) {
        dia = "0" + dia;
    }
    if (parseInt(mes) < 10) {
        mes = "0" + mes;
    }

    var fechaIni = (dia + "/" + mes + "/" + f.getFullYear());
    var fechaFin = (dia + "/" + mes + "/" + aniofinal);

    $("#vigenciaini_reg").val(fechaIni);
    $("#vigenciafin_reg").val(fechaFin);

}

function InhabilitarCajas() {

    $("#vigenciaini_reg").prop("disabled", true);
    $("#vigenciafin_reg").prop("disabled", true);
    // $("#nropoliza_reg").prop("disabled", true);
    //$("#fecnaci_reg").prop("disabled", true);

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
                RegistrarPoliza();
            };
        },
        failure: function (response) {
            alert(response.d);
        },

        error: OnError

    });






}

function RegistrarPoliza() {


    var sp_TipoVehiculo = $("#sp_TipoVehiculo").val();
    var sp_MarcaVehiculo = $("#sp_MarcaVehiculo").val();
    var sp_ModeloVehiculo = $("#sp_ModeloVehiculo").val();
    var placa_reg = $("#placa_reg").val();
    var nroasientos_reg = $("#nroasientos_reg").val();
    var sp_anioFabricacion = $("#sp_anioFabricacion").val();
    var nromotor_reg = $("#nromotor_reg").val();
    var sumaasegurada_reg = $("#sumaasegurada_reg").val();
    var vin_reg = $("#vin_reg").val();
    var nroserie_reg = $("#nroserie_reg").val();
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
        data: "{smidtablatipopoliza:'" + parseInt(sp_Poliza) + "', vplaca:'" + placa_reg + "', smidmodelo:'" + parseInt(sp_ModeloVehiculo) + "', smaniofabrica:'" + parseInt(sp_anioFabricacion) + "', vmotor:'" + nromotor_reg + "', svin:'" + vin_reg + "', smnroasiento:'" + parseInt(nroasientos_reg) + "', vcolor:'" + color_reg + "', desumaasegurada:'" + sumaaseguradapost + "', smidtablaclasevehiculo:'" + 1 + "', idnrodocumento:'" + nrodocumento_reg + "', vnombres:'" + nombres_reg + "', vcelular:'" + celular_reg + "', vtelefono1:'" + telefono_reg + "', vemail:'" + email_reg + "', vreferencia:'" + referencia_reg + "', vnumero:'" + numeroubi_reg + "', vnombrevia:'" + direccion_reg + "', smIdTipoVia:'" + parseInt(sp_TipoVia) + "', smestadocivil:'" + parseInt(sp_EstadoCivil) + "', vdepartamento:'" + sp_Departamento + "', vprovincia:'" + sp_Provincia + "', vdistrito:'" + sp_Distrito + "', dfechanac:'" + fecnaci_reg + "', btsexo:'" + parseInt(sp_Sexo) + "', vapellidopat:'" + paterno_reg + "', vapellidomat:'" + materno_reg + "', idpoliza:'" + nropoliza_reg + "', sminacionalidad:'" + sp_Nacionalidad + "', vnomcontacto:'" + vnomcontacto +
            "', smidmarca:'" + sp_MarcaVehiculo + "', smidtipodocumento:'" + sp_TipoDocumento + "', serie:'" + nroserie_reg + "'}",
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
        $("#sumaasegurada_reg").val("");
    }




}

//Validar Persona


function ValidarPersona(elemento) {


    var num_document = document.getElementById(elemento.id).value.trim();

    $.ajax({
        type: "POST",
        url: "../Services/ValidarPersona",
        data: "{idnrodocumento:'" + num_document + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: validarPersonaSucces,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

function validarPersonaSucces(data) {

    for (i = 0; i < data.length; i++) {
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
    }
    //alert(smidtipodocumento);
    //var numerodocu = $("#nrodocumento_reg").val();
    if (smidtipodocumento == 6) {

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











//Error:
function OnError(data) {
    alert("Error 404...");
}

//endsrcript





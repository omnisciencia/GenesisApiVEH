var gbid = 0;
var idinspeccion_input;

var global_smidpersona;
var global_idpoliza;
var global_idvehiculo;

function InicioPoliza() {

    window.onload = function () {

        
        Spinner_Nacionalidad();
        Spinner_EstadoCivil();
        Spinner_Sexo();
        Spinner_FormaPago();
        //Spinner_EstadoInspeccion();
        Spinner_TipoVehiculo();
        Spinner_MarcaVehiculo();
        Spinner_ModeloVehiculo(1);
        Spinner_TipoCombustible();
        Spinner_TipoCarroceria();
        Spinner_TipoTransmision();
        Spinner_ClaseRodante();
        Spinner_TipoDano();
        DeshabilitarCajas();
        Spinner_EstadoInspeccion();
        
        $("select[name=sp_MarcaVehiculo]").change(function () {
            idmarca = $("#sp_MarcaVehiculo").val();
            Spinner_ModeloVehiculo(idmarca);

        });

        //idinspeccion_input = getParameterByName('id');
        //modo_input = getParameterByName('modo');
        //modo_input2 = getParameterByName('modo2');

        var idinspeccion_input = sessionStorage.getItem("idinspeccion");
        //alert(idinspeccion_input);
        var modo_input = sessionStorage.getItem("modo");
        var modo_estado = sessionStorage.getItem("estado");

        //alert(modo_estado);
        if (modo_input == 'editar' && modo_estado == 'CONCLUIDO') {
            
            
            $("#sp_Nacionalidad").prop("disabled", true);
            $("#sp_EstadoCivil").prop("disabled", true);
            $("#fecnaci_id").prop("disabled", true);
            $("#email_id").prop("disabled", true);
            $("#fono_id").prop("disabled", true);
            $("#cel_id").prop("disabled", true);
            $("#sp_Sexo").prop("disabled", true);

            $("#sp_FormaPago").prop("disabled", true);
            $("#fecinspeccion_id").prop("disabled", true);
            $("#hrinspeccion_id").prop("disabled", true);
            $("#fecrecordatorio_id").prop("disabled", true);
            $("#hrecordatorio").prop("disabled", true);

            $("#sp_TipoVehiculo").prop("disabled", true);
            $("#sp_MarcaVehiculo").prop("disabled", true);
            $("#sp_ModeloVehiculo").prop("disabled", true);
            $("#anioveh_id").prop("disabled", true);
            $("#colorveh_id").prop("disabled", true);
            $("#sp_TipoTransmision").prop("disabled", true);
            $("#sp_ClaseRodante").prop("disabled", true);
            $("#sp_TipoCombustible").prop("disabled", true);
            $("#puertasveh_id").prop("disabled", true);
            $("#sp_TipoCarroceria").prop("disabled", true);
            $("#motorveh_id").prop("disabled", true);
            $("#placaveh_id").prop("disabled", true);
            $("#kilometrajeveh_id").prop("disabled", true);
            $("#vinveh_id").prop("disabled", true);

            $("#chk_aireacond_id").prop("disabled", true);
            $("#chk_lunelectrica_id").prop("disabled", true);
            $("#chk_alarma_id").prop("disabled", true);
            $("#chk_segruedas_id").prop("disabled", true);
            $("#chk_pestilloe_id").prop("disabled", true);
            $("#chk_llantarep_id").prop("disabled", true);
            $("#chk_tapizc_id").prop("disabled", true);
            $("#chk_radoriginal_id").prop("disabled", true);
            $("#chk_parlanteo_id").prop("disabled", true);
            $("#chk_accesomusi_id").prop("disabled", true);
            $("#accobservaciones_id").prop("disabled", true);
            $("#sp_TipoDano").prop("disabled", true);
            $("#observaciones_id").prop("disabled", true);

            $("#sp_farDelantero").prop("disabled", true);
            $("#cant_FarDelantero").prop("disabled", true);
            $("#sp_farPost").prop("disabled", true);
            $("#cant_FarPost").prop("disabled", true);
            $("#sp_farDirec").prop("disabled", true);
            $("#cant_FarDirec").prop("disabled", true);
            $("#sp_farNebli").prop("disabled", true);
            $("#cant_FarNebli").prop("disabled", true);
            $("#sp_EspExterno").prop("disabled", true);
            $("#cant_EspExterno").prop("disabled", true);
            $("#sp_Aros").prop("disabled", true);
            $("#cant_Aros").prop("disabled", true);
            $("#sp_Spoiler").prop("disabled", true);
            $("#cant_Spoilers").prop("disabled", true);
            $("#sp_Mascara").prop("disabled", true);
            $("#sp_Parachoque").prop("disabled", true);
            $("#sp_Consola").prop("disabled", true);
            $("#sp_Tablero").prop("disabled", true);
            $("#sp_Pintura").prop("disabled", true);
            $("#sp_Carroceria").prop("disabled", true);
            $("#sp_EquipoMusic").prop("disabled", true);
            $("#inspector_id").prop("disabled", true);
            $("#btnfoto").prop("disabled", true);

            $("#btguardar").addClass("Ocultar");
            
           // $("#sp_FormaPago").prop("disabled", true);
        } else {
            $("#btvolver").addClass("Ocultar");
        }

        if (modo_input == 'ver') {
            $('#titulo').html('VER - Registro de Inspección');
        }
        else if (modo_input == 'editar') {
            $('#titulo').html('AGREGANDO - Registro de Inspección');
        }

        if (idinspeccion_input.length > 0) {
            DeshabilitarCajas(true);
            DatosPoliza(idinspeccion_input);
            ListarImgInspeccion(idinspeccion_input);
        }
        else {
            DeshabilitarCajas(false);
            Spinner_ModeloVehiculo(1, 1);            
        }

    }

}
function Link2() {
    window.location = "../inspeccion/registroinspeccion";
}

function AbrirConfirm() {
    //var modo_input = getParameterByName('modo');
    var modo_input = sessionStorage.getItem("modo");
    var estado_input = sessionStorage.getItem("estado");
    

    if (modo_input == 'agregar' || modo_input == 'editar') {
      
        //var vinspector = $("#inspector_id").val();


        //if (vinspector.length < 1) {

        //    $("#inspector_id").addClass('input-error');
        //} else {

        //    (document.getElementById('btn_popconfirm')).click();
            
        //}

        (document.getElementById('btn_popconfirm')).click();
        document.getElementById("siconforme_id").checked = true;
        
        
    }  else {
        //alert("nada");
        alert('No se puede guardar la informacion, porque está en modo VER - Registro de Inspección.');
    }
     
   
}
function AbrirConfirm2() {
    (document.getElementById('btn_popconfirm2')).click();
    document.getElementById("sconforme_id").checked = true;
}
function ocultar1() {
    $('#pruebas1').addClass('Ocultar');
    $('#pruebas2').removeClass('Ocultar');

}
function ocultar2() {
    
    $('#pruebas1').removeClass('Ocultar');
    $('#pruebas2').addClass('Ocultar');
}

function GuardarFoto() {

    archivo = $('#myfile').val();
    descripcion = $('#descrip_img_id').val();

    if (archivo.length < 1) {
        alert('Por favor seleccione un archivo');
    } else if (descripcion.length < 1) {
        alert('Por favor ingrese una descripcion');
    } else {

        var f = new Date();
        var dia = "" + f.getDate();
        var mes = "" + (f.getMonth() + 1)
        var hora = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + ".000";

        if (parseInt(dia) < 10) {
            dia = "0" + dia;
        }
        if (parseInt(mes) < 10) {
            mes = "0" + mes;
        }

        //Variables Input:
        var iidinspeccion = idinspeccion_input;
        var fecha = (f.getFullYear() + "-" + mes + "-" + dia + ' ' + hora);

        $.ajax({
            type: "POST",
            url: "../Services/GuardarFotoInspeccion",
            data: "{ iidinspeccion:'" + iidinspeccion + "', fecha:'" + fecha + "', descripcion:'" + descripcion + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: ResponseGuardarImgSucces,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError

        });
        

    }


   
}


function ResponseGuardarImgSucces(data) {

    for (i = 0; i < data.length; i++) {
        nombreImg = data[i].respuesta;
    }

    var formData = new FormData();
    var file = $('#myfile')[0];
    formData.append('file', file.files[0], nombreImg);

    $.ajax({
        url: '../api/fileUpload',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (d) {
            alert('La imagen fue guardada satisfactoriamente')
            ListarImgInspeccion(idinspeccion_input);
            (document.getElementById('btn_cancelargfoto')).click();
        },
        error: function () {
            alert('Ocurrio un problema al guardar la imagen');
        }
    });

}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}




function fechaActual() {

    var f = new Date();
    var dia = "" + f.getDate();
    var mes = "" + (f.getMonth() + 1)
    var hora = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + ".000";

    if (parseInt(dia) < 10) {
        dia = "0" + dia;
    }
    if (parseInt(mes) < 10) {
        mes = "0" + mes;
    }

    var fecha = (f.getFullYear() + "-" + mes + "-" + dia + ' ' + hora);
    //alert(fecha);
}

//Tipo Daño:
function Spinner_TipoDano() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarTipoDano",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_TipoDano,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_TipoDano(data) {
    var selectAgregar = $("#sp_TipoDano");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Tipo Transmision:
function Spinner_TipoTransmision() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarTipoTransmision",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_TipoTransmision,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_TipoTransmision(data) {
    var selectAgregar = $("#sp_TipoTransmision");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Clase Rodante:
function Spinner_ClaseRodante() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarClaseRodante",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_ClaseRodante,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_ClaseRodante(data) {
    var selectAgregar = $("#sp_ClaseRodante");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Tipo Combustible:
function Spinner_TipoCombustible() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarTipoCombustible",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_TipoCombustible,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_TipoCombustible(data) {
    var selectAgregar = $("#sp_TipoCombustible");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
    }

}

//Tipo Carroceria:
function Spinner_TipoCarroceria() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarTipoCarroceria",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_TipoCarroceria,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_TipoCarroceria(data) {
    var selectAgregar = $("#sp_TipoCarroceria");
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
//Modelo Vehiculo: , id_modelo
function Spinner_ModeloVehiculo(id_marca) {

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

                //if (id_marca == 1) {
                //    selectAgregar.val(1);
                //} else {
                //    selectAgregar.val(id_modelo);
                //}
            }
        },
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

//Estado Inspeccion:
function Spinner_EstadoInspeccion() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarEstadoInspeccion",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_EstadoInspeccion,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function llenarSpinner_EstadoInspeccion(data) {
    var selectAgregar = $("#estadoinspecc_id");
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



//Datos Poliza:
function DatosPoliza(idinspeccion) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarDatosPoliza",
        data: "{idinspeccion:'" + idinspeccion + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarDatosPoliza,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function ListarDatosPoliza(data) {

    //alert(data[0].smidpersona);

        //for (i = 0; i < data.length; i++) {            
            dni = data[0].dni;
            nombre = data[0].nombre;
            sexo = data[0].sexo;
            nacionalidad = data[0].nacionalidad;
            ecivil = data[0].ecivil;
            fecnaci = data[0].fecnaci;
            email = data[0].email;
            telf = data[0].telf;
            celu = data[0].celu;
            tipocontratante = data[0].tipocontratante;
            tipodoc = data[0].tipodoc;

            nropoliza = data[0].nropoliza;
            planproducto = data[0].planproducto;
            vigencia = data[0].vigencia;
            tipopoliza = data[0].tipopoliza;
            formapago = data[0].formapago;

            claseveh = data[0].claseveh;
            marcaveh = data[0].marcaveh;
            modeloveh = data[0].modeloveh;
            anio = data[0].anio;
            color = data[0].color;
            nromotor = data[0].nromotor;
            placa = data[0].placa;
            vin = data[0].vin;
            puertas = data[0].puertas;
            nroserie = data[0].nroserie;
            ikilometraje = data[0].ikilometraje;

            fecrecordatorio = data[0].fecrecordatorio;
            horrecordatorio = data[0].horrecordatorio;
            fecinspeccion = data[0].fecinspeccion;
            hrinspeccion = data[0].hrinspeccion;
            estado = data[0].estado;

            smidpersona = data[0].smidpersona;
            idpoliza = data[0].idpoliza;
            idvehiculo = data[0].idvehiculo;
            observaciones = data[0].observaciones;
            obsaccesorio = data[0].obsaccesorio;
            inspector = data[0].inspector;
            emision = data[0].emision;
        //}
            
        global_smidpersona = smidpersona;
        global_idpoliza = idpoliza;
        global_idvehiculo = idvehiculo;
        
       // alert(global_smidpersona);
        
        $("#idcontratante").val(smidpersona);
        $("#sp_TipoVehiculo").val(claseveh);
        $("#sp_MarcaVehiculo").val(marcaveh);
    // $("#sp_ModeloVehiculo").val(modeloveh);

        Spinner_ModeloVehiculo(marcaveh, modeloveh);

        $("#anioveh_id").val(anio);
        $("#colorveh_id").val(color);
        $("#motorveh_id").val(nromotor);
        $("#placaveh_id").val(placa);
        $("#vinveh_id").val(vin);
        $("#puertasveh_id").val(puertas);
        $("#nroserieveh_id").val(nroserie);
        $("#accobservaciones_id").val(observaciones);
        $("#observaciones_id").val(obsaccesorio);
        $("#inspector_id").val(inspector);

        if (ikilometraje != 0) {
            //$("#nroserieveh_id").val(nroserie);
            $("#kilometrajeveh_id").val(ikilometraje);
        }

        if (fecinspeccion == "0000-00-00") {
            $("#fecinspeccion_id").val(fecrecordatorio);
            $("#hrinspeccion_id").val(horrecordatorio);
        }
        else {
            $("#fecinspeccion_id").val(fecinspeccion);
            $("#hrinspeccion_id").val(hrinspeccion);
        }
        

        $("#dni_id").val(dni);
        $("#nombre_id").val(nombre);
        $("#sp_Nacionalidad").val(nacionalidad);
        $("#fecnaci_id").val(fecnaci);
        $("#email_id").val(email);
        $("#fono_id").val(telf);
        $("#cel_id").val(celu);
        $("#sp_Sexo").val(sexo);
        $("#sp_EstadoCivil").val(ecivil);
        $("#tipocontra_id").val(tipocontratante);
        $("#tipodoc_id").val(tipodoc);

        $("#nropoliza_id").val(nropoliza);
        $("#plan_id").val(planproducto);
        $("#vigencia_id").val(vigencia);
        $("#tipoliza_id").val(tipopoliza);
        $("#sp_FormaPago").val(formapago);

        $("#fecrecordatorio_id").val(fecrecordatorio);
        $("#hrecordatorio").val(horrecordatorio);
        
        $("#estadoinspecc_id").val(estado);
        
    


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

//Solo numerico

function justNumbers(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;

    return /\d/.test(String.fromCharCode(keynum));
}

//Deshabilitar Cajas:
function DeshabilitarCajas(habilitado) {
    
    $("#tipocontra_id").prop("disabled", true);
    $("#tipodoc_id").prop("disabled", true);
    $("#dni_id").prop("disabled", true);
    $("#nombre_id").prop("disabled", true);

    $("#nropoliza_id").prop("disabled", habilitado);
    $("#plan_id").prop("disabled", habilitado);
    $("#vigencia_id").prop("disabled", habilitado);
    $("#tipoliza_id").prop("disabled", habilitado);

   
    $("#estadoinspecc_id").prop("disabled", habilitado);

}


//Regsitrar Inspeccion1:
function RegistrarInspeccion_onclick_() {  
    //global_smidpersona
    
    var smidpersona = global_smidpersona;
    var idpoliza = $("#nropoliza_id").val();//global_idpoliza;
    var idvehiculo = global_idvehiculo;
    var sminacionalidad = $("#sp_Nacionalidad").val();
    var smestadocivil = $("#sp_EstadoCivil").val();
    var dfechanac = $("#fecnaci_id").val();
    var vemail = $("#email_id").val();
    var vtelefono1 = $("#fono_id").val();
    var vcelular = $("#cel_id").val();
    var btsexo = $("#sp_Sexo").val();

    var smidtablaformapago = $("#sp_FormaPago").val();

    var smidtipovehiculo = $("#sp_TipoVehiculo").val();
    var smidmarca = $("#sp_MarcaVehiculo").val();
    var smidmodelo = $("#sp_ModeloVehiculo").val();
    var smianiofabricacion = $("#anioveh_id").val();
    var vcolor = $("#colorveh_id").val();
    var smidtipotransmision = $("#sp_TipoTransmision").val();
    var smidclaserodante = $("#sp_ClaseRodante").val();
    var smidtipocombustible = $("#sp_TipoCombustible").val();
    var inroasiento = $("#puertasveh_id").val();
    var smidcarroceria = $("#sp_TipoCarroceria").val();
    var vnromotor = $("#motorveh_id").val();
    var vplaca = $("#placaveh_id").val();
    var vnroserie = $("#nroserieveh_id").val();
    var ikilometraje = $("#kilometrajeveh_id").val();
    var vVin = $("#vinveh_id").val();

    var iidinspeccion = idinspeccion_input;
    var fecInspeccion = $("#fecinspeccion_id").val();
    var hrInspeccion = $("#hrinspeccion_id").val();
    var fecRecordatorio = $("#fecrecordatorio_id").val();
    var hrRecordatorio = $("#hrecordatorio").val();
    var smidtablaestadoinspeccion = 1;
    var vobservacionesaccesorios = $("#accobservaciones_id").val();
    var smidtablatipodano = $("#sp_TipoDano").val();
    var vobservaciones = $("#observaciones_id").val();

    var smidestadofarodelante = $("#sp_farDelantero").val();
    var smcantfarodelante = $("#cant_FarDelantero").val();
    var smidestadofaropost = $("#sp_farPost").val();
    var smcantfaropost = $("#cant_FarPost").val();
    var smestadofarodireccion = $("#sp_farDirec").val();
    var smcantfarodireccion = $("#cant_FarDirec").val();
    var smcantfaroneblinero = $("#cant_FarNebli").val();
    var smestadofaroneblinero = $("#sp_farNebli").val();
    var smcantespejoexterno = $("#cant_EspExterno").val();
    var smestadoespejoexterno = $("#sp_EspExterno").val();
    var smestadospoiler = $("#sp_Spoiler").val();
    var smcantspoiler = $("#cant_Spoilers").val();
    var smtipoaros = $("#sp_Aros").val();
    var smcantaros = $("#cant_Aros").val();
    var smestadomascara = $("#sp_Mascara").val();
    var smpintura = $("#sp_Pintura").val();
    var smtipoparachoque = $("#sp_Parachoque").val();
    var smcarroceria = $("#sp_Carroceria").val();
    var smconsola = $("#sp_Consola").val();
    var smtablero = $("#sp_Tablero").val();
    var btequipomusicafijo = $("#sp_EquipoMusic").val();
    var vinspector = $("#inspector_id").val();

    alert(smidpersona);

    if (document.getElementById('chk_aireacond_id').checked) {
        btaire = 1;
    }else{
        btaire = 0;
    }

    if (document.getElementById('chk_lunelectrica_id').checked) {
        btlunaselectricas = 1;
    } else {
        btlunaselectricas = 0;
    }

    if (document.getElementById('chk_alarma_id').checked) {
        btalarma = 1;
    } else {
        btalarma = 0;
    }

    if (document.getElementById('chk_segruedas_id').checked) {
        btseguroruedas = 1;
    } else {
        btseguroruedas = 0;
    }

    if (document.getElementById('chk_pestilloe_id').checked) {
        btpestillos = 1;
    } else {
        btpestillos = 0;
    }

    if (document.getElementById('chk_llantarep_id').checked) {
        btllantarep = 1;
    } else {
        btllantarep = 0;
    }

    if (document.getElementById('chk_tapizc_id').checked) {
        bttapizcuero = 1;
    } else {
        bttapizcuero = 0;
    }

    if (document.getElementById('chk_radoriginal_id').checked) {
        btequipomusicaorig = 1;
    } else {
        btequipomusicaorig = 0;
    }

    if (document.getElementById('chk_parlanteo_id').checked) {
        btparlantesoriginal = 1;
    } else {
        btparlantesoriginal = 0;
    }

    if (document.getElementById('chk_accesomusi_id').checked) {
        btaccesorios = 1;
    } else {
        btaccesorios = 0;
    }
    //calificacion = 0;
    //if (document.getElementById('sconforme_id').checked) {
    //    calificacion = 1;
    //}
    //if (document.getElementById('nconforme_id').checked) {
    //    calificacion = 2;
    //}

    //if (calificacion == 0) {
    //    calificacion = 2;
    //    //alert("Debe seleccionar un estado de conformidad");
       
    //} else {
    //    $.ajax({
    //        type: "POST",
    //        url: "../Services/RegistrarInspeccion",
    //        data: "{smidpersona:'" + parseInt(smidpersona) + "', idpoliza:'" + parseInt(idpoliza) + "', idvehiculo:'" + parseInt(idvehiculo)
    //            + "', sminacionalidad:'" + sminacionalidad + "', smestadocivil:'" + smestadocivil
    //            + "', dfechanac:'" + dfechanac + "', vemail:'" + vemail + "', vtelefono1:'" + vtelefono1
    //            + "', vcelular:'" + vcelular + "', btsexo:'" + btsexo + "', smidtablaformapago:'" + smidtablaformapago
    //            + "', smidtipovehiculo:'" + parseInt(smidtipovehiculo) + "', smidmarca:'" + smidmarca
    //            + "', smidmodelo:'" + smidmodelo + "', smianiofabricacion:'" + smianiofabricacion
    //            + "', vcolor:'" + vcolor + "', smidtipotransmision:'" + smidtipotransmision + "', smidclaserodante:'" + smidclaserodante
    //            + "', smidtipocombustible:'" + smidtipocombustible + "', inroasiento:'" + inroasiento + "', smidcarroceria:'" + smidcarroceria
    //            + "', vnromotor:'" + vnromotor + "', vplaca:'" + vplaca + "', vnroserie:'" + vnroserie
    //            + "', ikilometraje:'" + ikilometraje + "', vVin:'" + vVin
    //            + "', iidinspeccion:'" + parseInt(iidinspeccion) + "', fecInspeccion:'" + fecInspeccion
    //            + "', hrInspeccion:'" + hrInspeccion + "', fecRecordatorio:'" + fecRecordatorio
    //            + "', hrRecordatorio:'" + hrRecordatorio + "', smidtablaestadoinspeccion:'" + smidtablaestadoinspeccion
    //            + "', btaire:'" + btaire + "', btalarma:'" + btalarma + "', btpestillos:'" + btpestillos
    //            + "', bttapizcuero:'" + bttapizcuero + "', btlunaselectricas:'" + btlunaselectricas + "', btseguroruedas:'" + btseguroruedas
    //            + "', btllantarep:'" + btllantarep + "', btequipomusicaorig:'" + btequipomusicaorig
    //            + "', btparlantesoriginal:'" + btparlantesoriginal + "', btaccesorios:'" + btaccesorios
    //            + "', vobservacionesaccesorios:'" + vobservacionesaccesorios + "', smidtablatipodano:'" + smidtablatipodano
    //            + "', vobservaciones:'" + vobservaciones
    //            + "', smidestadofarodelante:'" + smidestadofarodelante + "', smcantfarodelante:'" + smcantfarodelante
    //            + "', smidestadofaropost:'" + smidestadofaropost + "', smcantfaropost:'" + smcantfaropost
    //            + "', smestadofarodireccion:'" + smestadofarodireccion + "', smcantfarodireccion:'" + smcantfarodireccion
    //            + "', smcantfaroneblinero:'" + smcantfaroneblinero + "', smestadofaroneblinero:'" + smestadofaroneblinero
    //            + "', smcantespejoexterno:'" + smcantespejoexterno + "', smestadoespejoexterno:'" + smestadoespejoexterno
    //            + "', smestadospoiler:'" + smestadospoiler + "', smcantspoiler:'" + smcantspoiler + "', smtipoaros:'" + smtipoaros
    //            + "', smcantaros:'" + smcantaros + "', smestadomascara:'" + smestadomascara
    //            + "', smpintura:'" + smpintura + "', smtipoparachoque:'" + smtipoparachoque
    //            + "', smcarroceria:'" + smcarroceria + "', smconsola:'" + smconsola + "', smtablero:'" + smtablero
    //            + "', btequipomusicafijo:'" + btequipomusicafijo + "', vinspector:'" + vinspector + "', smidcalificacion:'" + calificacion + "'}",

    //        dataType: "json",
    //        contentType: "application/json; charset=utf-8",
    //        success: ResponseCrearSucces,
    //        failure: function (response) {
    //            alert(response.d);
    //        },
    //        error: OnError
    //parseInt(smidpersona)
    //    });
    //}global_smidpersona
    $.ajax({
        type: "POST",
        url: "../Services/RegistrarInspeccion",
        data: "{smidpersona:'" + parseInt(smidpersona) + "', idpoliza:'" + parseInt(idpoliza) + "', idvehiculo:'" + parseInt(idvehiculo)
            + "', sminacionalidad:'" + sminacionalidad + "', smestadocivil:'" + smestadocivil
            + "', dfechanac:'" + dfechanac + "', vemail:'" + vemail + "', vtelefono1:'" + vtelefono1
            + "', vcelular:'" + vcelular + "', btsexo:'" + btsexo + "', smidtablaformapago:'" + smidtablaformapago
            + "', smidtipovehiculo:'" + parseInt(smidtipovehiculo) + "', smidmarca:'" + smidmarca
            + "', smidmodelo:'" + smidmodelo + "', smianiofabricacion:'" + smianiofabricacion
            + "', vcolor:'" + vcolor + "', smidtipotransmision:'" + smidtipotransmision + "', smidclaserodante:'" + smidclaserodante
            + "', smidtipocombustible:'" + smidtipocombustible + "', inroasiento:'" + inroasiento + "', smidcarroceria:'" + smidcarroceria
            + "', vnromotor:'" + vnromotor + "', vplaca:'" + vplaca + "', vnroserie:'" + vnroserie
            + "', ikilometraje:'" + ikilometraje + "', vVin:'" + vVin
            + "', iidinspeccion:'" + parseInt(iidinspeccion) + "', fecInspeccion:'" + fecInspeccion
            + "', hrInspeccion:'" + hrInspeccion + "', fecRecordatorio:'" + fecRecordatorio
            + "', hrRecordatorio:'" + hrRecordatorio + "', smidtablaestadoinspeccion:'" + smidtablaestadoinspeccion
            + "', btaire:'" + btaire + "', btalarma:'" + btalarma + "', btpestillos:'" + btpestillos
            + "', bttapizcuero:'" + bttapizcuero + "', btlunaselectricas:'" + btlunaselectricas + "', btseguroruedas:'" + btseguroruedas
            + "', btllantarep:'" + btllantarep + "', btequipomusicaorig:'" + btequipomusicaorig
            + "', btparlantesoriginal:'" + btparlantesoriginal + "', btaccesorios:'" + btaccesorios
            + "', vobservacionesaccesorios:'" + vobservacionesaccesorios + "', smidtablatipodano:'" + smidtablatipodano
            + "', vobservaciones:'" + vobservaciones
            + "', smidestadofarodelante:'" + smidestadofarodelante + "', smcantfarodelante:'" + smcantfarodelante
            + "', smidestadofaropost:'" + smidestadofaropost + "', smcantfaropost:'" + smcantfaropost
            + "', smestadofarodireccion:'" + smestadofarodireccion + "', smcantfarodireccion:'" + smcantfarodireccion
            + "', smcantfaroneblinero:'" + smcantfaroneblinero + "', smestadofaroneblinero:'" + smestadofaroneblinero
            + "', smcantespejoexterno:'" + smcantespejoexterno + "', smestadoespejoexterno:'" + smestadoespejoexterno
            + "', smestadospoiler:'" + smestadospoiler + "', smcantspoiler:'" + smcantspoiler + "', smtipoaros:'" + smtipoaros
            + "', smcantaros:'" + smcantaros + "', smestadomascara:'" + smestadomascara
            + "', smpintura:'" + smpintura + "', smtipoparachoque:'" + smtipoparachoque
            + "', smcarroceria:'" + smcarroceria + "', smconsola:'" + smconsola + "', smtablero:'" + smtablero
            + "', btequipomusicafijo:'" + btequipomusicafijo + "', vinspector:'" + vinspector + "', smidcalificacion:'" + 2 + "'}",

        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ResponseCrearSucces,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
    

}

function ResponseCrearSucces(data) {

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert("Se registró satisfactoriamente");
        //Link(idinspeccion_input);
        Link2();

    } else {
        alert("Lo sentimos, ocurrió un problema al momento de registrar la Inspeccion");
    }

}

//Registrar Inspeccion2:
function RegistrarInspeccion_onclick2() {

    var smidpersona = global_smidpersona;
    var idpoliza = global_idpoliza;
    var idvehiculo = global_idvehiculo;
    var sminacionalidad = $("#sp_Nacionalidad").val();
    var smestadocivil = $("#sp_EstadoCivil").val();
    var dfechanac = $("#fecnaci_id").val();
    var vemail = $("#email_id").val();
    var vtelefono1 = $("#fono_id").val();
    var vcelular = $("#cel_id").val();
    var btsexo = $("#sp_Sexo").val();

    var smidtablaformapago = $("#sp_FormaPago").val();

    var smidtipovehiculo = $("#sp_TipoVehiculo").val();
    var smidmarca = $("#sp_MarcaVehiculo").val();
    var smidmodelo = $("#sp_ModeloVehiculo").val();
    var smianiofabricacion = $("#anioveh_id").val();
    var vcolor = $("#colorveh_id").val();
    var smidtipotransmision = $("#sp_TipoTransmision").val();
    var smidclaserodante = $("#sp_ClaseRodante").val();
    var smidtipocombustible = $("#sp_TipoCombustible").val();
    var inroasiento = $("#puertasveh_id").val();
    var smidcarroceria = $("#sp_TipoCarroceria").val();
    var vnromotor = $("#motorveh_id").val();
    var vplaca = $("#placaveh_id").val();
    //var vnroserie = $("#nroserieveh_id").val();
    var ikilometraje = $("#kilometrajeveh_id").val();
    var vVin = $("#vinveh_id").val();

    //var iidinspeccion =;
    var iidinspeccion = sessionStorage.getItem("idinspeccion");
    var fecInspeccion = $("#fecinspeccion_id").val();
    var hrInspeccion = $("#hrinspeccion_id").val();
    var fecRecordatorio = $("#fecrecordatorio_id").val();
    var hrRecordatorio = $("#hrecordatorio").val();
    var smidtablaestadoinspeccion = 3;
    var vobservacionesaccesorios = $("#accobservaciones_id").val();
    var smidtablatipodano = $("#sp_TipoDano").val();
    var vobservaciones = $("#observaciones_id").val();

    var smidestadofarodelante = $("#sp_farDelantero").val();
    var smcantfarodelante = $("#cant_FarDelantero").val();
    var smidestadofaropost = $("#sp_farPost").val();
    var smcantfaropost = $("#cant_FarPost").val();
    var smestadofarodireccion = $("#sp_farDirec").val();
    var smcantfarodireccion = $("#cant_FarDirec").val();
    var smcantfaroneblinero = $("#cant_FarNebli").val();
    var smestadofaroneblinero = $("#sp_farNebli").val();
    var smcantespejoexterno = $("#cant_EspExterno").val();
    var smestadoespejoexterno = $("#sp_EspExterno").val();
    var smestadospoiler = $("#sp_Spoiler").val();
    var smcantspoiler = $("#cant_Spoilers").val();
    var smtipoaros = $("#sp_Aros").val();
    var smcantaros = $("#cant_Aros").val();
    var smestadomascara = $("#sp_Mascara").val();
    var smpintura = $("#sp_Pintura").val();
    var smtipoparachoque = $("#sp_Parachoque").val();
    var smcarroceria = $("#sp_Carroceria").val();
    var smconsola = $("#sp_Consola").val();
    var smtablero = $("#sp_Tablero").val();
    var btequipomusicafijo = $("#sp_EquipoMusic").val();
    var vinspector = $("#inspector_id").val();

    

    if (document.getElementById('chk_aireacond_id').checked) {
        btaire = 1;
    } else {
        btaire = 0;
    }

    if (document.getElementById('chk_lunelectrica_id').checked) {
        btlunaselectricas = 1;
    } else {
        btlunaselectricas = 0;
    }

    if (document.getElementById('chk_alarma_id').checked) {
        btalarma = 1;
    } else {
        btalarma = 0;
    }

    if (document.getElementById('chk_segruedas_id').checked) {
        btseguroruedas = 1;
    } else {
        btseguroruedas = 0;
    }

    if (document.getElementById('chk_pestilloe_id').checked) {
        btpestillos = 1;
    } else {
        btpestillos = 0;
    }

    if (document.getElementById('chk_llantarep_id').checked) {
        btllantarep = 1;
    } else {
        btllantarep = 0;
    }

    if (document.getElementById('chk_tapizc_id').checked) {
        bttapizcuero = 1;
    } else {
        bttapizcuero = 0;
    }

    if (document.getElementById('chk_radoriginal_id').checked) {
        btequipomusicaorig = 1;
    } else {
        btequipomusicaorig = 0;
    }

    if (document.getElementById('chk_parlanteo_id').checked) {
        btparlantesoriginal = 1;
    } else {
        btparlantesoriginal = 0;
    }

    if (document.getElementById('chk_accesomusi_id').checked) {
        btaccesorios = 1;
    } else {
        btaccesorios = 0;
    }
    calificacion = 0;
    if (document.getElementById('sconforme_id').checked) {
        calificacion = 1;
    }
    if (document.getElementById('nconforme_id').checked) {
        calificacion = 2;
    }

    if (calificacion == 0) {
        calificacion = 2;
        //alert("Debe seleccionar un estado de conformidad"); smidpersona

    } else {

        /*alert("{smidpersona:'" + smidpersona + "', idpoliza:'" + idpoliza + "', idvehiculo:'" + idvehiculo
                + "', sminacionalidad:'" + sminacionalidad + "', smestadocivil:'" + smestadocivil + "', dfechanac:'" + dfechanac
                + "', vemail:'" + vemail + "', vtelefono1:'" + vtelefono1
                + "', vcelular:'" + vcelular + "', btsexo:'" + btsexo + "', smidtablaformapago:'" + smidtablaformapago
                + "', smidtipovehiculo:'" + smidtipovehiculo + "', smidmarca:'" + smidmarca
                + "', smidmodelo:'" + smidmodelo + "', smianiofabricacion:'" + smianiofabricacion
                + "', vcolor:'" + vcolor + "', smidtipotransmision:'" + smidtipotransmision + "', smidclaserodante:'" + smidclaserodante
                + "', smidtipocombustible:'" + smidtipocombustible + "', inroasiento:'" + inroasiento + "', smidcarroceria:'" + smidcarroceria
                + "', vnromotor:'" + vnromotor + "', vplaca:'" + vplaca 
                + "', ikilometraje:'" + ikilometraje + "', vVin:'" + vVin
                + "', iidinspeccion:'" + iidinspeccion + "', fecInspeccion:'" + fecInspeccion
                + "', hrInspeccion:'" + hrInspeccion + "', fecRecordatorio:'" + fecRecordatorio
                + "', hrRecordatorio:'" + hrRecordatorio + "', smidtablaestadoinspeccion:'" + smidtablaestadoinspeccion
                + "', btaire:'" + btaire + "', btalarma:'" + btalarma + "', btpestillos:'" + btpestillos
                + "', bttapizcuero:'" + bttapizcuero + "', btlunaselectricas:'" + btlunaselectricas + "', btseguroruedas:'" + btseguroruedas
                + "', btllantarep:'" + btllantarep + "', btequipomusicaorig:'" + btequipomusicaorig
                + "', btparlantesoriginal:'" + btparlantesoriginal + "', btaccesorios:'" + btaccesorios
                + "', vobservacionesaccesorios:'" + vobservacionesaccesorios + "', smidtablatipodano:'" + smidtablatipodano
                + "', vobservaciones:'" + vobservaciones
                + "', smidestadofarodelante:'" + smidestadofarodelante + "', smcantfarodelante:'" + smcantfarodelante
                + "', smidestadofaropost:'" + smidestadofaropost + "', smcantfaropost:'" + smcantfaropost
                + "', smestadofarodireccion:'" + smestadofarodireccion + "', smcantfarodireccion:'" + smcantfarodireccion
                + "', smcantfaroneblinero:'" + smcantfaroneblinero + "', smestadofaroneblinero:'" + smestadofaroneblinero
                + "', smcantespejoexterno:'" + smcantespejoexterno + "', smestadoespejoexterno:'" + smestadoespejoexterno
                + "', smestadospoiler:'" + smestadospoiler + "', smcantspoiler:'" + smcantspoiler + "', smtipoaros:'" + smtipoaros
                + "', smcantaros:'" + smcantaros + "', smestadomascara:'" + smestadomascara
                + "', smpintura:'" + smpintura + "', smtipoparachoque:'" + smtipoparachoque
                + "', smcarroceria:'" + smcarroceria + "', smconsola:'" + smconsola + "', smtablero:'" + smtablero
                + "', btequipomusicafijo:'" + btequipomusicafijo + "', vinspector:'" + vinspector + "', smidcalificacion:'" + calificacion + "'}");*/
        //"', vnroserie:'" + vnroserie
        /*$.ajax({
            type: "POST",
            url: "../Services/RegistrarInspeccion",
            data: "{smidpersona:'" + smidpersona + "', idpoliza:'" + idpoliza + "', idvehiculo:'" +idvehiculo
                + "', sminacionalidad:'" + sminacionalidad + "', smestadocivil:'" + smestadocivil + "', dfechanac:'" + dfechanac
                + "', vemail:'" + vemail + "', vtelefono1:'" + vtelefono1
                + "', vcelular:'" + vcelular + "', btsexo:'" + btsexo + "', smidtablaformapago:'" + smidtablaformapago
                + "', smidtipovehiculo:'" + smidtipovehiculo + "', smidmarca:'" + smidmarca
                + "', smidmodelo:'" + smidmodelo + "', smianiofabricacion:'" + smianiofabricacion
                + "', vcolor:'" + vcolor + "', smidtipotransmision:'" + smidtipotransmision + "', smidclaserodante:'" + smidclaserodante
                + "', smidtipocombustible:'" + smidtipocombustible + "', inroasiento:'" + inroasiento + "', smidcarroceria:'" + smidcarroceria
                + "', vnromotor:'" + vnromotor + "', vplaca:'" + vplaca 
                + "', ikilometraje:'" + ikilometraje + "', vVin:'" + vVin
                + "', iidinspeccion:'" + iidinspeccion + "', fecInspeccion:'" + fecInspeccion
                + "', hrInspeccion:'" + hrInspeccion + "', fecRecordatorio:'" + fecRecordatorio
                + "', hrRecordatorio:'" + hrRecordatorio + "', smidtablaestadoinspeccion:'" + smidtablaestadoinspeccion
                + "', btaire:'" + btaire + "', btalarma:'" + btalarma + "', btpestillos:'" + btpestillos
                + "', bttapizcuero:'" + bttapizcuero + "', btlunaselectricas:'" + btlunaselectricas + "', btseguroruedas:'" + btseguroruedas
                + "', btllantarep:'" + btllantarep + "', btequipomusicaorig:'" + btequipomusicaorig
                + "', btparlantesoriginal:'" + btparlantesoriginal + "', btaccesorios:'" + btaccesorios
                + "', vobservacionesaccesorios:'" + vobservacionesaccesorios + "', smidtablatipodano:'" + smidtablatipodano
                + "', vobservaciones:'" + vobservaciones
                + "', smidestadofarodelante:'" + smidestadofarodelante + "', smcantfarodelante:'" + smcantfarodelante
                + "', smidestadofaropost:'" + smidestadofaropost + "', smcantfaropost:'" + smcantfaropost
                + "', smestadofarodireccion:'" + smestadofarodireccion + "', smcantfarodireccion:'" + smcantfarodireccion
                + "', smcantfaroneblinero:'" + smcantfaroneblinero + "', smestadofaroneblinero:'" + smestadofaroneblinero
                + "', smcantespejoexterno:'" + smcantespejoexterno + "', smestadoespejoexterno:'" + smestadoespejoexterno
                + "', smestadospoiler:'" + smestadospoiler + "', smcantspoiler:'" + smcantspoiler + "', smtipoaros:'" + smtipoaros
                + "', smcantaros:'" + smcantaros + "', smestadomascara:'" + smestadomascara
                + "', smpintura:'" + smpintura + "', smtipoparachoque:'" + smtipoparachoque
                + "', smcarroceria:'" + smcarroceria + "', smconsola:'" + smconsola + "', smtablero:'" + smtablero
                + "', btequipomusicafijo:'" + btequipomusicafijo + "', vinspector:'" + vinspector + "', smidcalificacion:'" + calificacion + "'}",
                */


        $.ajax({
            type: "POST",
            url: "../Services/RegistrarInspeccion",
            data: "{smidpersona:'" + smidpersona + "', idpoliza:'" + idpoliza + "', idvehiculo:'" + idvehiculo
                + "', sminacionalidad:'" + sminacionalidad + "', smestadocivil:'" + smestadocivil + "', dfechanac:'" + dfechanac
                + "', vemail:'" + vemail + "', vtelefono1:'" + vtelefono1
                + "', vcelular:'" + vcelular + "', btsexo:'" + btsexo + "', smidtablaformapago:'" + smidtablaformapago
                + "', smidtipovehiculo:'" + smidtipovehiculo + "', smidmarca:'" + smidmarca
                + "', smidmodelo:'" + smidmodelo + "', smianiofabricacion:'" + smianiofabricacion
                + "', vcolor:'" + vcolor + "', smidtipotransmision:'" + smidtipotransmision + "', smidclaserodante:'" + smidclaserodante
                + "', smidtipocombustible:'" + smidtipocombustible + "', inroasiento:'" + inroasiento + "', smidcarroceria:'" + smidcarroceria
                + "', vnromotor:'" + vnromotor + "', vplaca:'" + vplaca
                + "', ikilometraje:'" + ikilometraje + "', vVin:'" + vVin
                + "', iidinspeccion:'" + iidinspeccion + "', fecInspeccion:'" + fecInspeccion
                + "', hrInspeccion:'" + hrInspeccion + "', fecRecordatorio:'" + fecRecordatorio
                + "', hrRecordatorio:'" + hrRecordatorio + "', smidtablaestadoinspeccion:'" + smidtablaestadoinspeccion
                + "', btaire:'" + btaire + "', btalarma:'" + btalarma + "', btpestillos:'" + btpestillos
                + "', bttapizcuero:'" + bttapizcuero + "', btlunaselectricas:'" + btlunaselectricas + "', btseguroruedas:'" + btseguroruedas
                + "', btllantarep:'" + btllantarep + "', btequipomusicaorig:'" + btequipomusicaorig
                + "', btparlantesoriginal:'" + btparlantesoriginal + "', btaccesorios:'" + btaccesorios
                + "', vobservacionesaccesorios:'" + vobservacionesaccesorios + "', smidtablatipodano:'" + smidtablatipodano
                + "', vobservaciones:'" + vobservaciones
                + "', smidestadofarodelante:'" + smidestadofarodelante + "', smcantfarodelante:'" + smcantfarodelante
                + "', smidestadofaropost:'" + smidestadofaropost + "', smcantfaropost:'" + smcantfaropost
                + "', smestadofarodireccion:'" + smestadofarodireccion + "', smcantfarodireccion:'" + smcantfarodireccion
                + "', smcantfaroneblinero:'" + smcantfaroneblinero + "', smestadofaroneblinero:'" + smestadofaroneblinero
                + "', smcantespejoexterno:'" + smcantespejoexterno + "', smestadoespejoexterno:'" + smestadoespejoexterno
                + "', smestadospoiler:'" + smestadospoiler + "', smcantspoiler:'" + smcantspoiler + "', smtipoaros:'" + smtipoaros
                + "', smcantaros:'" + smcantaros + "', smestadomascara:'" + smestadomascara
                + "', smpintura:'" + smpintura + "', smtipoparachoque:'" + smtipoparachoque
                + "', smcarroceria:'" + smcarroceria + "', smconsola:'" + smconsola + "', smtablero:'" + smtablero
                + "', btequipomusicafijo:'" + btequipomusicafijo + "', vinspector:'" + vinspector + "', smidcalificacion:'" + calificacion + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: ResponseCrearSucces2,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError

        });
    }



}
         
function RegistrarInspeccion_onclick() {
    
    var smidpersona = global_smidpersona;
    var idpoliza = global_idpoliza;
    var idvehiculo = global_idvehiculo;
    var sminacionalidad = $("#sp_Nacionalidad").val();
    var smestadocivil = $("#sp_EstadoCivil").val();
    var dfechanac = $("#fecnaci_id").val();
    var vemail = $("#email_id").val();
    var vtelefono1 = $("#fono_id").val();
    var vcelular = $("#cel_id").val();
    var btsexo = $("#sp_Sexo").val();

    var smidtablaformapago = $("#sp_FormaPago").val();

    var smidtipovehiculo = $("#sp_TipoVehiculo").val();
    var smidmarca = $("#sp_MarcaVehiculo").val();
    var smidmodelo = $("#sp_ModeloVehiculo").val();
    var smianiofabricacion = $("#anioveh_id").val();
    var vcolor = $("#colorveh_id").val();
    var smidtipotransmision = $("#sp_TipoTransmision").val();
    var smidclaserodante = $("#sp_ClaseRodante").val();
    var smidtipocombustible = $("#sp_TipoCombustible").val();
    var inroasiento = $("#puertasveh_id").val();
    var smidcarroceria = $("#sp_TipoCarroceria").val();
    var vnromotor = $("#motorveh_id").val();
    var vplaca = $("#placaveh_id").val();
    //var vnroserie = $("#nroserieveh_id").val();
    var ikilometraje = $("#kilometrajeveh_id").val();
    var vVin = $("#vinveh_id").val();

    //var iidinspeccion =;
    var iidinspeccion = sessionStorage.getItem("idinspeccion");
    var fecInspeccion = $("#fecinspeccion_id").val();
    var hrInspeccion = $("#hrinspeccion_id").val();
    var fecRecordatorio = $("#fecrecordatorio_id").val();
    var hrRecordatorio = $("#hrecordatorio").val();
    var smidtablaestadoinspeccion = 1;
    var vobservacionesaccesorios = $("#accobservaciones_id").val();
    var smidtablatipodano = $("#sp_TipoDano").val();
    var vobservaciones = $("#observaciones_id").val();

    var smidestadofarodelante = $("#sp_farDelantero").val();
    var smcantfarodelante = $("#cant_FarDelantero").val();
    var smidestadofaropost = $("#sp_farPost").val();
    var smcantfaropost = $("#cant_FarPost").val();
    var smestadofarodireccion = $("#sp_farDirec").val();
    var smcantfarodireccion = $("#cant_FarDirec").val();
    var smcantfaroneblinero = $("#cant_FarNebli").val();
    var smestadofaroneblinero = $("#sp_farNebli").val();
    var smcantespejoexterno = $("#cant_EspExterno").val();
    var smestadoespejoexterno = $("#sp_EspExterno").val();
    var smestadospoiler = $("#sp_Spoiler").val();
    var smcantspoiler = $("#cant_Spoilers").val();
    var smtipoaros = $("#sp_Aros").val();
    var smcantaros = $("#cant_Aros").val();
    var smestadomascara = $("#sp_Mascara").val();
    var smpintura = $("#sp_Pintura").val();
    var smtipoparachoque = $("#sp_Parachoque").val();
    var smcarroceria = $("#sp_Carroceria").val();
    var smconsola = $("#sp_Consola").val();
    var smtablero = $("#sp_Tablero").val();
    var btequipomusicafijo = $("#sp_EquipoMusic").val();
    var vinspector = $("#inspector_id").val();



    if (document.getElementById('chk_aireacond_id').checked) {
        btaire = 1;
    } else {
        btaire = 0;
    }

    if (document.getElementById('chk_lunelectrica_id').checked) {
        btlunaselectricas = 1;
    } else {
        btlunaselectricas = 0;
    }

    if (document.getElementById('chk_alarma_id').checked) {
        btalarma = 1;
    } else {
        btalarma = 0;
    }

    if (document.getElementById('chk_segruedas_id').checked) {
        btseguroruedas = 1;
    } else {
        btseguroruedas = 0;
    }

    if (document.getElementById('chk_pestilloe_id').checked) {
        btpestillos = 1;
    } else {
        btpestillos = 0;
    }

    if (document.getElementById('chk_llantarep_id').checked) {
        btllantarep = 1;
    } else {
        btllantarep = 0;
    }

    if (document.getElementById('chk_tapizc_id').checked) {
        bttapizcuero = 1;
    } else {
        bttapizcuero = 0;
    }

    if (document.getElementById('chk_radoriginal_id').checked) {
        btequipomusicaorig = 1;
    } else {
        btequipomusicaorig = 0;
    }

    if (document.getElementById('chk_parlanteo_id').checked) {
        btparlantesoriginal = 1;
    } else {
        btparlantesoriginal = 0;
    }

    if (document.getElementById('chk_accesomusi_id').checked) {
        btaccesorios = 1;
    } else {
        btaccesorios = 0;
    }
    calificacion = 0;
    if (document.getElementById('sconforme_id').checked) {
        calificacion = 1;
    }
    if (document.getElementById('nconforme_id').checked) {
        calificacion = 2;
    }

    

   

        /*alert("{smidpersona:'" + smidpersona + "', idpoliza:'" + idpoliza + "', idvehiculo:'" + idvehiculo
                + "', sminacionalidad:'" + sminacionalidad + "', smestadocivil:'" + smestadocivil + "', dfechanac:'" + dfechanac
                + "', vemail:'" + vemail + "', vtelefono1:'" + vtelefono1
                + "', vcelular:'" + vcelular + "', btsexo:'" + btsexo + "', smidtablaformapago:'" + smidtablaformapago
                + "', smidtipovehiculo:'" + smidtipovehiculo + "', smidmarca:'" + smidmarca
                + "', smidmodelo:'" + smidmodelo + "', smianiofabricacion:'" + smianiofabricacion
                + "', vcolor:'" + vcolor + "', smidtipotransmision:'" + smidtipotransmision + "', smidclaserodante:'" + smidclaserodante
                + "', smidtipocombustible:'" + smidtipocombustible + "', inroasiento:'" + inroasiento + "', smidcarroceria:'" + smidcarroceria
                + "', vnromotor:'" + vnromotor + "', vplaca:'" + vplaca 
                + "', ikilometraje:'" + ikilometraje + "', vVin:'" + vVin
                + "', iidinspeccion:'" + iidinspeccion + "', fecInspeccion:'" + fecInspeccion
                + "', hrInspeccion:'" + hrInspeccion + "', fecRecordatorio:'" + fecRecordatorio
                + "', hrRecordatorio:'" + hrRecordatorio + "', smidtablaestadoinspeccion:'" + smidtablaestadoinspeccion
                + "', btaire:'" + btaire + "', btalarma:'" + btalarma + "', btpestillos:'" + btpestillos
                + "', bttapizcuero:'" + bttapizcuero + "', btlunaselectricas:'" + btlunaselectricas + "', btseguroruedas:'" + btseguroruedas
                + "', btllantarep:'" + btllantarep + "', btequipomusicaorig:'" + btequipomusicaorig
                + "', btparlantesoriginal:'" + btparlantesoriginal + "', btaccesorios:'" + btaccesorios
                + "', vobservacionesaccesorios:'" + vobservacionesaccesorios + "', smidtablatipodano:'" + smidtablatipodano
                + "', vobservaciones:'" + vobservaciones
                + "', smidestadofarodelante:'" + smidestadofarodelante + "', smcantfarodelante:'" + smcantfarodelante
                + "', smidestadofaropost:'" + smidestadofaropost + "', smcantfaropost:'" + smcantfaropost
                + "', smestadofarodireccion:'" + smestadofarodireccion + "', smcantfarodireccion:'" + smcantfarodireccion
                + "', smcantfaroneblinero:'" + smcantfaroneblinero + "', smestadofaroneblinero:'" + smestadofaroneblinero
                + "', smcantespejoexterno:'" + smcantespejoexterno + "', smestadoespejoexterno:'" + smestadoespejoexterno
                + "', smestadospoiler:'" + smestadospoiler + "', smcantspoiler:'" + smcantspoiler + "', smtipoaros:'" + smtipoaros
                + "', smcantaros:'" + smcantaros + "', smestadomascara:'" + smestadomascara
                + "', smpintura:'" + smpintura + "', smtipoparachoque:'" + smtipoparachoque
                + "', smcarroceria:'" + smcarroceria + "', smconsola:'" + smconsola + "', smtablero:'" + smtablero
                + "', btequipomusicafijo:'" + btequipomusicafijo + "', vinspector:'" + vinspector + "', smidcalificacion:'" + calificacion + "'}");*/
        //"', vnroserie:'" + vnroserie
        /*$.ajax({
            type: "POST",
            url: "../Services/RegistrarInspeccion",
            data: "{smidpersona:'" + smidpersona + "', idpoliza:'" + idpoliza + "', idvehiculo:'" +idvehiculo
                + "', sminacionalidad:'" + sminacionalidad + "', smestadocivil:'" + smestadocivil + "', dfechanac:'" + dfechanac
                + "', vemail:'" + vemail + "', vtelefono1:'" + vtelefono1
                + "', vcelular:'" + vcelular + "', btsexo:'" + btsexo + "', smidtablaformapago:'" + smidtablaformapago
                + "', smidtipovehiculo:'" + smidtipovehiculo + "', smidmarca:'" + smidmarca
                + "', smidmodelo:'" + smidmodelo + "', smianiofabricacion:'" + smianiofabricacion
                + "', vcolor:'" + vcolor + "', smidtipotransmision:'" + smidtipotransmision + "', smidclaserodante:'" + smidclaserodante
                + "', smidtipocombustible:'" + smidtipocombustible + "', inroasiento:'" + inroasiento + "', smidcarroceria:'" + smidcarroceria
                + "', vnromotor:'" + vnromotor + "', vplaca:'" + vplaca 
                + "', ikilometraje:'" + ikilometraje + "', vVin:'" + vVin
                + "', iidinspeccion:'" + iidinspeccion + "', fecInspeccion:'" + fecInspeccion
                + "', hrInspeccion:'" + hrInspeccion + "', fecRecordatorio:'" + fecRecordatorio
                + "', hrRecordatorio:'" + hrRecordatorio + "', smidtablaestadoinspeccion:'" + smidtablaestadoinspeccion
                + "', btaire:'" + btaire + "', btalarma:'" + btalarma + "', btpestillos:'" + btpestillos
                + "', bttapizcuero:'" + bttapizcuero + "', btlunaselectricas:'" + btlunaselectricas + "', btseguroruedas:'" + btseguroruedas
                + "', btllantarep:'" + btllantarep + "', btequipomusicaorig:'" + btequipomusicaorig
                + "', btparlantesoriginal:'" + btparlantesoriginal + "', btaccesorios:'" + btaccesorios
                + "', vobservacionesaccesorios:'" + vobservacionesaccesorios + "', smidtablatipodano:'" + smidtablatipodano
                + "', vobservaciones:'" + vobservaciones
                + "', smidestadofarodelante:'" + smidestadofarodelante + "', smcantfarodelante:'" + smcantfarodelante
                + "', smidestadofaropost:'" + smidestadofaropost + "', smcantfaropost:'" + smcantfaropost
                + "', smestadofarodireccion:'" + smestadofarodireccion + "', smcantfarodireccion:'" + smcantfarodireccion
                + "', smcantfaroneblinero:'" + smcantfaroneblinero + "', smestadofaroneblinero:'" + smestadofaroneblinero
                + "', smcantespejoexterno:'" + smcantespejoexterno + "', smestadoespejoexterno:'" + smestadoespejoexterno
                + "', smestadospoiler:'" + smestadospoiler + "', smcantspoiler:'" + smcantspoiler + "', smtipoaros:'" + smtipoaros
                + "', smcantaros:'" + smcantaros + "', smestadomascara:'" + smestadomascara
                + "', smpintura:'" + smpintura + "', smtipoparachoque:'" + smtipoparachoque
                + "', smcarroceria:'" + smcarroceria + "', smconsola:'" + smconsola + "', smtablero:'" + smtablero
                + "', btequipomusicafijo:'" + btequipomusicafijo + "', vinspector:'" + vinspector + "', smidcalificacion:'" + calificacion + "'}",
                */

        
        $.ajax({
            type: "POST",
            url: "../Services/RegistrarInspeccion",
            data: "{smidpersona:'" + smidpersona + "', idpoliza:'" + idpoliza + "', idvehiculo:'" + idvehiculo
                + "', sminacionalidad:'" + sminacionalidad + "', smestadocivil:'" + smestadocivil + "', dfechanac:'" + dfechanac
                + "', vemail:'" + vemail + "', vtelefono1:'" + vtelefono1
                + "', vcelular:'" + vcelular + "', btsexo:'" + btsexo + "', smidtablaformapago:'" + smidtablaformapago
                + "', smidtipovehiculo:'" + smidtipovehiculo + "', smidmarca:'" + smidmarca
                + "', smidmodelo:'" + smidmodelo + "', smianiofabricacion:'" + smianiofabricacion
                + "', vcolor:'" + vcolor + "', smidtipotransmision:'" + smidtipotransmision + "', smidclaserodante:'" + smidclaserodante
                + "', smidtipocombustible:'" + smidtipocombustible + "', inroasiento:'" + inroasiento + "', smidcarroceria:'" + smidcarroceria
                + "', vnromotor:'" + vnromotor + "', vplaca:'" + vplaca
                + "', ikilometraje:'" + ikilometraje + "', vVin:'" + vVin
                + "', iidinspeccion:'" + iidinspeccion + "', fecInspeccion:'" + fecInspeccion
                + "', hrInspeccion:'" + hrInspeccion + "', fecRecordatorio:'" + fecRecordatorio
                + "', hrRecordatorio:'" + hrRecordatorio + "', smidtablaestadoinspeccion:'" + smidtablaestadoinspeccion
                + "', btaire:'" + btaire + "', btalarma:'" + btalarma + "', btpestillos:'" + btpestillos
                + "', bttapizcuero:'" + bttapizcuero + "', btlunaselectricas:'" + btlunaselectricas + "', btseguroruedas:'" + btseguroruedas
                + "', btllantarep:'" + btllantarep + "', btequipomusicaorig:'" + btequipomusicaorig
                + "', btparlantesoriginal:'" + btparlantesoriginal + "', btaccesorios:'" + btaccesorios
                + "', vobservacionesaccesorios:'" + vobservacionesaccesorios + "', smidtablatipodano:'" + smidtablatipodano
                + "', vobservaciones:'" + vobservaciones
                + "', smidestadofarodelante:'" + smidestadofarodelante + "', smcantfarodelante:'" + smcantfarodelante
                + "', smidestadofaropost:'" + smidestadofaropost + "', smcantfaropost:'" + smcantfaropost
                + "', smestadofarodireccion:'" + smestadofarodireccion + "', smcantfarodireccion:'" + smcantfarodireccion
                + "', smcantfaroneblinero:'" + smcantfaroneblinero + "', smestadofaroneblinero:'" + smestadofaroneblinero
                + "', smcantespejoexterno:'" + smcantespejoexterno + "', smestadoespejoexterno:'" + smestadoespejoexterno
                + "', smestadospoiler:'" + smestadospoiler + "', smcantspoiler:'" + smcantspoiler + "', smtipoaros:'" + smtipoaros
                + "', smcantaros:'" + smcantaros + "', smestadomascara:'" + smestadomascara
                + "', smpintura:'" + smpintura + "', smtipoparachoque:'" + smtipoparachoque
                + "', smcarroceria:'" + smcarroceria + "', smconsola:'" + smconsola + "', smtablero:'" + smtablero
                + "', btequipomusicafijo:'" + btequipomusicafijo + "', vinspector:'" + vinspector + "', smidcalificacion:'" + calificacion + "'}",
            dataType: "json",            
            contentType: "application/json; charset=utf-8",
            success: ResponseCrearSucces,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError

        });
    



}

function ResponseCrearSucces2(data) {

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {

        var idinspeccion_input =  sessionStorage.getItem("idinspeccion");

        ReporteInspeccion(idinspeccion_input);

        alert("Se registró satisfactoriamente");        
        Link(idinspeccion_input);

    } else {
        alert("Lo sentimos, ocurrió un problema al momento de registrar la Inspeccion");
    }

}


function ReporteInspeccion(idinspeccion_input) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarReporteInspeccion",
        data: "{iidinspeccion:'" + idinspeccion_input + "'}",
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
        estado = data[0].estado;

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


    nombre_env = nombre;
    nrodoc_env = nrodoc;
    celular_env = celular;

    fecha_env = fecha;
    hora_env = hora + " hrs.";

    placa_env = placa;
    marca_env = MaysPrimera(marca.toLowerCase());
    modelo_env = MaysPrimera(modelo.toLowerCase());
    color_env = MaysPrimera(color.toLowerCase());
    nroserie_env = nroserie;
    nrovin_env = nrovin;
    kilometraje_env = kilometraje + " Km";
    estado_env = estado;

    if (cadenaAccesoriosAdicionados.length < 1) {
        accesorios_env = "Ninguno";
    } else {
        accesorios_env = cadenaAccesoriosAdicionados + ".";
    }

    observaciones_env = observaciones;

    var email_env = $("#email_id").val();
    var asunto_env = "Noreply";

    $.ajax({
        type: "POST",
        url: "../Services/EnviarCorreo",
        data: "{ asuntop:'" + asunto_env
           + "', nombre:'" + nombre_env
            + "', dni:'" + nrodoc_env
             + "', celular:'" + celular_env
              + "', fecha:'" + fecha_env
               + "', hora:'" + hora_env
                + "', placa:'" + placa_env
                 + "', marca:'" + marca_env
                  + "', modelo:'" + modelo_env
                   + "', color:'" + color_env
                    + "', nroserie:'" + nroserie_env
                     + "', nrovin:'" + nrovin_env
                      + "', km:'" + kilometraje_env
                       + "', estado:'" + estado_env
                        + "', accesorios:'" + accesorios_env
                         + "', observaciones:'" + observaciones_env
            + "', destinop:'" + email_env + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ResponseEnviarSucces,
        failure: function (response) {
            alert(response.d);
        },

        error: ResponseEnviarSucces

    });



}

function ResponseEnviarSucces(){}

function MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Redireccionar:
function Link(idinspeccion) {

    window.location = "../Inspeccion/ReporteInspeccion";

    sessionStorage.setItem("idinspeccion", idinspeccion);

}
//Redireccionar2:
function Link2() {

    window.location = "../Consultas/Inspeccion";

    sessionStorage.setItem("idinspeccion", idinspeccion);
}

//Guardar Foto
//function guardarFoto() {
//    var laURLDeLaVista = 'GuardarImagen';
//    $.ajax({
//        cache: false,
//        async: true,
//        type: "GET",
//        url: laURLDeLaVista,
//        data: {},
//        success: function (response) {
//            $('#resultado').html('');
//            $('#resultado').html(response);
//        }
//    });
//}

//Listar Imagenes
function ListarImgInspeccion(codinspeccion) {


    $.ajax({
        type: "POST",
        url: "../Services/ListarImgInspeccion",
        data: "{codinspeccion:'" + parseInt(codinspeccion) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarImgInspeccionBody,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

function ListarImgInspeccionBody(data){
    var tbody = $("#body_foto");
    tbody.empty();

    for (i = 0; i < data.length; i++) {      

        fun_eliminar = 'verFoto("' + data[i].idimagen + '", "' + data[i].descripcion + '")';
        contador = parseInt(i) + 1;

        tbody.append("<tr>" +
            "<td>" + contador + "</td>" +
            "<td>" + data[i].descripcion + "</td>" +
            "<td>" + data[i].hora + "</td>" +            
            "<td><input type='button' onclick = '" + fun_eliminar + "' value='ver mas' class='btn_badge' data-toggle='modal' data-target='#ver_foto' id=btnVer_" + i + " /></td>" +
            "</tr>");
    }

}

function verFoto(idimagen, descripcion) {
    var mbody = $("#bodymodal");
    mbody.empty();
    mbody.append(
       
        "<img src='../documents/" + idimagen + ".jpg' width='100%'/>"
       
       );

    $("#descrip_img").val(descripcion);
    $("#descrip_img").prop("disabled", true);

}




//Error:
function OnError(data) {
    alert("Error 404...");
}

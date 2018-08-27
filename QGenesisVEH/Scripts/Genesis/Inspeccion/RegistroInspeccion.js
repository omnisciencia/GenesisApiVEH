var gbid = 0;
var idinspeccion_input;

var global_smidpersona;
var global_idpoliza;
var global_idvehiculo;

function InicioPoliza() {

    window.onload = function () {       


        idinspeccion_input = getParameterByName('id');      

        
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
        DatosPoliza(idinspeccion_input);
        ListarImgInspeccion(idinspeccion_input);

    }

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
        url: '/api/fileUpload',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (d) {
            alert('La imagen fue guardada satisfactoriamente')
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
    alert(fecha);
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
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
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
        selectAgregar.append("<option value='" + data[i].smidmodelo + "'>" + data[i].vdescripcion + "</option>");
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
function DatosPoliza(idpoliza) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarDatosPoliza",
        data: "{idpoliza:'" + idpoliza + "'}",
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

        for (i = 0; i < data.length; i++) {            
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
        }

        global_smidpersona = smidpersona;
        global_idpoliza = idpoliza;
        global_idvehiculo = idvehiculo;

        $("#sp_TipoVehiculo").val(claseveh);
        $("#sp_MarcaVehiculo").val(marcaveh);
        $("#sp_ModeloVehiculo").val(modeloveh);
        $("#anioveh_id").val(anio);
        $("#colorveh_id").val(color);
        $("#motorveh_id").val(nromotor);
        $("#placaveh_id").val(placa);
        $("#vinveh_id").val(vin);
        $("#puertasveh_id").val(puertas);

        if (ikilometraje != 0) {
            $("#nroserieveh_id").val(nroserie);
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
        selectAgregar.append("<option value='" + data[i].smiddetalle + "'>" + data[i].vdescripcion + "</option>");
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
function DeshabilitarCajas(){
    $("#tipocontra_id").prop("disabled", true);
    $("#tipodoc_id").prop("disabled", true);
    $("#dni_id").prop("disabled", true);
    $("#nombre_id").prop("disabled", true);

    $("#nropoliza_id").prop("disabled", true);
    $("#plan_id").prop("disabled", true);
    $("#vigencia_id").prop("disabled", true);
    $("#tipoliza_id").prop("disabled", true);

    $("#estadoinspecc_id").prop("disabled", true);

}


//Regsitrar Inspeccion:
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

    if (vinspector.length < 1){
        $("#inspector_id").addClass('input-error');
    } else {
        $.ajax({
            type: "POST",
            url: "../Services/RegistrarInspeccion",
            data: "{smidpersona:'" + parseInt(smidpersona) + "', idpoliza:'" + parseInt(idpoliza) + "', idvehiculo:'" + parseInt(idvehiculo)
                + "', sminacionalidad:'" + sminacionalidad + "', smestadocivil:'" + smestadocivil
                + "', dfechanac:'" + dfechanac + "', vemail:'" + vemail + "', vtelefono1:'" + vtelefono1
                + "', vcelular:'" + vcelular + "', btsexo:'" + btsexo + "', smidtablaformapago:'" + smidtablaformapago
                + "', smidtipovehiculo:'" + parseInt(28) + "', smidmarca:'" + smidmarca
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
                + "', btequipomusicafijo:'" + btequipomusicafijo + "', vinspector:'" + vinspector + "'}",

            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: ResponseCrearSucces,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError

        });
    }

    

}

function ResponseCrearSucces(data) {

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert("Se registró satisfactoriamente");
        Link(idinspeccion_input);

    } else {
        alert("Lo sentimos, ocurrió un problema al momento de registrar la Inspeccion");
    }

}

//Redireccionar:
function Link(idinspeccion) {

    window.location = "../Inspeccion/ReporteInspeccion?id=" + idinspeccion;

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

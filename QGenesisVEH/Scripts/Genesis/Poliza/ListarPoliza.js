window.onload = function () {

    $("#fechaini").val(FechaActual());
    $("#fechafin").val(FechaActual());
    ListarGrilla();

    $("#chk_fec_ini").click(function () {
        if (this.checked) {
            
            $("#fechaini").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
            $("#fechaini").val("");
            $("#fechafin").val("");
            
        }
        else {
            
            $("#fechaini").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#fechaini").val("");
            $("#fechafin").val("");
            
        }
    });
    
}

function FechaActual() {
    var f = new Date();
    var dia = "" + f.getDate();
    var mes = "" + (f.getMonth() + 1)

    if (parseInt(dia) < 10) {
        dia = "0" + dia;
    }
    if (parseInt(mes) < 10) {
        mes = "0" + mes;
    }
    var fecha = (f.getFullYear() + "-" + mes + "-" + dia);
    return fecha;
}



//Lista poliza
function ListarPoliza(idpoliza, placa, fechaini, fechafin, nombre, pagina, RegPorPag) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarPoliza",
        data: "{idpoliza:'" + idpoliza + "', placa:'" + placa + "', fechaini:'" + fechaini + "', fechafin:'" + fechafin + "', nombre:'" + nombre + "', NroDePagina:'" + pagina + "', RegPorPag:'" + RegPorPag + "'}",
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
    var regporpag = "10";
    var TotalRegistros = "1";
    var i = 1;

    select.empty();

    if (data.length > 1) {
        if (parseInt(data[1].TotalRegistros) > parseInt(regporpag)) {

            for (i = 1; i <= Math.ceil(parseInt(data[1].TotalRegistros) / parseInt(regporpag)) ; i++) {
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


    $("#Pagina").val(pagina);


    var tabla = $("#GridListar");
    tabla.empty();
    tabla.append("<thead class='bg-blues'>" +
                "<tr>" +
                "<td style='color:#fff;'>Nro. Poliza</td>" +
                "<td>Contratante</td>" +
                "<td>Placa</td>" +
                //"<td>Marca</td>" +
                "<td>Fecha de Emision</td>" +
                "<td>Estado</td>" +
                "<td></td>" +
                "<td></td>" +
                "</tr>" +
                "</thead>");


    if (data.length > 0) {
        tabla.append("<tbody>")
        for (i = 0; i < data.length; i++) {
            tabla.append(
                        "<tr>" +
                        "<td>" + data[i].idpoliza + "</td>" +
                        "<td>" + data[i].Persona + "</td>" +
                        "<td>" + data[i].vplaca + "</td>" +
                        //"<td>" + data[i].Marca + "</td>" +
                        "<td>" + data[i].Emision + "</td>" +
                        "<td>" + data[i].Estado + "</td>" +                        
                        "<td><input type=button onclick = Link('" + data[i].idpoliza + "','ver') value=Ver style=width:70px class=btn_customer btn-secondary/></td>" +
                        //"<td><input type=button onclick = Link('" + data[i].idpoliza + "') value=Editar style=width:70px class=btn_customer btn-secondary/></td>" +
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



function Link(idpoliza,modo) {

    window.location = "../Poliza/RegistroPoliza?idpoliza=" + idpoliza +"&modo="+modo;

    //$.redirect(surl,
    //{
    //    alarmhistoryid: alarmid, evento: even
    //}, "post", "");
}





function ListarGrilla() {
    //alert("prueba");

    var idpoliza = $("#idpoliza").val();
    var placa = $("#placa").val();
    var fechaini = $("#fechaini").val();
    var fechafin = $("#fechafin").val();
    var nombre = $("#contratante").val();
    var pagina = $("#Pagina").val();
    var regporpag = "10";

    ListarPoliza(idpoliza, placa, fechaini, fechafin, nombre, pagina, regporpag);

}

$("#btnBuscar").click(function () {

    ListarGrilla();

});

$("#btnLimpiar").click(function () {

    //$("#idinspeccion").val('');
    $("#idpoliza").val('');
    $("#placa").val('');
    $("#fechaini").val('');
    $("#fechafin").val('');
    $("#contratante").val('');

});

$("#btnNuevo").click(function () {
    // window.location = "../Poliza/RegistroPoliza";
    var idpoliza = ''
    var modo = 'agregar'
    window.location = "../Poliza/RegistroPoliza?idpoliza=" + idpoliza + "&modo=" + modo;
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
    var a = $('select option').size();

    if (c <= a) {
        $("#Pagina").val(c);
        ListarGrilla();
    }

});


//Link con el metodo POST
//function Link(idinspeccion) {
//    //alert(idinspeccion);
//    //window.location = "../Poliza/ListarPoliza?id=" + idinspeccion;
//}



//Error:
function OnError(data) {
    alert("Error 404...");
}


var global_finfec;
var global_finfec2;
window.onload = function () {
    var finfec ="";
    global_finfec2 = "0";

    $("#fechaini").val(FechaActual())
    $("#fechafin").val(FechaActual())
    $("#fechaini2").val(FechaActual())
    $("#fechaini2").prop("max", FechaActual());
    ListarGrilla();

    $("#chk_fec_ini").click(function () {
        if (this.checked) {

            $("#fechaini").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
        }
        else {

            $("#fechaini").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
        }
    });

    $("#chk_sinfec_program").click(function () {
        if (this.checked) {
            
            finfec = "sin programacion";
            global_finfec = finfec;
            //alert(global_finfec);
            $("#chk_inspec_vencida").prop("disabled", true);
        }
        else {
            
            finfec = "con programacion";
            global_finfec = finfec;
            //alert(global_finfec);
            $("#chk_inspec_vencida").prop("disabled", false);
        }
    });
    $("#chk_inspec_vencida").click(function () {
        if (this.checked) {
            finfec = "vencida"
            global_finfec = finfec;
            $("#fechafin").prop("disabled", true);
            $("#chk_fec_ini").prop("disabled", true);
            $("#chk_sinfec_program").prop("disabled", true);
            $("#fechaini2").removeClass("Ocultar");
            $("#fechaini").addClass("Ocultar");
            
        }
        else {
            finfec = "con programacion";
            global_finfec = finfec;
            $("#fechafin").prop("disabled", false);
            $("#chk_fec_ini").prop("disabled", false);
            $("#chk_sinfec_program").prop("disabled", false);
            $("#fechaini2").addClass("Ocultar");
            $("#fechaini").removeClass("Ocultar");
            
        }
    });

}


function FechaActual() {
    var f = new Date();
    var dia = "" + f.getDate();
    var mes = "" + (f.getMonth() + 1)
    //var hora = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + ".000";

    if (parseInt(dia) < 10) {
        dia = "0" + dia;
    }
    if (parseInt(mes) < 10) {
        mes = "0" + mes;
    }
    var fecha = (f.getFullYear() + "-" + mes + "-" + dia);
    //var fecha = (f.getFullYear() + "-" + mes + "-" + dia + ' ' + hora);
    return fecha;
}

//

//Lista inspeccion
function ListarInspeccion(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre, estado, pagina, regporpag) {

    $.ajax({
        type: "POST",
        url: "../Services/ListarInspeccion2",
        data: "{iidinspeccion:'" + iidinspeccion + "', idpoliza:'" + idpoliza + "', placa:'" + placa + "', fechaini:'" + fechaini + "', fechafin:'" + fechafin + "', nombre:'" + nombre + "', estado:'" + estado + "', NroDePagina:'" + pagina + "', RegPorPag:'" + regporpag + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarGrillaInspeccion,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });

    $.ajax({
        type: "POST",
        url: "../Services/ListarInspeccionExport",
        data: "{iidinspeccion:'" + iidinspeccion + "', idpoliza:'" + idpoliza + "', placa:'" + placa + "', fechaini:'" + fechaini + "', fechafin:'" + fechafin + "', nombre:'" + nombre + "', estado:'" + estado + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarGrillaInspeccionExport,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
    //alert(estado);

}

function ListarGrillaInspeccionExport(data) {
    var tbody = $("#bodyExport2");
    tbody.empty();

    for (i = 0; i < data.length; i++) {

        tbody.append("<tr>" +
                        "<td>" + data[i].iidinspeccion + "</td>" +
                        "<td>" + data[i].idpoliza + "</td>" +
                        "<td>" + data[i].Persona + "</td>" +
                        "<td>" + data[i].vplaca + "</td>" +
                        "<td>" + data[i].Emision + "</td>" +
                        "<td>" + data[i].dtfec_hora_registro + "</td>" +
                        //"<td>" + data[i].dfecha + "</td>" +
                        "<td>" + data[i].Marca + "</td>" +
                        "<td>" + data[i].Modelo + "</td>" +
                        "<td>" + data[i].Estado + "</td>" +
            "</tr>");
    }
}

function ListarGrillaInspeccion(data) {
    //alert(1);
    
    var pagina = $("#Pagina").val();
    var select = $("#Pagina");
    var regporpag = "10";
    var TotalRegistros = "1";
    var i = 1;

   select.empty();

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
    

    //select.empty();
    ////data[0].TotalRegistros
    //if (parseInt(TotalRegistros) > parseInt(regporpag)) {

    //    for (i = 1; i <= Math.ceil(parseInt(TotalRegistros) / parseInt(regporpag)) ; i++) {
    //        select.append("<option value = " + i + ">" + i + "</option>");
    //    }
    //}
    //else {
    //    select.append("<option value = '1'> 1</option>");
    //}


    $("#Pagina").val(pagina);

    var tabla = $("#GridListar");
    tabla.empty();
    tabla.append("<thead class=bg-blues>" +
                "<tr>" +
                "<td>Nro. Inspección</td>" +
                "<td>Nro. Poli</td>" +
                "<td>Contratante</td>" +
                "<td>Placa</td>" +
                "<td>Fecha Registro</td>" +
                "<td>Fecha Programación</td>" +
                "<td>Marca</td>" +
                "<td>Modelo</td>" +
                "<td>Estado</td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "</tr>" +
                "</thead>");


    if (data.length > 0) {
        tabla.append("<tbody>")
        for (i = 0; i < data.length; i++) {

            if (data[i].Estado == "PENDIENTE") {
                fecProgramacion = " ";
            } else {
                fecProgramacion = data[i].dtfec_hora_registro;
            }

            tabla.append(
                        "<tr>" +
                        "<td>" + data[i].iidinspeccion + "</td>" +
                        "<td>" + data[i].idpoliza + "</td>" +
                        "<td>" + data[i].Persona + "</td>" +
                        "<td>" + data[i].vplaca + "</td>" +
                        "<td>" + data[i].Emision + "</td>" +
                        "<td>" + fecProgramacion + "</td>" +
                        //"<td>" + data[i].dtfec_hora_registro + "</td>" +
                        //"<td>" + data[i].dfecha + "</td>" +
                        "<td>" + data[i].Marca + "</td>" +
                        "<td>" + data[i].Modelo + "</td>" +
                        "<td>" + data[i].Estado + "</td>" +                        
                        "<td><input type=button onclick = Link('" + data[i].iidinspeccion + "','ver','" + data[i].Estado + "')  value=Ver style=width:70px class=btn_customer btn-secondary/></td>" +
                        "<td><input type=button onclick = Link('" + data[i].iidinspeccion + "','editar','" + data[i].Estado + "')  value=Editar style=width:70px class=btn_customer btn-secondary/></td>" +
                        "<td><input type=button onclick = cancelarInspeccion('" + data[i].iidinspeccion + "')  value=Cancelar style=width:70px class=btn_customer btn-secondary/></td>" +
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


//Link con el metodo POST
function Link(idinspeccion, modo,estado) {
    //window.location = "../inspeccion/registroinspeccion?alarmid=" + alarmid;

    //$.redirect(surl,
    //{
    //    alarmhistoryid: alarmid, evento: even
    //}, "post", "");

    //window.location = "../Inspeccion/RegistroInspeccion?id=" + idinspeccion + "&modo=" + modo;
   
    

    sessionStorage.setItem("idinspeccion", idinspeccion);
    sessionStorage.setItem("modo", modo);
    sessionStorage.setItem("estado", estado);

    window.location = "../inspeccion/registroinspeccion";
    /*
    surl="../Inspeccion/RegistroInspeccion";

    $.redirect(surl,
    {
        id: id, modo: modo
    }, "post", "");

    */
   


}
function ListarGrilla() {

    var iidinspeccion = $("#idinspeccion").val();
    var idpoliza = $("#idpoliza").val();
    var placa = $("#placa").val();
    var fechaini = $("#fechaini").val();
    var fechafin = $("#fechafin").val();
    var nombre = $("#contratante").val();
    var pagina = $("#Pagina").val();
    var regporpag = "10";
    var vestado = "0";
    if (global_finfec == "sin programacion") {
        //alert(1);
        vestado = "1";
        
        ListarInspeccion(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre, vestado, pagina, regporpag);
    } else if (global_finfec == "con programacion") {
        //alert(0);
        vestado = "0";
        
        ListarInspeccion(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre, vestado, pagina, regporpag);
    } else if (global_finfec == "vencida") {
        //alert(0);
        vestado = "2";

        ListarInspeccion(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre, vestado, pagina, regporpag);
    } else {
        vestado = global_finfec2;
        
        ListarInspeccion(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre, vestado, pagina, regporpag);
    }

    //ListarInspeccion(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre, pagina, regporpag);

    $("#Pagina").val(pagina);
    
}

$("#btnBuscar").click(function () {
    ListarGrilla();
});

$("#btnLimpiar").click(function () {

    $("#idinspeccion").val('');
    $("#idpoliza").val('');
    $("#placa").val('');
    $("#fechaini").val(FechaActual())
    $("#fechafin").val(FechaActual())
    $("#contratante").val('');

});

$("#btnNuevo").click(function () {
    var idinspeccion = ''
    var modo = 'agregar'
    window.location = "../Inspeccion/RegistroInspeccion?idinspeccion=" + idinspeccion + "&modo=" + modo + "&modo2=" + modo2;
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

function exportarExcel2() {
    $('#table_export2').table2excel({
        exclude: ".noExl",
        name: "Excel Document Name",
        filename: "ListaInspeccion",
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true
    });
}

function cancelarInspeccion(id_inspec) {
    //alert(id_inspec);
    var resp = id_inspec;
    $.ajax({
        type: "POST",
        url: "../Services/Cancelar_Inspeccion",
        data: "{idinspeccion:'" + resp + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: CancelandoInspeccion,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });
}
function CancelandoInspeccion(data) {
     
    //if (data[i].respuesta == "true") {
    //    alert("cambiado");
    //} else {
    //    alert("no pasa nada..")
    //}
    alert("Inspeccion Cancelada");
    location.reload(true);
}

//Error:
function OnError(data) {
    alert("Error 404...");
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dominio.Entidades;
using Dominio.Repositorio;
using System.Net.Mail;
using System.Text;
using System.Net.Mime;

namespace GenesisVehivular.Controllers
{
    public class ServicesController : Controller
    {
        // GET: Services
        public ActionResult Index()
        {
            return View();
        }

        //***************************************************************************************************************************************
        //REGISTRO POLIZA *******************************************************************************************************************
        //***************************************************************************************************************************************


        public ActionResult ListarTipoVehiculo()
        {
            General_BL bl = new General_BL();
            List<TipoVehiculoEntity> listado = bl.ListarTipoVehiculo_BL();
            return Json(listado);
        }

        public ActionResult ListarTipoUso()
        {
            General_BL bl = new General_BL();
            List<TipoUsoEntity> listado = bl.ListarTipoUso_BL();
            return Json(listado);
        }

        public ActionResult ListarMarcaVehiculo()
        {
            General_BL bl = new General_BL();
            List<MarcaVehiculoEntity> listado = bl.ListarMarcaVehiculo_BL();
            return Json(listado);
        }

        public ActionResult ListarModeloVehiculo(int id_marca)
        {
            General_BL bl = new General_BL();
            List<ModeloVehiculoEntity> listado = bl.ListarModeloVehiculo_BL(id_marca);
            return Json(listado);
        }

        public ActionResult ListarTipoDocumento()
        {
            General_BL bl = new General_BL();
            List<TipoDocumentoEntity> listado = bl.ListarTipoDocumento_BL();
            return Json(listado);
        }

        public ActionResult ListarNacionalidad()
        {
            General_BL bl = new General_BL();
            List<NacionalidadEntity> listado = bl.ListarNacionalidad_BL();
            return Json(listado);
        }

        public ActionResult ListarSexo()
        {
            General_BL bl = new General_BL();
            List<SexoEntity> listado = bl.ListarSexo_BL();
            return Json(listado);
        }

        public ActionResult ListarEstadoCivil()
        {
            General_BL bl = new General_BL();
            List<EstadoCivilEntity> listado = bl.ListarEstadoCivil_BL();
            return Json(listado);
        }

        public ActionResult ListarDepartamento()
        {
            General_BL bl = new General_BL();
            List<DepartamentoEntity> listado = bl.ListarDepartamento_BL();
            return Json(listado);
        }

        public ActionResult ListarProvincia(string vdepartamento)
        {
            General_BL bl = new General_BL();
            List<ProvinciaEntity> listado = bl.ListarProvincia_BL(vdepartamento);
            return Json(listado);
        }

        public ActionResult ListarDistrito(string vdepartamento, string vprovincia)
        {
            General_BL bl = new General_BL();
            List<DistritoEntity> listado = bl.ListarDistrito_BL(vdepartamento, vprovincia);
            return Json(listado);
        }

        public ActionResult ListarTipoVia()
        {
            General_BL bl = new General_BL();
            List<TipoViaEntity> listado = bl.ListarTipoVia_BL();
            return Json(listado);
        }

        public ActionResult ListarTipoPoliza()
        {
            General_BL bl = new General_BL();
            List<TipoPolizaEntity> listado = bl.ListarTipoPoliza_BL();
            return Json(listado);
        }

        public ActionResult ListarIdPoliza()
        {
            General_BL bl = new General_BL();
            List<IdPolizaEntity> listado = bl.ListarIdPoliza_BL();
            return Json(listado);
        }

        public ActionResult ListarFormaPago()
        {
            General_BL bl = new General_BL();
            List<FormaPagoEntity> listado = bl.ListarFormaPago_BL();
            return Json(listado);
        }

        public ActionResult RegistrarPoliza(
                int smidtablatipopoliza,
                string vplaca,
                int smidmodelo,
                int smaniofabrica,
                string vmotor,
                string svin,
                int smnroasiento,
                string vcolor,
                string desumaasegurada,
                int smidtablaclasevehiculo,
                string idnrodocumento,
                string vnombres,
                string vcelular,
                string vtelefono1,
                string vemail,
                string vreferencia,
                string vnumero,
                string vnombrevia,
                int smIdTipoVia,
                int smestadocivil,
                string vdepartamento,
                string vprovincia,
                string vdistrito,
                string dfechanac,
                int btsexo,
                string vapellidopat,
                string vapellidomat,
                int idpoliza,
                string vnomcontacto,
                int sminacionalidad,
                int smidmarca,
                int smidtipodocumento,
                string serie
            )
        {
            General_BL bl = new General_BL();
            List<RespuestaPost> listado = bl.RegistrarPoliza_BL(
                smidtablatipopoliza,
                vplaca,
                smidmodelo,
                smaniofabrica,
                vmotor,
                svin,
                smnroasiento,
                vcolor,
                desumaasegurada,
                smidtablaclasevehiculo,

                idnrodocumento,
                vnombres,
                vcelular,
                vtelefono1,
                vemail,
                vreferencia,
                vnumero,
                vnombrevia,
                smIdTipoVia,
                smestadocivil,
                vdepartamento,
                vprovincia,
                vdistrito,
                dfechanac,
                btsexo,
                vapellidopat,
                vapellidomat,
                idpoliza,
                vnomcontacto,
                sminacionalidad,
                smidmarca,
                smidtipodocumento,
                serie
                );
            return Json(listado);
        }

        public ActionResult ValidarPersona(string idnrodocumento)
        {
            General_BL bl = new General_BL();
            List<ValidarPersona> listado = bl.ValidarPersona_BL(idnrodocumento);
            return Json(listado);
        }


        //listar Poliza
        public ActionResult ListarPoliza(string idpoliza, string placa, string fechaini, string fechafin, string nombre, int NroDePagina, int RegPorPag)
        {
            General_BL bl = new General_BL();
            List<ListarPolizaEntity> listado = bl.ListarPoliza_BL(idpoliza, placa, fechaini, fechafin, nombre, NroDePagina, RegPorPag);
            return Json(listado);
        }

        //validar Poliza
        public ActionResult ValidarIdPoliza(int idpoliza)
        {
            General_BL bl = new General_BL();
            List<ValidarIdPoliza> respuesta = bl.ValidarIdPoliza_BL(idpoliza);
            return Json(respuesta);
        }


        //***************************************************************************************************************************************
        //REGISTRO INSPECCION *******************************************************************************************************************
        //***************************************************************************************************************************************

        public ActionResult ListarDatosPoliza(int idinspeccion)
        {
            General_BL bl = new General_BL();
            List<DatosPolizaEntity> listado = bl.ListarDatosPoliza_BL(idinspeccion);
            return Json(listado);
        }
        public ActionResult DatosPoliza(int idpoliza)
        {
            General_BL bl = new General_BL();
            List<ReportePolizaEntity> listado = bl.ReportePoliza_BL(idpoliza);
            return Json(listado);
        }

        public ActionResult ListarTipoCombustible()
        {
            General_BL bl = new General_BL();
            List<TipoCombustibleEntity> listado = bl.ListarTipoCombustible_BL();
            return Json(listado);
        }

        public ActionResult ListarEstadoInspeccion()
        {
            General_BL bl = new General_BL();
            List<EstadoInspeccionEntity> listado = bl.ListarEstadoInspeccion_BL();
            return Json(listado);
        }

        public ActionResult ListarTipoCarroceria()
        {
            General_BL bl = new General_BL();
            List<TipoCarroceriaEntity> listado = bl.ListarTipoCarroceria_BL();
            return Json(listado);
        }

        public ActionResult ListarTipoTransmision()
        {
            General_BL bl = new General_BL();
            List<TipoTransmisionEntity> listado = bl.ListarTipoTransmision_BL();
            return Json(listado);
        }

        public ActionResult ListarClaseRodante()
        {
            General_BL bl = new General_BL();
            List<ClaseRodanteEntity> listado = bl.ListarClaseRodante_BL();
            return Json(listado);
        }

        public ActionResult ListarTipoDano()
        {
            General_BL bl = new General_BL();
            List<TipoDanoEntity> listado = bl.ListarTipoDano_BL();
            return Json(listado);
        }

        public ActionResult RegistrarInspeccion(int smidpersona, int idpoliza, int idvehiculo, int sminacionalidad,
            int smestadocivil, string dfechanac, string vemail, string vtelefono1, string vcelular, int btsexo, int smidtablaformapago,
            int smidtipovehiculo, int smidmarca, int smidmodelo, int smianiofabricacion, string vcolor, int smidtipotransmision,
            int smidclaserodante, int smidtipocombustible, int inroasiento, int smidcarroceria, string vnromotor, string vplaca,
            string vnroserie, int ikilometraje, string vVin,
            int iidinspeccion, string fecInspeccion, string hrInspeccion, string fecRecordatorio, string hrRecordatorio,
            int smidtablaestadoinspeccion,
            int btaire, int btalarma, int btpestillos, int bttapizcuero, int btlunaselectricas, int btseguroruedas,
            int btllantarep, int btequipomusicaorig, int btparlantesoriginal, int btaccesorios, string vobservacionesaccesorios,
            int smidtablatipodano, string vobservaciones,
            int smidestadofarodelante, int smcantfarodelante, int smidestadofaropost, int smcantfaropost,
            int smestadofarodireccion, int smcantfarodireccion, int smcantfaroneblinero, int smestadofaroneblinero,
            int smcantespejoexterno, int smestadoespejoexterno, int smestadospoiler, int smcantspoiler, int smtipoaros,
            int smcantaros, int smestadomascara, int smpintura, int smtipoparachoque, int smcarroceria, int smconsola,
            int smtablero, int btequipomusicafijo, string vinspector, int smidcalificacion)
        {
            General_BL bl = new General_BL();
            List<RespuestaPost> listado = bl.RegistrarInspeccion_BL(smidpersona, idpoliza, idvehiculo, sminacionalidad,
            smestadocivil, dfechanac, vemail, vtelefono1, vcelular, btsexo, smidtablaformapago,
            smidtipovehiculo, smidmarca, smidmodelo, smianiofabricacion, vcolor, smidtipotransmision,
            smidclaserodante, smidtipocombustible, inroasiento, smidcarroceria, vnromotor, vplaca,
            vnroserie, ikilometraje, vVin,
            iidinspeccion, fecInspeccion, hrInspeccion, fecRecordatorio, hrRecordatorio,
            smidtablaestadoinspeccion,
            btaire, btalarma, btpestillos, bttapizcuero, btlunaselectricas, btseguroruedas,
            btllantarep, btequipomusicaorig, btparlantesoriginal, btaccesorios, vobservacionesaccesorios,
            smidtablatipodano, vobservaciones,
            smidestadofarodelante, smcantfarodelante, smidestadofaropost, smcantfaropost,
            smestadofarodireccion, smcantfarodireccion, smcantfaroneblinero, smestadofaroneblinero,
            smcantespejoexterno, smestadoespejoexterno, smestadospoiler, smcantspoiler, smtipoaros,
            smcantaros, smestadomascara, smpintura, smtipoparachoque, smcarroceria, smconsola,
            smtablero, btequipomusicafijo, vinspector, smidcalificacion);
            return Json(listado);
        }

        public ActionResult GuardarFotoInspeccion(int iidinspeccion, string fecha, string descripcion)
        {
            General_BL bl = new General_BL();
            List<RespuestaPost> listado = bl.GuardarFotoInspeccion_BL(iidinspeccion, fecha, descripcion);
            return Json(listado);
        }

        public ActionResult ListarImgInspeccion(int codinspeccion)
        {
            General_BL bl = new General_BL();
            List<ImagenInspeccionEntity> listado = bl.ListarImgInspeccion_BL(codinspeccion);
            return Json(listado);
        }


        //***************************************************************************************************************************************
        //Reporte Inspeccion *******************************************************************************************************************
        //***************************************************************************************************************************************

        public ActionResult ListarReporteInspeccion(int iidinspeccion)
        {
            General_BL bl = new General_BL();
            List<ReporteInspeccionEntity> listado = bl.ListarReporteInspeccion_BL(iidinspeccion);
            return Json(listado);
        }

        public ActionResult EnviarCorreo(string asuntop,string nombre, string dni, string celular, string fecha, string hora, string placa,
          string marca, string modelo, string color, string nroserie, string nrovin, string km, string estado, string accesorios,
          string observaciones, string destinop)
        {            
            string stCuerpoHTML = "<!DOCTYPE HTML><html><head><title>Reporte Inspeccion</title><meta charset='utf-8'/><meta name='viewport' content='width = device-width, initial-scale = 1, user-scalable = no'/><link href='https://fonts.googleapis.com/css?family=Nunito+Sans' rel='stylesheet'>";
            stCuerpoHTML += "</head><body style='font-family:'Nunito Sans', sans-serif;'><section style='width: 60%;margin:auto;text-align:center;'><div style ='margin-top: 1rem;margin-bottom: 1.5rem;width: 100%;text-align:center;border-bottom: 5px solid #4156CB;'><h1 style ='margin-bottom: 1.5rem; color: #4156CB;'> Reporte de Inspección</h1></div><div style ='text-align: left;border-bottom: 2px solid #B2B7C5;'><div style='display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-right: -15px;margin-left: -15px;'><div style ='position: relative;width: 100%;min-height: 1px;padding-right: 15px;padding-left: 15px;-ms-flex: 0 0 50%;flex: 0 0 46%;max-width: 46%; margin-top: -1rem;'> ";
            stCuerpoHTML += "<h3 style='color: #4156CB;'>"+ nombre + "</h3>";
            stCuerpoHTML += "<form><div><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>DNI:</label>";
            stCuerpoHTML += "<span>"+ dni + "</span>";
            stCuerpoHTML += "</div></form><form><div><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>CELULAR:</label>";
            stCuerpoHTML += "<span>" + celular + "</span>";
            stCuerpoHTML += "</div></form></div><div style='position: relative; width: 100%; min-height: 1px;padding-right:15px;padding-left:15px;-ms-flex: 0 0 50%; flex: 0 0 50%; max-width:50%;'><div style='padding-top: 0.7rem; padding-left: 0.7rem; padding-left: 1rem; width: 100%; background-color: #F2F2FF;text-align: left;margin-bottom: 1.5rem;'><span style='color: #4156CB;font-weight: 500;font-size: 13px;'>LA INSPECCIÓN REALIZADA</span><div style='display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-right: -15px;margin-left: -15px;'><div style='position: relative;width: 100%;min-height: 1px;padding-right: 15px;padding-left: 15px;-ms-flex: 0 0 50%;flex: 0 0 50%;max-width: 50%;'><div>";     
            stCuerpoHTML += "<div>";
            stCuerpoHTML += "<img src='cid:icon-calendar' width='40px;'>";
            stCuerpoHTML += "</div>";
            stCuerpoHTML += "<div style='margin-top: -0.5rem; margin-bottom: 0.1rem;'>";
            stCuerpoHTML += "<span style='font-size: 0.8rem;'>"+ fecha + "</span>";
            stCuerpoHTML += "</div>";
            stCuerpoHTML += "</div></div><div style='position: relative;width:100%; min-height: 1px; padding-right: 15px; padding-left: 15px; -ms-flex: 0 0 50%; flex: 0 0 50%; max-width: 50%;'><form><div style='text-align:center;'>";
            stCuerpoHTML += "<div>";
            stCuerpoHTML += "<img src='cid:icon-clock' width='40px'>";
            stCuerpoHTML += "</div>";
            stCuerpoHTML += "<div style='margin-top: -0.5rem; margin-bottom: 0.1rem;'>";
            stCuerpoHTML += "<span style='font-size: 0.8rem;'>"+ hora + "</span>";
            stCuerpoHTML += "</div>";
            stCuerpoHTML += "</div></form></div></div></div></div></div></div><div style='width: 80%; margin: auto; margin-top: 1rem;'><div style='display: -ms-flexbox; display: flex;-ms-flex-wrap: wrap; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;'><div style='position: relative; width: 100%; min-height: 1px; padding-right: 15px; padding-left: 15px; -ms-flex: 0 0 50 %; flex: 0 0 50%; max-width: 50%;'><div style='margin: auto;'>";
            stCuerpoHTML += "<img src='cid:car' width='80%'>";
            stCuerpoHTML += " </div></div><div style='position: relative; width: 100%; min-height: 1px; padding-right: 15px; padding-left: 15px; -ms - flex: 0 0 50%; flex: 0 0 50%; max-width: 50%; margin-top: -1.7rem;'><h3 style='color: #4156CB;'>Datos de tu carro</h3><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>PLACA:</label>";
            stCuerpoHTML += "<span>"+ placa + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>MARCA:</label>";
            stCuerpoHTML += "<span>"+ marca + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>MODELO:</label>";
            stCuerpoHTML += "<span>"+ modelo + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>COLOR:</label>";
            stCuerpoHTML += "<span>"+ color + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>NÚMERO DE SERIE:</label>";
            stCuerpoHTML += "<span>"+ nroserie + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>NÚMERO DE VIN:</label>";
            stCuerpoHTML += "<span>"+ nrovin + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>KILOMETRAJE:</label>";
            stCuerpoHTML += "<span>"+ km + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;margin-bottom:1rem;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>ESTADO:</label><span>"+ estado + "</span>";
            stCuerpoHTML += "</div></form></div></div></div><div style='border-top: 2px solid #B2B7C5;border-bottom: 5px solid #4156CB;padding-top: 2rem;padding-bottom: 2rem;'><form><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>Accesorios adicionales:</label><br>";
            stCuerpoHTML += "<span>"+ accesorios + "</span>";
            stCuerpoHTML += "</form><form><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>Observaciones:</label><br>";
            stCuerpoHTML += "<span>"+ observaciones + "</span>";
            stCuerpoHTML += "</form></div></section></body></html>";


            MailMessage mensaje = new MailMessage();
            mensaje.BodyEncoding = Encoding.UTF8;
            mensaje.SubjectEncoding = Encoding.UTF8;

            AlternateView htmlView = AlternateView.CreateAlternateViewFromString(stCuerpoHTML);
            htmlView.ContentType = new System.Net.Mime.ContentType("text/html");

            string path = Server.MapPath("~") + @"Img\";

            LinkedResource imgcalendar = new LinkedResource(path + "icon-calendar.png");
            imgcalendar.ContentId = "icon-calendar";
            htmlView.LinkedResources.Add(imgcalendar);

            LinkedResource imgclock = new LinkedResource(path + "icon-clock.png");
            imgclock.ContentId = "icon-clock";
            htmlView.LinkedResources.Add(imgclock);

            LinkedResource imgcar = new LinkedResource(path + "car.png");
            imgcar.ContentId = "car";
            htmlView.LinkedResources.Add(imgcar);

            mensaje.AlternateViews.Add(htmlView);

            mensaje.Subject = asuntop;
            mensaje.Body = stCuerpoHTML;
            mensaje.To.Add(destinop);

            mensaje.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient();
            smtp.Send(mensaje);

            return Json("ok");
        }




        //***************************************************************************************************************************************
        //CONSULTAS*******************************************************************************************************************
        //***************************************************************************************************************************************

        public ActionResult ListarInspeccion(string iidinspeccion, string idpoliza, string placa, string fechaini, string fechafin, string nombre, int NroDePagina, int RegPorPag)
        {
            General_BL bl = new General_BL();
            List<Inspeccion> listado = bl.ListarInspeccion_BL(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre, NroDePagina, RegPorPag);
            return Json(listado);
        }









    }




}
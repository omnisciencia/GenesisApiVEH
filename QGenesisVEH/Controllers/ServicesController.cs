using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dominio.Entidades;
using Dominio.Repositorio;
using System.Net.Mail;
using System.Text;
using System.Net.Mime;
using System.IO;
using CrystalDecisions.CrystalReports.Engine;
using CrystalDecisions.Shared;

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

        public ActionResult ActualizarPoliza(string smestadocivil,
            string vcelular, string vtelefono1,
            string vemail, string smIdTipoVia,
            string vnumero, string vnombrevia,
            string vdepartamento,
            string vprovincia, string vdistrito,
            string idnrodocumento, string vreferencia)
        {
            General_BL bl = new General_BL();
            List<RespuestaPost> listado = bl.ActualizarPoliza_BL( smestadocivil,
             vcelular,  vtelefono1,
             vemail,  smIdTipoVia,
             vnumero,  vnombrevia,
             vdepartamento,
             vprovincia,  vdistrito,
             idnrodocumento,  vreferencia);
            return Json(listado);
        }
        public ActionResult ActualizarVehiculo(string vplaca)
        {
            General_BL bl = new General_BL();
            List<ActualizarVehiculo> listado = bl.Actualizarvehiculo_BL(vplaca);
            return Json(listado);
        }
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

        public ActionResult ListarEstadoPoliza()
        {
            General_BL bl = new General_BL();
            List<EstadoPoliza> listado = bl.ListarEstadoPoliza_BL();
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

        public ActionResult ProgramarInspeccion(string fecInspeccion, string hrInspeccion, int iidinspeccion)
        {
            General_BL bl = new General_BL();
            List<RespuestaPost> listado = bl.ProgramarInspeccion_BL(fecInspeccion, hrInspeccion, iidinspeccion);
            return Json(listado);
        }

        public ActionResult RegistrarPoliza(string DetallesVehi,
                int smidtablatipopoliza,
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
                int formapago,
                string vigenciaini_reg
         

            //,string serie
            )
        {

            //string [] ArrayDetallesVehi = DetallesVehi;
            //string a= ArrayDetallesVehi[0].ToString();

            General_BL bl = new General_BL();
            List<RespuestaPost> listado = bl.RegistrarPoliza_BL(DetallesVehi,
               smidtablatipopoliza,
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
               formapago,
               vigenciaini_reg
               //,serie
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

        //listar Poliza Export
        public ActionResult ListarPolizaExport(string idpoliza, string placa, string fechaini, string fechafin, string nombre)
        {
            General_BL bl = new General_BL();
            List<ListarPolizaExportEntity> listado = bl.ListarPolizaExport_BL(idpoliza, placa, fechaini, fechafin, nombre);
            return Json(listado);
        }

        //validar Poliza
        public ActionResult ValidarIdPoliza(int idpoliza)
        {
            General_BL bl = new General_BL();
            List<ValidarIdPoliza> respuesta = bl.ValidarIdPoliza_BL(idpoliza);
            return Json(respuesta);
        }

        public ActionResult ListarPolizaVehiculo(string idpoliza)
        {
            General_BL bl = new General_BL();
            List<VehiculoEntity> Listado = bl.ListarPolizaVehiculo_BL(idpoliza);
            return Json(Listado);
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
        //string vnroserie,
        public ActionResult RegistrarInspeccion(string smidpersona, string idpoliza, string idvehiculo, string sminacionalidad,
            string smestadocivil, string dfechanac, string vemail, string vtelefono1, string vcelular, string btsexo, string smidtablaformapago,
            string smidtipovehiculo, string smidmarca, string smidmodelo, string smianiofabricacion, string vcolor, string smidtipotransmision,
            string smidclaserodante, string smidtipocombustible, string inroasiento, string smidcarroceria, string vnromotor, string vplaca,
             string ikilometraje, string vVin,
            string iidinspeccion, string fecInspeccion, string hrInspeccion, string fecRecordatorio, string hrRecordatorio,
            string smidtablaestadoinspeccion,
            string btaire, string btalarma, string btpestillos, string bttapizcuero, string btlunaselectricas, string btseguroruedas,
            string btllantarep, string btequipomusicaorig, string btparlantesoriginal, string btaccesorios, string vobservacionesaccesorios,
            string smidtablatipodano, string vobservaciones,
            string smidestadofarodelante, string smcantfarodelante, string smidestadofaropost, string smcantfaropost,
            string smestadofarodireccion, string smcantfarodireccion, string smcantfaroneblinero, string smestadofaroneblinero,
            string smcantespejoexterno, string smestadoespejoexterno, string smestadospoiler, string smcantspoiler, string smtipoaros,
            string smcantaros, string smestadomascara, string smpintura, string smtipoparachoque, string smcarroceria, string smconsola,
            string smtablero, string btequipomusicafijo, string vinspector, string smidcalificacion, string fecInspeccion_f, string hrInspeccion_f, int dprograma)
        {
            General_BL bl = new General_BL();
            List<RespuestaPost> listado = bl.RegistrarInspeccion_BL(Convert.ToInt32(smidpersona), Convert.ToInt32(idpoliza), Convert.ToInt32(idvehiculo), Convert.ToInt32(sminacionalidad),
            Convert.ToInt32(smestadocivil), Convert.ToString(dfechanac), vemail, vtelefono1, vcelular, Convert.ToInt32(btsexo), Convert.ToInt32(smidtablaformapago),
            Convert.ToInt32(smidtipovehiculo), Convert.ToInt32(smidmarca), Convert.ToInt32(smidmodelo), Convert.ToInt32(smianiofabricacion), vcolor, Convert.ToInt32(smidtipotransmision),
            Convert.ToInt32(smidclaserodante), Convert.ToInt32(smidtipocombustible), Convert.ToInt32(inroasiento), Convert.ToInt32(smidcarroceria), vnromotor, vplaca,
             Convert.ToInt32(ikilometraje), vVin,
            Convert.ToInt32(iidinspeccion), Convert.ToString(fecInspeccion), hrInspeccion, Convert.ToString(fecRecordatorio), hrRecordatorio,
            Convert.ToInt32(smidtablaestadoinspeccion),
            Convert.ToInt32(btaire), Convert.ToInt32(btalarma), Convert.ToInt32(btpestillos), Convert.ToInt32(bttapizcuero), Convert.ToInt32(btlunaselectricas), Convert.ToInt32(btseguroruedas),
            Convert.ToInt32(btllantarep), Convert.ToInt32(btequipomusicaorig), Convert.ToInt32(btparlantesoriginal), Convert.ToInt32(btaccesorios), vobservacionesaccesorios,
            Convert.ToInt32(smidtablatipodano), vobservaciones,
            Convert.ToInt32(smidestadofarodelante), Convert.ToInt32(smcantfarodelante), Convert.ToInt32(smidestadofaropost), Convert.ToInt32(smcantfaropost),
            Convert.ToInt32(smestadofarodireccion), Convert.ToInt32(smcantfarodireccion), Convert.ToInt32(smcantfaroneblinero), Convert.ToInt32(smestadofaroneblinero),
            Convert.ToInt32(smcantespejoexterno), Convert.ToInt32(smestadoespejoexterno), Convert.ToInt32(smestadospoiler), Convert.ToInt32(smcantspoiler), Convert.ToInt32(smtipoaros),
            Convert.ToInt32(smcantaros), Convert.ToInt32(smestadomascara), Convert.ToInt32(smpintura), Convert.ToInt32(smtipoparachoque), Convert.ToInt32(smcarroceria), Convert.ToInt32(smconsola),
            Convert.ToInt32(smtablero), Convert.ToInt32(btequipomusicafijo), vinspector, Convert.ToInt32(smidcalificacion), fecInspeccion_f, hrInspeccion_f, dprograma);
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
        public ActionResult InsertarPolizaVehiculo(int smidciaseguros, int idpoliza, int idvehiculo)
        {
            General_BL bl = new General_BL();
            List<RespuestaPost> Respuesta = bl.InsertarPolizaVehiculo_BL(smidciaseguros, idpoliza, idvehiculo);
            return Json(Respuesta);
        }
        public ActionResult EliminarPolizaVehiculo(int smidciaseguros, int idpoliza, int idvehiculo)
        {
            General_BL bl = new General_BL();
            List<RespuestaPost> Respuesta = bl.EliminarPolizaVehiculo_BL(smidciaseguros, idpoliza, idvehiculo);
            return Json(Respuesta);
        }

        public ActionResult Cancelar_Inspeccion(int idinspeccion)
        {
            General_BL bl = new General_BL();
            List<RespuestaPost> Respuesta = bl.Cancelar_Inspeccion_BL(idinspeccion);
            return Json(Respuesta);
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

        public ActionResult EnviarCorreo(string asuntop, string nombre, string dni, string celular, string fecha, string hora, string placa,
          string marca, string modelo, string color, string nroserie, string nrovin, string km, string estado, string accesorios,
          string observaciones, string destinop)
        {
            string stCuerpoHTML = "<!DOCTYPE HTML><html><head><title>Reporte Inspeccion</title><meta charset='utf-8'/><meta name='viewport' content='width = device-width, initial-scale = 1, user-scalable = no'/><link href='https://fonts.googleapis.com/css?family=Nunito+Sans' rel='stylesheet'>";
            stCuerpoHTML += "</head><body style='font-family:'Nunito Sans', sans-serif;'><section style='width: 60%;margin:auto;text-align:center;'><div style ='margin-top: 1rem;margin-bottom: 1.5rem;width: 100%;text-align:center;border-bottom: 5px solid #4156CB;'><h1 style ='margin-bottom: 1.5rem; color: #4156CB;'> Reporte de Inspección</h1></div><div style ='text-align: left;border-bottom: 2px solid #B2B7C5;'><div style='display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-right: -15px;margin-left: -15px;'><div style ='position: relative;width: 100%;min-height: 1px;padding-right: 15px;padding-left: 15px;-ms-flex: 0 0 50%;flex: 0 0 46%;max-width: 46%; margin-top: -1rem;'> ";
            stCuerpoHTML += "<h3 style='color: #4156CB;'>" + nombre + "</h3>";
            stCuerpoHTML += "<form><div><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>DNI:</label>";
            stCuerpoHTML += "<span>" + dni + "</span>";
            stCuerpoHTML += "</div></form><form><div><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>CELULAR:</label>";
            stCuerpoHTML += "<span>" + celular + "</span>";
            stCuerpoHTML += "</div></form></div><div style='position: relative; width: 100%; min-height: 1px;padding-right:15px;padding-left:15px;-ms-flex: 0 0 50%; flex: 0 0 50%; max-width:50%;'><div style='padding-top: 0.7rem; padding-left: 0.7rem; padding-left: 1rem; width: 100%; background-color: #F2F2FF;text-align: left;margin-bottom: 1.5rem;'><span style='color: #4156CB;font-weight: 500;font-size: 13px;'>LA INSPECCIÓN REALIZADA</span><div style='display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-right: -15px;margin-left: -15px;'><div style='position: relative;width: 100%;min-height: 1px;padding-right: 15px;padding-left: 15px;-ms-flex: 0 0 50%;flex: 0 0 50%;max-width: 50%;'><div>";
            stCuerpoHTML += "<div>";
            stCuerpoHTML += "<img src='cid:icon-calendar' width='40px;'>";
            stCuerpoHTML += "</div>";
            stCuerpoHTML += "<div style='margin-top: -0.5rem; margin-bottom: 0.1rem;'>";
            stCuerpoHTML += "<span style='font-size: 0.8rem;'>" + fecha + "</span>";
            stCuerpoHTML += "</div>";
            stCuerpoHTML += "</div></div><div style='position: relative;width:100%; min-height: 1px; padding-right: 15px; padding-left: 15px; -ms-flex: 0 0 50%; flex: 0 0 50%; max-width: 50%;'><form><div style='text-align:center;'>";
            stCuerpoHTML += "<div>";
            stCuerpoHTML += "<img src='cid:icon-clock' width='40px'>";
            stCuerpoHTML += "</div>";
            stCuerpoHTML += "<div style='margin-top: -0.5rem; margin-bottom: 0.1rem;'>";
            stCuerpoHTML += "<span style='font-size: 0.8rem;'>" + hora + "</span>";
            stCuerpoHTML += "</div>";
            stCuerpoHTML += "</div></form></div></div></div></div></div></div><div style='width: 80%; margin: auto; margin-top: 1rem;'><div style='display: -ms-flexbox; display: flex;-ms-flex-wrap: wrap; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;'><div style='position: relative; width: 100%; min-height: 1px; padding-right: 15px; padding-left: 15px; -ms-flex: 0 0 50 %; flex: 0 0 50%; max-width: 50%;'><div style='margin: auto;'>";
            stCuerpoHTML += "<img src='cid:car' width='80%'>";
            stCuerpoHTML += " </div></div><div style='position: relative; width: 100%; min-height: 1px; padding-right: 15px; padding-left: 15px; -ms - flex: 0 0 50%; flex: 0 0 50%; max-width: 50%; margin-top: -1.7rem;'><h3 style='color: #4156CB;'>Datos de tu carro</h3><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>PLACA:</label>";
            stCuerpoHTML += "<span>" + placa + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>MARCA:</label>";
            stCuerpoHTML += "<span>" + marca + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>MODELO:</label>";
            stCuerpoHTML += "<span>" + modelo + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>COLOR:</label>";
            stCuerpoHTML += "<span>" + color + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>NÚMERO DE SERIE:</label>";
            stCuerpoHTML += "<span>" + nroserie + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>NÚMERO DE VIN:</label>";
            stCuerpoHTML += "<span>" + nrovin + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>KILOMETRAJE:</label>";
            stCuerpoHTML += "<span>" + km + "</span>";
            stCuerpoHTML += "</div></form><form><div style='text-align: left;margin-bottom:1rem;'><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>ESTADO:</label><span>" + estado + "</span>";
            stCuerpoHTML += "</div></form></div></div></div><div style='border-top: 2px solid #B2B7C5;border-bottom: 5px solid #4156CB;padding-top: 2rem;padding-bottom: 2rem;'><form><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>Accesorios adicionales:</label><br>";
            stCuerpoHTML += "<span>" + accesorios + "</span>";
            stCuerpoHTML += "</form><form><label style='color: #4156CB;font-weight: bold;margin-right: 2px;'>Observaciones:</label><br>";
            stCuerpoHTML += "<span>" + observaciones + "</span>";
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

        public ActionResult ListarSeguroSOAT()
        {
            General_BL bl = new General_BL();
            List<ListarSeguroEntity> listado = bl.ListarSeguroSOAT_BL();
            return Json(listado);
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
        public ActionResult ListarInspeccion2(string iidinspeccion, string idpoliza, string placa, string fechaini, string fechafin, string nombre, string estado, int NroDePagina, int RegPorPag)
        {
            General_BL bl = new General_BL();
            List<Inspeccion> listado = bl.ListarInspeccion2_BL(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre, estado, NroDePagina, RegPorPag);
            return Json(listado);
        }
        public ActionResult exportReport()
        {
            ReportDocument rd = new ReportDocument();
            rd.Load(Path.Combine(Server.MapPath("~/Reporte"), "CrystalReport1.rpt"));
            rd.SetDatabaseLogon("sa", "$sqlserver123", "192.168.1.80", "DB_Genesis_Vehicular_5");

            //rd.SetDataSource(db.EmployeeInfoes.ToList());
            rd.SetParameterValue("@idinspeccion", 1036);
            Response.Buffer = false;
            Response.ClearContent();
            Response.ClearHeaders();

            try
            {
                Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                stream.Seek(0, SeekOrigin.Begin);
                return File(stream, "application/pdf", "ListadoInspeccion.pdf");
            }
            catch
            {
                throw;
            }
        }

        public ActionResult ListarInspeccionExport(string iidinspeccion, string idpoliza, string placa, string fechaini, string fechafin, string nombre, string estado)
        {
            General_BL bl = new General_BL();
            List<ListarInspeccionExportEntity> listado = bl.ListarInspeccionExport_BL(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre, estado);
            return Json(listado);
        }

        //***************************************************************************************************************
        //SINIESTROS*****************************************************************************************************
        //***************************************************************************************************************

        public ActionResult Listar_Poliza_Vehiculo_SIN(string idpoliza, string placa, string nombre, string estado, int NroDePagina, int RegPorPag)
        {
            General_BL bl = new General_BL();
            List<ListarPolizaEntity> listado = bl.Listar_Poliza_Vehiculo_SIN_BL(idpoliza, placa, nombre, estado, NroDePagina, RegPorPag);
            return Json(listado);
        }


        public ActionResult Select_PolizaVehiculo(string idpoliza, string idvehiculo)
        {
            General_BL bl = new General_BL();
            List<PolizaVehiculoEntity> listado = bl.Select_PolizaVehiculo_BL(idpoliza, idvehiculo);
            return Json(listado);
        }

        public ActionResult Combo_Ocurrencia()
        {
            General_BL bl = new General_BL();
            List<OcurrenciaEntity> listado = bl.Combo_Ocurrencia_BL();
            return Json(listado);
        }
        public ActionResult Combo_TipoSiniestro()
        {
            General_BL bl = new General_BL();
            List<TipoSiniestroEntity> listado = bl.Combo_TipoSiniestro_BL();
            return Json(listado);
        }
        public ActionResult Combo_Consecuencia()
        {
            General_BL bl = new General_BL();
            List<ConsecuenciaEntity> listado = bl.Combo_Consecuencia_BL();
            return Json(listado);
        }

        public ActionResult Combo_TipoDeclarante()
        {
            General_BL bl = new General_BL();
            List<TipoDeclaranteEntity> listado = bl.Combo_TipoDeclarante_BL();
            return Json(listado);
        }
        public ActionResult Combo_Parentesco()
        {
            General_BL bl = new General_BL();
            List<ParentescoEntity> listado = bl.Combo_Parentesco_BL();
            return Json(listado);
        }

        public ActionResult AutcomUbigeo()
        {
            General_BL bl = new General_BL();
            List<UbigeoEntity> listado = bl.AutcomUbigeo_BL();
            return Json(listado);
        }

        public ActionResult RegistrarSiniestro(
            string idpoliza, string idvehiculo, string smidciaseguros, string iestadosiniestro, string dFecNotificacion
            , string idocurrencia, string idtiposiniestro, string idconsecuencia, string dFecOcurrencia
            , string vlugarsiniestro, string vubicasiniestro, string iocupantes, string idtipodeclarante
            , string vdenominacion, string vtelef_declarante, string iparentaseg_declarante, string vmaildeclarante
            , string vconductor, string idtipodoc, string vnrodociden, string vlicencia
            , string iparentaseg_conductor, string vtelef_conductor, string vemail_conductor, string dvencilicencia
            , string idcomisaria, string vcategoria, string vdetasiniestro, string nidusuario
            )
        {   
            General_BL bl = new General_BL();
            List<RespuestaPost> listado = bl.RegistrarSiniestro_BL(
                idpoliza, idvehiculo, smidciaseguros, iestadosiniestro, dFecNotificacion
                , idocurrencia, idtiposiniestro, idconsecuencia, dFecOcurrencia
                , vlugarsiniestro, vubicasiniestro, iocupantes, idtipodeclarante
                , vdenominacion, vtelef_declarante, iparentaseg_declarante, vmaildeclarante
                , vconductor, idtipodoc, vnrodociden, vlicencia
                , iparentaseg_conductor, vtelef_conductor, vemail_conductor, dvencilicencia
                , idcomisaria, vcategoria, vdetasiniestro, nidusuario
                );
            return Json(listado);
        }

        public ActionResult Listar_Comisaria(string vdescripcion, string vdireccion, int NroDePagina, int RegPorPag)
        {
            General_BL bl = new General_BL();
            List<ComisariaEntity> listado = bl.Listar_Comisaria_BL(vdescripcion,vdireccion, NroDePagina, RegPorPag);
            return Json(listado);
        }

        public ActionResult Combo_Usuario(string idperfil)
        {
            General_BL bl = new General_BL();
            List<ComboUsuario> listado = bl.ComboUsuario_BL(idperfil);
            return Json(listado);
        }

        public ActionResult Listarsiniestro(string idsiniestro, string placa, string fechaini, string fechafin, string nombre, int NroDePagina, int RegPorPag)
        {
            General_BL bl = new General_BL();
            List<SiniestroEntity> listado = bl.ListarSiniestro_BL(idsiniestro, placa, fechaini, fechafin, nombre, NroDePagina, RegPorPag);
            return Json(listado);
        }
                
        public ActionResult ListarSiniestroExport(string idsiniestro, string placa, string fechaini, string fechafin, string nombre)
        {
            General_BL bl = new General_BL();
            List<SiniestroEntity> listado = bl.ListarSiniestroExport_BL(idsiniestro, placa, fechaini, fechafin, nombre);
            return Json(listado);
        }
        public ActionResult SelectSiniestro(string idsiniestro)
        {
            General_BL bl = new General_BL();
            List<SiniestroEntity> listado = bl.SelectSiniestro_BL(idsiniestro);
            return Json(listado);
        }

    }




}
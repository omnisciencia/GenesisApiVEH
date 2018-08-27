using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dominio.Entidades;
using Dominio.Repositorio;

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
                int smidtipodocumento

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
                smidtipodocumento

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

        public ActionResult ListarDatosPoliza(int idpoliza)
        {
            General_BL bl = new General_BL();
            List<DatosPolizaEntity> listado = bl.ListarDatosPoliza_BL(idpoliza);
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
            int smtablero, int btequipomusicafijo, string vinspector)
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
            smtablero, btequipomusicafijo, vinspector);
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
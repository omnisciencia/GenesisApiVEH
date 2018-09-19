using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Entidades;
using Infraestrutura.Data.SqlServer;

namespace Dominio.Repositorio
{
    public class General_BL
    {

        General_DAL dal = new General_DAL();

        //***************************************************************************************************************************************
        //REGISTRO POLIZA *******************************************************************************************************************
        //***************************************************************************************************************************************


        //Listar Tipo Vehiculo
        public List<TipoVehiculoEntity> ListarTipoVehiculo_BL()
        {
            return dal.ListarTipoVehiculo_DAL();
        }

        //Listar Tipo Uso
        public List<TipoUsoEntity> ListarTipoUso_BL()
        {
            return dal.ListarTipoUso_DAL();
        }

        //Listar Marca Vehiculo
        public List<MarcaVehiculoEntity> ListarMarcaVehiculo_BL()
        {
            return dal.ListarMarcaVehiculo_DAL();
        }

        //Listar Modelo Vehiculo
        public List<ModeloVehiculoEntity> ListarModeloVehiculo_BL(int id_marca)
        {
            return dal.ListarModeloVehiculo_DAL(id_marca);
        }

        //Listar Modelo Vehiculo
        public List<TipoDocumentoEntity> ListarTipoDocumento_BL()
        {
            return dal.ListarTipoDocumento_DAL();
        }

        //Listar Modelo Vehiculo
        public List<NacionalidadEntity> ListarNacionalidad_BL()
        {
            return dal.ListarNacionalidad_DAL();
        }

        //Listar Sexo
        public List<SexoEntity> ListarSexo_BL()
        {
            return dal.ListarSexo_DAL();
        }

        //Listar Estado Civil
        public List<EstadoCivilEntity> ListarEstadoCivil_BL()
        {
            return dal.ListarEstadoCivil_DAL();
        }

        //Listar Departamento
        public List<DepartamentoEntity> ListarDepartamento_BL()
        {
            return dal.ListarDepartamento_DAL();
        }

        //Listar Provincia
        public List<ProvinciaEntity> ListarProvincia_BL(string vdepartamento)
        {
            return dal.ListarProvincia_DAL(vdepartamento);
        }

        //Listar Distrito
        public List<DistritoEntity> ListarDistrito_BL(string vdepartamento, string vprovincia)
        {
            return dal.ListarDistrito_DAL(vdepartamento, vprovincia);
        }

        //Listar Tipo Via
        public List<TipoViaEntity> ListarTipoVia_BL()
        {
            return dal.ListarTipoVia();
        }

        //Listar Tipo Poliza
        public List<TipoPolizaEntity> ListarTipoPoliza_BL()
        {
            return dal.ListarTipoPoliza();
        }

        //Listar Id Poliza
        public List<IdPolizaEntity> ListarIdPoliza_BL()
        {
            return dal.ListarIdPoliza_DAL();
        }

        //Listar Forma Pago
        public List<FormaPagoEntity> ListarFormaPago_BL()
        {
            return dal.ListarFormaPago_DAL();
        }

        //Registar Poliza
        public List<RespuestaPost> RegistrarPoliza_BL(
                string DetallesVehi,
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
            return dal.RegistrarPoliza_DAL(DetallesVehi,
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
        }

        //validar persona
        public List<ValidarPersona> ValidarPersona_BL(string idnrodocumento)
        {
            return dal.ValidarPersona_DAL(idnrodocumento);
        }
        //detalle poliza
        public List<ReportePolizaEntity> ReportePoliza_BL(int idpoliza)
        {
            return dal.ReportePoliza_DAL(idpoliza);
        }

        //listar Poliza
        public List<ListarPolizaEntity> ListarPoliza_BL(string idpoliza, string placa, string fechaini, string fechafin, string nombre, int NroDePagina, int RegPorPag)
        {
            return dal.ListarPoliza_DAL(idpoliza, placa, fechaini, fechafin, nombre, NroDePagina, RegPorPag);
        }

        //listar Poliza
        public List<ListarPolizaExportEntity> ListarPolizaExport_BL(string idpoliza, string placa, string fechaini, string fechafin, string nombre)
        {
            return dal.ListarPolizaExport_DAL(idpoliza, placa, fechaini, fechafin, nombre);
        }

        //validar idpoliza
        public List<ValidarIdPoliza> ValidarIdPoliza_BL(int idpoliza)
        {
            return dal.ValidarIdPoliza_DAL(idpoliza);
        }

        public List<VehiculoEntity> ListarPolizaVehiculo_BL(string idpoliza)
        {
            return dal.ListarPolizaVehiculo_DAL(idpoliza);
        }



        //***************************************************************************************************************************************
        //REGISTRO INSPECCION *******************************************************************************************************************
        //***************************************************************************************************************************************


        //Listado Datos Poliza
        public List<DatosPolizaEntity> ListarDatosPoliza_BL(int idinspeccion)
        {
            return dal.ListarDatosPoliza_DAL(idinspeccion);
        }

        //Listado Tipo Combustible
        public List<TipoCombustibleEntity> ListarTipoCombustible_BL()
        {
            return dal.ListarTipoCombustible_DAL();
        }

        //Listado Tipo Carrocería
        public List<TipoCarroceriaEntity> ListarTipoCarroceria_BL()
        {
            return dal.ListarTipoCarroceria_DAL();
        }

        //Listado Estado Inspeccion
        public List<EstadoInspeccionEntity> ListarEstadoInspeccion_BL()
        {
            return dal.ListarEstadoInspeccion_DAL();
        }

        //Listado Tipo Transmision
        public List<TipoTransmisionEntity> ListarTipoTransmision_BL()
        {
            return dal.ListarTipoTransmision_DAL();
        }

        //Listado Clase Rodante
        public List<ClaseRodanteEntity> ListarClaseRodante_BL()
        {
            return dal.ListarClaseRodante_DAL();
        }

        //Listado Tipo Daño
        public List<TipoDanoEntity> ListarTipoDano_BL()
        {
            return dal.ListarTipoDano_DAL();
        }

        //Listado Cia Seguro SOAT
        public List<ListarSeguroEntity> ListarSeguroSOAT_BL()
        {
            return dal.ListarSeguroSOAT_DAL();
        }

        //Registrar Inspeccion
        public List<RespuestaPost> RegistrarInspeccion_BL(int smidpersona, int idpoliza, int idvehiculo, int sminacionalidad,
            int smestadocivil, string dfechanac, string vemail, string vtelefono1, string vcelular, int btsexo, int smidtablaformapago,
            int smidtipovehiculo, int smidmarca, int smidmodelo, int smianiofabricacion, string vcolor, int smidtipotransmision,
            int smidclaserodante, int smidtipocombustible, int inroasiento, int smidcarroceria, string vnromotor, string vplaca,
             int ikilometraje, string vVin,
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
            return dal.RegistrarInspeccion_DAL(smidpersona, idpoliza, idvehiculo, sminacionalidad,
            smestadocivil, Convert.ToString(dfechanac), vemail, vtelefono1, vcelular, btsexo, smidtablaformapago,
            smidtipovehiculo, smidmarca, smidmodelo, smianiofabricacion, vcolor, smidtipotransmision,
            smidclaserodante, smidtipocombustible, inroasiento, smidcarroceria, vnromotor, vplaca,
             ikilometraje, vVin,
            iidinspeccion, Convert.ToString(fecInspeccion), hrInspeccion, Convert.ToString(fecRecordatorio), hrRecordatorio,
            smidtablaestadoinspeccion,
            btaire, btalarma, btpestillos, bttapizcuero, btlunaselectricas, btseguroruedas,
            btllantarep, btequipomusicaorig, btparlantesoriginal, btaccesorios, vobservacionesaccesorios,
            smidtablatipodano, vobservaciones,
            smidestadofarodelante, smcantfarodelante, smidestadofaropost, smcantfaropost,
            smestadofarodireccion, smcantfarodireccion, smcantfaroneblinero, smestadofaroneblinero,
            smcantespejoexterno, smestadoespejoexterno, smestadospoiler, smcantspoiler, smtipoaros,
            smcantaros, smestadomascara, smpintura, smtipoparachoque, smcarroceria, smconsola,
            smtablero, btequipomusicafijo, vinspector, smidcalificacion);
        }

        //Listado Imagenes Inpeccion
        public List<RespuestaPost> GuardarFotoInspeccion_BL(int iidinspeccion, string fecha, string descripcion)
        {
            return dal.GuardarFotoInspeccion_DAL(iidinspeccion, fecha, descripcion);
        }

        //Listado Imagenes Inpeccion
        public List<ImagenInspeccionEntity> ListarImgInspeccion_BL(int codinspeccion)
        {
            return dal.ListarImgInspeccion_DAL(codinspeccion);
        }

        public List<RespuestaPost> InsertarPolizaVehiculo_BL(int smidciaseguros, int idpoliza, int idvehiculo)
        {
            return dal.InsertarPolizaVehiculo_DAL(smidciaseguros, idpoliza, idvehiculo);
        }

        public List<RespuestaPost> EliminarPolizaVehiculo_BL(int smidciaseguros, int idpoliza, int idvehiculo)
        {
            return dal.EliminarPolizaVehiculo_DAL(smidciaseguros, idpoliza, idvehiculo);
        }

        //***************************************************************************************************************************************
        //Reporte Inspeccion *******************************************************************************************************************
        //***************************************************************************************************************************************


        public List<ReporteInspeccionEntity> ListarReporteInspeccion_BL(int iidinspeccion)
        {
            return dal.ListarReporteInspeccion_DAL(iidinspeccion);
        }


        //***************************************************************************************************************************************
        //CONSULTAS *******************************************************************************************************************
        //*

        public List<Inspeccion> ListarInspeccion_BL(string iidinspeccion, string idpoliza, string placa, string fechaini, string fechafin, string nombre, int NroDePagina, int RegPorPag)
        {
            return dal.ListarInspeccion_DAL(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre, NroDePagina, RegPorPag);
        }

        public List<ListarInspeccionExportEntity> ListarInspeccionExport_BL(string iidinspeccion, string idpoliza, string placa, string fechaini, string fechafin, string nombre)
        {
            return dal.ListarInspeccionExport_DAL(iidinspeccion, idpoliza, placa, fechaini, fechafin, nombre);
        }

        //Cancelar Inspeccion
        public List<RespuestaPost> Cancelar_Inspeccion_BL(int idinspeccion)
        {
            return dal.Cancelar_Inspeccion_DAL(idinspeccion);
        }

        //***************************************************************************************************************************************
        //SINIESTROS*******************************************************************************************************************
        //***************************************************************************************************************************************

        public List<ListarPolizaEntity> Listar_Poliza_Vehiculo_SIN_BL(string idpoliza, string placa, string nombre, string estado, int NroDePagina, int RegPorPag)
        {
            return dal.Listar_PolizaVehiculo_SIN_DAL(idpoliza, placa, nombre, estado, NroDePagina, RegPorPag);
        }

        public List<PolizaVehiculoEntity> Select_PolizaVehiculo_BL(string idpoliza, string placa)
        {
            return dal.Select_PolizaVehiculo_DAL(idpoliza, placa);
        }

        public List<OcurrenciaEntity> Combo_Ocurrencia_BL()
        {
            return dal.Combo_Ocurrencia_DAL();
        }
        public List<ConsecuenciaEntity> Combo_Consecuencia_BL()
        {
            return dal.Combo_Consecuencia_DAL();
        }
        public List<TipoSiniestroEntity> Combo_TipoSiniestro_BL()
        {
            return dal.Combo_TipoSiniestro_DAL();
        }

        public List<TipoDeclaranteEntity> Combo_TipoDeclarante_BL()
        {
            return dal.Combo_TipoDeclarante_DAL();
        }

        public List<ParentescoEntity> Combo_Parentesco_BL()
        {
            return dal.Combo_Parentesco_DAL();
        }

        public List<UbigeoEntity> AutcomUbigeo_BL()
        {
            return dal.Autocom_Ubigeo_DAL();
        }


        public List<RespuestaPost> RegistrarSiniestro_BL(
            string idpoliza,string smidciaseguros, string iestadosiniestro, string dFecNotificacion
            , string idocurrencia, string idtiposiniestro, string idconsecuencia, string dFecOcurrencia
            , string vlugarsiniestro, string vubicasiniestro, string iocupantes, string idtipodeclarante
            , string vdenominacion, string vtelef_declarante, string iparentaseg_declarante, string vmaildeclarante
            , string vconductor, string idtipodoc, string vnrodociden, string vlicencia
            , string iparentaseg_conductor, string vtelef_conductor, string vemail_conductor, string dvencilicencia
            , string idcomisaria, string vcategoria, string vdetasiniestro, string nidusuario
           )
        {
            return dal.RegistrarSiniestro_DAL(
                idpoliza, smidciaseguros, iestadosiniestro, dFecNotificacion
                , idocurrencia, idtiposiniestro, idconsecuencia, dFecOcurrencia
                , vlugarsiniestro, vubicasiniestro, iocupantes, idtipodeclarante
                , vdenominacion, vtelef_declarante, iparentaseg_declarante, vmaildeclarante
                , vconductor, idtipodoc, vnrodociden, vlicencia
                , iparentaseg_conductor, vtelef_conductor, vemail_conductor, dvencilicencia
                , idcomisaria, vcategoria, vdetasiniestro, nidusuario
                );
        }


        public List<ComisariaEntity> Listar_Comisaria_BL(string vdescripcion, string vdireccion, int NroDePagina, int RegPorPag)
        {
            return dal.Listar_Comisaria_DAL(vdescripcion,vdireccion, NroDePagina, RegPorPag);
        }

        public List<ComboUsuario> ComboUsuario_BL(string idperfil)
        {
            return dal.Combo_Usuario_DAL(idperfil);
        }



    }
}

using CrystalDecisions.CrystalReports.Engine;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CrystalDecisions.Shared;

namespace QGenesisVEH.Controllers
{
    public class pruebaController : Controller
    {
        // GET: prueba
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult exportReport(int id)
        {

            ReportDocument rd = new ReportDocument();

            rd.Load(Path.Combine(Server.MapPath("~/Reporte"), "CrystalReport1.rpt"));
            rd.SetDatabaseLogon("sa", "$sqlserver123", "192.168.1.80", "DB_Genesis_Vehicular_5");

            rd.SetParameterValue("@idinspeccion", id);
            
            Response.Buffer = false;
            Response.ClearContent();
            Response.ClearHeaders();

            try
            {
                Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                stream.Seek(0, SeekOrigin.Begin);
                return File(stream, "application/pdf", "ReporteInspeccion.pdf");
            }
            catch
            {
                throw;
            }
        }


    }
}
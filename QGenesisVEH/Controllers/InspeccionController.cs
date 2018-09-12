using CrystalDecisions.CrystalReports.Engine;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QGenesisVEH.Controllers
{
    public class InspeccionController : Controller
    {
        // GET: Inspeccion
        public ActionResult RegistroInspeccion()
        {
            return View();
        }

        public ActionResult ReporteInspeccion()
        {
            return View();
        }


    }
}
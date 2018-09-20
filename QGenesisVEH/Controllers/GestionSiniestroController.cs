using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QGenesisVEH.Controllers
{
    public class GestionSiniestroController : Controller
    {
        // GET: GestionSiniestro
        public ActionResult RegistrarSiniestro()
        {
            return View();
        }

        public ActionResult ListarSiniestro()
        {
            return View();
        }
    }
}
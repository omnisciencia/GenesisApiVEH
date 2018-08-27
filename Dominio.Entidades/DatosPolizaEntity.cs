using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entidades
{
    public class DatosPolizaEntity
    {
        public int smidpersona { get; set; }
        public int idpoliza { get; set; }
        public int idvehiculo { get; set; }
        public string tipocontratante { get; set; }
        public string tipodoc { get; set; }
        public string dni { get; set; }
        public string nombre { get; set; }
        public int sexo { get; set; }
        public string nacionalidad { get; set; }
        public int ecivil { get; set; }
        public string fecnaci { get; set; }
        public string email { get; set; }
        public string telf { get; set; }
        public string celu { get; set; }

        public int nropoliza { get; set; }
        public string planproducto { get; set; }
        public string vigencia { get; set; }
        public string tipopoliza { get; set; }
        public int formapago { get; set; }

        public int claseveh { get; set; }
        public string marcaveh { get; set; }
        public string modeloveh { get; set; }
        public string anio { get; set; }
        public string color { get; set; }
        public string nromotor { get; set; }
        public string placa { get; set; }
        public string vin { get; set; }
        public string puertas { get; set; }
        public string nroserie { get; set; }
        public int ikilometraje { get; set; }

        public string fecrecordatorio { get; set; }
        public string horrecordatorio { get; set; }
        public string fecinspeccion { get; set; }
        public string hrinspeccion { get; set; }
        public string estado { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entidades
{
    public class ActualizarVehiculo
    {
        public int idvehiculo { get; set; }
        public int idtipoveh { get; set; }
        public int idmarca { get; set; }
        public int idmodelo { get; set; }
        public string vplaca { get; set; }
        public int inroasiento { get; set; }
        public int smianiofabricacion { get; set; }
        public string vnromotor { get; set; }
        public string vVin { get; set; }
        public string vcolor { get; set; }
        public string vencimiento { get; set; }//fecha
        public int ciaSeguroSoat { get; set; }
        public int idcatriesgo { get; set; }
        public string suma { get; set; }

    }
}

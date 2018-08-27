using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entidades
{
    public class Inspeccion
    {        
            public string iidinspeccion { get; set; }
            public string idpoliza { get; set; }
            public string Persona { get; set; }
            public string vplaca { get; set; }
            public string smidtablaestadoinspeccion { get; set; }
            public string dtfec_hora_registro { get; set; }            
            public string dfecha { get; set; }
            public string Marca { get; set; }
            public string Modelo { get; set; }
            public string Estado { get; set; }
            public string TotalRegistros { get; set; }
        

    }
}

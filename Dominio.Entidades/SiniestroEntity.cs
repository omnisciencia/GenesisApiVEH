using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entidades
{
    public class SiniestroEntity
    {        
        public string idsiniestro { get; set; }        
        public string idocurrencia { get; set; }
        public string Persona { get; set; }
        public string vplaca { get; set; }        
        public string dFecRegistro { get; set; }
        public string Estado { get; set; }
        public string TotalRegistros { get; set; }

        
        public string smidciaseguros { get; set; }
        public string idpoliza { get; set; }
        public string idvehiculo { get; set; }
        public string iestadosiniestro { get; set; }
        public string dFecNotificacion { get; set; }        
        public string dUltmodificación { get; set; }        
        public string idtiposiniestro { get; set; }
        public string idconsecuencia { get; set; }
        public string dFecOcurrencia { get; set; }
        public string vlugarsiniestro { get; set; }
        public string vubicasiniestro { get; set; }
        public string iocupantes { get; set; }
        public string idtipodeclarante { get; set; }
        public string vdenominacion { get; set; }
        public string vtelef_declarante { get; set; }
        public string iparentaseg_declarante { get; set; }
        public string vmaildeclarante { get; set; } 
        public string vconductor { get; set; }
        public string idtipodoc { get; set; }
        public string vnrodociden { get; set; }
        public string vlicencia { get; set; }
        public string iparentaseg_conductor { get; set; }
        public string vtelef_conductor { get; set; }
        public string vemail_conductor { get; set; }
        public string dvencilicencia { get; set; }
        public string idcomisaria { get; set; }
        public string descomisaria { get; set; }        
        public string vcategoria { get; set; }
        public string vdetasiniestro { get; set; }
        public string nidusuario { get; set; }
        public string vimgtarjetaprop { get; set; }
        public string vimglicconducir { get; set; }
        public string vimgsoat { get; set; }

    }
}

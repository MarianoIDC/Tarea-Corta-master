using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace tecboxapi777.Controllers
{
    public class StatsTopController : ApiController
    {
        // POST: api/Statstop
        public string Post([FromBody]string value)
        {
            return "{\"error\": null, \"top\": [{\"id\" : 1}]}";
        }
    }
}

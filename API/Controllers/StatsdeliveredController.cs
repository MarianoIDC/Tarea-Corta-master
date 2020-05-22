using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace tecboxapi777.Controllers
{
    public class StatsdeliveredController : ApiController
    {
        // POST: api/Statsdelivered
        public string Post([FromBody]string value)
        {
            return "{'error': null, 'dlist': [{'id' :: 1}]}";
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace tecboxapi777.Controllers
{
    public class PackagestatusController : ApiController
    {
        // GET: api/Packagestatus/5
        public string Get(int id)
        {
            return "{ \"error\": null, \"packages\": [{\"status\" : \"alive\"}]}";
        }

        // PUT: api/Packagestatus/5
        public string Put(int id, [FromBody]string value)
        {
            return "{\"error\": null}";
        }
    }
}

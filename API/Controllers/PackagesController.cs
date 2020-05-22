using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace tecboxapi777.Controllers
{
    public class PackagesController : ApiController
    {
        // GET: api/Packages
        public string Get()
        {
            return "{\"error\": null, \"packages\": [{\"id\" : 1, \"client\" : \"fabian\", \"desc\" : \"test\", \"ddate\" : 32131}]}";
        }

        // GET: api/Packages/5
        public string Get(int id)
        {
            return "{\"error\": null, {\"id\" : 1, \"client\" : \"fabian\", \"desc\" : \"test\", \"ddate\" : 32131}}";
        }

        // POST: api/Packages
        public string Post([FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // PUT: api/Packages/5
        public string Put(int id, [FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // DELETE: api/Packages/5
        public string Delete(int id)
        {
            return "{\"error\": null}";
        }
    }
}

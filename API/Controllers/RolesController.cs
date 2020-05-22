using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace tecboxapi777.Controllers
{
    public class RolesController : ApiController
    {
        // GET: api/Roles
        public string Get()
        {
            return "{\"error\": null, \"roles\": [{\"id\" : 1, \"name\" : \"fabian\", \"desc\" : \"lorem ipsum\"}]}";
        }

        // GET: api/Roles/5
        public string Get(int id)
        {
            return "{\"error\": null, {\"id\" : 1, \"name\" : \"fabian\", \"desc\" : \"lorem ipsum\"}}";
        }

        // POST: api/Roles
        //TODO: hacer que retorne solo el ID, no el value entero
        public string Post([FromBody]string value)
        {
            return "{\"error\":null, \"id\":" + value + "}";
        }

        // PUT: api/Roles/5
        public string Put(int id, [FromBody]string value)
        {
            return "{\"error\":null}";
        }

        // DELETE: api/Roles/5
        public string Delete(int id)
        {
            return "{\"error\":null}";
        }

    }
}

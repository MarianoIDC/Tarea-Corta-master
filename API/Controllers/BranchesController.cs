using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace tecboxapi777.Controllers
{
    public class BranchesController : ApiController
    {
        // GET: api/Branches
        public string Get()
        {
            return "{ \"error\": null, \"branches\": [{\"id\" : 1, \"name\" : \"Heredia\", \"addr\" : \"Calle 3, san Francisco\", \"tel\" : 87656192, \"manag\" : \"Fabian Montero\"}]}";
        }

        // GET: api/Branches/5
        public string Get(int id)
        {
            return "{ \"error\": null, {\"id\" : 1, \"name\" : \"Heredia\", \"addr\" : \"Calle 3, san Francisco\", \"tel\" : 87656192, \"manag\" : \"Fabian Montero\"}}"; ;
        }

        // POST: api/Branches
        public string Post([FromBody]string value)
        {
            return "{\"error\": null, \"id\" : 1}";
        }

        // PUT: api/Branches/5
        public string Put(int id, [FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // DELETE: api/Branches/5
        public string Delete(int id)
        {
            return "{\"error\": null}";
        }
    }
}

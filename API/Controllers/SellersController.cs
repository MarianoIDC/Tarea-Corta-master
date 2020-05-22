using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace tecboxapi777.Controllers
{
    public class SellersController : ApiController
    {
        // GET: api/Sellers
        public string Get()
        {
            return "{\"error\": null, \"sellers\": [{\"id\" : 1, \"name\" : \"Fabian\", \"lastn\" : \"Montero\"}]}";
        }

        // GET: api/Sellers/5
        public string Get(int id)
        {
            return "{\"error\": null, {\"id\" : 1, \"name\" : \"Fabian\", \"lastn\" : \"Montero\"}}";
        }

        // POST: api/Sellers
        public string Post([FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // PUT: api/Sellers/5
        public string Put(int id, [FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // DELETE: api/Sellers/5
        public string Delete(int id)
        {
            return "{\"error\": null}";
        }
    }
}

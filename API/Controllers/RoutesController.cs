using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

/*
# obtener todas los ruta
GET /routes
=> Error | 

# eliminar ruta
DELETE /routes/<id : uint>
=> Error | 
*/
namespace tecboxapi777.Controllers
{
    public class RoutesController : ApiController
    {
        // GET: api/Routes
        public string Get()
        {
            return "{\"error\": null, \"routes\": [{\"id\" : 1, \"distr\" : [\"heredia\"]}]}";
        }

        // GET: api/Routes/5
        public string Get(int id)
        {
            return "{\"error\": null, {\"id\" : 1, \"distr\" : [\"heredia\"]}}";
        }

        // POST: api/Routes
        public string Post([FromBody]string value)
        {
            return "{\"error\": null, \"id\" : 1}";
        }

        // PUT: api/Routes/5
        public string Put(int id, [FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // DELETE: api/Routes/5
        public string Delete(int id)
        {
            return "{\"error\": null}";
        }
    }
}

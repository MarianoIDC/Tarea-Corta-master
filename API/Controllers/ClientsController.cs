using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
/*
# obtener todas los clientes
GET /customers
=> Error | 
*/
namespace tecboxapi777.Controllers
{
    public class ClientsController : ApiController
    {
        // GET: api/Clients
        public string Get()
        {
            return "{\"error\": null, \"customers\": [{\"id\" : 1, \"name\" : \"Fabian\", \"lastn\" : \"Montero\", \"email\" : \"fabian@cluster451.org\", \"locker\" : 67, \"tel\" : 22382034, \"cel\" : 87656192, \"addr\" : \"San Jose Costa Rica\", \"usr\" : \"fabian\", \"pwd\" : \"asdf\"}]}";
        }

        // GET: api/Clients/5
        public string Get(int id)
        {
           return "{\"error\": null, {\"id\" : 1, \"name\" : \"Fabian\", \"lastn\" : \"Montero\", \"email\" : \"fabian@cluster451.org\", \"locker\" : 67, \"tel\" : 22382034, \"cel\" : 87656192, \"addr\" : \"San Jose Costa Rica\", \"usr\" : \"fabian\", \"pwd\" : \"asdf\"}}";
 
        }

        // POST: api/Clients
        public string Post([FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // PUT: api/Clients/5
        public string Put(int id, [FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // DELETE: api/Clients/5
        public string Delete(int id)
        {
            return "{\"error\": null}";

        }
    }
}

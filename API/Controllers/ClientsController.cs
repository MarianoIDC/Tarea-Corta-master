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
        [Route("api/Clients")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, \"customers\": [{\"id\" : 1, \"name\" : \"Fabian\", \"lastn\" : \"Montero\", \"email\" : \"fabian@cluster451.org\", \"locker\" : 67, \"tel\" : 22382034, \"cel\" : 87656192, \"addr\" : \"San Jose Costa Rica\", \"usr\" : \"fabian\", \"pwd\" : \"asdf\"}]}");
            return response;
        }

        // GET: api/Clients/5
        [Route("api/Clients/{id:int}")]
        [HttpGet]
        public HttpResponseMessage Get(int id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, {\"id\" : 1, \"name\" : \"Fabian\", \"lastn\" : \"Montero\", \"email\" : \"fabian@cluster451.org\", \"locker\" : 67, \"tel\" : 22382034, \"cel\" : 87656192, \"addr\" : \"San Jose Costa Rica\", \"usr\" : \"fabian\", \"pwd\" : \"asdf\"}}");
            return response;
        }

        // POST: api/Clients
        [Route("api/Clients")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }

        // PUT: api/Clients/5
        [Route("api/Clients")]
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }

        // DELETE: api/Clients/5
        [Route("api/Clients/{id:int}")]
        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }
    }
}

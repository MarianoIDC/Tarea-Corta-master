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
        [Route("api/Routes/{id:int}")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, \"routes\": [{\"id\" : 1, \"distr\" : [\"heredia\"]}]}");
            return response;
        }

        // GET: api/Routes/5
        [Route("api/Routes/{id:int}")]
        [HttpGet]
        public HttpResponseMessage Get(int id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, {\"id\" : 1, \"distr\" : [\"heredia\"]}}");
            return response;
        }

        // POST: api/Routes
        [Route("api/Routes")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, \"id\" : 1}");
            return response;
        }

        // PUT: api/Routes/5
        [Route("api/Routes")]
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }

        // DELETE: api/Routes/5
        [Route("api/Routes/{id:int}")]
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

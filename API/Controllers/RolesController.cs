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
        [Route("api/Roles/{id:int}")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, \"roles\": [{\"id\" : 1, \"name\" : \"fabian\", \"desc\" : \"lorem ipsum\"}]}");
            return response;
        }

        // GET: api/Roles/5
        [Route("api/Roles/{id:int}")]
        [HttpGet]
        public HttpResponseMessage Get(int id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, {\"id\" : 1, \"name\" : \"fabian\", \"desc\" : \"lorem ipsum\"}}");
            return response;
        }

        // POST: api/Roles
        [Route("api/Roles")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\":null, \"id\":\"1\"}");
            return response;
        }

        // PUT: api/Roles/5
        [Route("api/Roles")]
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\":null}");
            return response;
        }

        // DELETE: api/Roles/5
        [Route("api/Roles/{id:int}")]
        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\":null}");
            return response;
        }

    }
}

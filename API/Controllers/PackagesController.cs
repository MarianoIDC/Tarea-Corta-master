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
        [Route("api/Packages")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, \"packages\": [{\"id\" : 1, \"client\" : \"fabian\", \"desc\" : \"test\", \"ddate\" : 32131}]}");
            return response;
        }

        // GET: api/Packages/5
        [Route("api/Packages/{id:int}")]
        [HttpGet]
        public HttpResponseMessage Get(int id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, {\"id\" : 1, \"client\" : \"fabian\", \"desc\" : \"test\", \"ddate\" : 32131}}");
            return response;
        }

        // POST: api/Packages
        [Route("api/Packages")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }

        // PUT: api/Packages/5
        [Route("api/Packages")]
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }

        // DELETE: api/Packages/5
        [Route("api/Packages/{id:int}")]
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

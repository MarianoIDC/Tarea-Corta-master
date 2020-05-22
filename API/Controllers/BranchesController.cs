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
        [Route("api/Branches")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{ \"error\": null, \"branches\": [{\"id\" : 1, \"name\" : \"Heredia\", \"addr\" : \"Calle 3, san Francisco\", \"tel\" : 87656192, \"manag\" : \"Fabian Montero\"}]}");
            return response;
        }

        // GET: api/Branches/5
        [Route("api/Branches/{id:int}")]
        [HttpGet]
        public HttpResponseMessage Get(int id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{ \"error\": null, {\"id\" : 1, \"name\" : \"Heredia\", \"addr\" : \"Calle 3, san Francisco\", \"tel\" : 87656192, \"manag\" : \"Fabian Montero\"}}"); ;
            return response;
        }

        // POST: api/Branches
        [Route("api/Branches")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, \"id\" : 1}");
            return response;
        }

        // PUT: api/Branches/5
        [Route("api/Branches")]
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }

        // DELETE: api/Branches/5
        [Route("api/Branches/{id:int}")]
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

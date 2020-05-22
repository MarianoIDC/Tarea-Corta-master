using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace tecboxapi777.Controllers
{
    public class SearchController : ApiController
    {
        // POST: api/Search
        [Route("api/Search")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, \"products\": [{\"id\" : 1, \"name\" : \"prod1\", \"desc\" : \"test test\", \"seller\" : 1, \"price\" : 954, \"tax\" : false, \"disc\" : false}]}");
            return response;
        }
    }
}

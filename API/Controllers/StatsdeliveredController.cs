using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace tecboxapi777.Controllers
{
    public class StatsdeliveredController : ApiController
    {
        // POST: api/Statsdelivered
        [Route("api/Statsdelivered")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{'error': null, 'dlist': [{'id' :: 1}]}");
            return response;
        }
    }
}



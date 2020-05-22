using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace tecboxapi777.Controllers
{
    public class StatsdeliveryController : ApiController
    {
        // GET: api/Statsdelivery
        [Route("api/Statsdelivery")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{'error': null, 'dlist': [{'id' :: 1}]}");
            return response;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace tecboxapi777.Controllers
{
    public class AuthController : ApiController
    {
        // POST: api/Auth
        [Route("api/Auth")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }
    }
}

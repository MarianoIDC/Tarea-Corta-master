using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace tecboxapi777.Controllers
{
    public class ProductsController : ApiController
    {
        // GET: api/Products
        [Route("api/Products/{id:int}")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent( "{\"error\": null, \"products\": [{\"id\" : 3, \"name\" : \"Prod1\", \"desc\" : \"desc1\", \"seller\" : 2, \"price\" : 100, \"tax\" : false, \"disc\" : true}]}");
            return response;
        }

        // GET: api/Products/5
        [Route("api/Products/{id:int}")]
        [HttpGet]
        public HttpResponseMessage Get(int id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent( "{\"error\": null, {\"id\" : 3, \"name\" : \"Prod1\", \"desc\" : \"desc1\", \"seller\" : 2, \"price\" : 100, \"tax\" : false, \"disc\" : true}}");
            return response;
        }

        // POST: api/Products
        [Route("api/Products")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent( "{\"error\": null}");
            return response;
        }

        // PUT: api/Products/5
        [Route("api/Products")]
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent( "{\"error\": null}");
            return response;
        }

        // DELETE: api/Products/5
        [Route("api/Products/{id:int}")]
        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent( "{\"error\": null}");
            return response;
        }
    }
}

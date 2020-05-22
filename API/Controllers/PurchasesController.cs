using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace tecboxapi777.Controllers
{
    public class PurchasesController : ApiController
    {
        // GET: api/Purchases
        [Route("api/Purchases")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent( "{\"error\": null, \"prods\" : [{id : 1, \"qty\" : 3}], \"totalp\" : 5, \"totals\" : 3, \"disc\" : 20, \"tax\" : 13}");
            return response;
        }

        // POST: api/Purchases
        [Route("api/Purchases")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent( "{\"error\": null, \"id\" : 1}");
            return response;
        }

        // PUT: api/Purchases/5
        [Route("api/Purchases")]
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]string value)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent( "{\"error\": null}");
            return response;
        }

        // DELETE: api/Purchases/5
        [Route("api/Purchases/{id:int}")]
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

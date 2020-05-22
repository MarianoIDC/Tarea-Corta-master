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
        public string Get()
        {
            return "{\"error\": null, \"prods\" : [{id : 1, \"qty\" : 3}], \"totalp\" : 5, \"totals\" : 3, \"disc\" : 20, \"tax\" : 13}";
        }

        // POST: api/Purchases
        public string Post([FromBody]string value)
        {
            return "{\"error\": null, \"id\" : 1}";
        }

        // PUT: api/Purchases/5
        public string Put(int id, [FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // DELETE: api/Purchases/5
        public string Delete(int id)
        {
            return "{\"error\": null}";
        }
    }
}

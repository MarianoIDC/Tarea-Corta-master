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
        public string Post([FromBody]string value)
        {
            return "{\"error\": null, \"products\": [{\"id\" : 1, \"name\" : \"prod1\", \"desc\" : \"test test\", \"seller\" : 1, \"price\" : 954, \"tax\" : false, \"disc\" : false}]}";
        }
        /*
        // PUT: api/Search/5
        public void Put(int id, [FromBody]string value)
        {
        }
        */
    }
}

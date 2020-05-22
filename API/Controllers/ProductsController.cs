using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
/*
# crear producto

# buscar producto
POST /products/search
<= {<<\"name\" : str>>, <<\"desc\" : str>>, <<\"seller\" : uid>>, <<\"price\" : int>>, <<\"tax\" : bool>>, <<\"disc\" : bool>>}
=> Error | 


# obtener todas los productos
GET /products
=> Error | 


*/
namespace tecboxapi777.Controllers
{
    public class ProductsController : ApiController
    {
        // GET: api/Products
        public string Get()
        {
            return "{\"error\": null, \"products\": [{\"id\" : 3, \"name\" : \"Prod1\", \"desc\" : \"desc1\", \"seller\" : 2, \"price\" : 100, \"tax\" : false, \"disc\" : true}]}";
        }

        // GET: api/Products/5
        public string Get(int id)
        {
            return "{\"error\": null, {\"id\" : 3, \"name\" : \"Prod1\", \"desc\" : \"desc1\", \"seller\" : 2, \"price\" : 100, \"tax\" : false, \"disc\" : true}}";
        }

        // POST: api/Products
        public string Post([FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // PUT: api/Products/5
        public string Put(int id, [FromBody]string value)
        {
            return "{\"error\": null}";
        }

        // DELETE: api/Products/5
        public string Delete(int id)
        {
            return "{\"error\": null}";
        }
    }
}

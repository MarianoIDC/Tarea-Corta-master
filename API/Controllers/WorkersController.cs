using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace tecboxapi777.Controllers
{
    public class WorkersController : ApiController
    {
        // GET: api/Worker
        [Route("api/Workers")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, \"workers\": [{\"id\" : 1, \"name\" : \"Fabian Montero\", \"lastn\" : \"Montero\", \"bdate\" : 19235, \"jdate\" : 351351, \"branch\" : \"Heredia\", \"salary\" : 13213}]}");
            return response;
        }

        // GET: api/Workers/id
        [Route("api/Workers/{id:int}")]
        [HttpGet]
        public HttpResponseMessage Get(int id)
        {
            //db.workers.get(id);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null, {\"id\" : 1, \"name\" : \"Fabian Montero\", \"lastn\" : \"Montero\", \"bdate\" : 19235, \"jdate\" : 351351, \"branch\" : \"Heredia\", \"salary\" : 13213}}");
            return response;
        }

        // POST: api/Workers
        [Route("api/Workers")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string value)
        {
            //db.workers.post(value);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }

        // PUT: api/Workers/id
        [Route("api/Workers")]
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]string value)
        {
            //db.workers.put(id, value);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }

        // DELETE: api/Workers/id
        [Route("api/Workers/{id:int}")]
        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            //db.workers.delete(id);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Content = new StringContent("{\"error\": null}");
            return response;
        }
    }
}

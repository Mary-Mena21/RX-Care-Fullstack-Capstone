using Microsoft.AspNetCore.Mvc;
using RXCareServer.Models;
using RXCareServer.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RXCareServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly ILoginRepository _loginRepository;

        public LoginController(ILoginRepository loginRepository)
        {
            _loginRepository = loginRepository;
        }

        [HttpPost("loginvalidate")]
        public IActionResult LoginWithCredentials([FromBody] LoginRequest loginRequest)
        {

            var loginResponse = _loginRepository.LoginWithCredentials(loginRequest);

            Console.WriteLine(loginResponse);

            if (loginResponse == null)
            {
                return NotFound();
            }

            CookieOptions cookie = new CookieOptions
            {
                HttpOnly = false,
                Secure = true,
                Expires = DateTime.UtcNow.AddDays(2),
                SameSite = SameSiteMode.None,
            };


            Console.WriteLine(loginResponse);


            var responseBody = new
            {
                StatusCode = 200,
                StatusText = "OK",
                User = loginResponse
            };

            Response.Cookies.Append("authCookie", $"{loginRequest.Email}", cookie);
            return Ok(responseBody);
        }






        //-----------------------------------------------
        // GET: api/<LoginController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<LoginController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<LoginController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<LoginController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<LoginController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}

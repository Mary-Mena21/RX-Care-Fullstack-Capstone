using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RXCareServer.Models;
using RXCareServer.Repositories;

namespace RXCareServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        //-----------------------------------------------------------

        // POST api/<PatientController>
        [HttpPost("/addUser")]
        public IActionResult Post(UserAdd User)
        {
            _userRepository.AddUser(User);
            return Created("", User);
        }
    }
}
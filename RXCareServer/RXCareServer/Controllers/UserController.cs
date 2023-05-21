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
        public IActionResult Post(UserInfo2 User)
        {
            _userRepository.AddUser(User);
            return Created("", User);
        }

        //-----------------------------------------------------------

        // POST api/<PatientController>
        [HttpPost("/addLoginUser")]
        public IActionResult Post(UserLogin User)
        {
            _userRepository.AddLoginUser(User);
            return Created("", User);
        }

        //-----------------------------------------------------------

        [HttpPut("UpdateUserkById/{Id}")]
        public IActionResult Put(int Id, UserInfo2 User)
        {
            if (Id != User.Id)
            {
                return BadRequest();
            }
            _userRepository.EditUser(User);
            //return NoContent();
            return Ok(User);
        }
        //-----------------------------------------------------------

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            UserInfo3 user = (UserInfo3)_userRepository.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            _userRepository.DeleteUserById(user.Id);
            return NoContent();
        }

        //------------------------------------------------------------------------
        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            UserInfo3 user = _userRepository.GetUserById(id);
            if (user == null)
            {
                return NotFound($"{id} Not Found!");
            }
            return Ok(user);

        }
        //======================================

        [HttpGet("GetLoginByEmail/{Email}")]
        public IActionResult GetByEmail(string Email)
        {
            if (Email == null)
            {
                return BadRequest();
            }
            UserLogin user = _userRepository.GetUserLoginByEmail(Email);
            if (user == null)
            {
                return NotFound($"{Email} Not Found!");
            }
            return Ok(user);

        }

















    }
}
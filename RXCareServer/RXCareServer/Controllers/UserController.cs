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

        // POST api/<PatientController>
        [HttpPost("/AddRegisterUser")]
        public IActionResult Post(User User)
        {
            _userRepository.AddRegisterUser(User);
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

        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            UserInfo2 user = (UserInfo2)_userRepository.GetUserInfoById(Id);
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
        //------------------------------------------------------------------------
        [HttpGet("GetProfileById/{Id}")]
        public IActionResult GetProfileById(int Id)
        {
            if (Id == null)
            {
                return BadRequest();
            }
            User user = _userRepository.GetUserProfileById(Id);
            if (user == null)
            {
                return NotFound($"{Id} Not Found!");
            }
            return Ok(user);

        }

        //-------------------------------------------------------------------------
        [HttpGet("GetUserInfoById/{Id}")]
        public IActionResult GetUserInfoById(int Id)
        {
            if (Id == null)
            {
                return BadRequest();
            }
            UserInfo2 user = _userRepository.GetUserInfoById(Id);
            if (user == null)
            {
                return NotFound($"{Id} Not Found!");
            }
            return Ok(user);

        }
        //======================================
        //-------------------------------------------------------------------------
        [HttpGet("GetUserInfoByUserId/{Id}")]
        public IActionResult GetUserInfoByUserId(int Id)
        {
            if (Id == null)
            {
                return BadRequest();
            }
            UserInfo2 user = _userRepository.GetUserInfoByUserId(Id);
            if (user == null)
            {
                return NotFound($"{Id} Not Found!");
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

        //------------------------------------------------------------------------
        [HttpGet("GetDoctorList")]
        public IActionResult GetDoctorList()
        {

            List<User> users = _userRepository.GetDctorsList();
            return Ok(users);

        }
        //======================================















    }
}
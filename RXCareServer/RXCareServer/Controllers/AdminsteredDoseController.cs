using Microsoft.AspNetCore.Mvc;
using RXCareServer.Models;
using RXCareServer.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RXCareServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsteredDoseController : ControllerBase
    {
        private readonly IAdminsteredDoseRepository _adminsteredDoseRepository;

        public AdminsteredDoseController(IAdminsteredDoseRepository AdminsteredDoseRepository)
        {
            _adminsteredDoseRepository = AdminsteredDoseRepository;
        }

        //-----------------------------------------------------------

        // GET api/<AdminsteredDoseController>/5
        [HttpGet("GetAdminsteredDoses/{PrescriptionId}")]
        public IActionResult GetAdminsteredDose(int PrescriptionId)
        {
            var AdminsteredDoses = _adminsteredDoseRepository.GetAdminsteredDoses(PrescriptionId);
            if (AdminsteredDoses == null) { return NotFound(); }

            return Ok(AdminsteredDoses);
        }

        //AddAdminsteredDose(AdminsteredDose adminsteredDose)


        //-----------------------------------------------------------
        // POST api/<AdminsteredDoseController>
        [HttpPost("Add")]
        public IActionResult AddAdminsteredDose(AdminsteredDose AdminsteredDose)
        {
            _adminsteredDoseRepository.AddAdminsteredDose(AdminsteredDose);
            return Created("", AdminsteredDose);
        }
        //-----------------------------------------------------------
        // PUT api/<AdminsteredDoseController>/5
        [HttpPut("UpdateComment/{Id}")]
        public IActionResult Put(int Id, AdminsteredDose adminsteredDose)
        {
            if (Id != adminsteredDose.Id)
            {
                return BadRequest();
            }
            _adminsteredDoseRepository.EditAdminsteredDose(adminsteredDose);
            //return NoContent();
            return Ok(adminsteredDose);
        }

        //-----------------------------------------------------------
        // DELETE api/<AdminsteredDoseController>/5
        [HttpDelete("DeleteAdminsteredDose/{Id}")]
        public IActionResult DeleteAdminsteredDose(int Id)
        {
            _adminsteredDoseRepository.DeleteAdminsteredDose(Id);
            return NoContent();
        }




    }
}

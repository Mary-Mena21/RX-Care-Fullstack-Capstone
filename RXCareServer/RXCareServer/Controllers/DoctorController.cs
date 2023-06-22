using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RXCareServer.Models;
using RXCareServer.Repositories;

namespace RXCareServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorRepository _doctorRepository;
        public DoctorController(IDoctorRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }
        //-----------------------------------------------------------

        [HttpGet("GetDoctorsInformationProfileList")]
        public IActionResult GetDoctorList()
        {

            List<DoctorInformationProfile> Doctors = _doctorRepository.GetDoctorsInformationProfileList();
            return Ok(Doctors);

        }
        //-----------------------------------------------------------

        [HttpGet("GetDoctorFullInfo")]
        public IActionResult GetDoctorFullInfo(int Id)
        {
            var Doctor = _doctorRepository.GetDoctorFullInfo(Id);
            if (Doctor == null) { return NotFound(); }
            return Ok(Doctor);

        }
        //======================================
    }
}

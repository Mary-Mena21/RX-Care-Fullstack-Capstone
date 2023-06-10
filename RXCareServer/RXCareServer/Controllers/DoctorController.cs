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
        //======================================
    }
}

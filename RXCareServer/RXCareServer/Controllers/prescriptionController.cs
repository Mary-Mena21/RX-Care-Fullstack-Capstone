using Microsoft.AspNetCore.Mvc;
using RXCareServer.Repositories;

namespace RXCareServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class prescriptionController : ControllerBase
    {
        private readonly IprescriptionRepository _prescriptionRepository;

        public prescriptionController(IprescriptionRepository prescriptionRepository)
        {
            _prescriptionRepository = prescriptionRepository;
        }
        //-----------------------------------------------------------

        // GET: api/<prescriptionController>
        [HttpGet("{Id}")]
        public IActionResult GetById(int Id)
        {
            return Ok(_prescriptionRepository.GetPrescriptionById(Id));
        }
        //-----------------------------------------------------------



    }
}

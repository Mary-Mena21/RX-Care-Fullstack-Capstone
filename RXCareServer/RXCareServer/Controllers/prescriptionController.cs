using Microsoft.AspNetCore.Mvc;
using RXCareServer.Models;
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
        [HttpGet("Patient/{Id}")]
        public IActionResult ByPatientId(int Id)
        {
            return Ok(_prescriptionRepository.GetPrescriptionByPatientId(Id));
        }

        //-----------------------------------------------------------

        // GET: api/<prescriptionController>
        [HttpGet("Patient2/{Id}")]
        public IActionResult ByPatientId2(int Id)
        {
            return Ok(_prescriptionRepository.GetPrescriptionByPatientId2(Id));
        }

        //-----------------------------------------------------------

        // GET: api/<prescriptionController>
        [HttpGet("Prescription/{Id}")]
        public IActionResult GetByPrescriptionId(int Id)
        {
            return Ok(_prescriptionRepository.GetPrescriptionByPrescriptionId(Id));

        }
            //-----------------------------------------------------------
            // POST api/<prescriptionController>
            [HttpPost("/AddPrescription")]
        public IActionResult Post(Prescription prescription)
        {
            _prescriptionRepository.AddPrescription(prescription);
            return Created("", prescription);
        }
        //----------------------------------------------------------
        [HttpPut("UpdatePrescriptionById/{Id}")]
        public IActionResult Put(int Id, Prescription prescription)
        {
            if (Id != prescription.Id)
            {
                return BadRequest();
            }
            _prescriptionRepository.EditPrescription(prescription);
            //return NoContent();
            return Ok(prescription);
        }
        //----------------------------------------------------------

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Prescription Prescription = (Prescription)_prescriptionRepository.GetPrescriptionByPrescriptionId(id);
            if (Prescription == null)
            {
                return NotFound();
            }
            _prescriptionRepository.DeletePrescriptionByPrescriptionId(Prescription.Id);
            return NoContent();
        }
    }
}

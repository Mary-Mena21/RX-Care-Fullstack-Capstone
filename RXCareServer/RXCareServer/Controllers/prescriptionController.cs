using Microsoft.AspNetCore.Mvc;
using RXCareServer.Models;
using RXCareServer.Repositories;
using System.Xml.Linq;

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

        //GET: api/<prescriptionController>
        [HttpGet("Patient/{Id}")]
        public IActionResult ByPatientId(int Id)
        {
            var Prescriptions = _prescriptionRepository.GetPrescriptionByPatientId(Id);

            if (Prescriptions == null) { return NotFound(); }
            return Ok(Prescriptions);
        }

        //-----------------------------------------------------------

        // GET: api/<prescriptionController>
        //[HttpGet("GetPrescriptionOnlyByPatientId/{Id}")]
        //public IActionResult GetPrescriptionOnlyByPatientId(int Id)
        //{
        //    var Prescriptions = _prescriptionRepository.GetPrescriptionOnlyByPatientId(Id);

        //    if (Prescriptions == null) { return NotFound(); }
        //    return Ok(Prescriptions);
        //}

        //-----------------------------------------------------------

        // GET: api/<prescriptionController>
        [HttpGet("Patient2/{Id}")]
        public IActionResult ByPatientId2(int Id)
        {
            var Prescriptions = _prescriptionRepository.GetPrescriptionByPatientId2(Id);
            if (Prescriptions == null) { return NotFound(); }
            return Ok(Prescriptions);
        }

        //-----------------------------------------------------------

        // GET: api/<prescriptionController>
        //[HttpGet("GetPrescriptionMedicineByPrescriptionId/{Id}")]
        //public IActionResult GetPrescriptionMedicineByPrescriptionId(int Id)
        //{
        //    var Prescriptions = _prescriptionRepository.GetPrescriptionMedicineByPrescriptionId(Id);
        //    if (Prescriptions == null) { return NotFound(); }
        //    return Ok(Prescriptions);
        //}
        //-----------------------------------------------------------

        // GET: api/<prescriptionController>
        [HttpGet("Prescription/{Id}")]
        public IActionResult GetByPrescriptionId(int Id)
        {
            var Prescriptions =_prescriptionRepository.GetPrescriptionByPatientId(Id);
            if (Prescriptions == null) { return NotFound(); }
            return Ok(Prescriptions);

        }
        //-----------------------------------------------------------
        [HttpGet("PrescriptionByPrescriptionId/{Id}")]
        public IActionResult GetPrescriptionByPrescriptionId(int Id)
        {
            var Prescription = _prescriptionRepository.GetPrescriptionByPrescriptionId(Id);
            if (Prescription == null) { return NotFound(); }
            return Ok(Prescription);

        }
        //-----------------------------------------------------------
        [HttpGet("GetPrescriptionMedicineByPrescriptionId/{Id}")]
        public IActionResult GetPrescriptionMedicineByPrescriptionId(int Id)
        {
            var Prescription = _prescriptionRepository.GetPrescriptionMedicineByPrescriptionId(Id);
            if (Prescription == null) { return NotFound(); }
            return Ok(Prescription);

        }

        //-----------------------------------------------------------
        [HttpGet("GetPrescriptionDosesByPatientIdAll/{PatientId}")]
        public IActionResult GetPrescriptionDosesByPatientIdAll(int PatientId)
        {
            var Prescription = _prescriptionRepository.GetPrescriptionDosesByPatientIdAll(PatientId);
            if (Prescription == null) { return NotFound(); }
            return Ok(Prescription);

        }

        //-----------------------------------------------------------
        [HttpGet("GetPrescriptionDosesByPatientId/{PatientId}")]
        public IActionResult GetPrescriptionDosesByPatientId(int PatientId)
        {
            var Prescription = _prescriptionRepository.GetPrescriptionDosesByPatientId(PatientId);
            if (Prescription == null) { return NotFound(); }
            return Ok(Prescription);

        }
        //-----------------------------------------------------------
        // POST api/<prescriptionController>
        [HttpPost("/AddPrescription")]
        public IActionResult Post(PrescriptionActive prescription)
        {
            _prescriptionRepository.AddPrescription(prescription);
            return Created("", prescription);
        }
        //----------------------------------------------------------
        [HttpPut("UpdatePrescriptionById/{Id}")]
        public IActionResult Put(int Id, PrescriptionActive prescription)
        {
            if (Id != prescription.Id)
            {
                return BadRequest();
            }
            _prescriptionRepository.EditPrescription(prescription);
            //return NoContent();
            return Ok(prescription);
        }
        //---------------------------Active/false-------------------------------
        [HttpPut("UpdatePrescriptionByIdActive/{Id}")]
        public IActionResult Put(int Id, PrescriptionActiveFalse prescription)
        {
            if (Id != prescription.Id)
            {
                return BadRequest();
            }
            _prescriptionRepository.EditNotActivePrescription(prescription);
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

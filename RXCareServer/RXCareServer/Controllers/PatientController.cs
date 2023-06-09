﻿using Microsoft.AspNetCore.Mvc;
using RXCareServer.Models;
using RXCareServer.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RXCareServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IPatientRepository _patientRepository;

        public PatientController(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }
        //-----------------------------------------------------------
        // GET: api/<PatientController>
        //[HttpGet("Patients")]
        //public IActionResult GetAllPatients()
        //{
        //    return Ok(_patientRepository.GetPatients());
        //}

        //-----------------------------------------------------------
        // GET: api/<PatientController>
        [HttpGet("All/{DoctorId}")]
        public IActionResult GetPatients(int DoctorId)
        {
            var Patient =  _patientRepository.GetDoctorPatients(DoctorId);
            if (Patient == null) { return NotFound(); }
            return Ok(Patient);
        }

        //-----------------------------------------------------------
        // GET: api/<PatientController>
        [HttpGet("{Id}")]
        public IActionResult GetById(int Id)
        {
            var Patient = _patientRepository.GetPatientById(Id);

            if (Patient == null) { return NotFound(); }
            return Ok(Patient);

        }
        //-----------------------------------------------------------
        // GET: api/<PatientController>
        [HttpGet("byUseId/{UserId}")]
        public IActionResult GetPatientByUserId(int UserId)
        {
            var Patient = _patientRepository.GetPatientByUserId(UserId);
            if (Patient == null) { return NotFound(); }
            return Ok(Patient);
        }

        //-----------------------------------------------------------
        //-----------------------------------------------------------
        // GET: api/<PatientController>
        [HttpGet("GetDoctorInfoByPatientId/{Id}")]
        public IActionResult GetDoctorInfoByPatientId(int Id)
        {
            var Doctor = _patientRepository.GetDoctorInfoByPatientId(Id);
            if (Doctor == null) { return NotFound(); }
            return Ok(Doctor);
        }

        //-----------------------------------------------------------
        //-----------------------------------------------------------
        // GET: api/<PatientController>
        [HttpGet("GetDoctorInfoByPatientId2/{Id}")]
        public IActionResult GetDoctorInfoByPatientId2(int Id)
        {
            var Doctor = _patientRepository.GetDoctorInfoByPatientId2(Id);
            if (Doctor == null) { return NotFound(); }
            return Ok(Doctor);
        }

        //-----------------------------------------------------------

        // POST api/<PatientController>
        //[HttpPost("/PatientAdd")]
        //public IActionResult Post(PatientInfo2 patient)
        //{
        //    _patientRepository.AddPatient(patient);
        //    return Created("", patient);
        //}

        //-----------------------------------------------------------

        // POST api/<PatientController>
        //[HttpPost("/Add")]
        //public IActionResult Post(Patient patient)
        //{
        //    _patientRepository.AddPatient(patient);
        //    return Created("", patient);
        //}

        //-----------------------------------------------------------

        ////POST api/<PatientController>
        //[HttpPost("/AddPatient")]
        //public IActionResult Post(Patient patient, User user)
        //{

        //_patientRepository.AddPatient(patient,user);
        //    return CreatedAtRoute("", patient,user);
        //}

        //-----------------------------------------------------------

        [HttpPut("UpdatePatientById/{Id}")]
        public IActionResult Put(int Id, PatientInfo2 Patient)
        {
            if (Id != Patient.Id)
            {
                return BadRequest();
            }
            _patientRepository.EditPatient(Patient);
            //return NoContent();
            return Ok(User);
        }

        //// GET api/<PatientController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<PatientController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<PatientController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<PatientController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}

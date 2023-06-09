﻿using Microsoft.AspNetCore.Mvc;
using RXCareServer.Models;
using RXCareServer.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RXCareServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;

        public CommentController(ICommentRepository CommentRepository)
        {
            _commentRepository = CommentRepository;
        }

        //-----------------------------------------------------------
        // GET: api/<CommentController>
        [HttpGet("{PatientId}")]
        public IActionResult GetByPatientId(int PatientId)
        {
            var Comments = _commentRepository.GetPatientComment(PatientId);
            if (Comments == null) { return NotFound(); }

            //return Ok(_commentRepository.GetPatientComment(PatientId));
            return Ok(Comments);
        }

        //-----------------------------------------------------------
        // GET: api/<CommentController>
        [HttpGet("commentOnMedicine/{PatientId}")]
        public IActionResult GeCommentByPatientId(int PatientId)
        {
            var Comments = _commentRepository.GetPatientCommentOnMedicine(PatientId);
            if (Comments == null) { return NotFound(); }
            return Ok(Comments);
        }
        //-----------------------------------------------------------
        // GET: api/<CommentController>
        [HttpGet("GetCommentByCommentId/{Id}")]
        public IActionResult GetCommentByCommentId(int Id)
        {
            var Comments = _commentRepository.GetCommentByCommentId(Id);
            if (Comments == null) { return NotFound(); }
            return Ok(Comments);
        }

        //-----------------------------------------------------------
        // POST api/<CommentController>
        [HttpPost]
        public IActionResult Post(Comment comment)
        {
            _commentRepository.AddPatientComment(comment);
            return Created("",comment);
        }

        //-----------------------------------------------------------
        // PUT api/<CommentController>/5
        [HttpPut("UpdateComment/{Id}")]
        public IActionResult Put(int Id, Comment comment)
        {
            if (Id != comment.Id)
            {
                return BadRequest();
            }
            _commentRepository.EditPatientComment(comment);
            //return NoContent();
            return Ok(comment);
        }

        //-----------------------------------------------------------
        // DELETE api/<CommentController>/5
        [HttpDelete("DeleteCommentById/{Id}")]
        public IActionResult DeleteById(int Id)
        {
            _commentRepository.DeleteCommentById(Id);
            return NoContent();
        }
    }
}

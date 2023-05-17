using Microsoft.AspNetCore.Http.HttpResults;
namespace RXCareServer.Models
{
    public class Patient
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int DoctorId { get; set; }
        public DateTime DoB { get; set; }
        public string? Address { get; set; }
        public string? Phone { get; set; }
        public decimal Height { get; set; }
        public decimal Weight { get; set; }
        public string? Note { get; set; }

    }

    public class PatientInfo
    {
        public int Id { get; set; }
        public int DoctorId { get; set; }
        public DateTime DoB { get; set; }
        public string? Address { get; set; }
        public string? Phone { get; set; }
        public decimal Height { get; set; }
        public decimal Weight { get; set; }
        public string? Note { get; set; }
        public User? User { get; set; }
    }

}

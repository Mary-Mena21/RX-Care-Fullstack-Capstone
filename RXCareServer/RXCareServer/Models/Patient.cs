namespace RXCareServer.Models
{
    public class Patient
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int DoctorId { get; set; }
        public DateOnly DOB { get; set; }
        public string? Address { get; set; }
        public string? Phone { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }
        public string? Note { get; set; }

    }
}

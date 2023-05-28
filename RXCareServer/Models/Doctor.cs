namespace RXCareServer.Models
{
    public class Doctor
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ClinicId { get; set; }

    }

    public class DoctorInfo
    {
        public int Id { get; set; }
        public User? User { get; set; }
        public Clinic? Clinic { get; set; }

    }
}

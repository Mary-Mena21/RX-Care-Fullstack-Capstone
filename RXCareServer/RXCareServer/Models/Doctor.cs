using RXCareServer.Models;

namespace RXCareServer.Models
{
    public class Doctor
    {
        public int? Id { get; set; }
        public int? UserId { get; set; }
        public int? ClinicId { get; set; }

    }

    public class DoctorInformation
    {
        public int? Id { get; set; }
        public User? User { get; set; }
        public Clinic? Clinic { get; set; }

    }

    public class DoctorInformationProfile
    {
        public int? Id { get; set; }
        public string Img { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Specialty { get; set; }
        public string Language { get; set; }
        public string Gender { get; set; }
        public string About { get; set; }
        public string Education { get; set; }
        public string Qualifications { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Facility { get; set; }
        public string Type { get; set; }
        public string Location { get; set; }


    }

}

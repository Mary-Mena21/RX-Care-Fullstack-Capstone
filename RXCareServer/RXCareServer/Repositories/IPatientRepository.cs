using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IPatientRepository
    {
        List<PatientInfo> GetDoctorPatients(int DoctorId);
        PatientInfo GetPatientById(int Id);
        //List<Patient> GetPatients();
    }
}
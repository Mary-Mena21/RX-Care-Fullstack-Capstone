using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IPatientRepository
    {
        List<PatientInfo> GetDoctorPatients(int DoctorId);
        List<Patient> GetPatients();
    }
}
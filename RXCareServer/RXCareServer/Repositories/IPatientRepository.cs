using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IPatientRepository
    {
        void AddPatient(PatientAdd2 patient);
        void AddPatient(Patient patient);
        List<PatientInfo> GetDoctorPatients(int DoctorId);
        PatientInfo GetPatientById(int Id);
        //List<Patient> GetPatients();
    }
}
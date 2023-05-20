using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IPatientRepository
    {
        //void AddPatient(PatientInfo2 patient);
        //void AddPatient(Patient patient);
        List<PatientInfo> GetDoctorPatients(int DoctorId);
        PatientInfo GetPatientById(int Id);
        //List<Patient> GetPatients();
        //void AddPatient(Patient patient, User user);
        void EditPatient(PatientInfo2 Patient);
        void EditPatient(Patient Patient);
    }
}
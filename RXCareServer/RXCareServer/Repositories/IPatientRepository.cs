using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IPatientRepository
    {
        List<PatientInfo> GetDoctorPatients(int DoctorId);
        PatientInfo GetPatientById(int Id);
        void EditPatient(PatientInfo2 Patient);
        void EditPatient(Patient Patient);
        PatientInfo5 GetDoctorInfoByPatientId(int Id);
        PatientInfo5 GetDoctorInfoByPatientId2(int Id);
        PatientInfo GetPatientByUserId(int UserId);
    }
}
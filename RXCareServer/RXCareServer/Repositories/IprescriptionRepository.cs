using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IprescriptionRepository
    {
        void AddPrescription(PrescriptionActive prescription);
        void DeletePrescriptionByPrescriptionId(int id);
        void EditPrescription(PrescriptionActive prescription);
        List<PrescriptionInfo2> GetPrescriptionByPatientId(int id);
        List<PrescriptionInfo> GetPrescriptionByPatientId2(int Id);
        List<Prescription> GetPrescriptionOnlyByPatientId(int Id);
        Prescription GetPrescriptionByPrescriptionId(int Id);
        PrescriptionInfo GetPrescriptionMedicineByPrescriptionId(int Id);
        List<PrescriptionDose> GetPrescriptionDosesByPatientId(int Id);
        List<PrescriptionMedicineDoses> GetPrescriptionDosesByPatientIdAll(int PatientId);
        void EditNotActivePrescription(PrescriptionActiveFalse prescription);
    }

    //GetPrescriptionByPrescriptionId
}
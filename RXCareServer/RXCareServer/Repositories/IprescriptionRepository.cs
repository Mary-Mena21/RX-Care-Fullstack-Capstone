using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IprescriptionRepository
    {
        void AddPrescription(Prescription prescription);
        void DeletePrescriptionByPrescriptionId(int id);
        void EditPrescription(Prescription prescription);
        List<PrescriptionInfo> GetPrescriptionByPatientId(int id);
        List<PrescriptionInfo> GetPrescriptionByPatientId2(int Id);
        List<Prescription> GetPrescriptionOnlyByPatientId(int Id);
        Prescription GetPrescriptionByPrescriptionId(int Id);
        PrescriptionInfo GetPrescriptionMedicineByPrescriptionId(int Id);
    }

    //GetPrescriptionByPrescriptionId
}
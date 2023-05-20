using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IprescriptionRepository
    {
        void AddPrescription(Prescription prescription);
        void EditPrescription(Prescription prescription);
        List<PrescriptionInfo> GetPrescriptionByPatientId(int id);
        Prescription GetPrescriptionByPrescriptionId(int Id);
    }
}
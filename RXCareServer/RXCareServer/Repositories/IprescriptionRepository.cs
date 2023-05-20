using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IprescriptionRepository
    {
        void AddPrescription(Prescription prescription);
        List<PrescriptionInfo> GetPrescriptionById(int id);
    }
}
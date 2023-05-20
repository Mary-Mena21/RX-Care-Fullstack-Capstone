using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IprescriptionRepository
    {
        List<PrescriptionInfo> GetPrescriptionById(int id);
    }
}
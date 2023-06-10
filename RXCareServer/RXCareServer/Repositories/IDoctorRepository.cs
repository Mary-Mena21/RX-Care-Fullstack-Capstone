using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IDoctorRepository
    {
        List<DoctorInformationProfile> GetDoctorsInformationProfileList();
    }
}
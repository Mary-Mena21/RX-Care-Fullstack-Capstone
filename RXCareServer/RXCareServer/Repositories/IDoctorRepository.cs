using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IDoctorRepository
    {
        DoctorInformationProfile GetDoctorFullInfo(int Id);
        List<DoctorInformationProfile> GetDoctorsInformationProfileList();
    }
}